---
title: Sobre organizações
intro: 'As organizações são contas compartilhadas nas quais empresas e projetos de código aberto podem colaborar em diversas iniciativas ao mesmo tempo, com recursos administrativos e de segurança sofisticados.'
redirect_from:
  - /articles/about-organizations
  - /github/setting-up-and-managing-organizations-and-teams/about-organizations
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Organizations
  - Teams
ms.openlocfilehash: 0269554568c8781706a8d79600f5b6191d0b9598
ms.sourcegitcommit: 1529de77bfcbe45519131b5f5fb3ab319758c2d2
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 11/14/2022
ms.locfileid: '148164328'
---
## Sobre organizações

{% data reusables.organizations.about-organizations %} Para obter mais informações sobre os tipos de contas, confira "[Tipos de contas do {% data variables.product.prodname_dotcom %}](/get-started/learning-about-github/types-of-github-accounts)".

É possível convidar um número ilimitado de pessoas para sua organização e dar a esses membros uma variedade de funções que concedem diferentes níveis de acesso à organização e aos dados associados a ela. Para obter mais informações, confira "[Funções em uma organização](/organizations/managing-peoples-access-to-your-organization-with-roles/roles-in-an-organization)".

Além de gerenciar o acesso à própria organização, é possível gerenciar separadamente o acesso aos repositórios, quadros de projetos e aplicativos dela. Para saber mais, confira "[Funções de repositório para uma organização](/organizations/managing-access-to-your-organizations-repositories/repository-roles-for-an-organization)", "[Permissões do quadro de projetos para uma organização](/organizations/managing-access-to-your-organizations-project-boards/project-board-permissions-for-an-organization)" e "[Gerenciar o acesso aos aplicativos da organização](/organizations/managing-access-to-your-organizations-apps)".

Para simplificar o gerenciamento de acesso e aprimorar a colaboração, é possível criar equipes aninhadas que reflitam a estrutura do grupo, com permissões e menções de acesso em cascata. Para obter mais informações, confira "[Sobre as equipes](/organizations/organizing-members-into-teams/about-teams)".

É possível gerenciar as configurações, como restringir os tipos de repositórios que os membros podem criar, a fim de definir a organização para atender às necessidades exclusivas de seu grupo. Para saber mais, confira "[Gerenciar as configurações da organização](/organizations/managing-organization-settings)".

Para fortalecer a segurança da organização, é possível impor requisitos de segurança e revisar o log de auditoria dela. Para obter mais informações, confira "[Como manter sua organização segura](/organizations/keeping-your-organization-secure)".

Para saber como usar organizações com mais eficiência, confira "[Melhores práticas para organizações](/organizations/collaborating-with-groups-in-organizations/best-practices-for-organizations)".

{% ifversion fpt or ghec %}
## Sobre a disponibilidade do recurso

{% data reusables.organizations.organization-plans %} {% endif %}

## Organizações e contas corporativas

{% ifversion fpt %} As contas corporativas são um recurso do {% data variables.product.prodname_ghe_cloud %} que permitem que os proprietários gerenciem centralmente a política e a cobrança para várias organizações. Para obter mais informações, confira [a documentação do {% data variables.product.prodname_ghe_cloud %}](/enterprise-cloud@latest/organizations/collaborating-with-groups-in-organizations/about-organizations).
{% else %} {% ifversion ghec %} Para organizações que pertencem a uma conta corporativa, a cobrança é gerenciada no nível da conta corporativa e as configurações de cobrança não estão disponíveis no nível da organização. {% endif %} Os proprietários da empresa podem definir a política para todas as organizações na conta corporativa ou permitir que os proprietários da organização definam a política no nível da organização. Os proprietários da organização não podem alterar as configurações aplicadas à sua organização no nível da conta corporativa. Se você tiver dúvidas sobre uma política ou configuração da sua organização, entre em contato com o proprietário da conta corporativa.

{% ifversion ghec %} {% data reusables.enterprise.create-an-enterprise-account %} Para obter mais informações, confira "[Como criar uma conta corporativa](/admin/overview/creating-an-enterprise-account)".

{% data reusables.enterprise-accounts.invite-organization %}

{% endif %} {% endif %}

{% ifversion fpt or ghec %}
## Termos de serviços e proteção de dados para organizações

Uma entidade, como uma empresa, não lucrativa, ou um grupo, pode concordar com os Termos de serviço padrão ou os Termos de serviço corporativos para a respectiva organização. Para obter mais informações, confira "[Como fazer upgrade para os Termos de Serviço Corporativos](/articles/upgrading-to-the-corporate-terms-of-service)".

{% endif %}
