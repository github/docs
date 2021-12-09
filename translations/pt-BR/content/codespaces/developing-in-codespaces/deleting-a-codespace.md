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

 

{% data reusables.codespaces.concurrent-codespace-limit %}

{% note %}

**Note:** Only the person who created a codespace can delete it. There is currently no way for organization owners to delete codespaces created within their organization.

{% endnote %}

{% include tool-switcher %}
   
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

If you have unsaved changes, you'll be prompted to confirm deletion. You can use the `-f` flag to force deletion, avoiding this prompt.

For more information about this command, see [the {% data variables.product.prodname_cli %} manual](https://cli.github.com/manual/gh_codespace_delete).

{% endcli %}

## Further reading
- [Codespaces lifecycle](/codespaces/developing-in-codespaces/codespaces-lifecycle)
