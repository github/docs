---
title: Git 커밋
shortTitle: Commits
allowTitleToDifferFromFilename: true
intro: 'REST API를 사용하여 {% data variables.product.product_name %}에서 Git 데이터베이스의 커밋 개체와 상호 작용합니다.'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
ms.openlocfilehash: 07813929bac1dc0ff6093b302449f1f7beb905c0
ms.sourcegitcommit: 6185352bc563024d22dee0b257e2775cadd5b797
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 12/09/2022
ms.locfileid: '148192627'
---
## Git 커밋 정보

Git 커밋은 Git 리포지토리의 계층 구조([Git 트리](/rest/reference/git#trees)) 및 파일 내용([Git BLOB](/rest/reference/git#blobs))의 스냅샷입니다. 엔드포인트를 사용하면 {% data variables.product.product_name %}에서 Git 데이터베이스에 [커밋 개체](https://git-scm.com/book/en/v2/Git-Internals-Git-Objects#_git_commit_objects)를 읽고 쓸 수 있습니다.
