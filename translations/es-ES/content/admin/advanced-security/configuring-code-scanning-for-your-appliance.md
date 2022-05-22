---
title: Configurar el escaneo de código para tu aplicativo
shortTitle: Configurar el escaneo de código
intro: 'Puedes habilitar, configurar e inhabilitar el {% data variables.product.prodname_code_scanning %} para {% data variables.product.product_location %}. {% data variables.product.prodname_code_scanning_capc %} permite que los usuarios escaneen el código para encontrar vulnerabilidades y errores.'
product: '{% data reusables.gated-features.code-scanning %}'
miniTocMaxHeadingLevel: 4
redirect_from:
  - /enterprise/admin/configuration/configuring-code-scanning-for-your-appliance
  - /admin/configuration/configuring-code-scanning-for-your-appliance
versions:
  enterprise-server: '>=2.22'
type: how_to
topics:
  - Advanced Security
  - Code scanning
  - Enterprise
  - Security
---

{% data reusables.code-scanning.beta %}

### Acerca de {% data variables.product.prodname_code_scanning %}

{% data reusables.code-scanning.about-code-scanning %}

You can configure {% data variables.product.prodname_code_scanning %} to run {% data variables.product.prodname_codeql %} analysis and third-party analysis. {% data variables.product.prodname_code_scanning_capc %} also supports running analysis natively using {% data variables.product.prodname_actions %} or externally using existing CI/CD infrastructure. The table below summarizes all the options available to users when you configure {% data variables.product.product_location %} to allow {% data variables.product.prodname_code_scanning %} using actions.

{% data reusables.code-scanning.enabling-options %}

### Prerequisites for {% data variables.product.prodname_code_scanning %}

- A license for {% data variables.product.prodname_GH_advanced_security %}{% if currentVersion ver_gt "enterprise-server@3.0" %} (see "[About licensing for {% data variables.product.prodname_GH_advanced_security %}](/admin/advanced-security/about-licensing-for-github-advanced-security)"){% endif %}

- {% data variables.product.prodname_code_scanning_capc %} enabled in the management console (see "[Enabling {% data variables.product.prodname_GH_advanced_security %} for your enterprise](/admin/advanced-security/enabling-github-advanced-security-for-your-enterprise)")

- A VM or container for {% data variables.product.prodname_code_scanning %} analysis to run in.

### Ejecutar el {% data variables.product.prodname_code_scanning %} utilizando {% data variables.product.prodname_actions %}

#### Configurar un ejecutor auto-hospedado

{% data variables.product.prodname_ghe_server %} puede ejecutar un {% data variables.product.prodname_code_scanning %} utilizando un flujo de trabajo de {% data variables.product.prodname_actions %}. Primero, necesitas aprovisionar uno o más ejecutores auto-hospedados de {% data variables.product.prodname_actions %} en tu ambiente. Puedes aprovisionar ejecutores auto-hospedados a nivel de repositorio, organización o empresa. Para obtener más información, consulta las secciones "[Acerca de los ejecutores auto-hospedados](/actions/hosting-your-own-runners/about-self-hosted-runners)" y "[Agregar ejecutores auto-hospedados](/actions/hosting-your-own-runners/adding-self-hosted-runners)".

Debes asegurarte de que Git esté en la variable de "PATH" de cualquier ejecutor auto-hospedado que utilices para ejecutar las acciones de {% data variables.product.prodname_codeql %}.

#### Provisioning the actions for {% data variables.product.prodname_code_scanning %}

{% if currentVersion ver_gt "enterprise-server@2.22" %}
If you want to use actions to run {% data variables.product.prodname_code_scanning %} on {% data variables.product.prodname_ghe_server %}, the actions must be available on your appliance.

La acción {% data variables.product.prodname_codeql %} se incluye en tu instalación de {% data variables.product.prodname_ghe_server %}. Si {% data variables.product.prodname_ghe_server %} tiene acceso a internet, la acción descargará automáticamente el paquete de {% data variables.product.prodname_codeql %} que se requiere para realizar el análisis. Como alternativa, puedes utilizar una herramienta de sincronización para hacer disponible el paquete de análisis de {% data variables.product.prodname_codeql %} localmente. Para obtener más información, consulta la sección "[Configurar el análisis de {% data variables.product.prodname_codeql %} en un servidor sin acceso a internet](#configuring-codeql-analysis-on-a-server-without-internet-access)" a continuación.

También puedes hacer que acciones de terceros estén disponibles para el {% data variables.product.prodname_code_scanning %} para los usuarios si configuras {% data variables.product.prodname_github_connect %}. Para obtener más información, consulta la sección "[Configurar a {% data variables.product.prodname_github_connect %} para que se sincronice con {% data variables.product.prodname_actions %}](/enterprise/admin/configuration/configuring-code-scanning-for-your-appliance#configuring-github-connect-to-sync-github-actions)" más adelante.

#### Configurar el análisis de {% data variables.product.prodname_codeql %} en un servidor sin acceso a internet
Si el servidor en el que estás ejecutando a {% data variables.product.prodname_ghe_server %} no está conectado a internet y quieres permitir que los usuarios habiliten el {% data variables.product.prodname_code_scanning %} de {% data variables.product.prodname_codeql %} para sus repositorios, debes utilizar la herramienta de sincronización de la acción de {% data variables.product.prodname_codeql %} para copiar el paquete de análisis de {% data variables.product.prodname_codeql %} desde {% data variables.product.prodname_dotcom_the_website %} hacia tu servidor. La herramienta y los detalles de su uso se encuentran disponibles en [https://github.com/github/codeql-action-sync-tool](https://github.com/github/codeql-action-sync-tool/).

Si configuras la herramienta de sincronización de la acción de {% data variables.product.prodname_codeql %}, puedes utilizarla para sincronizar los últimos lanzamientos de la acción de {% data variables.product.prodname_codeql %} y el paquete de análisis de {% data variables.product.prodname_codeql %} relacionado. Estos son compatibles con {% data variables.product.prodname_ghe_server %}.

{% endif %}

{% if currentVersion == "enterprise-server@2.22" %}
Para ejecutar el {% data variables.product.prodname_code_scanning %} en {% data variables.product.prodname_ghe_server %} con las {% data variables.product.prodname_actions %}, las acciones adecuadas deben estar disponibles localmente. Puedes hacer que las acciones estén disponibles en tres formas.

- **Recomendada**: Puedes utilizar [{% data variables.product.prodname_github_connect %}](/enterprise/admin/configuration/connecting-github-enterprise-server-to-github-enterprise-cloud) para descargar acciones automáticamente desde {% data variables.product.prodname_dotcom_the_website %}. La máquina que hospeda tu instancia debe poder acceder a {% data variables.product.prodname_dotcom_the_website %}. Este enfoque garantiza que obtengas el software más reciente de forma automática. Para obtener más información, consulta la sección "[Configurar {% data variables.product.prodname_github_connect %} para que se sincronice con {% data variables.product.prodname_actions %}](/enterprise/admin/configuration/configuring-code-scanning-for-your-appliance#configuring-github-connect-to-sync-github-actions)".
- Si quieres utilizar el {% data variables.product.prodname_codeql_workflow %}, puedes sincronizar el repositorio de {% data variables.product.prodname_dotcom_the_website %} a {% data variables.product.prodname_ghe_server %}, utilizando la herramienta de sincronización de acciones de {% data variables.product.prodname_codeql %} en [https://github.com/github/codeql-action-sync-tool](https://github.com/github/codeql-action-sync-tool/). Puedes utilizar esta herramienta sin importar si {% data variables.product.product_location %} o tus ejecutores de {% data variables.product.prodname_actions %} tienen acceso a internet, siempre y cuando puedas acceder tanto a {% data variables.product.product_location %} como a {% data variables.product.prodname_dotcom_the_website %} de forma simultánea en tu computadora.
- Puedes crear una copia local del repositorio de una accion en tu servidor si clonas el repositorio de {% data variables.product.prodname_dotcom_the_website %} que contiene la acción. Por ejemplo, si quieres utilizar acciones para el {% data variables.product.prodname_code_scanning %} de {% data variables.product.prodname_codeql %}, puedes crear un repositorio en tu instancia, el cual se llame `github/codeql-action`, y luego clonar el [repositorio](https://github.com/github/codeql-action) desde {% data variables.product.prodname_dotcom_the_website %} y posteriormente subir ese repositorio en el de `github/codeql-action` de tu instancia. También necesitarás descargar cualquiera de los lanzamientos del repositorio en {% data variables.product.prodname_dotcom_the_website %} y cargarlos en el repositorio de `github/codeql-action` de tu instancia como lanzamientos.
{% endif %}

#### Configurar {% data variables.product.prodname_github_connect %} para sincronizarse con {% data variables.product.prodname_actions %}
1. Si quieres descargar flujos de trabajo de acciones por petición desde {% data variables.product.prodname_dotcom_the_website %}, necesitarás habilitar {% data variables.product.prodname_github_connect %}. Para obtener más información, consulta la sección "[Habilitar {% data variables.product.prodname_github_connect %}](/enterprise/admin/configuration/connecting-github-enterprise-server-to-github-enterprise-cloud#enabling-github-connect)".
2. También tendrás que habilitar {% data variables.product.prodname_actions %} para {% data variables.product.product_location %}. Para obtener más información, consulta la sección "[Iniciar con las {% data variables.product.prodname_actions %} para {% data variables.product.prodname_ghe_server %}](/admin/github-actions/getting-started-with-github-actions-for-github-enterprise-server)".
3. El siguiente paso es configurar el acceso a las acciones en {% data variables.product.prodname_dotcom_the_website %} utilizando {% data variables.product.prodname_github_connect %}. Para obtener más información, consulta la sección "[Habilitar el acceso automático a las acciones de {% data variables.product.prodname_dotcom_the_website %} utilizando{% data variables.product.prodname_github_connect %}](/enterprise/admin/github-actions/enabling-automatic-access-to-githubcom-actions-using-github-connect)".
4. Agrega un ejecutor auto-hospedado a tu repositorio, organización, o cuenta empresarial. Para obtener más información, consulta "[Agregar ejecutores autoalojados](/actions/hosting-your-own-runners/adding-self-hosted-runners)."

### Ejecutar el {% data variables.product.prodname_code_scanning %} utilizando el {% data variables.product.prodname_codeql_runner %}
Si no quieres utilizar {% data variables.product.prodname_actions %}, puedes ejecutar el {% data variables.product.prodname_code_scanning %} utilizando el {% data variables.product.prodname_codeql_runner %}.

El {% data variables.product.prodname_codeql_runner %} es una herramienta de línea de comandos que puedes agregar a tu sistema de IC/CD de terceros. Esta herramienta ejecuta el análisis de {% data variables.product.prodname_codeql %} en un control de un repositorio de {% data variables.product.prodname_dotcom %}. Para obtener más información, consulta la sección "[Ejecutar el {% data variables.product.prodname_code_scanning %} en tu sistema de IC](/github/finding-security-vulnerabilities-and-errors-in-your-code/running-codeql-code-scanning-in-your-ci-system)".
