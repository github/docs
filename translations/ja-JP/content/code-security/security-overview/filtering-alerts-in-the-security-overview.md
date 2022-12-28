---
title: セキュリティの概要でのアラートのフィルター処理
intro: フィルターを使ってアラートの特定のカテゴリを表示する
permissions: '{% data reusables.security-overview.permissions %}'
product: '{% data reusables.gated-features.security-overview %}'
allowTitleToDifferFromFilename: true
versions:
  ghae: '*'
  ghes: '*'
  ghec: '*'
type: how_to
topics:
  - Security overview
  - Advanced Security
  - Alerts
  - Organizations
  - Teams
shortTitle: Filtering the security overview
ms.openlocfilehash: 60ff823ab0303dfb8fce788e708cb1cd61a9f8e2
ms.sourcegitcommit: 094dff459fcbf7d0634930e02405606dfffd7f0a
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 11/12/2022
ms.locfileid: '148163196'
---
{% ifversion ghes < 3.5 or ghae %} {% data reusables.security-overview.beta %} {% endif %}

## セキュリティの概要のフィルター処理について

セキュリティの概要でフィルターを使用すると、アラート リスク レベル、アラートの種類、機能の有効化など、さまざまな要因に基づいてフォーカスを絞り込むことができます。 特定のビュー{% ifversion ghec or ghes > 3.4 or ghae > 3.4 %}と、エンタープライズと組織のどちらのレベルでデータを表示しているか{% endif %}に応じて、さまざまなフィルターを使用できます。

{% ifversion security-overview-displayed-alerts %} {% note %} {% data reusables.security-overview.information-varies-GHAS %} {% endnote %} {% endif %}

## リポジトリ別のフィルター

| 修飾子 | 説明 |
| -------- | -------- |
| `repo:REPOSITORY-NAME` | 指定したリポジトリのデータを表示します。 |

## セキュリティ機能が有効になっているかどうかをフィルター処理する

次の例では、`:enabled` を `:not-enabled` に置き換えると、セキュリティ機能が有効になっていないリポジトリが表示されます。 これらの修飾子は、メインの概要ビューで使用できます。

| 修飾子 | 説明 |
| -------- | -------- |
| `code-scanning:enabled` | {% data variables.product.prodname_code_scanning %} が設定されているリポジトリを表示します。 | 
| `dependabot:enabled` | {% data variables.product.prodname_dependabot_alerts %} が有効になっているリポジトリを表示します。 |
| `secret-scanning:enabled` | {% data variables.product.prodname_secret_scanning %} アラートが有効になっているリポジトリを表示します。 {% ifversion security-overview-org-risk-coverage %} |
| `any-feature:enabled` | 少なくとも 1 つのセキュリティ機能が有効になっているリポジトリを表示します。 |{% else %}
| `not-enabled:any` | 少なくとも 1 つのセキュリティ機能が有効になっていないリポジトリを表示します。 |{% endif %}

{% ifversion security-overview-org-risk-coverage %}組織レベルの [Security Coverage] ビューには、追加のフィルターが含まれています。

{% data reusables.security-overview.beta-org-risk-coverage %}

| 修飾子 | 説明 |
| -------- | -------- |
| `code-scanning-pull-request-alerts:enabled`| {% data variables.product.prodname_code_scanning %} が pull request に対して実行されるように構成されているポジトリを表示します。 |
| `dependabot-security-updates:enabled` | {% data variables.product.prodname_dependabot %} のセキュリティ更新が有効になっているリポジトリを表示します。  |
| `secret-scanning-push-protection:enabled` | {% data variables.product.prodname_secret_scanning %} のプッシュ保護が設定されているリポジトリを表示します。 |
{% endif %}

## リポジトリの種類によるフィルタ

これらの修飾子は、メインの概要ビューで使用できます。

| 修飾子 | 説明 |
| -------- | -------- |
{%- ifversion ghes or ghec %} | `is:public` | パブリック リポジトリを表示します。 | {%- endif %} | `is:internal` | 内部リポジトリを表示します。 | | `is:private` | プライベート リポジトリを表示します。 | | `archived:true` | アーカイブされたリポジトリを表示します。 | | `archived:false` | アーカイブされたリポジトリを省略します。 |

{% ifversion ghec or ghes > 3.4 or ghae > 3.4 %}
## リポジトリに対するリスクレベルによるフィルタリング

リポジトリのリスク レベルは、セキュリティ機能からのアラートの数と重大度によって決まります。 1 つまたは複数のセキュリティ機能がリポジトリで有効化されていないなら、そのリポジトリのリスク レベルは不明になります。 リポジトリにセキュリティ機能で検出されるリスクがないなら、そのリポジトリのリスク レベルはクリアです。 

{% ifversion security-overview-org-risk-coverage %}これらの修飾子は、エンタープライズレベルのビューで使用できます。
{% endif %}

| 修飾子 | 説明 |
| -------- | -------- |
| `risk:high` | 高リスクのリポジトリを表示します。 |
| `risk:medium` | 中程度のリスクのリポジトリを表示します。 |
| `risk:low` | 低リスクのリポジトリを表示します。 |
| `risk:unknown` | リスクレベルが不明なリポジトリを表示します。 |
| `risk:clear` | リスクレベルが検出されていないリポジトリを表示します。 |
{% endif %}

## アラート数によるフィルタ

{% ifversion security-overview-org-risk-coverage %}これらの修飾子は、エンタープライズレベルの [Overview] と組織レベルの [Security Risk] ビューで使用できます。{% else %}これらの修飾子は、メインの概要ビューで使用できます。{% endif %}

| 修飾子 | 説明 |
| -------- | -------- |
| <code>code-scanning:<em>n</em></code> | {% data variables.product.prodname_code_scanning %} アラートが *n* 個あるリポジトリを表示します。 この修飾子では、`=`、`>`、`<` の各比較演算子を使用できます。 |
| <code>secret-scanning:<em>n</em></code> | {% data variables.product.prodname_secret_scanning %} アラートが *n* 個あるリポジトリを表示します。 この修飾子では、`=`、`>`、`<` の各比較演算子を使用できます。 |
| <code>dependabot:<em>n</em></code> | {% data variables.product.prodname_dependabot_alerts %}が *n* 個有効化されているリポジトリを表示します。 この修飾子では、`=`、`>`、`<` の各比較演算子を使用できます。 |


## Teamによるフィルタ

これらの修飾子は、メインの概要ビューで使用できます。

| 修飾子 | 説明 |
| -------- | -------- |
| <code>team:<em>TEAM-NAME</em></code> | *TEAM-NAME* が管理者権限を持つリポジトリを表示します。 |

## トピックによるフィルタ

これらの修飾子は、メインの概要ビューで使用できます。

| 修飾子 | 説明 |
| -------- | -------- |
| <code>topic:<em>TOPIC-NAME</em></code> | *TOPIC-NAME* で分類されるリポジトリを表示します。 |

{% ifversion security-overview-alert-views %}

## {% data variables.product.prodname_code_scanning %} アラート ビューの追加フィルター

すべてのコード スキャン アラートには、次に示すカテゴリのいずれかが含まれます。 任意の結果をクリックすると、関連するクエリの完全な詳細と、アラートをトリガーしたコード行を表示できます。

| 修飾子 | 説明 |
| -------- | -------- |
|`severity:critical`|重大として分類された {% data variables.product.prodname_code_scanning %} アラートを表示します。|
|`severity:high`|高として分類された {% data variables.product.prodname_code_scanning %} アラートを表示します。|
|`severity:medium`|中として分類された {% data variables.product.prodname_code_scanning %} アラートを表示します。|
|`severity:low`|低として分類された {% data variables.product.prodname_code_scanning %} を表示します。|
|`severity:error`|エラーとして分類された {% data variables.product.prodname_code_scanning %} アラートを表示します。|
|`severity:warning`|警告として分類された {% data variables.product.prodname_code_scanning %} アラートを表示します。|
|`severity:note`|注として分類された {% data variables.product.prodname_code_scanning %} アラートを表示します。|

{% ifversion dependabot-alerts-vulnerable-calls %}
## {% data variables.product.prodname_dependabot %} アラート ビューの追加フィルター

ビューをフィルター処理すると、修正する準備ができている {% data variables.product.prodname_dependabot_alerts %} を表示したり、公開に関する追加情報が利用可能な場所を表示したりできます。 任意の結果をクリックすると、アラートの完全な詳細を表示できます。

| 修飾子 | 説明 |
| -------- | -------- |
|`has:patch`|セキュリティで保護されたバージョンが既に利用可能な脆弱性に関する {% data variables.product.prodname_dependabot %} アラートを表示します。|
|`has:vulnerable-calls`|リポジトリから脆弱な関数への少なくとも 1 つの呼び出しが検出された {% data variables.product.prodname_dependabot %} アラートを表示します。 詳細については、「[Dependabot アラートの表示と更新](/code-security/dependabot/dependabot-alerts/viewing-and-updating-dependabot-alerts#about-the-detection-of-calls-to-vulnerable-functions)」を参照してください。|
{% endif %}

{% endif %}

## {% data variables.product.prodname_secret_scanning %} アラート ビューの追加フィルター

| 修飾子 | 説明 |
| -------- | -------- |
|`provider:PROVIDER_NAME` | 指定したプロバイダーによるすべての issue の問題に関するアラートを表示します。  |
| `secret-type:SERVICE_PROVIDER` | 指定したシークレットとプロバイダーのアラートを表示します。 |
| `secret-type:CUSTOM-PATTERN` | 指定したカスタム パターンに一致するシークレットのアラートを表示します。  |

詳細については、「[{% data variables.product.prodname_secret_scanning_caps %} パターン](/code-security/secret-scanning/secret-scanning-patterns)」を参照してください。

