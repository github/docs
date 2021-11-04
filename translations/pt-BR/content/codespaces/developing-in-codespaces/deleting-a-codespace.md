---
title: Excluir um codespace
intro: Você pode excluir um codespace de que você não precisa mais.
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
---

 

{% data reusables.codespaces.concurrent-codespace-limit %}

{% note %}

**Observação:** Somente a pessoa que criou um codespace pode excluí-lo. Atualmente, não há forma de os proprietários da organização excluírem os codespaces criados dentro de sua organização.

{% endnote %}

{% include tool-switcher %}

{% webui %}

1. Acesse a página "Seus codespaces" em [github.com/codespaces](https://github.com/codespaces).

2. À direita do código que você deseja excluir, clique em {% octicon "kebab-horizontal" aria-label="The horizontal kebab icon" %}, depois em **{% octicon "trash" aria-label="The trash icon" %} Apagar**

   ![Botão excluir](/assets/images/help/codespaces/delete-codespace.png)

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
