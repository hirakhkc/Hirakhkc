# Hirak Jyotish Chakra — Android 3.2.0

Fresh Android Studio source for a mobile-first Vedic Kundali application created and directed by Hirak Chatterjee.

Version 3.2.0 preserves the Demo/Paid activation flow and adds the requested stepped Chakra geometry, country-friendly time-zone display, and expanded personalised life-stage guidance.

## Supported devices

- Android 8.0 (API 26) and later
- Target/compile SDK 36 (Android 16)
- Portrait and landscape layouts
- No native CPU libraries, so the same build supports ARM and x86 Android devices

## Build the release APK/AAB

1. Open this folder in the current stable Android Studio.
2. Let Gradle synchronize and install Android SDK 36 when requested.
3. For phone testing, choose **Build > Build APK(s)**.
4. For Google Play, choose **Build > Generate Signed Bundle/APK > Android App Bundle**.
5. Create one permanent release keystore, store it safely, and use the same key for every update.

## Important release checks

- Test installation on at least one Samsung Android 16 phone and one Android 8–13 phone.
- Test English, Hindi and Bengali after a clean installation.
- Test activation, screen rotation, place lookup, chart tabs, report generation and printing.
- Upload an AAB—not a sideload APK—to Google Play production.

The app's guidance is astrological/entertainment content and must not be presented as guaranteed medical, legal or financial advice.
