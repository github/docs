---
title: Enviar contribuciones empresariales a tu perfil de GitHub.com
intro: 'Puedes resaltar tu trabajo en {% data variables.product.prodname_enterprise %} si envías los recuentos de contribuciones a tu perfil de {% data variables.product.prodname_dotcom_the_website %}.'
redirect_from:
  - /articles/sending-your-github-enterprise-contributions-to-your-github-com-profile
  - /articles/sending-your-github-enterprise-server-contributions-to-your-github-com-profile
  - /articles/sending-your-github-enterprise-server-contributions-to-your-githubcom-profile
  - /github/setting-up-and-managing-your-github-profile/sending-your-github-enterprise-server-contributions-to-your-githubcom-profile
  - /github/setting-up-and-managing-your-github-profile/managing-contribution-graphs-on-your-profile/sending-your-github-enterprise-server-contributions-to-your-githubcom-profile
  - /account-and-profile/setting-up-and-managing-your-github-profile/managing-contribution-graphs-on-your-profile/sending-enterprise-contributions-to-your-githubcom-profile
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Profiles
shortTitle: Send enterprise contributions
ms.openlocfilehash: 6fb1803f3a93dd03af24ce9ea3f360e579d7dbd1
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/05/2022
ms.locfileid: '147080443'
---
## Acerca de las contribuciones empresariales en tu perfil de {% data variables.product.prodname_dotcom_the_website %}

Tu perfil de {% data variables.product.prodname_dotcom_the_website %} muestra el conteo de contribuciones de {% ifversion fpt or ghec %}{% data variables.product.prodname_enterprise %}{% else %}{% data variables.product.product_name %}{% endif %} de los 90 días anteriores. {% data reusables.github-connect.sync-frequency %} Los conteos de contribuciones de {% ifversion fpt or ghec %}{% data variables.product.prodname_enterprise %}{% else %}{% data variables.product.product_name %}{% endif %} se consideran contribuciones privadas. Los detalles de confirmación solo mostrarán los conteos de contribuciones y que estas se hicieron en un ambiente de {% data variables.product.prodname_enterprise %} fuera de {% data variables.product.prodname_dotcom_the_website %}.

Puedes decidir si quieres que se muestren los conteos de las contribuciones privadas en tu perfil. Para obtener más información, consulte "[Divulgación u ocultación de las contribuciones privadas en el perfil](/articles/publicizing-or-hiding-your-private-contributions-on-your-profile/)".

Para obtener más información sobre cómo se calculan las contribuciones, consulte "[Administración de gráficos de contribución en su perfil](/articles/managing-contribution-graphs-on-your-profile/)".

{% note %}

**Notas:**
- La conexión entre sus cuentas se rige por la [Declaración de privacidad de GitHub](/free-pro-team@latest/github/site-policy/github-privacy-statement/), y los usuarios que habilitan la conexión aceptan los [Términos del servicio del GitHub](/free-pro-team@latest/github/site-policy/github-terms-of-service).

- Antes de que puedas conectar tu perfil de {% ifversion fpt or ghec %}{% data variables.product.prodname_enterprise %}{% else %}{% data variables.product.product_name %}{% endif %} a tu perfil de {% data variables.product.prodname_dotcom_the_website %}, tu empresa debe habilitar {% data variables.product.prodname_github_connect %} y también el compartir contribuciones entre los ambientes. Para obtener más información, contacta a tu propietario de empresa.

{% endnote %}

## Enviar las contribuciones de tu empresa a tu perfil de {% data variables.product.prodname_dotcom_the_website %}

{% ifversion fpt or ghec %}

- Para enviar contribuciones empresariales desde {% data variables.product.prodname_ghe_server %} al perfil de {% data variables.product.prodname_dotcom_the_website %}, consulte "[Envío de contribuciones empresariales a su perfil de {% data variables.product.prodname_dotcom_the_website %}](/enterprise-server/account-and-profile/setting-up-and-managing-your-github-profile/managing-contribution-graphs-on-your-profile/sending-enterprise-contributions-to-your-githubcom-profile) en la documentación de {% data variables.product.prodname_ghe_server %}.
- Para enviar contribuciones empresariales desde{% data variables.product.prodname_ghe_managed %} al perfil de {% data variables.product.prodname_dotcom_the_website %}, consulte "[Envío de contribuciones empresariales a su perfil de {% data variables.product.prodname_dotcom_the_website %}](/github-ae@latest/account-and-profile/setting-up-and-managing-your-github-profile/managing-contribution-graphs-on-your-profile/sending-enterprise-contributions-to-your-githubcom-profile) en la documentación de {% data variables.product.prodname_ghe_managed %}.

{% elsif ghes %}

1. Iniciar sesión en {% data variables.product.prodname_ghe_server %} y {% data variables.product.prodname_dotcom_the_website %}.
1. En {% data variables.product.prodname_ghe_server %}, en la esquina superior derecha de cualquier página, haga clic en la fotografía de perfil y luego en **Settings**.
   ![Icono de configuración de la barra de usuario](/assets/images/help/settings/userbar-account-settings.png) {% data reusables.github-connect.github-connect-tab-user-settings %} {% data reusables.github-connect.connect-dotcom-and-enterprise %}
1. Revise los recursos a los que accederá {% data variables.product.prodname_ghe_server %} desde la cuenta de {% data variables.product.prodname_dotcom_the_website %} y, a continuación, haga clic en **Authorize**.
   ![Autorizar la conexión entre GitHub Enterprise Server y GitHub.com](/assets/images/help/settings/authorize-ghe-to-connect-to-dotcom.png) {% data reusables.github-connect.send-contribution-counts-to-githubcom %}

{% elsif ghae %}

1. Iniciar sesión en {% data variables.product.prodname_ghe_managed %} y {% data variables.product.prodname_dotcom_the_website %}.
1. En {% data variables.product.prodname_ghe_managed %}, en la esquina superior derecha de cualquier página, haga clic en la fotografía de perfil y luego en **Settings**.
   ![Icono de configuración de la barra de usuario ](/assets/images/help/settings/userbar-account-settings.png) {% data reusables.github-connect.github-connect-tab-user-settings %} {% data reusables.github-connect.connect-dotcom-and-enterprise %} {% data reusables.github-connect.authorize-connection %} {% data reusables.github-connect.send-contribution-counts-to-githubcom %}

{% endif %}
