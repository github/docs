---
title: リポジトリに依存するプロジェクトのリスト
intro: リポジトリに依存するパッケージおよびプロジェクトを、依存グラフで表示することができます。
redirect_from:
  - /articles/listing-the-projects-that-depend-on-a-repository
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

### 依存グラフについて
依存グラフには、パッケージとアプリケーション両方に関するデータが含まれます。 パッケージはパッケージ マネージャーにライブラリを含むリポジトリであり、アプリケーションは選択したリポジトリに依存するリポジトリです。 依存グラフでのアプリケーションのリストは、リポジトリに依存する直近のプロジェクトごとにソートされます。

依存グラフには、次の言語のデータが表示されます:

- RubyGems
- NPM
- PyPI
- Maven (pom.xml のみ)
- Nuget

{% data reusables.repositories.enable-security-alerts %}

{% note %}

**メモ:** 依存カウントは概数であり、リストされる依存の数に一致しない場合があります。

{% endnote %}

![依存グラフ](/assets/images/help/graphs/dependents_graph.png)

### 依存グラフにアクセスする

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.accessing-repository-graphs %}
{% data reusables.repositories.click-dependency-graph %}
4. [Dependency graph] で **[Dependents]** をクリックします。 ![依存関係グラフ ページの [Dependents] タブ](/assets/images/help/graphs/dependency-graph-dependents-tab.png)

### 参考リンク

- [リポジトリが依存するパッケージのリスト](/articles/listing-the-packages-that-a-repository-depends-on){% if currentVersion == "free-pro-team@latest" %}
- [Organization のインサイトを表示する](/articles/viewing-insights-for-your-organization){% endif %}
