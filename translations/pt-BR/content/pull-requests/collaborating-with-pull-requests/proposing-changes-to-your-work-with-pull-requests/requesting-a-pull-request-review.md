---
title: Solicitar revisão de pull request
intro: 'Depois de criar uma pull request, você pode pedir para uma pessoa específica revisar as alterações propostas. Se você for um integrante da organização, poderá pedir para uma equipe específica revisar suas alterações.'
product: '{% data reusables.gated-features.multiple-pr-reviewers %}'
redirect_from:
  - /github/collaborating-with-issues-and-pull-requests/proposing-changes-to-your-work-with-pull-requests/requesting-a-pull-request-review
  - /articles/requesting-a-pull-request-review
  - /github/collaborating-with-issues-and-pull-requests/requesting-a-pull-request-review
  - /github/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/requesting-a-pull-request-review
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Pull requests
shortTitle: Request a PR review
ms.openlocfilehash: b7b797d7e9ad2fdf9c1df29e7e5aad66f942b538
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/05/2022
ms.locfileid: '145128042'
---
Os repositórios pertencem a uma conta pessoal (um só proprietário individual) ou a uma conta de organização (uma conta compartilhada com vários colaboradores ou mantenedores). Para obter mais informações, confira "[Tipos de contas do {% data variables.product.prodname_dotcom %}](/get-started/learning-about-github/types-of-github-accounts)". Os proprietários e os colaboradores em um repositório pertencente a uma conta pessoal podem atribuir revisões de solicitação de pull. Os membros da organização com permissões de triagem também podem atribuir um revisor para uma solicitação de pull. 

Para atribuir um revisor a uma solicitação de pull, você precisará ter acesso de gravação no repositório. Para obter mais informações sobre o acesso ao repositório, confira "[Funções de repositório para uma organização](/organizations/managing-access-to-your-organizations-repositories/repository-roles-for-an-organization)". Se você tiver acesso de gravação, poderá atribuir qualquer pessoa que tenha acesso de leitura no repositório como revisor.

Os membros da organização com acesso de gravação também podem atribuir uma revisão de solicitação de pull a qualquer pessoa ou equipe com acesso de leitura em um repositório. O revisor ou a equipe receberão uma notificação informando que você solicitou a revisão de uma pull request. Se você solicitar uma revisão de uma equipe e a atribuição de revisão de código estiver habilitada, os membros específicos serão solicitados e a equipe será removida como revisor. Para obter mais informações, confira "[Como gerenciar as configurações de revisão de código para sua equipe](/organizations/organizing-members-into-teams/managing-code-review-settings-for-your-team)".

{% note %}

**Observação:** os autores da solicitação de pull não podem solicitar revisões, a menos que sejam um proprietário ou um colaborador do repositório com acesso de gravação nele.

{% endnote %}

Você pode solicitar uma revisão para uma pessoa específica ou sugerida. Os revisores sugeridos são baseados nos [dados de blame do Git](/articles/tracking-changes-in-a-file/). Se você solicitar uma revisão, outras pessoas com acesso de leitura no repositório poderão revisar sua pull request. Depois que alguém revisar sua pull request e você fizer as alterações necessárias, você poderá solicitar novamente a revisão do mesmo revisor. Se o revisor solicitado não enviar uma revisão e a solicitação de pull atender aos [requisitos de capacidade de mesclagem](/articles/defining-the-mergeability-of-pull-requests) do repositório, você ainda poderá mesclar a solicitação de pull.

{% data reusables.repositories.sidebar-pr %}
1. Na lista de pull requests, clique na pull request que deve ser revisada por uma pessoa ou equipe específica.
2. Procure **Revisores** na barra lateral direita.  
3. Para solicitar uma revisão de uma pessoa sugerida em **Revisores**, ao lado do nome de usuário dela, clique em **Solicitar**.
 ![Ícone de solicitação de revisores na barra lateral direita](/assets/images/help/pull_requests/request-suggested-review.png)
5. Opcionalmente, para solicitar uma revisão de alguém que não seja uma pessoa sugerida, clique em **Revisores** e clique em um nome no menu suspenso.
  ![Ícone de engrenagem Revisores na barra lateral direita](/assets/images/help/pull_requests/request-a-review-not-suggested.png)
6. Opcionalmente, se você souber o nome da pessoa ou da equipe da qual deseja obter uma revisão, clique em **Revisores** e digite o nome de usuário da pessoa ou o nome da equipe da qual está solicitando a revisão das alterações. Clique no nome da equipe ou no nome de usuário para solicitar a revisão.
  ![Campo usado para inserir o nome de usuário de um revisor e menu suspenso com o nome do revisor](/assets/images/help/pull_requests/choose-pull-request-reviewer.png)
7. Depois que a pull request for revisada e você fizer as alterações necessárias, você poderá solicitar que ela seja revisada novamente por um revisor. Procure **Revisores** na barra lateral direita e clique em {% octicon "sync" aria-label="The sync icon" %} ao lado do nome do revisor cuja revisão deseja obter.
  ![Ícone de sincronização de nova revisão na barra lateral direita](/assets/images/help/pull_requests/request-re-review.png)

## Leitura adicional

- "[Sobre as revisões de solicitações de pull](/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/about-pull-request-reviews)"
