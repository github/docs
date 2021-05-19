---
title: GitHub Enterprise で Visual Studio プランのライセンスを管理する
intro: '{% data variables.product.prodname_vss_ghe %} の {% data variables.product.prodname_enterprise %} ライセンスを管理できます。'
redirect_from:
  - /github/setting-up-and-managing-your-enterprise/managing-licenses-for-the-github-enterprise-and-visual-studio-bundle
  - /github/setting-up-and-managing-your-enterprise-account/managing-licenses-for-the-github-enterprise-and-visual-studio-bundle
  - /github/articles/about-the-github-and-visual-studio-bundle
  - /articles/about-the-github-and-visual-studio-bundle
  - /github/setting-up-and-managing-your-enterprise-account/managing-licenses-for-visual-studio-subscription-with-github-enterprise
  - /github/setting-up-and-managing-your-enterprise/managing-licenses-for-visual-studio-subscription-with-github-enterprise
versions:
  free-pro-team: '*'
topics:
  - Enterprise
---
### {% data variables.product.prodname_vss_ghe %} について

{% data variables.product.prodname_vss_ghe %} は、サブスクライバーが {% data variables.product.prodname_enterprise %} と {% data variables.product.prodname_vs %} の両方を使用できるように組み合わせて販売されている Microsoft の製品です。 {% data variables.product.prodname_vss_ghe %} は、Microsoft Enterprise Agreement の条件に基づいて Microsoft から入手できます。 詳しい情報については、「{% data variables.product.prodname_vs %} Web サイトの [{% data variables.product.prodname_vss_ghe %}](https://visualstudio.microsoft.com/subscriptions/visual-studio-github/)」を参照してください。

{% data variables.product.prodname_vss_ghe %} のライセンスをサブスクライバーに割り当てた後、サブスクライバーは、Enterprise アカウントの Organization に {% data variables.product.prodname_dotcom_the_website %} のユーザアカウントを使用して参加することにより、ライセンスの {% data variables.product.prodname_enterprise %} 部分を使用します。 {% data variables.product.prodname_dotcom_the_website %} の Enterprise メンバーのユーザアカウントのメールアドレスが {% data variables.product.prodname_vs %} アカウントのサブスクライバーのユーザプライマリ名 (UPN) と一致する場合、{% data variables.product.prodname_vs %} サブスクライバーは自動的に {% data variables.product.prodname_vss_ghe %} のライセンスを 1 つ消費します。

{% data variables.product.prodname_dotcom %} での Enterprise のライセンスの合計数は、標準の {% data variables.product.prodname_enterprise %} ライセンスと {% data variables.product.prodname_dotcom %} へのアクセスを含む {% data variables.product.prodname_vs %} サブスクリプションライセンス数の合計です。 Enterprise メンバーのユーザーアカウントが {% data variables.product.prodname_vs %} サブスクライバーのメールアドレスと一致しない場合、ユーザアカウントが消費するライセンスは {% data variables.product.prodname_vs %} サブスクライバーには使用できません。

{% data variables.product.prodname_enterprise %} の詳細は、「[{% data variables.product.company_short %} の製品](/github/getting-started-with-github/githubs-products#github-enterprise)」を参照してください。 {% data variables.product.prodname_dotcom_the_website %} のアカウントの詳細については、「[{% data variables.product.prodname_dotcom %} アカウントのタイプ](/github/getting-started-with-github/types-of-github-accounts)」を参照してください。

### 必要な環境

1. {% data variables.product.prodname_vss_ghe %} を購入したら、{% data variables.contact.contact_enterprise_sales %} に問い合わせて「{% data variables.product.prodname_vss_ghe %}」と伝えます。 営業スチームと連携して、{% data variables.product.prodname_dotcom_the_website %} で Enterprise アカウントを作成します。 すでに {% data variables.product.prodname_dotcom_the_website %} に Enterprise アカウントをお持ちの場合、または不明な場合は、営業チームにお問い合わせください。

2. {% data variables.product.prodname_vss_admin_portal_with_url %} のサブスクライバーに {% data variables.product.prodname_vss_ghe %} のライセンスを割り当てます。 ライセンス割り当ての詳細については、Microsoft Docs の「[{% data variables.product.prodname_enterprise %} を使用した {% data variables.product.prodname_vs %} プランの管理](https://docs.microsoft.com/visualstudio/subscriptions/assign-github)」を参照してください。

3. {% data variables.product.prodname_dotcom_the_website %} で、Enterprise アカウントが所有する Organization を少なくとも 1 つ作成します。 詳しい情報については、「[Enterprise アカウントに Organization を追加する](/github/setting-up-and-managing-your-enterprise/adding-organizations-to-your-enterprise-account)」参照してください。

### サブスクライバーを招待して {% data variables.product.prodname_enterprise %} を使用する

ライセンスの {% data variables.product.prodname_enterprise %} 部分を使用するには、{% data variables.product.prodname_dotcom_the_website %} のサブスクライバーのユーザアカウントが、{% data variables.product.prodname_dotcom_the_website %} の Enterprise が所有する Organization のメンバーであるかメンバーになる必要があります。

Organization のオーナーは、メールアドレスで新しいメンバーを Organization に招待できます。 サブスクライバーは、{% data variables.product.prodname_dotcom_the_website %} の既存のユーザ アカウントで招待を受け入れるか、新しいアカウントを作成できます。

必須ではありませんが、Organization のオーナーは、{% data variables.product.prodname_vs %} サブスクライバーのユーザプライマリ名 (UPN) に使用されているのと同じメールアドレスに招待状を送信することをお勧めします。 {% data variables.product.product_name %} のメールアドレスがサブスクライバーの UPN と一致する場合、Organization の別のメンバーがサブスクライバーのライセンスをリクエストしないようにすることができます。

詳しい情報については、「[Organization にユーザーを招待する](/organizations/managing-membership-in-your-organization/inviting-users-to-join-your-organization)」、「[{% data variables.product.prodname_dotcom %} へのサインアップ](/github/getting-started-with-github/signing-up-for-github)」および「[メール プリファレンスの管理](/github/setting-up-and-managing-your-github-user-account/managing-email-preferences)」を参照してください。

### {% data variables.product.prodname_enterprise %} ライセンスを表示する

{% data variables.product.prodname_vss_admin_portal_with_url %} で {% data variables.product.prodname_vss_ghe %} のライセンスを割り当てた後、Enterprise アカウントで使用可能な {% data variables.product.prodname_enterprise %} ライセンスの数を表示できます。 詳細は「[Enterprise アカウントのプランおよび利用状況を見る示](/github/setting-up-and-managing-your-enterprise/viewing-the-subscription-and-usage-for-your-enterprise-account)」を参照してください。

{% data variables.product.prodname_vss_admin_portal_with_url %} のサブスクライバーへの保留中の {% data variables.product.prodname_enterprise %} 招待を確認することもできます。 保留中の招待リストには、Enterprise アカウントの少なくとも 1 つの Organization のメンバーではないサブスクライバーが含まれます。 詳しい情報については、「[Enterprise の人を表示する](/github/setting-up-and-managing-your-enterprise/viewing-people-in-your-enterprise#viewing-members-and-outside-collaborators)」を参照してください。

### 参考リンク

- Microsoft Docs の [GitHub Enterprise による Visual Studio サブスクリプションの紹介](https://docs.microsoft.com/visualstudio/subscriptions/access-github)
