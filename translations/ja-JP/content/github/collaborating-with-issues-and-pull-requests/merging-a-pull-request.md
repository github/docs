---
title: プルリクエストをマージする
intro: 作業が完了したら、プルリクエストを上流ブランチにマージします。 リポジトリに対してプッシュアクセスを持つユーザなら誰でもマージを実行できます。
redirect_from:
  - /articles/merging-a-pull-request
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---


### プルリクエストのマージについて

プルリクエストでは、head ブランチに加えた変更をベースブランチにマージすることを提案します。 {% data reusables.pull_requests.about-protected-branches %}ただし、プルリクエストを特定のブランチにマージできるタイミングには制限がある場合があります。 For example, you may only be able to merge a pull request into the default branch if required status checks are passing. 詳しい情報については[保護されたブランチについて](/github/administering-a-repository/about-protected-branches)を参照してください。

プルリクエストでマージコンフリクトが発生する場合、またはマージの前に変更をテストしたい場合は、コマンドラインを使用して、[プルリクエストをローカルでチェックアウト](/articles/checking-out-pull-requests-locally)してマージすることができます。

You can't merge a draft pull request. ドラフトのプルリクエストに関する詳しい情報については「[プルリクエストについて](/articles/about-pull-requests#draft-pull-requests)」を参照してください。

{% data reusables.pull_requests.automatically-delete-branches %}

トピックブランチでの変更を上流ブランチにマージしたくなければ、マージせずに[プルリクエストをクローズする](/articles/closing-a-pull-request)ことができます。

### {% data variables.product.prodname_dotcom %} でプルリクエストをマージする

{% data reusables.repositories.sidebar-pr %}
2. [Pull Requests] リストで、マージしたいプルリクエストをクリックします。
3. リポジトリで有効なマージオプションに応じて、以下の操作が可能です:
    - [**Merge pull request**] をクリックして、すべてのコミットを[ベース ブランチにマージ](/articles/about-pull-request-merges/)します。 [**Merge pull request**] オプションが表示されない場合は、マージのドロップダウン メニューをクリックして [**Create a merge commit**] をクリックします。 ![[Merge pull request] ボタン](/assets/images/help/pull_requests/pullrequest-mergebutton.png)
    - [複数のコミットを 1 つのコミットに squash する](/articles/about-pull-request-merges/#squash-and-merge-your-pull-request-commits)には、マージのドロップダウン メニューをクリックして [**Squash and merge**] を選択し、[**Squash and merge**] ボタンをクリックします。 ![[Squash and merge] ボタンをクリック](/assets/images/help/pull_requests/select-squash-and-merge-from-drop-down-menu.png)
    - [コミットを個々にベース ブランチにリベースする](/articles/about-pull-request-merges/#rebase-and-merge-your-pull-request-commits)には、マージのドロップダウンをクリックして [**Rebase and merge**] を選択し、[**Rebase and merge**] ボタンをクリックします。 ![ドロップダウン メニューから [Rebase and merge] を選択](/assets/images/help/pull_requests/select-rebase-and-merge-from-drop-down-menu.png)

    {% note %}

    **メモ:** リベースおよびコミットを行うと、常にコミッターの情報が更新され、新しいコミット SHA が作成されます。 詳細は「[プルリクエストのマージについて](/articles/about-pull-request-merges#rebase-and-merge-your-pull-request-commits)」を参照してください。

    {% endnote %}
4. 要求されたら、コミットメッセージを入力するか、デフォルトのメッセージのままにします。

   {% data reusables.pull_requests.default-commit-message-squash-merge %}
   ![Commit messageフィールド](/assets/images/help/pull_requests/merge_box/pullrequest-commitmessage.png)

{% data reusables.files.choose-commit-email %}

6. [**Confirm merge**]、[**Confirm squash and merge**] をクリックするか、[**Confirm rebase and merge**] をクリックします。
6. また、代わりに[ブランチを削除](/articles/deleting-unused-branches)することもできます。 こうすることで、リポジトリにあるブランチのリストが整理された状態を保てます。

The repository may be configured so that the head branch for a pull request is automatically deleted when you merge a pull request. 詳しい情報については「[ブランチの自動削除の管理](/github/administering-a-repository/managing-the-automatic-deletion-of-branches)」を参照してください。

   {% if currentVersion == "free-pro-team@latest" or currentVersion == "github-ae@latest" or currentVersion ver_gt "enterprise-server@2.21" %}
   {% note %}

   **Note:** {% data reusables.pull_requests.retargeted-on-branch-deletion %}
   For more information, see "[About branches](/github/collaborating-with-issues-and-pull-requests/about-branches#working-with-branches)."

   {% endnote %}
   {% endif %}

プルリクエストは [`--no-ff` オプション](https://git-scm.com/docs/git-merge#_fast_forward_merge)を使用してマージされますが、[squash またはリベースされたコミット](/articles/about-pull-request-merges)は例外で、fast-forward オプションを使用してマージされます。

{% data reusables.pull_requests.close-issues-using-keywords %}

### 参考リンク

- [Pull Request を元に戻す](/articles/reverting-a-pull-request)
- 「[{% data variables.product.prodname_desktop %} を使用してブランチを同期する](/desktop/guides/contributing-to-projects/syncing-your-branch/)」
- [プルリクエストのマージについて](/articles/about-pull-request-merges)
- [マージコンフリクトへの対処](/articles/addressing-merge-conflicts)
