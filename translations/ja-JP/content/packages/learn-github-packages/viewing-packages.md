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
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
---

{% data reusables.package_registry.packages-ghes-release-stage %}
{% data reusables.package_registry.packages-ghae-release-stage %}

## リポジトリのパッケージを表示する

パッケージを見ることができるかどうかは、いくつかの要素に依存します。 デフォルトでは、公開したパッケージはすべて見ることができます。

リポジトリをスコープとするパッケージは、そのパッケージを所有するリポジトリから権限と可視性を継承します。 以下のレジストリは、この種の権限を使用します。{% ifversion not fpt or ghec %}
- Dockerレジストリ (`docker.pkg.github.com`){% endif %}
- npmレジストリ
- RubyGemsレジストリ
- Apache Mavenレジストリ
- NuGetレジストリ

{% ifversion fpt or ghec %}
コンテナレジストリは、個人ユーザもしくはOrganizationアカウントが所有する各パッケージごとにカスタマイズできる、詳細な権限及び可視性の設定のオプションを提供します。 詳細な権限を利用することも、パッケージをレジストリに接続してその権限を継承することもできます。 詳しい情報については「[リポジトリのパッケージへの接続](/packages/learn-github-packages/connecting-a-repository-to-a-package)」を参照してください。
{% endif %}

詳しい情報については「[GitHub Packagesの権限について](/packages/learn-github-packages/about-permissions-for-github-packages)」{% ifversion fpt or ghec %}及び「[パッケージのアクセス制御と可視性の設定](/packages/learn-github-packages/configuring-a-packages-access-control-and-visibility)」{% endif %}を参照してください。

{% data reusables.package_registry.package-page-info %}

## リポジトリのパッケージを表示する

特定のリポジトリにあるパッケージを見つけて表示できます。

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.package_registry.packages-from-code-tab %}
{% data reusables.package_registry.navigate-to-packages %}

## Organization のパッケージを表示する

自分が所属するOrganizationのリポジトリにあるパッケージを見つけて表示できます。

{% data reusables.profile.access_org %}
{% data reusables.user_settings.access_org %}
3. Organization 名の下で、 {% octicon "package" aria-label="The package icon" %} [**Packages**] をクリックします。
{% data reusables.package_registry.navigate-to-packages %}

## パッケージを表示する

すべてのOrganization及びリポジトリで、自分が公開したパッケージを見つけて表示できます。

{% data reusables.profile.access_profile %}
2. プロフィールページの一番上のメインナビゲーションにある [**Packages（パッケージ）**] をクリックします。 ![プロジェクトタブ](/assets/images/help/package-registry/user-packages-tab.png)
{% data reusables.package_registry.navigate-to-packages %}

## 参考リンク

- [パッケージの検索](/search-github/searching-on-github/searching-for-packages)
