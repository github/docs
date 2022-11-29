---
title: High Availability設定のリカバリ
intro: '{% data variables.product.prodname_ghe_server %} アプライアンスにフェイルオーバーした後は、単一のアプライアンスに頼るのではなく、できるだけ早く冗長性を取り戻す必要があります。'
redirect_from:
  - /enterprise/admin/installation/recovering-a-high-availability-configuration
  - /enterprise/admin/enterprise-management/recovering-a-high-availability-configuration
  - /admin/enterprise-management/recovering-a-high-availability-configuration
versions:
  ghes: '*'
type: how_to
topics:
  - Enterprise
  - High availability
  - Infrastructure
shortTitle: Recover a HA configuration
ms.openlocfilehash: a61cdf4b3f7338c986112f67a0ca66be33d75c5f
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/05/2022
ms.locfileid: '146332769'
---
## 高可用性構成の復旧について

フェイルオーバーが計画済みのものだったり、アプライアンスの健全性に関係ないものである場合、以前のプライマリアプライアンスを新しいレプリカアプライアンスとして使用できます。 フェイルオーバーがプライマリアプライアンスの問題に関係しているなら、新しいレプリカアプライアンスを作成する方が良いでしょう。 詳しくは、「[高可用性レプリカの作成](/enterprise/admin/guides/installation/creating-a-high-availability-replica/)」を参照してください。

{% warning %}

**警告:** 以前のプライマリアプライアンスを新しいレプリカとして構成する前に、メンテナンスモードを有効にする必要があります。 メンテナンスモードを有効にしないと、運用停止が発生します。

{% endwarning %}

## 以前のプライマリアプライアンスを新しいレプリカとして設定する

1. SSH を使用して以前のプライマリアプライアンスの IP アドレスに接続します。
  ```shell
  $ ssh -p 122 admin@<em>FORMER PRIMARY IP</em>
  ```
1. 以前のプライマリアプライアンスでメンテナンスモードを有効にします。 詳細については、「[メンテナンスモードの有効化とスケジューリング](/admin/configuration/configuring-your-enterprise/enabling-and-scheduling-maintenance-mode)」を参照してください。
1. 以前のプライマリアプライアンスで、以前のレプリカの IP アドレスを指定して `ghe-repl-setup` を実行します。
  ```shell
  $ ghe-repl-setup <em>FORMER REPLICA IP</em>
  ```
{% data reusables.enterprise_installation.add-ssh-key-to-primary %}
1. 新しいレプリカに対して、新しいプライマリへの接続を確認してレプリカモードを有効にするには、`ghe-repl-setup` をもう一度実行します。
  ```shell
  $ ghe-repl-setup <em>FORMER REPLICA IP</em>
  ```
{% data reusables.enterprise_installation.replication-command %}
