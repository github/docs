---
title: Pull-Request-Review anfordern
intro: 'Nachdem du einen Pull Request erstellt hast, kannst du eine bestimmte Person bitten, die von dir vorgeschlagenen Änderungen zu prüfen. Als Organisationsmitglied kannst du den Review auch von einem bestimmten Team anfordern.'
product: '{% data reusables.gated-features.multiple-pr-reviewers %}'
redirect_from:
  - /github/collaborating-with-issues-and-pull-requests/proposing-changes-to-your-work-with-pull-requests/requesting-a-pull-request-review
  - /articles/requesting-a-pull-request-review
  - /github/collaborating-with-issues-and-pull-requests/requesting-a-pull-request-review
  - /github/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/requesting-a-pull-request-review
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Pull requests
shortTitle: Request a PR review
ms.openlocfilehash: b7b797d7e9ad2fdf9c1df29e7e5aad66f942b538
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/05/2022
ms.locfileid: '145133902'
---
Repositorys gehören zu einem persönlichen Konto (einem einzelnen Besitzer) oder einem Organisationskonto (einem freigegebenen Konto mit zahlreichen Mitarbeitern oder Betreuern). Weitere Informationen findest du unter [Typen von {% data variables.product.prodname_dotcom %}-Konten](/get-started/learning-about-github/types-of-github-accounts). Besitzer und Mitarbeiter eines Repositorys, das einem persönlichen Konto gehört, können Pull Request-Reviews zuweisen. Organisationsmitglieder mit Selektierungsberechtigungen können auch einen Reviewer für einen Pull Request zuweisen. 

Zum Zuweisen eines Reviewers zu einem Pull Request benötigst du Schreibzugriff auf das Repository. Weitere Informationen zum Repositoryzugriff findest du unter [Repositoryrollen für eine Organisation](/organizations/managing-access-to-your-organizations-repositories/repository-roles-for-an-organization). Wenn du über Schreibzugriff verfügst, kannst du jeden, der Lesezugriff auf das Repository hat, als Reviewer zuweisen.

Organisationsmitglieder können jeder Person oder jedem Team mit Lesezugriff auf ein Repository einen Pull Request-Review zuweisen. Der angeforderte Reviewer respektive das angeforderte Team erhält eine Benachrichtigung, dass Du einen Pull-Request-Review von ihm angefordert hast. Wenn du von einem Team einen Review anforderst und die Code Review-Zuweisung aktiviert ist, werden spezifische Mitglieder angefordert, und das Team wird als Reviewer entfernt. Weitere Informationen findest du unter [Verwalten von Code-Review-Einstellungen für dein Team](/organizations/organizing-members-into-teams/managing-code-review-settings-for-your-team).

{% note %}

**Hinweis**: Ersteller eines Pull Requests können nur dann einen Review anfordern, wenn sie Repositorybesitzer oder Mitarbeiter mit Schreibzugriff auf das Repository sind.

{% endnote %}

Du kannst den Review entweder von einer vorgeschlagenen oder von einer bestimmten Person anfordern. Vorgeschlagene Reviewer basieren auf [Git-Blame-Daten](/articles/tracking-changes-in-a-file/). Wenn Du einen Review anforderst, können trotzdem auch andere Personen mit Lesezugriff Deinen Pull Request prüfen. Sobald jemand Deinen Pull-Request überprüft hat und Du die notwendigen Änderungen vorgenommen hast, kannst du einen erneuten Review vom gleichen Prüfer anfordern. Wenn der angeforderte Reviewer keinen Review sendet und der Pull Request die [Mergeanforderungen](/articles/defining-the-mergeability-of-pull-requests) des Repositorys erfüllt, kann der Pull Request dennoch gemergt werden.

{% data reusables.repositories.sidebar-pr %}
1. Klicke in der Liste der Pull Requests auf den Pull Request, den eine bestimmte Person oder ein Team prüfen soll.
2. Navigiere auf der rechten Randleiste zu **Reviewer**.  
3. Wenn du einen Review von einer vorgeschlagenen Person unter **Reviewer** anfordern möchtest, klicke neben dem betreffenden Benutzernamen auf **Anfordern**.
 ![Symbol für Revieweranforderung auf der rechten Randleiste](/assets/images/help/pull_requests/request-suggested-review.png)
5. Optional kannst du den Review auch von einer anderen als der vorgeschlagenen Person anfordern. Klicke hierzu auf **Reviewer** und dann im Dropdownmenü auf den Namen der gewünschten Person.
  ![Symbol für Reviewereinstellung auf der rechten Randleiste](/assets/images/help/pull_requests/request-a-review-not-suggested.png)
6. Sofern du den Namen der Person oder des Teams kennst, die bzw. das als Reviewer eingesetzt werden soll, kannst du optional auch sofort auf **Reviewer** klicken und den Benutzernamen der Person oder des Teams eingeben. Klicke dann auf den Team- oder Benutzernamen, um den Review anzufordern.
  ![Feld zum Eingeben des Benutzernamens eines Reviewers und Dropdownmenü mit Namen des Reviewers](/assets/images/help/pull_requests/choose-pull-request-reviewer.png)
7. Nachdem Dein Pull Request geprüft wurde und Du die erforderlichen Änderungen vorgenommen hast, kannst Du einen Prüfer um einen erneuten Review Deines Pull Request bitten. Navigiere auf der linken Randleiste zu **Reviewer**, und klicke neben dem Namen des Reviewers, der den Review durchführen soll, auf {% octicon "sync" aria-label="The sync icon" %}.
  ![Schaltfläche zum Synchronisieren eines erneuten Reviews auf der rechten Randleiste](/assets/images/help/pull_requests/request-re-review.png)

## Weiterführende Themen

- [Informationen zu Pull Request-Reviews](/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/about-pull-request-reviews)
