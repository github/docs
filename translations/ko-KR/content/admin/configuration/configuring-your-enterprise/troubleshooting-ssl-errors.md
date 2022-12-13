---
title: SSL 오류 문제 해결
intro: 어플라이언스에 SSL 문제가 발생하는 경우 이를 해결하기 위한 작업을 수행할 수 있습니다.
redirect_from:
- /enterprise/admin/articles/troubleshooting-ssl-errors
- /enterprise/admin/categories/dns-ssl-and-subdomain-configuration
- /enterprise/admin/installation/troubleshooting-ssl-errors
- /enterprise/admin/configuration/troubleshooting-ssl-errors
- /admin/configuration/troubleshooting-ssl-errors
versions:
  ghes: '*'
type: how_to
topics:
- Enterprise
- Errors
- Infrastructure
- Networking
- Security
- Troubleshooting
shortTitle: Troubleshoot SSL errors
ms.openlocfilehash: cfe73a647b539fa8c9c2aef54f8bc51f2b1becae
ms.sourcegitcommit: 22d665055b1bee7a5df630385e734e3a149fc720
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 07/13/2022
ms.locfileid: "145120676"
---
## <a name="removing-the-passphrase-from-your-key-file"></a>키 파일에서 암호 제거

OpenSSL이 설치된 Linux 머신이 있는 경우 암호를 제거할 수 있습니다.

1. 원본 키 파일의 이름을 바꿉니다.
  ```shell
  $ mv yourdomain.key yourdomain.key.orig
  ```
2. 암호 없이 새 키를 생성합니다.
  ```shell
  $ openssl rsa -in yourdomain.key.orig -out yourdomain.key
  ```

이 명령을 실행하면 키 암호를 입력하라는 메시지가 표시됩니다.

OpenSSL에 대한 자세한 내용은 [OpenSSL 설명서](https://www.openssl.org/docs/)를 참조하세요.

## <a name="converting-your-ssl-certificate-or-key-into-pem-format"></a>SSL 인증서 또는 키를 PEM 형식으로 변환

OpenSSL이 설치되어 있는 경우 `openssl` 명령을 사용하여 키를 PEM 형식으로 변환할 수 있습니다. 예를 들어 키를 DER 형식에서 PEM 형식으로 변환할 수 있습니다.

```shell
$ openssl rsa -in yourdomain.der -inform DER -out yourdomain.key -outform PEM
```

그렇지 않으면 SSL 변환기 도구를 사용하여 인증서를 PEM 형식으로 변환할 수 있습니다. 자세한 내용은 [SSL 변환기 도구 설명서](https://www.sslshopper.com/ssl-converter.html)를 참조하세요.

## <a name="unresponsive-installation-after-uploading-a-key"></a>키를 업로드한 후 응답하지 않는 설치

SSL 키를 업로드한 후 {% data variables.product.product_location %}가 응답하지 않는 경우 SSL 인증서 복사본을 비롯한 특정 세부 정보를 포함하여 [{% data variables.product.prodname_enterprise %} 지원에 문의](https://enterprise.github.com/support)하세요.

## <a name="certificate-validity-errors"></a>인증서 유효성 오류

웹 브라우저 및 명령줄 Git과 같은 클라이언트는 SSL 인증서의 유효성을 확인할 수 없는 경우 오류 메시지를 표시합니다. 이 문제는 클라이언트에서 인식할 수 없는 중간 루트 인증서에서 발급된 “연결된 루트” 인증서뿐만 아니라 자체 서명된 인증서에서도 자주 발생합니다.

CA(인증 기관)에서 서명한 인증서를 사용하는 경우 {% data variables.product.prodname_ghe_server %}에 업로드하는 인증서 파일에 해당 CA의 루트 인증서가 포함된 인증서 체인이 있어야 합니다. 해당 파일을 만들려면 전체 인증서 체인(또는 “인증서 번들”)을 사용자 인증서 끝에 연결하여 호스트 이름이 포함된 보안 주체 인증서가 맨 앞에 오도록 합니다. 대부분의 시스템에서 다음과 유사한 명령을 사용하여 이 작업을 수행할 수 있습니다.

```shell
$ cat yourdomain.com.crt bundle-certificates.crt > yourdomain.combined.crt
```

인증 기관 또는 SSL 공급업체에서 인증서 번들(예: `bundle-certificates.crt`)을 다운로드할 수 있습니다.

## <a name="installing-self-signed-or-untrusted-certificate-authority-ca-root-certificates"></a>자체 서명되거나 신뢰할 수 없는 CA(인증 기관) 루트 인증서 설치

{% data variables.product.prodname_ghe_server %} 어플라이언스가 자체 서명되거나 신뢰할 수 없는 인증서를 사용하는 네트워크의 다른 머신과 상호 작용하는 경우 HTTPS를 통해 해당 시스템에 액세스하려면 서명하는 CA의 루트 인증서를 시스템 전체 인증서 저장소로 가져와야 합니다.

1. 로컬 인증 기관에서 CA의 루트 인증서를 받고 PEM 형식인지 확인합니다.
2. 포트 122에서 SSH를 통해 “admin” 사용자로 {% data variables.product.prodname_ghe_server %} 어플라이언스에 파일을 복사합니다.
  ```shell
  $ scp -P 122 rootCA.crt admin@HOSTNAME:/home/admin
  ```
3. 포트 122에서 SSH를 통해 “admin” 사용자로 {% data variables.product.prodname_ghe_server %} 관리 셸에 연결합니다.
  ```shell
  $ ssh -p 122 admin@HOSTNAME
  ```
4. 인증서를 시스템 전체 인증서 저장소로 가져옵니다.
  ```shell
  $ ghe-ssl-ca-certificate-install -c rootCA.crt
  ```

## <a name="updating-an-ssl-certificate"></a>SSL 인증서 업데이트

`ghe-ssl-certificate-setup` 명령줄 유틸리티를 사용하여 {% data variables.product.product_location %}에 대한 자체 서명된 인증서를 새로 생성하거나 기존 SSL 인증서를 업데이트할 수 있습니다. 자세한 내용은 “[명령줄 유틸리티](/admin/configuration/configuring-your-enterprise/command-line-utilities#ghe-ssl-ca-certificate-setup)”를 참조하세요.
