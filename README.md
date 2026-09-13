# Hirak Jyotish Chakra 3.2.0

Offline Vedic astrology application created and directed by **Hirak Chatterjee**.

## Editions

- `android/` — Android 8.0 (API 26) and later; target/compile SDK 36
- `windows/` — Windows 10/11 x64 offline desktop installer

Both editions contain the same v3.2.0 report engine, stepped Chakra geometry, English/Hindi/Bengali interface, time-zone presentation, personalised guidance, and Demo/Paid activation flow.

## Automatic builds

GitHub Actions builds both installable editions after every push to `main` and on manual dispatch:

- **Android APK**: `Hirak_Jyotish_Chakra_Android_v3.2.0-debug.apk`
- **Windows EXE**: `Hirak_Jyotish_Chakra_Windows_Setup_v3.2.0.exe`

Open the latest run under the repository's **Actions** tab and download the corresponding artifact.

## Release signing

The automatic APK is a debug-signed sideload build for direct installation and testing. A Google Play release requires a permanent private upload keystore and an AAB signed with that key. The Windows installer is currently unsigned and Windows SmartScreen may show a warning until a code-signing certificate is configured.

## Disclaimer

Astrological guidance is for personal and entertainment purposes and is not guaranteed medical, legal, or financial advice.

