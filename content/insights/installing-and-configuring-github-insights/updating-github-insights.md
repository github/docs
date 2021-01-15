---
title: Updating GitHub Insights
intro: 'You can update to the latest version of {% data variables.product.prodname_insights %} to benefit from improvements and bug fixes.'
product: '{% data reusables.gated-features.github-insights %}'
redirect_from:
  - /github/installing-and-configuring-github-insights/updating-github-insights
permissions: 'People with read permissions to the `github/insights-releases` repository and administrative access to the application server can update {% data variables.product.prodname_insights %}.'
versions:
  enterprise-server: '*'
---

### About {% data variables.product.prodname_insights %} updates

Before you update {% data variables.product.prodname_insights %}, you can check the version that you're currently using in the lower-right corner of any page.

The update process will take up to 10 minutes. During this time, users cannot access {% data variables.product.prodname_insights %}.

### Updating from {% data variables.product.prodname_insights %} 1.5.0-alpha.1

To update {% data variables.product.prodname_insights %} from 1.5.0-alpha.1, you must navigate to the GitHub App you created when you first installed {% data variables.product.prodname_insights %} in [this step](/github/installing-and-configuring-github-insights/installing-github-insights#creating-a-github-app). Edit the App Permissions to add:
- Repository
  - Issues: **Read-only**
Then you may continue updating {% data variables.product.prodname_insights %} to the latest version.

### Updating from {% data variables.product.prodname_insights %} 0.4.0+

To update {% data variables.product.prodname_insights %} from 0.4.0+, you can install the latest version. {% data variables.product.prodname_insights %} will ask to use the previous installation configuration.

{% data reusables.github-insights.download-latest-release %}
4. Run the shell script `install.sh`.
5. If SSL was previously enabled, {% data variables.product.prodname_insights %} will find an existing SSL certificate. Enter "Y" to accept or "n" to change the SSL certificate or disable SSL.
6. If SSL was previously enabled, {% data variables.product.prodname_insights %} will find an existing SSL key. Enter "Y" to accept or "n" to change the SSL key.
5. {% data variables.product.prodname_insights %} will find an existing hostname. Enter "Y" to accept or "n" to enter a different hostname. The hostname is the same URL you used for the application server when creating the {% data variables.product.prodname_github_app %}.
6. The installation will take a few minutes to run. When complete, you will see a message printed to the terminal.
  ```
  Installation complete
  Run /opt/insights/scripts/start.sh to start GitHub Insights
  ```
{% data reusables.github-insights.run-script %}

### Updating from {% data variables.product.prodname_insights %} 0.3.1 or lower

{% data variables.product.prodname_insights %} versions 0.3.1 or lower are incompatible with versions 0.4.0+. To update from {% data variables.product.prodname_insights %} 0.3.1 or lower, install and configure {% data variables.product.prodname_insights %} on a new application server.
