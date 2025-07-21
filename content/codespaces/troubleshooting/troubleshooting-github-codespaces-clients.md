---
title: Troubleshooting GitHub Codespaces clients
shortTitle: Codespaces clients
intro: 'This article provides troubleshooting information for issues you may encounter with the client you use for {% data variables.product.prodname_github_codespaces %}.'
versions:
  fpt: '*'
  ghec: '*'
type: reference
topics:
  - Codespaces
redirect_from:
  - /codespaces/troubleshooting/troubleshooting-codespaces-clients
---

{% webui %}

## Troubleshooting the {% data variables.product.prodname_vscode %} web client

If you encounter issues using {% data variables.product.prodname_github_codespaces %} in a browser that is not Chromium-based, try switching to a Chromium-based browser, such as Google Chrome or Microsoft Edge. Alternatively, check for known issues with your browser in the [`microsoft/vscode`](https://github.com/microsoft/vscode/issues?q=is%3Aissue+is%3Aopen) repository by searching for issues labeled with the name of your browser, such as [`firefox`](https://github.com/microsoft/vscode/issues?q=is%3Aissue+is%3Aopen+label%3Afirefox) or [`safari`](https://github.com/Microsoft/vscode/issues?q=is%3Aopen+is%3Aissue+label%3Asafari).

If you encounter issues using {% data variables.product.prodname_github_codespaces %} in a Chromium-based browser, you can check if you're experiencing another known issue with {% data variables.product.prodname_vscode_shortname %} in the [`microsoft/vscode`](https://github.com/microsoft/vscode/issues?q=is%3Aissue+is%3Aopen) repository.

### Differences from working in {% data variables.product.prodname_vscode_shortname %} locally

When you open a codespace in your browser, using the {% data variables.product.prodname_vscode_shortname %} web client, you will notice some differences from working in a local workspace in the {% data variables.product.prodname_vscode_shortname %} desktop application. For example, some key bindings will be different or missing, and some extensions may behave differently. For a summary, see: [Known limitations and adaptions](https://code.visualstudio.com/docs/remote/codespaces#_known-limitations-and-adaptations) in the {% data variables.product.prodname_vscode_shortname %} docs.

You can check for known issues and log new issues with the {% data variables.product.prodname_vscode_shortname %} experience in the [`microsoft/vscode`](https://github.com/microsoft/vscode/issues?q=is%3Aissue+is%3Aopen+codespaces) repository.

### {% data variables.product.prodname_vscode %} Insiders

{% data variables.product.prodname_vscode %} Insiders is the most frequent release of {% data variables.product.prodname_vscode_shortname %}. It has all the latest features and bug fixes, but may also occasionally contain new issues that result in a broken build.

If you are using an Insiders build and notice broken behavior, we recommend switching to {% data variables.product.prodname_vscode %} Stable and trying again.

Click {% octicon "gear" aria-label="Manage" %} in the bottom left of the editor and select **Switch to Stable Version...**. If the {% data variables.product.prodname_vscode_shortname %} web client doesn't load, or {% octicon "gear" aria-label="Manage" %} isn't available, you can force switching to {% data variables.product.prodname_vscode %} Stable by appending `?vscodeChannel=stable` to your codespace URL and loading the codespace at that URL.

If the problem isn't fixed in {% data variables.product.prodname_vscode %} Stable, check for known issues and, if required, log a new issue with the {% data variables.product.prodname_vscode_shortname %} experience, in the [`microsoft/vscode`](https://github.com/microsoft/vscode/issues?q=is%3Aissue+is%3Aopen+codespaces) repository.

{% data reusables.codespaces.troubleshooting-simple-browser %}

{% endwebui %}

{% vscode %}

## {% data variables.product.prodname_vscode_shortname %} troubleshooting

When you open a codespace in the {% data variables.product.prodname_vscode_shortname %} desktop application, you may notice a few differences compared with working in a local workspace, but the experience should be similar.

If you encounter problems, you can check for known issues and log new issues with the {% data variables.product.prodname_vscode_shortname %} experience in the [`microsoft/vscode`](https://github.com/microsoft/vscode/issues?q=is%3Aissue+is%3Aopen+codespaces) repository.

### {% data variables.product.prodname_vscode %} Insiders

{% data variables.product.prodname_vscode %} Insiders is the most frequent release of {% data variables.product.prodname_vscode_shortname %}. It has all the latest features and bug fixes, but may also occasionally contain new issues that result in a broken build.

If you are using an Insiders build and notice broken behavior, we recommend switching to {% data variables.product.prodname_vscode %} Stable and trying again.

To switch to {% data variables.product.prodname_vscode %} Stable, close the {% data variables.product.prodname_vscode %} Insiders application, open the {% data variables.product.prodname_vscode %} Stable application, and re-open your codespace.

If the problem isn't fixed in {% data variables.product.prodname_vscode %} Stable, check for known issues and, if required, log a new issue with the {% data variables.product.prodname_vscode_shortname %} experience, in the [`microsoft/vscode`](https://github.com/microsoft/vscode/issues?q=is%3Aissue+is%3Aopen+codespaces) repository.

{% data reusables.codespaces.troubleshooting-simple-browser %}

{% endvscode %}
