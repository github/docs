---
title: Divulgar u ocultar tus contribuciones privadas en tu perfil
intro: 'Tu perfil {% data variables.product.product_name %} muestra un gráfico de las contribuciones a tu repositorio durante el último año. Puedes elegir mostrar la actividad anonimizada de los repositorios{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.19" %}privados e internos{% else %}privados{% endif %}{% if currentVersion == "free-pro-team@latest" or enterpriseServerVersions contains currentVersion %} adicionalmente a aquella de los repositorios públicos{% endif %}.'
redirect_from:
  - /articles/publicizing-or-hiding-your-private-contributions-on-your-profile
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---

Si publicas tus contribuciones privadas, las personas sin acceso a los repositorios privados en los que trabajas no podrán ver los detalles de tus contribuciones privadas. En su lugar, verán la cantidad de contribuciones privadas que has realizado durante un determinado día. Tus contribuciones públicas incluirán información detallada. Para obtener más información, consulta "[Ver contribuciones en tu página de perfil](/articles/viewing-contributions-on-your-profile-page)".

### Cambiar la visibilidad de tus contribuciones privadas

Por defecto, los visitantes únicamente ven las contribuciones públicas en tu perfil.

{% data reusables.profile.access_profile %}
2. Divulga u oculta tus contribuciones privadas en tu perfil:
    - Para publicitar tus contribuciones privadas, arriba de tu gráfico de contribuciones, utiliza el menú desplegable **Contribution settings** (Configuraciones de contribuciones) y selecciona **Private contributions** (Contribuciones privadas). Los visitantes verán tus recuentos de contribuciones privadas sin más detalles. ![Habilitar que los visitantes vean las contribuciones privadas desde el menú desplegable de configuraciones de contribuciones](/assets/images/help/profile/private-contributions-on.png)
    - Para ocultar tus contribuciones privadas, arriba de tu gráfico de contribuciones, utiliza el menú desplegable **Contribution settings** (Configuraciones de contribuciones) y anula la selección de **Private contributions** (Contribuciones privadas). Los visitantes únicamente verán tus contribuciones públicas. ![Habilitar que los visitantes vean las contribuciones privadas desde el menú desplegable de configuraciones de contribuciones](/assets/images/help/profile/private-contributions-off.png)

### Further reading

- "[Ver las contribuciones en tu página de perfil](/articles/viewing-contributions-on-your-profile-page)"
- "[¿Por qué mis contribuciones no se ven en mi perfil?](/articles/why-are-my-contributions-not-showing-up-on-my-profile)"
