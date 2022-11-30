---
title: Git 트리
shortTitle: Trees
allowTitleToDifferFromFilename: true
intro: 'Git 트리 API에서는 {% data variables.product.product_name %}의 Git 데이터베이스에서 트리 개체를 읽고 쓸 수 있습니다.'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
ms.openlocfilehash: 64282860f755516cdae11625984fe4b97d4f9888
ms.sourcegitcommit: fb740a96852435c748dad95d560327e80b4cef19
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 10/24/2022
ms.locfileid: '148105683'
---
## Git 트리 API 정보

Git 트리 개체는 Git 리포지토리의 파일 간에 계층 구조를 만듭니다. Git 트리 개체를 사용하여 디렉터리와 디렉터리에 포함된 파일 간의 관계를 만들 수 있습니다. 해당 엔드포인트를 사용하면 {% data variables.product.product_name %}에서 Git 데이터베이스에 [트리 개체](https://git-scm.com/book/en/v2/Git-Internals-Git-Objects#_tree_objects)를 읽고 쓸 수 있습니다.
