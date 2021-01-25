---
title: Teamsynchronisierung für Organisationen in Deinem Enterprise-Konto verwalten
intro: 'You can enable team synchronization between an identity provider (IdP) and {% data variables.product.product_name %} to allow organizations owned by your enterprise account to manage team membership through IdP groups.'
product: '{% data reusables.gated-features.enterprise-accounts %}'
permissions: Enterprise owners can manage team synchronization for an enterprise account.
versions:
  free-pro-team: '*'
---

### About team synchronization for enterprise accounts

If you use Azure AD as your IdP, you can enable team synchronization for your enterprise account to allow organization owners and team maintainers to synchronize teams in the organizations owned by your enterprise accounts with IdP groups.

{% data reusables.identity-and-permissions.about-team-sync %}

{% data reusables.identity-and-permissions.sync-team-with-idp-group %}

{% data reusables.identity-and-permissions.team-sync-disable %}

Du kannst auch die Teamsynchronisation für eine einzelne Organisation konfigurieren und verwalten. Weitere Informationen findest Du unter „[Teamsynchronisation für Deine Organisation verwalten](/github/setting-up-and-managing-organizations-and-teams/managing-team-synchronization-for-your-organization)."

### Vorrausetzungen

müssen Du oder Dein Azure AD-Administrator ein Global-Administrator oder ein Privileged Role-Administrator in Azure AD sein.

musst Du SAML Single Sign-On für Organisationen in Deinem Enterprise-Konto mit Deinem unterstützten IdP aktivieren. Weitere Informationen findest Du unter „[SAML Single Sign-On für Organisationen in Deinem Enterprise-Konto aktivieren](/github/setting-up-and-managing-your-enterprise/enabling-saml-single-sign-on-for-organizations-in-your-enterprise-account)."

musst Du mit SAML SSO und der unterstützten IdP zu Deinem Enterprise-Konto authentifizieren. Weitere Informationen findest Du unter „[Authentifizierung mit SAML Single Sign-On](/articles/authenticating-with-saml-single-sign-on).“

### Teamsynchronisation für Azure AD verwalten

{% data reusables.identity-and-permissions.team-sync-azure-permissions %}

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.security-tab %}
{% data reusables.identity-and-permissions.team-sync-confirm-saml %}
{% data reusables.identity-and-permissions.enable-team-sync-azure %}
{% data reusables.identity-and-permissions.team-sync-confirm %}
7. Review the details for the IdP tenant you want to connect to your enterprise account, then click **Approve**. ![Ausstehende Anforderung zum Aktivieren der Teamsynchronisierung für einen IdP-Mandanten mit der Option zur Genehmigung oder Ablehnung](/assets/images/help/teams/approve-team-synchronization.png)
8. Um die Teamsynchronisation zu deaktivieren, klicke auf **Disable team synchronization** (Teamsynchronisation deaktivieren). ![Deaktivieren der Teamsynchronisierung](/assets/images/help/teams/disable-team-synchronization.png)
