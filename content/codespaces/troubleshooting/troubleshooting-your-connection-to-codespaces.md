---
title: Troubleshooting your connection to Codespaces
intro: 'Troubleshooting help for connecting to {% data variables.product.prodname_codespaces %}.'
product: '{% data reusables.gated-features.codespaces %}'
versions:
  fpt: '*'
type: reference
topics:
  - Codespaces
shortTitle: Connection
---

## 503 codespace service unavailable

Codespaces are set to stop after 30 mintues without any activity. If you try to interact with a codespace after it has stopped, you may see a `503 service unavailable` error. 

- If a **Start** button is shown in {% data variables.product.prodname_vscode %} or in your browser window, click **Start** to reconnect to the codespace.
- Reset your codespace by reloading the window. From the [command palette](/codespaces/codespaces-reference/using-the-command-palette-in-codespaces#accessing-the-command-palette) in {% data variables.product.prodname_vscode %}, click **Developer: Reload Window**.

## Browser cannot connect

Sometimes you may not be able to access a codespace from your browser. If this happens, go to https://github.com/codespaces and try connecting to the codespace from that page.

  - If the codespace is not listed on that page, check that you are the owner of the codespace you are trying to connect to. You can only open a codespace that you created. The URLs for your codespaces always include your {% data variables.product.company_short %} handle.
  - If the codespace is listed but you cannot connect from that page, check whether you can connect using a different browser.

Your company network may be blocking the connection. If possible, check any logging for rejected connections on your device.

If you still cannot connect, {% data reusables.codespaces.contact-support %}

## {% data variables.product.prodname_github_codespaces %} extension for {% data variables.product.prodname_vscode %} cannot connect

If you cannot connect to a codespace from {% data variables.product.prodname_vscode %} desktop, use the following troubleshooting steps.

1. Check that you have the latest version of the {% data variables.product.prodname_github_codespaces %} extension installed. The extension is a preview release and frequent updates are released.
   1. In {% data variables.product.prodname_vscode %}, display the "Extensions" tab.
   2. Select the {% data variables.product.prodname_github_codespaces %} extension to display the extension's overview page.
   3. If an update is available, a button is shown, click **Update to X.X.X** to upgrade to the latest version.
2. Check whether you are using the stable build of {% data variables.product.prodname_vscode %} or the [{% data variables.product.prodname_vscode %} Insiders](https://code.visualstudio.com/insiders/) release (nightly updates). If you are using the insiders release, try installing the [stable build](https://code.visualstudio.com/).
3. Your company network may be blocking the connection. If possible, check any logging for rejected connections on your device.

If you still cannot connect, {% data reusables.codespaces.contact-support %}

### The codespace has latency issues

If the codespace seems particularly slow or has latency issues, it is possible that it has been created in a region that is far from you. To resolve this, you can [manually set your {% data variables.product.prodname_github_codespaces %} region](/codespaces/managing-your-codespaces/setting-your-default-region-for-codespaces).
