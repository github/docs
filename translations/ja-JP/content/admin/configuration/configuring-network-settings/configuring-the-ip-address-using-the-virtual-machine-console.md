---
title: 仮想マシンのコンソールを使ったIPアドレスの設定
intro: 'デフォルトでは、{% data variables.product.prodname_ghe_server %} は動的ホスト構成プロトコル (DHCP) を通じてネットワーク設定を取得します。 利用するプラットフォームでサポートされている場合、あるいはDHCPが利用できない場合、ネットワーク設定を仮想マシンのコンソールを使って設定することもできます。'
redirect_from:
  - /enterprise/admin/installation/configuring-the-ip-address-using-the-virtual-machine-console
  - /enterprise/admin/configuration/configuring-the-ip-address-using-the-virtual-machine-console
  - /admin/configuration/configuring-the-ip-address-using-the-virtual-machine-console
versions:
  ghes: '*'
type: how_to
topics:
  - Enterprise
  - Fundamentals
  - Infrastructure
  - Networking
shortTitle: Set the IP using the console
ms.openlocfilehash: db183677409757e516515a5ac7def5a70affd01f
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/10/2022
ms.locfileid: '145120773'
---
{% note %}

**注:** {% data variables.product.prodname_ghe_server %} へのネットワーク アダプターの追加はサポートされていません。

{% endnote %}

{% data reusables.enterprise_installation.open-vm-console-start %}
3. `IPv4` または `IPv6` プロトコルを選んで構成します。
  ![IPv4 または IPv6 プロトコルを選ぶオプション](/assets/images/enterprise/network-configuration/IPv4-or-IPv6-protocol.png)
4. 選択したプロトコルのオプションを設定してください。
  ![IP プロトコル オプションを含むメニュー](/assets/images/enterprise/network-configuration/network-settings-selection.png) {% data reusables.enterprise_installation.vm-console-done %}
