---
title: Setting your timeout period for Codespaces
intro: 'You can set your default timeout for {% data variables.product.prodname_codespaces %} in your personal settings page.'
product: '{% data reusables.gated-features.codespaces %}'
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Codespaces
shortTitle: Set the timeout
---

A codespace will stop running after a period of inactivity. You can specify the length of this timeout period. The updated setting will apply to any newly created codespace.

{% warning %}

**Warning**: Codespaces are billed per minute. If you are not actively using a codespace but the codespace has not yet timed out, you are still billed for the time that the codespace is running. For more information, see "[About billing for Codespaces](/billing/managing-billing-for-github-codespaces/about-billing-for-codespaces#codespaces-pricing)."

{% endwarning %}

{% webui %}

## Setting your default timeout

{% data reusables.user-settings.access_settings %}
{% data reusables.user-settings.codespaces-tab %}
1. Under "Default idle timeout", enter the time that you want, then click **Save**. The time must be between 5 minutes and 240 minutes (4 hours). ![Selecting your timeout](/assets/images/help/codespaces/setting-default-timeout.png)

{% endwebui %}

{% cli %}

## Setting your timeout period

{% data reusables.cli.cli-learn-more %}

To set the timeout period when you create a codespace, use the `idle-timeout` argument with the `codespace create` subcommand. Specify the time in minutes, followed by `m`. The time must be between 5 minutes and 240 minutes (4 hours).

```shell
gh codespace create --idle-timeout 90m
```

If you don't specify a timeout period when you create a codespace, then the default timeout period will be used. For information about setting a default timeout period, click the "Web browser" tab on this page. You can't currently specify a default timeout period through {% data variables.product.prodname_cli %}.

{% endcli %}
