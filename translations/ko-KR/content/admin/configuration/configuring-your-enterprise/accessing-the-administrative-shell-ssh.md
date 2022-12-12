---
title: 관리 셸(SSH)에 액세스
redirect_from:
  - /enterprise/admin/articles/ssh-access
  - /enterprise/admin/articles/adding-an-ssh-key-for-shell-access
  - /enterprise/admin/guides/installation/administrative-shell-ssh-access
  - /enterprise/admin/articles/troubleshooting-ssh-permission-denied-publickey
  - /enterprise/admin/2.13/articles/troubleshooting-ssh-permission-denied-publickey
  - /enterprise/admin/2.14/articles/troubleshooting-ssh-permission-denied-publickey
  - /enterprise/admin/2.15/articles/troubleshooting-ssh-permission-denied-publickey
  - /enterprise/admin/installation/accessing-the-administrative-shell-ssh
  - /enterprise/admin/configuration/accessing-the-administrative-shell-ssh
  - /admin/configuration/accessing-the-administrative-shell-ssh
intro: '{% data reusables.enterprise_site_admin_settings.about-ssh-access %}'
versions:
  ghes: '*'
type: how_to
topics:
  - Enterprise
  - Fundamentals
  - SSH
shortTitle: Access the admin shell (SSH)
ms.openlocfilehash: 10c1496c340e48bee33fac5879515622fc436e7d
ms.sourcegitcommit: d697e0ea10dc076fd62ce73c28a2b59771174ce8
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 10/20/2022
ms.locfileid: '148093859'
---
## 관리 셸 액세스 정보

관리 셸에 대한 SSH 액세스 권한이 있는 경우 {% data variables.product.prodname_ghe_server %}의 명령줄 유틸리티를 실행할 수 있습니다. SSH 액세스는 문제 해결, 백업 실행 및 복제 구성에도 유용합니다. 관리 SSH 액세스는 Git SSH 액세스와 별도로 관리되며 포트 122를 통해서만 액세스할 수 있습니다.

## SSH를 통해 관리 셸에 대한 액세스 사용

관리 SSH 액세스를 사용하려면 인스턴스의 권한 있는 키 목록에 SSH 퍼블릭 키를 추가해야 합니다. 자세한 내용은 “[새 SSH 키 생성 및 ssh-agent에 추가](/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent#adding-your-ssh-key-to-the-ssh-agent)”를 참조하세요.

{% tip %}

**팁:** 권한 있는 SSH 키에 대한 변경 내용은 즉시 적용됩니다.

{% endtip %}

{% data reusables.enterprise_site_admin_settings.access-settings %} {% data reusables.enterprise_site_admin_settings.management-console %}
3. “SSH 액세스”에서 키를 텍스트 상자에 붙여넣은 다음 **키 추가** 를 클릭합니다.
  ![SSH 키를 추가하기 위한 텍스트 상자 및 단추](/assets/images/enterprise/settings/add-authorized-ssh-key-admin-shell.png) {% data reusables.enterprise_management_console.save-settings %}

## SSH를 통해 관리 셸에 연결

목록에 SSH 키를 추가한 후 SSH를 통해 포트 122의 `admin`사용자로 인스턴스에 연결합니다.

```shell
$ ssh -p 122 admin@github.example.com
Last login: Sun Nov 9 07:53:29 2014 from 169.254.1.1
admin@github-example-com:~$ █
```

### SSH 연결 문제 해결

SSH를 `Permission denied (publickey)` 통해 {% 데이터 variables.location.product_location %}에 연결하려고 할 때 오류가 발생하면 포트 122를 통해 연결 중인지 확인합니다. 사용할 프라이빗 SSH 키를 명시적으로 지정해야 할 수 있습니다.

명령줄을 사용하여 프라이빗 SSH 키를 지정하려면 `-i` 인수를 사용하여 `ssh`를 실행합니다.

```shell
ssh -i /path/to/ghe_private_key -p 122 admin@HOSTNAME
```

SSH 구성 파일(`~/.ssh/config`)을 사용하여 프라이빗 SSH 키를 지정할 수도 있습니다.

```shell
Host HOSTNAME
  IdentityFile /path/to/ghe_private_key
  User admin
  Port 122
```

## 로컬 콘솔을 사용하여 관리 셸에 액세스

응급 상황에서 예를 들어 SSH를 사용할 수 없는 경우 로컬로 관리 셸에 액세스할 수 있습니다. `admin` 사용자로 로그인하고 {% data variables.product.prodname_ghe_server %}를 초기 설정하는 동안 설정된 암호를 사용합니다.

## 관리 셸에 대한 액세스 제한 사항

관리 셸 액세스는 문서화된 작업 프로시저의 문제 해결 및 수행에만 허용됩니다. 시스템 및 애플리케이션 파일을 수정하거나, 프로그램을 실행하거나, 지원되지 않는 소프트웨어 패키지를 설치하면 지원 계약이 무효화될 수 있습니다. 지원 계약에서 허용하는 활동에 대한 질문이 있는 경우 {% data variables.contact.contact_ent_support %}에 문의하세요.
