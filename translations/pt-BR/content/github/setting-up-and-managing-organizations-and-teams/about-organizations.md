---
title: Sobre organizações
intro: As organizações são contas compartilhadas onde empresas e projetos de código aberto podem colaborar em muitos projetos de uma vez. Os proprietários e administradores podem gerenciar o acesso de integrantes aos dados e projetos da organização com recursos avançados administrativos e de segurança.
redirect_from:
  - /articles/about-organizations
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

{% data reusables.organizations.organizations_include %}

{% if currentVersion == "free-pro-team@latest" %}
### Organizações e contas corporativas

As contas corporativas permitem que proprietários gerenciem centralmente a política e a cobrança para várias organizações do {% data variables.product.prodname_dotcom_the_website %}.

Para organizações que pertencem a uma conta corporativa, a cobrança é gerenciada no nível da conta corporativa e as configurações de cobrança não estão disponíveis no nível da organização. Os proprietários de empresa podem definir a política para todas as organizações na conta corporativa ou permitir que os proprietários da organização definam a política no nível da organização. Os proprietários da organização não podem alterar as configurações aplicadas à sua organização no nível da conta corporativa. Se você tiver dúvidas sobre uma política ou configuração da sua organização, entre em contato com o proprietário da conta corporativa.

{% data reusables.gated-features.enterprise-accounts %}

{% data reusables.organizations.org-ownership-recommendation %} Para obter mais informações, consulte "[Manter a continuidade da propriedade para sua organização](/github/setting-up-and-managing-organizations-and-teams/maintaining-ownership-continuity-for-your-organization)".

### Termos de serviços e proteção de dados para organizações

Uma entidade, como uma empresa, não lucrativa, ou um grupo, pode concordar com os Termos de serviço padrão ou os Termos de serviço corporativos para a respectiva organização. Para obter mais informações, consulte "[Atualizar para os Termos de serviço corporativos](/articles/upgrading-to-the-corporate-terms-of-service)".

{% data reusables.organizations.enter-data-protection-agreement %} Para obter mais informações, consulte "[Inserir um contato de proteção de dados com o {% data variables.product.prodname_dotcom %} para conformidade com o regulamento GDPR](/articles/entering-a-data-protection-agreement-with-github-for-gdpr-compliance)".
{% endif %}
