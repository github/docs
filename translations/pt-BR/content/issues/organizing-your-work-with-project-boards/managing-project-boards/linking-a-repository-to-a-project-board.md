---
title: 'Linking a repository to a {% data variables.product.prodname_project_v1 %}'
intro: 'You can link a repository to your organization''s or personal account''s {% data variables.projects.projects_v1_board %}.'
redirect_from:
  - /github/managing-your-work-on-github/managing-project-boards/linking-a-repository-to-a-project-board
  - /articles/linking-a-repository-to-a-project-board
  - /github/managing-your-work-on-github/linking-a-repository-to-a-project-board
versions:
  feature: projects-v1
topics:
  - Pull requests
shortTitle: Vincular repositório ao quadro
allowTitleToDifferFromFilename: true
---

{% data reusables.projects.project_boards_old %}

Anyone with write permissions to a {% data variables.projects.projects_v1_board %} can link repositories owned by that organization or personal account to the {% data variables.projects.projects_v1_board %}. For more information, see "[{% data variables.product.prodname_project_v1_caps %} permissions for an organization](/articles/project-board-permissions-for-an-organization/)" or "[Permission levels for user-owned {% data variables.product.prodname_projects_v1 %}](/articles/permission-levels-for-user-owned-project-boards/)."

{% data reusables.project-management.link-repos-to-project-board %} Você pode adicionar problemas e pull requests de quaisquer repositórios desvinculados digitando a URL do problema ou pull request em um cartão. For more information, see "[Adding issues and pull requests to a {% data variables.product.prodname_project_v1 %}](/articles/adding-issues-and-pull-requests-to-a-project-board)."

1. Navigate to the {% data variables.projects.projects_v1_board %} where you want to link a repository.
{% data reusables.project-management.click-menu %}
{% data reusables.project-management.access-collaboration-settings %}
4. Na barra lateral esquerda, clique em **Linked repositories** (Repositórios vinculados). ![Menu de opção Linked repositories (Repositórios vinculados) na barra lateral esquerda](/assets/images/help/projects/project-board-linked-repositories-setting.png)
5. Clique em **Link a repository** (Vincular um repositório). ![Botão Link a repository (Vincular um repositório) na aba Linked repositories (Repositórios vinculados)](/assets/images/help/projects/link-repository-button.png)
6. Pesquise o repositório que você deseja vincular. ![Campo de pesquisa na janela Link a repository (Vincular um repositório)](/assets/images/help/projects/search-to-link-repository.png)
7. Clique em **Link**. Para desvincular, clique em **Unlink** (Desvincular). ![Botão Link (Vincular)](/assets/images/help/projects/link-button.png)

{% note %}

**Note:** In order to link a repository to your organization or user owned {% data variables.projects.projects_v1_board %} the repository needs to have issues enabled. Ou seja, o repositório tem uma aba "Problemas" (os problemas nos repositórios bifurcados são desabilitados por padrão).  Para obter informações sobre como habilitar ou desabilitar problemas para um repositório, consulte "[Desabilitar problemas para um repositório](/github/managing-your-work-on-github/disabling-issues). "

{% endnote %}

## Leia mais

- "[Sobre o {% data variables.product.prodname_projects_v1 %}](/articles/about-project-boards)"
