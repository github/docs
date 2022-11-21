---
title: Repositorys mit Sternen speichern
intro: 'Du kannst Repositorys und Themen verwenden, um Projekte nachzuverfolgen, die du interessant findest{% ifversion fpt or ghec %} und verwandte Inhalte in deinem Newsfeed erkunden{% endif %}.'
redirect_from:
  - /articles/stars
  - /articles/about-stars
  - /articles/browsing-friends-stars
  - /articles/managing-your-stars
  - /articles/saving-repositories-with-stars
  - /github/getting-started-with-github/saving-repositories-with-stars
  - /github/getting-started-with-github/exploring-projects-on-github/saving-repositories-with-stars
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Repositories
shortTitle: Save repos with stars
ms.openlocfilehash: 2a5a167884e10f40d5501b3e84ebc158fe2487b3
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/05/2022
ms.locfileid: '146374179'
---
Du kannst mit Stern versehene Repositorys und Themen auf der Seite {% data variables.explore.your_stars_page %} durchsuchen, sortieren und filtern.

## Informationen zu Sternen

Mit Stern zu versehen macht es einfacher, Repositorys oder Themen später wieder zu finden. Du kannst alle Repositorys und Themen, die du mit Stern versehen hast, auf deiner {% data variables.explore.your_stars_page %} sehen.

{% ifversion fpt or ghec %} Du kannst Repositorys und Themen mit einem Stern markieren, um ähnliche Projekte auf {% data variables.product.product_name %} zu finden. Wenn du Repositorys oder Themen mit Stern versiehst, empfiehlt {% data variables.product.product_name %} möglicherweise ähnliche Inhalte auf deinem persönlichen Dashboard. Weitere Informationen findest du unter [Beitragen zu Open-Source-Projekten auf {% data variables.product.prodname_dotcom %}](/github/getting-started-with-github/finding-ways-to-contribute-to-open-source-on-github) und [Informationen zum persönlichen Dashboard](/account-and-profile/setting-up-and-managing-your-personal-account-on-github/managing-personal-account-settings/about-your-personal-dashboard#staying-updated-with-activity-from-the-community).
{% endif %}

Mit der Auszeichnung durch einen Stern zeigst du dem Repository-Betreuer auch deine Wertschätzung für seine Arbeit. Verschiedene Repository-Rankings von {% data variables.product.prodname_dotcom %} basieren auf der Anzahl der Sterne, die für ein Repository vergeben wurden. Darüber hinaus werden unter [Entdecken](https://github.com/explore) beliebte Repositorys basierend auf der Anzahl der Sterne aufgeführt.

## Versehen eines Repositorys mit einem Stern

Das Versehen eines Repositorys mit einem ist ein einfacher Vorgang, der aus zwei Schritten besteht.

{% data reusables.repositories.navigate-to-repo %}
1. Klicke in der oberen rechte Ecke der Seite auf **Stern vergeben**.
![Versehen eines Repositorys mit einem Stern](/assets/images/help/stars/starring-a-repository.png)
1. Du kannst einen Stern auch wieder entfernen, indem du im Repository auf **Stern entfernen** klickst.
![Entfernen eines Sterns für ein Repository](/assets/images/help/stars/unstarring-a-repository.png)

{% ifversion fpt or ghec %}

## Anzeigen, wer ein Repository mit einem Stern markiert hat


Du kannst alle Benutzer*innen anzeigen, die ein öffentliches oder privates Repository, auf das du Zugriff hast, mit einem Stern markiert haben. 


Um alle anzuzeigen, die ein Repository mit einem Stern markiert haben, füge dem Ende der URL eines Repositorys `/stargazers` hinzu. Um z. B. Stargazers für das Github/Docs-Repository anzuzeigen, rufe https://github.com/github/docs/stargazers auf.


## Organisieren von Repositorys mit Sternen anhand von Listen

{% note %}

**Hinweis:** Listen befinden sich derzeit in der öffentlichen Betaversion. Änderungen sind vorbehalten.

{% endnote %}

Mit öffentlichen Listen kannst du Repositorys mit Stern zusammenstellen. Du kannst öffentliche Listen erstellen, die unter `https://github.com/USERNAME?tab=stars` auf deiner Sterneseite angezeigt werden.

Wenn du ein privates Repository zu einer Liste hinzufügst, wird dieses nur Benutzer*innen mit `read`-Zugriff auf das Repository angezeigt.

![Screenshot der Listen auf der Sterneseite](/assets/images/help/stars/lists-overview-on-stars-page.png)

Du kannst ein Repository über das Dropdownmenü **Stern vergeben** oder **Mit Stern** auf der Repositoryseite oder der Liste der Repositorys mit Stern zu einer vorhandenen oder neuen Liste hinzufügen. 

![Screenshot: Dropdownmenü „Stern vergeben“ mit Listenoptionen über die Repositoryseite](/assets/images/help/stars/stars-dropdown-on-repo.png)

![Screenshot: Dropdownmenü „Mit Stern“ mit Listenoptionen über eine Liste mit Repositorys mit Stern](/assets/images/help/stars/add-repo-to-list.png)

### Erstellen einer Liste

{% data reusables.stars.stars-page-navigation %}
2. Klicke neben „Listen“ auf **Liste erstellen**.
  ![Screenshot der Schaltfläche „Liste erstellen“](/assets/images/help/stars/create-list.png)
3. Gib einen Namen und eine Beschreibung für deine Liste ein, und klicke auf **Erstellen**.
  ![Screenshot: Modales Fenster mit Eingabefeld für Name und Beschreibung und der Schaltfläche „Erstellen“](/assets/images/help/stars/create-list-with-description.png)

### Hinzufügen eines Repositorys zu einer Liste

{% data reusables.stars.stars-page-navigation %}
2. Suche das Repository, das du deiner Liste hinzufügen möchtest.
  ![Screenshot: Suchleiste für Repositorys mit Stern](/assets/images/help/stars/search-bar-for-starred-repos.png)
3. Wähle über das Dropdownmenü **Mit Stern** neben dem hinzuzufügenden Repository deine Liste aus.
  ![Screenshot: Dropdownmenü mit Kontrollkästchen für Listen](/assets/images/help/stars/add-repo-to-list.png)

### Entfernen eines Repositorys aus deiner Liste

{% data reusables.stars.stars-page-navigation %}
2. Wähle deine Liste aus.
3. Wähle über das Dropdownmenü **Mit Stern** neben dem entfernenden Repository deine Liste ab.
  ![Screenshot: Dropdownmenü mit Kontrollkästchen für Listen](/assets/images/help/stars/add-repo-to-list.png)

### Bearbeiten des Namens oder der Beschreibung einer Liste

{% data reusables.stars.stars-page-navigation %}
1. Wähle die Liste aus, die du bearbeiten möchtest.
2. Klicke auf **Liste bearbeiten**.
3. Aktualisiere den Namen oder die Beschreibung, und klicke auf **Liste speichern**.
  ![Screenshot: Modales Fenster mit Schaltfläche „Liste speichern“](/assets/images/help/stars/edit-list-options.png) 

### Löschen einer Liste

{% data reusables.stars.stars-page-navigation %}
2. Wähle die Liste aus, die du löschen möchtest.
3. Klicke auf **Liste löschen**.
  ![Screenshot: Modales Fenster mit Schaltfläche „Liste löschen“](/assets/images/help/stars/edit-list-options.png)
4. Klicke auf **Löschen**, um den Vorgang zu bestätigen.

{% endif %}

## Durchsuchen von Repositorys und Themen mit Stern

Du kannst die Suchleiste auf deiner {% data variables.explore.your_stars_page %} verwenden, um Repositorys und Themen mit Stern schnell zu finden. 

1. Wechsle zu deiner {% data variables.explore.your_stars_page %}.
1. Verwende die Suchleiste, um Repositorys oder Themen mit Stern anhand des Namens zu finden.
![Durchsuchen von Sternen](/assets/images/help/stars/stars_search_bar.png)

Die Suchleiste sucht nur nach dem Namen eines Repositorys oder Themas, und nicht mit anderen Suchkriterien (wie der Größe des Repository oder wenn es zuletzt aktualisiert wurde).

## Sortieren und Filtern von Sternen auf deiner Sterneseite

Du kannst die Sortierung oder Filterung verwenden, um die Darstellung von Repositorys und Themen mit Stern auf der Sterneseite anzupassen.

1. Wechsle zu deiner {% data variables.explore.your_stars_page %}.
1. Um die Sterne zu sortieren, wähle das Dropdownmenü **Sortieren** und dann **Neueste Sterne**, **Zuletzt aktiv** oder **Meiste Sterne** aus.
![Sortieren von Sternen](/assets/images/help/stars/stars_sort_menu.png)
1. Um deine Liste der Sterne nach Sprache zu filtern, klicke unter **Nach Sprache filtern** auf die gewünschte Sprache.
![Filtern von Sternen nach Sprache](/assets/images/help/stars/stars_filter_language.png)
1. Um deine Liste der Sterne nach Repository oder Thema zu filtern, klicke auf die gewünschte Option.
![Filtern von Sternen nach Thema](/assets/images/help/stars/stars_filter_topic.png)

## Weiterführende Themen

- [Klassifizieren deines Repositorys mit Themen](/articles/classifying-your-repository-with-topics)
