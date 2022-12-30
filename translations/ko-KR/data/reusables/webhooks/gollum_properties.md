---
ms.openlocfilehash: 55d2a154539d7cc6b73f248c5616bd0016a561aa
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/11/2022
ms.locfileid: "145087439"
---
키 | 형식 | 설명
----|------|-------------
`pages`|`array` | 업데이트된 페이지입니다.
`pages[][page_name]`|`string` | 페이지의 이름입니다.
`pages[][title]`|`string` |  현재 페이지 제목입니다.
`pages[][action]`|`string` |  페이지에서 수행된 작업입니다. `created` 또는 `edited`일 수 있습니다.
`pages[][sha]`|`string` | 페이지의 최신 커밋 SHA입니다.
`pages[][html_url]`|`string` | HTML Wiki 페이지를 가리킵니다.
