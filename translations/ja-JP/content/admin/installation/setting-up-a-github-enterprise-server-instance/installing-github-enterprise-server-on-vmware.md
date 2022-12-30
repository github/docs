---
title: VMware への GitHub Enterprise Server のインストール
intro: '{% data variables.product.prodname_ghe_server %} を VMware にインストールするには、VMware vSphere クライアントをダウンロードしてから、{% data variables.product.prodname_ghe_server %} ソフトウェアをダウンロードしてデプロイする必要があります。'
redirect_from:
  - /enterprise/admin/articles/getting-started-with-vmware
  - /enterprise/admin/articles/installing-vmware-tools
  - /enterprise/admin/articles/vmware-esxi-virtual-machine-maximums
  - /enterprise/admin/guides/installation/installing-github-enterprise-on-vmware
  - /enterprise/admin/installation/installing-github-enterprise-server-on-vmware
  - /admin/installation/installing-github-enterprise-server-on-vmware
versions:
  ghes: '*'
type: tutorial
topics:
  - Administrator
  - Enterprise
  - Infrastructure
  - Set up
shortTitle: Install on VMware
ms.openlocfilehash: f9e81c624f93c7478eed04b65b3ef43a69ef9291
ms.sourcegitcommit: 478f2931167988096ae6478a257f492ecaa11794
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/09/2022
ms.locfileid: '147859411'
---
## 前提条件

- {% data reusables.enterprise_installation.software-license %}
- {% data variables.product.product_location %} を動作させるベアメタル マシンに適用された VMware vSphere ESXi Hypervisor が必要です。 {% data variables.product.prodname_ghe_server %} 3.4 以前のバージョン 5.5 から 6.7 がサポートされています。 ESX バージョン 7.0 は {% data variables.product.prodname_ghe_server %} 3.5 以降でサポートされています。 ESXi Hypervisor は無料で、オプションの vCenter Server は含まれていません。 詳細については、[VMware ESXi のドキュメント](https://www.vmware.com/products/esxi-and-esx.html)を参照してください。
- vSphere Clientへのアクセスが必要です。 vCenter Serverがあるなら、vSphere Web Clientが利用できます。 詳細については、VMware ガイド「[vSphere Web クライアントを使用して vCenter Server にログインする](https://docs.vmware.com/en/VMware-vSphere/6.5/com.vmware.vsphere.install.doc/GUID-CE128B59-E236-45FF-9976-D134DADC8178.html)」を参照してください。

## ハードウェアに関する考慮事項

{% data reusables.enterprise_installation.hardware-considerations-all-platforms %}

## {% data variables.product.prodname_ghe_server %} イメージをダウンロードする

{% data reusables.enterprise_installation.download-license %} {% data reusables.enterprise_installation.download-appliance %}
4. [{% data variables.product.prodname_dotcom %} On-premises]\(GitHub オンプレミス\) の下にある [Select your hypervisor]\(ハイパーバイザーの選択\) ドロップダウン メニューを選び、 **[VMware ESXi/vSphere (OVA)]** をクリックします。
5. **[VMware ESXi/vSphere (OVA) のダウンロード]** をクリックします。

## {% data variables.product.prodname_ghe_server %} インスタンスを作成する

{% data reusables.enterprise_installation.create-ghe-instance %}

1. vSphere Windows Client または vCenter Web Client を使用して、ダウンロードした {% data variables.product.prodname_ghe_server %} イメージをインポートします。 手順については、VMware ガイド「[OVF または OVA テンプレートをデプロイする](https://docs.vmware.com/en/VMware-vSphere/6.5/com.vmware.vsphere.vm_admin.doc/GUID-17BEDA21-43F6-41F4-8FB2-E01D275FE9B4.html)」を参照してください。
    - データストアを選択する際には、VMのディスクをホストするのに十分な領域があるものを選択してください。 インスタンス サイズに推奨される最小ハードウェア仕様については、「[ハードウェアに関する考慮事項](#hardware-considerations)」を参照してください。 lazy zeroing のシックプロビジョニングをお勧めします。
    - **[デプロイ後に電源をオンにする]** のチェックは外したままにしておいてください。これは、VM をプロビジョニングした後にリポジトリ データのためのアタッチされたストレージ ボリュームを追加する必要があるためです。
{% data reusables.enterprise_installation.create-attached-storage-volume %} 手順については、VMware ガイド「[仮想マシンに新しいハード ディスクを追加する](https://docs.vmware.com/en/VMware-vSphere/6.5/com.vmware.vsphere.vm_admin.doc/GUID-F4917C61-3D24-4DB9-B347-B5722A84368C.html)」を参照してください。

## {% data variables.product.prodname_ghe_server %} インスタンスを設定する

{% data reusables.enterprise_installation.copy-the-vm-public-dns-name %} {% data reusables.enterprise_installation.upload-a-license-file %} {% data reusables.enterprise_installation.save-settings-in-web-based-mgmt-console %} 詳細については、[{% data variables.product.prodname_ghe_server %} アプライアンスの構成](/enterprise/admin/guides/installation/configuring-the-github-enterprise-server-appliance)に関するページを参照してください。
{% data reusables.enterprise_installation.instance-will-restart-automatically %} {% data reusables.enterprise_installation.visit-your-instance %}

## 参考資料

- [システムの概要](/enterprise/admin/guides/installation/system-overview){% ifversion ghes %}
- [新しいリリースへのアップグレードについて](/admin/overview/about-upgrades-to-new-releases){% endif %}
