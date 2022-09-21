---
title: GitHub ActionsのためのDockerfileサポート
shortTitle: Dockerfile support
intro: Docker コンテナー アクション用の `Dockerfile` を作成する際には、いくつかの Docker の命令が GitHub Actions やアクションのメタデータ ファイルとどのように関わるのかを知っておく必要があります。
redirect_from:
  - /actions/building-actions/dockerfile-support-for-github-actions
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: reference
ms.openlocfilehash: 6e061e479f4988398cbdc92114e387a3055734af
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/10/2022
ms.locfileid: '145088647'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## Dockerfileの命令について

`Dockerfile` には、Docker コンテナーの内容と起動時の動作を定義する命令と引数が含まれています。 Docker がサポートする手順の詳細については、Docker ドキュメントの「[Dockerfile リファレンス](https://docs.docker.com/engine/reference/builder/)」を参照してください。

## Dockerfileの命令とオーバーライド

Dockerの命令の中にはGitHub Actionsと関わるものがあり、アクションのメタデータファイルはDockerの命令のいくつかをオーバーライドできます。 予期しない動作を避けるために、Dockerfileが{% data variables.product.prodname_actions %}とどのように関わるかについて馴染んでおいてください。

### User

DockerアクションはデフォルトのDockerユーザ（root）で実行されなければなりません。 `Dockerfile` では `USER` 命令を使用しないでください。そうしないと、`GITHUB_WORKSPACE` にアクセスできなくなります。 詳細については、Docker ドキュメントの "[環境変数の使用](/actions/configuring-and-managing-workflows/using-environment-variables)" に関するページと [USER リファレンス](https://docs.docker.com/engine/reference/builder/#user)を参照してください。

### FROM

`Dockerfile` の最初の命令は、`FROM` とする必要があります。これにより、Docker ベース イメージが選択されます。 詳細については、Docker ドキュメントの [FROM リファレンス](https://docs.docker.com/engine/reference/builder/#from)を参照してください。

`FROM` 引数の設定には、いくつかのベストプラクティスがあります。

- 公式のDockerイメージを使うことをおすすめします。 たとえば、`python` または `ruby` です。
- バージョンタグが存在する場合は使ってください。メジャーバージョンも含めることが望ましいです。 たとえば、`node:latest` の代わりに `node:10` を使用します。
- [Debian](https://www.debian.org/) オペレーティング システムに基づいて Docker イメージを使用することをお勧めします。

### WORKDIR

{% data variables.product.product_name %} では、ワーキング ディレクトリのパスを環境変数 `GITHUB_WORKSPACE` に設定します。 `Dockerfile` では、`WORKDIR` 命令を使用しないことをお勧めします。 アクションが実行される前に、{% data variables.product.product_name %} では、`GITHUB_WORKSPACE` ディレクトリを、Docker イメージ内にあったその場所になにがあってもその上にマウントし、`GITHUB_WORKSPACE` をワーキング ディレクトリとして設定します。 詳細については、"[Docker ドキュメントの環境変数の使用](/actions/configuring-and-managing-workflows/using-environment-variables)" に関するページと [WORKDIR リファレンス](https://docs.docker.com/engine/reference/builder/#workdir)を参照してください。

### ENTRYPOINT

アクションのメタデータ ファイルで `entrypoint` を定義すると、それによって、`Dockerfile` 内に定義されている `ENTRYPOINT` がオーバーライドされます。 詳細については、"[{% data variables.product.prodname_actions %} のメタデータ構文](/actions/creating-actions/metadata-syntax-for-github-actions/#runsentrypoint)" に関するページを参照してください。

Docker の `ENTRYPOINT` 命令には、_shell_ 形式と _exec_ 形式があります。 Docker `ENTRYPOINT` ドキュメントでは、`ENTRYPOINT` 命令の _exec_ 形式を使用することを推奨しています。 _exec_ 形式と _shell_ 形式の詳細については、Docker ドキュメントの [ENTRYPOINT リファレンス](https://docs.docker.com/engine/reference/builder/#entrypoint)を参照してください。

Dockerfile でエントリポイントを指定する場合は、`WORKDIR` を使用しないでください。 代わりに、絶対パスを使用する必要があります。 詳細については、「[WORKDIR](#workdir)」を参照してください。

`ENTRYPOINT` 命令の _exec_ 形式を使用するようにコンテナーを構成した場合、アクションのメタデータ ファイルで構成された `args` はコマンド シェルで実行されません。 アクションの `args` に環境変数が含まれている場合、その変数は置換されません。 たとえば、次の _exec_ 形式を使用すると、`$GITHUB_SHA` に格納されている値は出力されませんが、代わりに `"$GITHUB_SHA"` が出力されます。

```dockerfile
ENTRYPOINT ["echo $GITHUB_SHA"]
```

 変数の置換が必要な場合は、_shell_ 形式を使用するか、直接シェルを実行してください。 たとえば、以下の _exec_ 形式を使用すれば、シェルを実行して環境変数 `GITHUB_SHA` に保存された値を出力できます。

```dockerfile
ENTRYPOINT ["sh", "-c", "echo $GITHUB_SHA"]
```

 アクションのメタデータ ファイルで定義されている `args` を、`ENTRYPOINT` で _exec_ 形式を使用している Docker コンテナーに指定するには、`ENTRYPOINT` 命令から呼び出す `entrypoint.sh` というシェル スクリプトを作成することをお勧めします。

#### *Dockerfile* の例

```dockerfile
# Container image that runs your code
FROM debian:9.5-slim

# Copies your code file from your action repository to the filesystem path `/` of the container
COPY entrypoint.sh /entrypoint.sh

# Executes `entrypoint.sh` when the Docker container starts up
ENTRYPOINT ["/entrypoint.sh"]
```

#### *entrypoint.sh* ファイルの例

上の Dockerfile を使用すると、{% data variables.product.product_name %} によって、アクションのメタデータ ファイル内に引数として構成された `args`が `entrypoint.sh` に送信されます。 `entrypoint.sh` ファイルの先頭に `#!/bin/sh` [shebang](https://en.wikipedia.org/wiki/Shebang_(Unix)) を追加して、システムの [POSIX](https://en.wikipedia.org/wiki/POSIX)準拠のシェルを明示的に使用します。

``` sh
#!/bin/sh

# `$*` expands the `args` supplied in an `array` individually
# or splits `args` in a string separated by whitespace.
sh -c "echo $*"
```

コードは実行可能になっていなければなりません。 ワークフローで使用する前に、`entrypoint.sh` ファイルに `execute` アクセス許可があることを確認します。 この権限は、ターミナルから以下のコマンドで変更できます。
  ``` sh
  chmod +x entrypoint.sh
  ```

`ENTRYPOINT` シェル スクリプトが実行可能ではなかった場合、以下のようなエラーが返されます。

``` sh
Error response from daemon: OCI runtime create failed: container_linux.go:348: starting container process caused "exec: \"/entrypoint.sh\": permission denied": unknown
```

### CMD

アクションのメタデータ ファイルで `args` を定義すると、`args` によって、`Dockerfile` で指定された `CMD` 命令がオーバーライドされます。 詳細については、"[{% data variables.product.prodname_actions %} のメタデータ構文](/actions/creating-actions/metadata-syntax-for-github-actions#runsargs)" に関するページを参照してください。

`Dockerfile` で `CMD` を使用する場合は、次のガイドラインに従ってください。

{% data reusables.actions.dockerfile-guidelines %}

## サポートされているLinuxの機能

{% data variables.product.prodname_actions %}は、DockerがサポートするデフォルトのLinuxの機能をサポートします。 機能の追加や削除はできません。 Docker でサポートされる既定の Linux 機能の詳細については、Docker ドキュメントの「[ランタイム特権と Linux 機能](https://docs.docker.com/engine/reference/run/#runtime-privilege-and-linux-capabilities)」を参照してください。 Linux 機能の詳細については、Linux の man ページの "[Linux 機能の概要](http://man7.org/linux/man-pages/man7/capabilities.7.html)" に関するページを参照してください。
