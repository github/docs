---
title: OAuth 앱에 대한 사용자 지정 배지 만들기
intro: '{% data reusables.shortdesc.creating_custom_badges_oauth_apps %}'
redirect_from:
  - /apps/building-oauth-apps/creating-custom-badges-for-oauth-apps
  - /developers/apps/creating-a-custom-badge-for-your-oauth-app
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - OAuth Apps
shortTitle: Create custom badges
ms.openlocfilehash: b9f5b8048b14c11e7eb0c43a88a18b3a63ca5f34
ms.sourcegitcommit: ac00e2afa6160341c5b258d73539869720b395a4
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/09/2022
ms.locfileid: '147878537'
---
기본적으로 새 OAuth 앱에는 자동으로 생성된 [아이덴티콘](https://github.com/blog/1586-identicons)이 있습니다.
아이덴티콘 배지는 다음과 같습니다.

![아이덴티콘](/assets/images/identicon.png)

OAuth 앱을 만든 후 로고를 업로드하고 배경색을 선택하여 앱 배지를 사용자 지정할 수 있습니다. 배지는 원형 배지 내의 정사각형 로고 이미지입니다. 배지의 배경색을 선택하면 앱을 시각적으로 구분할 수 있습니다.

로고는 크기가 1MB 미만의 PNG, JPG 또는 GIF 파일이어야 합니다. 최상의 품질 렌더링을 위해 최소 200px x 200px의 이미지 크기를 권장합니다. {% ifversion fpt or ghec %}배지 사용자 지정에 대한 자세한 지침은 “[로고 및 배지 이미지에 대한 팁](/marketplace/listing-on-github-marketplace/writing-github-marketplace-listing-descriptions/#guidelines-for-logos)”을 참조하세요.{% endif %}

{% ifversion fpt or ghec %}

https://github.com/marketplace/manage 페이지로 이동하여 승인된 Marketplace 목록이 이미 있는 GitHub 앱에 대한 사용자 지정 배지를 변경할 수 있습니다.

{% endif %}

사용자 지정 배지를 만들려면 다음을 수행합니다.

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.developer_settings %} {% data reusables.user-settings.oauth_apps %} {% data reusables.user-settings.modify_oauth_app %}
1. “애플리케이션 로고”에서 로컬 폴더의 이미지를 끌어서 놓거나 **로고 업로드** 를 클릭하여 컴퓨터에서 이미지를 선택합니다.
![로고 업로드](/assets/images/oauth-apps/oauth_apps_upload_logo.png)
6. 그림을 자릅니다. 완료되면 **새 애플리케이션 로고 설정** 을 클릭합니다.
![로고 자르기 및 설정](/assets/images/oauth-apps/oauth_apps_crop_and_set_logo.png)
7. “배지 배경색”에서 배지 배경색의 [16진수 색 코드](http://www.color-hex.com/)를 입력합니다. {% ifversion fpt or ghec %}**참고:** 애플리케이션 로고가 업로드된 후 “배지 배경색” 입력 필드가 표시됩니다.{% endif %} ![배지 배경색](/assets/images/oauth-apps/oauth_apps_badge_background_color.png) {% data reusables.user-settings.update_oauth_app %}

{% ifversion fpt or ghec %}

## 다음 단계

이 앱의 Marketplace 목록을 만드는 방법에 대한 자세한 내용은 “[GitHub Marketplace의 목록](/marketplace/listing-on-github-marketplace/)”을 참조하세요.

{% endif %}
