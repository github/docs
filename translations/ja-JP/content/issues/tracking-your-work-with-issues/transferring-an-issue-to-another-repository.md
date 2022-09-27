---
title: 他のリポジトリへ Issue を移譲する
intro: より適しているリポジトリに Issue を移動するため、オープン Issue を他のリポジトリに移譲できます。
redirect_from:
  - /github/managing-your-work-on-github/managing-your-work-with-issues-and-pull-requests/transferring-an-issue-to-another-repository
  - /articles/transferring-an-issue-to-another-repository
  - /github/managing-your-work-on-github/transferring-an-issue-to-another-repository
  - /issues/tracking-your-work-with-issues/managing-issues/transferring-an-issue-to-another-repository
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Pull requests
shortTitle: Transfer an issue
ms.openlocfilehash: ee17296217027d2de9805a905aaec187f53e5614
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/05/2022
ms.locfileid: '147710420'
---
他のリポジトリにオープンなIssue を移譲するには、Issue のあるリポジトリおよびその Issue の移譲先のリポジトリの書き込みアクセス権が必要です。 詳細については、「[Organization のリポジトリ ロール](/organizations/managing-access-to-your-organizations-repositories/repository-roles-for-an-organization)」を参照してください。

{% note %}

**注**: 同じユーザーまたは Organization アカウントが所有するリポジトリ間においてのみ、Issue を移譲できます。 {% ifversion fpt or ghes or ghec %}プライベートリポジトリのIssueをパブリックリポジトリに移譲することはできません。{% endif %}

{% endnote %}

Issue を委譲する場合、コメントとアサインされた人は保持されます。 ラベルとマイルストーンもターゲット リポジトリ内に置かれる場合は保持されます。ラベルは名前で照合され、マイルストーンは名前と期限の両方で照合されます。 このIssueは、ユーザー所有または組織全体のプロジェクトボードにとどまり、リポジトリのプロジェクトボードから削除されます。 詳細については、「[プロジェクト ボードについて](/articles/about-project-boards)」を参照してください。

Issue でメンションされた人や Team は、Issue が新しいリポジトリに移譲されたことを知らせる通知を受け取ります。 当初の URL は、新しい Issue の URL にリダイレクトします。 新しいリポジトリの読み取り権限がない人には、アクセスできない新しいリポジトリに Issue が移譲されたことを知らせるバナーが表示されます。

## 他のリポジトリへオープン Issue を移譲する

{% webui %}

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-issues %}
3. Issue のリストで、移譲したい Issue をクリックします。
4. 右側のサイドバーで、 **[Issue の移譲]** をクリックします。
![Issue を移譲するボタン](/assets/images/help/repository/transfer-issue.png)
5. **[リポジトリを選択]** ドロップダウン メニューで、Issue の移譲先にするリポジトリを選択します。
![リポジトリ セレクションを選択](/assets/images/help/repository/choose-a-repository.png)
6. **[Issue の移譲]** をクリックします。
![[Issue の移譲] ボタン](/assets/images/help/repository/transfer-issue-button.png)

{% endwebui %}

{% cli %}

{% data reusables.cli.cli-learn-more %}

Issue を移譲するには、`gh issue transfer` サブコマンドを使用します。 `issue` パラメーターを Issue の番号または URL に置き換えます。 `{% ifversion ghes %}hostname/{% endif %}owner/repo` パラメーターを Issue を移譲するリポジトリの{% ifversion ghes %} URL {% else %}名前{% endif %}に置き換えます (例: `{% ifversion ghes %}https://ghe.io/{% endif %}octocat/octo-repo`)。

```shell
gh issue transfer <em>issue</em> <em>{% ifversion ghes %}hostname/{% endif %}owner/repo</em>
```

{% endcli %}

## 参考資料

- 「[Issue について](/articles/about-issues)」
- 「[セキュリティ ログをレビューする](/articles/reviewing-your-security-log)」
- 「[Organization の監査ログをレビューする](/organizations/keeping-your-organization-secure/reviewing-the-audit-log-for-your-organization)」
