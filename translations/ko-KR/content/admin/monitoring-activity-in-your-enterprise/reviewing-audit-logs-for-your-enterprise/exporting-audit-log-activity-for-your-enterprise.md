---
title: 엔터프라이즈에 대한 감사 로그 작업 내보내기
intro: 오프라인 분석을 위해 감사 및 Git 이벤트 데이터를 파일로 내보낼 수 있습니다.
shortTitle: Export audit logs
permissions: Enterprise owners can export the audit log.
miniTocMaxHeadingLevel: 3
versions:
  ghec: '*'
type: tutorial
topics:
  - Auditing
  - Enterprise
  - Logging
ms.openlocfilehash: 208e086fa93c89879357d340aa459b3d40824383
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/05/2022
ms.locfileid: '147060740'
---
## 감사 로그 및 Git 이벤트 데이터 내보내기 정보

{% data variables.product.product_name %}의 엔터프라이즈에서 JSON 또는 CSV 파일을 다운로드하여 감사 로그를 내보낼 수 있습니다. 감사 로그 이벤트를 내보낼 때 지원되는 한정자 중 하나 이상을 쿼리하여 내보낼 특정 로그 이벤트를 필터링할 수 있습니다. 검색 한정자에 대한 자세한 내용은 “[수행된 작업을 기반으로 검색](/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/searching-the-audit-log-for-your-enterprise#search-based-on-the-action-performed)”을 참조하세요.

엔터프라이즈 감사 로그에서 JSON 파일을 다운로드하여 Git 이벤트 데이터를 내보낼 수 있습니다. 감사 로그 데이터와 달리 감사 로그 사용자 인터페이스에서 필터링하고 내보낼 특정 Git 이벤트를 쿼리할 수 없습니다. 

{% data reusables.audit_log.git-events-export-limited %}

{% data reusables.audit_log.exported-log-keys-and-values %}

로그 이벤트를 내보내는 대신 API를 사용하여 감사 로그 이벤트를 검색하거나 이벤트가 기록될 때 {% data variables.product.product_name %}를 설정하여 감사 데이터를 스트림할 수 있습니다. 자세한 내용은 “[엔터프라이즈에 감사 로그 API 사용](/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/using-the-audit-log-api-for-your-enterprise)” 및 “[엔터프라이즈에 대한 감사 로그 스트림](/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/streaming-the-audit-log-for-your-enterprise)”을 참조하세요.

## 감사 로그 데이터 내보내기

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.audit-log-tab %}
1. 필요에 따라 필터링된 결과만 내보내려면 하나 이상의 지원되는 한정자 또는 로그 필터로 검색합니다.
2. {% octicon "download" aria-label="The Download icon" %} **내보내기** 드롭다운 메뉴를 선택하고 로그 이벤트를 내보낼 파일 형식(JSON 또는 CSV)을 선택합니다.

    ![내보내기 단추](/assets/images/help/organizations/org-audit-log-export.png)

## Git 이벤트 데이터 내보내기

날짜 범위별로 Git 이벤트 데이터를 내보낼 수도 있습니다.

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.audit-log-tab %}
1. {% octicon "download" aria-label="The Download icon" %} **Git 이벤트 내보내기** 드롭다운 메뉴를 선택하고 로그 이벤트를 내보낼 날짜 범위를 선택합니다.

    ![Git 이벤트 내보내기 단추](/assets/images/help/organizations/org-audit-log-export-git-events.png)
1. {% octicon "file-zip" aria-label="The File-zip icon" %} **결과 다운로드** 를 클릭하여 파일을 다운로드합니다.
1. 데이터는 압축된 JSON 파일로 내보내집니다. JSON 데이터를 추출하려면 보관 유틸리티 클라이언트 또는 명령을 사용하여 파일의 압축을 해제합니다. 예를 들어:

    ```
    gunzip export-avocado-corp-1642896556.json.gz
    ```
