---
title: Acerca de los ejecutores hospedados en GitHub
intro: '{% data variables.product.prodname_dotcom %} ofrece máquinas virtuales hospedadas para ejecutar flujos de trabajo. La máquina virtual contiene un entorno de herramientas, paquetes y configuraciones disponibles para que {% data variables.product.prodname_actions %} los utilice.'
redirect_from:
  - /articles/virtual-environments-for-github-actions
  - /github/automating-your-workflow-with-github-actions/virtual-environments-for-github-actions
  - /github/automating-your-workflow-with-github-actions/virtual-environments-for-github-hosted-runners
  - /actions/automating-your-workflow-with-github-actions/virtual-environments-for-github-hosted-runners
  - /actions/reference/virtual-environments-for-github-hosted-runners
  - /actions/reference/software-installed-on-github-hosted-runners
  - /actions/reference/specifications-for-github-hosted-runners
miniTocMaxHeadingLevel: 3
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
shortTitle: GitHub-hosted runners
ms.openlocfilehash: c1cf922cbd025daa307462d6b81b62f58db420b0
ms.sourcegitcommit: 478f2931167988096ae6478a257f492ecaa11794
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/09/2022
ms.locfileid: '147763679'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## Información general de ejecutores hospedados en {% data variables.product.prodname_dotcom %}

Los ejecutores son las máquinas que ejecutan trabajos en un flujo de trabajo de {% data variables.product.prodname_actions %}. Por ejemplo, un ejecutor puede clonar el repositorio localmente, instalar software de prueba y, a continuación, ejecutar comandos que evalúen el código. 

{% data variables.product.prodname_dotcom %} proporciona ejecutores que puedes usar para ejecutar los trabajos o puedes [hospedar tus propios ejecutores](/actions/hosting-your-own-runners/about-self-hosted-runners). Cada ejecutor hospedado en {% data variables.product.prodname_dotcom %} es una nueva máquina virtual (VM) hospedada por {% data variables.product.prodname_dotcom %} con la aplicación del ejecutor y otras herramientas preinstaladas, y está disponible con sistemas operativos Ubuntu Linux, Windows o macOS. Cuando usas un ejecutor alojado en {% data variables.product.prodname_dotcom %}, se contemplan el mantenimiento de la máquina y las actualizaciones.

{% ifversion not ghes %}

## Usar un ejecutor hospedado en {% data variables.product.prodname_dotcom %}

Para usar un ejecutor hospedado en {% data variables.product.prodname_dotcom %}, crea un trabajo y usa `runs-on` para especificar el tipo de ejecutor que procesará el trabajo, como `ubuntu-latest`, `windows-latest`o `macos-latest`. Para obtener la lista completa de tipos de ejecutor, consulta "[Ejecutores y recursos de hardware admitidos](/actions/using-github-hosted-runners/about-github-hosted-runners#supported-runners-and-hardware-resources)".

Cuando comienza el trabajo, {% data variables.product.prodname_dotcom %} aprovisiona automáticamente una nueva máquina virtual para ese trabajo. Todos los pasos del trabajo se ejecutan en la máquina virtual, lo que permite que los pasos de ese trabajo compartan información mediante el sistema de archivos del ejecutor. Puedes ejecutar flujos de trabajo directamente en la máquina virtual o en un contenedor de Docker. Una vez finalizado el trabajo, la máquina virtual se retira automáticamente.

En el diagrama siguiente se muestra cómo se ejecutan dos trabajos de un flujo de trabajo en dos ejecutores hospedados en {% data variables.product.prodname_dotcom %} diferentes. 

![Dos ejecutores que procesan trabajos independientes](/assets/images/help/images/overview-github-hosted-runner.png)

El siguiente flujo de trabajo de ejemplo tiene dos trabajos, denominados `Run-npm-on-Ubuntu` y `Run-PSScriptAnalyzer-on-Windows`. Cuando se desencadena este flujo de trabajo, {% data variables.product.prodname_dotcom %} aprovisiona una nueva máquina virtual para cada trabajo. 

- El trabajo denominado `Run-npm-on-Ubuntu` se ejecuta en una máquina virtual Linux, ya que el elemento `runs-on:` del trabajo especifica `ubuntu-latest`. 
- El trabajo denominado `Run-PSScriptAnalyzer-on-Windows` se ejecuta en una máquina virtual Windows, ya que el elemento `runs-on:` del trabajo especifica `windows-latest`. 

```yaml{:copy}
name: Run commands on different operating systems
on:
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]

jobs:
  Run-npm-on-Ubuntu:
    name: Run npm on Ubuntu
    runs-on: ubuntu-latest
    steps:
      - uses: {% data reusables.actions.action-checkout %}
      - uses: {% data reusables.actions.action-setup-node %}
        with:
          node-version: '14'
      - run: npm help

  Run-PSScriptAnalyzer-on-Windows:
    name: Run PSScriptAnalyzer on Windows
    runs-on: windows-latest
    steps:
      - uses: {% data reusables.actions.action-checkout %}
      - name: Install PSScriptAnalyzer module
        shell: pwsh
        run: |
          Set-PSRepository PSGallery -InstallationPolicy Trusted
          Install-Module PSScriptAnalyzer -ErrorAction Stop
      - name: Get list of rules
        shell: pwsh
        run: |
          Get-ScriptAnalyzerRule
```

Mientras se ejecuta el trabajo, los registros y la salida se pueden ver en la interfaz de usuario de {% data variables.product.prodname_dotcom %}:

![Salida del trabajo en la interfaz de usuario de Acciones](/assets/images/help/repository/actions-runner-output.png)

{% data reusables.actions.runner-app-open-source %}

## Ejecutores y recursos de hardware compatibles

{% ifversion actions-hosted-runners %}

{% note %}

**Nota**: {% data variables.product.prodname_dotcom %} también ofrece {% data variables.actions.hosted_runner %}, que están disponibles en configuraciones más grandes. Para obtener más información, consulta "[Uso de {% data variables.actions.hosted_runner %}](/actions/using-github-hosted-runners/using-larger-runners)". 

{% endnote %} {% endif %}

Especificación de hardware para las máquinas virtuales Windows y Linux:
- CPU de 2 núcleos (x86_64)
- 7 GB de RAM
- 14 GB de espacio en SSD

Especificación de hardware para las máquinas virtuales macOS:
- CPU de 3 núcleos (x86_64)
- 14 GB de RAM
- 14 GB de espacio en SSD

{% data reusables.actions.supported-github-runners %}

Las bitácoras de flujos de trabajo listan los ejecutores que se usan para ejecutar un job. Para más información, vea "[Visualización del historial de ejecución de flujos de trabajo](/actions/managing-workflow-runs/viewing-workflow-run-history)".

## Software compatible

Las herramientas de software que se incluyen en los ejecutores hospedados en {% data variables.product.prodname_dotcom %} se actualizan semanalmente. El proceso de actualización toma varios días y la lista de software preinstalado en la rama `main` se actualiza después de que termine toda la implementación. 
### Software preinstalado

Las bitácoras de flujo de trabajo incluyen un enlace a las herramientas preinstaladas en el ejecutor exacto. Para encontrar esta información en el registro del flujo de trabajo, expanda la sección `Set up job`. En esa sección, expanda la sección `Runner Image`. El enlace que sigue a `Included Software` describirá las herramientas preinstaladas en el ejecutor que ha ejecutado el flujo de trabajo.
![Vínculo de software instalado](/assets/images/actions-runner-installed-software-link.png) Para obtener más información, vea "[Visualización del historial de ejecución del flujo de trabajo](/actions/managing-workflow-runs/viewing-workflow-run-history)".

Para encontrar una lista general de las herramientas que se incluyen en cada sistema operativo de los ejecutores, visita los siguientes enlaces:

* [Ubuntu 22.04 LTS](https://github.com/actions/runner-images/blob/main/images/linux/Ubuntu2204-Readme.md)
* [Ubuntu 20.04 LTS](https://github.com/actions/runner-images/blob/main/images/linux/Ubuntu2004-Readme.md)
* [Ubuntu 18.04 LTS](https://github.com/actions/runner-images/blob/main/images/linux/Ubuntu1804-Readme.md) (en desuso)
* [Windows Server 2022](https://github.com/actions/runner-images/blob/main/images/win/Windows2022-Readme.md)
* [Windows Server 2019](https://github.com/actions/runner-images/blob/main/images/win/Windows2019-Readme.md)
* [macOS 12](https://github.com/actions/runner-images/blob/main/images/macos/macos-12-Readme.md)
* [macOS 11](https://github.com/actions/runner-images/blob/main/images/macos/macos-11-Readme.md)
* [macOS 10.15](https://github.com/actions/runner-images/blob/main/images/macos/macos-10.15-Readme.md)

Los ejecutores alojados en {% data variables.product.prodname_dotcom %} incluyen las herramientas integradas predeterminadas del sistema operativo, además de los paquetes enumerados en las referencias anteriores. Por ejemplo, los ejecutores de Ubuntu y macOS incluyen `grep`, `find` y `which`, entre otras herramientas predeterminadas. 

### Utilizar el software preinstalado

Te recomendamos utilizar acciones para interactuar con el software instalado en los ejecutores. Este enfoque tiene varias ventajas:
- Habitualmente, las acciones proporcionan una funcionalidad más flexible, como la selección de versiones, la capacidad de pasar argumentos y los parámetros
- Garantiza que las versiones de herramienta que se utilizan en tu flujo de trabajo permanecerán iguales sin importar las actualizaciones de software

Si deseas solicitar alguna herramienta, abre una incidencia en [actions/runner-images](https://github.com/actions/runner-images). Este repositorio también contiene anuncios sobre todas las actualizaciones de software principales en los ejecutores.

### Instalar software adicional

Puedes instalar software adicional en los ejecutores hospedados en {% data variables.product.prodname_dotcom %}. Para obtener más información, vea "[Personalización de ejecutores hospedados en GitHub](/actions/using-github-hosted-runners/customizing-github-hosted-runners)".

## Hosts en la nube usados por ejecutores hospedados en {% data variables.product.prodname_dotcom %}

{% data variables.product.prodname_dotcom %} hospeda ejecutores de Linux y Windows en máquinas virtuales `Standard_DS2_v2` en Microsoft Azure con la aplicación del ejecutor de {% data variables.product.prodname_actions %} instalada. La aplicación del ejecutor alojada en {% data variables.product.prodname_dotcom %} es una bifurcación del agente de Azure Pipelines. Los paquetes ICMP entrantes están bloqueados para todas las máquinas virtuales de Azure, por lo tanto, es posible que los comandos ping o traceroute no funcionen. Para obtener más información sobre los recursos `Standard_DS2_v2`, consulta "[Series Dv2 y DSv2](https://docs.microsoft.com/azure/virtual-machines/dv2-dsv2-series#dsv2-series)" en la documentación de Microsoft Azure.

{% data variables.product.prodname_dotcom %} hospeda ejecutores de macOS en la nube de macOS propia de {% data variables.product.prodname_dotcom %}.

## Continuidad del flujo de trabajo

{% data reusables.actions.runner-workflow-continuity %}

Adicionalmente, si la ejecución de flujo de trabajo se puso en cola con éxito, pero no la ha procesado un ejecutor hospedado en {% data variables.product.prodname_dotcom %} en los 45 minutos subsecuentes, entonces la ejecución de flujo de trabajo en cola se descartará.

## Privilegios administrativos

Las máquinas virtuales Linux y macOS se ejecutan sin la contraseña `sudo`. Cuando necesite ejecutar comandos o instalar herramientas que requieran más privilegios que el usuario actual, puede usar `sudo` sin tener que introducir una contraseña. Para obtener más información, vea el "[Manual de Sudo](https://www.sudo.ws/man/1.8.27/sudo.man.html)".

Las máquinas virtuales de Windows están configuradas para ejecutarse como administradores con el control de cuentas de usuario (UAC) inhabilitado. Para obtener más información, vea "[Funcionamiento del control de cuentas de usuario](https://docs.microsoft.com/windows/security/identity-protection/user-account-control/how-user-account-control-works)" en la documentación de Windows.

## Direcciones IP

{% note %}

**Nota**: Si usa una lista de direcciones IP permitidas para su cuenta de organización o de empresa {% data variables.product.prodname_dotcom %}, no puede usar ejecutores hospedados en {% data variables.product.prodname_dotcom %} y, en su lugar, debes usar ejecutores autohospedados. Para más información, consulte [Seguridad del ejecutor autohospedado con repositorios públicos](/actions/hosting-your-own-runners/about-self-hosted-runners).

{% endnote %}

Para ver una lista de rangos de direcciones IP que utiliza {% data variables.product.prodname_actions %} para los ejecutores hospedados en {% data variables.product.prodname_dotcom %}, puedes utilizar la API de REST de {% data variables.product.prodname_dotcom %}. Para obtener más información, vea la clave `actions` en la respuesta del punto de conexión de "[Obtención de información de metadatos de GitHub](/rest/reference/meta#get-github-meta-information)".

Los ejecutores de Windows y de Ubuntu se hospedan en Azure y, subsecuentemente, tienen los mismos rangos de direcciones IP que los centros de datos de Azure. Los ejecutores de macOS se hospedan en la nube de macOS propia de {% data variables.product.prodname_dotcom %}.

Ya que hay muchos rangos de direcciones IP para los ejecutores hospedados en {% data variables.product.prodname_dotcom %}, no te recomendamos que los utilices como listas de direcciones permitidas para tus recursos internos.

La lista de direcciones IP permitidas de {% data variables.product.prodname_actions %} que devuelve la API se actualiza una vez por semana. 

## Sistemas de archivos

{% data variables.product.prodname_dotcom %} ejecuta acciones y comandos de shell en directorios específicos en la máquina virtual. Las rutas de archivo en las máquinas virtuales no son estáticas. Usa las variables de entorno que proporciona {% data variables.product.prodname_dotcom %} a fin de construir rutas de acceso de archivo para los directorios `home`, `workspace` y `workflow`.

| Directorio | Variable de entorno | Descripción |
|-----------|----------------------|-------------|
| `home` | `HOME` | Contiene datos relacionados con el usuario. Por ejemplo, este directorio podría contener las credenciales de un intento de inicio de sesión. |
| `workspace` | `GITHUB_WORKSPACE` | Las acciones y los comandos del shell se ejecutan en este directorio. Una acción puede modificar los contenidos de este directorio, al que pueden tener acceso acciones posteriores. |
| `workflow/event.json` | `GITHUB_EVENT_PATH` | La carga `POST` del evento webhook que desencadenó el flujo de trabajo. {% data variables.product.prodname_dotcom %} reescribe esto cada vez que se ejecuta una acción para aislar el contenido del archivo entre acciones.

Para obtener una lista de las variables de entorno que crea {% data variables.product.prodname_dotcom %} para cada flujo de trabajo, vea "[Uso de variables de entorno](/github/automating-your-workflow-with-github-actions/using-environment-variables)".

### Sistema de archivos del contenedor de Docker

Las acciones que se ejecutan en los contenedores Docker tienen directorios estáticos en la ruta de acceso `/github`. Sin embargo, te recomendamos encarecidamente que uses las variables de entorno predeterminadas para construir rutas de archivos en contenedores de Docker.

{% data variables.product.prodname_dotcom %} se reserva el prefijo de ruta de acceso `/github` y crea tres directorios para las acciones.

- `/github/home`
- `/github/workspace`: {% data reusables.repositories.action-root-user-required %}
- `/github/workflow`

## Información adicional
- "[Administración de la facturación para {% data variables.product.prodname_actions %}](/billing/managing-billing-for-github-actions)"
- Puedes usar una estrategia de matriz para ejecutar los trabajos en varias imágenes. Para obtener más información, consulta "[Uso de una matriz para los trabajos](/actions/using-jobs/using-a-matrix-for-your-jobs)".

{% endif %}
