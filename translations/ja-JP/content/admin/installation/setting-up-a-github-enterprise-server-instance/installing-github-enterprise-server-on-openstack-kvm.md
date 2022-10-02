---
title: OpenStack KVM で GitHub Enterprise Server をインストールする
intro: '{% data variables.product.prodname_ghe_server %} を OpenStack KVM 上にインストールするには、OpenStack にアクセスでき、{% data variables.product.prodname_ghe_server %} QCOW2 イメージをダウンロードすることが必要です。'
redirect_from:
  - /enterprise/admin/guides/installation/installing-github-enterprise-on-openstack-kvm
  - /enterprise/admin/installation/installing-github-enterprise-server-on-openstack-kvm
  - /admin/installation/installing-github-enterprise-server-on-openstack-kvm
versions:
  ghes: '*'
type: tutorial
topics:
  - Administrator
  - Enterprise
  - Infrastructure
  - Set up
shortTitle: Install on OpenStack
ms.openlocfilehash: 105201d2759b333d297278aa7fe32a9544c68839
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/11/2022
ms.locfileid: '147884956'
---
## 前提条件

- {% data reusables.enterprise_installation.software-license %}
- OpenStackのサービス群へのWebベースのユーザインターフェースであるOpenStack Horizonの環境へのアクセスが必要です。 詳細については、[Horizon アクションのドキュメント](https://docs.openstack.org/horizon/latest/)を参照してください。

## ハードウェアに関する考慮事項

{% data reusables.enterprise_installation.hardware-considerations-all-platforms %}

## {% data variables.product.prodname_ghe_server %} イメージをダウンロードする

{% data reusables.enterprise_installation.download-license %} {% data reusables.enterprise_installation.download-appliance %}
4. [{% data variables.product.prodname_dotcom %} オンプレミス]で、[ハイパーバイザーの選択] ドロップダウン メニューを選択し、[ **OpenStack KVM (QCOW2)]** をクリックします。
5. **[OpenStack KVM (QCOW2) のダウンロード]** をクリックします。

## {% data variables.product.prodname_ghe_server %} インスタンスを作成する

{% data reusables.enterprise_installation.create-ghe-instance %}

1. OpenStack Horizon で、ダウンロードした {% data variables.product.prodname_ghe_server %} のイメージをアップロードします。 手順については、OpenStack ガイド「イメージのアップロードと管理」の「[イメージのアップロードと管理](https://docs.openstack.org/horizon/latest/user/manage-images.html)」セクションを参照してください。
{% data reusables.enterprise_installation.create-attached-storage-volume %} 手順については、OpenStack ガイド「[ボリュームの作成と管理](https://docs.openstack.org/horizon/latest/user/manage-volumes.html)」を参照してください。
3. セキュリティグループを作成し、下の表の各ポートについて新しいセキュリティグループルールを追加してください。 手順については、OpenStack ガイド「[インスタンスのアクセスとセキュリティを構成する](https://docs.openstack.org/horizon/latest/user/configure-access-and-security-for-instances.html)」を参照してください。

  {% data reusables.enterprise_installation.necessary_ports %}
4. フローティングIPをインスタンスに関連づけることもできます。 使用しているOpenStackのセットアップによっては、フローティングIPをプロジェクトに割り当て、それをインスタンスに関連づける必要があるかもしれません、 そうする必要があるかどうかは、システム管理者に連絡を取って判断してください。 詳細については、OpenStack ドキュメントの「[インスタンスへのフローティング IP アドレスの割り当て](https://docs.openstack.org/horizon/latest/user/configure-access-and-security-for-instances.html#allocate-a-floating-ip-address-to-an-instance)」を参照してください。
5. これまでのステップで作成したイメージ、データ ボリューム、セキュリティ グループを使用して {% data variables.product.product_location %} を起動してください。 手順については、OpenStack ガイド「[インスタンスの起動と管理](https://docs.openstack.org/horizon/latest/user/launch-instances.html)」を参照してください。

## {% data variables.product.prodname_ghe_server %} インスタンスを設定する

{% data reusables.enterprise_installation.copy-the-vm-public-dns-name %} {% data reusables.enterprise_installation.upload-a-license-file %} {% data reusables.enterprise_installation.save-settings-in-web-based-mgmt-console %} 詳細については、[{% data variables.product.prodname_ghe_server %} アプライアンスの構成](/enterprise/admin/guides/installation/configuring-the-github-enterprise-server-appliance)に関するページを参照してください。
{% data reusables.enterprise_installation.instance-will-restart-automatically %} {% data reusables.enterprise_installation.visit-your-instance %}

## 参考資料

- [システムの概要](/enterprise/admin/guides/installation/system-overview){% ifversion ghes %}
- [新しいリリースへのアップグレードについて](/admin/overview/about-upgrades-to-new-releases){% endif %}
