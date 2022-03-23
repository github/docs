---
title: Acerca de tu tablero personal
redirect_from:
  - /hidden/about-improved-navigation-to-commonly-accessed-pages-on-github
  - /articles/opting-into-the-public-beta-for-a-new-dashboard
  - /articles/about-your-personal-dashboard
  - /github/setting-up-and-managing-your-github-user-account/about-your-personal-dashboard
  - /github/setting-up-and-managing-your-github-user-account/managing-user-account-settings/about-your-personal-dashboard
intro: 'Puedes visitar tu tablero personal para hacer un seguimiento de las propuestas y las solicitudes de extracción que estás siguiendo o en las que estás trabajando, navegar hacia las páginas de equipo y tus repositorios principales, estar actualizado sobres las actividadess recientes en las organizaciones y los repositorios en los que estás suscripto y explorar los repositorios recomendados.'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Accounts
shortTitle: Tu tablero personal
---

## Acceder a tu tablero personal

Tu tablero personal es la primera página que verás cuando inicias sesión en {% data variables.product.product_name %}.

Para acceder a tu tablero personal una vez que has iniciado sesión, haz clic en el {% octicon "mark-github" aria-label="The github octocat logo" %} en la esquina superior izquierda de cualquier página en {% data variables.product.product_name %}.

## Encontrar tu actividad reciente

En la sección "Recent activity" (Actividad reciente) de tus noticias, rápidamente puedes encontrar las propuestas y solicitudes de extracción recién actualizadas en las que estás trabajando y hacerles el seguimiento. En "Recent activity" (Actividad reciente), puedes previsualizar hasta 12 actualizaciones recientes, realizadas durante las últimas dos semanas.

{% data reusables.dashboard.recent-activity-qualifying-events %}

## Encontrar tus equipos y repositorios principales

En la barra lateral izquierda de tu tablero, puedes acceder a los equipos y los repositorios principales que usas.

![listado de repositorios y equipos de diferentes organizaciones](/assets/images/help/dashboard/repositories-and-teams-from-personal-dashboard.png)

La lista de repositorios principales se genera automáticamente y puede incluir cualquier repositorio con el que hayas interactuado, ya sea que pertenezca directamente a tu cuenta o no. Las interacciones incluyen el realizar confirmaciones y abrir o comentar en propuestas y solicitudes de cambios. La lista de repositorios principales no puede editarse, pero los repositorios saldrán de la lista en 4 meses después de la última interacción que hayas tenido con ellos.

También puedes encontrar un listado de los repositorios, los equipos y los tableros de proyecto recientemente visitados al hacer clic en la barra de búsqueda en la parte principal de cualquier página en {% data variables.product.product_name %}.

## Estar actualizado con la actividad desde tu organización

{% if for-you-feed %}
The main section of your dashboard has two activity feeds:

- Following: Activity by people you follow and from repositories you watch.
- For you: Activity and recommendations based on your {% data variables.product.product_name %} network.

### Following feed

This feed shows activity from repositories and users you have shown a direct interest in, by following a user or watching a repository. For example, you'll see updates when a user you follow:

{% else %}
In the "All activity" section of your news feed, you can view updates from repositories you watch and users you follow.

Verás actualizaciones en tus noticias cuando un usuario que sigues:
{% endif %}


- Destaca un repositorio.
- Sigue otro usuario.{% ifversion fpt or ghes or ghec %}
- Crea un repositorio público.{% endif %}
- Abre una propuesta o una solicitud de extracción con la etiqueta "se busca ayuda" o "primera buena propuesta" en un repositorio que estás mirando.
- Sube las confirmaciones a un repositorio que estés observando.{% ifversion fpt or ghes or ghec %}
- Bifurque un repositorio público.{% endif %}
- Publica un lanzamiento nuevo.

For more information about following people and watching repositories, see "[Following people](/get-started/exploring-projects-on-github/following-people)" and "[Be social](/get-started/quickstart/be-social)."

{% if for-you-feed %}
### For you feed

{% note %}

**Note:** This new tab is currently in public beta and subject to change.

{% endnote %}

This feed shows activity and recommendations based on your network on {% data variables.product.product_name %}. It's designed to provide updates that inspire you, keep you up-to-date, and help you find new communities you want to participate in. Your network includes:

- Repositories you have starred
- Repositories you've contributed to
- Users you follow or sponsor
- Users you've collaborated with
- Organizations you follow

{% endif %}

## Explorar los repositorios recomendados

Puedes explorar los repositorios recomendados en tus comunidades en la sección "Explorar repositorios" en el costado derecho de tu tablero. Las recomendaciones se basan en repositorios que has visitado o a los que has marcado con una estrella, las personas que sigues, y la actividad dentro de los repositorios a los cuales tienes acceso. {% ifversion fpt or ghec %}Para obtener más información, consulta "[Encontrar maneras de contribuir al código abierto en {% data variables.product.prodname_dotcom %}](/github/getting-started-with-github/finding-ways-to-contribute-to-open-source-on-github)".{% endif %}

## Leer más

- "[Acerca del tablero de tu organización](/articles/about-your-organization-dashboard)"
