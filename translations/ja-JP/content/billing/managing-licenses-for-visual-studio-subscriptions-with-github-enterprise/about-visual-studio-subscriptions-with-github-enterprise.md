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
shortTitle: GitHubについて
---

## {% data variables.product.prodname_vss_ghe %} について

{% data reusables.enterprise-accounts.vss-ghe-description %} {% data variables.product.prodname_vss_ghe %} is available from Microsoft under the terms of the Microsoft Enterprise Agreement. 詳しい情報については、「{% data variables.product.prodname_vs %} Web サイトの [{% data variables.product.prodname_vss_ghe %}](https://visualstudio.microsoft.com/subscriptions/visual-studio-github/)」を参照してください。

To use the {% data variables.product.prodname_enterprise %} portion of the license, each subscriber's user account on {% data variables.product.prodname_dotcom_the_website %} must be or become a member of an organization owned by your enterprise on {% data variables.product.prodname_dotcom_the_website %}. To accomplish this, organization owners can invite new members to an organization by email address. サブスクライバーは、{% data variables.product.prodname_dotcom_the_website %} の既存のユーザ アカウントで招待を受け入れるか、新しいアカウントを作成できます。

For more information about the setup of {% data variables.product.prodname_vss_ghe %}, see "[Setting up {% data variables.product.prodname_vss_ghe %}](/billing/managing-licenses-for-visual-studio-subscriptions-with-github-enterprise/setting-up-visual-studio-subscriptions-with-github-enterprise)."

## About licenses for {% data variables.product.prodname_vss_ghe %}

After you assign a license for {% data variables.product.prodname_vss_ghe %} to a subscriber, the subscriber will use the {% data variables.product.prodname_enterprise %} portion of the license by joining an organization in your enterprise with a user account on {% data variables.product.prodname_dotcom_the_website %}. {% data variables.product.prodname_dotcom_the_website %} の Enterprise メンバーのユーザアカウントのメールアドレスが {% data variables.product.prodname_vs %} アカウントのサブスクライバーのユーザプライマリ名 (UPN) と一致する場合、{% data variables.product.prodname_vs %} サブスクライバーは自動的に {% data variables.product.prodname_vss_ghe %} のライセンスを 1 つ消費します。

{% data variables.product.prodname_dotcom %} での Enterprise のライセンスの合計数は、標準の {% data variables.product.prodname_enterprise %} ライセンスと {% data variables.product.prodname_dotcom %} へのアクセスを含む {% data variables.product.prodname_vs %} サブスクリプションライセンス数の合計です。 Enterprise メンバーのユーザーアカウントが {% data variables.product.prodname_vs %} サブスクライバーのメールアドレスと一致しない場合、ユーザアカウントが消費するライセンスは {% data variables.product.prodname_vs %} サブスクライバーには使用できません。

{% data variables.product.prodname_enterprise %} の詳細は、「[{% data variables.product.company_short %} の製品](/github/getting-started-with-github/githubs-products#github-enterprise)」を参照してください。 {% data variables.product.prodname_dotcom_the_website %} のアカウントの詳細については、「[{% data variables.product.prodname_dotcom %} アカウントのタイプ](/github/getting-started-with-github/types-of-github-accounts)」を参照してください。

You can view the number of {% data variables.product.prodname_enterprise %} licenses available to your enterprise on {% data variables.product.product_location %}. The list of pending invitations includes subscribers who are not yet members of at least one organization in your enterprise. For more information, see "[Viewing the subscription and usage for your enterprise account](/billing/managing-billing-for-your-github-account/viewing-the-subscription-and-usage-for-your-enterprise-account)" and "[Viewing people in your enterprise](/admin/user-management/managing-users-in-your-enterprise/viewing-people-in-your-enterprise#viewing-members-and-outside-collaborators)."

{% tip %}

**Tip**: If you download a CSV file with your enterprise's license usage in step 6 of "[Viewing the subscription and usage for your enterprise account](https://docs-internal-19656--vss-ghe-s.herokuapp.com/en/enterprise-cloud@latest/billing/managing-billing-for-your-github-account/viewing-the-subscription-and-usage-for-your-enterprise-account#viewing-the-subscription-and-usage-for-your-enterprise-account)," any members with a missing value for the "Name" or "Profile" columns have not yet accepted an invitation to join an organization within the enterprise.

{% endtip %}

{% data variables.product.prodname_vss_admin_portal_with_url %} のサブスクライバーへの保留中の {% data variables.product.prodname_enterprise %} 招待を確認することもできます。

## 参考リンク

- [{% data variables.product.prodname_vs %} subscriptions with {% data variables.product.prodname_enterprise %}](https://docs.microsoft.com/visualstudio/subscriptions/access-github) in Microsoft Docs
- [Use {% data variables.product.prodname_vs %} or {% data variables.product.prodname_vscode %} to deploy apps from {% data variables.product.prodname_dotcom %}](https://docs.microsoft.com/en-us/azure/developer/github/deploy-with-visual-studio) in Microsoft Docs
