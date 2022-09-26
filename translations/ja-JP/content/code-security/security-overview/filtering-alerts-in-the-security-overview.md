---
title: セキュリティの概要でのアラートのフィルター処理
intro: フィルターを使ってアラートの特定のカテゴリを表示する
permissions: '{% data reusables.security-overview.permissions %}'
product: '{% data reusables.gated-features.security-overview %}'
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
shortTitle: Filtering alerts
ms.openlocfilehash: c2ea05ce5c2e65717088324fe818cb58e7a33093
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/10/2022
ms.locfileid: '147880767'
---
{% ifversion ghes < 3.5 or ghae %} {% data reusables.security-overview.beta %} {% endif %}

## セキュリティの概要のフィルター処理について

セキュリティの概要でフィルターを使用すると、アラート リスク レベル、アラートの種類、機能の有効化など、さまざまな要因に基づいてフォーカスを絞り込むことができます。 特定のビューと、分析が Organization、チーム、またはリポジトリのレベルかどうかに応じて、異なるフィルターを使用できます。

{% note %} {% data reusables.security-overview.information-varies-GHAS %} {% endnote %}

## リポジトリ別のフィルター

すべての組織レベルおよびチーム レベルのビューで使用できます。

| 修飾子 | 説明 |
| -------- | -------- |
| `repo:REPOSITORY-NAME` | 指定したリポジトリのアラートを表示します。 |

## セキュリティ機能が有効になっているかどうかをフィルター処理する

組織レベルとチーム レベルの概要で使用できます。

| 修飾子 | 説明 |
| -------- | -------- |
| `code-scanning:enabled` | {% data variables.product.prodname_code_scanning %}が有効化されているリポジトリを表示します。 |
| `code-scanning:not-enabled` | {% data variables.product.prodname_code_scanning %}が有効化されていないリポジトリを表示します。 |
| `secret-scanning:enabled` | {% data variables.product.prodname_secret_scanning %}が有効化されていないリポジトリを表示します。 |
| `secret-scanning:not-enabled` | {% data variables.product.prodname_secret_scanning %}が有効化されていないリポジトリを表示します。 |
| `dependabot:enabled` | {% data variables.product.prodname_dependabot_alerts %}が有効化されているリポジトリを表示します。 |
| `dependabot:not-enabled` | {% data variables.product.prodname_dependabot_alerts %}が有効化されていないリポジトリを表示します。 |
| `not-enabled:any` | 少なくとも 1 つのセキュリティ機能が有効になっていないリポジトリを表示します。 |

## リポジトリの種類によるフィルタ

組織レベルとチーム レベルの概要で使用できます。

| 修飾子 | 説明 |
| -------- | -------- |
{%- ifversion ghes or ghec %} | `is:public` | パブリック リポジトリを表示します。 | {%- endif %} {%- ifversion ghes or ghec or ghae %} | `is:internal` | 内部リポジトリを表示します。 | {%- endif %} | `is:private` | プライベートリポジトリを表示します。 | | `archived:true` | アーカイブされたリポジトリを表示します。 | | `archived:true` | アーカイブされたリポジトリを表示します。 |

## リポジトリに対するリスクレベルによるフィルタリング

リポジトリのリスク レベルは、セキュリティ機能からのアラートの数と重大度によって決まります。 1 つまたは複数のセキュリティ機能がリポジトリで有効化されていないなら、そのリポジトリのリスク レベルは不明になります。 リポジトリにセキュリティ機能で検出されるリスクがないなら、そのリポジトリのリスク レベルはクリアです。 組織レベルの概要で使用できます。

| 修飾子 | 説明 |
| -------- | -------- |
| `risk:high` | 高リスクのリポジトリを表示します。 |
| `risk:medium` | 中程度のリスクのリポジトリを表示します。 |
| `risk:low` | 低リスクのリポジトリを表示します。 |
| `risk:unknown` | リスクレベルが不明なリポジトリを表示します。 |
| `risk:clear` | リスクレベルが検出されていないリポジトリを表示します。 |

## アラート数によるフィルタ

組織レベルの概要で使用できます。

| 修飾子 | 説明 |
| -------- | -------- |
| <code>code-scanning:<em>n</em></code> | {% data variables.product.prodname_code_scanning %} アラートが *n* 個あるリポジトリを表示します。 この修飾子では、`=`、`>`、`<` の各比較演算子を使用できます。 |
| <code>secret-scanning:<em>n</em></code> | {% data variables.product.prodname_secret_scanning %} アラートが *n* 個あるリポジトリを表示します。 この修飾子では、`=`、`>`、`<` の各比較演算子を使用できます。 |
| <code>dependabot:<em>n</em></code> | {% data variables.product.prodname_dependabot_alerts %}が *n* 個有効化されているリポジトリを表示します。 この修飾子では、`=`、`>`、`<` の各比較演算子を使用できます。 |


## Teamによるフィルタ

組織レベルの概要で使用できます。

| 修飾子 | 説明 |
| -------- | -------- |
| <code>team:<em>TEAM-NAME</em></code> | *TEAM-NAME* が管理者権限を持つリポジトリを表示します。 |

## トピックによるフィルタ

組織レベルの概要で使用できます。

| 修飾子 | 説明 |
| -------- | -------- |
| <code>topic:<em>TOPIC-NAME</em></code> | *TOPIC-NAME* で分類されるリポジトリを表示します。 |

{% ifversion security-overview-views %}

## 重要度でフィルター処理

コード スキャン アラート ビューで使用できます。 すべてのコード スキャン アラートには、次に示すカテゴリのいずれかが含まれます。 任意の結果をクリックすると、関連するルールの詳細と、アラートをトリガーしたコード行を表示できます。

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
## アラートの種類 {% data variables.product.prodname_dependabot %} によってフィルター処理する

{% data variables.product.prodname_dependabot %} アラート ビューで使用できます。 ビューをフィルター処理すると、修正する準備ができている {% data variables.product.prodname_dependabot_alerts %} を表示したり、公開に関する追加情報が利用可能な場所を表示したりできます。 任意の結果をクリックすると、アラートの完全な詳細を表示できます。

| 修飾子 | 説明 |
| -------- | -------- |
|`has:patch`|セキュリティで保護されたバージョンが既に利用可能な脆弱性に関する {% data variables.product.prodname_dependabot %} アラートを表示します。|
|`has:vulnerable-calls`|リポジトリから脆弱な関数への少なくとも 1 つの呼び出しが検出された {% data variables.product.prodname_dependabot %} アラートを表示します。 詳細については、「[Dependabot アラートの表示と更新](/code-security/dependabot/dependabot-alerts/viewing-and-updating-dependabot-alerts#about-the-detection-of-calls-to-vulnerable-functions)」を参照してください。|
{% endif %}

{% endif %}

## シークレットの種類でフィルター処理する

シークレット スキャン アラート ビューで使用できます。

| 修飾子 | 説明 |
| -------- | -------- |
| `secret-type:SERVICE_PROVIDER` | 指定したシークレットとプロバイダーのアラートを表示します。 詳細については、「[{% data variables.product.prodname_secret_scanning_caps %} パターン](/code-security/secret-scanning/secret-scanning-patterns)」を参照してください。 |
| `secret-type:CUSTOM-PATTERN` | 指定したカスタム パターンに一致するシークレットのアラートを表示します。 詳細については、「[Secret Scanning のカスタムパターンの定義](/code-security/secret-scanning/defining-custom-patterns-for-secret-scanning)」を参照してください。 |

## プロバイダーによるフィルター処理

シークレット スキャン アラート ビューで使用できます。

| 修飾子 | 説明 |
| -------- | -------- |
|`provider:PROVIDER_NAME` | 指定したプロバイダーによるすべての issue の問題に関するアラートを表示します。 詳細については、「[{% data variables.product.prodname_secret_scanning_caps %} パターン](/code-security/secret-scanning/secret-scanning-patterns)」を参照してください。 |
