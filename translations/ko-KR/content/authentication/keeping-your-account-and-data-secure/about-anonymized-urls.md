---
title: 익명화된 URL 정보
intro: '이미지 또는 비디오를 {% data variables.product.product_name %}에 업로드하는 경우 이미지 또는 비디오의 URL이 수정되므로 정보를 추적할 수 없습니다.'
redirect_from:
  - /articles/why-do-my-images-have-strange-urls
  - /articles/about-anonymized-image-urls
  - /authenticating-to-github/about-anonymized-image-urls
  - /github/authenticating-to-github/about-anonymized-urls
  - /github/authenticating-to-github/keeping-your-account-and-data-secure/about-anonymized-urls
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Identity
  - Access management
ms.openlocfilehash: b96c01144d28d668d33e96e4067801395aaa8275
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/10/2022
ms.locfileid: '145120007'
---
이미지를 호스트하기 위해 {% data variables.product.product_name %}는 [오픈 소스 프로젝트 Camo](https://github.com/atmos/camo)를 사용합니다. Camo는 다른 사용자로부터 브라우저 세부 정보 및 관련 정보를 숨기는 각 파일에 대해 익명의 URL 프록시를 생성합니다. URL은 이미지를 업로드한 방법에 따라 다른 하위 도메인과 함께 `https://<subdomain>.githubusercontent.com/`으로 시작합니다. 

동영상은 이미지 URL과 동일한 형식의 익명화된 URL도 가져오지만 Camo를 통해 처리되지는 않습니다. {% data variables.product.prodname_dotcom %}가 외부 호스트 비디오를 지원하지 않으므로 익명화된 URL은 {% data variables.product.prodname_dotcom %}에서 호스트하는 업로드된 동영상에 대한 링크입니다.

익명화된 URL을 직접 또는 간접적으로 수신하는 사람은 누구나 이미지 또는 동영상을 볼 수 있습니다. 중요한 미디어 파일을 프라이빗으로 유지하려면 Camo를 사용하는 대신 인증이 필요한 개인 네트워크 또는 서버로 제한합니다.

## Camo 문제 해결

드문 경우지만 Camo를 통해 처리되는 이미지가 {% data variables.product.prodname_dotcom %}에 표시되지 않을 수 있습니다. 다음은 문제가 있는 위치를 확인하기 위해 수행할 수 있는 몇 가지 단계입니다.

{% windows %}

{% tip %}

Windows 사용자는 Git PowerShell([{% data variables.product.prodname_desktop %}](https://desktop.github.com/)과 함께 설치됨)을 사용하거나 [Windows용 cURL](http://curl.haxx.se/download.html)을 다운로드해야 합니다.

{% endtip %}

{% endwindows %}

### 이미지가 표시되지 않음

이미지가 브라우저에 표시되지만 {% data variables.product.prodname_dotcom %}에는 표시되지 않는 경우 로컬로 요청할 수 있습니다.

{% data reusables.command_line.open_the_multi_os_terminal %}
1. `curl`을 사용하여 이미지 헤더를 요청합니다.
  ```shell
  $ curl -I https://www.my-server.com/images/some-image.png
  > HTTP/2 200
  > Date: Fri, 06 Jun 2014 07:27:43 GMT
  > Expires: Sun, 06 Jul 2014 07:27:43 GMT
  > Content-Type: image/x-png
  > Server: Google Frontend
  > Content-Length: 6507
  ```
3. `Content-Type` 값을 확인합니다. 이 예제의 경우 `image/x-png`입니다.
4. 콘텐츠 형식을 [Camo에서 지원하는 형식 목록](https://github.com/atmos/camo/blob/master/mime-types.json)과 비교하여 확인하세요.

콘텐츠 형식이 Camo에서 지원되지 않는 경우 다음과 같은 몇 가지 작업을 시도할 수 있습니다.
  * 이미지를 호스트하는 서버를 소유하고 있는 경우 이미지에 대한 올바른 콘텐츠 형식을 반환할 수 있도록 수정합니다.
  * 이미지를 호스트하는 데 외부 서비스를 사용하는 경우 해당 서비스에 대한 고객 지원팀에 문의하세요.
  * 콘텐츠 형식을 목록에 추가하려면 Camo에 끌어오기 요청을 합니다.

### 최근에 변경된 이미지가 업데이트되지 않음

최근에 이미지를 변경했는데 브라우저에는 표시되지만 {% data variables.product.prodname_dotcom %}에는 표시되지 않는 경우 이미지의 캐시를 다시 설정해 볼 수 있습니다.

{% data reusables.command_line.open_the_multi_os_terminal %}
1. `curl`을 사용하여 이미지 헤더를 요청합니다.
  ```shell
  $ curl -I https://www.my-server.com/images/some-image.png
  > HTTP/2 200
  > Expires: Fri, 01 Jan 1984 00:00:00 GMT
  > Content-Type: image/png
  > Content-Length: 2339
  > Server: Jetty(8.y.z-SNAPSHOT)
  ```

`Cache-Control` 값을 확인합니다. 이 예제에서는 `Cache-Control`이 없습니다. 이 경우 다음을 수행합니다.
  * 이미지를 호스트하는 서버를 소유하고 있는 경우 이미지에 대해 `no-cache`의 `Cache-Control`을 반환하도록 수정합니다.
  * 이미지를 호스트하는 데 외부 서비스를 사용하는 경우 해당 서비스에 대한 고객 지원팀에 문의하세요.

 `Cache-Control`이 설정된 경우 `no-cache`로 설정되어 있으면 {% data variables.contact.contact_support %}에 문의하거나 {% data variables.contact.community_support_forum %}를 검색하세요.

### Camo의 캐시에서 이미지 제거

캐시를 제거하면 모든 {% data variables.product.prodname_dotcom %} 사용자가 이미지를 다시 요청해야 하므로 위의 단계가 작동하지 않는 경우에만 매우 드물게 사용해야 합니다.

{% data reusables.command_line.open_the_multi_os_terminal %}
1. Camo URL에서 `curl -X PURGE`를 사용하여 이미지를 제거합니다.
  ```shell
  $ curl -X PURGE https://camo.githubusercontent.com/4d04abe0044d94fefcf9af2133223....
  > {"status": "ok", "id": "216-8675309-1008701"}
  ```

### 개인 네트워크에서 이미지 보기

개인 네트워크 또는 인증이 필요한 서버에서 이미지를 제공하는 경우 {% data variables.product.prodname_dotcom %}에서 볼 수 없습니다. 실제로 어떤 사용자도 서버에 로그인하도록 요청하지 않고는 볼 수 없습니다.

이 문제를 해결하려면 이미지를 공개적으로 사용할 수 있는 서비스로 이동하세요.

## 추가 참고 자료

- {% data variables.product.prodname_blog %}의 “[사용자 이미지 프록시](https://github.com/blog/1766-proxying-user-images)”
