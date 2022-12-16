---
title: 태그 서명
intro: 'GPG{% ifversion ssh-commit-verification %}, SSH{% endif %} 또는 S/MIME를 사용하여 로컬로 태그에 서명할 수 있습니다.'
redirect_from:
  - /articles/signing-tags-using-gpg
  - /articles/signing-tags
  - /github/authenticating-to-github/signing-tags
  - /github/authenticating-to-github/managing-commit-signature-verification/signing-tags
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Identity
  - Access management
ms.openlocfilehash: 22bdc1c5095a8fa82d2ac406a19dc633f8f44fc6
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 10/25/2022
ms.locfileid: '148106679'
---
{% data reusables.gpg.desktop-support-for-commit-signing %}

1. 태그에 서명하려면 `git tag` 명령에 `-s`를 추가합니다.
  ```shell
  $ git tag -s MYTAG
  # Creates a signed tag
  ```
2. `git tag -v [tag-name]`를 실행하여 서명된 태그를 확인합니다.
  ```shell
  $ git tag -v MYTAG
  # Verifies the signed tag
  ```

## 추가 참고 자료

- “[리포지토리의 태그 보기](/articles/viewing-your-repositorys-tags)”
- “[서명 키에 대해 Git에 알리기](/articles/telling-git-about-your-signing-key)”
- “[GPG 키와 메일 연결](/articles/associating-an-email-with-your-gpg-key)”
- “[커밋 서명](/articles/signing-commits)”
