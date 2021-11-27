---
title: Sobre contas corporativas
intro: 'Com {% data variables.product.product_name %}, você pode usar uma conta corporativa para {% ifversion ghec %}habilitar a colaboração entre suas organizações, dando{% elsif ghes or ghae %}dando{% endif %} aos administradores um ponto único de visibilidade e gestão.'
redirect_from:
  - /articles/about-github-business-accounts/
  - /articles/about-enterprise-accounts
  - /enterprise/admin/installation/about-enterprise-accounts
  - /enterprise/admin/overview/about-enterprise-accounts
  - /github/setting-up-and-managing-your-enterprise-account/about-enterprise-accounts
  - /github/setting-up-and-managing-your-enterprise/about-enterprise-accounts
  - /github/setting-up-and-managing-your-enterprise/managing-your-enterprise-account/about-enterprise-accounts
versions:
  ghec: '*'
  ghes: '*'
  ghae: '*'
type: overview
topics:
  - Accounts
  - Enterprise
  - Fundamentals
---

## Sobre contas corporativas em {% ifversion ghec %}{% data variables.product.prodname_ghe_cloud %}{% else %}{% data variables.product.product_name %}{% endif %}

{% ifversion ghec %}

Your enterprise account on {% data variables.product.prodname_dotcom_the_website %} allows you to manage multiple organizations. Sua conta corporativa deve ter um manipulador, como uma conta pessoal ou organizacional no {% data variables.product.prodname_dotcom %}.

{% elsif ghes or ghae %}

The enterprise account on {% ifversion ghes %}{% data variables.product.product_location_enterprise %}{% elsif ghae %}{% data variables.product.product_name %}{% endif %} allows you to manage the organizations{% ifversion ghes %} on{% elsif ghae %} owned by{% endif %} your {% ifversion ghes %}{% data variables.product.prodname_ghe_server %} instance{% elsif ghae %}enterprise{% endif %}.

{% endif %}

Organizations are shared accounts where enterprise members can collaborate across many projects at once. Organization owners can manage access to the organization's data and projects with sophisticated security and administrative features. Para obter mais informações, consulte {% ifversion ghec %}"[Sobre as organizações](/organizations/collaborating-with-groups-in-organizations/about-organizations).{% elsif ghes or ghae %}"[Sobre as organizações](/organizations/collaborating-with-groups-in-organizations/about-organizations)" e "[Gerenciando usuários, organizações e repositórios](/admin/user-management)".{% endif %}

{% ifversion ghec %}

Enterprise owners can create organizations and link the organizations to the enterprise. Alternatively, you can invite an existing organization to join your enterprise account. After you add organizations to your enterprise account, you can manage and enforce policies for the organizations. Opções específicas de aplicação variam de acordo com a configuração; normalmente, é possível optar por aplicar uma única política para cada organização na sua conta corporativa ou permitir que proprietários definam a política no nível da organização. Para obter mais informações, consulte "[Definindo políticas para a sua empresa](/admin/policies)".

{% elsif ghes or ghae %}

For more information about the management of policies for your enterprise account, see "[Setting policies for your enterprise](/admin/policies)."

{% endif %}

## About administration of your enterprise account

{% ifversion ghes or ghae %}

From your enterprise account on {% ifversion ghae %}{% data variables.product.product_name %}{% elsif ghes %}a {% data variables.product.prodname_ghe_server %} instance{% endif %}, administrators can view enterprise membership and manage the following for the {% ifversion ghes %}{% data variables.product.prodname_ghe_server %} instance{% elsif ghae %}enterprise on {% data variables.product.prodname_ghe_managed %}{% endif %}.

{% ifversion ghes %}
- License usage{% endif %}
- Security ({% ifversion ghae %}single sign-on, IP allow lists, {% endif %}SSH certificate authorities, two-factor authentication)
- Enterprise policies for organizations owned by the enterprise account

{% endif %}

{% ifversion ghes %}

### About administration of your enterprise account on {% data variables.product.prodname_ghe_cloud %}

{% endif %}

{% ifversion ghec or ghes %}Ao experimentar ou comprar {% data variables.product.prodname_enterprise %}, você também pode{% ifversion ghes %}{% endif %} criar uma conta corporativa para {% data variables.product.prodname_ghe_cloud %} em {% data variables.product.prodname_dotcom_the_website %}. Administrators for the enterprise account on {% data variables.product.prodname_dotcom_the_website %} can view membership and manage the following for the enterprise account{% ifversion ghes %} on {% data variables.product.prodname_dotcom_the_website %}{% endif %}.

- Billing and usage (services on {% data variables.product.prodname_dotcom_the_website %}, {% data variables.product.prodname_GH_advanced_security %}, user licenses)
- Security (single sign-on, IP allow lists, SSH certificate authorities, two-factor authentication)
- Enterprise policies for organizations owned by the enterprise account

If you use both {% data variables.product.prodname_ghe_cloud %} and {% data variables.product.prodname_ghe_server %}, you can also manage the following for {% data variables.product.prodname_ghe_server %} from your enterprise account on {% data variables.product.prodname_dotcom_the_website %}.

- Billing and usage for {% data variables.product.prodname_ghe_server %} instances
- Solicitações e compartilhamento de pacote de suporte com {% data variables.contact.enterprise_support %}

You can also connect the enterprise account on {% data variables.product.product_location_enterprise %} to your enterprise account on {% data variables.product.prodname_dotcom_the_website %} to see license usage details for your {% data variables.product.prodname_enterprise %} subscription from {% data variables.product.prodname_dotcom_the_website %}. Para obter mais informações, consulte {% ifversion ghec %}"[Sincronizando o uso da licença entre {% data variables.product.prodname_ghe_server %} e {% data variables.product.prodname_ghe_cloud %}](/enterprise-server/billing/managing-your-license-for-github-enterprise/syncing-license-usage-between-github-enterprise-server-and-github-enterprise-cloud)" na documentação de {% data variables.product.prodname_ghe_server %}.{% elsif ghes %}"[Sincronizando o uso da licença entre {% data variables.product.prodname_ghe_server %} e {% data variables.product.prodname_ghe_cloud %}](/billing/managing-your-license-for-github-enterprise/syncing-license-usage-between-github-enterprise-server-and-github-enterprise-cloud)."{% endif %}

For more information about the differences between {% data variables.product.prodname_ghe_cloud %} and {% data variables.product.prodname_ghe_server %}, see "[{% data variables.product.prodname_dotcom %}'s products](/get-started/learning-about-github/githubs-products)." {% data reusables.enterprise-accounts.to-upgrade-or-get-started %}

{% endif %}

{% ifversion ghec %}

## Sobre o {% data variables.product.prodname_emus %}

{% data reusables.enterprise-accounts.emu-short-summary %}

{% endif %}

## About billing for your enterprise account

The bill for your enterprise account includes the monthly cost for each member of your enterprise. A conta inclui {% ifversion ghec %}todas as licenças pagas em organizações fora da sua conta corporativa, assinaturas de aplicativos em {% data variables.product.prodname_marketplace %}, {% endif %}{% ifversion ghec or ghae %}serviços adicionais pagos pela empresa{% ifversion ghec %} como pacotes de dados de {% data variables.large_files.product_name_long %},{% endif %} e{% endif %} de uso para {% data variables.product.prodname_GH_advanced_security %}.

{% ifversion ghec %}

For more information about billing for your {% data variables.product.prodname_ghe_cloud %} subscription, see "[Viewing the subscription and usage for your enterprise account](/billing/managing-billing-for-your-github-account/viewing-the-subscription-and-usage-for-your-enterprise-account)" and "[About billing for your enterprise](/billing/managing-billing-for-your-github-account/about-billing-for-your-enterprise)."

{% elsif ghes %}

{% data reusables.enterprise-accounts.enterprise-accounts-billing %}

Para obter mais informações sobre a cobrança para {% ifversion ghec %}{% data variables.product.prodname_ghe_cloud %}{% else %}{% data variables.product.product_name %}{% endif %}, consulte "[Sobre a cobrança para a sua empresa](/billing/managing-billing-for-your-github-account/about-billing-for-your-enterprise)."

{% endif %}

{% ifversion ghec or ghes %}

{% ifversion ghec %}

{% data variables.product.prodname_enterprise %} offers two deployment options. In addition to {% data variables.product.prodname_ghe_cloud %}, you can use {% data variables.product.prodname_ghe_server %} to host development work for your enterprise in your data center or supported cloud provider. {% endif %}Enterprise owners on {% data variables.product.prodname_dotcom_the_website %} can use an enterprise account to manage payment and licensing for {% data variables.product.prodname_ghe_server %} instances. For more information, see "[{% data variables.product.company_short %}'s products](/get-started/learning-about-github/githubs-products#github-enterprise)" and "[Managing your license for {% data variables.product.prodname_enterprise %}](/billing/managing-your-license-for-github-enterprise)."

{% endif %}

## Leia mais

- "[Enterprise accounts](/graphql/guides/managing-enterprise-accounts)" in the GraphQL API documentation
