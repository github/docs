---
title: 타임라인에서 커밋 문제 해결
intro: 프로필의 타임라인에서 커밋에 대한 세부 정보를 볼 수 있습니다. 프로필에 예상되는 커밋이 표시되지 않거나 프로필 페이지에서 커밋 세부 정보를 찾을 수 없는 경우 커밋 날짜와 커밋 작성자 날짜가 다를 수 있습니다.
redirect_from:
  - /articles/troubleshooting-commits-on-your-timeline
  - /github/setting-up-and-managing-your-github-profile/troubleshooting-commits-on-your-timeline
  - /github/setting-up-and-managing-your-github-profile/managing-contribution-graphs-on-your-profile/troubleshooting-commits-on-your-timeline
  - /account-and-profile/setting-up-and-managing-your-github-profile/managing-contribution-graphs-on-your-profile/troubleshooting-commits-on-your-timeline
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Profiles
shortTitle: Troubleshoot commits
ms.openlocfilehash: 9052a1bde12dcc2530420a8f72123f3678da4cae
ms.sourcegitcommit: 5f40f9341dd1e953f4be8d1642f219e628e00cc8
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 10/04/2022
ms.locfileid: '148009113'
---
## 커밋 세부 정보를 볼 수 있는 예상 동작

프로필 페이지의 타임라인에서 특정 리포지토리 옆에 있는 커밋 수를 클릭하여 리포지토리에서 만든 특정 변경 내용의 차이를 비롯하여 해당 기간의 커밋에 대한 자세한 내용을 볼 수 있습니다.

![프로필 타임라인에서 링크 커밋](/assets/images/help/profile/commit-link-on-profile-timeline.png)

![커밋 정보](/assets/images/help/commits/commit-details.png)

## 타임라인의 커밋에서 커밋 세부 정보가 누락됨

프로필 페이지에서 커밋 링크를 클릭하고 리포지토리의 커밋 페이지에 예상되는 커밋이 모두 표시되지 않는 경우 Git의 커밋 기록을 다시 작성할 수 있는데, 커밋 작성자 날짜와 커밋 날짜가 다를 수 있습니다.

![“octocat에 대한 커밋을 찾을 수 없음”이라는 메시지가 포함된 리포지토리 페이지](/assets/images/help/repository/no-commits-found.png)

## GitHub에서 Git 작성자 날짜 및 커밋 날짜를 사용하는 방법

Git에서 작성 날짜는 누군가가 `git commit`을 사용하여 처음으로 커밋을 만든 날짜입니다. 커밋 날짜는 다른 사람이 `git commit --amend`, 강제 푸시, 다시 지정 또는 기타 Git 명령을 사용하여 커밋 날짜를 변경하지 않는 한 작성 날짜와 동일합니다.

프로필 페이지에서 작성 날짜는 커밋이 수행된 시점을 계산하는 데 사용됩니다. 반면 리포지토리에서 커밋 날짜는 리포지토리에서 커밋이 수행된 시점을 계산하는 데 사용됩니다.

대부분의 경우 작성 날짜와 커밋 날짜는 동일하지만 커밋 기록이 변경된 경우 커밋 시퀀스의 순서가 바뀐 것을 알 수 있습니다. 자세한 내용은 “[내 기여가 내 프로필에 표시되지 않는 이유는 무엇인가요?](/articles/why-are-my-contributions-not-showing-up-on-my-profile)”를 참조하세요.

## 타임라인의 커밋에서 누락된 커밋 세부 정보 보기

`--pretty=fuller` 플래그와 함께 `git show` 명령을 사용하여 커밋 작성 날짜와 커밋 날짜가 다른지 확인할 수 있습니다.

```shell
$ git show YOUR_COMMIT_SHA_NUMBER --pretty=fuller
commit YOUR_COMMIT_SHA_NUMBER
Author:     octocat USER_EMAIL
AuthorDate: Tue Apr 03 02:02:30 2018 +0900
Commit:     Sally Johnson USER_EMAIL
CommitDate: Tue Apr 10 06:25:08 2018 +0900
```

작성 날짜와 커밋 날짜가 다른 경우 URL에서 커밋 날짜를 수동으로 변경하여 커밋 세부 정보를 볼 수 있습니다.

예를 들면 다음과 같습니다.
- 아래 URL에서는 작성 날짜 `2018-04-03`을 사용합니다.

  `https://github.com/your-organization-or-personal-account/your-repository/commits?author=octocat&since=2018-04-03T00:00:00Z&until=2018-04-03T23:59:59Z`
- 아래 URL에서는 커밋 날짜 `2018-04-10`을 사용합니다.

  `https://github.com/your-organization-or-personal-account/your-repository/commits?author=octocat&since=2018-04-10T00:00:00Z&until=2018-04-10T23:59:59Z`

수정된 커밋 날짜로 URL을 열면 커밋 세부 정보를 볼 수 있습니다.

![커밋 정보](/assets/images/help/commits/commit-details.png)

## 기대한 커밋이 타임라인에 없음

기대한 커밋이 타임라인에 표시되지 않으면 Git의 커밋 기록이 다시 작성되어 커밋 작성 날짜와 커밋 날짜가 달라졌을 수 있습니다. 그 외 다른 가능성은 “[내 기여가 내 프로필에 표시되지 않는 이유는 무엇인가요?](/articles/why-are-my-contributions-not-showing-up-on-my-profile)”를 참조하세요.
