---
title: Fazer downgrade da sua assinatura do GitHub
intro: 'Você pode fazer o downgrade da assinatura para qualquer tipo de conta em {% data variables.product.product_location %} a qualquer momento.'
redirect_from:
  - /github/setting-up-and-managing-billing-and-payments-on-github/downgrading-your-github-subscription
  - /articles/downgrading-your-personal-account-s-billing-plan
  - /articles/how-do-i-cancel-my-account
  - /articles/downgrading-a-user-account-to-free
  - /articles/removing-paid-seats-from-your-organization
  - /articles/downgrading-your-organization-s-paid-seats
  - /articles/downgrading-your-organization-s-billing-plan
  - /articles/downgrading-an-organization-with-per-seat-pricing-to-free
  - /articles/downgrading-an-organization-with-per-repository-pricing-to-free
  - /articles/downgrading-your-organization-to-free
  - /articles/downgrading-your-organization-from-the-business-plan-to-the-team-plan
  - /articles/downgrading-your-organization-from-github-business-cloud-to-the-team-plan
  - /articles/downgrading-your-github-billing-plan
  - /articles/downgrading-your-github-subscription
  - /github/setting-up-and-managing-billing-and-payments-on-github/managing-billing-for-your-github-account/downgrading-your-github-subscription
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Accounts
  - Downgrades
  - Organizations
  - Repositories
  - User account
shortTitle: Downgrade subscription
ms.openlocfilehash: b709c94090c1f79bfd8e16cc7df2c943d64b5aa7
ms.sourcegitcommit: 872c4751a3fc255671295a5dea6a2081c66b7b71
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 08/30/2022
ms.locfileid: '145083467'
---
## Rebaixando sua assinatura {% data variables.product.product_name %}

Quando você faz o downgrade (rebaixa) a assinatura da sua conta pessoal ou organização, as alterações de preços e recursos da conta fazem efeito a partir da próxima data de faturamento. Alterações em sua conta pessoal paga ou assinatura de organização não afetam assinaturas ou pagamentos para outros recursos pagos {% data variables.product.prodname_dotcom %}. Para obter mais informações, confira "[Como a atualização ou o downgrade afetam o processo de cobrança?](/articles/how-does-upgrading-or-downgrading-affect-the-billing-process)".

## Fazer o downgrade da assinatura da sua conta pessoal

Se você fizer o downgrade da sua conta pessoal de {% data variables.product.prodname_pro %} para {% data variables.product.prodname_free_user %}, a conta perderá o acesso a ferramentas avançadas de revisão de código em repositórios privados. {% data reusables.gated-features.more-info %}

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.billing_plans %}
1. Em "Plano atual", use o menu suspenso **Editar** e clique em **Fazer Downgrade para Gratuito**.
  ![Botão Fazer Downgrade para Gratuito](/assets/images/help/billing/downgrade-to-free.png)
5. Leia as informações sobre os recursos aos quais sua conta pessoal não terá mais acesso na próxima data de cobrança e clique em **Entendi. Continuar com o downgrade**.
  ![Botão Continuar com o downgrade](/assets/images/help/billing/continue-with-downgrade.png)

Se você tiver publicado um site do {% data variables.product.prodname_pages %} em um repositório privado e adicionado um domínio personalizado, remova ou atualize seus registros DNS antes de fazer downgrade do {% data variables.product.prodname_pro %} para {% data variables.product.prodname_free_user %}, a fim de evitar o risco de uma aquisição de domínio. Para obter mais informações, confira "[Como gerenciar um domínio personalizado para seu site do {% data variables.product.prodname_pages %}](/articles/managing-a-custom-domain-for-your-github-pages-site)".

## Rebaixando a assinatura da sua organização

{% data reusables.dotcom_billing.org-billing-perms %}

Se você fizer o downgrade da sua organização de {% data variables.product.prodname_team %} para {% data variables.product.prodname_free_team %}, para uma organização, a conta perderá o acesso a ferramentas avançadas de colaboração e gerenciamento para equipes.

Se você fizer o downgrade da sua organização de {% data variables.product.prodname_ghe_cloud %} para {% data variables.product.prodname_team %} ou {% data variables.product.prodname_free_team %}, a conta perderá o acesso a controles avançados de segurança, conformidade e implantação. {% data reusables.gated-features.more-info %}


{% note %}

**Observação:** se você estiver avaliando o {% data variables.product.prodname_ghe_cloud %} e não comprar o {% data variables.product.prodname_enterprise %} antes do término da avaliação, será feito o downgrade automático da sua organização para o {% data variables.product.prodname_free_team %} ou para o {% data variables.product.prodname_team %}. Para obter mais informações, confira "[Como configurar uma avaliação do {% data variables.product.prodname_ghe_cloud %}](/get-started/signing-up-for-github/setting-up-a-trial-of-github-enterprise-cloud#finishing-your-trial)".

{% endnote %}

{% data reusables.organizations.billing-settings %}
1. Em "Plano atual", use o menu suspenso **Editar** e clique na opção de downgrade desejada.
  ![Botão Fazer downgrade](/assets/images/help/billing/downgrade-option-button.png) {% data reusables.dotcom_billing.confirm_cancel_org_plan %}

## Fazer downgrade da assinatura de uma organização com o preço antigo por repositório

{% data reusables.dotcom_billing.org-billing-perms %}

{% data reusables.dotcom_billing.switch-legacy-billing %} Para obter mais informações, confira "[Como alternar sua organização do preço por repositório para o preço por usuário](/billing/managing-billing-for-your-github-account/upgrading-your-github-subscription#switching-your-organization-from-per-repository-to-per-user-pricing)".

{% data reusables.organizations.billing-settings %}
5. Em "Assinaturas", selecione o menu suspenso "Editar" e clique em **Editar plano**.
    ![Menu suspenso Editar plano](/assets/images/help/billing/edit-plan-dropdown.png)
1. Em "Cobrança/Planos", ao lado do plano que deseja alterar, clique em **Fazer downgrade**.
    ![Botão Fazer downgrade](/assets/images/help/billing/downgrade-plan-option-button.png)
1. Insira o motivo pelo qual você está fazendo downgrade da sua conta e clique em **Fazer downgrade do plano**.
    ![Caixa de texto usada para o motivo do downgrade e botão Fazer downgrade](/assets/images/help/billing/downgrade-plan-button.png)

## Remover estações pagas da sua organização

Para reduzir o número de estações pagas usadas pela sua organização, remova integrantes dela ou converta integrantes em colaboradores externos e conceda a eles acesso somente a repositórios públicos. Para obter mais informações, consulte:
- "[Como remover um membro da organização](/articles/removing-a-member-from-your-organization)"
- "[Como converter um membro da organização em um colaborador externo](/articles/converting-an-organization-member-to-an-outside-collaborator)"
- "[Como gerenciar o acesso de uma pessoa a um repositório da organização](/articles/managing-an-individual-s-access-to-an-organization-repository)"

{% data reusables.organizations.billing-settings %}
1. Em "Plano atual", use o menu suspenso **Editar** e clique em **Remover estações**.
  ![Menu suspenso usado para remover estações](/assets/images/help/billing/remove-seats-dropdown.png)
1. Em "Remove seats" (Remover estações), selecione o número de estações em que você deseja fazer downgrade.
  ![opção para remover estações](/assets/images/help/billing/remove-seats-amount.png)
1. Revise as informações sobre o novo pagamento na próxima data de cobrança e clique em **Remover estações**.
  ![botão Remover estações](/assets/images/help/billing/remove-seats-button.png)

## Leitura adicional

- "[Produtos do {% data variables.product.prodname_dotcom %}](/articles/github-s-products)"
- "[Como o upgrade ou o downgrade afetam o processo de cobrança?](/articles/how-does-upgrading-or-downgrading-affect-the-billing-process)"
- "[Sobre a cobrança do {% data variables.product.prodname_dotcom %}](/articles/about-billing-on-github)".
- "[Sobre os preços por usuário](/articles/about-per-user-pricing)"
