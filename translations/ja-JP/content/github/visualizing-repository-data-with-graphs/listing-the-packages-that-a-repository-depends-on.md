---
title: リポジトリが依存するパッケージをリストする
intro: プロジェクトの依存関係を表示し、脆弱性が検出された場合にはそれも表示することができます。
redirect_from:
  - /articles/listing-the-packages-that-a-repository-depends-on
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

### 依存関係グラフについて

依存関係グラフは、サポートされているパッケージエコシステムで、サポートされているファイル形式を使って、{% if currentVersion == "free-pro-team@latest" %}パブリック{% endif %}リポジトリごとに利用できます。{% if currentVersion == "free-pro-team@latest" %}リポジトリ管理者は、プライベートリポジトリの依存関係グラフも設定できます。{% endif %}

{% data reusables.repositories.enable-security-alerts %}

リポジトリの依存関係グラフでは、脆弱な依存関係を表示して更新することができます。 他の依存関係より前に、脆弱な依存関係がリストされます。 詳しい情報については[脆弱性のある依存関係に対するセキュリティアラートについて](/articles/about-security-alerts-for-vulnerable-dependencies)を参照してください。

{% if currentVersion == "free-pro-team@latest" %}
Organization のリポジトリで使われている依存関係を、1 つのダッシュボードで表示できます。 詳細は「[Organization のインサイトを表示する](/articles/viewing-insights-for-your-organization#viewing-organization-dependency-insights)」を参照してください。{% endif %}

### サポートされているパッケージエコシステム

| パッケージマネージャー  | 言語                     | 推奨されるフォーマット                                        | サポートされているフォーマット                                                      |
| ------------ | ---------------------- | -------------------------------------------------- | -------------------------------------------------------------------- |
| Maven        | Java、Scala             | `pom.xml`                                          | `pom.xml`                                                            |
| npm          | JavaScript             | `package-lock.json`                                | `package-lock.json`、`package.json`                                   |
| Yarn         | JavaScript             | `yarn.lock`                                        | `package.json`、`yarn.lock`                                           |
| `dotnet` CLI | .NET 言語 (C#、C++、F#、VB) | `.csproj`、`.vbproj`、`.nuspec`、`.vcxproj`、`.fsproj` | `.csproj`、`.vbproj`、`.nuspec`、`.vcxproj`、`.fsproj`、`packages.config` |
| Python PIP   | Python                 | `requirements.txt`、`pipfile.lock`                  | `requirements.txt`、`pipfile.lock`、`setup.py`*                        |
| RubyGems     | Ruby                   | `Gemfile.lock`                                     | `Gemfile.lock`、`Gemfile`、`*.gemspec`                                 |
{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.18" %}| Composer             | PHP           | `composer.lock` | `composer.json`、`composer.lock` |{% endif %}

{% note %}

**メモ:** `setup.py` ファイルで Python の依存関係をリストする場合、プロジェクトの各依存関係の解析やリスト、あるいは依存関係についてのアラート生成はできないことがあります。

{% endnote %}

### 依存関係グラフを有効にしたリポジトリの依存関係をリストする

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.accessing-repository-graphs %}
{% data reusables.repositories.click-dependency-graph %}

{% if currentVersion == "free-pro-team@latest" %}
### プライベートリポジトリの依存関係グラフを有効化する

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.accessing-repository-graphs %}
{% data reusables.repositories.click-dependency-graph %}
4. 依存関係グラフを有効化するには、{% data variables.product.product_name %} にリポジトリ データへのアクセスを許可する必要があるというメッセージを読んだうえで、[**Allow access**] をクリックします。 ![リポジトリ データへのアクセスを許可して依存関係グラフを有効化するボタン](/assets/images/help/repository/dependency-graph-allow-access-button.png)

詳細は「[{% data variables.product.product_name %} によるデータの利用方法と保護方法を理解する](/categories/understanding-how-github-uses-and-protects-your-data)」を参照してください。

### プライベートリポジトリの依存関係グラフを無効化する

{% data reusables.repositories.you-can-enable-or-disable-security-features %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
3. [Data services] で、[**Dependency graph**] の選択を解除します。 ![依存グラフを無効化するチェックボックス](/assets/images/help/repository/private-repo-data-use-dependency-graph-disabled.png)

リポジトリのデータ利用をオプトアウトするには、「[プライベートリポジトリ用のデータ利用のオプトインもしくはオプトアウト](/articles/opting-into-or-out-of-data-use-for-your-private-repository)」を参照してください。
{% endif %}

### 依存関係グラフのトラブルシューティング

{% data reusables.repositories.troubleshooting-dependency-graph %}

### 参考リンク

- [リポジトリに依存するプロジェクトのリスト](/articles/listing-the-projects-that-depend-on-a-repository){% if currentVersion == "free-pro-team@latest" %}
- [{% data variables.product.product_name %}によるデータの利用と保護の方法の理解](/categories/understanding-how-github-uses-and-protects-your-data)
- [リポジトリ内の脆弱な依存関係を表示・更新する](/articles/viewing-and-updating-vulnerable-dependencies-in-your-repository){% endif %}
