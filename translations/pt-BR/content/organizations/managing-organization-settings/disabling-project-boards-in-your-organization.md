---
title: 'Desabilitando {% ifversion projects-v2 %}projetos{% else %}quadros de projetos{% endif %} na sua organização'
intro: 'Os proprietários da organização podem desativar {% ifversion projects-v2 %}em toda a organização {% data variables.projects.projects_v2 %}, em toda a organização {% data variables.projects.projects_v1_boards %}, e o nível de repositório {% data variables.projects.projects_v1_boards %}{% else %}quadros de projetos e quadros de projetos de repositórios em toda a organização{% endif %} em uma organização.'
redirect_from:
  - /github/managing-your-work-on-github/managing-project-boards/disabling-project-boards-in-your-organization
  - /articles/disabling-project-boards-in-your-organization
  - /github/managing-your-work-on-github/disabling-project-boards-in-your-organization
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Pull requests
shortTitle: Desabilitar projetos
allowTitleToDifferFromFilename: true
---

Após a desabilitação dos quadros de projeto em toda a organização, não é mais possível criar quadros de projeto no nível da organização nem acessar os quadros de projeto no nível de organização já existentes pelas URLs anteriores. Os quadros de projeto em repositórios não são afetados. {% ifversion projects-v2 %}Estas configurações aplicam-se a {% data variables.projects.projects_v2 %} e {% data variables.projects.projects_v1_boards %}.{% endif %}

Após a desabilitação dos quadros de projeto de repositório em uma organização, não é mais possível criar quadros de projeto em repositórios da organização nem acessar os quadros de projeto já existentes em repositórios da organização pelas URLs anteriores. Os quadros de projeto no nível da organização não são afetados.


Quando você desabilita quadros de projeto, deixa de ver informações relacionadas a eles em linhas do tempo ou [logs de auditoria](/organizations/keeping-your-organization-secure/reviewing-the-audit-log-for-your-organization).


{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
{% ifversion fpt or ghec or ghes > 3.4 or ghae-issue-5658 %}
1. Na seção "código, planejamento e automação" na barra lateral, clique em **Projetos de {% octicon "table" aria-label="The table icon" %}**.
{% endif %}
1. Decida se deseja desabilitar quadros de projeto em toda a organização, desabilitar quadros de projeto de repositório na organização ou ambos. Em seguida, em "Projects" (Projetos):
    - Para desabilitar quadros de projeto em toda a organização, desmarque **Enable projects for the organization** (Habilitar projetos da organização).
    - Para desabilitar quadros de projeto de repositório na organização, desmarque **Enable projects for all repositories** (Habilitar projetos de todos os repositórios). ![Caixas de seleção para desabilitar projetos de uma organização ou de todos os repositórios de uma organização](/assets/images/help/projects/disable-org-projects-checkbox.png)
1. Clique em **Salvar**.

{% data reusables.organizations.disable_project_board_results %}

## Leia mais

{% ifversion projects-v2 %}- "[Sobre {% data variables.product.prodname_projects_v2 %}](/issues/planning-and-tracking-with-projects/learning-about-projects/about-projects)"{% endif %}
- "[Sobre o {% data variables.product.prodname_projects_v1 %}](/articles/about-project-boards)"
- "[Fechando um {% data variables.projects.projects_v1_board %}](/articles/closing-a-project-board)"
- "[Excluindo um {% data variables.projects.projects_v1_board %}](/articles/deleting-a-project-board)"
- "[Desabilitando {% data variables.projects.projects_v1_boards %} em um repositório](/articles/disabling-project-boards-in-a-repository)"
