---
title: GitHub の機能拡張およびインテグレーション
intro: 'サードパーティアプリケーションの中でシームレスに{% data variables.product.product_name %}リポジトリ内で作業をするために、{% data variables.product.product_name %}機能拡張を使ってください。'
redirect_from:
  - /articles/about-github-extensions-for-third-party-applications
  - /articles/github-extensions-and-integrations
  - /github/customizing-your-github-workflow/github-extensions-and-integrations
  - /github/customizing-your-github-workflow/exploring-integrations/github-extensions-and-integrations
versions:
  fpt: '*'
  ghec: '*'
shortTitle: Extensions & integrations
ms.openlocfilehash: f33ce9b9ae55e523bedff1309f3f2f15202dcf82
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/11/2022
ms.locfileid: '147884214'
---
## エディタツール

Atom、Unity、{% data variables.product.prodname_vs %} などのサードパーティ エディター ツール内で、{% data variables.product.product_name %} リポジトリに接続できます。

### {% data variables.product.product_name %} for Atom

{% data variables.product.product_name %} for Atom機能拡張を使うと、Atomエディタからコミット、プッシュ、プル、マージコンフリクトの解決などが行えます。 詳細については、公式の [{% data variables.product.product_name %} for Atom サイト](https://github.atom.io/)を参照してください。

### {% data variables.product.product_name %} for Unity

{% data variables.product.product_name %} for Unityエディタ機能拡張を使うと、オープンソースのゲーム開発プラットフォームであるUnity上で開発を行い、作業内容を{% data variables.product.product_name %}上で見ることができます。 詳細については、公式の Unity エディター拡張機能の[サイト](https://unity.github.com/)または[ドキュメント](https://github.com/github-for-unity/Unity/tree/master/docs)を参照してください。

### {% data variables.product.prodname_vs %} の {% data variables.product.product_name %}

{% data variables.product.prodname_vs %} 拡張機能の {% data variables.product.product_name %} を使用すると、{% data variables.product.prodname_vs %} を離れることなく、{% data variables.product.product_name %} リポジトリで作業できます。 詳しい情報については、公式の {% data variables.product.prodname_vs %} 拡張機能の[サイト](https://visualstudio.github.com/)または[ドキュメント](https://github.com/github/VisualStudio/tree/master/docs)を参照してください。

### {% data variables.product.prodname_vscode %} の {% data variables.product.prodname_dotcom %}

{% data variables.product.prodname_vscode %} 拡張機能の {% data variables.product.prodname_dotcom %} を使用すると、{% data variables.product.prodname_vscode_shortname %} で {% data variables.product.product_name %} pull requests を確認および管理できます。 詳しい情報については、公式の {% data variables.product.prodname_vscode_shortname %} 拡張機能の[サイト](https://vscode.github.com/)または[ドキュメント](https://github.com/Microsoft/vscode-pull-request-github)を参照してください。

## プロジェクト管理ツール

{% data variables.product.product_location %} の個人または Organization アカウントを Jira などのサードパーティのプロジェクト管理ツールと統合できます。

### Jira Cloud と {% data variables.product.product_name %}.com の統合

Jira Cloud を個人または Organization のアカウントに統合すると、コミットとプルリクエストをスキャンし、メンションされている JIRA の Issue で、関連するメタデータとハイパーリンクを作成できます。 詳細については、マーケットプレースの [Jira 統合アプリ](https://github.com/marketplace/jira-software-github)を参照してください。

## チームコミュニケーションツール

{% data variables.product.product_location %} の個人または Organization アカウントを Slack や Microsoft Teams などのサードパーティのコミュニケーション ツールと統合できます。

### Slack と {% data variables.product.product_name %} の統合

Slack + {% data variables.product.prodname_dotcom %} アプリを使用すると、リポジトリまたは Organization をサブスクライブし、Issue、pull request、コミット、ディスカッション、リリース、デプロイ レビュー、デプロイの状態に関するリアルタイムの更新を取得できます。 また、Issue を開いたり閉じたりするなどのアクティビティを実行したり、Slack を離れることなく、Issue や pull request に関する詳細な参照を確認することもできます。 また、あなたがチャネルや個人用チャットで受信した {% data variables.product.prodname_dotcom %} 通知の一部でメンションされている場合、このアプリから Slack であなたに直接 ping が実行されます。

Slack + {% data variables.product.prodname_dotcom %} アプリも [Slack Enterprise Grid](https://slack.com/intl/en-in/help/articles/360000281563-Manage-apps-on-Enterprise-Grid) と互換性があります。 詳細については、マーケットプレースの [Slack + {% data variables.product.prodname_dotcom %} アプリ](https://github.com/marketplace/slack-github)を参照してください。

### Microsoft Teams と {% data variables.product.product_name %} の統合

{% data variables.product.prodname_dotcom %} for Teams アプリを使用すると、リポジトリまたは Organization をサブスクライブし、Issue、pull request、コミット、ディスカッション、リリース、デプロイ レビュー、デプロイの状態に関するリアルタイムの更新を取得できます。 また、Issue の開始と終了、Issue や pull request へのコメントなどのアクティビティを実行したり、Microsoft Teams を離れることなく Issue や pull request に関する詳細な参照を確認したりすることができます。 また、あなたがチャネルや個人用チャットで受信した {% data variables.product.prodname_dotcom %} 通知の一部でメンションされている場合、このアプリから Teams であなたに直接 ping が実行されます。

詳細については、Microsoft AppSource で [{% data variables.product.prodname_dotcom %} for Teams アプリ](https://appsource.microsoft.com/en-us/product/office/WA200002077)を参照してください。
