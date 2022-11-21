---
title: Git Blob
shortTitle: Blobs
allowTitleToDifferFromFilename: true
intro: Git Blob API를 사용하면 각 파일의 콘텐츠를 리포지토리에 저장하는 데 사용되는 개체 형식인 Git Blob(Binary Large Object)을 만들고 가져올 수 있습니다.
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
ms.openlocfilehash: ae4d0ac726c9b76785876f7884425cab99e89f1f
ms.sourcegitcommit: fb740a96852435c748dad95d560327e80b4cef19
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 10/24/2022
ms.locfileid: '148105689'
---
## Git Blob API 정보

Git BLOB(Binary Large Object)은 각 파일의 콘텐츠를 리포지토리에 저장하는 데 사용되는 개체 형식입니다. 파일의 SHA-1 해시는 계산되어 BLOB 개체에 저장됩니다. 엔드포인트를 사용하면 {% data variables.product.product_name %}에서 Git 데이터베이스에 [BLOB 개체](https://git-scm.com/book/en/v2/Git-Internals-Git-Objects)를 읽고 쓸 수 있습니다. BLOB은 [사용자 지정 미디어 유형](#custom-media-types-for-blobs)을 활용합니다. API에서 미디어 유형의 사용에 대한 자세한 내용은 [여기](/rest/overview/media-types)를 참조하세요.

### BLOB에 대한 사용자 지정 미디어 유형

다음은 BLOB에 대해 지원되는 미디어 유형입니다.

    application/json
    application/vnd.github.VERSION.raw

자세한 내용은 “[미디어 유형](/rest/overview/media-types)”을 참조하세요.
