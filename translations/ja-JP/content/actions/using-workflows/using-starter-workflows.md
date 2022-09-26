---
title: スターター ワークフローの使用
intro: '{% data variables.product.product_name %} には、さまざまな言語とツールのスターター ワークフローが用意されています。'
redirect_from:
  - /articles/setting-up-continuous-integration-using-github-actions
  - /github/automating-your-workflow-with-github-actions/setting-up-continuous-integration-using-github-actions
  - /actions/automating-your-workflow-with-github-actions/setting-up-continuous-integration-using-github-actions
  - /actions/building-and-testing-code-with-continuous-integration/setting-up-continuous-integration-using-github-actions
  - /actions/guides/setting-up-continuous-integration-using-workflow-templates
  - /actions/learn-github-actions/using-workflow-templates
  - /actions/learn-github-actions/using-starter-workflows
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: tutorial
topics:
  - Workflows
  - CI
  - CD
ms.openlocfilehash: 7159ce204b89287f86846cf79001657682f6d18d
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/10/2022
ms.locfileid: '146179840'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## スターター ワークフローについて

{% data variables.product.product_name %} には、さまざまな言語とツールのスターター ワークフローが用意されています。 リポジトリにワークフローを設定するときは、{% data variables.product.product_name %} によって、リポジトリ内のコードが分析され、リポジトリの言語とフレームワークに基づくワークフローが推奨されます。 たとえば、[Node.js](https://nodejs.org/en/) を使う場合、Node.js パッケージをインストールしてテストを実行するスターター ワークフロー ファイルが {% data variables.product.product_name %} によって提案されます。{% ifversion actions-starter-template-ui %}関連するスターター ワークフローを検索したり、フィルター処理を行ったりして、見つけることができます。{% endif %}

{% data reusables.actions.starter-workflow-categories %}

また、独自のスターター ワークフローを作成して、Organization で共有することもできます。 これらのスターター ワークフローは、{% data variables.product.product_name %} に用意されているスターター ワークフローと共に表示されます。 詳細については、「[Organization のスターター ワークフローの作成](/actions/learn-github-actions/creating-starter-workflows-for-your-organization)」を参照してください。

## スターター ワークフローの使用

リポジトリへの書き込みアクセス許可を持つすべてのユーザーは、CI/CD または他の自動化を対象とした {% data variables.product.prodname_actions %} スターター ワークフローを設定することができます。

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.actions-tab %}
1. ワークフローが既にリポジトリ内にある場合は、 **[新しいワークフロー]** をクリックします。
1. 「{% ifversion actions-starter-template-ui %}ワークフローの選択{% else %}ワークフロー テンプレートの選択{% endif %}」ページには、推奨されるスターター ワークフローの選択内容が表示されます。 使いたいスターター ワークフローを見つけたら、{% ifversion actions-starter-template-ui %} **[構成]** {% else %} **[このワークフローを設定する]** {% endif %} をクリックします。{% ifversion actions-starter-template-ui %}キーワードで検索したり、カテゴリでフィルター処理したりすると、必要なワークフローを見つけやすくなります。{% endif %}

   {% ifversion actions-starter-template-ui %}![このワークフローを構成します](/assets/images/help/settings/actions-create-starter-workflow-updated-ui.png){% else %}![このワークフローを設定します](/assets/images/help/settings/actions-create-starter-workflow.png){% endif %}
1. その他の設定手順についての詳しいコメントがスターター ワークフローに含まれている場合は、次の手順に従います。 多くのスターター ワークフローには、対応するガイドがあります。 詳しい情報については、「[{% data variables.product.prodname_actions %} ガイド](/actions/guides)」を参照してください。
1. 一部のスターター ワークフローでは、シークレットを使います。 これには、{% raw %}`${{ secrets.npm_token }}`{% endraw %} などがあります。 スターター ワークフローでシークレットを使う場合は、シークレット名に記述されている値をシークレットとしてリポジトリに格納します。 詳細については、「[暗号化されたシークレット](/actions/reference/encrypted-secrets)」を参照してください。
1. 必要に応じて、さらに変更します。 たとえば、ワークフローの実行時に変更する `on` の値を変更できます。
1. **[コミットの開始]** をクリックします。
1. コミット メッセージを書き込み、既定のブランチに直接コミットするか、pull request を開くかを決定します。

## 参考資料

- 「[継続的インテグレーションについて](/articles/about-continuous-integration)」
- 「[ワークフロー実行を管理する](/actions/managing-workflow-runs)」
- 「[監視とトラブルシューティングについて](/actions/monitoring-and-troubleshooting-workflows/about-monitoring-and-troubleshooting)」
- 「[{% data variables.product.prodname_actions %} について学ぶ](/actions/learn-github-actions)」{% ifversion fpt or ghec %}
- "[{% data variables.product.prodname_actions %}](/billing/managing-billing-for-github-actions) の請求を管理する" {% endif %}
