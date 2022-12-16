---
title: Erstellen von Diskussionskategorieformularen
shortTitle: Create discussion category forms
intro: 'Du kannst die Vorlagen anpassen, mit denen Communitymitglieder neue Diskussionen in deinem Repository erstellen können.'
versions:
  feature: discussion-category-forms
ms.openlocfilehash: f87bd6369bcb4f1b6e2e47fe11cd61626b1fbe7d
ms.sourcegitcommit: 6185352bc563024d22dee0b257e2775cadd5b797
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 12/09/2022
ms.locfileid: '148193319'
---
{% data reusables.discussions.discussion-category-forms-beta %}

## Informationen zu Diskussionskategorieformularen

Durch die Verwendung von Diskussionsformularen in deinem Repository kannst du Communitymitglieder dazu animieren, spezifische, strukturierte Informationen in ihre Diskussionen aufzunehmen. Mit Diskussionskategorieformularen kannst du Diskussionsvorlagen erstellen, die anpassbare Webformularfelder enthalten. Diskussionsformulare werden mithilfe des {% data variables.product.prodname_dotcom %}-Formularschemas in YAML geschrieben. Weitere Informationen findest du unter [Syntax für das Formularschema von {% data variables.product.prodname_dotcom %}](/communities/using-templates-to-encourage-useful-issues-and-pull-requests/syntax-for-githubs-form-schema). 

{% data reusables.actions.learn-more-about-yaml %}

Um ein Diskussionsformular in deinem Repository zu verwenden, musst du eine neue Datei erstellen und dem Ordner `/.github/DISCUSSION_TEMPLATE/` im Repository hinzufügen. 

Du kannst auch Diskussionskategorieformulare für deine Organisation erstellen. Weitere Informationen findest du unter [Erstellen einer Standard-Communityintegritätsdatei](/communities/setting-up-your-project-for-healthy-contributions/creating-a-default-community-health-file).

Für Umfragen werden keine Diskussionskategorieformulare unterstützt. Weitere Informationen zu Umfragen findest du unter [Informationen zu Umfragen](/discussions/collaborating-with-your-community-using-discussions/about-discussions#about-polls).

Hier siehst du die gerenderte Version des Issueformulars:

  ![Screenshot: Gerendertes Diskussionskategorieformular](/assets/images/help/discussions/discussion-category-form-sample.png)

## Erstellen von Diskussionskategorieformularen

Diskussionskategorieformulare können von Personen mit Schreibzugriff auf ein Repository erstellt werden. 

1. Navigiere zu dem Repository, in dem du ein Diskussionskategorieformular erstellen möchtest. 
2. Erstelle in deinem Repository eine Datei namens `/.github/DISCUSSION_TEMPLATE/FORM-NAME.yml`. Ersetze dabei `FORM-NAME` durch den Namen für dein Diskussionskategorieformular. {% data reusables.discussions.discussion-category-forms-name %} Weitere Informationen zum Erstellen neuer Dateien auf GitHub findest du unter [Erstellen neuer Dateien](/github/managing-files-in-a-repository/creating-new-files).
3. Gib im Textfeld der neuen Datei den Inhalt deines Diskussionskategorieformulars ein. Weitere Informationen findest du unter [Syntax für Diskussionskategorieformulare](/discussions/managing-discussions-for-your-community/syntax-for-discussion-category-forms).
4. Committe deine Workflowdatei in den Standardbranch deines Repositorys. Weitere Informationen findest du unter [Erstellen neuer Dateien](/github/managing-files-in-a-repository/creating-new-files).
