---
title: Mit Anwendungen von Drittanbietern verbinden
intro: 'Du kannst deine {% data variables.product.product_name %}-Identität über OAuth mit Drittanbieteranwendungen verbinden. Wenn du eine dieser Anwendungen autorisierst, solltest du sicherstellen, dass es sich um eine vertrauenswürdige Anwendung handelt, und prüfen, von wem sie entwickelt wurde und auf welche Informationen sie zugreifen möchte.'
redirect_from:
  - /articles/connecting-with-third-party-applications
  - /github/authenticating-to-github/connecting-with-third-party-applications
  - /github/authenticating-to-github/keeping-your-account-and-data-secure/connecting-with-third-party-applications
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Identity
  - Access management
shortTitle: Third-party applications
ms.openlocfilehash: b8cd20d36926c373116061e211be62701b1bd2f6
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/11/2022
ms.locfileid: '145104120'
---
Wenn du eine Drittanbieter-Anwendung mit deiner {% data variables.product.product_name %}-Anmeldung identifizieren möchtest, wird eine Seite mit den Kontaktdaten des Entwicklers und einer Liste der angeforderten Daten angezeigt.

## Den Anwendungsentwickler kontaktieren

Wenn eine Anwendung nicht von {% data variables.product.product_name %}, sondern von einem Drittanbieter entwickelt wurde, wissen wir nicht genau, wie diese Anwendung die Daten nutzt, auf die sie zugreifen möchte. Wende Dich via die Angaben zum Entwickler, die du oben auf der Seite findest, an den Anwendungsadministrator, falls du Fragen oder Bedenken zu seiner Anwendung hast.

![{% data variables.product.prodname_oauth_app %}-Inhaberinformationen](/assets/images/help/platform/oauth_owner_bar.png)

Auf der rechten Seite findest du eine detaillierte Beschreibung der Anwendung und die zugehörige Website, sofern der Entwickler diese Informationen bereitgestellt hat.

![OAuth-Anwendungsinformationen und -Website](/assets/images/help/platform/oauth_app_info.png)

## Typen an Anwendungszugriff und Daten

Anwendungen können *Lese*- oder *Schreibzugriff* auf deine {% data variables.product.product_name %}-Daten haben.

- **Lesezugriff** ermöglicht einer Anwendung nur, deine Daten *anzuzeigen*.
- Bei **Schreibzugriff** kann eine Anwendung deine Daten *ändern*.

### Informationen zu OAuth-Scopes

*Bereiche* sind benannte Gruppen von Berechtigungen, die eine Anwendung anfordern kann, um auf öffentliche und nicht öffentliche Daten zuzugreifen.

Wenn du eine Drittanbieter-Anwendung verwenden möchtest, die in {% data variables.product.product_name %} integriert ist, teilt diese Anwendung dir mit, welche Art von Zugriff auf deine Daten benötigt wird. Wenn du der App Zugriff erteilst, kann sie Aktionen in deinem Namen durchführen, beispielsweise das Lesen oder Ändern von Daten. Wenn du beispielsweise eine App verwenden möchtest, mit der der Geltungsbereich `user:email` angefordert wird, hat die App schreibgeschützten Zugriff auf deine privaten E-Mail-Adressen. Weitere Informationen findest du unter „[Informationen zu Geltungsbereichen für {% data variables.product.prodname_oauth_apps %}](/apps/building-integrations/setting-up-and-registering-oauth-apps/about-scopes-for-oauth-apps)“.

{% tip %}

**Hinweis:** Derzeit kannst du Quellcode-Zugriff nicht in einen Lesezugriff ändern.

{% endtip %}

### Arten der angeforderten Daten

Es gibt mehrere Typen von Daten, die Anwendungen anfordern können.

![OAuth-Zugriffsdetails](/assets/images/help/platform/oauth_access_types.png)

{% tip %}

**Tipp:** {% data reusables.user-settings.review_oauth_tokens_tip %}

{% endtip %}

| Datentyp | BESCHREIBUNG |
| --- | --- |
| Commit-Status | Du kannst einer Drittanbieter-Anwendung Zugriff gewähren, um deinen Commit-Status zu melden. Der Zugriff auf den Commit-Status ermöglicht es Anwendungen, zu ermitteln, ob ein Build erfolgreich für einen bestimmten Commit ist. Anwendungen erhalten keinen Zugriff auf deinen Code, <em>können</em> aber Statusinformationen für einen bestimmten Commit lesen und bearbeiten. |
| Bereitstellungen | Der Zugriff auf den Bereitstellungsstatus ermöglicht es Anwendungen zu ermitteln, ob eine Bereitstellung für einen bestimmten Commit für ein Repository erfolgreich ist. Anwendungen erhalten keinen Zugriff auf deinen Code. |
| Gists | Mit [Gist](https://gist.github.com)-Zugriff erhalten Anwendungen {% ifversion not ghae %}sowohl für deine öffentlichen als auch{% else %}sowohl für deine internen als auch{% endif %} geheimen Gists Lese- und Schreibzugriff. |
| Hooks | [Webhooks](/webhooks)-Zugriff ermöglicht Anwendungen das Lesen oder Schreiben von Hook-Konfigurationen in Repositorys, die du verwaltest. |
| Benachrichtigungen | Der Benachrichtungszugriff ermöglicht es Anwendungen, deine {% data variables.product.product_name %}-Benachrichtigungen zu lesen, z. B. Kommentare zu Problemen und Pull Requests. Die Anwendungen können jedoch auf keine Inhalte deiner Repositorys zugreifen. |
| Organisationen und Teams | Mit dem Organisations- und Teamzugriff können Apps auf Organisations- und Teammitglieder zugreifen und sie verwalten. |
| Persönliche Benutzerdaten | Zu Benutzerdaten gehören die Angaben in deinem Benutzerprofil, beispielsweise dein Name, deine E-Mail-Adresse und dein Standort. |
| Repositorys | Repository-Informationen umfassen die Namen der Mitarbeiter, die von Dir erstellten Branches und die effektiven Dateien in deinem Repository. Eine Anwendung kann Zugriff auf alle deine Repositorys aller Sichtbarkeitsebene anfordern. Weitere Informationen findest du unter [Informationen zu Repositorys](/repositories/creating-and-managing-repositories/about-repositories#about-repository-visibility). |
| Repository-Löschung | Anwendungen können die Löschung von Repositorys anfordern, die du verwaltest, aber sie erhalten keinen Zugriff auf deinen Code. |

## Aktualisierte Berechtigungen anfordern

Anwendungen können neue Zugriffsberechtigungen anfordern. Wenn eine Applikation aktualisierte Berechtigungen anfordert, wird sie Dich über die Unterschiede informieren.

![Zugriff von Drittanbieter-Anwendungen ändern](/assets/images/help/platform/oauth_existing_access_pane.png)
