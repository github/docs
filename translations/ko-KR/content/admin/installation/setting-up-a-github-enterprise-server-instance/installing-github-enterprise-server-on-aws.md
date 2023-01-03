---
title: AWS에 GitHub Enterprise Server 설치
intro: 'AWS(Amazon Web Services)에 {% data variables.product.prodname_ghe_server %}를 설치하려면 AMAZON EC2(Elastic Compute Cloud) 인스턴스를 시작하고 별도의 Amazon EBS(Elastic Block Store) 데이터 볼륨을 만들고 연결해야 합니다.'
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
ms.openlocfilehash: ff48a8cd466a14259dfe1da895c3b7aa6621df82
ms.sourcegitcommit: d697e0ea10dc076fd62ce73c28a2b59771174ce8
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 10/20/2022
ms.locfileid: '148094115'
---
## 필수 조건

- {% data reusables.enterprise_installation.software-license %}
- EC2 인스턴스를 시작하고 EBS 볼륨을 만들 수 있는 AWS 계정이 있어야 합니다. 자세한 내용은 [Amazon Web Services 웹 사이트](https://aws.amazon.com/)를 참조하세요.
- {% 데이터 variables.location.product_location %}을(를) 시작하는 데 필요한 대부분의 작업은 AWS 관리 콘솔을 사용하여 수행할 수도 있습니다. 그러나 초기 설정을 위해 AWS CLI(명령줄 인터페이스)를 설치하는 것이 좋습니다. AWS CLI를 사용하는 예제는 다음과 같습니다. 자세한 내용은 Amazon 가이드 "[AWS Management Console 사용](http://docs.aws.amazon.com/awsconsolehelpdocs/latest/gsg/getting-started.html)" 및 "[AWS 명령줄 인터페이스란?](http://docs.aws.amazon.com/cli/latest/userguide/cli-chap-welcome.html)"을 참조하세요.

{% note %}

**참고:** 현재 {% data variables.product.prodname_ghe_server %}는 Amazon IDMSv2 메타데이터 API 사용을 지원하지 않습니다.

{% endnote %}

이 .가이드에서는 사용자가 다음 AWS 개념에 대해 잘 알고 있다고 가정합니다.

 - [EC2 인스턴스 시작](http://docs.aws.amazon.com/AWSEC2/latest/UserGuide/LaunchingAndUsingInstances.html)
 - [EBS 볼륨 관리](http://docs.aws.amazon.com/AWSEC2/latest/UserGuide/AmazonEBS.html)
 - [보안 그룹 사용](http://docs.aws.amazon.com/AWSEC2/latest/UserGuide/using-network-security.html)(인스턴스에 대한 네트워크 액세스 관리)
 - [EIP(탄력적 IP 주소)](http://docs.aws.amazon.com/AWSEC2/latest/UserGuide/elastic-ip-addresses-eip.html)(프로덕션 환경에 강력하게 권장됨)
 - [EC2 및 가상 프라이빗 클라우드](http://docs.aws.amazon.com/AWSEC2/latest/UserGuide/using-vpc.html)(가상 프라이빗 클라우드에서 시작하려는 경우)
 - [AWS 가격 책정](https://aws.amazon.com/pricing/)(비용 계산 및 관리)

아키텍처 개요는 "[GitHub Enterprise Server 배포를 위한 AWS 아키텍처 다이어그램](/assets/images/installing-github-enterprise-server-on-aws.png)"을 참조하세요. 

이 가이드에서는 AWS에서 {% 데이터 variables.location.product_location %}을(를) 설정할 때 최소 권한 원칙을 권장합니다. 자세한 내용은 [AWS IAM(ID 및 액세스 관리) 설명서](https://docs.aws.amazon.com/IAM/latest/UserGuide/best-practices.html#grant-least-privilege)를 참조하세요.

## 하드웨어 고려 사항

{% data reusables.enterprise_installation.hardware-considerations-all-platforms %}

## 인스턴스 유형 확인

AWS에서 {% 데이터 variables.location.product_location %}을(를) 시작하기 전에 조직의 요구 사항에 가장 적합한 컴퓨터 유형을 결정해야 합니다. {% data variables.product.product_name %}에 대한 최소 요구 사항을 검토하려면 "[최소 요구 사항](#minimum-requirements)"을 참조하세요.

{% data reusables.enterprise_installation.warning-on-scaling %}

{% data reusables.enterprise_installation.aws-instance-recommendation %}

## {% data variables.product.prodname_ghe_server %} AMI 선택

{% data variables.product.prodname_ghe_server %} 포털 또는 AWS CLI를 사용하여 {% data variables.product.prodname_ghe_server %}에 대한 AMI(Amazon Machine Image)를 선택할 수 있습니다.

{% data variables.product.prodname_ghe_server %}에 대한 API는 AWS GovCloud(미국 동부 및 미국 서부) 지역에서 사용할 수 있습니다. 이를 통해 특정 규정 요구 사항이 있는 미국 고객이 연방 규정 준수 클라우드 환경에서 {% data variables.product.prodname_ghe_server %}를 실행할 수 있습니다. AWS의 연방 및 기타 표준 준수에 대한 자세한 내용은 [AWS의 GovCloud(미국) 페이지](http://aws.amazon.com/govcloud-us/) 및 [AWS 규정 준수 페이지](https://aws.amazon.com/compliance/)를 참조하세요.

### {% data variables.product.prodname_ghe_server %} 포털을 사용하여 AMI 선택

{% data reusables.enterprise_installation.download-appliance %}
3. "클라우드의 {% data variables.product.prodname_dotcom %}"에서 "플랫폼 선택" 드롭다운 메뉴를 선택하고 **Amazon Web Services** 를 클릭합니다.
4. "AWS 지역 선택" 드롭다운 메뉴를 선택하고 원하는 지역을 클릭합니다.
5. 표시되는 AMI ID를 기록해 둡니다.

### AWS CLI를 사용하여 AMI 선택

1. AWS CLI를 사용하여 {% data variables.product.prodname_dotcom %}의 AWS 소유자 ID(GovCloud의 경우 `025577942450` 및 기타 지역의 경우 `895557238572`)에서 게시한 {% data variables.product.prodname_ghe_server %} 이미지 목록을 가져옵니다. 자세한 내용은 AWS 설명서의 "[describe-images](http://docs.aws.amazon.com/cli/latest/reference/ec2/describe-images.html)"를 참조하세요.
  ```shell
  aws ec2 describe-images \
  --owners OWNER_ID \
  --query 'sort_by(Images,&Name)[*].{Name:Name,ImageID:ImageId}' \
  --output=text
  ```
2. 최신 {% data variables.product.prodname_ghe_server %} 이미지에 대한 AMI ID를 기록해 둡니다.

## 보안 그룹 만들기

AMI를 처음으로 설정하는 경우 보안 그룹을 만들고 아래 표의 각 포트에 대한 새 보안 그룹 규칙을 추가해야 합니다. 자세한 내용은 AWS 가이드 "[보안 그룹 사용](http://docs.aws.amazon.com/cli/latest/userguide/cli-ec2-sg.html)"을 참조하세요.

1. AWS CLI를 사용하여 새 보안 그룹을 만듭니다. 자세한 내용은 AWS 설명서의 "[create-security-group](http://docs.aws.amazon.com/cli/latest/reference/ec2/create-security-group.html)"을 참조하세요.
  ```shell
  $ aws ec2 create-security-group --group-name SECURITY_GROUP_NAME --description "SECURITY GROUP DESCRIPTION"
  ```

2. 새로 만든 보안 그룹의 보안 그룹 ID(`sg-xxxxxxxx`)를 기록해 둡니다.

3. 아래 표의 각 포트에 대한 보안 그룹 규칙을 만듭니다. 자세한 내용은 AWS 설명서의 "[authorize-security-group-ingress](http://docs.aws.amazon.com/cli/latest/reference/ec2/authorize-security-group-ingress.html)"를 참조하세요.
  ```shell
  $ aws ec2 authorize-security-group-ingress --group-id SECURITY_GROUP_ID --protocol PROTOCOL --port PORT_NUMBER --cidr SOURCE IP RANGE
  ```
  이 표는 각 포트가 사용되는 대상을 식별합니다.

  {% data reusables.enterprise_installation.necessary_ports %}

## {% data variables.product.prodname_ghe_server %} 인스턴스 만들기

인스턴스를 만들려면 {% data variables.product.prodname_ghe_server %} AMI를 사용하여 EC2 인스턴스를 시작하고 인스턴스 데이터에 대한 추가 스토리지 볼륨을 연결해야 합니다. 자세한 내용은 “[하드웨어 고려사항](#hardware-considerations)”을 참조하세요.

{% note %}

**참고:** 데이터 디스크를 암호화하여 추가 수준의 보안을 확보하고 인스턴스에 쓰는 모든 데이터가 보호되도록 할 수 있습니다. 암호화된 디스크를 사용하는 경우 성능이 약간 향상됩니다. 볼륨을 암호화하기로 결정한 경우 인스턴스를 처음 시작하기 **전에** 이 작업을 수행하는 것이 좋습니다.
자세한 내용은 [EBS 암호화에 대한 Amazon 가이드](http://docs.aws.amazon.com/AWSEC2/latest/UserGuide/EBSEncryption.html)를 참조하세요.

{% endnote %}

{% warning %}

**경고:** 인스턴스를 구성한 후 암호화를 사용하도록 설정하려는 경우 데이터를 암호화된 볼륨으로 마이그레이션해야 하므로 사용자에게 약간의 가동 중지 시간이 발생합니다.

{% endwarning %}

### EC2 인스턴스 시작

AWS CLI에서 AMI 및 만든 보안 그룹을 사용하여 EC2 인스턴스를 시작합니다. 인스턴스 데이터에 대해 스토리지 볼륨으로 사용할 새 블록 디바이스를 연결하고 사용자 라이선스 수에 따라 크기를 구성합니다. 자세한 내용은 AWS 설명서의 "[run-instances](http://docs.aws.amazon.com/cli/latest/reference/ec2/run-instances.html)"를 참조하세요.

```shell
aws ec2 run-instances \
  --security-group-ids SECURITY_GROUP_ID \
  --instance-type INSTANCE_TYPE \
  --image-id AMI_ID \
  --block-device-mappings '[{"DeviceName":"/dev/xvdf","Ebs":{"VolumeSize":SIZE,"VolumeType":"TYPE"}}]' \
  --region REGION \
  --ebs-optimized
```

### 탄력적 IP 할당 및 인스턴스와 연결

프로덕션 인스턴스인 경우 {% data variables.product.prodname_ghe_server %} 구성을 진행하기 전에 EIP(탄력적 IP)를 할당하고 인스턴스와 연결하는 것이 좋습니다. 그렇지 않으면 인스턴스가 다시 시작된 후 인스턴스의 공용 IP 주소가 유지되지 않습니다. 자세한 내용은 Amazon 설명서에서 "[탄력적 IP 주소 할당](http://docs.aws.amazon.com/AWSEC2/latest/UserGuide/elastic-ip-addresses-eip.html#using-instance-addressing-eips-allocating)" 및 "[실행 중인 인스턴스와 탄력적 IP 주소 연결](http://docs.aws.amazon.com/AWSEC2/latest/UserGuide/elastic-ip-addresses-eip.html#using-instance-addressing-eips-associating)"을 참조하세요.  

프로덕션 고가용성 구성에서 기본 및 복제본 인스턴스에는 별도의 EIP가 할당되어야 합니다. 자세한 내용은 “[고가용성을 위한 {% data variables.product.prodname_ghe_server %} 구성](/enterprise/admin/guides/installation/configuring-github-enterprise-server-for-high-availability/)”을 참조하세요.

## {% data variables.product.prodname_ghe_server %} 인스턴스 구성

{% data reusables.enterprise_installation.copy-the-vm-public-dns-name %} {% data reusables.enterprise_installation.upload-a-license-file %} {% data reusables.enterprise_installation.save-settings-in-web-based-mgmt-console %} 자세한 내용은 “[{% data variables.product.prodname_ghe_server %} 어플라이언스 구성](/enterprise/admin/guides/installation/configuring-the-github-enterprise-server-appliance)”을 참조하세요.
{% data reusables.enterprise_installation.instance-will-restart-automatically %} {% data reusables.enterprise_installation.visit-your-instance %}

## 추가 참고 자료

- “[시스템 개요](/enterprise/admin/guides/installation/system-overview)”{% ifversion ghes %}
- “[새 릴리스로 업그레이드 정보](/admin/overview/about-upgrades-to-new-releases)”{% endif %}
