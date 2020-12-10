---
title: Ver contribuciones en tu perfil
intro: 'Tu perfil {% data variables.product.product_name %} muestra tus repositorios anclados y el gráfico de las contribuciones de tu repositorio durante el último año.'
redirect_from:
  - /articles/viewing-contributions/
  - /articles/viewing-contributions-on-your-profile-page/
  - /articles/viewing-contributions-on-your-profile
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

Tu gráfico de contribución muestra la actividad de los repositorios públicos. Puedes elegir mostrar la actividad desde los repositorios públicos y privados, con detalles específicos de tu actividad en los repositorios privados de forma anónima. Para obtener más información, consulte "[Publicar u ocultar tus contribuciones privadas en tu perfil](/articles/publicizing-or-hiding-your-private-contributions-on-your-profile)."

{% note %}

**Nota:** las confirmaciones únicamente aparecerán en tu gráfico de contribución si has agregado [ la dirección de correo electrónico que utilizaste en tu configuración local de Git para configurar el correo electrónico de {% data variables.product.product_name %}](/articles/adding-an-email-address-to-your-github-account). Para obtener más información, consulta"[¿Por qué mis contribuciones no se muestran en mi perfil?](/articles/why-are-my-contributions-not-showing-up-on-my-profile#you-havent-added-your-local-git-commit-email-to-your-profile)"

{% endnote %}

### Qué cuenta como una contribución

En tu página de perfil, determinadas acciones cuentan como contribuciones:

- Confirmar cambios en una rama por defecto de un repositorio o en la rama `gh-pages`
- Abrir una propuesta
- Proponer una solicitud de extracción
- Enviar una revisión de solicitud de extracción{% if currentVersion != "free-pro-team@latest" %}
- Confirmar como coautor en la rama por defecto de un repositorio o en la rama `gh-pages`{% endif %}

{% data reusables.pull_requests.pull_request_merges_and_contributions %}

### Repositorios populares

Esta sección muestra tus repositorios con la mayor cantidad de observadores. Una vez que anclas repositorios [en tu perfil](/articles/pinning-repositories-to-your-profile), esta sección cambiará a "Pinned repositories" (Repositorios anclados).

![Repositorios populares](/assets/images/help/profile/profile_popular_repositories.png)

### Repositorios anclados

Esta sección muestra hasta seis repositorios públicos y puede incluir tus repositorios y los repositorios a los que has contribuidos. Para ver fácilmente detalles importantes sobre los repositorios que has seleccionado para mostrar, cada repositorio en esta sección incluye un resumen del trabajo que se está realizando, la cantidad de [estrellas](/articles/saving-repositories-with-stars/) que el repositorio ha recibido y el lenguaje de programación principal utilizado en el repositorio. Para obtener más información, consulta "[Anclar repositorios en tu perfil](/articles/pinning-repositories-to-your-profile)."

![Repositorios anclados](/assets/images/help/profile/profile_pinned_repositories.png)

### Calendario de contribuciones

Tu calendario de contribuciones muestra tu actividad de contribuciones.

#### Ver contribuciones de momentos específicos

- Haz clic en el cuadrado de un día para mostrar las contribuciones realizadas durante ese período de 24 horas.
- Presiona *Shift* y haz clic en el cuadrado de otro día para mostrar las contribuciones realizadas durante ese período de tiempo.

{% note %}

**Nota:** puedes seleccionar hasta un rango de un mes en tu calendario de contribuciones. Si seleccionas un período de tiempo más extenso, únicamente se mostrarán las contribuciones de un mes.

{% endnote %}

![Tu gráfico de contribuciones](/assets/images/help/profile/contributions_graph.png)

#### Cómo se calculan los momentos de los eventos de las contribuciones

Las marcas horarias se calculan de forma diferente para las confirmaciones y las solicitudes de extracción:
- **Confirmaciones** utilizan la información de la zona horaria en la marca de tiempo de la confirmación. Para obtener más información, consulta "[Solución de problemas con confirmaciones en tu cronología](/articles/troubleshooting-commits-on-your-timeline)."
- **Las solicitudes de extracción** y **las propuestas** abiertas en {% data variables.product.product_name %} utilizan la zona horaria de tu navegador. Aquellas abiertas a través de API utilizan la marca horaria o la zona horaria [especificada en la llamada de API](https://developer.github.com/changes/2014-03-04-timezone-handling-changes).

### Resumen de la actividad

{% data reusables.profile.activity-overview-summary %} Para obtener más información, consulta "[Mostrar un resumen de tu actividad en tu perfil](/articles/showing-an-overview-of-your-activity-on-your-profile)."

![Sección de resumen de actividad en el perfil](/assets/images/help/profile/activity-overview-section.png)

Las organizaciones que se muestran en el resumen de la actividad se priorizan de acuerdo con qué tan activo estés en la organización. Si mencionas una organización en tu biografía de perfil y eres miembro de una organización, entonces esa organización se prioriza en el resumen de la actividad. Para obtener más información, consulta “[Mencionar personas y equipos](/articles/basic-writing-and-formatting-syntax/#mentioning-people-and-teams)” o "[Agregar una biografía en tu perfil](/articles/adding-a-bio-to-your-profile/)."

### Actividad de contribución

La sección de actividad de contribuciones incluye una cronología detallada de tu trabajo, incluyendo confirmaciones que has realizado o de las que eres coautor, solicitudes de extracción que propusiste y propuestas que abriste. Puedes ver tus contribuciones en el tiempo al hacer clic en **Show more activity (Mostrar más actividad)** en la parte inferior de tu actividad de contribuciones o al hacer clic en el año que te interesa ver hacia la derecha de la página. Momentos importantes, como la fecha en que te uniste a una organización, propusiste tu primera solicitud de extracción o abriste una propuesta de alto perfil, se resaltan en tu actividad de contribuciones. Si no puedes ver determinados eventos en tu cronología, asegúrate de que todavía tengas acceso a la organización o al repositorio donde ocurrió el evento.

![Filtro de tiempo de actividad de contribuciones](/assets/images/help/profile/contributions_activity_time_filter.png)

### Ver contribuciones de {% data variables.product.product_location_enterprise %} en {% data variables.product.prodname_dotcom_the_website %}

Si el administrador de tu sitio ha habilitado {% data variables.product.prodname_unified_contributions %}, puedes enviar conteos de contribuciones {% data variables.product.prodname_enterprise %} a tu perfil {% data variables.product.prodname_dotcom_the_website %}. Para obtener más información, consulta "[Enviar tus contribuciones {% data variables.product.prodname_ghe_server %} a tu {% data variables.product.prodname_dotcom_the_website %}](/articles/sending-your-github-enterprise-server-contributions-to-your-github-com-profile)."

### Leer más

- "[Ver las contribuciones en tu página de perfil](/articles/viewing-contributions-on-your-profile-page)"
- "[¿Por qué mis contribuciones no se ven en mi perfil?](/articles/why-are-my-contributions-not-showing-up-on-my-profile)"
- "[Divulgar u ocultar tus contribuciones privadas en tu perfil](/articles/publicizing-or-hiding-your-private-contributions-on-your-profile)"
- "[Mostrar una revisión de tu actividad en tu perfil](/articles/showing-an-overview-of-your-activity-on-your-profile)."
