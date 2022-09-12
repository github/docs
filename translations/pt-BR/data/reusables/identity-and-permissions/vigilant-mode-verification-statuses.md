---
ms.openlocfilehash: 383458a6038400299b6ab8759b8bbfd1ebbd3a2d
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/10/2022
ms.locfileid: "145093269"
---
| Status         | Descrição |
| -------------- | ----------- |
| **Verificado**   | O commit foi assinado, a assinatura foi verificada com sucesso e o committer é o único autor que habilitou o modo vigilante. 
| **Parcialmente&nbsp;verificado** | O commit foi assinado e a assinatura foi verificada com sucesso, mas o commit tem um autor que: a) não é o committer e b) habilitou o modo vigilante. Neste caso, a assinatura de commit não garante o consentimento do autor. Portanto o commit é verificado apenas parcialmente.
| **Não verificado** | Qualquer uma das seguintes opções é verdadeira:<br>– O commit foi assinado, mas não foi possível verificar a assinatura.<br>– O commit não foi assinado, e o usuário que o fez habilitou o modo vigilante.<br>– O commit não foi assinado, e um autor habilitou o modo vigilante.<br>
