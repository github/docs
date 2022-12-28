---
title: Verwalten von Diskussionen
intro: 'Du kannst die Diskussionen kategorisieren, hervorheben, übertragen oder löschen.'
permissions: Repository administrators and people with write or greater access to a repository can manage discussions in the repository. Repository administrators and people with write or greater access to the source repository for organization discussions can manage discussions in the organization.
versions:
  feature: discussions
shortTitle: Manage discussions
redirect_from:
  - /discussions/managing-discussions-for-your-community/managing-discussions-in-your-repository
ms.openlocfilehash: e5e1474648973c90d16e8998db18518331233aa3
ms.sourcegitcommit: 1529de77bfcbe45519131b5f5fb3ab319758c2d2
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 11/14/2022
ms.locfileid: '148164339'
---
## Informationen zum Verwalten von Diskussionen

{% data reusables.discussions.about-discussions %} Weitere Informationen zu Diskussionen findest du unter [Informationen zu Diskussionen](/discussions/collaborating-with-your-community-using-discussions/about-discussions).

Organisationsbesitzer*innen können die erforderlichen Berechtigungen zum Erstellen einer Diskussion in Repositorys auswählen, die sich im Besitz der Organisation befinden. Ebenso können sie die im Quellrepository erforderlichen Berechtigungen ändern, um auszuwählen, welche Berechtigungen zum Erstellen einer Organisationsdiskussion erforderlich sind. Weitere Informationen findest du unter [Verwalten der Diskussionserstellung für Repositorys in deiner Organisation](/organizations/managing-organization-settings/managing-discussion-creation-for-repositories-in-your-organization).

Als Diskussionsbetreuer kannst du Communityressourcen erstellen, um Diskussionen zu fördern, die auf das Gesamtprojektziel ausgerichtet sind, und ein freundliches offenes Forum für Projektmitarbeiter verfügbar machen. Das Erstellen von zu befolgenden {% ifversion fpt or ghec %}Verhaltensregeln oder{% endif %} Richtlinien für Mitwirkende für Projektmitarbeiter, trägt dazu bei, ein kooperatives und produktives Forum zu etablieren. Weitere Informationen zum Erstellen von Communityressourcen findest du unter{% ifversion fpt or ghec %} [Hinzufügen von Verhaltensregeln zu deinem Projekt](/communities/setting-up-your-project-for-healthy-contributions/adding-a-code-of-conduct-to-your-project) und{% endif %} [Festlegen von Richtlinien für Repositorymitwirkende](/communities/setting-up-your-project-for-healthy-contributions/setting-guidelines-for-repository-contributors).

Wenn im Rahmen einer Diskussion Ideen oder Fehler herausgearbeitet werden, an denen gearbeitet werden kann, kannst du aus der Diskussion heraus ein neues Issue erstellen. Weitere Informationen findest du unter [Erstellen eines Issues](/issues/tracking-your-work-with-issues/creating-an-issue#creating-an-issue-from-a-discussion).

Du kannst eine Diskussion an den Anfang der Diskussionsliste für das Repository oder die Organisation anheften. {% ifversion discussions-category-specific-pins %}Du kannst eine Diskussion auch an eine bestimmte Kategorie anheften.{% endif %} Weitere Informationen findest du unter [Anheften einer Diskussion](/discussions/managing-discussions-for-your-community/managing-discussions#pinning-a-discussion).

Weitere Informationen zum Fördern einer produktiven Diskussion findest du unter [Moderieren von Kommentaren und Konversationen](/communities/moderating-comments-and-conversations).

{% data reusables.discussions.you-can-label-discussions %}

## Voraussetzungen

Zum Verwalten von Diskussionen in einem Repository muss {% data variables.product.prodname_discussions %} für das Repository aktiviert sein. Weitere Informationen findest du unter [Aktivieren oder Deaktivieren von {% data variables.product.prodname_discussions %} für ein Repository](/github/administering-a-repository/enabling-or-disabling-github-discussions-for-a-repository).

{% data variables.product.prodname_discussions %} muss für die Organisation aktiviert sein, um Diskussionen in einer Organisation zu verwalten. Weitere Informationen findest du unter [Aktivieren oder Deaktivieren von {% data variables.product.prodname_discussions %} für eine Organisation](/organizations/managing-organization-settings/enabling-or-disabling-github-discussions-for-an-organization).

## Ändern der Kategorie für eine Diskussion

Du kannst Diskussionen kategorisieren, um Communitymitgliedern bei der Suche nach verwandten Diskussionen zu helfen. Weitere Informationen findest du unter [Verwalten von Kategorien für Diskussionen](/discussions/managing-discussions-for-your-community/managing-categories-for-discussions).

Du kannst auch eine Diskussion in eine andere Kategorie verschieben. Es ist nicht möglich, eine Diskussion in die Umfragekategorie zu verschieben oder aus dieser zu entfernen.

{% data reusables.repositories.navigate-to-repo %} {% data reusables.discussions.discussions-tab %} {% data reusables.discussions.click-discussion-in-list %}
1. Klicke in der rechten Randleiste rechts neben „Category“ (Kategorie) auf {% octicon "gear" aria-label="The gear icon" %}.

   ![Screenshot der Kategorie mit Zahnradsymbol](/assets/images/help/discussions/category-in-sidebar.png)

1. Klicke auf eine Kategorie.

   ![Screenshot des Dropdownmenüs „Kategorie ändern“](/assets/images/help/discussions/change-category-drop-down.png)

## Anheften einer Diskussion

{% ifversion discussions-category-specific-pins %} Du kannst eine Diskussion oberhalb der Diskussionsliste für das Repository oder die Organisation anheften. Du kannst eine Diskussion auch an eine bestimmte Kategorie anheften. Die global angehefteten Diskussionen werden zusätzlich zu den Diskussionen angezeigt, die an eine bestimmte Kategorie angeheftet wurden.

So sieht es aus, wenn du eine global angeheftete Diskussion und eine Diskussion an die Kategorie „Ideen“ anheftest.

![Screenshot einer global angehefteten Diskussion und einer an die Kategorie „Ideen“ angehefteten Diskussion](/assets/images/help/discussions/overview-pinned-discussions.png)

### Globales Anheften einer Diskussion
{% endif %}

Du kannst bis zu vier wichtige Diskussionen über der Liste der Diskussionen für das Repository oder die Organisation anheften. 


{% data reusables.discussions.navigate-to-repo-or-org %} {% data reusables.discussions.discussions-tab %} {% data reusables.discussions.click-discussion-in-list %}
1. Klicke in der rechten Randleiste auf {% octicon "pin" aria-label="The pin icon" %} **Pin discussion** (Diskussion anheften).
{% ifversion discussions-category-specific-pins %}

   ![Screenshot der Option „Diskussion anheften“ in der rechten Seitenleiste für die Diskussion](/assets/images/help/discussions/click-pin-discussion-with-category-pins.png){% else %}

   ![Screenshot der Option „Diskussion anheften“ in der rechten Seitenleiste für die Diskussion](/assets/images/help/discussions/click-pin-discussion.png){% endif %}

1. Passe optional das Aussehen der angehefteten Diskussion an.

   ![Screenshot der Anpassungsoptionen für eine angeheftete Diskussion](/assets/images/help/discussions/customize-pinned-discussion.png)

1. Klicke auf **Pin discussion** (Diskussion anheften).

   ![Screenshot der Schaltfläche „Diskussion anheften“ unter den Anpassungsoptionen für angeheftete Diskussionen](/assets/images/help/discussions/click-pin-discussion-button.png)

{% ifversion discussions-category-specific-pins %}
### Anheften einer Diskussion an eine Kategorie

Du kannst bis zu vier wichtige Diskussionen über der Diskussionsliste in einer bestimmten Kategorie anheften. 

{% data reusables.discussions.navigate-to-repo-or-org %} {% data reusables.discussions.discussions-tab %} {% data reusables.discussions.click-discussion-in-list %}
1. Klicke in der rechten Seitenleiste auf {% octicon "pin" aria-label="The pin icon" %} **Diskussion an KATEGORIE anheften**.
   
   ![Screenshot der Option „Diskussion an KATEGORIE anheften“ in der rechten Seitenleiste für Diskussionen](/assets/images/help/discussions/pin-discussion-to-category.png)

2. Klicke zur Bestätigung auf **An KATEGORIE anheften**.

   ![Screenshot des modalen Dialogfensters „Diskussion an KATEGORIE anheften“](/assets/images/help/discussions/pin-discussion-to-category-modal.png)

{% endif %}

## Bearbeiten einer angehefteten Diskussion

Durch das Bearbeiten einer angehefteten Diskussion wird die Kategorie der Diskussion nicht geändert. Weitere Informationen findest du unter [Verwalten von Kategorien für Diskussionen](/discussions/managing-discussions-for-your-community/managing-categories-for-discussions).

{% data reusables.discussions.navigate-to-repo-or-org %} {% data reusables.discussions.discussions-tab %} {% data reusables.discussions.click-discussion-in-list %}
1. Klicke in der rechten Randleiste auf {% octicon "pencil" aria-label="The pencil icon" %} **Edit pinned discussion** (Angeheftete Diskussion bearbeiten).
  {% ifversion discussions-category-specific-pins %}

   ![Screenshot der Option „Angeheftete Diskussion bearbeiten“ in der rechten Seitenleiste für die Diskussion](/assets/images/help/discussions/edit-pinned-discussion-with-category-pins.png) {% else %}


   ![Screenshot der Option „Angeheftete Diskussion bearbeiten“ in der rechten Seitenleiste für die Diskussion](/assets/images/help/discussions/click-edit-pinned-discussion.png){% endif %}

1. Passe das Aussehen der angehefteten Diskussion an.

  ![Screenshot der Anpassungsoptionen für eine angeheftete Diskussion](/assets/images/help/discussions/customize-pinned-discussion.png)

1. Klicke auf **Pin discussion** (Diskussion anheften).

  ![Screenshot der Schaltfläche „Diskussion anheften“ unter den Anpassungsoptionen für angeheftete Diskussionen](/assets/images/help/discussions/click-pin-discussion-button.png)

## Lösen einer Diskussion

{% ifversion discussions-category-specific-pins %}

Du kannst eine Diskussion von der Diskussionsliste für das Repository oder die Organisation oder von der Diskussionsliste einer bestimmten Kategorie lösen.

### Lösen einer global angehefteten Diskussion

Du kannst eine global angeheftete Diskussion wieder lösen. Dadurch wird die Diskussion nicht gelöscht, aber die Diskussion wird nicht mehr oberhalb der Diskussionsliste angezeigt.
{% endif %}

{% data reusables.discussions.navigate-to-repo-or-org %} {% data reusables.discussions.discussions-tab %} {% data reusables.discussions.click-discussion-in-list %}
1. Klicke in der rechten Randleiste auf {% octicon "pin" aria-label="The pin icon" %} **Unpin discussion** (Diskussion lösen).

  ![Screenshot der Option „Diskussion lösen“ in der rechten Seitenleiste für die Diskussion](/assets/images/help/discussions/click-unpin-discussion.png)

1. Lies die Warnung, und klicke dann auf **Unpin discussion** (Diskussion lösen).

  ![Screenshot der Schaltfläche „Diskussion lösen“ unterhalb der Warnung in einem modalen Dialogfenster](/assets/images/help/discussions/click-unpin-discussion-button.png)

{% ifversion discussions-category-specific-pins %}
### Lösen einer Diskussion von einer Kategorie

Du kannst eine Diskussion, die an eine bestimmte Kategorie angeheftet wurde, wieder lösen. Dadurch wird die Diskussion nicht gelöscht, aber sie wird nicht mehr oben in der Kategorie angezeigt.

{% data reusables.discussions.navigate-to-repo-or-org %} {% data reusables.discussions.discussions-tab %} {% data reusables.discussions.click-discussion-in-list %}
1. Klicke in der rechten Seitenleiste auf {% octicon "pin" aria-label="The pin icon" %} **Diskussion von dieser Kategorie lösen**.

   ![Screenshot der Option „Diskussion von dieser Kategorie lösen“ in der rechten Seitenleiste für Diskussionen](/assets/images/help/discussions/unpin-discussion-from-category.png)

1. Lies die Warnung, und klicke dann auf **Von dieser Kategorie lösen**.

   ![Screenshot der Schaltfläche „Von dieser Kategorie lösen“ im modalen Dialogfenster „Diskussion von dieser Kategorie lösen“.](/assets/images/help/discussions/unpin-discussion-from-category-modal.png)

{% endif %}

## Übertragen einer Diskussion

Zum Übertragen einer Diskussion musst du über Berechtigungen zum Erstellen von Diskussionen im Repository verfügen, in das du die Diskussion übertragen möchtest. Wenn du eine Diskussion in eine Organisation übertragen möchtest, musst du über die Berechtigungen zum Erstellen von Diskussionen im Quellrepository für die Diskussionen der Organisation verfügen. Du kannst Diskussionen nur zwischen Repositorys übertragen, die demselben Benutzer- oder Organisationskonto angehören. Du kannst eine Diskussion nicht von einem privaten{% ifversion ghec or ghes %} oder internen{% endif %} Repository in ein öffentliches Repository übertragen.

{% data reusables.discussions.navigate-to-repo-or-org %} {% data reusables.discussions.discussions-tab %} {% data reusables.discussions.click-discussion-in-list %}
1. Klicke in der rechten Seitenleiste auf {% octicon "arrow-right" aria-label="The right arrow icon" %} {% ifversion discussions-category-specific-pins %}**Diese Diskussion übertragen**{% else %}**Diskussion übertragen**{% endif %}.
{% ifversion discussions-category-specific-pins %}

   ![Screenshot der Option „Diskussion übertragen“ in der rechten Seitenleiste für die Diskussion](/assets/images/help/discussions/transfer-discussion-with-category-pin.png) {% else %}

  
   ![Screenshot der Option „Diskussion übertragen“ in der rechten Seitenleiste für die Diskussion](/assets/images/help/discussions/click-transfer-discussion.png){% endif %}

1. Wähle im Dropdownmenü **Choose a Repository** (Repository auswählen) das Repository aus, in das du die Diskussion übertragen möchtest. Wenn du eine Diskussion in eine Organisation übertragen möchtest, wähle das Quellrepository für die Diskussionen der Organisation aus.

   ![Screenshot des Dropdownmenüs „Repository auswählen“, des Suchfelds „Repository suchen“ und des Repositorys in der Liste](/assets/images/help/discussions/use-choose-a-repository-drop-down.png)

1. Klicke auf **Transfer discussion** (Diskussion übertragen).

   ![Screenshot der Schaltfläche „Diskussion übertragen“](/assets/images/help/discussions/click-transfer-discussion-button.png)

## Löschen einer Diskussion

{% data reusables.discussions.navigate-to-repo-or-org %} {% data reusables.discussions.discussions-tab %} {% data reusables.discussions.click-discussion-in-list %}
1. Klicke in der rechten Randleiste auf {% octicon "trash" aria-label="The trash arrow icon" %} **Delete discussion** (Diskussion löschen).
{% ifversion discussions-category-specific-pins %}

   ![Screenshot der Option „Diskussion löschen“ in der rechten Seitenleiste für die Diskussion](/assets/images/help/discussions/delete-discussion-with-category-pins.png){% else %}


   ![Screenshot der Option „Diskussion löschen“ in der rechten Seitenleiste für die Diskussion](/assets/images/help/discussions/click-delete-discussion.png){% endif %}

1. Lies die Warnung, und klicke dann auf **Delete this discussion** (Diese Diskussion löschen).

   ![Screenshot der Schaltfläche „Diese Diskussion löschen“ unterhalb der Warnung in einem modalen Dialogfenster](/assets/images/help/discussions/click-delete-this-discussion-button.png)

## Konvertieren von Issues basierend auf Bezeichnungen

Du kannst alle Issues mit derselben Bezeichnung in Diskussionen massenkonvertieren. Zukünftige Issues mit dieser Bezeichnung werden auch automatisch in die von Ihnen konfigurierte Diskussion und Kategorie konvertiert.

1. Navigiere auf {% data variables.location.product_location %} zur Hauptseite des Repositorys oder (für Organisationsdiskussionen) zum Quellrepository.
{% data reusables.repositories.sidebar-issues %} {% data reusables.project-management.labels %}
1. Klicke neben der Bezeichnung der Issues, die du in Diskussionen konvertieren möchtest, auf **Convert issues** (Issues konvertieren).
1. Wähle das Dropdownmenü **Choose a category** (Kategorie auswählen) aus, und klicke auf eine Kategorie für deine Diskussion.
1. Klicke auf **Verstanden, dieses Issue in eine Diskussion konvertieren**.
