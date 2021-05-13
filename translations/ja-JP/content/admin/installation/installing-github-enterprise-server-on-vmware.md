---
title: VMware で GitHub Enterprise Server をインストールする
intro: '{% data variables.product.prodname_ghe_server %} を VMware にインストールするには、VMware vSphere クライアントをダウンロードしてから、{% data variables.product.prodname_ghe_server %} ソフトウェアをダウンロードしてデプロイする必要があります。'
redirect_from:
  - /enterprise/admin/articles/getting-started-with-vmware/
  - /enterprise/admin/articles/installing-vmware-tools/
  - /enterprise/admin/articles/vmware-esxi-virtual-machine-maximums/
  - /enterprise/admin/guides/installation/installing-github-enterprise-on-vmware/
  - /enterprise/admin/installation/installing-github-enterprise-server-on-vmware
versions:
  enterprise-server: '*'
topics:
  - Enterprise
---

### 必要な環境

- {% data reusables.enterprise_installation.software-license %}
- {% data variables.product.product_location %}を動作させるベアメタルマシンに適用されたVMware vSphere ESXi Hypervisorが必要です。 バージョン 5.5 から 6.7 までをサポートしています。 ESXi Hypervisor は無料で、オプションの vCenter Server は含まれていません。 詳しい情報については、[VMware ESXiのドキュメンテーション](https://www.vmware.com/products/esxi-and-esx.html)を参照してください。
- vSphere Clientへのアクセスが必要です。 vCenter Serverがあるなら、vSphere Web Clientが利用できます。 詳しい情報については、VMWareのガイド "[vSphere Web Client を使用した、vCenter Server へのログイン](https://docs.vmware.com/jp/VMware-vSphere/6.5/com.vmware.vsphere.install.doc/GUID-CE128B59-E236-45FF-9976-D134DADC8178.html)"を参照してください。

### ハードウェアについて

{% data reusables.enterprise_installation.hardware-considerations-all-platforms %}

### {% data variables.product.prodname_ghe_server %} イメージをダウンロードする

{% data reusables.enterprise_installation.enterprise-download-procedural %}
{% data reusables.enterprise_installation.download-license %}
{% data reusables.enterprise_installation.download-appliance %}
4. {% data variables.product.prodname_dotcom %}オンプレミスを選択し、**VMware ESXi/vSphere (OVA)**をクリックしてください。
5. **Download for VMware ESXi/vSphere (OVA)**をクリックしてください。

### {% data variables.product.prodname_ghe_server %} インスタンスを作成する

{% data reusables.enterprise_installation.create-ghe-instance %}

1. vSphere Windows Client または vCenter Web Client を使用して、ダウンロードした {% data variables.product.prodname_ghe_server %} イメージをインポートします。 詳しい情報については、VMware ガイドの「[Deploy an OVF or OVA Template ](https://docs.vmware.com/en/VMware-vSphere/6.5/com.vmware.vsphere.vm_admin.doc/GUID-17BEDA21-43F6-41F4-8FB2-E01D275FE9B4.html)」を参照してください。
    - データストアを選択する際には、VMのディスクをホストするのに十分な領域があるものを選択してください。 インスタンスサイズに応じた最小の推奨ハードウェア仕様については「[ハードウェアについて](#hardware-considerations)」を参照してください。 lazy zeroing のシックプロビジョニングをお勧めします。
    - **Power on after deployment**のチェックは外したままにしておいてください。これは、VMをプロビジョニングした後にリポジトリデータのためのアタッチされたストレージボリュームを追加する必要があるためです。
{% data reusables.enterprise_installation.create-attached-storage-volume %}その方法については、VMWareのガイド "[仮想マシンへの新しいハード ディスクの追加](https://docs.vmware.com/en/VMware-vSphere/6.5/com.vmware.vsphere.vm_admin.doc/GUID-F4917C61-3D24-4DB9-B347-B5722A84368C.html)"を参照してください。

### {% data variables.product.prodname_ghe_server %} インスタンスを設定する

{% data reusables.enterprise_installation.copy-the-vm-public-dns-name %}
{% data reusables.enterprise_installation.upload-a-license-file %}
{% data reusables.enterprise_installation.save-settings-in-web-based-mgmt-console %}詳しい情報については、「[{% data variables.product.prodname_ghe_server %} アプライアンスを設定する](/enterprise/admin/guides/installation/configuring-the-github-enterprise-server-appliance)」を参照してください。
{% data reusables.enterprise_installation.instance-will-restart-automatically %}
{% data reusables.enterprise_installation.visit-your-instance %}

### 参考リンク

- 「[システム概要](/enterprise/admin/guides/installation/system-overview)」{% if currentVersion ver_gt "enterprise-server@2.22" %}
- 「[新しいリリースへのアップグレードについて](/admin/overview/about-upgrades-to-new-releases)」{% endif %}
