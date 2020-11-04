---
title: プルリクエストについて
intro: 'プルリクエストは、他者に対してあなたが{% data variables.product.product_name %}上のリポジトリ内のブランチにプッシュした変更について知らせます。 プルリクエストがオープンされると、変更がベースブランチにマージされる前に、可能性のある変更についてコラボレーターと議論し、レビューでき、フォローアップのコメントを追加できます。'
redirect_from:
  - /articles/using-pull-requests/
  - /articles/about-pull-requests
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---

### プルリクエストについて

{% note %}

**メモ:** プルリクエストを使う際には以下のことを念頭に置いてください:
* [共有リポジトリモデル](/articles/about-collaborative-development-models)で作業をしている場合、プルリクエストにはトピックブランチを使うことをおすすめします。 ブランチあるいはコミットからプルリクエストを送ることもできますが、トピックブランチを使えば提案した変更を更新する必要がある場合、フォローアップのコミットをプッシュできます。
* プルリクエストにコミットをプッシュする場合、フォースプッシュはしないでください。 フォースプッシュをすると、プルリクエストが壊れることがあります。

{% endnote %}

プルリクエストを初期化すると、あなたのブランチ（比較ブランチ）とリポジトリのベースブランチとの差異の高レベルの概要を示すレビューページが表示されます。 提案した変更の概要を追加したり、コミットによる変更をレビューしたり、ラベルやマイルストーン、アサインされた人を追加したり、個人のコントリビューターやTeamに@メンションできます。 詳しい情報については[プルリクエストの作成](/articles/creating-a-pull-request)を参照してください。

プルリクエストを作成したら、トピックブランチからコミットをプッシュして、それらを既存のプルリクエストに追加できます。 それらのコミットは、プルリクエスト内で時系列順に表示され、変更は"Files changed（変更されたファイル）"タブで見ることができます。

他のコントリビューターは、あなたが提案した変更をレビューしたり、レビューコメントを追加したり、プルリクエストのディスカッションにコントリビュートしたり、さらにはプルリクエストにコメントを追加したりできます。

{% if currentVersion == "free-pro-team@latest" %}
You can see information about the branch's current deployment status and past deployment activity on the "Conversation" tab. 詳細は「[リポジトリのデプロイメントアクティビティを表示する](/articles/viewing-deployment-activity-for-your-repository)」を参照してください。
{% endif %}

提案された変更に満足したなら、プルリクエストをマージできます。 共有リポジトリモデルで作業している場合は、プルリクエストを作成し、あなたか他のユーザが、プルリクエストで指定したベースブランチにフィーチャブランチからの変更をマージします。 詳しい情報については[プルリクエストのマージ](/articles/merging-a-pull-request)を参照してください。

{% data reusables.pull_requests.required-checks-must-pass-to-merge %}

{% data reusables.pull_requests.close-issues-using-keywords %}

{% tip %}

**参考:**
- プルリクエスト内のすべての古いレビューコメントの折りたたみと展開を切り替えるには、<span class="platform-mac"><kbd>option</kbd></span><span class="platform-linux"><kbd>Alt</kbd></span><span class="platform-windows"><kbd>Alt</kbd></span> を押しながら、[**Show outdated**] または [**Hide outdated**] をクリックします。 その他のショートカットについては「[キーボードのショートカット](/articles/keyboard-shortcuts)」を参照してください。
- プルリクエストをマージする際には、変更を効率的に見ることができるようにするためにコミットを squash できます。 詳しい情報については[プルリクエストのマージについて](/articles/about-pull-request-merges)を参照してください。

{% endtip %}

ダッシュボードにアクセスすれば、作業しているかサブスクライブしている最近更新されたプルリクエストへのリンクを素早く見つけることができます。 詳しい情報については[パーソナルダッシュボードについて](/articles/about-your-personal-dashboard)を参照してください。

### ドラフトプルリクエスト

{% data reusables.gated-features.draft-prs %}

プルリクエストを作成する際には、レビュー可能なプルリクエストを作成するか、ドラフトのプルリクエストを作成するかを選択できます。 ドラフトのプルリクエストはマージできません。また、コードオーナーにはドラフトのプルリクエストのレビューは自動的にはリクエストされません。 ドラフトのプルリクエストの作成に関する詳しい情報については、「[プルリクエストを作成する](/articles/creating-a-pull-request)」および「[フォークからプルリクエストを作成する](/articles/creating-a-pull-request-from-a-fork)」を参照してください。

{% data reusables.pull_requests.mark-ready-review %} プルリクエストはいつでもドラフトに変換できます。 詳しい情報については、「[プルリクエストのステージの変更](/articles/changing-the-stage-of-a-pull-request)」を参照してください。

### Differences between commits on compare and pull request pages

The compare and pull request pages use different methods to calculate the diff for changed files:

- Compare pages show the diff between the tip of the head ref and the current common ancestor (that is, the merge base) of the head and base ref.
- Pull request pages show the diff between the tip of the head ref and the common ancestor of the head and base ref at the time when the pull request was created. Consequently, the merge base used for the comparison might be different.

### 参考リンク

- {% data variables.product.prodname_dotcom %} 用語集中の[プルリクエスト](/articles/github-glossary/#pull-request)
- [ブランチについて](/articles/about-branches)
- [プルリクエストへのコメント](/articles/commenting-on-a-pull-request)
- [プルリクエストのマージ](/articles/merging-a-pull-request)
- [プルリクエストのクローズ](/articles/closing-a-pull-request)
- [使われていないブランチの削除](/articles/deleting-unused-branches)
- [プルリクエストのマージについて](/articles/about-pull-request-merges)
