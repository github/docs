---
title: Verwenden der neuesten Version der offiziellen gebündelten Aktionen
intro: 'Du kannst die Aktionen aktualisieren, die mit deinem Unternehmen gebündelt werden. Du kannst Aktionen auch direkt über {% data variables.product.prodname_dotcom_the_website %} verwenden.'
versions:
  ghes: '*'
  ghae: '*'
type: how_to
topics:
  - Actions
  - Enterprise
  - GitHub Connect
redirect_from:
  - /admin/github-actions/using-the-latest-version-of-the-official-bundled-actions
shortTitle: Use the latest bundled actions
ms.openlocfilehash: a86c731602bc39cc35fbff823ebdbfbdf2dec2c9
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 10/25/2022
ms.locfileid: '148107029'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

Deine Unternehmensinstanz enthält eine Reihe integrierter Aktionen, die du in deinen Workflows verwenden kannst. Weitere Informationen zu den gebündelten Aktionen findest du unter [Offizielle Aktionen, die mit deiner Unternehmensinstanz gebündelt sind](/admin/github-actions/about-using-actions-in-your-enterprise#official-actions-bundled-with-your-enterprise-instance).

Diese gebündelten Aktionen sind eine Punkt-in-Time-Momentaufnahme der offiziellen Aktionen, die auf https://github.com/actions verfügbar sind, es gibt also möglicherweise neuere Versionen dieser Aktionen. Du kannst das `actions-sync`-Tool verwenden, um diese Aktionen zu aktualisieren, du kannst aber auch {% data variables.product.prodname_github_connect %} konfigurieren, um den Zugriff auf die neuesten Aktionen auf {% data variables.product.prodname_dotcom_the_website %} zu gewähren. Diese Optionen sind in den folgenden Abschnitten beschrieben.

## Verwenden von `actions-sync` zum Aktualisieren der gebündelten Aktionen

Um die gebündelten Aktionen zu aktualisieren, kannst du das `actions-sync`-Tool verwenden, um die Momentaufnahme zu aktualisieren. Weitere Informationen zur Verwendung von `actions-sync` findest du unter [Manuelles Synchronisieren von Aktionen von {% data variables.product.prodname_dotcom_the_website %}](/admin/github-actions/manually-syncing-actions-from-githubcom).

## Verwenden von {% data variables.product.prodname_github_connect %} für den Zugriff auf die neuesten Aktionen

Du kannst {% data variables.product.prodname_github_connect %} verwenden, um zuzulassen, dass {% data variables.product.product_name %} Aktionen von {% data variables.product.prodname_dotcom_the_website %} verwendet. Weitere Informationen findest du unter [Aktivieren des automatischen Zugriffs auf {% data variables.product.prodname_dotcom_the_website %}-Aktionen mithilfe von {% data variables.product.prodname_github_connect %}](/admin/github-actions/enabling-automatic-access-to-githubcom-actions-using-github-connect).

Nachdem {% data variables.product.prodname_github_connect %} konfiguriert wurde, kannst du die neueste Version einer Aktion verwenden, indem du das lokale Repository in der `actions`-Organisation in deiner Instanz löschst. Wenn deine Unternehmensinstanz beispielsweise `v1` der `actions/checkout`-Aktion verwendet und du `{% data reusables.actions.action-checkout %}` verwenden musst, was nicht in deiner Unternehmensinstanz verfügbar ist, führe die folgenden Schritte aus, damit du die neueste `checkout`-Aktion von {% data variables.product.prodname_dotcom_the_website %} verwenden kannst:

1. Navigiere aus einem Unternehmensinhaberkonto auf {% data variables.product.product_name %} zum Repository, das du aus der *actions*-Organisation löschen möchtest (in diesem Beispiel `checkout`).
1. Standardmäßig sind Websiteadministrator*innen keine Besitzer der gebündelten *actions*-Organisation. Um den Zugriff zu erhalten, der zum Löschen des `checkout`-Repositorys benötigt wird, musst du die Websiteadministratortools verwenden. Klicke in der oberen rechten Ecke einer beliebigen Seite in diesem Repository auf {% octicon "rocket" aria-label="The rocket ship" %}.
  ![Raumschiffsymbol für den Zugriff auf die Websiteadministratoreinstellungen](/assets/images/enterprise/site-admin-settings/access-new-settings.png)
1. Klicke auf {% octicon "shield-lock" %} **Sicherheit**, um die Sicherheitsübersicht für das Repository anzuzeigen.
  ![Sicherheitsheader des Repositorys](/assets/images/enterprise/site-admin-settings/access-repo-security-info.png)
1. Klicke unter „Privilegierter Zugriff“ auf **Entsperren**.
  ![Schaltfläche „Entsperren“](/assets/images/enterprise/site-admin-settings/unlock-priviledged-repo-access.png)
1. Gib unter **Grund** einen Grund für das Entsperren des Repositorys ein, und klicke auf **Entsperren**.
  ![Bestätigungsdialogfeld](/assets/images/enterprise/site-admin-settings/confirm-unlock-repo-access.png)
1. Nachdem das Repository entsperrt ist, kannst du die Websiteadministratorseiten verlassen und das Repository innerhalb der `actions`-Organisation löschen. Klicke oben auf der Seite auf den Repositorynamen, in diesem Beispiel **checkout**, um zur Zusammenfassungsseite zurückzukehren.
  ![Link zum Repositorynamen](/assets/images/enterprise/site-admin-settings/display-repository-admin-summary.png)
1. Klicke unter „Repositoryinformationen“ auf **Code anzeigen**, um die Websiteadministratorseiten zu verlassen und das `checkout`-Repository anzuzeigen.
1. Lösche das `checkout`-Repository innerhalb der `actions`-Organisation. Informationen zum Löschen eines Repositorys findest du unter [Löschen eines Repositorys](/github/administering-a-repository/deleting-a-repository).
  ![Link „Code anzeigen“](/assets/images/enterprise/site-admin-settings/exit-admin-page-for-repository.png)
1. Konfiguriere die YAML-Datei deines Workflows so, dass sie `{% data reusables.actions.action-checkout %}` verwendet.
1. Bei jeder Ausführung deines Workflows verwendet der Runner die angegebene Version von `actions/checkout` von {% data variables.product.prodname_dotcom_the_website %}.

   {% note %}

   **Hinweis:** Wenn die `checkout`-Aktion zum ersten Mal von {% data variables.product.prodname_dotcom_the_website %} verwendet wird, wird der `actions/checkout`-Namespace automatisch für {% data variables.location.product_location %} eingestellt. Wenn du jemals eine lokale Kopie der Aktion wiederherstellen möchtest, musst du zuerst den Namespace aus der Deaktivierungsphase entfernen. Weitere Informationen findest du unter [Automatisches Deaktivieren von Namespaces für Aktionen, auf die über {% data variables.product.prodname_dotcom_the_website%} zugegriffen wird](/admin/github-actions/managing-access-to-actions-from-githubcom/enabling-automatic-access-to-githubcom-actions-using-github-connect#automatic-retirement-of-namespaces-for-actions-accessed-on-githubcom).

   {% endnote %}
