---
title: 프로필 개인 설정
intro: '프로필 사진을 설정하고 프로필에 바이오를 추가하여 다른 {% data variables.product.product_name %} 사용자와 자신에 대한 정보를 공유할 수 있습니다.'
redirect_from:
  - /articles/adding-a-bio-to-your-profile
  - /articles/setting-your-profile-picture
  - /articles/how-do-i-set-up-my-profile-picture
  - /articles/gravatar-problems
  - /articles/how-do-i-set-up-my-avatar
  - /articles/personalizing-your-profile
  - /github/setting-up-and-managing-your-github-profile/personalizing-your-profile
  - /github/setting-up-and-managing-your-github-profile/customizing-your-profile/personalizing-your-profile
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Profiles
shortTitle: Personalize
ms.openlocfilehash: d77b1cee9da0ba9eeba55f7b16c73cc9b934f1e1
ms.sourcegitcommit: 3ce69524dc95bb450204ba2b8e82ee69af3af833
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 10/20/2022
ms.locfileid: '148101632'
---
## 프로필 사진 변경

프로필 사진을 사용하면 끌어오기 요청, 메모, 기여 페이지 및 그래프의 {% data variables.product.product_name %}에서 사용자를 확인할 수 있습니다.

계정에 등록하면 {% data variables.product.product_name %}에서 임의로 생성된 “아이덴티콘”을 제공합니다. [아이덴티콘](https://github.com/blog/1586-identicons)은 사용자 ID의 해시에서 생성되므로 색이나 패턴을 제어할 수 없습니다. 사용자를 나타내는 이미지로 아이덴티콘을 바꿀 수 있습니다.

{% note %}

**참고{% ifversion ghec %}{% endif %}** : {% ifversion ghec %}

* {% endif %}프로필 사진은 PNG, JPG 또는 GIF 파일이어야 하며 크기가 1MB 미만이고 3000 x 3000픽셀보다 작아야 합니다. 최상의 품질 렌더링을 위해 이미지를 약 500 x 500픽셀로 유지하는 것이 좋습니다.
{% ifversion ghec %}* {% data variables.product.prodname_emus %}에서는 Gravatar 프로필 사진이 지원되지 않습니다.{% endif %}

{% endnote %}

### 프로필 사진 설정

{% data reusables.user-settings.access_settings %}
2. **프로필 사진** 에서 {% octicon "pencil" aria-label="The edit icon" %} **편집** 을 클릭합니다.
![프로필 사진 편집](/assets/images/help/profile/edit-profile-photo.png)
3. **사진 업로드...** 를 클릭합니다. {% ifversion not ghae %} ![프로필 사진 업데이트](/assets/images/help/profile/edit-profile-picture-options.png){% endif %}
3. 그림을 자릅니다. 완료되면 **새 프로필 사진 설정** 을 클릭합니다.
    ![업로드된 사진 자르기](/assets/images/help/profile/avatar_crop_and_save.png)

### 프로필 사진을 아이덴티콘으로 다시 설정

{% data reusables.user-settings.access_settings %}
2. **프로필 사진** 에서 {% octicon "pencil" aria-label="The edit icon" %} **편집** 을 클릭합니다.
![프로필 사진 편집](/assets/images/help/profile/edit-profile-photo.png)
3. 아이덴티콘으로 되돌리려면 **사진 제거** 를 클릭합니다. {% ifversion not ghae %}이메일 주소가 [Gravatar](https://en.gravatar.com/)와 연결된 경우 아이덴티콘으로 되돌릴 수 없습니다. 대신 **Gravatar로 되돌리기** 를 클릭합니다.
![프로필 사진 업데이트](/assets/images/help/profile/edit-profile-picture-options.png){% endif %}

## 프로필 이름 변경

프로필에 표시되는 이름을 변경할 수 있습니다. 이 이름은 조직이 소유한 프라이빗 리포지토리에 대한 주석 옆에 표시될 수도 있습니다. 자세한 내용은 “[조직에서 구성원 이름 표시 관리](/articles/managing-the-display-of-member-names-in-your-organization)”를 참조하세요.

{% ifversion fpt or ghec %} {% note %}

**참고:** {% 데이터 variables.enterprise.prodname_emu_enterprise %}의 구성원인 경우 {% 데이터 variables.product.prodname_dotcom_the_website %}이(가) 아닌 ID 공급자를 통해 프로필 이름을 변경해야 합니다. {% data reusables.enterprise-accounts.emu-more-info-account %}

{% endnote %} {% endif %}

{% data reusables.user-settings.access_settings %}
2. “이름”에서 프로필에 표시할 이름을 입력합니다.
  ![프로필 설정의 이름 필드](/assets/images/help/profile/name-field.png)

## 프로필에 바이오 추가

프로필에 바이오를 추가하여 다른 {% data variables.product.product_name %} 사용자와 자신에 대한 정보를 공유합니다. [@mentions](/articles/basic-writing-and-formatting-syntax)와 이모지를 사용하면 현재 또는 이전의 근무지, 어떤 일을 하는지, 심지어 어떤 종류의 커피를 마시는지에 대한 정보를 포함할 수 있습니다.

{% ifversion fpt or ghes or ghec %}

프로필 추가 정보를 사용하면 더 길고 눈에 띄는 방법으로 자신에 대한 사용자 지정 정보를 표시할 수 있습니다. 자세한 내용은 “[프로필 README 관리](/github/setting-up-and-managing-your-github-profile/managing-your-profile-readme)”를 참조하세요.

{% endif %}

{% note %}

**참고:** 프로필에 대해 활동 개요 섹션을 사용하도록 설정되어 있고 프로필 바이오의 구성원인 조직을 @mention하는 경우 해당 조직이 활동 개요에서 먼저 소개됩니다. 자세한 내용은 “[프로필에서 활동 개요 표시](/articles/showing-an-overview-of-your-activity-on-your-profile)”를 참조하세요.

{% endnote %}

{% data reusables.user-settings.access_settings %}
2. **바이오** 에서 프로필에 표시할 콘텐츠를 추가합니다. 바이오 필드는 160자로 제한됩니다.
    ![프로필에서 bio 업데이트](/assets/images/help/profile/bio-field.png)

  {% tip %}

  **팁:** 조직을 @mention할 경우 구성원인 사용자만 자동으로 완성됩니다. 이전 고용주처럼 구성원이 아닌 조직을 여전히 @mention할 수 있지만 조직 이름은 자동으로 완성되지 않습니다.

  {% endtip %}

{% data reusables.profile.update-profile %}

{% ifversion profile-time-zone %}

## 위치 및 표준 시간대 설정

프로필에서 위치 및 표준 시간대를 설정하여 현지 시간을 다른 사용자에게 표시할 수 있습니다. 위치 및 표준 시간대가 표시됩니다.
- {% data variables.product.product_name %} 프로필 페이지에 있습니다.
- 사용자가 {% data variables.product.product_name %}에서 사용자 이름 또는 아바타 위로 마우스를 가져가면

프로필을 보면 유니버설 타임 조정과 관련하여 위치, 현지 시간 및 표준 시간대가 표시됩니다.

  ![위치, 현지 시간 및 표준 시간대 필드를 강조하는 Octocat 프로필 페이지의 스크린샷](/assets/images/help/profile/profile-location-and-time.png)

다른 사용자가 프로필을 볼 때 사용자의 위치, 현지 시간 및 시간 차이(현지 시간)가 표시됩니다.

  ![위치, 현지 시간 및 상대 시간 필드를 강조하는 Octocat 프로필 페이지의 스크린샷](/assets/images/help/profile/profile-relative-time.png)

{% data reusables.user-settings.access_settings %}
1. **위치** 아래에 프로필에 표시할 위치를 입력합니다.

  ![위치 필드를 강조하는 위치 및 현지 시간 설정의 스크린샷](/assets/images/help/profile/location-field.png)

1. 필요에 따라 프로필에 현재 현지 시간을 표시하려면 **현재 현지 시간 표시** 를 선택합니다.

  ![현재 현지 시간 표시 확인란을 강조하는 위치 및 현지 시간 설정의 스크린샷](/assets/images/help/profile/display-local-time-checkbox.png)

   - **표준 시간대** 드롭다운 메뉴를 선택한 다음, 현지 표준 시간대를 클릭합니다.

     ![표준 시간대 드롭다운 메뉴를 강조하는 위치 및 현지 시간 설정의 스크린샷](/assets/images/help/profile/time-zone-dropdown.png)
   
{% data reusables.profile.update-profile %}

{% endif %}

## 상태 설정

{% data variables.product.product_name %}에서 현재 가용성에 대한 정보를 표시하도록 상태를 설정할 수 있습니다. 표시되는 상태
- {% data variables.product.product_name %} 프로필 페이지에 있습니다.
- 사용자가 {% data variables.product.product_name %}에서 사용자 이름 또는 아바타 위로 마우스를 가져가면
- 구성원인 팀의 팀 페이지에 있습니다. 자세한 내용은 “[팀 정보](/articles/about-teams/#team-pages)”를 참조하세요.
- 구성원인 조직의 조직 대시보드에 있습니다. 자세한 내용은 “[조직 대시보드 정보](/articles/about-your-organization-dashboard/)”를 참조하세요.

상태를 설정할 때 {% data variables.product.product_name %}에 대한 가용성이 제한되어 있음을 사용자에게 알릴 수도 있습니다.

![언급된 사용자 이름에는 사용자 이름 옆에 “사용 중” 메모가 표시됩니다.](/assets/images/help/profile/username-with-limited-availability-text.png)

![요청된 검토자가 사용자 이름 옆에 “사용 중” 메모를 표시합니다.](/assets/images/help/profile/request-a-review-limited-availability-status.png)

“사용 중” 옵션을 선택하면 사용자 이름을 @mention하거나, 할당하거나, 요청을 끌어오거나, 끌어오기 요청 검토를 요청하는 경우 사용자 이름 옆에 있는 메모가 사용 중임을 표시합니다. 또한 사용자가 속한 모든 팀에 할당된 끌어오기 요청에 대한 자동 검토 할당에서 제외됩니다. 자세한 내용은 “[팀의 코드 검토 설정 관리](/organizations/organizing-members-into-teams/managing-code-review-settings-for-your-team)”를 참조하세요.

1. {% ifversion fpt 또는 ghec %}{% data variables.product.prodname_dotcom_the_website %}{% else %}{% data variables.product.product_name %}{% endif %}의 오른쪽 위 모서리에서 프로필 사진을 클릭한 다음 **상태 설정을** 클릭하거나 상태 집합이 이미 있는 경우 현재 상태를 클릭합니다.
  ![프로필의 단추로 상태 설정](/assets/images/help/profile/set-status-on-profile.png)
2. 사용자 지정 텍스트를 상태에 추가하려면 텍스트 필드를 클릭하고 상태 메시지를 입력합니다.
  ![상태 메시지를 입력할 필드](/assets/images/help/profile/type-a-status-message.png)
3. 필요에 따라 이모지 상태를 설정하려면 웃는 아이콘을 클릭하고 목록에서 이모지를 선택합니다.
  ![이모지 상태를 선택하는 단추](/assets/images/help/profile/select-emoji-status.png)
4. 또는, 가용성이 제한적임을 공유하려면 “사용 중”을 선택합니다.
  ![상태 편집 옵션에서 사용 중 옵션 선택](/assets/images/help/profile/limited-availability-status.png)
5. **상태 지우기** 드롭다운 메뉴를 사용하고 상태를 만료할 시기를 선택합니다. 상태 만료를 선택하지 않으면 상태를 지우거나 편집할 때까지 상태를 유지합니다.
  ![상태가 만료되는 시기를 선택하는 드롭다운 메뉴](/assets/images/help/profile/status-expiration.png)
6. 드롭다운 메뉴를 사용하고 상태를 표시할 조직을 클릭합니다. 조직을 선택하지 않으면 퍼블릭 상태가 됩니다.
  ![상태가 표시될 조직을 선택하는 드롭다운 메뉴](/assets/images/help/profile/status-visibility.png)
7. **상태 설정** 을 클릭합니다.
  ![상태를 설정하는 단추](/assets/images/help/profile/set-status-button.png)

{% ifversion fpt or ghec %}
## 프로필에 배지 표시

특정 프로그램에 참여하면 {% data variables.product.prodname_dotcom %}가 프로필에 배지를 자동으로 표시합니다.

| 배지 | 프로그램 | 설명 |
| --- | --- | --- |
| {% octicon "cpu" aria-label="The Developer Program icon" %} | **개발자 프로그램 멤버** | {% data variables.product.prodname_dotcom %} 개발자 프로그램의 등록된 구성원인 경우 {% ifversion fpt or ghec %}{% data variables.product.prodname_dotcom %}{% else %}{% data variables.product.product_name %}{% endif %} API를 사용하여 앱을 빌드하면 프로필에 개발자 프로그램 멤버 배지가 표시됩니다. {% data variables.product.prodname_dotcom %} 개발자 프로그램에 대한 자세한 내용은 [GitHub 개발자](/program/)를 참조하세요. |
| {% octicon "star-fill" aria-label="The star icon" %} | **Pro** | {% data variables.product.prodname_pro %}를 사용하는 경우 프로필에 PRO 배지가 표시됩니다. {% data variables.product.prodname_pro %}에 대한 자세한 내용은 “[{% data variables.product.prodname_dotcom %}의 제품](/github/getting-started-with-github/githubs-products#github-pro)”을 참조하세요. |
| {% octicon "lock" aria-label="The lock icon" %} | **보안 버그 장려금 헌터** | 보안 취약성을 헌팅하는 데 도움을 준 경우 프로필에 보안 버그 장려금 헌터 배지가 표시됩니다. {% data variables.product.prodname_dotcom %} 보안 프로그램에 대한 자세한 내용은 [{% data variables.product.prodname_dotcom %} 보안](https://bounty.github.com/)을 참조하세요. |
| {% octicon "mortar-board" aria-label="The mortar-board icon" %} | **{% data variables.product.prodname_dotcom %} 캠퍼스 전문가** | {% data variables.product.prodname_campus_program %}에 참여하는 경우 프로필에 {% data variables.product.prodname_dotcom %} 캠퍼스 전문가 배지가 표시됩니다. 캠퍼스 전문가 프로그램에 대한 자세한 내용은 [캠퍼스 전문가](https://education.github.com/experts)를 참조하세요. |
| {% octicon "shield" aria-label="The shield icon" %} | **보안 권고 크레딧** | [{% data variables.product.prodname_dotcom %} 권고 데이터베이스](https://github.com/advisories)에 제출하는 보안 권고가 수락되면 프로필에 보안 권고 크레딧 배지가 표시됩니다. {% data variables.product.prodname_dotcom %} 보안 권고에 대한 자세한 내용은 [{% data variables.product.prodname_dotcom %} 보안 권고](/code-security/repository-security-advisories/about-github-security-advisories-for-repositories)를 참조하세요. |
| {% octicon "check" aria-label="The check icon" %} | **토론 답변** | 토론에 대한 회신이 답변으로 표시되면 프로필에 토론 답변 배지가 표시됩니다. {% data variables.product.prodname_dotcom %} 토론에 대한 자세한 내용은 “[토론 정보](/discussions/collaborating-with-your-community-using-discussions/about-discussions)”를 참조하세요. |

{% endif %}

{% ifversion fpt or ghec %}

## 업적 획득

업적은 {% data variables.product.prodname_dotcom %}에서 발생하는 특정 이벤트 및 작업을 기념합니다. 프로필의 사이드바에 나열된 작은 배지로 표시됩니다. 업적을 클릭하거나 마우스로 가리키면 간단한 설명 및 기여 이벤트에 대한 링크와 함께 업적을 획득한 방법을 설명하는 자세한 보기가 표시됩니다. 이벤트 링크는 이벤트가 발생한 리포지토리 또는 조직에 액세스할 수 있는 사용자에게만 표시됩니다. 이벤트 링크는 액세스 권한 없이 모든 사용자에게 액세스할 수 없는 상태로 표시됩니다.

개인 기여가 업적에 계산되는 것을 방지하거나 업적을 완전히 비활성화하려면 "[프로필에 개인 기여 및 업적 표시](/articles/publicizing-or-hiding-your-private-contributions-on-your-profile)"를 참조하세요.

{% note %}

**참고**: 이 기능은 현재 베타로 제공되며 변경될 수 있습니다.

{% endnote %}

{% endif %}

## Mars 2020 Helicopter 기여자 업적을 받을 수 있는 리포지토리 목록

아래 리포지토리 중 하나 이상의 나열된 태그에 대한 커밋 기록에 있는 커밋을 작성한 경우 프로필에 Mars 2020 Helicopter 기여자 업적이 표시됩니다. 작성된 커밋이 귀속되기 위해서는 {% data variables.product.prodname_dotcom %}가 적격 기여를 결정할 때 계정과 연결된 인증된 메일 주소가 있어야 합니다. 원본 작성자이거나 커밋의 [공동 작성자 중 한 명](/pull-requests/committing-changes-to-your-project/creating-and-editing-commits/creating-a-commit-with-multiple-authors)일 수 있습니다. 확인된 메일에 대한 향후 변경 내용은 배지에 영향을 미치지 않습니다. NASA의 Jet Propulsion Laboratory에서 받은 정보를 기반으로 목록을 구축했습니다.

| {% data variables.product.prodname_dotcom %} 리포지토리 | 버전 | 태그 |
|---|---|---|
| [torvalds/linux](https://github.com/torvalds/linux) | 3.4 | [v3.4](https://github.com/torvalds/linux/releases/tag/v3.4) |
| [python/cpython](https://github.com/python/cpython) | 3.9.2 | [v3.9.2](https://github.com/python/cpython/releases/tag/v3.9.2) |
| [boto/boto3](https://github.com/boto/boto3) | 1.17.17 | [1.17.17](https://github.com/boto/boto3/releases/tag/1.17.17) |
| [boto/botocore](https://github.com/boto/botocore) | 1.20.11 | [1.20.11](https://github.com/boto/botocore/releases/tag/1.20.11) |
| [certifi/python-certifi](https://github.com/certifi/python-certifi) | 2020.12.5 | [2020.12.05](https://github.com/certifi/python-certifi/releases/tag/2020.12.05) |
| [chardet/chardet](https://github.com/chardet/chardet) | 4.0.0 | [4.0.0](https://github.com/chardet/chardet/releases/tag/4.0.0) |
| [matplotlib/cycler](https://github.com/matplotlib/cycler) | 0.10.0 | [v0.10.0](https://github.com/matplotlib/cycler/releases/tag/v0.10.0) |
| [elastic/elasticsearch-py](https://github.com/elastic/elasticsearch-py) | 6.8.1 | [6.8.1](https://github.com/elastic/elasticsearch-py/releases/tag/6.8.1) |
| [ianare/exif-py](https://github.com/ianare/exif-py) | 2.3.2 | [2.3.2](https://github.com/ianare/exif-py/releases/tag/2.3.2) |
| [kjd/idna](https://github.com/kjd/idna) | 2.10 | [v2.10](https://github.com/kjd/idna/releases/tag/v2.10) |
| [jmespath/jmespath.py](https://github.com/jmespath/jmespath.py) | 0.10.0 | [0.10.0](https://github.com/jmespath/jmespath.py/releases/tag/0.10.0) |
| [nucleic/kiwi](https://github.com/nucleic/kiwi) | 1.3.1 | [1.3.1](https://github.com/nucleic/kiwi/releases/tag/1.3.1) |
| [matplotlib/matplotlib](https://github.com/matplotlib/matplotlib) | 3.3.4 | [v3.3.4](https://github.com/matplotlib/matplotlib/releases/tag/v3.3.4) |
| [numpy/numpy](https://github.com/numpy/numpy) | 1.20.1 | [v1.20.1](https://github.com/numpy/numpy/releases/tag/v1.20.1) |
| [opencv/opencv-python](https://github.com/opencv/opencv-python) | 4.5.1.48 | [48](https://github.com/opencv/opencv-python/releases/tag/48) |
| [python-pillow/Pillow](https://github.com/python-pillow/Pillow) | 8.1.0 | [8.1.0](https://github.com/python-pillow/Pillow/releases/tag/8.1.0) |
| [pycurl/pycurl](https://github.com/pycurl/pycurl) | 7.43.0.6 | [REL_7_43_0_6](https://github.com/pycurl/pycurl/releases/tag/REL_7_43_0_6) |
| [pyparsing/pyparsing](https://github.com/pyparsing/pyparsing) | 2.4.7 | [pyparsing_2.4.7](https://github.com/pyparsing/pyparsing/releases/tag/pyparsing_2.4.7) |
| [pyserial/pyserial](https://github.com/pyserial/pyserial) | 3.5 | [v3.5](https://github.com/pyserial/pyserial/releases/tag/v3.5) |
| [dateutil/dateutil](https://github.com/dateutil/dateutil) | 2.8.1 | [2.8.1](https://github.com/dateutil/dateutil/releases/tag/2.8.1) |
| [yaml/pyyaml ](https://github.com/yaml/pyyaml) | 5.4.1 | [5.4.1](https://github.com/yaml/pyyaml/releases/tag/5.4.1) |
| [psf/requests](https://github.com/psf/requests) | 2.25.1 | [v2.25.1](https://github.com/psf/requests/releases/tag/v2.25.1) |
| [boto/s3transfer](https://github.com/boto/s3transfer) | 0.3.4 | [0.3.4](https://github.com/boto/s3transfer/releases/tag/0.3.4) |
| [enthought/scimath](https://github.com/enthought/scimath) | 4.2.0 | [4.2.0](https://github.com/enthought/scimath/releases/tag/4.2.0) |
| [scipy/scipy](https://github.com/scipy/scipy) | 1.6.1 | [v1.6.1](https://github.com/scipy/scipy/releases/tag/v1.6.1) |
| [benjaminp/six](https://github.com/benjaminp/six) | 1.15.0 | [1.15.0](https://github.com/benjaminp/six/releases/tag/1.15.0) |
| [enthought/traits](https://github.com/enthought/traits) | 6.2.0 | [6.2.0](https://github.com/enthought/traits/releases/tag/6.2.0) |
| [urllib3/urllib3](https://github.com/urllib3/urllib3) | 1.26.3 | [1.26.3](https://github.com/urllib3/urllib3/releases/tag/1.26.3) |
| [python-attrs/attrs](https://github.com/python-attrs/attrs) | 19.3.0 | [19.3.0](https://github.com/python-attrs/attrs/releases/tag/19.3.0) |
| [CheetahTemplate3/cheetah3](https://github.com/CheetahTemplate3/cheetah3/) | 3.2.4 | [3.2.4](https://github.com/CheetahTemplate3/cheetah3/releases/tag/3.2.4) |
| [pallets/click](https://github.com/pallets/click) | 7.0 | [7.0](https://github.com/pallets/click/releases/tag/7.0) |
| [pallets/flask](https://github.com/pallets/flask) | 1.1.1 | [1.1.1](https://github.com/pallets/flask/releases/tag/1.1.1) |
| [flask-restful/flask-restful](https://github.com/flask-restful/flask-restful) | 0.3.7 | [0.3.7](https://github.com/flask-restful/flask-restful/releases/tag/0.3.7) |
| [pytest-dev/iniconfig](https://github.com/pytest-dev/iniconfig) | 1.0.0 | [v1.0.0](https://github.com/pytest-dev/iniconfig/releases/tag/v1.0.0) |
| [pallets/itsdangerous](https://github.com/pallets/itsdangerous) | 1.1.0 | [1.1.0](https://github.com/pallets/itsdangerous/releases/tag/1.1.0) |
| [pallets/jinja](https://github.com/pallets/jinja) | 2.10.3 | [2.10.3](https://github.com/pallets/jinja/releases/tag/2.10.3) |
| [lxml/lxml](https://github.com/lxml/lxml) | 4.4.1 | [lxml-4.4.1](https://github.com/lxml/lxml/releases/tag/lxml-4.4.1) |
| [Python-Markdown/markdown](https://github.com/Python-Markdown/markdown) | 3.1.1 | [3.1.1](https://github.com/Python-Markdown/markdown/releases/tag/3.1.1) |
| [pallets/markupsafe](https://github.com/pallets/markupsafe) | 1.1.1 | [1.1.1](https://github.com/pallets/markupsafe/releases/tag/1.1.1) |
| [pypa/packaging](https://github.com/pypa/packaging) | 19.2 | [19.2](https://github.com/pypa/packaging/releases/tag/19.2) |
| [pexpect/pexpect](https://github.com/pexpect/pexpect) | 4.7.0 | [4.7.0](https://github.com/pexpect/pexpect/releases/tag/4.7.0) |
| [pytest-dev/pluggy](https://github.com/pytest-dev/pluggy) | 0.13.0 | [0.13.0](https://github.com/pytest-dev/pluggy/releases/tag/0.13.0) |
| [pexpect/ptyprocess](https://github.com/pexpect/ptyprocess) | 0.6.0 | [0.6.0](https://github.com/pexpect/ptyprocess/releases/tag/0.6.0) |
| [pytest-dev/py](https://github.com/pytest-dev/py) | 1.8.0 | [1.8.0](https://github.com/pytest-dev/py/releases/tag/1.8.0) |
| [pyparsing/pyparsing](https://github.com/pyparsing/pyparsing) | 2.4.5 | [pyparsing_2.4.5](https://github.com/pyparsing/pyparsing/releases/tag/pyparsing_2.4.5) |
| [pytest-dev/pytest](https://github.com/pytest-dev/pytest) | 5.3.0 | [5.3.0](https://github.com/pytest-dev/pytest/releases/tag/5.3.0) |
| [stub42/pytz](https://github.com/stub42/pytz) | 2019.3 | [release_2019.3](https://github.com/stub42/pytz/releases/tag/release_2019.3) |
| [uiri/toml](https://github.com/uiri/toml) | 0.10.0 | [0.10.0](https://github.com/uiri/toml/releases/tag/0.10.0) |
| [pallets/werkzeug](https://github.com/pallets/werkzeug) | 0.16.0 | [0.16.0](https://github.com/pallets/werkzeug/releases/tag/0.16.0) |
| [dmnfarrell/tkintertable](https://github.com/dmnfarrell/tkintertable) | 1.2 | [v1.2](https://github.com/dmnfarrell/tkintertable/releases/tag/v1.2) |
| [wxWidgets/wxPython-Classic](https://github.com/wxWidgets/wxPython-Classic) | 2.9.1.1 | [wxPy-2.9.1.1](https://github.com/wxWidgets/wxPython-Classic/releases/tag/wxPy-2.9.1.1) |
| [nasa/fprime](https://github.com/nasa/fprime) | 1.3 | [NASA-v1.3](https://github.com/nasa/fprime/releases/tag/NASA-v1.3) |
| [nucleic/cppy](https://github.com/nucleic/cppy) | 1.1.0 | [1.1.0](https://github.com/nucleic/cppy/releases/tag/1.1.0) |
| [opencv/opencv](https://github.com/opencv/opencv) | 4.5.1 | [4.5.1](https://github.com/opencv/opencv/releases/tag/4.5.1) |
| [curl/curl](https://github.com/curl/curl) | 7.72.0 | [curl-7_72_0](https://github.com/curl/curl/releases/tag/curl-7_72_0) |
| [madler/zlib](https://github.com/madler/zlib) | 1.2.11 | [v1.2.11](https://github.com/madler/zlib/releases/tag/v1.2.11) |
| [apache/lucene](https://github.com/apache/lucene) | 7.7.3 | [releases/lucene-solr/7.7.3](https://github.com/apache/lucene/releases/tag/releases%2Flucene-solr%2F7.7.3) |
| [yaml/libyaml](https://github.com/yaml/libyaml) | 0.2.5 | [0.2.5](https://github.com/yaml/libyaml/releases/tag/0.2.5) |
| [elastic/elasticsearch](https://github.com/elastic/elasticsearch) | 6.8.1 | [v6.8.1](https://github.com/elastic/elasticsearch/releases/tag/v6.8.1) |
| [twbs/bootstrap](https://github.com/twbs/bootstrap) | 4.3.1 | [v4.3.1](https://github.com/twbs/bootstrap/releases/tag/v4.3.1) |
| [vuejs/vue](https://github.com/vuejs/vue) | 2.6.10 | [v2.6.10](https://github.com/vuejs/vue/releases/tag/v2.6.10) |
| [carrotsearch/hppc](https://github.com/carrotsearch/hppc) | 0.7.1 | [0.7.1](https://github.com/carrotsearch/hppc/releases/tag/0.7.1) |
| [JodaOrg/joda-time](https://github.com/JodaOrg/joda-time) | 2.10.1 | [v2.10.1](https://github.com/JodaOrg/joda-time/releases/tag/v2.10.1) |
| [tdunning/t-digest](https://github.com/tdunning/t-digest) | 3.2 | [t-digest-3.2](https://github.com/tdunning/t-digest/releases/tag/t-digest-3.2) |
| [HdrHistogram/HdrHistogram](https://github.com/HdrHistogram/HdrHistogram) | 2.1.9 | [HdrHistogram-2.1.9](https://github.com/HdrHistogram/HdrHistogram/releases/tag/HdrHistogram-2.1.9) |
| [locationtech/spatial4j](https://github.com/locationtech/spatial4j) | 0.7 | [spatial4j-0.7](https://github.com/locationtech/spatial4j/releases/tag/spatial4j-0.7) |
| [locationtech/jts](https://github.com/locationtech/jts) | 1.15.0 | [jts-1.15.0](https://github.com/locationtech/jts/releases/tag/jts-1.15.0) |
| [apache/logging-log4j2](https://github.com/apache/logging-log4j2) | 2.11 | [log4j-2.11.0](https://github.com/apache/logging-log4j2/releases/tag/log4j-2.11.0) |

## 추가 참고 자료

- “[프로필 정보](/articles/about-your-profile)”
