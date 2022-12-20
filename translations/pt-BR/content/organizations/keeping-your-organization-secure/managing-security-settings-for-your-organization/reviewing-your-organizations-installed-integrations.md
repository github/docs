---
title: Revisar as integrações instaladas da organização
intro: Você pode revisar os níveis de permissão das integrações instaladas da organização e configurar o acesso de cada integração aos repositórios da organização.
redirect_from:
- /articles/reviewing-your-organization-s-installed-integrations
- /articles/reviewing-your-organizations-installed-integrations
- /github/setting-up-and-managing-organizations-and-teams/reviewing-your-organizations-installed-integrations
- /organizations/keeping-your-organization-secure/reviewing-your-organizations-installed-integrations
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
- Organizations
- Teams
shortTitle: Review installed integrations
ms.openlocfilehash: 66645e6ebb4305a34cd7735269d77881ea2ed5ee
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/11/2022
ms.locfileid: "145126495"
---
{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% ifversion fpt or ghec or ghes > 3.4 or ghae-issue-5658 %}
1. Na seção "Integrações" da barra lateral, clique em **{% octicon "apps" aria-label="The apps icon" %} {% data variables.product.prodname_github_apps %}** .
{% else %}
1. Na barra lateral esquerda, clique em **{% data variables.product.prodname_github_apps %} instalados**.
  ![Guia {% data variables.product.prodname_github_apps %} instalados na barra lateral das configurações da organização](/assets/images/help/organizations/org-settings-installed-github-apps.png) {% endif %}
2. Ao lado do {% data variables.product.prodname_github_app %} que você deseja revisar, clique em **Configurar**.
  ![Botão Configurar](/assets/images/help/organizations/configure-installed-integration-button.png)
6. Revise as permissões e o acesso ao repositório dos {% data variables.product.prodname_github_app %}s.
  ![Opção usada para fornecer ao {% data variables.product.prodname_github_app %} acesso a todos os repositórios ou a repositórios específicos](/assets/images/help/organizations/toggle-integration-repo-access.png)
    - Para permitir ao {% data variables.product.prodname_github_app %} acesso a todos os repositórios da sua organização, selecione **Todos os repositórios**.
    - Para escolher repositórios específicos nos quais você dará acesso ao aplicativo, selecione **Somente repositórios selecionados** e digite o nome de um repositório.
7. Clique em **Save** (Salvar).
