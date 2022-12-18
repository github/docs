---
title: Ein Repository anhand einer Vorlage erstellen
intro: 'Du kannst ein neues Repository mit derselben Verzeichnisstruktur und denselben Dateien erstellen, die ein vorhandenes Repository aufweist.'
redirect_from:
  - /articles/creating-a-repository-from-a-template
  - /github/creating-cloning-and-archiving-repositories/creating-a-repository-from-a-template
  - /github/creating-cloning-and-archiving-repositories/creating-a-repository-on-github/creating-a-repository-from-a-template
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Repositories
shortTitle: Create from a template
ms.openlocfilehash: 16d124431426e19cf95c768e8a4cdaa5f4da2e17
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 11/09/2022
ms.locfileid: '148160246'
---
## Informationen zu Repositoryvorlagen

Jeder, der über Leseberechtigung auf eine Repository-Vorlage verfügt, kann ein Repository anhand dieser Vorlage erstellen. Weitere Informationen findest du unter [Erstellen eines Vorlagenrepositorys](/articles/creating-a-template-repository).

{% tip %}

**Tipp:** Du kannst auch ein Repository aus einer Vorlage mithilfe der {% data variables.product.prodname_cli %} erstellen. Weitere Informationen findest du unter „[`gh repo create`](https://cli.github.com/manual/gh_repo_create)“ in der Dokumentation zur {% data variables.product.prodname_cli %}.

{% endtip %}

Du kannst die Verzeichnisstruktur und die Dateien nur aus dem Standard-Branch des Vorlagen-Repositorys einbinden oder alle Branches einbinden. Aus einer Vorlage erstellte Branches weisen abweichende Verläufe auf. Das bedeutet, dass du keine Pull Requests erstellen oder Branches zusammenführen kannst.

Das Erstellen eines Repositorys anhand einer Vorlage ähnelt dem Vorgang zum Forken eines Repositorys, aber es gibt entscheidende Unterschiede:
- Ein neuer Fork enthält den gesamten Commit-Verlauf des übergeordneten Repositorys, wohingegen ein Repository, das anhand einer Vorlage erstellt wurde, mit einem einzigen Commit beginnt.
- Commits für einen Fork erscheinen nicht im Beteiligungsdiagramm, während Commits für ein Repository, das anhand einer Vorlage erstellt wurde, im Beteiligungsdiagramm angezeigt werden.
- Ein Fork kann eine temporäre Möglichkeit sein, um Code zu einem vorhandenen Projekt beizutragen. Beim Erstellen eines Repositorys anhand einer Vorlage wird dagegen schnell ein neues Projekt gestartet.

Weitere Informationen zu Forks findest du unter [Informationen zu Forks](/pull-requests/collaborating-with-pull-requests/working-with-forks/about-forks).

## Ein Repository anhand einer Vorlage erstellen

{% data reusables.repositories.navigate-to-repo %}
1. Klicke über der Dateiliste auf **Diese Vorlage verwenden**.
{% ifversion fpt or ghec %}
1. Wähle **Neues Repository erstellen** aus.

   ![Schaltfläche „Diese Vorlage verwenden“](/assets/images/help/repository/use-this-template-button.png)

   {% note %}

   **Hinweis:** Alternativ kannst du die Vorlage in einem Codespace öffnen und deine Arbeit später in einem neuen Repository veröffentlichen. Weitere Informationen findest du unter [Erstellen eines Codespace mithilfe einer Vorlage](/codespaces/developing-in-codespaces/creating-a-codespace-from-a-template).

   {% endnote %} {% endif %} {% data reusables.repositories.owner-drop-down %} {% data reusables.repositories.repo-name %} {% data reusables.repositories.choose-repo-visibility %}
1. Um optional die Verzeichnisstruktur und die Dateien aller Branches aus dieser Vorlage und nicht nur aus dem Standardbranch einzuschließen, wählst du **Alle Branches einschließen** aus.
  ![Kontrollkästchen „Alles Branches einschließen“](/assets/images/help/repository/include-all-branches.png) {% data reusables.repositories.select-marketplace-apps %}
8. Klicke auf **Create repository from template** (Repository aus Vorlage erstellen).
