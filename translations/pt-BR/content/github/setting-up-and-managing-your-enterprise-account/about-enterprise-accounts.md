---
title: Sobre contas corporativas
intro: 'Com o {% data variables.product.prodname_ghe_cloud %}, você pode criar uma conta corporativa para permitir a colaboração entre suas organizações, ao mesmo tempo que fornece aos administradores um único ponto de visibilidade e gerenciamento.'
product: '{% data reusables.gated-features.enterprise-accounts %}'
redirect_from:
  - /articles/about-github-business-accounts/
  - /articles/about-enterprise-accounts
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

### Sobre contas corporativas

Uma conta corporativa permite que você gerencie múltiplas organizações {% data variables.product.prodname_dotcom %} e instâncias {% data variables.product.prodname_ghe_server %}. Sua conta corporativa deve ter um manipulador, como uma conta pessoal ou organizacional no {% data variables.product.prodname_dotcom %}. Os administradores corporativos podem gerenciar configurações e preferências, como:

- Acesso e gerenciamento de integrantes (integrantes da organização, colaboradores externos)
- Faturamento e uso de instâncias de ({% data variables.product.prodname_ghe_server %}, licenças de usuário, pacotes de {% data variables.large_files.product_name_short %})
- Segurança (logon único, autenticação de dois fatores)
- Solicitações e compartilhamento de pacote de suporte com {% data variables.contact.enterprise_support %}

{% data reusables.enterprise-accounts.enterprise-accounts-billing %}

Para obter mais informações sobre o {% data variables.product.prodname_ghe_cloud %} e {% data variables.product.prodname_ghe_server %}, consulte "[Produtos do {% data variables.product.prodname_dotcom %}](/articles/github-s-products)". Para atualizar para {% data variables.product.prodname_enterprise %} ou para começar com uma conta corporativa, entre em contato com {% data variables.contact.contact_enterprise_sales %}.

Para obter mais informações sobre acesso e gerenciamento de integrantes, consulte "[Gerenciar usuários na sua conta corporativa](/articles/managing-users-in-your-enterprise-account)".

Para obter mais informações sobre o gerenciamento de contas corporativas usando a API GraphQL, consulte "[Contas corporativas](/v4/guides/managing-enterprise-accounts)".

### Gerenciar organizações vinculadas à sua conta corporativa

As organizações são contas compartilhadas, onde grupos de pessoas podem colaborar em vários projetos de uma vez. Os proprietários podem gerenciar o acesso dos integrantes aos dados e projetos da organização com recursos sofisticados de segurança e administrativos. Para obter mais informações, consulte "[Sobre organizações](/articles/about-organizations)".

Os proprietários corporativos podem criar organizações e vinculá-las à empresa. Após adição das organizações à conta corporativa, você pode gerenciar e aplicar as políticas das organizações. Opções específicas de aplicação variam de acordo com a configuração; normalmente, é possível optar por aplicar uma única política para cada organização na sua conta corporativa ou permitir que proprietários definam a política no nível da organização.

Para obter mais informações, consulte "[Gerenciar organizações na sua conta corporativa](/articles/managing-organizations-in-your-enterprise-account)" e "[Configurar políticas para organizações em sua conta corporativa](/articles/setting-policies-for-organizations-in-your-enterprise-account)".

### Gerenciando as licenças {% data variables.product.prodname_ghe_server %} vinculadas à sua conta corporativa

{% data reusables.enterprise-accounts.admin-managing-licenses %}
