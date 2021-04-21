---
title: Hyper-V で GitHub Enterprise Server をインストールする
intro: '{% data variables.product.prodname_ghe_server %} を Hyper-V にインストールするには、Windows Server 2008 から Windows Server 2019 までを実行しているマシンに配備する必要があります。'
redirect_from:
  - /enterprise/admin/guides/installation/installing-github-enterprise-on-hyper-v/
  - /enterprise/admin/installation/installing-github-enterprise-server-on-hyper-v
versions:
  enterprise-server: '*'
topics:
  - enterprise
---

### 必要な環境

- {% data reusables.enterprise_installation.software-license %}
- Hyper-VをサポートしているWindows Server 2008からWindows Server 2019を持っている必要があります。
- 仮想マシン（VM）の作成に必要なほとんどのアクションは、 [Hyper-V Manager](https://docs.microsoft.com/windows-server/virtualization/hyper-v/manage/remotely-manage-hyper-v-hosts)を使っても行えます。 とはいえ、初期セットアップのためにはWindows PowerShellコマンドラインシェルを使うことをおすすめします。 以下の例ではPowerShellを使っています。 詳細については、Microsoft ガイド「[Windows PowerShell 入門](https://docs.microsoft.com/powershell/scripting/getting-started/getting-started-with-windows-powershell?view=powershell-5.1)」を参照してください。

### ハードウェアについて

{% data reusables.enterprise_installation.hardware-considerations-all-platforms %}

### {% data variables.product.prodname_ghe_server %} イメージをダウンロードする

{% data reusables.enterprise_installation.enterprise-download-procedural %}
{% data reusables.enterprise_installation.download-license %}
{% data reusables.enterprise_installation.download-appliance %}
4. {% data variables.product.prodname_dotcom %}オンプレミスを選択し、**Hyper-V (VHD)**をクリックしてください。
5. **Download for Hyper-V (VHD)**をクリックしてください。

### {% data variables.product.prodname_ghe_server %} インスタンスを作成する

{% data reusables.enterprise_installation.create-ghe-instance %}

1. PowerShell で、新しい第1世代の仮想マシンを作成し、ユーザライセンス数に基づいてサイズを設定し、ダウンロードした{% data variables.product.prodname_ghe_server %}イメージをアタッチします。 詳しい情報については、Microsoft ドキュメンテーションの「[New-VM](https://docs.microsoft.com/powershell/module/hyper-v/new-vm?view=win10-ps)」を参照してください。
  ```shell
  PS C:\> New-VM -Generation 1 -Name <em>VM_NAME</em> -MemoryStartupBytes <em>MEMORY_SIZE</em> -BootDevice VHD -VHDPath <em>PATH_TO_VHD</em>  
  ```
{% data reusables.enterprise_installation.create-attached-storage-volume %} `PATH_TO_DATA_DISK` をディスクを作成した場所へのパスに置き換えます。 詳しい情報については、Microsoft ドキュメンテーションの「[New-VHD](https://docs.microsoft.com/powershell/module/hyper-v/new-vhd?view=win10-ps)」を参照してください。
  ```shell
  PS C:\> New-VHD -Path <em>PATH_TO_DATA_DISK</em> -SizeBytes <em>DISK_SIZE</em>
  ```
3. データディスクをインスタンスにアタッチします。 詳しい情報については、Microsoftドキュメンテーションの「[Add-VMHardDiskDrive](https://docs.microsoft.com/powershell/module/hyper-v/add-vmharddiskdrive?view=win10-ps)」を参照してください。
  ```shell
  PS C:\> Add-VMHardDiskDrive -VMName <em>VM_NAME</em> -Path <em>PATH_TO_DATA_DISK</em>
  ```
4. VM を起動します。 詳しい情報については、Microsoftドキュメンテーションの「[Start-VM](https://docs.microsoft.com/powershell/module/hyper-v/start-vm?view=win10-ps)」を参照してください。
  ```shell
  PS C:\> Start-VM -Name <em>VM_NAME</em>
  ```
5. VM の IP アドレスを入手します。 詳しい情報については、Microsoftドキュメンテーションの「[Get-VMNetworkAdapter](https://docs.microsoft.com/powershell/module/hyper-v/get-vmnetworkadapter?view=win10-ps)」を参照してください。
  ```shell
  PS C:\> (Get-VMNetworkAdapter -VMName <em>VM_NAME</em>).IpAddresses
  ```
6. VM の IP アドレスをコピーし、Web ブラウザに貼り付けます。

### {% data variables.product.prodname_ghe_server %} インスタンスを設定する

{% data reusables.enterprise_installation.copy-the-vm-public-dns-name %}
{% data reusables.enterprise_installation.upload-a-license-file %}
{% data reusables.enterprise_installation.save-settings-in-web-based-mgmt-console %}詳しい情報については、「[{% data variables.product.prodname_ghe_server %} アプライアンスを設定する](/enterprise/admin/guides/installation/configuring-the-github-enterprise-server-appliance)」を参照してください。
{% data reusables.enterprise_installation.instance-will-restart-automatically %}
{% data reusables.enterprise_installation.visit-your-instance %}

### 参考リンク

- 「[システム概要](/enterprise/admin/guides/installation/system-overview)」{% if currentVersion ver_gt "enterprise-server@2.22" %}
- 「[新しいリリースへのアップグレードについて](/admin/overview/about-upgrades-to-new-releases)」{% endif %}
