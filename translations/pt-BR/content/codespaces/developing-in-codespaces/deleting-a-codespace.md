---
title: Excluir um codespace
intro: Você pode excluir um codespace de que você não precisa mais.
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
ms.openlocfilehash: 24b53cc0cead2b6b15894ada4c799abc8e1c6e7a
ms.sourcegitcommit: 1f3bd126ca000982c538f1621d47722737740943
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 12/01/2022
ms.locfileid: '148188253'
---
Você pode excluir um codespace de várias maneiras: no terminal usando a {% data variables.product.prodname_cli %}, no {% data variables.product.prodname_vscode %} ou no navegador da Web. Use as guias deste artigo para ver instruções de cada uma dessas maneiras de excluir um codespace.

{% note %}

**Observação**: você não pode excluir um codespace de dentro do JetBrains Gateway ou do aplicativo cliente do JetBrains nem de dentro do JupyterLab.

{% endnote %}

Há custos associados ao armazenamento de codespaces. Portanto, você deve excluir os codespaces de que não precisa mais. Para obter mais informações, confira "[Sobre a cobrança do {% data variables.product.prodname_github_codespaces %}](/billing/managing-billing-for-github-codespaces/about-billing-for-github-codespaces)".

{% data reusables.codespaces.max-number-codespaces %}

## Excluir um codespace

{% webui %}

{% data reusables.codespaces.your-codespaces-procedure-step %}
1. À direita do codespace que deseja excluir, clique em {% octicon "kebab-horizontal" aria-label="The horizontal kebab icon" %} e em **{% octicon "trash" aria-label="The trash icon" %} Excluir**

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

## Como excluir codespaces em massa

{% webui %}

Você pode usar {% data variables.product.prodname_cli %} para excluir vários dos seus codespaces, ou todos, usando um único comando. Para obter mais informações, clique na guia "{% data variables.product.prodname_cli %}" próxima à parte superior desta página.

{% endwebui %}

{% vscode %}

Você pode usar {% data variables.product.prodname_cli %} para excluir vários dos seus codespaces, ou todos, usando um único comando. Para obter mais informações, clique na guia "{% data variables.product.prodname_cli %}" próxima à parte superior desta página.

{% endvscode %}


{% cli %}

Você pode excluir vários ou todos os seus codespaces com um único comando, usando `gh codespace delete` seguido por um destes sinalizadores:

`--all` - exclua todos os seus codespaces.

`--repo REPOSITORY` - exclua todos os seus codespaces para este repositório. Ou use junto com o sinalizador `--days` para filtrar por idade do codespace.

`--days NUMBER` - exclua todos os seus codespaces mais antigos do que o número especificado de dias. Pode ser usado junto com o sinalizador `--repo`.

Por padrão, você será solicitado a confirmar a exclusão de todos os codespaces que contenham alterações não salvas. Você pode usar o sinalizador `--force` para ignorar essa confirmação. 

### Exemplo

Exclua todos os codespaces do repositório `octo-org/octo-repo` criados há mais de 7 dias.

```
gh codespace delete --repo octo-org/octo-repo --days 7
```

{% endcli %}

## Como excluir codespaces em sua organização

Como proprietário de uma organização, você pode usar {% data variables.product.prodname_cli %} para excluir qualquer codespace em sua organização.

{% webui %}

Para obter mais informações, clique na guia "{% data variables.product.prodname_cli %}" próxima à parte superior desta página.

{% endwebui %}

{% vscode %}

Para obter mais informações, clique na guia "{% data variables.product.prodname_cli %}" próxima à parte superior desta página.

{% endvscode %}

{% cli %}

1. Insira um desses comandos para exibir uma lista de codespaces.
   * `gh codespace delete --org ORGANIZATION` – lista os codespaces atuais na organização especificada. 
   * `gh codespace delete --org ORGANIZATION --user USER` – lista apenas os codespaces criados pelo usuário especificado.
   Você deve ser um proprietário da organização especificada.
1. Na lista de codespaces, navegue até o codespace que você deseja excluir.
1. Para excluir o codespace selecionado, pressione <kbd>Enter</kbd>.

   Se o codespace contiver alterações não salvas, será solicitado que você confirme a exclusão.

{% endcli %}

Você também pode usar a API REST para excluir codespaces de sua organização. Para obter mais informações, confira "[Organizações de codespaces](/rest/codespaces/organizations#delete-a-codespace-from-the-organization)".

## Leitura adicional
- "[O ciclo de vida do codespace](/codespaces/getting-started/the-codespace-lifecycle)"
- "[Como configurar a exclusão automática dos codespaces](/codespaces/customizing-your-codespace/configuring-automatic-deletion-of-your-codespaces)"
