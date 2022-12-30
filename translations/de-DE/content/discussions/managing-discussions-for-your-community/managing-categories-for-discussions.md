---
title: Verwalten von Kategorien für Diskussionen
intro: 'Du kannst Diskussionen in Kategorien einteilen, um die Unterhaltung für deine Communitymitglieder zu organisieren. Dabei kannst du für jede Kategorie ein Format wählen.'
permissions: Repository administrators and people with write or greater access to a repository can manage categories for discussions in the repository. Repository administrators and people with write or greater access to the source repository for organization discussions can manage categories for discussions in the organization.
versions:
  feature: discussions
shortTitle: Manage categories
redirect_from:
  - /discussions/managing-discussions-for-your-community/managing-categories-for-discussions-in-your-repository
ms.openlocfilehash: e16d25ad2bb72f4aea9b441529cb8e9a7a0fee48
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/05/2022
ms.locfileid: '147410467'
---
## Informationen zu Kategorien für Diskussionen

{% data reusables.discussions.about-discussions %} {% data reusables.discussions.about-categories-and-formats %}

{% data reusables.discussions.about-announcement-format %}

Jede Kategorie muss einen eindeutigen Namen und einen zugeordneten Emoji haben und kann eine detaillierte Beschreibung umfassen, die ihren Zweck angibt. Kategorien helfen Verwalter*innen beim Einordnen von Konversationen. Zudem sind sie anpassbar, um das Unterscheiden zwischen Kategorien zu vereinfachen, die eher in den Q&A-Bereich oder offene Konversationen fallen. {% data reusables.discussions.repository-category-limit %} Weitere Informationen findest du unter [Informationen zu Diskussionen](/discussions/collaborating-with-your-community-using-discussions/about-discussions#about-categories-and-formats-for-discussions).

## Standardkategorien

| Category | Zweck | Format |
| :- | :- | :- |
| 📣 Ankündigungen | Updates und Neuigkeiten von Projektverwalter*innen | Ankündigung |
| #️⃣ Allgemein | Für das Projekt relevante Inhalte | Offene Diskussionen |
|💡 Ideen | Ideen zum Ändern oder Verbessern des Projekts | Offene Diskussionen |
| 🗳 Umfragen | Umfragen mit mehreren Auswahlmöglichkeiten für die Community, die diskutiert werden können | Umfragen |
| 🙏 Q&A | Fragen an die Community im Frage-Antwort-Format | Fragen und Antworten |
| 🙌 Anzeigen und Teilen | Erstellte Inhalte, Experimente oder Tests, die für das Projekt relevant sind | Offene Diskussionen |

## Erstellen einer Kategorie

1. Navigiere auf {% data variables.product.product_location %} zur Hauptseite des Repositorys oder der Organisation, in dem bzw. der du eine Kategorie erstellen möchtest.
{% data reusables.discussions.discussions-tab %} {% data reusables.discussions.edit-categories %}
1. Klicke auf **Neue Kategorie**.
  ![Schaltfläche „Neue Kategorie“ über der Liste von Diskussionskategorien für ein Repository](/assets/images/help/discussions/click-new-category-button.png)
1. Bearbeite das Emoji, den Titel, die Beschreibung und das Diskussionsformat für die Kategorie. Weitere Informationen zu Diskussionsformaten findest du unter [Informationen zu Diskussionen](/discussions/collaborating-with-your-community-using-discussions/about-discussions#about-categories-and-formats-for-discussions).
  ![Emoji, Titel, Beschreibung und Diskussionsformat für eine neue Kategorie](/assets/images/help/discussions/edit-category-details.png)
1. Klicken Sie auf **Erstellen**.
  ![Schaltfläche „Erstellen“ zum Erstellen einer neuen Kategorie](/assets/images/help/discussions/new-category-click-create-button.png)

## Bearbeiten einer Kategorie

Du kannst eine Kategorie bearbeiten, um das Emoji, den Titel, die Beschreibung und das Diskussionsformat einer Kategorie zu ändern.

1. Navigiere auf {% data variables.product.product_location %} zur Hauptseite des Repositorys oder der Organisation, in dem bzw. der du eine Kategorie bearbeiten möchtest.
{% data reusables.discussions.discussions-tab %}
1. Klicke rechts neben einer Kategorie in der Liste auf {% octicon "pencil" aria-label="The pencil icon" %}.
  ![Bearbeitungsschaltfläche rechts neben einer Kategorie in der Liste der Kategorien für ein Repository](/assets/images/help/discussions/click-edit-for-category.png)
1. {% data reusables.discussions.edit-category-details %} ![Bearbeiten des Emojis, des Titels, der Beschreibung und des Diskussionsformats für eine vorhandene Kategorie](/assets/images/help/discussions/edit-existing-category-details.png)
1. Klicke auf **Änderungen speichern**.
  ![Schaltfläche „Änderungen speichern“ für eine vorhandene Kategorie](/assets/images/help/discussions/existing-category-click-save-changes-button.png)

## Löschen einer Kategorie

Wenn du eine Kategorie löscht, verschiebt {% data variables.product.product_name %} alle Diskussionen in der gelöschten Kategorie in eine von dir ausgewählte vorhandene Kategorie.

1. Navigiere auf {% data variables.product.product_location %} zur Hauptseite des Repositorys oder der Organisation, in dem bzw. der du eine Kategorie löschen möchtest.
{% data reusables.discussions.discussions-tab %}
1. Klicke rechts neben einer Kategorie in der Liste auf {% octicon "trash" aria-label="The trash icon" %}.
  ![Papierkorbschaltfläche rechts neben einer Kategorie in der Liste der Kategorien für ein Repository](/assets/images/help/discussions/click-delete-for-category.png)
1. Wähle im Dropdownmenü eine neue Kategorie für alle Diskussionen in der Kategorie aus, die du löschst.
  ![Dropdownmenü zum Auswählen einer neuen Kategorie beim Löschen einer vorhandenen Kategorie](/assets/images/help/discussions/choose-new-category.png)
1. Klicke auf **Löschen und verschieben**.
  ![Dropdownmenü zum Auswählen einer neuen Kategorie beim Löschen einer vorhandenen Kategorie](/assets/images/help/discussions/click-delete-and-move-button.png)
