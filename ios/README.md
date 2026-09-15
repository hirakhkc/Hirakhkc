# Hirak Jyotish Chakra for iPhone and iPad — v3.2.0

Native iOS wrapper for the same v3.2.0 horoscope engine used by the Android and Windows editions.

## Included

- Responsive iPhone/iPad interface with safe-area support.
- English, Hindi and Bengali report conversion.
- Required North Indian stepped Chakra geometry throughout the report.
- Birthplace and current-residence suggestions with automatic coordinates/time-zone lookup.
- Detailed life-stage guidance and rolling 12-month forecast.
- One free Kundali in Demo Version; activation changes the label to Paid Version.
- Native iOS PDF generation and Share/Print sheet.
- Persistent activation and saved custom places through WKWebView local storage.

## Open and test

1. Use macOS with Xcode 16 or later.
2. Install XcodeGen (`brew install xcodegen`) and run `xcodegen generate` in this folder.
3. Open `HirakJyotishChakra.xcodeproj`, then select the `HirakJyotishChakra` target and Signing & Capabilities.
4. Choose your Apple Developer Team and use a unique Bundle Identifier if required.
5. Select an iPhone/iPad simulator or connected device and press Run.

## Convenient distribution

Apple does not permit a universal unsigned IPA. For other people's iPhones, distribute through TestFlight or the App Store. A paid Apple Developer Program membership, App Store Connect record, signing certificate and provisioning profile are required. For private device testing, Xcode can install to a connected device using the developer's Apple ID, subject to Apple's limits.

## App Store notes

- The astrology content is personal guidance/entertainment and not medical, legal or financial advice.
- If unlocking digital features inside an App Store build, Apple may require In-App Purchase rather than external UPI payment. Review the latest App Review Guidelines before submission.
- Complete the privacy questionnaire accurately. The current app does not require account creation; place-search queries are sent to the configured external place/time-zone services.
