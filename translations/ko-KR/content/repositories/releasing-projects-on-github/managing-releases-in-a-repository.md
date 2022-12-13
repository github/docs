---
title: 리포지토리에서 릴리스 관리
intro: 릴리스를 만들어 번들로 묶고 사용자에게 프로젝트의 반복을 제공할 수 있습니다.
redirect_from:
  - /articles/creating-releases
  - /articles/listing-and-editing-releases
  - /articles/editing-and-deleting-releases
  - /articles/managing-releases-in-a-repository
  - /github/administering-a-repository/creating-releases
  - /github/administering-a-repository/editing-and-deleting-releases
  - /github/administering-a-repository/managing-releases-in-a-repository
  - /github/administering-a-repository/releasing-projects-on-github/managing-releases-in-a-repository
permissions: 'Repository collaborators and people with write access to a repository can create, edit, and delete a release.'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Repositories
shortTitle: Manage releases
ms.openlocfilehash: d8a5f77941c7c46656c891c0892af95d0b1b8637
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 10/25/2022
ms.locfileid: '148107487'
---
## 리스 관리 정보

릴리스 정보, 기여자의 @mentions, 이진 파일에 대한 링크를 사용하여 새 릴리스를 만들고 기존 릴리스를 편집하거나 삭제할 수 있습니다. 릴리스 API를 사용하여 릴리스를 만들고 수정하고 삭제할 수도 있습니다. 자세한 내용은 REST API 설명서의 "[릴리스](/rest/releases/releases)"를 참조하세요.

{% ifversion fpt or ghec %} {% data variables.product.prodname_marketplace %}의 특정 릴리스에서 작업을 게시할 수도 있습니다. 자세한 내용은 “[{% data variables.product.prodname_marketplace %}에 작업 게시](/actions/creating-actions/publishing-actions-in-github-marketplace)”를 참조하세요.

{% data variables.large_files.product_name_long %}({% data variables.large_files.product_name_short %}) 개체가 각 릴리스에 대해 {% data variables.product.product_name %}에서 생성되는 ZIP 파일 및 tarball에 포함되는지 여부를 선택할 수 있습니다. 자세한 내용은 “[리포지토리의 보관 파일로 {% data variables.large_files.product_name_short %} 개체 관리](/github/administering-a-repository/managing-git-lfs-objects-in-archives-of-your-repository)”를 참조하세요.
{% endif %}

## 릴리스 만들기

{% webui %}

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.releases %}
1. **새 릴리스 초안** 을 클릭합니다.

   {% ifversion fpt or ghec or ghes > 3.4 or ghae > 3.4 %}![초안 릴리스 단추](/assets/images/help/releases/draft-release-button-with-search.png){% else %}![초안 릴리스 단추](/assets/images/help/releases/draft_release_button.png){% endif %}
1. **태그 선택을** 클릭하고 릴리스의 버전 번호를 입력한 다음 Enter 키를 누릅니 **다**. 또는 기존 태그를 선택합니다.

   ![태그 입력](/assets/images/help/releases/releases-tag-create.png)
1. 새 태그를 만드는 경우 **새 태그 만들기** 를 클릭합니다.

   ![새 태그를 만들 것인지 확인하는 스크린샷](/assets/images/help/releases/releases-tag-create-confirm.png)
   
1. 새 태그를 만든 경우 드롭다운 메뉴를 사용하여 릴리스하려는 프로젝트가 포함된 분기를 선택합니다.

   
   ![분기를 선택하는 드롭다운 스크린샷](/assets/images/help/releases/releases-choose-branch.png)

   

{%- data reusables.releases.previous-release-tag %}
1. 릴리스에 대한 제목과 설명을 입력합니다.
   {%- ifversion fpt or ghec or ghes > 3.3 or ghae > 3.3 %} 설명에 있는 사람이 있는 경우 @mention 게시된 릴리스에는 언급된 모든 사용자의 아바타 목록이 포함된 **기여자** 섹션이 포함됩니다.
   {%- endif %} {% ifversion fpt or ghec or ghes > 3.3 %} 또는 {% ifversion previous-release-tag %}릴리스 **정보 생성**{% else %}**릴리스 정보 자동 생성**{% endif %}을 클릭하여 릴리스 정보를 자동으로 생성할 수 있습니다. {% endif %} {% ifversion previous-release-tag %}

   ![릴리스 설명 스크린샷](/assets/images/help/releases/releases_description_auto.png){% else %}

   ![릴리스 설명 스크린샷](/assets/images/enterprise/3.5/releases/releases_description_auto.png){% endif %}

1. 필요에 따라 릴리스에 컴파일된 프로그램과 같은 이진 파일을 포함하려면 이진 상자에서 파일을 끌어서 놓거나 수동으로 선택합니다.

   ![릴리스와 함께 DMG 제공의 애니메이션 GIF](/assets/images/help/releases/releases_adding_binary.gif)

1. 릴리스가 프로덕션에 사용할 준비가 되지 않았으며 불안정할 수 있음을 사용자에게 알리려면 **시험판입니다** 를 선택합니다.

   ![릴리스를 시험판으로 표시하는 확인란의 스크린샷](/assets/images/help/releases/prerelease_checkbox.png)

{%- ifversion releases-set-latest-release %} 
1. 필요에 따라 **최신 릴리스로 설정을** 선택할 수 있습니다. 이 옵션을 선택하지 않으면 의미 체계 버전 관리에 따라 최신 릴리스 레이블이 자동으로 할당됩니다.

   ![릴리스를 최신 릴리스로 표시하는 확인란의 스크린샷](/assets/images/help/releases/latest-release-checkbox.png)

{%- endif %}  
{%- ifversion discussions %}
1. 필요에 따라 리포지토리에서 {% data variables.product.prodname_discussions %}을 사용하도록 설정한 경우 **이 릴리스에 대한 토론 만들기** 를 선택한 다음, **범주** 드롭다운 메뉴를 선택하고 릴리스 토론에 대한 범주를 클릭합니다.

   ![범주를 선택하는 릴리스 토론 및 드롭다운 메뉴를 만드는 확인란의 스크린샷](/assets/images/help/releases/create-release-discussion.png)

{%- endif %}
1. 릴리스를 공개할 준비가 되면 **릴리스 게시** 를 클릭합니다. 나중에 릴리스에서 작업하려면 **초안 저장** 을 클릭합니다.
   ![릴리스 게시 및 릴리스 초안 작성 단추](/assets/images/help/releases/release_buttons.png)

   {%- ifversion fpt or ghec or ghae > 3.3 %} 그런 다음 리포지토리에 대한 릴리스 피드에서 게시된 릴리스 또는 초안 릴리스를 볼 수 있습니다. 자세한 내용은 "[리포지토리의 릴리스 및 태그 스크린샷"을 참조하세요.](/github/administering-a-repository/releasing-projects-on-github/viewing-your-repositorys-releases-and-tags)

   {% ifversion fpt or ghec or ghes > 3.4 or ghae > 3.3 %} ![ 참가자가 @mentioned 있는 게시된 릴리스 {% else %} ![참가자](/assets/images/help/releases/releases-overview-with-contributors.png)가 있는 게시된 릴리스 @mentioned {% endif %} {%- endif](/assets/images/help/releases/refreshed-releases-overview-with-contributors.png) %}

{% endwebui %}

{% cli %}

{% data reusables.cli.cli-learn-more %}

1. 릴리스를 만들려면 `gh release create` 하위 명령을 사용합니다. `tag`를 릴리스에 대해 원하는 태그로 바꿉니다.

   ```shell
   gh release create TAG
   ```

2. 대화형 프롬프트의 안내를 따릅니다. 또는 인수를 지정하여 이러한 프롬프트를 건너뛸 수 있습니다. 가능한 인수에 대한 자세한 내용은 [{% data variables.product.prodname_cli %} 설명서](https://cli.github.com/manual/gh_release_create)를 참조하세요. 예를 들어 이 명령은 지정된 제목과 참고를 포함한 시험판을 만듭니다.

   ```shell
   gh release create v1.3.2 --title "v1.3.2 (beta)" --notes "this is a beta release" --prerelease
   ```
{% ifversion fpt or ghes > 3.3 or ghae > 3.3 or ghec %} {% data variables.product.product_name %} 사용자가 노트에 있는 경우 @mention {% data variables.product.prodname_dotcom_the_website %}에 게시된 릴리스에는 언급된 모든 사용자의 아바타 목록이 포함된 **기여자** 섹션이 포함됩니다.
{% endif %}

{% endcli %}

## 릴리스 편집

{% webui %}

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.releases %} {% ifversion fpt or ghec or ghes > 3.4 or ghae > 3.3 %}
3. 페이지 오른쪽에서 편집할 릴리스 옆에 있는 {% octicon "pencil" aria-label="The edit icon" %}을 클릭합니다.
  ![릴리스 편집](/assets/images/help/releases/edit-release-pencil.png) {% else %}
3. 페이지 오른쪽에서 편집할 릴리스 옆에 있는 **릴리스 편집** 을 클릭합니다.
  ![릴리스 편집](/assets/images/help/releases/edit-release.png) {% endif %}
4. 양식에서 릴리스에 대한 세부 정보를 편집한 다음 **릴리스 업데이트를** 클릭합니다. {% ifversion fpt or ghec or ghes > 3.3 or ghae > 3.3 %} 설명에서 GitHub 사용자를 추가하거나 제거하는 @mentions 경우 해당 사용자는 릴리스의 **기여자** 섹션에 있는 아바타 목록에서 추가되거나 제거됩니다.{ % endif %} ![릴리스 업데이트](/assets/images/help/releases/update-release.png)

{% endwebui %}

{% cli %}

현재 {% data variables.product.prodname_cli %}를 사용하여 릴리스를 편집할 수 없습니다.

{% endcli %}

## 릴리스 삭제

{% webui %}

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.releases %} {% ifversion fpt or ghec or ghes > 3.4 or ghae > 3.3 %}
3. 페이지 오른쪽에서 삭제할 릴리스 옆에 있는 {% octicon "trash" aria-label="The trash icon" %}을 클릭합니다.
  ![릴리스 삭제](/assets/images/help/releases/delete-release-trash.png) {% else %}
3. 삭제하려는 릴리스의 이름을 클릭합니다.
  ![릴리스 보기 링크](/assets/images/help/releases/release-name-link.png)
4. 페이지의 오른쪽 상단 모서리에서 **삭제** 를 클릭합니다.
  ![릴리스 삭제 단추](/assets/images/help/releases/delete-release.png) {% endif %}
5. **이 릴리스 삭제** 를 클릭합니다.
  ![릴리스 삭제 확인](/assets/images/help/releases/confirm-delete-release.png)

{% endwebui %}

{% cli %}

1. 릴리스를 삭제하려면 `gh release delete` 하위 명령을 사용합니다. `tag`를 삭제할 릴리스의 태그로 바꿉니다. `-y` 플래그를 사용하여 확인을 건너뜁니다.

   ```shell
   gh release delete TAG -y
   ```

{% endcli %}
