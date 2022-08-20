---
title: 'Vinculando um repositório a um {% data variables.product.prodname_project_v1 %}'
intro: 'Você pode vincular um repositório ao {% data variables.projects.projects_v1_board %} da sua organização ou da sua conta pessoal.'
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

Qualquer pessoa com permissões de gravação em um {% data variables.projects.projects_v1_board %} pode vincular repositórios pertencentes a essa organização ou conta pessoal para o {% data variables.projects.projects_v1_board %}. Para obter mais informações, consulte "[{% data variables.product.prodname_project_v1_caps %} permissões para uma organização](/articles/project-board-permissions-for-an-organization/)" ou "[níveis de Permissão para os níveis de usuário {% data variables.product.prodname_projects_v1 %}](/articles/permission-levels-for-user-owned-project-boards/)".

{% data reusables.project-management.link-repos-to-project-board %} Você pode adicionar problemas e pull requests de quaisquer repositórios desvinculados digitando a URL do problema ou pull request em um cartão. Para obter mais informações, consulte "[Adicionando problemas e pull requests a um {% data variables.product.prodname_project_v1 %}](/articles/adding-issues-and-pull-requests-to-a-project-board)".

1. Acesse o {% data variables.projects.projects_v1_board %} onde você deseja vincular um repositório.
{% data reusables.project-management.click-menu %}
{% data reusables.project-management.access-collaboration-settings %}
4. Na barra lateral esquerda, clique em **Linked repositories** (Repositórios vinculados). ![Menu de opção Linked repositories (Repositórios vinculados) na barra lateral esquerda](/assets/images/help/projects/project-board-linked-repositories-setting.png)
5. Clique em **Link a repository** (Vincular um repositório). ![Botão Link a repository (Vincular um repositório) na aba Linked repositories (Repositórios vinculados)](/assets/images/help/projects/link-repository-button.png)
6. Pesquise o repositório que você deseja vincular. ![Campo de pesquisa na janela Link a repository (Vincular um repositório)](/assets/images/help/projects/search-to-link-repository.png)
7. Clique em **Link**. Para desvincular, clique em **Unlink** (Desvincular). ![Botão Link (Vincular)](/assets/images/help/projects/link-button.png)

{% note %}

**Observação:** Para vincular um repositório ao {% data variables.projects.projects_v1_board %} pertencente à sua organização ou usuário, o repositório deverá ter problemas habilitados. Ou seja, o repositório tem uma aba "Problemas" (os problemas nos repositórios bifurcados são desabilitados por padrão).  Para obter informações sobre como habilitar ou desabilitar problemas para um repositório, consulte "[Desabilitar problemas para um repositório](/github/managing-your-work-on-github/disabling-issues). "

{% endnote %}

## Leia mais

- "[Sobre o {% data variables.product.prodname_projects_v1 %}](/articles/about-project-boards)"
