---
title: Ver contribuciones en tu perfil
intro: Your {% data variables.product.product_name %} profile shows off {% ifversion fpt or ghes or ghec %}your pinned repositories as well as{% endif %} a graph of your repository contributions over the past year.
redirect_from:
- /articles/viewing-contributions
- /articles/viewing-contributions-on-your-profile-page
- /articles/viewing-contributions-on-your-profile
- /github/setting-up-and-managing-your-github-profile/viewing-contributions-on-your-profile
- /github/setting-up-and-managing-your-github-profile/managing-contribution-graphs-on-your-profile/viewing-contributions-on-your-profile
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
- Profiles
shortTitle: View contributions
ms.openlocfilehash: fccf691bc2fa865dd6ebcdebd112cbe6da02e0b5
ms.sourcegitcommit: 67064b14c9d4d18819db8f6398358b77a1c8002a
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 05/17/2022
ms.locfileid: "145115274"
---
{% ifversion fpt or ghes or ghec %}El gráfico de contribuciones muestra la actividad de los repositorios públicos. {% endif %}Puede elegir que se muestre la actividad tanto de {% ifversion fpt or ghes or ghec %}los repositorios públicos como la de {% endif %}los privados, con detalles específicos de su actividad anonimizada en los repositorios privados. Para obtener más información, vea "[Divulgar u ocultar las contribuciones privadas en el perfil](/articles/publicizing-or-hiding-your-private-contributions-on-your-profile)".

{% note %}

**Nota**: Las confirmaciones solo aparecerán en su gráfico de contribuciones si la dirección de correo electrónico que ha usado para crear las confirmaciones está conectada a su cuenta en {% data variables.product.product_name %}. Para más información, vea "¿[Por qué mis contribuciones no aparecen en mi perfil?](/articles/why-are-my-contributions-not-showing-up-on-my-profile#your-local-git-commit-email-isnt-connected-to-your-account)".

{% endnote %}

## <a name="what-counts-as-a-contribution"></a>Qué cuenta como una contribución

En tu página de perfil, determinadas acciones cuentan como contribuciones:

- Confirmar en la rama predeterminada de un repositorio o en la rama `gh-pages`
- Abrir una incidencia
- Iniciar un debate
- Responder a un debate
- Proponer una solicitud de extracción
- Enviar una revisión de solicitud de incorporación de cambios{% ifversion ghes or ghae %}
- Crear de forma conjunta confirmaciones en la rama predeterminada de un repositorio o en la rama `gh-pages`{% endif %}

{% data reusables.pull_requests.pull_request_merges_and_contributions %}

## <a name="popular-repositories"></a>Repositorios populares

Esta sección muestra tus repositorios con la mayor cantidad de observadores. {% ifversion fpt or ghes or ghec %} Una vez [anclados los repositorios a su perfil](/articles/pinning-repositories-to-your-profile), esta sección cambiará a "Pinned repositories" (Repositorios anclados).{% endif %}

![Repositorios populares](/assets/images/help/profile/profile_popular_repositories.png)

{% ifversion fpt or ghes or ghec %}

## <a name="pinned-repositories"></a>Repositorios anclados

Esta sección muestra hasta seis repositorios públicos y puede incluir tus repositorios y los repositorios a los que has contribuidos. Para ver fácilmente detalles importantes sobre los repositorios que ha seleccionado para mostrar, cada repositorio en esta sección incluye un resumen del trabajo que se está realizando, la cantidad de [estrellas](/articles/saving-repositories-with-stars/) que el repositorio ha recibido y el lenguaje de programación principal utilizado en el repositorio. Para obtener más información, vea "[Anclar repositorios a su perfil](/articles/pinning-repositories-to-your-profile)".

![Repositorios anclados](/assets/images/help/profile/profile_pinned_repositories.png)

{% endif %}

## <a name="contributions-calendar"></a>Calendario de contribuciones

Tu calendario de contribuciones muestra tu actividad de contribuciones.

### <a name="viewing-contributions-from-specific-times"></a>Ver contribuciones de momentos específicos

- Haz clic en el cuadrado de un día para mostrar las contribuciones realizadas durante ese período de 24 horas.
- Presione *Mayús* y haga clic en el cuadrado de otro día para mostrar las contribuciones realizadas durante ese periodo de tiempo.

{% note %}

**Nota**: puede seleccionar hasta un rango de un mes en su calendario de contribuciones. Si seleccionas un rango de tiempo más amplio, solo mostraremos un mes de contribuciones.

{% endnote %}

![Tu gráfico de contribuciones](/assets/images/help/profile/contributions_graph.png)

### <a name="how-contribution-event-times-are-calculated"></a>Cómo se calculan los momentos de los eventos de las contribuciones

Las marcas horarias se calculan de forma diferente para las confirmaciones y las solicitudes de extracción:
- Las **confirmaciones** utilizan la información de la zona horaria en la marca de tiempo de la confirmación. Para obtener más información, vea "[Solucionar problemas de confirmaciones en la escala de tiempo](/articles/troubleshooting-commits-on-your-timeline)".
- Las **solicitudes de incorporación de cambios** y las **incidencias** abiertas en {% data variables.product.product_name %} usan la zona horaria del explorador. Las abiertas mediante la API usan la marca de tiempo o la zona horaria [especificada en la llamada API](https://developer.github.com/changes/2014-03-04-timezone-handling-changes).

## <a name="activity-overview"></a>Información general de las actividades

{% data reusables.profile.activity-overview-summary %} Para obtener más información, vea "[Mostrar información general sobre la actividad en el perfil](/articles/showing-an-overview-of-your-activity-on-your-profile)".

![Sección de resumen de actividad en tu perfil](/assets/images/help/profile/activity-overview-section.png)

Las organizaciones que se muestran en el resumen de la actividad se priorizan de acuerdo con qué tan activo estés en la organización. Si hace @mention una organización en su biografía de perfil y es miembro de una organización, esa organización se prioriza en la información general de la actividad. Para obtener más información, vea "[Mencionar personas y equipos](/articles/basic-writing-and-formatting-syntax/#mentioning-people-and-teams)" o "[Agregar una biografía a su perfil](/articles/adding-a-bio-to-your-profile/)".

## <a name="contribution-activity"></a>Actividad de contribución

La sección de actividad de contribuciones incluye una cronología detallada de tu trabajo, incluyendo confirmaciones que has realizado o de las que eres coautor, solicitudes de extracción que propusiste y propuestas que abriste. Puede ver sus contribuciones a lo largo del tiempo haciendo clic en **Show more activity** (Mostrar más actividad) en la parte inferior de su actividad de contribuciones o en el año que le interesa ver en el lado derecho de la página. Momentos importantes, como la fecha en que te uniste a una organización, propusiste tu primera solicitud de extracción o abriste una propuesta de alto perfil, se resaltan en tu actividad de contribuciones. Si no puedes ver determinados eventos en tu cronología, asegúrate de que todavía tengas acceso a la organización o al repositorio donde ocurrió el evento.

![Filtro de tiempo de actividad de contribuciones](/assets/images/help/profile/contributions_activity_time_filter.png)

## <a name="viewing-contributions-from--data-variablesproductprodname_enterprise--on--data-variablesproductprodname_dotcom_the_website-"></a>Ver contribuciones de {% data variables.product.prodname_enterprise %} en {% data variables.product.prodname_dotcom_the_website %}

Si utiliza {% ifversion fpt or ghec %}{% data variables.product.prodname_ghe_server %}{% ifversion ghae %} o {% data variables.product.prodname_ghe_managed %}{% endif %}{% else %}{% data variables.product.product_name %}{% endif %} y su propietario de empresa habilita las {% data variables.product.prodname_unified_contributions %}, puede enviar los recuentos de contribución de empresa desde su perfil de {% data variables.product.prodname_dotcom_the_website %}. Para obtener más información, consulta "[Enviar contribuciones empresariales a tu perfil de {% data variables.product.prodname_dotcom_the_website %}](/account-and-profile/setting-up-and-managing-your-github-profile/managing-contribution-graphs-on-your-profile/sending-enterprise-contributions-to-your-githubcom-profile)".

