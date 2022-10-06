---
title: Utilizar una dirección de correo electrónico verificada en tu llave GPG
intro: 'Cuando verifica una firma, {% data variables.product.product_name %} comprueba que la dirección de correo electrónico de la persona que confirma el cambio o del etiquetador coincida con una dirección de correo electrónico de las identidades de llave GPG y que sea una dirección de correo electrónico verificada en la cuenta del usuario. Esto garantiza que la clave te pertenece y que tú creaste la confirmación o etiqueta.'
redirect_from:
  - /articles/using-a-verified-email-address-in-your-gpg-key
  - /github/authenticating-to-github/using-a-verified-email-address-in-your-gpg-key
  - /github/authenticating-to-github/troubleshooting-commit-signature-verification/using-a-verified-email-address-in-your-gpg-key
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Identity
  - Access management
shortTitle: Use verified email in GPG key
ms.openlocfilehash: bb9f4fbbfdb70ba55870ab068a33c566791fbaf2
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/05/2022
ms.locfileid: '145091756'
---
{% ifversion fpt or ghec %} Si tiene que comprobar la dirección de correo electrónico de GitHub, vea "[Comprobación de la dirección de correo electrónico](/articles/verifying-your-email-address/)". {% endif %} Si tiene que actualizar o agregar una dirección de correo electrónico a la clave de GPG, vea "[Asociación de un correo electrónico con la clave de GPG](/articles/associating-an-email-with-your-gpg-key)".

Las confirmaciones y etiquetas pueden contener varias direcciones de correo electrónico. Para las confirmaciones, está el autor —la persona que escribió el código— y la persona que confirma el cambio —la persona que agregó la confirmación al árbol—. Cuando se firma una confirmación con Git, sea durante una combinación, selección exclusiva o `git commit` normal, la dirección de correo electrónico del responsable de la confirmación será la suya, incluso si la del creador no lo es. Con las etiquetas es más simple: la dirección de correo electrónico del etiquetador es siempre la del usuario que creó la etiqueta.

Si tiene que cambiar la dirección de correo electrónico del responsable de la confirmación o la etiqueta, vea "[Configuración de la dirección de correo electrónico de confirmación](/articles/setting-your-commit-email-address/)".

## Información adicional

- "[Acerca de la verificación de firma de confirmación](/articles/about-commit-signature-verification)"
