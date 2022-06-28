---
title: プルリクエストについて
intro: 'プルリクエストは、他者に対してあなたが{% data variables.product.product_name %}上のリポジトリ内のブランチにプッシュした変更について知らせます。 プルリクエストがオープンされると、変更がベースブランチにマージされる前に、可能性のある変更についてコラボレーターと議論し、レビューでき、フォローアップのコメントを追加できます。'
redirect_from:
  - /github/collaborating-with-issues-and-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests
  - /articles/using-pull-requests
  - /articles/about-pull-requests
  - /github/collaborating-with-issues-and-pull-requests/about-pull-requests
  - /github/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Pull requests
---

## プルリクエストについて

{% note %}

**メモ:** プルリクエストを使う際には以下のことを念頭に置いてください:
* [共有リポジトリモデル](/pull-requests/collaborating-with-pull-requests/getting-started/about-collaborative-development-models)で作業をしている場合、プルリクエストにはトピックブランチを使うことをおすすめします。 ブランチあるいはコミットからプルリクエストを送ることもできますが、トピックブランチを使えば提案した変更を更新する必要がある場合、フォローアップのコミットをプッシュできます。
* Be very careful when force pushing commits to a pull request. Force pushing changes the repository history and can corrupt your pull request. If other collaborators branch the project before a force push, the force push may overwrite commits that collaborators based their work on.

{% endnote %}

You can create pull requests on {% data variables.product.prodname_dotcom_the_website %}, with {% data variables.product.prodname_desktop %}, in {% data variables.product.prodname_codespaces %}, on {% data variables.product.prodname_mobile %}, and when using GitHub CLI.

プルリクエストを初期化すると、あなたのブランチ（比較ブランチ）とリポジトリのベースブランチとの差異の高レベルの概要を示すレビューページが表示されます。 提案した変更の概要を追加したり、コミットによる変更をレビューしたり、ラベルやマイルストーン、アサインされた人を追加したり、個人のコントリビューターやTeamに@メンションできます。 詳しい情報については[プルリクエストの作成](/articles/creating-a-pull-request)を参照してください。

プルリクエストを作成したら、トピックブランチからコミットをプッシュして、それらを既存のプルリクエストに追加できます。 それらのコミットは、プルリクエスト内で時系列順に表示され、変更は"Files changed（変更されたファイル）"タブで見ることができます。

他のコントリビューターは、あなたが提案した変更をレビューしたり、レビューコメントを追加したり、プルリクエストのディスカッションにコントリビュートしたり、さらにはプルリクエストにコメントを追加したりできます。 {% ifversion pull-request-approval-limit %}{% data reusables.pull_requests.code-review-limits %}{% endif %}

{% ifversion fpt or ghec %}
[Conversation] タブで、ブランチの現在のデプロイメントステータスや過去のデプロイメントのアクティビティに関する情報を確認することができます。 詳細は「[リポジトリのデプロイメントアクティビティを表示する](/repositories/viewing-activity-and-data-for-your-repository/viewing-deployment-activity-for-your-repository)」を参照してください。
{% endif %}

提案された変更に満足したなら、プルリクエストをマージできます。 共有リポジトリモデルで作業している場合は、プルリクエストを作成し、あなたか他のユーザが、プルリクエストで指定したベースブランチにフィーチャブランチからの変更をマージします。 詳しい情報については[プルリクエストのマージ](/articles/merging-a-pull-request)を参照してください。

{% data reusables.pull_requests.required-checks-must-pass-to-merge %}

{% data reusables.pull_requests.close-issues-using-keywords %}

{% tip %}

**参考:**
- To toggle between collapsing and expanding all outdated review comments in a pull request, hold down <span class="platform-mac"><kbd>Option</kbd></span><span class="platform-linux"><kbd>Alt</kbd></span><span class="platform-windows"><kbd>Alt</kbd></span> and click **Show outdated** or **Hide outdated**. その他のショートカットについては「[キーボードのショートカット](/articles/keyboard-shortcuts)」を参照してください。
- プルリクエストをマージする際には、変更を効率的に見ることができるようにするためにコミットを squash できます。 詳しい情報については[プルリクエストのマージについて](/pull-requests/collaborating-with-pull-requests/incorporating-changes-from-a-pull-request/about-pull-request-merges)を参照してください。

{% endtip %}

ダッシュボードにアクセスすれば、作業しているかサブスクライブしている最近更新されたプルリクエストへのリンクを素早く見つけることができます。 詳しい情報については[パーソナルダッシュボードについて](/articles/about-your-personal-dashboard)を参照してください。

## ドラフトプルリクエスト

{% data reusables.gated-features.draft-prs %}

プルリクエストを作成する際には、レビュー可能なプルリクエストを作成するか、ドラフトのプルリクエストを作成するかを選択できます。 ドラフトのプルリクエストはマージできません。また、コードオーナーにはドラフトのプルリクエストのレビューは自動的にはリクエストされません。 ドラフトのプルリクエストの作成に関する詳しい情報については、「[プルリクエストを作成する](/articles/creating-a-pull-request)」および「[フォークからプルリクエストを作成する](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request-from-a-fork)」を参照してください。

{% data reusables.pull_requests.mark-ready-review %} プルリクエストはいつでもドラフトに変換できます。 詳しい情報については、「[プルリクエストのステージを変更する](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/changing-the-stage-of-a-pull-request)」を参照してください。

## 比較とプルリクエストページのコミットの違い

比較とプルリクエストページは、次のような異なる方法で、変更されたファイルの diff を計算します。

- 比較ページには、head ref のヒントと、head およびベース ref の現在の共通の先祖 (マージベース) との diff が表示されます。
- プルリクエストページには、プルリクエストが作成されたときの head ref のヒントと、head およびベース ref の共通の先祖との diff が表示されます。 したがって、比較に使用されるマージベースは異なる場合があります。

## 参考リンク

- {% data variables.product.prodname_dotcom %} 用語集中の[プルリクエスト](/articles/github-glossary/#pull-request)
- "[About branches](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-branches)"
- 「[プルリクエストへコメントする](/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/commenting-on-a-pull-request)」
- [プルリクエストのクローズ](/pull-requests/collaborating-with-pull-requests/incorporating-changes-from-a-pull-request/closing-a-pull-request)
