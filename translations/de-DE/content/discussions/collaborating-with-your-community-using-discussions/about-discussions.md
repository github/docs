---
title: Informationen zu Diskussionen
intro: 'Du kannst in Diskussionen Fragen stellen und beantworten, Informationen freigeben, Ankündigungen tätigen und an Unterhaltungen über ein Projekt auf {% data variables.product.product_name %} teilnehmen.'
versions:
  feature: discussions
ms.openlocfilehash: 4ac74c35b34310b62595bd5ac9a5588a7ef3476a
ms.sourcegitcommit: 5f9527483381cfb1e41f2322f67c80554750a47d
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/12/2022
ms.locfileid: '147886950'
---
## Informationen zu {% data variables.product.prodname_discussions %}

Mit {% data variables.product.prodname_discussions %} kann die Community für dein Projekt Unterhaltungen im Repository oder in der Organisation des Projekts erstellen und daran teilnehmen. Diskussionen ermöglichen es den Maintainern, Mitwirkenden und Besuchern eines Projekts, die folgenden Ziele ohne Tools von Drittanbietern an einem zentralen Ort zu erfassen und zu erreichen.

- Freigeben von Ankündigungen und Informationen, Erfassen von Feedback, Planen und Treffen von Entscheidungen
- Stellen von Fragen, Erörtern und Beantworten der Fragen und Kennzeichnen von Diskussionen als „Beantwortet“
- Erstellen von Umfragen zum Sondieren der Community-Meinung
- Fördern einer einladenden Atmosphäre für Besucher und Mitwirkende zur Erörterung von Zielen, Entwicklung, Verwaltung und Workflows

![Registerkarte „Diskussionen“ für ein Repository](/assets/images/help/discussions/hero.png)

Mittels Repositorydiskussionen kannst du Themen erörtern, die für das Repository spezifisch sind. Wenn dein Projekt mehrere Repositorys umfasst, kannst du mittels Organisationsdiskussionen Themen erörtern, die nicht für einzelne Repositorys in deiner Organisation spezifisch sind.

Du musst eine Diskussion nicht schließen wie einen Issue oder Pull Request.

Wenn ein Repositoryadministrator oder Projektmaintainer {% data variables.product.prodname_discussions %} für ein Repository aktiviert, können alle Personen mit Zugriff auf das Repository Diskussionen für das Repository erstellen und daran teilnehmen. Wenn ein Organisationsbesitzer {% data variables.product.prodname_discussions %} für eine Organisation aktiviert, kann jeder, der das Quellrepository anzeigen kann, eine Organisationsdiskussion erstellen.

Repositoryadministratoren und Projektmaintainer können Diskussionen und Diskussionskategorien in einem Repository verwalten und Diskussionen anheften, um die Sichtbarkeit der Diskussion zu erhöhen. Moderatoren und Projektmitarbeiter können Kommentare als Antworten kennzeichnen, Diskussionen sperren und Issues in Diskussionen konvertieren. Genauso bestimmt die Rolle eines Benutzers im Quellrepository, wie er mit Organisationsdiskussionen interagieren kann. Weitere Informationen findest du unter [Repositoryrollen für eine Organisation](/organizations/managing-access-to-your-organizations-repositories/repository-roles-for-an-organization).

Weitere Informationen zur Verwaltung von Diskussionen findest du unter „[Verwalten von Diskussionen](/discussions/managing-discussions-for-your-community/managing-discussions)“.

## Informationen zu Umfragen

Du kannst Umfragen in der Kategorie „Umfragen“ erstellen, um das Interesse an neuen Ideen und der Projektrichtung zu sondieren. Alle Personen mit Lesezugriff auf dein Repository können Umfragen erstellen, an Umfragen teilnehmen und deren Ergebnisse einsehen.{% ifversion fpt or ghec %} Abgemeldete Benutzer können die Ergebnisse von Umfragen in öffentlichen Repositorys einsehen.{% endif %}

Umfragen erfordern eine Frage und mindestens zwei Optionen. Du kannst maximal acht Optionen hinzufügen, und die Optionen können maximal 128 Zeichen enthalten. 

Wähler können die von ihnen abgegebene Stimme nicht ändern. Durch das Bearbeiten einer Umfrage werden alle bereits abgegebenen Stimmen zurückgesetzt.

Weitere Informationen zum Erstellen eines Auftrags findest du unter „[Erstellen einer Umfrage](/discussions/collaborating-with-your-community-using-discussions/participating-in-a-discussion#creating-a-poll)“.

## Informationen zur Organisation von Diskussionen

Du kannst Diskussionen anhand von Kategorien und Bezeichnungen organisieren.

{% data reusables.discussions.you-can-categorize-discussions %} {% data reusables.discussions.about-categories-and-formats %} {% data reusables.discussions.repository-category-limit %}

Für Diskussionen mit einem Frage/Antwort-Format kann ein einzelner Kommentar innerhalb der Diskussion als Antwort gekennzeichnet werden. {% data reusables.discussions.github-recognizes-members %}

{% data reusables.discussions.about-announcement-format %}

Weitere Informationen findest du unter „[Verwalten von Kategorien für Diskussionen](/discussions/managing-discussions-for-your-community/managing-categories-for-discussions)“.

{% data reusables.discussions.you-can-label-discussions %}

## Bewährte Methoden für {% data variables.product.prodname_discussions %}

Als Communitymitglied oder -maintainer startest du eine Diskussion, um eine Frage zu stellen oder Informationen zu erörtern, die sich auf die Community auswirken. Weitere Informationen findest du unter „[Zusammenarbeiten mit Maintainern mithilfe von Diskussionen](/discussions/collaborating-with-your-community-using-discussions/collaborating-with-maintainers-using-discussions)“.

Nimm an einer Diskussion teil, um Fragen zu stellen und zu beantworten, Feedback zu geben und mit der Community des Projekts ins Gespräch zu kommen. Weitere Informationen findest du unter „[Teilnehmen an einer Diskussion](/discussions/collaborating-with-your-community-using-discussions/participating-in-a-discussion)“.

Du kannst Diskussionen hervorheben, die wichtige, nützliche oder beispielhafte Unterhaltungen zwischen Mitgliedern in der Community enthalten. Weitere Informationen findest du unter „[Verwalten von Diskussionen](/discussions/managing-discussions-for-your-community/managing-discussions#pinning-a-discussion)“.

{% data reusables.discussions.you-can-convert-an-issue %} Weitere Informationen findest du unter „[Moderieren von Diskussionen](/discussions/managing-discussions-for-your-community/moderating-discussions#converting-an-issue-to-a-discussion)“.

## Feedback teilen

Du kannst dein Feedback zu {% data variables.product.prodname_discussions %} mit {% data variables.product.company_short %} teilen. Zur Teilnahme an der Unterhaltung siehe [{% data variables.product.prodname_github_community %}](https://github.com/orgs/community/discussions/categories/discussions).

## Weiterführende Themen

- „[Informationen zum Schreiben und Formatieren auf {% data variables.product.prodname_dotcom %}](/github/writing-on-github/about-writing-and-formatting-on-github)“
- „[Durchsuchen von Diskussionen](/search-github/searching-on-github/searching-discussions)“
- „[Informationen zu Benachrichtigungen](/github/managing-subscriptions-and-notifications-on-github/about-notifications)“
- [Moderieren von Kommentaren und Unterhaltungen](/communities/moderating-comments-and-conversations){% ifversion fpt or ghec %}
- [Aufrechterhalten der Sicherheit auf {% data variables.product.prodname_dotcom %}](/communities/maintaining-your-safety-on-github) {% endif %}
