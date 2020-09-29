---
title: Informationen zur Authentifizierung mit SAML Single-Sign-On
intro: 'Du kannst auf eine Organisation, die SAML Single Sign-On (SSO) verwendet, zugreifen, indem Du Dich über einen Identitätsanbieter (IdP) authentifizierst. Wenn eine Organisation SAML SSO erzwingt, musst Du Dein persönliches Zugiffstoken oder den SSH-Schlüssel autorisieren, um Dich mit dem API oder mit Git auf der Befehlszeile zu authentifizieren.'
product: '{% data reusables.gated-features.saml-sso %}'
redirect_from:
  - /articles/about-authentication-with-saml-single-sign-on
versions:
  free-pro-team: '*'
---

{% data reusables.saml.dotcom-saml-explanation %} Organisationsinhaber können Dein Benutzerkonto auf {% data variables.product.prodname_dotcom %} einladen, ihrer SAML SSO benutzenden Organisation beizutreten. Das erlaubt Dir, Beiträge zur Organisation zu leisten und Deine bestehende Identität und Beiträge auf {% data variables.product.prodname_dotcom %} zu behalten.

Wenn Du auf Ressourcen innerhalb einer Organisation zugreifst, die SAML SSO verwendet, leitet {% data variables.product.prodname_dotcom %} Dich zur Authentifizierung zum SAML-Identitätsanbieter (IdP) der Organisation weiter. Nachdem Du Dich erfolgreich mit Deinem Konto auf dem IdP authentifiziert hast, leitet Dich der IdP zurück zu {% data variables.product.prodname_dotcom %}, wo Du dann auf die Ressourcen der Organisation zugreifen kannst.

{% data reusables.saml.outside-collaborators-exemption %}

Wenn Du Dich kürzlich mit der SAML IdP Deiner Organisation in Deinem Browser authentifiziert hast, wirst Du automatisch autorisiert, wenn Du auf eine {% data variables.product.prodname_dotcom %}-Organisation zugreifst, die SAML SSO verwendet. Wenn Du Dich nicht kürzlich mit der SAML IdP Deiner Organisation in Deinem Browser authentifiziert hast, musst Du Dich beim SAML IdP authentifizieren, bevor Du auf die Organisation zugreifen kannst.

Du musst Dich regelmäßig bei Deinem SAML IdP authentifizieren, um Dich zu authentifizieren und Zugang zu den Ressourcen der Organisation auf {% data variables.product.prodname_dotcom %} zu erhalten. Die Dauer dieser Anmeldephase wird von Deinem IdP festgelegt und beträgt in der Regel 24 Stunden. Durch diese Verpflichtung zur regelmäßigen Anmeldung wird die Dauer des Zugriffs begrenzt, und Du musst Dich erneut identifizieren, um fortzufahren. Du kannst Deine aktiven SAML-Sitzungen in Deinen Sicherheitseinstellungen anzeigen und verwalten. Weitere Informationen findest Du unter „[Deine aktiven SAML-Sitzungen anzeigen und verwalten](/articles/viewing-and-managing-your-active-saml-sessions).“

Um die API oder Git in der Befehlszeile für den Zugriff auf geschützte Inhalte in einer Organisation mit SAML SSO zu verwenden, musst Du ein autorisiertes persönliches Zugriffstoken über HTTPS oder einen autorisierten SSH-Schlüssel verwenden. {% data variables.product.prodname_oauth_app %}-Zugriffstoken sind standardmäßig autorisiert.

Wenn Du kein persönliches Zugriffstoken oder keinen SSH-Schlüssel hast, kannst Du ein persönliches Zugriffstoken für die Befehlszeile erstellen oder einen neuen SSH-Schlüssel generieren. For more information, see "[Creating a personal access token](/github/authenticating-to-github/creating-a-personal-access-token)" or "[Generating a new SSH key and adding it to the ssh-agent](/articles/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent)."

Um ein neues oder vorhandenes persönliches Zugriffstoken oder einen SSH-Schlüssel in einer Organisation zu verwenden, die SAML SSO erzwingt, musst Du das Token autorisieren oder den SSH-Schlüssel für die Verwendung bei einer SAML SSO-Organisation autorisieren. Weitere Informationen findest Du unter „[Autorisieren eines persönlichen Zugriffstokens für die Benutzung mit SAML Single Sign-On](/articles/authorizing-a-personal-access-token-for-use-with-saml-single-sign-on)" oder „[Autorisieren eines SSH-Schlüssels für die Benutzung mit SAML Single Sign-On](/articles/authorizing-an-ssh-key-for-use-with-saml-single-sign-on)."

Du musst eine aktive SAML-Sitzung haben, wenn Du eine {% data variables.product.prodname_oauth_app %} autorisierst.

### Weiterführende Informationen

- „[Über Identitäts- und Zugriffs-Management mit SAML Single Sign-On](/github/setting-up-and-managing-organizations-and-teams/about-identity-and-access-management-with-saml-single-sign-on)"
