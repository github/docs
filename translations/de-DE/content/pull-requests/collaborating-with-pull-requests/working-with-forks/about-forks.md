---
title: Informationen zu Forks
intro: 'Ein Fork ist eine Kopie eines Repositorys, das Du verwaltest. Mit Forks kannst du Änderungen an einem Projekt vornehmen, ohne dass sich dies auf das ursprüngliche Repository auswirkt. Du kannst Updates aus dem ursprünglichen Repository abrufen oder Änderungen mit Pull Requests an das Repository senden.'
redirect_from:
  - /github/collaborating-with-issues-and-pull-requests/working-with-forks/about-forks
  - /articles/about-forks
  - /github/collaborating-with-issues-and-pull-requests/about-forks
  - /github/collaborating-with-pull-requests/working-with-forks/about-forks
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Pull requests
ms.openlocfilehash: 83372d27f052ee8c22730f5ce5d22e9efbf04fbb
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 11/09/2022
ms.locfileid: '148158749'
---
Das Forking eines Repositorys ist ähnlich wie das Kopieren eines Repositorys, mit zwei wesentlichen Unterschieden:

* Du kannst einen Pull Request verwenden, um Änderungen an deinem benutzereigenen Fork für das Originalrepository in der zugehörigen GitHub-Instanz vorzuschlagen, auch als *Upstream*-Repository bezeichnet.
* Du kannst Änderungen vom vorgelagerten Repository auf Deinen lokalen Fork übertragen, indem Du Deinen Fork mit dem vorgelagerten Repository synchronisierst.

{% data reusables.repositories.you-can-fork %}

{% ifversion fpt or ghec %}

Falls du Mitglied eines {% data variables.enterprise.prodname_emu_enterprise %} bist, gelten weitere Einschränkungen für die Repositorys, die du forken kannst. {% data reusables.enterprise-accounts.emu-forks %} Weitere Informationen findest du unter [Informationen zu {% data variables.product.prodname_emus %}](/enterprise-cloud@latest/admin/authentication/managing-your-enterprise-users-with-your-identity-provider/about-enterprise-managed-users){% ifversion fpt %} in der {% data variables.product.prodname_ghe_cloud %}-Dokumentation.{% else %}.{% endif %}

{% endif %}

{% data reusables.repositories.desktop-fork %}

Das Löschen eines Forks wird das ursprüngliche vorgelagerte Repository nicht löschen. Du kannst beliebige Änderungen an deinem Fork vornehmen – Projektmitarbeiter hinzufügen, Dateien umbenennen, {% data variables.product.prodname_pages %} generieren –, ohne Auswirkungen auf das Original.{% ifversion fpt or ghec %} Du kannst ein geforktes Repository nach dem Löschen nicht wiederherstellen. Weitere Informationen findest du unter [Wiederherstellen eines gelöschten Repository](/articles/restoring-a-deleted-repository).{% endif %}

In Open-Source-Projekten werden Forks oft verwendet, um mehrfach Ideen oder Änderungen durchzuspielen, bevor sie an das vorgelagerte Repository zurückgesendet werden. Wenn du Änderungen an deinem benutzereigenen Fork vornimmst und einen Pull Request öffnest, der deine Arbeit mit dem Upstream-Repository vergleicht, kannst du jeder Person mit Pushzugriff auf das Upstream-Repository die Erlaubnis geben, Änderungen an deinen Pull Request-Branch zu pushen (einschließlich Löschung des Branches). Dies beschleunigt die Zusammenarbeit, indem es den Repository-Betreuern erlaubt, Commits zu erstellen oder Tests vor dem Zusammenführen lokal aus einer benutzereigenen Fork zu Deinem Pull-Request-Branch auszuführen. Du kannst keine Push-Berechtigungen an eine Fork geben, die einer Organisation gehört. 

{% data reusables.repositories.private_forks_inherit_permissions %}

Wenn du ein neues Repository aus dem Inhalt eines vorhandenen Repositorys erstellen möchtest, deine Änderungen aber künftig nicht in das Upstream-Repository mergen möchtest, kannst du das Repository duplizieren oder – falls es sich bei dem Repository um eine Vorlage handelt – das Repository als Vorlage verwenden. Weitere Informationen findest du unter [Duplizieren eines Repository](/articles/duplicating-a-repository) und [Erstellen eines Repository anhand einer Vorlage](/articles/creating-a-repository-from-a-template).

## Weiterführende Themen

- [Informationen zu gemeinschaftlichen Entwicklungsmodellen](/pull-requests/collaborating-with-pull-requests/getting-started/about-collaborative-development-models)
- [Erstellen eines Pull Requests vom einem Fork des Repositorys](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request-from-a-fork)
- [Open-Source-Leitfäden](https://opensource.guide/){% ifversion fpt or ghec %}
- [{% data variables.product.prodname_learning %}]({% data variables.product.prodname_learning_link %}){% endif %}
