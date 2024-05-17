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

{% jetbrains_beta %}

{% data reusables.codespaces.codespaces-jetbrains-beta-note %}

{% endjetbrains_beta %}

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

{% jetbrains_beta %}

## Troubleshooting JetBrains IDEs

### Performance issues

A {% data variables.product.prodname_github_codespaces %} machine type with at least 4 cores is recommended for running any of the JetBrains IDEs. For more information, see "[AUTOTITLE](/codespaces/customizing-your-codespace/changing-the-machine-type-for-your-codespace)."

If you are using a machine with 4 or more cores and the performance you are experiencing in JetBrains feels a little sluggish, you may need to increase the maximum Java heap size.

The recommended heap size varies according to the machine type of your codespace.

| Machine type         | Maximum heap size |
| -------------------- | ----------------- |
| 4 core, 16 GB RAM    | 2048 MiB          |
| 8 core, 32 GB RAM    | 4096 MiB          |
| 16 cores, 64 GB RAM  | 8192 MiB          |
| 32 cores, 128 GB RAM | 16,384 MiB        |

If the heap size is below the recommended value, a message is displayed when your codespace starts, suggesting that you increase the heap size. You can click the link in the message to increase the heap size automatically.

![Screenshot of the message recommending you increase the heap size.](/assets/images/help/codespaces/heap-size-message.png)

Depending on the size of your codebase, and the memory needed to run your application, you may need to increase the heap size further. You should set the heap size to somewhere between the size shown in the table above and 60% of the remote host's RAM. If you have a large application, you should not set too large a heap size, so that you allow the application adequate memory.

1. On the left of the navigation bar, at the top of the application window, click the name of the codespace.

   ![Screenshot of the JetBrains client. The codespace name "urban meme," labeled "Resources critical," is highlighted with a dark orange outline.](/assets/images/help/codespaces/jetbrains-resources-button.png)

1. In the Performance tab, note the CPU Load and Memory details. These will indicate whether the machine is overloaded.

   ![Screenshot of the "Performance" tab in the resources dropdown, showing CPU Load at 97.5%, Memory at 60.6%, and Disk at 28.8%.](/assets/images/help/codespaces/jetbrains-performance.png)

1. Click the Settings tab and edit the heap size, increasing it to no more than 60% of the available memory for your codespace.

   ![Screenshot of the "Performance" tab. In the "Maximum heap size" field, 3072 is entered and outlined in dark orange. Below this are "Save" and "Save and restart" buttons.](/assets/images/help/codespaces/jetbrains-heap-setting.png)

1. Click **Save and restart**.

### Client can't be opened in macOS Ventura

In macOS Ventura, using versions of the JetBrains Gateway prior to version 2022.3, the first time you try to connect to a codespace from the JetBrains Gateway a message was displayed telling you that the JetBrains client application "is damaged and can't be opened."

<img src="/assets/images/help/codespaces/jetbrains-ventura-error1.png" alt="Screenshot of the 'cannot be opened' error message" style="width:230px;"/>

This issue is fixed in the JetBrains Gateway, version 2022.3 and later.

To avoid this issue, update the JetBrains Gateway.

To work around this problem with older versions of the Gateway:

1. Click **Cancel** to dismiss this message.
1. Click the Apple icon, top left of the screen, and click **System Settings**.
1. Click **Privacy & Security** and scroll down to the "Security" section.

   ![Screenshot of macOS "Privacy & Security" dialog, with a security message above the JetBrains Client and the "Open Anyway" button.](/assets/images/help/codespaces/jetbrains-privacy-and-security.png)

   You will see a message telling you that the JetBrains Client was blocked from use.

1. Click **Open Anyway** to add the JetBrains client to your recognized applications.
   The message is displayed again but this time with an **Open** button.

   <img src="/assets/images/help/codespaces/jetbrains-ventura-error2.png" alt="Screenshot of the error message with an 'Open' button" style="width:230px;"/>

1. Click **Cancel** again.
1. Go back to the JetBrains Gateway application and connect to the required codespace again.
   The JetBrains client will now open successfully. Having authorized the client application to run on your Mac, you will not see the message when you connect to your codespaces in future.

### SSH connection issues

To connect via the SSH server running in your codespace, you must have an SSH key in your `~/.ssh` directory (macOS and Linux) or `%HOMEPATH%\.ssh` directory (Windows) that has already been added to your {% data variables.product.prodname_dotcom %} account. If you do not have any keys in this directory, {% data variables.product.prodname_cli %} will generate keys for you. For more information, see "[AUTOTITLE](/authentication/connecting-to-github-with-ssh/adding-a-new-ssh-key-to-your-github-account?platform=windows&tool=webui)."

If you encounter problems with key validation, try upgrading your version of {% data variables.product.prodname_cli %}. For information, see the [upgrade instructions](https://github.com/cli/cli#installation) in the README for {% data variables.product.prodname_cli %}.

### JetBrains IDE issues

For help with issues specific to the JetBrains IDE you are using, or the JetBrains Gateway application, see "[Product Support](https://www.jetbrains.com/support/)" on the JetBrains website.

{% endjetbrains_beta %}
