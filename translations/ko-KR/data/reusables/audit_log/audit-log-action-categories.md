---
ms.openlocfilehash: e0bf1f4b7bbd5fcb145a6e869dd442fd8e53108a
ms.sourcegitcommit: b4996daba2e75b3368f39316e6929602f13b961b
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 10/31/2022
ms.locfileid: "148120536"
---
| 범주 이름. | 설명
|------------------|-------------------
{%- ifversion fpt or ghec %} | `account` | 조직 계정과 관련된 활동을 포함합니다.
| `advisory_credit`   | {% data variables.product.prodname_advisory_database %}의 보안 권고에 대한 기여자 크레딧과 관련된 활동을 포함합니다. 자세한 내용은 “[{% data variables.product.prodname_dotcom %} 보안 공지 정보](/github/managing-security-vulnerabilities/about-github-security-advisories)”를 참조하세요.
{%- endif %} | `artifact` | {% data variables.product.prodname_actions %} 워크플로 실행 아티팩트와 관련된 활동을 포함합니다.
{%- ifversion audit-log-streaming %} | `audit_log_streaming` | 엔터프라이즈 계정의 조직에 대한 스트리밍 감사 로그와 관련된 활동을 포함합니다.
{%- endif %} {%- ifversion fpt or ghec %} | `billing` | 조직의 청구와 관련된 활동을 포함합니다.
{%- endif %} {%- ifversion ghec or ghes or ghae %} | `business`  | 엔터프라이즈의 비즈니스 설정과 관련된 활동을 포함합니다.
{%- endif %} {%- ifversion code-security-audit-log-events %} | `business_advanced_security` | 엔터프라이즈의 {% data variables.product.prodname_GH_advanced_security %}과 관련된 활동을 포함합니다. 자세한 내용은 "[엔터프라이즈에 대한 {% data variables.product.prodname_GH_advanced_security %} 기능 관리](/admin/code-security/managing-github-advanced-security-for-your-enterprise/managing-github-advanced-security-features-for-your-enterprise)"를 참조하세요.
| `business_secret_scanning` | 엔터프라이즈의 {% data variables.product.prodname_secret_scanning %}과 관련된 활동을 포함합니다. 자세한 내용은 "[엔터프라이즈에 대한 {% data variables.product.prodname_GH_advanced_security %} 기능 관리](/admin/code-security/managing-github-advanced-security-for-your-enterprise/managing-github-advanced-security-features-for-your-enterprise)"를 참조하세요.
{%- endif %} {%- ifversion secret-scanning-audit-log-custom-patterns %} | `business_secret_scanning_custom_pattern` | 엔터프라이즈의 {% data variables.product.prodname_secret_scanning %}에 대한 사용자 지정 패턴과 관련된 활동을 포함합니다.
{%- endif %} {%- ifversion code-security-audit-log-events %} | `business_secret_scanning_push_protection` | 엔터프라이즈에서 {% data variables.product.prodname_secret_scanning %}의 푸시 보호 기능과 관련된 활동을 포함합니다. 자세한 내용은 "[엔터프라이즈에 대한 {% data variables.product.prodname_GH_advanced_security %} 기능 관리](/admin/code-security/managing-github-advanced-security-for-your-enterprise/managing-github-advanced-security-features-for-your-enterprise)"를 참조하세요.
| `business_secret_scanning_push_protection_custom_message` | 엔터프라이즈에서 푸시 보호가 트리거될 때 표시되는 사용자 지정 메시지와 관련된 활동을 포함합니다. 자세한 내용은 "[엔터프라이즈에 대한 {% data variables.product.prodname_GH_advanced_security %} 기능 관리](/admin/code-security/managing-github-advanced-security-for-your-enterprise/managing-github-advanced-security-features-for-your-enterprise)"를 참조하세요.
{%- endif %} | `checks`   | 도구 모음 및 실행 확인과 관련된 활동을 포함합니다.
{%- ifversion fpt or ghec %} | `codespaces` | 조직 codespace와 관련된 활동을 포함합니다.
{%- endif %} | `commit_comment` | 커밋 주석 업데이트 또는 삭제와 관련된 활동을 포함합니다.
{%- ifversion ghes %} | `config_entry` |  구성 설정과 관련된 활동을 포함합니다. 이러한 이벤트는 사이트 관리자 감사 로그에만 표시됩니다.
{%- endif %} | `dependabot_alerts`  | 기존 리포지토리의 {% data variables.product.prodname_dependabot_alerts %}에 대한 조직 수준 구성 활동을 포함합니다. 자세한 내용은 “[{% data variables.product.prodname_dependabot_alerts %} 정보](/code-security/dependabot/dependabot-alerts/about-dependabot-alerts)”를 참조하세요.
| `dependabot_alerts_new_repos`   | 조직에서 만든 새 리포지토리의 {% data variables.product.prodname_dependabot_alerts %}에 대한 조직 수준 구성 활동을 포함합니다.
| `dependabot_repository_access` | 조직 {% data variables.product.prodname_dependabot %}에서 액세스할 수 있는 프라이빗 리포지토리와 관련된 활동을 포함합니다.
{%- ifversion fpt or ghec or ghes %} | `dependabot_security_updates`   | 기존 리포지토리의 {% data variables.product.prodname_dependabot_security_updates %}에 대한 조직 수준 구성 활동을 포함합니다. 자세한 내용은 “[{% data variables.product.prodname_dependabot_security_updates %} 구성](/github/managing-security-vulnerabilities/configuring-dependabot-security-updates)”을 참조하세요.
| `dependabot_security_updates_new_repos` | 조직에서 만든 새 리포지토리의 {% data variables.product.prodname_dependabot_security_updates %}에 대한 조직 수준 구성 활동을 포함합니다.
{%- endif %} | `dependency_graph` | 리포지토리에 대한 종속성 그래프에 대한 조직 수준 구성 활동을 포함합니다. 자세한 내용은 “[종속성 그래프 정보](/github/visualizing-repository-data-with-graphs/about-the-dependency-graph)”를 참조하세요.
| `dependency_graph_new_repos`  | 조직에서 만든 새 리포지토리에 대한 조직 수준 구성 활동을 포함합니다.
{%- ifversion fpt or ghec %} | `discussion` | 팀 토론과 관련된 활동을 포함합니다.
| `discussion_comment` | 팀 페이지의 토론에 게시된 주석과 관련된 활동을 포함합니다.
| `discussion_post`   | 팀 페이지에 게시된 토론과 관련된 활동을 포함합니다.
| `discussion_post_reply`   | 팀 페이지에 게시된 토론에 대한 응답과 관련된 활동을 포함합니다.
{%- endif %} {%- ifversion ghec or ghes %} | `dotcom_connection` | {% data variables.product.prodname_github_connect %}와(과) 관련된 활동을 포함합니다.
| `enterprise` | 엔터프라이즈 설정과 관련된 활동을 포함합니다.
{%- endif %} {%- ifversion ghec %} | `enterprise_domain` | 확인된 엔터프라이즈 도메인과 관련된 활동을 포함합니다.
| `enterprise_installation` | {% data variables.product.prodname_github_connect %} 엔터프라이즈 연결과 연결된 {% data variables.product.prodname_github_app %}와(과) 관련된 활동을 포함합니다.
{%- endif %} {%- ifversion fpt or ghec %} | `environment` | {% data variables.product.prodname_actions %} 환경과 관련된 활동을 포함합니다.
{%- endif %} {%- ifversion ghae %} | `external_group` | OKTA 그룹과 관련된 활동을 포함합니다.
| `external_identity` | OKTA 그룹의 사용자와 관련된 활동을 포함합니다.
{%- endif %} | `gist` | gist와 관련된 활동을 포함합니다.
| `hook` | 웹후크와 관련된 활동을 포함합니다.
| `integration` | 계정의 통합과 관련된 활동을 포함합니다.
| `integration_installation` | 계정에 설치된 통합과 관련된 활동을 포함합니다.
| `integration_installation_request`  | 소유자가 조직에서 사용할 통합을 승인하도록 조직 구성원 요청과 관련된 활동을 포함합니다.
{%- ifversion ghec or ghae %} | `ip_allow_list`   | 조직에 대한 IP 허용 목록을 사용하거나 사용하지 않도록 설정하는 작업과 관련된 활동을 포함합니다.
| `ip_allow_list_entry`   | 조직에 대한 IP 허용 목록 항목의 생성, 삭제, 편집과 관련된 활동을 포함합니다.
{%- endif %} | `issue`  | 리포지토리의 문제 고정, 전송 또는 삭제와 관련된 활동을 포함합니다.
| `issue_comment` | 문제 주석 고정, 전송 또는 삭제와 관련된 활동을 포함합니다.
| `issues` | 조직에 대한 문제 만들기를 사용하거나 사용하지 않도록 설정하는 작업과 관련된 활동을 포함합니다.
{%- ifversion fpt or ghec %} | `marketplace_agreement_signature` | {% data variables.product.prodname_marketplace %} 개발자 계약 서명과 관련된 활동을 포함합니다.
| `marketplace_listing` | {% data variables.product.prodname_marketplace %}의 앱 나열과 관련된 활동을 포함합니다.
{%- endif %} | `members_can_create_pages`   | 조직의 리포지토리에 대한 {% data variables.product.prodname_pages %} 사이트의 게시 관리와 관련된 활동을 포함합니다. 자세한 내용은 “[조직의 {% data variables.product.prodname_pages %} 사이트의 게시 관리](/organizations/managing-organization-settings/managing-the-publication-of-github-pages-sites-for-your-organization)”를 참조하세요.
| `members_can_create_private_pages` | 조직의 리포지토리에 대한 프라이빗 {% data variables.product.prodname_pages %} 사이트의 게시 관리와 관련된 활동을 포함합니다.
| `members_can_create_public_pages` | 조직의 리포지토리에 대한 퍼블릭 {% data variables.product.prodname_pages %} 사이트의 게시 관리와 관련된 활동을 포함합니다.
{%- ifversion ghec or ghes or ghae %} | `members_can_delete_repos` | 조직에 대한 리포지토리 생성을 사용하거나 사용하지 않도록 설정하는 작업과 관련된 활동을 포함합니다.
{%- endif %} {%- ifversion fpt or ghec %} | `members_can_view_dependency_insights` | 조직 구성원이 종속성 인사이트를 볼 수 있도록 하는 조직 수준 구성 활동을 포함합니다.
| `migration` | 원본 위치(예: {% data variables.product.prodname_dotcom_the_website %} 조직 또는 {% data variables.product.prodname_ghe_server %} 인스턴스)에서 대상 {% data variables.product.prodname_ghe_server %} 인스턴스로 데이터를 전송하는 작업과 관련된 활동을 포함합니다. 
{%- endif %} | `oauth_access` | OAuth 액세스 토큰과 관련된 활동을 포함합니다.
| `oauth_application` | OAuth 앱과 관련된 활동을 포함합니다.
{%- ifversion fpt or ghec %} | `oauth_authorization` | OAuth 앱 권한 부여와 관련된 활동을 포함합니다.
{%- endif %} | `org`   | 조직 멤버 자격과 관련된 활동을 포함합니다.
{%- ifversion ghec or ghes or ghae %} | `org_credential_authorization` | SAML Single Sign-On에 사용할 자격 증명 권한 부여와 관련된 활동을 포함합니다.
{%- endif %} {%- ifversion secret-scanning-audit-log-custom-patterns %} | `org_secret_scanning_custom_pattern` | 조직에서 비밀 검색을 위한 사용자 지정 패턴과 관련된 활동을 포함합니다. 자세한 내용은 “[비밀 검사를 위한 사용자 지정 패턴 정의](/code-security/secret-scanning/defining-custom-patterns-for-secret-scanning)”를 참조하세요.
| `org.secret_scanning_push_protection` | 조직의 비밀 검사 사용자 지정 패턴과 관련된 활동을 포함합니다. 자세한 내용은 “[비밀 검사를 사용하여 푸시 보호](/code-security/secret-scanning/protecting-pushes-with-secret-scanning)”를 참조하세요.
{%- endif %} | `organization_default_label` | 조직의 리포지토리에 대한 기본 레이블과 관련된 활동을 포함합니다.
{%- ifversion fpt or ghec or ghes %} | `organization_domain` | 확인된 조직 도메인과 관련된 활동을 포함합니다.
| `organization_projects_change` | 엔터프라이즈의 조직 전체 프로젝트 보드와 관련된 활동을 포함합니다.
{%- endif %} {%- ifversion fpt or ghec %} | `pages_protected_domain` | {% data variables.product.prodname_pages %}에 대해 확인된 사용자 지정 도메인과 관련된 활동을 포함합니다.
| `payment_method`  | 조직이 {% data variables.product.prodname_dotcom %}에 대해 지불하는 방법과 관련된 활동을 포함합니다.
| `prebuild_configuration` | {% data variables.product.prodname_github_codespaces %}에 대한 사전 빌드 구성과 관련된 활동을 포함합니다.
{%- endif %} {%- ifversion ghes %} | `pre_receive_environment` | 사전 수신 후크 환경과 관련된 활동을 포함합니다.
| `pre_receive_hook` | 사전 수신 후크와 관련된 활동을 포함합니다.
{%- endif %} {%- ifversion ghes %} | `private_instance_encryption` | 엔터프라이즈에 대한 프라이빗 모드를 사용하도록 설정하는 작업과 관련된 활동을 포함합니다.
{%- endif %} | `private_repository_forking` | 리포지토리, 조직 또는 엔터프라이즈에 대한 프라이빗 및 내부 리포지토리의 포크 허용과 관련된 활동을 포함합니다.
{%- ifversion fpt or ghec %} | `profile_picture`   | 조직의 프로필 사진과 관련된 활동을 포함합니다.
{%- endif %} | `project` | 프로젝트 보드와 관련된 작업을 포함합니다.
| `project_field` | 프로젝트 보드의 필드 만들기 및 삭제와 관련된 활동을 포함합니다.
| `project_view` | 프로젝트 보드의 보기 만들기 및 삭제와 관련된 활동을 포함합니다.
| `protected_branch` | 보호된 분기와 관련된 활동을 포함합니다.
| `public_key` | SSH 키 및 배포 키와 관련된 활동을 포함합니다.
| `pull_request` | 끌어오기 요청과 관련된 활동을 포함합니다.
| `pull_request_review` | 끌어오기 요청 검토와 관련된 활동을 포함합니다.
| `pull_request_review_comment` | 끌어오기 요청 검토 주석과 관련된 활동을 포함합니다.
| `repo` | 조직에서 소유한 리포지토리와 관련된 활동을 포함합니다.
{%- ifversion fpt or ghec %} | `repository_advisory` | {% data variables.product.prodname_advisory_database %}의 보안 권고와 관련된 리포지토리 수준 활동을 포함합니다.  자세한 내용은 “[{% data variables.product.prodname_dotcom %} 보안 공지 정보](/github/managing-security-vulnerabilities/about-github-security-advisories)”를 참조하세요.
| `repository_content_analysis`   | [프라이빗 리포지토리에 대한 데이터 사용을 사용하거나 사용하지 않도록 설정하는](/articles/about-github-s-use-of-your-data) 작업과 관련된 활동을 포함합니다.
| `repository_dependency_graph`   | {% ifversion fpt or ghec %}프라이빗 {% endif %}리포지토리에 대한 종속성 그래프를 사용하거나 사용하지 않도록 설정하는 작업과 관련된 리포지토리 수준 활동을 포함합니다. 자세한 내용은 “[종속성 그래프 정보](/github/visualizing-repository-data-with-graphs/about-the-dependency-graph)”를 참조하세요.
{%- endif %} | `repository_image` | 리포지토리의 이미지와 관련된 활동을 포함합니다.
| `repository_invitation` | 리포지토리에 참가하기 위한 초대와 관련된 활동을 포함합니다.
| `repository_projects_change` | 리포지토리 또는 조직의 모든 리포지토리에 대한 프로젝트 사용과 관련된 활동을 포함합니다.
{%- ifversion ghec or ghes or ghae %} | `repository_secret_scanning`  | 비밀 검사와 관련된 리포지토리 수준 활동을 포함합니다. 자세한 내용은 “[비밀 검사 정보](/github/administering-a-repository/about-secret-scanning)”를 참조하세요.
{%- endif %} {%- ifversion secret-scanning-audit-log-custom-patterns %} | `repository_secret_scanning_custom_pattern` | 리포지토리에서 비밀 검색 사용자 지정 패턴과 관련된 활동을 포함합니다. 자세한 내용은 “[비밀 검사를 위한 사용자 지정 패턴 정의](/code-security/secret-scanning/defining-custom-patterns-for-secret-scanning)”를 참조하세요. {% endif %}{% ifversion secret-scanning-audit-log-custom-patterns %} | `repository_secret_scanning_push_protection` | 리포지토리에서 비밀 검색 사용자 지정 패턴과 관련된 활동을 포함합니다. 자세한 내용은 “[비밀 검사를 사용하여 푸시 보호](/code-security/secret-scanning/protecting-pushes-with-secret-scanning)”를 참조하세요.
{%- endif %} {%- ifversion fpt or ghec %} | `repository_visibility_change` | 조직 구성원이 조직의 리포지토리 표시 유형을 변경할 수 있도록 허용하는 작업과 관련된 활동을 포함합니다.
{%- endif %} | `repository_vulnerability_alert` | [{% data variables.product.prodname_dependabot_alerts %}](/code-security/dependabot/dependabot-alerts/about-dependabot-alerts)와 관련된 활동을 포함합니다.
{%- ifversion fpt or ghec %} | `repository_vulnerability_alerts` | {% data variables.product.prodname_dependabot_alerts %}에 대한 리포지토리 수준 구성 활동을 포함합니다.
| `required_status_check` | 보호된 분기에 대한 필수 상태 검사와 관련된 활동을 포함합니다.
{%- endif %} {%- ifversion ghec or ghes %} | `restrict_notification_delivery` | 엔터프라이즈의 승인되거나 확인된 도메인에 대한 메일 알림 제한과 관련된 활동을 포함합니다.
{%- endif %} {%- ifversion custom-repository-roles %} | `role` | [사용자 지정 리포지토리 역할](/organizations/managing-peoples-access-to-your-organization-with-roles/managing-custom-repository-roles-for-an-organization)과 관련된 활동을 포함합니다.
{%- endif %} {%- ifversion ghec or ghes or ghae %} | `secret_scanning`   | 기존 리포지토리에서 비밀 검사를 위한 조직 수준 구성 활동을 포함합니다. 자세한 내용은 “[비밀 검사 정보](/github/administering-a-repository/about-secret-scanning)”를 참조하세요.
| `secret_scanning_new_repos` | 조직에서 만든 새 리포지토리에 대한 비밀 검사를 위한 조직 수준 구성 활동을 포함합니다.
{%- endif %} {%- ifversion ghec or ghes or ghae %} | `security_key` | 보안 키 등록 및 제거와 관련된 활동을 포함합니다.
{%- endif %} {%- ifversion fpt or ghec %} | `sponsors`  | 스폰서 단추와 관련된 이벤트를 포함합니다(“[리포지토리에 스폰서 단추 표시](/articles/displaying-a-sponsor-button-in-your-repository)” 참조).
{%- endif %} {%- ifversion ghec or ghes or ghae %} | `ssh_certificate_authority` | 조직 또는 엔터프라이즈의 SSH 인증 기관과 관련된 활동을 포함합니다.
| `ssh_certificate_requirement` | 구성원이 SSH 인증서를 사용하여 조직 리소스에 액세스하도록 요구하는 작업과 관련된 활동을 포함합니다.
{%- endif %} | `staff` | 작업을 수행하는 사이트 관리자와 관련된 활동을 포함합니다.
| `team` | 조직의 팀과 관련된 활동을 포함합니다.
| `team_discussions` | 조직의 팀 토론 관리와 관련된 활동을 포함합니다.
{%- ifversion ghec %} | `team_sync_tenant` | 엔터프라이즈 또는 조직의 IdP와 팀 동기화와 관련된 활동을 포함합니다.
{%- endif %} {%- ifversion fpt or ghes %} | `two_factor_authentication` | 2단계 인증과 관련된 활동을 포함합니다.
{%- endif %} | `user` | 엔터프라이즈 또는 조직의 사용자와 관련된 활동을 포함합니다.
{%- ifversion ghec or ghes %} | `user_license` | 사용자가 엔터프라이즈에서 라이선스를 취득하고 엔터프라이즈의 구성원이 되는 작업과 관련된 활동을 포함합니다.
{%- endif %} | `workflows` | {% data variables.product.prodname_actions %} 워크플로와 관련된 활동을 포함합니다.
