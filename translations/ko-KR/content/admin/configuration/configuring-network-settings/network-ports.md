---
title: 네트워크 포트
redirect_from:
  - /enterprise/admin/articles/configuring-firewalls
  - /enterprise/admin/articles/firewall
  - /enterprise/admin/guides/installation/network-configuration
  - /enterprise/admin/guides/installation/network-ports-to-open
  - /enterprise/admin/installation/network-ports
  - /enterprise/admin/configuration/network-ports
  - /admin/configuration/network-ports
intro: '관리자, 최종 사용자 및 이메일 지원을 위해 노출해야 하는 네트워크 서비스에 따라 선택적으로 네트워크 포트를 엽니다.'
versions:
  ghes: '*'
type: reference
topics:
  - Enterprise
  - Infrastructure
  - Networking
  - Security
ms.openlocfilehash: 048b27ed44cea11057c781ae3043078a825f8d1a
ms.sourcegitcommit: d82f268a6f0236d1f4d2bf3d049974ada0170402
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 11/10/2022
ms.locfileid: '148160656'
---
## 관리 포트

{% data variables.location.product_location %}을(를) 구성하고 특정 기능을 실행하려면 일부 관리 포트가 필요합니다. 관리 포트는 최종 사용자가 기본 애플리케이션을 사용하는 데 필요하지 않습니다.

| 포트 | 서비스 | 설명 |
|---|---|---|
| 8443 | HTTPS | 웹 기반 {% data variables.enterprise.management_console %}을 보호합니다. 기본 설치 및 구성에 필요합니다. |
| 8080 | HTTP | 일반 텍스트 웹 기반 {% data variables.enterprise.management_console %}입니다. TLS를 사용하지 않도록 수동으로 설정하지 않는 한 필요하지 않습니다. |
| 122 | SSH | {% data variables.location.product_location %}에 대한 셸 액세스. 고가용성 구성의 모든 노드 간에 들어오는 연결에 열려 있어야 합니다. 기본 SSH 포트(22)는 Git 및 SSH 애플리케이션 네트워크 트래픽 전용입니다. |
| 1194/UDP | VPN | 고가용성 구성에서 복제 네트워크 터널을 보호합니다. 구성의 모든 노드 간 통신을 위해 열려 있어야 합니다.|
| 123/UDP| NTP | 시간 프로토콜 작업에 필요합니다. |
| 161/UDP | SNMP | 네트워크 모니터링 프로토콜 작업에 필요합니다. |

## 최종 사용자를 위한 애플리케이션 포트

애플리케이션 포트는 최종 사용자를 위한 웹 애플리케이션 및 Git 액세스를 제공합니다.

| 포트 | 서비스 | Description |
|---|---|---|
| 443 | HTTPS | HTTPS를 통해 웹 애플리케이션 및 Git에 액세스합니다. |
| 80 | HTTP | 웹 애플리케이션에 액세스합니다. TLS가 구성된 경우 모든 요청이 HTTPS 포트로 리디렉션됩니다. |
| 22 | SSH | SSH를 통해 Git에 액세스합니다. 퍼블릭 및 프라이빗 리포지토리에 대한 복제, 가져오기 및 푸시 작업을 지원합니다. |
| 9418 | Git | Git 프로토콜 포트는 암호화되지 않은 네트워크 통신을 사용하여 퍼블릭 리포지토리에 복제 및 가져오기 작업을 지원합니다. {% data reusables.enterprise_installation.when-9418-necessary %} |

{% data reusables.enterprise_installation.terminating-tls %}

## 메일 포트

최종 사용자를 위한 인바운드 메일 지원을 위해 메일 포트에 직접 액세스하거나 릴레이를 통해 액세스할 수 있어야 합니다.

| 포트 | 서비스 | Description |
|---|---|---|
| 25 | SMTP | 암호화를 사용한 SMTP 지원(STARTTLS)입니다. |

## {% data variables.product.prodname_actions %} 포트

자체 호스팅 실행기가 {% data variables.location.product_location %}에 연결하려면 {% data variables.product.prodname_actions %} 포트에 액세스할 수 있어야 합니다. 자세한 내용은 “[자체 호스트된 실행기 정보](/actions/hosting-your-own-runners/about-self-hosted-runners#communication-between-self-hosted-runners-and-github-enterprise-server)”를 참조하세요.

| 포트 | 서비스 | Description |
|---|---|---|
| 443 | HTTPS | 자체 호스팅 실행기는 {% data variables.location.product_location %}에 연결하여 작업 할당을 받고 새 버전의 실행기 애플리케이션을 다운로드합니다. TLS가 구성된 경우 필요합니다.
| 80 | HTTP | 자체 호스팅 실행기는 {% data variables.location.product_location %}에 연결하여 작업 할당을 받고 새 버전의 실행기 애플리케이션을 다운로드합니다. TLS가 구성되지 않은 경우 필요합니다.

{% data variables.product.prodname_dotcom_the_website %} 작업에 대한 자동 액세스를 사용하도록 설정하면 {% data variables.product.prodname_actions %}는 {% data variables.product.prodname_dotcom_the_website %}를 확인하기 전에 항상 이러한 포트를 통해 {% data variables.location.product_location %}에서 작업을 검색합니다. 자세한 내용은 “[{% data variables.product.prodname_github_connect %}를 통해 {% data variables.product.prodname_dotcom_the_website %} 작업에 대한 자동 액세스 사용](/admin/github-actions/managing-access-to-actions-from-githubcom/enabling-automatic-access-to-githubcom-actions-using-github-connect#about-resolution-for-actions-using-github-connect)”을 참조하세요.

## {% data variables.product.prodname_github_connect %} 포트

{% data variables.product.prodname_github_connect %}을(를) 사용하도록 설정하면 {% data variables.product.product_name %}와 {% data variables.product.prodname_dotcom_the_website %} 간의 연결은 포트 443 또는 80에서 HTTPS를 사용하며 TLS가 필요합니다. 자세한 내용은 “[{% data variables.product.prodname_github_connect %} 정보](/admin/configuration/configuring-github-connect/about-github-connect)”를 참조하세요.

## 추가 참고 자료

- “[TLS 구성](/admin/configuration/configuring-network-settings/configuring-tls)”
