---
title: 個人アカウントからのユーザのブロック
intro: ユーザをブロックして、あなたのアクティビリティやリポジトリへのアクセスを拒否し、あなたに通知を送れないようにすることができます。
redirect_from:
  - /articles/blocking-a-user-from-your-personal-account
  - /github/building-a-strong-community/blocking-a-user-from-your-personal-account
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Community
shortTitle: Block from your account
ms.openlocfilehash: bd657c221b007b6b574e97f54f2b330401b8fd9b
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/05/2022
ms.locfileid: '147422877'
---
## ユーザのブロックについて

自分のアカウント設定、もしくはユーザのプロファイルからユーザをブロックできます。 {% data variables.product.prodname_dotcom %}は、ユーザをブロックしてもユーザに通知しません。 ブロックした人と同じプロジェクトにコントリビューションしたくない場合は、ブロックしたユーザがコントリビューションしているすべてのリポジトリで警告を表示させるように選択できます。 詳細については、「[アカウント設定でのユーザーのブロック](#blocking-a-user-in-your-account-settings)」を参照してください。 共有スペースでブロックされたユーザのアクティビティが引き続き表示される場合があり、ブロックされたユーザは既存のコンテンツを削除できます。

{% tip %}

**ヒント:** 過熱した会話を鎮めるためにユーザーをブロックする場合、会話をロックすることにより、コラボレーターだけがコメントできるようになります。 詳細については、[会話のロック](/communities/moderating-comments-and-conversations/locking-conversations)に関するページを参照してください。

{% endtip %}

ユーザをブロックすると、以下のようになります:
- そのユーザによるあなたのフォローは止まります
- ユーザがリポジトリの Watch を停止し、リポジトリのピン留めを解除します
- そのユーザはあなたがオーナーの Organization には参加できなくなります
- そのユーザによる Star 付けや Issue 割り当てはリポジトリから削除されます。
- リポジトリ内のディスカッションまたはコメントに対するユーザの投票が削除されます
- そのユーザは、あなたのリポジトリのコラボレーターではなくなります
- リポジトリへのユーザのコントリビューションがカウントされなくなります
- ブロックされたユーザのリポジトリへのコントリビューションがカウントされなくなります
- リポジトリのコラボレータとして削除されます
- そのユーザの、あなたへのスポンサーシップはキャンセルされます
- ブロックされたユーザへの、またはブロックされたユーザからの保留中のリポジトリまたはアカウント継承者の招待がキャンセルされます
- ユーザーは、あなたが所有するすべてのプロジェクトおよび {% data variables.projects.projects_v1_boards %} からコラボレーターとして削除されます
- あなたは、ユーザーが所有するすべてのプロジェクトおよび {% data variables.projects.projects_v1_boards %} からコラボレーターとして削除されます

ユーザをブロックすると、ユーザは以下のことができなくなります:
- あなたのユーザー名を [@mentioning](/articles/basic-writing-and-formatting-syntax/#mentioning-people-and-teams) に含めて、通知を送信する
- 作成した Issue またはプルリクエストへのコメントまたは編集
- Issue、プルリクエスト、コミットに対するコメントへの反応
- あなたのフォロー、あるいはあなたのコンテンツを自身のアクティビティフィードで見ること
- Issue またはプルリクエストへの割り当て
- あなたを自身のリポジトリにコラボレーターとして招待すること
- あなた自身をセキュリティアドバイザリのコラボレータとして招待してください
- あなたのリポジトリをコメント中でクロス参照すること
- リポジトリのフォーク、Watch、ピン留め、Star 付け
- あなたをスポンサーすること
- ユーザーのプロジェクトおよび {% data variables.projects.projects_v1_boards %} のコラボレーションとしてあなたを追加すること
- あなたのパブリック プロジェクトおよび {% data variables.projects.projects_v1_boards %} に変更を加えること

あなたが所有するリポジトリでは、ブロックされたユーザは以下のこともできなくなります:
- Issue のオープン
- プルリクエストの送信、クローズ、マージ
- Issue、プルリクエスト、あるいはコメントにコメントする
- ウィキページを追加または編集する

## アカウント設定でのユーザのブロック

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.blocked_users %}
3. [ユーザーをブロック] の下で、ブロックしたいユーザーのユーザー名を入力してから、 **[ユーザーをブロック]** をクリックします。
  ![ユーザー名フィールドとブロック ボタン](/assets/images/help/settings/user-settings-block-user.png)
4. 必要に応じて、ブロックされたユーザーが共同作成者であるリポジトリにアクセスしたときに警告を表示するには、 **[ブロックされたユーザーがリポジトリの以前の共同作成者である場合に警告する]** を選びます。
  ![ブロックされたユーザーについて警告するオプション](/assets/images/help/settings/warn-block-user.png)

## プロフィールページでのユーザのブロック

{% data reusables.profile.user_profile_page_navigation %} {% data reusables.profile.user_profile_page_block_or_report %}
3. **[Block user]** をクリックします。
   ![ユーザーをブロックまたは悪用を報告するオプションがあるモーダル ボックス](/assets/images/help/profile/profile-blockuser.png)

{% note %}

嫌がらせを受けた場合は、 {% data variables.contact.report_abuse %} を使用してご連絡ください。 {% data reusables.policies.abuse %}

{% endnote %}

## 参考資料

- 「[個人アカウントからブロックしたユーザーを表示する](/communities/maintaining-your-safety-on-github/viewing-users-youve-blocked-from-your-personal-account)」
- "[個人アカウントからユーザーのブロックを解除する](/communities/maintaining-your-safety-on-github/unblocking-a-user-from-your-personal-account)"
- 「[組織からのユーザーのブロック](/communities/maintaining-your-safety-on-github/blocking-a-user-from-your-organization)」
- "[組織からユーザーのブロックを解除する](/communities/maintaining-your-safety-on-github/unblocking-a-user-from-your-organization)"
- "[悪用あるいはスパムをレポートする](/communities/maintaining-your-safety-on-github/reporting-abuse-or-spam)"
- 「[リポジトリでのインタラクションを制限する](/communities/moderating-comments-and-conversations/limiting-interactions-in-your-repository)」
