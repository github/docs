---
title: 'Criar um {% data variables.product.prodname_project_v1 %}'
intro: 'Os {% data variables.projects.projects_v1_boards_caps %} podem ser usados para criar fluxos de trabalho personalizados adequados às suas necessidades, como acompanhamento e priorização de trabalho de recursos específicos, roteiros abrangentes ou, até mesmo, listas de verificação de versão.'
redirect_from:
  - /github/managing-your-work-on-github/managing-project-boards/creating-a-project-board
  - /articles/creating-a-project
  - /articles/creating-a-project-board
  - /github/managing-your-work-on-github/creating-a-project-board
versions:
  feature: projects-v1
topics:
  - Pull requests
  - Issues
  - Projects
  - Project management
type: how_to
allowTitleToDifferFromFilename: true
ms.openlocfilehash: e4f47a007c18b07142040a0a18ad7f45b73d5273
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 10/25/2022
ms.locfileid: '148108267'
---
{% data reusables.projects.project_boards_old %}

{% data reusables.project-management.use-automated-template %}

{% data reusables.project-management.copy-project-boards %}

{% data reusables.project-management.link-repos-to-project-board %} Para obter mais informações, confira "[Vincular um repositório a um {% data variables.product.prodname_project_v1 %}](/articles/linking-a-repository-to-a-project-board)".

Depois de criar seu {% data variables.projects.projects_v1_board %}, você pode adicionar problemas, solicitações de pull e observações a ele. Para obter mais informações, confira "[Adicionar problemas e solicitações de pull a um {% data variables.product.prodname_project_v1 %}](/articles/adding-issues-and-pull-requests-to-a-project-board)" e "[Adicionar observações a um {% data variables.product.prodname_project_v1 %}](/articles/adding-notes-to-a-project-board)".

Também é possível configurar automações de fluxo de trabalho para manter o {% data variables.projects.projects_v1_board %} em sincronia com o status de problemas e de solicitações de pull. Para obter mais informações, confira "[Sobre automação de {% data variables.product.prodname_projects_v1 %}](/articles/about-automation-for-project-boards)".

{% data reusables.project-management.project-board-import-with-api %}

## Criar um {% data variables.projects.projects_v1_board %} pertencente a usuário

{% data reusables.projects.classic-project-creation %}

{% data reusables.profile.access_profile %}
2. Na parte superior da página de perfil, no menu de navegação principal, clique em {% octicon "project" aria-label="The project board icon" %} **Projetos**.
![Guia Projeto](/assets/images/help/projects/user-projects-tab.png){% ifversion projects-v2 %}
1. Clique em **Projetos (clássicos)** {% endif %} {% data reusables.project-management.click-new-project %} {% data reusables.project-management.create-project-name-description %} {% data reusables.project-management.choose-template %} {% data reusables.project-management.choose-visibility %} {% data reusables.project-management.linked-repositories %} {% data reusables.project-management.create-project-button %} {% data reusables.project-management.add-column-new-project %} {% data reusables.project-management.name-project-board-column %} {% data reusables.project-management.select-column-preset %} {% data reusables.project-management.select-automation-options-new-column %} {% data reusables.project-management.click-create-column %} {% data reusables.project-management.add-more-columns %}

{% data reusables.project-management.edit-project-columns %}

## Criar um {% data variables.projects.projects_v1_board %} em toda a organização

{% data reusables.projects.classic-project-creation %}

{% ifversion classic-project-visibility-permissions %} {% note %}

**Observação:** {% data reusables.projects.owners-can-limit-visibility-permissions %}

{% endnote %} {% endif %}

{% data reusables.profile.access_org %} {% data reusables.user-settings.access_org %} {% data reusables.organizations.organization-wide-project %}{% ifversion projects-v2 %}
1. Clique em **Projetos (clássicos)** {% endif %} {% data reusables.project-management.click-new-project %} {% data reusables.project-management.create-project-name-description %} {% data reusables.project-management.choose-template %} {% data reusables.project-management.choose-visibility %} {% data reusables.project-management.linked-repositories %} {% data reusables.project-management.create-project-button %} {% data reusables.project-management.add-column-new-project %} {% data reusables.project-management.name-project-board-column %} {% data reusables.project-management.select-column-preset %} {% data reusables.project-management.select-automation-options-new-column %} {% data reusables.project-management.click-create-column %} {% data reusables.project-management.add-more-columns %}

{% data reusables.project-management.edit-project-columns %}

## Criar um {% data variables.projects.projects_v1_board %} de repositório

{% data reusables.projects.classic-project-creation %}

{% data reusables.repositories.navigate-to-repo %}
2. Abaixo do nome do repositório, clique em {% octicon "project" aria-label="The project board icon" %} **Projetos**.
![Guia Projeto](/assets/images/help/projects/repo-tabs-projects.png){% ifversion projects-v2 %}
1. Clique em **Projetos (clássicos)** {% endif %} {% data reusables.project-management.click-new-project %} {% data reusables.project-management.create-project-name-description %} {% data reusables.project-management.choose-template %} {% data reusables.project-management.create-project-button %} {% data reusables.project-management.add-column-new-project %} {% data reusables.project-management.name-project-board-column %} {% data reusables.project-management.select-column-preset %} {% data reusables.project-management.select-automation-options-new-column %} {% data reusables.project-management.click-create-column %} {% data reusables.project-management.add-more-columns %}

{% data reusables.project-management.edit-project-columns %}

## Leitura adicional

- "[Sobre os quadros de projetos](/articles/about-project-boards)"
- "[Como editar um quadro de projetos](/articles/editing-a-project-board)"{% ifversion fpt or ghec %}
- "[Como copiar um quadro de projetos](/articles/copying-a-project-board)"{% endif %}
- "[Como fechar um quadro de projeto](/articles/closing-a-project-board)"
- "[Sobre a automação para quadros de projetos](/articles/about-automation-for-project-boards)"
