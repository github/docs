---
title: Habilitar el escaneo de código
intro: 'Puedes habilitar {% data variables.product.prodname_code_scanning %} para el repositorio de tu proyecto.'
product: '{% data reusables.gated-features.code-scanning %}'
permissions: 'Las personas con permisos de escritura en un repositorio pueden habilitar {% data variables.product.prodname_code_scanning %} para éste.'
redirect_from:
  - /github/managing-security-vulnerabilities/configuring-automated-code-scanning
versions:
  free-pro-team: '*'
---

{% data reusables.code-scanning.beta %}

### Habilitar {% data variables.product.prodname_code_scanning %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-security %}
3. A la derecha de "Escaneo de código", da clic en **Configurar escaneo de código**. ![botón de "configurar escaneo de código" a la derecha de "escaneo de código" en el Resumen de Seguridad.](/assets/images/help/security/overview-set-up-code-scanning.png)
4. Debajo de "Empezar con el escaneo de código", da clic en **Configurar este flujo de trabajo**. ![Botón de "configurar este flujo de trabajo" debajo del título "empezar con el escaneo de código"](/assets/images/help/repository/code-scanning-set-up-this-workflow.png)
5. Opcionalmente, para personalizar como {% data variables.product.prodname_code_scanning %} escanea tu código, edita el flujo de trabajo. Para obtener más información, consulta "[Configurar {% data variables.product.prodname_code_scanning %}](/github/finding-security-vulnerabilities-and-errors-in-your-code/configuring-code-scanning)".
6. Utiliza el menú desplegable de**Comenzar confirmación**, y teclea un mensaje de confirmación. ![Iniciar confirmación](/assets/images/help/repository/start-commit-commit-new-file.png)
7. Escoge si te gustaría confirmar directamente en la rama predeterminada, o crear una nueva rama y comenzar una solicitud de extracción. ![Escoger dónde confirmar](/assets/images/help/repository/start-commit-choose-where-to-commit.png)
8. Da clic en **Confirmar archivo nuevo** o en **Proponer archivo nuevo**.

Después de que confirmes el archivo de flujo de trabajo o crees una solicitud de extracción, {% data variables.product.prodname_code_scanning %} analizará tu código de acuerdo con la frecuencia que hayas especificado en tu archivo de flujo de trabajo. Si creaste una solicitud de extracción, {% data variables.product.prodname_code_scanning %} solo analizará el código en la rama de tema de esta solicitud hasta que la fusiones en la rama predeterminada del repositorio.

### Pasos siguientes

Después de que habilites {% data variables.product.prodname_code_scanning %}, podrás monitorear los análisis, ver resultados, y personalizar aún más la forma en la que escaneas tu código.

- Puedes ver el estado de ejecución de {% data variables.product.prodname_code_scanning %} y recibir notificaciones para las ejecuciones que se completen. Para obtener más información, consulta la sección "[Administrar una ejecución de flujo de trabajo](/actions/configuring-and-managing-workflows/managing-a-workflow-run)" y "[Configurar notificaciones](/github/managing-subscriptions-and-notifications-on-github/configuring-notifications#github-actions-notification-options)".
- Después de que se complete un escaneo, puedes ver las alertas del escaneo completado. Para obtener más información, consulta la sección "[Administrar alertas desde {% data variables.product.prodname_code_scanning %}](/github/finding-security-vulnerabilities-and-errors-in-your-code/managing-alerts-from-code-scanning)".
- Puedes personalizar cómo {% data variables.product.prodname_code_scanning %} escanea el código en tu repositorio. Para obtener más información, consulta la sección "[Configurar el escaneo de código](/github/finding-security-vulnerabilities-and-errors-in-your-code/configuring-code-scanning)".
