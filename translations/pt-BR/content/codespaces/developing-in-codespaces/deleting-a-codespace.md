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

Se você tiver alterações não salvas, será solicitado que você confirme a exclusão. Você pode usar o sinalizador `--force` para forçar a exclusão, evitando a instrução.

Para obter mais informações sobre esse comando, consulte [o manual de{% data variables.product.prodname_cli %}](https://cli.github.com/manual/gh_codespace_delete).

{% endcli %}

## Exclusão de codespaces em massa

{% webui %}

Você pode usar {% data variables.product.prodname_cli %} para excluir vários ou todos os seus codespaces com um único comando. Para obter mais informações, clique na aba **{% data variables.product.prodname_cli %}** perto da parte superior desta página.

{% endwebui %}

{% vscode %}

Você pode usar {% data variables.product.prodname_cli %} para excluir vários ou todos os seus codespaces com um único comando. Para obter mais informações, clique na aba **{% data variables.product.prodname_cli %}** perto da parte superior desta página.

{% endvscode %}


{% cli %}

Você pode excluir vários ou todos os seus codespaces com um único comando, usando o código `gh codespace delete` seguido por uma desses sinalizadores:

`--all` - Exclua todos os seus codespaces.

`--repo REPOSITORY` - Exclua todos os seus codespaces do repositório. Ou use junto com o sinalizador `--days` para filtrar por idade do codespace.

`--days NUMBER` - Exclua todos os seus codespaces que são mais antigos que o número de dias especificado. Pode ser usado junto com o sinalizador `--repo`.

Por padrão, solicita-se que você confirme a exclusão de todos os codespaces que contenham alterações não salvas. Você pode usar o sinalizador `--force` para pular esta confirmação.

### Exemplo

Excluir todos os codespaces do repositório `octo-org/octo-repo` que você criou há mais de 7 dias.

```
gh cs delete --repo octo-org/octo-repo --days 7
```

{% endcli %}

## Leia mais
- [Ciclo de vida dos codespaces](/codespaces/developing-in-codespaces/codespaces-lifecycle)
