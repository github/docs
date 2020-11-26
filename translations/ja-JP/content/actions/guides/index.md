---
title: ガイド
shortTitle: ガイド
intro: '{% data variables.product.prodname_actions %} のこれらのガイドには、ワークフローの設定に役立つ特定の使用例とサンプルが含まれています。'
redirect_from:
  - /actions/guides/caching-and-storing-workflow-data
  - /actions/automating-your-workflow-with-github-actions/using-databases-and-services
  - /actions/configuring-and-managing-workflows/using-databases-and-service-containers
  - /actions/guides/using-databases-and-service-containers
  - /actions/language-and-framework-guides
  - /actions/language-and-framework-guides/github-actions-for-docker
  - /actions/language-and-framework-guides/github-actions-for-java
  - /actions/language-and-framework-guides/github-actions-for-javascript-and-typescript
  - /actions/language-and-framework-guides/github-actions-for-python
  - /actions/publishing-packages-with-github-actions
  - /actions/building-and-testing-code-with-continuous-integration
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
---

{% data variables.product.prodname_actions %} の支払いを管理する
{% data variables.product.prodname_dotcom %}は、macOSランナーのホストに[MacStadium](https://www.macstadium.com/)を使用しています。

### カスタム継続的インテグレーションワークフローを作成する

{% data variables.product.prodname_actions %} を使用して、さまざまなプログラミング言語で記述されたプロジェクトを設定およびテストするカスタム継続的インテグレーション (CI) ワークフローを作成できます。

{% link_in_list /about-continuous-integration %}
{% link_in_list /setting-up-continuous-integration-using-workflow-templates %}
{% link_in_list /building-and-testing-nodejs %}
{% link_in_list /building-and-testing-powershell %}
{% link_in_list /building-and-testing-python %}
{% link_in_list /building-and-testing-java-with-maven %}
{% link_in_list /building-and-testing-java-with-gradle %}
{% link_in_list /building-and-testing-java-with-ant %}

### ソフトウェア パッケージを公開する

継続的デリバリ (CD) ワークフローの一部として、ソフトウェア パッケージの公開を自動化できます。 パッケージは、任意のパッケージ ホストおよび {% data reusables.gated-features.packages %} に公開できます。

{% link_in_list /about-packaging-with-github-actions %}
{% link_in_list /publishing-nodejs-packages %}
{% link_in_list /publishing-java-packages-with-maven %}
{% link_in_list /publishing-java-packages-with-gradle %}
{% link_in_list /publishing-docker-images %}

### ワークフローデータのキャッシングと保存

依存関係をキャッシュし、成果物を保存して、ワークフローの実行を効率化してください。

{% link_in_list /storing-workflow-data-as-artifacts %}
{% link_in_list /caching-dependencies-to-speed-up-workflows %}

### ワークフローでサービスコンテナを使用する

サービス コンテナを使用して、サービスをワークフローに接続します。

{% link_in_list /about-service-containers %}
{% link_in_list /creating-redis-service-containers %}
{% link_in_list /creating-postgresql-service-containers %}
