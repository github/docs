---
title: Organization からユーザのブロックを解除する
intro: Organization のオーナーは、過去にブロックしたユーザのブロックを解除し、Organization のリポジトリへのアクセスを回復できます。
redirect_from:
  - /articles/unblocking-a-user-from-your-organization
  - /github/building-a-strong-community/unblocking-a-user-from-your-organization
versions:
  free-pro-team: '*'
topics:
  - Community
---

Organization からユーザのブロックを解除すると、そのユーザは Organization のリポジトリにコントリビュートできるようになります。

特定の時間だけユーザをブロックした場合、その時間が終われば自動的にブロックが解除されます。 詳細は「[Organization からユーザをブロックする](/articles/blocking-a-user-from-your-organization)」を参照してください。

{% tip %}

**参考**: コラボレータステータスや Star、Watch など、Organization からユーザをブロックした時に削除された設定については、そのユーザのブロックを解除しても復帰しません。

{% endtip %}

### コメントでユーザのブロックを解除する

1. 作者のブロックを解除したいコメントに移動します。
2. コメントの右上にある、{% octicon "kebab-horizontal" aria-label="The horizontal kebab icon" %} をクリックし、次に [**Unblock user**] をクリックします。 ![ユーザブロックの解除オプションを表示する水平のケバブアイコンとコメント調整メニュー](/assets/images/help/repository/comment-menu-unblock-user.png)
3. ユーザのブロック解除を確定するために [**Okay**] をクリックします。

### Organization 設定でユーザのブロックを解除する

{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.org_settings %}
{% data reusables.organizations.block_users %}
5. [Blocked users] の下で、ブロックを解除したいユーザの横にある [**Unblock**] をクリックします。 ![ユーザブロックの解除ボタン](/assets/images/help/organizations/org-unblock-user-button.png)

### 参考リンク

- [Organization からのユーザのブロック](/communities/maintaining-your-safety-on-github/blocking-a-user-from-your-organization)
- [個人アカウントからのユーザのブロック](/communities/maintaining-your-safety-on-github/blocking-a-user-from-your-personal-account)
- [個人アカウントからのユーザのブロック解除](/communities/maintaining-your-safety-on-github/unblocking-a-user-from-your-personal-account)
- [悪用あるいはスパムのレポート](/communities/maintaining-your-safety-on-github/reporting-abuse-or-spam)
