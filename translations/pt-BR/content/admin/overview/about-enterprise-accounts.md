---
title: Sobre contas corporativas
intro: 'Com {% data variables.product.product_name %}, você pode usar uma conta corporativa para {% ifversion ghec %}habilitar a colaboração entre suas organizações, dando{% elsif ghes or ghae %}dando{% endif %} aos administradores um ponto único de visibilidade e gestão.'
redirect_from:
  - /articles/about-github-business-accounts
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

Sua conta corporativa no {% data variables.product.prodname_dotcom_the_website %} permite que você gerencie múltiplas organizações. Sua conta corporativa deve ter um manipulador, como uma conta de usuário ou organizacional no {% data variables.product.prodname_dotcom %}.

{% elsif ghes or ghae %}

A conta corporativa em {% ifversion ghes %}{% data variables.product.product_location_enterprise %}{% elsif ghae %}{% data variables.product.product_name %}{% endif %} permite que você gerencie as organizações{% ifversion ghes %} em{% elsif ghae %} pertencentes à{% endif %} sua instância {% ifversion ghes %}{% data variables.product.prodname_ghe_server %}{% elsif ghae %}empresa{% endif %}.

{% endif %}

As organizações são contas compartilhadas em que os integrantes da empresa podem colaborar em muitos projetos de uma só vez. Os proprietários da organização podem gerenciar o acesso aos dados e projetos da organização, com recursos sofisticados de segurança e administrativos. Para obter mais informações, consulte {% ifversion ghec %}"[Sobre as organizações](/organizations/collaborating-with-groups-in-organizations/about-organizations).{% elsif ghes or ghae %}"[Sobre as organizações](/organizations/collaborating-with-groups-in-organizations/about-organizations)" e "[Gerenciando usuários, organizações e repositórios](/admin/user-management)".{% endif %}

{% ifversion ghec %}

Os proprietários das empresas podem criar organizações e vincular as organizações à empresa. Como alternativa, você pode convidar uma organização existente para participar da conta corporativa. Depois de adicionar organizações à conta corporativa, você pode gerenciar e aplicar políticas para as organizações. Opções específicas de aplicação variam de acordo com a configuração; normalmente, é possível optar por aplicar uma única política para cada organização na sua conta corporativa ou permitir que proprietários definam a política no nível da organização. Para obter mais informações, consulte "[Definindo políticas para a sua empresa](/admin/policies)".

{% data reusables.enterprise.create-an-enterprise-account %} Para obter mais informações, consulte "[Criando uma conta corporativa](/admin/overview/creating-an-enterprise-account)".

{% elsif ghes or ghae %}

Para obter mais informações sobre o gerenciamento de políticas para a conta corporativa, consulte "[Políticas de configuração para a sua empresa](/admin/policies)".

{% endif %}

## Sobre a administração da conta corporativa

{% ifversion ghes or ghae %}

Na sua conta corporativa em {% ifversion ghae %}{% data variables.product.product_name %}{% elsif ghes %}uma instância de {% data variables.product.prodname_ghe_server %}{% endif %}, os administradores podem visualizar{% if remove-enterprise-members %} e gerenciar{% endif %} membros corporativos{% if enterprise-owner-join-org %}, gerenciar seus próprios integrantes em organizações pertencentes à empresa,{% endif %} e gerenciar o seguinte para a instância da {% ifversion ghes %}{% data variables.product.prodname_ghe_server %}{% elsif ghae %}empresa em {% data variables.product.prodname_ghe_managed %}{% endif %}.

{% ifversion ghes %}
- Uso da licença{% endif %}
- Segurança ({% ifversion ghae %}logon único, listas de permissão de IP, {% endif %}autoridades de certificação SSH, autenticação de dois fatores)
- Políticas corporativas para organizações pertencentes à conta corporativa

{% endif %}

{% ifversion ghes %}

### Sobre a administração da conta corporativa em {% data variables.product.prodname_ghe_cloud %}

{% endif %}

{% ifversion ghec or ghes %}Ao experimentar ou comprar {% data variables.product.prodname_enterprise %}, você também pode{% ifversion ghes %}{% endif %} criar uma conta corporativa para {% data variables.product.prodname_ghe_cloud %} em {% data variables.product.prodname_dotcom_the_website %}. Os administradores da conta corporativa em {% data variables.product.prodname_dotcom_the_website %} podem ver {% if remove-enterprise-members %} e gerenciar{% endif %} a assoviação corporativa{% if enterprise-owner-join-org %}, gerenciar seus próprios integrantes em organizações pertencentes à empresa,{% endif %} e gerenciae o seguinte para a conta corporativa{% ifversion ghes %} em {% data variables.product.prodname_dotcom_the_website %}{% endif %}.

- Cobrança e uso (serviços em {% data variables.product.prodname_dotcom_the_website %}, {% data variables.product.prodname_GH_advanced_security %}, licenças de usuários)
- Segurança (logon único, listas de permissão de IP, autoridades de certificação SSH, autenticação de dois fatores)
- Políticas corporativas para organizações pertencentes à conta corporativa

Se você usar {% data variables.product.prodname_ghe_cloud %} e {% data variables.product.prodname_ghe_server %}, você também pode gerenciar o seguinte para {% data variables.product.prodname_ghe_server %} na sua conta corporativa em {% data variables.product.prodname_dotcom_the_website %}.

- Cobrança e uso para instâncias de {% data variables.product.prodname_ghe_server %}
- Solicitações e compartilhamento de pacote de suporte com {% data variables.contact.enterprise_support %}

Você também pode conectar a conta corporativa em {% data variables.product.product_location_enterprise %} à sua conta corporativa em {% data variables.product.prodname_dotcom_the_website %} para ver os detalhes de uso da licença para sua assinatura {% data variables.product.prodname_enterprise %} de {% data variables.product.prodname_dotcom_the_website %}. Para obter mais informações, consulte {% ifversion ghec %}"[Sincronizando o uso da licença entre {% data variables.product.prodname_ghe_server %} e {% data variables.product.prodname_ghe_cloud %}](/enterprise-server/billing/managing-your-license-for-github-enterprise/syncing-license-usage-between-github-enterprise-server-and-github-enterprise-cloud)" na documentação de {% data variables.product.prodname_ghe_server %}.{% elsif ghes %}"[Sincronizando o uso da licença entre {% data variables.product.prodname_ghe_server %} e {% data variables.product.prodname_ghe_cloud %}](/billing/managing-your-license-for-github-enterprise/syncing-license-usage-between-github-enterprise-server-and-github-enterprise-cloud)."{% endif %}

Para mais informações sobre as diferenças entre {% data variables.product.prodname_ghe_cloud %} e {% data variables.product.prodname_ghe_server %}, consulte "[produtos de {% data variables.product.prodname_dotcom %}](/get-started/learning-about-github/githubs-products)" {% data reusables.enterprise-accounts.to-upgrade-or-get-started %}

{% endif %}

{% ifversion ghec %}

## Sobre o {% data variables.product.prodname_emus %}

{% data reusables.enterprise-accounts.emu-short-summary %}

{% endif %}

## Sobre a cobrança para a sua conta corporativa

A conta corporativa inclui o custo mensal para cada integrante da sua empresa. A conta inclui {% ifversion ghec %}todas as licenças pagas em organizações fora da sua conta corporativa, assinaturas de aplicativos em {% data variables.product.prodname_marketplace %}, {% endif %}{% ifversion ghec or ghae %}serviços adicionais pagos pela empresa{% ifversion ghec %} como pacotes de dados de {% data variables.large_files.product_name_long %},{% endif %} e{% endif %} de uso para {% data variables.product.prodname_GH_advanced_security %}.

{% ifversion ghec %}

Para obter mais informações sobre cobrança para sua assinatura de {% data variables.product.prodname_ghe_cloud %}, consulte "[Visualizando a assinatura e o uso da conta corporativa](/billing/managing-billing-for-your-github-account/viewing-the-subscription-and-usage-for-your-enterprise-account)" e "[Sobre cobrança para a sua empresa](/billing/managing-billing-for-your-github-account/about-billing-for-your-enterprise)".

{% elsif ghes %}

{% data reusables.enterprise-accounts.enterprise-accounts-billing %}

Para obter mais informações sobre a cobrança para {% ifversion ghec %}{% data variables.product.prodname_ghe_cloud %}{% else %}{% data variables.product.product_name %}{% endif %}, consulte "[Sobre a cobrança para a sua empresa](/billing/managing-billing-for-your-github-account/about-billing-for-your-enterprise)."

{% endif %}

{% ifversion ghec or ghes %}

{% ifversion ghec %}

{% data variables.product.prodname_enterprise %} offers two deployment options. Além de {% data variables.product.prodname_ghe_cloud %}, você pode usar {% data variables.product.prodname_ghe_server %} para hospedar o trabalho de desenvolvimento da sua empresa no centro de dados ou no provedor de nuvem compatível. {% endif %}Os proprietários de empresas em {% data variables.product.prodname_dotcom_the_website %} podem usar uma conta corporativa para gerenciar pagamentos e licenciamento para instâncias de {% data variables.product.prodname_ghe_server %}. Para obter mais informações, consulte "[produtos de {% data variables.product.company_short %}](/get-started/learning-about-github/githubs-products#github-enterprise)" e "[Gerenciando sua licença para {% data variables.product.prodname_enterprise %}](/billing/managing-your-license-for-github-enterprise)".

{% endif %}

## Leia mais

- "[Contas corporativas](/graphql/guides/managing-enterprise-accounts)" na documentação da API do GraphQL
