---
title: GitHub Packagesで利用するために Docker を設定する
intro: 'Docker クライアントが、{% data variables.product.prodname_registry %} を利用して Docker イメージを公開および取得できるよう設定できます。'
product: '{% data reusables.gated-features.packages %}'
redirect_from:
  - /articles/configuring-docker-for-use-with-github-package-registry
  - /github/managing-packages-with-github-package-registry/configuring-docker-for-use-with-github-package-registry
  - /github/managing-packages-with-github-packages/configuring-docker-for-use-with-github-packages
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
---

{% data reusables.package_registry.packages-ghes-release-stage %}

{% data reusables.package_registry.default-name %} たとえば、{% data variables.product.prodname_dotcom %}は`OWNER/test`というリポジトリ内の`com.example:test`という名前のパッケージを公開します。

### {% data variables.product.prodname_registry %} への認証を行う

{% data reusables.package_registry.docker_registry_deprecation_status %}

`docker` loginコマンドを使い、Dockerで{% data variables.product.prodname_registry %}の認証を受けることができます。

{% if enterpriseServerVersions contains currentVersion %}

Docker レジストリを {% data variables.product.prodname_registry %} で使用する前に、{% data variables.product.product_location %} のサイト管理者がインスタンスに対し Docker のサポートとand Subdomain Isolation を有効化する必要があります。 詳しい情報については、「[Enterprise 向けの GitHub Packages を管理する](/enterprise/admin/packages)」を参照してください。

{% endif %}

### {% data variables.product.prodname_registry %} への認証を行う

{% data reusables.package_registry.docker_registry_deprecation_status %}

{% data reusables.package_registry.authenticate-packages %}

#### 個人アクセストークンでの認証

{% data reusables.package_registry.required-scopes %}

`docker` loginコマンドを使い、Dockerで{% data variables.product.prodname_registry %}の認証を受けることができます。

クレデンシャルをセキュアに保つ貯めに、個人アクセストークンは自分のコンピュータのローカルファイルに保存し、ローカルファイルからトークンを読み取るDockerの`--password-stdin`フラグを使うことをおすすめします。

{% if currentVersion == "free-pro-team@latest" %}
{% raw %}
  ```shell
  $ cat <em>~/TOKEN.txt</em> | docker login https://docker.pkg.github.com -u <em>USERNAME</em> --password-stdin
  ```
{% endraw %}
{% endif %}

{% if enterpriseServerVersions contains currentVersion %}
{% raw %}
 ```shell
 $ docker images

> REPOSITORY           TAG      IMAGE ID      CREATED      SIZE
> monalisa             1.0      c75bebcdd211  4 weeks ago  1.11MB

# <em>OWNER/REPO/IMAGE_NAME</em>でイメージにタグ付けする
$ docker tag c75bebcdd211 docker.pkg.github.com/octocat/octo-app/monalisa:1.0

# {{ site.data.variables.product.prodname_registry }}にイメージをプッシュ
$ docker push docker.pkg.github.com/octocat/octo-app/monalisa:1.0
```
{% endraw %}
{% endif %}

To use this example login command, replace `USERNAME` with your {% data variables.product.product_name %} username{% if enterpriseServerVersions contains currentVersion %}, `HOSTNAME` with the URL for {% data variables.product.product_location %},{% endif %} and `~/TOKEN.txt` with the file path to your personal access token for {% data variables.product.product_name %}.

詳しい情報については「[Docker login](https://docs.docker.com/engine/reference/commandline/login/#provide-a-password-using-stdin)」を参照してください。

#### `GITHUB_TOKEN`での認証

{% data reusables.package_registry.package-registry-with-github-tokens %}

### Publishing an image

{% data reusables.package_registry.docker_registry_deprecation_status %}

{% note %}

**Note:** Image names must only use lowercase letters.

{% endnote %}

{% data variables.product.prodname_registry %} は、リポジトリごとに複数の最上位 Docker イメージをサポートしています。 リポジトリは任意の数のイメージタグを持つことができます。 10GB以上のDockerイメージの公開やインストールの際には、サービスのパフォーマンスが低下するかもしれず、各レイヤーは5GBが上限です。 詳しい情報については、Dockerのドキュメンテーションの「[Docker tag](https://docs.docker.com/engine/reference/commandline/tag/)」を参照してください。

{% data reusables.package_registry.viewing-packages %}

1. `docker images`を使って、Dockerイメージのイメージ名とIDを確認してください。
  ```shell
  $ docker images
  > <&nbsp>
  > REPOSITORY        TAG        IMAGE ID       CREATED      SIZE
  > <em>IMAGE_NAME</em>        <em>VERSION</em>    <em>IMAGE_ID</em>       4 weeks ago  1.11MB
  ```
2. 新しいDockerイメージを初めて公開し、`monalisa`という名前にできます。
{% if enterpriseServerVersions contains currentVersion %} *HOSTNAME* with the hostname of {% data variables.product.product_location %},{% endif %} and *VERSION* with package version at build time.
  {% if currentVersion == "free-pro-team@latest" %}
  ```shell
  $ docker tag <em>IMAGE_ID</em> docker.pkg.github.com/<em>OWNER/REPOSITORY/IMAGE_NAME:VERSION</em>
  ```
  {% else %}
  ```shell
  $ docker tag <em>IMAGE_ID</em> docker.<em>HOSTNAME/OWNER/REPOSITORY/IMAGE_NAME:VERSION</em>
  ```
  {% endif %}
3. パッケージ用のDockerイメージをまだ構築していないなら、イメージを構築してください。 *OWNER*をリポジトリを所有しているユーザあるいはOrganizationのアカウント名で、*REPOSITORY*をプロジェクトを含むリポジトリ名で、*IMAGE_NAME*をパッケージもしくはイメージの名前で、*VERSION*をビルド時点のパッケージバージョンで置き換え、イメージが現在のワーキングディレクトリにないなら*PATH*をイメージへのパスで置き換えてください。
{% if enterpriseServerVersions contains currentVersion %} *HOSTNAME* with the hostname of {% data variables.product.product_location %},{% endif %} and *PATH* to the image if it isn't in the current working directory.
  {% if currentVersion == "free-pro-team@latest" %}
  ```shell
  $ docker build -t docker.pkg.github.com/<em>OWNER/REPOSITORY/IMAGE_NAME:VERSION</em> <em>PATH</em>
  ```
  {% else %}
  ```shell
  $ docker build -t docker.<em>HOSTNAME/OWNER/REPOSITORY/IMAGE_NAME:VERSION</em> <em>PATH</em>
  ```
  {% endif %}
4. イメージを
{% data variables.product.prodname_registry %}.
  {% if currentVersion == "free-pro-team@latest" %}
  ```shell
  $ docker push docker.pkg.github.com/<em>OWNER/REPOSITORY/IMAGE_NAME:VERSION</em>
  ```
  {% else %}
  ```shell
  $ docker push docker.<em>HOSTNAME/OWNER/REPOSITORY/IMAGE_NAME:VERSION</em>
  ```
  {% endif %}
  {% note %}

  **ノート:** イメージのプッシュは`IMAGE_NAME:SHA`を使うのではなく、`IMAGE_NAME:VERSION`を使って行ってください。

  {% endnote %}

#### Dockerイメージのプッシュの例

{% data reusables.package_registry.docker_registry_deprecation_status %}

`monalisa`イメージのバージョン1.0を、イメージIDを使って`octocat/octo-app`に公開できます。

{% if currentVersion == "free-pro-team@latest" %}
```shell
$ docker images

> REPOSITORY           TAG      IMAGE ID      CREATED      SIZE
> monalisa             1.0      c75bebcdd211  4 weeks ago  1.11MB

# <em>OWNER/REPO/IMAGE_NAME</em>でイメージにタグ付けする
$ docker tag c75bebcdd211 docker.pkg.github.com/octocat/octo-app/monalisa:1.0

# {% data variables.product.prodname_registry %}にイメージをプッシュ
$ docker push docker.pkg.github.com/octocat/octo-app/monalisa:1.0
```

{% else %}

```shell
$ docker images

> REPOSITORY           TAG      IMAGE ID      CREATED      SIZE
> monalisa             1.0      c75bebcdd211  4 weeks ago  1.11MB

# Tag the image with <em>OWNER/REPO/IMAGE_NAME</em>
$ docker tag c75bebcdd211 docker.<em>HOSTNAME</em>/octocat/octo-app/monalisa:1.0

# Push the image to {% data variables.product.prodname_registry %}
$ docker push docker.<em>HOSTNAME</em>/octocat/octo-app/monalisa:1.0
```

{% endif %}

新しいDockerイメージを初めて公開し、`monalisa`という名前にできます。

{% if currentVersion == "free-pro-team@latest" %}
```shell
# docker.pkg.github.com/<em>OWNER/REPOSITORY/IMAGE_NAME:VERSION</em> でイメージを構築
# Dockerfileはカレントワーキングディレクトリ (.)にあるものとする
$ docker build -t docker.pkg.github.com/octocat/octo-app/monalisa:1.0 .
$ docker build -t docker.pkg.github.com/octocat/octo-app/monalisa:1.0 .

# Push the image to {% data variables.product.prodname_registry %}
$ docker push docker.pkg.github.com/octocat/octo-app/monalisa:1.0
```

{% else %}
```shell
# Build the image with docker.<em>HOSTNAME/OWNER/REPOSITORY/IMAGE_NAME:VERSION</em>
# Assumes Dockerfile resides in the current working directory (.)
$ docker build -t docker.<em>HOSTNAME</em>/octocat/octo-app/monalisa:1.0 .

# Push the image to {% data variables.product.prodname_registry %}
$ docker push docker.<em>HOSTNAME</em>/octocat/octo-app/monalisa:1.0
```
{% endif %}

### Downloading an image

{% data reusables.package_registry.docker_registry_deprecation_status %}

You can use the `docker pull` command to install a docker image from {% data variables.product.prodname_registry %}, replacing *OWNER* with the name of the user or organization account that owns the repository, *REPOSITORY* with the name of the repository containing your project, *IMAGE_NAME* with name of the package or image,{% if enterpriseServerVersions contains currentVersion %}*HOSTNAME* with the host name of your {% data variables.product.prodname_ghe_server %} instance, {% endif %} and *TAG_NAME* with tag for the image you want to install.

{% if currentVersion == "free-pro-team@latest" %}
```shell
$ docker pull docker.pkg.github.com/<em>OWNER/REPOSITORY/IMAGE_NAME:TAG_NAME</em>
```
{% else %}
```shell
$ docker pull docker.<em>HOSTNAME/OWNER/REPOSITORY/IMAGE_NAME:TAG_NAME</em>
```
{% endif %}

{% note %}

**ノート:** イメージのプルは`IMAGE_NAME:SHA`を使うのではなく、`IMAGE_NAME:VERSION`を使って行ってください。

{% endnote %}

### 参考リンク

- [パッケージの削除](/packages/publishing-and-managing-packages/deleting-a-package/)
