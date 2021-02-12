---
title: Google Cloud Platform で GitHub Enterprise Server をインストールする
intro: '{% data variables.product.prodname_ghe_server %} を Google Cloud Platform にインストールするには、サポートされているマシンタイプにデプロイし、永続的な標準ディスクまたは永続的な SSD を使用する必要があります。'
redirect_from:
  - /enterprise/admin/guides/installation/installing-github-enterprise-on-google-cloud-platform/
  - /enterprise/admin/installation/installing-github-enterprise-server-on-google-cloud-platform
versions:
  enterprise-server: '*'
---

### 必要な環境

- {% data reusables.enterprise_installation.software-license %}
- Google Compute Engine（GCE）仮想マシン（VM）インスタンスを起動できるGoogle Cloud Platformのアカウントが必要です。 詳しい情報については[Google Cloud PlatformのWebサイト](https://cloud.google.com/)及び[Google Cloud Platformドキュメンテーション](https://cloud.google.com/docs/)を参照してください。
- インスタンスを起動するのに必要なアクションのほとんどは、[Google Cloud Platform Console](https://cloud.google.com/compute/docs/console)を使っても行えます。 とはいえ、初期セットアップのためにgcloud computeコマンドラインツールをインストールすることをお勧めします。 以下の例では、gcloud computeコマンドラインツールを使用しています。 詳しい情報についてはGoogleのドキュメンテーション中の"[gcloud compute](https://cloud.google.com/compute/docs/gcloud-compute/)"のインストール及びセットアップガイドを参照してください。

### ハードウェアについて

{% data reusables.enterprise_installation.hardware-considerations-all-platforms %}

### マシンタイプの決定

Google Cloud Platformde{% data variables.product.product_location %}を起動する前に、組織の要求に最も適したマシンタイプを決定する必要があります。

#### サポートされているマシンタイプ

{% data variables.product.prodname_ghe_server %} は、次の Google Compute Engine (GCE) マシンタイプでサポートされています。 詳しい情報については[Google Cloud Platformのマシンタイプの記事](https://cloud.google.com/compute/docs/machine-types)を参照してください。

| ハイメモリ         |
| ------------- |
| n1-highmem-4  |
| n1-highmem-8  |
| n1-highmem-16 |
| n1-highmem-32 |
| n1-highmem-64 |
| n1-highmem-96 |

#### 推奨マシンタイプ

ユーザライセンス数に基づいて、以下のマシンタイプをおすすめします。

|          シート数          |     推奨タイプ     |
|:----------------------:|:-------------:|
| トライアル、デモ、あるいは10人の軽量ユーザ | n1-standard-4 |
|       10 - 3000        | n1-standard-8 |
|      3000 - 5000       | n1-highmem-8  |
|      5000 - 8000       | n1-highmem-16 |
|     8000 - 10000+      | n1-highmem-32 |

{% data reusables.enterprise_installation.warning-on-scaling %}

### {% data variables.product.prodname_ghe_server %} イメージを選択する

1. [gcloud compute](https://cloud.google.com/compute/docs/gcloud-compute/)コマンドラインツールを使用して、パブリックな {% data variables.product.prodname_ghe_server %} イメージを一覧表示します。
   ```shell
   $ gcloud compute images list --project github-enterprise-public --no-standard-images
   ```

2. {% data variables.product.prodname_ghe_server %} の最新の GCE イメージのイメージ名をメモしておきます。

### ファイアウォールの設定

GCE 仮想マシンは、ファイアウォールが存在するネットワークのメンバーとして作成されます。 {% data variables.product.prodname_ghe_server %} VMに関連付けられているネットワークの場合、下記の表に一覧表示されている必要なポートを許可するようにファイアウォールを設定する必要があります。 Google Cloud Platform でのファイアウォールルールに関する詳しい情報については、Google ガイドの「[ファイアウォールルールの概要](https://cloud.google.com/vpc/docs/firewalls)」を参照してください。

1. gcloud compute コマンドラインツールを使用して、ネットワークを作成します。 詳しい情報については、Google ドキュメンテーションの「[gcloud compute networks create](https://cloud.google.com/sdk/gcloud/reference/compute/networks/create)」を参照してください。
   ```shell
   $ gcloud compute networks create <em>NETWORK-NAME</em> --subnet-mode auto
   ```
2. 下記の表にある各ポートに関するファイアウォールルールを作成します。 詳しい情報については、Googleドキュメンテーションの「[gcloud compute firewall-rules](https://cloud.google.com/sdk/gcloud/reference/compute/firewall-rules/)」を参照してください。
   ```shell
   $ gcloud compute firewall-rules create <em>RULE-NAME</em> \
   --network <em>NETWORK-NAME</em> \
   --allow tcp:22,tcp:25,tcp:80,tcp:122,udp:161,tcp:443,udp:1194,tcp:8080,tcp:8443,tcp:9418,icmp
   ```
   次の表に、必要なポートと各ポートの使用目的を示します。

   {% data reusables.enterprise_installation.necessary_ports %}

### スタティックIPの取得とVMへの割り当て

これが稼働状態のアプライアンスである場合は、静的な外部 IP アドレスを予約し、それを {% data variables.product.prodname_ghe_server %} VM に割り当てることを強くおすすめします。 そうしなければ、VM のパブリックな IP アドレスは再起動後に保持されません。 詳しい情報については、Google ガイドの「[静的外部 IP アドレスを予約する](https://cloud.google.com/compute/docs/configure-instance-ip-addresses)」を参照してください。

稼働状態の High Availability 設定では、プライマリアプライアンスとレプリカアプライアンスの両方に別々の静的 IP アドレスを割り当ててください。

### {% data variables.product.prodname_ghe_server %} インスタンスを作成する

{% data variables.product.prodname_ghe_server %} インスタンスを作成するには、{% data variables.product.prodname_ghe_server %} イメージを使用して GCE インスタンスを作成し、インスタンスデータ用の追加のストレージボリュームをアタッチする必要があります。 詳細は「[ハードウェアについて](#hardware-considerations)」を参照してください。

1. gcloud computeコマンドラインツールを使い、インスタンスデータのためのストレージボリュームとしてアタッチして使うデータディスクを作成し、そのサイズをユーザライセンス数に基づいて設定してください。 詳しい情報については、Google ドキュメンテーションの「[gcloud compute disks create](https://cloud.google.com/sdk/gcloud/reference/compute/disks/create)」を参照してください。
   ```shell
   $ gcloud compute disks create <em>DATA-DISK-NAME</em> --size <em>DATA-DISK-SIZE</em> --type <em>DATA-DISK-TYPE</em> --zone <em>ZONE</em>
   ```

2. 次に、選択した {% data variables.product.prodname_ghe_server %} イメージの名前を使用してインスタンスを作成し、データディスクをアタッチします。 詳しい情報については、Googleドキュメンテーションの「[gcloud compute instances create](https://cloud.google.com/sdk/gcloud/reference/compute/instances/create)」を参照してください。
   ```shell
   $ gcloud compute instances create <em>INSTANCE-NAME</em> \
   --machine-type n1-standard-8 \
   --image <em>GITHUB-ENTERPRISE-IMAGE-NAME</em> \
   --disk name=<em>DATA-DISK-NAME</em> \
   --metadata serial-port-enable=1 \
   --zone <em>ZONE</em> \
   --network <em>NETWORK-NAME</em> \
   --image-project github-enterprise-public
   ```

### インスタンスの設定

{% data reusables.enterprise_installation.copy-the-vm-public-dns-name %}
{% data reusables.enterprise_installation.upload-a-license-file %}
{% data reusables.enterprise_installation.save-settings-in-web-based-mgmt-console %}詳しい情報については、「[{% data variables.product.prodname_ghe_server %} アプライアンスを設定する](/enterprise/admin/guides/installation/configuring-the-github-enterprise-server-appliance)」を参照してください。
{% data reusables.enterprise_installation.instance-will-restart-automatically %}
{% data reusables.enterprise_installation.visit-your-instance %}

### 参考リンク

- "[System overview](/enterprise/admin/guides/installation/system-overview)"{% if currentVersion ver_gt "enterprise-server@2.22" %}
- "[About upgrades to new releases](/admin/overview/about-upgrades-to-new-releases)"{% endif %}
