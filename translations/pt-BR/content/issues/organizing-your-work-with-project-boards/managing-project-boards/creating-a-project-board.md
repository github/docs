---
title: 'Criar {% data variables.product.prodname_project_v1 %}'
intro: '{% data variables.projects.projects_v1_boards_caps %} pode ser usado para criar fluxos de trabalho personalizados para atender às suas necessidades, como acompanhamento e priorização de recursos específicos, planejamentos abrangentes ou até mesmo liberar listas de verificação.'
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
---

{% data reusables.projects.project_boards_old %}

{% data reusables.project-management.use-automated-template %}

{% data reusables.project-management.copy-project-boards %}

{% data reusables.project-management.link-repos-to-project-board %} Para obter mais informações, consulte "[Vincular um repositório a um {% data variables.product.prodname_project_v1 %} ](/articles/linking-a-repository-to-a-project-board)".

Depois de criar seu {% data variables.projects.projects_v1_board %}, você poderá adicionar problemas, pull requests e observações. Para obter mais informações, consulte "[Adicionando problemas e pull requests a um {% data variables.product.prodname_project_v1 %}](/articles/adding-issues-and-pull-requests-to-a-project-board)" e "[Adicionando observações a um {% data variables.product.prodname_project_v1 %}](/articles/adding-notes-to-a-project-board)".

Você também pode configurar automações de fluxo de trabalho para manter seu {% data variables.projects.projects_v1_board %} em sincronia com o status de problemas e pull requests. Para obter mais informações, consulte "[Sobre automação para {% data variables.product.prodname_projects_v1 %}](/articles/about-automation-for-project-boards)".

{% data reusables.project-management.project-board-import-with-api %}

## Criando um {% data variables.projects.projects_v1_board %} pertencente a um usuário.

{% data reusables.projects.classic-project-creation %}

{% data reusables.profile.access_profile %}
2. No topa da página do seu perfil, na navegação principal, clique em {% octicon "project" aria-label="The project board icon" %} **Projects** (Projetos). ![Project tab](/assets/images/help/projects/user-projects-tab.png){% ifversion projects-v2 %}
1. Click **Projects (classic)**{% endif %}
{% data reusables.project-management.click-new-project %}
{% data reusables.project-management.create-project-name-description %}
{% data reusables.project-management.choose-template %}
{% data reusables.project-management.choose-visibility %}
{% data reusables.project-management.linked-repositories %}
{% data reusables.project-management.create-project-button %}
{% data reusables.project-management.add-column-new-project %}
{% data reusables.project-management.name-project-board-column %}
{% data reusables.project-management.select-column-preset %}
{% data reusables.project-management.select-automation-options-new-column %}
{% data reusables.project-management.click-create-column %}
{% data reusables.project-management.add-more-columns %}

{% data reusables.project-management.edit-project-columns %}

## Criando um {% data variables.projects.projects_v1_board %} para toda a organização

{% data reusables.projects.classic-project-creation %}

{% data reusables.profile.access_org %}
{% data reusables.user-settings.access_org %}
{% data reusables.organizations.organization-wide-project %}{% ifversion projects-v2 %}
1. Click **Projects (classic)**{% endif %}
{% data reusables.project-management.click-new-project %}
{% data reusables.project-management.create-project-name-description %}
{% data reusables.project-management.choose-template %}
{% data reusables.project-management.choose-visibility %}
{% data reusables.project-management.linked-repositories %}
{% data reusables.project-management.create-project-button %}
{% data reusables.project-management.add-column-new-project %}
{% data reusables.project-management.name-project-board-column %}
{% data reusables.project-management.select-column-preset %}
{% data reusables.project-management.select-automation-options-new-column %}
{% data reusables.project-management.click-create-column %}
{% data reusables.project-management.add-more-columns %}

{% data reusables.project-management.edit-project-columns %}

## Criando um repositório de {% data variables.projects.projects_v1_board %}

{% data reusables.projects.classic-project-creation %}

{% data reusables.repositories.navigate-to-repo %}
2. Abaixo do nome do repositório, clique em {% octicon "project" aria-label="The project board icon" %} **Projects** (Projetos). ![Project tab](/assets/images/help/projects/repo-tabs-projects.png){% ifversion projects-v2 %}
1. Click **Projects (classic)**{% endif %}
{% data reusables.project-management.click-new-project %}
{% data reusables.project-management.create-project-name-description %}
{% data reusables.project-management.choose-template %}
{% data reusables.project-management.create-project-button %}
{% data reusables.project-management.add-column-new-project %}
{% data reusables.project-management.name-project-board-column %}
{% data reusables.project-management.select-column-preset %}
{% data reusables.project-management.select-automation-options-new-column %}
{% data reusables.project-management.click-create-column %}
{% data reusables.project-management.add-more-columns %}

{% data reusables.project-management.edit-project-columns %}

## Leia mais

- "[Sobre quadros de projetos](/articles/about-project-boards)"
- "[Editar um quadro de projeto](/articles/editing-a-project-board)"{% ifversion fpt or ghec %}
- "[Copiar um quadro de projeto](/articles/copying-a-project-board)"{% endif %}
- "[Fechar um quadro de projeto](/articles/closing-a-project-board)"
- "[Sobre a automação para quadros de projeto](/articles/about-automation-for-project-boards)"
