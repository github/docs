---
title: Acerca de tu tablero personal
redirect_from:
- /hidden/about-improved-navigation-to-commonly-accessed-pages-on-github
- /articles/opting-into-the-public-beta-for-a-new-dashboard
- /articles/about-your-personal-dashboard
- /github/setting-up-and-managing-your-github-user-account/about-your-personal-dashboard
- /github/setting-up-and-managing-your-github-user-account/managing-user-account-settings/about-your-personal-dashboard
intro: You can visit your personal dashboard to keep track of issues and pull requests you're working on or following, navigate to your top repositories and team pages, stay updated on recent activities in organizations and repositories you're subscribed to, and explore recommended repositories.
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
- Accounts
shortTitle: Your personal dashboard
ms.openlocfilehash: a6c91f68a30f06bbc5b3b7bc8a0b95dddfbae64a
ms.sourcegitcommit: 67064b14c9d4d18819db8f6398358b77a1c8002a
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 05/17/2022
ms.locfileid: "145092263"
---
## <a name="accessing-your-personal-dashboard"></a>Acceder a tu tablero personal

Tu tablero personal es la primera página que verás cuando inicias sesión en {% data variables.product.product_name %}.

Para acceder al panel personal una vez que haya iniciado sesión, haga clic en {% octicon "mark-github" aria-label="The github octocat logo" %} en la esquina superior izquierda de cualquier página de {% data variables.product.product_name %}.

## <a name="finding-your-recent-activity"></a>Encontrar tu actividad reciente

En la sección "Recent activity" (Actividad reciente) de tus noticias, rápidamente puedes encontrar las propuestas y solicitudes de extracción recién actualizadas en las que estás trabajando y hacerles el seguimiento. En «Actividad reciente» puedes ver hasta 4 actualizaciones recientes, realizadas en las últimas dos semanas.

{% data reusables.dashboard.recent-activity-qualifying-events %}

## <a name="finding-your-top-repositories-and-teams"></a>Encontrar tus equipos y repositorios principales

En la barra lateral izquierda de tu tablero, puedes acceder a los equipos y los repositorios principales que usas.

![listado de repositorios y equipos de diferentes organizaciones](/assets/images/help/dashboard/repositories-and-teams-from-personal-dashboard.png)

La lista de repositorios principales se genera automáticamente y puede incluir cualquier repositorio con el que hayas interactuado, ya sea que pertenezca directamente a tu cuenta o no. Las interacciones incluyen el realizar confirmaciones y abrir o comentar en propuestas y solicitudes de cambios. La lista de repositorios principales no puede editarse, pero los repositorios saldrán de la lista en 4 meses después de la última interacción que hayas tenido con ellos.

También puedes encontrar un listado de los repositorios, los equipos y los tableros de proyecto recientemente visitados al hacer clic en la barra de búsqueda en la parte principal de cualquier página en {% data variables.product.product_name %}.

## <a name="staying-updated-with-activity-from-the-community"></a>Estar actualizado con la actividad desde la comunidad

{% if for-you-feed %} La sección principal del panel tiene dos fuentes de actividad:

- Siguiendo: Actividad de las personas que sigues y de los repositorios que observas.
- Para ti: Recomendaciones de actividad con base en tu red de {% data variables.product.product_name %}.

### <a name="following-feed"></a>Fuente de "Siguiendo"

Esta fuente muestra la actividad de los repositorios y usuarios en los cuales has mostrado un interés directo cuando los sigues u observas un repositorio. Por ejemplo, verás actualizaciones cuando un usuario al que sigues:

{% else %} En la sección "Toda la actividad" de la fuente de noticias, puede ver actualizaciones de los repositorios que observa y de los usuarios que sigue.

Verá actualizaciones en la fuente de noticias cuando un usuario al que sigue: {% endif %}


- Destaca un repositorio.
- Sigue a otro usuario.{% ifversion fpt or ghes or ghec %}
- Crea un repositorio público.{% endif %}
- Abre una propuesta o una solicitud de extracción con la etiqueta "se busca ayuda" o "primera buena propuesta" en un repositorio que estás mirando.
- Inserta confirmaciones a un repositorio que observa.{% ifversion fpt or ghes or ghec %}
- Bifurque un repositorio público.{% endif %}
- Publica un lanzamiento nuevo.

Para más información sobre cómo seguir a usuarios y ver repositorios, vea "[Seguimiento de usuarios](/get-started/exploring-projects-on-github/following-people)" y "[Ser social](/get-started/quickstart/be-social)".

{% if for-you-feed %}
### <a name="for-you-feed"></a>Para tu fuente

{% note %}

**Nota:** Esta nueva pestaña se encuentra actualmente en versión beta pública y está cambios. 

{% endnote %}

Esta fuente muestra la actividad y recomendaciones con base en tu red en {% data variables.product.product_name %}. Se diseñó para proporcionar actualizaciones que te inspiran, te mantienen actualizado y te ayudan a encontrar comunidades nuevas en las que quieras participar. Tu red incluye:

- Los repositorios que has marcado con estrella
- Los repositorios en los que has contribuido
- Los usuarios que sigues o patrocinas
- Los usuarios con los que has colaborado
- Las organizaciones que sigues

{% endif %}

## <a name="exploring-recommended-repositories"></a>Explorar los repositorios recomendados

Puedes explorar los repositorios recomendados en tus comunidades en la sección "Explorar repositorios" en el costado derecho de tu tablero. Las recomendaciones se basan en repositorio que ha marcado con una estrella o ha visitado, las personas a las que sigue y la actividad dentro de los repositorios a los que tiene acceso.{% ifversion fpt or ghec %} Para más información, vea "[Búsqueda de formas de contribuir al código abierto en {% data variables.product.prodname_dotcom %}](/github/getting-started-with-github/finding-ways-to-contribute-to-open-source-on-github)".{% endif %}

## <a name="further-reading"></a>Información adicional

- "[Acerca del panel de la organización](/articles/about-your-organization-dashboard)"
