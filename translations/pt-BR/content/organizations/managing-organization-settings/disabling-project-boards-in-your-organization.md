---
title: 'Desabilitar {% ifversion projects-v2 %}projetos{% else %}quadros de projetos{% endif %} na sua organização'
intro: 'Os proprietários da organização podem desligar {% ifversion projects-v2 %}{% data variables.projects.projects_v2 %} em toda a organização, {% data variables.projects.projects_v1_boards %} em toda a organização e {% data variables.projects.projects_v1_boards %} de nível de repositório{% else %}quadros de projetos em toda a organização e de nível de repositório{% endif %} em uma organização.'
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
ms.openlocfilehash: e1e2aed1e7c689bee83dabc4a6750f8976206f4a
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/05/2022
ms.locfileid: '147423321'
---
Após a desabilitação dos quadros de projeto em toda a organização, não é mais possível criar quadros de projeto no nível da organização nem acessar os quadros de projeto no nível de organização já existentes pelas URLs anteriores. Os quadros de projeto em repositórios não são afetados. {% ifversion projects-v2 %}Essas configurações se aplicam a {% data variables.projects.projects_v2 %} e {% data variables.projects.projects_v1_boards %}.{% endif %}

Após a desabilitação dos quadros de projeto de repositório em uma organização, não é mais possível criar quadros de projeto em repositórios da organização nem acessar os quadros de projeto já existentes em repositórios da organização pelas URLs anteriores. Os quadros de projeto no nível da organização não são afetados.


Ao desabilitar os quadros de projetos, você não verá mais informações do quadro de projetos nas linhas do tempo nem nos [logs de auditoria](/organizations/keeping-your-organization-secure/reviewing-the-audit-log-for-your-organization).


{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% ifversion fpt or ghec or ghes > 3.4 or ghae-issue-5658 %}
1. Na seção "Planejamento de código e automação" da barra lateral, clique em **{% octicon "table" aria-label="The table icon" %} Projetos**.
{% endif %}
1. Decida se deseja desabilitar quadros de projeto em toda a organização, desabilitar quadros de projeto de repositório na organização ou ambos. Em seguida, em "Projects" (Projetos):
    - Para desabilitar os quadros de projetos de toda a organização, desmarque a opção **Habilitar projetos para a organização**.
    - Para desabilitar os quadros de projetos do repositório na organização, desmarque a opção **Habilitar projetos para todos os repositórios**.
  ![Caixas de seleção usadas para desabilitar projetos de uma organização ou de todos os repositórios de uma organização](/assets/images/help/projects/disable-org-projects-checkbox.png)
1. Clique em **Salvar**.

{% data reusables.organizations.disable_project_board_results %}

## Leitura adicional

{% ifversion projects-v2 %}- "[Sobre {% data variables.product.prodname_projects_v2 %}](/issues/planning-and-tracking-with-projects/learning-about-projects/about-projects)"{% endif %}
- "[Sobre {% data variables.product.prodname_projects_v1 %}](/articles/about-project-boards)"
- "[Fechar um {% data variables.projects.projects_v1_board %}](/articles/closing-a-project-board)"
- "[Excluir um {% data variables.projects.projects_v1_board %}](/articles/deleting-a-project-board)"
- "[Desabilitar {% data variables.projects.projects_v1_boards %} em um repositório](/articles/disabling-project-boards-in-a-repository)"
