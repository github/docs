---
title: セキュリティの概要でのアラートのフィルタリング
intro: 特定カテゴリのアラートを表示させるためのフィルタの利用
permissions: '{% data reusables.security-center.permissions %}'
product: '{% data reusables.gated-features.security-center %}'
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
shortTitle: アラートのフィルタリング
---

{% ifversion ghes < 3.5 or ghae %}
{% data reusables.security-center.beta %}
{% endif %}

## セキュリティの概要のフィルタリングについて

アラートのリスクレベル、アラートの種類、機能の有効化の状況といった様々な要素に基づいて焦点を絞り込むために、セキュリティの概要でフィルタを利用できます。 特定のビューや、分析がOrganization、Team、リポジトリのレベルなのかといったことに応じて、様々なフィルタが利用できます。

## リポジトリでフィルタリング

すべてのOrganizationレベル及びTeamレベルのビューで利用可能。

| 修飾子                    | 説明                |
| ---------------------- | ----------------- |
| `repo:REPOSITORY-NAME` | 特定のリポジトリのアラートを表示。 |

## セキュリティ機能が有効化されているかによるフィルタリング

Organizationレベル及びTeamレベルの概要で利用可能。

| 修飾子                           | 説明                                                                              |
| ----------------------------- | ------------------------------------------------------------------------------- |
| `code-scanning:enabled`       | {% data variables.product.prodname_code_scanning %}が有効化されているリポジトリを表示します。      |
| `code-scanning:not-enabled`   | {% data variables.product.prodname_code_scanning %}が有効化されていないリポジトリを表示します。     |
| `secret-scanning:enabled`     | {% data variables.product.prodname_secret_scanning %}が有効化されているリポジトリを表示します。    |
| `secret-scanning:not-enabled` | {% data variables.product.prodname_secret_scanning %}が有効化されているリポジトリを表示します。    |
| `dependabot:enabled`          | {% data variables.product.prodname_dependabot_alerts %}が有効化されているリポジトリを表示します。  |
| `dependabot:not-enabled`      | {% data variables.product.prodname_dependabot_alerts %}が有効化されていないリポジトリを表示します。 |
| `not-enabled:any`             | 少なくとも1つのセキュリティ機能が有効化されていないリポジトリを表示します。                                          |

## リポジトリの種類によるフィルタリング

Organizationレベル及びTeamレベルの概要で利用可能。

| 修飾子 | 説明 |
| --- | -- |
|     |    |
{%- ifversion ghes or ghec %}
| `is:public` | パブリックリポジトリを表示。 |
{%- endif %}
{%- ifversion ghes or ghec or ghae %}
| `is:internal` | インターナルリポジトリを表示。 |
{%- endif %}
| `is:private` | プライベートリポジトリを表示。 | | `archived:true` | アーカイブされたリポジトリを表示。 | | `archived:true` | アーカイブされたリポジトリを表示。 |

## リポジトリに対するリスクレベルによるフィルタリング

リポジトリのリスクレベルは、セキュリティ機能からのアラートの数と重要度によって決まります。 1つ以上のセキュリティ機能がリポジトリで有効化されていない場合、そのリポジトリのリスクレベルは不明になります。 リポジトリにおいてセキュリティ機能によって検出されたリスクがない場合、リポジトリのリスクレベルはクリアになります。 Organizationレベルの概要で利用できます。

| 修飾子            | 説明                          |
| -------------- | --------------------------- |
| `risk:high`    | 高リスクのリポジトリを表示します。           |
| `risk:medium`  | 中程度のリスクのリポジトリを表示します。        |
| `risk:low`     | 低リスクのリポジトリを表示します。           |
| `risk:unknown` | リスクレベルが不明なリポジトリを表示します。      |
| `risk:clear`   | リスクレベルが検出されていないリポジトリを表示します。 |

## アラート数によるフィルタリング

Organizationレベルの概要で利用できます。

| 修飾子                       | 説明                                                                                                                      |
| ------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| <code>code-scanning:<em>n</em></code> | *n*件の{% data variables.product.prodname_code_scanning %}アラートがあるリポジトリを表示します。 この修飾子は`=`、`>`、`<`という比較演算子を利用できます。   |
| <code>secret-scanning:<em>n</em></code> | *n*件の{% data variables.product.prodname_secret_scanning %}アラートを持つリポジトリを表示します。 この修飾子は`=`、`>`、`<`という比較演算子を利用できます。 |
| <code>dependabot:<em>n</em></code> | *n*件の{% data variables.product.prodname_dependabot_alerts %}を持つリポジトリを表示します。 この修飾子は`=`、`>`、`<`という比較演算子を利用できます。   |


## Teamによるフィルタリング

Organizationレベルの概要で利用できます。

| 修飾子                       | 説明                               |
| ------------------------- | -------------------------------- |
| <code>team:<em>TEAM-NAME</em></code> | *TEAM-NAME*が管理者権限を持つリポジトリを表示します。 |

## トピックによるフィルタリング

Organizationレベルの概要で利用できます。

| 修飾子                       | 説明                             |
| ------------------------- | ------------------------------ |
| <code>topic:<em>TOPIC-NAME</em></code> | *TOPIC-NAME*で分類されるリポジトリを表示します。 |

{% ifversion security-overview-views %}

## 重要度でのフィルタリング

Code scanningアラートビューで利用できます。 すべてのCode scanningアラートは、以下のカテゴリのいずれかを持ちます。 結果をクリックして、関連するルールの完全な詳細と、アラートをトリガーしたコードの行を見ることができます。

| 修飾子                 | 説明                                                                               |
| ------------------- | -------------------------------------------------------------------------------- |
| `severity:critical` | criticalとして分類される{% data variables.product.prodname_code_scanning %}アラートを表示します。 |
| `severity:high`     | highとして分類される{% data variables.product.prodname_code_scanning %}アラートを表示します。     |
| `severity:medium`   | mediumとして分類される{% data variables.product.prodname_code_scanning %}アラートを表示します。   |
| `severity:low`      | lowとして分類される{% data variables.product.prodname_code_scanning %}アラートを表示します。      |
| `severity:error`    | errorsとして分類される{% data variables.product.prodname_code_scanning %}アラートを表示します。   |
| `severity:warning`  | warningsとして分類される{% data variables.product.prodname_code_scanning %}アラートを表示します。 |
| `severity:note`     | notesとして分類される{% data variables.product.prodname_code_scanning %}アラートを表示します。    |

{% ifversion dependabot-alerts-vulnerable-calls %}
## {% data variables.product.prodname_dependabot %}アラートタイプによるフィルタリング

{% data variables.product.prodname_dependabot %}アラートビューで利用できます。 修正の準備ができているか、露出に関する追加情報がある{% data variables.product.prodname_dependabot_alerts %}を表示するために、ビューをフィルタリングできます。 いずれの結果も、クリックすると完全なアラートの詳細を見ることができます。

| 修飾子                    | 説明                                                                                                                                                                                                                                                                                    |
| ---------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `has:patch`            | セキュアなバージョンが既に利用可能となっている脆弱性に対する{% data variables.product.prodname_dependabot %}アラートを表示します。                                                                                                                                                                                             |
| `has:vulnerable-calls` | リポジトリから脆弱性のある関数への読み出しが少なくとも1つ検出されている{% data variables.product.prodname_dependabot %}アラートを表示します。 詳しい情報については「[Dependabotアラートの表示と更新](/code-security/dependabot/dependabot-alerts/viewing-and-updating-dependabot-alerts#about-the-detection-of-calls-to-vulnerable-functions)」を参照してください。 |
{% endif %}

{% endif %}

## シークレットタイプによるフィルタリング

Secret scanningアラートビューで利用できます。

| 修飾子                            | 説明                                                                                                                                                                                |
| ------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `secret-type:SERVICE_PROVIDER` | 特定のシークレット及びプロバイダに対するアラートを表示します。 詳しい情報については「[{% data variables.product.prodname_secret_scanning_caps %}パターン](/code-security/secret-scanning/secret-scanning-patterns)」を参照してください。 |
| `secret-type:CUSTOM-PATTERN`   | 指定されたカスタムパターンにマッチするシークレットに対するアラートを表示します。 詳しい情報については「[Secret scanningのカスタムパターンの定義](/code-security/secret-scanning/defining-custom-patterns-for-secret-scanning)」を参照してください。         |

## プロバイダによるフィルタリング

Secret scanningアラートビューで利用できます。

| 修飾子                      | 説明                                                                                                                                                                                         |
| ------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `provider:PROVIDER_NAME` | 指定されたプロバイダが発行したすべてのシークレットに対するアラートを表示します。 詳しい情報については「[{% data variables.product.prodname_secret_scanning_caps %}パターン](/code-security/secret-scanning/secret-scanning-patterns)」を参照してください。 |
