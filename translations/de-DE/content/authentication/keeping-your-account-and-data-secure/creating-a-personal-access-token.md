---
title: Erstellen eines persönlichen Zugriffstokens
intro: 'Du kannst ein {% data variables.product.pat_generic %} erstellen, das anstelle eines Kennworts mit der Befehlszeile oder der API verwendet wird.'
redirect_from:
  - /articles/creating-an-oauth-token-for-command-line-use
  - /articles/creating-an-access-token-for-command-line-use
  - /articles/creating-a-personal-access-token-for-the-command-line
  - /github/authenticating-to-github/creating-a-personal-access-token-for-the-command-line
  - /github/authenticating-to-github/creating-a-personal-access-token
  - /github/authenticating-to-github/keeping-your-account-and-data-secure/creating-a-personal-access-token
  - /github/extending-github/git-automation-with-oauth-tokens
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Identity
  - Access management
shortTitle: 'Create a {% data variables.product.pat_generic %}'
ms.openlocfilehash: 78928110c7a8861a9c13d093799454f945eaaf2c
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 10/25/2022
ms.locfileid: '148107749'
---
{% warning %}

**Warnung**: Behandle deine Zugriffstoken wie Kennwörter.

Um über die Befehlszeile auf {% data variables.product.company_short %} zuzugreifen, solltest du {% data variables.product.prodname_cli %} oder [Git Credential Manager](https://github.com/GitCredentialManager/git-credential-manager/blob/main/README.md) verwenden, anstatt ein {% data variables.product.pat_generic %} zu erstellen.

Wenn du ein {% data variables.product.pat_generic %} in einem Skript verwendest, solltest du dein Token als Geheimnis speichern und das Skript über {% data variables.product.prodname_actions %} ausführen. Weitere Informationen findest du unter [Verschlüsselte Geheimnisse](/actions/security-guides/encrypted-secrets).{%- ifversion ghec or fpt %}Du kannst dein Token auch als {% data variables.product.prodname_codespaces %}-Geheimnis speichern und dein Skript in {% data variables.product.prodname_codespaces %} ausführen. Weitere Informationen findest du unter [Verwalten verschlüsselter Geheimnisse für deine Codespaces](/codespaces/managing-your-codespaces/managing-encrypted-secrets-for-your-codespaces).{% endif %}

Wenn diese Optionen nicht verfügbar sind, solltest du einen anderen Dienst wie zum Beispiel die [1Password CLI](https://developer.1password.com/docs/cli/secret-references/) nutzen, um dein Token sicher zu speichern.

{% endwarning %}

## Informationen zu {% data variables.product.pat_generic %}

{% data variables.product.pat_generic_caps %} sind eine Alternative zur Verwendung von Kennwörtern für die Authentifizierung bei {% data variables.product.product_name %} über die [GitHub-API](/rest/overview/other-authentication-methods#via-oauth-and-personal-access-tokens) oder die [Befehlszeile](#using-a-token-on-the-command-line). {% data variables.product.pat_generic_caps %} sind für den Zugriff auf {% data variables.product.company_short %}-Ressourcen in deinem Namen vorgesehen. Für den Zugriff auf Ressourcen im Auftrag einer Organisation oder für langfristige Integrationen sollte eine {% data variables.product.prodname_github_app %} verwendet werden. Weitere Informationen findest du unter [Informationen zu Apps](/developers/apps/getting-started-with-apps/about-apps).

{% ifversion pat-v2 %}

{% data variables.product.company_short %} unterstützt derzeit zwei Arten von {% data variables.product.pat_generic %}: {% data variables.product.pat_v2 %} und {% data variables.product.pat_v1_plural %}. {% data variables.product.company_short %} empfiehlt, nach Möglichkeit {% data variables.product.pat_v2 %} anstelle von {% data variables.product.pat_v1_plural %} zu verwenden. {% data variables.product.pat_v2_caps %} hat gegenüber {% data variables.product.pat_v1_plural %} einige Sicherheitsvorteile:

- Jedes Token kann nur auf Ressourcen zugreifen, die einem oder einer einzelnen Benutzer*in oder einer Organisation gehören.
- Jedes Token kann nur auf bestimmte Repositorys zugreifen.
- Jedes Token erhält bestimmte Berechtigungen, die mehr Kontrolle bieten als die Berechtigungen, die {% data variables.product.pat_v1_plural %} erteilt werden.
- Jedes Token muss über ein Ablaufdatum verfügen.
- Organisationsinhaber*innen können die Genehmigung für alle {% data variables.product.pat_v2 %} erzwingen, die auf Ressourcen in der Organisation zugreifen können.{% ifversion ghec or ghes or ghae %}
- Unternehmensinhaber*innen können die Genehmigung für alle {% data variables.product.pat_v2 %} erzwingen, die auf Ressourcen in der Organisation zugreifen können, die dem Unternehmen gehören.{% endif %}

Darüber hinaus können Organisationsinhaber*innen den Zugriff auf {% data variables.product.pat_v1 %} auf ihre Organisation beschränken{% ifversion ghec or ghes or ghae %}, und Unternehmensinhaber*innen können den Zugriff auf {% data variables.product.pat_v1 %} auf das Unternehmen oder die Organisation beschränken, die dem Unternehmen gehört{% endif %}.

{% data reusables.user-settings.patv2-limitations %}

{% endif %}

{% ifversion fpt or ghec %}{% data reusables.user-settings.removes-personal-access-tokens %}{% endif %}

{% ifversion pat-v2 %}

## Erstellen eines {% data variables.product.pat_v2 %}

{% note %}

**Hinweis**: {% data reusables.user-settings.pat-v2-beta %}

{% endnote %}

{% ifversion fpt or ghec %}1. [Verifiziere deine E-Mail-Adresse](/github/getting-started-with-github/verifying-your-email-address), falls du das noch nicht getan hast.{% endif %} {% data reusables.user-settings.access_settings %} {% data reusables.user-settings.developer_settings %}
1. Klicke in der linken Randleiste unter **{% octicon "key" aria-label="The key icon" %} {% data variables.product.pat_generic_caps %}** auf **Differenzierte Token**.
1. Klicken Sie auf **Neues Token generieren**.
1. Gib optional unter **Tokenname** einen Namen für das Token ein.
1. Wählen unter **Ablauf** ein Ablaufdatum für das Token aus.
1. Füge optional unter **Beschreibung** eine Notiz hinzu, um den Zweck des Token zu beschreiben.
1. Wähle unter **Ressourcenbesitzer** eine*n Ressourcenbesitzer*in aus. Das Token kann nur auf Ressourcen zugreifen, die dem oder der ausgewählten Ressourcenbesitzer*in gehören. Organisationen, bei denen du Mitglied bist, werden nicht angezeigt, es sei denn, die Organisation hat {% data variables.product.pat_v2 %} aktiviert. Weitere Informationen findest du unter [Festlegen einer {% data variables.product.pat_generic %}-Richtlinie für deine Organisation](/organizations/managing-programmatic-access-to-your-organization/setting-a-personal-access-token-policy-for-your-organization).{% ifversion ghec or ghae %} Möglicherweise ist ein SSO-Vorgang (Einmaliges Anmelden) erforderlich, wenn deine Organisation diesen vorschreibt und du noch keine aktive SAML-Sitzung hast.{% endif %}
1. Wenn der Ressourcenbesitzer eine Organisation ist, die eine Genehmigung für {% data variables.product.pat_v2 %} vorschreibt, gib optional im Feld unter „Ressourcenbesitzer“ eine Begründung für die Anforderung ein.
1. Wähle unter **Repositoryzugriff** die gewünschten Repositorys aus, auf die das Token zugreifen soll. Du solltest nur den mindestens erforderlichen Repositoryzugriff für deine Zwecke auswählen. Token haben immer schreibgeschützten Zugriff auf alle öffentlichen Repositorys auf GitHub.
1. Wenn du **Nur ausgewählte Repositorys** im vorherigen Schritt ausgewählt hast, wähle im Dropdownmenü **Ausgewählte Repositorys** die Repositorys aus, auf die du zugreifen möchtest.
1. Wähle unter **Berechtigungen** aus, welche Berechtigungen dem Token erteilt werden sollen. Je nachdem, welche*n Ressourcenbesitzer*in und welchen Repositoryzugriff du angegeben hast, gibt es Repository-, Organisations- und Kontoberechtigungen. Du solltest nur die mindestens erforderlichen Berechtigungen für deine Zwecke auswählen. Weitere Informationen dazu, welche Berechtigungen für die unterschiedlichen REST-API-Vorgänge erforderlich sind, findest du unter [Erforderliche Berechtigungen für {% data variables.product.pat_v2 %}](/rest/overview/permissions-required-for-fine-grained-personal-access-tokens).
1. Klicke dann auf **Token generieren**.

Wenn du eine Organisation als Ressourcenbesitzer ausgewählt hast und die Organisation eine Genehmigung für {% data variables.product.pat_v2 %} vorschreibt, wird dein Token bis zur Überprüfung durch eine*n Organisationsadministrator*in mit `pending` gekennzeichnet. Bis zur Genehmigung kann dein Token nur öffentliche Ressourcen lesen. Wenn du ein*e Inhaber*in der Organisation bist, wird deine Anforderung automatisch genehmigt. Weitere Informationen findest du unter [Überprüfen und Widerrufen von {% data variables.product.pat_generic %} in deiner Organisation](/organizations/managing-programmatic-access-to-your-organization/reviewing-and-revoking-personal-access-tokens-in-your-organization).

{% endif %}

## Erstellen eines {% data variables.product.pat_v1 %}

{% ifversion pat-v2 %}

{% note %}

**Hinweis**: Organisationsinhaber*innen können den Zugriff auf {% data variables.product.pat_v1 %} auf ihre Organisation beschränken. Wenn du versuchst, ein {% data variables.product.pat_v1 %} für den Zugriff auf Ressourcen in einer Organisation zu verwenden, die den Zugriff mit {% data variables.product.pat_v1 %} deaktiviert hat, wird bei deiner Anforderung die Fehlermeldung 403 angezeigt. Du musst stattdessen eine {% data variables.product.prodname_github_app %}, {% data variables.product.prodname_oauth_app %} oder ein {% data variables.product.pat_v2 %} verwenden.

{% endnote %}

{% endif %}

{% ifversion pat-v2 %}

{% warning %}

**Hinweis**: Dein {% data variables.product.pat_v1 %} kann auf alle Repositorys zugreifen, auf die du Zugriff hast. {% data variables.product.company_short %} empfiehlt, stattdessen nach Möglichkeit {% data variables.product.pat_v2 %} zu verwenden. Diese können auf bestimmte Repositorys beschränkt werden. {% data variables.product.pat_v2_caps %} ermöglichen es dir auch, präzise Berechtigungen anstelle eines allgemeinen Spektrums anzugeben.

{% endwarning %}

{% endif %}

{% ifversion fpt or ghec %}1. [Verifiziere deine E-Mail-Adresse](/github/getting-started-with-github/verifying-your-email-address), falls du das noch nicht getan hast.{% endif %} {% data reusables.user-settings.access_settings %} {% data reusables.user-settings.developer_settings %} {% ifversion pat-v2 %}1. Klicke in der linken Randleiste unter **{% octicon "key" aria-label="The key icon" %} {% data variables.product.pat_generic_caps %}** auf **Token (klassisch)** .{% else %}{% data reusables.user-settings.personal_access_tokens %}{% endif %} {% ifversion pat-v2%}1. Wähle **Neues Token generieren** aus, und klicke dann auf **Neues Token generieren (klassisch)** .{% else %}{% data reusables.user-settings.generate_new_token %}{% endif %}
5. Gib dem Token einen beschreibenden Namen.
   ![Feld „Tokenbeschreibung“](/assets/images/help/settings/token_description.png)
6. Wenn du für dein Token eine Ablaufzeit festlegen möchtest, wähle das Dropdownmenü **Ablauf** aus, und klicke dann auf eine Standardeinstellung, oder verwende die Kalenderauswahl.
   ![Feld „Tokenablauf“](/assets/images/help/settings/token_expiration.png)
7. Wähle die Berechtigungen aus, die du diesem Token erteilen möchtest. Um das Token für den Zugriff auf Repositorys über die Befehlszeile zu verwenden, wähle **Repository** aus. Ein Token ohne zugewiesene Bereiche kann nur auf öffentliche Informationen zugreifen. Weitere Informationen findest du unter [Verfügbare Bereiche](/apps/building-oauth-apps/scopes-for-oauth-apps#available-scopes).
   {% ifversion fpt or ghes or ghec %} ![Auswählen von Tokenbereichen](/assets/images/help/settings/token_scopes.gif) {% elsif ghae %} ![Auswählen von Tokenbereichen](/assets/images/enterprise/github-ae/settings/access-token-scopes-for-ghae.png) {% endif %}
8. Klicke dann auf **Token generieren**.
   ![Schaltfläche „Token generieren“](/assets/images/help/settings/generate_token.png) {% ifversion fpt or ghec %} ![Neu erstelltes Token](/assets/images/help/settings/personal_access_tokens.png) {% elsif ghes or ghae %} ![Neu erstelltes Token](/assets/images/help/settings/personal_access_tokens_ghe.png) {% else %} ![Neu erstelltes Token](/assets/images/help/settings/personal_access_tokens_ghe_legacy.png){% endif %}{% ifversion fpt or ghec %}
1. Um dein Token für den Zugriff auf Ressourcen im Besitz einer Organisation zu verwenden, die SAML Single Sign-On nutzt, autorisiere das Token. Weitere Informationen findest du unter [Autorisieren eines {% data variables.product.pat_generic %} für die Verwendung mit SAML Single Sign-On](/enterprise-cloud@latest/authentication/authenticating-with-saml-single-sign-on/authorizing-a-personal-access-token-for-use-with-saml-single-sign-on){% ifversion fpt %} in der {% data variables.product.prodname_ghe_cloud %}-Dokumentation.{% else %}.{% endif %}{% endif %}

## Ein Token in der Befehlszeile verwenden

{% data reusables.command_line.providing-token-as-password %}

{% data variables.product.pat_generic_caps %} können nur für Git-Vorgänge mit HTTPS verwendet werden. Wenn dein Repository eine SSH-Remote-URL verwendet, musst du [das Remoterepository von SSH auf HTTPS umstellen](/github/getting-started-with-github/managing-remote-repositories/#switching-remote-urls-from-ssh-to-https).

Wenn du nicht nach einem Benutzernamen und einem Passwort gefragt wirst, wurden deine Anmeldeinformationen möglicherweise auf deinem Computer zwischengespeichert. Du kannst [deine Anmeldeinformationen in der Keychain aktualisieren](/github/getting-started-with-github/updating-credentials-from-the-macos-keychain), um das alte Kennwort durch das Token zu ersetzen.

Statt dein {% data variables.product.pat_generic %} manuell bei jedem Git-Vorgang mit HTTPS einzugeben, kannst du dein {% data variables.product.pat_generic %} bei einem Git-Client zwischenspeichern. Git speichert deine Anmeldeinformationen vorübergehend im Arbeitsspeicher, bis ein Ablaufintervall abgelaufen ist. Du kannst das Token auch in einer Nur-Textdatei speichern, die Git vor jeder Anforderung lesen kann. Weitere Informationen findest du unter [Zwischenspeichern deiner {% data variables.product.prodname_dotcom %}-Anmeldeinformationen in Git](/github/getting-started-with-github/caching-your-github-credentials-in-git).

## Weitere Informationsquellen

- [Informationen zur Authentifizierung für GitHub](/github/authenticating-to-github/about-authentication-to-github)
- [Tokenablauf und -widerruf](/github/authenticating-to-github/keeping-your-account-and-data-secure/token-expiration-and-revocation)
