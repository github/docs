---
title: Administración del acceso a los ejecutores autohospedados mediante grupos
shortTitle: Manage access with runner groups
intro: Puedes utilizar políticas para limitar el acceso a los ejecutores auto-hospedados que se hayan agregado a una organización o empresa.
redirect_from:
  - /actions/hosting-your-own-runners/managing-access-to-self-hosted-runners
miniTocMaxHeadingLevel: 3
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: tutorial
ms.openlocfilehash: c6f53c3698800de519fe34231a8faf37924eacaa
ms.sourcegitcommit: d0cea547f6a5d991a28c310257cafd616235889f
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 11/01/2022
ms.locfileid: '148120893'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

{% ifversion target-runner-groups %} Para obtener información sobre cómo enrutar trabajos a los ejecutores de un grupo específico, consulta "[Elección de ejecutores en un grupo](/actions/using-jobs/choosing-the-runner-for-a-job#choosing-runners-in-a-group)".
{% endif %}

## Acerca de grupos de ejecutores

{% data reusables.actions.about-runner-groups %} {% ifversion fpt %}Para obtener más información, consulta la [{% data variables.product.prodname_ghe_cloud %} ](/enterprise-cloud@latest/actions/hosting-your-own-runners/managing-access-to-self-hosted-runners-using-groups).{% endif %}

{% ifversion ghec or ghes or ghae %}

## Crear un grupo de ejecutores auto-hospedados para una organización

{%- ifversion ghec or ghes %}

{% data reusables.actions.self-hosted-runner-security-admonition %}

{%- endif %}

{% data reusables.actions.creating-a-runner-group-for-an-organization %}

## Crear un grupo de ejecutores auto-hospedados para una empresa

 {%- ifversion ghec or ghes %}

{% data reusables.actions.self-hosted-runner-security-admonition %}

{%- endif %}

{% data reusables.actions.creating-a-runner-group-for-an-enterprise %}

{% endif %}

## Cambiar la política de acceso de un grupo de ejecutores auto-hospedados

{%- ifversion fpt or ghec or ghes %}

{% data reusables.actions.self-hosted-runner-security-admonition %}

{%- endif %}

{% data reusables.actions.changing-the-access-policy-of-a-runner-group %}

## Cambiar el nombre de un grupo de ejectuores

{% data reusables.actions.changing-the-name-of-a-runner-group %}

{% ifversion ghec or ghes or ghae %}
## Agregar ejecutores auto-hospedados a un grupo automáticamente

{% data reusables.actions.automatically-adding-a-runner-to-a-group %}

## Mover un ejecutor auto-hospedado a un grupo

{% data reusables.actions.moving-a-runner-to-a-group %}

## Eliminar un grupo de ejecutores auto-hospedados

{% data reusables.actions.removing-a-runner-group %}

{% endif %}

{% data reusables.actions.section-using-unique-names-for-runner-groups %}
