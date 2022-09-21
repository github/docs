---
title: pull requests について
intro: 'pull request を使用すると、他の人に対してあなたが {% data variables.product.product_name %} 上のリポジトリ内のブランチにプッシュした変更について知らせることができます。 pull request がオープンされると、変更がベース ブランチにマージされる前に、可能性のある変更についてコラボレーターと話し合い、レビューでき、フォローアップのコミットを追加できます。'
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
ms.openlocfilehash: 6912f0ca38cc522d5698a9e8b1a1042f445b999e
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/05/2022
ms.locfileid: '147111110'
---
## pull requests について

{% note %}

**メモ:** pull request を使う際には以下のことを念頭に置いてください:
* [共有リポジトリ モデル](/pull-requests/collaborating-with-pull-requests/getting-started/about-collaborative-development-models)で作業している場合は、pull request にトピック ブランチを使用することをお勧めします。 ブランチあるいはコミットからプルリクエストを送ることもできますが、トピックブランチを使えば提案した変更を更新する必要がある場合、フォローアップのコミットをプッシュできます。
* コミットを強制的に pull request にプッシュする場合は十分に注意してください。 プッシュを強制すると、リポジトリの履歴が変更され、pull request が破損する可能性があります。 他のコラボレーターが強制プッシュの前にプロジェクトを分岐すると、そのコラボレーターが作業のベースにしたコミットが上書きされる可能性があります。

{% endnote %}

pull request は、{% data variables.product.prodname_dotcom_the_website %}、{% data variables.product.prodname_desktop %}、{% data variables.product.prodname_github_codespaces %}、{% data variables.product.prodname_mobile %} で、GitHub CLI の使用時に作成できます。

プルリクエストを初期化すると、あなたのブランチ（比較ブランチ）とリポジトリのベースブランチとの差異の高レベルの概要を示すレビューページが表示されます。 提案した変更の概要を追加したり、コミットによる変更をレビューしたり、ラベルやマイルストーン、アサインされた人を追加したり、個人のコントリビューターや Team に @mention したりできます。 詳細については、[プル リクエストの作成](/articles/creating-a-pull-request)に関するページを参照してください。

プルリクエストを作成したら、トピックブランチからコミットをプッシュして、それらを既存のプルリクエストに追加できます。 それらのコミットは、プルリクエスト内で時系列順に表示され、変更は"Files changed（変更されたファイル）"タブで見ることができます。

他のコントリビューターは、あなたが提案した変更をレビューしたり、レビューコメントを追加したり、プルリクエストのディスカッションにコントリビュートしたり、さらにはプルリクエストにコメントを追加したりできます。 {% ifversion pull-request-approval-limit %}{% data reusables.pull_requests.code-review-limits %}{% endif %}

{% ifversion fpt or ghec %} 分岐の現在のデプロイ状態と過去のデプロイ アクティビティに関する情報は "Conversation" タブで確認できます。詳細については、[リポジトリのデプロイ アクティビティを表示する](/repositories/viewing-activity-and-data-for-your-repository/viewing-deployment-activity-for-your-repository)方法に関するページを参照してください。
{% endif %}

提案された変更に満足したなら、プルリクエストをマージできます。 共有リポジトリモデルで作業している場合は、プルリクエストを作成し、あなたか他のユーザが、プルリクエストで指定したベースブランチにフィーチャブランチからの変更をマージします。 詳細については、[pull request のマージ](/articles/merging-a-pull-request)に関するページを参照してください。

{% data reusables.pull_requests.required-checks-must-pass-to-merge %}

{% data reusables.pull_requests.close-issues-using-keywords %}

{% tip %}

**ヒント:**
- pull request で古いレビュー コメントを折りたたむか、展開するには、<span class="platform-mac"><kbd>Option</kbd></span><span class="platform-linux"><kbd>Alt</kbd></span><span class="platform-windows"><kbd>Alt</kbd></span> を押したまま、 **[Show outdated]\(期限切れを表示\)** または **[Hide outdated]\(期限切れを非表示\)** をクリックします。 その他のショートカットについては、[キーボード ショートカット](/articles/keyboard-shortcuts)を参照してください。
- プルリクエストをマージする際には、変更を効率的に見ることができるようにするためにコミットを squash できます。 詳細については、「[pull request のマージについて](/pull-requests/collaborating-with-pull-requests/incorporating-changes-from-a-pull-request/about-pull-request-merges)」を参照してください。

{% endtip %}

ダッシュボードにアクセスすれば、作業しているかサブスクライブしている最近更新されたプルリクエストへのリンクを素早く見つけることができます。 詳細については、[個人用ダッシュボード](/articles/about-your-personal-dashboard)に関するページを参照してください。

## ドラフト プル リクエスト

{% data reusables.gated-features.draft-prs %}

プルリクエストを作成する際には、レビュー可能なプルリクエストを作成するか、ドラフトのプルリクエストを作成するかを選択できます。 ドラフトのプルリクエストはマージできません。また、コードオーナーにはドラフトのプルリクエストのレビューは自動的にはリクエストされません。 ドラフトの pull request を作成する方法については、「[pull request の作成方法](/articles/creating-a-pull-request)」および「[フォークからの pull request を作成する](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request-from-a-fork)」を参照してください。

{% data reusables.pull_requests.mark-ready-review %} プルリクエストはいつでもドラフトに変換できます。 詳細については、[pull request のステージ変更](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/changing-the-stage-of-a-pull-request)に関するページを参照してください。

## 比較とプルリクエストページのコミットの違い

比較とプルリクエストページは、次のような異なる方法で、変更されたファイルの diff を計算します。

- 比較ページには、head ref のヒントと、head およびベース ref の現在の共通の先祖 (マージベース) との diff が表示されます。
- プルリクエストページには、プルリクエストが作成されたときの head ref のヒントと、head およびベース ref の共通の先祖との diff が表示されます。 したがって、比較に使用されるマージベースは異なる場合があります。

## 参考資料

- {% data variables.product.prodname_dotcom %} 用語集の "[pull request](/articles/github-glossary/#pull-request)"
- "[ブランチについて](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-branches)"
- "[pull request へのコメント](/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/commenting-on-a-pull-request)"
- "[pull request のクローズ](/pull-requests/collaborating-with-pull-requests/incorporating-changes-from-a-pull-request/closing-a-pull-request)"
