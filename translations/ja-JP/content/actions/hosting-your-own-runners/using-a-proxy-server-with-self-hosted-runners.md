---
title: セルフホストランナーとプロキシ サーバーを使う
intro: '{% data variables.product.product_name %}との通信にプロキシサーバーを使うよう、セルフホストランナーを設定できます。'
redirect_from:
  - /actions/automating-your-workflow-with-github-actions/using-a-proxy-server-with-self-hosted-runners
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: tutorial
shortTitle: Proxy servers
ms.openlocfilehash: e6c9d36b052627726f73f6a07d989a192cd1e738
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/10/2022
ms.locfileid: '145090436'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## 環境変数を利用したプロキシサーバーの設定

セルフホストランナーがプロキシサーバー経由で通信しなければならないのであれば、セルフホストランナーアプリケーションは以下の環境変数に設定されたプロキシの設定を利用します。

* `https_proxy`: HTTPS トラフィックのプロキシ URL。 必要な場合には、basic認証の認証情報を含めることもできます。 たとえば次のような点です。
  * `http://proxy.local`
  * `http://192.168.1.1:8080`
  * `http://username:password@proxy.local`
* `http_proxy`: HTTP トラフィックのプロキシ URL。 必要な場合には、basic認証の認証情報を含めることもできます。 たとえば次のような点です。
  * `http://proxy.local`
  * `http://192.168.1.1:8080`
  * `http://username:password@proxy.local`
* `no_proxy`: プロキシを使用しないホストのコンマ区切りのリスト。 `no_proxy` にはホスト名のみを指定できます。IP アドレスは使用できません。 次に例を示します。
  * `example.com`
  * `example.com,myserver.local:443,example.org`

プロキシの環境変数は、セルフホストランナーアプリケーションの起動時に読み込まれるので、これらの環境変数はセルフホストランナーアプリケーションを設定あるいは起動する前に設定しなければなりません。 プロキシの構成を変更した場合は、セルフホステッド ランナー アプリケーションを再起動する必要があります。

Windowsマシンで、プロキシ環境変数名で大文字小文字は区別されません。 Linux及びmacOSマシンで、環境変数はすべて小文字にすることをおすすめします。 Linux または macOS 上で、`https_proxy` と `HTTPS_PROXY` のように、小文字と大文字の両方の環境変数がある場合、セルフホステッド ランナー アプリケーションには小文字の環境変数が使用されます。

{% data reusables.actions.self-hosted-runner-ports-protocols %}

## .envファイルを使用したプロキシ設定

環境変数を設定することが現実的ではない場合、プロキシ設定変数をセルフホスト ランナー アプリケーションのディレクトリ内の _.env_ という名前のファイルで設定できます。 これはたとえば、ランナーアプリケーションをシステムアカウント下のサービスとして設定したい場合に必要になるかもしれません。 ランナー アプリケーションが起動すると、 _.env_ 内に設定されたプロキシ設定の変数が読み取られます。

_.env_ のプロキシ構成の例を次に示します。

```ini
https_proxy=http://proxy.local:8080
no_proxy=example.com,myserver.local:443
```

## Dockerコンテナのためのプロキシ設定

ワークフロー中でDockerコンテナアクションやサービスコンテナを使うなら、上記の環境変数の設定に加えて、プロキシサーバーを使うようDockerも設定しなければならないかもしれません。

必要な Docker 構成の詳細については、Docker のドキュメントの「[プロキシサーバを使うように Docker を設定](https://docs.docker.com/network/proxy/)」を参照してください。
