以下の表は、各パッケージマネージャについて以下の項目を示しています。
- *dependabot.yml*ファイル中で使うYAML値
- パッケージマネージャのサポートされているバージョン
- プライベートの{% data variables.product.prodname_dotcom %}リポジトリあるいはレジストリ内の依存関係がサポートされているか
- ベンダーの依存関係がサポートされているか

| パッケージマネージャー    | YAML値            | サポートされているバージョン             | プライベートリポジトリ | プライベートレジストリ | ベンダー  |
| -------------- | ---------------- | -------------------------- |:-----------:|:-----------:|:-----:|
| Bundler        | `bundler`        | v1, v2                     |             |    **✓**    | **✓** |
| Cargo          | `cargo`          | v1                         |    **✓**    |    **✓**    |       |
| Composer       | `composer`       | v1, v2                     |    **✓**    |    **✓**    |       |
| Docker         | `docker`         | v1                         |    **✓**    |    **✓**    |       |
| Hex            | `mix`            | v1                         |             |    **✓**    |       |
| elm-package    | `elm`            | v0.19                      |    **✓**    |    **✓**    |       |
| Gitサブモジュール     | `gitsubmodule`   | N/A (バージョンなし)              |    **✓**    |    **✓**    |       |
| GitHub Actions | `github-actions` | N/A (バージョンなし)              |    **✓**    |    **✓**    |       |
| Goモジュール        | `gomod`          | v1                         |    **✓**    |    **✓**    | **✓** |
| Gradle         | `gradle`         | N/A（バージョンなし）<sup>[1]</sup> |    **✓**    |    **✓**    |       |
| Maven          | `maven`          | N/A（バージョンなし）<sup>[2]</sup> |    **✓**    |    **✓**    |       |
| npm            | `npm`            | v6, v7                     |    **✓**    |    **✓**    |       |
| NuGet          | `nuget`          | <= 4.8<sup>[3]</sup>       |    **✓**    |    **✓**    |       |
| pip            | `pip`            | v20                        |             |    **✓**    |       |
| pipenv         | `pip`            | <= 2018.11.26              |             |    **✓**    |       |
| pip-compile    | `pip`            | 5.5.0                      |             |    **✓**    |       |
| poetry         | `pip`            | v1                         |             |    **✓**    |       |
| Terraform      | `terraform`      | <= 0.11                    |    **✓**    |    **✓**    |       |
| yarn           | `npm`            | v1                         |    **✓**    |    **✓**    |       |

[1] {% data variables.product.prodname_dependabot %}はGradleを実行しませんが、`build.gradle`及び`build.gradle.kts`（Kotlinのプロジェクトの場合）という2つのファイルの更新はサポートしています。

[2] {% data variables.product.prodname_dependabot %}はMavenを実行しませんが、`pom.xml`ファイルの更新はサポートします。

[3] {% data variables.product.prodname_dependabot %}はNuGet CLIを実行しませんが、バージョン4.8までのほとんどの機能をサポートします。

`pipenv`や`poetry`といったパッケージマネージャでは、`pip`のYAML値を使う必要があります。 たとえばPythonの依存関係を管理するのに`poetry`を使っており、{% data variables.product.prodname_dependabot %}に新しいバージョンのために依存関係のマニフェストファイルをモニターさせたい場合は、*dependabot.yml*ファイル中で`package-ecosystem: "pip"`を使ってください。
