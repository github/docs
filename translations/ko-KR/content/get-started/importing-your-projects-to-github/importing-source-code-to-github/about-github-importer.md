---
title: GitHub Importer 정보
intro: 'Subversion, Mercurial, TFVC(Team Foundation 버전 제어) 또는 다른 Git 리포지토리에 소스 코드가 있는 경우 GitHub Importer를 사용하여 GitHub로 이동할 수 있습니다.'
redirect_from:
  - /articles/about-github-importer
  - /github/importing-your-projects-to-github/about-github-importer
  - /github/importing-your-projects-to-github/importing-source-code-to-github/about-github-importer
versions:
  fpt: '*'
  ghec: '*'
ms.openlocfilehash: 86fa3129982afcdf99da7879792881c522d4a6fc
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/10/2022
ms.locfileid: '145135796'
---
GitHub Importer는 커밋 및 수정 기록을 포함한 소스 코드 리포지토리를 GitHub로 빠르게 가져오는 도구입니다.

![리포지토리 gif 가져오기](/assets/images/help/importer/github-importer.gif)

가져오는 동안 가져오는 원본 버전 제어 시스템에 따라 원격 리포지토리에서 인증하고, 커밋 작성자 표시를 업데이트하고, 대용량 파일을 포함하여 리포지토리를 가져올 수 있습니다(또는 Git Large File Storage를 사용하지 않으려는 경우 대용량 파일 제거).

| 가져오기 작업 | Subversion | Mercurial | TFVC | Git |
|:--------------|:----------:|:---------:|:----------------------:|:---:|
| 원격 리포지토리에서 인증 | **X** | **X** | **X** | **X** |
| [커밋 작성자 표시 업데이트](/articles/updating-commit-author-attribution-with-github-importer) | **X** | **X** | **X** | |
| 대용량 파일을 [Git Large File Storage](/articles/about-git-large-file-storage)로 이동 | **X** | **X** | **X** | |
| 리포지토리에서 대용량 파일 제거 | **X** | **X** | **X** | |

## 추가 참고 자료

- “[GitHub Importer를 사용하여 리포지토리 가져오기](/articles/importing-a-repository-with-github-importer)”
- “[GitHub Importer를 사용하여 커밋 작성자 표시 업데이트](/articles/updating-commit-author-attribution-with-github-importer)”
- “[명령줄을 사용하여 Git 리포지토리 가져오기](/articles/importing-a-git-repository-using-the-command-line)”
- “[소스 코드 마이그레이션 도구](/articles/source-code-migration-tools)”
