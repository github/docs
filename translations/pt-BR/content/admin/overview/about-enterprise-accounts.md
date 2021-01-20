---
title: Sobre contas corporativas
intro: 'Com {% data variables.product.product_name %}, você pode usar uma conta corporativa para dar aos administradores um único ponto de visibilidade e gestão{% if enterpriseServerVersions contains currentVersion %} para cobrança e uso da licença{% endif %}.'
redirect_from:
  - /enterprise/admin/installation/about-enterprise-accounts
  - /enterprise/admin/overview/about-enterprise-accounts
versions:
  enterprise-server: '>=2.20'
  github-ae: '*'
---

### Sobre as contas corporativas do {% data variables.product.product_name %}

Uma conta corporativa permite gerenciar várias organizações{% if enterpriseServerVersions contains currentVersion %} e instâncias de {% data variables.product.prodname_ghe_server %} {% else %} em {% data variables.product.product_name %}{% endif %}. Sua conta corporativa deve ter um manipulador, como uma conta pessoal ou organizacional no {% data variables.product.prodname_dotcom %}. Os administradores corporativos podem gerenciar configurações e preferências, como:

- Acesso de integrante e gerenciamento (integrantes da organização, colaboradores externos){% if enterpriseServerVersions contains currentVersion %}
- Cobrança e uso (instâncias de {% data variables.product.prodname_ghe_server %}, licenças de usuário, pacotes de {% data variables.large_files.product_name_short %}){% endif %}
- Segurança {% if enterpriseServerVersions contains currentVersion %}(logon único, autenticação de dois fatores)
- Compartilhamento de pacotes de solicitação e {% if enterpriseServerVersions contains currentVersion %}suporte {% endif %} com {% data variables.contact.enterprise_support %}{% endif %}

{% if enterpriseServerVersions contains currentVersion %}{% data reusables.enterprise-accounts.enterprise-accounts-billing %} For more information about the management of your {% data variables.product.prodname_ghe_cloud %} subscription, see "[Viewing the subscription and usage for your enterprise account](/articles/viewing-the-subscription-and-usage-for-your-enterprise-account)." {% endif %}Para obter mais informações sobre como gerenciar suas configurações de cobrança de {% data variables.product.product_name %}, consulte "[Gerenciar cobrança para sua empresa](/admin/overview/managing-billing-for-your-enterprise)".

For more information about the management of users, organizations, data, and policies for {% data variables.product.product_location %}, see "[Managing users, organizations, and repositories](/admin/user-management)" and "[Setting policies for your enterprise](/admin/policies)."

For more information about the management of enterprise accounts using the GraphQL API, see "[Enterprise accounts](/graphql/guides/managing-enterprise-accounts)."

{% if enterpriseServerVersions contains currentVersion %}

Para obter mais informações sobre o {% data variables.product.prodname_ghe_cloud %} e {% data variables.product.prodname_ghe_server %}, consulte "[Produtos do {% data variables.product.prodname_dotcom %}](/articles/github-s-products)". Para atualizar para {% data variables.product.prodname_enterprise %} ou para começar com uma conta corporativa, entre em contato com {% data variables.contact.contact_enterprise_sales %}.

### Gerenciando as licenças {% data variables.product.prodname_ghe_server %} vinculadas à sua conta corporativa

{% data reusables.enterprise-accounts.admin-managing-licenses %}

{% endif %}
