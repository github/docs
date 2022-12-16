---
title: 시스템 로그 정보
intro: '{% data variables.product.product_name %}은(는) 시스템 이벤트에 대한 오류 및 메시지 로그를 유지합니다. 로그는 사용자, 애플리케이션 및 시스템 수준 작업과 예외를 식별하는 데 유용합니다.'
versions:
  ghes: '*'
type: overview
topics:
  - Auditing
  - Enterprise
  - Logging
  - Security
ms.openlocfilehash: e41702e25c7cc222cefb4eedb4e0322adf3acdba
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/05/2022
ms.locfileid: '147063332'
---
## 시스템 로그

기본적으로 {% data variables.product.product_name %}에 대한 시스템 로그는 24시간마다 자동으로 회전되며 7일 동안 유지됩니다. 시스템 로그에는 시스템 수준 이벤트, 애플리케이션 로그 및 Git 이벤트 데이터가 포함됩니다. 로그 파일이 자주 기록되고 크기가 클 수 있으므로 {% data variables.product.prodname_ghe_server %} 인스턴스와 별도의 호스트에서 관련 로그 항목을 추출하고 구문 분석하는 것이 도움이 될 수 있습니다.

더 긴 보존을 위해 시스템 로그를 타사 시스템 또는 서버로 전달할 수 있습니다. 자세한 내용은 “[로그 전달](/admin/monitoring-activity-in-your-enterprise/exploring-user-activity/log-forwarding)”을 참조하세요.

시스템 로그를 검토하는 것 외에도 감사 로그 보기, 푸시 로그 및 전역 웹후크 관리와 같은 다른 방법으로 엔터프라이즈의 작업을 모니터링할 수 있습니다. 자세한 내용은 “[엔터프라이즈의 작업 모니터링](/admin/monitoring-activity-in-your-enterprise)”을 참조하세요.

## 로그 유형

다음은 {% data variables.product.product_name %} 어플라이언스와 해당 함수에서 사용하는 기본 로그입니다.

| 경로 | Description |
|------|-------------|
| `/var/log/github/audit.log` | 감사된 사용자, 리포지토리 및 시스템 이벤트입니다.
| `/var/log/github/unicorn.log` | API 및 웹 인터페이스 트래픽입니다.
| `/var/log/github/exceptions.log` | 애플리케이션 수준 오류입니다.
| `/var/log/haproxy.log` | 어플라이언스로 도달하는 모든 IP 트래픽입니다.
| `/var/log/hookshot/resqued.log` | 웹후크 배달 및 실패입니다.
| `/var/log/github/auth.log` | 기본 제공, LDAP, CAS 또는 SAML 메서드를 통한 인증 요청입니다.
| `/var/log/github/gitauth.log` | 모든 Git 인증 요청입니다.

Git 활동 및 인증 요청은 `babeld` 서비스에서 처리됩니다.

`babeld` 서비스와 같은 여러 {% data variables.product.product_name %} 서비스가 컨테이너화됩니다. 컨테이너화된 로그는 `systemd journal`에 기록되며 `journalctl` 명령을 사용하여 언제든지 쿼리할 수 있습니다.

## 감사된 시스템 이벤트

`audit.log` 파일의 모든 항목이 사용되며 `github_audit` 키워드를 사용하여 필터링할 수 있습니다.

예를 들어 이 항목은 새 리포지토리가 생성되었음을 보여 줍니다.

```
Oct 26 01:42:08 github-ent github_audit: {:created_at=>1351215728326, :actor_ip=>"10.0.0.51", :data=>{}, :user=>"some-user", :repo=>"some-user/some-repository", :actor=>"some-user", :actor_id=>2, :user_id=>2, :action=>"repo.create", :repo_id=>1, :from=>"repositories#create"}
```

이 예제에서는 커밋이 리포지토리에 푸시되었음을 보여 줍니다.

```
Oct 26 02:19:31 github-ent github_audit: { "pid":22860, "ppid":22859, "program":"receive-pack", "git_dir":"/data/repositories/some-user/some-repository.git", "hostname":"github-ent", "pusher":"some-user", "real_ip":"10.0.0.51", "user_agent":"git/1.7.10.4", "repo_id":1, "repo_name":"some-user/some-repository", "transaction_id":"b031b7dc7043c87323a75f7a92092ef1456e5fbaef995c68", "frontend_ppid":1, "repo_public":true, "user_name":"some-user", "user_login":"some-user", "frontend_pid":18238, "frontend":"github-ent", "user_email":"some-user@github.example.com", "user_id":2, "pgroup":"github-ent_22860", "status":"post_receive_hook", "features":" report-status side-band-64k", "received_objects":3, "receive_pack_size":243, "non_fast_forward":false, "current_ref":"refs/heads/main" }
```

## 지원 번들

지원 번들에는 시스템 로그가 포함되며 모든 감사 정보가 `github-logs` 디렉터리의 `audit.log` 파일에 기록됩니다. 자세한 내용은 “[{% data variables.product.prodname_dotcom %} 지원에 데이터 제공](/support/contacting-github-support/providing-data-to-github-support)”을 참조하세요.

## 추가 참고 자료

- [명령`journalctl`에 대한 Linux 기본 페이지](http://man7.org/linux/man-pages/man1/journalctl.1.html)
