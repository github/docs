---
title: Dockerレジストリの利用
intro: '{% ifversion fpt or ghec %}Dockerレジストリは{% data variables.product.prodname_container_registry %}で置き換えられました。{% else %}{% data variables.product.prodname_registry %} Dockerレジストリを使ってDockerイメージをプッシュやプルできます。{% endif %}'
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
  ghec: '*'
shortTitle: Docker registry
ms.openlocfilehash: f5d37e74f93535fd48f3400ef0b504825aadc657
ms.sourcegitcommit: 770ed406ec075528ec9c9695aa4bfdc8c8b25fd3
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/12/2022
ms.locfileid: '147888453'
---
<!-- Main versioning block. Short page for dotcom -->
{% ifversion fpt or ghec %}

{% data variables.product.prodname_dotcom %} の Docker レジストリ (これは `docker.pkg.github.com` という名前空間を使いました) は、{% data variables.product.prodname_container_registry %} (これは `https://ghcr.io` という名前空間を使います) で置き換えられました。 {% data variables.product.prodname_container_registry %}は、詳細な権限やDockerイメージに対するストレージに最適化といった利点を提供します。

以前はDockerレジストリに保存されていたDockerイメージは、自動的に{% data variables.product.prodname_container_registry %}に移行されます。 詳しい情報については「[Docker レジストリから {% data variables.product.prodname_container_registry %} への移行](/packages/working-with-a-github-packages-registry/migrating-to-the-container-registry-from-the-docker-registry)」および「[{% data variables.product.prodname_container_registry %} での作業](/packages/working-with-a-github-packages-registry/working-with-the-container-registry)」を参照してください。

{% else %}
<!-- The remainder of this article is displayed for releases that don't support the Container registry -->

{% data reusables.package_registry.packages-ghes-release-stage %} {% data reusables.package_registry.packages-ghae-release-stage %}

{% data reusables.package_registry.admins-can-configure-package-types %}

## Dockerサポートについて

Dockerイメージをインストールあるいは公開する際に、Dockerレジストリは現在Windowsイメージのような外部レイヤーをサポートしません。

## {% data variables.product.prodname_registry %} への認証を行う

{% data reusables.package_registry.authenticate-packages %}

{% data reusables.package_registry.authenticate-packages-github-token %}

### 個人アクセストークンでの認証

{% data reusables.package_registry.required-scopes %}

`docker` login コマンドを使い、Docker で {% data variables.product.prodname_registry %} の認証を受けることができます。

クレデンシャルをセキュアに保つために、個人アクセス トークンは自分のコンピューターのローカル ファイルに保存し、ローカル ファイルからトークンを読み取る Docker の `--password-stdin` フラグを使うことをおすすめします。

{% ifversion fpt or ghec %} {% raw %}
  ```shell
  $ cat <em>~/TOKEN.txt</em> | docker login https://docker.pkg.github.com -u <em>USERNAME</em> --password-stdin
  ```
{% endraw %} {% endif %}

{% ifversion ghes or ghae %} {% ifversion ghes %} もしもインスタンスで Subdomain Isolation が有効化されているなら: {% endif %} {% raw %}
 ```shell
 $ cat <em>~/TOKEN.txt</em> | docker login docker.HOSTNAME -u <em>USERNAME</em> --password-stdin
```
{% endraw %} {% ifversion ghes %} インスタンスで Subdomain Isolation が無効になっている場合:

{% raw %}
 ```shell
 $ cat <em>~/TOKEN.txt</em> | docker login <em>HOSTNAME</em> -u <em>USERNAME</em> --password-stdin
```
{% endraw %} {% endif %}

{% endif %}

この例の login コマンドを使うには、`USERNAME` を {% data variables.product.product_name %} ユーザー名に{% ifversion ghes or ghae %}、`HOSTNAME` を {% data variables.product.product_location %}の URL に、{% endif %}`~/TOKEN.txt` を {% data variables.product.product_name %} の個人アクセス トークンへのファイル パスに置き換えてください。

詳細については、[Docker ログイン](https://docs.docker.com/engine/reference/commandline/login/#provide-a-password-using-stdin)に関するページを参照してください。

## イメージを公開する

{% data reusables.package_registry.docker_registry_deprecation_status %}

{% note %}

**注釈:** イメージ名には小文字のみを使用する必要があります。

{% endnote %}

{% data variables.product.prodname_registry %} は、リポジトリごとに複数の最上位 Docker イメージをサポートしています。 リポジトリは任意の数のイメージタグを持つことができます。 10GB以上のDockerイメージの公開やインストールの際には、サービスのパフォーマンスが低下するかもしれず、各レイヤーは5GBが上限です。 詳しくは、Docker ドキュメントの「[Docker タグ](https://docs.docker.com/engine/reference/commandline/tag/)」を参照してください。

{% data reusables.package_registry.viewing-packages %}

1. `docker images` を使って、Docker イメージのイメージ名と ID を確認してください。
  ```shell
  $ docker images
  > <&nbsp>
  > REPOSITORY        TAG        IMAGE ID       CREATED      SIZE
  > <em>IMAGE_NAME</em>        <em>VERSION</em>    <em>IMAGE_ID</em>       4 weeks ago  1.11MB
  ```
2. Docker イメージ ID を使い、Docker イメージにタグ付けしてください。*OWNER* をリポジトリを所有するユーザーもしくは Organization アカウントの名前で、*REPOSITORY* をプロジェクトを含むリポジトリの名前で、*IMAGE_NAME* をパッケージもしくはイメージの名前で、{% ifversion ghes or ghae %}*HOSTNAME* を {% data variables.product.product_location %} のホスト名で、{% endif %}*VERSION* をビルドの時点のパッケージ バージョンで置き換えてください。
  {% ifversion fpt or ghec %}
  ```shell
  $ docker tag <em>IMAGE_ID</em> docker.pkg.github.com/<em>OWNER/REPOSITORY/IMAGE_NAME:VERSION</em>
  ```
  {% else %} {% ifversion ghes %}インスタンスで Subdomain Isolation が有効になっている場合: {% endif %}
  ```shell
  $ docker tag <em>IMAGE_ID</em> docker.<em>HOSTNAME/OWNER/REPOSITORY/IMAGE_NAME:VERSION</em>
  ```
  {% ifversion ghes %}インスタンスで Subdomain Isolation が無効になっている場合:
  ```shell
  $ docker tag <em>IMAGE_ID</em> <em>HOSTNAME/OWNER/REPOSITORY/IMAGE_NAME:VERSION</em>
  ```
  {% endif %} {% endif %}
3. まだパッケージの Docker イメージをビルドしていないならビルドしてください。*OWNER* をリポジトリを所有するユーザーもしくは Organization アカウントの名前で、*REPOSITORY* をプロジェクトを含むリポジトリの名前で、*IMAGE_NAME* をパッケージもしくはイメージの名前で、*VERSION* をビルド時点のパッケージ バージョンで、{% ifversion ghes or ghae %}*HOSTNAME* を {% data variables.product.product_location %} のホスト名で、{% endif %}もしもイメージが現在の作業ディレクトリ中になければ *PATH* をイメージへのパスで置き換えてください。
  {% ifversion fpt or ghec %}
  ```shell
  $ docker build -t docker.pkg.github.com/<em>OWNER/REPOSITORY/IMAGE_NAME:VERSION</em> <em>PATH</em>
  ```
  {% else %} {% ifversion ghes %}インスタンスで Subdomain Isolation が有効になっている場合: {% endif %}
  ```shell
  $ docker build -t docker.<em>HOSTNAME/OWNER/REPOSITORY/IMAGE_NAME:VERSION</em> <em>PATH</em>
  ```
  {% ifversion ghes %}インスタンスで Subdomain Isolation が無効になっている場合:
  ```shell
  $ docker build -t <em>HOSTNAME/OWNER/REPOSITORY/IMAGE_NAME:VERSION</em> <em>PATH</em>
  ```
  {% endif %} {% endif %}
4. {% data variables.product.prodname_registry %}にイメージを公開してください。
  {% ifversion fpt or ghec %}
  ```shell
  $ docker push docker.pkg.github.com/<em>OWNER/REPOSITORY/IMAGE_NAME:VERSION</em>
  ```
  {% else %} {% ifversion ghes %}インスタンスで Subdomain Isolation が有効になっている場合: {% endif %}
  ```shell
  $ docker push docker.<em>HOSTNAME/OWNER/REPOSITORY/IMAGE_NAME:VERSION</em>
  ```
  {% ifversion ghes %}インスタンスで Subdomain Isolation が無効になっている場合:
  ```shell
  $ docker push <em>HOSTNAME/OWNER/REPOSITORY/IMAGE_NAME:VERSION</em>
  ```
  {% endif %} {% endif %} {% note %}

  **ノート:** イメージのプッシュは `IMAGE_NAME:SHA` を使うのではなく、`IMAGE_NAME:VERSION` を使って行ってください。

  {% endnote %}

### Dockerイメージのプッシュの例

{% ifversion ghes %} この例では、インスタンスの Subdomain Isolation が有効化されていると仮定します。
{% endif %}

`monalisa` イメージのバージョン 1.0 を、イメージ ID を使って `octocat/octo-app` に公開できます。

{% ifversion fpt or ghec %}
```shell
$ docker images

> REPOSITORY           TAG      IMAGE ID      CREATED      SIZE
> monalisa             1.0      c75bebcdd211  4 weeks ago  1.11MB

# Tag the image with <em>OWNER/REPO/IMAGE_NAME</em>
$ docker tag c75bebcdd211 docker.pkg.github.com/octocat/octo-app/monalisa:1.0

# Push the image to {% data variables.product.prodname_registry %}
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

新しい Docker イメージを初めて公開し、`monalisa` という名前にできます。

{% ifversion fpt or ghec %}
```shell
# Build the image with docker.pkg.github.com/<em>OWNER/REPOSITORY/IMAGE_NAME:VERSION</em>
# Assumes Dockerfile resides in the current working directory (.)
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

## 画像のダウンロード

{% data reusables.package_registry.docker_registry_deprecation_status %}

`docker pull` コマンドを使って、Docker イメージを {% data variables.product.prodname_registry %} からインストールできます。*OWNER* をリポジトリを所有しているユーザーあるいは Organization のアカウント名で、*REPOSITORY* をプロジェクトを含むリポジトリ名で、*IMAGE_NAME* をパッケージもしくはイメージの名前で、{% ifversion ghes or ghae %}*HOSTNAME* を {% data variables.product.product_location %} のホスト名で、{% endif %}*TAG_NAME* をインストールするイメージのタグで置き換えます。

{% ifversion fpt or ghec %}
```shell
$ docker pull docker.pkg.github.com/<em>OWNER/REPOSITORY/IMAGE_NAME:TAG_NAME</em>
```
{% else %}
<!--Versioning out this "subdomain isolation enabled" line because it's the only option for GHES 2.22 so it can be misleading.-->
{% ifversion ghes %}インスタンスで Subdomain Isolation が有効になっている場合: {% endif %}
```shell
$ docker pull docker.<em>HOSTNAME/OWNER/REPOSITORY/IMAGE_NAME:TAG_NAME</em>
```
{% ifversion ghes %}インスタンスで Subdomain Isolation が無効になっている場合:
```shell
$ docker pull <em>HOSTNAME/OWNER/REPOSITORY/IMAGE_NAME:TAG_NAME</em>
```
{% endif %} {% endif %}

{% note %}

**ノート:** イメージのプルは `IMAGE_NAME:SHA` を使うのではなく、`IMAGE_NAME:VERSION` を使って行ってください。

{% endnote %}

## 参考資料

- 「[パッケージを削除および復元する](/packages/learn-github-packages/deleting-and-restoring-a-package)」

{% endif %}  <!-- End of main versioning block -->
