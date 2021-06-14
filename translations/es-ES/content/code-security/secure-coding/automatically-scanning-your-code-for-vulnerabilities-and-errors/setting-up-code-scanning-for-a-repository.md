---
title: Configurar el escaneo de código en un repositorio
shortTitle: Configurar el escaneo de código
intro: 'Puedes configurar el {% data variables.product.prodname_code_scanning %} si agregas un flujo de trabajo a tu repositorio.'
product: '{% data reusables.gated-features.code-scanning %}'
permissions: 'If you have write permissions to a repository, you can set up or configure {% data variables.product.prodname_code_scanning %} for that repository.'
redirect_from:
  - /github/managing-security-vulnerabilities/configuring-automated-code-scanning
  - /github/finding-security-vulnerabilities-and-errors-in-your-code/enabling-code-scanning
  - /github/finding-security-vulnerabilities-and-errors-in-your-code/enabling-code-scanning-for-a-repository
  - /github/finding-security-vulnerabilities-and-errors-in-your-code/setting-up-code-scanning-for-a-repository
  - /code-security/secure-coding/setting-up-code-scanning-for-a-repository
versions:
  free-pro-team: '*'
  enterprise-server: '>=3.0'
  github-ae: '*'
type: how_to
topics:
  - Advanced Security
  - Code scanning
  - Actions
  - Repositories
---

<!--For this article in earlier GHES versions, see /content/github/finding-security-vulnerabilities-and-errors-in-your-code-->

{% data reusables.code-scanning.beta %}
{% data reusables.code-scanning.enterprise-enable-code-scanning-actions %}

### Opciones para configurar el {% data variables.product.prodname_code_scanning %}

Tú decides cómo generar las alertas del {% data variables.product.prodname_code_scanning %} y qué herramientas utilizar a nivel de repositorio. {% data variables.product.product_name %} te proporciona compatibilidad total e integrada para el análisis de {% data variables.product.prodname_codeql %} y también es compatible con el análisis de herramientas de terceros. Para obtener más información, consulta la sección "[Acerca del {% data variables.product.prodname_codeql %}](/code-security/secure-coding/about-code-scanning#about-codeql)".

{% data reusables.code-scanning.enabling-options %}

### Configurar el {% data variables.product.prodname_code_scanning %} utilizando acciones

{% if currentVersion == "free-pro-team@latest" %}Si utilizas acciones para ejecutar el {% data variables.product.prodname_code_scanning %} se utilizarán minutos. Para obtener más información, consulta la sección "[Acerca de la facturación para {% data variables.product.prodname_actions %}](/billing/managing-billing-for-github-actions/about-billing-for-github-actions)".{% endif %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-security %}
3. A la derecha de "alertas del {% data variables.product.prodname_code_scanning_capc %}", haz clic en **Configurar el {% data variables.product.prodname_code_scanning %}**. {% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.0" %}Si falta el {% data variables.product.prodname_code_scanning %}, necesitas pedir al propietario de la organización o adminsitrador del repositorio que habilite la {% data variables.product.prodname_GH_advanced_security %}. Para obtener más información, consulta las secciones "[Administrar la configuración de seguridad y análisis en tu organización](/organizations/keeping-your-organization-secure/managing-security-and-analysis-settings-for-your-organization)" o "[Administrar la configuración de seguridad y análisis en tu repositorio](/github/administering-a-repository/managing-security-and-analysis-settings-for-your-repository)".{% endif %} ![Botón de "Configurar el {% data variables.product.prodname_code_scanning %}" a la derecha de "{% data variables.product.prodname_code_scanning_capc %}" en el resumen de seguridad](/assets/images/help/security/overview-set-up-code-scanning.png)
4. Debajod e "Iniciar con el {% data variables.product.prodname_code_scanning %}", da clic en **Configurar este flujo de trabajo** en el {% data variables.product.prodname_codeql_workflow %} o en el flujo de trabajo de terceros. !["Set up this workflow" button under "Get started with {% data variables.product.prodname_code_scanning %}" heading](/assets/images/help/repository/code-scanning-set-up-this-workflow.png){% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.22" %}Los flujos de trabajo solo se muestran si son relevantes para los lenguajes de programación que se detectan en el repositorio. El {% data variables.product.prodname_codeql_workflow %} siempre se muestra, pero el botón de "Configurar este flujo de trabajo" solo se habilita si el análisis de {% data variables.product.prodname_codeql %} es compatible con los lenguajes presentes en el repositorio.{% endif %}
5. Para personalizar la forma en que el {% data variables.product.prodname_code_scanning %} escanea tu còdigo, edita el flujo de trabajo.

   Generalmente, puedes confirmar el {% data variables.product.prodname_codeql_workflow %} sin hacerle ningùn cambio. Sin embargo, muchos de los flujos de trabajo de terceros requieren de configuraciones adicionales, asì que lee los comentarios en el flujo de trabajo antes de confirmar.

   Para obtener más información, consulta "[Configurar {% data variables.product.prodname_code_scanning %}](/code-security/secure-coding/configuring-code-scanning)".
6. Utiliza el menú desplegable de**Comenzar confirmación**, y teclea un mensaje de confirmación. ![Iniciar confirmación](/assets/images/help/repository/start-commit-commit-new-file.png)
7. Escoge si te gustaría confirmar directamente en la rama predeterminada, o crear una nueva rama y comenzar una solicitud de extracción. ![Escoger dónde confirmar](/assets/images/help/repository/start-commit-choose-where-to-commit.png)
8. Da clic en **Confirmar archivo nuevo** o en **Proponer archivo nuevo**.

En el {% data variables.product.prodname_codeql_workflow %} predeterminado, el {% data variables.product.prodname_code_scanning %} se configura para analizar tu código cada vez que ya sea subas un cambio a la rama predeterminada o a cualquier rama protegida, o que levantes una solicitud de cambios contra la rama predeterminada. Como resultado, el {% data variables.product.prodname_code_scanning %} comenzarà ahora.

### Configuración del {% data variables.product.prodname_code_scanning %} por lotes
Puedes configurar el {% data variables.product.prodname_code_scanning %} en muchos repositorios al mismo tiempo utilizando un script. Para encontrar un ejemplo de un script que levanta solicitudes de cambio para agregar un flujo de trabajo de {% data variables.product.prodname_actions %} a varios repositorios, consulta el repositorio [`jhutchings1/Create-ActionsPRs`](https://github.com/jhutchings1/Create-ActionsPRs).

### Visualizar la salida de registro del {% data variables.product.prodname_code_scanning %}

Después de configurar el {% data variables.product.prodname_code_scanning %} para tu repositorio, puedes observar la salida de las acciones mientras se ejecutan.

{% data reusables.repositories.actions-tab %}

  Veràs una lista que incluye una entrada para ejecutar el flujo de trabajo del {% data variables.product.prodname_code_scanning %}. El texto de la entrada es el título que le diste a tu mensaje de confirmación.

  ![Lista de acciones que muestran el flujo de trabajo del {% data variables.product.prodname_code_scanning %}](/assets/images/help/repository/code-scanning-actions-list.png)

1. Da clic en la entrada para el flujo de trabajo de {% data variables.product.prodname_code_scanning %}.

1. Da clic en el nombre del job situado a la izquierda. Por ejemplo, **Analizar (IDIOMA)**.

  ![Registro de salida del flujo de trabajo del {% data variables.product.prodname_code_scanning %}](/assets/images/help/repository/code-scanning-logging-analyze-action.png)

1. Revisa la salida de registro de las acciones en este flujo de trabajo conforme se ejecutan.

1. Una vez que todos los jobs se completen, puedes ver los detalles de cualquier alerta del {% data variables.product.prodname_code_scanning %} que se hayan identificado. Para obtener más información, consulta la sección "[Administrar las alertas de {% data variables.product.prodname_code_scanning %} para tu repositorio](/code-security/secure-coding/managing-code-scanning-alerts-for-your-repository#viewing-the-alerts-for-a-repository)".

{% note %}

**Nota:** Si levantaste una solicitud de cambios para agregar el flujo de trabajo del {% data variables.product.prodname_code_scanning %} a las alertas del repositorio, las alertas de esa solicitud de cambios no se mostraràn directamente en la pàgina del {% data variables.product.prodname_code_scanning_capc %} hasta que se fusione dicha solicitud. Si se encontrò alguna de las alertas, puedes verlas antes de que se fusione la solicitud de extracciòn dando clic en el enlace de **_n_ alertas encontradas** en el letrero de la pàgina del {% data variables.product.prodname_code_scanning_capc %}.

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.1"%}
  ![Da clic en el enlace de "n alertas encontradas" link](/assets/images/help/repository/code-scanning-alerts-found-link.png)
{% else %}
  ![Da clic en el enlace de "n alertas encontradas" link](/assets/images/enterprise/3.1/help/repository/code-scanning-alerts-found-link.png)
{% endif %}

{% endnote %}

### Entender las verificaciones de la solicitud de cambios

Cada flujo de trabajo del {% data variables.product.prodname_code_scanning %} que configuras para que se utilice en las solicitudes de cambios siempre tiene por lo menos dos entradas listadas en la sección de verificaciones de una solicitud de cambios. Solo hay una entrada para cada uno de los jobs de anàlisis en el flujo de trabajo y uno final para los resultados del anàlisis.

Los nombres de las verificaciones del anàlisis del {% data variables.product.prodname_code_scanning %} se expresan en la forma: "NOMBRE DE LA HERRAMIENTA / NOMBRE DEL JOB (ACTIVADOR)." Por ejemplo, para {% data variables.product.prodname_codeql %}, el anàlisis de còdigo en C++ tiene la entrada "{% data variables.product.prodname_codeql %} / Analyze (cpp) (pull_request)". Puedes dar clic en **Detalles** en una entrada de anàlisis de {% data variables.product.prodname_code_scanning %} para ver los datos de registro. Esto te permite depurar un problema si falla el job de anàlisis. Por ejemplo, para el anàlisis del {% data variables.product.prodname_code_scanning %} de los lenguajes compilados, esto puede suceder si la acciòn no puede compilar el còdigo.

  ![Verificaciones de solicitudes de cambios del {% data variables.product.prodname_code_scanning %}](/assets/images/help/repository/code-scanning-pr-checks.png)

Cuando se completan los jobs del {% data variables.product.prodname_code_scanning %}, {% data variables.product.prodname_dotcom %} averigua si la solicitud de cambios agregò alguna alerta y agrega la entrada "resultados del {% data variables.product.prodname_code_scanning_capc %} / NOMBRE DE LA HERRAMIENTA" a la lista de verificaciones. Despuès de que se lleve a cabo el {% data variables.product.prodname_code_scanning %} por lo menos una vez, puedes dar clic en **Detalles** para ver los resultados del anàlisis. Si utilizaste una solicitud de cambios para agregar el {% data variables.product.prodname_code_scanning %} al repositorio, veràs inicialmente un mensaje de "Missing analysis" cuando des clic en la parte de **Detalles** de la verificaciòn "resultados del {% data variables.product.prodname_code_scanning_capc %} / NOMBRE DE LA HERRAMIENTA".

  ![Falta el análisis para el mensaje de confirmación](/assets/images/help/repository/code-scanning-missing-analysis.png)

#### Razones para recibir un mensaje de "missing analysis"

Despuès de que el {% data variables.product.prodname_code_scanning %} analiza el còdigo en una solicitud de cambios, necesita comparar el anàlisis de la rama de tema (la rama que utilizaste para crear la silicolicitud de cambios) con el anàlisis de la rama base (la rama en la cual quieres fusionar la solicitud de cambios). Esto permite al {% data variables.product.prodname_code_scanning %} calcular què alertas introdujo la solicitud de cambios recientemente, cuàles ya estaban presentes en la rama base y si es que cualquiera de las alertas existentes se arreglan con los cambios que lleva la solicitud. Inicialmente, si utilizas una solicitud de cambios para agregar el {% data variables.product.prodname_code_scanning %} a un repositorio, la rama base no se ha analizado, asì que no es posible calcular estos detalles. En este caso, cuando das clic en la verificaciòn de los resultados de la solicitud de cambios, veràs el mensaje "Missing analysis for base commit SHA-HASH".

Existen otras situaciones en donde puede que no haya un anàlisis para la ùltima confirmaciòn hacia la rama base para una solicitud de cambios. Entre estas se incluyen cuando:

* La solicitud de cambios se levantó contra una rama diferente a la predeterminada y ésta no se ha analizado.

  Para verificar si se ha escaneado una rama, ve a la pàgina de {% data variables.product.prodname_code_scanning_capc %}, da clic en el menù desplegable de **Rama** y selecciona la rama relevante.

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.1"%}
  ![Elige una rama del menú desplegable de Rama](/assets/images/help/repository/code-scanning-branch-dropdown.png)
{% else %}
  ![Elige una rama del menú desplegable de Rama](/assets/images/enterprise/3.1/help/repository/code-scanning-branch-dropdown.png)
{% endif %}

  La soluciòn a esta situaciòn es agregar el nombre de esta rama base a las especificaciones de `on:push` y `on:pull_request` en el flujo de trabajo del {% data variables.product.prodname_code_scanning %} en esta rama y luego hacer un cambio que actualice la solicitud de cambios abierta que quieres escanear.

* La ùltima confirmaciòn en la rama base para la solicitud de cambios se està analizando actualmente y dicho anàlisis no està disponible aùn.

  Espera algunos minutos y luego sube un cambio a la solicitud de extracciòn para reactivar el {% data variables.product.prodname_code_scanning %}.

* Ocurriò un error mientras se analizaba la ùltima confirmaciòn en la rama base y el anàlisis para esa confirmaciòn no està disponible.

  Fusiona un cambio trivial en la rama base para activar el {% data variables.product.prodname_code_scanning %} en esta ùltima confirmaciòn, luego sube un cambio a la solicitud de extracciòn para volver a activar el {% data variables.product.prodname_code_scanning %}.

### Pasos siguientes

Después de configurar el {% data variables.product.prodname_code_scanning %} y permitir que se completen sus acciones, puedes:

- Ver todas las alertas del {% data variables.product.prodname_code_scanning %} que se han generado para este repositorio. Para obtener más información, consulta la sección "[Administrar las alertas de {% data variables.product.prodname_code_scanning %} para tu repositorio](/code-security/secure-coding/managing-code-scanning-alerts-for-your-repository)".
- Ver cualquier alerta que se genere para una solicitud de cambios que se emitió después de que configuraste el {% data variables.product.prodname_code_scanning %}. Para obtener màs informaciònPara obtener más información, consulta la sección "[Clasificar las alertas del {% data variables.product.prodname_code_scanning %} en las solicitudes de extracción](/code-security/secure-coding/triaging-code-scanning-alerts-in-pull-requests)".
- Configurar las notificaciones para las ejecuciones que se hayan completado. Para obtener más información, consulta la sección "[Configurar notificaciones](/github/managing-subscriptions-and-notifications-on-github/configuring-notifications#github-actions-notification-options)".
- Investigar cualquier problema que ocurre con la configuración inicial del {% data variables.product.prodname_code_scanning %} de {% data variables.product.prodname_codeql %}. Para obtener más información, consulta la sección "[Solucionar problemas del flujo de trabajo de {% data variables.product.prodname_codeql %}](/code-security/secure-coding/troubleshooting-the-codeql-workflow)".
- Personaliza cómo el {% data variables.product.prodname_code_scanning %} escanea el código en tu repositorio. Para obtener más información, consulta "[Configurar {% data variables.product.prodname_code_scanning %}](/code-security/secure-coding/configuring-code-scanning)".
