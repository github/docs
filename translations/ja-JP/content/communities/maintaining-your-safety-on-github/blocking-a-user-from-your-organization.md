---
title: Organization からのユーザのブロック
intro: Organization のオーナーとモデレーターは、Organization のメンバーではないユーザーが Organization のリポジトリで共同作業を行うことをブロックできます。
redirect_from:
  - /articles/blocking-a-user-from-your-organization
  - /github/building-a-strong-community/blocking-a-user-from-your-organization
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Community
shortTitle: Block from your org
ms.openlocfilehash: 527ce4fcf92946836f7a3d93e5caf07193561d4b
ms.sourcegitcommit: 1529de77bfcbe45519131b5f5fb3ab319758c2d2
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 11/14/2022
ms.locfileid: '148164356'
---
組織の設定内、もしくはユーザーが作成した特定のコメントから、メンバー以外の人をブロックできます。 コメント内でユーザをブロックした場合、そのユーザに、ブロックされたこととその理由を説明する通知を送信できます。 そうしない場合、ブロックされたことはユーザには直接通知されません。 ユーザは、ブロックされても既存のコンテンツを削除できます。

{% data reusables.organizations.blocking-a-user %}

{% tip %}

**ヒント:** 過熱した会話を鎮めるためにユーザーをブロックする場合、会話をロックすることにより、コラボレーターだけがコメントできるようになります。 詳細については、[会話のロック](/communities/moderating-comments-and-conversations/locking-conversations)に関するページを参照してください。

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

## コメントでユーザをブロックする

1. ブロックしたい作者のコメントへ移動します。
2. コメントの右上で {% octicon "kebab-horizontal" aria-label="The horizontal kebab icon" %} をクリックし、次に **[Block user]** をクリックします。
![ユーザー ブロックのオプションを表示する水平の kebab アイコンとコメント調整メニュー](/assets/images/help/repository/comment-menu-block-user.png)
3. ブロックに期限を設定したい場合には、[Block user] ドロップダウンメニューを使い、ユーザをブロックしたい期間を選択します。
![ユーザーのブロック ドロップダウン メニュー内のブロック期間制限](/assets/images/help/organizations/org-block-options-menu-from-comment.png)
4. 組織内でそのユーザーが書いたすべてのコメントを隠したい場合は、 **[Hide this user's comments]\(このユーザーのコメントを隠す\)** を選択し、理由を選択します。
![ユーザーのブロック ドロップダウン メニュー内の通知の送信](/assets/images/help/organizations/org-block-options-menu-hide-user-comments.png)
5. ブロックする理由をユーザーに通知したい場合は、 **[Send a notification to this user]\(このユーザーに通知を送信\)** を選択します。
![ユーザーのブロック ドロップダウン メニュー内の通知の送信](/assets/images/help/organizations/org-block-options-menu-send-notification.png)
6. ユーザーをブロックするには、 **[Block user from organization]\(Organization からユーザーをブロック\)** または **[Block user from organization and send message]\(Organization からユーザーをブロックしてメッセージを送信\)** をクリックします。
![[ユーザーのブロック] ボタン](/assets/images/help/organizations/org-block-user-button-in-comment.png)

## Organization 設定でユーザをブロックする

1. 組織メンバーをブロックするにはまず、組織から[ユーザーを削除](/articles/removing-a-member-from-your-organization)します。

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% data reusables.organizations.block_users %}
6. [Block a user] の下で、ブロックしたいユーザ名を入力します。
![ユーザー名フィールド](/assets/images/help/organizations/org-block-username-field.png)
7. ブロックに期限を設定したい場合には、[Block option] ドロップダウンメニューを使い、ユーザをブロックする期間を選択します。
![ブロック オプションのドロップダウン メニュー](/assets/images/help/organizations/org-block-options-menu.png)
8. **[Block user]** をクリックします。
![ブロック ボタン](/assets/images/help/organizations/org-block-user-button.png)

## 参考資料

- "[組織からブロックされているユーザーの表示](/communities/maintaining-your-safety-on-github/viewing-users-who-are-blocked-from-your-organization)"
- "[組織からユーザーのブロックを解除する](/communities/maintaining-your-safety-on-github/unblocking-a-user-from-your-organization)"
- "[個人アカウントからのユーザーのブロック](/communities/maintaining-your-safety-on-github/blocking-a-user-from-your-personal-account)"
- "[個人アカウントからユーザーのブロックを解除する](/communities/maintaining-your-safety-on-github/unblocking-a-user-from-your-personal-account)"
- "[悪用あるいはスパムをレポートする](/communities/maintaining-your-safety-on-github/reporting-abuse-or-spam)"
