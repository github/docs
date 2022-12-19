---
title: Verwalten der Richtlinie für das Abzeichnen von Commits für deine Organisation
intro: 'Du kannst verlangen, dass Benutzer alle Commits, die sie auf der Weboberfläche von {% data variables.product.product_name %} an Repositorys im Besitz deiner Organisation vornehmen, automatisch abzeichnen.'
versions:
  feature: commit-signoffs
permissions: Organization owners can require all commits to repositories owned by the organization be signed off by the commit author.
topics:
  - Organizations
shortTitle: Manage the commit signoff policy
ms.openlocfilehash: 3d567d9f592758a2a9998df07556c4f2a04a852c
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 10/25/2022
ms.locfileid: '148109438'
---
## Informationen zum Abzeichnen von Commits

Um zu bestätigen, dass ein Commit mit den Regeln und Lizenzen eines Repositorys übereinstimmt, verlangen viele Organisationen von Entwicklern das Abzeichnen jedes Commits. Wenn deine Organisation das Abzeichnen von Commits verlangt, kannst du das Abzeichnen zu einem nahtlosen Teil des Commitprozesses machen, indem du das obligatorische Abzeichnen von Commits für Benutzer aktivierst, die über die Weboberfläche von {% data variables.product.product_name %} Commits durchführen. Nachdem du das obligatorische Abzeichnen von Commits für eine Organisation aktiviert hast, wird jeder Commit, der über die Weboberfläche von {% data variables.product.product_name %} in Repositorys dieser Organisation erfolgt, automatisch vom Autor des Commits abgezeichnet.

Personen mit Administratorzugriff auf ein Repository können das obligatorische Abzeichnen von Commits auch auf Repository-Ebene aktivieren. Weitere Informationen findest Du unter [Verwalten der Richtlinie zum Abzeichnen von Commits für dein Repository](/repositories/managing-your-repositorys-settings-and-features/managing-repository-settings/managing-the-commit-signoff-policy-for-your-repository).

{% data reusables.repositories.commit-signoffs %}

## Verwalten des obligatorischen Abzeichnen von Commits für deine Organisation

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% data reusables.organizations.repository-defaults %}
1. Aktiviere oder deaktivieren **Mitwirkende auffordern, webbasierte Commits abzuzeichnen**.
  ![Screenshot von „Mitwirkende auffordern, webbasierte Commits abzuzeichnen“](/assets/images/help/organizations/require-signoffs.png)
