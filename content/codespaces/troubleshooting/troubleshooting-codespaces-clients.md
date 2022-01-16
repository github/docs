---
title: Troubleshooting Codespaces clients
intro: 'You can use {% data variables.product.prodname_codespaces %} in your browser or through {% data variables.product.prodname_vscode %}. This article provides troubleshooting steps for common client issues.'
product: '{% data reusables.gated-features.codespaces %}'
versions:
  fpt: '*'
type: reference
topics:
  - Codespaces
shortTitle: Codespaces clients
---

## {% data variables.product.prodname_vscode %} troubleshooting

When you connect a desktop version of {% data variables.product.prodname_vscode %} to a codespace, you will notice few differences compared with working in a normal workspace but the experience will be fairly similar. 

When you open a codespace in your browser using {% data variables.product.prodname_vscode %} in the web, you will notice more differences. For example, some key bindings will be different or missing, and some extensions may behave differently. For a summary, see: "[Known limitations and adaptions](https://code.visualstudio.com/docs/remote/codespaces#_known-limitations-and-adaptations)" in the {% data variables.product.prodname_vscode %} docs.

You can check for known issues and log new issues with the {% data variables.product.prodname_vscode %} experience in the [`microsoft/vscode`](https://github.com/microsoft/vscode/issues?q=is%3Aissue+is%3Aopen+codespaces) repository.

## Browser troubleshooting

If you encounter issues using codespaces in a browser that is not Chromium-based, try switching to a Chromium-based browser, or check for known issues with your browser in the `microsoft/vscode` repository by searching for issues labeled with the name of your browser, such as [`firefox`](https://github.com/microsoft/vscode/issues?q=is%3Aissue+is%3Aopen+label%3Afirefox) or [`safari`](https://github.com/Microsoft/vscode/issues?q=is%3Aopen+is%3Aissue+label%3Asafari).

If you encounter issues using codespaces in a Chromium-based browser, you can check if you're experiencing another known issue with {% data variables.product.prodname_vscode %} in the [`microsoft/vscode`](https://github.com/microsoft/vscode/issues) repository.
