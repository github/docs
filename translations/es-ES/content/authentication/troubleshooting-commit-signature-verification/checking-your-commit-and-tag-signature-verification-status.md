---
title: Comprobar el estado de verificación de firma de la confirmación y de la etiqueta
intro: 'Puedes comprobar el estado de verificación de las firmas de tu confirmación y de la etiqueta en {% data variables.product.product_name %}.'
redirect_from:
  - /articles/checking-your-gpg-commit-and-tag-signature-verification-status
  - /articles/checking-your-commit-and-tag-signature-verification-status
  - /github/authenticating-to-github/checking-your-commit-and-tag-signature-verification-status
  - /github/authenticating-to-github/troubleshooting-commit-signature-verification/checking-your-commit-and-tag-signature-verification-status
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Identity
  - Access management
shortTitle: Check verification status
ms.openlocfilehash: 726d292ca2b91b54c9002dc393e6e21f76648889
ms.sourcegitcommit: 22d665055b1bee7a5df630385e734e3a149fc720
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 07/13/2022
ms.locfileid: '145091761'
---
## <a name="checking-your-commit-signature-verification-status"></a>Comprobar el estado de verificación de firma de la confirmación

1. En {% data variables.product.product_name %}, desplázate hasta la solicitud de extracción.
{% data reusables.repositories.review-pr-commits %}
3. Junto al hash de confirmación abreviado de la confirmación, hay una casilla que muestra si la firma de confirmación está verificada{% ifversion fpt or ghec %}, parcialmente verificada{% endif %} o no se ha verificado.
![Confirmación firmada](/assets/images/help/commits/gpg-signed-commit-verified-without-details.png)
4. Para ver información más detallada sobre la firma de confirmación, haga clic en **Verificada**{% ifversion fpt or ghec %}, **Parcialmente verificada**{% endif %} o **Sin verificar**.
![Confirmación firmada verificada](/assets/images/help/commits/gpg-signed-commit_verified_details.png)

## <a name="checking-your-tag-signature-verification-status"></a>Comprobar el estado de verificación de firma de la etiqueta

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.releases %}
2. En la parte superior de la página Versiones, haga clic en **Etiquetas**.
![Página de etiquetas](/assets/images/help/releases/tags-list.png)
3. Junto a la descripción de la etiqueta, hay una casilla que muestra si la firma de la etiqueta está verificada{% ifversion fpt or ghec %}, parcialmente verificada{% endif %} o no se ha verificado.
![Firma de etiqueta verificada](/assets/images/help/commits/gpg-signed-tag-verified.png)
4. Para ver información más detallada sobre la firma de la etiqueta, haga clic en **Verificada**{% ifversion fpt or ghec %}, **Parcialmente verificada**{% endif %} o **Sin verificar**. 
![Etiqueta firmada verificada](/assets/images/help/commits/gpg-signed-tag-verified-details.png)

## <a name="further-reading"></a>Información adicional

- "[Acerca de la verificación de firma de confirmación](/articles/about-commit-signature-verification)"
- "[Firma de confirmaciones](/articles/signing-commits)"
- "[Firma de etiquetas](/articles/signing-tags)"
