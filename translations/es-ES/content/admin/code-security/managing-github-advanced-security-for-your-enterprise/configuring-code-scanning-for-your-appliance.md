---
title: Configurar el escaneo de código para tu aplicativo
shortTitle: Configuring code scanning
intro: 'Puedes habilitar, configurar y deshabilitar {% data variables.product.prodname_code_scanning %} para {% data variables.location.product_location %}. {% data variables.product.prodname_code_scanning_capc %} permite que los usuarios escaneen el código para encontrar vulnerabilidades y errores.'
product: '{% data reusables.gated-features.code-scanning %}'
miniTocMaxHeadingLevel: 3
redirect_from:
  - /enterprise/admin/configuration/configuring-code-scanning-for-your-appliance
  - /admin/configuration/configuring-code-scanning-for-your-appliance
  - /admin/advanced-security/configuring-code-scanning-for-your-appliance
versions:
  ghes: '*'
type: how_to
topics:
  - Advanced Security
  - Code scanning
  - Enterprise
  - Security
ms.openlocfilehash: 11ad9bfe108d339af3992277cab0918998eb54fb
ms.sourcegitcommit: b617c4a7a1e4bf2de3987a86e0eb217d7031490f
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 11/11/2022
ms.locfileid: '148161090'
---
{% data reusables.code-scanning.beta %}

## Acerca de {% data variables.product.prodname_code_scanning %}

{% data reusables.code-scanning.about-code-scanning %}

Puedes configurar el {% data variables.product.prodname_code_scanning %} para ejecutar los análisis del {% data variables.product.prodname_codeql %} y de terceros. El {% data variables.product.prodname_code_scanning_capc %} también es compatible con ejecutar análisis de forma nativa utilizando las {% data variables.product.prodname_actions %} o utilizando la infraestructura de IC/DC existente externamente. La siguiente tabla resume todas las opciones disponibles para los usuarios cuando configuras {% data variables.location.product_location %} para que permita el {% data variables.product.prodname_code_scanning %} utilizando acciones.

{% data reusables.code-scanning.enabling-options %}

## Verificar si tu licencia incluye a la {% data variables.product.prodname_GH_advanced_security %}

{% data reusables.advanced-security.check-for-ghas-license %}

## Prerequisitos para el {% data variables.product.prodname_code_scanning %}

- Una licencia para {% data variables.product.prodname_GH_advanced_security %}{% ifversion ghes %} (vea "[Acerca de la facturación de {% data variables.product.prodname_GH_advanced_security %}](/billing/managing-billing-for-github-advanced-security/about-billing-for-github-advanced-security)"){% endif %}

- {% data variables.product.prodname_code_scanning_capc %} habilitado en la consola de administración (vea "[Habilitación de {% data variables.product.prodname_GH_advanced_security %} para la empresa](/admin/advanced-security/enabling-github-advanced-security-for-your-enterprise)")

- Una MV o contenedor para ejecutar el análisis de {% data variables.product.prodname_code_scanning %}.

## Ejecutar el {% data variables.product.prodname_code_scanning %} utilizando {% data variables.product.prodname_actions %}

### Configurar un ejecutor auto-hospedado

{% data variables.product.prodname_ghe_server %} puede ejecutar un {% data variables.product.prodname_code_scanning %} utilizando un flujo de trabajo de {% data variables.product.prodname_actions %}. Primero, necesitas aprovisionar uno o más ejecutores auto-hospedados de {% data variables.product.prodname_actions %} en tu ambiente. Puedes aprovisionar ejecutores auto-hospedados a nivel de repositorio, organización o empresa. Para más información, vea "[Acerca de los ejecutores autohospedados](/actions/hosting-your-own-runners/about-self-hosted-runners)" y "[Adición de ejecutores autohospedados](/actions/hosting-your-own-runners/adding-self-hosted-runners)".

Debes asegurarte de que Git esté en la variable de "PATH" de cualquier ejecutor auto-hospedado que utilices para ejecutar las acciones de {% data variables.product.prodname_codeql %}.

{% ifversion ghes > 3.7 or ghae > 3.7 %} {% note %}

Si usas la {% data variables.product.prodname_code_scanning %} {% data variables.product.prodname_codeql %} para analizar código escrito en Python en tu empresa, debes asegurarte de que el ejecutor autoalojado tiene Python 3 instalado.

{% endnote %} {% endif %}

### Aprovisionar las acciones del {% data variables.product.prodname_code_scanning %}

{% ifversion ghes %} Si quiere usar acciones para ejecutar {% data variables.product.prodname_code_scanning %} en {% data variables.product.prodname_ghe_server %}, las acciones deben estar disponibles en el dispositivo.

La acción {% data variables.product.prodname_codeql %} se incluye en tu instalación de {% data variables.product.prodname_ghe_server %}. Si tanto {% data variables.product.prodname_ghe_server %} {{ allVersions[currentVersion].currentRelease }} como tu ejecutor {% data variables.product.prodname_actions %} tienen acceso a Internet, la acción descargará automáticamente la agrupación de {% data variables.product.prodname_codeql %} {% data variables.product.codeql_cli_ghes_recommended_version %} necesaria para realizar el análisis. Como alternativa, puedes utilizar una herramienta de sincronización para que el conjunto de análisis de {% data variables.product.prodname_codeql %} esté disponible de forma local. Para más información, vea "[Configuración del análisis de {% data variables.product.prodname_codeql %} en un servidor sin acceso a Internet](#configuring-codeql-analysis-on-a-server-without-internet-access)" a continuación.

También puedes hacer que acciones de terceros estén disponibles para el {% data variables.product.prodname_code_scanning %} para los usuarios si configuras {% data variables.product.prodname_github_connect %}. Para más información, vea "[Configuración de {% data variables.product.prodname_github_connect %} para sincronizar {% data variables.product.prodname_actions %}](/enterprise/admin/configuration/configuring-code-scanning-for-your-appliance#configuring-github-connect-to-sync-github-actions)" a continuación.

### Configurar el análisis de {% data variables.product.prodname_codeql %} en un servidor sin acceso a internet
Si el servidor en el que estás ejecutando a {% data variables.product.prodname_ghe_server %} no está conectado a internet y quieres permitir que los usuarios habiliten el {% data variables.product.prodname_code_scanning %} de {% data variables.product.prodname_codeql %} para sus repositorios, debes utilizar la herramienta de sincronización de la acción de {% data variables.product.prodname_codeql %} para copiar el paquete de análisis de {% data variables.product.prodname_codeql %} desde {% data variables.product.prodname_dotcom_the_website %} hacia tu servidor. La herramienta y los detalles de cómo usarla están disponibles en [https://github.com/github/codeql-action-sync-tool](https://github.com/github/codeql-action-sync-tool/).

Si configuras la herramienta de sincronización de la acción de {% data variables.product.prodname_codeql %}, puedes utilizarla para sincronizar los últimos lanzamientos de la acción de {% data variables.product.prodname_codeql %} y el paquete de análisis de {% data variables.product.prodname_codeql %} relacionado. Estos son compatibles con {% data variables.product.prodname_ghe_server %}.

{% endif %}

### Configurar {% data variables.product.prodname_github_connect %} para sincronizarse con {% data variables.product.prodname_actions %}
1. Si quieres descargar flujos de trabajo de acciones por petición desde {% data variables.product.prodname_dotcom_the_website %}, necesitarás habilitar {% data variables.product.prodname_github_connect %}. Para más información, vea "[Habilitación de {% data variables.product.prodname_github_connect %}](/admin/configuration/managing-connections-between-your-enterprise-accounts/connecting-your-enterprise-account-to-github-enterprise-cloud#enabling-github-connect)".
2. También tendrá que habilitar {% data variables.product.prodname_actions %} para {% data variables.location.product_location %}. Para más información, vea "[Introducción a {% data variables.product.prodname_actions %} para {% data variables.product.prodname_ghe_server %}](/admin/github-actions/getting-started-with-github-actions-for-github-enterprise-server)".
3. El siguiente paso es configurar el acceso a las acciones en {% data variables.product.prodname_dotcom_the_website %} utilizando {% data variables.product.prodname_github_connect %}. Para más información, vea "[Habilitación del acceso automático a las acciones de {% data variables.product.prodname_dotcom_the_website %} mediante {% data variables.product.prodname_github_connect %}](/enterprise/admin/github-actions/enabling-automatic-access-to-githubcom-actions-using-github-connect)".
4. Agrega un ejecutor auto-hospedado a tu repositorio, organización, o cuenta empresarial. Para más información, vea "[Adición de ejecutores autohospedados](/actions/hosting-your-own-runners/adding-self-hosted-runners)".

## Ejecutar el escaneo de código utilizando el {% data variables.product.prodname_codeql_cli %}

Si no quieres utilizar {% data variables.product.prodname_actions %}, debes ejecutar el {% data variables.product.prodname_code_scanning %} utilizando el {% data variables.product.prodname_codeql_cli %}. 

El {% data variables.product.prodname_codeql_cli %} es una herramienta de línea de comandos que utilizas para analizar bases de código en cualquier máquina, incluyendo un sistema de IC/DC de terceros. Para más información, vea "[Instalación de la CLI de CodeQL en el sistema de CI](/code-security/code-scanning/using-codeql-code-scanning-with-your-existing-ci-system/installing-codeql-cli-in-your-ci-system)".

{% ifversion codeql-runner-supported %}

## Ejecutar el {% data variables.product.prodname_code_scanning %} utilizando el {% data variables.code-scanning.codeql_runner %}

{% data reusables.code-scanning.deprecation-codeql-runner %}

Si no quieres utilizar {% data variables.product.prodname_actions %}, puedes ejecutar el {% data variables.product.prodname_code_scanning %} utilizando el {% data variables.code-scanning.codeql_runner %}. 

{% data variables.code-scanning.codeql_runner %} es una herramienta de línea de comandos que puedes agregar a tu sistema de CI/CD de terceros. Esta herramienta ejecuta el análisis de {% data variables.product.prodname_codeql %} en un control de un repositorio de {% data variables.product.prodname_dotcom %}. Para más información, vea "[Ejecución de {% data variables.product.prodname_code_scanning %} en el sistema de CI](/github/finding-security-vulnerabilities-and-errors-in-your-code/running-codeql-code-scanning-in-your-ci-system)".

{% endif %}
