---
title: Git 참조
shortTitle: References
intro: 'REST API를 사용하여 {% data variables.product.product_name %}에서 Git 데이터베이스의 참조와 상호 작용'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
allowTitleToDifferFromFilename: true
ms.openlocfilehash: c248685d867fff1835018f0b3021536a8a968168
ms.sourcegitcommit: 6185352bc563024d22dee0b257e2775cadd5b797
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 12/09/2022
ms.locfileid: '148192899'
---
## Git 참조 정보

Git 참조(`git ref`)는 Git 커밋 SHA-1 해시를 포함하는 파일입니다. Git 커밋을 참조할 때 해시가 아닌 기억하기 쉬운 이름을 나타내는 Git 참조를 사용할 수 있습니다. 새 커밋을 가리키도록 Git 참조를 다시 작성할 수 있습니다. 분기는 새 Git 커밋 해시를 저장하는 Git 참조입니다. 이러한 엔드포인트를 사용하면 {% data variables.product.product_name %}에서 Git 데이터베이스에 [참조](https://git-scm.com/book/en/v2/Git-Internals-Git-References)를 읽고 쓸 수 있습니다.
