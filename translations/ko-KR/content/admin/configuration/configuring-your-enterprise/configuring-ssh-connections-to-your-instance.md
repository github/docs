---
title: 인스턴스에 대한 SSH 연결 구성
shortTitle: Configure SSH connections
intro: '클라이언트가 연결을 설정하는 데 사용할 수 있는 SSH 알고리즘을 구성하여 {% data variables.location.product_location %}의 보안을 강화할 수 있습니다.'
permissions: 'Site administrators can configure SSH connections to a {% data variables.product.product_name %} instance.'
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
ms.openlocfilehash: 9b2cc81a447018eef350e1c53857dd5a74a3099a
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 10/25/2022
ms.locfileid: '148107543'
---
## 인스턴스에 대한 SSH 연결 정보

{% data reusables.enterprise.about-ssh-ports %}

사용자 환경에서 SSH 클라이언트를 수용하기 위해 {% data variables.location.product_location %}에서 허용할 연결 유형을 구성할 수 있습니다.

## RSA 키를 사용하여 SSH 연결 구성

사용자가 포트 22를 통해 SSH를 통해 {% data variables.location.product_location %}에서 Git 작업을 수행하는 경우 클라이언트는 RSA 키로 인증할 수 있습니다. 클라이언트는 SHA-1 해시 함수를 사용하여 시도에 서명할 수 있습니다. 이 컨텍스트에서 SHA-1 해시 함수는 더 이상 안전하지 않습니다. 자세한 내용은 Wikipedia에서 “[SHA-1](https://en.wikipedia.org/wiki/SHA-1)”을 참조하세요.

기본적으로 {% ifversion ghes < 3.7 %}{% data variables.product.product_name %} 3.6 이상에서{% endif %} 다음 조건을 **둘 다** 충족하는 SSH 연결은 실패합니다.

{% data reusables.ssh.rsa-sha-1-connection-failure-criteria %}

컷오프 날짜를 조정할 수 있습니다. 사용자가 컷오프 날짜 전에 RSA 키를 업로드한 경우 키가 유효한 상태로 유지되는 한, 클라이언트는 SHA-1을 사용하여 계속 성공적으로 연결할 수 있습니다. 또는 클라이언트가 SHA-1 해시 함수를 사용하여 연결에 서명하는 경우 RSA 키로 인증된 모든 SSH 연결을 거부할 수 있습니다.

인스턴스에 대해 선택한 설정에 관계없이 클라이언트는 SHA-2 해시 함수로 서명된 모든 RSA 키를 사용하여 계속 연결할 수 있습니다.

SSH 인증 기관을 사용하는 경우 인증서의 `valid_after` 날짜가 컷오프 날짜 이후이면 연결이 실패합니다. 자세한 내용은 “[SSH 인증 기관 정보](/organizations/managing-git-access-to-your-organizations-repositories/about-ssh-certificate-authorities)”를 참조하세요.

자세한 내용은 [{% data variables.product.prodname_blog %}](https://github.blog/2022-06-28-improving-git-protocol-security-on-github-enterprise-server)를 참조하세요.

{% data reusables.enterprise_installation.ssh-into-instance %}
1. `ghe-find-insecure-git-operations` 유틸리티를 사용하여 안전하지 않은 알고리즘 또는 해시 함수를 사용하는 연결에 대한 인스턴스의 로그를 감사합니다. 자세한 내용은 “[명령줄 유틸리티](/admin/configuration/configuring-your-enterprise/command-line-utilities#ghe-find-insecure-git-operations)”를 참조하세요.
1. 연결이 SHA-1 해시 함수에 의해 서명된 경우 {% data variables.location.product_location %}에서 날짜 이후에 업로드된 RSA 키를 사용하는 클라이언트의 연결을 거부하는 컷오프 날짜를 구성하려면 다음 명령을 입력합니다. _**RFC-3399-UTC-TIMESTAMP**_ 를 유효한 RFC 3399 UTC 타임스탬프로 대체합니다. 예를 들어 기본값인 2022년 8월 1일은 `2022-08-01T00:00:00Z`로 표시됩니다. 자세한 내용은 IETF 웹 사이트의 [RFC 3339](https://datatracker.ietf.org/doc/html/rfc3339)를 참조하세요.

   <pre>
   $ ghe-config app.gitauth.rsa-sha1 RFC-3339-UTC-TIMESTAMP
   </pre>
1. 또는 SHA-1 해시 함수로 서명된 RSA 키를 사용하여 SSH 연결을 완전히 사용하지 않도록 설정하려면 다음 명령을 입력합니다.

   ```shell
   ghe-config app.gitauth.rsa-sha1 false
   ```
{% data reusables.enterprise.apply-configuration %}
