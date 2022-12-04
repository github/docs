---
ms.openlocfilehash: c760b3f26f89437d485cc222de4fbc54fa907735
ms.sourcegitcommit: f464cc9bfc41132f315ea172c591bfd145a06736
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 11/15/2022
ms.locfileid: "148165462"
---
## 템플릿에서 만든 codespace 게시

템플릿 리포지토리 또는 "Codespaces" 페이지의 템플릿에서 codespace를 만드는 경우 codespace를 게시할 때까지 {% data variables.product.prodname_dotcom %}의 리포지토리에 저장되지 않습니다. 자세한 내용은 "[템플릿에서 codespace 만들기"를 참조하세요](/codespaces/developing-in-codespaces/creating-a-codespace-from-a-template#publishing-to-a-repository-on-github).

{% data reusables.codespaces.publishing-template-codespaces %}

## 분기 만들기 또는 전환

{% data reusables.codespaces.create-or-switch-branch %}

{% tip %}

**팁**: 최근에 원격 리포지토리의 파일을 변경한 경우 전환한 분기에서 변경 내용을 codespace로 끌어올 때까지 해당 변경 내용이 표시되지 않을 수 있습니다. 

{% endtip %}

## 변경 내용 커밋 

{% data reusables.codespaces.source-control-commit-changes %} 

## 원격 리포지토리에서 변경 내용 끌어오기

언제든지 원격 리포지토리에서 codespace로 변경 내용을 끌어올 수 있습니다. 

{% data reusables.codespaces.source-control-display-dark %}
1. 사이드바 위쪽에서 줄임표(**...**)를 클릭합니다. ![보기 및 기타 작업에 대한 줄임표 단추](/assets/images/help/codespaces/source-control-ellipsis-button.png)
1. 드롭다운 메뉴에서 **끌어오기를** 클릭합니다.

codespace를 만든 후 개발 컨테이너 구성이 변경된 경우 codespace에 대한 컨테이너를 다시 빌드하여 변경 내용을 적용할 수 있습니다. 자세한 내용은 “[개발 컨테이너 소개](/codespaces/setting-up-your-codespace/configuring-codespaces-for-your-project#applying-changes-to-your-configuration)”를 참조하세요.

## 새 변경 내용을 자동으로 가져오도록 codespace 설정 

원격 리포지토리에 대해 수행된 모든 새 커밋의 세부 정보를 자동으로 가져오도록 codespace를 설정할 수 있습니다. 이렇게 하면 리포지토리의 로컬 복사본이 만료되었는지 여부를 확인할 수 있습니다. 만료된 경우 새 변경 내용을 끌어오도록 선택할 수 있습니다. 

가져오기 작업에서 원격 리포지토리의 새 변경 내용을 검색하는 경우 상태 표시줄에 새 커밋 수가 표시됩니다. 그러면 변경 내용을 로컬 복사본으로 끌어올 수 있습니다.

1. 작업 표시줄 아래쪽에 있는 **관리** 단추를 클릭합니다.
![관리 단추](/assets/images/help/codespaces/manage-button.png)
1. 메뉴에서 **설정** 을 클릭합니다.
1. 설정 페이지에서 `autofetch`를 검색합니다.
![자동 가져오기 검색](/assets/images/help/codespaces/autofetch-search.png)
1. 현재 리포지토리에 등록된 모든 원격 항목에 대한 업데이트 세부 정보를 가져오려면 **Git: Autofetch** 를 `all`로 설정합니다.
![Git autofetch 사용](/assets/images/help/codespaces/autofetch-all.png)
1. 각 자동 가져오기 사이의 시간(초)을 변경하려면 **Git: Autofetch Period** 값을 편집합니다.

## 끌어오기 요청 실행

{% data reusables.codespaces.source-control-pull-request %} 

## 원격 리포지토리에 변경 내용 푸시

저장하고 커밋한 변경 내용을 푸시할 수 있습니다. 그러면 이러한 변경 내용이 원격 리포지토리의 업스트림 분기에 적용됩니다. 끌어오기 요청을 만들 준비가 되지 않았거나 {% data variables.product.prodname_dotcom %}에 끌어오기 요청을 만들려는 경우 이 작업을 수행할 수 있습니다.

1. 사이드바 위쪽에서 줄임표(**...**)를 클릭합니다. ![보기 및 기타 작업에 대한 줄임표 단추](/assets/images/help/codespaces/source-control-ellipsis-button-nochanges.png)
1. 드롭다운 메뉴에서 **푸시** 를 클릭합니다.
