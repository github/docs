---
title: 파일 첨부
intro: 다양한 파일 형식을 이슈 및 끌어오기 요청에 연결하여 정보를 전달할 수 있습니다.
redirect_from:
  - /github/managing-your-work-on-github/managing-your-work-with-issues-and-pull-requests/file-attachments-on-issues-and-pull-requests
  - /articles/issue-attachments
  - /articles/file-attachments-on-issues-and-pull-requests
  - /github/managing-your-work-on-github/file-attachments-on-issues-and-pull-requests
  - /github/writing-on-github/working-with-advanced-formatting/attaching-files
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Pull requests
ms.openlocfilehash: 28ce895a23c83f410d4755ad4036673e5c816155
ms.sourcegitcommit: d82f268a6f0236d1f4d2bf3d049974ada0170402
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 11/10/2022
ms.locfileid: '148160765'
---
{% data reusables.repositories.anyone-can-view-anonymized-url %}

이슈 또는 끌어오기 요청에 파일을 첨부하려면 주석 상자에 끌어다 놓습니다. 또는 주석 상자의 하단에 있는 표시줄을 클릭하여 컴퓨터에서 파일을 찾아보고, 선택하고, 추가할 수 있습니다.

![컴퓨터에서 첨부 파일 선택](/assets/images/help/pull_requests/select-bar.png)

파일을 첨부하면 {% data variables.product.product_name %}에 즉시 업로드되고 텍스트 필드가 파일의 익명화된 URL을 표시하도록 업데이트됩니다. {% ifversion fpt or ghec %}익명화된 URL에 대한 자세한 내용은 “[익명화된 URL 정보](/github/authenticating-to-github/about-anonymized-urls)”를 참조하세요.{% endif %}

{% tip %}

**팁:** 많은 브라우저에서, 이미지를 복사하여 상자에 직접 붙여넣을 수 있습니다.

{% endtip %}

최대 파일 크기는 다음과 같습니다.
- 이미지 및 GIF의 경우 10MB{% ifversion fpt or ghec %}
- 무료 GitHub 플랜에서 사용자 또는 조직이 소유한 리포지토리에 업로드된 비디오의 경우 10MB
- 유료 GitHub 요금제의 사용자 또는 조직이 소유한 리포지토리에 업로드된 비디오의 경우 100MB{% elsif ghes %}
- 비디오의 경우 100MB{% endif %}
- 다른 모든 파일의 경우 25MB

다음 파일을 지원합니다.

* PNG( *.png*)
* GIF( *.gif*)
* JPEG( *.jpg*) {%- ifversion svg-support %}
* SVG( *.svg*) {%- endif %}
* 로그 파일( *.log*)
* Microsoft Word( *.docx*), PowerPoint( *.pptx*), Excel( *.xlsx*) 문서
* 텍스트 파일( *.txt*)
* PDF( *.pdf*)
* ZIP(*.zip*, *.gz*, *.tgz*){% ifversion fpt or ghec or ghes %}
* 비디오(*.mp4*, *.mov*, *.webm*){% endif %}

{% ifversion fpt or ghec or ghes %} {% note %}

**참고:** 비디오 코덱 호환성은 브라우저마다 다르며 한 브라우저에 업로드한 비디오를 다른 브라우저에서는 못 볼 수도 있습니다. 현재 최고의 호환성을 위해 h.264를 사용하는 것이 좋습니다.

{% endnote %}{% endif %}

![첨부 파일 애니메이션 GIF](/assets/images/help/pull_requests/dragging_images.gif)
