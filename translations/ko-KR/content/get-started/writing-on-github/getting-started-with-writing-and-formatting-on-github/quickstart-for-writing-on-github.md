---
title: GitHub에서 쓰기 위한 빠른 시작
intro: '자신을 설명하는 {% ifversion ghae %}gist를 만들어 고급 서식 기능을 알아봅니다{% else %}{% data variables.product.prodname_dotcom %} 프로필에 대한 추가 정보{% endif %}.'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
shortTitle: Quickstart
ms.openlocfilehash: a023d55dd4d7bd41af329a4eaac1e2408af96294
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 10/25/2022
ms.locfileid: '148107175'
---
## 소개

Markdown은 일반 텍스트 서식을 지정하기 위해 읽기 쉽고 쓰기 쉬운 언어입니다. 몇 가지 추가 HTML 태그와 함께 Markdown 구문을 사용하여 리포지토리 README 및 끌어오기 요청 및 문제에 대한 메모와 같은 위치에서 {% data variables.product.prodname_dotcom %}에 대한 쓰기 서식을 지정할 수 있습니다. 이 가이드에서는 {% ifversion ghae %}gist{% else %}를 만들거나 {% data variables.product.prodname_dotcom %} 프로필에 대한 추가 정보{% endif %}를 편집하여 몇 가지 고급 서식 지정 기능을 알아봅니다.

Markdown을 접하는 경우 "[기본 쓰기 및 서식 지정 구문](/articles/basic-writing-and-formatting-syntax)" 또는 Markdown {% data variables.product.prodname_learning %}을 [사용하여 통신](https://github.com/skills/communicate-using-markdown) 과정으로 시작하는 것이 좋습니다.

{% ifversion not ghae %}

프로필 추가 기능이 이미 있는 경우 기존 추가 정보에 일부 기능을 추가하거나 와 같은 `about-me.md`Markdown 파일을 사용하여 gist를 만들어 이 가이드를 따를 수 있습니다. 자세한 내용은 "[gists 만들기](/get-started/writing-on-github/editing-and-sharing-content-with-gists/creating-gists)"를 참조하세요.

{% endif %}

{% ifversion ghae %}

## gist 만들기

Gists를 사용하면 {% data variables.location.product_location %}에서 코드 조각 및 기타 정보를 다른 사용자와 저장하거나 공유할 수 있습니다. gists에서 서식 지정 기능을 사용하려면 확장명의 gist 파일을 `.md` 추가합니다.

1. {% data variables.gists.gist_homepage %}로 이동합니다.
1. 필요에 따라 gist에 대한 설명(예: "내 정보")을 입력합니다.
1. 확장명을 **포함한 파일 이름...** 필드에 을 입력합니다 `about-me.md`.

자세한 내용은 "[gists 만들기](/get-started/writing-on-github/editing-and-sharing-content-with-gists/creating-gists)"를 참조하세요.

{% else %}

## 프로필 추가 정보 만들기 또는 편집

프로필 추가 정보를 사용하면 {% data variables.location.product_location %}에서 커뮤니티와 자신에 대한 정보를 공유할 수 있습니다. 추가 정보는 프로필 페이지의 맨 위에 표시됩니다.

프로필 추가 정보(README)가 아직 없는 경우 추가할 수 있습니다.

1. {% data variables.product.prodname_dotcom %} 사용자 이름과 이름이 같은 리포지토리를 만들어 파일을 사용하여 리포지토리를 `README.md` 초기화합니다. 자세한 내용은 “[프로필 README 관리](/account-and-profile/setting-up-and-managing-your-github-profile/customizing-your-profile/managing-your-profile-readme#adding-a-profile-readme)”를 참조하세요.
1. `README.md` 파일을 편집하고 파일을 만들 때 자동으로 추가되는 템플릿 텍스트(시작`### Hi there`)를 삭제합니다.

프로필 추가 정보(README)가 이미 있는 경우 프로필 페이지에서 편집할 수 있습니다.

{% data reusables.profile.navigating-to-profile %}
1. 프로필 추가 정보 옆에 있는 {% octicon "pencil" aria-label="The Pencil icon" %}을 클릭합니다.

   ![프로필 추가 정보 옆에 연필 아이콘이 강조 표시된 프로필 페이지의 스크린샷](/assets/images/help/profile/edit-profile-readme.png)

{% endif %}

## 방문자에게 적합한 이미지 추가

{% data variables.product.prodname_dotcom %}의 통신에 이미지를 포함할 수 있습니다. 여기서는 {% ifversion ghae %}gist{% else %}프로필 추가 정보{% endif %}의 맨 위에 배너와 같은 반응형 이미지를 추가합니다. 

HTML `<picture>` 요소를 미디어 기능과 함께 `prefers-color-scheme` 사용하면 방문자가 밝은 모드 또는 어두운 모드를 사용하는지 여부에 따라 변경되는 이미지를 추가할 수 있습니다. 자세한 내용은 “[테마 설정 관리](/account-and-profile/setting-up-and-managing-your-personal-account-on-github/managing-personal-account-settings/managing-your-theme-settings)”를 참조하세요.

1. 다음 태그를 복사하여 {% ifversion ghae %}{% else %}`about-me.md``README.md`{% endif %} 파일에 붙여넣습니다.
   
   ```HTML{:copy}
   <picture>
    <source media="(prefers-color-scheme: dark)" srcset="YOUR-DARKMODE-IMAGE">
    <source media="(prefers-color-scheme: light)" srcset="YOUR-LIGHTMODE-IMAGE">
    <img alt="YOUR-ALT-TEXT" src="YOUR-DEFAULT-IMAGE">
   </picture>
   ```
1. 태그의 자리 표시자를 선택한 이미지의 URL로 바꿉 있습니다. 또는 기능을 먼저 시도하려면 아래 예제에서 URL을 복사할 수 있습니다.

   - 를 어두운 모드를 사용하여 방문자에게 표시할 이미지의 URL로 바꿉 `YOUR-DARKMODE-IMAGE` 니다.
   - 를 조명 모드를 사용하여 방문자에게 표시할 이미지의 URL로 바꿉 `YOUR-LIGHTMODE-IMAGE` 니다.
   - 를 다른 이미지와 일치시킬 수 없는 경우(예: 방문자가 기능을 지원하지 `prefers-color-scheme` 않는 브라우저를 사용하는 경우) 표시할 이미지의 URL로 바꿉 `YOUR-DEFAULT-IMAGE` 니다.
1. 화면 읽기 프로그램을 사용하는 방문자가 이미지에 액세스할 수 있도록 하려면 를 이미지 설명으로 바꿉 `YOUR-ALT-TEXT` 니다.
1. 이미지가 올바르게 렌더링되었는지 확인하려면 **미리 보기** 탭을 클릭합니다.

Markdown에서 이미지를 사용하는 방법에 대한 자세한 내용은 "[기본 쓰기 및 서식 지정 구문"을 참조하세요](/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax#images).

### 예제

{% data reusables.getting-started.picture-element-example %}

### 모양

![웃는 태양의 이미지가 표시된 밝은 모드의 미리 보기 탭 스크린샷](/assets/images/help/profile/lightmode-image-example.png)

## 테이블 추가

Markdown 테이블을 사용하여 정보를 구성할 수 있습니다. 여기서는 테이블을 사용하여 가장 많이 사용되는 프로그래밍 언어 또는 프레임워크, 학습 시간을 소비하는 항목 또는 좋아하는 취미와 같은 순위를 지정하여 자신을 소개합니다. 테이블 열에 숫자가 포함된 경우 머리글 행 아래 구문을 `--:` 사용하여 열을 오른쪽에 맞추는 것이 유용합니다.

1. **{% ifversion ghae %}새 {% endif %}파일 편집 탭으로** 돌아갑니다. 
1. 자신을 소개하려면 태그 아래에 두 줄, `</picture>` 다음과 같이 머리글과 자신에 대한 짧은 단락을 추가 `## About me` 합니다.
   
   ```Markdown
   ## About me

   Hi, I'm Mona. You might recognize me as {% data variables.product.prodname_dotcom %}'s mascot.
   ```
1. 이 단락 아래에 두 줄로 다음 태그를 복사하여 붙여넣어 표를 삽입합니다.
   
   ```Markdown{:copy}
   | Rank | THING-TO-RANK |
   |-----:|---------------|
   |     1|               |
   |     2|               |
   |     3|               |
   ```
1. 오른쪽 열에서 를 "언어", "취미" 또는 기타 항목으로 바꾸고 `THING-TO-RANK` 열을 항목 목록으로 채웁니다.
1. 테이블이 올바르게 렌더링되었는지 확인하려면 **미리 보기** 탭을 클릭합니다.

자세한 내용은 "[테이블로 정보 구성"을 참조하세요](/get-started/writing-on-github/working-with-advanced-formatting/organizing-information-with-tables).

### 예제

```Markdown
## About me

Hi, I'm Mona. You might recognize me as {% data variables.product.prodname_dotcom %}'s mascot.

| Rank | Languages |
|-----:|-----------|
|     1| Javascript|
|     2| Python    |
|     3| SQL       |
```

### 모양

!["내 정보" 제목과 언어 목록이 있는 렌더링된 테이블을 보여 주는 미리 보기 탭의 스크린샷](/assets/images/help/profile/markdown-table-example.png)

## 축소된 섹션 추가

콘텐츠를 깔끔하게 유지하기 위해 태그를 `<details>` 사용하여 확장 가능한 축소 섹션을 만들 수 있습니다. 

1. 만든 테이블에 대해 축소된 섹션을 만들려면 다음 예제와 `<details>` 같이 태그로 테이블을 래핑합니다.
   
   ```HTML{:copy}
   <details>
   <summary>My top THINGS-TO-RANK</summary>

   YOUR TABLE

   </details>
   ```
1. `<summary>` 태그 간에 을 테이블에서 순위가 지정된 항목으로 바꿉 `THINGS-TO-RANK` 니다.
1. 필요에 따라 섹션이 기본적으로 열려 있는 것으로 표시되도록 하려면 태그에 `open` `<details>` 특성을 추가합니다.

   ```HTML
   <details open>
   ```
1. 축소된 섹션이 올바르게 렌더링되었는지 확인하려면 **미리 보기** 탭을 클릭합니다.

### 예제

```HTML
<details>
<summary>My top languages</summary>

| Rank | Languages |
|-----:|-----------|
|     1| Javascript|
|     2| Python    |
|     3| SQL       |
  
</details>
```

### 모양

![드롭다운 화살표로 표시된 "내 최상위 언어"라는 축소된 섹션이 있는 미리 보기 탭의 스크린샷](/assets/images/help/profile/collapsed-section-example.png)

## 따옴표 추가

Markdown에는 콘텐츠 서식을 지정하는 다른 많은 옵션이 있습니다. 여기서는 페이지를 나누는 가로 규칙과 즐겨 찾는 따옴표의 서식을 지정하는 블록 따옴표를 추가합니다.

1. 파일 아래쪽의 태그 아래에 있는 두 줄은 `</details>` 세 개 이상의 대시를 입력하여 가로 규칙을 추가합니다.

   ```Markdown
   ---
   ```
1. `---` 줄 아래에 다음과 같이 태그를 입력하여 따옴표를 추가합니다.
   
   ```Markdown
   > QUOTE
   ```

   `QUOTE` 을 원하는 따옴표로 대체합니다. 또는 아래 예제의 견적을 복사합니다.
1. 모든 항목이 올바르게 렌더링되었는지 확인하려면 **미리 보기** 탭을 클릭합니다.

### 예제

```Markdown
---
> If we pull together and commit ourselves, then we can push through anything.

— Mona the Octocat
```

### 모양

![굵은 가로줄 아래에 들여쓰기된 따옴표가 있는 미리 보기 탭의 스크린샷](/assets/images/help/profile/markdown-quote-example.png)

## 주석 추가

HTML 주석 구문을 사용하여 출력에 숨겨질 주석을 추가할 수 있습니다. 여기서는 {% ifversion ghae %}gist{% else %}README{% endif %} 나중에 업데이트할 것을 상기시키는 메모를 추가합니다.

1. 머리글 아래에 두 줄씩 `## About me` 다음 태그를 사용하여 주석을 삽입합니다.

   <pre>
   &lt;!-- COMMENT --&gt;
   </pre>
   
   를 나중에 수행하도록 미리 알려주는 "할 일" 항목으로 바꿉 `COMMENT` 니다(예: 테이블에 항목을 더 추가).
1. 출력에 메모가 숨겨져 있는지 확인하려면 **미리 보기** 탭을 클릭합니다.

### 예제

<pre>
## About me

&lt;!-- TO DO: add more details about me later --&gt;
</pre>

## 작업 내용 저장

변경 내용에 만족하면 {% ifversion ghae %}gist를 저장합니다. 

- 검색 엔진에서 gist를 숨기지만 URL을 공유하는 모든 사용자에게 표시하려면 **비밀 요지 만들기** 를 클릭합니다. 
- {% data variables.location.product_location %}에 있는 모든 사용자에게 gist를 표시하게 되어 기쁜 경우 **내부 gist 만들기** 를 클릭합니다.

{% else %} **변경 내용 커밋** 을 클릭하여 추가 정보를 프로파일링합니다. 

분기에 직접 커밋하면 프로필의 `main` 모든 방문자가 변경 내용을 볼 수 있습니다. 작업을 저장하지만 프로필에 표시할 준비가 되지 않은 경우 **이 커밋에 대한 새 분기 만들기를 선택하고 끌어오기 요청을 시작할** 수 있습니다.

!["변경 내용 커밋" 섹션의 스크린샷](/assets/images/help/profile/readme-commit-changes.png)

{% endif %}

## 다음 단계

- 고급 서식 지정 기능에 대해 계속 알아봅니다. 예를 들어 {% ifversion fpt or ghec %}"[다이어그램 만들기](/get-started/writing-on-github/working-with-advanced-formatting/creating-diagrams)" 및 {% endif %}"[codeblocks 만들기 및 강조 표시](/get-started/writing-on-github/working-with-advanced-formatting/creating-and-highlighting-code-blocks)"를 참조하세요.
- 문제, 끌어오기 요청 및 토론에서 GitHub 간에 통신할 때 새 기술을 사용합니다. 자세한 내용은 "[{% data variables.product.prodname_dotcom %}에서 통신"을 참조하세요](/get-started/quickstart/communicating-on-github).
