---
title: Erste Schritte mit GitHub Actions für GitHub Enterprise Cloud
shortTitle: Get started
intro: 'Erfahre, wie du {% data variables.product.prodname_actions %} in {% data variables.product.prodname_ghe_cloud %} konfigurierst.'
permissions: 'Enterprise owners can configure {% data variables.product.prodname_actions %}.'
versions:
  ghec: '*'
type: how_to
topics:
  - Actions
  - Enterprise
ms.openlocfilehash: 088fc1fcce3b44c6db350f744ad13668d04a4bb8
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/10/2022
ms.locfileid: '145106815'
---
## Informationen zu {% data variables.product.prodname_actions %} in {% data variables.product.prodname_ghe_cloud %}

{% data variables.product.prodname_actions %} ist standardmäßig für dein Unternehmen aktiviert. Um mit der Verwendung von {% data variables.product.prodname_actions %} in deinem Unternehmen zu beginnen, kannst du die Richtlinien verwalten, die steuern, wie Unternehmensmitglieder {% data variables.product.prodname_actions %} verwenden, und optional selbstgehostete Runner zum Ausführen von Workflows hinzufügen.

{% data reusables.actions.introducing-enterprise %}

{% data reusables.actions.migrating-enterprise %}

## Verwalten von Richtlinien für {% data variables.product.prodname_actions %}

Mithilfe von Richtlinien kannst du steuern, wie Unternehmensmitglieder {% data variables.product.prodname_actions %} verwenden. Du kannst beispielsweise einschränken, welche Aktionen zulässig sind, und die Artefakt- und Protokollaufbewahrung konfigurieren. Weitere Informationen findest du unter [Erzwingen von GitHub Actions-Richtlinien in deinem Unternehmen](/admin/github-actions/enforcing-github-actions-policies-for-your-enterprise).

## Hinzufügen von Runnern

Zum Ausführen von {% data variables.product.prodname_actions %}-Workflows musst du Runner hinzufügen. {% data reusables.actions.about-runners %} Wenn du von {% data variables.product.company_short %} gehostete Runner verwendest, wird dir die Nutzung verbrauchsbasiert in Rechnung gestellt, nachdem die in {% data variables.product.product_name %} enthaltenen Minuten aufgebraucht sind. Selbstgehostete Runner dagegen sind kostenlos. Weitere Informationen findest du unter [Informationen zur Abrechnung für {% data variables.product.prodname_actions %}](/billing/managing-billing-for-github-actions/about-billing-for-github-actions).

Weitere Informationen findest du unter „[Informationen zu selbstgehosteten Runnern](/actions/hosting-your-own-runners/about-self-hosted-runners)“.

Wenn du dich für selbstgehostete entscheidest, kannst du Runner auf Unternehmens-, Organisations- oder Repositoryebene hinzufügen. Weitere Informationen findest du unter [Hinzufügen von selbstgehosteten Runnern](/actions/hosting-your-own-runners/adding-self-hosted-runners).

{% data reusables.actions.general-security-hardening %}
