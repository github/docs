---
title: Setting your timeout period for GitHub Codespaces
shortTitle: Set the timeout
intro: 'You can set your default timeout for {% data variables.product.prodname_codespaces %} in your personal settings page.'
product: '{% data reusables.gated-features.codespaces %}'
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Codespaces
type: how_to
redirect_from:
  - /codespaces/customizing-your-codespace/setting-your-timeout-period-for-codespaces
---

A codespace will stop running after a period of inactivity. You can specify the length of this timeout period. The updated setting will apply to any newly created codespace.

Some organizations may have a maximum idle timeout policy. If an organization policy sets a maximum timeout which is less than the default timeout you have set, the organization's timeout will be used instead of your setting, and you will be notified of this after the codespace is created. For more information, see "[Restricting the idle timeout period](/codespaces/managing-codespaces-for-your-organization/restricting-the-idle-timeout-period)."

{% warning %}

**Warning**: Codespaces are billed per minute. If you are not actively using a codespace but the codespace has not yet timed out, you are still billed for the time that the codespace is running. For more information, see "[About billing for {% data variables.product.prodname_github_codespaces %}](/billing/managing-billing-for-github-codespaces/about-billing-for-github-codespaces#codespaces-pricing)."

{% endwarning %}

{% webui %}

## Setting your default timeout period

{% data reusables.user-settings.access_settings %}
{% data reusables.user-settings.codespaces-tab %}
1. Under "Default idle timeout", enter the time that you want, then click **Save**. The time must be between 5 minutes and 240 minutes (4 hours).
   ![Selecting your timeout](/assets/images/help/codespaces/setting-default-timeout.png)

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
