---
title: プル要求のマージ
intro: 作業が完了したら、プルリクエストを上流ブランチにマージします。 リポジトリに対してプッシュアクセスを持つユーザなら誰でもマージを実行できます。
redirect_from:
  - /github/collaborating-with-issues-and-pull-requests/incorporating-changes-from-a-pull-request/merging-a-pull-request
  - /articles/merging-a-pull-request
  - /github/collaborating-with-issues-and-pull-requests/merging-a-pull-request
  - /github/collaborating-with-pull-requests/incorporating-changes-from-a-pull-request/merging-a-pull-request
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Pull requests
ms.openlocfilehash: cccb85404c9cfe7305d639911528afed3706edfa
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/11/2022
ms.locfileid: '145137763'
---
## プルリクエストのマージについて

プルリクエストでは、head ブランチに加えた変更をベースブランチにマージすることを提案します。 デフォルトでは、head ブランチがベースブランチとコンフリクトしていない限り、どのプルリクエストもいつでもマージできます。 ただし、プルリクエストを特定のブランチにマージできるタイミングには制限がある場合があります。 たとえば、必須のステータスチェックに合格した場合にのみ、プルリクエストをデフォルトブランチにマージできます。 詳細については、「[保護されたブランチについて](/github/administering-a-repository/about-protected-branches)」を参照してください。

{% data reusables.pull_requests.you-can-auto-merge %}

pull request でマージ コンフリクトが発生する場合、またはマージの前に変更をテストしたい場合は、コマンドラインを使用して、[pull request をローカルでチェックアウト](/github/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/checking-out-pull-requests-locally)してマージすることができます。

ドラフトのプルリクエストをマージすることはできません。 pull request の詳細については、「[pull requests について](/articles/about-pull-requests#draft-pull-requests)」を参照してください。

プルリクエストをマージするとプルリクエストの head ブランチが自動的に削除されるようにリポジトリを設定できます。 詳細については、「[ブランチの自動削除を管理する](/github/administering-a-repository/managing-the-automatic-deletion-of-branches)」を参照してください。

{% note %}

**注:** {% data reusables.pull_requests.retargeted-on-branch-deletion %} 詳細については、「[ブランチについて](/github/collaborating-with-issues-and-pull-requests/about-branches#working-with-branches)」を参照してください。

{% endnote %}

pull request は、高速転送オプションを使用してマージされる、[スカッシュまたはリベースされるコミットを含む pull request](/pull-requests/collaborating-with-pull-requests/incorporating-changes-from-a-pull-request/about-pull-request-merges) を除き、[ `--no-ff`オプション](https://git-scm.com/docs/git-merge#_fast_forward_merge)を使用してマージされます。

{% data reusables.pull_requests.close-issues-using-keywords %}

トピック ブランチでの変更を上流ブランチにマージしない場合は、マージせずに [pull request をクローズする](/pull-requests/collaborating-with-pull-requests/incorporating-changes-from-a-pull-request/closing-a-pull-request)ことができます。

## プル要求のマージ

{% webui %}

{% data reusables.repositories.sidebar-pr %}
2. [Pull Requests] リストで、マージしたいプルリクエストをクリックします。
3. リポジトリで有効なマージオプションに応じて、以下の操作が可能です:
    - **[pull request をマージする]** をクリックして、[すべてのコミットをベース ブランチにマージします](/articles/about-pull-request-merges/)。 **[pull request をマージする]** オプションが表示されていない場合は、マージのドロップダウン メニューをクリックして **[マージ コミットの作成]** をクリックします。
    ![merge-pull-request-button](/assets/images/help/pull_requests/pullrequest-mergebutton.png)
    - [マージ] ドロップダウン メニューをクリックし、 **[スカッシュとマージ]** を選択し、 **[スカッシュとマージ]** ボタンをクリックして、[コミットを 1 つのコミットにスカッシュします](/articles/about-pull-request-merges/#squash-and-merge-your-pull-request-commits)。
    ![click-squash-and-merge-button](/assets/images/help/pull_requests/select-squash-and-merge-from-drop-down-menu.png)
    - マージ ドロップダウン メニューをクリックし、 **[リベースとマージ]** を選択し、 **[リベースとマージ]** ボタンをクリックして、[コミットをベース ブランチに個別にリベースします](/articles/about-pull-request-merges/#rebase-and-merge-your-pull-request-commits)。
    ![select-rebase-and-merge-from-drop-down-menu](/assets/images/help/pull_requests/select-rebase-and-merge-from-drop-down-menu.png)

    {% note %}

    **注:** リベースおよびコミットを行うと、常にコミッターの情報が更新され、新しいコミット SHA が作成されます。 詳細については、「[pull request のマージについて](/articles/about-pull-request-merges#rebase-and-merge-your-pull-request-commits)」を参照してください。

    {% endnote %}
4. 要求されたら、コミットメッセージを入力するか、デフォルトのメッセージのままにします。

   {% data reusables.pull_requests.default-commit-message-squash-merge %} ![[コミット メッセージ] フィールド](/assets/images/help/pull_requests/merge_box/pullrequest-commitmessage.png)

{% data reusables.files.choose-commit-email %}

   {% note %}

   **注:**  メール セレクターは、マージ コミットを作成しないリベース マージ、または pull request を作成したユーザーをスカッシュ コミットの作者としてクレジットするスカッシュ マージには使用できません。

   {% endnote %}

6. **[マージを確認する]** 、 **[スカッシュとマージを確認する]** または **[リベースとマージを確認する]** をクリックします。
6. 必要に応じて、[ブランチを削除](/articles/deleting-unused-branches)します。 こうすることで、リポジトリにあるブランチのリストが整理された状態を保てます。

{% endwebui %}

{% cli %}

{% data reusables.cli.cli-learn-more %}

pull request をマージするには、`gh pr merge` サブコマンドを使用します。 `pull-request` を、pull request の番号、URL、またはヘッド ブランチと置き換えます。

```shell
gh pr merge <em>pull-request</em>
```

対話型のプロンプトに従って、マージを完了します。 選択できるマージ メソッドの詳細については、「[pull request のマージについて](/github/collaborating-with-pull-requests/incorporating-changes-from-a-pull-request/about-pull-request-merges)」を参照してください。

または、フラグを使用して対話型のプロンプトをスキップすることができます。 たとえば、このコマンドはコミット メッセージ "my squash commit" を使用してコミットを 1 つのコミットにスカッシュし、スカッシュされたコミットをベース ブランチにマージしてから、ローカルおよびリモート ブランチを削除します。

```shell
gh pr merge 523 --squash --body "my squash commit" --delete-branch
```

{% endcli %}

## 参考資料

- [Pull Request を打ち消す](/articles/reverting-a-pull-request)
- {% data variables.product.prodname_desktop %} を使用した[ブランチの同期](/desktop/guides/contributing-to-projects/syncing-your-branch/)
- [pull request のマージについて](/pull-requests/collaborating-with-pull-requests/incorporating-changes-from-a-pull-request/about-pull-request-merges)
- [マージコンフリクトへの対処](/github/collaborating-with-pull-requests/addressing-merge-conflicts)
