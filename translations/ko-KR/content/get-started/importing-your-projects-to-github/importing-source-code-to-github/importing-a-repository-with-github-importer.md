---
title: GitHub Importer를 사용하여 리포지토리 가져오기
intro: 프로젝트다른 버전 제어 시스템에서 호스팅된 프로젝트가 있는 경우 GitHub 가져오기 도구를 사용하여 GitHub로 자동으로 가져올 수 있습니다.
redirect_from:
  - /articles/importing-from-other-version-control-systems-to-github
  - /articles/importing-a-repository-with-github-importer
  - /github/importing-your-projects-to-github/importing-a-repository-with-github-importer
  - /github/importing-your-projects-to-github/importing-source-code-to-github/importing-a-repository-with-github-importer
versions:
  fpt: '*'
  ghec: '*'
shortTitle: Use GitHub Importer
ms.openlocfilehash: 8fa7e98593167d8285f9c051b8744731090e6804
ms.sourcegitcommit: d697e0ea10dc076fd62ce73c28a2b59771174ce8
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 10/20/2022
ms.locfileid: '148098566'
---
{% tip %}

**팁:** GitHub Importer가 모든 가져오기에 적합한 것은 아닙니다. 예를 들어 기존 코드가 프라이빗 네트워크에서 호스트된 경우에는 도구를 통해 코드에 액세스할 수 없습니다. 이 경우 Git 리포지토리는 [명령줄을 사용하여 가져오고](/articles/importing-a-git-repository-using-the-command-line) 다른 버전 제어 시스템에서 가져온 프로젝트는 외부 [소스 코드 마이그레이션 도구](/articles/source-code-migration-tools)를 사용하여 가져오는 것이 좋습니다.

{% endtip %}

가져오는 동안 리포지토리의 커밋을 작성자의 GitHub 개인 계정과 일치시키려면 가져오기를 시작하기 전에 리포지토리의 모든 기여자에게 GitHub 계정이 있는지 확인합니다.

{% data reusables.repositories.repo-size-limit %}

1. 임의 페이지의 오른쪽 위에 있는 {% octicon "plus" aria-label="Plus symbol" %}를 클릭한 다음, **리포지토리 가져오기** 를 클릭합니다.
![새 리포지토리 메뉴의 리포지토리 가져오기 옵션](/assets/images/help/importer/import-repository.png)
2. “이전 리포지토리의 복제 URL” 아래에 가져올 프로젝트의 URL을 입력합니다.
![가져온 리포지토리의 URL 텍스트 필드](/assets/images/help/importer/import-url.png)
3. 리포지토리를 소유할 개인 계정 또는 조직을 선택하고 GitHub의 리포지토리 이름을 입력합니다.
![리포지토리 소유자 메뉴 및 리포지토리 이름 필드](/assets/images/help/importer/import-repo-owner-name.png)
4. 새 리포지토리가 ‘퍼블릭’ 또는 ‘프라이빗’이어야 하는지 지정합니다.  자세한 내용은 “[리포지토리 표시 여부 설정](/articles/setting-repository-visibility)”을 참조하세요.
![퍼블릭 또는 프라이빗 리포지토리 라디오 단추](/assets/images/help/importer/import-public-or-private.png)
5. 입력한 정보를 검토하고 **가져오기 시작** 을 클릭합니다.
![가져오기 시작 단추](/assets/images/help/importer/begin-import-button.png)
6. 이전 프로젝트에 자격 증명이 필요한 경우 해당 프로젝트에 대한 로그인 정보를 입력한 다음, **제출** 을 클릭합니다. 이전 프로젝트에서 사용자 계정에 SAML SSO 또는 2FA를 사용하도록 설정한 경우 암호 대신 "암호" 필드에 리포지토리 읽기 권한이 있는 {% 데이터 variables.product.pat_generic %}을(를) 입력합니다.
![암호로 보호된 프로젝트에 대한 암호 양식 및 제출 단추](/assets/images/help/importer/submit-old-credentials-importer.png)
7. 이전 프로젝트의 복제 URL에서 호스트된 프로젝트가 여러 개인 경우 가져올 프로젝트를 선택하고 **제출** 을 클릭합니다.
![가져올 프로젝트 목록 및 제출 단추](/assets/images/help/importer/choose-project-importer.png)
8. 프로젝트에 100MB보다 큰 파일이 포함된 경우 [Git Large File Storage](/articles/versioning-large-files)를 사용하여 대용량 파일을 가져올지 여부를 선택하고 **계속** 을 클릭합니다.
![Git Large File Storage 메뉴 및 계속 단추](/assets/images/help/importer/select-gitlfs-importer.png)

리포지토리를 완전히 가져오면 메일을 받게 됩니다.

## 추가 참고 자료

- “[GitHub Importer를 사용하여 커밋 작성자 표시 업데이트](/articles/updating-commit-author-attribution-with-github-importer)”
