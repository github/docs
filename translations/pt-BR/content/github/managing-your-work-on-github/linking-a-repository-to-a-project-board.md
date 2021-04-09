---
title: Vincular um repositório a um quadro de projeto
intro: É possível vincular um repositório ao quadro de projeto da organização ou conta de usuário.
redirect_from:
  - /articles/linking-a-repository-to-a-project-board
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - Pull requests
---


Qualquer pessoa com permissões de gravação em um quadro de projeto pode vincular repositórios pertencentes a essa organização ou conta de usuário ao quadro de projeto. Para obter mais informações, consulte "[Permissões de quadro de projeto da organização](/articles/project-board-permissions-for-an-organization/)" ou "[Níveis de permissão para quadros de projetos de propriedade de usuários](/articles/permission-levels-for-user-owned-project-boards/)".

{% data reusables.project-management.link-repos-to-project-board %} Você pode adicionar problemas e pull requests de quaisquer repositórios desvinculados digitando a URL do problema ou pull request em um cartão. Para obter mais informações, consulte "[Adicionar problemas e pull requests a um quadro de projeto](/articles/adding-issues-and-pull-requests-to-a-project-board)".

1. Navegue até o quadro de projeto onde você quer vincular um repositório.
{% data reusables.project-management.click-menu %}
{% data reusables.project-management.access-collaboration-settings %}
4. Na barra lateral esquerda, clique em **Linked repositories** (Repositórios vinculados). ![Menu de opção Linked repositories (Repositórios vinculados) na barra lateral esquerda](/assets/images/help/projects/project-board-linked-repositories-setting.png)
5. Clique em **Link a repository** (Vincular um repositório). ![Botão Link a repository (Vincular um repositório) na aba Linked repositories (Repositórios vinculados)](/assets/images/help/projects/link-repository-button.png)
6. Pesquise o repositório que você deseja vincular. ![Campo de pesquisa na janela Link a repository (Vincular um repositório)](/assets/images/help/projects/search-to-link-repository.png)
7. Clique em **Link**. Para desvincular, clique em **Unlink** (Desvincular). ![Botão Link (Vincular)](/assets/images/help/projects/link-button.png)

{% note %}

**Observação:** Para vincular um repositório à sua organização ou quadro de projeto de propriedade de usuário, o repositório precisa ter problemas habilitados. Ou seja, o repositório tem uma aba "Problemas" (os problemas nos repositórios bifurcados são desabilitados por padrão).  Para obter informações sobre como habilitar ou desabilitar problemas para um repositório, consulte "[Desabilitar problemas para um repositório](/github/managing-your-work-on-github/disabling-issues). "

{% endnote %}

### Leia mais

- "[Sobre quadros de projetos](/articles/about-project-boards)"
