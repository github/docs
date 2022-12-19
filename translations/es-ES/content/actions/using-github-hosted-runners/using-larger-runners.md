---
title: Uso de ejecutores más grandes
shortTitle: Larger runners
intro: '{% data variables.product.prodname_dotcom %} ofrece ejecutores más grandes con más RAM y CPU.'
miniTocMaxHeadingLevel: 3
product: '{% data reusables.gated-features.hosted-runners %}'
versions:
  feature: actions-hosted-runners
ms.openlocfilehash: bbae77f1f027dd4a238de6ba636eb3cb842790b1
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 10/25/2022
ms.locfileid: '148106441'
---
## Información general sobre {% data variables.actions.hosted_runner %}

Además de los [ejecutores estándar de {% data variables.product.prodname_dotcom %}hospedados](/actions/using-github-hosted-runners/about-github-hosted-runners#supported-runners-and-hardware-resources), {% data variables.product.prodname_dotcom %} también ofrece a los clientes de {% data variables.product.prodname_team %} y {% data variables.product.prodname_ghe_cloud %} planea un intervalo de {% data variables.actions.hosted_runner %} con más RAM y CPU. Estos ejecutores están hospedados por {% data variables.product.prodname_dotcom %} y tienen preinstalada la aplicación ejecutor y otras herramientas.

Si se habilitan los {% data variables.actions.hosted_runner %}es en la organización, se crea automáticamente un grupo de ejecutores predeterminado con un conjunto de cuatro {% data variables.actions.hosted_runner %}es configurados previamente.

Al agregar un {% data variables.actions.hosted_runner %}s a una organización, vas a definir un tipo de máquina a partir de una selección de especificaciones de hardware disponibles e imágenes de sistema operativo. {% data variables.product.prodname_dotcom %} creará varias instancias de este ejecutor que se escalan y reducen verticalmente para que coincidan con las demandas de trabajo de la organización, en función de los límites de escalado automático que definas.

## Especificaciones de equipo de los {% data variables.actions.hosted_runner %}es 

|Tamaño (vCPU) | Memoria (GB) | Almacenamiento (SSD) |
| ------------- | ------------- | ------------- |
|4 núcleos | 16 RAM  | 150 GB|
| 8 núcleos | 32 RAM | 300 GB |
|16 núcleos| 64 RAM | 600 GB |
|32 núcleos| 128 RAM| 1200 GB|
|64 núcleos| 256 RAM | 2040 GB|

## Información general sobre {% data variables.actions.hosted_runner %}

Los {% data variables.actions.hosted_runner %} se administran en el nivel de organización, donde se organizan en grupos que pueden contener hasta varias instancias del ejecutor. También se pueden crear en el nivel empresarial y compartirse con organizaciones en la jerarquía. Una vez creado un grupo, puedes agregar un ejecutor al grupo y actualizar los flujos de trabajo para que tengan como destino la etiqueta asignada a {% data variables.actions.hosted_runner %}. También puedes controlar qué repositorios pueden enviar trabajos al grupo para su procesamiento. Para obtener más información, consulta "[Controlar el acceso a {% data variables.actions.hosted_runner %}](/actions/using-github-hosted-runners/controlling-access-to-larger-runners)."

En el diagrama siguiente, se ha definido una clase de ejecutor hospedado denominado `ubuntu-20.04-16core` con la configuración personalizada del hardware y del sistema operativo.

![Diagrama que explica {% data variables.actions.hosted_runner %}](/assets/images/hosted-runner.png)

1. Las instancias de este ejecutor se crean automáticamente y se agregan a un grupo denominado `ubuntu-20.04-16core`. 
2. A los ejecutores se les ha asignado la etiqueta `ubuntu-20.04-16core`. 
3. Los trabajos de flujo de trabajo usan la etiqueta `ubuntu-20.04-16core` en su clave `runs-on` para indicar el tipo de ejecutor que necesitan para ejecutar el trabajo.
4. {% data variables.product.prodname_actions %} comprueba el grupo de ejecutores para ver si el repositorio está autorizado para enviar trabajos al ejecutor.
5. El trabajo se ejecuta en la siguiente instancia disponible del ejecutor `ubuntu-20.04-16core`.

## Escalado automático de {% data variables.actions.hosted_runner %}

Tus {% data variables.actions.hosted_runner %} se pueden configurar para escalar automáticamente según sus necesidades. Cuando se envían trabajos para su procesamiento, se pueden aprovisionar automáticamente más máquinas para ejecutar los trabajos hasta alcanzar un límite máximo predefinido. Cada máquina solo controla un trabajo cada vez, por lo que esta configuración determina eficazmente el número de trabajos que se pueden ejecutar simultáneamente. 

Durante el proceso de implementación del ejecutor, puedes configurar la opción _Max_, que te permite controlar los costos estableciendo el número máximo paralelo de máquinas que se crean en este conjunto. Un valor más alto aquí puede ayudar a evitar que los flujos de trabajo se bloqueen debido al paralelismo.

## Anidación de {% data variables.actions.hosted_runner %}

De forma predeterminada, {% data variables.actions.hosted_runner %} reciben una dirección IP dinámica que cambia para cada ejecución de trabajo. Opcionalmente, los clientes de {% data variables.product.prodname_ghe_cloud %} pueden configurar sus {% data variables.actions.hosted_runner %} para recibir una dirección IP estática del grupo de direcciones de {% data variables.product.prodname_dotcom %}. Cuando se habilita, las instancias de {% data variables.actions.hosted_runner %} recibirán una dirección de un intervalo único para el ejecutor, lo que le permite usar este intervalo para configurar una lista de permitidos de firewall. {% ifversion fpt %}Puedes usar hasta 10 intervalos de direcciones IP estáticas en total con todos tus {% data variables.actions.hosted_runner %}es{% endif %}{% ifversion ghec %}Puedes usar hasta 10 intervalos de direcciones IP estáticas con los {% data variables.actions.hosted_runner %}es creados en el nivel de empresa. Además, puedes usar hasta 10 intervalos de direcciones IP estáticas con los {% data variables.actions.hosted_runner %}es creados en el nivel de organización por cada organización de tu empresa{% endif %}.

{% note %}

**Nota**: Si los ejecutores no se usan durante más de 30 días, sus intervalos de direcciones IP se quitan automáticamente y no se pueden recuperar.

{% endnote %}

## Planificación de {% data variables.actions.hosted_runner %}

### Creación de un grupo de ejecutores

Los grupos de ejecutores se usan para recopilar conjuntos de máquinas virtuales y crear un límite de seguridad alrededor de ellas. Después, puedes decidir qué organizaciones o repositorios pueden ejecutar trabajos en esos conjuntos de máquinas. Durante el proceso de implementación de {% data variables.actions.hosted_runner %}, el ejecutor se puede agregar a un grupo existente o, de lo contrario, se unirá a un grupo predeterminado. Puedes crear un grupo siguiendo los pasos descritos en "[Control del acceso a {% data variables.actions.hosted_runner %}s](/actions/using-github-hosted-runners/controlling-access-to-larger-runners)."

### Descripción de la facturación

{% note %}

**Nota**: Los {% data variables.actions.hosted_runner %}es no usan los minutos de derechos incluidos, y no son gratuitos para repositorios públicos.

{% endnote %}

En comparación con los datos estándar los ejecutores hospedados en {% data variables.product.prodname_dotcom %} y {% data variables.actions.hosted_runner %} se facturan de forma diferente. Para obtener más información, consulta "[Tarifas por minuto](/billing/managing-billing-for-github-actions/about-billing-for-github-actions#per-minute-rates)".

## Agregar un {% data variables.actions.hosted_runner %} a una empresa

Puedes agregar {% data variables.actions.hosted_runner %} a una empresa, en donde pueden asignarse a organizaciones múltiples. Los administradores de la organización podrán controlar entonces qué repositorios pueden utilizarlo. Para agregar un {% data variables.actions.hosted_runner %} a una empresa, debes ser el propietario de la misma.

{% data reusables.actions.add-hosted-runner-overview %}

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.policies-tab %} {% data reusables.enterprise-accounts.actions-tab %} {% data reusables.enterprise-accounts.actions-runners-tab %} {% data reusables.actions.add-hosted-runner %}
1. Para permitir que las organizaciones accedan a {% data variables.actions.hosted_runner %}, especifica la lista de organizaciones que pueden usarla. Para más información, consulta "[Administración del acceso a los ejecutores](#managing-access-to-your-runners)".

## Agregar un {% data variables.actions.hosted_runner %} a una empresa

Puedes agregar un {% data variables.actions.hosted_runner %} a una organización, donde los administradores de la organización pueden controlar qué repositorios pueden usarlos. 

{% data reusables.actions.add-hosted-runner-overview %}

{% data reusables.organizations.navigate-to-org %} {% data reusables.organizations.org_settings %} {% data reusables.organizations.settings-sidebar-actions-runners %} {% data reusables.actions.add-hosted-runner %}
1. Para permitir que los repositorios accedan a {% data variables.actions.hosted_runner %}, agrégalos a la lista de repositorios que pueden usarlos. Para más información, consulta "[Administración del acceso a los ejecutores](#managing-access-to-your-runners)".

## Ejecutar trabajos en tu ejecutor

Una vez definido el tipo de ejecutor, puedes actualizar los archivos YAML del flujo de trabajo para enviar trabajos a las instancias de ejecutor recién creadas para su procesamiento. En este ejemplo, un grupo de ejecutores se rellena con ejecutores de Ubuntu 16 núcleos, a los que se ha asignado la etiqueta `ubuntu-20.04-16core`. Si tienes un ejecutor que coincida con esta etiqueta, el trabajo `check-bats-version` usa la clave `runs-on` para dirigirse a ese ejecutor cada vez que se ejecute el trabajo:

```yaml
name: learn-github-actions
on: [push]
jobs:
  check-bats-version:
    runs-on: ubuntu-20.04-16core
    steps:
      - uses: {% data reusables.actions.action-checkout %}
      - uses: {% data reusables.actions.action-setup-node %}
        with:
          node-version: '14'
      - run: npm install -g bats
      - run: bats -v
```

Para averiguar qué ejecutores están habilitados para el repositorio y la organización, debes ponerte en contacto con el administrador de la organización. El administrador de la organización puede crear ejecutores y grupos de ejecutores, así como configurar permisos para especificar qué repositorios pueden acceder a un grupo de ejecutores.

## Administrar el acceso a tus ejecutores

{% note %}

**Nota**: Para que los flujos de trabajo puedan enviar trabajos a {% data variables.actions.hosted_runner %}, primero debes configurar los permisos para el grupo de ejecutores. Consulta las siguientes secciones para obtener más información.

{% endnote %}

Los grupos de ejecutores se usan para controlar qué repositorios pueden ejecutar trabajos en los {% data variables.actions.hosted_runner %}. Debes conceder acceso al grupo desde cada nivel de la jerarquía de administración, en función de dónde hayas definido los {% data variables.actions.hosted_runner %}:

- **Ejecutores en el nivel empresarial**: configura el grupo de ejecutores para conceder acceso a todas las organizaciones necesarias. Además, para cada organización, debes configurar el grupo para especificar a qué repositorios se permite el acceso.
- **Ejecutores en el nivel de la organización**: configura el grupo de ejecutores especificando a qué repositorios se permite el acceso.

Por ejemplo, el diagrama siguiente tiene un grupo de ejecutor denominado `grp-ubuntu-20.04-16core` en el nivel empresarial. Para que el repositorio denominado `octo-repo` pueda usar los ejecutores del grupo, primero debes configurar el grupo en el nivel empresarial para permitir el acceso desde la organización `octo-org`; a continuación, debes configurar el grupo en el nivel de organización para permitir el acceso desde `octo-repo`:

![Diagrama que explica los grupos de {% data variables.actions.hosted_runner %}](/assets/images/hosted-runner-mgmt.png)

### Permitir que los repositorios accedan a un grupo de ejecutores

En este procedimiento se muestra cómo configurar permisos de grupo en los niveles de empresa y organización:

{% data reusables.actions.runner-groups-navigate-to-repo-org-enterprise %} {% data reusables.actions.settings-sidebar-actions-runner-groups-selection %}
  - En el caso de los grupos de ejecutores de una empresa, en **Acceso a la organización**, modifica las organizaciones que pueden acceder al grupo de ejecutores.
  - En el caso de los grupos de ejecutores de una organización, en **Acceso al repositorio**, modifica los repositorios que pueden acceder al grupo de ejecutores.

{% warning %}

**Advertencia**:

{% data reusables.actions.hosted-runner-security %}

Para obtener más información, consulta "[Controlar el acceso a {% data variables.actions.hosted_runner %}](/actions/using-github-hosted-runners/controlling-access-to-larger-runners)".

{% endwarning %}
