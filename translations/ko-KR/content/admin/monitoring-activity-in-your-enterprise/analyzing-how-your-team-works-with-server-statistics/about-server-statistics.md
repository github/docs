---
title: 서버 통계 정보
intro: '{% data variables.product.prodname_server_statistics %}를 사용하여 {% data variables.product.prodname_ghe_server %}에서 자체 집계 데이터를 분석하고 {% data variables.product.company_short %} 제품을 개선하는 데 도움을 줄 수 있습니다.'
versions:
  feature: server-statistics
permissions: 'Enterprise owners can enable {% data variables.product.prodname_server_statistics %}.'
redirect_from:
  - /early-access/github/analyze-how-your-team-works-with-server-statistics/about-server-statistics
topics:
  - Enterprise
ms.openlocfilehash: 3d17df54cd5dcf9ad102ab5079794a9bcb3e664b
ms.sourcegitcommit: 1a77ceb9e20c002173dda983db9405bcd5be254a
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 11/29/2022
ms.locfileid: '148185187'
---
## {% data variables.product.prodname_server_statistics %}의 이점 정보

{% data variables.product.prodname_server_statistics %}는 조직의 요구 사항을 예측하고, 팀의 작동 방식을 이해하고, {% data variables.product.prodname_ghe_server %}에서 얻을 수 있는 가치를 표시하는 데 도움이 될 수 있습니다.

{% data variables.product.prodname_server_statistics %}가 사용하도록 설정되면 시간 경과에 따라 인스턴스에서 사용되는 특정 기능의 양에 대한 집계 데이터를 수집합니다. 마지막 날의 데이터만 반환하는 다른 [Admin Stats API](/rest/reference/enterprise-admin#admin-stats) 엔드포인트와 달리 {% data variables.product.prodname_server_statistics %}는 기능을 사용하도록 설정한 날부터 수집된 모든 {% data variables.product.prodname_server_statistics %} 메트릭의 기록 데이터를 제공합니다. 자세한 내용은 “[엔터프라이즈에 {% data variables.product.prodname_server_statistics %} 사용](/admin/configuration/configuring-github-connect/enabling-server-statistics-for-your-enterprise)”을 참조하세요.

{% data variables.product.prodname_server_statistics %}를 사용하도록 설정하면 더 나은 {% data variables.product.prodname_dotcom %}을 빌드하는 데 도움이 됩니다. 제공할 집계 데이터를 통해 {% data variables.product.prodname_dotcom %}이 고객에게 가치를 더하는 방법에 대한 인사이트를 얻을 수 있습니다. 이 정보를 통해 {% data variables.product.company_short %}는 더 나은 정보를 바탕으로 제품 결정을 내릴 수 있으며 궁극적으로 사용자에게 유용합니다.

## 데이터 보안 정보

사용자의 데이터를 존중합니다. 사용자가 먼저 권한을 부여하지 않는 한 {% data variables.location.product_location %}에서 데이터를 전송하지 않습니다.

개인 데이터를 수집하지 않습니다. 또한 코드, 문제, 주석 또는 끌어오기 요청 콘텐츠와 같은 {% data variables.product.company_short %} 콘텐츠는 수집하지 않습니다.

{% data variables.product.prodname_ghe_cloud %}의 연결된 엔터프라이즈 계정 또는 조직의 소유자만 데이터에 액세스할 수 있습니다.

특정 집계 메트릭만 리포지토리, 이슈, 끌어오기 요청 및 기타 기능에서 수집됩니다. 수집된 집계 메트릭 목록을 보려면 “[수집된 {% data variables.product.prodname_server_statistics %} 데이터](#server-statistics-data-collected)”를 참조하세요. 

수집된 메트릭에 대한 업데이트는 {% data variables.product.prodname_ghe_server %}의 향후 기능 릴리스에서 발생하며 [{% data variables.product.prodname_ghe_server %} 릴리스 정보](/admin/release-notes)에 설명되어 있습니다. 또한 이 문서를 모든 메트릭 업데이트로 업데이트합니다.

{% data variables.product.prodname_server_statistics %} 데이터를 저장하고 보호하는 방법에 대한 자세한 내용은 “[GitHub 보안](https://github.com/security)”을 참조하세요.

### 데이터 보존 및 삭제 정보

{% data variables.product.company_short %}는 {% data variables.product.prodname_ghe_server %} 라이선스가 활성화되어 있고 {% data variables.product.prodname_server_statistics %} 기능을 사용하도록 설정하는 한 {% data variables.product.prodname_server_statistics %} 데이터를 수집합니다.

데이터를 삭제하려면 GitHub 지원팀, {% data variables.product.prodname_dotcom %} 계정 담당자 또는 고객 성공 관리자에게 문의하면 됩니다.  일반적으로 개인정보처리방침에 지정된 기간 내에 데이터를 삭제합니다. 자세한 내용은 {% data variables.product.prodname_dotcom_the_website %} 설명서의 [{% data variables.product.company_short %} 개인정보처리방침](/free-pro-team@latest/site-policy/privacy-policies/github-privacy-statement#data-retention-and-deletion-of-data)을 참조하세요.

### 데이터 이식성 정보

{% data variables.product.prodname_ghe_cloud %}의 조직 소유자 또는 엔터프라이즈 소유자는 CSV 또는 JSON 파일에서 데이터를 내보내거나 {% data variables.product.prodname_server_statistics %} REST API를 통해 {% data variables.product.prodname_server_statistics %} 데이터에 액세스할 수 있습니다. 자세한 내용은 “[REST API를 사용하여 {% data variables.product.prodname_server_statistics %} 요청](/admin/monitoring-activity-in-your-enterprise/analyzing-how-your-team-works-with-server-statistics/requesting-server-statistics-using-the-rest-api)” 또는 “[{% data variables.product.prodname_server_statistics %} 내보내기](/admin/monitoring-activity-in-your-enterprise/analyzing-how-your-team-works-with-server-statistics/exporting-server-statistics)”를 참조하세요.

## 데이터 수집 비활성화 정보

언제든지 {% data variables.product.prodname_server_statistics %} 기능을 사용하지 않도록 설정할 수 있습니다. 자세한 내용은 “[엔터프라이즈에 {% data variables.product.prodname_server_statistics %} 사용](/admin/configuration/configuring-github-connect/enabling-server-statistics-for-your-enterprise)”을 참조하세요.

## 수집된 {% data variables.product.prodname_server_statistics %} 데이터

{% data variables.product.prodname_server_statistics %}을(를) 사용하도록 설정하면 {% data variables.location.product_location %}에서 실행되는 일일 작업을 통해 메트릭이 수집됩니다. 집계 메트릭은 {% data variables.product.prodname_ghe_cloud %}의 조직 또는 엔터프라이즈 계정에 저장되며 {% data variables.location.product_location %}에 저장되지 않습니다.

다음 집계 메트릭은 매일 수집 및 전송되며 해당 날짜의 총 개수를 나타냅니다.

CSV 열 | Name | Description |
---------- | ---- | ----------- |
A   | `github_connect.features_enabled` | 인스턴스에 대해 사용하도록 설정된 {% data variables.product.prodname_github_connect %} 기능의 배열("[{% data variables.product.prodname_github_connect %}정보](/admin/configuration/configuring-github-connect/about-github-connect#github-connect-features)" 참조) |
b   | `host_name` | 인스턴스의 호스트 이름 |
C   | `dormant_users.dormancy_threshold` | 사용자가 휴면 상태로 간주되려면 비활성 상태여야 하는 기간입니다. |
D   | `dormant_users.total_dormant_users` | 휴면 사용자 계정 수 |
E   | `ghes_version` | 인스턴스가 실행 중인 {% data variables.product.product_name %}의 버전 |
F   | `server_id` | 인스턴스에 대해 생성된 UUID
G   | `collection_date` | 메트릭이 수집된 날짜 |
H   | `schema_version` | 이 데이터를 저장하는 데 사용되는 데이터베이스 스키마의 버전 |
I   | `ghe_stats.comments.total_commit_comments` | 커밋에 대한 주석 수 |
J   | `ghe_stats.comments.total_gist_comments` | gists에 대한 의견 수 |
K   | `ghe_stats.comments.total_issue_comments` | 문제에 대한 의견 수 | 
L   | `ghe_stats.comments.total_pull_request_comments` | 끌어오기 요청에 대한 주석 수 |
M   | `ghe_stats.gists.total_gists` | gists 수(비밀 및 공개 모두) |
N   | `ghe_stats.gists.private_gists` | 비밀 문자 수 |
O   | `ghe_stats.gists.public_gists` | 퍼블릭 시스트의 수 |
P   | `ghe_stats.hooks.total_hooks` | 사전 수신 후크 수(활성 및 비활성) |
Q   | `ghe_stats.hooks.active_hooks` | 활성 사전 수신 후크 수 |
R   | `ghe_stats.hooks.inactive_hooks` | 비활성 사전 수신 후크 수 |
S   | `ghe_stats.issues.total_issues` | 문제 수(열기 및 닫힘 모두) |
T   | `ghe_stats.issues.open_issues` | 열려 있는 문제 수 |
U   | `ghe_stats.issues.closed_issues` | 닫힌 문제 수 |
V   | `ghe_stats.milestones.total_milestones` | 마일스톤 수(열기 및 닫힘 모두) |
W   | `ghe_stats.milestones.open_milestones` | 열린 마일스톤 수 |
X   | `ghe_stats.milestones.closed_milestones` | 종결된 마일스톤 수 |
Y   | `ghe_stats.orgs.total_orgs` | 조직 수(사용 및 사용 안 함) |
Z   | `ghe_stats.orgs.disabled_orgs` | 비활성화된 조직 수 |
AA | `ghe_stats.orgs.total_teams` | 팀 수 |
AB | `ghe_stats.orgs.total_team_members` | 팀 구성원 수 |
Ac | `ghe_stats.pages.total_pages` | {% data variables.product.prodname_pages %} 사이트 수 |
AD | `ghe_stats.pulls.total_pulls` | 끌어오기 요청 수 |
AE | `ghe_stats.pulls.merged_pulls` | 병합된 끌어오기 요청 수 |
AF | `ghe_stats.pulls.mergeable_pulls` | 현재 병합할 수 있는 끌어오기 요청 수 |
AG | `ghe_stats.pulls.unmergeable_pulls` | 현재 병합할 수 없는 끌어오기 요청 수 |
AH | `ghe_stats.repos.total_repos` | 리포지토리 수(업스트림 리포지토리와 포크 모두) |
AI | `ghe_stats.repos.root_repos` | 업스트림 리포지토리 수 |
Aj | `ghe_stats.repos.fork_repos` | 포크 수 |
AK | `ghe_stats.repos.org_repos` | 조직이 소유한 리포지토리 수 |
AL | `ghe_stats.repos.total_pushes` | 리포지토리에 대한 푸시 수 |
AM | `ghe_stats.repos.total_wikis` | 위키 수 |
AN | `ghe_stats.users.total_users` | 사용자 계정 수 |
AO | `ghe_stats.users.admin_users` | 사이트 관리자인 사용자 계정 수 |
AP | `ghe_stats.users.suspended_users` | 일시 중단된 사용자 계정 수 |

## {% data variables.product.prodname_server_statistics %} 데이터 예제

{% data variables.product.prodname_server_statistics %}에 대한 CSV 내보내기 에 포함된 머리글의 예를 보려면 [{% data variables.product.prodname_server_statistics %} CSV 예제](/assets/server-statistics-csv-example.csv)를 다운로드합니다.

{% data variables.product.prodname_server_statistics %} API에 대한 응답 페이로드의 예제를 보려면 “[REST API를 사용하여 {% data variables.product.prodname_server_statistics %} 요청](/admin/monitoring-activity-in-your-enterprise/analyzing-how-your-team-works-with-server-statistics/requesting-server-statistics-using-the-rest-api)”을 참조하세요.
