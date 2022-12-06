---
title: Wiki에 대한 바닥글 또는 사이드바 만들기
intro: 사용자 지정 사이드바 또는 바닥글을 wiki에 추가하여 독자에게 더 많은 컨텍스트 정보를 제공할 수 있습니다.
redirect_from:
  - /articles/creating-a-footer
  - /articles/creating-a-sidebar
  - /articles/creating-a-footer-or-sidebar-for-your-wiki
  - /github/building-a-strong-community/creating-a-footer-or-sidebar-for-your-wiki
product: '{% data reusables.gated-features.wikis %}'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Community
shortTitle: Create footer or sidebar
ms.openlocfilehash: 0f65114a5258d312d5a81381a59149c589ee54a4
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/11/2022
ms.locfileid: '145090332'
---
## 바닥글 만들기

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-wiki %}
3. 페이지 맨 아래에서 **사용자 지정 바닥글** 을 클릭합니다.
  ![Wiki 바닥글 추가 섹션](/assets/images/help/wiki/wiki_add_footer.png)
4. 텍스트 편집기를 사용하여 바닥글에 포함할 콘텐츠를 입력합니다.
  ![Wiki WYSIWYG](/assets/images/help/wiki/wiki-footer.png)
5. 추가하려는 바닥글을 설명하는 커밋 메시지를 입력합니다.
  ![Wiki 커밋 메시지](/assets/images/help/wiki/wiki_commit_message.png)
6. Wiki에 변경 내용을 커밋하려면 **페이지 저장** 을 클릭합니다.

## 사이드바 만들기

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-wiki %}
3. **사용자 지정 사이드바 추가** 를 클릭합니다.
  ![Wiki 사이드바 추가 섹션](/assets/images/help/wiki/wiki_add_sidebar.png)
4. 텍스트 편집기를 사용하여 페이지의 콘텐츠를 추가합니다.
  ![Wiki WYSIWYG](/assets/images/help/wiki/wiki-sidebar.png)
5. 추가하려는 사이드바를 설명하는 커밋 메시지를 입력합니다.
  ![Wiki 커밋 메시지](/assets/images/help/wiki/wiki_commit_message.png)
6. Wiki에 변경 내용을 커밋하려면 **페이지 저장** 을 클릭합니다.

## 로컬에서 바닥글 또는 사이드바 만들기

이름이 `_Footer.<extension>` 또는 `_Sidebar.<extension>`인 파일을 만드는 경우 Wiki의 바닥글 및 사이드바를 각각 채우는 데 사용합니다. 다른 모든 Wiki 페이지와 마찬가지로 이 파일에 대해 선택한 확장은 해당 파일을 렌더링하는 방법을 결정합니다.
