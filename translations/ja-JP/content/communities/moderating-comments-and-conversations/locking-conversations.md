---
title: 会話をロックする
intro: リポジトリのオーナーおよびコラボレーター、そしてリポジトリへの書き込みアクセスを持つユーザは、過熱した議論を和らげるために、Issue、プルリクエスト、およびコミットに関する会話を、恒久的または一時的にロックすることができます。
redirect_from:
  - /articles/locking-conversations
  - /github/building-a-strong-community/locking-conversations
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Community
ms.openlocfilehash: 986d23cb4fe9850cb6c6824e9a3f2c256b6fd4e4
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/10/2022
ms.locfileid: '145090243'
---
会話全体が建設的でない場合や、コミュニティの行動規範{% ifversion fpt or ghec %}または GitHub の[コミュニティ ガイドライン](/free-pro-team@latest/github/site-policy/github-community-guidelines){% endif %}に違反している場合は、会話をロックするのが適切です。 会話をロックするとき、理由を指定することもできます。これは誰にでも見ることができます。

会話をロックすると、リポジトリに対する読み取りアクセスを持つユーザなら誰でも見ることのできるタイムラインイベントが作成されます。 ただし、会話をロックしたユーザの名前は、リポジトリへの書き込みアクセスを持つユーザにしか見えません。 書き込みアクセスを持たないユーザから見ると、タイムラインイベントは匿名化されています。

![ロックした会話について匿名化されたタイムラインイベント](/assets/images/help/issues/anonymized-timeline-entry-for-locked-conversation.png)

会話がロックされている間は、[書き込みアクセス権を持つユーザー](/articles/repository-permission-levels-for-an-organization/)と[リポジトリの所有者とコラボレーター](/articles/permission-levels-for-a-user-account-repository/#collaborator-access-for-a-repository-owned-by-a-personal-account)のみがコメントの追加、非表示、削除を行うことができます。

アーカイブされていないリポジトリ内のロックされた会話を検索するには、検索修飾子 `is:locked` と `archived:false` を使用できます。 会話はアーカイブされたリポジトリで自動的にロックされます。 詳細については、「[Searching issues and pull requests](/search-github/searching-on-github/searching-issues-and-pull-requests#search-based-on-whether-a-conversation-is-locked)」 (問題とプルリクエストの検索) を参照してください。

1. オプションで、会話をロックする理由を説明するコメントを書いてください。
2. issue または pull request の右余白、またはコミット ページのコメント ボックスの上にある **[会話のロック]** をクリックします。
![[会話のロック] リンク](/assets/images/help/repository/lock-conversation.png)
3. オプションで、会話をロックする理由を選択します。
![会話をロックする理由のメニュー](/assets/images/help/repository/locking-conversation-reason-menu.png)
4. 会話のロックに関する情報を読み、 **[Lock conversation on this issue]\(この issue に関する会話をロックする\)** 、 **[Lock conversation on this pull request]\(この pull request に関する会話をロックする\)** 、または **[Lock conversation on this commit]\(このコミットに関する会話をロックする\)** をクリックします。
![[理由] ダイアログ ボックスでロックを確認する](/assets/images/help/repository/lock-conversation-confirm-with-reason.png)
5. 会話のロックを解除する準備ができたら、 **[会話のロック解除]** をクリックします。
![[会話のロック解除] リンク](/assets/images/help/repository/unlock-conversation.png)

## 参考資料

- 「[健全なコントリビューションを促すプロジェクトをセットアップする](/communities/setting-up-your-project-for-healthy-contributions)」
- 「[テンプレートを使用して便利な issue や pull request を推進する](/communities/using-templates-to-encourage-useful-issues-and-pull-requests)」
- 「[混乱を生むコメントを管理する](/communities/moderating-comments-and-conversations/managing-disruptive-comments)」{% ifversion fpt or ghec %}
- 「[{% data variables.product.prodname_dotcom %} での安全性を維持する](/communities/maintaining-your-safety-on-github)
- "[悪用あるいはスパムをレポートする](/communities/maintaining-your-safety-on-github/reporting-abuse-or-spam)"
- 「[リポジトリでのインタラクションを制限する](/communities/moderating-comments-and-conversations/limiting-interactions-in-your-repository)」{% endif %}
