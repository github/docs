---
title: XenServer で GitHub Enterprise Server をインストールする
intro: '{% data variables.product.prodname_ghe_server %} を XenServer にインストールするには、{% data variables.product.prodname_ghe_server %} のディスクイメージを XenServer ホストに配備する必要があります。'
redirect_from:
- /enterprise/admin/guides/installation/installing-github-enterprise-on-xenserver
- /enterprise/admin/installation/installing-github-enterprise-server-on-xenserver
- /admin/installation/installing-github-enterprise-server-on-xenserver
versions:
  ghes: <=3.2
type: tutorial
topics:
- Administrator
- Enterprise
- Infrastructure
- Set up
shortTitle: Install on XenServer
ms.openlocfilehash: f4991244e74c9a61d953ecba08cc5c4985906fb6
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/10/2022
ms.locfileid: "145116525"
---
{% note %}

  **メモ:** XenServer での {% data variables.product.prodname_ghe_server %} のサポートは、{% data variables.product.prodname_ghe_server %} 3.3 で廃止されます。 詳細については、[{% data variables.product.prodname_ghe_server %} 3.1 リリース ノート](/admin/release-notes#3.1.0)を参照してください。

{% endnote %}

## 前提条件

- {% data reusables.enterprise_installation.software-license %}
- {% data variables.product.prodname_ghe_server %} の仮想マシン (VM) を実行するマシンに、XenServer Hypervisor をインストールする必要があります。 バージョン 6.0 から 7.0 までをサポートしています。
- 初期セットアップには、XenCenter Windows Management Consoleを使うことをおすすめします。 以下にXenCenter Windows Management Consoleの使い方を示します。 詳細については、Citrix ガイド「[XenCenter の新しいバージョンをダウンロードしてインストールする方法](https://support.citrix.com/article/CTX118531)」を参照してください。

## ハードウェアに関する考慮事項

{% data reusables.enterprise_installation.hardware-considerations-all-platforms %}

## {% data variables.product.prodname_ghe_server %} イメージをダウンロードする

{% data reusables.enterprise_installation.download-license %} {% data reusables.enterprise_installation.download-appliance %}
4. [{% data variables.product.prodname_dotcom %} オンプレミス]で、[ハイパーバイザーの選択] ドロップダウン メニューを選択し、 **[XenServer (VHD)]** をクリックします。
5. ライセンス ファイルをダウンロードするには、 **[ライセンスのダウンロード]** をクリックしてください。

## {% data variables.product.prodname_ghe_server %} インスタンスを作成する

{% data reusables.enterprise_installation.create-ghe-instance %}

1. XenCenter で、ダウンロードした {% data variables.product.prodname_ghe_server %} のイメージをインポートします。 手順については、XenCenter ガイド「[ディスク イメージのインポート](https://docs.citrix.com/en-us/xencenter/current-release/vms-importdiskimage.html)」を参照してください。
    - 「オペレーティング システムの修正を有効にする」のステップでは、 **[オペレーティング システムの修正を使用しない]** を選択してください。
    - 終了したら、VMの電源をオフのままにしておいてください。
{% data reusables.enterprise_installation.create-attached-storage-volume %} 手順については、XenCenter ガイド「[仮想ディスクの追加](https://docs.citrix.com/en-us/xencenter/current-release/vms-storage-addnewdisk.html)」を参照してください。

## {% data variables.product.prodname_ghe_server %} インスタンスを設定する

{% data reusables.enterprise_installation.copy-the-vm-public-dns-name %} {% data reusables.enterprise_installation.upload-a-license-file %} {% data reusables.enterprise_installation.save-settings-in-web-based-mgmt-console %} 詳細については、[{% data variables.product.prodname_ghe_server %} アプライアンスの構成](/enterprise/admin/guides/installation/configuring-the-github-enterprise-server-appliance)に関するページを参照してください。
{% data reusables.enterprise_installation.instance-will-restart-automatically %} {% data reusables.enterprise_installation.visit-your-instance %}

## 参考資料

- [システムの概要](/enterprise/admin/guides/installation/system-overview){% ifversion ghes %}
- [新しいリリースへのアップグレードについて](/admin/overview/about-upgrades-to-new-releases){% endif %}
