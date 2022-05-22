---
title: XenServer で GitHub Enterprise Server をインストールする
intro: '{% data variables.product.prodname_ghe_server %} を XenServer にインストールするには、{% data variables.product.prodname_ghe_server %} のディスクイメージを XenServer ホストに配備する必要があります。'
redirect_from:
  - /enterprise/admin/guides/installation/installing-github-enterprise-on-xenserver/
  - /enterprise/admin/installation/installing-github-enterprise-server-on-xenserver
  - /admin/installation/installing-github-enterprise-server-on-xenserver
versions:
  enterprise-server: '*'
topics:
  - Enterprise
---
### 必要な環境

- {% data reusables.enterprise_installation.software-license %}
- {% data variables.product.prodname_ghe_server %} の仮想マシン (VM) を実行するマシンに、XenServer Hypervisor をインストールする必要があります。 バージョン 6.0 から 7.0 までをサポートしています。
- 初期セットアップには、XenCenter Windows Management Consoleを使うことをおすすめします。 以下にXenCenter Windows Management Consoleの使い方を示します。 詳しい情報については、Citrixのガイド"[How to Download and Install a New Version of XenCenter](https://support.citrix.com/article/CTX118531)"を参照してください。

### ハードウェアについて

{% data reusables.enterprise_installation.hardware-considerations-all-platforms %}

### {% data variables.product.prodname_ghe_server %} イメージをダウンロードする

{% data reusables.enterprise_installation.enterprise-download-procedural %}
{% data reusables.enterprise_installation.download-license %}
{% data reusables.enterprise_installation.download-appliance %}
4. {% data variables.product.prodname_dotcom %}オンプレミスを選択し、続いて**XenServer (VHD)**をクリックしてください。
5. ライセンスファイルをダウンロードするには**Download license（ライセンスのダウンロード）**をクリックしてください。

### {% data variables.product.prodname_ghe_server %} インスタンスを作成する

{% data reusables.enterprise_installation.create-ghe-instance %}

1. XenCenter で、ダウンロードした {% data variables.product.prodname_ghe_server %} のイメージをインポートします。 手順については、XenCenter ガイドの「[ディスクイメージをインポートする](https://docs.citrix.com/en-us/xencenter/current-release/vms-importdiskimage.html)」を参照してください。
    - "Enable Operating System Fixup"のステップでは、**Don't use Operating System Fixup**を選択してください。
    - 終了したら、VMの電源をオフのままにしておいてください。
{% data reusables.enterprise_installation.create-attached-storage-volume %} 手順については、XenCenter ガイドの「[仮想ディスクを追加する](https://docs.citrix.com/en-us/xencenter/current-release/vms-storage-addnewdisk.html)」を参照してください。

### {% data variables.product.prodname_ghe_server %} インスタンスを設定する

{% data reusables.enterprise_installation.copy-the-vm-public-dns-name %}
{% data reusables.enterprise_installation.upload-a-license-file %}
{% data reusables.enterprise_installation.save-settings-in-web-based-mgmt-console %}詳しい情報については、「[{% data variables.product.prodname_ghe_server %} アプライアンスを設定する](/enterprise/admin/guides/installation/configuring-the-github-enterprise-server-appliance)」を参照してください。
{% data reusables.enterprise_installation.instance-will-restart-automatically %}
{% data reusables.enterprise_installation.visit-your-instance %}

### 参考リンク

- 「[システム概要](/enterprise/admin/guides/installation/system-overview)」{% if currentVersion ver_gt "enterprise-server@2.22" %}
- 「[新しいリリースへのアップグレードについて](/admin/overview/about-upgrades-to-new-releases)」{% endif %}
