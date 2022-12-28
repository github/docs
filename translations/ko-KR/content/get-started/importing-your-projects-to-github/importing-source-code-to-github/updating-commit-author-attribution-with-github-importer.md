---
title: GitHub Importer를 사용하여 커밋 작성자 표시 업데이트
intro: 가져오는 동안 리포지토리의 커밋을 커밋 작성자의 GitHub 계정과 일치시킬 수 있습니다.
redirect_from:
  - /articles/updating-commit-author-attribution-with-github-importer
  - /github/importing-your-projects-to-github/updating-commit-author-attribution-with-github-importer
  - /github/importing-your-projects-to-github/importing-source-code-to-github/updating-commit-author-attribution-with-github-importer
versions:
  fpt: '*'
  ghec: '*'
shortTitle: Update author GitHub Importer
ms.openlocfilehash: 900f71e966f8f8f00a4645286b52592abf06ac48
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/05/2022
ms.locfileid: '145135765'
---
GitHub Importer는 메일 주소가 가져오는 리포지토리의 커밋 작성자와 일치하는 GitHub 사용자를 찾습니다. 그런 다음, 해당 메일 주소 또는 작성자의 GitHub 사용자 이름을 사용하여 커밋을 작성자에 연결할 수 있습니다.

## 커밋 작성자 업데이트

1. 리포지토리를 가져온 후 가져오기 상태 페이지에서 **작성자 일치** 를 클릭합니다.
![작성자 일치 단추](/assets/images/help/importer/match-authors-button.png)
2. 정보를 업데이트하려는 작성자 옆에 있는 **연결** 을 클릭합니다.
![커밋 작성자 목록](/assets/images/help/importer/connect-commit-author.png)
3. 작성자의 메일 주소 또는 GitHub 사용자 이름을 입력하고 **Enter** 키를 누릅니다.

## 퍼블릭 메일 주소를 사용하여 GitHub 사용자에게 커밋 귀속

가져온 리포지토리의 커밋 작성자에게 커밋을 작성하는 데 사용한 메일 주소와 연결된 GitHub 계정이 있고 [커밋 메일 주소를 프라이빗으로 설정](/articles/setting-your-commit-email-address)하지 않은 경우 GitHub Importer는 커밋과 연결된 메일 주소를 GitHub 계정과 연결된 퍼블릭 메일 주소에 일치시키고 커밋을 해당 GitHub 계정에 귀속시킵니다.

## 퍼블릭 메일 주소 없이 GitHub 사용자에게 커밋 귀속

가져온 리포지토리의 커밋 작성자가 GitHub 프로필에서 퍼블릭 메일 주소를 설정하거나 [커밋 메일 주소를 프라이빗으로 설정](/articles/setting-your-commit-email-address)하지 않은 경우에는 GitHub Importer에서 커밋과 연결된 메일 주소를 GitHub 계정에 일치시킬 수 없습니다.

커밋 작성자가 메일 주소를 프라이빗으로 설정하면 문제를 해결할 수 있습니다. 그런 다음, 커밋이 `<username>@users.noreply.github.com`에 귀속되고 가져온 커밋이 해당 GitHub 계정과 연결됩니다.

## 메일 주소를 사용하여 커밋 귀속

작성자의 메일 주소가 해당 GitHub 계정과 연결되지 않은 경우 가져오기 후 [계정에 주소를 추가](/articles/adding-an-email-address-to-your-github-account)할 수 있으며 커밋이 올바르게 귀속됩니다.

작성자에게 GitHub 계정이 없는 경우 GitHub Importer는 커밋과 연결된 메일 주소에 커밋을 귀속시킵니다.

## 추가 참고 자료

- “[GitHub Importer 정보](/articles/about-github-importer)”
- “[GitHub Importer를 사용하여 리포지토리 가져오기](/articles/importing-a-repository-with-github-importer)”
- “[계정에 메일 주소 추가](/articles/adding-an-email-address-to-your-github-account/)”
- “[커밋 메일 주소 설정](/articles/setting-your-commit-email-address)”
