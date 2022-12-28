---
title: Configurar el escaneo de código en un repositorio
shortTitle: Set up code scanning
intro: 'Puedes configurar el {% data variables.product.prodname_code_scanning %} si agregas un flujo de trabajo a tu repositorio.'
product: '{% data reusables.gated-features.code-scanning %}'
permissions: 'If you have write permissions to a repository, you can set up or configure {% data variables.product.prodname_code_scanning %} for that repository.'
redirect_from:
  - /github/managing-security-vulnerabilities/configuring-automated-code-scanning
  - /github/finding-security-vulnerabilities-and-errors-in-your-code/enabling-code-scanning
  - /github/finding-security-vulnerabilities-and-errors-in-your-code/enabling-code-scanning-for-a-repository
  - /github/finding-security-vulnerabilities-and-errors-in-your-code/setting-up-code-scanning-for-a-repository
  - /code-security/secure-coding/setting-up-code-scanning-for-a-repository
  - /code-security/secure-coding/automatically-scanning-your-code-for-vulnerabilities-and-errors/setting-up-code-scanning-for-a-repository
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: how_to
topics:
  - Advanced Security
  - Code scanning
  - Actions
  - Repositories
ms.openlocfilehash: 7efa88fe860576401bb152f8ed29e56fc9feb56d
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 10/25/2022
ms.locfileid: '148109869'
---
{% data reusables.code-scanning.beta %} {% data reusables.code-scanning.enterprise-enable-code-scanning-actions %}

## Opciones para configurar el {% data variables.product.prodname_code_scanning %}

Tú decides cómo generar las alertas del {% data variables.product.prodname_code_scanning %} y qué herramientas utilizar a nivel de repositorio. {% data variables.product.product_name %} te proporciona compatibilidad total e integrada para el análisis de {% data variables.product.prodname_codeql %} y también es compatible con el análisis de herramientas de terceros. Para más información, vea "[Acerca de {% data variables.product.prodname_code_scanning %}](/code-security/secure-coding/about-code-scanning#about-tools-for-code-scanning)".

{% data reusables.code-scanning.enabling-options %}

{% ifversion fpt or ghes > 3.4 or ghae > 3.4 or ghec %} {% data reusables.code-scanning.about-analysis-origins-link %} {% endif %}

{% ifversion ghes or ghae %} {% note %}

**Nota:** Si quiere usar el análisis de CodeQL, tenga en cuenta que en este artículo se describen las características disponibles con la versión de la acción de CodeQL y el paquete de la CLI de CodeQL asociado que se incluyen en la versión inicial de esta versión de {% data variables.product.product_name %}. Si en la empresa se usa una versión más reciente de la acción CodeQL, vea el [artículo {% data variables.product.prodname_ghe_cloud %}](/enterprise-cloud@latest/code-security/code-scanning/automatically-scanning-your-code-for-vulnerabilities-and-errors/setting-up-code-scanning-for-a-repository) para obtener información sobre las características más recientes. {% ifversion not ghae %} Para obtener información sobre el uso de la versión más reciente, consulte "[Configuración del análisis de código para el dispositivo](/admin/advanced-security/configuring-code-scanning-for-your-appliance#configuring-codeql-analysis-on-a-server-without-internet-access)".{% endif %}

{% endnote %} {% endif %}

{% ifversion ghae %}
## Prerrequisitos

Antes de configurar el {% data variables.product.prodname_code_scanning %} para un repositorio, debes asegurarte de que haya por lo menos un ejecutor auto-hospedado de {% data variables.product.prodname_actions %} disponible para este.

Los administradores propietarios de empresas, de organizaciones y de repositorios pueden agregar ejecutores auto-hospedados. Para más información, vea "[Acerca de los ejecutores autohospedados](/actions/hosting-your-own-runners/about-self-hosted-runners)" y "[Adición de ejecutores autohospedados](/actions/hosting-your-own-runners/adding-self-hosted-runners)".
{% endif %}

{% ifversion fpt or ghec %}
## Configurar el {% data variables.product.prodname_code_scanning %} utilizando flujos de trabajo iniciales

{% data reusables.advanced-security.starter-workflows-beta %}

{% ifversion ghes or ghae %} {% note %}

**Nota:** En este artículo se describen las características disponibles con la versión de la acción CodeQL y el paquete CodeQL CLI asociado que se incluye en la versión inicial de esta versión de {% data variables.product.product_name %}. Si en la empresa se usa una versión más reciente de la acción CodeQL, consulte el [artículo {% data variables.product.prodname_ghe_cloud %}](/enterprise-cloud@latest/code-security/code-scanning/automatically-scanning-your-code-for-vulnerabilities-and-errors/setting-up-code-scanning-for-a-repository) para obtener información sobre las características más recientes. {% ifversion not ghae %} Para obtener información sobre el uso de la versión más reciente, consulte "[Configuración del análisis de código para el dispositivo](/admin/advanced-security/configuring-code-scanning-for-your-appliance#configuring-codeql-analysis-on-a-server-without-internet-access)".{% endif %}

{% endnote %} {% endif %}

Los {% data reusables.advanced-security.starter-workflow-overview %} de los flujos de trabajo iniciales del {% data variables.product.prodname_code_scanning_capc %} solo están disponibles para tu repositorio si el {% data variables.product.prodname_code_scanning %} se encuentra habilitado.

{% data reusables.code-scanning.billing %}

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.actions-tab %}
1. Si el repositorio ya tiene al menos un flujo de trabajo configurado y en ejecución, haga clic en **Nuevo flujo de trabajo** y vaya al paso 5. Actualmente no hay flujos de trabajo configurados para el repositorio, ve al siguiente paso.
   ![Captura de pantalla del botón Nuevo flujo de trabajo](/assets/images/help/security/actions-new-workflow-button.png)
1. Desplácese hacia abajo hasta la categoría "Seguridad" y haga clic en **Configurar** en el flujo de trabajo que quiera configurar, o bien haga clic en **Ver todo** para ver todos los flujos de trabajo de seguridad disponibles.
   ![Captura de pantalla de la sección de seguridad de flujos de trabajo de Acciones](/assets/images/help/security/actions-workflows-security-section.png)
1. En el panel derecho de la página del flujo de trabajo, haga clic en **Documentación** y siga las instrucciones en pantalla para configurarlo de acuerdo a las necesidades.
   ![Captura de pantalla de la pestaña Documentación para flujos de trabajo de inicio](/assets/images/help/security/actions-workflows-documentation.png) Para más información, vea "[Uso de flujos de trabajo de inicio](/actions/using-workflows/using-starter-workflows#using-starter-workflows)" y "[Configuración de {% data variables.product.prodname_code_scanning %}](/code-security/code-scanning/automatically-scanning-your-code-for-vulnerabilities-and-errors/configuring-code-scanning)".

{% endif %}

## Configurar el {% data variables.product.prodname_code_scanning %} manualmente

{% ifversion fpt %}

Puedes configurar {% data variables.product.prodname_code_scanning %} en cualquier repositorio público en el que tengas acceso de escritura.

{% endif %}

{% data reusables.code-scanning.billing %} {% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-security %}
1. A la derecha de "{% data variables.product.prodname_code_scanning_capc %} alerts", haz clic en **Configurar {% data variables.product.prodname_code_scanning %}** . {% ifversion ghec or ghes or ghae %} Si falta {% data variables.product.prodname_code_scanning %}, debes pedir a un propietario de la organización o administrador del repositorio que habilite {% data variables.product.prodname_GH_advanced_security %}. {% endif %} Para más información, consulta "[Administración de la configuración de seguridad y análisis de la organización](/organizations/keeping-your-organization-secure/managing-security-and-analysis-settings-for-your-organization)" o "[Administración de la configuración de seguridad y análisis del repositorio](/github/administering-a-repository/managing-security-and-analysis-settings-for-your-repository)".
 ![Botón "Configurar {% data variables.product.prodname_code_scanning %}" a la derecha de "{% data variables.product.prodname_code_scanning_capc %}" en Información general sobre seguridad](/assets/images/help/security/overview-set-up-code-scanning.png)
4. En "Comenzar con {% data variables.product.prodname_code_scanning %}", haga clic en **Configurar este flujo de trabajo** en {% data variables.product.prodname_codeql_workflow %} o en un flujo de trabajo de terceros.
 ![Botón "Configurar este flujo de trabajo" en el título "Comenzar con {% data variables.product.prodname_code_scanning %}"](/assets/images/help/repository/code-scanning-set-up-this-workflow.png)Los flujos de trabajo solo se muestran si son pertinentes para los lenguajes de programación detectados en el repositorio. El {% data variables.product.prodname_codeql_workflow %} siempre se muestra, pero el botón "Configurar este flujo de trabajo" solo se habilita si el análisis de {% data variables.product.prodname_codeql %} es compatible con los lenguajes presentes en el repositorio.
5. Para personalizar la forma en que el {% data variables.product.prodname_code_scanning %} escanea tu còdigo, edita el flujo de trabajo.

   Generalmente, puedes confirmar el {% data variables.product.prodname_codeql_workflow %} sin hacerle ningùn cambio. Pero muchos de los flujos de trabajo de terceros necesitan una configuración adicional, así que lea los comentarios del flujo de trabajo antes de confirmar.

   Para más información, vea "[Configuración de {% data variables.product.prodname_code_scanning %}](/code-security/secure-coding/configuring-code-scanning)".
6. Use la lista desplegable **Start commit** (Iniciar confirmación) y escriba un mensaje de confirmación.
 ![Iniciar confirmación](/assets/images/help/repository/start-commit-commit-new-file.png)
7. Elija si quiere confirmar directamente en la rama predeterminada o crear una rama e iniciar una solicitud de incorporación de cambios.
 ![Elegir dónde realizar la confirmación](/assets/images/help/repository/start-commit-choose-where-to-commit.png)
8. Haga clic en **Commit new file** (Confirmar nuevo archivo) o **Propose new file** (Proponer nuevo archivo).

En el {% data variables.product.prodname_codeql_workflow %} predeterminado, el {% data variables.product.prodname_code_scanning %} se configura para analizar tu código cada vez que ya sea subas un cambio a la rama predeterminada o a cualquier rama protegida, o que levantes una solicitud de cambios contra la rama predeterminada. Como resultado, el {% data variables.product.prodname_code_scanning %} comenzarà ahora.

Los valores `on:pull_request` y `on:push` que se desencadenan para el examen de código son útiles para distintos propósitos. Para más información, vea "[Análisis de solicitudes de incorporación de cambios](/code-security/code-scanning/automatically-scanning-your-code-for-vulnerabilities-and-errors/configuring-code-scanning#scanning-pull-requests)" y "[Análisis al realizar la inserción](/code-security/code-scanning/automatically-scanning-your-code-for-vulnerabilities-and-errors/configuring-code-scanning#scanning-on-push)".
## Configuración del {% data variables.product.prodname_code_scanning %} por lotes

Puedes configurar el {% data variables.product.prodname_code_scanning %} en muchos repositorios al mismo tiempo utilizando un script. Si quiere usar un script para generar solicitudes de incorporación de cambios que agreguen un flujo de trabajo de {% data variables.product.prodname_actions %} a varios repositorios, vea el repositorio [`jhutchings1/Create-ActionsPRs`](https://github.com/jhutchings1/Create-ActionsPRs) para obtener un ejemplo mediante PowerShell, o bien [`nickliffen/ghas-enablement`](https://github.com/NickLiffen/ghas-enablement) para equipos que no tienen PowerShell y en su lugar quieren usar NodeJS.

## Visualizar la salida de registro del {% data variables.product.prodname_code_scanning %}

Después de configurar el {% data variables.product.prodname_code_scanning %} para tu repositorio, puedes observar la salida de las acciones mientras se ejecutan.

{% data reusables.repositories.actions-tab %}

  Veràs una lista que incluye una entrada para ejecutar el flujo de trabajo del {% data variables.product.prodname_code_scanning %}. El texto de la entrada es el título que le diste a tu mensaje de confirmación.

  ![Lista de acciones que muestran el flujo de trabajo del {% data variables.product.prodname_code_scanning %}](/assets/images/help/repository/code-scanning-actions-list.png)

1. Da clic en la entrada para el flujo de trabajo de {% data variables.product.prodname_code_scanning %}.

1. Da clic en el nombre del job situado a la izquierda. Por ejemplo, **Analizar (LENGUAJE)** .

  ![Registro de salida del flujo de trabajo del {% data variables.product.prodname_code_scanning %}](/assets/images/help/repository/code-scanning-logging-analyze-action.png)

1. Revisa la salida de registro de las acciones en este flujo de trabajo conforme se ejecutan.

1. Una vez que todos los jobs se completen, puedes ver los detalles de cualquier alerta del {% data variables.product.prodname_code_scanning %} que se hayan identificado. Para más información, vea "[Administración de alertas de {% data variables.product.prodname_code_scanning %} para el repositorio](/code-security/secure-coding/managing-code-scanning-alerts-for-your-repository#viewing-the-alerts-for-a-repository)".

{% note %}

**Nota**: Si ha generado una solicitud de incorporación de cambios para agregar el flujo de trabajo de {% data variables.product.prodname_code_scanning %} al repositorio, las alertas de esa solicitud de incorporación de cambios no se mostrarán directamente en la página de {% data variables.product.prodname_code_scanning_capc %} hasta que se combine esta solicitud. Si se ha encontrado alguna alerta, puede verlas antes de que se combine la solicitud de incorporación de cambios si hace clic en el vínculo **_n_ alertas encontradas** en el banner de la página de {% data variables.product.prodname_code_scanning_capc %}.

![Haz clic en el vínculo "N.  de alertas encontradas"](/assets/images/help/repository/code-scanning-alerts-found-link.png)

{% endnote %}

## Entender las verificaciones de la solicitud de cambios

Cada flujo de trabajo del {% data variables.product.prodname_code_scanning %} que configuras para que se utilice en las solicitudes de cambios siempre tiene por lo menos dos entradas listadas en la sección de verificaciones de una solicitud de cambios. Solo hay una entrada para cada uno de los jobs de anàlisis en el flujo de trabajo y uno final para los resultados del anàlisis.

Los nombres de las verificaciones del anàlisis del {% data variables.product.prodname_code_scanning %} se expresan en la forma: "NOMBRE DE LA HERRAMIENTA / NOMBRE DEL JOB (ACTIVADOR)." Por ejemplo, para {% data variables.product.prodname_codeql %}, el anàlisis de còdigo en C++ tiene la entrada "{% data variables.product.prodname_codeql %} / Analyze (cpp) (pull_request)". Puede hacer clic en **Detalles** en una entrada de análisis de {% data variables.product.prodname_code_scanning %} para ver los datos de registro. Esto te permite depurar un problema si falla el job de anàlisis. Por ejemplo, para el anàlisis del {% data variables.product.prodname_code_scanning %} de los lenguajes compilados, esto puede suceder si la acciòn no puede compilar el còdigo.

  ![Verificaciones de solicitudes de cambios del {% data variables.product.prodname_code_scanning %}](/assets/images/help/repository/code-scanning-pr-checks.png)

Cuando se completan los jobs del {% data variables.product.prodname_code_scanning %}, {% data variables.product.prodname_dotcom %} averigua si la solicitud de cambios agregò alguna alerta y agrega la entrada "resultados del {% data variables.product.prodname_code_scanning_capc %} / NOMBRE DE LA HERRAMIENTA" a la lista de verificaciones. Después de que {% data variables.product.prodname_code_scanning %} se haya ejecutado al menos una vez, puede hacer clic en **Detalles** para ver los resultados del análisis.

{% ifversion ghes < 3.5 or ghae %} Si has usado una solicitud de incorporación de cambios para agregar {% data variables.product.prodname_code_scanning %} al repositorio, inicialmente verás el mensaje "Análisis no encontrado" al hacer clic en **Detalles** en la comprobación "{% data variables.product.prodname_code_scanning_capc %} results/TOOL NAME".

  ![Mensaje de confirmación de "Análisis no encontrado"](/assets/images/enterprise/3.4/repository/code-scanning-analysis-not-found.png)

La tabla lista una o más categorías. Cada categoría se relaciona con análisis específicos, para la misma herramienta y confirmación, que se realizan en un lenguaje o parte del código diferentes. En cada categoría, la tabla muestra los dos análisis que {% data variables.product.prodname_code_scanning %} intentó comparar para determinar qué alertas se introdujeron o corrigieron en la solicitud de cambios.

Por ejemplo, en la captura de pantalla anterior, el {% data variables.product.prodname_code_scanning %} encontró un análisis para la confirmación de fusión de la solicitud de cambios, pero no encontró ningún análisis para el encabezado de la rama principal.

### Razones para obtener el mensaje "Analysis not found"


Despuès de que el {% data variables.product.prodname_code_scanning %} analiza el còdigo en una solicitud de cambios, necesita comparar el anàlisis de la rama de tema (la rama que utilizaste para crear la silicolicitud de cambios) con el anàlisis de la rama base (la rama en la cual quieres fusionar la solicitud de cambios). Esto permite al {% data variables.product.prodname_code_scanning %} calcular què alertas introdujo la solicitud de cambios recientemente, cuàles ya estaban presentes en la rama base y si es que cualquiera de las alertas existentes se arreglan con los cambios que lleva la solicitud. Inicialmente, si utilizas una solicitud de cambios para agregar el {% data variables.product.prodname_code_scanning %} a un repositorio, la rama base no se ha analizado, asì que no es posible calcular estos detalles. En este caso, cuando haces clic en la comprobación de los resultados de la solicitud de incorporación de cambios, verás el mensaje "Análisis no encontrado".

Existen otras situaciones en donde puede que no haya un anàlisis para la ùltima confirmaciòn hacia la rama base para una solicitud de cambios. Entre ellas se incluyen las siguientes:

* La solicitud de cambios se levantó contra una rama diferente a la predeterminada y ésta no se ha analizado.

  Para comprobar si se ha examinado una rama, vaya a la página de {% data variables.product.prodname_code_scanning_capc %}, haga clic en el menú desplegable **Rama** y seleccione la rama correspondiente.

  ![Elige una rama del menú desplegable de Rama](/assets/images/help/repository/code-scanning-branch-dropdown.png)

  La solución a esta situación consiste en agregar el nombre de la rama base a la especificación de `on:push` y `on:pull_request` en el flujo de trabajo de {% data variables.product.prodname_code_scanning %} en esa rama y, después, realizar un cambio que actualice la solicitud de incorporación de cambios abierta que quiera examinar.

* La ùltima confirmaciòn en la rama base para la solicitud de cambios se està analizando actualmente y dicho anàlisis no està disponible aùn.

  Espera algunos minutos y luego sube un cambio a la solicitud de extracciòn para reactivar el {% data variables.product.prodname_code_scanning %}.

* Ocurriò un error mientras se analizaba la ùltima confirmaciòn en la rama base y el anàlisis para esa confirmaciòn no està disponible.

  Fusiona un cambio trivial en la rama base para activar el {% data variables.product.prodname_code_scanning %} en esta ùltima confirmaciòn, luego sube un cambio a la solicitud de extracciòn para volver a activar el {% data variables.product.prodname_code_scanning %}.

{% endif %}

## Pasos siguientes

Después de configurar el {% data variables.product.prodname_code_scanning %} y permitir que se completen sus acciones, puedes:

- Ver todas las alertas del {% data variables.product.prodname_code_scanning %} que se han generado para este repositorio. Para más información, vea "[Administración de alertas de {% data variables.product.prodname_code_scanning %} para el repositorio](/code-security/secure-coding/managing-code-scanning-alerts-for-your-repository)".
- Ver cualquier alerta que se genere para una solicitud de cambios que se emitió después de que configuraste el {% data variables.product.prodname_code_scanning %}. Para más información, vea "[Evaluación de prioridades de alertas de {% data variables.product.prodname_code_scanning %} en solicitudes de incorporación de cambios](/code-security/secure-coding/triaging-code-scanning-alerts-in-pull-requests)".
- Configurar las notificaciones para las ejecuciones que se hayan completado. Para más información, vea "[Configuración de notificaciones](/github/managing-subscriptions-and-notifications-on-github/configuring-notifications#github-actions-notification-options)".
- Visualizar las bitácoras que generó el análisis del {% data variables.product.prodname_code_scanning %}. Para más información, vea "[Visualización de registros de {% data variables.product.prodname_code_scanning %}](/code-security/secure-coding/automatically-scanning-your-code-for-vulnerabilities-and-errors/viewing-code-scanning-logs)".
- Investigar cualquier problema que ocurre con la configuración inicial del {% data variables.product.prodname_code_scanning %} de {% data variables.product.prodname_codeql %}. Para más información, vea "[Solución de problemas del flujo de trabajo de {% data variables.product.prodname_codeql %}](/code-security/secure-coding/troubleshooting-the-codeql-workflow)".
- Personaliza cómo el {% data variables.product.prodname_code_scanning %} escanea el código en tu repositorio. Para más información, vea "[Configuración de {% data variables.product.prodname_code_scanning %}](/code-security/secure-coding/configuring-code-scanning)".
