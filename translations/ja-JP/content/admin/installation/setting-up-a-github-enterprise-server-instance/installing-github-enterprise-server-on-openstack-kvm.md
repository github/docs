---
title: OpenStack KVM で GitHub Enterprise Server をインストールする
intro: '{% data variables.product.prodname_ghe_server %} を OpenStack KVM 上にインストールするには、OpenStack にアクセスでき、{% data variables.product.prodname_ghe_server %} QCOW2 イメージをダウンロードすることが必要です。'
redirect_from:
  - /enterprise/admin/guides/installation/installing-github-enterprise-on-openstack-kvm/
  - /enterprise/admin/installation/installing-github-enterprise-server-on-openstack-kvm
  - /admin/installation/installing-github-enterprise-server-on-openstack-kvm
versions:
  enterprise-server: '*'
topics:
  - Enterprise
---

### 必要な環境

- {% data reusables.enterprise_installation.software-license %}
- OpenStackのサービス群へのWebベースのユーザインターフェースであるOpenStack Horizonの環境へのアクセスが必要です。 詳しい情報については[Horizonのドキュメンテーション](https://docs.openstack.org/horizon/latest/)を参照してください。

### ハードウェアについて

{% data reusables.enterprise_installation.hardware-considerations-all-platforms %}

### {% data variables.product.prodname_ghe_server %} イメージをダウンロードする

{% data reusables.enterprise_installation.enterprise-download-procedural %}
{% data reusables.enterprise_installation.download-license %}
{% data reusables.enterprise_installation.download-appliance %}
4. {% data variables.product.prodname_dotcom %}オンプレミスを選択し、続いて**OpenStack KVM (QCOW2)**をクリックしてください。
5. **Download for OpenStack KVM (QCOW2)**をクリックしてください。

### {% data variables.product.prodname_ghe_server %} インスタンスを作成する

{% data reusables.enterprise_installation.create-ghe-instance %}

1. OpenStack Horizon で、ダウンロードした {% data variables.product.prodname_ghe_server %} のイメージをアップロードします。 手順については、OpenStack ガイドの「[Upload and manage images](https://docs.openstack.org/horizon/latest/user/manage-images.html)」の 「Upload an image」セクションを参照してください。
{% data reusables.enterprise_installation.create-attached-storage-volume %} 手順については、OpenStack ガイドの「[Create and manage volumes](https://docs.openstack.org/horizon/latest/user/manage-volumes.html)」を参照してください。
3. セキュリティグループを作成し、下の表の各ポートについて新しいセキュリティグループルールを追加してください。 その方法についてはOpenStackのガイド"[Configure access and security for instances](https://docs.openstack.org/horizon/latest/user/configure-access-and-security-for-instances.html)"を参照してください。

  {% data reusables.enterprise_installation.necessary_ports %}
4. フローティングIPをインスタンスに関連づけることもできます。 使用しているOpenStackのセットアップによっては、フローティングIPをプロジェクトに割り当て、それをインスタンスに関連づける必要があるかもしれません、 そうする必要があるかどうかは、システム管理者に連絡を取って判断してください。 詳しい情報については、OpenStackのドキュメンテーション中の"[Allocate a floating IP address to an instance](https://docs.openstack.org/horizon/latest/user/configure-access-and-security-for-instances.html#allocate-a-floating-ip-address-to-an-instance)"を参照してください。
5. これまでのステップで作成したイメージ、データボリューム、セキュリティグループを使って{% data variables.product.product_location %}を起動してください。 その方法についてはOpenStackのガイド"[Launch and manage instances](https://docs.openstack.org/horizon/latest/user/launch-instances.html)"を参照してください。

### {% data variables.product.prodname_ghe_server %} インスタンスを設定する

{% data reusables.enterprise_installation.copy-the-vm-public-dns-name %}
{% data reusables.enterprise_installation.upload-a-license-file %}
{% data reusables.enterprise_installation.save-settings-in-web-based-mgmt-console %}詳しい情報については、「[{% data variables.product.prodname_ghe_server %} アプライアンスを設定する](/enterprise/admin/guides/installation/configuring-the-github-enterprise-server-appliance)」を参照してください。
{% data reusables.enterprise_installation.instance-will-restart-automatically %}
{% data reusables.enterprise_installation.visit-your-instance %}

### 参考リンク

- 「[システム概要](/enterprise/admin/guides/installation/system-overview)」{% if currentVersion ver_gt "enterprise-server@2.22" %}
- 「[新しいリリースへのアップグレードについて](/admin/overview/about-upgrades-to-new-releases)」{% endif %}
