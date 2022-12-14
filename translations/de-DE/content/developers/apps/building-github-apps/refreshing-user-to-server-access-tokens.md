---
title: Aktualisieren von Benutzer-zu-Server-Token
intro: 'Um eine regelmäßige Tokenrotation zu erzwingen und die Auswirkungen eines kompromittierten Token zu verringern, kannst du deine {% data variables.product.prodname_github_app %} so konfigurieren, dass ablaufende Benutzerzugriffstoken verwendet werden.'
redirect_from:
  - /apps/building-github-apps/refreshing-user-to-server-access-tokens
  - /developers/apps/refreshing-user-to-server-access-tokens
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - GitHub Apps
shortTitle: Refresh user-to-server access
ms.openlocfilehash: a288fcdd7eca423c9087a1a8ca4948e043de645b
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/05/2022
ms.locfileid: '147064410'
---
{% data reusables.pre-release-program.expiring-user-access-tokens %}

## Informationen zu ablaufenden Benutzerzugriffstoken

Um eine regelmäßige Tokenrotation zu erzwingen und die Auswirkungen eines kompromittierten Token zu verringern, kannst du deine {% data variables.product.prodname_github_app %} so konfigurieren, dass ablaufende Benutzerzugriffstoken verwendet werden. Weitere Informationen zum Erstellen von Benutzer-zu-Server-Anforderungen findest du unter [Identifizieren und Autorisieren von Benutzer*innen für GitHub-Apps](/apps/building-github-apps/identifying-and-authorizing-users-for-github-apps/).

Ablaufende Benutzertoken laufen nach 8 Stunden ab. Wenn du ein neues Benutzer-zu-Server-Zugriffstoken erhältst, enthält die Antwort auch ein Aktualisierungstoken, das gegen ein neues Benutzertoken und ein Aktualisierungstoken getauscht werden kann. Aktualisierungstoken sind 6 Monate gültig. 

## Erneuern eines Benutzertokens mit einem Aktualisierungstoken

Um ein ablaufendes Benutzer-zu-Server-Zugriffstoken zu erneuern, kannst du das `refresh_token` gegen ein neues Zugriffstoken und `refresh_token` tauschen.

  `POST https://github.com/login/oauth/access_token`

Durch diese Rückrufanforderung wird dir ein neues Zugriffstoken und ein neues Aktualisierungstoken gesendet.  Diese Rückrufanforderung ähnelt der OAuth-Anforderung, die du zum Tauschen eines temporären `code` gegen ein Zugriffstoken verwenden kannst. Weitere Informationen findest du unter [Identifizieren und Autorisieren von Benutzer*innen für GitHub-Apps](/apps/building-github-apps/identifying-and-authorizing-users-for-github-apps/#2-users-are-redirected-back-to-your-site-by-github) und [Grundlagen der Authentifizierung](/rest/guides/basics-of-authentication#providing-a-callback).

### Parameter

Name | type | BESCHREIBUNG
-----|------|------------
`refresh_token` | `string` | **Erforderlich.** Das Token, das generiert wird, wenn der oder die Besitzer*in der {% data variables.product.prodname_github_app %} ablaufende Token aktiviert und ein neues Benutzerzugriffstoken ausgibt
`grant_type` | `string` | **Erforderlich.** Wert muss `refresh_token` sein (von der OAuth-Spezifikation benötigt)
`client_id` | `string` | **Erforderlich.** Die Client-ID für deine {% data variables.product.prodname_github_app %}
`client_secret` | `string`   | **Erforderlich.** Der geheime Clientschlüssel für deine {% data variables.product.prodname_github_app %}

### Antwort

```json
{
  "access_token": "ghu_16C7e42F292c6912E7710c838347Ae178B4a",
  "expires_in": "28800",
  "refresh_token": "ghr_1B4a2e77838347a7E420ce178F2E7c6912E169246c34E1ccbF66C46812d16D5B1A9Dc86A1498",
  "refresh_token_expires_in": "15811200",
  "scope": "",
  "token_type": "bearer"
}
```
## Konfigurieren von ablaufenden Benutzertoken für eine vorhandene GitHub-App

Du kannst ablaufende Benutzer-zu-Server-Autorisierungstoken in den Einstellungen deiner {% data variables.product.prodname_github_app %} aktivieren oder deaktivieren.

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.developer_settings %} {% data reusables.user-settings.github_apps %}
4. Klicke neben deiner ausgewählten {% data variables.product.prodname_github_app %} auf **Bearbeiten**.
  ![Einstellungen zum Bearbeiten einer GitHub-App](/assets/images/github-apps/edit-test-app.png)
5. Klicke auf der linken Randleiste auf **Optionale Features**.
   ![Registerkarte „Optionale Features“](/assets/images/github-apps/optional-features-option.png) 
6. Klicke neben „Ablauf von Benutzer-zu-Server-Token“ auf **Anmelden** oder **Abmelden**. Es kann einige Sekunden dauern, bis die Einstellung angewendet wird.

## Abmelden von ablaufenden Token für neue GitHub-Apps

Wenn du eine neue {% data variables.product.prodname_github_app %} erstellst, verwendet deine App standardmäßig ablaufende Benutzer-zu-Server-Zugriffstoken.

Wenn deine App keine ablaufenden Benutzer-zu-Server-Zugriffstoken verwenden soll, kannst du das Kontrollkästchen „Benutzerautorisierungstoken ablaufen lassen“ in den Einstellungen der App deaktivieren.

![Option zum Anmelden zu ablaufenden Benutzertoken beim Einrichten von GitHub-Apps](/assets/images/github-apps/expire-user-tokens-selection.png)

Vorhandene {% data variables.product.prodname_github_apps %}, die Benutzer-zu-Server-Autorisierungstoken verwenden, sind von diesem neuen Flow nur dann betroffen, wenn der oder die App-Besitzer*in das ablaufende Benutzertoken für die App aktiviert.

Wenn du ablaufende Benutzertoken für vorhandene {% data variables.product.prodname_github_apps %} aktivieren möchtest, musst du die Benutzer*innen durch den OAuth-Flow schicken, um neue Benutzertoken auszugeben, die nach 8 Stunden ablaufen. Des Weiteren musst du eine Anforderung mit dem Aktualisierungstoken vornehmen, um ein neues Zugriffstoken und ein neues Aktualisierungstoken abzurufen. Weitere Informationen findest du unter [Identifizieren und Autorisieren von Benutzer*innen für GitHub-Apps](/apps/building-github-apps/identifying-and-authorizing-users-for-github-apps/).

## Weiterführende Themen

- [Informationen zur Authentifizierung in {% data variables.product.prodname_dotcom %}](/github/authenticating-to-github/about-authentication-to-github#githubs-token-formats)

