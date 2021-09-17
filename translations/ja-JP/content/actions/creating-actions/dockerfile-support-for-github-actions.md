---
title: GitHub ActionsのためのDockerfileサポート
shortTitle: Docker
intro: Dockerコンテナアクション用の`Dockerfile`を作成する際には、いくつかのDockerの命令がGitHub Actionsやアクションのメタデータファイルとどのように関わるのかを知っておく必要があります。
product: '{% data reusables.gated-features.actions %}'
redirect_from:
  - /actions/building-actions/dockerfile-support-for-github-actions
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
  github-ae: '*'
type: reference
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}
{% data reusables.actions.ae-beta %}

### Dockerfileの命令について

`Dockerfile`には、Dockerコンテナの内容と起動時の動作を定義する命令と引数が含まれています。 Dockerがサポートしている命令に関する詳しい情報については、Dockerのドキュメンテーション中の「[Dockerfile のリファレンス](https://docs.docker.com/engine/reference/builder/)」を参照してください。

### Dockerfileの命令とオーバーライド

Dockerの命令の中にはGitHub Actionと関わるものがあり、アクションのメタデータファイルはDockerの命令のいくつかをオーバーライドできます。 予期しない動作を避けるために、Dockerfileが{% data variables.product.prodname_actions %}とどのように関わるかについて馴染んでおいてください。

#### USER

DockerアクションはデフォルトのDockerユーザ（root）で実行されなければなりません。 `GITHUB_WORKSPACE`にアクセスできなくなってしまうので、`Dockerfile`中では`USER`命令を使わないでください。 詳しい情報については、「[環境変数の利用](/actions/configuring-and-managing-workflows/using-environment-variables)」と、Dockerのドキュメンテーション中の[USERのリファレンス](https://docs.docker.com/engine/reference/builder/#user)を参照してください。

#### FROM

`Dockerfile`ファイル中の最初の命令は`FROM`でなければなりません。これは、Dockerのベースイメージを選択します。 詳しい情報については、Dockerのドキュメンテーション中の[FROMのリファレンス](https://docs.docker.com/engine/reference/builder/#from)を参照してください。

`FROM`引数の設定にはいくつかのベストプラクティスがあります。

- 公式のDockerイメージを使うことをおすすめします。 たとえば`python`や`ruby`です。
- バージョンタグが存在する場合は使ってください。メジャーバージョンも含めることが望ましいです。 たとえば`node:latest`よりも`node:10`を使ってください。
- [Debian](https://www.debian.org/)オペレーティングシステムに基づくDockerイメージを使うことをおすすめします。

#### WORKDIR

{% data variables.product.product_name %}は、ワーキングディレクトリのパスを環境変数の`GITHUB_WORKSPACE`に設定します。 `Dockerfile`中では`WORKDIR`命令を使わないことをおすすめします。 アクションが実行される前に、{% data variables.product.product_name %}は`GITHUB_WORKSPACE`ディレクトリを、Dockerイメージ内にあったその場所になにがあってもその上にマウントし、`GITHUB_WORKSPACE`をワーキングディレクトリとして設定します。 詳しい情報については「[環境変数の利用](/actions/configuring-and-managing-workflows/using-environment-variables)」と、Dockerのドキュメンテーション中の[WORKDIRのリファレンス](https://docs.docker.com/engine/reference/builder/#workdir)を参照してください。

#### ENTRYPOINT

アクションのメタデータファイル中で`entrypoint`を定義すると、それは`Dockerfile`中で定義された`ENTRYPOINT`をオーバーライドします。 詳しい情報については「[{% data variables.product.prodname_actions %}のメタデータ構文](/actions/creating-actions/metadata-syntax-for-github-actions/#runsentrypoint)」を参照してください。

Dockerの`ENTRYPOINT`命令には、_shell_形式と_exec_形式があります。 Dockerの`ENTRYPOINT`のドキュメンテーションは、`ENTRYPOINT`の_exec_形式を使うことを勧めています。 _exec_および_shell_形式に関する詳しい情報については、Dockerのドキュメンテーション中の[ENTRYPOINTのリファレンス](https://docs.docker.com/engine/reference/builder/#entrypoint)を参照してください。

_exec_形式の`ENTRYPOINT`命令を使うようにコンテナを設定した場合、アクションのメタデータファイル中に設定された`args`はコマンドシェル内では実行されません。 アクションの`args`に環境変数が含まれている場合、その変数は置換されません。 たとえば、以下の_exec_形式は`$GITHUB_SHA`に保存された値を出力せず、代わりに`"$GITHUB_SHA"`を出力します。

```dockerfile
ENTRYPOINT ["echo $GITHUB_SHA"]
```

 変数の置換をさせたい場合は、_shell_形式を使うか、直接シェルを実行してください。 たとえば、以下の_exec_形式を使えば、シェルを実行して環境変数`GITHUB_SHA`に保存された値を出力できます。

```dockerfile
ENTRYPOINT ["sh", "-c", "echo $GITHUB_SHA"]
```

 アクションのメタデータファイルに定義された`args`を、`ENTRYPOINT`中で_exec_形式を使うDockerコンテナに渡すには、`ENTRYPOINT`命令から呼ぶ`entrypoint.sh`というシェルスクリプトを作成することをおすすめします。

##### *Dockerfile*の例

```dockerfile
# コードを実行するコンテナイメージ
FROM debian:stretch-20210721-slim

# アクションのリポジトリからコードをコンテナのファイルシステムパス `/` にコピー
COPY entrypoint.sh /entrypoint.sh

# Dockerコンテナの起動時に `entrypoint.sh` を実行
ENTRYPOINT ["/entrypoint.sh"]
```

##### *entrypoint.sh*ファイルの例

上のDockerfileを使って、{% data variables.product.product_name %}はアクションのメタデータファイルに設定された`args`を、`entrypoint.sh`の引数として送ります。 `#!/bin/sh`[シバン](https://ja.wikipedia.org/wiki/シバン_(Unix))を`entrypoint.sh`ファイルの先頭に追加し、システムの[POSIX](https://ja.wikipedia.org/wiki/POSIX)準拠のシェルを明示的に使ってください。

``` sh
#!/bin/sh

# `$*`は`array`内で渡された`args`を個別に展開するか、
# 空白で区切られた文字列中の`args`を分割します。
sh -c "echo $*"
```

コードは実行可能になっていなければなりません。 `entrypoint.sh`ファイルをワークフロー中で使う前に、`execute`権限が付けられていることを確認してください。 この権限は、ターミナルから以下のコマンドで変更できます。
  ``` sh
  chmod +x entrypoint.sh
  ```

`ENTRYPOINT`シェルスクリプトが実行可能ではなかった場合、以下のようなエラーが返されます。

``` sh
Error response from daemon: OCI runtime create failed: container_linux.go:348: starting container process caused "exec: \"/entrypoint.sh\": permission denied": unknown
```

#### CMD

アクションのメタデータファイル中で`args`を定義すると、`args`は`Dockerfile`中で指定された`CMD`命令をオーバーライドします。 詳しい情報については「[{% data variables.product.prodname_actions %}のメタデータ構文](/actions/creating-actions/metadata-syntax-for-github-actions#runsargs)」を参照してください。

`Dockerfile`中で`CMD`を使っているなら、以下のガイドラインに従ってください。

{% data reusables.github-actions.dockerfile-guidelines %}

### サポートされているLinuxの機能

{% data variables.product.prodname_actions %}は、DockerがサポートするデフォルトのLinuxの機能をサポートします。 機能の追加や削除はできません。 DockerがサポートするデフォルトのLinuxの機能に関する詳しい情報については、Dockerのドキュメンテーション中の「[ Runtime privilege and Linux capabilities](https://docs.docker.com/engine/reference/run/#runtime-privilege-and-linux-capabilities)」を参照してください。 Linuxの機能についてさらに学ぶには、Linuxのman-pageの"[ Overview of Linux capabilities](http://man7.org/linux/man-pages/man7/capabilities.7.html)"を参照してください。
