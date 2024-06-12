---
title: About passkeys
intro: 'Passkeys allow you to sign in safely and easily, without requiring a password and two-factor authentication.'
permissions: 'Personal account owners who manage their own credentials can authenticate to {% data variables.product.prodname_dotcom_the_website %} using passkeys.'
versions:
  feature: passkeys
shortTitle: About passkeys
---

## About passkeys

{% data reusables.passkeys.about-passkeys %}

Passkeys are pairs of cryptographic keys (a public key and a private key) that are stored by an authenticator you control. The authenticator can prove that a user is present and is authorized to use the passkey. Authenticators prove authorization with a PIN, passcode, biometric, or device password, depending on the authenticator's capabilities and configuration. Authenticators come in many forms, such as an iPhone or Android device, Windows Hello, a FIDO2 hardware security key, or a password manager.

When you sign in to {% data variables.product.prodname_dotcom_the_website %} using a passkey, your authenticator uses public key cryptography to prove your identity to {% data variables.product.company_short %} without ever sending the passkey. Passkeys are bound to a website domain, like `{% data variables.product.prodname_dotcom_the_website %}`, and require a secure connection, meaning that the web browser will refuse to authenticate to a lookalike phishing website. These properties make passkeys highly phishing-resistant, and much harder to attack than SMS or TOTP 2FA, which can be phished.

Cloud-backed passkey services allow passkeys to be synced across devices (such as Apple devices, Android devices, or password managers) so they can be used from more places and are less easily lost. Once you have set up a synced passkey on one device, that passkey is available to use across multiple devices using the same service. For example, if you register a passkey with your iCloud account using your MacBook's Touch ID, you can then use that passkey with your face, fingerprint, PIN, or device password interchangeably across multiple devices tied to the same iCloud account.

For more information about adding a passkey to your account, see "[AUTOTITLE](/authentication/authenticating-with-a-passkey/managing-your-passkeys)."

For 2FA users, if you already have passkey-eligible security keys registered to your account for 2FA, you can upgrade these existing credentials into passkeys in your account settings. When you use an eligible security key to sign in, you'll also be asked if you want to upgrade it to a passkey. For more information, see "[AUTOTITLE](/authentication/authenticating-with-a-passkey/managing-your-passkeys#upgrading-an-existing-security-key-to-a-passkey)."

## About authenticators

Some authenticators allow passkeys to be used with nearby devices. For example, perhaps you want to sign in to {% data variables.product.prodname_dotcom_the_website %} using a bluetooth-enabled laptop that's not set up with a passkey. If you have registered a passkey on your phone, you might opt to scan a QR code, or trigger a push notification to your phone, in order to complete the sign in securely. For more information, see "[AUTOTITLE](/authentication/authenticating-with-a-passkey/signing-in-with-a-passkey#signing-in-with-a-passkey-using-a-nearby-device)."

Other authenticators create device-bound passkeys, meaning they can only be used on a single authenticator. These passkeys cannot be backed up or moved to another authenticator. Some passkey providers may offer device-bound passkeys as an option during passkey creation, while other providers may not offer the choice between device-bound and synced passkeys.

Authenticators can also be portable devices. Passkeys stored on FIDO2 hardware security keys are also "device-bound," but they have the advantage of being portable and can be attached to other devices in a variety of ways (USB, NFC or Bluetooth). On some platform and web browser combinations, FIDO2 security keys may be the only way to use passkeys.

For information on whether your device and operating system support passkeys, see [Device support](https://passkeys.dev/device-support/) in the Passkeys.dev documentation, and [Web Authentication API](https://caniuse.com/webauthn) in the CanIUse documentation.

## Feedback

You can share your feedback on passkeys with {% data variables.product.company_short %}. To join the conversation, see "[[Feedback] Passkeys for passwordless authentication](https://gh.io/passkey-feedback)."

## Further reading

- [AUTOTITLE](/authentication/authenticating-with-a-passkey/managing-your-passkeys)
- [AUTOTITLE](/authentication/authenticating-with-a-passkey/signing-in-with-a-passkey)
- [AUTOTITLE](/authentication/securing-your-account-with-two-factor-authentication-2fa/about-two-factor-authentication)
