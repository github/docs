---
title: Troubleshooting GitHub Codespaces clients
allowTitleToDifferFromFilename: true
intro: 'You can use {% data variables.product.prodname_github_codespaces %} in your browser or through {% data variables.product.prodname_vscode %}. This article provides troubleshooting steps for common client issues.'
product: '{% data reusables.gated-features.codespaces %}'
versions:
  fpt: '*'
  ghec: '*'
type: reference
topics:
  - Codespaces
shortTitle: Codespaces clients
---

## {% data variables.product.prodname_vscode %} troubleshooting

When you connect a desktop version of {% data variables.product.prodname_vscode %} to a codespace, you will notice few differences compared with working in a normal workspace but the experience will be fairly similar. 

When you open a codespace in your browser using {% data variables.product.prodname_vscode %} in the web, you will notice more differences. For example, some key bindings will be different or missing, and some extensions may behave differently. For a summary, see: "[Known limitations and adaptions](https://code.visualstudio.com/docs/remote/codespaces#_known-limitations-and-adaptations)" in the {% data variables.product.prodname_vscode %} docs.

You can check for known issues and log new issues with the {% data variables.product.prodname_vscode %} experience in the [`microsoft/vscode`](https://github.com/microsoft/vscode/issues?q=is%3Aissue+is%3Aopen+codespaces) repository.

### {% data variables.product.prodname_vscode %} Insiders

{% data variables.product.prodname_vscode %} Insiders is the most frequent release of {% data variables.product.prodname_vscode %}. It has all the latest features and bug fixes, but may also occasionally contain new issues that result in a broken build.

If you are using an Insiders build and notice broken behavior, we recommend switching to {% data variables.product.prodname_vscode %} Stable and trying again.

On the desktop version of {% data variables.product.prodname_vscode %}, you can switch to Stable by closing the {% data variables.product.prodname_vscode %} Insiders application, opening the {% data variables.product.prodname_vscode %} Stable application, and re-opening your codespace.

On the web version of {% data variables.product.prodname_vscode %}, you can click {% octicon "gear" aria-label="The manage icon" %} in the bottom left of the editor and select **Switch to Stable Version...**. If the web version doesn't load or the {% octicon "gear" aria-label="The manage icon" %} icon isn't available, you can force switching to {% data variables.product.prodname_vscode %} Stable by appending `?vscodeChannel=stable` to your codespace URL and loading the codespace at that URL.

If the problem isn't fixed in {% data variables.product.prodname_vscode %} Stable, please follow the above troubleshooting instructions.

## Browser troubleshooting

If you encounter issues using codespaces in a browser that is not Chromium-based, try switching to a Chromium-based browser, or check for known issues with your browser in the `microsoft/vscode` repository by searching for issues labeled with the name of your browser, such as [`firefox`](https://github.com/microsoft/vscode/issues?q=is%3Aissue+is%3Aopen+label%3Afirefox) or [`safari`](https://github.com/Microsoft/vscode/issues?q=is%3Aopen+is%3Aissue+label%3Asafari).

If you encounter issues using codespaces in a Chromium-based browser, you can check if you're experiencing another known issue with {% data variables.product.prodname_vscode %} in the [`microsoft/vscode`](https://github.com/microsoft/vscode/issues) repository.
