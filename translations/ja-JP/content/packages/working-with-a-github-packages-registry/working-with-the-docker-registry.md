---
title: Dockerレジストリの利用
intro: '{% ifversion fpt %}Dockerレジストリは{% data variables.product.prodname_container_registry %}で置き換えられました。{% else %}{% data variables.product.prodname_registry %}Dockerレジストリを使ってDockerイメージをプッシュやプルできます。Dockerレジストリは、`https://docker.pkg.github.com`というパッケージの名前空間を使用します。{% endif %}'
product: '{% data reusables.gated-features.packages %}'
redirect_from:
  - /articles/configuring-docker-for-use-with-github-package-registry
  - /github/managing-packages-with-github-package-registry/configuring-docker-for-use-with-github-package-registry
  - /github/managing-packages-with-github-packages/configuring-docker-for-use-with-github-packages
  - /packages/using-github-packages-with-your-projects-ecosystem/configuring-docker-for-use-with-github-packages
  - /packages/guides/container-guides-for-github-packages/configuring-docker-for-use-with-github-packages
  - /packages/guides/configuring-docker-for-use-with-github-packages
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
shortTitle: Dockerレジストリ
---

<!-- Main versioning block. Short page for dotcom -->
{% ifversion fpt %}

{% data variables.product.prodname_dotcom %}のDockerレジストリ（これは`docker.pkg.github.com`という名前空間を使いました）は、{% data variables.product.prodname_container_registry %}（これは`https://ghcr.io`という名前空間を使います）で置き換えられました。 {% data variables.product.prodname_container_registry %}は、詳細な権限やDockerイメージに対するストレージに最適化といった利点を提供します。

以前はDockerレジストリに保存されていたDockerイメージは、自動的に{% data variables.product.prodname_container_registry %}に移行されます。 詳しい情報については「[Dockerレジストリから{% data variables.product.prodname_container_registry %}への移行](/packages/working-with-a-github-packages-registry/migrating-to-the-container-registry-from-the-docker-registry)」及び「[{% data variables.product.prodname_container_registry %}での作業](/packages/working-with-a-github-packages-registry/working-with-the-container-registry)」を参照してください。

{% else %}
<!-- The remainder of this article is displayed for releases that don't support the Container registry -->

{% data reusables.package_registry.packages-ghes-release-stage %}
{% data reusables.package_registry.packages-ghae-release-stage %}

{% data reusables.package_registry.default-name %} たとえば、{% data variables.product.prodname_dotcom %}は`OWNER/test`というリポジトリ内の`com.example:test`という名前のパッケージを公開します。

## Dockerサポートについて

Dockerイメージをインストールあるいは公開する際に、Dockerレジストリは現在Windowsイメージのような外部レイヤーをサポートしません。

{% ifversion ghes = 2.22 %}

Docker レジストリを {% data variables.product.prodname_registry %} で使用する前に、{% data variables.product.product_location %} のサイト管理者がインスタンスに対し Docker のサポートとand Subdomain Isolation を有効化する必要があります。 詳しい情報については、「[Enterprise 向けの GitHub Packages を管理する](/enterprise/admin/packages)」を参照してください。

{% endif %}

## {% data variables.product.prodname_registry %} への認証を行う

{% data reusables.package_registry.authenticate-packages %}

{% data reusables.package_registry.authenticate-packages-github-token %}

### 個人アクセストークンでの認証

{% data reusables.package_registry.required-scopes %}

`docker` loginコマンドを使い、Dockerで{% data variables.product.prodname_registry %}の認証を受けることができます。

クレデンシャルをセキュアに保つ貯めに、個人アクセストークンは自分のコンピュータのローカルファイルに保存し、ローカルファイルからトークンを読み取るDockerの`--password-stdin`フラグを使うことをおすすめします。

{% ifversion fpt %}
{% raw %}
  ```shell
  $ cat <em>~/TOKEN.txt</em> | docker login https://docker.pkg.github.com -u <em>USERNAME</em> --password-stdin
  ```
{% endraw %}
{% endif %}

{% ifversion ghes or ghae %}
{% ifversion ghes > 2.22 %}
パッケージの作成に関する詳しい情報については[maven.apache.orgのドキュメンテーション](https://maven.apache.org/guides/getting-started/maven-in-five-minutes.html)を参照してください。
{% endif %}
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
{% ifversion ghes > 2.22 %}
たとえば、以下の*OctodogApp*と*OctocatApp*は同じリポジトリに公開されます。

{% raw %}
 ```shell
 $ cat <em>~/TOKEN.txt</em> | docker login <em>HOSTNAME</em> -u <em>USERNAME</em> --password-stdin
```
{% endraw %}
{% endif %}

{% endif %}

この例の login コマンドを使うには、`USERNAME` を {% data variables.product.product_name %} ユーザ名に、{% ifversion ghes or ghae %}`HOSTNAME` を {% data variables.product.product_location %} の URL に、{% endif %}`~/TOKEN.txt` {% data variables.product.product_name %} の個人アクセストークンへのファイルパスに置き換えてください。

詳しい情報については「[Docker login](https://docs.docker.com/engine/reference/commandline/login/#provide-a-password-using-stdin)」を参照してください。

## イメージを公開する

{% data reusables.package_registry.docker_registry_deprecation_status %}

{% note %}

**注釈:** イメージ名には小文字のみを使用する必要があります。

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
2. DockerイメージIDを使い、Dockerイメージにタグ付けしてください。*OWNER*をリポジトリを所有するユーザもしくはOrganizationアカウントの名前で、*REPOSITORY*をプロジェクトを含むリポジトリの名前で、*IMAGE_NAME*をパッケージもしくはイメージの名前で、{% ifversion ghes or ghae %}*HOSTNAME*を{% data variables.product.product_location %}のホスト名で、{% endif %}*VERSION*をビルドの時点のパッケージバージョンで置き換えてください。
  {% ifversion fpt %}
  ```shell
  $ docker tag <em>IMAGE_ID</em> docker.pkg.github.com/<em>OWNER/REPOSITORY/IMAGE_NAME:VERSION</em>
  ```
  {% else %}
  {% ifversion ghes > 2.22 %}
  パッケージの作成に関する詳しい情報については[maven.apache.orgのドキュメンテーション](https://maven.apache.org/guides/getting-started/maven-in-five-minutes.html)を参照してください。
  {% endif %}
  ```shell
  $ docker tag <em>IMAGE_ID</em> docker.<em>HOSTNAME/OWNER/REPOSITORY/IMAGE_NAME:VERSION</em>
  ```
  {% ifversion ghes > 2.22 %}
  たとえば、以下の*OctodogApp*と*OctocatApp*は同じリポジトリに公開されます。
  ```shell
  $ docker tag <em>IMAGE_ID</em> <em>HOSTNAME/OWNER/REPOSITORY/IMAGE_NAME:VERSION</em>
  ```
  {% endif %}
  {% endif %}
3. まだパッケージのDockerイメージをビルドしていないならビルドしてください。*OWNER*をリポジトリを所有するユーザもしくはOrganizationアカウントの名前で、*REPOSITORY*をプロジェクトを含むリポジトリの名前で、*IMAGE_NAME*をパッケージもしくはイメージの名前で、*VERSION*をビルド時点のパッケージバージョンで、{% ifversion ghes or ghae %}*HOSTNAME*を{% data variables.product.product_location %}のホスト名で、{% endif %}もしもイメージが現在の作業ディレクトリ中になければ*PATH*をイメージへのパスで置き換えてください。
  {% ifversion fpt %}
  ```shell
  $ docker build -t docker.pkg.github.com/<em>OWNER/REPOSITORY/IMAGE_NAME:VERSION</em> <em>PATH</em>
  ```
  {% else %}
  {% ifversion ghes > 2.22 %}
  パッケージの作成に関する詳しい情報については[maven.apache.orgのドキュメンテーション](https://maven.apache.org/guides/getting-started/maven-in-five-minutes.html)を参照してください。
  {% endif %}
  ```shell
  $ docker build -t docker.<em>HOSTNAME/OWNER/REPOSITORY/IMAGE_NAME:VERSION</em> <em>PATH</em>
  ```
  {% ifversion ghes > 2.22 %}
  たとえば、以下の*OctodogApp*と*OctocatApp*は同じリポジトリに公開されます。
  ```shell
  $ docker build -t <em>HOSTNAME/OWNER/REPOSITORY/IMAGE_NAME:VERSION</em> <em>PATH</em>
  ```
  {% endif %}
  {% endif %}
4. {% data variables.product.prodname_registry %}にイメージを公開してください。
  {% ifversion fpt %}
  ```shell
  $ docker push docker.pkg.github.com/<em>OWNER/REPOSITORY/IMAGE_NAME:VERSION</em>
  ```
  {% else %}
  {% ifversion ghes > 2.22 %}
  パッケージの作成に関する詳しい情報については[maven.apache.orgのドキュメンテーション](https://maven.apache.org/guides/getting-started/maven-in-five-minutes.html)を参照してください。
  {% endif %}
  ```shell
  $ docker push docker.<em>HOSTNAME/OWNER/REPOSITORY/IMAGE_NAME:VERSION</em>
  ```
  {% ifversion ghes > 2.22 %}
  たとえば、以下の*OctodogApp*と*OctocatApp*は同じリポジトリに公開されます。
  ```shell
  $ docker push <em>HOSTNAME/OWNER/REPOSITORY/IMAGE_NAME:VERSION</em>
  ```
  {% endif %}
  {% endif %}
  {% note %}

  **ノート:** イメージのプッシュは`IMAGE_NAME:SHA`を使うのではなく、`IMAGE_NAME:VERSION`を使って行ってください。

  {% endnote %}

### Dockerイメージのプッシュの例

{% ifversion ghes > 2.22 %}
この例では、インスタンスの Subdomain Isolation が有効化されていると仮定します。
{% endif %}

`monalisa`イメージのバージョン1.0を、イメージIDを使って`octocat/octo-app`に公開できます。

{% ifversion fpt %}
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

{% ifversion fpt %}
```shell
# docker.pkg.github.com/<em>OWNER/REPOSITORY/IMAGE_NAME:VERSION</em> でイメージを構築
# Dockerfileはカレントワーキングディレクトリ (.)にあるものとする
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

## イメージをダウンロードする

{% data reusables.package_registry.docker_registry_deprecation_status %}

`docker pull`コマンドを使って、Dockerイメージを{% data variables.product.prodname_registry %}からインストールできます。*OWNER*をリポジトリを所有しているユーザあるいはOrganizationのアカウント名で、*REPOSITORY*をプロジェクトを含むリポジトリ名で、*IMAGE_NAME*をパッケージもしくはイメージの名前で、{% ifversion ghes or ghae %} *HOSTNAME*を{% data variables.product.product_location %}のホスト名で、{% endif %}<1>TAG_NAME*をインストールするイメージのタグで置き換えます。</p>

{% ifversion fpt %}
```shell
$ docker pull docker.pkg.github.com/<em>OWNER/REPOSITORY/IMAGE_NAME:TAG_NAME</em>
```
{% else %}
<!--Versioning out this "subdomain isolation enabled" line because it's the only option for GHES 2.22 so it can be misleading.-->
{% ifversion ghes > 2.22 %}
パッケージの作成に関する詳しい情報については[maven.apache.orgのドキュメンテーション](https://maven.apache.org/guides/getting-started/maven-in-five-minutes.html)を参照してください。
{% endif %}
```shell
$ docker pull docker.<em>HOSTNAME/OWNER/REPOSITORY/IMAGE_NAME:TAG_NAME</em>
```
{% ifversion ghes > 2.22 %}
たとえば、以下の*OctodogApp*と*OctocatApp*は同じリポジトリに公開されます。
```shell
$ docker pull <em>HOSTNAME/OWNER/REPOSITORY/IMAGE_NAME:TAG_NAME</em>
```
{% endif %}
{% endif %}

{% note %}

**ノート:** イメージのプルは`IMAGE_NAME:SHA`を使うのではなく、`IMAGE_NAME:VERSION`を使って行ってください。

{% endnote %}

## 参考リンク

- 「{% ifversion fpt or ghes > 3.0 %}[パッケージの削除と復元](/packages/learn-github-packages/deleting-and-restoring-a-package){% elsif ghes < 3.1 or ghae %}[パッケージの削除](/packages/learn-github-packages/deleting-a-package){% endif %}」

{% endif %}  <!-- End of main versioning block -->
