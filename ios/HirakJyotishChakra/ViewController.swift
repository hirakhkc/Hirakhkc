import UIKit
import WebKit

final class ViewController: UIViewController, WKNavigationDelegate, WKScriptMessageHandler, UIDocumentInteractionControllerDelegate {
    private var webView: WKWebView!
    private var documentController: UIDocumentInteractionController?

    override func loadView() {
        let controller = WKUserContentController()
        controller.add(self, name: "hirakPrint")
        controller.addUserScript(WKUserScript(
            source: """
            window.print=function(){window.webkit.messageHandlers.hirakPrint.postMessage('print');};
            document.documentElement.classList.add('ios-app');
            (function(){var s=document.createElement('style');s.textContent='html.ios-app body{padding-top:env(safe-area-inset-top);padding-right:env(safe-area-inset-right);padding-bottom:env(safe-area-inset-bottom);padding-left:env(safe-area-inset-left);-webkit-text-size-adjust:100%}html.ios-app input,html.ios-app select,html.ios-app button{font-size:max(16px,1em)}html.ios-app .tabs{-webkit-overflow-scrolling:touch}@media(max-width:600px){html.ios-app main{display:block}html.ios-app .input-panel,html.ios-app .workspace{width:100%;max-width:none}html.ios-app .two,html.ios-app .grid-2{grid-template-columns:1fr}html.ios-app svg.required-chakra{max-width:100%;height:auto}}';document.head.appendChild(s);}());
            """,
            injectionTime: .atDocumentEnd,
            forMainFrameOnly: true
        ))

        let configuration = WKWebViewConfiguration()
        configuration.userContentController = controller
        configuration.websiteDataStore = .default()
        configuration.defaultWebpagePreferences.allowsContentJavaScript = true
        webView = WKWebView(frame: .zero, configuration: configuration)
        webView.navigationDelegate = self
        webView.scrollView.keyboardDismissMode = .interactive
        webView.scrollView.contentInsetAdjustmentBehavior = .automatic
        view = webView
    }

    override func viewDidLoad() {
        super.viewDidLoad()
        guard let url = Bundle.main.url(forResource: "index", withExtension: "html", subdirectory: "Web") else {
            showError("The report interface could not be loaded.")
            return
        }
        webView.loadFileURL(url, allowingReadAccessTo: url.deletingLastPathComponent())
    }

    func webView(_ webView: WKWebView, decidePolicyFor navigationAction: WKNavigationAction, decisionHandler: @escaping (WKNavigationActionPolicy) -> Void) {
        if let url = navigationAction.request.url,
           navigationAction.navigationType == .linkActivated,
           let scheme = url.scheme?.lowercased(), ["http", "https", "mailto", "tel"].contains(scheme) {
            UIApplication.shared.open(url)
            decisionHandler(.cancel)
            return
        }
        decisionHandler(.allow)
    }

    func userContentController(_ userContentController: WKUserContentController, didReceive message: WKScriptMessage) {
        guard message.name == "hirakPrint" else { return }
        createAndSharePDF()
    }

    private func createAndSharePDF() {
        let configuration = WKPDFConfiguration()
        webView.createPDF(configuration: configuration) { [weak self] result in
            DispatchQueue.main.async {
                guard let self else { return }
                switch result {
                case .success(let data):
                    let url = FileManager.default.temporaryDirectory.appendingPathComponent("Hirak-Jyotish-Chakra-Report.pdf")
                    do {
                        try data.write(to: url, options: .atomic)
                        let share = UIActivityViewController(activityItems: [url], applicationActivities: nil)
                        if let popover = share.popoverPresentationController {
                            popover.sourceView = self.view
                            popover.sourceRect = CGRect(x: self.view.bounds.midX, y: self.view.bounds.midY, width: 1, height: 1)
                        }
                        self.present(share, animated: true)
                    } catch {
                        self.showError("The PDF could not be saved. Please try again.")
                    }
                case .failure:
                    self.showError("The PDF could not be created. Please generate the Kundali first.")
                }
            }
        }
    }

    private func showError(_ message: String) {
        let alert = UIAlertController(title: "Hirak Jyotish Chakra", message: message, preferredStyle: .alert)
        alert.addAction(UIAlertAction(title: "OK", style: .default))
        present(alert, animated: true)
    }

    deinit {
        webView?.configuration.userContentController.removeScriptMessageHandler(forName: "hirakPrint")
    }
}
