---
title: Control del acceso a los ejecutores más grandes
shortTitle: 'Control access to {% data variables.actions.hosted_runner %}s'
intro: 'Puedes utilizar políticas para limitar el acceso a los {% data variables.actions.hosted_runner %} que se hayan agregado a una organización o empresa.'
product: '{% data reusables.gated-features.hosted-runners %}'
miniTocMaxHeadingLevel: 3
versions:
  feature: actions-hosted-runners
type: tutorial
ms.openlocfilehash: d19e875ae8ee4556e635540f47625fa5a9874918
ms.sourcegitcommit: a35d85531445980b5f04d3fc70180a29dad37f89
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 12/01/2022
ms.locfileid: '148189909'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## Acerca de grupos de ejecutores

{% data reusables.actions.about-runner-groups %} {% ifversion fpt %}Para obtener más información, consulta la [{% data variables.product.prodname_ghe_cloud %} ](/enterprise-cloud@latest/actions/using-github-hosted-runners/controlling-access-to-larger-runners).{% endif %}

### Grupo predeterminado de {% data variables.actions.hosted_runner %}

Las organizaciones y empresas con acceso a {% data variables.actions.hosted_runner %} recibirán automáticamente un grupo de ejecutores predeterminado denominado "Ejecutores más grandes predeterminados" que incluye 4 ejecutores de tamaños variables. Los ejecutores de este grupo están preconfigurados y listos para su uso inmediato. Para usar los ejecutores de este grupo, deberás agregar la etiqueta correspondiente al ejecutor de tu elección al archivo de flujo de trabajo. En la tabla siguiente se muestran algunas etiquetas. Para obtener más información sobre cómo usar etiquetas, consulta "[Ejecutar trabajos en tu ejecutor](/actions/using-github-hosted-runners/using-larger-runners#running-jobs-on-your-runner)."


#### Ejecutores predeterminados

|Descripción | Etiqueta | Imagen |
| ------- | ------- | ------ |
| Ejecutor de Ubuntu de 4 núcleos | `ubuntu-latest-4-cores` | Ubuntu: más reciente |
| Ejecutor de Ubuntu de 8 núcleos | `ubuntu-latest-8-cores` | Ubuntu: más reciente |
| Ejecutor de Ubuntu de 16 núcleos | `ubuntu-latest-16-cores` | Ubuntu: más reciente |
| Ejecutor de Windows de 8 núcleos | `windows-latest-8-cores` | Windows Server: más reciente |

El grupo predeterminado de {% data variables.actions.hosted_runner %} se crea en el nivel de entidad de facturación. Si tu organización forma parte de una cuenta de empresa, el grupo se administrará en el nivel empresarial. Si tu organización no se encuentra en una empresa, el grupo se administra en el nivel de organización. 

No se te facturará por estos ejecutores hasta que los uses en los flujos de trabajo. Una vez que se usan estos ejecutores, la facturación funciona como de costumbre. Para obtener más información sobre la facturación, consulta "[Uso de {% data variables.actions.hosted_runner %}](/actions/using-github-hosted-runners/using-larger-runners#understanding-billing)".

El acceso predeterminado para un grupo de {% data variables.actions.hosted_runner %} en el nivel empresarial se configura en uso compartido automático con todas las organizaciones de la empresa, pero no con todos los repositorios. Los administradores de la organización deberán compartir el grupo predeterminado de {% data variables.actions.hosted_runner %} con cada repositorio por separado. En el caso de los grupos de {% data variables.actions.hosted_runner %} en el nivel de organización, el acceso predeterminado se establece para compartir automáticamente el grupo con todos los repositorios. Para obtener más información sobre cómo cambiar las directivas de acceso y dónde ver el grupo predeterminado de {% data variables.actions.hosted_runner %}, ve "[Cambiar la política de acceso de un grupo de ejecutores](#changing-the-access-policy-of-a-runner-group)".

{% ifversion ghec or ghes or ghae %}

## Creación de un grupo de ejecutores para una organización

{% data reusables.actions.hosted-runner-security-admonition %} {% data reusables.actions.creating-a-runner-group-for-an-organization %}

## Crear un grupo de ejecutores para una organización

{% data reusables.actions.hosted-runner-security-admonition %} {% data reusables.actions.creating-a-runner-group-for-an-enterprise %}

{% endif %}

{% data reusables.actions.section-using-unique-names-for-runner-groups %}

## Cambiar la política de acceso de un grupo de ejecutores

{% data reusables.actions.hosted-runner-security-admonition %} {% data reusables.actions.changing-the-access-policy-of-a-runner-group %}

## Cambiar el nombre de un grupo de ejectuores

{% data reusables.actions.changing-the-name-of-a-runner-group %}

{% ifversion ghec or ghes or ghae %}
## Cambiar un ejecutor a un grupo

{% data reusables.actions.moving-a-runner-to-a-group %}

## Eliminar un grupo de ejecutores

{% data reusables.actions.removing-a-runner-group %}

{% endif %}
