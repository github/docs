---
title: Acerca de las insignias de marketplace
intro: 'Aprende sobre las insignias que puedes ver para algunos de los listados de apps y acciones en {% data variables.product.prodname_marketplace %}.'
redirect_from:
  - /developers/github-marketplace/about-verified-creator-badges
  - /developers/github-marketplace/about-marketplace-badges
versions:
  fpt: '*'
  ghec: '*'
ms.openlocfilehash: 27f11aa4ae2693bcc336ecdf4cbfb68d8679d743
ms.sourcegitcommit: 74c60a4564bcc17e47b5a67941ac6d9fe13b6a5c
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 11/30/2022
ms.locfileid: '148186167'
---
## Para las GitHub Apps

Algunas apps en {% data variables.product.prodname_marketplace %} tienen la insignia de {% octicon "verified" aria-label="The verified badge" %} y una descripción que dice "Publisher domain and email verified". Esto significa que la app pertenece a una organización que tiene:

- Propiedad verificada del dominio y tiene una insignia verificada en su perfil
- Confirmó su dirección de correo electrónico para que el soporte de {% data variables.product.prodname_dotcom %} pueda contactarla
- Requirió la autenticación bifactorial. Para más información, vea "[Exigencia de la autenticación en dos fases en la organización](/organizations/keeping-your-organization-secure/requiring-two-factor-authentication-in-your-organization)".

![Distintivo del marketplace para las aplicaciones de GitHub Apps](/assets/images/marketplace/apps-with-verified-publisher-badge-tooltip.png)

{% note %} {% data variables.product.prodname_dotcom %} no analiza la aplicación. La insignia de marketplace {% octicon "verified" aria-label="The verified badge" %} solo confirma que el publicador cumple con los requisitos que se listan anteriormente.
{% endnote %}

Para obtener información sobre cómo agregar este distintivo a la aplicación, vea "[Solicitud de la comprobación del publicador para la organización](/developers/github-marketplace/applying-for-publisher-verification-for-your-organization)".

Algunas apps en {% data variables.product.prodname_marketplace %} tienen la insignia de {% octicon "verified" aria-label="The verified badge" %} y una descripción que dice "App meets the requirements for listing" instead of, "Publisher domain and email verified." Esto significa que la aplicación cumple los requisitos de descripción descritos en "[Requisitos para la descripción de una aplicación](/developers/github-marketplace/requirements-for-listing-an-app)", pero el publicador no se ha comprobado, como se describe en "[Solicitud de la comprobación del publicador para la organización](/developers/github-marketplace/applying-for-publisher-verification-for-your-organization)". Las apps con esta insignia no pueden cambiar su plan de precios hasta que el publicador solicite y consiga exitosamente la verificación.

![Distintivo del marketplace para las aplicaciones de GitHub Apps](/assets/images/marketplace/apps-with-unverified-publisher-badge-tooltip.png)

Para más información sobre los requisitos de descripción de una aplicación en {% data variables.product.prodname_marketplace %}, vea "[Requisitos de descripción de una aplicación en {% data variables.product.prodname_marketplace %}](/marketplace/getting-started/requirements-for-listing-an-app-on-github-marketplace/)".

Para obtener información sobre cómo buscar aplicaciones para usar, vea "[Búsqueda en {% data variables.product.prodname_marketplace %}](/search-github/searching-on-github/searching-github-marketplace)".

## Para las GitHub Actions 

Las acciones con la {% octicon "verified" aria-label="The verified badge" %} o la insignia de creador verificado indican que {% data variables.product.prodname_dotcom %} ha verificado al creador de esta acción como socio de la organización. Los partners pueden enviar un correo electrónico a <a href="mailto:partnerships@github.com">partnerships@github.com</a> para solicitar la insignia de creador verificado.

![Insignia de creador verificado para las GitHub Actions](/assets/images/marketplace/verified-creator-badge-for-actions.png)

Para obtener información sobre cómo publicar una acción de GitHub en {% data variables.product.prodname_marketplace %}, vea "[Publicación de acciones en GitHub Marketplace](/actions/creating-actions/publishing-actions-in-github-marketplace)".
