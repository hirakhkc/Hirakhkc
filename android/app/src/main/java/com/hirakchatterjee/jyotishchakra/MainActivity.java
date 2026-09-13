package com.hirakchatterjee.jyotishchakra;

import android.app.Activity;
import android.content.Intent;
import android.graphics.Color;
import android.net.Uri;
import android.os.Bundle;
import android.print.PrintAttributes;
import android.print.PrintDocumentAdapter;
import android.print.PrintManager;
import android.webkit.JavascriptInterface;
import android.webkit.WebChromeClient;
import android.webkit.WebResourceRequest;
import android.webkit.WebResourceResponse;
import android.webkit.WebSettings;
import android.webkit.WebView;
import android.webkit.WebViewClient;
import java.io.IOException;

public class MainActivity extends Activity {
    private WebView webView;

    @Override public void onCreate(Bundle state) {
        super.onCreate(state);
        webView = new WebView(this);
        webView.setBackgroundColor(Color.rgb(238, 232, 220));
        setContentView(webView);

        WebSettings settings = webView.getSettings();
        settings.setJavaScriptEnabled(true);
        settings.setDomStorageEnabled(true);
        settings.setAllowFileAccess(true);
        settings.setAllowContentAccess(false);
        settings.setAllowFileAccessFromFileURLs(false);
        settings.setAllowUniversalAccessFromFileURLs(false);
        settings.setBuiltInZoomControls(true);
        settings.setDisplayZoomControls(false);
        settings.setLoadWithOverviewMode(false);
        settings.setUseWideViewPort(false);
        settings.setTextZoom(100);

        webView.addJavascriptInterface(new PrintBridge(), "AndroidPrint");
        webView.addJavascriptInterface(new LicenseBridge(), "AndroidLicense");
        webView.setWebChromeClient(new WebChromeClient());
        webView.setWebViewClient(new WebViewClient() {
            @Override public WebResourceResponse shouldInterceptRequest(WebView view, WebResourceRequest request) {
                Uri uri = request.getUrl();
                if ("appassets.androidplatform.net".equalsIgnoreCase(uri.getHost())) {
                    String path = uri.getPath();
                    if (path == null || "/".equals(path)) path = "/index.html";
                    try {
                        String asset = "web" + path;
                        String mime = path.endsWith(".css") ? "text/css" :
                            path.endsWith(".js") ? "application/javascript" :
                            (path.endsWith(".jpeg") || path.endsWith(".jpg")) ? "image/jpeg" :
                            path.endsWith(".png") ? "image/png" : "text/html";
                        return new WebResourceResponse(mime, mime.startsWith("image/") ? null : "UTF-8", getAssets().open(asset));
                    } catch (IOException ignored) { return null; }
                }
                return super.shouldInterceptRequest(view, request);
            }
            @Override public boolean shouldOverrideUrlLoading(WebView view, WebResourceRequest request) {
                Uri uri = request.getUrl();
                if ("appassets.androidplatform.net".equalsIgnoreCase(uri.getHost())) return false;
                startActivity(new Intent(Intent.ACTION_VIEW, uri));
                return true;
            }
        });
        webView.loadUrl("file:///android_asset/web/index.html");
    }

    public final class PrintBridge {
        @JavascriptInterface public void printReport() {
            runOnUiThread(() -> {
                PrintManager manager = (PrintManager) getSystemService(PRINT_SERVICE);
                PrintDocumentAdapter adapter = webView.createPrintDocumentAdapter("Jyotish Chakra Kundali");
                manager.print("Jyotish Chakra Kundali", adapter,
                    new PrintAttributes.Builder().setMediaSize(PrintAttributes.MediaSize.ISO_A4).build());
            });
        }
    }

    public final class LicenseBridge {
        @JavascriptInterface public boolean isActivated() {
            return getSharedPreferences("jyotish_paid_license", MODE_PRIVATE)
                .getBoolean("paid_v18", false);
        }
        @JavascriptInterface public void setActivated() {
            getSharedPreferences("jyotish_paid_license", MODE_PRIVATE)
                .edit().putBoolean("paid_v18", true).apply();
        }
    }

    @Override public void onBackPressed() {
        if (webView.canGoBack()) webView.goBack(); else super.onBackPressed();
    }

    @Override protected void onDestroy() {
        if (webView != null) { webView.removeAllViews(); webView.destroy(); }
        super.onDestroy();
    }
}
