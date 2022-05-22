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

## Setting your default timeout

{% include tool-switcher %}

{% webui %}

{% data reusables.user_settings.access_settings %}
{% data reusables.user_settings.codespaces-tab %}
1. Under "Default idle timeout", enter the time that you want, then click **Save**. The time must be between 5 minutes and 240 minutes (4 hours).
   ![Selecting your timeout](/assets/images/help/codespaces/setting-default-timeout.png)

{% endwebui %}

{% cli %}

{% data reusables.cli.cli-learn-more %}

To set the timeout period, use the `idle-timeout` argument with the `codespace create` subcommand. Specify the time in minutes, followed by `m`. The time must be between 5 minutes and 240 minutes (5 hours).

```shell
gh codespace create --idle-timeout 90m
```

If you do not specify a timeout period when creating a codespace, then your default timeout period will be used. You cannot currently specify a default timeout period for all future codespaces through {% data variables.product.prodname_cli %}.

{% endcli %}
