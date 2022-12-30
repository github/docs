---
title: API 미리 보기
intro: API 미리 보기를 사용하여 새 기능을 사용해 보고 이러한 기능이 공식화되기 전에 피드백을 제공할 수 있습니다.
redirect_from:
  - /v3/previews
versions:
  ghes: <3.4
topics:
  - API
ms.openlocfilehash: d637b59fc72332ee142cec78653907c2bfeebdc0
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 10/25/2022
ms.locfileid: '148109774'
---
API 미리 보기를 사용하여 공식 GitHub API의 일부가 되기 전에 새로운 API와 기존 API 메서드의 변경 사항을 시험해볼 수 있습니다.

미리 보기 기간에 개발자 피드백에 따라 일부 기능을 변경할 수 있습니다. 변경할 경우 사전 통보 없이 개발자 [블로그](https://developer.github.com/changes/)에서 공지할 것입니다.

API 미리 보기에 액세스하려면 요청에 대한 `Accept` 헤더에 사용자 지정 [미디어 형식](/rest/overview/media-types)을 제공해야 합니다. 각 미리 보기에 대한 기능 문서는 제공할 사용자 지정 미디어 형식을 지정합니다.

{% ifversion ghes < 3.4 %}
## 콘텐츠 첨부 파일

이제 {% data variables.product.prodname_unfurls %} API를 사용하여 GitHub에서 등록된 도메인에 연결하는 URL에 대한 자세한 정보를 제공할 수 있습니다. 자세한 내용은 "[콘텐츠 첨부 파일 사용](/apps/using-content-attachments/)"을 참조하세요.

**사용자 지정 미디어 유형:** `corsair-preview`
**발표:** [2018-12-10](https://developer.github.com/changes/2018-12-10-content-attachments-api/)

{% endif %}


