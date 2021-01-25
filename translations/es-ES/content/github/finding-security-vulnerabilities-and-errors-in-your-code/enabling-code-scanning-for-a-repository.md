---
title: Habilitar el escaneo de código para un repositorio
shortTitle: Habilitar el escaneo de código
intro: 'Puedes habilitar {% data variables.product.prodname_code_scanning %} para el repositorio de tu proyecto.'
product: '{% data reusables.gated-features.code-scanning %}'
permissions: 'Si tienes permiso de escritura en un repositorio, puedes habilitar el {% data variables.product.prodname_code_scanning %} para éste.'
redirect_from:
  - /github/managing-security-vulnerabilities/configuring-automated-code-scanning
  - /github/finding-security-vulnerabilities-and-errors-in-your-code/enabling-code-scanning
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
---

{% data reusables.code-scanning.beta %}
{% data reusables.code-scanning.enterprise-enable-code-scanning-actions %}

### Opciones para habilitar el {% data variables.product.prodname_code_scanning %}

Tú decides cómo generar las alertas del {% data variables.product.prodname_code_scanning %} y qué herramientas utilizarás a nivel del repositorio. {% data variables.product.product_name %} te proporciona compatibilidad total e integrada para el análisis de {% data variables.product.prodname_codeql %} y también es compatible con el análisis de herramientas de terceros. Para obtener más información, consulta la sección "[Acerca de{% data variables.product.prodname_codeql %}](/github/finding-security-vulnerabilities-and-errors-in-your-code/about-code-scanning#about-codeql)".

{% data reusables.code-scanning.enabling-options %}

### Habilitar el {% data variables.product.prodname_code_scanning %} utilizando acciones

{% if currentVersion == "free-pro-team@latest" %}Si utilizas acciones para ejecutar el {% data variables.product.prodname_code_scanning %} se utilizarán minutos. Para obtener más información, consulta "[Acerca de la facturación para {% data variables.product.prodname_actions %}](/github/setting-up-and-managing-billing-and-payments-on-github/about-billing-for-github-actions)".

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-security %}
3. A la derecha de "{% data variables.product.prodname_code_scanning_capc %}", da clic en **Configurar el {% data variables.product.prodname_code_scanning %}**. ![Botón de "Configurar el {% data variables.product.prodname_code_scanning %}" a la derecha de "{% data variables.product.prodname_code_scanning_capc %}" en el resumen de seguridad](/assets/images/help/security/overview-set-up-code-scanning.png)
4. Debajod e "Iniciar con el {% data variables.product.prodname_code_scanning %}", da clic en **Configurar este flujo de trabajo** en el {% data variables.product.prodname_codeql_workflow %} o en el flujo de trabajo de terceros. ![Botón de "Configurar este flujo de trabajo" debajo del encabezado de " Iniciar con el {% data variables.product.prodname_code_scanning %}"](/assets/images/help/repository/code-scanning-set-up-this-workflow.png)
5. Para personalizar la forma en que el {% data variables.product.prodname_code_scanning %} escanea tu còdigo, edita el flujo de trabajo.

   Generalmente, puedes confirmar el {% data variables.product.prodname_codeql_workflow %} sin hacerle ningùn cambio. Sin embargo, muchos de los flujos de trabajo de terceros requieren de configuraciones adicionales, asì que lee los comentarios en el flujo de trabajo antes de confirmar.

   Para obtener más información, consulta "[Configurar {% data variables.product.prodname_code_scanning %}](/github/finding-security-vulnerabilities-and-errors-in-your-code/configuring-code-scanning)".
6. Utiliza el menú desplegable de**Comenzar confirmación**, y teclea un mensaje de confirmación. ![Iniciar confirmación](/assets/images/help/repository/start-commit-commit-new-file.png)
7. Escoge si te gustaría confirmar directamente en la rama predeterminada, o crear una nueva rama y comenzar una solicitud de extracción. ![Escoger dónde confirmar](/assets/images/help/repository/start-commit-choose-where-to-commit.png)
8. Da clic en **Confirmar archivo nuevo** o en **Proponer archivo nuevo**.

En el {% data variables.product.prodname_codeql_workflow %} predeterminado, el {% data variables.product.prodname_code_scanning %} se configura para analizar tu código cada vez que ya sea subas un cambio a la rama predeterminada o a cualquier rama protegida, o que levantes una solicitud de cambios contra la rama predeterminada. Como resultado, el {% data variables.product.prodname_code_scanning %} comenzarà ahora.

### Bulk enabling {% data variables.product.prodname_code_scanning %}
You can enable {% data variables.product.prodname_code_scanning %} in many repositories in bulk using a script. For an example of a script that raises pull requests to add a {% data variables.product.prodname_actions %} workflow to multiple repositories, see the [`jhutchings1/Create-ActionsPRs`](https://github.com/jhutchings1/Create-ActionsPRs) repository.

### Visualizar la salida de registro del {% data variables.product.prodname_code_scanning %}

Despuès de habilitar el {% data variables.product.prodname_code_scanning %} para tu repositorio, puedes observar la salida de las acciones conforme se ejecutan.

{% data reusables.repositories.actions-tab %}

  Veràs una lista que incluye una entrada para ejecutar el flujo de trabajo del {% data variables.product.prodname_code_scanning %}. The text of the entry is the title you gave your commit message.

  ![Lista de acciones que muestran el flujo de trabajo del {% data variables.product.prodname_code_scanning %}](/assets/images/help/repository/code-scanning-actions-list.png)

1. Da clic en la entrada para el flujo de trabajo de {% data variables.product.prodname_code_scanning %}.

1. Da clic en el nombre del job situado a la izquierda. Por ejemplo, **Analizar (IDIOMA)**.

  ![Registro de salida del flujo de trabajo del {% data variables.product.prodname_code_scanning %}](/assets/images/help/repository/code-scanning-logging-analyze-action.png)

1. Revisa la salida de registro de las acciones en este flujo de trabajo conforme se ejecutan.

1. Una vez que todos los jobs se completen, puedes ver los detalles de cualquier alerta del {% data variables.product.prodname_code_scanning %} que se hayan identificado. Para obtener más información, consulta la sección "[Administrar las alertas de {% data variables.product.prodname_code_scanning %} para tu repositorio](/github/finding-security-vulnerabilities-and-errors-in-your-code/managing-code-scanning-alerts-for-your-repository#viewing-the-alerts-for-a-repository)".

{% note %}

**Nota:** Si levantaste una solicitud de cambios para agregar el flujo de trabajo del {% data variables.product.prodname_code_scanning %} a las alertas del repositorio, las alertas de esa solicitud de cambios no se mostraràn directamente en la pàgina del {% data variables.product.prodname_code_scanning_capc %} hasta que se fusione dicha solicitud. Si se encontrò alguna de las alertas, puedes verlas antes de que se fusione la solicitud de extracciòn dando clic en el enlace de **_n_ alertas encontradas** en el letrero de la pàgina del {% data variables.product.prodname_code_scanning_capc %}.

  ![Da clic en el enlace de "n alertas encontradas" link](/assets/images/help/repository/code-scanning-alerts-found-link.png)

{% endnote %}

### Entender las verificaciones de la solicitud de cambios

Cada flujo de trabajo del {% data variables.product.prodname_code_scanning %} que habilites para ejecutarse en las soilcitudes de cambios siempre tiene por lo menos dos entradas que se listan en la secciòn de verificaciones de ellas. Solo hay una entrada para cada uno de los jobs de anàlisis en el flujo de trabajo y uno final para los resultados del anàlisis.

Los nombres de las verificaciones del anàlisis del {% data variables.product.prodname_code_scanning %} se expresan en la forma: "NOMBRE DE LA HERRAMIENTA / NOMBRE DEL JOB (ACTIVADOR)." Por ejemplo, para {% data variables.product.prodname_codeql %}, el anàlisis de còdigo en C++ tiene la entrada "{% data variables.product.prodname_codeql %} / Analyze (cpp) (pull_request)". Puedes dar clic en **Detalles** en una entrada de anàlisis de {% data variables.product.prodname_code_scanning %} para ver los datos de registro. Esto te permite depurar un problema si falla el job de anàlisis. Por ejemplo, para el anàlisis del {% data variables.product.prodname_code_scanning %} de los lenguajes compilados, esto puede suceder si la acciòn no puede compilar el còdigo.

  ![Verificaciones de solicitudes de cambios del {% data variables.product.prodname_code_scanning %}](/assets/images/help/repository/code-scanning-pr-checks.png)

Cuando se completan los jobs del {% data variables.product.prodname_code_scanning %}, {% data variables.product.prodname_dotcom %} averigua si la solicitud de cambios agregò alguna alerta y agrega la entrada "resultados del {% data variables.product.prodname_code_scanning_capc %} / NOMBRE DE LA HERRAMIENTA" a la lista de verificaciones. Despuès de que se lleve a cabo el {% data variables.product.prodname_code_scanning %} por lo menos una vez, puedes dar clic en **Detalles** para ver los resultados del anàlisis. Si utilizaste una solicitud de cambios para agregar el {% data variables.product.prodname_code_scanning %} al repositorio, veràs inicialmente un mensaje de "Missing analysis" cuando des clic en la parte de **Detalles** de la verificaciòn "resultados del {% data variables.product.prodname_code_scanning_capc %} / NOMBRE DE LA HERRAMIENTA".

  ![Falta el análisis para el mensaje de confirmación](/assets/images/help/repository/code-scanning-missing-analysis.png)

#### Razones para recibir un mensaje de "missing analysis"

Despuès de que el {% data variables.product.prodname_code_scanning %} analiza el còdigo en una solicitud de cambios, necesita comparar el anàlisis de la rama de tema (la rama que utilizaste para crear la silicolicitud de cambios) con el anàlisis de la rama base (la rama en la cual quieres fusionar la solicitud de cambios). Esto permite al {% data variables.product.prodname_code_scanning %} calcular què alertas introdujo la solicitud de cambios recientemente, cuàles ya estaban presentes en la rama base y si es que cualquiera de las alertas existentes se arreglan con los cambios que lleva la solicitud. Inicialmente, si utilizas una solicitud de cambios para agregar el {% data variables.product.prodname_code_scanning %} a un repositorio, la rama base no se ha analizado, asì que no es posible calcular estos detalles. En este caso, cuando das clic en la verificaciòn de los resultados de la solicitud de cambios, veràs el mensaje "Missing analysis for base commit SHA-HASH".

Existen otras situaciones en donde puede que no haya un anàlisis para la ùltima confirmaciòn hacia la rama base para una solicitud de cambios. Entre estas se incluyen cuando:

* La solicitud de cambios se levantó contra una rama diferente a la predeterminada y ésta no se ha analizado.

  Para verificar si se ha escaneado una rama, ve a la pàgina de {% data variables.product.prodname_code_scanning_capc %}, da clic en el menù desplegable de **Rama** y selecciona la rama relevante.

  ![Elige una rama del menú desplegable de Rama](/assets/images/help/repository/code-scanning-branch-dropdown.png)

  La soluciòn a esta situaciòn es agregar el nombre de esta rama base a las especificaciones de `on:push` y `on:pull_request` en el flujo de trabajo del {% data variables.product.prodname_code_scanning %} en esta rama y luego hacer un cambio que actualice la solicitud de cambios abierta que quieres escanear.

* La ùltima confirmaciòn en la rama base para la solicitud de cambios se està analizando actualmente y dicho anàlisis no està disponible aùn.

  Espera algunos minutos y luego sube un cambio a la solicitud de extracciòn para reactivar el {% data variables.product.prodname_code_scanning %}.

* Ocurriò un error mientras se analizaba la ùltima confirmaciòn en la rama base y el anàlisis para esa confirmaciòn no està disponible.

  Fusiona un cambio trivial en la rama base para activar el {% data variables.product.prodname_code_scanning %} en esta ùltima confirmaciòn, luego sube un cambio a la solicitud de extracciòn para volver a activar el {% data variables.product.prodname_code_scanning %}.

### Pasos siguientes

Despuès de habilitar el {% data variables.product.prodname_code_scanning %} y permitir que sus acciones se completen, puedes:

- Ver todas las alertas del {% data variables.product.prodname_code_scanning %} que se han generado para este repositorio. Para obtener más información, consulta la sección "[Administrar las alertas de {% data variables.product.prodname_code_scanning %} para tu repositorio](/github/finding-security-vulnerabilities-and-errors-in-your-code/managing-code-scanning-alerts-for-your-repository)".
- Ver cualquier alerta que se genere para una solicitud de cambios que se emita despuès de que habilitaste el {% data variables.product.prodname_code_scanning %}. Para obtener màs informaciònPara obtener más información, consulta la sección "[Clasificar las alertas del {% data variables.product.prodname_code_scanning %} en las solicitudes de extracción](/github/finding-security-vulnerabilities-and-errors-in-your-code/triaging-code-scanning-alerts-in-pull-requests)".
- Configurar las notificaciones para las ejecuciones que se hayan completado. Para obtener más información, consulta la sección "[Configurar notificaciones](/github/managing-subscriptions-and-notifications-on-github/configuring-notifications#github-actions-notification-options)".
- Investigar cualquier problema que ocurre con la configuración inicial del {% data variables.product.prodname_code_scanning %} de {% data variables.product.prodname_codeql %}. Para obtener más información, consulta la sección "[Solucionar problemas del flujo de trabajo de {% data variables.product.prodname_codeql %}](/github/finding-security-vulnerabilities-and-errors-in-your-code/troubleshooting-the-codeql-workflow)".
- Personaliza cómo el {% data variables.product.prodname_code_scanning %} escanea el código en tu repositorio. Para obtener más información, consulta "[Configurar {% data variables.product.prodname_code_scanning %}](/github/finding-security-vulnerabilities-and-errors-in-your-code/configuring-code-scanning)".
