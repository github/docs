---
title: Zusammenführen eines Pull Requests mit einer Mergewarteschlange
intro: 'Wenn die Branchschutzeinstellung für den Branch eine Mergewarteschlange vorschreibt, kannst du deine Pull Requests zu einer Mergewarteschlange hinzufügen. {% data variables.product.product_name %} mergt dann die Pull Requests für dich, sobald alle erforderlichen Überprüfungen bestanden wurden.'
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Pull requests
shortTitle: Merge PR with merge queue
redirect_from:
  - /pull-requests/collaborating-with-pull-requests/incorporating-changes-from-a-pull-request/adding-a-pull-request-to-the-merge-queue
  - /github/collaborating-with-pull-requests/incorporating-changes-from-a-pull-request/adding-a-pull-request-to-the-merge-queue
ms.openlocfilehash: ce2bc87b82e3590c2a7f55f528fc9f71dc0ceb0d
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/05/2022
ms.locfileid: '147614271'
---
{% data reusables.pull_requests.merge-queue-beta %}

## Informationen zu Mergewarteschlangen

{% data reusables.pull_requests.merge-queue-overview %} {% data reusables.pull_requests.merge-queue-references %}

## Hinzufügen eines Pull Requests zu einer Mergewarteschlange

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-pr %}

1. Klicke in der Liste „Pull Requests“ auf den Pull Request, den du einer Mergewarteschlange hinzufügen möchtest.

1. Klicke auf **Zusammenführen, wenn bereit**, um den Pull Request der Mergewarteschlange hinzuzufügen. Als Administrator hast du alternativ folgende Möglichkeit:
   -  Du kannst den Pull Request direkt mergen, indem du das Kontrollkästchen **Zusammenführen, ohne auf die Erfüllung der Anforderungen zu warten ({% ifversion bypass-branch-protections %}Umgehen des Branchschutzes{% else %}nur für Administratoren{% endif %})** aktivierst (sofern dies laut Branchschutzeinstellungen zulässig ist) und dem Standardflow folgst.
   ![Optionen für Mergewarteschlange](/assets/images/help/pull_requests/merge-queue-options.png)

  {% tip %}

  **Tipp:** Du kannst auf **Mergen, wenn bereit** klicken, wenn du bereit bist, deine vorgeschlagenen Änderungen zu mergen. {% data variables.product.product_name %} fügt den Pull Request automatisch der Mergewarteschlange hinzu, sobald die erforderlichen Bedingungen für Genehmigungs- und Statusüberprüfung erfüllt sind.

  {% endtip %}

1. Klicke auf **„Zusammenführen, wenn bereit“ bestätigen**, um zu bestätigen, dass du den Pull Request der Mergewarteschlange hinzufügen möchtest.

## Entfernen eines Pull Requests aus einer Mergewarteschlange

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-pr %}

1. Klicke in der Liste „Pull Requests“ auf den Pull Request, den du aus einer Mergewarteschlange entfernen möchtest.

1. Klicke auf **Aus Warteschlange entfernen**, um den Pull Request aus der Warteschlange zu entfernen.
  ![Entfernen eines Pull Requests aus einer Warteschlange](/assets/images/help/pull_requests/remove-from-queue-button.png)

Alternativ kannst du zur Seite der Mergewarteschlange für den Basis-Branch navigieren, neben dem Pull Request, den du entfernen möchtest, auf **...** klicken und anschließend **Aus Warteschlange entfernen** auswählen. Wie du zur Seite der Mergewarteschlange für den Basis-Branch gelangst, erfährst du im nächsten Abschnitt.

## Anzeigen von Mergewarteschlangen

Die Mergewarteschlange für einen Basis-Branch kann in {% data variables.product.product_name %} an verschiedenen Orten angezeigt werden:

- Auf der Seite **Branches** für das Repository. Diese Route empfiehlt sich, wenn du nicht über einen Pull Request in einer Warteschlange verfügst oder keine Informationen zu einem Pull Request hast, der sich bereits in einer Warteschlange befindet, und ermitteln möchtest, was die Warteschlange enthält. Weitere Informationen findest du unter [Anzeigen von Branches in deinem Repository](/repositories/configuring-branches-and-merges-in-your-repository/managing-branches-in-your-repository/viewing-branches-in-your-repository).

  ![Anzeigen der Mergewarteschlange auf der Seite „Branches“](/assets/images/help/pull_requests/merge-queue-branches-page.png)

- Klicke auf der Seite **Pull Requests** deines Repositorys neben einem beliebigen Pull Request in der Mergewarteschlange auf {% octicon "clock" aria-label="The clock symbol" %}.

  ![Anzeigen der Mergewarteschlange auf der Seite „Pull Requests“](/assets/images/help/pull_requests/clock-icon-in-pull-request-list.png)

- Scrolle auf der Seite „Pull Requests“ in der Zeitskala ganz nach unten, und klicke auf den Link **Mergewarteschlange**, wenn die Mergewarteschlange zum Zusammenführen benötigt wird.

  ![Link „Mergewarteschlange“ für Pull Request](/assets/images/help/pull_requests/merge-queue-link.png)

- Die Mergewarteschlangenansicht zeigt die Pull Requests, die sich derzeit in der Warteschlange befinden. Deine Pull Requests sind dabei gut sichtbar markiert.

  ![Mergewarteschlangenansicht](/assets/images/help/pull_requests/merge-queue-view.png)

## Behandeln von Pull Requests, die aus der Mergewarteschlange entfernt wurden

{% data reusables.pull_requests.merge-queue-reject %}
