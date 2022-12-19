---
title: Exibir pessoas com acesso ao seu repositório
intro: Você pode visualizar{% ifversion ghec or ghes or ghae %} e exportar{% endif %} uma lista de pessoas com acesso a um repositório dentro de uma organização.
redirect_from:
- /articles/viewing-people-with-access-to-your-repository
- /github/setting-up-and-managing-organizations-and-teams/viewing-people-with-access-to-your-repository
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
- Organizations
- Teams
shortTitle: View people with access
permissions: Organization owners can view people with access to a repository.
ms.openlocfilehash: 01ee5b1844e32b4ba631fda67babaa9e9f8a982e
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/11/2022
ms.locfileid: "147066631"
---
## Sobre a lista de pessoas com acesso ao seu repositório

Você pode usar essas informações para ajudar pessoas fora do quadro, coletar dados para conformidade e outras verificações gerais de segurança. 

{% ifversion fpt %} As organizações que usam o {% data variables.product.prodname_ghe_cloud %} também podem exportar uma lista CSV de pessoas que têm acesso a um repositório. Para obter mais informações, confira [a documentação do {% data variables.product.prodname_ghe_cloud %}](/enterprise-cloud@latest/organizations/managing-access-to-your-organizations-repositories/viewing-people-with-access-to-your-repository).
{% endif %}

{% ifversion fpt or ghec or ghes > 3.3 or ghae-issue-5974 %} ![Visão geral do gerenciamento de acesso](/assets/images/help/repository/manage-access-overview.png) {% else %} ![Lista de permissões de pessoas no repositório](/assets/images/help/repository/repository-permissions-list.png) {% endif %}
## Exibir pessoas com acesso ao seu repositório

{% ifversion fpt or ghec or ghes > 3.3 or ghae-issue-5974 %} Você pode ter uma visão geral combinada de equipes e pessoas com acesso ao repositório nas configurações do repositório. Para obter mais informações, confira "[Como gerenciar equipes e pessoas com acesso ao seu repositório](/repositories/managing-your-repositorys-settings-and-features/managing-repository-settings/managing-teams-and-people-with-access-to-your-repository#about-access-management-for-repositories)". {% else %} {% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.accessing-repository-graphs %} {% data reusables.repositories.accessing-repository-people %} {% endif %}

{% ifversion ghec or ghes or ghae %}
## Exportar uma lista de pessoas com acesso a um repositório

{% ifversion ghec %} {% note %}

**Observação:** somente as organizações que usam o {% data variables.product.prodname_ghe_cloud %} podem exportar uma lista de pessoas com acesso a um repositório. {% data reusables.enterprise.link-to-ghec-trial %}

{% endnote %} {% endif %}

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.accessing-repository-graphs %} {% data reusables.repositories.accessing-repository-people %}
4. Clique em **Exportar CSV**.
  ![Guia Pessoas na barra lateral do repositório](/assets/images/help/repository/export-repository-permissions.png) {% endif %}
