---
title: Informationen zur Authentifizierung mit SAML Single-Sign-On
intro: 'You can access {% if currentVersion == "github-ae@latest" %}{% data variables.product.product_location %}{% elsif currentVersion == "free-pro-team@latest" %}an organization that uses SAML single sign-on (SSO){% endif %} by authenticating {% if currentVersion == "github-ae@latest" %}with SAML single sign-on (SSO) {% endif %}through an identity provider (IdP).{% if currentVersion == "free-pro-team@latest" %} After you authenticate with the IdP successfully from {% data variables.product.product_name %}, you must authorize any personal access token, SSH key, or {% data variables.product.prodname_oauth_app %} you would like to access the organization''s resources.{% endif %}'
product: '{% data reusables.gated-features.saml-sso %}'
redirect_from:
  - /articles/about-authentication-with-saml-single-sign-on
versions:
  free-pro-team: '*'
  github-ae: '*'
topics:
  - sso
---

### About authentication with SAML SSO

{% if currentVersion == "github-ae@latest" %}

SAML SSO allows an enterprise owner to centrally control and secure access to {% data variables.product.product_name %} from a SAML IdP. When you visit {% data variables.product.product_location %} in a browser, {% data variables.product.product_name %} will redirect you to your IdP to authenticate. After you successfully authenticate with an account on the IdP, the IdP redirects you back to {% data variables.product.product_location %}. {% data variables.product.product_name %} validates the response from your IdP, then grants access.

{% data reusables.saml.you-must-periodically-authenticate %}

If you can't access {% data variables.product.product_name %}, contact your local enterprise owner or administrator for {% data variables.product.product_name %}. You may be able to locate contact information for your enterprise by clicking **Support** at the bottom of any page on {% data variables.product.product_name %}. {% data variables.product.company_short %} and {% data variables.contact.github_support %} do not have access to your IdP, and cannot troubleshoot authentication problems.

{% endif %}

{% if currentVersion == "free-pro-team@latest" %}

{% data reusables.saml.dotcom-saml-explanation %} Organisationsinhaber können Dein Benutzerkonto auf {% data variables.product.prodname_dotcom %} einladen, ihrer SAML SSO benutzenden Organisation beizutreten. Das erlaubt Dir, Beiträge zur Organisation zu leisten und Deine bestehende Identität und Beiträge auf {% data variables.product.prodname_dotcom %} zu behalten.

Wenn Du auf Ressourcen innerhalb einer Organisation zugreifst, die SAML SSO verwendet, leitet {% data variables.product.prodname_dotcom %} Dich zur Authentifizierung zum SAML-Identitätsanbieter (IdP) der Organisation weiter. Nachdem Du Dich erfolgreich mit Deinem Konto auf dem IdP authentifiziert hast, leitet Dich der IdP zurück zu {% data variables.product.prodname_dotcom %}, wo Du dann auf die Ressourcen der Organisation zugreifen kannst.

{% data reusables.saml.outside-collaborators-exemption %}

Wenn Du Dich kürzlich mit der SAML IdP Deiner Organisation in Deinem Browser authentifiziert hast, wirst Du automatisch autorisiert, wenn Du auf eine {% data variables.product.prodname_dotcom %}-Organisation zugreifst, die SAML SSO verwendet. Wenn Du Dich nicht kürzlich mit der SAML IdP Deiner Organisation in Deinem Browser authentifiziert hast, musst Du Dich beim SAML IdP authentifizieren, bevor Du auf die Organisation zugreifen kannst.

{% data reusables.saml.you-must-periodically-authenticate %}

Um die API oder Git in der Befehlszeile für den Zugriff auf geschützte Inhalte in einer Organisation mit SAML SSO zu verwenden, musst Du ein autorisiertes persönliches Zugriffstoken über HTTPS oder einen autorisierten SSH-Schlüssel verwenden.

Wenn Du kein persönliches Zugriffstoken oder keinen SSH-Schlüssel hast, kannst Du ein persönliches Zugriffstoken für die Befehlszeile erstellen oder einen neuen SSH-Schlüssel generieren. For more information, see "[Creating a personal access token](/github/authenticating-to-github/creating-a-personal-access-token)" or "[Generating a new SSH key and adding it to the ssh-agent](/articles/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent)."

To use a new or existing personal access token or SSH key with an organization that uses or enforces SAML SSO, you will need to authorize the token or authorize the SSH key for use with a SAML SSO organization. Weitere Informationen findest Du unter „[Autorisieren eines persönlichen Zugriffstokens für die Benutzung mit SAML Single Sign-On](/articles/authorizing-a-personal-access-token-for-use-with-saml-single-sign-on)" oder „[Autorisieren eines SSH-Schlüssels für die Benutzung mit SAML Single Sign-On](/articles/authorizing-an-ssh-key-for-use-with-saml-single-sign-on)."

### About {% data variables.product.prodname_oauth_apps %} and SAML SSO

You must have an active SAML session each time you authorize an {% data variables.product.prodname_oauth_app %} to access an organization that uses or enforces SAML SSO.

After an enterprise or organization owner enables or enforces SAML SSO for an organization, you must reauthorize any {% data variables.product.prodname_oauth_app %} that you previously authorized to access the organization. To see the {% data variables.product.prodname_oauth_apps %} you've authorized or reauthorize an {% data variables.product.prodname_oauth_app %}, visit your [{% data variables.product.prodname_oauth_apps %} page](https://github.com/settings/applications).

{% endif %}

### Weiterführende Informationen

{% if currentVersion == "free-pro-team@latest" %}- "[About identity and access management with SAML single sign-on](/organizations/managing-saml-single-sign-on-for-your-organization/about-identity-and-access-management-with-saml-single-sign-on)"{% endif %}
{% if currentVersion == "github-ae@latest" %}- "[About identity and access management for your enterprise](/admin/authentication/about-identity-and-access-management-for-your-enterprise)"{% endif %}
