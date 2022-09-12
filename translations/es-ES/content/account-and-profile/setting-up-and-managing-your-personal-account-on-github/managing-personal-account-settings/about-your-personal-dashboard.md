---
title: Acerca de tu tablero personal
redirect_from:
  - /hidden/about-improved-navigation-to-commonly-accessed-pages-on-github
  - /articles/opting-into-the-public-beta-for-a-new-dashboard
  - /articles/about-your-personal-dashboard
  - /github/setting-up-and-managing-your-github-user-account/about-your-personal-dashboard
  - /github/setting-up-and-managing-your-github-user-account/managing-user-account-settings/about-your-personal-dashboard
  - /account-and-profile/setting-up-and-managing-your-github-user-account/managing-user-account-settings/about-your-personal-dashboard
intro: 'Puedes visitar tu tablero personal para hacer un seguimiento de las propuestas y las solicitudes de extracción que estás siguiendo o en las que estás trabajando, navegar hacia las páginas de equipo y tus repositorios principales, estar actualizado sobres las actividadess recientes en las organizaciones y los repositorios en los que estás suscripto y explorar los repositorios recomendados.'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Accounts
shortTitle: Your personal dashboard
ms.openlocfilehash: ee22085e669eedec2e0a9f298cc4d5ad144316c6
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/05/2022
ms.locfileid: '146179155'
---
## Acceder a tu tablero personal

Tu tablero personal es la primera página que verás cuando inicias sesión en {% data variables.product.product_name %}.

Para acceder al panel personal una vez que haya iniciado sesión, haga clic en {% octicon "mark-github" aria-label="The github octocat logo" %} en la esquina superior izquierda de cualquier página de {% data variables.product.product_name %}.

## Encontrar tu actividad reciente

En la sección "Recent activity" (Actividad reciente) de tus noticias, rápidamente puedes encontrar las propuestas y solicitudes de extracción recién actualizadas en las que estás trabajando y hacerles el seguimiento. En "Recent activity" (Actividad reciente), puedes previsualizar hasta 4 actualizaciones recientes, realizadas durante las últimas dos semanas.

{% data reusables.dashboard.recent-activity-qualifying-events %}

## Encontrar tus equipos y repositorios principales

En la barra lateral izquierda de tu tablero, puedes acceder a los equipos y los repositorios principales que usas.

![listado de repositorios y equipos de diferentes organizaciones](/assets/images/help/dashboard/repositories-and-teams-from-personal-dashboard.png)

La lista de repositorios principales se genera automáticamente y puede incluir cualquier repositorio con el que hayas interactuado, ya sea que pertenezca directamente a tu cuenta o no. Las interacciones incluyen el realizar confirmaciones y abrir o comentar en propuestas y solicitudes de cambios. La lista de repositorios principales no puede editarse, pero los repositorios saldrán de la lista en 4 meses después de la última interacción que hayas tenido con ellos.

También puedes encontrar un listado de los repositorios, los equipos y los tableros de proyecto recientemente visitados al hacer clic en la barra de búsqueda en la parte principal de cualquier página en {% data variables.product.product_name %}.

## Estar actualizado con la actividad desde la comunidad

{% ifversion for-you-feed %} La sección principal del panel tiene dos fuentes de actividad:

- Siguiendo: Actividad de las personas que sigues y de los repositorios que observas.
- Para ti: Recomendaciones de actividad con base en tu red de {% data variables.product.product_name %}.

### Fuente de "Siguiendo"

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

{% ifversion for-you-feed %}
### Para tu fuente

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

## Explorar los repositorios recomendados

Puedes explorar los repositorios recomendados en tus comunidades en la sección "Explorar repositorios" en el costado derecho de tu tablero. Las recomendaciones se basan en repositorio que ha marcado con una estrella o ha visitado, las personas a las que sigue y la actividad dentro de los repositorios a los que tiene acceso.{% ifversion fpt or ghec %} Para más información, vea "[Búsqueda de formas de contribuir al código abierto en {% data variables.product.prodname_dotcom %}](/github/getting-started-with-github/finding-ways-to-contribute-to-open-source-on-github)".{% endif %}

## Información adicional

- "[Acerca del panel de la organización](/articles/about-your-organization-dashboard)"
