---
title: Azure で GitHub Enterprise Server をインストールする
intro: 'Azure に {% data variables.product.prodname_ghe_server %} をインストールするには、DS シリーズのインスタンスにデプロイし、Premium-LRS ストレージを使用する必要があります。'
redirect_from:
  - /enterprise/admin/guides/installation/installing-github-enterprise-on-azure/
  - /enterprise/admin/installation/installing-github-enterprise-server-on-azure
versions:
  enterprise-server: '*'
---

{% data variables.product.prodname_ghe_server %} をグローバル Azure または Azure Government にデプロイできます。

### 必要な環境

- {% data reusables.enterprise_installation.software-license %}
- 新しいコンピューターをプロビジョニングできる Azure アカウントを所有していなければなりません。 詳しい情報については [Microsoft Azure のウェブサイト](https://azure.microsoft.com)を参照してください。
- 仮想マシン（VM）を起動するのに必要なアクションのほとんどは、Azureポータルを使っても行えます。 とはいえ、初期セットアップ用にはAzureコマンドラインインターフェース（CLI）をインストールすることをお勧めします。 以下の例では、Azure CLI 2.0が使われています。 詳しい情報についてはAzureのガイドの"[Azure CLI 2.0のインストール](https://docs.microsoft.com/ja-jp/cli/azure/install-azure-cli?view=azure-cli-latest)"を参照してください。

### ハードウェアについて

{% data reusables.enterprise_installation.hardware-considerations-all-platforms %}

### 仮想マシンタイプの決定

{% data variables.product.product_location %}をAzure上で起動する前に、組織の要求に最も適した仮想マシンのタイプを決定しなければなりません。

#### サポートされているVMタイプとリージョン

{% data variables.product.prodname_ghe_server %} アプライアンスは、プレミアムストレージのデータディスクを必要としており、プレミアムストレージをサポートするあらゆる Azure VM でサポートされます。 詳しい情報については、Azureドキュメンテーション中の"[サポート対象のVM](https://docs.microsoft.com/ja-jp/azure/virtual-machines/windows/premium-storage#supported-vms)"を参照してください。 利用可能なVMに関する一般的な情報については[Azure仮想マシンの概要ページ](https://azure.microsoft.com/ja-jp/pricing/details/virtual-machines/linux/)を参照してください。

{% data variables.product.prodname_ghe_server %} は、VM タイプをサポートするあらゆる地域をサポートします。 各VMがサポートされるリージョンに関する詳しい情報については"[リージョン別の利用可能な製品](https://azure.microsoft.com/ja-jp/global-infrastructure/services/)"を参照してください。

#### 推奨VMタイプ

14 GB 以上の RAM を搭載した DS v2 インスタンスタイプを使用することをおすすめします。 サポートされているあらゆる VM タイプを使用できます。 ユーザライセンス数に応じて、以下のインスタンスタイプをおすすめします。

|          シート数          |       推奨タイプ        |
|:----------------------:|:------------------:|
| トライアル、デモ、あるいは10人の軽量ユーザ | Standard_DS11_v2 |
|       10 - 3000        | Standard_DS12_v2 |
|      3000 - 8000       | Standard_DS14_v2 |
|     8000 - 10000+      | Standard_DS15_v2 |

{% data reusables.enterprise_installation.warning-on-scaling %}

### {% data variables.product.prodname_ghe_server %} 仮想マシンを作成する

{% data reusables.enterprise_installation.create-ghe-instance %}

1. 最新の {% data variables.product.prodname_ghe_server %} アプライアンスイメージを見つけます。 `vm image list` コマンドに関する詳しい情報については、Microsoftのドキュメンテーション中の"[az vm image list](https://docs.microsoft.com/ja-jp/cli/azure/vm/image?view=azure-cli-latest)"を参照してください。
  ```shell
  $ az vm image list --all -f GitHub-Enterprise | grep '"urn":' | sort -V
  ```

2. 見つけたアプライアンスイメージを使用して新しい VM を作成します。 詳しい情報については、Microsoftドキュメンテーションの「[az vm create](https://docs.microsoft.com/en-us/cli/azure/vm?view=azure-cli-latest#az_vm_create)」を参照してください。

  VM の名前、リソースグループ、VM のサイズ、優先する Azure リージョンの名前、前の手順でリストしたアプライアンスイメージ VM の名前、およびプレミアムストレージ用のストレージ SKU についてのオプションを渡します。 リソースグループに関する詳しい情報については、Microsoft ドキュメンテーションの「[Resource groups](https://docs.microsoft.com/en-us/azure/azure-resource-manager/resource-group-overview#resource-groups)」を参照してください。

  ```shell
  $ az vm create -n <em>VM_NAME</em> -g <em>RESOURCE_GROUP</em> --size <em>VM_SIZE</em> -l <em>REGION</em> --image <em>APPLIANCE_IMAGE_NAME</em> --storage-sku Premium_LRS
  ```

3. 必要なポートを開くように VM でセキュリティを設定します。 詳しい情報については、Microsoft ドキュメンテーションの「[az vm open-port](https://docs.microsoft.com/en-us/cli/azure/vm?view=azure-cli-latest#az_vm_open_port)」を参照してください。 どのポートを開く必要があるかを判断するための各ポートの説明については、以下の表を参照してください。

  ```shell
  $ az vm open-port -n <em>VM_NAME</em> -g <em>RESOURCE_GROUP</em> --port <em>PORT_NUMBER</em>
  ```

  次の表に、各ポートの使用目的を示します

  {% data reusables.enterprise_installation.necessary_ports %}

4. 暗号化されていない新しいデータディスクを作成してVMにアタッチし、ユーザライセンス数に応じてサイズを設定してください。 詳しい情報については、Microsoft ドキュメンテーションの「[az vm disk attach](https://docs.microsoft.com/en-us/cli/azure/vm/disk?view=azure-cli-latest#az_vm_disk_attach)」を参照してください。

  VM の名前 (`ghe-acme-corp` など)、リソースグループ、プレミアムストレージ SKU、ディスクのサイズ (`100` など)、および作成する VHD の名前についてのオプションを渡します。

  ```shell
  $ az vm disk attach --vm-name <em>VM_NAME</em> -g <em>RESOURCE_GROUP</em> --sku Premium_LRS --new -z <em>SIZE_IN_GB</em> --name ghe-data.vhd --caching ReadWrite
  ```

  {% note %}

   **注釈:** 働状態ではないインスタンスで、十分なI/Oスループットを得るために推奨される最小ディスクサイズは、読み書きキャッシュを有効にした状態 (`--caching ReadWrite`) で 40 GiB です。

   {% endnote %}

### {% data variables.product.prodname_ghe_server %} 仮想マシンを設定する

1. VM を設定する前に、VMがReadyRole ステータスになるのを待つ必要があります。 VM のステータスを `vm list` コマンドで確認します。 詳しい情報については、Microsoft ドキュメンテーションの「[az vm list](https://docs.microsoft.com/en-us/cli/azure/vm?view=azure-cli-latest#az_vm_list)」を参照してください。
  ```shell
  $ az vm list -d -g <em>RESOURCE_GROUP</em> -o table
  > Name    ResourceGroup    PowerState    PublicIps     Fqdns    Location    Zones
  > ------  ---------------  ------------  ------------  -------  ----------  -------
  > VM_NAME RESOURCE_GROUP   VM running    40.76.79.202           eastus

  ```
  {% note %}

  **メモ:** Azure は VM 用の FQDN エントリを自動的に作成しません。 詳しい情報については、"[Linux VM用Azure Portalでの完全修飾ドメイン名の作成](https://docs.microsoft.com/ja-jp/azure/virtual-machines/linux/portal-create-fqdn)" 方法に関する Azure のガイドを参照してください。

  {% endnote %}

  {% data reusables.enterprise_installation.copy-the-vm-public-dns-name %}
  {% data reusables.enterprise_installation.upload-a-license-file %}
  {% data reusables.enterprise_installation.save-settings-in-web-based-mgmt-console %}詳しい情報については、「[{% data variables.product.prodname_ghe_server %} アプライアンスを設定する](/enterprise/admin/guides/installation/configuring-the-github-enterprise-server-appliance)」を参照してください。
  {% data reusables.enterprise_installation.instance-will-restart-automatically %}
  {% data reusables.enterprise_installation.visit-your-instance %}


  ### 参考リンク

  - "[システムの概要](/enterprise/admin/guides/installation/system-overview)"
  
