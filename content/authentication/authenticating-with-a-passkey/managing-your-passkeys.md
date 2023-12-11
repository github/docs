---
title: Managing your passkeys
intro: 'You may be prompted to register a passkey during sign-in, or you can choose to register a new passkey in your account settings. For 2FA users, you can upgrade existing eligible security keys into passkeys.'
permissions: 'Personal account owners who manage their own credentials can authenticate to {% data variables.product.prodname_dotcom_the_website %} using passkeys.'
versions:
  feature: passkeys
type: how_to
shortTitle: Manage your passkeys
---

## Managing Your Passkeys

When signing in to {% data variables.product.prodname_dotcom_the_website %}, you might be asked to register a passkey for enhanced security. Alternatively, you can manage passkeys through your account settings. If you're a 2FA user, eligible security keys can be upgraded to passkeys.

### Who Can Use Passkeys?

Personal account owners managing their own credentials can authenticate to {% data variables.product.prodname_dotcom_the_website %} using passkeys.

---

## How to Manage Passkeys

### Adding a Passkey to Your Account

To register a passkey during sign-in or through account settings:

1. Go to your account settings.
2. If prompted, authenticate with your password or another existing method.
3. Find "Configure passwordless authentication" and select "Upgrade your security key registration to a passkey".
4. Review the security key information and click **Upgrade to passkey**.
5. Follow the steps provided by the passkey provider when prompted.

### Upgrading an Existing Security Key

Before starting the upgrade process, ensure you are using the device linked to the existing security key. Here's how to upgrade:

{% note %}

**Note:**

- Platform support for upgrading security keys may vary. If you encounter issues, consider removing and re-registering the security key.
- Eligible keys will display an upgrade button in the settings menu. If not, try registering them as a passkey to initiate the upgrade.

{% endnote %}

1. Access your account settings.
2. Under security settings, select the option to upgrade your security key.
3. Confirm the key to be upgraded and click **Upgrade to passkey**.
4. Follow the instructions from your passkey provider when prompted.

### Removing a Passkey

To remove a passkey from your account:

1. Access your account settings.
2. Navigate to security settings.
3. Find the passkey you want to remove and click **{% octicon "trash" aria-label="Delete passkey" %}**.
4. Confirm deletion.

---

## Recovering and Understanding Passkeys

- **Recovering Passkeys:** Some passkeys support syncing through providers like iCloud or Google accounts, allowing recovery if your device is lost. Others might be device-bound and cannot be recovered if the device is lost or wiped.
- **Device-Bound Passkeys:** Consider registering passkeys on multiple devices if using device-bound passkeys to prevent access loss.

You can identify synced passkeys with a `Synced` label in your account security settings under "Passkeys".

---

### Learn More:

- [About Passkeys](/authentication/authenticating-with-a-passkey/about-passkeys)
- [Signing in with a Passkey](/authentication/authenticating-with-a-passkey/signing-in-with-a-passkey)

---
