---
title: Entender las GitHub Actions
shortTitle: Entendiendo las GitHub Actions
intro: 'Aprende lo básico de las {% data variables.product.prodname_actions %}, incluyendo los conceptos nucleares y la terminología esencial.'
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
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}

## Resumen

{% data reusables.actions.about-actions %} Puedes crear flujos de trabajo y crear y probar cada solicitud de cambios en tu repositorio o desplegar solicitudes de cambios fusionadas a producción.

{% data variables.product.prodname_actions %} va más allá de solo DevOps y te permite ejecutar flujos de trabajo cuando otros eventos suceden en tu repositorio. Por ejemplo, puedes ejecutar un flujo de trabajo para que agregue automáticamente las etiquetas adecuadas cada que alguien cree una propuesta nueva en tu repositorio.

{% ifversion fpt or ghec %}

{% data variables.product.prodname_dotcom %} proporciona máquinas virtuales Linux, Windows y macOS para que ejecutes tus flujos de trabajo o puedes hospedar tus propios ejecutores auto-hospedados en tu propio centro de datos o infraestructura en la nube.

{% elsif ghes or ghae %}

Debes hospedar tus propias máquinas virtuales Linux, Windows o macOS para ejecutar flujos de trabajo para {% data variables.product.product_location %}. {% data reusables.actions.self-hosted-runner-locations %}

{% endif %}

{% ifversion ghec or ghes or ghae %}

Para obtener más información sobre cómo introducir las {% data variables.product.prodname_actions %} en tu empresa, consulta la sección "[Introducir las {% data variables.product.prodname_actions %} a tu empresa](/admin/github-actions/getting-started-with-github-actions-for-your-enterprise/introducing-github-actions-to-your-enterprise)".

{% endif %}

## Los componentes de las {% data variables.product.prodname_actions %}

Puedes configurar un _flujo de trabajo_ de {% data variables.product.prodname_actions %} para que se active cuando ocurre un _evento_ en tu repositorio, tal como la apertura de una solicitud de cambios o la creación de una propuesta.  Tu flujo de trabajo contiene uno o más _jobs_, los cuales pueden ejecutarse en orden secuencial o en paralelo.  Cada job se ejecutará dentro del _ejecutor_ de su propia máquina virtual o dentro de un contenedor y tendrá uno o más _pasos_ que ya sea puedan ejecutar un script que definas o que ejecuten una _acción_, la cual es una extensión reutilizable que puede simplificar tu flujo de trabajo.

![Resumen del flujo de trabajo](/assets/images/help/images/overview-actions-simple.png)

### Flujos de trabajo

{% data reusables.actions.about-workflows-long %}

{% ifversion fpt or ghes > 3.3 or ghae-issue-4757 or ghec %}Puedes referenciar un flujo de trabajo dentro de otro flujo de trabajo, consulta la sección "[Reutilizar flujos de trabajo](/actions/learn-github-actions/reusing-workflows)".{% endif %}

Para obtener más información sobre los flujos de trabajo, consulta la sección "[Utilizar flujos de trabajo](/actions/using-workflows)".

### Eventos

Un evento es una actividad específica en un repositorio, la cual activa una ejecución de flujo de trabajo. Por ejemplo, la actividad puede originarse desde {% data variables.product.prodname_dotcom %} cuando alguien crea una solicitud de cambios, abre una propuesta o sube una confirmación a un repositorio.  También puedes activar una ejecución de flujo de trabajo de acuerdo con una programación si la [publicas en una API de REST](/rest/reference/repos#create-a-repository-dispatch-event) o si lo haces manualmente.

Para encontrar una lista de eventos completa que puede utilizarse para activar flujos de trabajo, consulta los [Eventos que activan flujos de trabajo](/actions/reference/events-that-trigger-workflows).

### Jobs

Un job es un conjunto de _pasos_ en un flujo de trabajo, los cuales se ejecutan en el mismo ejecutor.  Cada paso es ya sea un script de shell o una _acción_ que se ejecutarán.  Los pasos se ejecutarán en orden y serán dependientes uno del otro.  Ya que cada paso se ejecuta en el mismo ejecutor, puedes compartir datos de un paso a otro.  Por ejemplo, puedes tener un paso que compile tu aplicación, seguido de otro que pruebe la aplicación que se compiló.

Puedes configurar las dependencias de un job con otros jobs; predeterminadamente, los jobs no tienen dependencias y se ejecutan en paralelo entre ellos.  Cuando un job lleva una dependencia a otro job, este esperará a que el job dependiente se complete antes de que pueda ejecutarse.  Por ejemplo, puedes tener jobs de compilación múltiple para arquitecturas diferentes que no tengan dependencias y un job de empaquetado que sea dependiente de estos jobs.  Los jobs de compilación se ejecutarán en paralelo y, cuando se hayan completado con éxito, se ejecutará el job de empaquetado.

Para obtener más información sobre los jobs, consulta la sección "[Utilizar jobs](/actions/using-jobs)".

### Actions

Una _acción_ es una aplicación personalizada para la plataforma de {% data variables.product.prodname_actions %} que realiza una tarea compleja pero que se repite frecuentemente.  Utiliza una acción para ayudarte a reducir la cantidad de código repetitivo que escribes en tus archivos de flujo de trabajo.  Una acción puede extraer tu repositorio de git desde {% data variables.product.prodname_dotcom %}, configurar la cadena de herramientas correcta para tu ambiente de compilación o configurar la autenticación en tu proveedor de servicios en la nube.

Puedes escribir tus propias acciones o puedes encontrar acciones para utilizar en tus flujos de trabajo dentro de {% data variables.product.prodname_marketplace %}.

{% data reusables.actions.internal-actions-summary %}

Para obtener más información, consulta la sección "[Crear acciones](/actions/creating-actions)".

### Ejecutores

{% data reusables.actions.about-runners %} Cada ejecutor puede ejecutar un job individual a la vez. {% ifversion ghes or ghae %} Debes hospedar tus propios ejecutores para {% data variables.product.product_name %}. {% elsif fpt or ghec %}{% data variables.product.company_short %} proporciona ejecutores de Ubuntu Linux, Microsoft Windows y macOS para ejecutar tus flujos de trabajo; cada flujo de trabajo se ejecuta en una máquina virtual nueva y recién aprovisionada. Si necesitas un sistema operativo diferente o si requieres una configuración de hardware específica, puedes hospedar tus propios ejecutores.{% endif %} Para obtener más información{% ifversion fpt or ghec %} sobre los ejecutores auto-hospedados{% endif %}, consulta la sección "[Hospedar tus propios ejecutores](/actions/hosting-your-own-runners)".

{% data reusables.actions.workflow-basic-example-and-explanation %}

## Ejemplos más complejos
{% data reusables.actions.link-to-example-library %}

## Pasos siguientes

- Para seguir aprendiendo sobre las {% data variables.product.prodname_actions %}, consulta la sección "[Encontrar y personalizar las acciones](/actions/learn-github-actions/finding-and-customizing-actions)".
{% ifversion fpt or ghec or ghes %}
- Para entender cómo funciona la facturación de las {% data variables.product.prodname_actions %}, consulta la sección "[Acerca de la facturación para las {% data variables.product.prodname_actions %}](/actions/reference/usage-limits-billing-and-administration#about-billing-for-github-actions)".
{% endif %}

## Contactar con soporte técnico

{% data reusables.actions.contacting-support %}

{% ifversion ghec or ghes or ghae %}
## Leer más

- "[Acerca de {% data variables.product.prodname_actions %} para empresas](/admin/github-actions/getting-started-with-github-actions-for-your-enterprise/about-github-actions-for-enterprises)"
{% endif %}
