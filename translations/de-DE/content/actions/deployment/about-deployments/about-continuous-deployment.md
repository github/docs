---
title: Informationen zu Continuous Deployment
intro: 'Du kannst direkt in deinem {% data variables.product.prodname_dotcom %}-Repository mit {% data variables.product.prodname_actions %} benutzerdefinierte Workflows für Continuous Deployment (CD) erstellen.'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: overview
redirect_from:
  - /actions/deployment/about-continuous-deployment
topics:
  - CD
shortTitle: About continuous deployment
ms.openlocfilehash: 379afa0088f7f10302f5bf8202f5259ac4777bec
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/11/2022
ms.locfileid: '147060138'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## Informationen zu Continuous Deployment

_Continuous Deployment_ (CD) steht für die Verwendung von Automatisierung bei der Veröffentlichung und Bereitstellung von Softwareupdates. Im Rahmen des typischen CD-Prozesses wird der Code vor der Bereitstellung automatisch erstellt und getestet.

Continuous Deployment wird häufig mit Continuous Integration kombiniert. Weitere Informationen zu Continuous Integration findest du unter [Informationen zu Continuous Integration](/actions/guides/about-continuous-integration).

## Informationen zu Continuous Deployment mit {% data variables.product.prodname_actions %}

Du kannst einen {% data variables.product.prodname_actions %}-Workflow einrichten, um dein Softwareprodukt bereitzustellen. Um sicherzugehen, dass dein Produkt wie erwartet funktioniert, kann dein Workflow den Code in deinem Repository erstellen und deine Tests vor der Bereitstellung ausführen.

Du kannst deinen CD-Workflow so konfigurieren, dass er bei Auftreten eines {% data variables.product.product_name %}-Ereignisses (etwa, wenn neuer Code in den Standardbranch deines Repositorys gepusht wird), nach einem festen Zeitplan, manuell oder bei Auftreten eines externen Ereignisses ausgeführt wird. Für Letzteres kannst du den Sende-Webhook des Repositorys verwenden. Weitere Informationen dazu, wann dein Workflow ausgeführt werden kann, findest du unter [Ereignisse, die Workflows auslösen](/actions/reference/events-that-trigger-workflows).

{% data variables.product.prodname_actions %} bietet Features, die dir mehr Kontrolle über Bereitstellungen geben. Du kannst beispielsweise Umgebungen verwenden, um festzulegen, dass für die Fortsetzung eines Auftrags eine Genehmigung erforderlich ist, um einzuschränken, von welchen Branches ein Workflow ausgelöst werden kann, und um den Zugriff auf Geheimnisse zu beschränken. Du kannst Parallelität verwenden, um deine CD-Pipeline auf maximal eine aktive Bereitstellung und eine ausstehende Bereitstellung zu beschränken. Weitere Informationen zu diesen Features findest du unter [Bereitstellen mit GitHub Actions](/actions/deployment/deploying-with-github-actions) sowie unter [Verwenden von Umgebungen für die Bereitstellung](/actions/deployment/using-environments-for-deployment).

{% ifversion fpt or ghec or ghae-issue-4856 or ghes > 3.4 %}

## Verwenden von OpenID Connect für den Zugriff auf Cloudressourcen

{% data reusables.actions.about-oidc-short-overview %}

{% endif %}

## Startworkflows und Drittanbieteraktionen

{% data reusables.actions.cd-templates-actions %}

## Weitere Informationsquellen

- [Bereitstellen mit GitHub Actions](/actions/deployment/deploying-with-github-actions)
- [Verwenden von Umgebungen für die Bereitstellung](/actions/deployment/using-environments-for-deployment){% ifversion fpt or ghec %}
- [Verwalten der Abrechnung für {% data variables.product.prodname_actions %}](/billing/managing-billing-for-github-actions) {% endif %}

