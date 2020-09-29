---
title: AWS で GitHub Enterprise Server をインストールする
intro: '{% data variables.product.prodname_ghe_server %} をAmazon Web Services (AWS) にインストールするには、Amazon Elastic Compute Cloud (EC2) インスタンスを起動し、個別の Amazon Elastic Block Store (EBS) データボリュームを作成してアタッチする必要があります。'
redirect_from:
  - /enterprise/admin/guides/installation/installing-github-enterprise-on-aws/
  - /enterprise/admin/installation/installing-github-enterprise-server-on-aws
versions:
  enterprise-server: '*'
---

### 必要な環境

- {% data reusables.enterprise_installation.software-license %}
- EC2 インスタンスを起動してEBS ボリュームを作成できる AWS アカウントを所有している必要があります。 詳細は [Amazon Web Services のウェブサイト](https://aws.amazon.com/)を参照してください。
- {% data variables.product.product_location_enterprise %}の起動に必要なほとんどのアクションは、AWSマネジメントコンソールを使っても行えます。 とはいえ、初期のセットアップのためにAWSコマンドラインインターフェース（CLI）をインストールすることをおすすめします。 AWS CLIの使用例は以下にあります。 詳しい情報については、Amazonのガイド"[AWSマネジメントコンソールの操作](https://docs.aws.amazon.com/ja_jp/awsconsolehelpdocs/latest/gsg/getting-started.html)"及び"[AWS Command Line Interfaceとは](https://docs.aws.amazon.com/ja_jp/cli/latest/userguide/cli-chap-welcome.html)"を参照してください。

本ガイドは、読者が以下のAWSの概念に馴染んでいることを前提としています。

 - [EC2インスタンスの起動](http://docs.aws.amazon.com/AWSEC2/latest/UserGuide/LaunchingAndUsingInstances.html)
 - [EBSボリュームの管理](http://docs.aws.amazon.com/AWSEC2/latest/UserGuide/AmazonEBS.html)
 - [セキュリティグループの利用](https://docs.aws.amazon.com/ja_jp/AWSEC2/latest/UserGuide/using-network-security.html)（インスタンスへのネットワークアクセスの管理用）
 - [Elastic IPアドレス](https://docs.aws.amazon.com/ja_jp/AWSEC2/latest/UserGuide/elastic-ip-addresses-eip.html)（プロダクション環境では強く推奨）
 - [Amazon EC2 と Amazon Virtual Private Cloud](https://docs.aws.amazon.com/ja_jp/AWSEC2/latest/UserGuide/using-vpc.html)（Virtual Private Cloud内での起動を計画しているなら）

### ハードウェアについて

{% data reusables.enterprise_installation.hardware-considerations-all-platforms %}

### インスタンスタイプの決定

AWSで{% data variables.product.product_location_enterprise %}を起動する前に、組織の要求に最も適した仮想マシンのタイプを決定しなければなりません。

#### サポートされているインスタンスタイプ

{% data reusables.enterprise_installation.aws-supported-instance-types %}

#### 推奨されるインスタンスタイプ

{% data reusables.enterprise_installation.aws-recommended-instance-types %}

{% data reusables.enterprise_installation.warning-on-scaling %}

### {% data variables.product.prodname_ghe_server %} AMI を選択する

{% data variables.product.prodname_ghe_server %} には、{% data variables.product.prodname_ghe_server %} ポータルまたは AWS CLI を使用することで、Amazon Machine Image (AMI) を選択できます。

{% data variables.product.prodname_ghe_server %}用のAMIは、AWS GovCloud (US東部およびUS西部) 地域で利用できます。 これにより、特定の規制要件を満たす米国のお客様は、連邦準拠のクラウド環境で {% data variables.product.prodname_ghe_server %} を実行できます。 AWSの連邦及びその他の標準への準拠に関する詳しい情報については[AWS's GovCloud (US) page](http://aws.amazon.com/govcloud-us/) and [AWS コンプライアンスページ](https://aws.amazon.com/jp/compliance/)を参照してください。

#### {% data variables.product.prodname_ghe_server %} を使用して AMI を選択する

{% data reusables.enterprise_installation.enterprise-download-procedural %}
{% data reusables.enterprise_installation.download-appliance %}
3. Select your platform（プラットフォームの選択）ドロップダウンメニューで**Amazon Web Services**をクリックしてください。
4. Select your AWS region（AWSのリージョン選択）ドロップダウンメニューで、希望するリージョンを選択してください。
5. 表示されたAMI IDをメモしておいてください。

#### AWS CLIを使ったAMIの選択

1. AWS CLI を使用して、{% data variables.product.prodname_dotcom %} の AWS オーナー ID (GovCloud の場合は `025577942450`、その他の地域の場合は `895557238572`) によって公開された {% data variables.product.prodname_ghe_server %} イメージのリストを取得します。 詳しい情報についてはAWSのドキュメンテーションの"[describe-images](http://docs.aws.amazon.com/cli/latest/reference/ec2/describe-images.html)"を参照してください。
  ```shell
  aws ec2 describe-images \
  --owners <em>OWNER ID</em> \
  --query 'sort_by(Images,&Name)[*].{Name:Name,ImageID:ImageId}' \
  --output=text
  ```
2. 最新の {% data variables.product.prodname_ghe_server %} イメージ用の AMI ID をメモしておきます。

### セキュリティグループの作成

AMI を初めてセットアップする場合は、セキュリティグループを作成し、下記の表にある各ポートに関する新しいセキュリティグループのルールを追加する必要があります。 詳しい情報については、AWS ガイドの「[Using Security Groups](http://docs.aws.amazon.com/cli/latest/userguide/cli-ec2-sg.html)」を参照してください。

1. AWS CLI を使用して、新しいセキュリティグループを作成します。 詳しい情報については、AWS ドキュメンテーションの「[create-security-group](http://docs.aws.amazon.com/cli/latest/reference/ec2/create-security-group.html)」を参照してください。
  ```shell
  $ aws ec2 create-security-group --group-name <em>SECURITY_GROUP_NAME</em> --description "<em>SECURITY GROUP DESCRIPTION</em>"
  ```

2. 新しく作成したセキュリティグループのセキュリティグループ ID (`sg-xxxxxxxx`) をメモしておきます。

3. 下記の表にある各ポートに関するセキュリティグループのルールを作成します。 詳しい情報については、AWS ドキュメンテーションの「[authorize-security-group-ingress](http://docs.aws.amazon.com/cli/latest/reference/ec2/authorize-security-group-ingress.html)」を参照してください。
  ```shell
  $ aws ec2 authorize-security-group-ingress --group-id <em>SECURITY_GROUP_ID</em> --protocol <em>PROTOCOL</em> --port <em>PORT_NUMBER</em> --cidr <em>SOURCE IP RANGE</em>
  ```
  次の表に、各ポートの使用目的を示します

  {% data reusables.enterprise_installation.necessary_ports %}

### {% data variables.product.prodname_ghe_server %} インスタンスを作成する

インスタンスを作成するには、{% data variables.product.prodname_ghe_server %} AMI を使用して EC2 インスタンスを起動し、インスタンスデータ用の追加のストレージボリュームをアタッチする必要があります。 詳細は「[ハードウェアについて](#hardware-considerations)」を参照してください。

{% note %}

**注釈:** データディスクを暗号化してセキュリティを強化すれば、インスタンスに書き込むデータを確実に保護することができます。 暗号化ディスクを使用すると、パフォーマンスにわずかな影響が生じます。 ボリュームを暗号化することに決めた場合は、インスタンスを初めて起動する**前に**暗号化することを強くおすすめします。 詳しい情報については、[EBS 暗号化に関する Amazon のガイド](http://docs.aws.amazon.com/AWSEC2/latest/UserGuide/EBSEncryption.html)を参照してください。

{% endnote %}

{% warning %}

**警告:** インスタンスを設定した後に暗号化を有効にすると決めた場合は、データを暗号化されたボリュームに移行する必要があります。これにより、ある程度のダウンタイムが生じます。

{% endwarning %}

#### EC2 インスタンスの起動

AWS CLI で、AMI および作成したセキュリティグループを使用して EC2 インスタンスを起動します。 インスタンスデータ用にストレージボリュームとして使うための新しいブロックデバイスをアタッチし、サイズをユーザライセンス数に基づいて設定してください。 詳しい情報については、AWS ドキュメンテーションの「[describe-images](http://docs.aws.amazon.com/cli/latest/reference/ec2/run-instances.html)」を参照してください。

```shell
aws ec2 run-instances \
  --security-group-ids <em>SECURITY_GROUP_ID</em> \
  --instance-type <em>INSTANCE_TYPE</em> \
  --image-id <em>AMI_ID</em> \
  --block-device-mappings '[{"DeviceName":"/dev/xvdf","Ebs":{"VolumeSize":<em>SIZE</em>,"VolumeType":"<em>TYPE</em>"}}]' \
  --region <em>REGION</em> \
  --ebs-optimized
```

#### Elastic IP を割り当ててとインスタンスに関連付ける

これが本番インスタンスである場合は、{% data variables.product.prodname_ghe_server %} の設定に進む前に、Elastic IP (EIP) を割り当ててそれをインスタンスに関連付けることを強くおすすめします。 そうしなければ、インスタンスのパブリック IP アドレスはインスタンスの再起動後に保持されません。 詳しい情報については、Amazon ドキュメンテーションの「[Elastic IP アドレスを割り当てる](https://docs.aws.amazon.com/ja_jp/AWSEC2/latest/UserGuide/elastic-ip-addresses-eip.html#using-instance-addressing-eips-allocating)」および「[Elastic IP アドレスを実行中のインスタンスに関連付ける](https://docs.aws.amazon.com/ja_jp/AWSEC2/latest/UserGuide/elastic-ip-addresses-eip.html#using-instance-addressing-eips-associating)」を参照してください。

稼働状態の High Availability 設定では、プライマリインスタンスとレプリカインスタンスの両方に別々の EIP を割り当ててください。 詳細は「[High Availability 用に {% data variables.product.prodname_ghe_server %} を設定する](/enterprise/{{ currentVersion }}/admin/guides/installation/configuring-github-enterprise-server-for-high-availability/)」を参照してください。

### {% data variables.product.prodname_ghe_server %} インスタンスを設定する

{% data reusables.enterprise_installation.copy-the-vm-public-dns-name %}
{% data reusables.enterprise_installation.upload-a-license-file %}
{% data reusables.enterprise_installation.save-settings-in-web-based-mgmt-console %}詳しい情報については、「[{% data variables.product.prodname_ghe_server %} アプライアンスを設定する](/enterprise/admin/guides/installation/configuring-the-github-enterprise-server-appliance)」を参照してください。
{% data reusables.enterprise_installation.instance-will-restart-automatically %}
{% data reusables.enterprise_installation.visit-your-instance %}

### 参考リンク

- "[システムの概要](/enterprise/admin/guides/installation/system-overview)"
