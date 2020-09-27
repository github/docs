---
title: Updating GitHub Insights
intro: 'You can update to the latest version of {{ site.data.variables.product.prodname_insights }} to benefit from improvements and bug fixes.'
product: '{{ site.data.reusables.gated-features.github-insights }}'
redirect_from:
  - /github/installing-and-configuring-github-insights/updating-github-insights
permissions: 'People with read permissions to the `github/insights-releases` repository and administrative access to the application server can update {{ site.data.variables.product.prodname_insights }}.'
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

### About {{ site.data.variables.product.prodname_insights }} updates

Before you update {{ site.data.variables.product.prodname_insights }}, you can check the version that you're currently using in the lower-right corner of any page.

The update process will take up to 10 minutes. During this time, users cannot access {{ site.data.variables.product.prodname_insights }}.

### Updating from {{ site.data.variables.product.prodname_insights }} 0.4.0+

To update {{ site.data.variables.product.prodname_insights }} from 0.4.0+, you can install the latest version. {{ site.data.variables.product.prodname_insights }} will ask to use the previous installation configuration.

{{ site.data.reusables.github-insights.download-latest-release }}
4. Run the shell script `install.sh`.
5. If SSL was previously enabled, {{ site.data.variables.product.prodname_insights }} will find an existing SSL certificate. Enter "Y" to accept or "n" to change the SSL certificate or disable SSL.
6. If SSL was previously enabled, {{ site.data.variables.product.prodname_insights }} will find an existing SSL key. Enter "Y" to accept or "n" to change the SSL key.
5. {{ site.data.variables.product.prodname_insights }} will find an existing hostname. Enter "Y" to accept or "n" to enter a different hostname. The hostname is the same URL you used for the application server when creating the {{ site.data.variables.product.prodname_github_app }}.
6. The installation will take a few minutes to run. When complete, you will see a message printed to the terminal.
  ```
  Installation complete
  Run /opt/insights/scripts/start.sh to start GitHub Insights
  ```
{{ site.data.reusables.github-insights.run-script }}

### Updating from {{ site.data.variables.product.prodname_insights }} 0.3.1 or lower

{{ site.data.variables.product.prodname_insights }} versions 0.3.1 or lower are incompatible with versions 0.4.0+. To update from {{ site.data.variables.product.prodname_insights }} 0.3.1 or lower, install and configure {{ site.data.variables.product.prodname_insights }} on a new application server.
