---
title: Sobre preços por usuário
intro: '{% ifversion fpt or ghec %}For organizations{% ifversion ghec %} and enterprises{% endif %}, your {% else %}Your {% endif %}bill begins with the number of licensed seats you choose.'
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
---

## Sobre preços por usuário

{% ifversion fpt %}
As novas organizações em {% data variables.product.prodname_dotcom_the_website %} podem construir projetos públicos e de código aberto com {% data variables.product.prodname_free_team %} ou fazer a atualização para um produto pago com preços por usuário. Para obter mais informações, consulte "[Produtos de {% data variables.product.company_short %}de](/get-started/learning-about-github/githubs-products)" e "[Atualizando sua assinatura de {% data variables.product.prodname_dotcom %}](/billing/managing-billing-for-your-github-account/upgrading-your-github-subscription)".

As organizações que usam uma assinatura paga realizada antes de 11 de maio de 2016 podem optar por permanecer no plano existente por repositório ou alternar para preços por usuário. {% data variables.product.company_short %} irá notificar você 12 meses antes de qualquer alteração obrigatória na sua assinatura. Para obter mais informações sobre como alternar sua assinatura, consulte "[Atualizar a assinatura do {% data variables.product.prodname_dotcom %}](/billing/managing-billing-for-your-github-account/upgrading-your-github-subscription)".

{% else %}

The foundation of your bill is the number of standard licensed seats that you choose for your{% ifversion ghec %} organization or{% endif %} enterprise.

{% data reusables.enterprise-licensing.unique-user-licensing-model %}

Para garantir que o mesmo usuário não esteja consumindo mais de uma licença para várias implantações corporativas, você pode sincronizar o uso da licença entre seus ambientes {% data variables.product.prodname_ghe_server %} e {% data variables.product.prodname_ghe_cloud %}. Para obter mais informações, consulte[Sobre licenças para o GitHub Enterprise](/billing/managing-your-license-for-github-enterprise/about-licenses-for-github-enterprise)."

Além das estações licenciadas, sua fatura pode incluir outras taxas, como {% data variables.product.prodname_GH_advanced_security %}. Para obter mais informações, consulte "[Sobre a cobrança para a sua empresa](/billing/managing-billing-for-your-github-account/about-billing-for-your-enterprise)".
{% endif %}

## As pessoas que consomem uma licença

Cada pessoa consome uma licença e {% data variables.product.company_short %} identifica indivíduos por endereço de e-mail principal.

{% data variables.product.company_short %} realiza a cobrança para as seguintes pessoas.

{%- ifversion ghec %}
- Os proprietários das empresas que são integrantes ou proprietários de pelo menos uma organização na empresa
{%- endif %}
- Integrantes da organização, incluindo proprietários
- Fora dos colaboradores em repositórios{% ifversion ghec %} privados {% endif %} ou internos pertencentes à sua organização, excluindo bifurcações
- Qualquer pessoa com um convite pendente para se tornar um proprietário ou integrante da organização
- Qualquer pessoa com um convite pendente para se tornar um colaborador externo em repositórios{% ifversion ghec %} privados ou internos {% endif %} pertencentes à sua organização, excluindo bifurcações
{%- ifversion ghec %}
- Cada usuário em qualquer instância de {% data variables.product.prodname_ghe_server %} que você implantar
{%- endif %}
- Usuários inativos

{% data variables.product.company_short %} não realiza cobrança para nenhuma das seguintes pessoas.

{%- ifversion ghec %}
- Os proprietários das empresas que não são integrantes ou proprietários de pelo menos uma organização na empresa
- Gerentes corporativos de cobrança
{%- endif %}
- Gerentes de cobrança da organização{% ifversion ghec %} para organizações individuais em {% data variables.product.prodname_ghe_cloud %}{% endif %}
- Anyone with a pending invitation to become an{% ifversion ghec %} enterprise or{% endif %} organization billing manager
- Anyone with a pending invitation to become an outside collaborator on a public repository owned by your organization
{%- ifversion ghes %}
- Usuários suspensos
{%- endif %}

{% note %}

**Observação**: {% data reusables.organizations.org-invite-scim %}

{% endnote %}

For more information, see {% ifversion not fpt %}"[Roles in an enterprise](/admin/user-management/managing-users-in-your-enterprise/roles-in-an-enterprise)" or {% endif %}"[Roles in an organization](/organizations/managing-peoples-access-to-your-organization-with-roles/roles-in-an-organization)."

{% data variables.product.company_short %} counts each {% ifversion not fpt %}member or {% endif %}outside collaborator once for billing purposes, even if the user account has {% ifversion not fpt %}membership in multiple organizations in an enterprise or {% endif %}access to multiple repositories owned by your organization. Para obter mais informações sobre colaboradores externos, consulte "[Adicionando colaboradores externos aos repositórios da organização](/organizations/managing-access-to-your-organizations-repositories/adding-outside-collaborators-to-repositories-in-your-organization)".

{% ifversion ghes %}Suspended users are not counted when calculating the number of licensed users consuming seats. For more information, see "[Suspending and unsuspending users](/admin/user-management/managing-users-in-your-enterprise/suspending-and-unsuspending-users)."{% endif %}

Dormant users do occupy a seat license.{% ifversion ghes %} As such, you can choose to suspend dormant users to release user licenses.{% endif %} For more information, see "[Managing dormant users](/admin/user-management/managing-users-in-your-enterprise/managing-dormant-users)."

## Sobre as alterações na sua assinatura

{% ifversion fpt %}

Você pode alterar a sua assinatura de {% data variables.product.prodname_dotcom %} a qualquer momento.

### Sobre as alterações para organizações com planos por usuário

{% endif %}

You can add more licensed seats to your {% ifversion fpt or ghec %} organization{% endif %}{% ifversion ghec %} or{% endif %}{% ifversion ghec or ghes %} enterprise{% endif %} at any time. If you pay for more seats than are being used, you can also reduce the number of seats.{% ifversion fpt %} For more information, see "[Upgrading your {% data variables.product.prodname_dotcom %} subscription](/billing/managing-billing-for-your-github-account/upgrading-your-github-subscription)" and "[Downgrading your {% data variables.product.prodname_dotcom %} subscription](/billing/managing-billing-for-your-github-account/downgrading-your-github-subscription)."

Se você tiver dúvidas sobre a sua assinatura, entre em contato com {% data variables.contact.contact_support %}.

Para apoiar ainda mais as habilidades de colaboração da sua equipe, você pode fazer a atualização para {% data variables.product.prodname_ghe_cloud %}, que inclui funcionalidades como SAML logon único e auditoria avançada. {% data reusables.enterprise.link-to-ghec-trial %}

Para obter mais informações sobre preços por usuário para {% data variables.product.prodname_ghe_cloud %}, consulte [a documentação de {% data variables.product.prodname_ghe_cloud %}](/enterprise-cloud@latest/billing/managing-billing-for-your-github-account/about-per-user-pricing).

{% else %}

Se você usar uma conta corporativa em {% data variables.product.prodname_dotcom_the_website %} e tiver dúvidas sobre as alterações na sua assinatura, entre em contato com {% data variables.contact.contact_enterprise_sales %}.

{% endif %}
{% ifversion ghec %}

Se você usar uma organização individual em {% data variables.product.prodname_ghe_cloud %}, você poderá atualizar ou fazer o downgrade da sua assinatura. Para obter mais informações, consulte "[Atualizar a assinatura do {% data variables.product.prodname_dotcom %}](/billing/managing-billing-for-your-github-account/upgrading-your-github-subscription)" ou "[Fazer downgrade da assinatura do {% data variables.product.prodname_dotcom %}](/billing/managing-billing-for-your-github-account/downgrading-your-github-subscription)". Se você tiver dúvidas sobre a sua assinatura, entre em contato com {% data variables.contact.contact_support %}.

{% endif %}

{% ifversion fpt %}

### Sobre as alterações para organizações em planos de cada repositório

Você pode atualizar ou fazer downgrade entre planos pagos herdados nas configurações de cobrança da sua organização. Ao fazer a atualização para um plano com mais repositórios privados, {% data variables.product.company_short %} transfere imediatamente sua conta para o seu novo plano e cobra pela diferença de preço, rateado pelo número de dias restantes em seu ciclo de cobrança.

Quando você faz downgrade para um plano pago herdado com menos repositórios privados, o novo plano entra em vigor na data da próxima cobrança. Se você tiver mais repositórios privados do que permite o novo plano, eles serão bloqueados quando o novo plano entrar em vigor. Para reduzir o número de repositórios privados, você pode tornar públicos alguns deles ou pode cloná-los localmente e excluir as cópias no {% data variables.product.prodname_dotcom %}.

{% endif %}

## Leia mais

{%- ifversion not fpt %}
- "[Sobre contas corporativas](/admin/overview/about-enterprise-accounts)"
{%- endif %}
- "[Sobre repositórios](/repositories/creating-and-managing-repositories/about-repositories#about-repository-visibility)"
