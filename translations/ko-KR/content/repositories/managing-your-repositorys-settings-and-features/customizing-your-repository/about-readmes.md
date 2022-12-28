---
title: 추가 정보에 대한 정보
intro: '리포지토리에 추가 정보 파일을 추가하여 프로젝트가 유용한 이유, 프로젝트로 수행할 수 있는 작업 및 프로젝트 사용 방법을 다른 사용자에게 알릴 수 있습니다.'
redirect_from:
  - /articles/section-links-on-readmes-and-blob-pages
  - /articles/relative-links-in-readmes
  - /articles/about-readmes
  - /github/creating-cloning-and-archiving-repositories/about-readmes
  - /github/creating-cloning-and-archiving-repositories/creating-a-repository-on-github/about-readmes
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Repositories
ms.openlocfilehash: 146f1a33eb4de224625b9603b27d2f383e55c54d
ms.sourcegitcommit: c2aa10a61db44ee111c09565b6114dd5c97b6e2e
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 11/14/2022
ms.locfileid: '148163338'
---
## 추가 정보에 대한 정보

{% data reusables.repositories.about-READMEs %}

프로젝트 지침을 제공하는 방법에 대한 자세한 내용은 {% ifversion fpt or ghec %}”[프로젝트에 사용 규정 추가](/communities/setting-up-your-project-for-healthy-contributions/adding-a-code-of-conduct-to-your-project)” 및 {% endif %}”[정상적인 기여를 위한 프로젝트 설정](/communities/setting-up-your-project-for-healthy-contributions)”을 참조하세요.

방문자가 리포지토리를 방문할 때 첫 번째로 보게 되는 항목이 추가 정보인 경우가 많습니다. 추가 정보 파일에는 일반적으로 다음 정보가 포함되어 있습니다.
- 프로젝트에서 수행하는 작업
- 프로젝트가 유용한 이유
- 사용자가 프로젝트를 시작하는 방법
- 사용자가 프로젝트와 관련된 도움을 받을 수 있는 위치
- 프로젝트를 유지 관리하고 기여하는 사람

리포지토리의 숨겨진 `.github`, 루트 또는 `docs` 디렉터리에 추가 정보 파일을 배치하면 {% data variables.product.product_name %}에서 추가 정보를 인식하고 리포지토리 방문자에게 자동으로 표시합니다.

리포지토리에 둘 이상의 추가 정보 파일이 포함된 경우 표시된 파일은 `.github` 디렉터리, 리포지토리의 루트 디렉터리, 마지막으로 `docs` 디렉터리 순으로 선택됩니다.

![github/scientist 리포지토리의 기본 페이지 및 추가 정보 파일](/assets/images/help/repository/repo-with-readme.png)

{% ifversion fpt or ghes or ghec %}

{% data reusables.profile.profile-readme %}

{% endif %}

![사용자 이름/사용자 이름 리포지토리의 추가 정보 파일](/assets/images/help/repository/username-repo-with-readme.png)

## 추가 정보 파일의 자동 생성된 목차

추가 정보 파일을 포함하여 리포지토리에 있는 Markdown 파일의 렌더링된 뷰를 위해 {% data variables.product.product_name %}는 섹션 제목에 따라 목차를 자동으로 생성합니다. 렌더링된 페이지의 왼쪽 위에 있는 {% octicon "list-unordered" aria-label="The unordered list icon" %} 메뉴 아이콘을 클릭하면 추가 정보 파일의 목차를 볼 수 있습니다.

![자동으로 생성된 TOC가 있는 추가 정보](/assets/images/help/repository/readme-automatic-toc.png)

## 추가 정보 파일 및 Blob 페이지의 섹션 링크

{% data reusables.repositories.section-links %}

## 추가 정보 파일의 상대 링크 및 이미지 경로

{% data reusables.repositories.relative-links %}

## Wikis

추가 정보에는 개발자가 프로젝트 사용 및 기여를 시작하는 데 필요한 정보만 포함되어야 합니다. 긴 설명서가 Wiki에 가장 적합합니다. 자세한 내용은 “[Wiki 정보](/communities/documenting-your-project-with-wikis/about-wikis)”를 참조하세요.

## 추가 참고 자료

- “[리포지토리에 파일 추가](/articles/adding-a-file-to-a-repository)”
- 18F “[README를 읽을 수 있게 만들기](https://github.com/18F/open-source-guide/blob/18f-pages/pages/making-readmes-readable.md)” {%- ifversion fpt or ghec %} 
- “[‘GitHub Codespaces에서 열기’ 배지 추가](/codespaces/setting-up-your-project-for-codespaces/adding-a-codespaces-badge)” {%- endif %}   
