---
title: Repository umbenennen
intro: 'Du kannst ein Repository umbenennen, wenn du Organisationsinhaber bist oder über Administratorberechtigungen für das Repository verfügst.'
redirect_from:
  - /articles/renaming-a-repository
  - /github/administering-a-repository/renaming-a-repository
  - /github/administering-a-repository/managing-repository-settings/renaming-a-repository
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Repositories
ms.openlocfilehash: d0067d96dce2f2cf9fe8bb2dd519668780d861ff
ms.sourcegitcommit: bd8b3e152f17d90acf222a0d50ba9595184c1f5f
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 10/27/2022
ms.locfileid: '148111673'
---
Wenn Du ein Repository umbenennst, werden mit Ausnahme von Projektwebsite-URLs alle vorhandenen Informationen automatisch auf den neuen Namen umgeleitet, einschließlich:

* Probleme
* Wikis
* Sterne
* Follower

Weitere Informationen zu Projektwebsites findest du unter [Informationen zu {% data variables.product.prodname_pages %}](/pages/getting-started-with-github-pages/about-github-pages#types-of-github-pages-sites).

Zusätzlich zum Umleiten von Webdatenverkehr funktionieren alle `git clone`-, `git fetch`- oder `git push`-Vorgänge, die auf den vorherigen Standort abzielen, weiterhin so, als fänden sie am neuen Standort statt. Um jedoch Verwirrung zu vermeiden, empfehlen wir ausdrücklich, alle bestehenden lokalen Klone zu aktualisieren, sodass sie auf die neue Repository-URL verweisen. Du kannst dies tun, indem du `git remote` in der Befehlszeile verwendest:

```shell
$ git remote set-url origin NEW_URL
```

Weitere Informationen findest du unter [Verwalten von Remoterepositorys](/github/getting-started-with-github/managing-remote-repositories).

{% ifversion fpt or ghec %}

Wenn Du vorhast, ein Repository mit einer {% data variables.product.prodname_pages %}-Website umzubenennen, empfehlen wir Dir, eine benutzerdefinierte Domäne für Deine Website zu verwenden. Dadurch wird sichergestellt, dass die URL der Website nicht durch Umbenennung des Repository beeinträchtigt wird. Weitere Informationen findest du unter [Informationen zu benutzerdefinierten Domänen und der {% data variables.product.prodname_pages %}-Website](/pages/configuring-a-custom-domain-for-your-github-pages-site/about-custom-domains-and-github-pages). 

{% endif %}

{% note %}

**Hinweis:** {% data variables.product.prodname_dotcom %} leitet keine Aufrufe an eine Aktion um, die von einem umbenannten Repository gehostet wird. Bei jedem Workflow, der diese Aktion verwendet, tritt der Fehler `repository not found` auf. Erstelle stattdessen ein neues Repository und eine Aktion mit dem neuen Namen, und archiviere das alte Repository. Weitere Informationen findest du unter [Archivieren von Repositorys](/repositories/archiving-a-github-repository/archiving-repositories).

{% endnote %}

{% warning %}

**Warnung**: Wenn du in der Zukunft ein neues Repository unter deinem Konto erstellst, darfst du den ursprünglichen Namen des umbenannten Repositorys nicht wiederverwenden. Wenn du das doch tust, funktionieren Umleitungen zum umbenannten Repository nicht mehr.

{% endwarning %}

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-settings %}
3. Gib unter der Überschrift **Repositoryname** den neuen Namen für das Repository ein.
   ![Umbenennen des Repositorys](/assets/images/help/repository/repository-name-change.png)
4. Klicke auf **Umbenennen**. Du hast es geschafft!
