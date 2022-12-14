---
ms.openlocfilehash: 5f81e75a6968f2a63114b23674561e82f6a0bae6
ms.sourcegitcommit: ea9a577cff7ec16ded25ed57417c83ec04816428
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 04/07/2022
ms.locfileid: "141504078"
---
Esta tabela dá exemplos de como os nomes de usuário são normalizados em {% data variables.product.prodname_ghe_server %}:

| Nome de Usuário | Nome de usuário normalizado | Resultado
|----------|---------------------|-------
| Ms.Bubbles | `ms-bubbles` | Nome de usuário criado com sucesso.
| !Ms.Bubbles | `-ms-bubbles` | Este nome de usuário não é criado, porque começa com um traço.
| Ms.Bubbles! | `ms-bubbles-` | Este nome de usuário não é criado, porque termina com um traço.
| Ms!!Bubbles | `ms--bubbles` | Este nome de usuário não é criado, porque contém dois traços consecutivos.
| Ms!Bubbles | `ms-bubbles` | Este nome de usuário não é criado. Embora o nome de usuário normalizado seja válido, ele já existe.
| Ms.Bubbles@example.com | `ms-bubbles` | Este nome de usuário não é criado. Embora o nome de usuário normalizado seja válido, ele já existe.
