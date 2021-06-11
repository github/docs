---
title: パッケージの表示
intro: リポジトリに公開されたパッケージの詳細を表示し、Organization またはユーザごとに結果を絞り込むことができます。
product: '{% data reusables.gated-features.packages %}'
redirect_from:
  - /articles/viewing-a-repositorys-packages
  - /github/managing-packages-with-github-packages/publishing-and-managing-packages/viewing-a-repositorys-packages
  - /github/managing-packages-with-github-packages/viewing-packages
  - /packages/publishing-and-managing-packages/viewing-packages
  - /packages/manage-packages/viewing-packages
permissions: You must have at least read permissions to view a package.
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
  github-ae: '*'
---

{% data reusables.package_registry.packages-ghes-release-stage %}
{% data reusables.package_registry.packages-ghae-release-stage %}

### リポジトリのパッケージを表示する

パッケージを見ることができるかどうかは、いくつかの要素に依存します。 デフォルトでは、公開したパッケージはすべて見ることができます。

{% data reusables.package_registry.repo-scoped-and-granular-permissions-packages %}

{% data reusables.package_registry.package-page-info %}

### リポジトリのパッケージを表示する

特定のリポジトリにあるパッケージを見つけて表示できます。

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.package_registry.packages-from-code-tab %}
{% data reusables.package_registry.navigate-to-packages %}

### Organization のパッケージを表示する

自分が所属するOrganizationのリポジトリにあるパッケージを見つけて表示できます。

{% data reusables.profile.access_org %}
{% data reusables.user_settings.access_org %}
3. Organization 名の下で、 {% octicon "package" aria-label="The package icon" %} [**Packages**] をクリックします。
{% data reusables.package_registry.navigate-to-packages %}

### パッケージを表示する

すべてのOrganization及びリポジトリで、自分が公開したパッケージを見つけて表示できます。

{% data reusables.profile.access_profile %}
2. プロフィールページの一番上のメインナビゲーションにある [**Packages（パッケージ）**] をクリックします。 ![プロジェクトタブ](/assets/images/help/package-registry/user-packages-tab.png)
{% data reusables.package_registry.navigate-to-packages %}

### 参考リンク

- [パッケージの検索](/github/searching-for-information-on-github/searching-for-packages)
