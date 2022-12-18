---
title: DNS 이름 서버 구성
intro: '{% data variables.product.prodname_ghe_server %}는 DHCP(동적 호스트 구성 프로토콜) 임대가 이름 서버를 제공할 때 DNS 설정에 DHCP를 사용합니다. DHCP(동적 호스트 구성 프로토콜) 임대에서 이름 서버를 제공하지 않거나 특정 DNS 설정을 사용해야 하는 경우 이름 서버를 수동으로 지정할 수 있습니다.'
redirect_from:
  - /enterprise/admin/guides/installation/about-dns-nameservers
  - /enterprise/admin/installation/configuring-dns-nameservers
  - /enterprise/admin/configuration/configuring-dns-nameservers
  - /admin/configuration/configuring-dns-nameservers
versions:
  ghes: '*'
type: how_to
topics:
  - Enterprise
  - Fundamentals
  - Infrastructure
  - Networking
shortTitle: Configure DNS servers
ms.openlocfilehash: d97a4557fd2d9837e2f6f78ad962b426a91d256c
ms.sourcegitcommit: d697e0ea10dc076fd62ce73c28a2b59771174ce8
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 10/20/2022
ms.locfileid: '148098070'
---
지정한 이름 서버는 {% 데이터 variables.location.product_location %}의 호스트 이름을 확인해야 합니다.

{% data reusables.enterprise_installation.changing-hostname-not-supported %}

## 가상 머신 콘솔을 사용하여 이름 서버 구성

{% data reusables.enterprise_installation.open-vm-console-start %}
2. 인스턴스에 대한 이름 서버를 구성합니다.
{% data reusables.enterprise_installation.vm-console-done %}

## 관리 셸을 사용하여 이름 서버 구성

{% data reusables.enterprise_installation.ssh-into-instance %}

2. 이름 서버를 편집하려면 시각적 모드에서 `ghe-setup-network` 명령을 사용합니다. 자세한 내용은 “[명령줄 유틸리티](/admin/configuration/configuring-your-enterprise/command-line-utilities#ghe-setup-network)”를 참조하세요.

  ```shell
  ghe-setup-network -v
  ```

5. {% 데이터 variables.location.product_location %}에 새 이름 서버 항목을 추가하려면 다음을 실행합니다.

  ```shell
  sudo service resolvconf restart
  sudo service dnsmasq restart
  ```
