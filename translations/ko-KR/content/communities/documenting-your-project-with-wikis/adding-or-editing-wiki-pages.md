---
title: Wiki 페이지 추가 또는 편집
intro: '{% data variables.product.product_name %}에서 직접 wiki 페이지를 추가 및 편집하거나 명령줄을 사용하여 로컬로 편집할 수 있습니다.'
redirect_from:
  - /articles/adding-wiki-pages-via-the-online-interface
  - /articles/editing-wiki-pages-via-the-online-interface
  - /articles/adding-and-editing-wik-pages-locally
  - /articles/adding-and-editing-wiki-pages-locally
  - /articles/adding-or-editing-wiki-pages
  - /github/building-a-strong-community/adding-or-editing-wiki-pages
product: '{% data reusables.gated-features.wikis %}'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Community
shortTitle: Manage wiki pages
ms.openlocfilehash: f58cb44a7e6360f87fa417b5f5854d958b00d74b
ms.sourcegitcommit: 5f40f9341dd1e953f4be8d1642f219e628e00cc8
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 10/04/2022
ms.locfileid: '148008875'
---
## 위키 페이지 추가

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-wiki %}
3. 페이지의 오른쪽 상단 모서리에서 **새 페이지** 를 클릭합니다.
  ![Wiki 새 페이지 단추](/assets/images/help/wiki/wiki_new_page_button.png)
4. 필요에 따라 Markdown 이외의 형식으로 작성하려면 편집 모드 드롭다운 메뉴를 사용하여 다른 형식을 클릭합니다.
  ![Wiki 변경 내용 선택](/assets/images/help/wiki/wiki_dropdown_markup.gif)
5. 텍스트 편집기를 사용하여 페이지의 콘텐츠를 추가합니다.
  ![Wiki WYSIWYG](/assets/images/help/wiki/wiki_wysiwyg.png)
6. 추가하려는 새 파일을 설명하는 커밋 메시지를 입력합니다.
  ![Wiki 커밋 메시지](/assets/images/help/wiki/wiki_commit_message.png)
7. Wiki에 변경 내용을 커밋하려면 **페이지 저장** 을 클릭합니다.

## Wiki 페이지 편집

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-wiki %}
4. Wiki 사이드바를 사용하여 변경할 페이지로 이동합니다. 페이지의 오른쪽 상단 모서리에서 **편집** 을 클릭합니다.
   ![편집 페이지 단추](/assets/images/help/wiki/wiki_edit_page_button.png)
5. 텍스트 편집기를 사용하여 페이지의 콘텐츠를 편집합니다.
   ![Wiki WYSIWYG](/assets/images/help/wiki/wiki_wysiwyg.png)
6. 변경 내용을 설명하는 커밋 메시지를 입력합니다.
   ![Wiki 커밋 메시지](/assets/images/help/wiki/wiki_commit_message.png)
7. Wiki에 변경 내용을 커밋하려면 **페이지 저장** 을 클릭합니다.

## 로컬로 Wiki 페이지 추가 또는 편집

Wiki는 Git 리포지토리의 일부이므로 로컬에서 변경하고 Git 워크플로를 사용하여 리포지토리에 푸시할 수 있습니다.

### 컴퓨터에 Wiki 복제

모든 Wiki는 해당 콘텐츠를 컴퓨터에 쉽게 복제할 수 있는 방법을 제공합니다.
{% data variables.product.product_name %}에 초기 페이지를 만든 후에는 제공된 URL을 사용하여 리포지토리를 컴퓨터에 복제할 수 있습니다.

```shell
$ git clone https://github.com/YOUR_USERNAME/YOUR_REPOSITORY.wiki.git
# Clones the wiki locally
```

Wiki를 복제한 후에는 새 파일 추가 및 기존 파일 편집, 변경 내용 커밋이 가능합니다. 사용자와 협력자는 Wiki에서 작업할 때 분기를 만들 수 있지만 기본 분기에 푸시된 변경 사항만 실시간으로 만들어 읽기 권한자가 사용할 수 있게 합니다.

## Wiki 파일 이름 정보

파일 이름은 Wiki 페이지의 제목을 결정하며 파일 확장명은 Wiki 콘텐츠가 렌더링되는 방법을 결정합니다.

Wiki는 [오픈 소스 태그 라이브러리](https://github.com/github/markup)를 사용하여 태그를 변환하고 파일 확장에서 사용할 변환기를 결정합니다. 예를 들어 파일 이름이 *foo.md* 또는 *foo.markdown* 인 경우 Wiki는 Markdown 변환기를 사용하며, 파일 이름이 *foo.textile* 인 경우에는 Textile 변환기를 사용합니다.

Wiki 페이지의 제목에 다음 문자를 사용하지 마세요. `\ / : * ? " < > |` 특정 운영 체제의 사용자는 문자가 포함된 파일 이름을 사용할 수 없습니다. 확장과 일치하는 태그 언어를 사용하여 콘텐츠를 작성해야 하며, 그렇지 않으면 콘텐츠가 제대로 렌더링되지 않습니다.
