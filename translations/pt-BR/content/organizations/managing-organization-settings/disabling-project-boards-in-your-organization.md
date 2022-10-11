---
title: Desabilitar quadros de projeto na sua organização
intro: Os proprietários da organização podem desativar quadros de projeto em toda a organização e quadros de projeto de repositório em uma organização.
redirect_from:
  - /github/managing-your-work-on-github/managing-project-boards/disabling-project-boards-in-your-organization
  - /articles/disabling-project-boards-in-your-organization
  - /github/managing-your-work-on-github/disabling-project-boards-in-your-organization
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - Pull requests
---

Após a desabilitação dos quadros de projeto em toda a organização, não é mais possível criar quadros de projeto no nível da organização nem acessar os quadros de projeto no nível de organização já existentes pelas URLs anteriores. Os quadros de projeto em repositórios não são afetados.

Após a desabilitação dos quadros de projeto de repositório em uma organização, não é mais possível criar quadros de projeto em repositórios da organização nem acessar os quadros de projeto já existentes em repositórios da organização pelas URLs anteriores. Os quadros de projeto no nível da organização não são afetados.

Quando você desabilita quadros de projeto, deixa de ver informações relacionadas a eles em linhas do tempo ou [logs de auditoria](/articles/reviewing-the-audit-log-for-your-organization/).


{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
4. Decida se deseja desabilitar quadros de projeto em toda a organização, desabilitar quadros de projeto de repositório na organização ou ambos. Em seguida, em "Projects" (Projetos):
    - Para desabilitar quadros de projeto em toda a organização, desmarque **Enable projects for the organization** (Habilitar projetos da organização).
    - Para desabilitar quadros de projeto de repositório na organização, desmarque **Enable projects for all repositories** (Habilitar projetos de todos os repositórios). ![Caixas de seleção para desabilitar projetos de uma organização ou de todos os repositórios de uma organização](/assets/images/help/projects/disable-org-projects-checkbox.png)
5. Clique em **Salvar**.

{% data reusables.organizations.disable_project_board_results %}

### Leia mais

- "[Sobre quadros de projetos](/articles/about-project-boards)"
- "[Fechar um quadro de projeto](/articles/closing-a-project-board)"
- "[Excluir um quadro de projeto](/articles/deleting-a-project-board)"
- "[Desabilitar quadros de projeto em um repositório](/articles/disabling-project-boards-in-a-repository)"
