---
title: Verwalten des Zugriffs auf andere Repositorys innerhalb deines Codespace
allowTitleToDifferFromFilename: true
shortTitle: Repository access
intro: 'Du kannst die Repositorys verwalten, auf die {% data variables.product.prodname_github_codespaces %} zugreifen kann.'
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Codespaces
  - Security
redirect_from:
  - /codespaces/managing-your-codespaces/managing-access-and-security-for-your-codespaces
ms.openlocfilehash: 3f8379c322bd7ccd9ff7d31e17da90a77461536d
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 11/09/2022
ms.locfileid: '148159694'
---
## Übersicht

Standardmäßig wird deinem Codespace ein Token zugewiesen, das dem Repository zugeordnet ist, aus dem er erstellt wurde. Wenn du einen Codespace, den du mithilfe einer Vorlage erstellt hast, in einem neuen Repository auf {% data variables.product.product_name %} veröffentlichst, wird dem Codespace ein Token zugewiesen, das dem neuen Repository zugeordnet ist. Weitere Informationen findest du unter [Sicherheit in {% data variables.product.prodname_github_codespaces %}](/codespaces/codespaces-reference/security-in-github-codespaces#authentication). Wenn dein Projekt zusätzliche Berechtigungen für andere Repositorys benötigt, kannst du dies in der `devcontainer.json`-Datei konfigurieren und sicherstellen, dass andere Projektmitarbeiter über die richtigen Berechtigungen verfügen.

Wenn Berechtigungen in der `devcontainer.json`-Datei aufgeführt sind, wirst du aufgefordert, die zusätzlichen Berechtigungen als Teil der Codespaceerstellung für dieses Repository zu überprüfen und zu autorisieren. Nachdem du die aufgelisteten Berechtigungen autorisiert hast, erinnert sich {% data variables.product.prodname_github_codespaces %} an deine Auswahl, und fordert nicht die Autorisierung von dir an, sofern sich die Berechtigungen in der `devcontainer.json`-Datei nicht ändern.

## Voraussetzungen

Um Codespaces mit benutzerdefinierten Berechtigungen zu erstellen, musst du eine der folgenden Optionen verwenden:
* Die {% data variables.product.prodname_dotcom %}-Webbenutzeroberfläche
* [{% data variables.product.prodname_dotcom %} CLI](https://github.com/cli/cli/releases/latest) 2.5.2 oder höher
* [{% data variables.product.prodname_github_codespaces %} {% data variables.product.prodname_vscode %}-Erweiterung](https://marketplace.visualstudio.com/items?itemName=GitHub.codespaces) 1.5.3 oder höher

## Festlegen zusätzlicher Repositoryberechtigungen

1. Du konfigurierst Repositoryberechtigungen für {% data variables.product.prodname_github_codespaces %} in der `devcontainer.json`-Datei. Wenn dein Repository noch keine `devcontainer.json`-Datei enthält, füge jetzt eine hinzu. Weitere Informationen: [Hinzufügen eines Dev-Containers zu deinem Projekt](/codespaces/setting-up-your-project-for-codespaces/setting-up-your-project-for-codespaces).

1. Bearbeite die `devcontainer.json`-Datei, wobei du den Repositorynamen und -berechtigungen hinzufügst, die für das `repositories`-Objekt erforderlich sind:

  ```json{:copy}
  {
    "customizations": {
      "codespaces": {
        "repositories": {
          "my_org/my_repo": {
            "permissions": {
              "issues": "write"
            }
          }
        }
      }
    }
  }
  ```

  {% note %}

  **Hinweis:** Du kannst nur auf Repositorys verweisen, die zu demselben persönlichen Konto oder der Organisation gehören wie das Repository, in dem du derzeit arbeitest.

  {% endnote %}

  Du kannst für jedes aufgelistete Repository so viele oder wenige Berechtigungen erteilen wie im Folgenden aufgelistet:
   * `actions`: Lesen/Schreiben
   * `checks`: Lesen/Schreiben
   * `contents`: Lesen/Schreiben
   * `deployments`: Lesen/Schreiben
   * `discussions`: Lesen/Schreiben
   * `issues`: Lesen/Schreiben
   * `packages`: Lesen
   * `pages`: Lesen/Schreiben
   * `pull_requests`: Lesen/Schreiben
   * `repository_projects`: Lesen/Schreiben
   * `statuses`: Lesen/Schreiben
   * `workflows`: Schreiben

  Um eine Berechtigung für alle Repositorys in einer Organisation festzulegen, verwende den `*`-Platzhalter nach dem Namen deiner Organisation im `repositories`-Objekt.

  ```json
  {
    "customizations": {
      "codespaces": {
        "repositories": {
          "my_org/*": {
            "permissions": {
              "issues": "write"
            }
          }
        }
      }
    }
  }
  ```

  Um alle Berechtigungen für ein bestimmtes Repository festzulegen, verwende `"permissions": "read-all"` oder `"permissions": "write-all"` im Repositoryobjekt.

  ```json
  {
    "customizations": {
      "codespaces": {
        "repositories": {
          "my_org/my_repo": {
            "permissions": "write-all"
          }
        }
      }
    }
  }
  ```

## Autorisieren angeforderter Berechtigungen

Wenn zusätzliche Repositoryberechtigungen in der `devcontainer.json`-Datei definiert sind, wirst du aufgefordert, die Berechtigungen zu überprüfen und optional zu autorisieren, wenn du einen Codespace oder eine Präbuildkonfiguration für dieses Repository erstellst. Wenn du Berechtigungen für ein Repository autorisierst, fordert {% data variables.product.prodname_github_codespaces %} dich nicht erneut auf, sofern der Satz angeforderter Berechtigungen für das Repository sich nicht geändert hat.

![Die Seite mit angeforderten Berechtigungen](/assets/images/help/codespaces/codespaces-accept-permissions.png)

Du solltest nur Berechtigungen für Repositorys autorisieren, die du kennst und denen du vertraust. Wenn du dem Satz angeforderter Berechtigungen nicht vertraust, klicke auf **Fortfahren ohne Autorisierung**, um den Codespace mit dem Basissatz von Berechtigungen zu erstellen. Das Ablehnen zusätzlicher Berechtigungen kann sich auf die Funktionalität deines Projekts innerhalb des Codespace auswirken, da der Codespace nur Zugriff auf das Repository hat, aus dem es erstellt wurde.

Du kannst nur Berechtigungen autorisieren, die dein persönliches Konto bereits besitzt. Wenn ein Codespace Berechtigungen für Repositorys anfordert, auf die du derzeit keinen Zugriff hast, wende dich an einen Besitzer oder Administrator des Repositorys, um ausreichenden Zugriff zu erhalten, und versuche dann erneut, einen Codespace zu erstellen.

## Zugriff und Sicherheit

{% warning %}

**Hinweis zu veralteten Funktionen**: Die unten beschriebene Zugriffs- und Sicherheitseinstellung ist mittlerweile veraltet und wird hier nur zu Referenzzwecken dokumentiert. Um erweiterten Zugriff auf andere Repositorys zu aktivieren, füge die angeforderten Berechtigungen wie oben beschrieben deiner Entwicklungscontainerdefinition hinzu.

{% endwarning %}

Wenn du den Zugriff und die Sicherheit für ein Repository im Besitz deines persönlichen Kontos aktivierst, verfügen alle Codespaces, die für dieses Repository erstellt werden, über Leseberechtigungen für alle anderen Repositorys, die du besitzt. Wenn du die Repositorys einschränken möchtest, auf die ein Codespace zugreifen kann, kannst du ihn entweder auf das Repository beschränken, in dem der Codespace geöffnet wurde, oder auf bestimmte Repositorys. Du solltest Zugriff und Sicherheit nur für Repositorys aktivieren, denen du vertraust. 

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.codespaces-tab %}
1. Wähle unter „Zugriff und Sicherheit“ die gewünschte Einstellung für dein persönliches Konto aus.

  ![Optionsfelder zum Verwalten vertrauenswürdiger Repositorys](/assets/images/help/settings/codespaces-access-and-security-radio-buttons.png)

1. Wenn du „Ausgewählte Repositorys“ ausgewählt hast, wähle das Dropdownmenü aus, und klicke dann auf ein Repository, damit die Codespaces des Repositorys auf andere Repositorys in deinem Besitz zugreifen können. Wiederhole diesen Vorgang für alle Repositorys, deren Codespaces auf andere Repositorys in deinem Besitz zugreifen können sollen.

  ![Dropdownmenü „Ausgewählte Repositorys“](/assets/images/help/settings/codespaces-access-and-security-repository-drop-down.png)
