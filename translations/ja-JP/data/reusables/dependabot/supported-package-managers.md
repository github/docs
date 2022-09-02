以下の表は、各パッケージマネージャについて以下の項目を示しています。
- *dependabot.yml*ファイル中で使うYAML値
- パッケージマネージャのサポートされているバージョン
- プライベートの{% data variables.product.prodname_dotcom %}リポジトリあるいはレジストリ内の依存関係がサポートされているか
- ベンダーの依存関係がサポートされているか

| パッケージマネージャー    | YAML値            | サポートされているバージョン             | プライベートリポジトリ | プライベートレジストリ |                    ベンダー                    |
| -------------- | ---------------- | -------------------------- |:-----------:|:-----------:|:------------------------------------------:|
| Bundler        | `bundler`        | v1, v2                     |             |    **✓**    |                   **✓**                    |
| Cargo          | `cargo`          | v1                         |    **✓**    |    **✓**    |                                            |
| Composer       | `composer`       | v1, v2                     |    **✓**    |    **✓**    |                                            |
| Docker         | `docker`         | v1                         |    **✓**    |    **✓**    |                                            |
| Hex            | `mix`            | v1                         |             |    **✓**    |                                            |
| elm-package    | `elm`            | v0.19                      |    **✓**    |    **✓**    |                                            |
| Gitサブモジュール     | `gitsubmodule`   | N/A (バージョンなし)              |    **✓**    |    **✓**    |                                            |
| GitHub Actions | `github-actions` | N/A (バージョンなし)              |    **✓**    |    **✓**    |                                            |
| Goモジュール        | `gomod`          | v1                         |    **✓**    |    **✓**    |                   **✓**                    |
| Gradle         | `gradle`         | N/A（バージョンなし）<sup>[1]</sup> |    **✓**    |    **✓**    |                                            |
| Maven          | `maven`          | N/A（バージョンなし）<sup>[2]</sup> |    **✓**    |    **✓**    |                                            |
| npm            | `npm`            | v6、v7、v8                   |    **✓**    |    **✓**    |                                            |
| NuGet          | `nuget`          | <= 4.8<sup>[3]</sup>       |    **✓**    |    **✓**    |                                            |
| pip            | `pip`            | v21.1.2                    |             |    **✓**    |                                            |
| pipenv         | `pip`            | <= 2021-05-29              |             |    **✓**    |                                            |
| pip-compile    | `pip`            | 6.1.0                      |             |    **✓**    |                                            |
| poetry         | `pip`            | v1                         |             |    **✓**    | |{% ifversion fpt or ghec or ghes > 3.4 %}
| pub            | `pub`            | v2 <sup>[4]</sup>          |             |             |                
{% endif %}
| Terraform      | `terraform`      | >= 0.13, <= 1.2.x          |    **✓**    |    **✓**    |                                            |
| yarn           | `npm`            | v1                         |    **✓**    |    **✓**    |                                            |

{% tip %}

**参考:** `pipenv`や`poetry`といったパッケージマネージャでは、`pip`のYAML値を使う必要があります。 たとえばPythonの依存関係を管理するのに`poetry`を使っており、{% data variables.product.prodname_dependabot %}に新しいバージョンのために依存関係のマニフェストファイルをモニターさせたい場合は、*dependabot.yml*ファイル中で`package-ecosystem: "pip"`を使ってください。

{% endtip %}

[1] {% data variables.product.prodname_dependabot %}はGradleを実行しませんが、`build.gradle`及び`build.gradle.kts`（Kotlinのプロジェクトの場合）という2つのファイル、そしてファイル名に`dependencies`を持つ`apply`宣言によって含まれるファイルの更新はサポートしています。 `apply`は`apply to`、再帰、あるいは高度な構文（たとえばKotlinの`mapOf`付きの`apply`やプロパティで定義されたファイル名）はサポートしないことに注意してください。

[2] {% data variables.product.prodname_dependabot %}はMavenを実行しませんが、`pom.xml`ファイルの更新はサポートします。

[3] {% data variables.product.prodname_dependabot %}はNuGet CLIを実行しませんが、バージョン4.8までのほとんどの機能をサポートします。

{% ifversion fpt or ghec or ghes > 3.4 %}
[4]
{% ifversion ghes = 3.5 %}`pub`のサポートは現在ベータです。 既知の制限は変更されることがあります。 {% data variables.product.prodname_dependabot %}について以下のことに注意してください:
   - `pub`に対するgitの依存関係のアップデートはサポートしていません。
   - 仮に以前のバージョンが利用できる場合であっても、アップデートしようとしているバージョンが無視されていればアップデートを行いません。

   `pub`に対する_dependabot.yml_ファイルの設定に関する情報については「[ベータレベルのエコシステムに対するサポートの有効化](/code-security/dependabot/dependabot-version-updates/configuration-options-for-the-dependabot.yml-file#enable-beta-ecosystems)」を参照してください。
   {%- else %}{% data variables.product.prodname_dependabot %}は、仮に以前のバージョンが利用できる場合であっても、アップデートしようとしているバージョンが無視されていれば`pub`のアップデートを行いません。{% endif %}
{% endif %} 
