---
title: Google Cloud Platform에 GitHub Enterprise Server 설치
intro: 'Google Cloud Platform에 {% data variables.product.prodname_ghe_server %}를 설치하려면 지원되는 머신 유형에 배포하고 영구적 표준 디스크 또는 영구적 SSD를 사용해야 합니다.'
redirect_from:
  - /enterprise/admin/guides/installation/installing-github-enterprise-on-google-cloud-platform
  - /enterprise/admin/installation/installing-github-enterprise-server-on-google-cloud-platform
  - /admin/installation/installing-github-enterprise-server-on-google-cloud-platform
versions:
  ghes: '*'
type: tutorial
topics:
  - Administrator
  - Enterprise
  - Infrastructure
  - Set up
shortTitle: Install on GCP
ms.openlocfilehash: d996dbfa32cf76e5d86b5b66da1c068d1c5177d8
ms.sourcegitcommit: d697e0ea10dc076fd62ce73c28a2b59771174ce8
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 10/20/2022
ms.locfileid: '148094275'
---
## 필수 조건

- {% data reusables.enterprise_installation.software-license %}
- GCE(Google Compute Engine) VM(가상 머신) 인스턴스를 시작할 수 있는 Google Cloud Platform 계정이 있어야 합니다. 자세한 내용은 [Google Cloud Platform 웹 사이트](https://cloud.google.com/) 및 [Google Cloud Platform 설명서](https://cloud.google.com/docs/)를 참조하세요.
- 인스턴스를 시작하는 데 필요한 대부분의 작업은 [Google Cloud Platform 콘솔](https://cloud.google.com/compute/docs/console)을 사용하여 수행할 수도 있습니다. 그러나 초기 설치를 위해 gcloud compute 명령줄 도구를 설치하는 것이 좋습니다. gcloud compute 명령줄 도구를 사용하는 예제는 다음과 같습니다. 자세한 내용은 Google 설명서의 "[gcloud compute](https://cloud.google.com/compute/docs/gcloud-compute/)" 설치 및 설정 가이드를 참조하세요.

## 하드웨어 고려 사항

{% data reusables.enterprise_installation.hardware-considerations-all-platforms %}

## 머신 유형 확인

Google Cloud Platform에서 {% 데이터 variables.location.product_location %}을(를) 시작하기 전에 조직의 요구에 가장 적합한 컴퓨터 유형을 결정해야 합니다. {% data variables.product.product_name %}에 대한 최소 요구 사항을 검토하려면 "[최소 요구 사항](#minimum-requirements)"을 참조하세요.

{% data reusables.enterprise_installation.warning-on-scaling %}

{% data variables.product.company_short %}에서는 {% data variables.product.prodname_ghe_server %}에 대해 범용 고메모리 머신을 권장합니다. 자세한 내용은 Google Compute Engine 설명서의 "[머신 유형](https://cloud.google.com/compute/docs/machine-types#n2_high-memory_machine_types)"을 참조하세요.

## {% data variables.product.prodname_ghe_server %} 이미지 선택

1. [gcloud compute](https://cloud.google.com/compute/docs/gcloud-compute/) 명령줄 도구를 사용하여 퍼블릭 {% data variables.product.prodname_ghe_server %} 이미지를 나열합니다.
   ```shell
   $ gcloud compute images list --project github-enterprise-public --no-standard-images
   ```

2. {% data variables.product.prodname_ghe_server %}의 최신 GCE 이미지에 대한 이미지 이름을 기록해 둡니다.

## 방화벽 구성

GCE 가상 머신은 방화벽이 있는 네트워크의 멤버로 만들어집니다. {% data variables.product.prodname_ghe_server %} VM과 연결된 네트워크의 경우 아래 표에 나열된 필수 포트를 허용하도록 방화벽을 구성해야 합니다. Google Cloud Platform의 방화벽 규칙에 대한 자세한 내용은 Google 가이드 "[방화벽 규칙 개요](https://cloud.google.com/vpc/docs/firewalls)"를 참조하세요.

1. gcloud compute 명령줄 도구를 사용하여 네트워크를 만듭니다. 자세한 내용은 Google 설명서의 "[gcloud compute networks create](https://cloud.google.com/sdk/gcloud/reference/compute/networks/create)"를 참조하세요.
   ```shell
   $ gcloud compute networks create NETWORK-NAME --subnet-mode auto
   ```
2. 아래 표의 각 포트에 대한 방화벽 규칙을 만듭니다. 자세한 내용은 Google 설명서의 "[gcloud compute firewall-rules](https://cloud.google.com/sdk/gcloud/reference/compute/firewall-rules/)"를 참조하세요.
   ```shell
   $ gcloud compute firewall-rules create RULE-NAME \
   --network NETWORK-NAME \
   --allow tcp:22,tcp:25,tcp:80,tcp:122,udp:161,tcp:443,udp:1194,tcp:8080,tcp:8443,tcp:9418,icmp
   ```
   이 표에서는 필요한 포트와 각 포트가 사용되는 대상을 식별합니다.

   {% data reusables.enterprise_installation.necessary_ports %}

## 고정 IP 할당 및 VM에 할당

프로덕션 어플라이언스인 경우 고정 외부 IP 주소를 예약하고 {% data variables.product.prodname_ghe_server %} VM에 할당하는 것이 좋습니다. 그렇지 않으면 VM의 공용 IP 주소는 다시 시작한 후에 유지되지 않습니다. 자세한 내용은 Google 가이드 "[정적 외부 IP 주소 예약](https://cloud.google.com/compute/docs/configure-instance-ip-addresses)"을 참조하세요.

프로덕션 고가용성 구성에서 기본 및 복제본 어플라이언스에는 별도의 고정 IP 주소가 할당되어야 합니다.

## {% data variables.product.prodname_ghe_server %} 인스턴스 만들기

{% data variables.product.prodname_ghe_server %} 인스턴스를 만들려면 {% data variables.product.prodname_ghe_server %} 이미지를 사용하여 GCE 인스턴스를 만들고 인스턴스 데이터를 위한 추가 스토리지 볼륨을 연결해야 합니다. 자세한 내용은 “[하드웨어 고려사항](#hardware-considerations)”을 참조하세요.

1. gcloud compute 명령줄 도구를 사용하여 인스턴스 데이터에 연결된 스토리지 볼륨으로 사용할 데이터 디스크를 만들고 사용자 라이선스 수에 따라 크기를 구성합니다. 자세한 내용은 Google 설명서의 "[gcloud compute disks create](https://cloud.google.com/sdk/gcloud/reference/compute/disks/create)"를 참조하세요.
   ```shell
   $ gcloud compute disks create DATA-DISK-NAME --size DATA-DISK-SIZE --type DATA-DISK-TYPE --zone ZONE
   ```

2. 그런 다음, 선택한 {% data variables.product.prodname_ghe_server %} 이미지의 이름을 사용하여 인스턴스를 만들고 데이터 디스크를 연결합니다. 자세한 내용은 Google 설명서의 "[gcloud compute instances create](https://cloud.google.com/sdk/gcloud/reference/compute/instances/create)"를 참조하세요.
   ```shell
   $ gcloud compute instances create INSTANCE-NAME \
   --machine-type n1-standard-8 \
   --image GITHUB-ENTERPRISE-IMAGE-NAME \
   --disk name=DATA-DISK-NAME \
   --metadata serial-port-enable=1 \
   --zone ZONE \
   --network NETWORK-NAME \
   --image-project github-enterprise-public
   ```

## 인스턴스 구성

{% data reusables.enterprise_installation.copy-the-vm-public-dns-name %} {% data reusables.enterprise_installation.upload-a-license-file %} {% data reusables.enterprise_installation.save-settings-in-web-based-mgmt-console %} 자세한 내용은 “[{% data variables.product.prodname_ghe_server %} 어플라이언스 구성](/enterprise/admin/guides/installation/configuring-the-github-enterprise-server-appliance)”을 참조하세요.
{% data reusables.enterprise_installation.instance-will-restart-automatically %} {% data reusables.enterprise_installation.visit-your-instance %}

## 추가 참고 자료

- “[시스템 개요](/enterprise/admin/guides/installation/system-overview)”{% ifversion ghes %}
- “[새 릴리스로 업그레이드 정보](/admin/overview/about-upgrades-to-new-releases)”{% endif %}
