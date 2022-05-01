---
title: Sobre preços por usuário
intro: 'Com os preços por usuário, as organizações {% ifversion ghec %}e as empresas {% endif %}pagam com base no tamanho da equipe para acessar as ferramentas avançadas de colaboração e gerenciamento para as equipes e, opcionalmente, os controles de segurança, conformidade e implantação.'
redirect_from:
  - /github/setting-up-and-managing-billing-and-payments-on-github/about-per-user-pricing
  - /articles/about-per-user-pricing
  - /github/setting-up-and-managing-billing-and-payments-on-github/managing-billing-for-your-github-account/about-per-user-pricing
versions:
  fpt: '*'
  ghec: '*'
type: overview
topics:
  - Downgrades
  - Enterprise
  - Licensing
  - Organizations
---

## Sobre preços por usuário

As novas organizações em {% data variables.product.prodname_dotcom_the_website %} podem construir projetos públicos e de código aberto com {% data variables.product.prodname_free_team %} ou fazer a atualização para um produto pago com preços por usuário. Para obter mais informações, consulte "[Produtos de {% data variables.product.company_short %}de](/get-started/learning-about-github/githubs-products)" e "[Atualizando sua assinatura de {% data variables.product.prodname_dotcom %}](/billing/managing-billing-for-your-github-account/upgrading-your-github-subscription)".

{% ifversion ghec %}Os preços por usuário aplicam-se a todas as organizações que pertencem à sua empresa em {% data variables.product.prodname_dotcom_the_website %} e para organizações que usam  {% data variables.product.prodname_ghe_cloud %} que não fazem parte de uma empresa. Cada{% elsif fpt %}preços por usuário significa que cada{% endif %} ciclo de cobrança, {% data variables.product.company_short %} cobra cada integrante ou colaborador externo na sua organização{% ifversion ghec %} ou empresa{% endif %}. Você também paga por cada integrante pendente ou colaborador externo que ainda não aceitou um convite. {% data variables.product.company_short %} não realiza a cobrança para integrantes com a função de gerente de cobrança{% ifversion ghec %} ou para os proprietários de empresas que também não são integrantes de pelo menos uma organização na empresa{% endif %}. Para obter mais informações, consulte {% ifversion ghec %}"[Funções em uma empresa](/admin/user-management/managing-users-in-your-enterprise/roles-in-an-enterprise)" ou {% endif %}{% ifversion fpt or ghec %}"[Funções em uma organização](/organizations/managing-peoples-access-to-your-organization-with-roles/roles-in-an-organization)".{% endif %}

{% data variables.product.company_short %} conta cada {% ifversion ghec %}integrante ou {% endif %}colaborador externo uma vez para fins de cobrança, mesmo que a pessoa tenha {% ifversion ghec %}associaão a várias organizações em uma empresa ou {% endif %}acesso a vários repositórios pertencentes à sua organização.

Para obter mais informações sobre colaboradores externos, consulte "[Adicionando colaboradores externos aos repositórios da organização](/organizations/managing-access-to-your-organizations-repositories/adding-outside-collaborators-to-repositories-in-your-organization)".

{% ifversion ghec %}

Se você implantar {% data variables.product.prodname_ghe_server %}, o seu uso incluirá licenças para cada usuário na sua instância. Para obter mais informações sobre serviços adicionais e cobrança para {% data variables.product.prodname_ghe_cloud %}, consulte "[Sobre cobrança para sua empresa](/billing/managing-billing-for-your-github-account/about-billing-for-your-enterprise)".

{% elsif fpt %}

As organizações que usam uma assinatura paga realizada antes de 11 de maio de 2016 podem optar por permanecer no plano existente por repositório ou alternar para preços por usuário. {% data variables.product.company_short %} irá notificar você 12 meses antes de qualquer alteração obrigatória na sua assinatura. Para obter mais informações sobre como alternar sua assinatura, consulte "[Atualizar a assinatura do {% data variables.product.prodname_dotcom %}](/billing/managing-billing-for-your-github-account/upgrading-your-github-subscription)".

{% endif %}

## Visão geral dos preços por usuário

{% data reusables.billing.per-user-pricing-reference %}

## Sobre as alterações na sua assinatura

{% ifversion fpt %}

Você pode alterar a sua assinatura de {% data variables.product.prodname_dotcom %} a qualquer momento.

### Sobre as alterações para organizações com planos por usuário

{% endif %}

Você pode adicionar mais usuários à sua organização{% ifversion ghec %} ou empresa a qualquer momento{% endif %}. Se você pagar por mais usuários do que o número de usuários ativos atualmente, você também poderá reduzir o número de usuários pagos.{% ifversion fpt %} Para obter mais informações, consulte "[Atualizando sua assinatura de {% data variables.product.prodname_dotcom %}](/billing/managing-billing-for-your-github-account/upgrading-your-github-subscription)" e "[Fazendo o downgrade da sua assinatura de {% data variables.product.prodname_dotcom %}](/billing/managing-billing-for-your-github-account/downgrading-your-github-subscription)."

Se você tiver dúvidas sobre a sua assinatura, entre em contato com {% data variables.contact.contact_support %}.

To further support your team's collaboration abilities, you can upgrade to {% data variables.product.prodname_ghe_cloud %}, which includes features like SAML single sign-on and advanced auditing. {% data reusables.enterprise.link-to-ghec-trial %}

Para obter mais informações sobre preços por usuário para {% data variables.product.prodname_ghe_cloud %}, consulte [a documentação de {% data variables.product.prodname_ghe_cloud %}](/enterprise-cloud@latest/billing/managing-billing-for-your-github-account/about-per-user-pricing).

{% elsif ghec %}

Se você usar uma conta corporativa em {% data variables.product.prodname_dotcom_the_website %} e tiver dúvidas sobre as alterações na sua assinatura, entre em contato com {% data variables.contact.contact_enterprise_sales %}.

Se você usar uma organização individual em {% data variables.product.prodname_ghe_cloud %}, você poderá atualizar ou fazer o downgrade da sua assinatura. Para obter mais informações, consulte "[Atualizar a assinatura do {% data variables.product.prodname_dotcom %}](/billing/managing-billing-for-your-github-account/upgrading-your-github-subscription)" ou "[Fazer downgrade da assinatura do {% data variables.product.prodname_dotcom %}](/billing/managing-billing-for-your-github-account/downgrading-your-github-subscription)". Se você tiver dúvidas sobre a sua assinatura, entre em contato com {% data variables.contact.contact_support %}.

{% endif %}

{% ifversion fpt %}

### Sobre as alterações para organizações em planos de cada repositório

Você pode atualizar ou fazer downgrade entre planos pagos herdados nas configurações de cobrança da sua organização. Ao fazer a atualização para um plano com mais repositórios privados, {% data variables.product.company_short %} transfere imediatamente sua conta para o seu novo plano e cobra pela diferença de preço, rateado pelo número de dias restantes em seu ciclo de cobrança.

Quando você faz downgrade para um plano pago herdado com menos repositórios privados, o novo plano entra em vigor na data da próxima cobrança. Se você tiver mais repositórios privados do que permite o novo plano, eles serão bloqueados quando o novo plano entrar em vigor. Para reduzir o número de repositórios privados, você pode tornar públicos alguns deles ou pode cloná-los localmente e excluir as cópias no {% data variables.product.prodname_dotcom %}.

{% endif %}

## Leia mais

{%- ifversion ghec %}
- "[Sobre contas corporativas](/admin/overview/about-enterprise-accounts)"
{%- endif %}
- "[Sobre repositórios](/repositories/creating-and-managing-repositories/about-repositories#about-repository-visibility)"
