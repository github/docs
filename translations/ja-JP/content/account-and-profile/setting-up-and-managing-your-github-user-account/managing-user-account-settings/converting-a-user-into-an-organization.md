---
title: ユーザを Organization に変換する
redirect_from:
  - /articles/what-is-the-difference-between-create-new-organization-and-turn-account-into-an-organization
  - /articles/explaining-the-account-transformation-warning
  - /articles/converting-a-user-into-an-organization
  - /github/setting-up-and-managing-your-github-user-account/converting-a-user-into-an-organization
  - /github/setting-up-and-managing-your-github-user-account/managing-user-account-settings/converting-a-user-into-an-organization
intro: You can convert your personal account into an organization. これにより、Organization に属するリポジトリに対して、より細かく権限を設定できます。
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
topics:
  - Accounts
shortTitle: User into an organization
---

{% warning %}

**警告**: ユーザを Organization に変換する前に、以下の点についてご注意ください:

 - You will **no longer** be able to sign into the converted personal account.
 - You will **no longer** be able to create or modify gists owned by the converted personal account.
 - Organization をユーザに変換して元に戻すことは**できません**。
 - SSH キー、OAuth トークン、ジョブプロフィール、リアクション、および関連するユーザ情報は、Organization に移譲**されません**。 This is only true for the personal account that's being converted, not any of the personal account's collaborators.
 - Any commits made with the converted personal account **will no longer be linked** to that account. コミットそのものは、**そのまま残ります**。
 - Any forks of private repositories made with the converted personal account will be deleted.

{% endwarning %}

## Keep your personal account and create a new organization manually

If you want your organization to have the same name that you are currently using for your personal account, or if you want to keep your personal account's information intact, then you must create a new organization and transfer your repositories to it instead of converting your personal account into an organization.

1. To retain your current personal account name for your personal use, [change the name of your personal account](/articles/changing-your-github-username) to something new and wonderful.
2. [Create a new organization](/articles/creating-a-new-organization-from-scratch) with the original name of your personal account.
3. 新しい Organization アカウントに[リポジトリを移譲](/articles/transferring-a-repository)します。

## 個人アカウントを Organization に自動で変換する

You can also convert your personal account directly into an organization. アカウントを変換すると、以下のことが起こります:
 - リポジトリはそのまま保持されます。他のアカウントに手動で移譲する必要はありません。
 - コラボレーターを、Team に自動的に招待します。コラボレーターの権限は、以前のものがそのまま引き継がれます。
 {% ifversion fpt or ghec %}- For personal accounts on {% data variables.product.prodname_pro %}, automatically transitions billing to [the paid {% data variables.product.prodname_team %}](/articles/about-billing-for-github-accounts) without the need to re-enter payment information, adjust your billing cycle, or double pay at any time{% endif %}

1. GitHub にサインインし、変換後に Organization やリポジトリにアクセスするために使う、新しい個人アカウントを作成します。
2.  [Leave any organizations](/articles/removing-yourself-from-an-organization) the personal account you're converting has joined.
{% data reusables.user-settings.access_settings %}
{% data reusables.user-settings.organizations %}
5. [Transform account] で、[**Turn <username> into an organization**] をクリックします。 ![Organization 変換ボタン](/assets/images/help/settings/convert-to-organization.png)
6. [Account Transformation Warning] ダイアログボックスで、変換に関する情報を読み、変換を確定します。 このボックスに記載されている情報は、この記事で上述したものと同じです。 ![変換に関する警告](/assets/images/help/organizations/organization-account-transformation-warning.png)
7. [Transform your user into an organization] ページの、[Choose an organization owner] で、前のセクションで作成したセカンダリの個人アカウントか、Organization の管理を信頼して任せられる他のユーザを選択します。 ![Organization オーナーの追加ページ](/assets/images/help/organizations/organization-add-owner.png)
8. 入力を求められた場合、Organization の新しいプランを選択し、支払い情報を入力します。
9. [**Create Organization**] をクリックします。
10. Sign in to the new personal account you created in step one, then use the context switcher to access your new organization.

{% tip %}

**Tip**: When you convert a personal account into an organization, we'll add collaborators on repositories that belong to the account to the new organization as *outside collaborators*. 希望する場合は、*外部コラボレーター*を新しい Organization のメンバーに招待できます。 詳しい情報については「[Organization内のロール](/organizations/managing-peoples-access-to-your-organization-with-roles/roles-in-an-organization#outside-collaborators)」を参照してください。

{% endtip %}

## 参考リンク
- [Team の設定](/articles/setting-up-teams)
{% ifversion fpt or ghec %}-"[Organization に参加するようユーザを招待する](/articles/inviting-users-to-join-your-organization){% endif %}
- [Organization にアクセスする](/articles/accessing-an-organization)
