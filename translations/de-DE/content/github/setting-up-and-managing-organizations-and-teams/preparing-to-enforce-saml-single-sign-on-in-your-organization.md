---
title: Auf die Erzwingung von SAML Single Sign-On in Deiner Organisation vorbereiten
intro: 'Bevor Du SAML Single Sign-On in Deiner Organisation erzwingen, solltest Du die Mitgliedschaft Deiner Organisation überprüfen und die Verbindungseinstellungen zu Deinem Identitätsanbieter konfigurieren.'
product: '{% data reusables.gated-features.saml-sso %}'
redirect_from:
  - /articles/preparing-to-enforce-saml-single-sign-on-in-your-organization
versions:
  free-pro-team: '*'
topics:
  - organisationen
  - teams
---

Wenn Du [SAML Single Sign-On in Deiner Organisation erzwingst](/articles/enabling-and-testing-saml-single-sign-on-for-your-organization), werden alle Mitglieder, die sich nicht über Deinen Identitätsanbieter (IdP) authentifiziert haben, aus der Organisation entfernt und über diese Entfernung benachrichtigt.

Bevor Du SAML SSO in Deiner Organisation erzwingst, solltest Du Folgendes tun:

- Mitglieder soweit erforderlich zu Deiner Organisation [hinzufügen](/articles/inviting-users-to-join-your-organization) oder aus Deiner Organisation [entfernen](/articles/removing-a-member-from-your-organization).
- Deinen IdP mit Deiner Organisation verbinden, sofern dies noch nicht getan wurde. Weitere Informationen findest Du unter „[Deinen Identitätsanbieter mit Deiner Organisation verbinden](/articles/connecting-your-identity-provider-to-your-organization).“
- Sicherstellen, dass Deine Organisationsmitglieder sich angemeldet und ihre Konten mit dem IdP verknüpft haben.

{% data reusables.saml.outside-collaborators-exemption %}

### Weiterführende Informationen

- „[Informationen zum Identitäts- und Zugriffsmanagement mit SAML Single-Sign-On](/articles/about-identity-and-access-management-with-saml-single-sign-on)“
