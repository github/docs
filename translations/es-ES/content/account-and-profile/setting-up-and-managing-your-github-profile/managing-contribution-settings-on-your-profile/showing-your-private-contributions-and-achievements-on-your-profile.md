---
title: Showing your private contributions and achievements on your profile
intro: 'Tu perfil {% data variables.product.product_name %} muestra un gráfico de las contribuciones a tu repositorio durante el último año. Puedes elegir mostrar actividad anonimizada desde repositorios {% ifversion fpt or ghes or ghec %}privados e internos{% else %}privados{% endif %}{% ifversion fpt or ghes or ghec %}adicionalmente a ala actividad de los repositorios públicos{% endif %}.'
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
---

Si publicas tus contribuciones privadas, las personas sin acceso a los repositorios privados en los que trabajas no podrán ver los detalles de tus contribuciones privadas. En su lugar, verán la cantidad de contribuciones privadas que has realizado durante un determinado día. Tus contribuciones públicas incluirán información detallada. Para obtener más información, consulta "[Ver contribuciones en tu página de perfil](/articles/viewing-contributions-on-your-profile-page)."

{% note %}

**Nota:** {% ifversion fpt or ghes or ghec %}En {% ifversion fpt or ghec %}{% data variables.product.prodname_dotcom_the_website %}{% elsif ghes %}{% data variables.product.product_name %}{% endif %}, las contribuciones públicas en tu perfil son visibles {% ifversion fpt or ghec %}para cualquiera en el mundo que pueda acceder a {% data variables.product.prodname_dotcom_the_website %}{% elsif ghes %}únicamente para otros usuarios de {% data variables.product.product_location%}{% endif %}.{% elsif ghae %}En {% data variables.product.prodname_ghe_managed %}, solo otros miembros de tu empresa pueden ver las contribuciones en tu perfil.{% endif %}

{% endnote %}

## Cambiar la visibilidad de tus contribuciones privadas

{% data reusables.profile.access_profile %}
1. Divulga u oculta tus contribuciones privadas en tu perfil:
    - Para publicitar tus contribuciones privadas, arriba de tu gráfico de contribuciones, utiliza el menú desplegable **Contribution settings** (Configuraciones de contribuciones) y selecciona **Private contributions** (Contribuciones privadas). Los visitantes verán tus recuentos de contribuciones privadas sin más detalles. ![Habilitar que los visitantes vean las contribuciones privadas desde el menú desplegable de configuraciones de contribuciones](/assets/images/help/profile/private-contributions-on.png)
    - Para ocultar tus contribuciones privadas, arriba de tu gráfico de contribuciones, utiliza el menú desplegable **Contribution settings** (Configuraciones de contribuciones) y anula la selección de **Private contributions** (Contribuciones privadas). Los visitantes únicamente verán tus contribuciones públicas. ![Habilitar que los visitantes vean las contribuciones privadas desde el menú desplegable de configuraciones de contribuciones](/assets/images/help/profile/private-contributions-off.png)

## Changing the visibility of Achievements

{% data reusables.user-settings.access_settings %}
1. Show or hide Achievements on your profile:
    - To show Achievements on your profile, navigate to **Profile settings**, and select the checkbox next to **Show Achievements on my profile.** ![Enable visitors to see Achievements from profile settings](/assets/images/achievements-profile-settings-off.png)
    - To hide Achievements from your profile, navigate to **Profile settings**, and unselect the checkbox next to **Show Achievements on my profile.** ![Hide Achievements from visitors in profile settings](/assets/images/achievements-profile-settings-on.png)

## Leer más

- "[Ver las contribuciones en tu página de perfil](/articles/viewing-contributions-on-your-profile-page)"
- "[¿Por qué mis contribuciones no se ven en mi perfil?](/articles/why-are-my-contributions-not-showing-up-on-my-profile)"
