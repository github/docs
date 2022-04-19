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
shortTitle: Excluir um codespace
---



{% data reusables.codespaces.concurrent-codespace-limit %}

{% note %}

**Observação:** Somente a pessoa que criou um codespace pode excluí-lo. Atualmente, não há forma de os proprietários da organização excluírem os codespaces criados dentro de sua organização.

{% endnote %}

## Excluir um codespace

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

Para excluir um codespace, use o comando `gh codespace delete` e, em seguida, escolha um codespace na lista que for exibida.

```shell
gh codespace delete
```

Se você tiver alterações não salvas, será solicitado que você confirme a exclusão. You can use the `--force` flag to force deletion, avoiding this prompt.

Para obter mais informações sobre esse comando, consulte [o manual de{% data variables.product.prodname_cli %}](https://cli.github.com/manual/gh_codespace_delete).

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

### Exemplo

Delete all of the codespaces for the `octo-org/octo-repo` repository that you created more than 7 days ago.

```
gh cs delete --repo octo-org/octo-repo --days 7
```

{% endcli %}

## Leia mais
- [Ciclo de vida dos codespaces](/codespaces/developing-in-codespaces/codespaces-lifecycle)
