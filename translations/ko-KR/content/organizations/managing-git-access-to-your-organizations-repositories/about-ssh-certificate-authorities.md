---
title: SSH 인증 기관 정보
intro: SSH 인증 기관을 사용하면 조직 또는 엔터프라이즈 계정이 멤버가 Git을 사용하여 리소스에 액세스하는 데 사용할 수 있는 SSH 인증서를 제공할 수 있습니다.
redirect_from:
  - /articles/about-ssh-certificate-authorities
  - /github/setting-up-and-managing-organizations-and-teams/about-ssh-certificate-authorities
versions:
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: SSH certificate authorities
ms.openlocfilehash: e7f114ddbfabe9b386fce61cedd22fa669ff542c
ms.sourcegitcommit: d697e0ea10dc076fd62ce73c28a2b59771174ce8
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 10/20/2022
ms.locfileid: '148094451'
---
## SSH 인증 기관 정보

SSH 인증서는 한 SSH 키가 다른 SSH 키에 서명하는 메커니즘입니다. SSH CA(인증 기관)를 사용하여 조직 멤버에게 서명된 SSH 인증서를 제공하는 경우 조직 멤버가 인증서를 사용하여 조직 리소스에 액세스할 수 있도록 엔터프라이즈 계정 또는 조직에 CA를 추가할 수 있습니다. 

{% data reusables.organizations.ssh-ca-ghec-only %}

조직 또는 엔터프라이즈 계정에 SSH CA를 추가한 후 CA를 사용하여 조직 멤버에 대한 클라이언트 SSH 인증서에 서명할 수 있습니다. 조직 멤버는 서명된 인증서를 사용하여 Git을 통해 조직의 리포지토리(및 조직의 리포지토리만)에 액세스할 수 있습니다. 필요에 따라 멤버가 SSH 인증서를 사용하여 조직 리소스에 액세스하도록 요구할 수 있습니다. 자세한 내용은 "[조직의 SSH 인증 기관 관리](/articles/managing-your-organizations-ssh-certificate-authorities)" 및 "[엔터프라이즈의 보안 설정에 대한 정책 적용](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-security-settings-in-your-enterprise#managing-ssh-certificate-authorities-for-your-enterprise)"을 참조하세요.

예를 들어 매일 아침, 개발자에게 새 인증서를 발급하는 내부 시스템을 빌드할 수 있습니다. 각 개발자는 일일 인증서를 사용하여 {% data variables.product.product_name %}에서 조직의 리포지토리에 대해 작업을 수행할 수 있습니다. 하루가 끝나면 인증서가 자동으로 만료되므로 나중에 인증서가 손상되더라도 리포지토리를 보호할 수 있습니다.

{% ifversion ghec %} SAML Single Sign-On을 적용한 경우에도 조직 멤버는 서명된 인증서를 인증에 사용할 수 있습니다. SSH 인증서를 요구 사항으로 만들지 않는 한, 조직 구성원은 사용자 이름 및 암호, {% 데이터 variables.product.pat_generic %}s 및 자체 SSH 키를 포함하여 Git을 사용하여 조직의 리소스에 액세스하기 위해 다른 인증 수단을 계속 사용할 수 있습니다.
{% endif %}

멤버는 자신의 인증서를 사용하여 개인용 계정이 소유한 리포지토리의 포크에 액세스할 수 없습니다. 

## SSH 인증서를 사용하는 SSH URL 정보

조직에 SSH 인증서가 필요한 경우 인증 오류를 방지하기 위해 조직 멤버는 SSH를 통해 Git 작업을 수행할 때 조직 ID가 포함된 특수 URL을 사용해야 합니다. 이 특수 URL을 사용하면 클라이언트와 서버가 인증에 사용해야 하는 멤버 컴퓨터의 키를 보다 쉽게 협상할 수 있습니다. 멤버가 `git@github.com`으로 시작된 일반 URL을 사용하는 경우 SSH 클라이언트가 잘못된 키를 제공하여 작업이 실패할 수 있습니다.

리포지토리에 대한 읽기 권한이 있는 사용자는 리포지토리의 기본 페이지에서 **코드** 드롭다운 메뉴를 선택한 다음, **SSH 사용** 을 클릭하여 이 URL을 찾을 수 있습니다.

조직에 SSH 인증서가 필요하지 않은 경우 멤버는 자신의 SSH 키 또는 기타 인증 방법을 계속 사용할 수 있습니다. 이 경우 특수 URL 또는 `git@github.com`으로 시작된 일반 URL이 적절합니다.

## 인증서 발급

각 인증서를 발급할 때 해당 인증서가 대상으로 삼는 {% data variables.product.product_name %} 사용자를 지정하는 확장을 포함해야 합니다. 예를 들어 OpenSSH의 `ssh-keygen` 명령을 사용하여 _KEY-IDENTITY_ 를 키 ID로, _USERNAME_ 을 {% data variables.product.product_name %} 사용자 이름으로 바꿀 수 있습니다. 생성하는 인증서에는 조직의 리소스에 대해 해당 사용자를 대신하여 작업할 수 있는 권한이 부여됩니다. 인증서를 발급하기 전에 사용자 ID의 유효성을 검사해야 합니다.

{% note %}

**참고:** 이러한 명령을 사용하려면 OpenSSH 7.6 이상으로 업데이트해야 합니다.

{% endnote %}

```shell
$ ssh-keygen -s ./ca-key -V '+1d' -I KEY-IDENTITY -O extension:login@{% data variables.product.product_url %}=USERNAME ./user-key.pub
```

{% warning %}

**경고**: 인증서가 서명되고 발급된 후에는 인증서를 해지할 수 없습니다. -`V` 플래그를 사용하여 인증서의 수명을 구성해야 합니다. 그렇지 않으면 인증서를 무기한 사용할 수 있습니다.

{% endwarning %}

SSH를 사용하여 여러 {% data variables.product.company_short %} 제품에 액세스하는 사용자를 위해 인증서를 발급하려면 두 개의 로그인 확장을 포함하여 각 제품의 사용자 이름을 지정할 수 있습니다. 예를 들어 다음 명령은 {% data variables.product.prodname_ghe_cloud %}에 대한 사용자 계정을 위해 _USERNAME-1_ 용 인증서를 발급하고, _HOSTNAME_ 의 {% data variables.product.prodname_ghe_managed %} 또는 {% data variables.product.prodname_ghe_server %}의 사용자 계정을 위해 _USERNAME-2_ 용 인증서를 발급합니다.

```shell
$ ssh-keygen -s ./ca-key -V '+1d' -I KEY-IDENTITY -O extension:login@github.com=USERNAME-1 extension:login@HOSTNAME=USERNAME-2 ./user-key.pub
```

`source-address` 확장을 사용하여 조직 멤버가 조직의 리소스에 액세스할 수 있는 IP 주소를 제한할 수 있습니다. 이 확장은 CIDR 표기법을 사용하여 특정 IP 주소 또는 IP 주소 범위를 허용합니다. 값을 쉼표로 구분하여 여러 주소 또는 범위를 지정할 수 있습니다. 자세한 내용은 Wikipedia에서 "[Classless Inter-Domain Routing](https://en.wikipedia.org/wiki/Classless_Inter-Domain_Routing#CIDR_notation)"을 참조하세요.

```shell
$ ssh-keygen -s ./ca-key -V '+1d' -I KEY-IDENTITY -O extension:login@{% data variables.product.product_url %}=USERNAME -O source-address=COMMA-SEPARATED-LIST-OF-IP-ADDRESSES-OR-RANGES ./user-key.pub
```
