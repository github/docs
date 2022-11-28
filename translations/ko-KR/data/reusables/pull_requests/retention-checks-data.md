---
ms.openlocfilehash: f95dd69778640ad4be04e0bfdab340d351845c38
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/05/2022
ms.locfileid: "147066012"
---
400일보다 오래된 데이터가 보관되어 있는지 검사합니다. 보관 프로세스의 일부로 {% data variables.product.prodname_dotcom %}는 해당 커밋에 대한 모든 검사의 상태를 나타내는 롤업 커밋 상태를 만듭니다. 결과적으로 필요한 보관된 검사가 있는 끌어오기 요청의 병합 상자는 차단된 상태이며 끌어오기 요청을 병합하기 전에 검사를 다시 실행해야 합니다.
