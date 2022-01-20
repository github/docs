---
title: Enforcing policies for dependency insights in your enterprise
intro: 'You can enforce policies for dependency insights within your enterprise''s organizations, or allow policies to be set in each organization.'
permissions: Enterprise owners can enforce policies for dependency insights in an enterprise.
redirect_from:
  - /articles/enforcing-a-policy-on-dependency-insights
  - /articles/enforcing-a-policy-on-dependency-insights-in-your-enterprise-account
  - /github/setting-up-and-managing-your-enterprise-account/enforcing-a-policy-on-dependency-insights-in-your-enterprise-account
  - /github/setting-up-and-managing-your-enterprise/enforcing-a-policy-on-dependency-insights-in-your-enterprise-account
  - /github/setting-up-and-managing-your-enterprise/setting-policies-for-organizations-in-your-enterprise-account/enforcing-a-policy-on-dependency-insights-in-your-enterprise-account
versions:
  ghec: '*'
type: how_to
topics:
  - Dependencies
  - Enterprise
  - Organizations
  - Policies
shortTitle: Policies for dependency insights
---

## About policies for dependency insights in your enterprise

Dependency insights show all packages that repositories within your enterprise's organizations depend on. Dependency insights include aggregated information about security advisories and licenses. 詳細は「[Organization のインサイトを表示する](/organizations/collaborating-with-groups-in-organizations/viewing-insights-for-your-organization)」を参照してください。

## Enforcing a policy for visibility of dependency insights

Across all organizations owned by your enterprise, you can control whether organization members can view dependency insights. You can also allow owners to administer the setting on the organization level. 詳細は「[Organization dependency insights の可視性を変更する](/organizations/managing-organization-settings/changing-the-visibility-of-your-organizations-dependency-insights)」を参照してください。

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.policies-tab %}
3. In the left sidebar, click **Organizations**. ![Organizations tab in the enterprise sidebar](/assets/images/help/business-accounts/settings-policies-org-tab.png)
4. [Organization projects] で、設定変更についての情報を確認します。 {% data reusables.enterprise-accounts.view-current-policy-config-orgs %}
5. [Organization policies] で、ドロップダウンメニューを使用してポリシーを選択します。 ![Organization ポリシーオプションのドロップダウンメニュー](/assets/images/help/business-accounts/organization-policy-drop-down.png)
