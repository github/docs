---
title: Sobre preços por usuário
intro: '{% ifversion fpt or ghec %}Para organizações{% ifversion ghec %} e empresas{% endif %}, a {% else %}A {% endif %}cobrança começa com o número de estações licenciadas que você escolhe.'
redirect_from:
  - /github/setting-up-and-managing-billing-and-payments-on-github/about-per-user-pricing
  - /articles/about-per-user-pricing
  - /github/setting-up-and-managing-billing-and-payments-on-github/managing-billing-for-your-github-account/about-per-user-pricing
versions:
  fpt: '*'
  ghec: '*'
  ghes: '*'
type: overview
topics:
  - Downgrades
  - Enterprise
  - Licensing
  - Organizations
ms.openlocfilehash: 16de23fa922a593bb03fedcb7f902822cffce7f9
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 10/25/2022
ms.locfileid: '148106666'
---
## Sobre preços por usuário

{% ifversion fpt %}

As novas organizações em {% data variables.product.prodname_dotcom_the_website %} podem construir projetos públicos e de código aberto com {% data variables.product.prodname_free_team %} ou fazer a atualização para um produto pago com preços por usuário. Para obter mais informações, confira "[Produtos do {% data variables.product.company_short %}](/get-started/learning-about-github/githubs-products)" e "[Como fazer upgrade da sua assinatura do {% data variables.product.prodname_dotcom %}](/billing/managing-billing-for-your-github-account/upgrading-your-github-subscription)".

As organizações que usam uma assinatura paga realizada antes de 11 de maio de 2016 podem optar por permanecer no plano existente por repositório ou alternar para preços por usuário. {% data variables.product.company_short %} irá notificar você 12 meses antes de qualquer alteração obrigatória na sua assinatura. Para obter mais informações sobre como alternar sua assinatura, confira "[Como fazer upgrade da sua assinatura do {% data variables.product.prodname_dotcom %}](/billing/managing-billing-for-your-github-account/upgrading-your-github-subscription)".

{% else %}

A base da conta é o número de estações licenciadas padrão que você escolhe para a{% ifversion ghec %} organização ou{% endif %} empresa.

{% data reusables.enterprise-licensing.unique-user-licensing-model %}

Para garantir que o mesmo usuário não esteja consumindo mais de uma licença de várias implantações empresariais, você pode sincronizar o uso de licença entre os ambientes do {% data variables.product.prodname_ghe_server %} e do {% data variables.product.prodname_ghe_cloud %}. Para obter mais informações, confira "[Sobre as licenças do GitHub Enterprise](/billing/managing-your-license-for-github-enterprise/about-licenses-for-github-enterprise)".

Além das estações licenciadas, a conta pode incluir outros encargos, como de {% data variables.product.prodname_GH_advanced_security %}. Para obter mais informações, confira "[Sobre a cobrança para a empresa](/billing/managing-billing-for-your-github-account/about-billing-for-your-enterprise)".
{% endif %}

## Pessoas que consomem uma licença

{% ifversion fpt %}

O {% data variables.product.company_short %} gera cobrança para as seguintes pessoas:

- Membros da organização, incluindo proprietários
- Colaboradores externos em repositórios privados pertencentes à organização, excluindo forks
- Qualquer pessoa com um convite pendente para se tornar um colaborador externo em repositórios privados ou internos pertencentes à organização, excluindo os forks
- Usuários inativos

{% note %}

**Observações:** 
- O {% data variables.product.company_short %} conta cada colaborador externo uma vez para fins de cobrança, mesmo quando a conta de usuário tem acesso a vários repositórios pertencentes à organização.
- {% data reusables.organizations.org-invite-scim %}

{% endnote %}

O {% data variables.product.company_short %} não gera cobrança para as seguintes pessoas:

- Gerentes de cobrança
- Pessoas com um convite pendente para se tornar gerente de cobrança
- Qualquer pessoa com um convite pendente para se tornar um colaborador externo em um repositório público pertencente à sua organização

{% else %}

O {% data variables.product.company_short %} gera cobrança para as contas a seguir de cada implantação do {% data variables.product.prodname_enterprise %}.

### Contas que consomem uma licença no {% data variables.product.prodname_ghe_cloud %}

O {% data variables.product.company_short %} gera cobrança para as seguintes contas de cada implantação no {% data variables.product.prodname_ghe_cloud %}:

- Proprietários corporativos que são membros ou proprietários de, pelo menos, uma organização na empresa
- Membros da organização, incluindo proprietários
- Colaboradores externos em repositórios privados ou internos pertencentes à organização, excluindo forks
- Usuários inativos

Se a empresa não usa o {% data variables.product.prodname_emus %}, a cobrança também será gerada para cada uma das seguintes contas:

- Qualquer pessoa com um convite pendente para se tornar proprietário ou membro da organização
- Qualquer pessoa com um convite pendente para se tornar um colaborador externo em repositórios privados ou internos pertencentes à organização, excluindo os forks

{% note %}

**Observações:** 
  - O {% data variables.product.company_short %} conta cada membro ou colaborador externo uma vez para fins de cobrança, mesmo que a conta de usuário tenha associação a várias organizações em uma empresa ou acesso a vários repositórios pertencentes à organização.
  - {% data reusables.organizations.org-invite-scim %}

{% endnote %}

O {% data variables.product.company_short %} não gera cobrança para as seguintes pessoas:

- {% data variables.enterprise.prodname_managed_users_caps %} que estão suspensos
- Proprietários da empresa que não são membros nem proprietários de, pelo menos, uma organização na empresa
- Gerentes de cobrança da empresa
- Gerentes de cobrança de organizações individuais
- Pessoas com um convite pendente para se tornar gerente de cobrança
- Qualquer pessoa com um convite pendente para se tornar um colaborador externo em um repositório público pertencente à sua organização

### Contas que consomem uma licença no {% data variables.product.prodname_ghe_server %}

Cada conta de usuário no {% data variables.product.prodname_ghe_server %} consome uma estação.

Os usuários suspensos não são contados ao calcular o número de usuários licenciados que consomem estações. Para saber mais, confira "[Como suspender e remover a suspenção de usuários]({% ifversion not ghes %}/enterprise-server@latest{% endif %}/admin/user-management/managing-users-in-your-enterprise/suspending-and-unsuspending-users){% ifversion not ghes %}" na documentação do {% data variables.product.prodname_ghe_server %}.{% else %}."{% endif %}

Os usuários inativos usam uma licença de estação. Portanto, você pode suspender usuários inativos para liberar licenças de usuário. Para saber mais, confira "[Como gerenciar usuários inativos]({% ifversion not ghes %}/enterprise-server@latest{% endif %}/admin/user-management/managing-users-in-your-enterprise/managing-dormant-users){% ifversion not ghes %}" na documentação do {% data variables.product.prodname_ghe_server %}.{% else %}."{% endif %}

{% endif %}

## Sobre as alterações na sua assinatura

{% ifversion fpt %}

Você pode alterar a sua assinatura de {% data variables.product.prodname_dotcom %} a qualquer momento.

### Sobre as alterações para organizações com planos por usuário

{% endif %}

Você pode adicionar mais estações licenciadas à {% ifversion fpt or ghec %} organização{% endif %}{% ifversion ghec %} ou{% endif %}{% ifversion ghec or ghes %} empresa{% endif %} a qualquer momento. Se você paga por mais estações do que usa, reduza também o número de estações.{% ifversion fpt %} Para obter mais informações, confira "[Como fazer upgrade da assinatura do {% data variables.product.prodname_dotcom %}](/billing/managing-billing-for-your-github-account/upgrading-your-github-subscription) e "[Como fazer downgrade da assinatura do {% data variables.product.prodname_dotcom %}](/billing/managing-billing-for-your-github-account/downgrading-your-github-subscription)".

Se você tiver dúvidas sobre a sua assinatura, entre em contato com {% data variables.contact.contact_support %}.

Para ampliar o suporte às habilidades de colaboração da sua equipe, você pode fazer upgrade para {% data variables.product.prodname_ghe_cloud %}, que inclui funcionalidades como logon único do SAML e auditoria avançada. {% data reusables.enterprise.link-to-ghec-trial %}

Para obter mais informações sobre os preços por usuário do {% data variables.product.prodname_ghe_cloud %}, confira [a documentação do {% data variables.product.prodname_ghe_cloud %}](/enterprise-cloud@latest/billing/managing-billing-for-your-github-account/about-per-user-pricing).

{% else %}

Se você usar uma conta corporativa em {% data variables.product.prodname_dotcom_the_website %} e tiver dúvidas sobre as alterações na sua assinatura, entre em contato com {% data variables.contact.contact_enterprise_sales %}.

{% endif %} {% ifversion ghec %}

Se você usar uma organização individual em {% data variables.product.prodname_ghe_cloud %}, você poderá atualizar ou fazer o downgrade da sua assinatura. Para obter mais informações, confira "[Como fazer upgrade da sua assinatura do {% data variables.product.prodname_dotcom %}](/billing/managing-billing-for-your-github-account/upgrading-your-github-subscription) ou "[Como fazer downgrade da sua assinatura do {% data variables.product.prodname_dotcom %}](/billing/managing-billing-for-your-github-account/downgrading-your-github-subscription)". Se você tiver dúvidas sobre a sua assinatura, entre em contato com {% data variables.contact.contact_support %}.

{% endif %}

{% ifversion fpt %}

### Sobre as alterações para organizações em planos de cada repositório

Você pode atualizar ou fazer downgrade entre planos pagos herdados nas configurações de cobrança da sua organização. Ao fazer a atualização para um plano com mais repositórios privados, {% data variables.product.company_short %} transfere imediatamente sua conta para o seu novo plano e cobra pela diferença de preço, rateado pelo número de dias restantes em seu ciclo de cobrança.

Quando você faz downgrade para um plano pago herdado com menos repositórios privados, o novo plano entra em vigor na data da próxima cobrança. Se você tiver mais repositórios privados do que permite o novo plano, eles serão bloqueados quando o novo plano entrar em vigor. Para reduzir o número de repositórios privados, você pode tornar públicos alguns deles ou pode cloná-los localmente e excluir as cópias no {% data variables.product.prodname_dotcom %}.

{% endif %}

## Leitura adicional

{%- ifversion not fpt %}
- "[Sobre as contas corporativas](/admin/overview/about-enterprise-accounts)"
- "[Funções em uma empresa](/admin/user-management/managing-users-in-your-enterprise/roles-in-an-enterprise)" {%- endif %}
- "[Funções em uma organização](/organizations/managing-peoples-access-to-your-organization-with-roles/roles-in-an-organization)"
- "[Como adicionar colaboradores externos a repositórios na organização](/organizations/managing-access-to-your-organizations-repositories/adding-outside-collaborators-to-repositories-in-your-organization)".
