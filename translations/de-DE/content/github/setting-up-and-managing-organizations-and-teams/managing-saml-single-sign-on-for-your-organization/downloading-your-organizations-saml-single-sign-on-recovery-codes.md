---
title: SAML Single Sign-On-Wiederherstellungscodes Deiner Organisation herunterladen
intro: 'Organisationsadministratoren sollten die SAML Single Sign-On-Wiederherstellungscodes ihrer Organisation herunterladen, um sicherzustellen, dass sie auch dann auf {% data variables.product.product_name %} zugreifen können, wenn der Identitätsanbieter für die Organisation nicht verfügbar ist.'
redirect_from:
  - /articles/downloading-your-organization-s-saml-single-sign-on-recovery-codes
  - /articles/downloading-your-organizations-saml-single-sign-on-recovery-codes
  - /github/setting-up-and-managing-organizations-and-teams/downloading-your-organizations-saml-single-sign-on-recovery-codes
product: '{% data reusables.gated-features.saml-sso %}'
versions:
  free-pro-team: '*'
topics:
  - organisationen
  - teams
---
Wiederherstellungscode sollten nicht öffentlich gemacht und nicht weitergegeben werden. Wir empfehlen, sie mit einem Passwort-Manager wie [LastPass](https://lastpass.com/), [1Password](https://1password.com/) oder [Keeper](https://keepersecurity.com/) zu speichern.

{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.org_settings %}
{% data reusables.organizations.security %}
5. Klicke im Hinweis zu Wiederherstellungscodes unter „SAML single sign-on“ (SAML Single Sign-On) auf **Save your recovery codes** (Deine Wiederherstellungscodes speichern). ![Link zum Anzeigen und Speichern Deiner Wiederherstellungscodes](/assets/images/help/saml/saml_recovery_codes.png)
6. Speichere Deine Wiederherstellungscodes, indem Du auf **Download** (Herunterladen), **Print** (Drucken) oder **Copy** (Kopieren) klickst. ![Schaltflächen zum Herunterladen, Drucken oder Kopieren Deiner Wiederherstellungscodes](/assets/images/help/saml/saml_recovery_code_options.png)

  {% note %}

  **Hinweis:** Mithilfe Deiner Wiederherstellungscodes kannst Du trotzdem auf {% data variables.product.product_name %} zugreifen, wenn Dein Identitätsanbieter nicht verfügbar ist. Wenn Du neue Wiederherstellungscodes erzeugst, werden die auf der Seite „Single sign-on recovery codes“ (Single Sign-On-Wiederherstellungscodes) angezeigten Wiederherstellungscodes automatisch aktualisiert.

  {% endnote %}

7. Wenn Sie einen Wiederherstellungscode genutzt haben, um wieder Zugriff auf {% data variables.product.product_name %} zu erhalten, können Sie diesen Code nicht mehr verwenden. Der Zugriff auf {% data variables.product.product_name %} ist nur 24 Stunden lang verfügbar, bevor Sie dazu aufgefordert werden, sich mit Single Sign-On anzumelden.

### Weiterführende Informationen

- „[Informationen zum Identitäts- und Zugriffsmanagement mit SAML Single-Sign-On](/articles/about-identity-and-access-management-with-saml-single-sign-on)“
- „[Zugriff auf Deine Organisation bei nicht verfügbarem Identitätsanbieter](/articles/accessing-your-organization-if-your-identity-provider-is-unavailable)“
