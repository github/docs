---
title: Git 커밋
shortTitle: Commits
allowTitleToDifferFromFilename: true
intro: 'Git 커밋 API에서는 {% data variables.product.product_name %}의 Git 데이터베이스에서 커밋 개체를 읽고 쓸 수 있습니다.'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
ms.openlocfilehash: d2440b6676af9560eceb13ef43d6cd16e02d5522
ms.sourcegitcommit: fb740a96852435c748dad95d560327e80b4cef19
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 10/24/2022
ms.locfileid: '148105677'
---
## Git 커밋 API 정보

Git 커밋은 Git 리포지토리의 계층 구조([Git 트리](/rest/reference/git#trees)) 및 파일 내용([Git BLOB](/rest/reference/git#blobs))의 스냅샷입니다. 엔드포인트를 사용하면 {% data variables.product.product_name %}에서 Git 데이터베이스에 [커밋 개체](https://git-scm.com/book/en/v2/Git-Internals-Git-Objects#_git_commit_objects)를 읽고 쓸 수 있습니다.
