---
title: GitHub Enterprise Cloud のトライアルを設定する
intro: '{% data variables.product.prodname_ghe_cloud %} のトライアルは無料でできます。'
redirect_from:
  - /articles/setting-up-a-trial-of-github-enterprise-cloud
  - /github/getting-started-with-github/setting-up-a-trial-of-github-enterprise-cloud
  - /github/getting-started-with-github/signing-up-for-github/setting-up-a-trial-of-github-enterprise-cloud
versions:
  fpt: '*'
  ghes: '*'
topics:
  - Accounts
shortTitle: Enterprise Cloud trial
---

{% data reusables.enterprise.ghec-cta-button %}


## {% data variables.product.prodname_ghe_cloud %}について

{% data reusables.organizations.about-organizations %}

You can use organizations for free with {% data variables.product.prodname_free_team %}, which includes limited features. For additional features, such as SAML single sign-on (SSO), access control for {% data variables.product.prodname_pages %}, and included {% data variables.product.prodname_actions %} minutes, you can upgrade to {% data variables.product.prodname_ghe_cloud %}. For a detailed list of the features available with {% data variables.product.prodname_ghe_cloud %}, see our [Pricing](https://github.com/pricing) page.

{% data reusables.saml.saml-accounts %} 詳細は「<a href="/organizations/managing-saml-single-sign-on-for-your-organization/about-identity-and-access-management-with-saml-single-sign-on" class="dotcom-only">SAML シングルサインオンを使うアイデンティティおよびアクセス管理について</a>」を参照してください。

{% data reusables.products.which-product-to-use %}

## {% data variables.product.prodname_ghe_cloud %} のトライアルについて

You can set up a 14-day trial to evaluate {% data variables.product.prodname_ghe_cloud %}. 支払方法が必要な {% data variables.product.prodname_marketplace %} アプリを Organization に追加しない限り、トライアル期間中に支払方法を指定する必要はありません。 詳しい情報については、「<a href="/articles/about-billing-for-github-marketplace/" class="dotcom-only">{% data variables.product.prodname_marketplace %}の支払いについて</a>」を参照してください。

トライアルには50シートが含まれています。 {% data variables.product.prodname_ghe_cloud %} を評価するためにより多くのシートが必要な場合は、{% data variables.contact.contact_enterprise_sales %} にお問い合わせください。 トライアルの終了時に、別のシート数を選択できます。

{% data variables.product.prodname_ghe_server %} のトライアルも利用できます。 詳しい情報については、「[{% data variables.product.prodname_ghe_server %} のトライアルを設定する](/articles/setting-up-a-trial-of-github-enterprise-server)」を参照してください。

## {% data variables.product.prodname_ghe_cloud %} のトライアルを設定する

Before you can try {% data variables.product.prodname_ghe_cloud %}, you must be signed into a user account. If you don't already have a user account on {% data variables.product.prodname_dotcom_the_website %}, you must create one. 詳しい情報については、「<a href="/articles/signing-up-for-a-new-github-account" class="dotcom-only">新しい {% data variables.product.prodname_dotcom %} アカウントにサインアップする</a>」を参照してください。

1. Navigate to [{% data variables.product.prodname_dotcom %} for enterprises](https://github.com/enterprise).
1. Click **Start a free trial**. !["Start a free trial" button](/assets/images/help/organizations/start-a-free-trial-button.png)
1. Click **Enterprise Cloud**. !["Enterprise Cloud" button](/assets/images/help/organizations/enterprise-cloud-trial-option.png)
1. Follow the prompts to configure your trial.

## {% data variables.product.prodname_ghe_cloud %} に触れる

トライアルを設定したら、[エンタープライズオンボーディングガイド](https://resources.github.com/enterprise-onboarding/)に従って {% data variables.product.prodname_ghe_cloud %} を試してみることができます。

{% data reusables.products.product-roadmap %}

## トライアルを終了する

トライアル期間中はいつでも {% data variables.product.prodname_enterprise %} を購入するか、{% data variables.product.prodname_team %} にダウングレードできます。

トライアル期間の終了までに {% data variables.product.prodname_enterprise %} または {% data variables.product.prodname_team %} を購入しない場合、Organization は {% data variables.product.prodname_free_team %} にダウングレードされ、これらのプライベートリポジトリから公開された {% data variables.product.prodname_pages %} サイトを含む有料の製品にのみ含まれる高度なツールや機能にアクセスできなくなります。 アップグレードする予定がない場合は、高度な機能へのアクセスを失わないように、トライアル期間の終了前にリポジトリを公開してください。 詳細は「[リポジトリの可視性を設定する](/articles/setting-repository-visibility)」を参照してください。

Organization の {% data variables.product.prodname_free_team %} にダウングレードすると、トライアル期間中に設定した SAML 設定も無効になります。 {% data variables.product.prodname_enterprise %} または {% data variables.product.prodname_team %} を購入すると、Organization 内のユーザーが認証できるように SAML 設定が再度有効になります。

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
{% data reusables.organizations.billing_plans %}
5. [{% data variables.product.prodname_ghe_cloud %} Free Trial] の下で、[**Buy Enterprise**] または [**Downgrade to Team**] をクリックします。 ![[Buy Enterprise and Downgrade to Team] ボタン](/assets/images/help/organizations/finish-trial-buttons.png)
6. プロンプトに従ってお支払い方法を入力し、[**Submit**] をクリックします。
