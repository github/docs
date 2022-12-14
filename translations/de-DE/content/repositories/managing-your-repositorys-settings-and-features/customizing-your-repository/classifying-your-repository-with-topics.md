---
title: Ihr Repository mit Themen klassifizieren
intro: 'Damit andere Personen Dein Projekt leichter finden und Beiträge dazu leisten können, kannst du zu deinem Repository Themen hinzufügen, die in Zusammenhang mit dem beabsichtigten Zweck, dem Themenbereich, verbundenen Gruppen oder anderen wichtigen Eigenschaften des Projekts stehen.'
redirect_from:
  - /articles/about-topics
  - /articles/classifying-your-repository-with-topics
  - /github/administering-a-repository/classifying-your-repository-with-topics
  - /github/administering-a-repository/managing-repository-settings/classifying-your-repository-with-topics
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Repositories
shortTitle: Classify with topics
ms.openlocfilehash: 26f51423140c086bbea019666b8d569419da3b38
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 10/25/2022
ms.locfileid: '148108342'
---
## Informationen zu Themen

Mithilfe von Themen kannst Du Repositorys zu einem bestimmten Themenbereich erkunden, Projekte finden, zu denen Du einen Beitrag leisten kannst, und neue Lösungen für ein bestimmtes Problem entdecken. Themen werden auf der Hauptseite eines Repositorys angezeigt. Du kannst auf den Namen eines Themas klicken, um {% ifversion fpt or ghec %}ähnliche Themen und eine Liste anderer Repositorys mit demselben Thema anzuzeigen{% else %}und nach anderen Repositorys mit demselben Thema zu suchen{% endif %}.

![Hauptseite des Test-Repositorys, auf der Themen angezeigt werden](/assets/images/help/repository/os-repo-with-topics.png)

Um die am häufigsten verwendeten Themen zu durchsuchen, navigiere zu https://github.com/topics/.

{% ifversion fpt or ghec %}Du kannst zum Satz an empfohlenen Themen von {% data variables.product.product_name %} im [github/explore](https://github.com/github/explore)-Repository beitragen. {% endif %}

Repository-Administratoren können beliebige Themen zu einem Repository hinzufügen. Hilfreiche Themen, mit denen Du ein Repository klassifizieren kannst, sind beispielsweise der beabsichtigte Zweck, der Themenbereich, die Community oder die Sprache des Repositorys.{% ifversion fpt or ghec %} Darüber hinaus analysiert {% data variables.product.product_name %} Inhalte öffentlicher Repositorys und erzeugt Themenvorschläge, die Repository-Administratoren annehmen oder ablehnen können. Die Inhalte privater Repositorys werden nicht analysiert, und es gibt keine Themenvorschläge für private Repositorys.{% endif %}

{% ifversion fpt %} Öffentliche und private{% elsif ghec oder ghes %}Öffentliche, private und interne{% elsif ghae %}Private und interne{% endif %} Repositorys können Themen haben, obwohl nur private Repositorys angezeigt werden, auf die Du in den Themensuchergebnissen zugreifen kannst.

Du kannst nach Repositorys suchen, die mit einem bestimmten Thema verknüpft sind. Weitere Informationen findest Du unter [Suchen nach Repositorys](/search-github/searching-on-github/searching-for-repositories#search-by-topic). Du kannst auch nach einer Liste von Themen auf {% data variables.product.product_name %} suchen. Weitere Informationen findest Du unter [Durchsuchen von Themen](/search-github/searching-on-github/searching-topics).

## Themen zum Repository hinzufügen

{% note %}

**Hinweis:** Themennamen sind immer öffentlich, auch wenn du das Thema von einem privaten Repository aus erstellst.

{% endnote %}

{% data reusables.repositories.navigate-to-repo %}
2. Klicke rechts neben "Info" auf {% octicon "gear" aria-label="The Gear icon" %}.
  ![Zahnradsymbol auf der Hauptseite eines Repositorys](/assets/images/help/repository/edit-repository-details-gear.png)
3. Gib unter "Topics" (Themen) das Thema ein, das Du zum Repository hinzufügen möchtest, gefolgt von einem Leerzeichen.
  ![Formular zur Eingabe von Themen](/assets/images/help/repository/add-topic-form.png)
4. Wenn Du mit dem Hinzufügen von Themen fertig bist, klicke auf **Save changes** (Änderungen speichern).
  ![Schaltfläche "Save changes" (Änderungen speichern) in "Edit repository details" (Repositorydetails bearbeiten)](/assets/images/help/repository/edit-repository-details-save-changes-button.png)
