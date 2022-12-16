---
title: Erste Schritte mit GitHub Actions für GitHub AE
shortTitle: Get started
intro: 'Informationen zum Konfigurieren von {% data variables.product.prodname_actions %} auf {% data variables.product.prodname_ghe_managed %}.'
permissions: 'Enterprise owners can enable {% data variables.product.prodname_actions %} and configure enterprise settings.'
versions:
  ghae: '*'
type: how_to
topics:
  - Actions
  - Enterprise
redirect_from:
  - /admin/github-actions/getting-started-with-github-actions-for-github-ae
  - /admin/github-actions/using-github-actions-in-github-ae/getting-started-with-github-actions-for-github-ae
ms.openlocfilehash: c6d6767e95e6f5d27c311e46f5042c79717ab97e
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/10/2022
ms.locfileid: '145104947'
---
## Informationen zu {% data variables.product.prodname_actions %} auf {% data variables.product.prodname_ghe_managed %}

{% data variables.product.prodname_actions %} ist für {% data variables.product.product_name %} standardmäßig aktiviert. Um erste Schritte mit {% data variables.product.prodname_actions %} in deinem Unternehmen ausführen zu können, musst du die Zugriffsberechtigungen für {% data variables.product.prodname_actions %} verwalten und Runner zum Ausführen von Workflows hinzufügen.

{% data reusables.actions.introducing-enterprise %}

{% data reusables.actions.migrating-enterprise %}

## Verwalten von Zugriffsberechtigungen für {% data variables.product.prodname_actions %} in deinem Unternehmen

Du kannst Richtlinien verwenden, um den Zugriff auf {% data variables.product.prodname_actions %} zu verwalten. Weitere Informationen findest du unter [Erzwingen von GitHub Actions-Richtlinien in deinem Unternehmen](/admin/github-actions/enforcing-github-actions-policies-for-your-enterprise).

## Hinzufügen von Runnern

Du musst deine eigenen Computer konfigurieren und hosten, um Aufträge für dein Unternehmen auf {% data variables.product.product_name %} auszuführen. {% data reusables.actions.about-self-hosted-runners %} Weitere Informationen findest du unter [Erste Schritte mit selbstgehosteten Runnern für dein Unternehmen](/admin/github-actions/getting-started-with-github-actions-for-your-enterprise/getting-started-with-self-hosted-runners-for-your-enterprise) und [Hosten deiner eigenen Runner](/actions/hosting-your-own-runners).

{% data reusables.actions.general-security-hardening %}
