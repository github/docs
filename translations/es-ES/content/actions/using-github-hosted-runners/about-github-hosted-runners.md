---
title: Acerca de los ejecutores hospedados en GitHub
intro: '{% data variables.product.prodname_dotcom %} ofrece máquinas virtuales alojadas para ejecutar flujos de trabajo. La máquina virtual contiene un entorno de herramientas, paquetes y configuraciones disponibles para que {% data variables.product.prodname_actions %} los utilice.'
product: '{% data reusables.gated-features.actions %}'
redirect_from:
  - /articles/virtual-environments-for-github-actions
  - /github/automating-your-workflow-with-github-actions/virtual-environments-for-github-actions
  - /github/automating-your-workflow-with-github-actions/virtual-environments-for-github-hosted-runners
  - /actions/automating-your-workflow-with-github-actions/virtual-environments-for-github-hosted-runners
  - /actions/reference/virtual-environments-for-github-hosted-runners
  - /actions/reference/software-installed-on-github-hosted-runners
  - /actions/reference/specifications-for-github-hosted-runners
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}

### Acerca de ejecutores alojados en {% data variables.product.prodname_dotcom %}

Un ejecutor alojado en {% data variables.product.prodname_dotcom %} es una máquina virtual alojada por {% data variables.product.prodname_dotcom %} con la aplicación del ejecutor {% data variables.product.prodname_actions %} instalada. {% data variables.product.prodname_dotcom %} ofrece ejecutores con sistemas operativos Linux, Windows y macOS.

Cuando usas un ejecutor alojado en {% data variables.product.prodname_dotcom %}, se contemplan el mantenimiento de la máquina y las actualizaciones. Puedes ejecutar flujos de trabajo directamente en la máquina virtual o en un contenedor Docker.

Puedes especificar el tipo de ejecutor para cada puesto en un flujo de trabajo. Cada puesto en un flujo de trabajo se ejecuta en una instancia nueva de la máquina virtual. Todos los pasos del trabajo se ejecutan en la misma instancia de la máquina virtual, lo que permite que las acciones de ese trabajo compartan información usando el sistema de archivos.

{% data reusables.github-actions.runner-app-open-source %}

#### Hosts en la nube para ejecutores alojados en {% data variables.product.prodname_dotcom %}

{% data variables.product.prodname_dotcom %} aloja ejecutores de Linux y Windows en máquinas virtuales Standard_DS2_v2 en Microsoft Azure con la aplicación del ejecutor de {% data variables.product.prodname_actions %} instalada. La aplicación del ejecutor alojada en {% data variables.product.prodname_dotcom %} es una bifurcación del agente de Azure Pipelines. Los paquetes ICMP entrantes están bloqueados para todas las máquinas virtuales de Azure, por lo tanto, es posible que los comandos ping o traceroute no funcionen. Para obtener más información acerca de los recursos de la máquina Standard_DS2_v2, consulta "[Dv2 y DSv2-series](https://docs.microsoft.com/azure/virtual-machines/dv2-dsv2-series#dsv2-series)"en la documentación de Microsoft Azure.

{% data variables.product.prodname_dotcom %} hospeda ejecutores de macOS en la nube de macOS propia de {% data variables.product.prodname_dotcom %}.

#### Continuidad del flujo de trabajo para los ejecutores hospedados en {% data variables.product.prodname_dotcom %}

{% data reusables.github-actions.runner-workflow-continuity %}

Adicionalmente, si la ejecución de flujo de trabajo se puso en cola con éxito, pero no la ha procesado un ejecutor hospedado en {% data variables.product.prodname_dotcom %} en los 45 minutos subsecuentes, entonces la ejecución de flujo de trabajo en cola se descartará.

#### Privilegios administrativos de los ejecutores alojados en {% data variables.product.prodname_dotcom %}

Las máquinas virtuales Linux y macPS se ejecutan sin la contraseña `sudo`. Cuando necesitas ejecutar comandos o instalar herramientas que requieren más privilegios que el usuario actual, puedes usar `sudo` sin la necesidad de brindar una contraseña. Para obtener más información, consulta "[Manual de sudo](https://www.sudo.ws/man/1.8.27/sudo.man.html)."

Las máquinas virtuales de Windows están configuradas para ejecutarse como administradores con el control de cuentas de usuario (UAC) inhabilitado. Para obtener más información, consulta "[Cómo funciona el control de cuentas de usuario](https://docs.microsoft.com/windows/security/identity-protection/user-account-control/how-user-account-control-works)" en la documentación de Windows.

### Ejecutores y recursos de hardware compatibles

Especificación de hardware para las máquinas virtuales Windows y Linux:
- CPU de 2 núcleos
- 7 GB de memoria RAM
- 14 GB de espacio en el disco SSD

Especificación de hardware para las máquinas virtuales macOS:
- CPU de 3 núcleos
- 14 GB de memoria RAM
- 14 GB de espacio en el disco SSD

{% data reusables.github-actions.supported-github-runners %}

{% data reusables.github-actions.macos-runner-preview %}

Las bitácoras de flujos de trabajo listan los ejecutores que se usan para ejecutar un job. Para obtener más información, consulta la sección "[Visualizar el historial de ejecuciones de un flujo de trabajo](/actions/managing-workflow-runs/viewing-workflow-run-history)".

### Software compatible

Las herramientas de software que se incluyen en los ejecutores hospedados en {% data variables.product.prodname_dotcom %} se actualizan semanalmente. El proceso de actualización toma varios días y la lista de software pre-instalado en la rama `main` se actualiza después de que termine todo el despliegue.
#### Software preinstalado

Las bitácoras de flujo de trabajo incluyen un enlace a las herramientas preinstaladas en el ejecutor exacto. Para encontrar eta información en la bitácora del flujo de trabajo, expande la sección `Configurar job`. Debajo de esta sección, expande la sección `Ambiente Virtual`. El enlace que sigue de `Software Incluído` te mostrará las herramientas preinstaladas en el ejecutor que ejecutó el flujo de trabajo. ![Installed software link](/assets/images/actions-runner-installed-software-link.png) Para obtener más información, consulta la sección "[Ver el hstorial de ejecuciones del flujo de trabajo](/actions/managing-workflow-runs/viewing-workflow-run-history)".

Para encontrar una lista general de las herramientas que se incluyen en cada sistema operativo de los ejecutores, visita los siguientes enlaces:

* [Ubuntu 20.04 LTS](https://github.com/actions/virtual-environments/blob/main/images/linux/Ubuntu2004-README.md)
* [Ubuntu 18.04 LTS](https://github.com/actions/virtual-environments/blob/main/images/linux/Ubuntu1804-README.md)
* [Windows Server 2019](https://github.com/actions/virtual-environments/blob/main/images/win/Windows2019-Readme.md)
* [Windows Server 2016](https://github.com/actions/virtual-environments/blob/main/images/win/Windows2016-Readme.md)
* [macOS 11](https://github.com/actions/virtual-environments/blob/main/images/macos/macos-11-Readme.md)
* [macOS 10.15](https://github.com/actions/virtual-environments/blob/main/images/macos/macos-10.15-Readme.md)

Los ejecutores alojados en {% data variables.product.prodname_dotcom %} incluyen las herramientas integradas predeterminadas del sistema operativo, además de los paquetes enumerados en las referencias anteriores. Por ejemplo, los ejecutores de Ubuntu y macOS incluyen `grep`, `find` y `which`, entre otras herramientas predeterminadas.

#### Utilizar el software preinstalado

Te recomendamos utilizar acciones para interactuar con el software instalado en los ejecutores. Este acercamiento tiene varios beneficios:
- Habitualmente, las acciones proporcionan una funcionalidad más flexible, como la selección de versiones, la capacidad de pasar argumentos y los parámetros
- Garantiza que las versiones de herramienta que se utilizan en tu flujo de trabajo permanecerán iguales sin importar las actualizaciones de software

Si hay alguna herramienta que quieras solicitar, abre una propuesta en [actions/virtual-environments](https://github.com/actions/virtual-environments). Este repositorio también contiene anuncios sobre todas las actualizaciones de software principales en los ejecutores.

#### Instalar software adicional

Puedes instalar software adicional en los ejecutores hospedados en {% data variables.product.prodname_dotcom %}. Para obtener más información, consulta la sección [Personalizar los ejecutores hospedados en GitHub](/actions/using-github-hosted-runners/customizing-github-hosted-runners)".

### Direcciones IP

{% note %}

**Nota:** Si usas una lista de direcciones IP permitidas para tu cuenta de organización o de empresa {% data variables.product.prodname_dotcom %}, no puedes usar ejecutores alojados en {% data variables.product.prodname_dotcom %} y, en su lugar, debes usar ejecutores autoalojados. Para obtener más información, consulta "[Acerca de los ejecutores autoalojados](/actions/hosting-your-own-runners/about-self-hosted-runners)."

{% endnote %}

Los ejecutores de Windows y de Ubuntu se hospedan en Azure y, subsecuentemente, tienen los mismos rangos de direcciones IP que los centros de datos de Azure. Los ejecutores de macOS se hospedan en la nube de macOS propia de {% data variables.product.prodname_dotcom %}.

Para obtener una lista de los rangos de direcciones IP que utiliza {% data variables.product.prodname_actions %} para los ejecutores hospedados en {% data variables.product.prodname_dotcom %}, puedes utilizar la API de REST de {% data variables.product.prodname_dotcom %}. Para obtener más información, consulta la clave `actions` en la respuesta de la terminal de [Obtener información meta de GitHub](/rest/reference/meta#get-github-meta-information)". Puedes utilizar esta lista de direcciones IP si requieres prevenir acceso no autorizados a tus recursos internos mediante una lista de direcciones IP permitidas.

La lista de direcciones IP permitidas de {% data variables.product.prodname_actions %} que devuelve la API se actualiza una vez por semana.

### Sistemas de archivos

{% data variables.product.prodname_dotcom %} ejecuta acciones y comandos de shell en directorios específicos en la máquina virtual. Las rutas de archivo en las máquinas virtuales no son estáticas. Usa las variables de entorno que proporciona {% data variables.product.prodname_dotcom %} para construir rutas de archivo para los directorios `home`, `workspace` y `workflow`.

| Directorio            | Variable de entorno | Descripción                                                                                                                                                                                                               |
| --------------------- | ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `home`                | `HOME`              | Contiene datos relacionados con el usuario. Por ejemplo, este directorio podría contener las credenciales de un intento de inicio de sesión.                                                                              |
| `workspace`           | `GITHUB_WORKSPACE`  | Las acciones y los comandos del shell se ejecutan en este directorio. Una acción puede modificar los contenidos de este directorio, al que pueden tener acceso acciones posteriores.                                      |
| `workflow/event.json` | `GITHUB_EVENT_PATH` | La carga `POST` del evento de webhook que activó el flujo de trabajo. {% data variables.product.prodname_dotcom %} reescribe esto cada vez que se ejecuta una acción para aislar el contenido del archivo entre acciones. |

Para obtener una lista de las variables de entorno que crea {% data variables.product.prodname_dotcom %} para cada flujo de trabajo, consulta "[Usar variables de entorno](/github/automating-your-workflow-with-github-actions/using-environment-variables)".

#### Sistema de archivos del contenedor de Docker

Las acciones que se ejecutan en contenedores Docker tienen directorios estáticos en la ruta `/github`. Sin embargo, te recomendamos encarecidamente que uses las variables de entorno predeterminadas para construir rutas de archivos en contenedores de Docker.

{% data variables.product.prodname_dotcom %} se reserva el prefijo de ruta `/github` y crea tres directorios para las acciones.

- `/github/home`
- `/github/workspace` - {% data reusables.repositories.action-root-user-required %}
- `/github/workflow`

{% if currentVersion == "free-pro-team@latest" %}

### Leer más
- "[Administrar la facturación de {% data variables.product.prodname_actions %}](/billing/managing-billing-for-github-actions)"

{% endif %}
