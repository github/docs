---
title: Acerca de los ejecutores autoalojados
intro: 'Puedes alojar tus propios ejecutores y personalizar el entorno utilizado para ejecutar trabajos en tus flujos de trabajo de {% data variables.product.prodname_actions %}.'
redirect_from:
  - /github/automating-your-workflow-with-github-actions/about-self-hosted-runners
  - /actions/automating-your-workflow-with-github-actions/about-self-hosted-runners
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
  github-ae: '*'
type: overview
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}

### Acerca de los ejecutores autoalojados

{% data reusables.github-actions.self-hosted-runner-description %} Los ejecutores auto-hospedados pueden ser físicos, virtuales, estar en un contenedor, en los servidores del usuario, o en la nube.

Puedes agregar ejecutores auto-hospedados en varios niveles dentro de la jerarquía de administración:
- Los ejecutores a nivel de repositorio están dedicados a un solo repositorio.
- Los ejecutores a nivel de organización pueden procesar jobs para varios repositorios dentro de una organización.
- Los ejecutores a nivel de empresa puede asignarse a varias organizaciones en una cuenta empresarial.

La máquina de tu ejecutor se conecta a{% data variables.product.product_name %} utilizando la aplicación para ejecutores auto-hospedados de {% data variables.product.prodname_actions %}. {% data reusables.github-actions.runner-app-open-source %} Cuando se lanza una nueva versión, la aplicación del ejecutor se actualiza automáticamente cuando se asigna un job al ejecutor, o dentro de una semana de lanzamiento si dicho ejecutor no se ha asignado a ningún job.

{% data reusables.github-actions.self-hosted-runner-auto-removal %}

Para obtener más información acerca de la instalación y el uso de los ejecutores autoalojados, consulta "[Agregar ejecutores autoalojados](/github/automating-your-workflow-with-github-actions/adding-self-hosted-runners)" y "[Usar ejecutores autoalojados en un flujo de trabajo](/github/automating-your-workflow-with-github-actions/using-self-hosted-runners-in-a-workflow)."

### Diferencias entre ejecutores alojados en {% data variables.product.prodname_dotcom %} y autoalojados

Los ejecutores alojados en {% data variables.product.prodname_dotcom %} ofrecen una manera más rápida y sencilla de ejecutar tus flujos de trabajo, mientras que los ejecutores autoalojados son una manera altamente configurable de ejecutar flujos de trabajo en tu propio entorno personalizado.

**Ejecutores alojados en {% data variables.product.prodname_dotcom %}:**
- Reciben actualizaciones automáticas para el sistema operativo, paquetes y herramientas pre-instalados, y la aplicación del ejecutor auto-hospedado.
- Son administrados y mantenidos por {% data variables.product.prodname_dotcom %}.
- Proporcionan una instancia limpia para cada ejecución de trabajo.
- Usan minutos libres en tu plan de {% data variables.product.prodname_dotcom %}, con tarifas por minuto aplicadas después de superar los minutos libres.

**Ejecutores auto-hospedados:**
- Reciben actualizaciones automáticas únicamente para la aplicación del ejecutor auto-hospedado. Eres responsable de actualizar el sistema operativo y el resto del software.
- Puedes usar los servicios en la nube o las máquinas locales que ya pagas.
- Son personalizables para tu hardware, sistema operativo, software y requisitos de seguridad.
- No es necesario tener una instancia limpia para cada ejecución de trabajo.
- Son de uso gratuito con las {% data variables.product.prodname_actions %}, pero eres responsable del costo de mantener tus máquinas de ejecutores.

### Requisitos para máquinas de ejecutores autoalojados

Puedes utilizar cualquier máquina como ejecutor auto-hospedado mientras cumpla con los siguientes requisitos:

* Puedes instalar y ejecutar la aplicación del ejecutor autoalojado en la máquina. Para obtener más información, consulta "[Sistemas operativos compatibles para ejecutores autoalojados](#supported-operating-systems-for-self-hosted-runners)."
* La máquina puede comunicarse con {% data variables.product.prodname_actions %}. Para obtener más información, consulta "[La comunicación entre ejecutores autoalojados y {% data variables.product.prodname_dotcom %}](#communication-between-self-hosted-runners-and-github)."
* La máquina tiene suficientes recursos de hardware para el tipo de flujos de trabajo que planeas ejecutar. La propia aplicación del ejecutor autoalojado solo requiere unos recursos mínimos.
* Si quieres ejecutar flujos de trabajo que usan acciones del contenedor Docker o contenedores de servicio, debes usar una máquina Linux y Docker debe estar instalado.

### Sistemas operativos compatibles para ejecutores autoalojados

Los siguientes sistemas operativos son compatibles con la aplicación del ejecutor auto-hospedado.

#### Linux

- Red Hat Enterprise Linux 7
- CentOS 7
- Oracle Linux 7
- Fedora 29 o posterior
- Debian 9 o posterior
- Ubuntu 16.04 o posterior
- Linux Mint 18 o posterior
- openSUSE 15 o posterior
- SUSE Enterprise Linux (SLES) 12 SP2 o posterior

#### Windows

- Windows 7 64-bit
- Windows 8.1 64-bit
- Windows 10 64-bit
- Windows Server 2012 R2 64-bit
- Windows Server 2016 64-bit
- Windows Server 2019 64-bit

#### MacOS

- macOS 10.13 (High Sierra) o posterior

{% if currentVersion != "free-pro-team@latest" %}

### La comunicación entre ejecutores autoalojados y {% data variables.product.prodname_dotcom %}

La máquina puede comunicarse con {% data variables.product.prodname_actions %}. Para obtener más información, consulta "[La comunicación entre ejecutores autoalojados y {% data variables.product.prodname_dotcom %}](#communication-between-self-hosted-runners-and-github)."

{% endif %}

### La comunicación entre ejecutores autoalojados y {% data variables.product.product_name %}

El ejecutor auto-hospedado sondea a {% data variables.product.product_name %} para solicitar actualizaciones de aplicaciones y para revisar si hay jobs en cola para su procesamiento. El ejecutor auto-hospedado utiliza un _sondeo largo_ de HTTPS que abre una conexión a {% data variables.product.product_name %} por 50 segundos, y si no recibe respuesta alguna, expira y crea un nuevo sondeo largo. La aplicación debe estar ejecutándose en la máquina para aceptar y ejecutar trabajos de {% data variables.product.prodname_actions %}.

{% if currentVersion == "free-pro-team@latest" %}

Debes asegurarte de que la máquina tiene el acceso a la red adecuado para comunicarte con las URL de {% data variables.product.prodname_dotcom %} listadas a continuación.

```
github.com
api.github.com
*.actions.githubusercontent.com
```

Si utilizas un listado de direcciones IP permitidas para tu cuenta organizacional o empresarial de {% data variables.product.prodname_dotcom %}, debes agregar la dirección IP de tu ejecutor auto-hospedado a dicha lista. Para obtener más información, consulta "[Administrar las direcciones IP permitidas para tu organización](/github/setting-up-and-managing-organizations-and-teams/managing-allowed-ip-addresses-for-your-organization#using-github-actions-with-an-ip-allow-list)" o "[Hacer cumplir los parámetros de seguridad en tu cuenta de empresa](/github/setting-up-and-managing-your-enterprise-account/enforcing-security-settings-in-your-enterprise-account#using-github-actions-with-an-ip-allow-list)".

{% else %}

Debes asegurarte de que la máquina tenga el acceso a la red adecuado para comunicarse con {% data variables.product.product_location %}.

{% endif %}

También puedes usar ejecutores autoalojados con un servidor proxy. Para obtener más información, consulta "[Usar un servidor proxy con ejecutores autoalojados](/actions/automating-your-workflow-with-github-actions/using-a-proxy-server-with-self-hosted-runners)."

### Seguridad de ejecutores autoalojdados con repositorios públicos

{% data reusables.github-actions.self-hosted-runner-security %}

Esto no es un problema con los ejecutores alojados en {% data variables.product.prodname_dotcom %} porque cada ejecutor alojado en {% data variables.product.prodname_dotcom %} siempre es una máquina virtual aislada y limpia y se destruye al final de la ejecución del trabajo.

Los flujos de trabajo no confiables que se ejecuten en tu ejecutor auto-hospedado representan riesgos de seguridad significativos para tu máquina y tu ambiente de red, especialmente si tu máquina persiste su ambiente entre jobs. Algunos de estos riesgos incluyen:

* Programas maliciosos que se ejecutan en la máquina.
* Escapar del entorno Sandbox del ejecutor de la máquina.
* Exponer el acceso al entorno de red de la máquina.
* Mantener datos peligrosos o no deseados en la máquina.
