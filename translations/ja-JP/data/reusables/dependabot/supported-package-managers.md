---
ms.openlocfilehash: f37c93394be7f73c417b5cd040696b453c82e42d
ms.sourcegitcommit: e4069b5613c10d74954185995d0fb73224079463
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 11/17/2022
ms.locfileid: "148169241"
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
Docker {% ifversion dependabot-version-updates-enhanced-docker-support %}<sup>[1]</sup>{% endif %}         | `docker`         | v1               | **✓** | **✓** | |
Hex            | `mix`            | v1               | | **✓** | |
elm-package    | `elm`            | v0.19            | **✓** | **✓** | |
Gitサブモジュール  | `gitsubmodule`   | N/A (バージョンなし) | **✓** | **✓** | |
GitHub のアクション | `github-actions` | N/A (バージョンなし) | **✓** | **✓** | |
Go モジュール     | `gomod`          | v1               | **✓** | **✓** | **✓** |
Gradle         | `gradle`         | N/A (バージョンなし)<sup>[2]</sup>   | **✓** | **✓** | |
Maven          | `maven`          | N/A (バージョンなし)<sup>[3]</sup>   | **✓** | **✓** | |
npm            | `npm`            | v6、v7、v8       | **✓** | **✓** | |
NuGet          | `nuget`          | <= 4.8<sup>[4]</sup> | **✓** | **✓** | |
pip{% ifversion dependabot-PEP621-support %}<sup>[5]</sup>{% endif %}          | `pip`            | v21.1.2          | | **✓** | |
pipenv         | `pip`            | <= 2021-05-29    | | **✓** | |
pip-compile{% ifversion dependabot-PEP621-support %}<sup>[5]</sup>{% endif %}   | `pip`            | 6.1.0            | | **✓** | |
poetry         | `pip`            | v1               | | **✓** | |{% ifversion fpt or ghec or ghes > 3.4 %}
pub            | `pub`            | v2 <sup>[6]</sup> | | | |{% endif %}
Terraform      | `terraform`      | >= 0.13、<= 1.2.x  | **✓** | **✓** | |
{% ifversion dependabot-yarn-v3-update %}yarn           | `npm`            | v1、v2、v3       | **✓** | **✓** | **✓**<sup>[7]</sup> |{% else %}yarn           | `npm`            | v1               | **✓** | **✓** |  |
{% endif %}

{% tip %}

**ヒント:** `pipenv` や `poetry` などのパッケージ マネージャでは、`pip` の YAML 値を使う必要があります。 たとえば Python の依存関係を管理するのに `poetry` を使っており、{% data variables.product.prodname_dependabot %} に新しいバージョンのために依存関係のマニフェスト ファイルをモニターさせたい場合は、*dependabot.yml* ファイル中で `package-ecosystem: "pip"` を使ってください。

{% endtip %}

{% ifversion dependabot-version-updates-enhanced-docker-support %}[1] {% data variables.product.prodname_dependabot %} では、Kubernetes マニフェストの Docker イメージ タグを更新できます。 Docker イメージ タグを参照する Kubernetes マニフェストを含むディレクトリごとに、_dependabot.yml_ ファイルの Docker `package-ecosystem` 要素にエントリを追加します。 Kubernetes マニフェストは、Kubernetes Deployment YAML ファイルまたは Helm チャートにすることができます。 `docker` の _dependabot.yml_ ファイルの構成について詳しくは、「[dependabot.yml ファイルの構成オプション](/code-security/dependabot/dependabot-version-updates/configuration-options-for-the-dependabot.yml-file#package-ecosystem)」の「`package-ecosystem`」を参照してください。

   {% data variables.product.prodname_dependabot %} では、パブリックとプライベートの両方の Docker レジストリがサポートされています。 サポートされているレジストリの一覧については、「[dependabot.yml ファイルの構成オプション](/code-security/dependabot/dependabot-version-updates/configuration-options-for-the-dependabot.yml-file#docker-registry)」の「`docker-registry`」を参照してください。
{% endif %}

[2] {% data variables.product.prodname_dependabot %} では Gradle は実行されませんが、次のファイルの更新がサポートされます: `build.gradle`、`build.gradle.kts` (Kotlin プロジェクトの場合)、および `apply` 宣言を使用して組み込まれた、ファイル名に `dependencies` を含むファイル。 `apply` では、`apply to`、再帰、または高度な構文 (たとえば、ファイル名がプロパティで定義された、Kotlin の `mapOf` 付き `apply`) はサポートされていないことに注意してください。

[3] {% data variables.product.prodname_dependabot %} では Maven は実行されませんが、`pom.xml` ファイルの更新はサポートされます。

[4] {% data variables.product.prodname_dependabot %} では NuGet CLI は実行されませんが、バージョン 4.8 までのほとんどの機能がサポートされます。

{% ifversion dependabot-PEP621-support %}[5] `requirements.txt` ファイルの更新のサポートに加え、{% data variables.product.prodname_dependabot %} では、PEP 621 標準に従っている場合、`pyproject.toml` ファイルの更新がサポートされます。 {% endif %}

{% ifversion fpt or ghec or ghes > 3.4 %} [6] {% ifversion ghes = 3.5 %}`pub` のサポートは、現在ベータ版です。 既知の制限事項は変更される可能性があります。 {% data variables.product.prodname_dependabot %} では、次のことに注意してください。
   - `pub` の git 依存関係の更新はサポートされていません。 
   - 以前のバージョンが使用可能な場合でも、更新を試みるバージョンが無視されても更新は実行されません。

   `pub` の _dependabot.yml_ ファイルを構成する方法の詳細については、「[ベータ レベルのエコシステムのサポートを有効にする](/code-security/dependabot/dependabot-version-updates/configuration-options-for-the-dependabot.yml-file#enable-beta-ecosystems)」を参照してください。
   {%- else %}{% data variables.product.prodname_dependabot %} は、以前のバージョンが使用可能な場合でも、更新を試みるバージョンが無視されているときは `pub` の更新を実行しません。{% endif %} {% endif %} 

{% ifversion dependabot-yarn-v3-update %} [7] Dependabot では v2 以降のベンダー依存関係がサポートされています。{% endif %}

