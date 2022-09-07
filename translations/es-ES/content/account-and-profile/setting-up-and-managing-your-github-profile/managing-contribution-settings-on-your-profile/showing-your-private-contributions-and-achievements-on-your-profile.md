---
title: Visualización de las contribuciones y logros privados en tu perfil
intro: 'Tu perfil {% data variables.product.product_name %} muestra un gráfico de las contribuciones a tu repositorio durante el último año. Puedes elegir mostrar actividad anonimizada desde repositorios {% ifversion fpt or ghes or ghec %}privados e internos{% else %}privados{% endif %}{% ifversion fpt or ghes or ghec %}adicionalmente a la actividad de los repositorios públicos{% endif %}.'
redirect_from:
  - /articles/publicizing-or-hiding-your-private-contributions-on-your-profile
  - /github/setting-up-and-managing-your-github-profile/publicizing-or-hiding-your-private-contributions-on-your-profile
  - /github/setting-up-and-managing-your-github-profile/managing-contribution-graphs-on-your-profile/publicizing-or-hiding-your-private-contributions-on-your-profile
  - /account-and-profile/setting-up-and-managing-your-github-profile/managing-contribution-graphs-on-your-profile/publicizing-or-hiding-your-private-contributions-on-your-profile
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Profiles
shortTitle: Private contributions and achievements
ms.openlocfilehash: b40e3835bf1548ff4ced75d1207de9a5b493dc90
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/05/2022
ms.locfileid: '147080447'
---
Si publicas tus contribuciones privadas, las personas sin acceso a los repositorios privados en los que trabajas no podrán ver los detalles de tus contribuciones privadas. En su lugar, verán la cantidad de contribuciones privadas que has realizado durante un determinado día. Tus contribuciones públicas incluirán información detallada. Para obtener más información, vea "[Visualización de contribuciones en la página del perfil](/articles/viewing-contributions-on-your-profile-page)".

{% note %}

**Nota**: {% ifversion fpt or ghes or ghec %}En {% ifversion fpt or ghec %}{% data variables.product.prodname_dotcom_the_website %}{% elsif ghes %}{% data variables.product.product_name %}{% endif %}, las contribuciones públicas en su perfil son visibles {% ifversion fpt or ghec %}para cualquiera en el mundo que pueda acceder a {% data variables.product.prodname_dotcom_the_website %}{% elsif ghes %}únicamente para otros usuarios de {% data variables.product.product_location%}{% endif %}.{% elsif ghae %}En {% data variables.product.prodname_ghe_managed %}, solo otros miembros de su empresa pueden ver las contribuciones en su perfil.{% endif %}

{% endnote %}

## Cambiar la visibilidad de tus contribuciones privadas

{% data reusables.profile.access_profile %}
1. Divulga u oculta tus contribuciones privadas en tu perfil:
    - Para divulgar las contribuciones privadas, encima del gráfico de contribuciones, use el menú desplegable **Contribution settings** (Configuración de contribución) y seleccione **Private contributions** (Contribuciones privadas). Los visitantes verán tus recuentos de contribuciones privadas sin más detalles.
  ![Habilitación para que los visitantes vean las contribuciones privadas desde el menú desplegable de configuración de contribuciones](/assets/images/help/profile/private-contributions-on.png)
    - Para ocultar las contribuciones privadas, encima del gráfico de contribuciones, use el menú desplegable **Contribution settings** (Configuración de contribución) y anule la selección de **Private contributions** (Contribuciones privadas). Los visitantes solo verán sus contribuciones públicas.
   ![Habilitación para que los visitantes vean las contribuciones privadas desde el menú desplegable de configuración de contribuciones](/assets/images/help/profile/private-contributions-off.png)

## Cambio de la visibilidad de los logros

{% data reusables.user-settings.access_settings %}
1. Mostrar u ocultar logros en tu perfil:
    - Para mostrar logros en el perfil, ve a **Configuración de perfil** y activa la casilla situada junto a **Mostrar logros en mi perfil.** 
  ![Permitir que los visitantes vean los logros desde la configuración del perfil](/assets/images/achievements-profile-settings-off.png)
    - Para ocultar logros en el perfil, ve a **Configuración de perfil** y desactiva la casilla situada junto a **Mostrar logros en mi perfil.** 
  ![Ocultar los logros a los visitantes en la configuración del perfil](/assets/images/achievements-profile-settings-on.png)

## Información adicional

- "[Visualización de contribuciones en la página del perfil](/articles/viewing-contributions-on-your-profile-page)"
- "[¿Por qué mis contribuciones no aparecen en mi perfil?](/articles/why-are-my-contributions-not-showing-up-on-my-profile)"
