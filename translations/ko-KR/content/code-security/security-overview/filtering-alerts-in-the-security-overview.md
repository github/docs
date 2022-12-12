---
title: 보안 개요에서 경고 필터링
intro: 필터를 사용하여 경고의 특정 범주 보기
permissions: '{% data reusables.security-overview.permissions %}'
product: '{% data reusables.gated-features.security-overview %}'
allowTitleToDifferFromFilename: true
versions:
  ghae: '*'
  ghes: '*'
  ghec: '*'
type: how_to
topics:
  - Security overview
  - Advanced Security
  - Alerts
  - Organizations
  - Teams
shortTitle: Filtering security overviews
ms.openlocfilehash: ed42615cf00f0eed053f75a97df80214131ae120
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 11/09/2022
ms.locfileid: '148159255'
---
{% ifversion ghes < 3.5 or ghae %} {% data reusables.security-overview.beta %} {% endif %}

## 보안 필터링 개요 정보

보안 개요에서 필터를 사용하여 경고 위험 수준, 경고 유형 및 기능 사용과 같은 다양한 요인에 따라 포커스를 좁힐 수 있습니다. 특정 보기{% ifversion ghec or ghes > 3.4 또는 ghae > 3.4 %} 및 enterpise 또는 조직 수준에서 데이터를 보고 있는지 여부{% endif %}에 따라 다른 필터를 사용할 수 있습니다.

{% ifversion security-overview-displayed-alerts %} {% note %} {% data reusables.security-overview.information-varies-GHAS %} {% endnote %} {% endif %}

## 리포지토리별 필터링

| 한정자 | 설명 |
| -------- | -------- |
| `repo:REPOSITORY-NAME` | 지정된 리포지토리에 대한 데이터를 표시합니다. |

## 보안 기능 사용 여부별 필터링

아래 예제에서 을 로 `:not-enabled` 바꿔 `:enabled` 서 보안 기능이 사용하도록 설정되지 않은 리포지토리를 확인합니다. 이러한 한정자는 기본 요약 보기에서 사용할 수 있습니다.

| 한정자 | 설명 |
| -------- | -------- |
| `code-scanning:enabled` | {% data variables.product.prodname_code_scanning %}을(를) 설정한 리포지토리를 표시합니다. | 
| `dependabot:enabled` | {% data variables.product.prodname_dependabot_alerts %}을(를) 사용하도록 설정한 리포지토리를 표시합니다. |
| `secret-scanning:enabled` | {% data variables.product.prodname_secret_scanning %} 경고를 사용하도록 설정한 리포지토리를 표시합니다. {% ifversion security-overview-org-risk-coverage %} |
| `any-feature:enabled` | 하나 이상의 보안 기능이 사용하도록 설정된 리포지토리를 표시합니다. |{% else %}
| `not-enabled:any` | 사용하도록 설정되지 않은 보안 기능이 하나 이상 있는 리포지토리를 표시합니다. |{% endif %}

{% ifversion security-overview-org-risk-coverage %} 조직 수준 보안 검사 보기에는 추가 필터가 포함됩니다.

{% data reusables.security-overview.beta-org-risk-coverage %}

| 한정자 | 설명 |
| -------- | -------- |
| `code-scanning-pull-request-alerts:enabled`| 끌어오기 요청에서 실행되도록 {% data variables.product.prodname_code_scanning %}을 구성한 리포지토리를 표시합니다. |
| `dependabot-security-updates:enabled` | {% data variables.product.prodname_dependabot %} 보안 업데이트를 사용하도록 설정한 리포지토리를 표시합니다.  |
| `secret-scanning-push-protection:enabled` | {% data variables.product.prodname_secret_scanning %}에 대한 푸시 보호를 설정한 리포지토리를 표시합니다. |
{% endif %}

## 리포지토리 유형별 필터링

이러한 한정자는 기본 요약 보기에서 사용할 수 있습니다.

| 한정자 | 설명 |
| -------- | -------- |
{%- ifversion ghes or ghec %} | `is:public` | 퍼블릭 리포지토리를 표시합니다. | {%- endif %} | `is:internal` | 내부 리포지토리를 표시합니다. | | `is:private` | 프라이빗 리포지토리를 표시합니다. | | `archived:true` | 보관된 리포지토리를 표시합니다. | | `archived:false` | 보관된 리포지토리를 생략합니다. |

{% ifversion ghec or ghes > 3.4 or ghae > 3.4 %}
## 리포지토리의 위험 수준별 필터링

리포지토리의 위험 수준은 보안 기능의 경고 수와 심각도에 따라 결정됩니다. 리포지토리에 대해 하나 이상의 보안 기능을 사용하도록 설정하지 않은 경우 리포지토리의 위험 수준을 알 수 없습니다. 리포지토리에 보안 기능으로 검색되는 위험이 없는 경우 리포지토리에 위험이 없습니다. 

{% ifversion security-overview-org-risk-coverage %} 이러한 한정자는 엔터프라이즈 수준 보기에서 사용할 수 있습니다.
{% endif %}

| 한정자 | 설명 |
| -------- | -------- |
| `risk:high` | 위험 수준이 높은 리포지토리를 표시합니다. |
| `risk:medium` | 위험 수준이 중간인 리포지토리를 표시합니다. |
| `risk:low` | 위험 수준이 낮은 리포지토리를 표시합니다. |
| `risk:unknown` | 위험 수준을 알 수 없는 리포지토리를 표시합니다. |
| `risk:clear` | 검색된 위험 수준이 없는 리포지토리를 표시합니다. |
{% endif %}

## 경고 수별 필터링

{% ifversion security-overview-org-risk-coverage %} 이러한 한정자는 엔터프라이즈 수준 개요 및 조직 수준 보안 위험 보기에서 사용할 수 있습니다. {% else %} 이러한 한정자는 기본 요약 보기에서 사용할 수 있습니다. {% endif %}

| 한정자 | 설명 |
| -------- | -------- |
| <code>code-scanning:<em>n</em></code> | {% data variables.product.prodname_code_scanning %} 경고가 *n* 개 있는 리포지토리를 표시합니다. 이 한정자는 `=`, `>` 및 `<` 비교 연산자를 사용할 수 있습니다. |
| <code>secret-scanning:<em>n</em></code> | {% data variables.product.prodname_secret_scanning %} 경고가 *n* 개 있는 리포지토리를 표시합니다. 이 한정자는 `=`, `>` 및 `<` 비교 연산자를 사용할 수 있습니다. |
| <code>dependabot:<em>n</em></code> | {% data variables.product.prodname_dependabot_alerts %}가 *n* 개 있는 리포지토리를 표시합니다. 이 한정자는 `=`, `>` 및 `<` 비교 연산자를 사용할 수 있습니다. |


## 팀별 필터링

이러한 한정자는 기본 요약 보기에서 사용할 수 있습니다.

| 한정자 | 설명 |
| -------- | -------- |
| <code>team:<em>TEAM-NAME</em></code> | *TEAM-NAME* 에 관리자 권한이 있는 리포지토리를 표시합니다. |

## 항목별 필터링

이러한 한정자는 기본 요약 보기에서 사용할 수 있습니다.

| 한정자 | 설명 |
| -------- | -------- |
| <code>topic:<em>TOPIC-NAME</em></code> | *TOPIC-NAME* 으로 분류된 리포지토리를 표시합니다. |

{% ifversion security-overview-alert-views %}

## {% data variables.product.prodname_code_scanning %} 경고 보기에 대한 추가 필터

모든 코드 검사 경고에는 아래에 표시된 범주 중 하나가 있습니다. 결과를 클릭하여 관련 쿼리의 전체 세부 정보와 경고를 트리거한 코드 줄을 볼 수 있습니다.

| 한정자 | 설명 |
| -------- | -------- |
|`severity:critical`|위험으로 분류된 {% data variables.product.prodname_code_scanning %} 경고를 표시합니다.|
|`severity:high`|높음으로 분류된 {% data variables.product.prodname_code_scanning %} 경고를 표시합니다.|
|`severity:medium`|중간으로 분류된 {% data variables.product.prodname_code_scanning %} 경고를 표시합니다.|
|`severity:low`|낮음으로 분류된 {% data variables.product.prodname_code_scanning %} 경고를 표시합니다.|
|`severity:error`|오류로 분류된 {% data variables.product.prodname_code_scanning %} 경고를 표시합니다.|
|`severity:warning`|경고로 분류된 {% data variables.product.prodname_code_scanning %} 경고를 표시합니다.|
|`severity:note`|주의로 분류된 {% data variables.product.prodname_code_scanning %} 경고를 표시합니다.|

{% ifversion dependabot-alerts-vulnerable-calls %}
## {% data variables.product.prodname_dependabot %} 경고 보기에 대한 추가 필터

보기를 필터링하여 수정할 준비가 된 {% data variables.product.prodname_dependabot_alerts %}를 표시하거나 노출에 대한 추가 정보를 사용할 수 있는 위치를 표시할 수 있습니다. 결과를 클릭하여 경고의 전체 세부 정보를 볼 수 있습니다.

| 한정자 | 설명 |
| -------- | -------- |
|`has:patch`|보안 버전을 이미 사용할 수 있는 취약성에 대한 {% data variables.product.prodname_dependabot %} 경고를 표시합니다.|
|`has:vulnerable-calls`|리포지토리에서 취약한 함수로의 호출이 하나 이상 감지되는 {% data variables.product.prodname_dependabot %} 경고를 표시합니다. 자세한 내용은 “[Dependabot 경고 보기 및 업데이트](/code-security/dependabot/dependabot-alerts/viewing-and-updating-dependabot-alerts#about-the-detection-of-calls-to-vulnerable-functions)”를 참조하세요.|
{% endif %}

{% endif %}

## {% data variables.product.prodname_secret_scanning %} 경고 보기에 대한 추가 필터

| 한정자 | 설명 |
| -------- | -------- |
|`provider:PROVIDER_NAME` | 지정된 공급자의 모든 비밀 이슈에 대한 경고를 표시합니다.  |
| `secret-type:SERVICE_PROVIDER` | 지정된 비밀 및 공급자에 대한 경고를 표시합니다. |
| `secret-type:CUSTOM-PATTERN` | 지정된 사용자 지정 패턴과 일치하는 비밀에 대한 경고를 표시합니다.  |

자세한 내용은 “[{% data variables.product.prodname_secret_scanning_caps %} 패턴](/code-security/secret-scanning/secret-scanning-patterns)”을 참조하세요.

