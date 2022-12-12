---
ms.openlocfilehash: 4f68c550bee6b80eb502220dff0b7f9664eff1d1
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/05/2022
ms.locfileid: "147424834"
---
감사 로그에는 엔터프라이즈{% ifversion not ghec %}에 영향을 주는 작업에 의해 트리거된 이벤트가 나열됩니다. 엔터프라이즈 소유자가 다른 보존 기간을 구성하지 않는 한 {% data variables.product.product_name %}에 대한 감사 로그는 무기한 유지됩니다{% ifversion audit-data-retention-tab %}. 자세한 내용은 “[엔터프라이즈에 대한 감사 로그 구성”](/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/configuring-the-audit-log-for-your-enterprise)을 참조하세요.{% else %}.{% endif %}{% else %}현재 월 및 최대 이전 6개월 이내. 감사 로그는 7일 동안 Git 이벤트를 유지합니다.{% endif %}

{% data reusables.audit_log.only-three-months-displayed %}
