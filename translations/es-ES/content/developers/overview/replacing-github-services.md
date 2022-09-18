---
title: Reemplazar los GitHub Services
intro: 'Si aún estás dependiendo de los {% data variables.product.prodname_dotcom %} Services obsoletizados, aprende cómomigrar los ganchos de tu servicio a webhooks.'
redirect_from:
  - /guides/replacing-github-services
  - /v3/guides/automating-deployments-to-integrators
  - /v3/guides/replacing-github-services
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
topics:
  - API
ms.openlocfilehash: ddbe9552b1520f2238e531afca06e449ba2f2ff8
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/10/2022
ms.locfileid: '145112425'
---
Hemos obsoletizado los GitHub Services para favorecer la integración con los webhooks. Esta guía te ayuda a hacer la transición hacia los webhooks de GitHub Services. Para obtener más información sobre este anuncio, consulte esta [entrada de blog](https://developer.github.com/changes/2018-10-01-denying-new-github-services).

{% note %}

Como una alternativa al servicio de correo electrónico, ahora puedes comenzar a utilizar las notificaciones para las cargas de información a tu repositorio. Consulte "[Acerca de las notificaciones por correo electrónico para los envíos de cambios en el repositorio](/github/receiving-notifications-about-activity-on-github/about-email-notifications-for-pushes-to-your-repository/)" para obtener información sobre cómo configurar las notificaciones por correo electrónico de confirmación.

{% endnote %}

## Línea del tiempo de la obsoletización

- **1 de octubre de 2018**: GitHub dejó de permitir a los usuarios instalar servicios. Eliminamos los GitHub Services de la interface de usuario de GitHub.com.
- **29 de enero de 2019**: como alternativa al servicio de correo electrónico, ahora puede comenzar a utilizar las notificaciones por correo electrónico para los envíos de cambios en el repositorio. Consulte "[Acerca de las notificaciones por correo electrónico para los envíos de cambios en el repositorio](/github/receiving-notifications-about-activity-on-github/about-email-notifications-for-pushes-to-your-repository/)" para obtener información sobre cómo configurar las notificaciones por correo electrónico de confirmación.
- **31 de enero de 2019**: GitHub dejará de ofrecer eventos de los servicios instalados en GitHub.com.

## Antecedentes de GitHub Services

GitHub Services (a veces denominado enlaces de servicio) es el método heredado de integración en el que GitHub hospeda una parte de los servicios del integrador desde [el `github-services` repositorio](https://github.com/github/github-services). Las acciones que se realizan en GitHub activan estos servicios, y puedes utilizarlos a su vez para activar acciones fuera de GitHub.

{% ifversion ghes %}
## Encontrar los repositorios que utilizan GitHub Services
Proporcionamos un script de línea de comandos que te ayuda a identificar los repositorios de tu aplicativo que utilizan GitHub Services. Para obtener más información, consulte [ghe-legacy-github-services-report](/enterprise/{{currentVersion}}/admin/articles/command-line-utilities/#ghe-legacy-github-services-report).{% endif %}

## GitHub Services vs webhooks

Las diferencias clave entre GitHub Services y los webhooks son:
- **Configuración**: GitHub Services tiene opciones de configuración específicas de servicios, mientras que los webhooks se configuran simplemente especificando una URL y un conjunto de eventos.
- **Lógica personalizada**: GitHub Services puede tener una lógica personalizada que responda con acciones múltiples tras procesar un solo evento, mientras que los webhooks no tienen lógica personalizada.
- **Tipos de solicitudes**: GitHub Services pueden realizar tanto solicitudes HTTP como de otro tipo, mientras que los webhooks solo realizan solicitudes HTTP.

## Reemplazar los Servicios con webhooks

Para reemplazar los GitHub Services con Webhooks:

1. Identifique los eventos de webhook pertinentes a los que deberá suscribirse desde [esta lista](/webhooks/#events).

2. Cambia tu configuración dependiendo de cómo utilizas los GitHub Services actualmente:

   - **Aplicaciones de GitHub**: actualiza los permisos y eventos suscritos de la aplicación para configurarla de manera que reciba los eventos de webhook correspondientes.
   - **Aplicaciones de OAuth**: solicita los alcances `repo_hook` o `org_hook` para administrar los eventos pertinentes en nombre de los usuarios.
   - **Proveedores de GitHub Services**: solicita que los usuarios configuren manualmente un webhook con los eventos pertinentes que se le envíen, o aprovecha esta oportunidad para crear una aplicación que administre esta funcionalidad. Para obtener más información, consulte "[Acerca de las aplicaciones](/apps/about-apps/)".

3. Migra las configuraciones adicionales desde fuera de GitHub. Algunos GitHub Services necesitan configuraciones personalizadas adicionales en la página de configuración dentro de GitHub. Si tu servicio hace esto, necesitarás migrar esta funcionalidad en tu aplicación o depender de GitHub o de las Apps de OAuth conforme esto aplique.

## Compatibilidad con {% data variables.product.prodname_ghe_server %}

- **{% data variables.product.prodname_ghe_server %} 2.17**: {% data variables.product.prodname_ghe_server %} versión 2.17 y posteriores dejarán de permitir que los administradores instalen servicios. Los aministradores podrán seguir modificando los ganchos de servicio existentes y recibiendo ganchos en el {% data variables.product.prodname_ghe_server %} con lanzamiento 2.17 hasta el 2.19. Como una alternativa al servicio de correo electrónico, podrás utilizar las notificaciones de correo electrónico para las cargas de información a tu repositorio en el {% data variables.product.prodname_ghe_server %} 2.17 y superior. Consulte [esta entrada de blog](https://developer.github.com/changes/2019-01-29-life-after-github-services) para obtener más información.
- **{% data variables.product.prodname_ghe_server %} 2.20**: {% data variables.product.prodname_ghe_server %} versión 2.20 y posteriores dejarán de entregar cualquier evento de los servicios instalados.

El lanzamiento 2.17 de {% data variables.product.prodname_ghe_server %} será el primer lanzamiento que no permite a los administradores instalar GitHub Services. Únicamente admitiremos los GitHub Services existentes hasta el lanzamiento 2.20 de {% data variables.product.prodname_ghe_server %}. También aceptaremos cualquier parche crítico para tu Github Service que se ejecute en el {% data variables.product.prodname_ghe_server %} hasta el 1 de octubre de 2019.

## Migrarte con nuestra ayuda

Si tiene alguna pregunta, [póngase en contacto con nosotros](https://github.com/contact?form%5Bsubject%5D=GitHub+Services+Deprecation).

Como un resumen de alto nivel, el proceso de migración involucra habitualmente:
  - Identificar cómo y dónde tu producto está utilizando los GitHub Services.
  - Identificar los eventos de webhook correspondientes que necesites configurar para poder migrarlos a webhooks sencillos.
  - Implementación del diseño con [{% data variables.product.prodname_oauth_apps %}](/apps/building-oauth-apps/) o [{% data variables.product.prodname_github_apps %}. Se prefieren las {% data variables.product.prodname_github_apps %}](/apps/building-github-apps/). Para obtener más información sobre por qué se prefieren las {% data variables.product.prodname_github_apps %}, consulte "[Motivos para cambiar a {% data variables.product.prodname_github_apps %}](/apps/migrating-oauth-apps-to-github-apps/#reasons-for-switching-to-github-apps)".
