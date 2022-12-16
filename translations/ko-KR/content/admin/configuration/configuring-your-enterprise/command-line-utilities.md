---
title: 명령줄 유틸리티
intro: '{% data variables.product.prodname_ghe_server %}에는 특정 문제를 해결하거나 특정 작업을 수행하는 데 도움이 되는 다양한 유틸리티가 포함되어 있습니다.'
redirect_from:
  - /enterprise/admin/articles/viewing-all-services
  - /enterprise/admin/articles/command-line-utilities
  - /enterprise/admin/installation/command-line-utilities
  - /enterprise/admin/configuration/command-line-utilities
  - /admin/configuration/command-line-utilities
miniTocMaxHeadingLevel: 3
versions:
  ghes: '*'
type: reference
topics:
  - Enterprise
  - SSH
ms.openlocfilehash: 290a7eab73e10a88bae1e056e3f5b43d92274f8f
ms.sourcegitcommit: 5b16250eaa0806bf9497756cb27c54a80f688eec
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 11/18/2022
ms.locfileid: '148172807'
---
SSH 관리 사용자로 로그인한 후에는 VM의 어디에서나 해당 명령을 실행할 수 있습니다. 자세한 내용은 “[관리 셸(SSH) 액세스](/enterprise/admin/guides/installation/accessing-the-administrative-shell-ssh/)”를 참조하세요.

## 일반

### ghe-announce

이 유틸리티는 모든 {% data variables.product.prodname_enterprise %} 페이지의 맨 위에 배너를 설정합니다. 이를 사용하여 사용자에게 메시지를 브로드캐스트할 수 있습니다.

```shell
# Sets a message that's visible to everyone
$ ghe-announce -s MESSAGE
> Announcement message set.
# Removes a previously set message
$ ghe-announce -u
> Removed the announcement message
```

{% ifversion ghe-announce-dismiss %} 각 사용자가 스스로 알림을 해제할 수 있도록 하려면 `-d` 플래그를 사용합니다.
```shell
# Sets a user-dismissible message that's visible to everyone
$ ghe-announce -d -s MESSAGE
> Announcement message set.
# Removes a previously set message
$ ghe-announce -u
> Removed the announcement message, which was user dismissible: MESSAGE
```
{% endif %}

{% ifversion ghes %} {% data variables.product.product_name %}의 엔터프라이즈 설정을 사용하여 알림 배너를 설정할 수도 있습니다. 자세한 내용은 “[인스턴스의 사용자 메시지 사용자 지정](/enterprise/admin/user-management/customizing-user-messages-on-your-instance#creating-a-global-announcement-banner)”을 참조하세요.
{% endif %}

{% ifversion ghes %}
<!--For earlier releases of GHES, see the previous service `ghe-resque-info`-->

### ghe-aqueduct

이 유틸리티는 활성 및 큐에 있는 백그라운드 작업에 대한 정보를 표시합니다. 모든 페이지의 맨 위에 있는 관리자 통계 표시줄과 동일한 작업 수를 제공합니다.

이 유틸리티는 Aqueduct 서버가 백그라운드 작업을 처리하는 데 문제가 있는지를 식별하는 데 도움이 될 수 있습니다. 다음 시나리오 중 어느 것이든 Aqueduct의 문제를 나타낼 수 있습니다.

* 활성 작업은 동일하게 유지되는 반면 백그라운드 작업의 수는 증가하고 있습니다.
* 이벤트 피드가 업데이트되지 않습니다.
* 웹후크가 트리거되지 않습니다.
* Git 푸시 후에 웹 인터페이스가 업데이트되지 않습니다.

Aqueduct에 오류가 있는 것으로 의심되는 경우 {% data variables.contact.contact_ent_support %}에 문의하여 도움을 요청하세요.

이 명령을 사용하면 큐에서 작업을 일시 중지하거나 계속할 수도 있습니다.

```shell
$ ghe-aqueduct status
# lists queues and the number of currently queued jobs for all queues
$ ghe-aqueduct queue_depth --queue QUEUE
# lists the number of currently queued jobs for the specified queue
$ ghe-aqueduct pause --queue QUEUE
# pauses the specified queue
$ ghe-aqueduct resume --queue QUEUE
# resumes the specified queue
```
{% endif %}

### ghe-check-disk-usage

이 유틸리티는 삭제되었지만 아직 파일 핸들이 열려 있는 대용량 파일 또는 파일을 디스크에서 확인합니다. 루트 파티션의 공간을 확보하려면 이 작업을 실행해야 합니다.

```shell
ghe-check-disk-usage
```

### ghe-cleanup-caches

이 유틸리티는 잠재적으로 루트 볼륨에 추가 디스크 공간을 차지할 수 있는 다양한 캐시를 정리합니다. 시간이 지남에 따라 루트 볼륨 디스크 공간 사용량이 눈에 띄게 증가하는 경우 이 유틸리티를 실행하여 전체 사용량을 줄이는 데 도움이 될지 확인하는 것이 좋습니다.

```shell
ghe-cleanup-caches
```
### ghe-cleanup-settings

이 유틸리티는 기존 {% data variables.enterprise.management_console %} 설정을 모두 초기화합니다.

{% tip %}

**팁**: {% data reusables.enterprise_enterprise_support.support_will_ask_you_to_run_command %}

{% endtip %}

```shell
ghe-cleanup-settings
```

### ghe-config

이 유틸리티를 사용하면 {% data variables.location.product_location %}의 구성 설정을 검색하고 수정할 수 있습니다.

```shell
$ ghe-config core.github-hostname
# Gets the configuration value of `core.github-hostname`
$ ghe-config core.github-hostname URL
# Sets the configuration value of `core.github-hostname` to the specified URL
$ ghe-config -l
# Lists all the configuration values
```
`cluster.conf`에서 노드의 UUID(범용 고유 식별자)를 찾을 수 있습니다.

```shell
  $ ghe-config HOSTNAME.uuid
```

{% ifversion ghes %} REST API 속도 제한에서 사용자 목록에 예외를 허용할 수 있습니다. 해당 사용자에게는 120,000개 요청의 하드 제한이 계속 적용됩니다. 자세한 내용은 “[REST API의 리소스](/rest/overview/resources-in-the-rest-api#rate-limiting)”를 참조하세요.

``` shell
$ ghe-config app.github.rate-limiting-exempt-users "HUBOT GITHUB-ACTIONS"
# Exempts the users hubot and github-actions from rate limits
```
{% endif %}

### ghe-config-apply

이 유틸리티는 {% data variables.enterprise.management_console %} 설정을 적용하고, 시스템 서비스를 다시 로드하며, 스토리지 디바이스를 준비하고, 애플리케이션 서비스를 다시 로드하고, 보류 중인 데이터베이스 마이그레이션을 실행합니다. {% data variables.enterprise.management_console %}의 웹 UI에서 **설정 저장** 을 클릭하거나 [ `/setup/api/configure` 엔드포인트](/enterprise/user/rest/reference/enterprise-admin#management-console)에 POST 요청을 보내는 것과 같습니다.

수동으로 실행할 필요는 없지만 SSH를 통해 설정을 저장하는 프로세스를 자동화하려는 경우 사용할 수 있습니다.

```shell
ghe-config-apply
```

### ghe-console

이 유틸리티는 {% data variables.product.prodname_enterprise %} 어플라이언스에서 GitHub Rails 콘솔을 엽니다. {% data reusables.command_line.use_with_support_only %}

```shell
ghe-console
```

### ghe-dbconsole

이 유틸리티는 {% data variables.product.prodname_enterprise %} 어플라이언스에서 MySQL 데이터베이스 세션을 엽니다. {% data reusables.command_line.use_with_support_only %}

```shell
ghe-dbconsole
```

### ghe-es-index-status
이 유틸리티는 Elasticsearch 인덱스의 요약을 CSV 형식으로 반환합니다.

머리글 행이 있는 인덱스 요약을 `STDOUT`으로 출력합니다.
```shell
$ ghe-es-index-status -do
> warning: parser/current is loading parser/ruby23, which recognizes
> warning: 2.3.3-compliant syntax, but you are running 2.3.4.
> warning: please see https://github.com/whitequark/parser#compatibility-with-ruby-mri.
> Name,Primary,Searchable,Writable,UpToDate,RepairProgress,Version
> code-search-1,true,true,true,true,100.0,72e27df7c631b45e026b42bfef059328fa040e17
> commits-5,true,true,true,true,100.0,7ed28813100c47813ef654c0ee2bb9abf21ab744
> gists-4,true,true,true,true,100.0,cf8e7d04fcf2564c902e2873c424a279cc41079d
> issues-4,false,false,false,true,100.0,d0bb08f71eebf6e7b070572aa399b185dbdc8a76
> issues-5,true,true,true,true,100.0,d0bb08f71eebf6e7b070572aa399b185dbdc8a76
> projects-2,true,true,true,true,100.0,c5cac1c4b3c66d42e609d088d174dbc3dd44469a
> pull-requests-6,true,true,true,true,100.0,6a466ad6b896a3499509990979bf9a18d7d41de3
> repos-6,true,true,true,true,100.0,6c8b5fbba0fc1e409558db411d05e092c1387082
> users-5,true,true,true,true,100.0,38984875552bb826c9ec42999f409cb2e95556eb
> wikis-4,true,true,true,true,100.0,2613dec44bd14e14577803ac1f9e4b7e07a7c234
```

가독성을 위해 인덱스 요약 및 파이프 결과를 `column`으로 출력합니다.

```shell
$ ghe-es-index-status -do | column -ts,
> warning: parser/current is loading parser/ruby23, which recognizes
> warning: 2.3.3-compliant syntax, but you are running 2.3.4.
> warning: please see https://github.com/whitequark/parser#compatibility-with-ruby-mri.
> Name             Primary  Searchable  Writable  UpToDate  RepairProgress  Version
> code-search-1    true     true        true      true      100.0           72e27df7c631b45e026b42bfef059328fa040e17
> commits-5        true     true        true      true      100.0           7ed28813100c47813ef654c0ee2bb9abf21ab744
> gists-4          true     true        true      true      100.0           cf8e7d04fcf2564c902e2873c424a279cc41079d
> issues-4         false    false       false     true      100.0           d0bb08f71eebf6e7b070572aa399b185dbdc8a76
> issues-5         true     true        true      true      100.0           d0bb08f71eebf6e7b070572aa399b185dbdc8a76
> projects-2       true     true        true      true      100.0           c5cac1c4b3c66d42e609d088d174dbc3dd44469a
> pull-requests-6  true     true        true      true      100.0           6a466ad6b896a3499509990979bf9a18d7d41de3
> repos-6          true     true        true      true      100.0           6c8b5fbba0fc1e409558db411d05e092c1387082
> users-5          true     true        true      true      100.0           38984875552bb826c9ec42999f409cb2e95556eb
> wikis-4          true     true        true      true      100.0           2613dec44bd14e14577803ac1f9e4b7e07a7c234
```

### ghe-legacy-github-services-report

이 유틸리티는 2018년 10월 1일에 중단될 통합 방법인 {% data variables.product.prodname_dotcom %} 서비스를 사용하는 어플라이언스의 리포지토리를 나열합니다. 어플라이언스의 사용자가 {% data variables.product.prodname_dotcom %} 서비스를 설정하여 특정 리포지토리에 푸시할 알림을 만들 수 있습니다. 자세한 내용은 {% data variables.product.prodname_blog %} 또는 “[{% data variables.product.prodname_dotcom %} 서비스 대체](/developers/overview/replacing-github-services)”에서 “[{% data variables.product.prodname_dotcom %} 서비스 지원 중단 발표](https://developer.github.com/changes/2018-04-25-github-services-deprecation/)”를 참조하세요. 이 명령 또는 추가 옵션을 자세히 알아보려면 `-h` 플래그를 사용합니다.

```shell
ghe-legacy-github-services-report

```

### ghe-logs-tail

이 유틸리티를 사용하면 설치의 모든 관련 로그 파일을 비상 로그할 수 있습니다. 옵션을 전달하여 로그를 특정 집합으로 제한할 수 있습니다. 추가 옵션에는 -h 플래그를 사용합니다.

```shell
ghe-logs-tail
```

### ghe-maintenance

이 유틸리티를 사용하면 설치 유지 관리 모드의 상태를 제어할 수 있습니다. 주로 {% data variables.enterprise.management_console %} 백그라운드에서 사용하도록 설계되었지만 직접 사용할 수도 있습니다. 자세한 내용은 “[유지 관리 모드 사용 및 예약](/admin/guides/installation/enabling-and-scheduling-maintenance-mode)”을 참조하세요.

```shell
ghe-maintenance -h
```

### ghe-motd

이 유틸리티는 관리자가 관리 셸을 통해 인스턴스에 액세스할 때 표시되는 MOTD(오늘의 메시지)를 다시 표시합니다. 출력에는 인스턴스 상태에 대한 개요가 포함되어 있습니다.

```shell
ghe-motd
```

### ghe-nwo

이 유틸리티는 리포지토리 ID에 따라 리포지토리의 이름 및 소유자를 반환합니다.  

```shell
ghe-nwo REPOSITORY_ID
```

### ghe-org-admin-promote

이 명령을 사용하여 어플라이언스에 대한 사이트 관리자 권한이 있는 사용자에게 조직 소유자 권한을 부여하거나 단일 조직의 단일 사용자에게 조직 소유자 권한을 부여합니다. 사용자 및/또는 조직을 지정해야 합니다. `-y` 플래그를 사용하여 확인을 바이패스하지 않는 한 실행하기 전에 `ghe-org-admin-promote` 명령이 항상 확인을 요청합니다.

유틸리티에서 다음 옵션을 사용할 수 있습니다.

- `-u` 플래그는 사용자 이름을 지정합니다. 이 플래그를 사용하여 특정 사용자에게 조직 소유자 권한을 부여합니다. `-u` 플래그를 생략하여 모든 사이트 관리자를 지정된 조직으로 승격합니다.
- `-o` 플래그는 조직을 지정합니다. 이 플래그를 사용하여 특정 조직에서 소유자 권한을 부여합니다. `-o` 플래그를 생략하여 모든 조직의 소유자 권한을 지정된 사이트 관리자에게 부여합니다.
- `-a` 플래그는 모든 조직에서 모든 사이트 관리자에게 소유자 권한을 부여합니다.
- `-y` 플래그는 수동 확인을 바이패스합니다.

이 유틸리티는 비사이트 관리자를 모든 조직의 소유자로 승격할 수 없습니다. [ghe-user-promote](#ghe-user-promote)를 사용하여 일반 사용자 계정을 사이트 관리자로 승격할 수 있습니다.

특정 사이트 관리자에게 특정 조직의 조직 소유자 권한 부여

```shell
ghe-org-admin-promote -u USERNAME -o ORGANIZATION
```

특정 사이트 관리자에게 모든 조직의 조직 소유자 권한 부여

```shell
ghe-org-admin-promote -u USERNAME
```

모든 사이트 관리자에게 특정 조직의 조직 소유자 권한 부여

```shell
ghe-org-admin-promote -o ORGANIZATION
```

모든 사이트 관리자에게 모든 조직의 조직 소유자 권한 부여

```shell
ghe-org-admin-promote -a
```

### ghe-reactivate-admin-login

{% ifversion enterprise-authentication-rate-limits %}계정 잠금 후 {% data variables.enterprise.management_console %}을(를) 즉시 잠금 해제하려면 이 명령을 사용합니다. {% data variables.location.product_location %}에 대한 인증 정책을 구성하려면 "[인증 정책 속도 제한 구성"을 참조하세요](/admin/configuration/configuring-your-enterprise/configuring-rate-limits#configuring-authentication-policy-rate-limits). {% else %}10분 동안 로그인 시도에 실패했습니다. {% endif %}

```shell
$ ghe-reactivate-admin-login
```


### ghe-saml-mapping-csv

이 유틸리티는 SAML 레코드를 매핑하는 데 도움이 될 수 있습니다.

{% data variables.product.product_name %} 사용자에 대한 모든 SAML 매핑을 포함해 CSV 파일을 만들려면 다음을 사용합니다.
```shell
$ ghe-saml-mapping-csv -d
```

새 값을 사용하여 SAML 매핑을 업데이트하는 드라이 런을 수행하려면 다음을 사용합니다.
```shell
$ ghe-saml-mapping-csv -u -n -f /path/to/file
```

새 값으로 SAML 매핑을 업데이트하려면 다음을 사용합니다.
```shell
$ ghe-saml-mapping-csv -u -f /path/to/file
```

### ghe-service-list

이 유틸리티는 어플라이언스에서 시작 또는 중지(실행 중 또는 대기 중)된 모든 서비스를 나열합니다.

```shell
$ ghe-service-list
{% ifversion viewscreen-and-notebooks %}
active
  - alambic
  - alive
  - aqueduct-lite
  - authzd
  - babeld
  - codeload
  - consul, process 17114
  - consul-template, process 19493
  - driftwood
  - elasticsearch
  - enterprise-manage-unicorn, process 9359
  - ghe-user-disk, process 2545
  - git-daemon
  - github-env
  - github-gitauth
  - github-resqued
  - github-stream-processors
  - github-timerd
  - github-unicorn
  - gitrpcd
  - governor
  - gpgverify
  - grafana-server, process 19314
  - graphite-web, process 20189
  - hookshot-go
  - kafka-lite
  - kredz
  - lfs-server
  - mail-replies
  - memcached
  - minio
  - mysql
  - nginx
  - nomad, process 19562
  - pages
  - postfix
  - redis
  - spokesd
  - spokes-sweeper
  - svnbridge
  - token-scanning-api
  - token-scanning-backfill-worker
  - token-scanning-hydro-consumer
  - token-scanning-incremental-worker
  - token-scanning-udp-backfill-worker
  - treelights
  - turboscan
  - viewscreen

inactive
  - wireguard
{% else %}
start/running
  - github-resqued, process 12711
  - github-unicorn, process 12726
  - github-gitauth, process 12743
  - git-daemon, process 12755
  - babeld, process 12771
  - github-svn-proxy, process 12802
  - gist-unicorn, process 12832
  - gist-resqued, process 12881
  - render-unicorn, process 12939
  - hookshot-unicorn, process 13076
  - nodeload2, process 13192
  - slumlord-unicorn, process 13304
  - ghe-storage, process 2012
  - enterprise-manage-unicorn, process 2024
  - enterprise-manage-resque, process 2053
stop/waiting
  - ghe-replica-mode
  {% endif %}
```

### ghe-set-password

`ghe-set-password`로 새 암호를 설정하여 [{% data variables.enterprise.management_console %}](/enterprise/admin/guides/installation/accessing-the-management-console)에 인증할 수 있습니다.

```shell
ghe-set-password <new_password>
```

### ghe-setup-network

이 유틸리티를 사용하면 기본 네트워크 인터페이스를 구성할 수 있습니다.

네트워크 설정 구성을 안내하는 시각적 모드로 전환하려면

```shell
$ ghe-setup-network -v
```

추가 옵션에는 -h 플래그를 사용합니다.

### ghe-ssh-check-host-keys

이 유틸리티는 유출된 것으로 알려진 SSH 호스트 키 목록에 대해 기존 SSH 호스트 키를 확인합니다.

```shell
$ ghe-ssh-check-host-keys
```

유출된 호스트 키가 발견되면 유틸리티가 상태 `1` 및 메시지와 함께 종료됩니다.
```shell
> One or more of your SSH host keys were found in the blacklist.
> Please reset your host keys using ghe-ssh-roll-host-keys.
```

유출된 호스트 키가 발견되지 않으면 유틸리티가 상태 `0` 및 메시지와 함께 종료됩니다.
```shell
> The SSH host keys were not found in the SSH host key blacklist.
> No additional steps are needed/recommended at this time.
```

### ghe-ssh-roll-host-keys

이 유틸리티는 SSH 호스트 키를 롤업하고 새로 생성된 키로 바꿉니다.

```shell
$ sudo ghe-ssh-roll-host-keys
Proceed with rolling SSH host keys? This will delete the
existing keys in /etc/ssh/ssh_host_* and generate new ones. [y/N]

# Press 'Y' to confirm deleting, or use the -y switch to bypass this prompt

> SSH host keys have successfully been rolled.
```

### ghe-ssh-weak-fingerprints

이 유틸리티는 {% data variables.product.prodname_enterprise %} 어플라이언스에 저장되어 있으며 약한 것으로 알려진 SSH 키에 대한 보고서를 반환합니다. 필요에 따라 사용자 키를 대량 작업으로 해지할 수 있습니다. 유틸리티는 [{% data variables.enterprise.management_console %}](/enterprise/admin/guides/installation/accessing-the-management-console)에서 수동으로 해지해야 하는 약한 시스템 키를 보고합니다.

```shell
# Print a report of weak user and system SSH keys
$ ghe-ssh-weak-fingerprints

# Revoke all weak user keys
$ ghe-ssh-weak-fingerprints --revoke
```

### ghe-ssl-acme

이 유틸리티를 사용하면 {% data variables.product.prodname_enterprise %} 어플라이언스에 Let's Encrypt 인증서를 설치할 수 있습니다. 자세한 내용은 “[TLS 구성](/enterprise/admin/guides/installation/configuring-tls)”을 참조하세요.

`-x` 플래그를 사용하여 ACME 구성을 제거할 수 있습니다.

```shell
ghe-ssl-acme -e
```

### ghe-ssl-ca-certificate-install

이 유틸리티를 사용하면 {% data variables.product.prodname_enterprise %} 서버에 사용자 지정 루트 CA 인증서를 설치할 수 있습니다. 인증서는 PEM 형식이어야 합니다. 또한 인증서 공급 기업이 단일 파일에 여러 CA 인증서를 포함하는 경우 개별 파일로 분리한 다음 한 번에 하나씩 `ghe-ssl-ca-certificate-install`에 전달해야 합니다.

이 유틸리티를 실행하여 S/MIME 커밋 서명 확인을 위한 인증서 체인을 추가합니다. 자세한 내용은 “[커밋 서명 확인 정보](/enterprise/user/articles/about-commit-signature-verification/)”를 참조하세요.

{% data variables.location.product_location %}이(가) 다른 서버에 연결할 수 없는 경우 이 유틸리티를 실행합니다. 후자는 자체 서명된 SSL 인증서 또는 필요한 CA 번들을 제공하지 않는 SSL 인증서를 사용하고 있기 때문입니다. 이를 확인하는 한 가지 방법은 {% data variables.location.product_location %}에서 실행하는 `openssl s_client -connect host:port -verify 0 -CApath /etc/ssl/certs` 것입니다. 원격 서버의 SSL 인증서를 확인할 수 있는 경우 `SSL-Session`의 반환 코드는 아래와 같이 0이어야 합니다.

```
SSL-Session:
    Protocol  : TLSv1
    Cipher    : AES128-SHA
    Session-ID: C794EBCC3CBC10F747C9AFC029C03C1048FC99CFC34D13D7444E0F267C58DF4C
    Session-ID-ctx:
    Master-Key: 02A7C47CFD6EEC87D3C710E9DD87390E04EF82DDD7514AE03127D5DC1945FC0CAEFB5395791AEA598667EFA61B9EA8C5
    Key-Arg   : None
    Start Time: 1394581597
    Timeout   : 300 (sec)
    Verify return code: 0 (ok)
```

반면에 원격 서버의 SSL 인증서를 확인할 수 없는 경우 `SSL-Session`에는 0이 아닌 반환 코드가 있어야 합니다.

```
SSL-Session:
    Protocol  : TLSv1
    Cipher    : AES128-SHA
    Session-ID: 82CB288051A6DB66094C50A69CF1292AEE7E54C6B01B659B98AB336F8C33863E
    Session-ID-ctx:
    Master-Key: 01B025B2F764043A27919A8D1355AAECD8844FF0831B1D664042334790574A6F4025BAB085D4ED71D71AAB3091B849E5
    Key-Arg   : None
    Start Time: 1394581782
    Timeout   : 300 (sec)
    Verify return code: 27 (certificate not trusted)
```

유틸리티에서 다음 추가 옵션을 사용할 수 있습니다.
- `-r` 플래그를 사용하면 CA 인증서를 제거할 수 있습니다.
- `-h` 플래그는 더 많은 사용 정보를 표시합니다.

```shell
ghe-ssl-ca-certificate-install -c CERTIFICATE_PATH
```

### ghe-ssl-certificate-setup

이 유틸리티를 사용하면 {% data variables.location.product_location %}에 대한 SSL 인증서를 업데이트할 수 있습니다. 

이 명령 또는 추가 옵션을 자세히 알아보려면 `-h` 플래그를 사용합니다.

```shell
ghe-ssl-certificate-setup
```

### ghe-ssl-generate-csr

이 유틸리티를 사용하면 프라이빗 키 및 CSR(인증서 서명 요청)을 생성할 수 있습니다. 이 요청은 인스턴스와 함께 사용할 유효한 인증서를 가져오기 위해 상업용 또는 프라이빗 인증 기관과 공유할 수 있습니다. 자세한 내용은 “[TLS 구성](/enterprise/admin/guides/installation/configuring-tls)”을 참조하세요.

이 명령 또는 추가 옵션을 자세히 알아보려면 `-h` 플래그를 사용합니다.

```shell
ghe-ssl-generate-csr
```

### ghe-storage-extend

일부 플랫폼에서는 사용자 볼륨을 확장하기 위해서는 이 스크립트가 필요합니다. 자세한 내용은 “[스토리지 용량 증가](/enterprise/admin/guides/installation/increasing-storage-capacity/)”를 참조하세요.

```shell
$ ghe-storage-extend
```

### ghe-version

이 유틸리티는 {% data variables.location.product_location %}의 버전, 플랫폼 및 빌드를 인쇄합니다.

```shell
$ ghe-version
```

### ghe-webhook-logs

이 유틸리티는 관리자가 문제를 검토하고 식별할 수 있도록 웹후크 제공 로그를 반환합니다.

```shell
ghe-webhook-logs
```

전날 실패한 후크 전송 모두 표시: {% ifversion ghes %}
```shell
ghe-webhook-logs -f -a YYYY-MM-DD
```

날짜 형식은 `YYYY-MM-DD`, `YYYY-MM-DD HH:MM:SS` 또는 `YYYY-MM-DD HH:MM:SS (+/-) HH:M`이어야 합니다.
{% else %}
```shell
ghe-webhook-logs -f -a YYYYMMDD
```
{% endif %}

전송에 대한 전체 후크 페이로드, 결과, 예외 표시: {% ifversion ghes %}
```shell
ghe-webhook-logs -g DELIVERY_GUID
```
{% else %}
```shell
ghe-webhook-logs -g DELIVERY_GUID -v
```
{% endif %}

## Clustering

### ghe-cluster-status

{% data variables.product.prodname_ghe_server %}의 클러스터 배포에서 노드 및 서비스의 상태를 확인합니다.

```shell
$ ghe-cluster-status
```

### ghe-cluster-support-bundle

이 유틸리티는 지역 복제 또는 클러스터링 구성의 각 노드에서 중요한 로그를 포함하는 지원 번들 Tarball을 만듭니다.

기본적으로 명령은 */tmp* 에서 Tarball을 만들지만 SSH를 통해 쉽게 스트리밍할 수 있도록 `STDOUT`에 `cat` tarball을 사용할 수도 있습니다. 이는 웹 UI가 응답하지 않거나 */setup/support* 에서 지원 번들을 다운로드하는 것이 유효하지 않는 경우에 유용합니다. 이전 로그를 포함하는 확장 번들을 생성하려면 이 명령을 사용해야 합니다. 이 명령을 사용하여 클러스터 지원 번들을 {% data variables.product.prodname_enterprise %} 지원에 직접 업로드할 수도 있습니다.

표준 번들을 만들려면 다음을 사용합니다.
```shell
$ ssh -p 122 admin@HOSTNAME -- 'ghe-cluster-support-bundle -o' > cluster-support-bundle.tgz
```

확장 번들을 만들려면 다음을 사용합니다.
```shell
$ ssh -p 122 admin@HOSTNAME -- 'ghe-cluster-support-bundle -x -o' > cluster-support-bundle.tgz
```

{% data variables.contact.github_support %}에 번들을 보내려면 다음을 사용합니다.
```shell
$ ssh -p 122 admin@HOSTNAME -- 'ghe-cluster-support-bundle -u'
```

{% data variables.contact.github_support %}에 번들을 보내고 번들을 티켓과 연결하려면 다음을 사용합니다.
```shell
$ ssh -p 122 admin@HOSTNAME -- 'ghe-cluster-support-bundle -t TICKET_ID'
```

{% ifversion ghes %}
### ghe-cluster-failover

활성 클러스터 노드에서 수동 클러스터 노드로 장애 조치(failover)합니다. 자세한 내용은 “[복제본 클러스터로 장애 조치(failover) 시작](/enterprise/admin/enterprise-management/initiating-a-failover-to-your-replica-cluster)”을 참조하세요.

```shell
ghe-cluster-failover
```
{% endif %}

### ghe-dpages

이 유틸리티를 사용하면 분산된 {% data variables.product.prodname_pages %} 서버를 관리할 수 있습니다.

```shell
ghe-dpages
```

리포지토리 위치 및 상태에 대한 요약을 표시하려면 다음을 사용합니다.
```shell
ghe-dpages status
```

클러스터 노드를 비우기 전에 {% data variables.product.prodname_pages %} 스토리지 서비스를 비우려면 다음을 사용합니다.
```shell
ghe-dpages evacuate pages-server-UUID
```

### ghe-spokes

이 유틸리티를 사용하면 분산된 git 서버에서 각 리포지토리의 세 복사본을 관리할 수 있습니다.

```shell
ghe-spokes
```

리포지토리 위치 및 상태에 대한 요약을 표시하려면 다음을 사용합니다.

```shell
ghe-spokes status
```

리포지토리가 저장된 서버를 표시하려면 다음을 사용합니다.

```shell
ghe-spokes route
```

클러스터 노드의 스토리지 서비스를 비우려면 다음을 사용합니다.

```shell
ghe-spokes server evacuate git-server-UUID
```

### ghe-storage

이 유틸리티를 사용하면 클러스터 노드를 비우기 전에 모든 스토리지 서비스를 비울 수 있습니다.

```shell
ghe-storage evacuate storage-server-UUID
```

## Git

### ghe-btop

현재 Git 작업에 대한 `top` 같은 인터페이스입니다.

```shell
ghe-btop [ <port number> | --help | --usage ]
```

#### ghe-governor

이 유틸리티는 Git 트래픽을 분석하는 데 도움이 됩니다. `/data/user/gitmon` 아래에 있는 _Governor_ 데이터 파일을 쿼리합니다. {% data variables.product.company_short %}은 2주 동안 보존된 파일당 1시간의 데이터를 보유합니다. 자세한 내용은 {% data variables.product.prodname_github_community %}에서 [Governor를 사용한 Git 트래픽 분석](https://github.community/t/analyzing-git-traffic-using-governor/13516)을 참조하세요.

```bash
ghe-governor <subcommand> <column> [options]
```

```
ghe-governor -h
Usage: ghe-governor [-h] <subcommand> args

OPTIONS:
  -h | --help        Show this message.

Valid subcommands are:
  aggregate              Find the top (n) groups of queries for a grouping function and metric
  health                 Summarize all recent activity on one or more servers
  top                    Find the top (n) queries for a given metric
  dump                   Dump individual operations
  test-quotas            Check quota information

Try ghe-governor <subcommand> --help for more information on the arguments each subcommand takes.
```

### ghe-repo

이 유틸리티를 사용하면 리포지토리의 디렉터리로 변경하고 `git` 사용자로 대화형 셸을 열 수 있습니다. `git-*` 또는 `git-nw-*` 같은 명령을 통해 리포지토리의 수동 검사 또는 유지 관리를 수행할 수 있습니다.

```shell
ghe-repo USERNAME/REPONAME
```

### ghe-repo-gc

이 유틸리티는 수동으로 리포지토리 네트워크를 다시 패키지하여 팩 스토리지를 최적화합니다. 큰 리포지토리가 있는 경우 이 명령을 실행하면 전체 크기를 줄이는 데 도움이 될 수 있습니다. {% data variables.product.prodname_enterprise %}는 리포지토리 네트워크와의 상호 작용 전체에서 이 명령을 자동으로 실행합니다.

선택적 `--prune` 인수를 추가하여 분기, 태그 또는 기타 참조에서 참조되지 않으며 연결할 수 없는 Git 개체를 제거할 수 있습니다. 이는 [이전에 삭제된 중요한 정보](/enterprise/user/articles/remove-sensitive-data/)를 즉시 제거하는 데 특히 유용합니다.

{% warning %}

**경고**: 인수를 `--prune` 사용하여 연결할 수 없는 Git 개체를 제거하기 전에 {% data variables.location.product_location %}를 유지 관리 모드로 전환하거나 동일한 리포지토리 네트워크 내의 모든 리포지토리가 잠겨 있는지 확인합니다. 자세한 내용은 “[유지 관리 모드 사용 및 예약](/admin/configuration/configuring-your-enterprise/enabling-and-scheduling-maintenance-mode)”을 참조하세요.

{% endwarning %}

```shell
ghe-repo-gc USERNAME/REPONAME
```

## {% data variables.product.prodname_actions %}

### ghe-actions-check

이 유틸리티는 {% data variables.product.prodname_actions %}에 대한 모든 서비스가 정상인지 확인합니다. 자세한 내용은 “[{% data variables.product.product_name %}용 {% data variables.product.prodname_actions %} 시작하기](/admin/github-actions/getting-started-with-github-actions-for-your-enterprise/getting-started-with-github-actions-for-github-enterprise-server)” 및 “[엔터프라이즈용 {% data variables.product.prodname_actions %} 문제 해결](/admin/github-actions/advanced-configuration-and-troubleshooting/troubleshooting-github-actions-for-your-enterprise)”을 참조하세요.

```shell
ghe-actions-check
```

### ghe-actions-precheck

이 유틸리티는 {% data variables.location.product_location %}에서 {% data variables.product.prodname_actions %}에 대한 Blob Storage 구성을 테스트합니다. 인스턴스에 {% data variables.product.prodname_actions %}를 사용 설정하기 전에 유틸리티를 사용하여 스토리지 구성을 확인할 수 있습니다.

{% data variables.product.prodname_actions %}의 구성에 관한 자세한 내용은 “[{% data variables.product.product_name %}용 {% data variables.product.prodname_actions %} 시작하기](/admin/github-actions/getting-started-with-github-actions-for-your-enterprise/getting-started-with-github-actions-for-github-enterprise-server)”를 참조하세요.

```shell
ghe-actions-precheck -p [PROVIDER] -cs ["CONNECTION-STRING"]
```

스토리지 시스템이 올바르게 구성된 경우 다음 출력이 표시됩니다.

```
All Storage tests passed
```

## 가져오기 및 내보내기

### ghe-migrator

`ghe-migrator`는 한 GitHub 인스턴스에서 다른 인스턴스로 마이그레이션하는 데 도움이 되는 고화질 도구입니다. 인스턴스를 통합하거나 조직, 사용자, 팀 및 리포지토리를 GitHub.com에서 {% data variables.product.prodname_enterprise %}으로 이동할 수 있습니다.

자세한 내용은 [기업에서 데이터를 마이그레이션](/enterprise/admin/user-management/migrating-data-to-and-from-your-enterprise/)하는 방법에 대한 가이드를 참조하세요.

### git-import-detect

URL이 지정된 경우 다른 쪽 끝에 있는 소스 제어 관리 시스템의 유형을 검색합니다. 수동 가져오기 중에는 이미 알려진 것 같지만 자동화된 스크립트에서는 매우 유용할 수 있습니다.
```shell
git-import-detect
```

### git-import-hg-raw

이 유틸리티는 Mercurial 리포지토리를 이 Git 리포지토리로 가져옵니다. 자세한 내용은 “[타사 버전 제어 시스템에서 데이터 가져오기](/enterprise/admin/guides/migrations/importing-data-from-third-party-version-control-systems/)”를 참조하세요.
```shell
git-import-hg-raw
```

### git-import-svn-raw

이 유틸리티는 Subversion 기록 및 파일 데이터를 Git 분기로 가져옵니다. 트리의 직선 복사본으로, 트렁크 또는 분기 구분을 무시합니다. 자세한 내용은 “[타사 버전 제어 시스템에서 데이터 가져오기](/enterprise/admin/guides/migrations/importing-data-from-third-party-version-control-systems/)”를 참조하세요.
```shell
git-import-svn-raw
```

### git-import-tfs-raw

이 유틸리티는 TFVC(Team Foundation 버전 제어)에서 가져옵니다. 자세한 내용은 “[타사 버전 제어 시스템에서 데이터 가져오기](/enterprise/admin/guides/migrations/importing-data-from-third-party-version-control-systems/)”를 참조하세요.
```shell
git-import-tfs-raw
```

### git-import-rewrite

이 유틸리티는 가져온 리포지토리를 다시 작성합니다. 이렇게 하면 작성자 이름을 바꿀 수 있으며 Subversion 및 TFVC의 경우 폴더를 기반으로 Git 분기를 생성합니다. 자세한 내용은 “[타사 버전 제어 시스템에서 데이터 가져오기](/enterprise/admin/guides/migrations/importing-data-from-third-party-version-control-systems/)”를 참조하세요.
```shell
git-import-rewrite
```

{% ifversion ghes > 3.3 %}

## 보안

### ghe-find-insecure-git-operations

이 유틸리티는 인스턴스의 로그를 검색하고 DSA, RSA-SHA-1, HMAC-SHA-1 및 CBC 암호화를 비롯한 안전하지 않은 알고리즘 또는 해시 함수를 사용하는 SSH를 통해 Git 작업을 식별합니다. 출력을 사용하여 클라이언트에서 보다 안전한 SSH 연결로 전환하도록 지원할 수 있습니다. 자세한 내용은 [{% data variables.product.prodname_blog %}](https://github.blog/2022-06-28-improving-git-protocol-security-on-github-enterprise-server){% ifversion ghes < 3.6 %}.{% elsif ghes > 3.5 %} 및 “[인스턴스에 대한 SSH 연결 구성](/admin/configuration/configuring-your-enterprise/configuring-ssh-connections-to-your-instance)”을 참조하세요.{% endif %}

```shell
ghe-find-insecure-git-operations
```

{% endif %}

## 지원

### ghe-diagnostics

이 유틸리티는 다양한 검사를 수행하고 사용자가 겪고 있는 문제를 진단하는 데 도움이 되도록 지원하기 위해 전송할 수 있는 설치에 대한 정보를 수집합니다.

현재 이 유틸리티의 출력은 {% data variables.enterprise.management_console %}에서 진단 정보를 다운로드하는 것과 유사하지만 시간이 지남에 따라 웹 UI에서 사용할 수 없는 추가 개선 사항이 추가될 수 있습니다. 자세한 내용은 “[진단 파일 만들기 및 공유](/enterprise/admin/guides/enterprise-support/providing-data-to-github-support#creating-and-sharing-diagnostic-files)”를 참조하세요.

```shell
ghe-diagnostics
```

### ghe-support-bundle

{% data reusables.enterprise_enterprise_support.use_ghe_cluster_support_bundle %} 이 유틸리티는 인스턴스의 중요한 로그를 포함하는 지원 번들 Tarball을 만듭니다.

기본적으로 명령은 */tmp* 에서 Tarball을 만들지만 SSH를 통해 쉽게 스트리밍할 수 있도록 `STDOUT`에 `cat` tarball을 사용할 수도 있습니다. 이는 웹 UI가 응답하지 않거나 */setup/support* 에서 지원 번들을 다운로드하는 것이 유효하지 않는 경우에 유용합니다. 이전 로그를 포함하는 확장 번들을 생성하려면 이 명령을 사용해야 합니다. 이 명령을 사용하여 {% data variables.product.prodname_enterprise %} 지원에 직접 지원 번들을 업로드할 수도 있습니다.

표준 번들을 만들려면 다음을 사용합니다.
```shell
$ ssh -p 122 admin@HOSTNAME -- 'ghe-support-bundle -o' > support-bundle.tgz
```

확장 번들을 만들려면 다음을 사용합니다.
```shell
$ ssh -p 122 admin@HOSTNAME -- 'ghe-support-bundle -x -o' > support-bundle.tgz
```

{% data variables.contact.github_support %}에 번들을 보내려면 다음을 사용합니다.
```shell
$ ssh -p 122 admin@HOSTNAME -- 'ghe-support-bundle -u'
```

{% data variables.contact.github_support %}에 번들을 보내고 번들을 티켓과 연결하려면 다음을 사용합니다.

```shell
$ ssh -p 122 admin@HOSTNAME -- 'ghe-support-bundle -t TICKET_ID'
```

### ghe-support-upload

이 유틸리티는 어플라이언스에서 {% data variables.product.prodname_enterprise %} 지원으로 정보를 보냅니다. 로컬 파일을 지정하거나 `STDIN`을 통해 최대 100MB의 데이터 스트림을 제공할 수 있습니다. 업로드된 데이터는 선택적으로 지원 티켓과 연결될 수 있습니다.

{% data variables.contact.github_support %}에 파일을 보내고 파일을 티켓과 연결하려면 다음을 사용합니다.
```shell
ghe-support-upload -f FILE_PATH -t TICKET_ID
```

`STDIN`을 통해 데이터를 업로드하고 티켓과 데이터를 연결하려면 다음을 사용합니다.
```shell
ghe-repl-status -vv | ghe-support-upload -t TICKET_ID -d "Verbose Replication Status"
```

이 예제에서 `ghe-repl-status -vv`는 복제본 어플라이언스에서 자세한 상태 정보를 보냅니다. `ghe-repl-status -vv`를 `STDIN`에 스트리밍하려는 특정 데이터로, `Verbose Replication Status`를 데이터에 대한 간략한 설명으로 바꿔야 합니다. {% data reusables.enterprise_enterprise_support.support_will_ask_you_to_run_command %}

## {% data variables.product.prodname_ghe_server %} 업그레이드

### ghe-upgrade

이 유틸리티는 업그레이드 패키지를 설치하거나 확인합니다. 업그레이드가 실패하거나 중단된 경우 이 유틸리티를 사용하여 패치 릴리스를 롤백할 수도 있습니다. 자세한 내용은 “[{% data variables.product.prodname_ghe_server %} 업그레이드](/enterprise/admin/guides/installation/upgrading-github-enterprise-server/)”를 참조하세요.

업그레이드 패키지를 확인하려면 다음을 사용합니다.
```shell
ghe-upgrade --verify UPGRADE-PACKAGE-FILENAME
```

업그레이드 패키지를 설치하려면 다음을 사용합니다.
```shell
ghe-upgrade UPGRADE-PACKAGE-FILENAME
```

{% data reusables.enterprise_installation.command-line-utilities-ghe-upgrade-rollback %}

### ghe-upgrade-scheduler

이 유틸리티는 업그레이드 패키지의 예약된 설치를 관리합니다. 예약된 설치를 표시하거나 새로 만들거나 제거할 수 있습니다. cron 식을 사용하여 일정을 만들어야 합니다. 자세한 내용은 [Cron Wikipedia 항목](https://en.wikipedia.org/wiki/Cron#Overview)을 참조하세요.

유틸리티는 `ghe-upgrade-scheduler` 대부분의 경우 유지 관리 모드 또는 다시 부팅이 필요하지 않은 핫패치 업그레이드 예약에 가장 적합합니다. 이 유틸리티는 관리자가 수동으로 유지 관리 모드를 설정하고 인스턴스를 다시 부팅하며 유지 관리 모드를 설정하지 않은 전체 패키지 업그레이드에는 실용적이지 않습니다. 다양한 유형의 업그레이드에 대한 자세한 내용은 "[{% data variables.product.product_name %} 업그레이드"를 참조하세요](/admin/enterprise-management/upgrading-github-enterprise-server#upgrading-with-an-upgrade-package).

패키지에 대한 새 설치를 예약하려면 다음을 사용합니다.
```shell
$ ghe-upgrade-scheduler -c "0 2 15 12 *" UPGRADE-PACKAGE-FILENAME
```

패키지에 대해 예약된 설치를 표시하려면 다음을 사용합니다.
```shell
$ ghe-upgrade-scheduler -s UPGRADE PACKAGE FILENAME
> 0 2 15 12 * /usr/local/bin/ghe-upgrade -y -s UPGRADE-PACKAGE-FILENAME > /data/user/common/UPGRADE-PACKAGE-FILENAME.log 2>&1
```

패키지에 대해 예약된 설치를 제거하려면 다음을 사용합니다.
```shell
$ ghe-upgrade-scheduler -r UPGRADE PACKAGE FILENAME
```

### ghe-update-check

이 유틸리티는 {% data variables.product.prodname_enterprise %}의 새 패치 릴리스를 사용할 수 있는지 확인합니다. 릴리스를 사용할 수 있고 인스턴스에 공간이 있는 경우 패키지를 다운로드합니다. 기본적으로 */var/lib/ghe-updates* 에 저장됩니다. 그러면 관리자가 [업그레이드를 수행](/enterprise/admin/guides/installation/updating-the-virtual-machine-and-physical-resources/)할 수 있습니다.

다운로드 상태를 포함하는 파일은 */var/lib/ghe-updates/ghe-update-check.status* 에서 제공됩니다.

최신 {% data variables.product.prodname_enterprise %} 릴리스를 확인하려면 `-i` 스위치를 사용합니다.

```shell
$ ssh -p 122 admin@HOSTNAME -- 'ghe-update-check'
```

## 사용자 관리

### ghe-license-usage

이 유틸리티는 설치 사용자 목록을 JSON 형식으로 내보냅니다. 인스턴스가 {% data variables.product.prodname_ghe_cloud %}에 연결된 경우 {% data variables.product.prodname_ghe_server %}는 이 정보를 사용해 라이선스 정보를 {% data variables.product.prodname_ghe_cloud %}에 보고합니다. 자세한 내용은 “[{% data variables.product.prodname_ghe_cloud %}에 엔터프라이즈 계정 연결](/admin/configuration/managing-connections-between-your-enterprise-accounts/connecting-your-enterprise-account-to-github-enterprise-cloud)”을 참조하세요.

기본적으로 결과 JSON 파일의 사용자 목록은 암호화됩니다. 더 많은 옵션을 이용하려면 `-h` 플래그를 사용합니다.

```shell
ghe-license-usage
```

### ghe-org-membership-update

이 유틸리티는 인스턴스의 모든 구성원에 기본 조직 구성원 자격 표시 여부 설정을 적용합니다. 자세한 내용은 “[조직 구성원 자격에 대한 표시 여부 구성](/enterprise/admin/guides/user-management/configuring-visibility-for-organization-membership)”을 참조하세요. 설정 옵션은 `public` 또는 `private`입니다.

```shell
ghe-org-membership-update --visibility=SETTING
```

### `ghe-user-csv`

이 유틸리티는 설치의 모든 사용자 목록을 CSV 형식으로 내보냅니다. CSV 파일에는 메일 주소, 사용자 유형(예: 관리자, 사용자), 리포지토리 수, SSH 키 수, 조직 멤버 자격 수, 마지막으로 기록된 IP 주소 등이 포함됩니다. 더 많은 옵션을 이용하려면 `-h` 플래그를 사용합니다.

```shell
ghe-user-csv -o > users.csv
```

### ghe-user-demote

이 유틸리티는 지정된 사용자를 관리자 상태에서 일반 사용자의 상태로 강등합니다. 웹 UI를 사용하여 이 작업을 수행하는 것이 좋지만 `ghe-user-promote` 유틸리티가 잘못 실행되고 CLI에서 사용자를 다시 강등해야 하는 경우 이 유틸리티를 제공합니다.

```shell
ghe-user-demote USERNAME
```

### ghe-user-promote

이 유틸리티는 지정된 사용자 계정을 사이트 관리자로 승격합니다.

```shell
ghe-user-promote USERNAME
```

### ghe-user-suspend

이 유틸리티는 지정된 사용자를 일시 중단하여 리포지토리에서 로그인, 푸시 또는 끌어오지 못하게 합니다.

```shell
ghe-user-suspend USERNAME
```

### ghe-user-unsuspend

이 유틸리티는 지정된 사용자를 일시 중단하지 않고 리포지토리에서 로그인, 푸시 및 풀하기 위한 액세스 권한을 부여합니다.

```shell
ghe-user-unsuspend USERNAME
```
