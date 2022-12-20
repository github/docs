---
title: Teilnehmen an einer Diskussion
intro: 'Du kannst dich mit der Community und den Maintainern in einem Forum innerhalb des Repositorys für ein Projekt auf {% data variables.product.product_name %} unterhalten.'
permissions: 'People with read access to a repository can participate in discussions and polls in the repository. People with read access to the source repository for organization discussions can participate in discussions and polls in that organization. {% data reusables.enterprise-accounts.emu-permission-interact %}'
versions:
  feature: discussions
shortTitle: Participate in discussion
ms.openlocfilehash: 07db8d3583c218e592ca1b68171292e52fcfc12f
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/05/2022
ms.locfileid: '147410235'
---
## Informationen zur Teilnahme an einer Diskussion

{% data reusables.discussions.about-discussions %} Weitere Informationen findest du unter [Informationen zu Diskussionen](/discussions/collaborating-with-your-community-using-discussions/about-discussions).

Zusätzlich zum Starten oder Anzeigen von Diskussionen und Umfragen kannst du den ursprünglichen Kommentar des Autors der Diskussion mit einem Kommentar beantworten. Du kannst auch einen Kommentarthread erstellen, indem du auf einen einzelnen Kommentar antwortest, den ein anderes Communitymitglied in die Diskussion eingefügt hat, und du kannst mit Emojis auf Kommentare reagieren.

{% ifversion fpt or ghec %}Du kannst Benutzer blockieren und ungeeignete Inhalte melden, um dir eine sichere und angenehme Umgebung in {% data variables.product.product_name %} zu schaffen. Weitere Informationen findest du unter [Gewährleisten deiner Sicherheit auf {% data variables.product.prodname_dotcom %}](/communities/maintaining-your-safety-on-github).{% endif %}

## Voraussetzungen

{% data variables.product.prodname_discussions %} müssen für das Repository oder die Organisation aktiviert sein, damit du an einer Diskussion in dem Repository oder der Organisation teilnehmen kannst. Weitere Informationen findest du unter [Aktivieren oder Deaktivieren von {% data variables.product.prodname_discussions %} für ein Repository](/github/administering-a-repository/enabling-or-disabling-github-discussions-for-a-repository) und [Aktivieren oder Deaktivieren von GitHub Discussions für eine Organisation](/organizations/managing-organization-settings/enabling-or-disabling-github-discussions-for-an-organization).

## Erstellen einer Diskussion

{% data reusables.discussions.starting-a-discussion %}

## Erstellen einer Umfrage

{% data reusables.discussions.starting-a-poll %}

## Markieren eines Kommentars als Antwort

Diskussionsersteller und Benutzer mit der Rolle „Selektierung“ oder höher für ein Repository können einen Kommentar als Antwort auf eine Diskussion im Repository markieren.
Ebenso können Diskussionsersteller und Benutzer mit der Rolle „Selektierung“ oder höher für das Quellrepository für Organisationsdiskussionen einen Kommentar als Antwort auf eine Diskussion in der Organisation markieren.

{% data reusables.discussions.marking-a-comment-as-an-answer %}
