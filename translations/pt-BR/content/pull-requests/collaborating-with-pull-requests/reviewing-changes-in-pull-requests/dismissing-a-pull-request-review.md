---
title: Ignorar uma revisão de pull request
intro: 'Se seu repositório exigir revisões, você poderá descartar revisões de pull request que não são mais válidas ou não podem ser aprovadas pelo revisor.'
redirect_from:
  - /github/collaborating-with-issues-and-pull-requests/reviewing-changes-in-pull-requests/dismissing-a-pull-request-review
  - /articles/dismissing-a-pull-request-review
  - /github/collaborating-with-issues-and-pull-requests/dismissing-a-pull-request-review
  - /github/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/dismissing-a-pull-request-review
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Pull requests
shortTitle: Dismiss a PR review
ms.openlocfilehash: 658f0b69a24c622a3b5f75d6e330d132040d62c5
ms.sourcegitcommit: 505b84dc7227e8a5d518a71eb5c7eaa65b38ce0e
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/09/2022
ms.locfileid: '147875558'
---
{% data reusables.pull_requests.dismiss_review %}
Isso altera o status da revisão para um comentário sobre a revisão. Quando você ignora uma revisão, deve adicionar um comentário explicando o motivo. Seu comentário será adicionado à conversa da pull request.

{% data reusables.search.requested_reviews_search %}

{% data reusables.repositories.sidebar-pr %} {% data reusables.repositories.choose-pr-review %}
3. Na guia "Conversa", role a página até a revisão que deseja ignorar e clique em {% octicon "chevron-down" aria-label="The down button" %}. ![Ícone de divisa na caixa de merge](/assets/images/help/pull_requests/merge_box/pull-request-open-menu.png)
4. Clique em {% octicon "kebab-horizontal" aria-label="The horizontal kebab icon" %} e clique em **Ignorar revisão**.
![Ícone de kebab na caixa de mesclagem](/assets/images/help/pull_requests/merge_box/pull-request-dismiss-review.png)
5. Digite seu motivo para ignorar a revisão e clique em **Ignorar revisão**.
  ![Botão Ignorar revisão](/assets/images/help/pull_requests/merge_box/pull-request-dismiss-review-button.png)

## Leitura adicional

- "[Sobre as revisões de solicitação de pull](/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/about-pull-request-reviews)"
- "[Como revisar as alterações propostas em uma solicitação de pull](/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/reviewing-proposed-changes-in-a-pull-request)"
- "[Sobre os branches protegidos](/github/administering-a-repository/about-protected-branches#require-pull-request-reviews-before-merging)"
