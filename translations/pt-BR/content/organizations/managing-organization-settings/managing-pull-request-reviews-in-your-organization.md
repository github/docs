---
title: Gerenciando revisões de pull request na sua organização
intro: Você pode limitar os usuários que podem aprovar ou solicitar alterações em um pull request na sua organização.
versions:
  feature: pull-request-approval-limit
permissions: Organization owners can limit which users can submit reviews that approve or request changes to a pull request.
topics:
  - Organizations
  - Pull requests
shortTitle: Manage pull request reviews
ms.openlocfilehash: 2d097e95572932f05795bd28627cb73b1fad43ca
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/10/2022
ms.locfileid: '145097268'
---
## Sobre limites de revisão de código

Por padrão, em repositórios públicos, qualquer usuário pode enviar análises que aprovem ou solicitem alterações em um pull request.

É possível limitar quem pode aprovar ou solicitar alterações em pull requests em repositórios públicos pertencentes à sua organização. Depois que você habilitar os limites de revisão de código, qualquer pessoa poderá comentar em pull requests nos seus repositórios públicos, mas somente pessoas com acesso explícito a um repositório poderão aprovar um pull request ou solicitar alterações.

Você também pode habilitar os limites de revisão de código para repositórios individuais. Se você habilitar os limites para a organização, você substituirá todos os limites para repositórios individuais pertencentes à organização. Para obter mais informações, confira "[Como gerenciar revisões de solicitação de pull no seu repositório](/repositories/managing-your-repositorys-settings-and-features/managing-repository-settings/managing-pull-request-reviews-in-your-repository)".

## Habilitando limites de revisão de código

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %}
1. Na seção "Acesso" da barra lateral, clique em **{% octicon "report" aria-label="The report icon" %} Moderação**.
1. Em "{% octicon "report" aria-label="The report icon" %} Moderação", clique em **Limites da revisão de código**.
![Captura de tela do item na barra lateral de limites da revisão de código para organizações](/assets/images/help/organizations/code-review-limits-organizations.png)
1. Revise as informações na tela. Clique em **Limitar a revisão em todos os repositórios** para limitar as revisões àqueles com acesso explícito ou clique em **Remover limites de revisão de todos os repositórios** para remover os limites de cada repositório público na sua organização.
![Captura de tela das configurações de limites da revisão de código para organizações](/assets/images/help/organizations/code-review-limits-organizations-settings.png)
