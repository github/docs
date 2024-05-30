---
title: Setting up GitHub Copilot in the CLI
intro: 'Learn how to enable and install {% data variables.product.prodname_copilot_cli %}.'
versions:
  feature: copilot-in-the-cli
topics:
  - Copilot
  - CLI
shortTitle: Setting up Copilot in the CLI
redirect_from:
  - /copilot/github-copilot-in-the-cli/enabling-github-copilot-in-the-cli
---

If you have a {% data variables.product.prodname_copilot_for_individuals %} subscription, you can install the {% data variables.product.prodname_copilot_cli %} extension without needing to enable it for your organization.

If you are part of an organization{% ifversion ghec %} or enterprise{% endif %} with a {% data variables.product.prodname_copilot_for_business %}{% ifversion ghec %} or {% data variables.product.prodname_copilot_enterprise %}{% endif %} subscription, the organization{% ifversion ghec %} or enterprise{% endif %} owner will need to enable {% data variables.product.prodname_copilot_cli_short %} in the {% data variables.product.prodname_copilot_short %} settings. You can then install the {% data variables.product.prodname_copilot_cli %} extension.

## Enabling or disabling {% data variables.product.prodname_copilot_cli_short %} at the organization level

An organization owner can enable or disable {% data variables.product.prodname_copilot_cli_short %} for the organization. {% ifversion ghec %}You may not be able to configure this setting for your organization, if an enterprise owner has set a policy at the enterprise level.{% endif %}

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
{% data reusables.copilot.policy-settings %}
1. To the right of "{% data variables.product.prodname_copilot_cli_short %}", select the dropdown menu, then click **Enabled** or **Disabled**.

{% ifversion ghec %}

## Enabling or disabling {% data variables.product.prodname_copilot_cli_short %} at the enterprise level

An enterprise owner can choose whether to enable {% data variables.product.prodname_copilot_cli_short %} for all organizations, disable it for all organizations, or allow each organization to choose its own policy. When an enterprise has not yet set a policy, the default setting is "Unconfigured." This setting behaves identically to "No policy."

{% data reusables.copilot.copilot-cli-enable %}

{% endif %}

## Installing {% data variables.product.prodname_copilot_cli_short %}

To install {% data variables.product.prodname_copilot_cli_short %}, you must have {% data variables.product.prodname_cli %} installed. {% data reusables.cli.cli-installation %}

1. If you have not already authenticated with your {% data variables.product.prodname_dotcom %} account, run the following command in your terminal.

    ```shell copy
    gh auth login
    ```

1. To install the {% data variables.product.prodname_copilot_cli_short %} extension, run the following command.

    ```shell copy
    gh extension install github/gh-copilot
    ```

1. To update {% data variables.product.prodname_copilot_cli_short %}, run the following command.

    ```shell copy
    gh extension upgrade gh-copilot
    ```

To use `gh` to work with {% data variables.product.prodname_copilot %}, type `gh copilot SUBCOMMAND`, for example, `gh copilot explain`.

## Next steps

You successfully installed {% data variables.product.prodname_copilot_cli_short %}. To learn more about how to use it, see "[AUTOTITLE](/copilot/github-copilot-in-the-cli/using-github-copilot-in-the-cli)." If you want to configure usage analytics and the default behavior for the execute command option, see "[AUTOTITLE](/copilot/github-copilot-in-the-cli/configuring-github-copilot-in-the-cli)."
