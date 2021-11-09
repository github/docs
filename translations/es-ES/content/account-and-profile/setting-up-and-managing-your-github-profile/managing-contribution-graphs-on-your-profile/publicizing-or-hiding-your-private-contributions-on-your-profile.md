---
title: Divulgar u ocultar tus contribuciones privadas en tu perfil
intro: 'Tu perfil {% data variables.product.product_name %} muestra un gráfico de las contribuciones a tu repositorio durante el último año. Puedes elegir mostrar actividad anonimizada desde repositorios {% ifversion fpt or ghes or ghec %}privados e internos{% else %}privados{% endif %}{% ifversion fpt or ghes or ghec %}adicionalmente a ala actividad de los repositorios públicos{% endif %}.'
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
shortTitle: Contribuciones privadas
---

Si publicas tus contribuciones privadas, las personas sin acceso a los repositorios privados en los que trabajas no podrán ver los detalles de tus contribuciones privadas. En su lugar, verán la cantidad de contribuciones privadas que has realizado durante un determinado día. Tus contribuciones públicas incluirán información detallada. Para obtener más información, consulta "[Ver contribuciones en tu página de perfil](/articles/viewing-contributions-on-your-profile-page)."

{% note %}

**Note:** {% ifversion fpt or ghes or ghec %}On {% ifversion fpt or ghec %}{% data variables.product.prodname_dotcom_the_website %}{% elsif ghes %}{% data variables.product.product_name %}{% endif %}, public contributions on your profile are visible {% ifversion fpt or ghec %}to anyone in the world who can access {% data variables.product.prodname_dotcom_the_website %}{% elsif ghes %}only to other users of {% data variables.product.product_location%}{% endif %}.{% elsif ghae %}On {% data variables.product.prodname_ghe_managed %}, only other members of your enterprise can see the contributions on your profile.{% endif %}

{% endnote %}

## Cambiar la visibilidad de tus contribuciones privadas

{% data reusables.profile.access_profile %}
1. Divulga u oculta tus contribuciones privadas en tu perfil:
    - Para publicitar tus contribuciones privadas, arriba de tu gráfico de contribuciones, utiliza el menú desplegable **Contribution settings** (Configuraciones de contribuciones) y selecciona **Private contributions** (Contribuciones privadas). Los visitantes verán tus recuentos de contribuciones privadas sin más detalles. ![Habilitar que los visitantes vean las contribuciones privadas desde el menú desplegable de configuraciones de contribuciones](/assets/images/help/profile/private-contributions-on.png)
    - Para ocultar tus contribuciones privadas, arriba de tu gráfico de contribuciones, utiliza el menú desplegable **Contribution settings** (Configuraciones de contribuciones) y anula la selección de **Private contributions** (Contribuciones privadas). Los visitantes únicamente verán tus contribuciones públicas. ![Habilitar que los visitantes vean las contribuciones privadas desde el menú desplegable de configuraciones de contribuciones](/assets/images/help/profile/private-contributions-off.png)

## Leer más

- "[Ver las contribuciones en tu página de perfil](/articles/viewing-contributions-on-your-profile-page)"
- "[¿Por qué mis contribuciones no se ven en mi perfil?](/articles/why-are-my-contributions-not-showing-up-on-my-profile)"
