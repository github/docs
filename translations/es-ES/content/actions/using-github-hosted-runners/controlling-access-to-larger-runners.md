---
title: Control del acceso a los ejecutores más grandes
intro: 'Puedes utilizar políticas para limitar el acceso a los {% data variables.actions.hosted_runner %} que se hayan agregado a una organización o empresa.'
product: '{% data reusables.gated-features.hosted-runners %}'
versions:
  feature: actions-hosted-runners
type: tutorial
shortTitle: 'Controlling access to {% data variables.actions.hosted_runner %}s'
ms.openlocfilehash: 6761f05ef04d18ebba7b9ef8a2894d7effd2622b
ms.sourcegitcommit: 478f2931167988096ae6478a257f492ecaa11794
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/09/2022
ms.locfileid: '147764173'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## Acerca de grupos de ejecutores

{% data reusables.actions.about-runner-groups %} {% ifversion fpt %}Para obtener más información, consulta la [{% data variables.product.prodname_ghe_cloud %} ](/enterprise-cloud@latest/actions/using-github-hosted-runners/controlling-access-to-larger-runners).{% endif %}

{% ifversion ghec or ghes or ghae %}

## Creación de un grupo de ejecutores para una organización

{% data reusables.actions.hosted-runner-security-admonition %} {% data reusables.actions.creating-a-runner-group-for-an-organization %}

## Crear un grupo de ejecutores para una organización

{% data reusables.actions.hosted-runner-security-admonition %} {% data reusables.actions.creating-a-runner-group-for-an-enterprise %}

{% endif %}

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
