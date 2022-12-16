---
title: Verwalten des Zugriffs auf selbstgehostete Runner mithilfe von Gruppen
shortTitle: Manage access with runner groups
intro: 'Du kannst mithilfe von Richtlinien den Zugriff auf selbstgehostete Runner beschränken, die einer Organisation oder einem Unternehmen hinzugefügt wurden.'
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
ms.contentlocale: de-DE
ms.lasthandoff: 11/01/2022
ms.locfileid: '148120889'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

{% ifversion target-runner-groups %} Informationen zum Weiterleiten von Aufträgen an Runner in einer bestimmten Gruppe findest du unter [Auswählen von Runnern in einer Gruppe](/actions/using-jobs/choosing-the-runner-for-a-job#choosing-runners-in-a-group).
{% endif %}

## Informationen zu Runnergruppen

{% data reusables.actions.about-runner-groups %} {% ifversion fpt %}Weitere Informationen findest du in der [Dokumentation zu {% data variables.product.prodname_ghe_cloud %}](/enterprise-cloud@latest/actions/hosting-your-own-runners/managing-access-to-self-hosted-runners-using-groups).{% endif %}

{% ifversion ghec or ghes or ghae %}

## Erstellen einer selbstgehosteten Runnergruppe für eine Organisation

{%- ifversion ghec or ghes %}

{% data reusables.actions.self-hosted-runner-security-admonition %}

{%- endif %}

{% data reusables.actions.creating-a-runner-group-for-an-organization %}

## Erstellen einer selbstgehosteten Runnergruppe für ein Unternehmen

 {%- ifversion ghec or ghes %}

{% data reusables.actions.self-hosted-runner-security-admonition %}

{%- endif %}

{% data reusables.actions.creating-a-runner-group-for-an-enterprise %}

{% endif %}

## Ändern der Zugriffsrichtlinie einer selbstgehosteten Runnergruppe

{%- ifversion fpt or ghec or ghes %}

{% data reusables.actions.self-hosted-runner-security-admonition %}

{%- endif %}

{% data reusables.actions.changing-the-access-policy-of-a-runner-group %}

## Ändern des Namens einer Runnergruppe

{% data reusables.actions.changing-the-name-of-a-runner-group %}

{% ifversion ghec or ghes or ghae %}
## Automatisches Hinzufügen eines selbstgehosteten Runners zu einer Gruppe

{% data reusables.actions.automatically-adding-a-runner-to-a-group %}

## Verschieben eines selbstgehosteten Runners in eine Gruppe

{% data reusables.actions.moving-a-runner-to-a-group %}

## Entfernen einer selbstgehosteten Runnergruppe

{% data reusables.actions.removing-a-runner-group %}

{% endif %}

{% data reusables.actions.section-using-unique-names-for-runner-groups %}
