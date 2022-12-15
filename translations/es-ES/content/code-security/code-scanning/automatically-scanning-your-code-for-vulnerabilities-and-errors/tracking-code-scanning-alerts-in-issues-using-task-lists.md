---
title: Rastrear alertas del escaneo de código en propuestas utilizando listas de tareas
shortTitle: Track alerts in issues
intro: Puedes agregar alertas de escaneo de código a las propuestas utilizando listas de tareas. Esto facilita el crear un plan para trabajo de desarrollo que incluya la corrección de alertas.
product: '{% data reusables.gated-features.code-scanning %}'
permissions: 'If you have write permission to a repository you can track {% data variables.product.prodname_code_scanning %} alerts in issues using task lists.'
versions:
  feature: code-scanning-task-lists
type: how_to
topics:
  - Advanced Security
  - Code scanning
  - Alerts
  - Repositories
  - Issues
ms.openlocfilehash: a5112bc5982415865a47d752af4e980a2e3d12ea
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/10/2022
ms.locfileid: '145116841'
---
{% data reusables.code-scanning.beta-alert-tracking-in-issues %}

## Acerca de rastrear alertas del {% data variables.product.prodname_code_scanning %} en las propuestas

{% data reusables.code-scanning.github-issues-integration %}

También puedes crear una propuesta nueva para rastrear una alerta:
- Desde una alerta del {% data variables.product.prodname_code_scanning %}, la cual agregue dicha alerta automáticamente a una lista de tareas en la propuesta nueva. Para más información, vea "[Creación de una incidencia de seguimiento a partir de una alerta de {% data variables.product.prodname_code_scanning %}](#creating-a-tracking-issue-from-a-code-scanning-alert)" a continuación.

- A través de la API, como normalmente lo harías y luego, proporciona el enlace del escaneo de código dentro del cuerpo de la propuesta. Debes utilizar la siguiente sintaxis de lista de tareas para crear la relación rastreada: 
   - `- [ ] <full-URL- to-the-code-scanning-alert>`
   - Por ejemplo, si agrega `- [ ] https://github.com/octocat-org/octocat-repo/security/code-scanning/17` a una incidencia, la incidencia realizará el seguimiento de la alerta de análisis de código que tiene un número de identificador de 17 en la pestaña "Seguridad" del repositorio `octocat-repo` en la organización `octocat-org`.

Ahora puedes utilizar más de una propuesta para rastrear la misma alerta del {% data variables.product.prodname_code_scanning %} y las propuestas pueden pertenecer a repositorios diferentes de aquél en donde se encontró la alerta del {% data variables.product.prodname_code_scanning %}.


{% data variables.product.product_name %} proporciona indicaciones visuales en diversas ubicaciones de la interfaz de usuario para indicar cuando estás rastreando alertas del {% data variables.product.prodname_code_scanning %} en las propuestas.

- La página de lista de alertas del escaneo de código mostrará qué alertas se rastrean en las propuestas para que puedas ver rápidamente qué alertas aún requieren procesamiento.

  ![Píldora rastreada en la página de alerta del escaneo de código](/assets/images/help/repository/code-scanning-alert-list-tracked-issues.png)

- También se mostrará una sección de "rastreados" en la página de la alerta correspondiente. 

  {% ifversion fpt or ghec or ghes > 3.4 or ghae-issue-6249 %} ![Sección de seguimiento en la página de alertas de análisis de código](/assets/images/help/repository/code-scanning-alert-tracked-in-pill.png) {% else %} ![Tracked in section on code scanning alert page](/assets/images/enterprise/3.4/repository/code-scanning-alert-tracked-in-pill.png) {% endif %}

- En la propuesta rastreadora, {% data variables.product.prodname_dotcom %} mostrará un icono de insignia de seguridad en la lista de tareas y en la tarjeta de visita virtual. 
  
  {% note %}

  Únicamente los usuarios con permisos de escritura en el repositorio verán la URL completa para la alerta en la propuesta, así como en la tarjeta de visita virtual. Para los usuarios con permisos de lectura en el repositorio, o aquellos sin ningún permiso, la alerta aparecerá como una URL simple.

  {% endnote %}
  
  El color del icono es gris porque alguna alerta tiene el estado de "abierta" o "cerrada" en cada rama. Esta propuesta rastrea una alerta para que esta no pueda tener ningún estado de abierto/cerrado en la propuesta. Si la alerta se cierra en una de las ramas, el color del icono no cambiará.

  ![Tarjeta de visita virtual en la propuesta rastreadora](/assets/images/help/repository/code-scanning-tracking-issue-hovercard.png)

El estado de la alerta rastreada no cambiará si cambias el estado de la casilla de verificación del elemento de la lista de tareas correspondiente (marcado/sin marcar) en la propuesta.

## Crear una propuesta rastreadora desde una alerta de escaneo de código

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-security %} {% data reusables.repositories.sidebar-code-scanning-alerts %} {% ifversion fpt or ghes or ghae %} {% data reusables.code-scanning.explore-alert %}
1. Opcionalmente, para encontrar la alerta a rastrear, puedes utilizar la búsqueda de texto libre o los menús desplegables para filtrar y ubicar la alerta. Para más información, vea "[Administración de alertas de análisis de código para el repositorio](/code-security/code-scanning/automatically-scanning-your-code-for-vulnerabilities-and-errors/managing-code-scanning-alerts-for-your-repository#filtering-code-scanning-alerts)".
{% endif %}
1. En la parte superior de la página, en el lado derecho, haga clic en **Crear incidencia**. 
   {% ifversion fpt or ghec or ghes > 3.4 or ghae-issue-6249 %} ![Creación de una incidencia de seguimiento para la alerta de análisis de código](/assets/images/help/repository/code-scanning-create-issue-for-alert.png) {% else %} ![Create a tracking issue for the code scanning alert](/assets/images/enterprise/3.4/repository/code-scanning-create-issue-for-alert.png) {% endif %} {% data variables.product.prodname_dotcom %} crea de forma automática una incidencia y agrega la alerta como un elemento de la lista de tareas.
   {% data variables.product.prodname_dotcom %} llena la propuesta previamente:
   - El título contiene el nombre de la alerta del {% data variables.product.prodname_code_scanning %}.
   - El cuerpo contiene el elemento de la lista de tareas con la URL completa para la alerta del {% data variables.product.prodname_code_scanning %}. 
2. Opcionalmente, edita el título y el cuerpo de la propuesta.
   {% warning %}

    **Advertencia:** Es posible que quiera editar el título de la incidencia, ya que puede exponer información de seguridad. También puedes editar el cuerpo de la propuesta, pero no edites el elemento de la lista de tareas o la propuesta ya no podrá rastrear a la alerta.
   {% endwarning %}

   ![Propuesta de rastreo nueva para la alerta de escaneo de código](/assets/images/help/repository/code-scanning-new-tracking-issue.png)
3. Haga clic en **Enviar nueva incidencia**.
