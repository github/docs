---
title: Deinen GitHub-Benutzernamen ändern
intro: 'Du kannst den Benutzernamen für dein Konto unter {% ifversion fpt or ghec %}{% data variables.product.prodname_dotcom_the_website %} ändern{% elsif ghes %}{% data variables.product.product_location %}, wenn deine Instanzen die integrierte Authentifizierung verwenden{% endif %}.'
redirect_from:
  - /articles/how-to-change-your-username
  - /articles/changing-your-github-user-name
  - /articles/renaming-a-user
  - /articles/what-happens-when-i-change-my-username
  - /articles/changing-your-github-username
  - /github/setting-up-and-managing-your-github-user-account/changing-your-github-username
  - /github/setting-up-and-managing-your-github-user-account/managing-user-account-settings/changing-your-github-username
  - /account-and-profile/setting-up-and-managing-your-github-user-account/managing-user-account-settings/changing-your-github-username
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
topics:
  - Accounts
shortTitle: Change your username
ms.openlocfilehash: 28f4d0ea1a16fed0e44f34312abfd507e2f991b7
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/05/2022
ms.locfileid: '145164964'
---
{% ifversion ghec or ghes %}

{% note %}

{% ifversion ghec %}

**Hinweis**: Bei Mitgliederneines {% data variables.product.prodname_emu_enterprise %} kann der Benutzername nicht geändert werden. Der IdP-Administrator deines Unternehmens kontrolliert deinen Benutzernamen für {% data variables.product.product_name %}. Weitere Informationen findest du unter [Informationen zu {% data variables.product.prodname_emus %}](/admin/authentication/managing-your-enterprise-users-with-your-identity-provider/about-enterprise-managed-users).

{% elsif ghes %}

**Hinweis**: Wenn du Dich bei {% data variables.product.product_location %} mit LDAP-Anmeldeinformationen oder Single Sign-On (SSO) anmeldest, kann nur dein lokaler Administrator deinen Benutzernamen ändern. Weitere Informationen zu Authentifizierungsmethoden für {% data variables.product.product_name %} findest du unter "[Authentifizieren von Benutzern für {% data variables.product.product_location %}](/admin/authentication/authenticating-users-for-your-github-enterprise-server-instance)".

{% endif %}

{% endnote %}

{% endif %}

## Informationen zu Änderungen des Benutzernamens

Du kannst deinen Benutzernamen in einen anderen Benutzernamen ändern, der derzeit nicht verwendet wird.{% ifversion fpt or ghec %} Wenn der gewünschte Benutzername nicht verfügbar ist, solltest du andere Namen oder eindeutige Variationen in Erwägung ziehen. Die Verwendung einer Zahl, eines Bindestrichs oder einer alternativen Schreibweise kann dazu beitragen, dass du einen ähnlichen, noch verfügbaren Benutzernamen findest.

Wenn du eine Marke für den Benutzernamen besitzt, findest du weitere Informationen zum Erstellen einer Markenbeschwerde auf unserer Seite "[Markenrichtlinien](/free-pro-team@latest/github/site-policy/github-trademark-policy)". 

Wenn du keine Marke für den Namen hältst, kannst du einen anderen Benutzernamen auswählen oder deinen aktuellen Benutzernamen beibehalten. {% data variables.contact.github_support %} kann den für dich nicht verfügbaren Benutzernamen nicht freigeben. Weitere Informationen findest du unter "[Ändern deines Benutzernamens](#changing-your-username)".{% endif %}

Wenn du deinen Benutzernamen geändert hast, steht dein alter Benutzername wieder der Allgemeinheit zur Verfügung. Die meisten Verweise auf deine Repositorys unter dem alten Benutzernamen werden automatisch in den neuen Benutzernamen geändert. Einige Links auf dein Profil werden jedoch nicht automatisch weitergeleitet.

Für Folgendes kann {% data variables.product.product_name %} keine Weiterleitungen einrichten:
- [@mentions](/articles/basic-writing-and-formatting-syntax/#mentioning-people-and-teams) Verwenden deines alten Benutzernamens
- Links zu [Gists](/articles/creating-gists), die deinen alten Benutzernamen enthalten

{% ifversion fpt or ghec %} 

Wenn du Mitglied eines {% data variables.product.prodname_emu_enterprise %} bist, kannst du keine Änderungen an deinem Benutzernamen vornehmen. {% data reusables.enterprise-accounts.emu-more-info-account %}

{% endif %}

## Repository-Verweise

Wenn du deinen Benutzernamen geändert hast, leitet {% data variables.product.product_name %} Verweise auf deine Repositorys automatisch weiter.
- Weblinks zu deinen vorhandenen Repositorys funktionieren auch weiterhin. Dieser Vorgang kann einige Minuten dauern, nachdem du die Änderung vorgenommen hast.
- Befehlszeilen-Pushes von deinen lokalen Repository-Klonen zu den alten Remote-Tracking-URLs funktionieren auch weiterhin.

Wenn der neue Inhaber deines alten Benutzernamens ein Repository mit demselben Namen wie dein Repository erstellt, wird der Weiterleitungseintrag überschrieben und deine Weiterleitung wird nicht mehr funktionieren. Angesichts dieser Möglichkeit empfehlen wir Dir, alle vorhandenen Remote-Repository-URLs nach dem Ändern deines Benutzernamens zu aktualisieren. Weitere Informationen findest du unter [Verwalten von Remoterepositorys](/github/getting-started-with-github/managing-remote-repositories).

## Links zu früheren Profilseiten

Nach dem Ändern deines Benutzernamens geben Links zu deiner vorherigen Profilseite, wie z. B. `https://{% data variables.command_line.backticks %}/previoususername`, den Fehler 404 zurück. Wir empfehlen, alle Links zu deinem Konto auf {% data variables.product.product_location %} von einem anderen Ort{% ifversion fpt or ghec %}, z. B. von deinem LinkedIn- oder Twitter-Profil{% endif %} zu aktualisieren.

## Deine Git-Commits

{% ifversion fpt or ghec %}Git-Commits, die mit deiner durch {% data variables.product.product_name %} bereitgestellten `noreply` E-Mail-Adresse verbunden sind, werden deinem neuen Benutzernamen nicht zugewiesen und nicht in deinem Beitragsdiagramm angezeigt.{% endif %} Wenn deine Git-Commits mit einer anderen E-Mail-Adresse verbunden sind, die du [Deinem GitHub-Konto hinzugefügt hast](/articles/adding-an-email-address-to-your-github-account), {% ifversion fpt or ghec %}wie z. B. die ID-basierte, von {% data variables.product.product_name %} bereitgestellte `noreply` E-Mail-Adresse, {% endif %}werden sie Dir weiterhin zugewiesen und in deinem Beitragsdiagramm angezeigt, nachdem du deinen Benutzernamen geändert hast. Weitere Informationen zum Festlegen deiner E-Mail-Adresse findest du unter "[Festlegen deiner Commit-E-Mail-Adresse](/articles/setting-your-commit-email-address)".

## Deinen Benutzernamen ändern

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.account_settings %}
3. Klicke im Abschnitt "Change username" (Benutzername ändern) auf **Change username** (Benutzername ändern).
   ![Schaltfläche "Change Username" (Benutzername ändern)](/assets/images/help/settings/settings-change-username.png){% ifversion fpt or ghec %}
4. Lies die Warnungen in Bezug auf das Ändern deines Benutzernamens. Falls du deinen Benutzernamen dennoch ändern möchtest, klicke auf **I understand, let's change my username** (Ich habe verstanden, meinen Benutzernamen ändern).
   ![Warnschaltfläche zur Änderung des Benutzernamens](/assets/images/help/settings/settings-change-username-warning-button.png)
5. Gib einen neuen Benutzernamen ein.
   ![Feld für den neuen Benutzernamen](/assets/images/help/settings/settings-change-username-enter-new-username.png)
6. Falls der gewünschte Benutzername verfügbar ist, klicke auf **Change my username** (Meinen Benutzernamen ändern). Falls der gewünschte Benutzername nicht verfügbar ist, kannst du versuchen, einen anderen Benutzernamen oder einen der angezeigten Vorschläge zu verwenden.
   ![Schaltfläche mit Warnung zur Änderung des Benutzernamens](/assets/images/help/settings/settings-change-my-username-button.png) {% endif %}

## Weiterführende Themen

- "[Warum sind meine Commits mit dem falschen Benutzer verknüpft?](/pull-requests/committing-changes-to-your-project/troubleshooting-commits/why-are-my-commits-linked-to-the-wrong-user)" {% ifversion fpt or ghec %}
- "[{% data variables.product.prodname_dotcom %} Username Policy](/free-pro-team@latest/github/site-policy/github-username-policy)"{% endif %}
