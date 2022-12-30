---
title: Freigeben von Aktionen und Workflows in deinem Unternehmen
intro: 'Du kannst eine Aktion oder einen Workflow für dein Unternehmen freigeben, ohne die Aktion oder den Workflow extern zu veröffentlichen.'
versions:
  feature: internal-actions
type: tutorial
topics:
  - Actions
  - Action development
shortTitle: Share with your enterprise
ms.openlocfilehash: 90541af9dfbb3c5f8ea2384de4a291336951434f
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/11/2022
ms.locfileid: '145068784'
---
## Informationen zum {% data variables.product.prodname_actions %}-Zugriff auf interne Repositorys

Wenn ein Unternehmenskonto Besitzer deiner Organisation ist, kannst du Aktionen und Workflows innerhalb deines Unternehmens freigeben, ohne die Aktion oder den Workflow öffentlich zu veröffentlichen, indem du {% data variables.product.prodname_actions %}-Workflows erlaubst, auf ein internes Repository zuzugreifen, das die Aktion oder den Workflow enthält. 

Alle im internen Repository gespeicherten Aktionen oder Workflows können in Workflows verwendet werden, die in anderen privaten und internen Repositorys im Besitz derselben Organisation oder einer anderen Organisation im Besitz des Unternehmens definiert sind. Aktionen und Workflows, die in internen Repositorys gespeichert sind, können nicht in öffentlichen Repositorys verwendet werden.

{% warning %}

**Warnung**: {% data reusables.actions.outside-collaborators-internal-actions %}

{% endwarning %}

## Freigeben von Aktionen und Workflows in deinem Unternehmen

1. Speichere die Aktion oder den Workflow in einem internen Repository. Weitere Informationen findest du unter [Informationen zu Repositorys](/repositories/creating-and-managing-repositories/about-repositories#about-internal-repositories).
1. Konfiguriere das Repository, um den Zugriff auf Workflows in anderen privaten und internen Repositorys zu ermöglichen. Weitere Informationen findest du unter [Verwalten von {% data variables.product.prodname_actions %}-Einstellungen für ein Repository](/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/managing-github-actions-settings-for-a-repository#allowing-access-to-components-in-an-internal-repository).

## Weitere Informationsquellen

- [Informationen zu Unternehmenskonten](/admin/overview/about-enterprise-accounts)
- [Wiederverwenden von Workflows](/actions/using-workflows/reusing-workflows)
