---
title: Setting your timeout period for GitHub Codespaces
shortTitle: Set the timeout
intro: 'You can set your default timeout for {% data variables.product.prodname_github_codespaces %} in your personal settings page.'
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Codespaces
type: how_to
redirect_from:
  - /codespaces/customizing-your-codespace/setting-your-timeout-period-for-codespaces
---

## About the idle timeout

A codespace will stop running after a period of inactivity. By default this period is 30 minutes, but you can specify a longer or shorter default timeout period in your personal settings on {% data variables.product.prodname_dotcom %}. The updated setting will apply to any new codespaces you create, or to existing codespaces the next time you start them. You can also specify a timeout when you use {% data variables.product.prodname_cli %} to create a codespace.

{% warning %}

**Warning**: Codespaces compute usage is billed for the duration for which a codespace is active. If you're not using a codespace but it remains running, and hasn't yet timed out, you are billed for the total time that the codespace was active, irrespective of whether you were using it. For more information, see "[AUTOTITLE](/billing/managing-billing-for-github-codespaces/about-billing-for-github-codespaces#codespaces-pricing)."

{% endwarning %}

### Timeout periods for organization-owned repositories

Organizations can set a maximum idle timeout policy for codespaces created from some or all of their repositories. If an organization policy sets a maximum timeout which is less than the default timeout you have set, the organization's timeout will be used instead of your setting. You will be notified of this after the codespace is created. For more information, see "[AUTOTITLE](/codespaces/managing-codespaces-for-your-organization/restricting-the-idle-timeout-period)."

{% webui %}

## Setting your default timeout period

{% data reusables.user-settings.access_settings %}
{% data reusables.user-settings.codespaces-tab %}
1. Under "Default idle timeout", enter the time that you want, then click **Save**. The time must be between 5 minutes and 240 minutes (4 hours).

   ![Screenshot of the "Default idle timeout" section of the {% data variables.product.prodname_codespaces %} settings, with "90 minutes" entered.](/assets/images/help/codespaces/setting-default-timeout.png)

{% endwebui %}

{% cli %}

## Setting the timeout period for a codespace

{% data reusables.cli.cli-learn-more %}

To set the timeout period when you create a codespace, use the `idle-timeout` argument with the `codespace create` subcommand. Specify the time in minutes, followed by `m`. The time must be between 5 minutes and 240 minutes (4 hours).

```shell
gh codespace create --idle-timeout 90m
```

If you don't specify a timeout period when you create a codespace, then the default timeout period will be used. For information about setting a default timeout period, click the "Web browser" tab on this page. You can't currently specify a default timeout period through {% data variables.product.prodname_cli %}.

{% endcli %}

{% vscode %}

## Setting a timeout period

You can set your default timeout period in your web browser, on {% data variables.product.prodname_dotcom_the_website %}. Alternatively, if you use {% data variables.product.prodname_cli %} to create a codespace you can set a timeout period for that particular codespace. For more information, click the appropriate tab above.

{% endvscode %}
