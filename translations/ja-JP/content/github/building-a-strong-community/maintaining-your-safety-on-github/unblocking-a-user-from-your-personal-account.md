---
title: 個人アカウントからユーザのブロックを解除する
intro: 'ブロックした {% data variables.product.prodname_dotcom %} ユーザとの問題が解決した場合、そのユーザのアカウントのブロックを解除できます。'
redirect_from:
  - /articles/unblocking-a-user-from-your-personal-account
  - /github/building-a-strong-community/unblocking-a-user-from-your-personal-account
versions:
  free-pro-team: '*'
topics:
  - コミュニティ
---
ユーザのブロックを解除した場合、そのユーザはあなたをリポジトリのコラボレーターに招待できます。 もしそのユーザがあなたを GitHub のどこかで [@メンション](/articles/basic-writing-and-formatting-syntax/#mentioning-people-and-teams)した場合、あなたは通知を受け取ります。

お客様が所有しているリポジトリで、そのユーザは通常通りにコラボレートできるようになります。

アカウント設定、もしくはユーザのプロフィールページからユーザのブロックを解除できます。

### アカウント設定でのユーザのブロックの解除

{% data reusables.user_settings.access_settings %}
{% data reusables.user_settings.blocked_users %}
3. [Blocked users] の下で、ブロックを解除したいユーザの横にある [**Unblock**] をクリックします。 ![ユーザブロックの解除ボタン](/assets/images/help/organizations/org-unblock-user-button.png)

### プロフィールページからのユーザのブロックの解除

{% data reusables.profile.user_profile_page_navigation %}
2. 左のサイドバーのユーザのプロフィール写真の下にある [{% octicon "kebab-horizontal" aria-label="The horizontal kebab icon" %}] をクリックしてから、[**Unblock or report user**] をクリックします。 ![ユーザリンクのブロックの解除または報告](/assets/images/help/profile/profile-unblock-or-report-user.png)
3. [**Unblock user**] をクリックします。 ![ユーザのブロックの解除あるいは悪用のレポートの選択肢を持つモーダルボックス](/assets/images/help/profile/profile-unblockuser.png)

{% tip %}

**参考**: コラボレーターステータス、Star やフォローなど、ユーザをブロックした時に削除した設定については、そのユーザのブロックを解除しても回復しません。

{% endtip %}

### 参考リンク

- [個人アカウントからのユーザのブロック](/articles/blocking-a-user-from-your-personal-account)
- [Organization からのユーザのブロック](/articles/blocking-a-user-from-your-organization)
- [Organization からのユーザのブロック解除](/articles/unblocking-a-user-from-your-organization)
- [悪用あるいはスパムのレポート](/articles/reporting-abuse-or-spam)
