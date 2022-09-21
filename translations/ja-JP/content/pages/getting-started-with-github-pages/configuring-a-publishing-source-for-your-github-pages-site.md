---
title: GitHub Pages サイトの公開元を設定する
intro: '{% ifversion pages-custom-workflow %}変更が特定のブランチにプッシュされたときに公開するように {% data variables.product.prodname_pages %} サイトを構成するか、{% data variables.product.prodname_actions %} ワークフローを記述してサイトを公開することができます。{% else%}{% data variables.product.prodname_pages %} サイトに既定の公開元を使用すると、サイトは自動的に発行されます。 別のブランチまたはフォルダーからサイトを公開するように選択することもできます。{% endif %}'
redirect_from:
  - /articles/configuring-a-publishing-source-for-github-pages
  - /articles/configuring-a-publishing-source-for-your-github-pages-site
  - /github/working-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site
product: '{% data reusables.gated-features.pages %}'
permissions: 'People with admin or maintainer permissions for a repository can configure a publishing source for a {% data variables.product.prodname_pages %} site.'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Pages
shortTitle: Configure publishing source
ms.openlocfilehash: d08b5c150da5be18700312237c374059228c563d
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/05/2022
ms.locfileid: '147529640'
---
## 公開元について

{% data reusables.pages.pages-about-publishing-source %}

{% data reusables.pages.private_pages_are_public_warning %}

## ブランチからの公開

1. 公開元として使用するブランチがリポジトリ内に既に存在していることを確認します。
{% data reusables.pages.navigate-site-repo %} {% data reusables.repositories.sidebar-settings %} {% data reusables.pages.sidebar-pages %} {% ifversion pages-custom-workflow %}
1. [ビルドとデプロイ] の [ソース] で、 **[ソースからのデプロイ]** を選択します。
1. [ビルドとデプロイ] の [ブランチ] で、 **[なし]** または **[ブランチ]** ドロップダウン メニューを使用し、公開元を選択します。

   ![公開元を選択するドロップダウン メニュー](/assets/images/help/pages/publishing-source-drop-down.png) {% else %}
3. "{% data variables.product.prodname_pages %}" で、 **[None]\(なし\)** または **[Branch]\(ブランチ\)** ドロップダウン メニューを使用し、公開ソースを選択します。
  ![公開元を選択するドロップダウン メニュー](/assets/images/help/pages/publishing-source-drop-down.png) {% endif %}
4. 必要に応じて、ドロップダウンメニューで発行元のフォルダを選択します。
  ![公開ソースのフォルダーを選択するドロップダウンメニュー](/assets/images/help/pages/publishing-source-folder-drop-down.png)
5. **[保存]** をクリックします。
  ![公開ソースの設定の変更を保存するボタン](/assets/images/help/pages/publishing-source-save.png)

### ブランチからの公開のトラブルシューティング

{% data reusables.pages.admin-must-push %}

公開ソースとして任意のブランチの `docs` フォルダーを選択し、後でリポジトリ内のそのブランチから `/docs` フォルダーを削除した場合、サイトはビルドされず、見つからない `/docs` フォルダーのページ ビルド エラー メッセージが表示されます。 詳細については、「[{% data variables.product.prodname_pages %} サイトの Jekyll ビルド エラーのトラブルシューティング](/articles/troubleshooting-jekyll-build-errors-for-github-pages-sites#missing-docs-folder)」を参照してください。

{% ifversion build-pages-with-actions %}

{% data variables.product.prodname_pages %}サイトは、{% data variables.product.prodname_pages %}サイトを別のCIツールを使ってビルドするように設定している場合であっても、常に{% data variables.product.prodname_actions %}ワークフローの実行によってデプロイされます。 ほとんどの外部 CI ワークフローは、ビルド出力をリポジトリの `gh-pages` ブランチにコミットして GitHub Pages に "デプロイ" し、通常は `.nojekyll` ファイルを含めます。 これが行われた場合、{% data variables.product.prodname_actions %}ワークフローはブランチにビルドのステップが必要ない状態になっていることを検出し、サイトを{% data variables.product.prodname_pages %}サーバーにデプロイするのに必要なステップだけを実行します。

ビルドあるいはデプロイメントでの潜在的なエラーを見つけるには、リポジトリのワークフロー実行をレビューすることによって、{% data variables.product.prodname_pages %}サイトのためのワークフローの実行をチェックできます。 詳細については、「[ワークフロー実行の履歴を表示する](/actions/monitoring-and-troubleshooting-workflows/viewing-workflow-run-history)」を参照してください。 エラーが発生した場合にワークフローを再実行する方法の詳細については、「[ワークフローとジョブの再実行](/actions/managing-workflow-runs/re-running-workflows-and-jobs)」を参照してください。

{% endif %}

{% ifversion pages-custom-workflow %}

## カスタム {% data variables.product.prodname_actions %} ワークフローによる公開

{% data reusables.pages.pages-custom-workflow-beta %}

{% data variables.product.prodname_actions %} を使用して公開するサイトを構成するには、次の手順を行います。

{% data reusables.pages.navigate-site-repo %} {% data reusables.repositories.sidebar-settings %} {% data reusables.pages.sidebar-pages %}
1. [ビルドとデプロイ] の [ソース] で、 **[GitHub Actions]** を選択します。
1. {% data variables.product.product_name %} により、いくつかのスターター ワークフローが提案されます。 サイトを公開するワークフローが既にある場合、この手順をスキップできます。 それ以外の場合、{% data variables.product.prodname_actions %} ワークフローを作成するオプションのいずれかを選択します。 カスタム ワークフローの作成に関する詳しい情報については、「[サイトを公開するカスタム {% data variables.product.prodname_actions %} ワークフローの作成](#creating-a-custom-github-actions-workflow-to-publish-your-site)」を参照してください。

   {% data variables.product.prodname_pages %} では、特定のワークフローを {% data variables.product.prodname_pages %} 設定に関連付けません。 ただし、{% data variables.product.prodname_pages %} 設定は、最近サイトをデプロイしたワークフロー実行にリンクされます。

### サイトを公開するカスタム {% data variables.product.prodname_actions %} ワークフローの作成

{% data variables.product.prodname_actions %} の詳しい情報については、「[Actions](/actions)」を参照してください。

{% data variables.product.prodname_actions %} で発行するようにサイトを構成する場合、{% data variables.product.product_name %} により、一般的な公開シナリオのスターター ワークフローが提案されます。 ワークフローの一般的なフローは、次のとおりです。

1. リポジトリの既定のブランチへのプッシュがある場合、または既定のブランチを対象とする pull request のオープン、再オープン、または更新が行われるたびにトリガーされます。
1. [`actions/checkout`](https://github.com/actions/checkout) アクションを使用してリポジトリの内容をチェックアウトします。
1. サイトで必要な場合、静的サイト ファイルをビルドします。
1. [`actions/upload-pages-artifact`](https://github.com/actions/upload-pages-artifact) アクションを使用して静的ファイルを成果物としてアップロードします。
1. ワークフローが既定のブランチへのプッシュによってトリガーされた場合、[`actions/deploy-pages`](https://github.com/actions/deploy-pages) アクションを使用して成果物をデプロイします。 ワークフローが pull request によってトリガーされた場合、この手順はスキップされます。

スターター ワークフローでは、`github-pages` という名前のデプロイ環境を使用します。 `github-pages` という名前の環境がリポジトリにまだ含まれていない場合、この環境は自動的に作成されます。 既定のブランチのみがこの環境にデプロイできるように、環境保護ルールを追加することをお勧めします。 詳細については、「[デプロイに環境を使用する](/actions/deployment/targeting-different-environments/using-environments-for-deployment)」を参照してください。

{% note %}

**注**: リポジトリ ファイル内の `CNAME` ファイルでは、カスタム ドメインは自動的に追加または削除されません。 代わりに、リポジトリ設定または API を使用してカスタム ドメインを構成する必要があります。 詳しい情報については、「[GitHub Pages サイトのカスタム ドメインを管理する](/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site#configuring-a-subdomain)」および [Pages API リファレンス ドキュメント](/rest/pages#update-information-about-a-github-pages-site)を参照してください。

{% endnote %}

### カスタム {% data variables.product.prodname_actions %} ワークフローによる公開のトラブルシューティング

{% data variables.product.prodname_actions %} ワークフローのトラブルシューティング方法に関する詳しい情報については、「[監視とトラブルシューティングについて](/actions/monitoring-and-troubleshooting-workflows/about-monitoring-and-troubleshooting)」を参照してください。

{% endif %}
