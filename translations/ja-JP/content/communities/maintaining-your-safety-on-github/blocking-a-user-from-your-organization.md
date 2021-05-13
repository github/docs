---
title: Organization からのユーザのブロック
intro: Organization のオーナーは、ユーザをブロックして Organization のリポジトリ上で協力できないようにすることができます。
redirect_from:
  - /articles/blocking-a-user-from-your-organization
  - /github/building-a-strong-community/blocking-a-user-from-your-organization
versions:
  free-pro-team: '*'
topics:
  - Community
---

Organization の設定内、もしくはユーザが作成した特定のコメントから、ユーザをブロックできます。 コメント内でユーザをブロックした場合、そのユーザに、ブロックされたこととその理由を説明する通知を送信できます。 そうしない場合、ブロックされたことはユーザには直接通知されません。 ユーザは、ブロックされても既存のコンテンツを削除できます。

ユーザをブロックする際には、無期限にブロックするか、一定の期間だけブロックするかを選択できます。 誰かを一定の期間だけブロックした場合、その期間が過ぎると自動的にブロックは解除されます。 無期限にブロックした場合、ブロックはいつでも手動で解除できます。 詳細は「[Organizationからのユーザのブロックを解除する](/communities/maintaining-your-safety-on-github/unblocking-a-user-from-your-organization)」を参照してください。

{% tip %}

**ヒント:**過熱した会話を鎮めるためにユーザをブロックする場合、コラボレータだけがコメントできるように会話をロックすることを検討してください。 詳細は「[会話をロックする](/communities/moderating-comments-and-conversations/locking-conversations)」を参照してください。

{% endtip %}

ユーザを Organization からブロックすると、以下のようになります:
- そのユーザによる Organization のリポジトリの Watch は停止します。
- そのユーザによる Star 付けや Issue 割り当てはリポジトリから削除されます。
- Organization のリポジトリ内のディスカッションまたはコメントに対するユーザの投票が削除されます
- そのユーザは、Organization のリポジトリのコラボレーターではなくなります。
- Organization のリポジトリへのユーザのコントリビューションがカウントされなくなります
- ブロックされたユーザへの保留中のリポジトリまたは Organization の招待はキャンセルされます

ユーザを Organization からブロックすると、そのユーザは以下のことができなくなります:
- Organization のリポジトリをコメント中でクロス参照すること
- Organization のリポジトリのフォーク、Watch、ピン留め、Star 付け

また、ブロックされたユーザは Organization のリポジトリで以下のことができません:
- Issue のオープン
- プルリクエストの送信、クローズ、マージ
- Issue、プルリクエスト、あるいはコメントにコメントする
- ウィキページを追加または編集する

### コメントでユーザをブロックする

1. ブロックしたい作者のコメントへ移動します。
2. コメントの右上で {% octicon "kebab-horizontal" aria-label="The horizontal kebab icon" %} をクリックし、次に [**Block user**] をクリックします。 ![ユーザブロックのオプションを表示する水平の kebab アイコンとコメント調整メニュー](/assets/images/help/repository/comment-menu-block-user.png)
3. ブロックに期限を設定したい場合には、[Block user] ドロップダウンメニューを使い、ユーザをブロックしたい期間を選択します。 ![ユーザのブロックドロップダウンメニュー内のブロック期間制限](/assets/images/help/organizations/org-block-options-menu-from-comment.png)
4. Organization 内でそのユーザが書いたすべてのコメントを隠したい場合は、[**Hide this user's comments**] (このユーザのコメントを隠す) を選択し、理由を選びます。 ![ユーザのブロックドロップダウンメニュー内の通知の送信](/assets/images/help/organizations/org-block-options-menu-hide-user-comments.png)
5. ブロックする理由をユーザに通知したい場合は、[** Send a notification to this user**] (このユーザに通知を送信) を選択します。 ![ユーザのブロックドロップダウンメニュー内の通知の送信](/assets/images/help/organizations/org-block-options-menu-send-notification.png)
6. ユーザをブロックするには、[**Block user from organization**] (Organization からユーザをブロック) または [**Block user from organization and send message**] (Organization からユーザをブロックしてメッセージを送信) をクリックします。 ![[Block user] ボタン](/assets/images/help/organizations/org-block-user-button-in-comment.png)

### Organization 設定でユーザをブロックする

1. Organization のメンバーをブロックするには、まず Organization から[メンバーを削除](/articles/removing-a-member-from-your-organization)します。
{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.org_settings %}
{% data reusables.organizations.block_users %}
6. [Block a user] の下で、ブロックしたいユーザ名を入力します。 ![ユーザ名フィールド](/assets/images/help/organizations/org-block-username-field.png)
7. ブロックに期限を設定したい場合には、[Block option] ドロップダウンメニューを使い、ユーザをブロックする期間を選択します。 ![ブロックオプションのドロップダウンメニュー](/assets/images/help/organizations/org-block-options-menu.png)
8. [**Block user**] (ユーザをブロック) をクリックします。 ![ブロックボタン](/assets/images/help/organizations/org-block-user-button.png)

### 参考リンク

- [Organization からブロックされているユーザの表示](/communities/maintaining-your-safety-on-github/viewing-users-who-are-blocked-from-your-organization)
- [Organization からのユーザのブロック解除](/communities/maintaining-your-safety-on-github/unblocking-a-user-from-your-organization)
- [個人アカウントからのユーザのブロック](/communities/maintaining-your-safety-on-github/blocking-a-user-from-your-personal-account)
- [個人アカウントからのユーザのブロック解除](/communities/maintaining-your-safety-on-github/unblocking-a-user-from-your-personal-account)
- [悪用あるいはスパムのレポート](/communities/maintaining-your-safety-on-github/reporting-abuse-or-spam)
