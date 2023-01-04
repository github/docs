---
title: Troubleshooting GitHub Copilot in a JetBrains IDE
intro: 'This article provides troubleshooting advice for errors related to  {% data variables.product.prodname_copilot%} in a JetBrains IDE.'
product: '{% data reusables.gated-features.copilot %}'
topics:
  - Copilot
  - Logging
  - Troubleshooting
versions:
  feature: copilot
shortTitle: JetBrains
---

To troubleshoot issues with {% data variables.product.prodname_copilot%} or your Jetbrains IDE, you can view the log files. The location of the log files depends on the Jetbrains IDE you are using. For more information, see "[Configuring GitHub Copilot in a JetBrains IDE](/copilot/configuring-github-copilot/configuring-github-copilot-in-a-jetbrains-ide)."

## Collecting log files

These steps describe how to view and collect the log files for the following Jetbrains IDEs:

- IntelliJ IDEA
- Android Studio
- GoLand
- PhpStorm
- PyCharm
- RubyMine
- WebStorm

The {% data variables.product.prodname_copilot%} extension logs to the IDEA log location for IntelliJ plugins.
1. In your JetBrains IDE, open the **Help** menu.
1. Go to **Show Log in**.
1. Open the `idea.log` in your preferred editor and look for any errors related to {% data variables.product.prodname_dotcom%} or {% data variables.product.prodname_copilot%}.

For more information, see the [Locating IDE log files](https://intellij-support.jetbrains.com/hc/en-us/articles/207241085-Locating-IDE-log-files) in the Intellij documentation.

### Collect log files from Rider

1. In Rider, open the **Help** menu.
1. Go to **Diagnostic Tools**.
1. Go to **Show Log in**.
1. Open the `idea.log` in your preferred editor and look for any errors related to {% data variables.product.prodname_dotcom%} or {% data variables.product.prodname_copilot%}.
