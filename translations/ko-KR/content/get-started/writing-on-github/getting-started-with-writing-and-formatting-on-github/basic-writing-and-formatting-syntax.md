---
title: 기본 쓰기 및 서식 지정 구문
intro: 간단한 구문을 사용하여 GitHub에서 산문 및 코드에 대한 정교한 서식을 만듭니다.
redirect_from:
  - /articles/basic-writing-and-formatting-syntax
  - /github/writing-on-github/basic-writing-and-formatting-syntax
  - /github/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
shortTitle: Basic formatting syntax
ms.openlocfilehash: e8df0930f675834c120bbe187924f9696142e09f
ms.sourcegitcommit: e4069b5613c10d74954185995d0fb73224079463
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 11/17/2022
ms.locfileid: '148169250'
---
## 제목

제목을 만들려면 제목 텍스트 앞에 1~6개의 <kbd>#</kbd> 기호를 추가합니다. 사용하는 <kbd>#</kbd>의 수가 제목의 크기를 결정합니다.

```markdown
# The largest heading
## The second largest heading
###### The smallest heading
```

![렌더링된 H1, H2, H6 제목](/assets/images/help/writing/headings-rendered.png)

두 개 이상의 제목을 사용하는 경우 GitHub는 파일 헤더 내에서 {% octicon "list-unordered" aria-label="The unordered list icon" %}을 클릭하여 액세스할 수 있는 목차를 자동으로 생성합니다. 각 제목은 목차에 나열되며, 제목을 클릭하면 선택한 섹션으로 이동할 수 있습니다. 

![목차 아이콘이 강조 표시된 스크린샷](/assets/images/help/repository/headings_toc.png)

## 텍스트 스타일 지정

주석 필드 및 `.md` 파일에서 굵게, 기울임꼴 또는 취소선 텍스트로 강조를 나타낼 수 있습니다.  

| 스타일 | Syntax | 바로 가기 키 | 예제 | 출력 |
| --- | --- | --- | --- | --- |
| 굵게 | `** **` 또는 `__ __`| <kbd>Command</kbd>+<kbd>B</kbd>(Mac) 또는 <kbd>Ctrl</kbd>+<kbd>B</kbd>(Windows/Linux) | `**This is bold text**` | **굵게 표시된 텍스트** |
| 기울임꼴 | `* *` 또는 `_ _`     | <kbd>Command</kbd>+<kbd>I</kbd>(Mac) 또는 <kbd>Ctrl</kbd>+<kbd>I</kbd>(Windows/Linux) | `*This text is italicized*` | *기울임꼴로 표시된 텍스트* |
| 취소선 | `~~ ~~` | | `~~This was mistaken text~~` | ~~실수하여 취소된 텍스트~~ |
| 굵게 및 중첩된 기울임꼴 | `** **` 및 `_ _` | | `**This text is _extremely_ important**` | **_매우_ 중요한 텍스트** |
| 모든 굵게 및 기울임꼴 | `*** **_` | | `_*_All this text is important_*_` | _ *_모든 텍스트가 중요_** |
| 아래 첨자 | `<sub> </sub>` | | `<sub>This is a subscript text</sub>` | <sub>아래 첨자 텍스트입니다</sub>. |
| 위 첨자 | `<sup> </sup>` | | `<sup>This is a superscript text</sup>` | <sup>위 첨자 텍스트입니다</sup>. |

## 텍스트 인용

<kbd>></kbd>를 사용하여 텍스트를 인용할 수 있습니다.

```markdown
Text that is not a quote

> Text that is a quote
```

![렌더링된 인용 텍스트](/assets/images/help/writing/quoted-text-rendered.png)

{% tip %}

**팁:** 대화를 볼 때 텍스트를 강조 표시한 다음 <kbd>R</kbd>을 입력하여 주석의 텍스트를 자동으로 인용할 수 있습니다. {% octicon "kebab-horizontal" aria-label="The horizontal kebab icon" %}을 클릭한 다음 **회신 인용** 을 클릭하여 전체 주석을 인용할 수 있습니다. 바로 가기 키에 대한 자세한 내용은 “[바로 가기 키](/articles/keyboard-shortcuts/)”를 참조하세요.

{% endtip %}

## 인용 코드

단일 백틱을 사용하여 문장 내에서 코드 또는 명령을 표시할 수 있습니다. 백틱 내의 텍스트는 서식이 지정되지 않습니다. <kbd>Command</kbd>+<kbd>E</kbd>(Mac) 또는 <kbd>Ctrl</kbd>+<kbd>E</kbd>(Windows/Linux) 바로 가기 키를 눌러 Markdown 줄 안에 코드 블록에 대한 백틱을 삽입할 수도 있습니다.

```markdown
Use `git status` to list all new or modified files that haven't yet been committed.
```

![렌더링된 인라인 코드 블록](/assets/images/help/writing/inline-code-rendered.png)

고유한 블록 안으로 코드 또는 텍스트의 서식을 지정하려면 삼중 백틱을 사용합니다.

<pre>
Some basic Git commands are:
```
git status
git add
git commit
```
</pre>

![렌더링된 코드 블록](/assets/images/help/writing/code-block-rendered.png)

자세한 내용은 “[코드 블록 만들기 및 강조 표시](/articles/creating-and-highlighting-code-blocks)”를 참조하세요.

{% data reusables.user-settings.enabling-fixed-width-fonts %}

## 지원되는 색 모델

이슈, 끌어오기 요청 및 토론에서 백틱을 사용하여 문장 내의 색을 나타낼 수 있습니다. 백틱 내에서 지원되는 색 모델은 색의 시각화를 표시합니다.

```markdown
The background color should be `#ffffff` for light mode and `#0d1117` for dark mode.
```

![렌더링된 지원되는 색 모델입니다.](/assets/images/help/writing/supported-color-models-rendered.png)

현재 지원되는 색 모델은 다음과 같습니다.

| Color | 구문 | 예제 | 출력 |
| --- | --- | --- | --- |
| HEX | <code>\`#RRGGBB\`</code> | <code>\`#0969DA\`</code> | ![지원되는 색 모델을 HEX 형식으로 렌더링합니다.](/assets/images/help/writing/supported-color-models-hex-rendered.png) |
| RGB | <code>\`rgb(R,G,B)\`</code> | <code>\`rgb(9, 105, 218)\`</code> | ![지원되는 색 모델을 RGB 형식으로 렌더링합니다.](/assets/images/help/writing/supported-color-models-rgb-rendered.png) |
| HSL | <code>\`hsl(H,S,L)\`</code> | <code>\`hsl(212, 92%, 45%)\`</code> | ![지원되는 색 모델을 HSL 형식으로 렌더링합니다.](/assets/images/help/writing/supported-color-models-hsl-rendered.png) |

{% note %}

**참고:**

- 지원되는 색 모델에서 백틱 내에는 선행 또는 후행 공백이 있을 수 없습니다.
- 색 시각화는 이슈, 끌어오기 요청 및 토론에서만 지원됩니다.

{% endnote %}

## 링크

링크 텍스트를 대괄호 `[ ]`로 묶은 다음 URL을 괄호 `( )`로 묶어 인라인 링크를 만들 수 있습니다. 바로 가기 키 <kbd>Command</kbd>+<kbd>K</kbd> 를 사용하여 링크를 만들 수도 있습니다.{ % ifversion fpt or ghae > 3.3 or ghes > 3.3 or ghec %} 텍스트를 선택한 경우 클립보드의 URL을 붙여넣어 선택 영역에서 링크를 자동으로 만들 수 있습니다. {% endif %}

{% ifversion fpt or ghae > 3.5 or ghes > 3.5 or ghec %} 텍스트를 강조 표시하고 바로 가기 키 <kbd>명령</kbd>+<kbd>V</kbd>를 사용하여 Markdown 하이퍼링크를 만들 수도 있습니다. 텍스트를 링크로 바꾸려면 바로 가기 키 <kbd>Command</kbd>+<kbd>Shift</kbd>+<kbd>V</kbd>를 사용합니다.{% endif %}

`This site was built using [GitHub Pages](https://pages.github.com/).`

![렌더링된 링크](/assets/images/help/writing/link-rendered.png)

{% tip %}

**팁:** {% data variables.product.product_name %}는 주석에 유효한 URL이 작성되면 자동으로 링크를 만듭니다. 자세한 내용은 “[자동 링크된 참조 및 URL](/articles/autolinked-references-and-urls)”을 참조하세요.

{% endtip %}

## 섹션 링크

{% data reusables.repositories.section-links %}

## 상대 링크

{% data reusables.repositories.relative-links %}

## 이미지

<kbd>!</kbd>를 추가하고 `[ ]`에 대체 텍스트를 넣어 이미지를 표시할 수 있습니다. 그런 다음 이미지에 대한 링크를 괄호 `()`에 넣습니다.

`![This is an image](https://myoctocat.com/assets/images/base-octocat.svg)`

![렌더링된 이미지](/assets/images/help/writing/image-rendered.png)

{% data variables.product.product_name %}는 이슈, 끌어오기 요청{% ifversion fpt or ghec %}, 토론{% endif %}, 주석, `.md` 파일에 이미지를 포함하는 기능을 지원합니다. 리포지토리에 있는 이미지를 표시하거나, 온라인 이미지에 대한 링크를 추가하거나, 이미지를 업로드할 수 있습니다. 자세한 내용은 “[자산 업로드](#uploading-assets)”를 참조하세요.

{% tip %}

**팁:** 리포지토리에 있는 이미지를 표시하려면 절대 링크 대신 상대 링크를 사용해야 합니다.

{% endtip %}

다음은 상대 링크를 사용하여 이미지를 표시하는 몇 가지 예입니다.

| Context | 상대 링크 |
| ------ | -------- |
| 동일한 분기의 `.md` 파일에서 | `/assets/images/electrocat.png` |
| 다른 분기의 `.md` 파일에서 | `/../main/assets/images/electrocat.png` |
| 리포지토리의 이슈, 끌어오기 요청, 주석에서 | `../blob/main/assets/images/electrocat.png?raw=true` |
| 다른 리포지토리의 `.md` 파일에서 | `/../../../../github/docs/blob/main/assets/images/electrocat.png` |
| 다른 리포지토리의 이슈, 끌어오기 요청, 주석에서 | `../../../github/docs/blob/main/assets/images/electrocat.png?raw=true` |

{% note %}

**참고**: 위 표의 마지막 두 상대 링크는 뷰어가 이러한 이미지를 포함하는 프라이빗 리포지토리에 대한 읽기 권한이 있는 경우에만 프라이빗 리포지토리의 이미지에 대해 작동합니다.

{% endnote %}

자세한 내용은 “[상대 링크](#relative-links)”를 참조하세요.

{% ifversion fpt or ghec or ghes > 3.3 or ghae > 3.3 %}
### 이미지가 표시되는 테마 지정

`prefers-color-scheme` 미디어 기능과 함께 HTML `<picture>` 요소를 사용하여 Markdown에서 이미지가 표시되는 테마를 지정할 수 있습니다. 밝은 색 모드와 어두운 색 모드를 구분하므로 두 가지 옵션을 사용할 수 있습니다. 이러한 옵션을 사용하여 어둡거나 밝은 배경에 최적화된 이미지를 표시할 수 있습니다. 이는 투명한 PNG 이미지에 특히 유용합니다.

예를 들어 다음 코드는 밝은 테마의 태양 이미지와 어두운 테마의 달을 표시합니다.

{% data reusables.getting-started.picture-element-example %}

URL에 추가된 조각(`#gh-dark-mode-only` 또는 `#gh-light-mode-only`)을 사용하여 테마를 기준으로 이미지를 지정하는 이전 방법은 더 이상 사용되지 않으며 위에서 설명한 새 방법을 위해 제거될 예정입니다.
{% endif %}

## 목록

, <kbd>*</kbd>또는 <kbd>+</kbd>를 사용하여 하나 이상의 텍스트 <kbd>-</kbd>줄 앞에 정렬되지 않은 목록을 만들 수 있습니다.

```markdown
- George Washington
* John Adams
+ Thomas Jefferson
```

![렌더링된 순서가 지정되지 않은 목록](/assets/images/help/writing/unordered-list-rendered.png)

목록의 순서를 지정하려면 각 줄 앞에 숫자를 입력합니다.

```markdown
1. James Madison
2. James Monroe
3. John Quincy Adams
```

![렌더링된 순서가 지정된 목록](/assets/images/help/writing/ordered-list-rendered.png)

### 중첩된 목록

하나 이상의 목록 항목을 다른 항목 아래에 포함하여 중첩된 목록을 만들 수 있습니다.

{% data variables.product.product_name %}의 웹 편집기 또는 [{% data variables.product.prodname_vscode %}](https://code.visualstudio.com/)와 같은 모노스페이스 글꼴을 사용하는 텍스트 편집기를 사용하여 중첩된 목록을 만들려면 목록을 시각적으로 정렬할 수 있습니다. 목록 표식 문자(<kbd>-</kbd> 또는 <kbd>*</kbd>)가 위 항목에 있는 텍스트의 첫 번째 문자 바로 아래에 올 때까지 중첩 목록 항목 앞에 공백 문자를 입력합니다.

```markdown
1. First list item
   - First nested list item
     - Second nested list item
```

{% tip %}

**참고**: 웹 기반 편집기에서 원하는 줄을 먼저 강조 표시한 다음 <kbd>Tab</kbd> 또는 <kbd>Shift</kbd>+<kbd>Tab</kbd>을 각각 사용하여 하나 이상의 텍스트 줄을 들여쓰거나 내어쓸 수 있습니다.

{% endtip %}

![맞춤이 강조 표시된 중첩된 목록](/assets/images/help/writing/nested-list-alignment.png)

![중첩된 항목의 두 수준이 포함된 목록](/assets/images/help/writing/nested-list-example-1.png)

고정 폭 글꼴을 사용하지 않는 {% data variables.product.product_name %}의 주석 편집기에서 중첩된 목록을 만들려면, 중첩된 목록 바로 위에 있는 목록 항목을 확인하고 항목의 내용 앞에 표시되는 문자 수를 계산할 수 있습니다. 그런 다음 중첩된 목록 항목 앞에 해당 수만큼의 공백 문자를 입력합니다.

이 예제에서는 `First list item` 앞에 5개 문자(`100. `)가 있으므로 중첩된 목록 항목을 최소 5개 공백으로 들여써서 목록 항목 `100. First list item` 아래에 중첩된 목록 항목을 추가할 수 있습니다.

```markdown
100. First list item
     - First nested list item
```

![중첩된 목록 항목이 있는 목록](/assets/images/help/writing/nested-list-example-3.png)   

동일한 방법을 사용하여 여러 수준의 중첩된 목록을 만들 수 있습니다. 예를 들어 첫 번째 중첩된 목록 항목에는 중첩된 목록 내용 `First nested list item`앞에 7개 문자(`␣␣␣␣␣-␣`)가 있으므로 두 번째 중첩된 목록 항목을 7개 공백으로 들여써야 합니다.

```markdown
100. First list item
     - First nested list item
       - Second nested list item
```

![중첩된 항목의 두 수준이 포함된 목록](/assets/images/help/writing/nested-list-example-2.png)    

더 많은 예제는 [GitHub Flavored Markdown 사양](https://github.github.com/gfm/#example-265)을 참조하세요.

## 작업 목록

{% data reusables.repositories.task-list-markdown %}

작업 목록 항목 설명이 괄호로 시작하는 경우 <kbd>\\</kbd>로 이스케이프해야 합니다.

`- [ ] \(Optional) Open a followup issue`

자세한 내용은 “[작업 목록 정보](/articles/about-task-lists)”를 참조하세요.

## 사람과 팀 멘션

<kbd>@</kbd>과 함께 사용자 이름 또는 팀 이름을 입력하여 {% data variables.product.product_name %}에서 사람 또는 [팀](/articles/setting-up-teams/)을 멘션할 수 있습니다. 그러면 알림이 트리거되고 해당 사용자의 주의를 대화에 집중시킬 수 있습니다. 또한 사용자 이름 또는 팀 이름을 멘션하는 메모를 편집하는 경우에도 해당 사용자는 알림을 받게 됩니다. 알림에 대한 자세한 내용은 "[알림 정보](/github/managing-subscriptions-and-notifications-on-github/about-notifications)"를 참조하세요.

{% note %}

**참고:** 리포지토리에 대한 읽기 권한이 있는 경우에만 멘션에 대한 알림을 받으며 리포지토리를 조직에서 소유한 경우 해당 사용자는 조직의 멤버가 됩니다.

{% endnote %}

`@github/support What do you think about these updates?`

![렌더링된 @mention](/assets/images/help/writing/mention-rendered.png)

부모 팀을 멘션할 경우 자식 팀의 구성원도 알림을 수신하므로, 여러 사용자 그룹과의 통신이 간소화됩니다. 자세한 내용은 “[팀 정보](/articles/about-teams)”를 참조하세요.

<kbd>@</kbd> 기호를 입력하면 프로젝트에 사용자 또는 팀 목록이 표시됩니다. 입력할 때 목록이 필터링되므로 찾고 있는 사용자나 팀의 이름을 찾았으면 화살표 키를 사용하여 선택하고 Tab 또는 Enter 키를 눌러 이름을 완성할 수 있습니다. 팀의 경우 @organization/team-name을 입력하면 해당 팀의 모든 구성원이 대화를 구독하게 됩니다.

자동 완성 결과는 리포지토리 협력자 및 스레드의 다른 참가자로 제한됩니다.

## 이슈 및 끌어오기 요청 참조

<kbd>#</kbd>을 입력하여 리포지토리 내에서 제안된 이슈 및 끌어오기 요청 목록을 표시할 수 있습니다. 이슈, 끌어오기 요청 번호 또는 제목을 입력하여 목록을 필터링한 다음, Tab 또는 Enter 키를 눌러 강조 표시된 결과를 완성합니다.

자세한 내용은 “[자동 링크된 참조 및 URL](/articles/autolinked-references-and-urls)”을 참조하세요.

## 외부 리소스 참조

{% data reusables.repositories.autolink-references %}

{% ifversion ghes < 3.4 %}
## 콘텐츠 첨부 파일

일부 {% data variables.product.prodname_github_apps %}은 등록된 도메인에 연결되는 URL에 대한 정보를 {% data variables.product.product_name %}에서 제공합니다. {% data variables.product.product_name %}는 앱에서 제공하는 정보를 이슈 또는 끌어오기 요청의 본문이나 주석의 URL 아래에 렌더링합니다.

![콘텐츠 첨부 파일](/assets/images/github-apps/content_reference_attachment.png)

콘텐츠 첨부 파일을 보려면 Content Attachments API를 사용하는 {% data variables.product.prodname_github_app %}이 리포지토리에 설치되어 있어야 합니다.{% ifversion fpt or ghec %} 자세한 내용은 “[개인 계정에 앱 설치](/articles/installing-an-app-in-your-personal-account)” 및 “[조직에 앱 설치](/articles/installing-an-app-in-your-organization)”를 참조하세요.{% endif %}

콘텐츠 첨부 파일은 Markdown 링크의 일부인 URL에 대해 표시되지 않습니다.

콘텐츠 첨부 파일을 사용하는 {% data variables.product.prodname_github_app %}을 빌드하는 방법에 대한 자세한 내용은 “[콘텐츠 첨부 파일 사용](/apps/using-content-attachments)”을 참조하세요.{% endif %}

## 자산 업로드

끌어서 놓기, 파일 브라우저에서 선택, 붙여넣기 등을 통해 이미지와 같은 자산을 업로드할 수 있습니다. 리포지토리의 이슈, 끌어오기 요청, 주석, `.md` 파일에 자산을 업로드할 수 있습니다.

## 이모지 사용

`:EMOJICODE:`를 입력하여 글에 이모지를 추가할 수 있습니다.

`@octocat :+1: This PR looks great - it's ready to merge! :shipit:`

![렌더링된 이모지](/assets/images/help/writing/emoji-rendered.png)

<kbd>:</kbd>을 입력하면 제안된 이모지 목록이 표시됩니다. 입력할 때 목록이 필터링되므로 원하는 이모지를 찾았으면 **Tab** 또는 **Enter** 키를 눌러 강조 표시된 결과를 완성합니다.

사용 가능한 이모지 및 코드의 전체 목록을 보려면 [Emoji-Cheat-Sheet](https://github.com/ikatyang/emoji-cheat-sheet/blob/master/README.md)를 확인하세요.

## 단락

텍스트 줄 사이에 빈 줄을 두어 새 단락을 만들 수 있습니다.

## 각주

이 대괄호 구문을 사용하여 콘텐츠에 각주를 추가할 수 있습니다.

```
Here is a simple footnote[^1].

A footnote can also have multiple lines[^2].  

You can also use words, to fit your writing style more closely[^note].

[^1]: My reference.
[^2]: Every new line should be prefixed with 2 spaces.  
  This allows you to have a footnote with multiple lines.
[^note]:
    Named footnotes will still render with numbers instead of the text but allow easier identification and linking.  
    This footnote also has been made with a different syntax using 4 spaces for new lines.
```

각주가 다음과 같이 렌더링됩니다.

![렌더링된 각주](/assets/images/site/rendered-footnote.png)

{% tip %}

**참고**: Markdown에서 각주의 위치는 각주가 렌더링될 위치에 영향을 주지 않습니다. 각주에 대한 참조 바로 뒤에 각주를 작성할 수 있으며, 각주는 여전히 Markdown의 하단에 렌더링됩니다.

각주는 wiki에서 지원되지 않습니다.

{% endtip %}

## 주석이 있는 콘텐츠 숨기기

HTML 주석에 콘텐츠를 배치하여 렌더링된 Markdown에서 콘텐츠를 숨기도록 {% data variables.product.product_name %}에 지시할 수 있습니다.

<pre>
&lt;!-- This content will not appear in the rendered Markdown --&gt;
</pre>

## Markdown 서식 무시

Markdown 문자 앞에 <kbd>\\</kbd>를 사용하여 Markdown 형식을 무시(또는 이스케이프)하도록 {% data variables.product.product_name %}에 지시할 수 있습니다.

`Let's rename \*our-new-project\* to \*our-old-project\*.`

![렌더링된 이스케이프 문자](/assets/images/help/writing/escaped-character-rendered.png)

자세한 내용은 Daring Fireball의 “[Markdown: 구문](https://daringfireball.net/projects/markdown/syntax#backslash)”을 참조하세요.

## Markdown 렌더링 사용 안 함

{% data reusables.repositories.disabling-markdown-rendering %}

## 추가 참고 자료

- [{% data variables.product.prodname_dotcom %} Flavored Markdown 사양](https://github.github.com/gfm/)
- “[GitHub에서의 쓰기 및 서식 지정 정보](/articles/about-writing-and-formatting-on-github)”
- “[고급 서식 지정 작업](/articles/working-with-advanced-formatting)”
- "[{% data variables.product.prodname_dotcom %}에 쓰기 위한 빠른 시작](/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/quickstart-for-writing-on-github)"
