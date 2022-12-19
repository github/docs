---
title: 組み込みファイアウォールのルール設定
intro: '{% data variables.product.product_location %} の既定のファイアウォール規則とカスタマイズされたルールを見ることができます。'
redirect_from:
  - /enterprise/admin/guides/installation/configuring-firewall-settings
  - /enterprise/admin/installation/configuring-built-in-firewall-rules
  - /enterprise/admin/configuration/configuring-built-in-firewall-rules
  - /admin/configuration/configuring-built-in-firewall-rules
versions:
  ghes: '*'
type: how_to
topics:
  - Enterprise
  - Fundamentals
  - Infrastructure
  - Networking
shortTitle: Configure firewall rules
ms.openlocfilehash: 7492f69c6b334847229c76f7462beaabbc4154a2
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/05/2022
ms.locfileid: '145120790'
---
## {% data variables.product.product_location %} のファイアウォールについて

{% data variables.product.prodname_ghe_server %} は、仮想アプライアンスで Ubuntu の Uncomplicated Firewall (UFW) を使用します。 詳しくは、Ubuntu のドキュメントの「[UFW](https://help.ubuntu.com/community/UFW)」をご覧ください。 {% data variables.product.prodname_ghe_server %} は、許可されたサービスのファイアウォールのホワイトリストをリリースごとに自動的に更新します。

{% data variables.product.prodname_ghe_server %} をインストールすると、接続を受け入れるために必要なすべてのネットワークポートが自動的に開かれます。 すべての不必要なポートは自動的に `deny` に構成され、既定の送信ポリシーは `allow` に構成されます。 すべての新しい接続について、ステートフルな追跡が有効になります。これらは、通常、`SYN` ビットがセットされているネットワーク パケットです。 詳細については、「[ネットワーク ポート](/enterprise/admin/guides/installation/network-ports)」を参照してください。

UFW ファイアウォールは、{% data variables.product.prodname_ghe_server %} が正しく動作するのに必要となる他のいくつかのポートも開きます。 UFW のルール セットについて詳しくは、[UFW の README](https://bazaar.launchpad.net/~jdstrand/ufw/0.30-oneiric/view/head:/README#L213) をご覧ください。

## デフォルトのファイアウォールルールの表示

{% data reusables.enterprise_installation.ssh-into-instance %}
2. 既定のファイアウォール ルールを表示するには、`sudo ufw status` コマンドを使います。 次のような出力が表示されます。
  ```shell
  $ sudo ufw status
  > Status: active
  > To                         Action      From
  > --                         ------      ----
  > ghe-1194                   ALLOW       Anywhere
  > ghe-122                    ALLOW       Anywhere
  > ghe-161                    ALLOW       Anywhere
  > ghe-22                     ALLOW       Anywhere
  > ghe-25                     ALLOW       Anywhere
  > ghe-443                    ALLOW       Anywhere
  > ghe-80                     ALLOW       Anywhere
  > ghe-8080                   ALLOW       Anywhere
  > ghe-8443                   ALLOW       Anywhere
  > ghe-9418                   ALLOW       Anywhere
  > ghe-1194 (v6)              ALLOW       Anywhere (v6)
  > ghe-122 (v6)               ALLOW       Anywhere (v6)
  > ghe-161 (v6)               ALLOW       Anywhere (v6)
  > ghe-22 (v6)                ALLOW       Anywhere (v6)
  > ghe-25 (v6)                ALLOW       Anywhere (v6)
  > ghe-443 (v6)               ALLOW       Anywhere (v6)
  > ghe-80 (v6)                ALLOW       Anywhere (v6)
  > ghe-8080 (v6)              ALLOW       Anywhere (v6)
  > ghe-8443 (v6)              ALLOW       Anywhere (v6)
  > ghe-9418 (v6)              ALLOW       Anywhere (v6)
  ```

## カスタムのファイアウォールルールの追加

{% warning %}

**警告:** 既知の動作状態にリセットすることが必要になったときのため、カスタム ファイアウォール ルールを追加する前に、現在のルールをバックアップしてください。 サーバーからロックアウトされている場合には、{% data variables.contact.contact_ent_support %}に問い合わせて、元のファイアウォールルールを再設定してください。 元のファイアウォールルールを復元すると、サーバーでダウンタイムが発生します。

{% endwarning %}

1. カスタムのファイアウォールルールを設定する。
2. `status numbered` コマンドを使って、新しい各ルールの状態を確認します。
  ```shell
  $ sudo ufw status numbered
  ```
3. カスタム ファイアウォール ルールをバックアップするには、`cp` コマンドを使ってルールを新しいファイルに移動します。
  ```shell
  $ sudo cp -r /etc/ufw ~/ufw.backup
  ```

{% data variables.product.product_location %} をアップグレードした後で、カスタム ファイアウォール ルールを適用し直す必要があります。 ファイアウォールのカスタムルールを再適用するためのスクリプトを作成することをお勧めします。

## デフォルトのファイアウォールルールのリストア

ファイアウォールルールの変更後に何か問題が生じたなら、オリジナルのバックアップからルールをリセットできます。

{% warning %}

**警告:** 元のルールをバックアップしないでファイアウォールを変更した場合は、{% data variables.contact.contact_ent_support %} に連絡してサポートを求めてください。

{% endwarning %}

{% data reusables.enterprise_installation.ssh-into-instance %}
2. 前にバックアップしたルールを復元するには、`cp` コマンドでそれらをファイアウォールにコピーして戻します。
  ```shell
  $ sudo cp -f ~/ufw.backup/*rules /etc/ufw
  ```
3. `systemctl` コマンドを使ってファイアウォールを再起動します。
  ```shell
  $ sudo systemctl restart ufw
  ```
4. `ufw status` コマンドで、ルールが既定の状態に戻っていることを確認します。
  ```shell
  $ sudo ufw status
  > Status: active
  > To                         Action      From
  > --                         ------      ----
  > ghe-1194                   ALLOW       Anywhere
  > ghe-122                    ALLOW       Anywhere
  > ghe-161                    ALLOW       Anywhere
  > ghe-22                     ALLOW       Anywhere
  > ghe-25                     ALLOW       Anywhere
  > ghe-443                    ALLOW       Anywhere
  > ghe-80                     ALLOW       Anywhere
  > ghe-8080                   ALLOW       Anywhere
  > ghe-8443                   ALLOW       Anywhere
  > ghe-9418                   ALLOW       Anywhere
  > ghe-1194 (v6)              ALLOW       Anywhere (v6)
  > ghe-122 (v6)               ALLOW       Anywhere (v6)
  > ghe-161 (v6)               ALLOW       Anywhere (v6)
  > ghe-22 (v6)                ALLOW       Anywhere (v6)
  > ghe-25 (v6)                ALLOW       Anywhere (v6)
  > ghe-443 (v6)               ALLOW       Anywhere (v6)
  > ghe-80 (v6)                ALLOW       Anywhere (v6)
  > ghe-8080 (v6)              ALLOW       Anywhere (v6)
  > ghe-8443 (v6)              ALLOW       Anywhere (v6)
  > ghe-9418 (v6)              ALLOW       Anywhere (v6)
  ```
