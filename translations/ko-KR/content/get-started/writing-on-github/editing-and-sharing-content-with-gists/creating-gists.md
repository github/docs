---
title: gist 만들기
intro: '{% ifversion ghae %}내부{% else %}공개{% endif %} 및 비밀의 두 가지 종류의 gist를 만들 수 있습니다. {% ifversion ghae %}기업 구성원{% else %}세상{% endif %}과 아이디어를 공유할 준비가 되었다면 {% ifversion ghae %}내부{% else %}공개{% endif %} gist를 만들고, 그렇지 않은 경우 비밀 gist를 만듭니다.'
permissions: '{% data reusables.enterprise-accounts.emu-permission-gist %}'
redirect_from:
  - /articles/about-gists
  - /articles/cannot-delete-an-anonymous-gist
  - /articles/deleting-an-anonymous-gist
  - /articles/creating-gists
  - /github/writing-on-github/creating-gists
  - /github/writing-on-github/editing-and-sharing-content-with-gists/creating-gists
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
ms.openlocfilehash: e0ac449dc71bb0c525ee1559b82e509a281e55ac
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/05/2022
ms.locfileid: '145068678'
---
## gist 정보

모든 gist는 Git 리포지토리입니다. 즉, 포크 및 복제할 수 있습니다. {% ifversion not ghae %}{% data variables.product.product_name %}에 로그인해서{% else %}{% endif %} gist를 만드는 경우 해당 gist는 계정과 연결되며 {% data variables.gists.gist_homepage %}로 이동할 때 gist 목록에 표시됩니다.

Gist는 {% ifversion ghae %}내부{% else %}공개{% endif %} 또는 비밀일 수 있습니다. {% ifversion ghae %}내부{% else %}공개{% endif %} gist는 {% data variables.gists.discover_url %}에 표시됩니다. 여기서 {% ifversion ghae %}엔터프라이즈 구성원{% else %}사람들{% endif %}은 gist가 만들어질 때 새 gist를 찾아볼 수 있습니다. 이들은 또한 검색이 가능하므로, 자신이 작업한 것을 다른 사람들이 찾아서 보도록 하려는 경우 사용할 수 있습니다.

비밀 gist는 {% data variables.gists.discover_url %}에 표시되지 않으며 검색할 수 없습니다. 비밀 gist는 비공개가 아닙니다. 비밀 gist의 URL을 {% ifversion ghae %}다른 엔터프라이즈 구성원{% else %}친구{% endif %}에게 보낼 경우 받은 사람은 이를 볼 수 있습니다. 그러나 {% ifversion ghae %}다른 엔터프라이즈 구성원{% else %}자신이 모르는 사람{% endif %}이 해당 URL을 발견할 경우 그들도 gist를 볼 수 있습니다. 다른 사람의 눈에 띄지 않도록 코드를 보호해야 하는 경우 대신 [프라이빗 리포지토리를 만들](/articles/creating-a-new-repository) 수 있습니다.

{% data reusables.gist.cannot-convert-public-gists-to-secret %}

{% ifversion ghes %}

사이트 관리자가 비공개 모드를 사용하지 않도록 설정한 경우 공개 또는 비밀일 수 있는 익명 gist를 사용할 수도 있습니다.

{% data reusables.gist.anonymous-gists-cannot-be-deleted %}

{% endif %}

다음과 같은 경우 알림이 제공됩니다.
- 내가 gist의 작성자인 경우.
- 누군가가 gist에서 나를 멘션하는 경우.
- Gist 맨 위에 있는 구독을 클릭하여 gist를 **구독** 하는 경우.

{% ifversion fpt or ghes or ghec %}

다른 사용자가 쉽게 볼 수 있도록 프로필에 gist를 고정할 수 있습니다. 자세한 내용은 “[프로필에 항목 고정](/articles/pinning-items-to-your-profile)”을 참조하세요.

{% endif %}

{% data variables.gists.gist_homepage %}로 이동하고 **모든 Gist** 를 클릭하면 다른 사람들이 만든 {% ifversion ghae %}내부{% else %}공개{% endif %} gist를 검색할 수 있습니다. 그러면 만든 시간 또는 업데이트 시간별로 정렬되고 표시되는 모든 gist의 페이지로 이동하게 됩니다. {% data variables.gists.gist_search_url %}을 사용하여 언어별로 gist를 검색할 수도 있습니다. Gist 검색은 [코드 검색](/search-github/searching-on-github/searching-code)과 동일한 검색 구문을 사용합니다.

Gist는 Git 리포지토리이므로 차이(diff)와 함께 전체 커밋 기록을 볼 수 있습니다. Gist를 포크 또는 복제할 수도 있습니다. 자세한 내용은 “[Gist 포크 및 복제](/articles/forking-and-cloning-gists)”를 참조하세요.

Gist 상단에 있는 **ZIP 다운로드** 단추를 클릭하여 gist의 ZIP 파일을 다운로드할 수 있습니다. 블로그 게시물과 같이 Javascript를 지원하는 텍스트 필드에 gist를 포함할 수 있습니다. 포함 코드를 얻으려면 gist의 **Embed** URL 옆에 있는 클립보드 아이콘을 클릭합니다. 특정 gist 파일을 포함하려면 `?file=FILENAME`과 함께 **Embed** URL을 추가합니다.

{% ifversion fpt or ghec %}

Gist는 GeoJSON 파일 매핑을 지원합니다. 이러한 맵은 포함된 gist에 표시되므로 맵을 쉽게 공유하고 포함할 수 있습니다. 자세한 내용은 “[비 코드 파일 작업](/repositories/working-with-files/using-files/working-with-non-code-files#mapping-geojson-files-on-github)”을 참조하세요.

{% endif %}

## gist 만들기

아래 단계에 따라 gist를 만듭니다.

{% note %}

{% data variables.product.prodname_cli %}를 사용하여 gist를 만들 수도 있습니다. 자세한 내용은 {% data variables.product.prodname_cli %} 설명서의 “[`gh gist create`](https://cli.github.com/manual/gh_gist_create)”를 참조하세요.

또는 바탕 화면에서 편집기로 직접 텍스트 파일을 끌어서 놓을 수 있습니다.

{% endnote %}

1. {% data variables.product.product_name %}에 로그인합니다.
2. {% data variables.gists.gist_homepage %}로 이동합니다.
3. Gist에 대한 설명(선택 사항)과 이름을 입력합니다.
![Gist 이름 설명](/assets/images/help/gist/gist_name_description.png)

4. Gist 텍스트 상자에 gist의 텍스트를 입력합니다.
![Gist 텍스트 상자](/assets/images/help/gist/gist_text_box.png)

5. 필요에 따라, {% ifversion ghae %}내부{% else %}공개{% endif %} gist를 만들려면 {% octicon "triangle-down" aria-label="The downwards triangle icon" %}을 클릭한 다음, **{% ifversion ghae %}내부{% else %}공개{% endif %} gist 만들기** 를 클릭합니다.
![Drop-down menu to select gist visibility]{% ifversion ghae %}(/assets/images/help/gist/gist-visibility-drop-down-ae.png){% else %}(/assets/images/help/gist/gist-visibility-drop-down.png){% endif %}

6. **비밀 gist 만들기** 또는 **{% ifversion ghae %}내부{% else %}공개{% endif %} gist 만들기** 를 클릭합니다.
  ![gist 만들기 단추](/assets/images/help/gist/create-secret-gist-button.png)
