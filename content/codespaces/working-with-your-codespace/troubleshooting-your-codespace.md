---
title: Troubleshooting your codespace
intro: You can troubleshoot problems with a codespace by checking for known issues in the `microsoft/vscode` repository.
product: '{% data reusables.gated-features.codespaces %}'
redirect_from:
  - /github/developing-online-with-github-codespaces/troubleshooting-your-codespace
  - /github/developing-online-with-codespaces/troubleshooting-your-codespace
versions:
  free-pro-team: '*'
topics:
  - Codespaces
---

{% data reusables.codespaces.release-stage %}

{% data reusables.codespaces.beta-functionality-limited %}

{% data reusables.codespaces.unsupported-repos %}

{% data reusables.codespaces.recovery-mode %}

```
This codespace is currently running in recovery mode due to a container error.
```

Review the creation logs, update the configuration as needed, and run the "Rebuild Container" command to retry. For more information, see "[Configuring {% data variables.product.prodname_codespaces %} for your project](/github/developing-online-with-codespaces/configuring-codespaces-for-your-project#apply-changes-to-your-configuration)."

If you encounter issues while using a browser that is not Chromium-based, try switching to a Chromium-based browser, or check for known issues with your browser in the `microsoft/vscode` repository by searching for issues labeled with the name of your browser, such as[`firefox`](https://github.com/microsoft/vscode/issues?q=is%3Aissue+is%3Aopen+label%3Afirefox) or [`safari`](https://github.com/Microsoft/vscode/issues?q=is%3Aopen+is%3Aissue+label%3Asafari).

If you encounter issues while using a Chromium-based browser, you can check if you're experiencing another known issue with {% data variables.product.prodname_vscode %} in the [`microsoft/vscode`](https://github.com/microsoft/vscode/issues) repository.

If you still need help, you can contact us. For more information, see "[About {% data variables.product.prodname_codespaces %}](/github/developing-online-with-codespaces/about-codespaces#contacting-us-about-codespaces)."
