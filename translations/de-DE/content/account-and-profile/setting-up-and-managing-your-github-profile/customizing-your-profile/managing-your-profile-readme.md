---
title: Verwalten der Profil-README
intro: 'Du kannst deinem {% data variables.product.prodname_dotcom %}-Profil eine README-Datei mit Informationen zu deiner Person hinzufügen.'
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
topics:
  - Profiles
redirect_from:
  - /github/setting-up-and-managing-your-github-profile/managing-your-profile-readme
  - /github/setting-up-and-managing-your-github-profile/customizing-your-profile/managing-your-profile-readme
shortTitle: Your profile README
ms.openlocfilehash: 587bcea1e1a0f96aad8882b41196afcc6e433363
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/05/2022
ms.locfileid: '147578900'
---
## Informationen zur Profil-README

Du kannst Informationen über Dich selbst mit der Community über {% data variables.product.product_location %} teilen, indem du eine Profil-README erstellst. {% data variables.product.prodname_dotcom %} zeigt deine Profil-README oben auf der Profilseite an.

Du entscheidest, welche Informationen in deine Profil-README aufgenommen werden sollen, sodass du die vollständige Kontrolle darüber hast, wie du Dich selbst auf {% data variables.product.prodname_dotcom %} präsentierst. Hier einige Beispiele für Informationen, die Besucher in deiner Profil-README interessant, unterhaltsam oder nützlich finden können.

- Ein Abschnitt "Über mich", in dem deine Arbeit und deine Interessen beschrieben werden
- Beiträge, auf die du stolz bist, sowie der Kontext zu diesen Beiträgen
- Anleitungen zum Abrufen von Hilfe in Communitys, deren Mitglied du bist

![In dem Profil angezeigte Profil-README-Datei](/assets/images/help/repository/profile-with-readme.png)

Du kannst mithilfe von {% data variables.product.company_short %} Flavored Markdown Text formatieren und Emojis, Bilder und GIFs in deine Profil-README einfügen. Weitere Informationen findest du unter [Erste Schritte beim Schreiben und Formatieren auf {% data variables.product.prodname_dotcom %}](/github/writing-on-github/getting-started-with-writing-and-formatting-on-github).

## Voraussetzungen

GitHub zeigt deine Profil-README auf deiner Profilseite an, wenn Folgendes zutrifft.

- Du hast ein Repository mit einem Namen erstellt, der deinem {% data variables.product.prodname_dotcom %}-Benutzernamen entspricht.
- Das Repository ist öffentlich.
- Das Repository enthält eine Datei namens README.md im Stammverzeichnis.
- Die README.md-Datei enthält beliebige Inhalte.

{% note %}

**Hinweis**: Wenn du ein öffentliches Repository erstellt hast, dessen Name deinem Benutzernamen vor Juli 2020 entspricht, zeigt {% data variables.product.prodname_dotcom %} nicht automatisch die README des Repositorys in deinem Profil an. Du kannst die README des Repositorys manuell für dein Profil freigeben, indem du zum Repository auf {% data variables.product.prodname_dotcom_the_website %} wechselst und auf **Share to profile** (Für Profil freigeben) klickst.

![Schaltfläche zum Freigeben der README für das Profil](/assets/images/help/repository/share-to-profile.png)

{% endnote %}

## Hinzufügen einer Profil-README

{% data reusables.repositories.create_new %}
2. Gibt unter "Repository name" (Repositoryname) einen Repositorynamen ein, der deinem {% data variables.product.prodname_dotcom %}-Benutzernamen entspricht. Wenn dein Benutzername beispielsweise "octocat" lautet, muss der Repositoryname "octocat" sein.
  ![Repositorynamensfeld, das dem Benutzernamen entspricht](/assets/images/help/repository/repo-username-match.png)
3. Füge optional eine Beschreibung deines Repositorys hinzu. Beispiel: "Mein persönliches Repository".
  ![Feld zum Eingeben einer Repository-Beschreibung](/assets/images/help/repository/create-personal-repository-desc.png)
4. Wähle **Öffentlich** aus.
 ![Optionsfelder zum Auswählen der Sichtbarkeit mit öffentlichem ausgewähltem ](/assets/images/help/repository/create-personal-repository-visibility.png) {% data reusables.repositories.initialize-with-readme %} {% data reusables.repositories.create-repo %}
7. Klicke oberhalb der rechten Seitenleiste auf **Edit README** (ReadME bearbeiten).
  ![Schaltfläche zum Bearbeiten der README-Datei](/assets/images/help/repository/personal-repository-edit-readme.png)
  
  In die generierte README-Datei wird vorab als Inspiration für deine Profil-README eine Vorlage eingegeben.
  ![README-Datei mit vorab ausgefüllter Vorlage](/assets/images/help/repository/personal-repository-readme-template.png)

Eine Zusammenfassung aller verfügbaren Emojis und ihrer Codes findest Di unter "[Emoji-Cheatsheet](https://www.webfx.com/tools/emoji-cheat-sheet/)".

## Hinzufügen einer Profil-README

Die Profil-README wird aus deinem {% data variables.product.prodname_dotcom %}-Profil entfernt, wenn eine der folgenden Aussagen zutrifft:

- Die README-Datei ist leer oder nicht vorhanden.
- Das Repository ist privat.
- Der Repositoryname stimmt nicht mehr mit deinem Benutzernamen überein.

The method you choose is dependant upon your needs, but if you're unsure, we recommend making your repository private. Die Schritte, mit denen du dein Repository privat machen kannst, findest du unter [Ändern der Sichtbarkeit eines Repositorys](/github/administering-a-repository/setting-repository-visibility#changing-a-repositorys-visibility).

## Weiterführende Themen

- [Informationen zu READMEs](/github/creating-cloning-and-archiving-repositories/about-readmes)
