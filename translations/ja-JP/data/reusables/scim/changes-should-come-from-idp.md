---
ms.openlocfilehash: dbc37853f288c92b80e2858c0e94b9a07ca9b60f
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/10/2022
ms.locfileid: "145130615"
---
SCIM プロビジョニングが組織に実装されている場合、ユーザーの組織メンバーシップに対する変更は ID プロバイダーが始める必要があります。 ユーザーが既存の SCIM 統合ではなく、手動で組織に招待された場合、ユーザー アカウントが SCIM ID に適切にリンクされない可能性があります。 これにより、将来、ユーザー アカウントが SCIM 経由でプロビジョニング解除されるのを防ぐことができます。 既存の SCIM 統合ではなくユーザーが手動で削除された場合、古いリンク ID が残り、ユーザーが組織に再参加する必要がある場合に問題が発生する可能性があります。
