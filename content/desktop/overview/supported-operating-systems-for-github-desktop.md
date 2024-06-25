---
title: Supported operating systems for GitHub Desktop
intro: 'You can use {% data variables.product.prodname_desktop %} on any supported operating system.'
redirect_from:
  - /desktop/getting-started-with-github-desktop/supported-operating-systems
  - /desktop/installing-and-configuring-github-desktop/supported-operating-systems
  - /desktop/installing-and-configuring-github-desktop/overview/supported-operating-systems
  - /desktop/installing-and-configuring-github-desktop/overview/supported-operating-systems-for-github-desktop
versions:
  feature: desktop
shortTitle: Supported OS
---
## About supported operating systems

The following operating systems are supported for {% data variables.product.prodname_desktop %}.
* {% data variables.desktop.mac-osx-versions %}
* {% data variables.desktop.windows-versions %}. You must have a 64-bit operating system to run {% data variables.product.prodname_desktop %}.

## Troubleshooting problems on macOS

If you're encountering problems using {% data variables.product.prodname_desktop %} on macOS, here are resolutions to try. For more information, see [`known-issues`](https://github.com/desktop/desktop/blob/development/docs/known-issues.md).

### `The username or passphrase you entered is not correct` error after signing into your account

This error can occur when {% data variables.product.prodname_desktop %} can't access your stored credentials on Keychain.

To troubleshoot this error, follow these steps.

1. Open the "Keychain Access" app.
1. In the left sidebar, in the list of keychains, right-click **login** and then click **Lock Keychain "login"**.
1. Right-click **login** and click **Unlock Keychain "login"**. Follow any onscreen prompts to finish unlocking the Keychain "login."
1. Re-authenticate your account on {% data variables.product.prodname_dotcom %} or {% data variables.product.prodname_enterprise %}.

### `Could not create temporary directory: Permission denied` error after checking for updates

This error can be caused by missing permissions for the `~/Library/Caches/com.github.GitHubClient.ShipIt` directory. {% data variables.product.prodname_desktop %} uses this directory to create and unpack temporary files as part of updating the application.

To troubleshoot this error, follow these steps.

1. Close {% data variables.product.prodname_desktop %}.
1. Open "Finder" and navigate to `~/Library/Caches/`.
1. Right-click `com.github.GitHubClient.ShipIt` and then click **Get Info**.
1. Click the arrow to the left of "Sharing & Permissions."
1. If the Privilege to the right of your user account does not say "Read & Write," click the text and then click **Read & Write**.
   ![Screenshot of the info window on a Mac. Under "Sharing and permissions", a context menu is open, with "Read & Write" marked by a checkmark.](/assets/images/help/desktop/mac-adjust-permissions.png)
1. Open {% data variables.product.prodname_desktop %} and check for updates.

## Troubleshooting problems on Windows

If you're encountering problems using {% data variables.product.prodname_desktop %} on Windows, here are resolutions to try. For more information, see [`known-issues`](https://github.com/desktop/desktop/blob/development/docs/known-issues.md).

### `The revocation function was unable to check revocation for the certificate.` error

This error can occur if you are using {% data variables.product.prodname_desktop %} on a corporate network that blocks Windows from checking the revocation status of a certificate.

To troubleshoot, contact your system administrator.

### `git clone failed` error while cloning a repository configured with Folder Redirection

{% data variables.product.prodname_desktop %} does not support repositories configured with Folder Redirection.

### `cygheap base mismatch detected` error

This error can occur when Mandatory ASLR is enabled. Enabling Mandatory ASLR affects the MSYS2 core library, which {% data variables.product.prodname_desktop %} relies upon to emulate process forking.

To troubleshoot this error, either disable Mandatory ASLR or explicitly allow all executables under `<Git>\usr\bin` which depend on MSYS2.

### `This operating system is no longer supported. Software updates have been disabled` notification

This notification is shown if you are running a version of Windows that is no longer compatible with {% data variables.product.prodname_desktop %}. {% data variables.product.prodname_desktop %} supports {% data variables.desktop.windows-versions %}. If you are running a supported Windows operating system and are seeing this notification, this may be because compatibility mode has been enabled for {% data variables.product.prodname_desktop %}. To check if compatibility mode is enabled, follow these steps.

1. Open the Windows **Start Menu**.
1. Search for "{% data variables.product.prodname_desktop %}".
1. Select and hold (or right-click) **{% data variables.product.prodname_desktop %}** and click **Open file location**.
1. Select and hold (or right-click) the {% data variables.product.prodname_desktop %} shortcut and click **Properties**.
1. Select the **Compatibility** tab.
1. In the "Compatibility mode" section, ensure that the **Run this program in compatibility mode** checkbox is deselected.
