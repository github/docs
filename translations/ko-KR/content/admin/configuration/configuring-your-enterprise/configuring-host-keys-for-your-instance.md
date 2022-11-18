---
title: 인스턴스에 대한 호스트 키 구성
shortTitle: Configure host keys
intro: '인스턴스에서 들어오는 SSH 연결에 대한 호스트 키를 생성하고 보급하는 데 사용하는 알고리즘을 구성하여 {% data variables.location.product_location %}의 보안을 강화할 수 있습니다.'
permissions: 'Site administrators can configure the host keys for a {% data variables.product.product_name %} instance.'
versions:
  ghes: '>= 3.6'
type: how_to
topics:
  - Authentication
  - Enterprise
  - Infrastructure
  - Networking
  - Security
  - SSH
ms.openlocfilehash: 6454568e63b15fc947994ab39aef9baad9d5c146
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 10/25/2022
ms.locfileid: '148107111'
---
## 인스턴스의 호스트 키 정보

SSH 연결을 허용하는 서버는 하나 이상의 암호화 호스트 키를 보급하여 SSH 클라이언트에 대한 서버를 안전하게 식별합니다. 연결을 초기화하는 동안 서버의 ID를 확인하기 위해 클라이언트는 호스트 키를 저장하고 확인합니다. 자세한 내용은 SSH Academy 웹 사이트에서 [SSH Host Key - What, Why, How](https://ssh.com/academy/ssh/host-key)(SSH 호스트 키 - 무엇을 왜 어떻게)를 참조하세요.

{% data reusables.enterprise.about-ssh-ports %}

기본적으로 {% data variables.location.product_location %}는 OpenSSH 스타일 호스트 키 회전을 사용하여 호스트 키를 생성하고 보급합니다. 사용자 환경에서 SSH의 보안을 강화하기 위해 호스트 키 생성에 대해 추가 알고리즘을 사용하도록 설정할 수 있습니다.

{% note %}

**참고**: 추가 호스트 키 알고리즘을 사용하도록 설정하면 SSH 연결에 OpenSSH를 사용하지 않는 클라이언트는 연결 중에 경고가 발생하거나 완전히 연결되지 않을 수 있습니다. 일부 SSH 구현은 지원되지 않는 알고리즘을 무시하고 다른 알고리즘으로 대체될 수 있습니다. 클라이언트가 대체를 지원하지 않으면 연결이 실패합니다. 예를 들어 Go용 SSH 라이브러리는 다른 알고리즘으로의 대체를 지원하지 않습니다.

{% endnote %}

## Ed25519 호스트 키 관리

{% data variables.location.product_location %}에 연결하는 클라이언트의 보안을 개선하기 위해 Ed25519 호스트 키의 생성 및 보급을 사용하도록 설정할 수 있습니다. Ed25519는 속도를 저하시키지 않으면서 이전 서명 알고리즘을 대상으로 하는 일부 공격을 방지하는 데 도움이 됩니다. 이전 SSH 클라이언트는 Ed25519를 지원하지 않을 수 있습니다. 기본적으로 {% data variables.product.product_name %} 인스턴스는 Ed25519 호스트 키를 생성하거나 보급하지 않습니다. 자세한 내용은 [Ed25519 웹 사이트](https://ed25519.cr.yp.to)를 참조하세요.

{% data reusables.enterprise_installation.ssh-into-instance %}
1. Ed25519 호스트 키의 생성 및 보급을 사용하도록 설정하려면 다음 명령을 입력합니다.

   ```shell
   ghe-config app.babeld.host-key-ed25519 true
   ```
1. 필요에 따라 다음 명령을 입력하여 Ed25519 호스트 키의 생성 및 보급을 사용하지 않도록 설정합니다.

   ```shell
   ghe-config app.babeld.host-key-ed25519 false
   ```
{% data reusables.enterprise.apply-configuration %}
