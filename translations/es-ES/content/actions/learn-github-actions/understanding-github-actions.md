---
title: Entender las GitHub Actions
shortTitle: Understanding GitHub Actions
intro: 'Aprende lo básico de las {% data variables.product.prodname_actions %}, incluyendo los conceptos nucleares y la terminología esencial.'
miniTocMaxHeadingLevel: 3
redirect_from:
  - /github/automating-your-workflow-with-github-actions/core-concepts-for-github-actions
  - /actions/automating-your-workflow-with-github-actions/core-concepts-for-github-actions
  - /actions/getting-started-with-github-actions/core-concepts-for-github-actions
  - /actions/learn-github-actions/introduction-to-github-actions
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: overview
topics:
  - Fundamentals
ms.openlocfilehash: b1e82506da6ede65b5ab93f94ce67dee681f81f1
ms.sourcegitcommit: 478f2931167988096ae6478a257f492ecaa11794
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/09/2022
ms.locfileid: '147763576'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## Información general

{% data reusables.actions.about-actions %} Puedes crear flujos de trabajo y crear y probar cada solicitud de cambios en tu repositorio o desplegar solicitudes de cambios fusionadas a producción.

{% data variables.product.prodname_actions %} va más allá de solo DevOps y te permite ejecutar flujos de trabajo cuando otros eventos suceden en tu repositorio. Por ejemplo, puedes ejecutar un flujo de trabajo para que agregue automáticamente las etiquetas adecuadas cada que alguien cree una propuesta nueva en tu repositorio.

{% ifversion fpt or ghec %}

{% data variables.product.prodname_dotcom %} proporciona máquinas virtuales Linux, Windows y macOS para que ejecutes tus flujos de trabajo o puedes hospedar tus propios ejecutores auto-hospedados en tu propio centro de datos o infraestructura en la nube.

{% elsif ghes or ghae %}

Debes hospedar tus propias máquinas virtuales Linux, Windows o macOS para ejecutar flujos de trabajo para {% data variables.product.product_location %}. {% data reusables.actions.self-hosted-runner-locations %}

{% endif %}

{% ifversion ghec or ghes or ghae %}

Para más información sobre cómo introducir {% data variables.product.prodname_actions %} en la empresa, vea "[Introducción de {% data variables.product.prodname_actions %} en la empresa](/admin/github-actions/getting-started-with-github-actions-for-your-enterprise/introducing-github-actions-to-your-enterprise)".

{% endif %}

## Los componentes de las {% data variables.product.prodname_actions %}

Puede configurar un _flujo de trabajo_ de {% data variables.product.prodname_actions %} que se desencadene cuando se produzca un _evento_ en el repositorio, por ejemplo, la apertura de una solicitud de incorporación de cambios o la creación de una incidencia.  El flujo de trabajo contiene uno o varios _trabajos_ que se pueden ejecutar en orden secuencial o en paralelo.  Cada trabajo se ejecutará dentro de su propio _ejecutor_ de máquina virtual o dentro de un contenedor, y tendrá uno o varios _pasos_ que pueden ejecutar un script que defina, o bien una _acción_, que es una extensión reutilizable que puede simplificar el flujo de trabajo.

![Introducción al flujo de trabajo](/assets/images/help/images/overview-actions-simple.png)

### Workflows

{% data reusables.actions.about-workflows-long %}

{% ifversion fpt or ghes > 3.3 or ghae-issue-4757 or ghec %}Puede hacer referencia a un flujo de trabajo dentro de otro; vea "[Reutilización de flujos de trabajo](/actions/learn-github-actions/reusing-workflows)".{% endif %}

Para más información sobre los flujos de trabajo, vea "[Uso de flujos de trabajo](/actions/using-workflows)".

### Eventos

Un evento es una actividad específica en un repositorio, la cual activa una ejecución de flujo de trabajo. Por ejemplo, la actividad puede originarse desde {% data variables.product.prodname_dotcom %} cuando alguien crea una solicitud de cambios, abre una propuesta o sube una confirmación a un repositorio.  También puede desencadenar una ejecución de flujo de trabajo según una programación, mediante la [publicación en una API REST](/rest/reference/repos#create-a-repository-dispatch-event) o manualmente.

Para obtener una lista completa de eventos que se pueden usar para desencadenar flujos de trabajo, vea [Eventos que desencadenan flujos de trabajo](/actions/reference/events-that-trigger-workflows).

### Trabajos

Un trabajo es un conjunto de _pasos_ en un flujo de trabajo que se ejecutan en el mismo ejecutor.  Cada paso puede ser un script de shell o una _acción_ que se ejecutarán.  Los pasos se ejecutarán en orden y serán dependientes uno del otro.  Ya que cada paso se ejecuta en el mismo ejecutor, puedes compartir datos de un paso a otro.  Por ejemplo, puedes tener un paso que compile tu aplicación, seguido de otro que pruebe la aplicación que se compiló.

Puedes configurar las dependencias de un job con otros jobs; predeterminadamente, los jobs no tienen dependencias y se ejecutan en paralelo entre ellos.  Cuando un job lleva una dependencia a otro job, este esperará a que el job dependiente se complete antes de que pueda ejecutarse.  Por ejemplo, puedes tener jobs de compilación múltiple para arquitecturas diferentes que no tengan dependencias y un job de empaquetado que sea dependiente de estos jobs.  Los jobs de compilación se ejecutarán en paralelo y, cuando se hayan completado con éxito, se ejecutará el job de empaquetado.

Para más información sobre los trabajos, vea "[Uso de trabajos](/actions/using-jobs)".

### Acciones

Una _acción_ es una aplicación personalizada para la plataforma de {% data variables.product.prodname_actions %} que realiza una tarea compleja pero que se repite frecuentemente.  Utiliza una acción para ayudarte a reducir la cantidad de código repetitivo que escribes en tus archivos de flujo de trabajo.  Una acción puede extraer tu repositorio de git desde {% data variables.product.prodname_dotcom %}, configurar la cadena de herramientas correcta para tu ambiente de compilación o configurar la autenticación en tu proveedor de servicios en la nube.

Puedes escribir tus propias acciones o puedes encontrar acciones para utilizar en tus flujos de trabajo dentro de {% data variables.product.prodname_marketplace %}.

{% data reusables.actions.internal-actions-summary %}

Para más información, vea "[Creación de acciones](/actions/creating-actions)".

### Ejecutores

{% data reusables.actions.about-runners %} Cada ejecutor puede ejecutar un job individual a la vez. {% ifversion ghes or ghae %} Debes hospedar tus propios ejecutores para {% data variables.product.product_name %}. {% elsif fpt or ghec %}{% data variables.product.company_short %} proporciona ejecutores de Ubuntu Linux, Microsoft Windows y macOS para ejecutar tus flujos de trabajo; cada flujo de trabajo se ejecuta en una máquina virtual nueva y recién aprovisionada. {% ifversion actions-hosted-runners %} {% data variables.product.prodname_dotcom %} también ofrece {% data variables.actions.hosted_runner %}, que están disponibles en configuraciones más grandes. Para obtener más información, consulta "[Uso de {% data variables.actions.hosted_runner %}](/actions/using-github-hosted-runners/using-larger-runners)". {% endif %} Si necesita otro sistema operativo o una configuración de hardware específica, puede hospedar ejecutores propios.{% endif %} Para más información{% ifversion fpt or ghec %} sobre los ejecutores autohospedados{% endif %}, consulta "[Hospedaje de ejecutores propios](/actions/hosting-your-own-runners)".

{% data reusables.actions.workflow-basic-example-and-explanation %}

## Ejemplos más complejos
{% data reusables.actions.link-to-example-library %}

## Pasos siguientes

- Para continuar el aprendizaje sobre {% data variables.product.prodname_actions %}, vea "[Búsqueda y personalización de acciones](/actions/learn-github-actions/finding-and-customizing-actions)".
{% ifversion fpt or ghec or ghes %}
- A fin de comprender cómo funciona la facturación para {% data variables.product.prodname_actions %}, consulta "[Acerca de la facturación de {% data variables.product.prodname_actions %}](/actions/reference/usage-limits-billing-and-administration#about-billing-for-github-actions)."
{% endif %}

## Contactando con el soporte técnico

{% data reusables.actions.contacting-support %}

{% ifversion ghec or ghes or ghae %}
## Información adicional

- "[Acerca de {% data variables.product.prodname_actions %} for enterprises](/admin/github-actions/getting-started-with-github-actions-for-your-enterprise/about-github-actions-for-enterprises)" {% endif %}
