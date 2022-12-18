---
title: Deployment-Schlüssel überprüfen
intro: 'Du solltest Deine Deployment-Schlüssel überprüfen, um sicherzustellen, dass keine unautorisierten (und möglicherweise kompromittierten) Schlüssel vorhanden sind. Vorhandene Deployment-Schlüssel, die gültig sind, kannst du auch genehmigen.'
redirect_from:
  - /articles/reviewing-your-deploy-keys
  - /github/authenticating-to-github/reviewing-your-deploy-keys
  - /github/authenticating-to-github/keeping-your-account-and-data-secure/reviewing-your-deploy-keys
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Identity
  - Access management
shortTitle: Deploy keys
ms.openlocfilehash: 964ec4cbc91745c041dd973e4e950b605c5c0233
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/10/2022
ms.locfileid: '145086012'
---
{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-settings %} {% ifversion fpt or ghec or ghes > 3.4 or ghae-issue-5658 %}
3. Klicke im Abschnitt „Sicherheit“ der Seitenleiste auf **{% octicon "key" aria-label="The key icon" %} Bereitstellungsschlüssel**.
{% else %}
3. Klicke auf der linken Seitenleiste auf **Bereitstellungsschlüssel**.
![Einstellung „Bereitstellungsschlüssel“](/assets/images/help/settings/settings-sidebar-deploy-keys.png) {% endif %}
4. Überprüfe auf der Seite mit den Deployment-Schlüsseln die Deinem Konto zugeordneten Schlüssel. Bei denjenigen, die Du nicht kennst oder die nicht mehr aktuell sind, klicke auf **Löschen**. Bei gültigen Bereitstellungsschlüsseln, die Du behalten möchtest, klicke auf **Genehmigen**.
    ![Liste der Bereitstellungsschlüssel](/assets/images/help/settings/settings-deploy-key-review.png)

Weitere Informationen findest du unter [Verwalten von Bereitstellungsschlüsseln](/guides/managing-deploy-keys).

## Weiterführende Themen
- [Configuring notifications](/account-and-profile/managing-subscriptions-and-notifications-on-github/setting-up-notifications/configuring-notifications#organization-alerts-notification-options) („Konfigurieren von Benachrichtigungen“)
