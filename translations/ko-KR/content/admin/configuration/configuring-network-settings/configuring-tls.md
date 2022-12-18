---
title: TLS 구성
intro: '신뢰할 수 있는 인증 기관에서 서명한 인증서를 사용할 수 있도록 {% 데이터 variables.location.product_location %}에서 TLS(전송 계층 보안)를 구성할 수 있습니다.'
redirect_from:
  - /enterprise/admin/articles/ssl-configuration
  - /enterprise/admin/guides/installation/about-tls
  - /enterprise/admin/installation/configuring-tls
  - /enterprise/admin/configuration/configuring-tls
  - /admin/configuration/configuring-tls
versions:
  ghes: '*'
type: how_to
topics:
  - Enterprise
  - Fundamentals
  - Infrastructure
  - Networking
  - Security
ms.openlocfilehash: 8e4a8842fd30cd0e3d90743324e4a50c1de72512
ms.sourcegitcommit: d697e0ea10dc076fd62ce73c28a2b59771174ce8
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 10/20/2022
ms.locfileid: '148098846'
---
## 전송 계층 보안 정보

SSL을 대체한 TLS는 {% data variables.product.prodname_ghe_server %}를 처음 시작할 때 자체 서명된 인증서로 사용하도록 설정되고 구성됩니다. 자체 서명된 인증서는 웹 브라우저 및 Git 클라이언트에서 신뢰할 수 없으므로 TLS를 사용하지 않도록 설정하거나 Let's Encrypt와 같은 신뢰할 수 있는 인증 기관에서 서명한 인증서를 업로드할 때까지 클라이언트는 인증서 경고를 보고합니다.

SSL을 사용하도록 설정하면 {% data variables.product.prodname_ghe_server %} 어플라이언스가 HTTP 엄격한 전송 보안 헤더를 보냅니다. TLS를 사용하지 않도록 설정하면 브라우저에서 HTTP로 프로토콜 다운그레이드를 허용하지 않으므로 사용자가 어플라이언스에 액세스할 수 없게 됩니다. 자세한 내용은 Wikipedia에서 “[HSTS(HTTP Strict Transport Security)](https://en.wikipedia.org/wiki/HTTP_Strict_Transport_Security)”를 참조하세요.

{% data reusables.enterprise_installation.terminating-tls %}

사용자가 2단계 인증에 FIDO U2F를 사용하려면 인스턴스에 대해 TLS를 사용하도록 설정해야 합니다. 자세한 내용은 “[2단계 인증 구성](/articles/configuring-two-factor-authentication)”을 참조하세요.

## 필수 조건

프로덕션에서 TLS를 사용하려면 신뢰할 수 있는 인증 기관에서 서명한 암호화되지 않은 PEM 형식의 인증서가 있어야 합니다.

또한 인증서는 “[하위 도메인 격리 사용](/enterprise/admin/guides/installation/enabling-subdomain-isolation#about-subdomain-isolation)”에 나열된 하위 도메인에 대해 구성된 주체 대체 이름이 필요하며 중간 인증 기관에서 서명한 경우 전체 인증서 체인을 포함해야 합니다. 자세한 내용은 Wikipedia에서 “[주체 대체 이름](http://en.wikipedia.org/wiki/SubjectAltName)”을 참조하세요.

`ghe-ssl-generate-csr` 명령을 사용하여 인스턴스에 대한 CSR(인증서 서명 요청)을 생성할 수 있습니다. 자세한 내용은 “[명령줄 유틸리티](/enterprise/admin/guides/installation/command-line-utilities/#ghe-ssl-generate-csr)”를 참조하세요.

키는 RSA 키여야 하며 암호가 없어야 합니다. 자세한 내용은 “[키 파일에서 암호 제거](/admin/guides/installation/troubleshooting-ssl-errors#removing-the-passphrase-from-your-key-file)”를 참조하세요.

## 사용자 지정 TLS 인증서 업로드

{% data reusables.enterprise_site_admin_settings.tls-downtime %}

{% data reusables.enterprise_site_admin_settings.access-settings %} {% data reusables.enterprise_site_admin_settings.management-console %} {% data reusables.enterprise_management_console.privacy %} {% data reusables.enterprise_management_console.select-tls-only %}
4. “TLS 프로토콜 지원”에서 허용하려는 프로토콜을 선택합니다.
  ![TLS 프로토콜을 선택하는 옵션이 있는 라디오 단추](/assets/images/enterprise/management-console/tls-protocol-support.png)
5. “인증서”에서 **파일 선택** 을 클릭하여 설치할 TLS 인증서 또는 인증서 체인(PEM 형식)을 선택합니다. 일반적으로 이 파일에는 *.pem*, *.crt* 또는 *.cer* 확장명이 있습니다.
  ![TLS 인증서 파일을 찾는 단추](/assets/images/enterprise/management-console/install-tls-certificate.png)
6. “암호화되지 않은 키”에서 **파일 선택** 을 클릭하여 설치할 RSA 키(PEM 형식)를 선택합니다. 일반적으로 이 파일에는 *.key* 확장명이 있습니다.
  ![TLS 키 파일을 찾는 단추](/assets/images/enterprise/management-console/install-tls-key.png)

{% data reusables.enterprise_management_console.save-settings %}

## Let's Encrypt 지원 정보

Let's Encrypt는 ACME 프로토콜을 사용하여 브라우저에서 신뢰하는 무료 자동화된 TLS 인증서를 발급하는 퍼블릭 인증 기관입니다. 필요한 수동 유지 관리 없이 어플라이언스의 Let's Encrypt 인증서를 자동으로 가져오고 갱신할 수 있습니다.

{% data reusables.enterprise_installation.lets-encrypt-prerequisites %}

Let's Encrypt를 사용하여 TLS 인증서 관리 자동화를 사용하도록 설정하면 {% 데이터 variables.location.product_location %}이(가) Let's Encrypt 서버에 연결하여 인증서를 가져옵니다. 인증서를 갱신하려면 Let's Encrypt 서버가 인바운드 HTTP 요청을 사용하여 구성된 도메인 이름 제어의 유효성을 검사해야 합니다.

{% 데이터 variables.location.product_location %}에서 명령줄 유틸리티를 사용하여 `ghe-ssl-acme` Let's Encrypt 인증서를 자동으로 생성할 수도 있습니다. 자세한 내용은 “[명령줄 유틸리티](/enterprise/admin/guides/installation/command-line-utilities#ghe-ssl-acme)”를 참조하세요.

## Let's Encrypt를 사용하여 TLS 구성

{% data reusables.enterprise_installation.lets-encrypt-prerequisites %}

{% data reusables.enterprise_site_admin_settings.tls-downtime %}

{% data reusables.enterprise_site_admin_settings.access-settings %} {% data reusables.enterprise_site_admin_settings.management-console %} {% data reusables.enterprise_management_console.privacy %} {% data reusables.enterprise_management_console.select-tls-only %}
5. **Let's Encrypt를 사용하여 TLS 인증서 관리 자동화 사용** 을 선택합니다.
  ![Let's Encrypt 사용을 위한 확인란](/assets/images/enterprise/management-console/lets-encrypt-checkbox.png) {% data reusables.enterprise_management_console.save-settings %} {% data reusables.enterprise_management_console.privacy %}
7. **TLS 인증서 요청** 을 클릭합니다.
  ![TLS 인증서 요청 단추](/assets/images/enterprise/management-console/request-tls-button.png)
8. “상태”가 “시작됨”에서 “완료”로 변경될 때까지 기다립니다.
   ![Let's Encrypt 상태](/assets/images/enterprise/management-console/lets-encrypt-status.png)
9. **구성 저장** 을 클릭합니다.
