---
title: 리포지토리의 소셜 미디어 미리 보기 사용자 지정
intro: 다른 사용자가 리포지토리에 연결할 때 소셜 미디어 플랫폼에 표시되는 이미지를 사용자 지정할 수 있습니다.
redirect_from:
  - /articles/customizing-your-repositorys-social-media-preview
  - /github/administering-a-repository/customizing-your-repositorys-social-media-preview
  - /github/administering-a-repository/managing-repository-settings/customizing-your-repositorys-social-media-preview
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Repositories
shortTitle: Social media preview
ms.openlocfilehash: a778b0fd95533a15806cc0034769fbf0feb3b217
ms.sourcegitcommit: 5f9527483381cfb1e41f2322f67c80554750a47d
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/12/2022
ms.locfileid: '147886744'
---
이미지를 추가할 때까지 리포지토리 링크가 확장되어 리포지토리 및 소유자의 아바타에 대한 기본 정보를 표시합니다. 리포지토리에 이미지를 추가하면 다양한 소셜 플랫폼에서 프로젝트를 식별하는 데 도움이 될 수 있습니다.

## 리포지토리의 소셜 미디어 미리 보기를 사용자 지정하는 이미지 추가

{% ifversion not ghae %} 프라이빗 리포지토리에 이미지를 업로드할 수 있지만 퍼블릭 리포지토리에서만 이미지를 공유할 수 있습니다.{% endif %}

{% tip %}

**팁:** 이미지는 크기가 1MB 미만의 PNG, JPG 또는 GIF 파일이어야 합니다. 최상의 품질 렌더링을 위해 이미지를 640 x 320 픽셀로 유지하는 것이 좋습니다.

{% endtip %}

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-settings %}
3. “소셜 미리 보기”에서 **편집** 을 클릭합니다.
    - 새 이미지를 추가하려면 **이미지 업로드...** 를 클릭합니다.
    - 이미지를 제거하려면 **이미지 제거** 를 클릭합니다.

    ![소셜 미리 보기 드롭다운](/assets/images/help/repository/social-preview.png)

## 투명도 정보

투명한 PNG 이미지를 지원합니다. 많은 통신 플랫폼에서 어두운 모드를 지원하므로 투명한 소셜 미리 보기를 사용하는 것이 도움이 될 수 있습니다. 아래 투명 이미지는 어두운 배경에서 허용됩니다. 그러나 항상 그렇지 않을 수도 있습니다. 

투명한 이미지를 사용하는 경우 투명도를 지원하지 않는 다양한 색 배경 또는 플랫폼에서 어떻게 보이는지 유의하세요.

{% tip %}

**팁:** 확실하지 않은 경우 배경이 단색 이미지를 사용하는 것이 좋습니다.
{% endtip %}

![소셜 미리 보기 투명성](/assets/images/help/repository/social-preview-transparency.png)
