---
title: Reverter uma pull request
intro: Você pode reverter uma pull request após ela ter sido incorporada ao branch upstream.
redirect_from:
  - /github/collaborating-with-issues-and-pull-requests/incorporating-changes-from-a-pull-request/reverting-a-pull-request
  - /github/collaborating-with-pull-requests/incorporating-changes-from-a-pull-request/reverting-a-pull-request
  - /articles/reverting-a-pull-request
  - /github/collaborating-with-issues-and-pull-requests/reverting-a-pull-request
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Pull requests
ms.openlocfilehash: 9e94b6e9358089da8f62ff5152800e14556db3e7
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/10/2022
ms.locfileid: '145128059'
---
## Sobre a reversão de uma pull request

A reversão de uma solicitação de pull no {% data variables.product.product_name %} cria uma solicitação de pull que contém uma reversão do commit de mesclagem da solicitação de pull mesclada original. Para reverter solicitações de pull, você precisa ter [permissões de gravação](/organizations/managing-access-to-your-organizations-repositories/repository-roles-for-an-organization) no repositório. 

## Reverter uma pull request

{% note %}

**Observação:** talvez seja necessário reverter os commits individuais na sua solicitação de pull se um dos itens a seguir é verdadeiro.

- A reversão da pull request causar conflitos de merge
- A pull request original não foi mesclada originalmente em {% data variables.product.product_name %}. Por exemplo, alguém poderia ter feito o merge da pull request usando um merge fast-forward na linha de comando.

Para obter mais informações sobre como usar o Git para reverter commits individuais manualmente, confira [Reversão do Git](https://git-scm.com/docs/git-revert.html) na documentação do Git.

{% endnote %}

{% data reusables.repositories.sidebar-pr %}
2. Na lista "Pull Requests", clique na pull request que deseja reverter.
3. Na parte inferior da solicitação de pull, clique em **Reverter**. Se a opção **Reverter** não for exibida, você precisará solicitar permissões de gravação ao administrador do repositório.
  ![Link de reversão da solicitação de pull](/assets/images/help/pull_requests/revert-pull-request-link.png)
4. Faça merge da pull request resultante. Para obter mais informações, confira "[Como mesclar uma solicitação de pull](/pull-requests/collaborating-with-pull-requests/incorporating-changes-from-a-pull-request/merging-a-pull-request)".
