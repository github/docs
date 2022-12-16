---
title: 파일 보기
intro: 원시 파일 콘텐츠를 보거나 파일의 줄에 대한 변경 내용을 추적하고 시간이 지나면서 파일의 일부가 어떻게 진화했는지 확인할 수 있습니다.
redirect_from:
  - /articles/using-git-blame-to-trace-changes-in-a-file
  - /articles/tracing-changes-in-a-file
  - /articles/tracking-changes-in-a-file
  - /github/managing-files-in-a-repository/tracking-changes-in-a-file
  - /github/managing-files-in-a-repository/managing-files-on-github/tracking-changes-in-a-file
  - /repositories/working-with-files/using-files/tracking-changes-in-a-file
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Repositories
shortTitle: View files and track file changes
ms.openlocfilehash: 7d34e776cb1747ee749531e49abf6f0e3d052b3b
ms.sourcegitcommit: 82b1242de02ecc4bdec02a5b6d11568fb2deb1aa
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 11/21/2022
ms.locfileid: '148179863'
---
## 원시 파일 콘텐츠 보기 또는 복사

원시 보기를 사용하면 스타일 없이 파일의 원시 콘텐츠를 보거나 복사할 수 있습니다.

{% data reusables.repositories.navigate-to-repo %}
1. 보려는 파일을 클릭합니다.
2. 파일 보기의 오른쪽 위 모서리에서 **원시** 를 클릭합니다.
![파일 헤더의 원시 단추 스크린샷](/assets/images/help/repository/raw-file-button.png)
3. 필요에 따라 원시 파일 콘텐츠를 복사하려면 파일 보기의 오른쪽 위 모서리에서 **{% octicon "copy" aria-label="The copy icon" %}** 을 클릭합니다.

## 파일에 대한 줄별 수정 기록 보기

Blame 보기를 사용하면 전체 파일에 대한 줄별 수정 기록을 보거나 {% octicon "versions" aria-label="The prior blame icon" %}을 클릭하여 파일 내에서 한 줄의 수정 기록을 볼 수 있습니다. {% octicon "versions" aria-label="The prior blame icon" %}을 클릭할 때마다 변경 내용을 커밋한 사용자와 시기를 포함하여 해당 줄에 대한 이전 수정 정보가 표시됩니다.

![Git Blame 보기](/assets/images/help/repository/git_blame.png)

파일 또는 끌어오기 요청에서 {% octicon "kebab-horizontal" aria-label="The horizontal kebab octicon" %} 메뉴를 사용하여 선택한 줄 또는 선 범위에 대한 Git Blame을 볼 수도 있습니다.

![선택한 줄에 대한 Git Blame을 볼 수 있는 옵션이 있는 Kebab 메뉴](/assets/images/help/repository/view-git-blame-specific-line.png)

{% tip %}

**팁:** 명령줄에서 `git blame`을 사용하여 한 파일 내의 줄 수정 기록을 볼 수도 있습니다. 자세한 내용은 [Git `git blame` 설명서](https://git-scm.com/docs/git-blame)를 참조하세요.

{% endtip %}

{% data reusables.repositories.navigate-to-repo %}
2. 줄 기록을 보려는 파일을 클릭하여 엽니다.
3. 파일 보기의 오른쪽 위 모서리에서 **Blame** 을 클릭하여 Blame 보기를 엽니다.
![Blame 단추](/assets/images/help/repository/blame-button.png)
4. 특정 줄의 이전 수정 버전을 확인하려면 보고자 하는 변경 내용을 찾을 때까지 {% octicon "versions" aria-label="The prior blame icon" %}을(를) 클릭합니다.
![이전 Blame 단추](/assets/images/help/repository/prior-blame-button.png)

{% ifversion blame-ignore-revs %}

## Blame 보기에서 커밋 무시

리포지토리의 루트 디렉터리에 있어야 하는 `.git-blame-ignore-revs` 파일에 지정된 모든 수정 버전은 Git의 `git blame --ignore-revs-file` 구성 설정을 사용하여 Blame 보기에서 숨겨집니다. 자세한 내용은 Git 설명서의 [`git blame --ignore-revs-file`](https://git-scm.com/docs/git-blame#Documentation/git-blame.txt---ignore-revs-fileltfilegt)를 참조하세요.

1. 리포지토리의 루트 디렉터리에서 이름이 `.git-blame-ignore-revs`인 파일을 만듭니다.
2. Blame 보기에서 제외하려는 커밋 해시를 해당 파일에 추가합니다. 주석을 포함하여 파일을 다음과 같이 구성하는 것이 좋습니다.

    ```ini
    # .git-blame-ignore-revs
    # Removed semi-colons from the entire codebase
    a8940f7fbddf7fad9d7d50014d4e8d46baf30592
    # Converted all JavaScript to TypeScript
    69d029cec8337c616552756310748c4a507bd75a
    ```

3. 변경 내용을 커밋하고 푸시합니다.

이제 Blame 보기를 방문하면 나열된 수정 내용이 Blame에 포함되지 않습니다. 일부 커밋이 숨겨질 수 있음을 나타내는 **Ignoring revisions in .git-blame-ignore-revs 배너에 무시 수정 버전** 이 표시됩니다.

![.git-blame-ignore-revs 파일에 연결되는 Blame 보기의 배너 스크린샷](/assets/images/help/repository/blame-ignore-revs-file.png)

이 기능은 몇 가지 커밋이 코드를 광범위하게 변경하는 경우에 유용할 수 있습니다. 로컬로 `git blame`을 실행할 때도 파일을 사용할 수 있습니다.

```shell
git blame --ignore-revs-file .git-blame-ignore-revs
```

해당 파일의 수정 버전을 항상 무시하도록 로컬 git을 구성할 수도 있습니다.

```shell
git config blame.ignoreRevsFile .git-blame-ignore-revs
```

{% endif %}

## `.git-blame-ignore-revs` 비난 보기에서 우회

파일에 대한 비난 보기에 **.git-blame-ignore-revs의 수정 버전 무시** 가 표시되면 여전히 건너뛰 `.git-blame-ignore-revs` 고 일반 비난 보기를 볼 수 있습니다. URL에서 SHA에 를 `~` 추가하면 **.git-blame-ignore-revs의 수정 내용 무시** 가 사라집니다.
