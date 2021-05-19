---
title: Informationen zum Identitäts- und Zugriffsmanagement mit SAML Single-Sign-On
intro: 'Wenn Du die Identitäten und Applikationen Deiner Benutzer zentral mit einem Identitätsanbieter (identity provider IdP) verwaltest, kannst Du ''Security Assertion Markup Language'' (SAML) Single Sign-On (SSO) konfigurieren, um die Ressourcen Deiner Organisation auf {% data variables.product.prodname_dotcom %} zu schützen.'
product: '{% data reusables.gated-features.saml-sso %}'
redirect_from:
  - /articles/about-identity-and-access-management-with-saml-single-sign-on
  - /github/setting-up-and-managing-organizations-and-teams/about-identity-and-access-management-with-saml-single-sign-on
versions:
  free-pro-team: '*'
topics:
  - organisationen
  - teams
---
### Informationen zu SAML SSO

{% data reusables.saml.dotcom-saml-explanation %}

Auch nachdem Du SAML SSO konfiguriert hast, werden Mitglieder Deiner {% data variables.product.prodname_dotcom %}-Organisation sich weiterhin auf {% data variables.product.prodname_dotcom %} in ihre Benutzerkonten anmelden. Wenn ein Mitglied auf Ressourcen Deiner SAML SSO einsetzenden Organisation zugreift, wird {% data variables.product.prodname_dotcom %} den Benutzer zwecks Authentifizierung zu Deinem IdP umleiten. Nach erfolgreicher Authentifizierung leitet Dein IdP den Benutzer zurück zu {% data variables.product.prodname_dotcom %}, wo er dann auf die Ressourcen Deiner Organisation zugreifen kann.

Organization owners can enforce SAML SSO for an individual organization, or enterprise owners can enforce SAML SSO for all organizations in an enterprise account. Weitere Informationen findest Du unter „[SAML Single Sign-On für Organisationen in Deinem Enterprise-Konto aktivieren](/github/setting-up-and-managing-your-enterprise/enabling-saml-single-sign-on-for-organizations-in-your-enterprise-account)."

{% data reusables.saml.outside-collaborators-exemption %}

Bevor Du SAML SSO für Deine Organisation aktivierst, musst Du Deinen IdP mit Deiner Organisation verbinden. Weitere Informationen findest Du unter „[Deinen Identitätsanbieter mit Deiner Organisation verbinden](/github/setting-up-and-managing-organizations-and-teams/connecting-your-identity-provider-to-your-organization)."

SAML SSO kann in einer Organisation entweder deaktiviert, aktiviert aber nicht erzwungen, oder aktiviert und erzwungen sein. Nachdem Du SAML SSO für Deine Organisation aktiviert hast und die Mitglieder Deiner Organisation sich erfolgreich mit Deinem IdP authentifizieren können, kannst Du die SAML SSO Konfiguration erzwingen. Weitere Informationen zur Durchsetzung von SAML SSO für Deine {% data variables.product.prodname_dotcom %}-Organisation findest Du unter „[SAML Single Sign-On für Deine Organisation erzwingen](/articles/enforcing-saml-single-sign-on-for-your-organization)."

Mitglieder müssen sich regelmäßig bei Deinem IdP anmelden, um sich zu authentifizieren und Zugang zu den Ressourcen Deiner Organisation zu erhalten. Die Dauer dieser Anmeldephase wird von Deinem IdP festgelegt und beträgt in der Regel 24 Stunden. Durch diese Verpflichtung zur regelmäßigen Anmeldung wird die Dauer des Zugriffs begrenzt, und die Benutzer müssen sich erneut identifizieren, um fortzufahren.

Um auf die geschützten Ressourcen der Organisation über das API und Git in der Befehlszeile zuzugreifen, müssen Mitglieder sich mit einem persönlichen Zugangs-Token oder SSH-Schlüssel autorisieren und authentifizieren. Weitere Informationen findest Du unter „[Autorisieren eines persönlichen Zugriffstokens für die Benutzung mit SAML Single Sign-On](/github/authenticating-to-github/authorizing-a-personal-access-token-for-use-with-saml-single-sign-on)" und „[Autorisieren eines SSH-Schlüssels für die Benutzung mit SAML Single Sign-On](/github/authenticating-to-github/authorizing-an-ssh-key-for-use-with-saml-single-sign-on)."

Beim ersten Mal, wenn ein Mitglied SAML SSO verwendet, um auf Deine Organisation zuzugreifen, erstellt {% data variables.product.prodname_dotcom %} automatisch einen Datensatz, der Deine Organisation, das Konto des Mitglieds auf {% data variables.product.prodname_dotcom %} und das Konto des Mitglieds auf Deinem IdP miteinander verknüpft. Du kannst die verknüpfte SAML-Identität, aktive Sitzungen und autorisierte Anmeldeinformationen für Mitglieder Deiner Organisation oder Deines Enterprise-Kontos anzeigen und widerrufen. Weitere Informationen findest Du unter „[Den SAML-Zugriff eines Mitglieds auf Deine Organisation anzeigen und verwalten](/github/setting-up-and-managing-organizations-and-teams/viewing-and-managing-a-members-saml-access-to-your-organization)" und „[Den SAML-Zugriff eines Benutzers auf Dein Enterprise-Konto ansehen und verwalten](/github/setting-up-and-managing-your-enterprise/viewing-and-managing-a-users-saml-access-to-your-enterprise-account)."

If members are signed in with a SAML SSO session when they create a new repository, the default visibility of that repository is private. Otherwise, the default visibility is public. Weitere Informationen zu Repository-Sichtbarkeiten findest Du unter „[Informationen zur Sichtbarkeit eines Repositorys](/github/creating-cloning-and-archiving-repositories/about-repository-visibility)“.

Organisationsmitglieder müssen auch eine aktive SAML-Sitzung haben, um eine {% data variables.product.prodname_oauth_app %} zu autorisieren. Du kannst Dich von dieser Anforderung abmelden, indem Du {% data variables.contact.contact_support %} kontaktierst. {% data variables.product.product_name %} empfiehlt nicht, sich von dieser Anforderung abzumelden, weil dies Deine Organisation einem höheren Risiko von Kontoübernahmen und potenziellen Datenverlust aussetzt.

{% data reusables.saml.saml-single-logout-not-supported %}

### Unterstützte SAML-Dienste

{% data reusables.saml.saml-supported-idps %}

Einige IdPs unterstützen die Bereitstellung von Zugriffen auf eine  {% data variables.product.prodname_dotcom %}-Organisation über SCIM. Weitere Informationen findest Du unter „[Über SCIM](/github/setting-up-and-managing-organizations-and-teams/about-scim)."

### Mitglieder zu einer Organisation mit SAML SSO hinzufügen

Nachdem Sie SAML SSO aktiviert haben, gibt es mehrere Möglichkeiten, wie Sie neue Mitglieder zu Ihrer Organisation hinzufügen können. Organisationsinhaber können neue Mitglieder manuell auf {% data variables.product.product_name %} oder über das API einladen. For more information, see "[Inviting users to join your organization](/articles/inviting-users-to-join-your-organization)" and "[Members](/rest/reference/orgs#add-or-update-organization-membership)."

Um neue Benutzer ohne Einladung eines Organisationsinhabers hinzuzufügen, kannst Du die URL `https://github.com/orgs/ORGANIZATION/sso/sign_up` verwenden und _ORGANIZATION_ durch den Namen Deiner Organisation ersetzen. Du kannst beispielsweise Deinen IdP so konfigurieren, dass jeder, der Zugriff auf den IdP hat, auf einen Link im Dashboard des IdP klicken kann, um Deiner {% data variables.product.prodname_dotcom %}-Organisation beizutreten.

Wenn Dein IdP SCIM unterstützt, kann {% data variables.product.prodname_dotcom %} automatisch Mitglieder einladen, Deiner Organisation beizutreten, wenn Du den Zugriff auf Deine IdP erlaubst. Wenn Du den Zugriff eines Mitglieds auf Deine {% data variables.product.prodname_dotcom %}-Organisation auf Deinem SAML IdP entfernst, wird das Mitglied automatisch aus der {% data variables.product.prodname_dotcom %}-Organisation entfernt. Weitere Informationen findest Du unter „[Über SCIM](/github/setting-up-and-managing-organizations-and-teams/about-scim)."

{% data reusables.organizations.team-synchronization %}

{% data reusables.saml.saml-single-logout-not-supported %}

### Weiterführende Informationen

- „[Informationen zur Zwei-Faktor-Authentifizierung und zu SAML Single Sign-On](/articles/about-two-factor-authentication-and-saml-single-sign-on)“
- „[Informationen zur Authentifizierung mit SAML Single Sign-On](/github/authenticating-to-github/about-authentication-with-saml-single-sign-on)“
