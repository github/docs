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

Para excluir um codespace, use o comando `gh codespace delete` e, em seguida, escolha um codespace na lista que for exibida.

```shell
gh codespace delete
```

Se você tiver alterações não salvas, será solicitado que você confirme a exclusão. Você pode usar o sinalizador `-f` para forçar a exclusão, evitando a instrução.

Para obter mais informações sobre esse comando, consulte [o manual de{% data variables.product.prodname_cli %}](https://cli.github.com/manual/gh_codespace_delete).

{% endcli %}

## Leia mais
- [Codespaces lifecycle](/codespaces/developing-in-codespaces/codespaces-lifecycle)
