---
title: Git 태그
shortTitle: Tags
allowTitleToDifferFromFilename: true
intro: 'REST API를 사용하여 {% data variables.product.product_name %}에서 Git 데이터베이스의 태그 개체와 상호 작용합니다.'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
ms.openlocfilehash: 0d0a10afabf100cb34a0061585b87b17d5afc416
ms.sourcegitcommit: 6185352bc563024d22dee0b257e2775cadd5b797
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 12/09/2022
ms.locfileid: '148192891'
---
## Git 태그 정보

Git 태그는 [Git 참조](/rest/reference/git#refs)와 유사하지만 Git 태그가 변경되지 않도록 가리키는 Git 커밋입니다. Git 태그는 특정 릴리스를 가리키려는 경우에 유용합니다. 이러한 엔드포인트를 사용하면 {% data variables.product.product_name %}에서 Git 데이터베이스에 [태그 개체](https://git-scm.com/book/en/v2/Git-Internals-Git-References#_tags)를 읽고 쓸 수 있습니다. API는 경량 태그가 아닌 [주석이 추가된 태그 개체](https://git-scm.com/book/en/v2/Git-Internals-Git-References#_tags)만 지원합니다.
