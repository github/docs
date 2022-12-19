---
title: Solicitar una verificación de publicador para tu organización
intro: 'Para ofrecer planes de pago para tu app o para incluir una insgnia de marketplace en el listado de tu app, debes completar el proceso de verificación de publicador para tu organización.'
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Marketplace
redirect_from:
  - /developers/github-marketplace/applying-for-publisher-verification-for-your-organization
shortTitle: Publisher verification
ms.openlocfilehash: 34085acb78eba5057cea382ab250e4704dd958d1
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/10/2022
ms.locfileid: '145092144'
---
La verificación del publicador garantiza que {% data variables.product.prodname_dotcom %} tiene una forma de contactarte, que habilitas la autenticación bifactorial para tu organización y que el dominio de tu organización se verificó.

Una vez que se haya verificado tu organización, podrás publicar planes de pago para tu app. Para obtener más información, vea "[Establecimiento de planes de precios para la oferta](/developers/github-marketplace/setting-pricing-plans-for-your-listing)".

Para ofrecer planes de pago para tu app, esta debe pertenecer a una organización y debes tener permisos de propietario en ella. Si tu aplicación pertenece actualmente a una cuenta personal, deberás transferir la propiedad de esta a una organización. Para obtener más información, consulte "[Transferencia de la propiedad de una aplicación de GitHub](/developers/apps/transferring-ownership-of-a-github-app)" o "[Transferencia de la propiedad de una aplicación de OAuth](/developers/apps/transferring-ownership-of-an-oauth-app)".

## Solicitar la verificación de publicador


{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %}
1. En la barra lateral izquierda, haga clic en **Developer settings** (Configuración del desarrollador).
  ![Opción de configuración del desarrollador en la barra lateral de configuración de la organización](/assets/images/marketplace/developer-settings-in-org-settings.png)
1. En "Developer settings" (Configuración del desarrollador), haga clic en **Publisher Verificación** (Comprobación del publicador).
  ![Opción de comprobación del publicador en la barra lateral de configuración de la organización](/assets/images/marketplace/publisher-verification-settings-option.png)
1. Debajo de "Verificación del publicador", completa la información de la lista de verificación:
   - Asegúrate de que tu información de perfil básica está presente y es correcta. También, asegúrate de que hayas incluido la mejor dirección de correo electrónico para recibir soporte y actualizaciones de {% data variables.product.company_short %}.
   - Asegúrate de que se encuentre habilitada la autenticación bifactorial para tu organización. Para más información, vea "[Exigencia de la autenticación en dos fases en la organización](/organizations/keeping-your-organization-secure/requiring-two-factor-authentication-in-your-organization)".
   - Emite un dominio verificado y asegúrate que se muestre la insignia de "Verificado" en el perfil de página de tu organización. Para obtener información relacionada, vea "[Comprobación o aprobación de un dominio para la organización](/organizations/managing-organization-settings/verifying-or-approving-a-domain-for-your-organization)".

  ![Lista de verificación para la verificación del publicador](/assets/images/marketplace/publisher-verification-checklist.png)

2. Haga clic en **Request Verification** (Solicitar comprobación). {% data variables.product.company_short %} revisará tus detalles y te avisará cuando se haya completado tu verificación de publicador.

## Información adicional

Para obtener información sobre el proceso de publicación de aplicaciones, consulte ["Acerca de GitHub Marketplace](/developers/github-marketplace/about-github-marketplace)".
