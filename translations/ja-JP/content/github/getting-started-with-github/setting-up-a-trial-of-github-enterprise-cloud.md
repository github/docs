---
title: GitHub Enterprise Cloud のトライアルを設定する
intro: '{% data variables.product.prodname_ghe_cloud %} のトライアルは無料でできます。'
redirect_from:
  - /articles/setting-up-a-trial-of-github-enterprise-cloud
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

### {% data variables.product.prodname_ghe_cloud %} のトライアルについて

14日間のトライアルを設定して、新しい Organization アカウントで {% data variables.product.prodname_ghe_cloud %} を評価できます。 支払方法が必要な {% data variables.product.prodname_marketplace %} アプリを Organization に追加しない限り、トライアル期間中に支払方法を指定する必要はありません。 詳しい情報については、「<a href="/articles/about-billing-for-github-marketplace/" class="dotcom-only">{% data variables.product.prodname_marketplace %}の支払いについて</a>」を参照してください。

トライアルには50シートが含まれています。 {% data variables.product.prodname_ghe_cloud %} を評価するためにより多くのシートが必要な場合は、{% data variables.contact.contact_enterprise_sales %} にお問い合わせください。 トライアルの終了時に、別のシート数を選択できます。

{% data variables.product.prodname_ghe_server %} のトライアルも利用できます。 詳しい情報については、「[{% data variables.product.prodname_ghe_server %} のトライアルを設定する](/articles/setting-up-a-trial-of-github-enterprise-server)」を参照してください。

{% data reusables.products.which-product-to-use %}

### {% data variables.product.prodname_ghe_cloud %} のトライアルを設定する

{% data variables.product.prodname_ghe_cloud %} のトライアルを開始する前に、既存のユーザアカウントを持っていない場合は、新しいユーザアカウントを作成する必要があります。 詳しい情報については、「<a href="/articles/signing-up-for-a-new-github-account" class="dotcom-only">新しい {% data variables.product.prodname_dotcom %} アカウントにサインアップする</a>」を参照してください。

{% data reusables.user_settings.access_settings %}
{% data reusables.user_settings.organizations %}
{% data reusables.organizations.new-organization %}
4. [Enterprise] の下で、[**Start your 14-day free trial**] をクリックします。 ![トライアルを開始するボタン](/assets/images/help/organizations/start-trial-button.png)
5. 会社名を入力します。 ![[Company name] フィールド](/assets/images/help/organizations/company-name-field.png)
{% data reusables.organizations.organization-name %}
7. [Full name] の下に、フルネームを入力します。 ![[Full name] フィールド](/assets/images/help/organizations/full-name-field.png)
8. [Work email] の下に、仕事用のメールアドレスを入力します。 ![[Work email] フィールド](/assets/images/help/organizations/work-email-field.png)
8. [**Industry**] ドロップダウンメニューを使用して、会社が属する業界を選択します。 ![[Industry] ドロップダウンメニュー](/assets/images/help/organizations/industry-drop-down.png)
9. [**Number of employees**] ドロップダウンメニューを使用して、会社の従業員数を選択します。 ![[Number of employees] ドロップダウンメニュー](/assets/images/help/organizations/employees-drop-down.png)
10. <a href="/articles/github-enterprise-cloud-evaluation-agreement" class="dotcom-only">評価ライセンスアグリーメント</a> を確認し、[**Next**] をクリックします。

### {% data variables.product.prodname_ghe_cloud %} に触れる

トライアルを設定したら、[エンタープライズオンボーディングガイド](https://resources.github.com/enterprise-onboarding/)に従って {% data variables.product.prodname_ghe_cloud %} を試してみることができます。

{% data reusables.products.product-roadmap %}

### トライアルを終了する

トライアル期間中はいつでも {% data variables.product.prodname_enterprise %} を購入するか、{% data variables.product.prodname_team %} にダウングレードできます。

トライアル期間の終了までに {% data variables.product.prodname_enterprise %} または {% data variables.product.prodname_team %} を購入しない場合、Organization は {% data variables.product.prodname_free_team %} にダウングレードされ、これらのプライベートリポジトリから公開された {% data variables.product.prodname_pages %} サイトを含む有料の製品にのみ含まれる高度なツールや機能にアクセスできなくなります。 アップグレードする予定がない場合は、高度な機能へのアクセスを失わないように、トライアル期間の終了前にリポジトリを公開してください。 詳細は「[リポジトリの可視性を設定する](/articles/setting-repository-visibility)」を参照してください。

Organization の {% data variables.product.prodname_free_team %} にダウングレードすると、トライアル期間中に設定した SAML 設定も無効になります。 {% data variables.product.prodname_enterprise %} または {% data variables.product.prodname_team %} を購入すると、Organization 内のユーザーが認証できるように SAML 設定が再度有効になります。

{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.org_settings %}
{% data reusables.organizations.billing %}
5. [{% data variables.product.prodname_ghe_cloud %} Free Trial] の下で、[**Buy Enterprise**] または [**Downgrade to Team**] をクリックします。 ![[Buy Enterprise and Downgrade to Team] ボタン](/assets/images/help/organizations/finish-trial-buttons.png)
6. プロンプトに従ってお支払い方法を入力し、[**Submit**] をクリックします。

### 参考リンク

- [{% data variables.product.prodname_ghe_server %} のトライアルをセットアップする](/articles/setting-up-a-trial-of-github-enterprise-server)
