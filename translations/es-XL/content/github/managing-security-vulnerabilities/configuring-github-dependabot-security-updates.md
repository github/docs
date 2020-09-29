---
title: Condigurar las actualizaciones de seguridad del Dependabot de GitHub
intro: 'Puedes utilizar las {% data variables.product.prodname_dependabot_security_updates %} o las solicitudes de extracción manuales para actualizar fácilmente las dependencias vulnerables.'
redirect_from:
  - /articles/configuring-automated-security-fixes
  - /github/managing-security-vulnerabilities/configuring-automated-security-fixes
  - /github/managing-security-vulnerabilities/configuring-automated-security-updates
versions:
  free-pro-team: '*'
---

### Acerca de {% data variables.product.prodname_dependabot_security_updates %}

El {% data variables.product.prodname_dependabot_short %} monitorea las asesorías de seguridad tales como la {% data variables.product.prodname_advisory_database %} y [WhiteSource](https://www.whitesourcesoftware.com/vulnerability-database), y activa automáticamente una solicitud de extracción cuando detecta que hay una dependencia vulnerable nueva en el gráfico de dependencias de los repositorios. Para obtener más información acerca de la {% data variables.product.prodname_advisory_database %}, consulta la sección "[Acerca de la {% data variables.product.prodname_advisory_database %}](/github/managing-security-vulnerabilities/browsing-security-vulnerabilities-in-the-github-advisory-database#about-the-github-advisory-database)".

{% data reusables.dependabot.upgrade-dependency-to-minimum-secure-version %}

El {% data variables.product.prodname_dependabot_short %} incluye un enlace a la solicitud de extracción para la dependencia vulnerable en la alerta. Para obtener más información, consulta las secciones "[Acerca de las alertas para las dependencias vulnerables](/github/managing-security-vulnerabilities/about-alerts-for-vulnerable-dependencies)" y "[Acerca de la gráfica de dependencias](/github/visualizing-repository-data-with-graphs/about-the-dependency-graph)".

Cada actualización de seguridad contiene todo lo que tienes que revisar y fusionar de manera rápida y segura para una propuesta de corrección en tu proyecto. Esto incluye la información acerca de la vulnerabilidad, como las notas de lanzamiento, las entradas de bitácora de cambios, y los detalles de confirmación. Los detalles sobre qué vulnerabilidad resuelve una solicitud de extracción se encuentran escondidos de todo aquél que no tenga acceso a las alertas de {% data variables.product.prodname_dependabot_short %} para el repositorio.

Cuando fusionas una solicitud de extracción que contiene una actualización de seguridad, la alerta correspondiente se marca como resuelta para tu repositorio.

{% note %}

**Nota:** Las {% data variables.product.prodname_dependabot_security_updates %} solo resuelven vulnerabilidades de seguridad en las dependencias que rastrea tu gráfica de dependencias. Las actualizaciones de seguridad no se crean para resolver vulnerabilidades en registros privados o en paquetes hospedados en repositorios privados. Sin embargo, las dependencias indirectas o transitorias se incluyen si se definen explícitamente en un archivo bloqueado, o en alguno similar. Para obtener más información, consulta la sección "[Acerca de la gráfica de dependencias](/github/visualizing-repository-data-with-graphs/about-the-dependency-graph)". Adicionalmente, es importante resaltar que las {% data variables.product.prodname_dependabot_security_updates %}crean solicitudes de extracción automáticamente con las correcciones propuestas para los archivos bloqueados para las dependencias que detectan como vulnerables.

{% endnote %}

Puedes habilitar las {% data variables.product.prodname_dependabot_security_updates %} para cualquier repositorio que utilice las alertas del {% data variables.product.prodname_dependabot_short %} y la gráfica de dependencias. Puedes inhabilitar las {% data variables.product.prodname_dependabot_security_updates %} para un repositorio individual o para todos los repositorios que pertenezcan a tu organización o cuenta de usuario. Para obtener más información, consulta la sección "[Administrar las {% data variables.product.prodname_dependabot_security_updates %} para tus repositorios](#managing-github-dependabot-security-updates-for-your-repositories)" acontinuación.

{% data reusables.dependabot.dependabot-tos %}

### Repositorios compatibles

{% data variables.product.prodname_dotcom %} habilita las {% data variables.product.prodname_dependabot_security_updates %} automáticamente para cada repositorio que cumpla con estos pre-requisitos.

{% note %}

**Note**: You can manually enable {% data variables.product.prodname_dependabot_security_updates %}, even if the repository doesn't meet some of the prerequisites below. For example, you can enable {% data variables.product.prodname_dependabot_security_updates %} on a fork, or for a package manager that isn't directly supported by following the instructions in "[Managing {% data variables.product.prodname_dependabot_security_updates %} for your repositories](#managing-github-dependabot-security-updates-for-your-repositories)."

{% endnote %}

| Pre-requisito de habilitación automática                                                                                                                                                                                                    | Más información                                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Que el repositorio no sea una bifrucación                                                                                                                                                                                                   | "[Acerca de las bifurcaciones](/github/collaborating-with-issues-and-pull-requests/about-forks)"                                                                                                   |
| Que el repositorio no esté archivado                                                                                                                                                                                                        | "[Archivar repositorios](/github/creating-cloning-and-archiving-repositories/archiving-repositories)"                                                                                              |
| Que el repositorio sea público, o que sea privado y hayas habilitado un análisis de solo lectura por {% data variables.product.prodname_dotcom %}, gráfica de dependencias y alertas de vulnerabilidades en la configuración del mismo | "[Administrar la configuración de uso de datos para tu repositorio privado](/github/understanding-how-github-uses-and-protects-your-data/managing-data-use-settings-for-your-private-repository)". |
| Que el repositorio contenga un archivo de manifiesto de dependencias de un ecosistema de paquete que sea compatible con {% data variables.product.prodname_dotcom %}                                                                   | "[Ecosistemas de paquete compatibles](/github/visualizing-repository-data-with-graphs/about-the-dependency-graph#supported-package-ecosystems)"                                                    |
| Las {% data variables.product.prodname_dependabot_security_updates %} no se han inhabilitado para el repositorio                                                                                                                     | "[Administrar las {% data variables.product.prodname_dependabot_security_updates %} para tu repositorio](#managing-github-dependabot-security-updates-for-your-repositories)"               |
| Que el repositorio no esté utilizando ya una integración para administración de dependencias                                                                                                                                                | "[Acerca de las integraciones](/github/customizing-your-github-workflow/about-integrations)"                                                                                                       |

Si no se habilitan las actualizaciones de seguridad para tu repositorio y no sabes por qué, intenta primero habilitarles de acuerdo con las instrucciones que se encuentran en los procedimientos siguientes. Si las actualizaciones aún no funcionan, puedes [contactar a soporte](https://support.github.com/contact).

### Acerca de las puntuaciones de compatibilidad

Las {% data variables.product.prodname_dependabot_security_updates %} también incluyen puntuaciones de compatibilidad para que sepas si el actualizar una vulnerabilidad podría causar cambios sustanciales en tu proyecto. Revisamos las pruebas de IC que pasaron previamente en repositorios públicos en donde generamos alguna actualización de seguridad para aprender si la actualización puede causar que las pruebas fallen. Una puntuación de compatibilidad de la actualización es el porcentaje de ejecuciones de CI que se aprobaron al actualizar entre las versiones relevantes de la dependencia.

### Administrar las {% data variables.product.prodname_dependabot_security_updates %} para tus repositorios

Puedes habilitar o inhabilitar las {% data variables.product.prodname_dependabot_security_updates %} para un repositorio individual.

También puedes habilitar o inhabilitar las {% data variables.product.prodname_dependabot_security_updates %} para todos los repositorios que pertenezcan atu cuenta de usuario u organización. Para obtener más información, consulta la sección "[Administrar la seguridad y la configuración de análisis para tu cuenta de usuario" o la sección](/github/setting-up-and-managing-your-github-user-account/managing-security-and-analysis-settings-for-your-user-account)"[Administrar la configuración de seguridad y análisis para tu organización](/github/setting-up-and-managing-organizations-and-teams/managing-security-and-analysis-settings-for-your-organization)".

Las {% data variables.product.prodname_dependabot_security_updates %} requieren de configuraciones de repositorio específicas. Para obtener más información, consulta la sección "[Repositorios compatibles](#supported-repositories)".

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-security %}
{% data reusables.repositories.sidebar-dependabot-alerts %}
1. Arriba de la lista de alertas, utiliza el menú desplegable y selecciona o deselecciona **alertas de seguridad del {% data variables.product.prodname_dependabot_short %}**. ![Menú desplegable con la opción de habilitar las {% data variables.product.prodname_dependabot_security_updates %}](/assets/images/help/repository/enable-dependabot-security-updates-drop-down.png)

### Leer más

- "[Acerca de las alertas para las dependencias vulnerables](/github/managing-security-vulnerabilities/about-alerts-for-vulnerable-dependencies)"
- "[Administrar la configuración de uso de datos para tu repositorio privado](/github/understanding-how-github-uses-and-protects-your-data/managing-data-use-settings-for-your-private-repository)".
- "[Ecosistemas de paquete compatibles](/github/visualizing-repository-data-with-graphs/about-the-dependency-graph#supported-package-ecosystems)"
