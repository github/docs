---
title: CPUあるいはメモリリソースの増加
intro: '{% data variables.product.prodname_ghe_server %}での処理が遅いなら、CPUあるいはメモリリソースを追加する必要があるかもしれません。'
redirect_from:
  - /enterprise/admin/installation/increasing-cpu-or-memory-resources
  - /enterprise/admin/enterprise-management/increasing-cpu-or-memory-resources
  - /admin/enterprise-management/increasing-cpu-or-memory-resources
versions:
  ghes: '*'
type: how_to
topics:
  - Enterprise
  - Infrastructure
  - Performance
shortTitle: Increase CPU or memory
ms.openlocfilehash: 1ac89694cf374cca1ba47f228f881dc4a5fd405f
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/05/2022
ms.locfileid: '146331865'
---
{% data reusables.enterprise_installation.warning-on-upgrading-physical-resources %}

{% note %}

**注:** CPU またはメモリ リソースを増やす前に、インスタンスをメンテナンス モードにします。{% ifversion ip-exception-list %}IP 例外リストを構成して特定の IP アドレスからのアクセスを許可することで、変更を検証できます。 {% endif %} 詳しい情報については、「[メンテナンス モードの有効化とスケジューリング](/enterprise/admin/guides/installation/enabling-and-scheduling-maintenance-mode)」を参照してください。

{% endnote %}

## AWSでのCPUあるいはメモリリソースの追加

{% note %}

**注:** AWS で CPU またはメモリ リソースを増やすには、AWS 管理コンソールまたは `aws ec2` コマンド ライン インターフェイスのいずれかを使って EC2 インスタンスを管理するための知識が必要です。 サイズ変更を行うために選んだ AWS ツールの背景や使用方法について詳しくは、[Amazon EBS 対応インスタンスのサイズ変更](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-instance-resize.html)に関する AWS ドキュメントを参照してください。

{% endnote %}

### リサイズについての考慮

{% data variables.product.product_location %} で CPU またはメモリ リソースを増やす前に、次の推奨事項を確認してください。

- **CPU でメモリをスケールアップまたはスケールダウンします**。 {% data reusables.enterprise_installation.increasing-cpus-req %}
- **インスタンスにエラスティック IP アドレスを割り当てます**。 Elastic IP が割り当てられていない場合は、パブリック IP アドレスでの変更を考慮して、再起動後に {% data variables.product.prodname_ghe_server %} ホストの DNS A レコードを調整する必要があります。 インスタンスがVPC内で起動していれば、インスタンスが再起動してもElastic IP（EIP）は自動的に保持されます。 インスタンスがEC2-Classic内で起動されていれば、Elastic IPは手動で際割り当てが必要です。

### サポートされているAWSインスタンスタイプ

アップグレードするインスタンスタイプは、CPU／メモリの仕様に基づいて決定しなければなりません。

{% data reusables.enterprise_installation.warning-on-scaling %}

{% data reusables.enterprise_installation.aws-instance-recommendation %}

### AWSでのリサイズ

{% note %}

**注:** EC2-Classic で起動したインスタンスについては、そのインスタンスに関連付けられている Elastic IP アドレスと、そのインスタンスの ID の両方を書き留めておいてください。 インスタンスを再起動したなら、Elastic IPのアドレスを再割り当てしてください。

{% endnote %}

既存の AWS/EC2 インスタンスに CPU またはメモリリソースを追加することはできません。 その代わりに、以下を行う必要があります:

1. インスタンスを停止する。
2. インスタンスタイプを変更する。
3. インスタンスを起動します。
{% data reusables.enterprise_installation.configuration-recognized %}

## Microsoft Azure での CPU またはメモリ リソースの追加

{% note %}

**注:** Microsoft Azure で CPU またはメモリ リソースを追加するには、Azure Portal、Azure CLI、Azure PowerShell のいずれかを使って VM インスタンスを管理するための知識が必要です。 サイズ変更を行うために選んだ Azure ツールの背景や使用方法について詳しくは、[仮想マシンのサイズ変更](https://docs.microsoft.com/en-us/azure/virtual-machines/resize-vm)に関する Azure ドキュメントを参照してください。

{% endnote %}

### リサイズについての考慮

{% data variables.product.product_location %} で CPU またはメモリ リソースを増やす前に、次の推奨事項を確認してください。

- **CPU でメモリをスケールアップまたはスケールダウンします**。 {% data reusables.enterprise_installation.increasing-cpus-req %}
- **インスタンスに静的 IP アドレスを割り当てます**。 静的 IP を割り当てていない場合は、IP アドレスでの変更を考慮して、再起動後に {% data variables.product.prodname_ghe_server %} ホストの DNS A レコードを調整する必要があります。

### サポートされている Microsoft Azure インスタンスのサイズ

アップグレードしたいインスタンスのサイズを、CPU やメモリの仕様に基づいて決める必要があります。

{% data reusables.enterprise_installation.warning-on-scaling %}

{% data reusables.enterprise_installation.azure-instance-recommendation %}

### Microsoft Azure でのサイズ変更

VM サイズを変更することで、VM をスケールアップまたはスケールダウンできます。 サイズを変更すると、再起動が必要となります。 場合によっては、先に VM の割り当てを解除する必要があります。 これは、現在 VM をホストしているハードウェア クラスターで新しいサイズを使用できない場合に発生する可能性があります。 

1. 必要な手順については、[仮想マシンのサイズの変更](https://docs.microsoft.com/en-us/azure/virtual-machines/resize-vm)に関する Azure ドキュメントを参照してください。
{% data reusables.enterprise_installation.configuration-recognized %}

## OpenStack KVMでのCPUあるいはメモリリソースの追加

既存の OpenStack KVM インスタンスに CPU またはメモリリソースを追加することはできません。 その代わりに、以下を行う必要があります:

1. 現在のインスタンスのスナップショットを取る。
2. インスタンスを停止する。
3. 希望するCPUやメモリリソースを持つ新しいインスタンスフレーバーを選択する。

## VMware の CPU またはメモリリソースを追加する

{% data reusables.enterprise_installation.increasing-cpus-req %}

1. vSphere Clientを使ってVMware ESXiホストに接続してください。
2. {% data variables.product.product_location %} をシャットダウンします。
3. 仮想マシンを選び、 **[設定の編集]** をクリックします。
4. [ハードウェア] で、必要に応じて、仮想マシンに割り当てられている CPU とメモリ リソースのいずれかまたは両方を調整します。![VMware セットアップ リソース](/assets/images/enterprise/vmware/vsphere-hardware-tab.png)
5. 仮想マシンを起動するには、 **[OK]** をクリックします。
{% data reusables.enterprise_installation.configuration-recognized %}
