---
title: Permitir alterações de visibilidade do projeto em sua organização
intro: 'Os proprietários da organização podem permitir que membros com permissões de administrador ajustem a visibilidade dos {% data variables.projects.projects_v2_and_v1 %} na organização.'
versions:
  feature: classic-project-visibility-permissions-or-projects-v2
topics:
  - Organizations
  - Projects
shortTitle: Project visibility permissions
allowTitleToDifferFromFilename: true
permissions: 'Organization owners can allow {% data variables.projects.project_v2_and_v1 %} visibility changes for an organization.'
ms.openlocfilehash: 5f8963e8c03e2c0a62586964b6331ec7b3d945b5
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 10/25/2022
ms.locfileid: '148107982'
---
## Sobre as alterações de visibilidade de projetos

Você pode restringir quem tem a capacidade de alterar a visibilidade dos {% data variables.projects.projects_v2_and_v1 %} em sua organização, como restringir membros de alterar um {% data variables.projects.projects_v2_and_v1 %} de privado para público. 

É possível limitar a capacidade de alterar a visibilidade do {% data variables.projects.project_v2_and_v1 %} para apenas proprietários da organização ou permitir que qualquer pessoa receba permissões de administrador para alterar a visibilidade.

{% ifversion project-visibility-policy %} Essa opção poderá não estar disponível para você se um proprietário da empresa restringir as alterações de visibilidade para {% data variables.projects.projects_v2_and_v1 %} no nível da empresa. Para obter mais informações, confira "[Como impor políticas para projetos na sua empresa](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-projects-in-your-enterprise)".
{% endif %}

## Como permitir que os membros alterem a visibilidade do projeto

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %}
1. Na seção "Codificação, planejamento e automação" da barra lateral, clique em **{% octicon "table" aria-label="The table icon" %} Projetos**.
1. Para permitir que os membros ajustem a visibilidade do projeto, selecione **Permitir que os membros alterem a visibilidade do projeto dessa organização**.
  ![Captura de tela mostrando a caixa de seleção para definir alterações de visibilidade](/assets/images/help/projects-v2/visibility-change-checkbox.png)
1. Clique em **Salvar**.

## Leitura adicional

{% ifversion projects-v2 %}
- "[Gerenciar a visibilidade do seu {% data variables.projects.projects_v2 %}](/issues/planning-and-tracking-with-projects/managing-your-project/managing-visibility-of-your-projects)" {%- endif %}{%- ifversion projects-v1 %}
- "[Alterar a visibilidade do {% data variables.product.prodname_project_v1 %}](/issues/organizing-your-work-with-project-boards/managing-project-boards/changing-project-board-visibility)" {% endif %}
