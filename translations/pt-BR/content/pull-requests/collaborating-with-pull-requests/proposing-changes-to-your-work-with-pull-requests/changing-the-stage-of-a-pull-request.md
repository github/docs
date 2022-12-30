---
title: Alterar o stage de uma pull request
intro: Você pode marcar uma solicitação de pull de rascunho como pronta para revisão ou convertê-la em um rascunho.
permissions: People with write permissions to a repository and pull request authors can change the stage of a pull request.
product: '{% data reusables.gated-features.draft-prs %}'
redirect_from:
  - /github/collaborating-with-issues-and-pull-requests/proposing-changes-to-your-work-with-pull-requests/changing-the-stage-of-a-pull-request
  - /articles/changing-the-stage-of-a-pull-request
  - /github/collaborating-with-issues-and-pull-requests/changing-the-stage-of-a-pull-request
  - /github/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/changing-the-stage-of-a-pull-request
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Pull requests
shortTitle: Change the state
ms.openlocfilehash: 5ef2845e57518c4b66f13a804919f7bdea327040
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/11/2022
ms.locfileid: '147883292'
---
## Marcando uma pull request como pronta para revisão

{% data reusables.pull_requests.mark-ready-review %}

{% tip %}

**Dica**: você também pode marcar uma solicitação de pull como pronta para revisão usando a {% data variables.product.prodname_cli %}. Para obter mais informações, confira "[`gh pr ready`](https://cli.github.com/manual/gh_pr_ready)" na documentação da {% data variables.product.prodname_cli %}.

{% endtip %}

{% data reusables.repositories.sidebar-pr %}
2. Na lista "Pull requests", clique na pull request que deseja marcar como pronta para revisão.
3. Na caixa de mesclagem, clique em **Pronta para revisão**.
  ![Botão Pronta para revisão](/assets/images/help/pull_requests/ready-for-review-button.png)

## Convertendo uma pull request em rascunho

Você pode converter uma pull request em rascunho a qualquer momento. Por exemplo, se você abriu uma pull request acidentalmente em vez de um rascunho, ou se você recebeu feedback sobre sua pull request que precisa ser resolvida, você pode converter a pull request em um rascunho para indicar outras mudanças necessárias. Ninguém poderá fazer o merge da pull request até que você marque a pull request como pronta para revisão novamente. Pessoas que já estão inscritas em notificações para a pull request não serão descadastradas quando você converter a pull request em um rascunho.

{% data reusables.repositories.sidebar-pr %}
2. Na lista "Pull Requests", clique na pull request que deseja converter em rascunho.
3. Na barra lateral direita, em "Revisores", clique em **Converter em rascunho**.
  ![Link Converter em rascunho](/assets/images/help/pull_requests/convert-to-draft-link.png)
4. Clique em **Converter em rascunho**.
  ![Confirmação de Converter em rascunho](/assets/images/help/pull_requests/convert-to-draft-dialog.png)

## Leitura adicional

- "[Sobre as solicitações de pull](/github/collaborating-with-issues-and-pull-requests/about-pull-requests)"
