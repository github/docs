---
title: 커밋 서명
intro: 'GPG{% ifversion ssh-commit-verification %}, SSH{% endif %} 또는 S/MIME를 사용하여 로컬로 커밋에 서명할 수 있습니다.'
redirect_from:
  - /articles/signing-commits-and-tags-using-gpg
  - /articles/signing-commits-using-gpg
  - /articles/signing-commits
  - /github/authenticating-to-github/signing-commits
  - /github/authenticating-to-github/managing-commit-signature-verification/signing-commits
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Identity
  - Access management
ms.openlocfilehash: 8550393cc31571756099ac364698434f38b02cfa
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 10/25/2022
ms.locfileid: '148106751'
---
{% data reusables.gpg.desktop-support-for-commit-signing %}

{% tip %}

**팁:**

로컬 리포지토리에 대한 커밋에 기본적으로 서명하도록 Git 클라이언트를 구성하려면 Git 버전 2.0.0 이상에서 `git config commit.gpgsign true`를 실행합니다. 컴퓨터의 모든 로컬 리포지토리에서 기본적으로 모든 커밋에 서명하려면 `git config --global commit.gpgsign true`을 실행합니다.

커밋에 서명할 때마다 입력할 필요가 없도록 GPG 키 암호를 저장하려면 다음 도구를 사용하는 것이 좋습니다.
  - Mac 사용자의 경우 [GPG Suite](https://gpgtools.org/)를 사용하면 Mac OS 키 집합에 GPG 키 암호를 저장할 수 있습니다.
  - Windows 사용자의 경우 [Gpg4win](https://www.gpg4win.org/)은 다른 Windows 도구와 통합됩니다.

GPG 키 암호를 저장하도록 [gpg-agent](http://linux.die.net/man/1/gpg-agent)를 수동으로 구성할 수도 있지만, 이는 ssh-agent와 같은 Mac OS 키 집합과 통합되지 않으며 더 많은 설정이 필요합니다.

{% endtip %}

키가 여러 개 있거나 커밋자 ID와 일치하지 않는 키로 커밋 또는 태그에 서명하려는 경우 [서명 키에 대해 Git에 알리기](/articles/telling-git-about-your-signing-key)를 해야 합니다.

1. 로컬 분기에서 변경 내용을 커밋할 때 git 커밋 명령에 -S 플래그를 추가합니다.
  ```shell
  $ git commit -S -m "YOUR_COMMIT_MESSAGE"
  # Creates a signed commit
  ```
2. GPG를 사용하는 경우 커밋을 만든 후 [GPG 키를 생성](/articles/generating-a-new-gpg-key)할 때 설정한 암호를 입력합니다.
3. 로컬로 커밋 만들기를 마쳤으면 {% data variables.product.product_name %}에서 원격 리포지토리로 푸시합니다.
  ```shell
  $ git push
  # Pushes your local commits to the remote repository
  ```
4. {% data variables.product.product_name %}에서 끌어오기 요청으로 이동합니다.
{% data reusables.repositories.review-pr-commits %}
5. 확인된 서명에 대한 자세한 정보를 보려면 확인됨을 클릭합니다.
![서명된 커밋](/assets/images/help/commits/gpg-signed-commit-verified-without-details.png)

## 추가 참고 자료

* “[서명 키에 대해 Git에 알리기](/articles/telling-git-about-your-signing-key)”
* “[태그 서명](/articles/signing-tags)”
