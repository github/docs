---
title: Code scanningとのインテグレーションについて
shortTitle: About integration
intro: '{% data variables.product.prodname_code_scanning %} を外部で実行し、その結果を {% data variables.product.prodname_dotcom %} で表示できます。また、リポジトリで {% data variables.product.prodname_code_scanning %} アクティビティを監視する webhook をセットアップすることもできます。'
product: '{% data reusables.gated-features.code-scanning %}'
redirect_from:
  - /github/finding-security-vulnerabilities-and-errors-in-your-code/about-integration-with-code-scanning
  - /code-security/secure-coding/about-integration-with-code-scanning
  - /code-security/secure-coding/integrating-with-code-scanning/about-integration-with-code-scanning
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: overview
topics:
  - Advanced Security
  - Code scanning
  - Webhooks
  - Integration
ms.openlocfilehash: b12f5146a90cae0ed1bd38d452e43eb611232e72
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/05/2022
ms.locfileid: '145116829'
---
{% data reusables.code-scanning.beta %} {% data reusables.code-scanning.enterprise-enable-code-scanning %}

{% data variables.product.prodname_code_scanning %} を {% data variables.product.prodname_dotcom %} 内で実行する他に、分析を別の場所で実行して、その結果をアップロードすることもできます。 外部で実行した {% data variables.product.prodname_code_scanning %} のアラートは、{% data variables.product.prodname_dotcom %} 内で {% data variables.product.prodname_code_scanning %} を実行した場合と同じように表示されます。 詳細については、「[リポジトリの {% data variables.product.prodname_code_scanning %} アラートの管理](/code-security/secure-coding/managing-code-scanning-alerts-for-your-repository)」を参照してください。

Static Analysis Results Interchange Format (SARIF) 2.1.0 データとして結果を生成できるサードパーティの静的解析ツールを使用する場合、そのデータを {% data variables.product.prodname_dotcom %} にアップロードできます。 詳細については、「[SARIF ファイルを GitHub にアップロードする](/code-security/secure-coding/uploading-a-sarif-file-to-github)」を参照してください。

{% ifversion fpt or ghes > 3.4 or ghae-issue-6251 or ghec %} {% data reusables.code-scanning.about-analysis-origins-link %} {% endif %}

## webhook とのインテグレーション

{% data variables.product.prodname_code_scanning %} Webhook を使用すると、リポジトリの {% data variables.product.prodname_code_scanning %} イベントにサブスクライブする、[{% data variables.product.prodname_github_apps %}](/apps/building-github-apps/) や [{% data variables.product.prodname_oauth_apps %}](/apps/building-oauth-apps/) などのインテグレーションを構築またはセットアップできます。 たとえば、 {% data variables.product.product_name %} で Issue を作成するインテグレーションや、リポジトリに新たな {% data variables.product.prodname_code_scanning %} アラートが追加されたときに Slack 通知を送信するインテグレーションを構築できます。 詳細については、「[webhook の作成](/developers/webhooks-and-events/creating-webhooks)」および「[webhook イベントとペイロード](/developers/webhooks-and-events/webhook-events-and-payloads#code_scanning_alert)」を参照してください。

## 参考資料

* 「[{% data variables.product.prodname_code_scanning %} について](/code-security/secure-coding/about-code-scanning)」
* 「[既存の CI システムで {% data variables.product.prodname_codeql %} {% data variables.product.prodname_code_scanning %} を使用する](/code-security/secure-coding/using-codeql-code-scanning-with-your-existing-ci-system)」
* 「[{% data variables.product.prodname_code_scanning %} の SARIF サポート](/code-security/secure-coding/sarif-support-for-code-scanning)」
