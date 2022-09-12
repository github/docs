---
ms.openlocfilehash: 559b84346de36e6fb6e3a3ce9f92edf9420ded34
ms.sourcegitcommit: 9a7b3a9ccb983af5df2cd94da7fecf7a8237529b
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/09/2022
ms.locfileid: "147878328"
---
- **ワークフローの実行時間** - {% ifversion fpt or ghec or ghes > 3.2 or ghae-issue-6469 %}各ワークフロー実行は 35 日に制限されています。 ワークフローの実行がこの制限に達すると、そのワークフローの実行はキャンセルされます。 この期間には、実行時間と、待機と承認に費やされた時間が含まれます。{% else %}各ワークフロー実行は 72 時間に制限されています。 ワークフロー実行がこの制限に達すると、そのワークフローの実行はキャンセルされます。{% endif %}
