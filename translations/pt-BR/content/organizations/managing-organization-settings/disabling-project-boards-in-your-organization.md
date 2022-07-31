---
title: 'Disabling {% ifversion projects-v2 %}projects{% else %}project boards{% endif %} in your organization'
intro: 'Organization owners can turn off {% ifversion projects-v2 %}organization-wide {% data variables.projects.projects_v2 %}, organization-wide {% data variables.projects.projects_v1_boards %}, and repository-level {% data variables.projects.projects_v1_boards %}{% else %}organization-wide project boards and repository project boards{% endif %} in an organization.'
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
shortTitle: Disable projects
allowTitleToDifferFromFilename: true
---

Após a desabilitação dos quadros de projeto em toda a organização, não é mais possível criar quadros de projeto no nível da organização nem acessar os quadros de projeto no nível de organização já existentes pelas URLs anteriores. Os quadros de projeto em repositórios não são afetados. {% ifversion projects-v2 %}These settings apply to {% data variables.projects.projects_v2 %} and {% data variables.projects.projects_v1_boards %}.{% endif %}

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

{% ifversion projects-v2 %}- "[About {% data variables.product.prodname_projects_v2 %}](/issues/planning-and-tracking-with-projects/learning-about-projects/about-projects)"{% endif %}
- "[Sobre o {% data variables.product.prodname_projects_v1 %}](/articles/about-project-boards)"
- "[Closing a {% data variables.projects.projects_v1_board %}](/articles/closing-a-project-board)"
- "[Deleting a {% data variables.projects.projects_v1_board %}](/articles/deleting-a-project-board)"
- "[Disabling {% data variables.projects.projects_v1_boards %} in a repository](/articles/disabling-project-boards-in-a-repository)"
