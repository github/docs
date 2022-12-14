---
title: Deinen GitHub-Benutzernamen ändern
intro: You can change the username for your account on {% ifversion fpt or ghec %}{% data variables.product.prodname_dotcom_the_website %}{% elsif ghes %}{% data variables.product.product_location %} if your instance uses built-in authentication{% endif %}.
redirect_from:
- /articles/how-to-change-your-username
- /articles/changing-your-github-user-name
- /articles/renaming-a-user
- /articles/what-happens-when-i-change-my-username
- /articles/changing-your-github-username
- /github/setting-up-and-managing-your-github-user-account/changing-your-github-username
- /github/setting-up-and-managing-your-github-user-account/managing-user-account-settings/changing-your-github-username
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
topics:
- Accounts
shortTitle: Change your username
ms.openlocfilehash: 30139a0dab508f1e8db0f33174d6e25ec28afef4
ms.sourcegitcommit: 67064b14c9d4d18819db8f6398358b77a1c8002a
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 05/17/2022
ms.locfileid: "145090066"
---
{% ifversion ghec or ghes %}

{% note %}

{% ifversion ghec %}

**Hinweis**: Bei Mitgliederneines {% data variables.product.prodname_emu_enterprise %} kann der Benutzername nicht geändert werden. Der IdP-Administrator Deines Unternehmens kontrolliert Deinen Benutzernamen für {% data variables.product.product_name %}. Weitere Informationen findest Du unter [Informationen zu {% data variables.product.prodname_emus %}](/admin/authentication/managing-your-enterprise-users-with-your-identity-provider/about-enterprise-managed-users).

{% elsif ghes %}

**Hinweis**: Wenn Du Dich bei {% data variables.product.product_location %} mit LDAP-Anmeldeinformationen oder Single Sign-On (SSO) anmeldest, kann nur Dein lokaler Administrator Deinen Benutzernamen ändern. Weitere Informationen zu Authentifizierungsmethoden für {% data variables.product.product_name %} findest Du unter "[Authentifizieren von Benutzern für {% data variables.product.product_location %}](/admin/authentication/authenticating-users-for-your-github-enterprise-server-instance)".

{% endif %}

{% endnote %}

{% endif %}

## <a name="about-username-changes"></a>Informationen zu Änderungen des Benutzernamens

Du kannst Deinen Benutzernamen in einen anderen Benutzernamen ändern, der derzeit nicht verwendet wird.{% ifversion fpt or ghec %} Wenn der gewünschte Benutzername nicht verfügbar ist, solltest Du andere Namen oder eindeutige Variationen in Erwägung ziehen. Die Verwendung einer Zahl, eines Bindestrichs oder einer alternativen Schreibweise kann dazu beitragen, dass Du einen ähnlichen, noch verfügbaren Benutzernamen findest.

Wenn Du eine Marke für den Benutzernamen besitzt, findest Du weitere Informationen zum Erstellen einer Markenbeschwerde auf unserer Seite "[Markenrichtlinien](/free-pro-team@latest/github/site-policy/github-trademark-policy)". 

Wenn Du keine Marke für den Namen hältst, kannst Du einen anderen Benutzernamen auswählen oder Deinen aktuellen Benutzernamen beibehalten. {% data variables.contact.github_support %} kann den für dich nicht verfügbaren Benutzernamen nicht freigeben. Weitere Informationen findest Du unter "[Ändern Deines Benutzernamens](#changing-your-username)".{% endif %}

Wenn Du Deinen Benutzernamen geändert hast, steht Dein alter Benutzername wieder der Allgemeinheit zur Verfügung. Die meisten Verweise auf Deine Repositorys unter dem alten Benutzernamen werden automatisch in den neuen Benutzernamen geändert. Einige Links auf Dein Profil werden jedoch nicht automatisch weitergeleitet.

Für Folgendes kann {% data variables.product.product_name %} keine Weiterleitungen einrichten:
- [@mentions](/articles/basic-writing-and-formatting-syntax/#mentioning-people-and-teams) Verwenden Deines alten Benutzernamens
- Links zu [Gists](/articles/creating-gists), die Deinen alten Benutzernamen enthalten

{% ifversion fpt or ghec %} 

Wenn Du Mitglied eines {% data variables.product.prodname_emu_enterprise %} bist, kannst Du keine Änderungen an Deinem Benutzernamen vornehmen. {% data reusables.enterprise-accounts.emu-more-info-account %}

{% endif %}

## <a name="repository-references"></a>Repository-Verweise

Wenn Du Deinen Benutzernamen geändert hast, leitet {% data variables.product.product_name %} Verweise auf Deine Repositorys automatisch weiter.
- Weblinks zu Deinen vorhandenen Repositorys funktionieren auch weiterhin. Dieser Vorgang kann einige Minuten dauern, nachdem Du die Änderung vorgenommen hast.
- Befehlszeilen-Pushes von Deinen lokalen Repository-Klonen zu den alten Remote-Tracking-URLs funktionieren auch weiterhin.

Wenn der neue Inhaber Deines alten Benutzernamens ein Repository mit demselben Namen wie Dein Repository erstellt, wird der Weiterleitungseintrag überschrieben und Deine Weiterleitung wird nicht mehr funktionieren. Angesichts dieser Möglichkeit empfehlen wir Dir, alle vorhandenen Remote-Repository-URLs nach dem Ändern Deines Benutzernamens zu aktualisieren. Weitere Informationen findest du unter [Verwalten von Remoterepositorys](/github/getting-started-with-github/managing-remote-repositories).

## <a name="links-to-your-previous-profile-page"></a>Links zu früheren Profilseiten

Nach dem Ändern Deines Benutzernamens geben Links zu Deiner vorherigen Profilseite, wie z. B. `https://{% data variables.command_line.backticks %}/previoususername`, den Fehler 404 zurück. Wir empfehlen, alle Links zu Deinem Konto auf {% data variables.product.product_location %} von einem anderen Ort{% ifversion fpt or ghec %}, z. B. von Deinem LinkedIn- oder Twitter-Profil{% endif %} zu aktualisieren.

## <a name="your-git-commits"></a>Deine Git-Commits

{% ifversion fpt or ghec %}Git-Commits, die mit Deiner durch {% data variables.product.product_name %} bereitgestellten `noreply` E-Mail-Adresse verbunden sind, werden Deinem neuen Benutzernamen nicht zugewiesen und nicht in Deinem Beitragsdiagramm angezeigt.{% endif %} Wenn Deine Git-Commits mit einer anderen E-Mail-Adresse verbunden sind, die Du [Deinem GitHub-Konto hinzugefügt hast](/articles/adding-an-email-address-to-your-github-account), {% ifversion fpt or ghec %}wie z. B. die ID-basierte, von {% data variables.product.product_name %} bereitgestellte `noreply` E-Mail-Adresse, {% endif %}werden sie Dir weiterhin zugewiesen und in Deinem Beitragsdiagramm angezeigt, nachdem Du Deinen Benutzernamen geändert hast. Weitere Informationen zum Festlegen Deiner E-Mail-Adresse findest Du unter "[Festlegen Deiner Commit-E-Mail-Adresse](/articles/setting-your-commit-email-address)".

## <a name="changing-your-username"></a>Deinen Benutzernamen ändern

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.account_settings %}
3. Klicke im Abschnitt "Change username" (Benutzername ändern) auf **Change username** (Benutzername ändern).
   ![Schaltfläche "Change Username" (Benutzername ändern)](/assets/images/help/settings/settings-change-username.png){% ifversion fpt or ghec %}
4. Lies die Warnungen in Bezug auf das Ändern Deines Benutzernamens. Falls Du Deinen Benutzernamen dennoch ändern möchtest, klicke auf **I understand, let's change my username** (Ich habe verstanden, meinen Benutzernamen ändern).
   ![Warnschaltfläche zur Änderung des Benutzernamens](/assets/images/help/settings/settings-change-username-warning-button.png)
5. Gib einen neuen Benutzernamen ein.
   ![Feld für den neuen Benutzernamen](/assets/images/help/settings/settings-change-username-enter-new-username.png)
6. Falls der gewünschte Benutzername verfügbar ist, klicke auf **Change my username** (Meinen Benutzernamen ändern). Falls der gewünschte Benutzername nicht verfügbar ist, kannst Du versuchen, einen anderen Benutzernamen oder einen der angezeigten Vorschläge zu verwenden.
   ![Schaltfläche mit Warnung zur Änderung des Benutzernamens](/assets/images/help/settings/settings-change-my-username-button.png) {% endif %}

## <a name="further-reading"></a>Weiterführende Themen

- "[Warum sind meine Commits mit dem falschen Benutzer verknüpft?](/pull-requests/committing-changes-to-your-project/troubleshooting-commits/why-are-my-commits-linked-to-the-wrong-user)" {% ifversion fpt or ghec %}
- "[{% data variables.product.prodname_dotcom %} Benutzernamenrichtlinie](/free-pro-team@latest/github/site-policy/github-username-policy)"{% endif %}
