---
title: AWS で GitHub Enterprise Server をインストールする
intro: '{% data variables.product.prodname_ghe_server %} をAmazon Web Services (AWS) にインストールするには、Amazon Elastic Compute Cloud (EC2) インスタンスを起動し、個別の Amazon Elastic Block Store (EBS) データボリュームを作成してアタッチする必要があります。'
redirect_from:
  - /enterprise/admin/guides/installation/installing-github-enterprise-on-aws
  - /enterprise/admin/installation/installing-github-enterprise-server-on-aws
  - /admin/installation/installing-github-enterprise-server-on-aws
versions:
  ghes: '*'
type: tutorial
topics:
  - Administrator
  - Enterprise
  - Infrastructure
  - Set up
shortTitle: Install on AWS
ms.openlocfilehash: f91f2337cc13690d0476c836a15ec72a5c0685cb
ms.sourcegitcommit: 5b1461b419dbef60ae9dbdf8e905a4df30fc91b7
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/10/2022
ms.locfileid: '147878723'
---
## 前提条件

- {% data reusables.enterprise_installation.software-license %}
- EC2 インスタンスを起動してEBS ボリュームを作成できる AWS アカウントを所有している必要があります。 詳細については、[アマゾン ウェブ サービスの Web サイト](https://aws.amazon.com/)を参照してください。
- {% data variables.product.product_location %} の起動に必要なほとんどのアクションは、AWS 管理コンソールを使って実行することもできます。 とはいえ、初期のセットアップのためにAWSコマンドラインインターフェース（CLI）をインストールすることをおすすめします。 AWS CLIの使用例は以下にあります。 詳細については、Amazon の [AWS 管理コンソールの操作](http://docs.aws.amazon.com/awsconsolehelpdocs/latest/gsg/getting-started.html)および [AWS コマンド ライン インターフェイスの概要](http://docs.aws.amazon.com/cli/latest/userguide/cli-chap-welcome.html)に関するガイドを参照してください。

{% note %}

**注:** 現時点では、{% data variables.product.prodname_ghe_server %} では Amazon IDMSv2 メタデータ API の使用はサポートされていません。

{% endnote %}

本ガイドは、読者が以下のAWSの概念に馴染んでいることを前提としています。

 - [EC2 インスタンスの起動](http://docs.aws.amazon.com/AWSEC2/latest/UserGuide/LaunchingAndUsingInstances.html)
 - [EBS ボリュームの管理](http://docs.aws.amazon.com/AWSEC2/latest/UserGuide/AmazonEBS.html)
 - [セキュリティ グループの使用](http://docs.aws.amazon.com/AWSEC2/latest/UserGuide/using-network-security.html) (インスタンスへのネットワーク アクセスを管理する場合)
 - [エラスティック IP アドレス (EIP)](http://docs.aws.amazon.com/AWSEC2/latest/UserGuide/elastic-ip-addresses-eip.html) (運用環境では強くお勧めします)
 - [EC2 と仮想プライベート クラウド](http://docs.aws.amazon.com/AWSEC2/latest/UserGuide/using-vpc.html) (仮想プライベート クラウドでの起動を計画している場合)
 - [AWS の価格](https://aws.amazon.com/pricing/) (コストを計算して管理する場合)

アーキテクチャの概要については、[GitHub Enterprise Server のデプロイに関する AWS のアーキテクチャの図](/assets/images/installing-github-enterprise-server-on-aws.png)を参照してください。 

このガイドでは、AWS で {% data variables.product.product_location %} を設定する際に最小権限の原則を推奨しています。 詳細については、[AWS の ID とアクセス管理 (IAM) に関するドキュメント](https://docs.aws.amazon.com/IAM/latest/UserGuide/best-practices.html#grant-least-privilege)を参照してください。

## ハードウェアに関する考慮事項

{% data reusables.enterprise_installation.hardware-considerations-all-platforms %}

## インスタンスタイプの決定

AWS で{% data variables.product.product_location %} を起動する前に、Organization のニーズに最適なマシンタイプを決定する必要があります。 {% data variables.product.product_name %} の最小要件を確認するには、「[最小要件](#minimum-requirements)」を参照してください。

{% data reusables.enterprise_installation.warning-on-scaling %}

{% data reusables.enterprise_installation.aws-instance-recommendation %}

## {% data variables.product.prodname_ghe_server %} AMI を選択する

{% data variables.product.prodname_ghe_server %} には、{% data variables.product.prodname_ghe_server %} ポータルまたは AWS CLI を使用することで、Amazon Machine Image (AMI) を選択できます。

{% data variables.product.prodname_ghe_server %}用のAMIは、AWS GovCloud (US東部およびUS西部) 地域で利用できます。 これにより、特定の規制要件を満たす米国のお客様は、連邦準拠のクラウド環境で {% data variables.product.prodname_ghe_server %} を実行できます。 AWS の連邦および他の標準への準拠の詳細については、[AWS の GovCloud (米国) ページ](http://aws.amazon.com/govcloud-us/)と [AWS のコンプライアンス ページ](https://aws.amazon.com/compliance/)を参照してください。

### {% data variables.product.prodname_ghe_server %} を使用して AMI を選択する

{% data reusables.enterprise_installation.download-appliance %}
3. [クラウドの {% data variables.product.prodname_dotcom %}] の下にある [プラットフォームの選択] ドロップダウン メニューを選択し、 **[アマゾン ウェブ サービス]** をクリックします。
4. [AWS のリージョンの選択] ドロップダウン メニューを選択し、希望するリージョンをクリックします。
5. 表示されたAMI IDをメモしておいてください。

### AWS CLIを使ったAMIの選択

1. AWS CLI を使用して、{% data variables.product.prodname_dotcom %} の AWS オーナー ID (GovCloud の場合は `025577942450`、他のリージョンの場合は `895557238572`) によって公開されている {% data variables.product.prodname_ghe_server %} のイメージのリストを取得します。 詳細については、AWS のドキュメントの "[describe-images](http://docs.aws.amazon.com/cli/latest/reference/ec2/describe-images.html)" を参照してください。
  ```shell
  aws ec2 describe-images \
  --owners <em>OWNER ID</em> \
  --query 'sort_by(Images,&Name)[*].{Name:Name,ImageID:ImageId}' \
  --output=text
  ```
2. 最新の {% data variables.product.prodname_ghe_server %} イメージ用の AMI ID をメモしておきます。

## セキュリティ グループの作成

AMI を初めてセットアップする場合は、セキュリティグループを作成し、下記の表にある各ポートに関する新しいセキュリティグループのルールを追加する必要があります。 詳細については、[セキュリティ グループの使用](http://docs.aws.amazon.com/cli/latest/userguide/cli-ec2-sg.html)に関する AWS のガイドを参照してください。

1. AWS CLI を使用して、新しいセキュリティグループを作成します。 詳細については、AWS のドキュメントの "[create-security-group](http://docs.aws.amazon.com/cli/latest/reference/ec2/create-security-group.html)" を参照してください。
  ```shell
  $ aws ec2 create-security-group --group-name <em>SECURITY_GROUP_NAME</em> --description "<em>SECURITY GROUP DESCRIPTION</em>"
  ```

2. 新しく作成したセキュリティ グループのセキュリティ グループ ID (`sg-xxxxxxxx`) を書き留めておきます。

3. 下記の表にある各ポートに関するセキュリティグループのルールを作成します。 詳細については、AWS のドキュメントの "[authorize-security-group-ingress](http://docs.aws.amazon.com/cli/latest/reference/ec2/authorize-security-group-ingress.html)" を参照してください。
  ```shell
  $ aws ec2 authorize-security-group-ingress --group-id <em>SECURITY_GROUP_ID</em> --protocol <em>PROTOCOL</em> --port <em>PORT_NUMBER</em> --cidr <em>SOURCE IP RANGE</em>
  ```
  次の表に、各ポートの使用目的を示します

  {% data reusables.enterprise_installation.necessary_ports %}

## {% data variables.product.prodname_ghe_server %} インスタンスを作成する

インスタンスを作成するには、{% data variables.product.prodname_ghe_server %} AMI を使用して EC2 インスタンスを起動し、インスタンスデータ用の追加のストレージボリュームをアタッチする必要があります。 詳細については、「[ハードウェアに関する考慮事項](#hardware-considerations)」を参照してください。

{% note %}

**注:** データ ディスクを暗号化してセキュリティを強化し、インスタンスに書き込むデータを確実に保護することができます。 暗号化ディスクを使用すると、パフォーマンスにわずかな影響が生じます。 ボリュームを暗号化する場合は、インスタンスを初めて起動する **前に** それを行うことを強くお勧めします。
詳細については、[EBS 暗号化に関する Amazon のガイド](http://docs.aws.amazon.com/AWSEC2/latest/UserGuide/EBSEncryption.html)を参照してください。

{% endnote %}

{% warning %}

**警告:** インスタンスを構成した後で暗号化を有効にする場合は、データを暗号化されたボリュームに移行する必要があり、ユーザーに若干のダウンタイムが発生します。

{% endwarning %}

### EC2 インスタンスの起動

AWS CLI で、AMI および作成したセキュリティグループを使用して EC2 インスタンスを起動します。 インスタンスデータ用にストレージボリュームとして使うための新しいブロックデバイスをアタッチし、サイズをユーザライセンス数に基づいて設定してください。 詳細については、AWS のドキュメントの "[run-instances](http://docs.aws.amazon.com/cli/latest/reference/ec2/run-instances.html)" を参照してください。

```shell
aws ec2 run-instances \
  --security-group-ids <em>SECURITY_GROUP_ID</em> \
  --instance-type <em>INSTANCE_TYPE</em> \
  --image-id <em>AMI_ID</em> \
  --block-device-mappings '[{"DeviceName":"/dev/xvdf","Ebs":{"VolumeSize":<em>SIZE</em>,"VolumeType":"<em>TYPE</em>"}}]' \
  --region <em>REGION</em> \
  --ebs-optimized
```

### Elastic IP を割り当ててとインスタンスに関連付ける

これが本番インスタンスである場合は、{% data variables.product.prodname_ghe_server %} の設定に進む前に、Elastic IP (EIP) を割り当ててそれをインスタンスに関連付けることを強くおすすめします。 そうしなければ、インスタンスのパブリック IP アドレスはインスタンスの再起動後に保持されません。 詳細については、Amazon のドキュメントの[エラスティック IP アドレスの割り当て](http://docs.aws.amazon.com/AWSEC2/latest/UserGuide/elastic-ip-addresses-eip.html#using-instance-addressing-eips-allocating)および[実行中のインスタンスへのエラスティック IP アドレスの関連付け](http://docs.aws.amazon.com/AWSEC2/latest/UserGuide/elastic-ip-addresses-eip.html#using-instance-addressing-eips-associating)に関するページを参照してください。  

稼働状態の High Availability 設定では、プライマリインスタンスとレプリカインスタンスの両方に別々の EIP を割り当ててください。 詳細については、[高可用性のための {% data variables.product.prodname_ghe_server %} の構成](/enterprise/admin/guides/installation/configuring-github-enterprise-server-for-high-availability/)に関するページを参照してください。

## {% data variables.product.prodname_ghe_server %} インスタンスを設定する

{% data reusables.enterprise_installation.copy-the-vm-public-dns-name %} {% data reusables.enterprise_installation.upload-a-license-file %} {% data reusables.enterprise_installation.save-settings-in-web-based-mgmt-console %} 詳細については、[{% data variables.product.prodname_ghe_server %} アプライアンスの構成](/enterprise/admin/guides/installation/configuring-the-github-enterprise-server-appliance)に関するページを参照してください。
{% data reusables.enterprise_installation.instance-will-restart-automatically %} {% data reusables.enterprise_installation.visit-your-instance %}

## 参考資料

- [システムの概要](/enterprise/admin/guides/installation/system-overview){% ifversion ghes %}
- [新しいリリースへのアップグレードについて](/admin/overview/about-upgrades-to-new-releases){% endif %}
