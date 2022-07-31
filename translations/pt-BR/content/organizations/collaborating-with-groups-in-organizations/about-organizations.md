---
title: Sobre organizações
intro: 'As organizações são contas compartilhadas em que as empresas e projetos de código aberto podem colaborar em vários projetos de uma só vez, com funcionalidades sofisticadas de segurança e administrativas.'
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
---

## Sobre organizações

{% data reusables.organizations.about-organizations %} Para obter mais informações sobre tipos de conta, consulte "[Tipos de contas de {% data variables.product.prodname_dotcom %}](/get-started/learning-about-github/types-of-github-accounts)".

Você pode convidar um número ilimitado de pessoas para participar da sua organização e, em seguida, dar a esses integrantes da organização uma série de funções que concedam diferentes níveis de acesso à organização e seus dados. Para obter mais informações, consulte "[Funções em uma organização](/organizations/managing-peoples-access-to-your-organization-with-roles/roles-in-an-organization)".

Além de gerenciar o acesso à própria organização, é possível gerenciar separadamente o acesso aos repositórios da organização, quadros de projetos e aplicativos. Para obter mais informações, consulte "[Funções de um repositório para uma organização](/organizations/managing-access-to-your-organizations-repositories/repository-roles-for-an-organization)", "[Permissões do quadro de projeto para uma organização](/organizations/managing-access-to-your-organizations-project-boards/project-board-permissions-for-an-organization)" e "[Gerenciando o acesso dos aplicativos da sua organização](/organizations/managing-access-to-your-organizations-apps)."

Para simplificar o gerenciamento de acesso e melhorar a colaboração, você pode criar equipes aninhadas que refletem a estrutura do seu grupo, com permissões de acesso em cascata e menções. Para obter mais informações, consulte "[Sobre equipes](/organizations/organizing-members-into-teams/about-teams)".

Você pode configurar a organização para atender às necessidades exclusivas do seu grupo gerenciando as configurações como, por exemplo, restringir os tipos de repositórios que os integrantes podem criar. Para obter mais informações, consulte "[Gerenciar as configurações da organização](/organizations/managing-organization-settings)".

Para fortalecer a segurança da sua organização, você pode aplicar os requisitos de segurança e revisar o log de auditoria da organização. Para obter mais informações, consulte "[Mantendo sua organização segura](/organizations/keeping-your-organization-secure)".

{% data reusables.organizations.org-ownership-recommendation %} Para obter mais informações, consulte "[Manter a continuidade da propriedade para sua organização](/organizations/managing-peoples-access-to-your-organization-with-roles/maintaining-ownership-continuity-for-your-organization)".

{% ifversion fpt or ghec %}
## Sobre a disponibilidade de recursos

{% data reusables.organizations.organization-plans %}
{% endif %}

## Organizações e contas corporativas

{% ifversion fpt %}
As contas corporativas são uma funcionalidade de {% data variables.product.prodname_ghe_cloud %} que permite aos proprietários gerenciar a política e cobrança centralmente para várias organizações. Para obter mais informações, consulte [a documentação de {% data variables.product.prodname_ghe_cloud %}](/enterprise-cloud@latest/organizations/collaborating-with-groups-in-organizations/about-organizations).
{% else %}
{% ifversion ghec %}Para organizações que pertencem a uma conta corporativa, a cobrança é gerenciada no nível da conta corporativa, e as configurações de cobrança não estão disponíveis no nível da organização.{% endif %} Os proprietários de empresas podem definir políticas para todas as organizações na conta corporativa ou permitir que os proprietários da organização definam a política no nível da organização. Os proprietários da organização não podem alterar as configurações aplicadas à sua organização no nível da conta corporativa. Se você tiver dúvidas sobre uma política ou configuração da sua organização, entre em contato com o proprietário da conta corporativa.

{% ifversion ghec %}
{% data reusables.enterprise.create-an-enterprise-account %} Para obter mais informações, consulte "[Criando uma conta corporativa](/admin/overview/creating-an-enterprise-account)".

{% data reusables.enterprise-accounts.invite-organization %}
{% endif %}
{% endif %}

{% ifversion fpt or ghec %}
## Termos de serviços e proteção de dados para organizações

Uma entidade, como uma empresa, não lucrativa, ou um grupo, pode concordar com os Termos de serviço padrão ou os Termos de serviço corporativos para a respectiva organização. Para obter mais informações, consulte "[Atualizar para os Termos de serviço corporativos](/articles/upgrading-to-the-corporate-terms-of-service)".

{% endif %}
