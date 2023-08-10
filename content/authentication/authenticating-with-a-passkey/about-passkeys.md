---
title: About passkeys
intro: 'Passkeys allow you to sign in safely and easily, without requiring a password and two-factor authentication.'
permissions: 'Personal account owners who manage their own credentials can authenticate to {% data variables.product.prodname_dotcom_the_website %} using passkeys.'
versions:
  feature: passkeys
shortTitle: About passkeys
---
{% note %}

{% data reusables.passkeys.beta-note %}

{% endnote %}

## About passkeys

Passkeys allow you to sign in securely to {% data variables.product.prodname_dotcom_the_website %}, without having to input your password. If you use two-factor authentication (2FA), passkeys satisfy both password and 2FA requirements, so you can complete your sign in with a single step. You can also use passkeys for sudo mode and resetting your password.

Unlike security keys, passkeys have the security benefit of being *user-verifying*. This means passkeys verify your identity using "something you know" or "something you are", such as a PIN or biometric check of your fingerprint or face. When you sign in to {% data variables.product.prodname_dotcom_the_website %} using a passkey, you are using your device's authentication system (such as Mac TouchID, or Windows Hello) to prove your identity, which then unlocks a private key that {% data variables.product.company_short %} can validate.

Since many passkeys are synced across devices and browsers using the same passkey provider (Apple OS, Android, password managers, etc.), once you have set up a synced passkey on one device, that passkey is available to use across multiple devices using the same passkey provider. For example, if you register FaceID as a passkey, you can then use that passkey with your face, fingerprint, PIN, or device password interchangeably across multiple devices tied to the same iCloud account. For more information about adding a passkey to your account, see "[AUTOTITLE](/authentication/authenticating-with-a-passkey/managing-your-passkeys)."

Passkeys can also be used across nearby devices. For example, perhaps you want to sign in to {% data variables.product.prodname_dotcom_the_website %} using a laptop that's not set up with a passkey. If you have registered your phone as a passkey, you might opt to scan a QR code, or trigger a push notification to your phone, in order to complete the sign in securely. For more information, see "[Signing in with a passkey using a nearby device](/authentication/authenticating-with-a-passkey/signing-in-with-a-passkey#signing-in-with-a-passkey-using-a-nearby-device)."

Since your passkey is protected by the passkey provider's account system (iCloud, Google account, password manager account, etc.), you cannot get locked out of your {% data variables.product.company_short %} account unless you've also been locked out of your platform account.

For 2FA users, if you already have passkey-eligible security keys registered to your account for 2FA, you can easily upgrade these existing security keys into passkeys in your account settings. When you use an eligible security key to sign in, you'll also be asked if you want to upgrade it to a passkey. For more information, see "[Upgrading an existing security key to a passkey](/authentication/authenticating-with-a-passkey/managing-your-passkeys#upgrading-an-existing-security-key-to-a-passkey)."

For information on whether your device and operating system support passkeys, see [Device support](https://passkeys.dev/device-support/) in the Passkeys.dev documentation, and [Web Authentication API](https://caniuse.com/webauthn) in the CanIUse documentation.

## Enabling and disabling the feature preview for passkeys

{% data reusables.passkeys.enable-disable-passkey-beta %}

## Feedback

You can share your feedback on passkeys with {% data variables.product.company_short %}. To join the conversation, see "[Passkey feature preview feedback](https://gh.io/passkey-feedback)."

## Further reading
- [AUTOTITLE](/authentication/authenticating-with-a-passkey/managing-your-passkeys)
- [AUTOTITLE](/authentication/authenticating-with-a-passkey/signing-in-with-a-passkey)
- [AUTOTITLE](/authentication/securing-your-account-with-two-factor-authentication-2fa/about-two-factor-authentication)
