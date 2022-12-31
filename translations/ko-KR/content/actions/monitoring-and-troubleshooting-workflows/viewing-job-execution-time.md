---
title: 작업 실행 시간 보기
shortTitle: View job execution time
intro: 작업이 발생한 청구 가능 시간(분)을 포함한 작업의 실행 시간을 볼 수 있습니다.
redirect_from:
  - /actions/managing-workflow-runs/viewing-job-execution-time
versions:
  fpt: '*'
  ghec: '*'
ms.openlocfilehash: 2248c40de279e7b9f88775e98cf5a92d467eded5
ms.sourcegitcommit: d6838593f16c4b800e83cac82f6d398a14f7516d
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 10/14/2022
ms.locfileid: '148045724'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

{% data variables.product.prodname_dotcom %}호스팅 실행기를 사용하고 다음 분으로 반올림되는 프라이빗 리포지토리에서 실행되는 작업에 대해서만 청구 가능한 작업 실행 시간(분)이 표시됩니다. 퍼블릭 리포지토리에서 {% data variables.product.prodname_actions %}를 사용하거나 자체 호스팅 실행기에서 실행되는 작업에 대해 청구 가능한 시간(분)이 없습니다.

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.actions-tab %} {% data reusables.repositories.navigate-to-workflow %} {% data reusables.repositories.view-run %}
1. 작업 요약에서 작업의 실행 시간을 볼 수 있습니다. 청구 가능한 작업 실행 시간에 대한 세부 정보를 보려면 왼쪽 사이드바의 "실행 세부 정보"에서 **{% 옥티콘 "stopwatch" aria-label="스톱워치 아이콘" %} 사용량을** 클릭합니다.

   ![실행 및 청구 가능 시간 세부 정보 링크](/assets/images/help/repository/view-run-billable-time.png)

   {% note %}

   **참고:** 표시된 청구 가능 시간에는 분 승수가 포함되지 않습니다. 분 승수를 포함하여 총 {% data variables.product.prodname_actions %} 사용량을 보려면 “[{% data variables.product.prodname_actions %} 사용량 보기](/billing/managing-billing-for-github-actions/viewing-your-github-actions-usage)”를 참조하세요.

   {% endnote %}
