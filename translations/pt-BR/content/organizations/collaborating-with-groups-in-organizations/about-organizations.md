---
title: Sobre organizações
intro: As organizações são contas compartilhadas onde empresas e projetos de código aberto podem colaborar em muitos projetos de uma vez. Os proprietários e administradores podem gerenciar o acesso de integrantes aos dados e projetos da organização com recursos avançados administrativos e de segurança.
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

{% data reusables.organizations.about-organizations %}

{% data reusables.organizations.organizations_include %}

{% data reusables.organizations.org-ownership-recommendation %} Para obter mais informações, consulte "[Manter a continuidade da propriedade para sua organização](/organizations/managing-peoples-access-to-your-organization-with-roles/maintaining-ownership-continuity-for-your-organization)".

{% ifversion fpt or ghec %}
## Organizações e contas corporativas

Enterprise accounts are a feature of {% data variables.product.prodname_ghe_cloud %} that allow owners to centrally manage policy and billing for multiple organizations.

Para organizações que pertencem a uma conta corporativa, a cobrança é gerenciada no nível da conta corporativa e as configurações de cobrança não estão disponíveis no nível da organização. Os proprietários de empresa podem definir a política para todas as organizações na conta corporativa ou permitir que os proprietários da organização definam a política no nível da organização. Os proprietários da organização não podem alterar as configurações aplicadas à sua organização no nível da conta corporativa. Se você tiver dúvidas sobre uma política ou configuração da sua organização, entre em contato com o proprietário da conta corporativa.

{% data reusables.enterprise.create-an-enterprise-account %} For more information, see "[Creating an enterprise account]({% ifversion fpt %}/enterprise-cloud@latest{% endif %}/admin/overview/creating-an-enterprise-account){% ifversion ghec %}."{% else %}" in the {% data variables.product.prodname_ghe_cloud %} documentation.{% endif %}

{% data reusables.enterprise-accounts.invite-organization %}

## Termos de serviços e proteção de dados para organizações

Uma entidade, como uma empresa, não lucrativa, ou um grupo, pode concordar com os Termos de serviço padrão ou os Termos de serviço corporativos para a respectiva organização. Para obter mais informações, consulte "[Atualizar para os Termos de serviço corporativos](/articles/upgrading-to-the-corporate-terms-of-service)".

{% endif %}
