---
title: GitHub Enterprise で Visual Studio プランのライセンスを管理する
intro: '{% data variables.product.prodname_vss_ghe %} の {% data variables.product.prodname_enterprise %} ライセンスを管理できます。'
redirect_from:
  - /github/setting-up-and-managing-your-enterprise/managing-licenses-for-the-github-enterprise-and-visual-studio-bundle
  - /github/setting-up-and-managing-your-enterprise-account/managing-licenses-for-the-github-enterprise-and-visual-studio-bundle
  - /github/articles/about-the-github-and-visual-studio-bundle
  - /articles/about-the-github-and-visual-studio-bundle
  - /github/setting-up-and-managing-your-enterprise-account/managing-licenses-for-visual-studio-subscription-with-github-enterprise
versions:
  free-pro-team: '*'
topics:
  - enterprise
---

### {% data variables.product.prodname_vss_ghe %} について

{% data variables.product.prodname_vss_ghe %} は、サブスクライバーが {% data variables.product.prodname_enterprise %} と {% data variables.product.prodname_vs %} の両方を使用できるように組み合わせて販売されている Microsoft の製品です。 {% data variables.product.prodname_vss_ghe %} は、Microsoft Enterprise Agreement の条件に基づいて Microsoft から入手できます。 詳しい情報については、「{% data variables.product.prodname_vs %} Web サイトの [{% data variables.product.prodname_vss_ghe %}](https://visualstudio.microsoft.com/subscriptions/visual-studio-github/)」を参照してください。

After you assign a license for {% data variables.product.prodname_vss_ghe %} to a subscriber, the subscriber will use the {% data variables.product.prodname_enterprise %} portion of the license by joining an organization in your enterprise account with a user account on {% data variables.product.prodname_dotcom_the_website %}. If the email address for the user account of an enterprise member on {% data variables.product.prodname_dotcom_the_website %} matches the User Primary Name (UPN) for a subscriber to your {% data variables.product.prodname_vs %} account, the {% data variables.product.prodname_vs %} subscriber will automatically consume one license for {% data variables.product.prodname_vss_ghe %}.

The total quantity of your licenses for your enterprise on {% data variables.product.prodname_dotcom %} is the sum of any standard {% data variables.product.prodname_enterprise %} licenses and the number of {% data variables.product.prodname_vs %} subscription licenses that include access to {% data variables.product.prodname_dotcom %}. If the user account for an enterprise member does not correspond with the email address for a {% data variables.product.prodname_vs %} subscriber, the license that the user account consumes is unavailable for a {% data variables.product.prodname_vs %} subscriber.

{% data variables.product.prodname_enterprise %} の詳細は、「[{% data variables.product.company_short %} の製品](/github/getting-started-with-github/githubs-products#github-enterprise)」を参照してください。 {% data variables.product.prodname_dotcom_the_website %} のアカウントの詳細については、「[{% data variables.product.prodname_dotcom %} アカウントのタイプ](/github/getting-started-with-github/types-of-github-accounts)」を参照してください。

### 必要な環境

1. {% data variables.product.prodname_vss_ghe %} を購入したら、{% data variables.contact.contact_enterprise_sales %} に問い合わせて「{% data variables.product.prodname_vss_ghe %}」と伝えます。 営業スチームと連携して、{% data variables.product.prodname_dotcom_the_website %} で Enterprise アカウントを作成します。 すでに {% data variables.product.prodname_dotcom_the_website %} に Enterprise アカウントをお持ちの場合、または不明な場合は、営業チームにお問い合わせください。

2. {% data variables.product.prodname_vss_admin_portal_with_url %} のサブスクライバーに {% data variables.product.prodname_vss_ghe %} のライセンスを割り当てます。 ライセンス割り当ての詳細については、Microsoft Docs の「[{% data variables.product.prodname_enterprise %} を使用した {% data variables.product.prodname_vs %} プランの管理](https://docs.microsoft.com/visualstudio/subscriptions/assign-github)」を参照してください。

3. {% data variables.product.prodname_dotcom_the_website %} で、Enterprise アカウントが所有する Organization を少なくとも 1 つ作成します。 詳しい情報については、「[Enterprise アカウントに Organization を追加する](/github/setting-up-and-managing-your-enterprise/adding-organizations-to-your-enterprise-account)」参照してください。

### サブスクライバーを招待して {% data variables.product.prodname_enterprise %} を使用する

To use the {% data variables.product.prodname_enterprise %} portion of the license, the subscriber's user account on {% data variables.product.prodname_dotcom_the_website %} must be or become a member of an organization owned by your enterprise on {% data variables.product.prodname_dotcom_the_website %}.

Organization owners can invite new members to an organization by email address. The subscriber can accept the invitation with an existing user account on {% data variables.product.prodname_dotcom_the_website %} or create a new account.

While not required, we recommend that organization owners send an invitation to the same email address used for the {% data variables.product.prodname_vs %} subscriber's User Primary Name (UPN). When the email address on {% data variables.product.product_name %} matches the subscriber's UPN, you can ensure that another member of the organization does not claim the subscriber's license.

For more information, see "[Inviting users to join your organization](/organizations/managing-membership-in-your-organization/inviting-users-to-join-your-organization)," "[Signing up for {% data variables.product.prodname_dotcom %}](/github/getting-started-with-github/signing-up-for-github)," and "[Managing email preferences](/github/setting-up-and-managing-your-github-user-account/managing-email-preferences)."

### {% data variables.product.prodname_enterprise %} ライセンスを表示する

{% data variables.product.prodname_vss_admin_portal_with_url %} で {% data variables.product.prodname_vss_ghe %} のライセンスを割り当てた後、Enterprise アカウントで使用可能な {% data variables.product.prodname_enterprise %} ライセンスの数を表示できます。 詳細は「[Enterprise アカウントのプランおよび利用状況を見る示](/github/setting-up-and-managing-your-enterprise/viewing-the-subscription-and-usage-for-your-enterprise-account)」を参照してください。

{% data variables.product.prodname_vss_admin_portal_with_url %} のサブスクライバーへの保留中の {% data variables.product.prodname_enterprise %} 招待を確認することもできます。 保留中の招待リストには、Enterprise アカウントの少なくとも 1 つの Organization のメンバーではないサブスクライバーが含まれます。 For more information, see "[Viewing people in your enterprise](/github/setting-up-and-managing-your-enterprise/viewing-people-in-your-enterprise#viewing-members-and-outside-collaborators)."

### 参考リンク

- Microsoft Docs の [GitHub Enterprise による Visual Studio サブスクリプションの紹介](https://docs.microsoft.com/visualstudio/subscriptions/access-github)
