---
title: Dockeerレジストリからコンテナレジストリへの移行
intro: '以前はDockerレジストリに保存されていたDockerイメージは、自動的に{% data variables.product.prodname_container_registry %}に移行されます。'
product: '{% data reusables.gated-features.packages %}'
redirect_from:
  - /packages/getting-started-with-github-container-registry/migrating-to-github-container-registry-for-docker-images
  - /packages/guides/container-guides-for-github-packages/migrating-to-github-container-registry-for-docker-images
  - /packages/guides/migrating-to-github-container-registry-for-docker-images
versions:
  fpt: '*'
  ghec: '*'
shortTitle: コンテナレジストリへの移行
---

{% data variables.product.prodname_dotcom %}のDockerレジストリは、{% data variables.product.prodname_container_registry %}で置き換えられました。 DockerイメージをDockerレジストリに保存していたなら、それらは自動的に{% data variables.product.prodname_container_registry %}に移されます。 あなたは何もする必要がありません。 Dockerレジストリ(`docker.pkg.github.com`) に名前空間を使っていたスクリプトや{% data variables.product.prodname_actions %}のワークフローは、{% data variables.product.prodname_container_registry %}(`ghcr.io`)への移行後も動作し続けます。

移行は一度にではなく、徐々に行われます。 まだイメージが移動されていなければ、待ち続けてください。遠からずそれらは移行されます。

## イメージが移行されたかはどうすれば分かりますか？

Dockerイメージが{% data variables.product.prodname_container_registry %}に移行されると、そのパッケージの詳細ページに以下の変更が示されます。

* 以前はDockerロゴだったアイコンは{% data variables.product.prodname_container_registry %}ロゴになります。
* 以前は`docker.pkg.github.com`だったプルURL内のドメインは、`ghcr.io`になります。

![{% data variables.product.prodname_container_registry %}詳細ページ](/assets/images/help/package-registry/container-registry-details-page.png)

## {% data variables.product.prodname_container_registry %}とDockerレジストリの主な違い

{% data variables.product.prodname_container_registry %}は、コンテナに固有の要求をサポートするために最適化されています。

{% data variables.product.prodname_container_registry %}を使うと、以下のことができます。
- コンテナイメージをOrganizationや個人アカウント内に保存するか、リポジトリに接続する。
- 権限をリポジトリから継承するか、リポジトリとは独立に詳細な権限を設定するかを選択する。
- 匿名でパブリックなコンテナイメージにアクセスする。

### Dockerイメージの詳細に関するAPIクエリ

移行後は、GraphQL APIを使って`PackageType` "DOCKER"のパッケージに対するクエリを実行することはできなくなります。 その代わりに、REST APIを使って`package_type` "container"のパッケージに対するクエリを実行できるようになります。 詳しい情報については、REST APIの記事「[パッケージ](/rest/reference/packages)」を参照してください。

## 支払い

{% data variables.product.prodname_container_registry %}に対する支払に関する詳しい情報については「[{% data variables.product.prodname_registry %}の支払について](/billing/managing-billing-for-github-packages/about-billing-for-github-packages)」を参照してください。
