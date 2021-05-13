---
title: CPUあるいはメモリリソースの増加
intro: '{% data variables.product.product_location_enterprise %}での処理が遅いなら、CPUあるいはメモリリソースを追加する必要があるかもしれません。'
redirect_from:
  - /enterprise/admin/installation/increasing-cpu-or-memory-resources
  - /enterprise/admin/enterprise-management/increasing-cpu-or-memory-resources
versions:
  enterprise-server: '*'
topics:
  - Enterprise
---

{% data reusables.enterprise_installation.warning-on-upgrading-physical-resources %}

### AWSでのCPUあるいはメモリリソースの追加

{% note %}

**ノート:** AWSでCPUあるいはメモリリソースを追加するには、EC2インスタンスを管理するためにAWSのマネージメントコンソールもしくは`aws ec2`コマンドラインインターフェースのいずれかの利用に慣れていなければなりません。 リサイズを行うための好みのAWSツールの利用の背景と詳細については、[Amazon EBS-Backed インスタンスのサイズ変更](https://docs.aws.amazon.com/ja_jp/AWSEC2/latest/UserGuide/ec2-instance-resize.html)にあるAWSのドキュメンテーションを参照してください。

{% endnote %}

#### リサイズについての考慮

{% data variables.product.product_location %} の CPU またはメモリリソースを増加させる前に、以下のことを行ってください:

- **CPUでメモリをスケーリングします**。 {% data reusables.enterprise_installation.increasing-cpus-req %}
- **Elastic IP アドレスをインスタンスに割り当てます**。 Elastic IP が割り当てられていない場合は、パブリック IP アドレスでの変更を考慮して、再起動後に {% data variables.product.prodname_ghe_server %} ホストの DNS A レコードを調整する必要があります。 インスタンスがVPC内で起動していれば、インスタンスが再起動してもElastic IP（EIP）は自動的に保持されます。 インスタンスがEC2-Classic内で起動されていれば、Elastic IPは手動で際割り当てが必要です。

#### サポートされているAWSインスタンスタイプ

アップグレードするインスタンスタイプは、CPU／メモリの仕様に基づいて決定しなければなりません。

{% data reusables.enterprise_installation.warning-on-scaling %}

{% data reusables.enterprise_installation.aws-instance-recommendation %}

#### AWSでのリサイズ

{% note %}

**ノート:**EC2-Classicで起動されたインスタンスについては、インスタンスに関連づけられたElastic IPアドレスとインスタンスIPの両方を書き留めておいてください。 インスタンスを再起動したなら、Elastic IPのアドレスを再割り当てしてください。

{% endnote %}

既存の AWS/EC2 インスタンスに CPU またはメモリリソースを追加することはできません。 その代わりに、以下を行う必要があります:

1. インスタンスを停止する。
2. インスタンスタイプを変更する。
3. インスタンスを起動します。
{% data reusables.enterprise_installation.configuration-recognized %}

### OpenStack KVMでのCPUあるいはメモリリソースの追加

既存の OpenStack KVM インスタンスに CPU またはメモリリソースを追加することはできません。 その代わりに、以下を行う必要があります:

1. 現在のインスタンスのスナップショットを取る。
2. インスタンスを停止する。
3. 希望するCPUやメモリリソースを持つ新しいインスタンスフレーバーを選択する。

### VMware の CPU またはメモリリソースを追加する

{% data reusables.enterprise_installation.increasing-cpus-req %}

1. vSphere Clientを使ってVMware ESXiホストに接続してください。
2. {% data variables.product.product_location %}をシャットダウンしてください。
3. 仮想マシンを選択し、 **Edit Settings（設定の編集）**をクリックしてください。
4. "Hardware"の下で、必要に応じて仮想マシンに割り当てられたCPUやメモリリソースを調整してください。![VMWareのセットアップリソース](/assets/images/enterprise/vmware/vsphere-hardware-tab.png)
5. 仮想マシンを起動するには、[**OK**] をクリックします。
{% data reusables.enterprise_installation.configuration-recognized %}
