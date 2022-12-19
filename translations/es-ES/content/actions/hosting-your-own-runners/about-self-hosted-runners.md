---
title: Acerca de los ejecutores autohospedados
intro: 'Puedes alojar tus propios ejecutores y personalizar el entorno utilizado para ejecutar trabajos en tus flujos de trabajo de {% data variables.product.prodname_actions %}.'
redirect_from:
  - /github/automating-your-workflow-with-github-actions/about-self-hosted-runners
  - /actions/automating-your-workflow-with-github-actions/about-self-hosted-runners
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: overview
ms.openlocfilehash: b570dbe3a5df607f0b02e0c7a42a6a7cfb860c80
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 10/25/2022
ms.locfileid: '148107569'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## Acerca de los ejecutores autohospedados

Un ejecutor autohospedado es un sistema que se despliega y administra para ejecutar trabajos de {% data variables.product.prodname_actions %} en {% ifversion ghae or ghec %}{% data variables.product.product_name %}{% else %}{% data variables.location.product_location %}{% endif %}. Para más información sobre {% data variables.product.prodname_actions %}, vea "[Descripción de {% data variables.product.prodname_actions %}](/actions/learn-github-actions/understanding-github-actions){% ifversion fpt %}".{% elsif ghec or ghes or ghae %}" y "[Acerca de {% data variables.product.prodname_actions %} para empresas](/admin/github-actions/getting-started-with-github-actions-for-your-enterprise/about-github-actions-for-enterprises)".{% endif %}

{% data reusables.actions.self-hosted-runner-description %} {% data reusables.actions.self-hosted-runner-locations %}

Puedes agregar ejecutores auto-hospedados en varios niveles dentro de la jerarquía de administración:
- Los ejecutores a nivel de repositorio están dedicados a un solo repositorio.
- Los ejecutores a nivel de organización pueden procesar jobs para varios repositorios dentro de una organización.
- Los ejecutores a nivel de empresa puede asignarse a varias organizaciones en una cuenta empresarial.

{% data reusables.actions.self-hosted-runner-architecture %} {% data reusables.actions.runner-app-open-source %} Cuando se lanza una versión nueva, la aplicación ejecutora se actualiza automáticamente cuando un job se asigna al ejecutor o dentrod e una semana de lanzamiento si no se le ha asignado ningún job a dicho ejecutor.

{% ifversion ghes %} {% note %}

**Nota:** {% data reusables.actions.upgrade-runners-before-upgrade-ghes %}

{% endnote %} {% endif %}

{% data reusables.actions.self-hosted-runner-auto-removal %}

Para más información sobre cómo instalar y usar ejecutores autohospedados, vea "[Adición de ejecutores autohospedados](/github/automating-your-workflow-with-github-actions/adding-self-hosted-runners)" y "[Uso de ejecutores autohospedados en un flujo de trabajo](/github/automating-your-workflow-with-github-actions/using-self-hosted-runners-in-a-workflow)".

## {% ifversion fpt or ghec or ghes %}Diferencias entre los ejecutores hospedados en {% data variables.product.prodname_dotcom %} y {% elsif ghae %}Características de los {% endif %}ejecutores autohospedados

{% ifversion fpt or ghec or ghes %} Los ejecutores hospedados en {% data variables.product.prodname_dotcom %} ofrecen una forma más simple y rápida de ejecutar los flujos de trabajo, mientras que los ejecutores autohospedados{% elsif ghae %}autohospedados{% endif %} son una forma altamente configurable para ejecutar flujos de trabajo en un entorno personalizado propio. {% ifversion ghae %}Ejecutores auto-hospedados:{% endif %}

{% ifversion fpt or ghec or ghes %} **Ejecutores hospedados en {% data variables.product.prodname_dotcom %}:**
- Reciben actualizaciones automáticas para el sistema operativo, paquetes y herramientas preinstalados y la aplicación del ejecutor autohospedado.
- Son administrados y mantenidos por {% data variables.product.prodname_dotcom %}.
- Proporcionan una instancia limpia para cada ejecución de trabajo.
- Usan minutos libres en tu plan de {% data variables.product.prodname_dotcom %}, con tarifas por minuto aplicadas después de superar los minutos libres.

**Ejecutores autohospedados:** {% endif %}
- Reciben solo actualizaciones automáticas para la aplicación de ejecutor autohospedado{% ifversion fpt or ghec or ghes > 3.4 or ghae %}, aunque se pueden deshabilitar las actualizaciones automáticas del ejecutor. Para más información sobre cómo controlar las actualizaciones de software de ejecutor en ejecutores autohospedados, vea "[Escalado automático con ejecutores autohospedados](/actions/hosting-your-own-runners/autoscaling-with-self-hosted-runners#controlling-runner-software-updates-on-self-hosted-runners)".{% else %}.{% endif %} Es responsable de actualizar el sistema operativo y el resto del software.
- Pueden usar servicios en la nube o máquinas locales por las que ya paga.
- Son personalizables según sus requisitos de hardware, sistema operativo, software y seguridad.
- No necesitan una instancia limpia para cada ejecución de trabajo.
- Se pueden utilizar gratis con {% data variables.product.prodname_actions %}, pero eres responsable del costo de mantener tus máquinas ejecutoras.{% ifversion ghec or ghes or ghae %}
- Se pueden organizar en grupos para restringir el acceso a los {% ifversion restrict-groups-to-workflows %}flujos de trabajo, {% endif %}organizaciones y repositorios específicos. Para más información, vea "[Administración del acceso a ejecutores autohospedados mediante grupos](/actions/hosting-your-own-runners/managing-access-to-self-hosted-runners-using-groups)".{% endif %}

## Requisitos para máquinas de ejecutores autoalojados

Puedes usar cualquier máquina como ejecutor autoalojado, siempre que cumpla con estos requisitos:

* Puedes instalar y ejecutar la aplicación del ejecutor autoalojado en la máquina. Para más información, vea "[Arquitecturas y sistemas operativos admitidos para ejecutores autohospedados](#supported-architectures-and-operating-systems-for-self-hosted-runners)".
* La máquina puede comunicarse con {% data variables.product.prodname_actions %}. Para más información, vea "[Comunicación entre ejecutores autohospedados y {% data variables.product.product_name %}](#communication-requirements)".
* La máquina tiene suficientes recursos de hardware para el tipo de flujos de trabajo que planeas ejecutar. La propia aplicación del ejecutor autoalojado solo requiere unos recursos mínimos.
* Si quieres ejecutar flujos de trabajo que usan acciones del contenedor Docker o contenedores de servicio, debes usar una máquina Linux y Docker debe estar instalado.

## Autoescalar tus ejecutores auto-hospedados

Puedes aumentar o disminuir la cantidad de ejecutores auto-hospedados automáticamente en tu ambiente como respuesta a los eventos de webhook que recibes. Para más información, vea "[Escalado automático con ejecutores autohospedados](/actions/hosting-your-own-runners/autoscaling-with-self-hosted-runners)".

## Límites de uso

Hay algunos límites para el uso de las {% data variables.product.prodname_actions %} cuando se utilizan ejecutores auto-hospedados. Estos límites están sujetos a cambios.

{% data reusables.actions.usage-workflow-run-time %}
- **Tiempo de cola de trabajos**: cada trabajo para ejecutores autohospedados se puede poner en cola durante un máximo de 24 horas. Si un ejecutor auto-hospedado no comienza a ejecutar el job dentro de este límite de tiempo, dicho job se terminará y no se podrá completar.
{% data reusables.actions.usage-api-requests %}
- **Matriz de trabajos**: {% data reusables.actions.usage-matrix-limits %} {% data reusables.actions.usage-workflow-queue-limits %}

## Continuidad de los flujos de trabajo para los ejecutores auto-hospedados

{% data reusables.actions.runner-workflow-continuity %}

## Sistemas operativos y arquitecturas compatibles para los ejecutores auto-hospedados

Los siguientes sistemas operativos son compatibles con la aplicación del ejecutor autoalojado.

### Linux

- Red Hat Enterprise Linux 7 o superior
- CentOS 7 o superior
- Oracle Linux 7
- Fedora 29 o posterior
- Debian 9 o posterior
- Ubuntu 16.04 o posterior
- Linux Mint 18 o posterior
- openSUSE 15 o posterior
- SUSE Enterprise Linux (SLES) 12 SP2 o posterior

### Windows

- Windows 7 64-bit
- Windows 8.1 de 64 bits
- Windows 10 de 64 bits
- Windows Server 2012 R2 64-bit
- Windows Server 2019 64-bit

### macOS

- macOS 10.13 (High Sierra) o posterior

### Arquitecturas

Las siguientes arquitecturas de procesamiento son compatibles para la aplicación del ejecutor auto-hospedado.

- `x64`: Linux, macOS, Windows.
- `ARM64`: Linux{% ifversion actions-macos-arm %}, macOS{% endif %}{% ifversion actions-windows-arm %}, Windows (actualmente en versión beta){% endif %}.
- `ARM32`: Linux.

{% ifversion ghes %}

## La comunicación entre ejecutores autoalojados

Es posible que se necesite configuración adicional para usar acciones de {% data variables.product.prodname_dotcom_the_website %} con {% data variables.product.prodname_ghe_server %}, o bien para usar las acciones `actions/setup-LANGUAGE` con ejecutores autohospedados sin acceso a Internet. Para más información, vea "[Administración del acceso a acciones desde {% data variables.product.prodname_dotcom_the_website %}](/enterprise/admin/github-actions/managing-access-to-actions-from-githubcom)" y póngase en contacto con el administrador del sitio de {% data variables.product.prodname_enterprise %}.

{% endif %}

<a name="communication-requirements"></a>

## La comunicación entre ejecutores autoalojados y {% data variables.product.product_name %}

El ejecutor auto-hospedado se conecta a {% data variables.product.product_name %} para recibir asignaciones de jobs y para descargar versiones nuevas de la aplicación ejecutora. El ejecutor autohospedado usa un _sondeo largo_ de {% ifversion ghes %}HTTP(S){% else %}HTTPS{% endif %} que abre una conexión a {% data variables.product.product_name %} durante 50 segundos y, si no se recibe una respuesta, agota el tiempo de espera y crea un sondeo largo. La aplicación debe estar ejecutándose en la máquina para aceptar y ejecutar trabajos de {% data variables.product.prodname_actions %}.

{% data reusables.actions.self-hosted-runner-ports-protocols %}

{% ifversion fpt or ghec %} Como el ejecutor autohospedado abre una conexión a {% data variables.location.product_location %}, no es necesario permitir que {% data variables.product.prodname_dotcom %} realice conexiones de entrada al ejecutor autohospedado.
{% elsif ghes or ghae %} Solo se necesita una conexión de salida desde el ejecutor a {% data variables.location.product_location %}. No se necesita una conexión entrante desde {% data variables.location.product_location %} hacia el ejecutor.
{%- endif %}

{% ifversion ghes %}

{% data variables.product.product_name %} debe aceptar conexiones entrantes desde tus ejecutores a través de {% ifversion ghes %}HTTP(S){% else %}HTTPS{% endif %} en el nombre de host de {% data variables.location.product_location %} y subdominio de la API, y tus ejecutores deben permitir conexiones salientes a través de {% ifversion ghes %}HTTP(S){% else %}HTTPS{% endif %} hacia el nombre de host de {% data variables.location.product_location %} y el subdominio de la API.

{% elsif ghae %}

Debes asegurarte de que el ejecutor auto-hospedado tenga un acceso adecuado a la red con tu URL de {% data variables.product.product_name %} y sus subdominios. Por ejemplo, si el subdominio para {% data variables.product.product_name %} es `octoghae`, tendrá que permitir que el ejecutor autohospedado acceda a `octoghae.githubenterprise.com`, `api.octoghae.githubenterprise.com` y `codeload.octoghae.githubenterprise.com`.

Si utilizas una lista de direcciones IP permitidas, debes agregar la de tu ejecutor auto-hospedado a ella. Para más información, vea "[Administración de las direcciones IP permitidas para la organización](/organizations/keeping-your-organization-secure/managing-allowed-ip-addresses-for-your-organization#using-github-actions-with-an-ip-allow-list)".

{% endif %}

{% ifversion fpt or ghec %}

Debes asegurarte de que la máquina tenga el acceso adecuada a la red para comunicarse con los hosts de {% data variables.product.prodname_dotcom %} que se listan a continuación. Algunos hosts son necesarios para que se lleven a cabo las operaciones de los ejecutores esenciales, mientras que otros solo son necesarios para algunas funcionalidades específicas.

{% note %}

**Nota:** Algunos de los dominios que se enumeran a continuación se configuran mediante registros `CNAME`. Es posible que algunos firewalls necesiten agregar reglas de forma recursiva para todos los registros `CNAME`. Tenga en cuenta que es posible que los registros `CNAME` cambien en el futuro y que solo los dominios enumerados a continuación permanezcan constantes.

{% endnote %}

**Necesarios para operaciones esenciales:**

```
github.com
api.github.com
```

**Necesarios para acciones de descarga:**

```
codeload.github.com
```

**Necesarios para las actualizaciones de versión del ejecutor:**

```
objects.githubusercontent.com
objects-origin.githubusercontent.com
github-releases.githubusercontent.com
github-registry-files.githubusercontent.com
```

**Necesarios para cargar o descargar cachés y artefactos de flujo de trabajo:**    

```
*.blob.core.windows.net
```

**Necesarios para recuperar tokens de OIDC:**

```
*.actions.githubusercontent.com
```

**Necesario para descargar o publicar paquetes o contenedores en {% data variables.product.prodname_dotcom %} Packages:**

```
*.pkg.github.com
ghcr.io
```

Adicionalmente, tu flujo de trabajo podría requerir acceso a otros recursos de red.

Si usas una lista de permisos de dirección IP para tu organización o cuenta de empresa de {% data variables.product.prodname_dotcom %}, debes agregar la dirección IP de tu ejecutor autoalojado a la lista de permisos. Para más información, vea "[Administración de direcciones IP permitidas para la organización](/{% ifversion fpt %}enterprise-cloud@latest/{% endif %}/organizations/keeping-your-organization-secure/managing-allowed-ip-addresses-for-your-organization#using-github-actions-with-an-ip-allow-list)" o "[Aplicación de directivas para la configuración de seguridad en la empresa](/{% ifversion fpt %}enterprise-cloud@latest/{% endif %}admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-security-settings-in-your-enterprise){% ifversion fpt %}" en la documentación de {% data variables.product.prodname_ghe_cloud %}.{% else %}".{% endif %}

{% else %}

{% ifversion ghes %}Los ejecutores auto-hospedados no necesitan acceso externo a internet para funcionar. Como resultado, puedes usar el enrutamiento de red para dirigir la comunicación entre el ejecutor autohospedado y {% data variables.location.product_location %}. Por ejemplo, puedes asignar una dirección IP privada a tu ejecutor autohospedado y configurar el enrutamiento para enviar el tráfico a {% data variables.location.product_location %} sin necesidad de que este tráfico atraviese una red pública.{% endif %}

{% endif %}

{% ifversion ghae %} Si usa una lista de direcciones IP permitidas para la organización o la cuenta de empresa de {% data variables.product.prodname_dotcom %}, tendrá que agregar la dirección IP del ejecutor autohospedado a la lista de permitidas. Para más información, vea "[Administración de las direcciones IP permitidas para la organización](/organizations/keeping-your-organization-secure/managing-allowed-ip-addresses-for-your-organization#using-github-actions-with-an-ip-allow-list)".
{% endif %}

También puedes usar ejecutores autoalojados con un servidor proxy. Para más información, vea "[Uso de un servidor proxy con ejecutores autohospedados](/actions/automating-your-workflow-with-github-actions/using-a-proxy-server-with-self-hosted-runners)".

Para más información sobre cómo solucionar problemas comunes de conectividad de red, vea "[Supervisión y solución de problemas de ejecutores autohospedados](/actions/hosting-your-own-runners/monitoring-and-troubleshooting-self-hosted-runners#troubleshooting-network-connectivity)".

{% ifversion ghes or ghae %}

## Comunicación entre ejecutores autohospedados y {% data variables.product.prodname_dotcom_the_website %}

Los ejecutores autohospedados no necesitan conectarse a {% data variables.product.prodname_dotcom_the_website %}, a menos que hayas habilitado el acceso automático a las acciones de {% data variables.product.prodname_dotcom_the_website %} para {% data variables.location.product_location %}. Para más información, vea "[Acerca del uso de acciones en la empresa](/admin/github-actions/managing-access-to-actions-from-githubcom/about-using-actions-in-your-enterprise)".

Si habilitaste el acceso automático a las acciones de {% data variables.product.prodname_dotcom_the_website %}, entonces el ejecutor auto-hospedado se conectará directamente a {% data variables.product.prodname_dotcom_the_website %} para descargar las acciones. Debes asegurarte de que la máquina tiene el acceso a la red adecuado para comunicarte con las URL de {% data variables.product.prodname_dotcom %} listadas a continuación. 

```
github.com
api.github.com
codeload.github.com
```

{% note %}

**Nota:** Algunos de los dominios que se enumeran antes se configuran mediante registros `CNAME`. Es posible que algunos firewalls necesiten agregar reglas de forma recursiva para todos los registros `CNAME`. Tenga en cuenta que es posible que los registros `CNAME` cambien en el futuro y que solo los dominios enumerados anteriormente permanezcan constantes.

{% endnote %}

{% endif %}

## Seguridad de los ejecutores auto-hospedados

{% ifversion fpt or ghec %}

{% data reusables.actions.self-hosted-runner-security %}

{% endif %}

{% ifversion fpt or ghec %}

Este no es un problema con los ejecutores hospedados en {% data variables.product.prodname_dotcom %}, ya que cada uno de los ejecutores hospedados en {% data variables.product.prodname_dotcom %} siempre constituye una máquina virtual limpia y aislada, la cual se destruya al final de la ejecución del job.

{% endif %}

Los flujos de trabajo que no son de confianza y se ejecutan en tu ejecutor autoalojado plantean riesgos de seguridad considerables para tu máquina y entorno de red, en especial si tu máquina se mantiene en su entorno entre trabajos. Algunos de los riesgos incluyen:

* Programas maliciosos que se ejecutan en la máquina.
* Escapar del entorno Sandbox del ejecutor de la máquina.
* Exponer el acceso al entorno de red de la máquina.
* Mantener datos peligrosos o no deseados en la máquina.

Para más información sobre la protección de seguridad para los ejecutores autohospedados, vea "[Fortalecimiento de la seguridad para {% data variables.product.prodname_actions %}](/actions/security-guides/security-hardening-for-github-actions#hardening-for-self-hosted-runners)".

{% ifversion ghec or ghes or ghae %}

## Información adicional

- "[Introducción a los ejecutores autohospedados para la empresa](/admin/github-actions/getting-started-with-github-actions-for-your-enterprise/getting-started-with-self-hosted-runners-for-your-enterprise)"

{% endif %}
