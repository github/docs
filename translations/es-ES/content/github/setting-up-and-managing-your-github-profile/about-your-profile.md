---
title: Acerca de tu perfil
intro: 'La página de tu perfil le cuenta a las personas la historia de tu trabajo a través de los repositorios en los que te interesas, las colaboraciones que has realizado y las conversaciones que has tenido.'
redirect_from:
  - /articles/viewing-your-feeds/
  - /articles/profile-pages/
  - /articles/about-your-profile
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - Profiles
---

Puedes agregar información personal acerca de ti mismo en tu biobiografía, como lugares en los que has trabajado previamente, proyectos con los que has colaborado o intereses que tengas que a otras personas les pueda interesar conocer sobre tí. Para obtener más información, consulta "[Agregar una biografía en tu perfil](/articles/personalizing-your-profile/#adding-a-bio-to-your-profile)".

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.21" %}

{% data reusables.profile.profile-readme %}

![Archivo de README del perfil que se muestra en éste](/assets/images/help/repository/profile-with-readme.png)

{% endif %}

Las personas que visitan tu perfil ven una cronología de tu actividad de colaboración, como las propuestas y las solicitudes de extracción que has abierto, las confirmaciones que has realizado y las solicitudes de extracción que has revisado. Puedes elegir mostrar solo las contribuciones públicas o también incluir las contribuciones privadas, anonimizadas. Para obtener más información, consulta "[Ver las contribuciones en tu página de perfil](/articles/viewing-contributions-on-your-profile-page)" o "[Divulgar u ocultar tus contribuciones privadas en tu perfil](/articles/publicizing-or-hiding-your-private-contributions-on-your-profile)".

Las personas que visitan tu perfil también pueden ver la siguiente información.

- Repositorios y gists que te pertenezcan o en los que contribuyas. {% if currentVersion == "free-pro-team@latest" or enterpriseServerVersions contains currentVersion %}Puedes mostrar tu mejor trabajo si fijas los repositorios y gists a tu perfil. Para obtener más información, consulta la sección "[Anclar elementos en tu perfil](/github/setting-up-and-managing-your-github-profile/pinning-items-to-your-profile)".{% endif %}
- Repositorios que has destacado. Para obtener más información, consulta la sección "[Guardar repositorios con estrellas](/articles/saving-repositories-with-stars/)".
- Una descripción general de tu actividad en organizaciones, repositorios y equipos en los que eres más activo. Para obtener más información, consulta la sección "[Mostrar un resumen de tu actividad en tu perfil](/articles/showing-an-overview-of-your-activity-on-your-profile).{% if currentVersion == "free-pro-team@latest" %}
- Las insignias que muestran si utilizas {% data variables.product.prodname_pro %} o si participas en programas como {% data variables.product.prodname_arctic_vault %}, {% data variables.product.prodname_sponsors %}, o el programa de desarrollador de {% data variables.product.company_short %}. Para obtener más información, consulta la sección "[Personalizar tu perfil](/github/setting-up-and-managing-your-github-profile/personalizing-your-profile#displaying-badges-on-your-profile)".{% endif %}

También puedes establecer un estado en tu perfil para brindar información sobre tu disponibilidad. Para obtener más información, consulta "[Configurar un estado](/articles/personalizing-your-profile/#setting-a-status)".

### Leer más

- "[¿Cómo configuro mi foto de perfil?](/articles/how-do-i-set-up-my-profile-picture)"
- "[Divulgar u ocultar tus contribuciones privadas en tu perfil](/articles/publicizing-or-hiding-your-private-contributions-on-your-profile)"
- "[Ver las contribuciones en tu perfil](/articles/viewing-contributions-on-your-profile)"
