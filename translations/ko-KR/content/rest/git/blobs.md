---
title: Git Blob
shortTitle: Blobs
allowTitleToDifferFromFilename: true
intro: REST API를 사용하여 리포지토리에 각 파일의 콘텐츠를 저장하는 데 사용되는 개체 형식인 Git Blob(이진 큰 개체)과 상호 작용합니다.
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
ms.openlocfilehash: b29c69d2635e20720d23aad62c7aa88984cff984
ms.sourcegitcommit: 6185352bc563024d22dee0b257e2775cadd5b797
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 12/09/2022
ms.locfileid: '148192723'
---
## Git Blob 정보

Git BLOB(Binary Large Object)은 각 파일의 콘텐츠를 리포지토리에 저장하는 데 사용되는 개체 형식입니다. 파일의 SHA-1 해시는 계산되어 BLOB 개체에 저장됩니다. 엔드포인트를 사용하면 {% data variables.product.product_name %}에서 Git 데이터베이스에 [BLOB 개체](https://git-scm.com/book/en/v2/Git-Internals-Git-Objects)를 읽고 쓸 수 있습니다. BLOB은 [사용자 지정 미디어 유형](#custom-media-types-for-blobs)을 활용합니다. API에서 미디어 유형의 사용에 대한 자세한 내용은 [여기](/rest/overview/media-types)를 참조하세요.

### BLOB에 대한 사용자 지정 미디어 유형

다음은 BLOB에 대해 지원되는 미디어 유형입니다.

    application/json
    application/vnd.github.raw

자세한 내용은 “[미디어 유형](/rest/overview/media-types)”을 참조하세요.
