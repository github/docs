---
title: Hyper-V で GitHub Enterprise Server をインストールする
intro: '{% data variables.product.prodname_ghe_server %} を Hyper-V にインストールするには、Windows Server 2008 から Windows Server 2019 までを実行しているマシンにデプロイする必要があります。'
redirect_from:
  - /enterprise/admin/guides/installation/installing-github-enterprise-on-hyper-v
  - /enterprise/admin/installation/installing-github-enterprise-server-on-hyper-v
  - /admin/installation/installing-github-enterprise-server-on-hyper-v
versions:
  ghes: '*'
type: tutorial
topics:
  - Administrator
  - Enterprise
  - Infrastructure
  - Set up
shortTitle: Install on Hyper-V
ms.openlocfilehash: f5b465edc4ff84be00e2749766091cc5cfb1962a
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/11/2022
ms.locfileid: '145120270'
---
## 前提条件

- {% data reusables.enterprise_installation.software-license %}
- Hyper-V をサポートしている Windows Server 2008 から Windows Server 2019 までを所有している必要があります。
- 仮想マシン (VM) の作成に必要なほとんどのアクションは、[Hyper-V マネージャー](https://docs.microsoft.com/windows-server/virtualization/hyper-v/manage/remotely-manage-hyper-v-hosts)を使用して実行することもできます。 とはいえ、初期セットアップのためにはWindows PowerShellコマンドラインシェルを使うことをおすすめします。 以下の例ではPowerShellを使っています。 詳細については、[Windows PowerShell の概要](https://docs.microsoft.com/powershell/scripting/getting-started/getting-started-with-windows-powershell?view=powershell-5.1)に関する Microsoft ガイドを参照してください。

## ハードウェアに関する考慮事項

{% data reusables.enterprise_installation.hardware-considerations-all-platforms %}

## {% data variables.product.prodname_ghe_server %} イメージをダウンロードする

{% data reusables.enterprise_installation.download-license %} {% data reusables.enterprise_installation.download-appliance %}
4. [{% data variables.product.prodname_dotcom %} オンプレミス] で、[ハイパーバイザーの選択] ドロップダウン メニューを選び、 **[Hyper-V (VHD)]** をクリックします。
5. **[Hyper-V (VHD) のダウンロード]** をクリックします。

## {% data variables.product.prodname_ghe_server %} インスタンスを作成する

{% data reusables.enterprise_installation.create-ghe-instance %}

1. PowerShell で、新しい第1世代の仮想マシンを作成し、ユーザライセンス数に基づいてサイズを設定し、ダウンロードした{% data variables.product.prodname_ghe_server %}イメージをアタッチします。 詳細については、Microsoft のドキュメントの「[New-VM](https://docs.microsoft.com/powershell/module/hyper-v/new-vm?view=win10-ps)」を参照してください。
  ```shell
  PS C:\> New-VM -Generation 1 -Name <em>VM_NAME</em> -MemoryStartupBytes <em>MEMORY_SIZE</em> -BootDevice VHD -VHDPath <em>PATH_TO_VHD</em>  
  ```
{% data reusables.enterprise_installation.create-attached-storage-volume %} `PATH_TO_DATA_DISK` をディスクを作成した場所へのパスに置き換えます。 詳細については、Microsoft のドキュメントの「[New-VHD](https://docs.microsoft.com/powershell/module/hyper-v/new-vhd?view=win10-ps)」を参照してください。
  ```shell
  PS C:\> New-VHD -Path <em>PATH_TO_DATA_DISK</em> -SizeBytes <em>DISK_SIZE</em>
  ```
3. データディスクをインスタンスにアタッチします。 詳細については、Microsoft のドキュメントの「[Add-VMHardDiskDrive](https://docs.microsoft.com/powershell/module/hyper-v/add-vmharddiskdrive?view=win10-ps)」を参照してください。
  ```shell
  PS C:\> Add-VMHardDiskDrive -VMName <em>VM_NAME</em> -Path <em>PATH_TO_DATA_DISK</em>
  ```
4. VM を起動します。 詳細については、Microsoft のドキュメントの「[Start-VM](https://docs.microsoft.com/powershell/module/hyper-v/start-vm?view=win10-ps)」を参照してください。
  ```shell
  PS C:\> Start-VM -Name <em>VM_NAME</em>
  ```
5. VM の IP アドレスを入手します。 詳細については、Microsoft のドキュメントの「[Get-VMNetworkAdapter](https://docs.microsoft.com/powershell/module/hyper-v/get-vmnetworkadapter?view=win10-ps)」を参照してください。
  ```shell
  PS C:\> (Get-VMNetworkAdapter -VMName <em>VM_NAME</em>).IpAddresses
  ```
6. VM の IP アドレスをコピーし、Web ブラウザに貼り付けます。

## {% data variables.product.prodname_ghe_server %} インスタンスを設定する

{% data reusables.enterprise_installation.copy-the-vm-public-dns-name %} {% data reusables.enterprise_installation.upload-a-license-file %} {% data reusables.enterprise_installation.save-settings-in-web-based-mgmt-console %} 詳細については、[{% data variables.product.prodname_ghe_server %} アプライアンスの構成](/enterprise/admin/guides/installation/configuring-the-github-enterprise-server-appliance)に関するページを参照してください。
{% data reusables.enterprise_installation.instance-will-restart-automatically %} {% data reusables.enterprise_installation.visit-your-instance %}

## 参考資料

- [システムの概要](/enterprise/admin/guides/installation/system-overview){% ifversion ghes %}
- [新しいリリースへのアップグレードについて](/admin/overview/about-upgrades-to-new-releases){% endif %}
