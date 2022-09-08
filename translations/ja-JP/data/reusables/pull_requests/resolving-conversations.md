---
ms.openlocfilehash: 1447b6a0f63bcfd6e54954545541808debcb3091
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/05/2022
ms.locfileid: "147062371"
---
### 会話を解決する

プルリクエストをオープンしたり、プルリクエストがオープンされたリポジトリへの書き込みアクセス権を持っていたりすれば、プルリクエスト中の会話を解決できます。

**[変更されたファイル]** タブの会話が完了したことを示すには、 **[会話の解決]** をクリックします。

![会話の解決ボタンが付いたプルリクエストの会話](/assets/images/help/pull_requests/conversation-with-resolve-button.png)

会話全体が畳まれ、解決のマークが付きます。これで、まだ対応が必要な会話を見つけやすくなります。

![解決された会話](/assets/images/help/pull_requests/resolved-conversation.png)

コメントの示唆がプルリクエストの範囲を超えているなら、そのコメントへのフィードバックやリンクを追跡する新しいIssueをオープンできます。 詳細については、「[コメントから Issue を開く](/github/managing-your-work-on-github/opening-an-issue-from-a-comment)」を参照してください。

{% ifversion fpt or ghes or ghae-issue-4382 or ghec %}
#### 会話の発見とアクセス

**[変更されたファイル]** タブの上部に表示される **[会話]** メニューを使用すると、pull request 内のすべての会話を検出して移動できます。

このビューから、未解決の会話、解決済みの会話、古くなった会話を見分けることができます。 これによって、会話を見つけて解決することが容易になります。

![[会話] メニューの表示](/assets/images/help/pull_requests/conversations-menu.png) {% endif %}
