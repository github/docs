---
ms.openlocfilehash: 073c21c1480e0f9f699687c730aef2bb670654e7
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/05/2022
ms.locfileid: "146689022"
---
以下の表は、各パッケージマネージャについて以下の項目を示しています。
- *dependabot.yml* ファイル中で使う YAML 値
- パッケージマネージャのサポートされているバージョン
- プライベートの{% data variables.product.prodname_dotcom %}リポジトリあるいはレジストリ内の依存関係がサポートされているか
- ベンダーの依存関係がサポートされているか

パッケージ マネージャー | YAML値      | サポートされているバージョン | プライベートリポジトリ | プライベート レジストリ | ベンダー
---------------|------------------|------------------|:---:|:---:|:---:
Bundler        | `bundler`        | v1, v2           | | **✓** | **✓** |
Cargo          | `cargo`          | v1               | **✓** | **✓** | |
Composer       | `composer`       | v1, v2           | **✓** | **✓** | |
Docker         | `docker`         | v1               | **✓** | **✓** | |
Hex            | `mix`            | v1               | | **✓** | |
elm-package    | `elm`            | v0.19            | **✓** | **✓** | |
Gitサブモジュール  | `gitsubmodule`   | N/A (バージョンなし) | **✓** | **✓** | |
GitHub のアクション | `github-actions` | N/A (バージョンなし) | **✓** | **✓** | |
Go モジュール     | `gomod`          | v1               | **✓** | **✓** | **✓** |
Gradle         | `gradle`         | N/A (バージョンなし)<sup>[1]</sup>   | **✓** | **✓** | |
Maven          | `maven`          | N/A (バージョンなし)<sup>[2]</sup>   | **✓** | **✓** | |
npm            | `npm`            | v6、v7、v8       | **✓** | **✓** | |
NuGet          | `nuget`          | <= 4.8<sup>[3]</sup> | **✓** | **✓** | |
pip            | `pip`            | v21.1.2          | | **✓** | |
pipenv         | `pip`            | <= 2021-05-29    | | **✓** | |
pip-compile    | `pip`            | 6.1.0            | | **✓** | |
poetry         | `pip`            | v1               | | **✓** | |{% ifversion fpt or ghec or ghes > 3.4 %}
pub            | `pub`            | v2 <sup>[4]</sup> | | | |{% endif %}
Terraform      | `terraform`      | >= 0.13、<= 1.2.x  | **✓** | **✓** | |
yarn           | `npm`            | v1               | **✓** | **✓** | |

{% tip %}

**ヒント:** `pipenv` や `poetry` などのパッケージ マネージャでは、`pip` の YAML 値を使う必要があります。 たとえば Python の依存関係を管理するのに `poetry` を使っており、{% data variables.product.prodname_dependabot %} に新しいバージョンのために依存関係のマニフェスト ファイルをモニターさせたい場合は、*dependabot.yml* ファイル中で `package-ecosystem: "pip"` を使ってください。

{% endtip %}

[1] {% data variables.product.prodname_dependabot %} では Gradle は実行されませんが、次のファイルのアップデートがサポートされます: `build.gradle`、`build.gradle.kts`(Kotlin プロジェクトの場合)、および `apply` 宣言を使用して組み込まれた、ファイル名に `dependencies` を含むファイル。 `apply` では、`apply to`、再帰、または高度な構文 (たとえば、ファイル名がプロパティで定義された、Kotlin の `mapOf` 付き `apply`) はサポートされていないことに注意してください。

[2] {% data variables.product.prodname_dependabot %} は Maven を実行しませんが、`pom.xml` ファイルの更新はサポートします。

[3] {% data variables.product.prodname_dependabot %}はNuGet CLIを実行しませんが、バージョン4.8までのほとんどの機能をサポートします。

{% ifversion fpt or ghec or ghes > 3.4 %} [4] {% ifversion ghes = 3.5 %}`pub` のサポートは、現在ベータ版です。 既知の制限事項は変更される可能性があります。 {% data variables.product.prodname_dependabot %} では、次のことに注意してください。
   - `pub` の git 依存関係の更新はサポートされていません。 
   - 以前のバージョンが使用可能な場合でも、更新を試みるバージョンが無視されても更新は実行されません。

   `pub` の _dependabot.yml_ ファイルを構成する方法の詳細については、「[ベータ レベルのエコシステムのサポートを有効にする](/code-security/dependabot/dependabot-version-updates/configuration-options-for-the-dependabot.yml-file#enable-beta-ecosystems)」を参照してください。
   {%- else %}{% data variables.product.prodname_dependabot %} は、以前のバージョンが使用可能な場合でも、更新を試みるバージョンが無視されているときは `pub` の更新を実行しません。{% endif %} {% endif %} 
