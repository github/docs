---
title: Verwalten der Richtlinie für das Abzeichnen von Commits für dein Repository
intro: 'Du kannst verlangen, dass Benutzer die Commits, die sie an deinem Repository vornehmen, automatisch über die Weboberfläche von {% data variables.product.product_name %} abzeichnen.'
versions:
  feature: commit-signoffs
permissions: Organization owners and repository administrators can require all commits to a repository to be signed off by the commit author.
topics:
  - Repositories
shortTitle: Manage the commit signoff policy
ms.openlocfilehash: 078e80ed9f2b916c2c82b522eaad709fae5dc46c
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 10/25/2022
ms.locfileid: '148107693'
---
## Informationen zum Abzeichnen von Commits

Mit dem Abzeichnen von Commits können Benutzer bestätigen, dass ein Commit mit den Regeln und der Lizenzierung eines Repositorys konform ist. Für Benutzer, die über die Weboberfläche von {% data variables.location.product_location %} committen, kannst du für einzelne Repositorys das obligatorische Abzeichnen von Commits aktivieren, sodass das Abzeichnen eines Commits ein nahtloser Teil des Commitprozesses ist. Wenn das obligatorische Abzeichnen von Commits für ein Repository aktiviert ist, wird jeder Commit für dieses Repository über die Weboberfläche von {% data variables.location.product_location %} automatisch vom Autor des Commits abgezeichnet.

Organisationsbesitzer können auch das obligatorische Abzeichnen von Commits auf Organisationsebene aktivieren. Weitere Informationen findest Du unter [Verwalten der Richtlinie zum Abzeichnen von Commits für deine Organisation](/organizations/managing-organization-settings/managing-the-commit-signoff-policy-for-your-organization).

{% data reusables.repositories.commit-signoffs %}

## Das obligatorische Abzeichnen von Commits für dein Repository aktivieren oder deaktivieren

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-settings %}
1. Wähle **Mitwirkende auffordern, webbasierte Commits abzuzeichnen** aus.
  ![Screenshot von „Mitwirkende auffordern, webbasierte Commits abzuzeichnen“](/assets/images/help/repository/require-signoffs.png)
