---
title: Deleting a codespace
intro: You can delete a codespace you no longer need.
product: '{% data reusables.gated-features.codespaces %}'
redirect_from:
  - /github/developing-online-with-github-codespaces/deleting-a-codespace
  - /github/developing-online-with-codespaces/deleting-a-codespace
versions:
  fpt: '*'
  ghec: '*'
type: how_to
topics:
  - Codespaces
  - Fundamentals
  - Developer
shortTitle: Delete a codespace
---

There are costs associated with storing codespaces. You should therefore delete any codespaces you no longer need. For more information, see "[About billing for GitHub Codespaces](/billing/managing-billing-for-github-codespaces/about-billing-for-github-codespaces)."

{% data reusables.codespaces.max-number-codespaces %}

## Deleting a codespace

{% webui %}

1. Navigate to the "Your Codespaces" page at [github.com/codespaces](https://github.com/codespaces).

2. To the right of the codespace you want to delete, click {% octicon "kebab-horizontal" aria-label="The horizontal kebab icon" %}, then click **{% octicon "trash" aria-label="The trash icon" %} Delete**

   ![Delete button](/assets/images/help/codespaces/delete-codespace.png)

{% endwebui %}

{% vscode %}

{% data reusables.codespaces.deleting-a-codespace-in-vscode %}

{% endvscode %}


{% cli %}

{% data reusables.cli.cli-learn-more %}

To delete a codespace use the `gh codespace delete` subcommand and then choose a codespace from the list that's displayed.

```shell
gh codespace delete
```

If you have unsaved changes, you'll be prompted to confirm deletion. You can use the `--force` flag to force deletion, avoiding this prompt.

For more information about this command, see [the {% data variables.product.prodname_cli %} manual](https://cli.github.com/manual/gh_codespace_delete).

{% endcli %}

## Bulk deleting codespaces

{% webui %}

You can use {% data variables.product.prodname_cli %} to delete several or all of your codespaces with a single command. For more information, click the **{% data variables.product.prodname_cli %}** tab near the top of this page.

{% endwebui %}

{% vscode %}

You can use {% data variables.product.prodname_cli %} to delete several or all of your codespaces with a single command. For more information, click the **{% data variables.product.prodname_cli %}** tab near the top of this page.

{% endvscode %}


{% cli %}

You can delete several or all of your codespaces with a single command, using `gh codespace delete` followed by one of these flags:

`--all` - Delete all of your codespaces.

`--repo REPOSITORY` - Delete all of your codespaces for this repository. Or use together with the `--days` flag to filter by age of the codespace.

`--days NUMBER` - Delete all of your codespaces that are older than the specified number of days. Can be used together with the `--repo` flag.

By default you are prompted to confirm deletion of any codespaces that contain unsaved changes. You can use the `--force` flag to skip this confirmation. 

### Example

Delete all of the codespaces for the `octo-org/octo-repo` repository that you created more than 7 days ago.

```
gh cs delete --repo octo-org/octo-repo --days 7
```

{% endcli %}

## Deleting codespaces in your organization

As an organization owner, you can use {% data variables.product.prodname_cli %} to delete any codespace in your organization.

{% webui %}

For more information, click the "{% data variables.product.prodname_cli %}" tab near the top of this page.

{% endwebui %}

{% vscode %}

For more information, click the "{% data variables.product.prodname_cli %}" tab near the top of this page.

{% endvscode %}

{% cli %}

1. Enter one of these commands to display a list of codespaces.
   * `gh codespace delete --org ORGANIZATION` - Lists the current codespaces in the specified organization. 
   * `gh codespace delete --org ORGANIZATION --user USER` - Lists only those codespaces created by the specified user.
   You must be an owner of the specified organization.
1. In the list of codespaces, navigate to the codespace you want to delete.
1. To delete the selected codespace press <kbd>Enter</kbd>.

   If the codespace contains unsaved changes you will be prompted to confirm deletion.

{% endcli %}

You can also use the REST API to delete codespaces for your organization. For more information, see "[Codespaces organizations](/rest/codespaces/organizations#delete-a-codespace-from-the-organization)."

## Further reading
- "[Codespaces lifecycle](/codespaces/developing-in-codespaces/codespaces-lifecycle)"