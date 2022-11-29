---
title: Sobre contas corporativas
intro: 'Com {% data variables.product.product_name %}, você pode usar uma conta corporativa para {% ifversion ghec %}habilitar a colaboração entre suas organizações, ao mesmo tempo em que oferece{% elsif ghes or ghae %}give{% endif %} aos administradores um único ponto de visibilidade e gestão.'
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
ms.openlocfilehash: b0d1455fef80094f0dcdf20332605bd427d9c441
ms.sourcegitcommit: e98b752895109965b32cb277610985da5799f8a1
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 11/01/2022
ms.locfileid: '148127624'
---
## Sobre contas corporativas em {% ifversion ghec %}{% data variables.product.prodname_ghe_cloud %}{% else %}{% data variables.product.product_name %}{% endif %}

{% ifversion ghec %}

Sua conta corporativa no {% data variables.product.prodname_dotcom_the_website %} permite que você gerencie múltiplas organizações. Sua conta corporativa deve ter um manipulador, como uma conta de usuário ou organizacional no {% data variables.product.prodname_dotcom %}.

{% elsif ghes or ghae %}

A conta corporativa em {% ifversion ghes %}{% data variables.location.product_location_enterprise %}{% elsif ghae %}{% data variables.product.product_name %}{% endif %} permite que você gerencie as organizações{% ifversion ghes %} em{% elsif ghae %} pertencentes à{% endif %} sua {% ifversion ghes %}instância do {% data variables.product.prodname_ghe_server %}{% elsif ghae %}empresa{% endif %}.

{% endif %}

As organizações são contas compartilhadas em que os integrantes da empresa podem colaborar em muitos projetos de uma só vez. Os proprietários da organização podem gerenciar o acesso aos dados e projetos da organização, com recursos sofisticados de segurança e administrativos. Para obter mais informações, confira "[Sobre as organizações](/organizations/collaborating-with-groups-in-organizations/about-organizations)".

{% ifversion ghec %} Nas configurações da empresa, os proprietários corporativos podem convidar organizações existentes para ingressar em sua conta corporativa, transferir organizações entre contas corporativas ou criar organizações. Para obter mais informações, confira "[Como adicionar organizações à sua empresa](/admin/user-management/managing-organizations-in-your-enterprise/adding-organizations-to-your-enterprise)".
{% endif %}

Sua conta corporativa permite que você gerencie e aplique políticas para todas as organizações pertencentes à empresa. {% data reusables.enterprise.about-policies %} Para ver mais informações, confira "[Sobre políticas corporativas](/admin/policies/enforcing-policies-for-your-enterprise/about-enterprise-policies)".

{% ifversion ghec %}

{% data reusables.enterprise.create-an-enterprise-account %} Para obter mais informações, confira "[Como criar uma conta corporativa](/admin/overview/creating-an-enterprise-account)".

{% endif %}

## Sobre a administração da conta corporativa

{% ifversion ghes or ghae %}

Na sua conta corporativa em {% ifversion ghae %}{% data variables.product.product_name %}{% elsif ghes %}uma instância de {% data variables.product.prodname_ghe_server %}{% endif %}, os administradores podem visualizar{% ifversion remove-enterprise-members %} e gerenciar{% endif %} membros corporativos{% ifversion enterprise-owner-join-org %}, gerenciar seus próprios integrantes em organizações pertencentes à empresa,{% endif %} e gerenciar o seguinte para a instância da {% ifversion ghes %}{% data variables.product.prodname_ghe_server %}{% elsif ghae %}empresa em {% data variables.product.prodname_ghe_managed %}{% endif %}.

{% ifversion ghes %}
- Uso da licença{% endif %}
- Segurança ({% ifversion ghae %}logon único, listas de permissão de IP, {% endif %}autoridades de certificação SSH, autenticação de dois fatores)
- Políticas corporativas para organizações pertencentes à conta corporativa

{% endif %}

{% ifversion ghes %}

### Sobre a administração da conta corporativa em {% data variables.product.prodname_ghe_cloud %}

{% endif %}

{% ifversion ghec or ghes %}Ao experimentar ou comprar {% data variables.product.prodname_enterprise %}, você também pode{% ifversion ghes %}{% endif %} criar uma conta corporativa para {% data variables.product.prodname_ghe_cloud %} em {% data variables.product.prodname_dotcom_the_website %}. Os administradores da conta corporativa em {% data variables.product.prodname_dotcom_the_website %} podem ver {% ifversion remove-enterprise-members %} e gerenciar{% endif %} a associação corporativa{% ifversion enterprise-owner-join-org %}, gerenciar seus próprios integrantes em organizações pertencentes à empresa,{% endif %} e gerencia o seguinte para a conta corporativa{% ifversion ghes %} em {% data variables.product.prodname_dotcom_the_website %}{% endif %}.

- Cobrança e uso (serviços em {% data variables.product.prodname_dotcom_the_website %}, {% data variables.product.prodname_GH_advanced_security %}, licenças de usuários)
- Segurança (logon único, listas de permissão de IP, autoridades de certificação SSH, autenticação de dois fatores)
- Políticas corporativas para organizações pertencentes à conta corporativa

Se você usar {% data variables.product.prodname_ghe_cloud %} e {% data variables.product.prodname_ghe_server %}, você também pode gerenciar o seguinte para {% data variables.product.prodname_ghe_server %} na sua conta corporativa em {% data variables.product.prodname_dotcom_the_website %}.

- Cobrança e uso para instâncias de {% data variables.product.prodname_ghe_server %}
- Solicitações e compartilhamento de pacote de suporte com {% data variables.contact.enterprise_support %}

Você também pode conectar a conta corporativa em {% data variables.location.product_location_enterprise %} à sua conta corporativa no {% data variables.product.prodname_dotcom_the_website %} para ver os detalhes de uso da licença da assinatura do {% data variables.product.prodname_enterprise %} no {% data variables.product.prodname_dotcom_the_website %}. Para obter mais informações, confira {% ifversion ghec %}"[Como sincronizar o uso da licença entre o {% data variables.product.prodname_ghe_server %} e o {% data variables.product.prodname_ghe_cloud %}](/enterprise-server/billing/managing-your-license-for-github-enterprise/syncing-license-usage-between-github-enterprise-server-and-github-enterprise-cloud)" na documentação do {% data variables.product.prodname_ghe_server %}.{% elsif ghes %}"[Como sincronizar o uso da licença entre o {% data variables.product.prodname_ghe_server %} e o {% data variables.product.prodname_ghe_cloud %}](/billing/managing-your-license-for-github-enterprise/syncing-license-usage-between-github-enterprise-server-and-github-enterprise-cloud)".{% endif %}

Para obter mais informações sobre as diferenças entre o {% data variables.product.prodname_ghe_cloud %} e o {% data variables.product.prodname_ghe_server %}, confira "[Produtos do {% data variables.product.prodname_dotcom %}](/get-started/learning-about-github/githubs-products)". {% data reusables.enterprise-accounts.to-upgrade-or-get-started %}

{% endif %}

## Sobre a cobrança para a sua conta corporativa

A conta corporativa inclui o custo mensal para cada integrante da sua empresa. A conta inclui {% ifversion ghec %}todas as licenças pagas em organizações fora da sua conta corporativa, assinaturas de aplicativos em {% data variables.product.prodname_marketplace %}, {% endif %}{% ifversion ghec or ghae %}serviços adicionais pagos pela empresa{% ifversion ghec %} como pacotes de dados de {% data variables.large_files.product_name_long %},{% endif %} e{% endif %} de uso para {% data variables.product.prodname_GH_advanced_security %}.

{% ifversion ghec %}

Para obter mais informações sobre a cobrança da sua assinatura do {% data variables.product.prodname_ghe_cloud %}, confira "[Como ver a assinatura e o uso da sua conta corporativa](/billing/managing-billing-for-your-github-account/viewing-the-subscription-and-usage-for-your-enterprise-account)" e "[Sobre a cobrança para sua empresa](/billing/managing-billing-for-your-github-account/about-billing-for-your-enterprise)".

{% elsif ghes %}

{% data reusables.enterprise-accounts.enterprise-accounts-billing %}

Para obter mais informações sobre a cobrança do {% ifversion ghec %}{% data variables.product.prodname_ghe_cloud %}{% else %}{% data variables.product.product_name %}{% endif %}, confira "[Sobre a cobrança para sua empresa](/billing/managing-billing-for-your-github-account/about-billing-for-your-enterprise)".

{% endif %}

{% ifversion ghec or ghes %}

{% ifversion ghec %}

O {% data variables.product.prodname_enterprise %} oferece duas opções de implantação. Além de {% data variables.product.prodname_ghe_cloud %}, você pode usar {% data variables.product.prodname_ghe_server %} para hospedar o trabalho de desenvolvimento da sua empresa no centro de dados ou no provedor de nuvem compatível. {% endif %}Os proprietários de empresas em {% data variables.product.prodname_dotcom_the_website %} podem usar uma conta corporativa para gerenciar pagamentos e licenciamento para instâncias de {% data variables.product.prodname_ghe_server %}. Para obter mais informações, confira "[Produtos do {% data variables.product.company_short %}](/get-started/learning-about-github/githubs-products#github-enterprise)" e "[Como gerenciar sua licença do {% data variables.product.prodname_enterprise %}](/billing/managing-your-license-for-github-enterprise)".

{% endif %}

## Leitura adicional

- "[Contas Enterprise](/graphql/guides/managing-enterprise-accounts)" na documentação da API do GraphQL
