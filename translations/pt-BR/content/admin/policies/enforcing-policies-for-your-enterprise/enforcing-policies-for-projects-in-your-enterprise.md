---
title: Como exigir políticas para projetos da sua empresa
intro: 'Você pode exigir políticas para {% data variables.projects.projects_v2_and_v1 %} dentro das organizações de sua empresa ou permitir que as políticas sejam definidas em cada organização.'
permissions: Enterprise owners can enforce policies for projects in an enterprise.
redirect_from:
  - /articles/enforcing-project-board-settings-for-organizations-in-your-business-account
  - /articles/enforcing-project-board-policies-for-organizations-in-your-enterprise-account
  - /articles/enforcing-project-board-policies-in-your-enterprise-account
  - /github/setting-up-and-managing-your-enterprise-account/enforcing-project-board-policies-in-your-enterprise-account
  - /github/setting-up-and-managing-your-enterprise/enforcing-project-board-policies-in-your-enterprise-account
  - /github/setting-up-and-managing-your-enterprise/setting-policies-for-organizations-in-your-enterprise-account/enforcing-project-board-policies-in-your-enterprise-account
  - /admin/policies/enforcing-policies-for-your-enterprise/enforcing-project-board-policies-in-your-enterprise
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
ms.openlocfilehash: 2bb72b21094fadea8f584eb4749ed0cea69619ee
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 10/25/2022
ms.locfileid: '148107767'
---
## Sobre políticas para projetos da sua empresa

Você pode exigir políticas para controlar como os membros da empresa gerenciam {% data variables.projects.projects_v2_and_v1 %}, ou permitir que os proprietários da organização gerenciem políticas para {% data variables.projects.projects_v2_and_v1 %} no nível da organização.{% ifversion project-visibility-policy %}

Algumas políticas se aplicam tanto a nova experiência de projetos, {% data variables.product.prodname_projects_v2 %}, quanto a experiência anterior, {% data variables.product.prodname_projects_v1 %}, ao passo que algumas se aplicam apenas a {% data variables.product.prodname_projects_v1 %}. Para obter mais informações sobre cada experiência, confira "[Sobre {% data variables.product.prodname_projects_v2 %}](/issues/planning-and-tracking-with-projects/learning-about-projects/about-projects)" e "[Sobre {% data variables.product.prodname_projects_v1 %}](/issues/organizing-your-work-with-project-boards/managing-project-boards/about-project-boards)".
{% else %}Para obter mais informações, confira "[Sobre os quadros de projetos](/issues/organizing-your-work-with-project-boards/managing-project-boards/about-project-boards)".{% endif %}

## Aplicar política para projeto de toda a organização

Em todas as organizações pertencentes à sua empresa, é possível habilitar ou desabilitar quadros de projeto em toda a organização ou permitir que os proprietários administrem a configuração no nível da organização.

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.policies-tab %} {% data reusables.enterprise-accounts.projects-tab %}
4. Em "Organization projects" (Projetos da organização), revise as informações sobre como alterar a configuração. {% data reusables.enterprise-accounts.view-current-policy-config-orgs %}
5. Em "Organization projects" (Projetos da organização), use o menu suspenso e escolha uma política.
  ![Menu suspenso com opções de políticas de quadros de projetos da organização](/assets/images/help/business-accounts/organization-projects-policy-drop-down.png)

{% ifversion project-visibility-policy %}
## Como exigir uma política de alterações da visibilidade de projetos

Em todas as organizações pertencentes à sua empresa, você pode habilitar ou desabilitar a capacidade de pessoas com acesso de administrador a um projeto para alterar a visibilidade do projeto ou permitir que os proprietários administrem a configuração no nível da organização.

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.policies-tab %} {% data reusables.enterprise-accounts.projects-tab %}
1. Em "Permissão de alteração da visibilidade do projeto", examine as informações sobre a alteração da configuração. {% data reusables.enterprise-accounts.view-current-policy-config-orgs %}
1. Selecione o menu suspenso e clique em uma política.

   ![Captura de tela do menu suspenso para configurar a política de "Permissão de alteração da visibilidade do projeto"](/assets/images/help/business-accounts/project-visibility-change-drop-down.png) {% endif %}

{% ifversion projects-v1 %}
## Exigindo políticas para {% data variables.product.prodname_projects_v1 %}

Algumas políticas se aplicam somente a {% data variables.product.prodname_projects_v1 %}.

### Como exigir uma política para projeto de repositório

Em todas as organizações pertencentes à sua empresa, é possível habilitar ou desabilitar projeto no nível do repositório ou permitir que os proprietários administrem a configuração no nível da organização.

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.policies-tab %} {% data reusables.enterprise-accounts.projects-tab %}
4. Em "Repository projects" (Projetos de repositório), revise as informações sobre como alterar a configuração. {% data reusables.enterprise-accounts.view-current-policy-config-orgs %}
5. Em "Repository projects" (Projetos de repositório), use o menu suspenso e escolha uma política.

   ![Menu suspenso com opções de política de quadro de projeto do repositório](/assets/images/help/business-accounts/repository-projects-policy-drop-down.png) {% endif %}
