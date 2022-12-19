---
title: Aplicando políticas de quadros de projeto na sua empresa
intro: É possível aplicar políticas para projetos nas organizações da sua empresa ou permitir que as políticas sejam definidas em cada organização.
permissions: Enterprise owners can enforce policies for project boards in an enterprise.
redirect_from:
- /articles/enforcing-project-board-settings-for-organizations-in-your-business-account
- /articles/enforcing-project-board-policies-for-organizations-in-your-enterprise-account
- /articles/enforcing-project-board-policies-in-your-enterprise-account
- /github/setting-up-and-managing-your-enterprise-account/enforcing-project-board-policies-in-your-enterprise-account
- /github/setting-up-and-managing-your-enterprise/enforcing-project-board-policies-in-your-enterprise-account
- /github/setting-up-and-managing-your-enterprise/setting-policies-for-organizations-in-your-enterprise-account/enforcing-project-board-policies-in-your-enterprise-account
versions:
  ghec: '*'
  ghes: '*'
  ghae: '*'
type: how_to
topics:
- Enterprise
- Policies
- Projects
shortTitle: Project board policies
ms.openlocfilehash: 5be8c2fd41b456a24b286cd1a4ab3ef493abf278
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/05/2022
ms.locfileid: "145094893"
---
## Sobre políticas para quadros de projetos na sua empresa

Você pode aplicar políticas para controlar como os integrantes da sua empresa em {% data variables.product.product_name %} gerenciam os quadros de projeto. Você também pode permitir que proprietários da organização gerenciem as políticas para os quadros de projeto. Para obter mais informações, confira "[Sobre os quadros de projetos](/issues/organizing-your-work-with-project-boards/managing-project-boards/about-project-boards)".

## Aplicar política para quadros de projeto de toda a organização

Em todas as organizações pertencentes à sua empresa, é possível habilitar ou desabilitar quadros de projeto em toda a organização ou permitir que os proprietários administrem a configuração no nível da organização.

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.policies-tab %} {% data reusables.enterprise-accounts.projects-tab %}
4. Em "Organization projects" (Projetos da organização), revise as informações sobre como alterar a configuração. {% data reusables.enterprise-accounts.view-current-policy-config-orgs %}
5. Em "Organization projects" (Projetos da organização), use o menu suspenso e escolha uma política.
  ![Menu suspenso com opções de políticas de quadros de projetos da organização](/assets/images/help/business-accounts/organization-projects-policy-drop-down.png)

## Aplicar política para quadros de projeto de repositório

Em todas as organizações pertencentes à sua empresa, é possível habilitar ou desabilitar quadros de projeto no nível de repositório ou permitir que os proprietários administrem a configuração no nível da organização.

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.policies-tab %} {% data reusables.enterprise-accounts.projects-tab %}
4. Em "Repository projects" (Projetos de repositório), revise as informações sobre como alterar a configuração. {% data reusables.enterprise-accounts.view-current-policy-config-orgs %}
5. Em "Repository projects" (Projetos de repositório), use o menu suspenso e escolha uma política.
  ![Menu suspenso com opções de políticas de quadros de projetos do repositório](/assets/images/help/business-accounts/repository-projects-policy-drop-down.png)
