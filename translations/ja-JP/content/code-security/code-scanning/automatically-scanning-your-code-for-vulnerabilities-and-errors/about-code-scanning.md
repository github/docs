---
title: コード スキャンについて
intro: '{% data variables.product.prodname_code_scanning %} を使用して、{% data variables.product.prodname_dotcom %} 上のプロジェクトのコードからセキュリティの脆弱性とエラーを見つけることができます。'
product: '{% data reusables.gated-features.code-scanning %}'
redirect_from:
  - /github/managing-security-vulnerabilities/about-automated-code-scanning
  - /github/finding-security-vulnerabilities-and-errors-in-your-code/about-code-scanning
  - /code-security/secure-coding/about-code-scanning
  - /code-security/secure-coding/automatically-scanning-your-code-for-vulnerabilities-and-errors/about-code-scanning
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: overview
topics:
  - Advanced Security
  - Code scanning
ms.openlocfilehash: 0bf49aa695e9e5a60cef7eb78c6e44f5ecd4ece5
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/10/2022
ms.locfileid: '145087737'
---
{% data reusables.code-scanning.beta %} {% data reusables.code-scanning.enterprise-enable-code-scanning %}

## {% data variables.product.prodname_code_scanning %} について

{% data reusables.code-scanning.about-code-scanning %}

{% data variables.product.prodname_code_scanning %} を使用して、コード内の既存の問題の修正を検索し、トリアージして、優先順位を付けることができます。 また、{% data variables.product.prodname_code_scanning_capc %} は、開発者による新しい問題の発生も防ぎます。 特定の日付と時刻でのスキャンをスケジュールしたり、プッシュなどの特定のイベントがリポジトリで発生したときにスキャンをトリガーしたりできます。

{% data variables.product.prodname_code_scanning %} がコードに潜在的な脆弱性またはエラーを見つけた場合、{% data variables.product.prodname_dotcom %} はリポジトリにアラートを表示します。 アラートを引き起こしたコードを修正すると、{% data variables.product.prodname_dotcom %}はそのアラートを閉じます。 詳細については、「[リポジトリの {% data variables.product.prodname_code_scanning %} アラートの管理](/code-security/secure-coding/managing-code-scanning-alerts-for-your-repository)」を参照してください。

リポジトリまたは Organization をまたいで {% data variables.product.prodname_code_scanning %} による結果を監視するには、webhooks や {% data variables.product.prodname_code_scanning %} API を使用できます。 {% data variables.product.prodname_code_scanning %} の Webhook の詳細については、「[webhook イベントとペイロード](/developers/webhooks-and-events/webhook-events-and-payloads#code_scanning_alert)」を参照してください。 API エンドポイントの詳細については、「[{% data variables.product.prodname_code_scanning_capc %}](/rest/reference/code-scanning)」を参照してください。 

{% data variables.product.prodname_code_scanning %} の概要については、「[リポジトリの {% data variables.product.prodname_code_scanning %} の設定](/code-security/secure-coding/setting-up-code-scanning-for-a-repository)」を参照してください。

{% ifversion fpt or ghec %}

## {% data variables.product.prodname_code_scanning %} の課金について

{% data variables.product.prodname_code_scanning_capc %} は {% data variables.product.prodname_actions %} を使用し、{% data variables.product.prodname_code_scanning %} ワークフローの実行ごとに {% data variables.product.prodname_actions %} に数分かかります。 詳細については、「[{% data variables.product.prodname_actions %} の課金について](/billing/managing-billing-for-github-actions/about-billing-for-github-actions)」を参照してください。

{% endif %}

## {% data variables.product.prodname_code_scanning %} のツールについて

{% data variables.product.company_short%} またはサードパーティ製 {% data variables.product.prodname_code_scanning %} ツールによって保守されている {% data variables.product.prodname_codeql %} 製品を使うように {% data variables.product.prodname_code_scanning %} を設定することができます。 

### {% data variables.product.prodname_codeql %} の分析について

{% data reusables.code-scanning.about-codeql-analysis %}{% data variables.product.prodname_codeql %} の詳細については、「[CodeQL を使ったコード スキャンについて](/code-security/secure-coding/automatically-scanning-your-code-for-vulnerabilities-and-errors/about-code-scanning-with-codeql)」を参照してください。

### サードパーティの{% data variables.product.prodname_code_scanning %}ツールについて

{% data reusables.code-scanning.interoperable-with-tools-that-output-sarif %}

Actionsを使って{% data variables.product.product_name %}内で、あるいは外部のCIシステム内でサードパーティの分析ツールを実行できます。 詳細については、「[リポジトリのコード スキャンの設定](/code-security/secure-coding/setting-up-code-scanning-for-a-repository)」または「[SARIF ファイルを GitHub にアップロードする](/code-security/secure-coding/uploading-a-sarif-file-to-github)」を参照してください。
