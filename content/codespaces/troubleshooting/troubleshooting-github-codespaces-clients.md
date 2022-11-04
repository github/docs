---
title: Troubleshooting GitHub Codespaces clients
shortTitle: Codespaces clients
intro: 'This article provides troubleshooting information for issues you may encounter with the client you use for {% data variables.product.prodname_github_codespaces %}.'
miniTocMaxHeadingLevel: 3
versions:
  fpt: '*'
  ghec: '*'
type: reference
topics:
  - Codespaces
redirect_from:
  - /codespaces/troubleshooting/troubleshooting-codespaces-clients
---

{% jetbrains %}

{% data reusables.codespaces.codespaces-jetbrains-beta-note %}

{% endjetbrains %}

{% webui %}

## Troubleshooting the {% data variables.product.prodname_vscode %} web client

If you encounter issues using {% data variables.product.prodname_github_codespaces %} in a browser that is not Chromium-based, try switching to a Chromium-based browser, such as Google Chrome or Microsoft Edge. Alternatively, check for known issues with your browser in the [`microsoft/vscode`](https://github.com/microsoft/vscode/issues?q=is%3Aissue+is%3Aopen) repository by searching for issues labeled with the name of your browser, such as [`firefox`](https://github.com/microsoft/vscode/issues?q=is%3Aissue+is%3Aopen+label%3Afirefox) or [`safari`](https://github.com/Microsoft/vscode/issues?q=is%3Aopen+is%3Aissue+label%3Asafari).

If you encounter issues using {% data variables.product.prodname_github_codespaces %} in a Chromium-based browser, you can check if you're experiencing another known issue with {% data variables.product.prodname_vscode_shortname %} in the [`microsoft/vscode`](https://github.com/microsoft/vscode/issues?q=is%3Aissue+is%3Aopen) repository.

### Differences from working in {% data variables.product.prodname_vscode_shortname %} locally

When you open a codespace in your browser, using the {% data variables.product.prodname_vscode_shortname %} web client, you will notice some differences from working in a local workspace in the {% data variables.product.prodname_vscode_shortname %} desktop application. For example, some key bindings will be different or missing, and some extensions may behave differently. For a summary, see: "[Known limitations and adaptions](https://code.visualstudio.com/docs/remote/codespaces#_known-limitations-and-adaptations)" in the {% data variables.product.prodname_vscode_shortname %} docs.

You can check for known issues and log new issues with the {% data variables.product.prodname_vscode_shortname %} experience in the [`microsoft/vscode`](https://github.com/microsoft/vscode/issues?q=is%3Aissue+is%3Aopen+codespaces) repository.

### {% data variables.product.prodname_vscode %} Insiders

{% data variables.product.prodname_vscode %} Insiders is the most frequent release of {% data variables.product.prodname_vscode_shortname %}. It has all the latest features and bug fixes, but may also occasionally contain new issues that result in a broken build.

If you are using an Insiders build and notice broken behavior, we recommend switching to {% data variables.product.prodname_vscode %} Stable and trying again.

Click {% octicon "gear" aria-label="The manage icon" %} in the bottom left of the editor and select **Switch to Stable Version...**. If the {% data variables.product.prodname_vscode_shortname %} web client doesn't load, or the {% octicon "gear" aria-label="The manage icon" %} icon isn't available, you can force switching to {% data variables.product.prodname_vscode %} Stable by appending `?vscodeChannel=stable` to your codespace URL and loading the codespace at that URL.

If the problem isn't fixed in {% data variables.product.prodname_vscode %} Stable, check for known issues and, if required, log a new issue with the {% data variables.product.prodname_vscode_shortname %} experience, in the [`microsoft/vscode`](https://github.com/microsoft/vscode/issues?q=is%3Aissue+is%3Aopen+codespaces) repository.

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

{% endvscode %}

{% jetbrains %}

## Troubleshooting JetBrains IDEs

### Performance issues

A {% data variables.product.prodname_github_codespaces %} machine type with at least 4 cores is recommended for running any of the JetBrains IDEs. For more information, see "[Changing the machine type for your codespace](/codespaces/customizing-your-codespace/changing-the-machine-type-for-your-codespace)."

If you are using a machine with 4 or more cores and the performance you are experiencing in JetBrains feels a little sluggish, you may need to increase the maximum Java heap size. 

We recommend setting the maximum heap size to somewhere between 2862 MiB (3 GB) and 60% of the remote host's RAM.

The following provides some guidance as an initial starting point, which you can adjust based on the size of the codebase and the memory needed to run your application. For example, if you have a large or complicated codebase you may need to increase the heap size further. If you have a larger application, you can set a lower heap size to allow the application more memory.

| Machine type   | Maximum heap size |
| -------------- | ----------------- |
| 4 core         | 3 GB              |
| 8 core         | 4 GB              |
| 16 or 32 cores | 8 GB              |

1. On the left of the navigation bar, at the top of the application window, click the name of the codespace.

   ![Screenshot of the resources button in JetBrains](/assets/images/help/codespaces/jetbrains-resources-button.png)

1. In the Performance tab, note the CPU Load and Memory details. These will indicate whether the machine is overloaded.
 
   ![Screenshot of a the Localhost button in JetBrains](/assets/images/help/codespaces/jetbrains-performance.png)

1. Click the Settings tab and edit the heap size, increasing it to no more than 60% of the available memory for your codespace.

   ![Screenshot of the maximum heap size setting](/assets/images/help/codespaces/jetbrains-heap-setting.png)

1. Click **Save and restart**.

### SSH connection issues

To connect via the SSH server running in your codespace, you must have an SSH key in your `~/.ssh` directory (MacOS and Linux) or `%HOMEPATH%\.ssh` directory (Windows) that has already been added to your {% data variables.product.prodname_dotcom %} account. If you do not have any keys in this directory, {% data variables.product.prodname_cli %} will generate keys for you. For more information, see "[Adding a new SSH key to your {% data variables.product.prodname_dotcom %} account](/authentication/connecting-to-github-with-ssh/adding-a-new-ssh-key-to-your-github-account?platform=windows&tool=webui)."

If you encounter problems with key validation, try upgrading your version of {% data variables.product.prodname_cli %}. For information, see the [upgrade instructions](https://github.com/cli/cli#installation) in the README for {% data variables.product.prodname_cli %}.

### JetBrains IDE issues

For help with issues specific to the JetBrains IDE you are using, or the JetBrains Gateway application, see "[Product Support](https://www.jetbrains.com/support/)" on the JetBrains website.

{% endjetbrains %}

