---
title: Informationen zu SCIM
intro: 'Mit ''System for Cross-domain Identity Management'' (SCIM, System zur Domänen-übergreifenden Identitätsverwaltung) können Administratoren den Austausch von Benutzeridentitätsinformationen zwischen Systemen automatisieren.'
product: '{% data reusables.gated-features.saml-sso %}'
redirect_from:
  - /articles/about-scim
versions:
  free-pro-team: '*'
---

Wenn Sie in Ihrer Organisation [SAML SSO](/articles/about-identity-and-access-management-with-saml-single-sign-on) verwenden, können Sie SCIM implementieren, um den Zugriff von Organisationsmitgliedern auf {% data variables.product.product_name %} hinzuzufügen, zu verwalten und zu entfernen. Ein Administrator kann beispielsweise die Bereitstellung des Zugriffs eines Organisationsmitglieds mithilfe von SCIM aufheben und das Mitglied automatisch aus der Organisation entfernen.

Wenn Du SAML SSO verwendest, ohne SCIM zu implementieren, ist die Aufhebung der Bereitstellung nicht automatisiert. Wenn die Sitzungen der Organisationsmitglieder ablaufen, nachdem ihr Zugriff vom IdP entfernt wurde, werden sie nicht automatisch aus der Organisation entfernt. Autorisierte Token gewähren auch nach Ablauf ihrer Sitzungen Zugriff auf die Organisation. Um den Zugriff zu entfernen, können Administratoren entweder manuell das autorisierte Token aus der Organisation entfernen oder seine Entfernung mit SCIM automatisieren.

These identity providers are compatible with the {% data variables.product.product_name %} SCIM API for organizations. Weitere Informationen findest Du unter [SCIM](/v3/scim/) in der {% data variables.product.product_name %}-API-Dokumentation.
- Azure AD
- Okta
- OneLogin

{% data reusables.scim.enterprise-account-scim %} For more information, see "[Enforcing security settings in your enterprise account](/github/setting-up-and-managing-your-enterprise-account/enforcing-security-settings-in-your-enterprise-account#managing-user-provisioning-for-organizations-in-your-enterprise-account)."

### Weiterführende Informationen

- „[Informationen zum Identitäts- und Zugriffsmanagement mit SAML Single-Sign-On](/articles/about-identity-and-access-management-with-saml-single-sign-on)“
- „[Deinen Identitätsanbieter (IdP) mit Deiner Organisation verbinden](/articles/connecting-your-identity-provider-to-your-organization)“
- „[SAML Single Sign-On für Deine Organisation aktivieren und testen](/articles/enabling-and-testing-saml-single-sign-on-for-your-organization)“
- „[Den SAML-Zugriff eines Mitglieds auf Deine Organisation ansehen und verwalten](/github/setting-up-and-managing-organizations-and-teams//viewing-and-managing-a-members-saml-access-to-your-organization)"
