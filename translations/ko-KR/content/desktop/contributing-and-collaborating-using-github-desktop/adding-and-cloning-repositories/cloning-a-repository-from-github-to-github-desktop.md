---
title: GitHub에서 GitHub Desktop으로 리포지토리 복제
intro: '{% data variables.product.prodname_dotcom %}를 사용하여 {% data variables.product.prodname_desktop %}에 있는 리포지토리를 복제할 수도 있습니다.'
redirect_from:
  - /desktop/contributing-to-projects/cloning-a-repository-from-github-to-github-desktop
  - /desktop/contributing-and-collaborating-using-github-desktop/cloning-a-repository-from-github-to-github-desktop
versions:
  fpt: '*'
shortTitle: Clone a GitHub repo
ms.openlocfilehash: dbdd1c6b3275ef0e3920f2d8850b64a914da148b
ms.sourcegitcommit: d697e0ea10dc076fd62ce73c28a2b59771174ce8
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 10/20/2022
ms.locfileid: '148099254'
---
{% tip %}

**팁:** {% data variables.product.prodname_desktop %}을 사용하여 {% data variables.product.prodname_dotcom %}에 있는 리포지토리를 복제할 수도 있습니다.  자세한 내용은 “[{% data variables.product.prodname_desktop %}에서 리포지토리 복제 및 포크](/desktop/guides/contributing-to-projects/cloning-a-repository-from-github-to-github-desktop/)”를 참조하세요.

{% endtip %}

{% mac %}

1. 복제를 시작하기 전에 {% 데이터 variables.location.product_location %} 및 {% 데이터 variables.product.prodname_desktop %}에 로그인합니다.
{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.open-with-github-desktop %}
5. **선택...** 을 클릭하고 Finder 창을 사용하여 리포지토리를 복제할 로컬 경로로 이동합니다.
![URL 탭의 선택 단추](/assets/images/help/desktop/clone-choose-button-url-mac.png)

  {% note %}

  **참고:** 리포지토리가 LFS를 사용하도록 구성된 경우 {% data variables.large_files.product_name_short %}를 초기화하라는 메시지가 표시됩니다.

  {% endnote %}

5. **복제** 를 클릭합니다.
![URL 탭의 복제 단추](/assets/images/help/desktop/clone-button-url-mac.png)

{% endmac %}

{% windows %}

1. 복제를 시작하기 전에 {% 데이터 variables.location.product_location %} 및 {% 데이터 variables.product.prodname_desktop %}에 로그인합니다.
{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.open-with-github-desktop %}
5. **선택...** 을 클릭하고 Windows Explorer를 사용하여 리포지토리를 복제할 로컬 경로로 이동합니다.
![선택 단추](/assets/images/help/desktop/clone-choose-button-url-win.png)

  {% note %}

  **참고:** 리포지토리가 LFS를 사용하도록 구성된 경우 {% data variables.large_files.product_name_short %}를 초기화하라는 메시지가 표시됩니다.

  {% endnote %}

5. **복제** 를 클릭합니다.
![복제 단추](/assets/images/help/desktop/clone-button-url-win.png)

{% endwindows %}
