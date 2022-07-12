---
title: GitHub Enterprise Cloud のトライアルを設定する
intro: '{% data variables.product.prodname_ghe_cloud %} のトライアルは無料でできます。'
redirect_from:
  - /articles/setting-up-a-trial-of-github-enterprise-cloud
  - /github/getting-started-with-github/setting-up-a-trial-of-github-enterprise-cloud
  - /github/getting-started-with-github/signing-up-for-github/setting-up-a-trial-of-github-enterprise-cloud
versions:
  fpt: '*'
  ghec: '*'
  ghes: '*'
topics:
  - Accounts
shortTitle: Enterprise Cloud trial
---

{% data reusables.enterprise.ghec-cta-button %}


## {% data variables.product.prodname_ghe_cloud %}について

{% data variables.product.prodname_ghe_cloud %} is a plan for large businesses or teams who collaborate on {% data variables.product.prodname_dotcom_the_website %}.

{% data reusables.organizations.about-organizations %} For more information about accounts, see "[Types of {% data variables.product.prodname_dotcom %} accounts](/get-started/learning-about-github/types-of-github-accounts)."

You can use organizations for free with {% data variables.product.prodname_free_team %}, which includes limited features. For additional features, such as SAML single sign-on (SSO), access control for {% data variables.product.prodname_pages %}, and included {% data variables.product.prodname_actions %} minutes, you can upgrade to {% data variables.product.prodname_ghe_cloud %}. For a detailed list of the features available with {% data variables.product.prodname_ghe_cloud %}, see our [Pricing](https://github.com/pricing) page.

You can set up a trial of {% data variables.product.prodname_ghe_cloud %} to evaluate these additional features on a new or existing organization account.

{% data variables.product.prodname_ghe_server %} のトライアルも利用できます。 詳しい情報については、「[{% data variables.product.prodname_ghe_server %} のトライアルを設定する](/articles/setting-up-a-trial-of-github-enterprise-server)」を参照してください。

{% data reusables.products.which-product-to-use %}

## {% data variables.product.prodname_ghe_cloud %} のトライアルについて

You can set up a 30-day trial to evaluate {% data variables.product.prodname_ghe_cloud %}. 支払方法が必要な {% data variables.product.prodname_marketplace %} アプリを Organization に追加しない限り、トライアル期間中に支払方法を指定する必要はありません。 詳しい情報については、[{% data variables.product.prodname_marketplace %}の支払いについて](/enterprise-cloud@latest/articles/about-billing-for-github-marketplace/)を参照してください。

トライアルには50シートが含まれています。 {% data variables.product.prodname_ghe_cloud %} を評価するためにより多くのシートが必要な場合は、{% data variables.contact.contact_enterprise_sales %} にお問い合わせください。 トライアルの終了時に、別のシート数を選択できます。

{% data reusables.saml.saml-accounts %}

詳しい情報については{% ifversion not ghec %}、{% data variables.product.prodname_ghe_cloud %}ドキュメンテーションの{% else %}、{% endif %}「[SAMLシングルサインオンを使うアイデンティティ及びアクセス管理について](/enterprise-cloud@latest/organizations/managing-saml-single-sign-on-for-your-organization/about-identity-and-access-management-with-saml-single-sign-on)を参照してください。

{% data variables.product.prodname_emus %} is not part of the free trial of {% data variables.product.prodname_ghe_cloud %}. If you're interested in {% data variables.product.prodname_emus %}, please contact [{% data variables.product.prodname_dotcom %}'s Sales team](https://enterprise.github.com/contact).

## {% data variables.product.prodname_ghe_cloud %} のトライアルを設定する

Before you can try {% data variables.product.prodname_ghe_cloud %}, you must be signed into a personal account. If you don't already have a personal account on {% data variables.product.prodname_dotcom_the_website %}, you must create one. 詳しい情報については、「[新しい {% data variables.product.prodname_dotcom %} アカウントにサインアップする](/free-pro-team@latest/articles/signing-up-for-a-new-github-account)」を参照してください。

1. Navigate to [{% data variables.product.prodname_dotcom %} for enterprises](https://github.com/enterprise).
1. Click **Start a free trial**. !["Start a free trial" button](/assets/images/help/organizations/start-a-free-trial-button.png)
1. Click **Enterprise Cloud**. !["Enterprise Cloud" button](/assets/images/help/organizations/enterprise-cloud-trial-option.png)
1. Follow the prompts to configure your trial.

## {% data variables.product.prodname_ghe_cloud %} に触れる

After you set up your trial, you can explore {% data variables.product.prodname_ghe_cloud %} by following the suggested tasks on the "Overview" tab of your organization. If you've previously dismissed the tasks, you can access them again by clicking **Get started with suggested tasks** at the top of the page.

!["Get started with suggested tasks" button](/assets/images/help/organizations/suggested-tasks-button.png)

{% data reusables.docs.you-can-read-docs-for-your-product %}

{% data reusables.products.product-roadmap %}

## トライアルを終了する

You can buy {% data variables.product.prodname_enterprise %} at any time during your trial. Purchasing {% data variables.product.prodname_enterprise %} ends your trial, removing the 50-seat maximum and initiating payment.

If you don't purchase {% data variables.product.prodname_enterprise %}, when the trial ends, your organization will be downgraded. If you used an existing organization for the trial, the organization will be downgraded to the product you were using before the trial. If you created a new organization for the trial, the organization will be downgraded to {% data variables.product.prodname_free_team %}.

Your organization will lose access to any functionality that is not included in the new product, such as advanced features like {% data variables.product.prodname_pages %} for private repositories. If you don't plan to upgrade, to avoid losing access to advanced features, consider making affected repositories public before your trial ends. 詳細は「[リポジトリの可視性を設定する](/articles/setting-repository-visibility)」を参照してください。

Downgrading also disables any SAML settings configured during the trial period. If you later purchase {% data variables.product.prodname_enterprise %}, your SAML settings will be enabled again for users in your organization to authenticate.

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
{% data reusables.organizations.billing_plans %}
5. [{% data variables.product.prodname_ghe_cloud %} Free Trial] の下で、[**Buy Enterprise**] または [**Downgrade to Team**] をクリックします。 ![[Buy Enterprise and Downgrade to Team] ボタン](/assets/images/help/organizations/finish-trial-buttons.png)
6. プロンプトに従ってお支払い方法を入力し、[**Submit**] をクリックします。
