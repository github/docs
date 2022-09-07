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
shortTitle: Delete a codespace
ms.openlocfilehash: b55d350e439953defac182eae23423b839ff7cf7
ms.sourcegitcommit: 22d665055b1bee7a5df630385e734e3a149fc720
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 07/13/2022
ms.locfileid: '145097151'
---
{% data reusables.codespaces.concurrent-codespace-limit %}

{% note %}

**Observação:** somente a pessoa que criou um codespace pode excluí-lo. Atualmente, não há forma de os proprietários da organização excluírem os codespaces criados dentro de sua organização.

{% endnote %}

## <a name="deleting-a-codespace"></a>Excluir um codespace

{% webui %}

1. Navegue até a página "Seus codespaces" em [github.com/codespaces](https://github.com/codespaces).

2. À direita do codespace que deseja excluir, clique em {% octicon "kebab-horizontal" aria-label="The horizontal kebab icon" %} e em **{% octicon "trash" aria-label="The trash icon" %} Excluir**

   ![Botão Excluir](/assets/images/help/codespaces/delete-codespace.png)

{% endwebui %}

{% vscode %}

{% data reusables.codespaces.deleting-a-codespace-in-vscode %}

{% endvscode %}


{% cli %}

{% data reusables.cli.cli-learn-more %}

Para excluir um codespace, use o subcomando `gh codespace delete` e escolha um codespace na lista exibida.

```shell
gh codespace delete
```

Se você tiver alterações não salvas, será solicitado que você confirme a exclusão. Use o sinalizador `--force` para forçar a exclusão, evitando esse prompt.

Para obter mais informações sobre esse comando, confira [o manual da {% data variables.product.prodname_cli %}](https://cli.github.com/manual/gh_codespace_delete).

{% endcli %}

## <a name="bulk-deleting-codespaces"></a>Como excluir codespaces em massa

{% webui %}

Você pode usar {% data variables.product.prodname_cli %} para excluir vários dos seus codespaces, ou todos, usando um único comando. Para obter mais informações, clique na guia **{% data variables.product.prodname_cli %}** próxima à parte superior desta página.

{% endwebui %}

{% vscode %}

Você pode usar {% data variables.product.prodname_cli %} para excluir vários dos seus codespaces, ou todos, usando um único comando. Para obter mais informações, clique na guia **{% data variables.product.prodname_cli %}** próxima à parte superior desta página.

{% endvscode %}


{% cli %}

Você pode excluir vários ou todos os seus codespaces com um único comando, usando `gh codespace delete` seguido por um destes sinalizadores:

`--all` - exclua todos os seus codespaces.

`--repo REPOSITORY` - exclua todos os seus codespaces para este repositório. Ou use junto com o sinalizador `--days` para filtrar por idade do codespace.

`--days NUMBER` - exclua todos os seus codespaces mais antigos do que o número especificado de dias. Pode ser usado junto com o sinalizador `--repo`.

Por padrão, você será solicitado a confirmar a exclusão de todos os codespaces que contenham alterações não salvas. Você pode usar o sinalizador `--force` para ignorar essa confirmação. 

### <a name="example"></a>Exemplo

Exclua todos os codespaces do repositório `octo-org/octo-repo` criados há mais de 7 dias.

```
gh cs delete --repo octo-org/octo-repo --days 7
```

{% endcli %}

## <a name="further-reading"></a>Leitura adicional
- [Ciclo de vida dos codespaces](/codespaces/developing-in-codespaces/codespaces-lifecycle)
