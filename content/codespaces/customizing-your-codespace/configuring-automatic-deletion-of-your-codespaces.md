---
title: Configuring automatic deletion of your codespaces
shortTitle: Configure automatic deletion
intro: 'Inactive codespaces are automatically deleted. You can choose how long your stopped codespaces are retained, up to a maximum of 30 days.'
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Codespaces
type: how_to
---

By default, {% data variables.product.prodname_github_codespaces %} are automatically deleted after they have been stopped and have remained inactive for 30 days.

However, because {% data variables.product.prodname_github_codespaces %} incurs storage charges, you may prefer to reduce the retention period by changing your default period in your personal settings for {% data variables.product.prodname_github_codespaces %}. For more information about storage charges, see "[AUTOTITLE](/billing/managing-billing-for-github-codespaces/about-billing-for-github-codespaces#codespaces-pricing)."

{% note %}

**Note**: Whether or not you have set a personal codespace retention period, it's a good idea to get into the habit of deleting codespaces that you no longer need. For more information, see "[AUTOTITLE](/codespaces/developing-in-codespaces/deleting-a-codespace)."

{% endnote %}

Automatic deletion happens irrespective of whether a codespace contains unpushed changes. To prevent automatic deletion of a codespace, just open the codespace again. The retention period is reset every time you connect to a codespace, and the retention countdown restarts when the codespace is stopped.

If a repository belongs to an organization, the organization owner may have set a retention period for the whole organization. If this period is less than the default retention period in your personal settings then the organization retention period will apply to codespaces you create for this repository. For more information, see "[AUTOTITLE](/codespaces/managing-codespaces-for-your-organization/restricting-the-retention-period-for-codespaces)."

Each codespace has its own retention period. You may, therefore, have codespaces with different retention periods. For example, if:
- You created a codespace, changed your default retention period, then created another codespace.
- You created a codespace using {% data variables.product.prodname_cli %} and specified a different retention period.
- You created a codespace for an organization-owned repository that has a retention period configured in the organization settings. The ownership of the codespaces you create is shown on the "[Your codespaces](https://github.com/settings/codespaces)" page.

{% note %}

**Note**: The retention period is specified in days. A day represents a 24-hour period, beginning at the time of day when you stop a codespace.

{% endnote %}

{% webui %}

## Setting a default retention period for your codespaces

{% data reusables.user-settings.access_settings %}
{% data reusables.user-settings.codespaces-tab %}
1. Under "Default retention period", enter the number of days for which you want your codespaces to be retained, by default, after they have been stopped.

   ![Screenshot of the "Default retention period" setting, currently set to 1 day. Next to the number of days is the "Save" button.](/assets/images/help/codespaces/setting-default-retention.png)

   You can set your default retention period between `0` and `30` days.

   {% warning %}

   **Warning**: Setting the period to `0` will result in your codespaces being immediately deleted when you stop them, or when they timeout due to inactivity. For more information, see "[AUTOTITLE](/codespaces/customizing-your-codespace/setting-your-timeout-period-for-github-codespaces)."

   {% endwarning %}

1. Click **Save**.

When you create a codespace using {% data variables.product.prodname_cli %} you can override this default. If you create a codespace in an organization that specifies a shorter retention period, the organization-level value overrides your personal setting.

If you set a retention period of more than a day, you'll be sent an email notification one day prior to its deletion.

## Checking the remaining time until autodeletion

You can check whether a codespace is due to be automatically deleted soon.

When an inactive codespace is approaching the end of its retention period, this is indicated in your list of codespaces on {% data variables.product.prodname_dotcom %} at [https://github.com/codespaces](https://github.com/codespaces).

![Screenshot of a list of three codespaces. The third of these is labeled "Expiring in 4 days" which is highlighted with a dark orange outline.](/assets/images/help/codespaces/retention-deletion-message.png)

## Avoiding automatic deletion of codespaces

You may have a codespace that you want to keep for longer than the retention period defined in your personal settings. You can do this by using the "Keep codespace" option. When you select this option, your codespace will be retained indefinitely, until you delete it manually.

{% note %}

**Note**: The "Keep codespace" option is not available for organization-owned codespaces affected by an organization retention policy.

{% endnote %}

Codespaces incur storage costs, or consume your included storage allowance if the codespace is owned by your personal {% data variables.product.prodname_dotcom %} account. You should therefore be aware of the cost implications of storing codespaces indefinitely. For more information, see "[AUTOTITLE](/billing/managing-billing-for-github-codespaces/about-billing-for-github-codespaces#about-billing-for-storage-usage)."

{% data reusables.codespaces.your-codespaces-procedure-step %}
1. To the right of the codespace you want to exempt from automatic deletion, click {% octicon "kebab-horizontal" aria-label="Codespace configuration" %}, then click **{% octicon "bookmark" aria-hidden="true" %} Keep codespace**.

   ![Screenshot of the dropdown menu for an active codespace. The "Keep codespace" option has a tooltip saying "Expires 10 days after shutdown."](/assets/images/help/codespaces/keep-codespace.png)

Codespaces that you have exempted from automatic deletion are indicated in your list of codespaces with the bookmark icon ({% octicon "bookmark-fill" aria-hidden="true" %}).

![Screenshot of a section of the codespaces list, showing a codespace labeled with the bookmark icon.](/assets/images/help/codespaces/keep-codespace-bookmarked.png)

{% endwebui %}

{% cli %}

## Setting a retention period for a codespace

{% data reusables.codespaces.using-github-cli %}

To set the codespace retention period when you create a codespace, use the `--retention-period` flag with the `codespace create` subcommand. Specify the period in days. The period must be between 0 and 30 days.

```shell
gh codespace create --retention-period DAYS
```

If you don't specify a retention period when you create a codespace, then either your default retention period, or an organization retention period, will be used, depending on which is lower. For information about setting your default retention period, click the "Web browser" tab on this page.

{% data reusables.cli.cli-learn-more %}

{% endcli %}

{% vscode %}

## Setting the retention period

You can set your default retention period in your web browser, on {% data variables.product.prodname_dotcom_the_website %}. Alternatively, if you use {% data variables.product.prodname_cli %} to create a codespace you can set a retention period for that particular codespace. For more information, click the appropriate tab above.

## Checking whether codespaces will be autodeleted soon

You can check, in the {% data variables.product.prodname_vscode %} desktop application, whether a codespace is due to be automatically deleted soon.

{% data reusables.codespaces.click-remote-explorer-icon-vscode %}
1. Choose **{% data variables.product.prodname_github_codespaces %}** from the dropdown menu at the top right of the Remote Explorer, if it is not already selected.
1. Under "GITHUB CODESPACES," position the mouse pointer over the codespace that you're interested in. A pop-up box is displayed showing you information about the codespace.

   If the codespace is nearing the end of its retention period, a line is included telling when this period is due to expire.

   ![Screenshot of the "Remote Explorer" side bar. In the right-click menu for a codespace, "Expiring in 19 days" is highlighted with an orange outline.](/assets/images/help/codespaces/vscode-deleting-in-5-days.png)

{% endvscode %}
