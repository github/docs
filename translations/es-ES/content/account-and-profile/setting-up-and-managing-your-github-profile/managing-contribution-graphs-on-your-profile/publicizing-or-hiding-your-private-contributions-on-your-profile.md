---
title: Divulgar u ocultar tus contribuciones privadas en tu perfil
intro: Your {% data variables.product.product_name %} profile shows a graph of your repository contributions over the past year. You can choose to show anonymized activity from {% ifversion fpt or ghes or ghec %}private and internal{% else %}private{% endif %} repositories{% ifversion fpt or ghes or ghec %} in addition to the activity from public repositories{% endif %}.
redirect_from:
- /articles/publicizing-or-hiding-your-private-contributions-on-your-profile
- /github/setting-up-and-managing-your-github-profile/publicizing-or-hiding-your-private-contributions-on-your-profile
- /github/setting-up-and-managing-your-github-profile/managing-contribution-graphs-on-your-profile/publicizing-or-hiding-your-private-contributions-on-your-profile
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
- Profiles
shortTitle: Private contributions
ms.openlocfilehash: d3ca9c3bef9324baa73b96eb6dc26bdd75960b37
ms.sourcegitcommit: 67064b14c9d4d18819db8f6398358b77a1c8002a
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 05/17/2022
ms.locfileid: "145070058"
---
Si publicas tus contribuciones privadas, las personas sin acceso a los repositorios privados en los que trabajas no podrán ver los detalles de tus contribuciones privadas. En su lugar, verán la cantidad de contribuciones privadas que has realizado durante un determinado día. Tus contribuciones públicas incluirán información detallada. Para obtener más información, vea "[Visualización de contribuciones en la página del perfil](/articles/viewing-contributions-on-your-profile-page)".

{% note %}

**Nota**: {% ifversion fpt or ghes or ghec %}En {% ifversion fpt or ghec %}{% data variables.product.prodname_dotcom_the_website %}{% elsif ghes %}{% data variables.product.product_name %}{% endif %}, las contribuciones públicas en su perfil son visibles {% ifversion fpt or ghec %}para cualquiera en el mundo que pueda acceder a {% data variables.product.prodname_dotcom_the_website %}{% elsif ghes %}únicamente para otros usuarios de {% data variables.product.product_location%}{% endif %}.{% elsif ghae %}En {% data variables.product.prodname_ghe_managed %}, solo otros miembros de su empresa pueden ver las contribuciones en su perfil.{% endif %}

{% endnote %}

## <a name="changing-the-visibility-of-your-private-contributions"></a>Cambiar la visibilidad de tus contribuciones privadas

{% data reusables.profile.access_profile %}
1. Divulga u oculta tus contribuciones privadas en tu perfil:
    - Para divulgar las contribuciones privadas, encima del gráfico de contribuciones, use el menú desplegable **Contribution settings** (Configuración de contribución) y seleccione **Private contributions** (Contribuciones privadas). Los visitantes verán tus recuentos de contribuciones privadas sin más detalles.
  ![Habilitación para que los visitantes vean las contribuciones privadas desde el menú desplegable de configuración de contribuciones](/assets/images/help/profile/private-contributions-on.png)
    - Para ocultar las contribuciones privadas, encima del gráfico de contribuciones, use el menú desplegable **Contribution settings** (Configuración de contribución) y anule la selección de **Private contributions** (Contribuciones privadas). Los visitantes solo verán sus contribuciones públicas.
   ![Habilitación para que los visitantes vean las contribuciones privadas desde el menú desplegable de configuración de contribuciones](/assets/images/help/profile/private-contributions-off.png)

## <a name="further-reading"></a>Información adicional

- "[Visualización de contribuciones en la página del perfil](/articles/viewing-contributions-on-your-profile-page)"
- "[¿Por qué mis contribuciones no aparecen en mi perfil?](/articles/why-are-my-contributions-not-showing-up-on-my-profile)"
