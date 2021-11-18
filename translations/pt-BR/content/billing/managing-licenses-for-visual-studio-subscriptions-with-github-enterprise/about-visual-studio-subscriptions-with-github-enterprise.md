---
title: About Visual Studio subscriptions with GitHub Enterprise
intro: 'You can give {% data variables.product.prodname_vs %} subscribers on your team access to {% data variables.product.prodname_enterprise %} with a combined offering from Microsoft.'
redirect_from:
  - /github/setting-up-and-managing-your-enterprise/managing-your-enterprise-account/managing-licenses-for-visual-studio-subscription-with-github-enterprise
  - /github/setting-up-and-managing-your-enterprise/managing-licenses-for-the-github-enterprise-and-visual-studio-bundle
  - /github/setting-up-and-managing-your-enterprise-account/managing-licenses-for-the-github-enterprise-and-visual-studio-bundle
  - /github/articles/about-the-github-and-visual-studio-bundle
  - /articles/about-the-github-and-visual-studio-bundle
  - /github/setting-up-and-managing-your-enterprise-account/managing-licenses-for-visual-studio-subscription-with-github-enterprise
  - /github/setting-up-and-managing-your-enterprise/managing-licenses-for-visual-studio-subscription-with-github-enterprise
  - /billing/managing-your-license-for-github-enterprise/managing-licenses-for-visual-studio-subscription-with-github-enterprise
versions:
  ghec: '*'
type: overview
topics:
  - Enterprise
  - Licensing
shortTitle: Sobre
---

## Sobre o {% data variables.product.prodname_vss_ghe %}

{% data reusables.enterprise-accounts.vss-ghe-description %} {% data variables.product.prodname_vss_ghe %} is available from Microsoft under the terms of the Microsoft Enterprise Agreement. Para obter mais informações, consulte [{% data variables.product.prodname_vss_ghe %}](https://visualstudio.microsoft.com/subscriptions/visual-studio-github/) no site {% data variables.product.prodname_vs %}

To use the {% data variables.product.prodname_enterprise %} portion of the license, each subscriber's user account on {% data variables.product.prodname_dotcom_the_website %} must be or become a member of an organization owned by your enterprise on {% data variables.product.prodname_dotcom_the_website %}. To accomplish this, organization owners can invite new members to an organization by email address. O assinante pode aceitar o convite com uma conta de usuário existente em {% data variables.product.prodname_dotcom_the_website %} ou criar uma nova conta.

For more information about the setup of {% data variables.product.prodname_vss_ghe %}, see "[Setting up {% data variables.product.prodname_vss_ghe %}](/billing/managing-licenses-for-visual-studio-subscriptions-with-github-enterprise/setting-up-visual-studio-subscriptions-with-github-enterprise)."

## Sobre as licenças para {% data variables.product.prodname_vss_ghe %}

After you assign a license for {% data variables.product.prodname_vss_ghe %} to a subscriber, the subscriber will use the {% data variables.product.prodname_enterprise %} portion of the license by joining an organization in your enterprise with a user account on {% data variables.product.prodname_dotcom_the_website %}. Se o endereço de e-mail para a conta de usuário de um integrante corporativo em {% data variables.product.prodname_dotcom_the_website %} corresponde ao Nome Principal do Usuário (UPN) de um assinante da sua conta {% data variables.product.prodname_vs %} o {% data variables.product.prodname_vs %} assinante consumirá automaticamente uma licença para {% data variables.product.prodname_vss_ghe %}.

A quantidade total de suas licenças para a sua empresa em {% data variables.product.prodname_dotcom %} é a soma de qualquer licença padrão de {% data variables.product.prodname_enterprise %} e o número de licenças de assinatura {% data variables.product.prodname_vs %} que incluem acesso a {% data variables.product.prodname_dotcom %}. Se a conta de usuário de um integrante corporativo não corresponde ao endereço de e-mail de um assinante de {% data variables.product.prodname_vs %}, a licença que a conta de usuário consome não estará disponível para um assinante de {% data variables.product.prodname_vs %}.

Para obter mais informações sobre o {% data variables.product.prodname_enterprise %}, consulte "[Produtos do {% data variables.product.company_short %}](/github/getting-started-with-github/githubs-products#github-enterprise)". Para obter mais informações sobre contas em {% data variables.product.prodname_dotcom_the_website %}, consulte "[Tipos de contas de {% data variables.product.prodname_dotcom %}](/github/getting-started-with-github/types-of-github-accounts)".

You can view the number of {% data variables.product.prodname_enterprise %} licenses available to your enterprise on {% data variables.product.product_location %}. The list of pending invitations includes subscribers who are not yet members of at least one organization in your enterprise. For more information, see "[Viewing the subscription and usage for your enterprise account](/billing/managing-billing-for-your-github-account/viewing-the-subscription-and-usage-for-your-enterprise-account)" and "[Viewing people in your enterprise](/admin/user-management/managing-users-in-your-enterprise/viewing-people-in-your-enterprise#viewing-members-and-outside-collaborators)."

{% tip %}

**Tip**: If you download a CSV file with your enterprise's license usage in step 6 of "[Viewing the subscription and usage for your enterprise account](https://docs-internal-19656--vss-ghe-s.herokuapp.com/en/enterprise-cloud@latest/billing/managing-billing-for-your-github-account/viewing-the-subscription-and-usage-for-your-enterprise-account#viewing-the-subscription-and-usage-for-your-enterprise-account)," any members with a missing value for the "Name" or "Profile" columns have not yet accepted an invitation to join an organization within the enterprise.

{% endtip %}

Você também pode ver convites pendentes de {% data variables.product.prodname_enterprise %} para inscritos em {% data variables.product.prodname_vss_admin_portal_with_url %}.

## Leia mais

- [{% data variables.product.prodname_vs %} subscriptions with {% data variables.product.prodname_enterprise %}](https://docs.microsoft.com/visualstudio/subscriptions/access-github) in Microsoft Docs
- [Use {% data variables.product.prodname_vs %} or {% data variables.product.prodname_vscode %} to deploy apps from {% data variables.product.prodname_dotcom %}](https://docs.microsoft.com/en-us/azure/developer/github/deploy-with-visual-studio) in Microsoft Docs
