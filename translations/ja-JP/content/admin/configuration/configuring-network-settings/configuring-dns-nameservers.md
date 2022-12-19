---
title: DNSネームサーバの設定
intro: '{% data variables.product.prodname_ghe_server %} は、動的ホスト構成プロトコル (DHCP) のリースがネームサーバーを提供するときに、DNS 設定に対して DHCP を使用します。 ネームサーバがDHCPのリースで提供されない場合、あるいは特定のDNS設定を使う必要がある場合は、手動でネームサーバを指定できます。'
redirect_from:
  - /enterprise/admin/guides/installation/about-dns-nameservers
  - /enterprise/admin/installation/configuring-dns-nameservers
  - /enterprise/admin/configuration/configuring-dns-nameservers
  - /admin/configuration/configuring-dns-nameservers
versions:
  ghes: '*'
type: how_to
topics:
  - Enterprise
  - Fundamentals
  - Infrastructure
  - Networking
shortTitle: Configure DNS servers
ms.openlocfilehash: b01dc25b9002bf1feb672bbce597c8046b93f12f
ms.sourcegitcommit: 5f9527483381cfb1e41f2322f67c80554750a47d
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/11/2022
ms.locfileid: '147419714'
---
指定するネームサーバは、{% data variables.product.product_location %} のホスト名を解決する必要があります。

{% data reusables.enterprise_installation.changing-hostname-not-supported %}

## 仮想マシンのコンソールを使ったネームサーバの設定

{% data reusables.enterprise_installation.open-vm-console-start %}
2. インスタンスに対してネームサーバーを設定します。
{% data reusables.enterprise_installation.vm-console-done %}

## 管理シェルを使ったネームサーバの設定

{% data reusables.enterprise_installation.ssh-into-instance %}

2. ネームサーバーを編集するには、ビジュアル モードで `ghe-setup-network` コマンドを使います。 詳細については、「[コマンド ライン ユーティリティ](/admin/configuration/configuring-your-enterprise/command-line-utilities#ghe-setup-network)」を参照してください。

  ```shell
  ghe-setup-network -v
  ```

5. 新しいネームサーバー エントリを {% data variables.product.product_location %} に追加するには、次を実行します。

  ```shell
  sudo service resolvconf restart
  sudo service dnsmasq restart
  ```
