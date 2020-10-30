---
title: セルフホストランナーとプロキシサーバーを使う
intro: '{% data variables.product.product_name %}との通信にプロキシサーバーを使うよう、セルフホストランナーを設定できます。'
redirect_from:
  - /actions/automating-your-workflow-with-github-actions/using-a-proxy-server-with-self-hosted-runners
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
---

{% data reusables.actions.enterprise-beta %}
{% data variables.product.prodname_dotcom %}は、macOSランナーのホストに[MacStadium](https://www.macstadium.com/)を使用しています。

### 環境変数を利用したプロキシサーバーの設定

セルフホストランナーがプロキシサーバー経由で通信しなければならないのであれば、セルフホストランナーアプリケーションは以下の環境変数に設定されたプロキシの設定を利用します。

* `https_proxy`: HTTPSトラフィックのためのプロキシURL。 必要な場合には、basic認証の認証情報を含めることもできます。 例:
  * `http://proxy.local`
  * `http://192.168.1.1:8080`
  * `http://username:password@proxy.local`
* `http_proxy`: HTTPトラフィックのためのプロキシURL。 必要な場合には、basic認証の認証情報を含めることもできます。 例:
  * `http://proxy.local`
  * `http://192.168.1.1:8080`
  * `http://username:password@proxy.local`
* `no_proxy`: カンマで区切られた、プロキシを使わないホストのリスト。 `no_proxy`ではホスト名のみが許され、IPアドレスは使用できません。 例:
  * `example.com`
  * `example.com,myserver.local:443,example.org`

プロキシの環境変数は、セルフホストランナーアプリケーションの起動時に読み込まれるので、これらの環境変数はセルフホストランナーアプリケーションを設定あるいは起動する前に設定しなければなりません。 プロキシの設定が変更された場合には、セルフホストランナーアプリケーションを再起動しなければなりません。

Windowsマシンで、プロキシ環境変数名で大文字小文字は区別されません。 Linux及びmacOSマシンで、環境変数はすべて小文字にすることをおすすめします。 たとえば`https_proxy`と`HTTPS_PROXY`といったように、大文字と小文字の環境変数をLinuxもしくはmacOSで使った場合、セルフホストランナーアプリケーションは小文字の環境変数を使います。

### .envファイルを使用したプロキシ設定

環境変数を設定することが現実的ではない場合、プロキシ設定変数をセルフホストランナーアプリケーションのディレクトリ中の_.env_という名前のファイルで設定できます。 これはたとえば、ランナーアプリケーションをシステムアカウント下のサービスとして設定したい場合に必要になるかもしれません。 ランナーアプリケーションが起動すると、_.env_中に設定されたプロキシ設定の変数を読み取ります。

以下に_.env_プロキシ設定の例を示します。

```
https_proxy=http://proxy.local:8080
no_proxy=example.com,myserver.local:443
```

### Dockerコンテナのためのプロキシ設定

ワークフロー中でDockerコンテナアクションやサービスコンテナを使うなら、上記の環境変数の設定に加えて、プロキシサーバーを使うようDockerも設定しなければならないかもしれません。

必要なDockerの設定に関する情報については、Dockerのドキュメンテーションの「[プロキシサーバーを使うようDockerを設定する](https://docs.docker.com/network/proxy/)」を参照してください。
