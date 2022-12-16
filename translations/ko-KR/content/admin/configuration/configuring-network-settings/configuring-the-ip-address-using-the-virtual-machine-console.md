---
title: 가상 머신 콘솔을 사용하여 IP 주소 구성
intro: '기본적으로 {% data variables.product.prodname_ghe_server %}는 DHCP(Dynamic Host Configuration Protocol)를 통해 네트워크 설정을 검색합니다. 플랫폼이 지원하거나 DHCP를 사용할 수 없는 경우 가상 머신 콘솔을 사용하여 네트워크 설정을 구성할 수도 있습니다.'
redirect_from:
  - /enterprise/admin/installation/configuring-the-ip-address-using-the-virtual-machine-console
  - /enterprise/admin/configuration/configuring-the-ip-address-using-the-virtual-machine-console
  - /admin/configuration/configuring-the-ip-address-using-the-virtual-machine-console
versions:
  ghes: '*'
type: how_to
topics:
  - Enterprise
  - Fundamentals
  - Infrastructure
  - Networking
shortTitle: Set the IP using the console
ms.openlocfilehash: db183677409757e516515a5ac7def5a70affd01f
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/10/2022
ms.locfileid: '145120772'
---
{% note %}

**참고:** {% data variables.product.prodname_ghe_server %}에 네트워크 어댑터를 추가하는 것은 지원되지 않습니다.

{% endnote %}

{% data reusables.enterprise_installation.open-vm-console-start %}
3. `IPv4` 또는 `IPv6` 프로토콜을 구성하도록 선택합니다.
  ![IPv4 또는 IPv6 프로토콜을 선택하는 옵션](/assets/images/enterprise/network-configuration/IPv4-or-IPv6-protocol.png)
4. 선택한 프로토콜에 대한 옵션을 구성합니다.
  ![IP 프로토콜 옵션이 있는 메뉴](/assets/images/enterprise/network-configuration/network-settings-selection.png) {% data reusables.enterprise_installation.vm-console-done %}
