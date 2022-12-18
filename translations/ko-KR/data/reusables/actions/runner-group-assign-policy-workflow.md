---
ms.openlocfilehash: 115103621cb0b156ebb7a3c2c72f0f303c497cfb
ms.sourcegitcommit: 5f9527483381cfb1e41f2322f67c80554750a47d
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/11/2022
ms.locfileid: "146178609"
---
{%- ifversion restrict-groups-to-workflows %}
1. 워크플로 액세스에 대한 정책을 할당합니다.

   특정 워크플로 목록 또는 모든 워크플로에 액세스할 수 있도록 실행기 그룹을 구성할 수 있습니다. 엔터프라이즈에서 공유한 조직의 실행기 그룹을 구성하는 경우 이 설정을 재정의할 수 없습니다. 실행기 그룹에 액세스할 수 있는 워크플로를 지정하는 경우 리포지토리 이름, 소유자를 포함한 워크플로의 전체 경로를 사용해야 하며 워크플로를 분기, 태그 또는 전체 SHA에 고정해야 합니다. 예: `octo-org/octo-repo/.github/workflows/build.yml@v2, octo-org/octo-repo/.github/workflows/deploy.yml@d6dc6c96df4f32fa27b039f2084f576ed2c5c2a5, monalisa/octo-test/.github/workflows/test.yml@main` 
   
   선택한 워크플로 내에서 직접 정의된 작업만 실행기 그룹에 액세스할 수 있습니다.{%- endif %}
