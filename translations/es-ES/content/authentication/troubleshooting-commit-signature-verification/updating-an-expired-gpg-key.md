---
title: Actualizar una llave GPG vencida
intro: Cuando verifica una firma, {% data variables.product.product_name %} comprueba que la clave no esté revocada o vencida. Si tu clave de firma está revocada o vencida, {% data variables.product.product_name %} no puede verificar tus firmas. Si tu clave está revocada, utiliza la clave principal u otra clave que no esté revocada para firmar tus confirmaciones.
redirect_from:
- /articles/updating-an-expired-gpg-key
- /github/authenticating-to-github/updating-an-expired-gpg-key
- /github/authenticating-to-github/troubleshooting-commit-signature-verification/updating-an-expired-gpg-key
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
- Identity
- Access management
shortTitle: Update expired GPG key
ms.openlocfilehash: daf4f225426ccb67d2fa536afbd9a1f6517e4913
ms.sourcegitcommit: 22d665055b1bee7a5df630385e734e3a149fc720
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 07/13/2022
ms.locfileid: "145091759"
---
Si la clave ha expirado, debes [actualizar la expiración](https://www.gnupg.org/gph/en/manual/c235.html#AEN328), exportar la nueva clave, eliminar la clave expirada en la cuenta de GitHub y [cargar la nueva clave en GitHub](/articles/adding-a-new-gpg-key-to-your-github-account/). Tus confirmaciones y etiquetas previas se mostrarán como verificadas, siempre que la clave reúna todos los demás requisitos de verificación.

Si tu clave es inválida y no utilizas otra clave válida de tu conjunto de claves, pero en su lugar generas una llave GPG nueva con un conjunto nuevo de credenciales, tus confirmaciones hechas con la clave revocada o vencida se seguirán mostrando como no verificadas. Asimismo, tus credenciales nuevas no podrán volver a firmar o verificar tus confirmaciones y etiquetas antiguas.

## <a name="further-reading"></a>Información adicional

- "[Acerca de la verificación de firma de confirmación](/articles/about-commit-signature-verification)"
