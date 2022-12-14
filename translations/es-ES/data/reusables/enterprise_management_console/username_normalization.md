---
ms.openlocfilehash: 3928c2b26666cfad7694d10b900ae93e5475454c
ms.sourcegitcommit: ea9a577cff7ec16ded25ed57417c83ec04816428
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 04/07/2022
ms.locfileid: "141528600"
---
Los nombres de usuario de {% data variables.product.prodname_ghe_server %} solo pueden contener caracteres alfanuméricos y guiones (`-`). El {% data variables.product.prodname_ghe_server %} convertirá en raya cualquier caracter no alfanumérico en el nombre de tu cuenta de usuario. Por ejemplo, un nombre de usuario de `gregory.st.john` se normalizará en `gregory-st-john`. Nota que los nombres de usuarios normalizados tampoco pueden comenzar o terminar con una raya. Tampoco pueden contener dos rayas seguidas.

Los nombres de usuario creados a partir de direcciones de correo electrónico se crean con los caracteres normalizados que preceden al carácter `@`.

Si múltiples cuentas se normalizan en el mismo nombre de usuario de {% data variables.product.prodname_ghe_server %}, solo se crea la primera cuenta de usuario. Los siguientes usuarios con el mismo nombre de usuario no podrán registrarse.
