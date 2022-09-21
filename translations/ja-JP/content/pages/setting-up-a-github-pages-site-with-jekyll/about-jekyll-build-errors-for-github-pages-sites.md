---
title: GitHub PagesサイトのJekyllビルドエラーについて
intro: 'ローカルで、または{% data variables.product.product_name %}上で{% data variables.product.prodname_pages %}サイトをビルド中にJekyllでエラーが発生した場合には、詳細情報を伴うエラーメッセージが示されます。'
redirect_from:
  - /articles/viewing-jekyll-build-error-messages
  - /articles/generic-jekyll-build-failures
  - /articles/about-jekyll-build-errors-for-github-pages-sites
  - /github/working-with-github-pages/about-jekyll-build-errors-for-github-pages-sites
product: '{% data reusables.gated-features.pages %}'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Pages
shortTitle: Jekyll build errors for Pages
ms.openlocfilehash: c435d7857239ae4a8b1a09c86e10fe12b248a4b2
ms.sourcegitcommit: 478f2931167988096ae6478a257f492ecaa11794
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/09/2022
ms.locfileid: '147648240'
---
## Jekyllのビルドエラーについて

{% ifversion pages-custom-workflow %}ブランチから公開している場合、場合によっては{% else %}場合によっては{% endif %}、サイトの公開元に変更をプッシュした後で、{% data variables.product.prodname_pages %} によってサイトのビルドが試みられないことがあります。{% ifversion fpt or ghec %}
- 変更をプッシュしたユーザーがメールアドレスを検証していない。 詳細については、「[メール アドレスの確認](/articles/verifying-your-email-address)」を参照してください。{% endif %}
- デプロイキーでプッシュしている。 サイトのリポジトリへのプッシュを自動化する場合は、かわりにマシンユーザーを設定できます。 詳細については、「[デプロイ キーの管理](/developers/overview/managing-deploy-keys#machine-users)」を参照してください。
- 公開元をビルドするようにCIサービスを設定していない。 たとえば、Travis CI は、ブランチをセーフ リストに追加しない限り、`gh-pages` ブランチをビルドしません。 詳細については、Travis CI の「[ビルドのカスタマイズ](https://docs.travis-ci.com/user/customizing-the-build/#safelisting-or-blocklisting-branches)」またはお使いの CI サービスのドキュメントを参照してください。

{% note %}

**注:** サイトに対する変更は、その変更を {% data variables.product.product_name %} にプッシュしてから公開されるまでに、最大 10 分かかることがあります。

{% endnote %}

{% ifversion build-pages-with-actions %} Jekyll がサイトのビルドを試行せず、エラーが発生した場合は、ビルド エラー メッセージが表示されます。
{% else %}Jekyll がサイトのビルドを試行せず、エラーが発生した場合は、ビルド エラー メッセージが表示されます。 Jekyll ビルドエラーメッセージには主に 2 つのタイプがあります。
- 「Page build warning」メッセージは、ビルドは成功したものの、今後問題が生じないようにするために変更を行なう必要がある可能性が存在することを意味します。
- 「Page build failed」メッセージは、ビルドが完了できなかったことを意味します。 Jekyll が失敗の理由を検出できた場合、説明を含むエラーメッセージが表示されます。
{% endif %}

ビルド エラーのトラブルシューティングの詳細については、「[{% data variables.product.prodname_pages %} サイトの Jekyll ビルド エラーのトラブルシューティング](/articles/troubleshooting-jekyll-build-errors-for-github-pages-sites)」を参照してください。

{% ifversion build-pages-with-actions %}
## {% data variables.product.prodname_actions %}でJekyllのビルドエラーメッセージを表示する

デフォルトでは、{% data variables.product.prodname_pages %}サイトは{% data variables.product.prodname_pages %}サイトが別のCIツールを使うように設定しないかぎり、{% data variables.product.prodname_actions %}ワークフローの実行でビルドされ、デプロイされます。 ビルドの潜在的なエラーを見つけるには、リポジトリのワークフロー実行をレビューすることによって、{% data variables.product.prodname_pages %}サイトのためのワークフローの実行をチェックできます。 詳細については、「[ワークフロー実行の履歴を表示する](/actions/monitoring-and-troubleshooting-workflows/viewing-workflow-run-history)」を参照してください。  エラーが発生した場合にワークフローを再実行する方法の詳細については、「[ワークフローとジョブの再実行](/actions/managing-workflow-runs/re-running-workflows-and-jobs)」を参照してください。
{% endif %}

{% ifversion build-pages-with-actions %}{% else %}
## {% data variables.product.product_name %}上のリポジトリのビルド失敗の表示

{% data variables.product.product_name %} 上のサイトのビルドの失敗については、サイトのリポジトリの、 **[Settings]\(設定\)** タブに表示されます (ただし、ビルドの警告については表示されません) 。
{% endif %}

## ローカルでのJekyllビルドエラーメッセージの表示

サイトのテストをローカルで行なうことをお勧めします。それにより、ビルドエラーメッセージをコマンドラインで表示でき、変更を {% data variables.product.product_name %} にプッシュする前に、あらゆるビルドエラーに対処できます。 詳細については、「[{% data variables.product.prodname_pages %} サイトを Jekyll でローカルでテストする](/articles/testing-your-github-pages-site-locally-with-jekyll)」を参照してください。

## Pull Request中でのJekyllのビルドエラーメッセージの表示

{% ifversion pages-custom-workflow %}ブランチから公開している場合、{% data variables.product.product_name %} 上で公開元を更新する pull request を作成したときに{% else %}ときに{% endif %}、pull request の **[チェック]** タブにビルド エラー メッセージが表示される場合があります。 詳細については、「[ステータスチェックについて](/pull-requests/collaborating-with-pull-requests/collaborating-on-repositories-with-code-quality-features/about-status-checks)」を参照してください。

{% ifversion pages-custom-workflow %}カスタムの {% data variables.product.prodname_actions %} ワークフローを使用して公開している場合、pull request でのビルド エラー メッセージを確認するには、そのワークフローが `pull_request` トリガーに対して実行されるように構成する必要があります。 これを行う際は、ワークフローが `pull_request` イベントによってトリガーされた場合に、展開手順をスキップすることをお勧めします。 これにより、pull request からの変更をサイトにデプロイすることなく、ビルド エラーを確認することができます。 詳細については、「[ワークフローをトリガーするイベント](/actions/using-workflows/events-that-trigger-workflows#pull_request)」および「[式](/actions/learn-github-actions/expressions)」を参照してください。{% endif %}

## メールでのJekyllのビルドエラーメッセージの表示

{% ifversion pages-custom-workflow %}ブランチから公開している場合は、{% data variables.product.product_name %} 上の公開元に変更をプッシュしたときに{% else %}ときに{% endif %}、{% data variables.product.prodname_pages %} によって、サイトのビルドが試みられます。 ビルドが失敗すると、プライマリメールアドレスにメールが送信されます。 {% data reusables.pages.build-failure-email-server %}

{% ifversion pages-custom-workflow %}カスタムの {% data variables.product.prodname_actions %} ワークフローを使用して公開している場合、pull request でのビルド エラーに関する電子メールを受信するには、`pull_request` トリガーに対してそのワークフローが実行されるように構成する必要があります。 これを行う際は、ワークフローが `pull_request` イベントによってトリガーされた場合に、展開手順をスキップすることをお勧めします。 これにより、pull request からの変更をサイトにデプロイすることなく、ビルド エラーを確認することができます。 詳細については、「[ワークフローをトリガーするイベント](/actions/using-workflows/events-that-trigger-workflows#pull_request)」および「[式](/actions/learn-github-actions/expressions)」を参照してください。{% endif %}

## サードパーティCIサービスでのPull Request中でのJekyllのビルドエラーメッセージの表示

各コミット後にエラー メッセージを表示するように、[Travis CI](https://travis-ci.org/) などのサードパーティのサービスを構成できます。

1. 公開ソースのルートに、以下の内容で _Gemfile_ と呼ばれるファイルをまだ追加していない場合は、追加します。
  ```ruby
  source `https://rubygems.org`
  gem `github-pages`
  ```

2. 選択したテストサービス用にサイトのリポジトリを設定します。 たとえば、[Travis CI](https://travis-ci.org/) を使用するには、公開ソースのルートに _.travis.yml_ という名前のファイルを追加し、次の内容を含めます。
  ```yaml
  language: ruby
  rvm:
    - 2.3
  script: "bundle exec jekyll build"
  ```
3. サードパーティのテストサービス内で、リポジトリを有効にする必要があるかもしれません。 詳しい情報については、お使いのテストサービスのドキュメンテーションを参照してください。
