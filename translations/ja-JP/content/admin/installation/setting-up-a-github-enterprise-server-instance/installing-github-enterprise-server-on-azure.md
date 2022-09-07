---
title: Azure で GitHub Enterprise Server をインストールする
intro: 'Azure に {% data variables.product.prodname_ghe_server %} をインストールするには、Premium Storage をサポートするメモリ最適化インスタンスにデプロイする必要があります。'
redirect_from:
  - /enterprise/admin/guides/installation/installing-github-enterprise-on-azure
  - /enterprise/admin/installation/installing-github-enterprise-server-on-azure
  - /admin/installation/installing-github-enterprise-server-on-azure
versions:
  ghes: '*'
type: tutorial
topics:
  - Administrator
  - Enterprise
  - Infrastructure
  - Set up
shortTitle: Install on Azure
ms.openlocfilehash: 52c435b01e830968eaf81dc411727ea2bacabd2d
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/05/2022
ms.locfileid: '145112590'
---
{% data variables.product.prodname_ghe_server %} をグローバル Azure または Azure Government にデプロイできます。

## 前提条件

- {% data reusables.enterprise_installation.software-license %}
- 新しいコンピューターをプロビジョニングできる Azure アカウントを所有していなければなりません。 詳しくは、[Microsoft Azure Web サイト](https://azure.microsoft.com)をご覧ください。
- 仮想マシン（VM）を起動するのに必要なアクションのほとんどは、Azureポータルを使っても行えます。 とはいえ、初期セットアップ用にはAzureコマンドラインインターフェース（CLI）をインストールすることをお勧めします。 以下の例では、Azure CLI 2.0が使われています。 詳細については、Azure のガイド「[Azure CLI 2.0 のインストール](https://docs.microsoft.com/cli/azure/install-azure-cli?view=azure-cli-latest)」を参照してください。

## ハードウェアに関する考慮事項

{% data reusables.enterprise_installation.hardware-considerations-all-platforms %}

## 仮想マシンタイプの決定

Azure で{% data variables.product.product_location %} を起動する前に、Organization のニーズに最適なマシンタイプを決定する必要があります。 メモリ最適化済みマシンの詳細については、Microsoft Azure ドキュメントの「[メモリ最適化済み仮想マシンのサイズ](https://docs.microsoft.com/en-gb/azure/virtual-machines/sizes-memory)」を参照してください。 {% data variables.product.product_name %} の最小リソース要件を確認するには、「[最小要件](#minimum-requirements)」を参照してください。


{% data reusables.enterprise_installation.warning-on-scaling %}

{% data reusables.enterprise_installation.azure-instance-recommendation %}

## {% data variables.product.prodname_ghe_server %} 仮想マシンを作成する

{% data reusables.enterprise_installation.create-ghe-instance %}

1. 最新の {% data variables.product.prodname_ghe_server %} アプライアンスイメージを見つけます。 `vm image list` コマンドの詳細については、Microsoft のドキュメントの「[`az vm image list`](https://docs.microsoft.com/cli/azure/vm/image?view=azure-cli-latest#az_vm_image_list)」を参照してください。
  ```shell
  $ az vm image list --all -f GitHub-Enterprise | grep '"urn":' | sort -V
  ```

2. 見つけたアプライアンスイメージを使用して新しい VM を作成します。 詳細については、Microsoft のドキュメントの「[`az vm create`](https://docs.microsoft.com/cli/azure/vm?view=azure-cli-latest#az_vm_create)」を参照してください。

  VM の名前、リソースグループ、VM のサイズ、優先する Azure リージョンの名前、前の手順でリストしたアプライアンスイメージ VM の名前、およびプレミアムストレージ用のストレージ SKU についてのオプションを渡します。 リソース グループの詳細については、Microsoft のドキュメントの「[リソース グループ](https://docs.microsoft.com/azure/azure-resource-manager/resource-group-overview#resource-groups)」を参照してください。

  ```shell
  $ az vm create -n <em>VM_NAME</em> -g <em>RESOURCE_GROUP</em> --size <em>VM_SIZE</em> -l <em>REGION</em> --image <em>APPLIANCE_IMAGE_NAME</em> --storage-sku Premium_LRS
  ```

3. 必要なポートを開くように VM でセキュリティを設定します。 詳細については、Microsoft のドキュメントの「[`az vm open-port`](https://docs.microsoft.com/cli/azure/vm?view=azure-cli-latest#az_vm_open_port)」を参照してください。 どのポートを開く必要があるかを判断するための各ポートの説明については、以下の表を参照してください。

  ```shell
  $ az vm open-port -n <em>VM_NAME</em> -g <em>RESOURCE_GROUP</em> --port <em>PORT_NUMBER</em>
  ```

  次の表に、各ポートの使用目的を示します

  {% data reusables.enterprise_installation.necessary_ports %}

4. 暗号化されていない新しいデータディスクを作成してVMにアタッチし、ユーザライセンス数に応じてサイズを設定してください。 詳細については、Microsoft のドキュメントの「[`az vm disk attach`](https://docs.microsoft.com/cli/azure/vm/disk?view=azure-cli-latest#az_vm_disk_attach)」を参照してください。

  VM の名前 (`ghe-acme-corp` など)、リソースグループ、プレミアムストレージ SKU、ディスクのサイズ (`100` など)、および結果の VHD についてのオプションを渡します。

  ```shell
  $ az vm disk attach --vm-name <em>VM_NAME</em> -g <em>RESOURCE_GROUP</em> --sku Premium_LRS --new -z <em>SIZE_IN_GB</em> --name ghe-data.vhd --caching ReadWrite
  ```

  {% note %}

   **メモ:** 非運用インスタンスに十分な I/O スループットを与えるための推奨最小ディスク サイズは 40 GiB です。読み取り/書き込みキャッシュを有効にします (`--caching ReadWrite`)。

   {% endnote %}

## {% data variables.product.prodname_ghe_server %} 仮想マシンを設定する

1. VM を設定する前に、VMがReadyRole ステータスになるのを待つ必要があります。 `vm list` コマンドを使用して VM の状態を確認します。 詳細については、Microsoft のドキュメントの「[`az vm list`](https://docs.microsoft.com/cli/azure/vm?view=azure-cli-latest#az_vm_list)」を参照してください。
  ```shell
  $ az vm list -d -g <em>RESOURCE_GROUP</em> -o table
  > Name    ResourceGroup    PowerState    PublicIps     Fqdns    Location    Zones
  > ------  ---------------  ------------  ------------  -------  ----------  -------
  > VM_NAME RESOURCE_GROUP   VM running    40.76.79.202           eastus
  
  ```
  {% note %}
  
  **メモ:** Azure では、VM の FQDNS エントリは自動的には作成されません。 詳細については、Azure のガイドで [Linux VM のために Azure portal で完全修飾ドメイン名を作成する](https://docs.microsoft.com/azure/virtual-machines/linux/portal-create-fqdn)方法を参照してください。
  
  {% endnote %}
  
  {% data reusables.enterprise_installation.copy-the-vm-public-dns-name %} {% data reusables.enterprise_installation.upload-a-license-file %} {% data reusables.enterprise_installation.save-settings-in-web-based-mgmt-console %} 詳細については、[{% data variables.product.prodname_ghe_server %} アプライアンスの構成](/enterprise/admin/guides/installation/configuring-the-github-enterprise-server-appliance)に関するページを参照してください。
  {% data reusables.enterprise_installation.instance-will-restart-automatically %} {% data reusables.enterprise_installation.visit-your-instance %}
  
## 参考資料
  
- [システムの概要](/enterprise/admin/guides/installation/system-overview){% ifversion ghes %}
- [新しいリリースへのアップグレードについて](/admin/overview/about-upgrades-to-new-releases){% endif %}
