---
title: Docker イメージを GitHub Container Registry に移行する
intro: 'Docker イメージを保存するため GitHub パッケージ Docker レジストリを使っている場合には、新しい {% data variables.product.prodname_container_registry %} に移行できます。'
product: '{% data reusables.gated-features.packages %}'
redirect_from:
  - /packages/getting-started-with-github-container-registry/migrating-to-github-container-registry-for-docker-images
versions:
  free-pro-team: '*'
---

### {% data variables.product.prodname_github_container_registry %} と Docker パッケージレジストリとの主な違い

{% data reusables.package_registry.container-registry-beta %}

{% data variables.product.prodname_github_container_registry %} は既存の Packages Docker レジストリに取って代わるもので、コンテナ固有のニーズのいくつかをサポートできるよう最適化されています。

{% data reusables.package_registry.container-registry-feature-highlights %}

詳しい情報については「[{% data variables.product.prodname_github_container_registry %}について](/packages/getting-started-with-github-container-registry/about-github-container-registry)」を参照してください。

### 支払いの変更

{% data reusables.package_registry.billing-for-container-registry %}

### ドメインの変更

{% data variables.product.prodname_container_registry %} のドメインは `ghcr.io` です。

| レジストリ                                                             | URLの例                                               |
| ----------------------------------------------------------------- | --------------------------------------------------- |
| {% data variables.product.prodname_registry %} Docker レジストリ       | `docker.pkg.github.com/OWNER/REPOSITORY/IMAGE_NAME` |
| {% data variables.product.prodname_github_container_registry %} | `ghcr.io/OWNER/IMAGE_NAME`                          |

### コンテナレジストリで認証する

{% data reusables.package_registry.feature-preview-for-container-registry %}

{% data variables.product.prodname_container_registry %} は、 ベース URL `ghcr.io` で認証する必要があります。 {% data variables.product.prodname_container_registry %} を使用するために、新しいアクセストークンの作成をお勧めします。

{% data reusables.package_registry.authenticate_with_pat_for_container_registry %}

{% data reusables.package_registry.authenticate-to-container-registry-steps %}

### Docker CLI を使用して Docker イメージを移行する

{% data variables.product.prodname_registry %} Docker レジストリでホストしている Docker イメージを移動するには、イメージを {% data variables.product.prodname_container_registry %} に再公開する必要があります。 既存の Docker イメージを再公開するには、ローカルマシンでコマンドラインを使うことをお勧めします。

1. 少なくとも `read:packages` スコープのある一時的な PAT (個人アクセストークン) を使用して、Docker レジストリにサインインします。 この PAT は、Docker レジストリにサインインしてイメージをプルダウンするためにのみ使用され、その後は削除して構いません。
  {% raw %}
  ```shell
  $ echo $READ_PACKAGES_TOKEN | docker login docker.pkg.github.com -u USERNAME --password-stdin
  ```
  {% endraw %}
2. 移行したいイメージをプルダウンします。OWNER はリポジトリを所有しているユーザまたは Organization アカウントの名前に、REPOSITORY はプロジェクトを含むリポジトリの名前に、IMAGE_NAME はパッケージまたはイメージの名前に、VERSION はインストールするイメージのタグにそれぞれ置き換えてください。 たとえば、`docker pull docker.pkg.github.com/octo-org/octoshift/octoshift:latest` は octo-org という Organization の `octoshift/octoshift` イメージの、最新のタグをプルします。
  ```shell
  $ docker pull docker.pkg.github.com/OWNER/REPOSITORY/IMAGE_NAME:VERSION
  ```

3. 新しいドメインと新しいイメージ名でイメージにタグ付けし直します。 詳しい情報については、Dockerのドキュメンテーションの「[Docker tag](https://docs.docker.com/engine/reference/commandline/tag/)」を参照してください。 先ほどのステップで用いた URL と同じものを SOURCE URL とします。 TARGET_OWNER はコンテナイメージをの移行先であるユーザまたは Organization に、TARGET_IMAGE_NAME は新しい {% data variables.product.prodname_container_registry %} イメージ名に置き換えます。
  ```shell
  $ docker tag docker.pkg.github.com/SOURCE_OWNER/SOURCE_REPOSITORY/SOURCE_IMAGE_NAME:VERSION ghcr.io/TARGET_OWNER/TARGET_IMAGE_NAME:VERSION
  ```

4. 新しい

{% data variables.product.prodname_container_registry %}. `read:packages` スコープと `write:packages` スコープに限定した新しい PAT の作成をお勧めします。`repo` スコープはもはや不要であり、以前の PAT は `write:packages` スコープを持っていない場合があるからです。
  {% raw %}
  ```shell
  $ echo $CR_PAT | docker login ghcr.io -u USERNAME --password-stdin
  ```
  {% endraw %}
5. タグ付けし直したイメージを {% data variables.product.prodname_container_registry %} にプッシュします。
  ```shell
  $ docker push ghcr.io/OWNER/IMAGE_NAME:VERSION
  ```

### {% data variables.product.prodname_actions %} ワークフローを更新する

{% data reusables.package_registry.feature-preview-for-container-registry %}

{% data variables.product.prodname_registry %} Docker レジストリから Docker イメージを使用する {% data variables.product.prodname_actions %} ワークフローがある場合、ワークフローを {% data variables.product.prodname_container_registry %} に更新するといいでしょう。そうすればパブリックコンテナのイメージへの匿名アクセスが可能になり、きめ細かいアクセス権限を設定でき、コンテナに対するストレージと帯域幅が向上します。

1. `ghcr.io` にある新しい {% data variables.product.prodname_container_registry %} に Docker イメージを移行します。 例については、「[Docker CLI を使用して Docker イメージを移行する](#migrating-a-docker-image-using-the-docker-cli)」を参照してください。

2. {% data variables.product.prodname_actions %} ワークフローファイルで、パッケージ URL を `https://docker.pkg.github.com` から `ghcr.io` に更新します。

3. Add your new {% data variables.product.prodname_container_registry %} authentication personal access token (PAT) as a GitHub Actions secret. {% data variables.product.prodname_github_container_registry %} は PAT において `GITHUB_TOKEN` の使用をサポートしていないので、`CR_PAT` などの別のカスタム変数を使用する必要があります。 詳しい情報については「[暗号化されたシークレットの作成と保存](/actions/configuring-and-managing-workflows/creating-and-storing-encrypted-secrets)」を参照してください。

4. {% data variables.product.prodname_actions %} ワークフローファイルにおいて、Docker レジストリ PAT ({% raw %}`${{ secrets.GITHUB_TOKEN }}`{% endraw %} をコンテナレジストリ {% data variables.product.prodname_container_registry %} PAT の新しい変数 (たとえば {% raw %}`${{ secrets.CR_PAT }}`{% endraw %}) に置き換えて、認証 PAT を更新します。

#### 更新したワークフローの例

ワークフローの一部が Docker レジストリにホストされた Docker イメージにアクセスした場合は、次のようになります。

{% raw %}
```yaml
echo ${{ secrets.GITHUB_TOKEN }} | docker login https://docker.pkg.github.com -u $GITHUB_ACTOR --password-stdin
docker pull docker.pkg.github.com/github/octoshift/octoshift:latest
docker build . --tag docker.pkg.github.com/github/octoshift/octoshift:$GITHUB_SHA --cache-from docker.pkg.github.com/github/octoshift/octoshift:latest
docker push docker.pkg.github.com/github/octoshift/octoshift:$GITHUB_SHA
```
{% endraw %}

そして、ワークフローを新しい {% data variables.product.prodname_container_registry %} URL と PAT で次のように更新する必要があります。

{% raw %}
```yaml
# new login with new container registry url and PAT
echo ${{ secrets.CR_PAT }} | docker login ghcr.io -u $GITHUB_ACTOR --password-stdin
# new container registry urls added
docker pull ghcr.io/github/octoshift:latest
docker build . --tag ghcr.io/github/octoshift:$GITHUB_SHA --cache-from ghcr.io/github/octoshift:latest
docker push ghcr.io/github/octoshift:$GITHUB_SHA
```
{% endraw %}
