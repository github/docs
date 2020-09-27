---
title: パッケージの表示
intro: リポジトリに公開されたパッケージの詳細を表示し、Organization またはユーザごとに結果を絞り込むことができます。
product: '{{ site.data.reusables.gated-features.packages }}'
redirect_from:
  - /articles/viewing-a-repositorys-packages
  - /github/managing-packages-with-github-packages/publishing-and-managing-packages/viewing-a-repositorys-packages
  - /github/managing-packages-with-github-packages/viewing-packages
permissions: リポジトリへの読み取り権限を持つユーザは、リポジトリのパッケージを表示できます。
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
---

{{ site.data.reusables.package_registry.packages-ghes-release-stage }}

### リポジトリのパッケージを表示する

パッケージはリポジトリレベルでインストールする必要がありますが、Organization 内のすべてのパッケージと公開したすべてのパッケージを表示できます。 {{ site.data.reusables.package_registry.package-page-info }}

### リポジトリのパッケージを表示する

リポジトリ内のすべてのパッケージを表示し、リポジトリ内の特定のパッケージを検索できます。

{{ site.data.reusables.repositories.navigate-to-repo }}
{{ site.data.reusables.package_registry.packages-from-code-tab }}
{{ site.data.reusables.package_registry.navigate-to-packages }}

### Organization のパッケージを表示する

Organization にインストールされているすべてのパッケージを表示し、Organization のリポジトリにインストールされている特定のパッケージを検索できます。

{{ site.data.reusables.profile.access_profile }}
{{ site.data.reusables.profile.access_org }}
3. Organization 名の下で、クリックします
{% octicon "package" aria-label="The package icon" %} **Packages**.
{{ site.data.reusables.package_registry.navigate-to-packages }}

### パッケージを表示する

インストールしたすべてのパッケージを表示し、インストールした特定のパッケージをすべての Organization とリポジトリに渡って検索できます。

{{ site.data.reusables.profile.access_profile }}
2. プロフィールページの一番上のメインナビゲーションにある [**Packages（パッケージ）**] をクリックします。 ![プロジェクトタブ](/assets/images/help/package-registry/user-packages-tab.png)
{{ site.data.reusables.package_registry.navigate-to-packages }}

### 参考リンク

- [パッケージの検索](/github/searching-for-information-on-github/searching-for-packages)
