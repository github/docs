---
title: Inviting people to manage your enterprise
intro: 'You can {% ifversion fpt %}invite people to become enterprise owners or billing managers for{% elsif ghes %}add enterprise owners to{% endif %} your enterprise account. You can also remove enterprise owners {% ifversion fpt %}or billing managers {% endif %}who no longer need access to the enterprise account.'
product: '{% data reusables.gated-features.enterprise-accounts %}'
permissions: 'Enterprise owners can {% ifversion fpt %}invite other people to become{% elsif ghes %}add{% endif %} additional enterprise administrators.'
redirect_from:
  - /github/setting-up-and-managing-your-enterprise-account/inviting-people-to-manage-your-enterprise-account
  - /articles/inviting-people-to-collaborate-in-your-business-account/
  - /articles/inviting-people-to-manage-your-enterprise-account
  - /github/setting-up-and-managing-your-enterprise/inviting-people-to-manage-your-enterprise
versions:
  fpt: '*'
  ghes: '*'
topics:
  - Administrator
  - Enterprise
  - User account
shortTitle: Invite people to manage
---

## About users who can manage your enterprise account

{% data reusables.enterprise-accounts.enterprise-administrators %} For more information, see "[Roles in an enterprise](/github/setting-up-and-managing-your-enterprise/roles-in-an-enterprise)."

{% ifversion ghes %}

If you want to manage owners and billing managers for an enterprise account on {% data variables.product.prodname_dotcom_the_website %}, see "[Inviting people to manage your enterprise](/free-pro-team@latest/github/setting-up-and-managing-your-enterprise/managing-users-in-your-enterprise/inviting-people-to-manage-your-enterprise)" in the {% data variables.product.prodname_dotcom_the_website %} documentation.

{% endif %}

{% ifversion fpt %}

If your enterprise uses {% data variables.product.prodname_emus %}, enterprise owners can only be added or removed through your identity provider. For more information, see "[About {% data variables.product.prodname_emus %}](/github/setting-up-and-managing-your-enterprise/managing-your-enterprise-users-with-your-identity-provider/about-enterprise-managed-users)."

{% endif %}

{% tip %}

**Tipp:** Weitere Informationen zum Verwalten von Benutzern in einer Organisation Deines Enterprise-Kontos findest Du unter „[Mitgliedschaft in Deiner Organisation verwalten](/articles/managing-membership-in-your-organization)“ und „[Rollenbasierte Zugriffe von Personen auf Deine Organisation verwalten](/articles/managing-peoples-access-to-your-organization-with-roles).“

{% endtip %}

## {% ifversion fpt %}Inviting{% elsif ghes %}Adding{% endif %} an enterprise administrator to your enterprise account

{% ifversion fpt %}After you invite someone to join the enterprise account, they must accept the emailed invitation before they can access the enterprise account.{% endif %}

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.people-tab %}
1. Klicke auf der linken Seitenleiste auf **Administrators** (Administratoren). ![Registerkarte „Administrators“ (Administratoren) in der linken Seitenleiste](/assets/images/help/business-accounts/administrators-tab.png)
1. Above the list of administrators, click {% ifversion fpt %}**Invite admin**{% elsif ghes %}**Add owner**{% endif %}.
  {% ifversion fpt %}
  !["Invite admin" button above the list of enterprise owners](/assets/images/help/business-accounts/invite-admin-button.png)
  {% elsif ghes %}
  !["Add owner" button above the list of enterprise owners](/assets/images/help/business-accounts/add-owner-button.png)
  {% endif %}
1. Gib den Benutzernamen, den vollständigen Namen oder die E-Mail-Adresse der Person ein, die Du dazu einladen möchtest, Enterprise-Administrator zu werden. Wähle dann die gewünschte Person aus den Ergebnissen aus. ![Modal box with field to type a person's username, full name, or email address, and Invite button](/assets/images/help/business-accounts/invite-admins-modal-button.png){% ifversion fpt %}
1. Wähle **Owner** (Inhaber) oder **Billing Manager** (Abrechnungsmanager) aus. ![Modalfeld mit Rollenauswahl](/assets/images/help/business-accounts/invite-admins-roles.png)
1. Klicke auf **Send Invitation** (Einladung senden). ![Send invitation button](/assets/images/help/business-accounts/invite-admins-send-invitation.png){% endif %}{% ifversion ghes %}
1. Klicke auf **Add** (Hinzufügen). !["Add" button](/assets/images/help/business-accounts/add-administrator-add-button.png){% endif %}

## Einen Enterprise-Administrator aus Deinem Enterprise-Konto entfernen

Nur Enterprise-Inhaber können andere Enterprise-Administratoren aus dem Enterprise-Konto entfernen.

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.people-tab %}
1. Next to the username of the person you'd like to remove, click {% octicon "gear" aria-label="The Settings gear" %}, then click **Remove owner**{% ifversion fpt %} or **Remove billing manager**{% endif %}.
  {% ifversion fpt %}
  ![Zahnradsymbol für Einstellungen mit Menüoption zum Entfernen eines Enterprise-Administrators](/assets/images/help/business-accounts/remove-admin.png)
  {% elsif ghes %}
  ![Zahnradsymbol für Einstellungen mit Menüoption zum Entfernen eines Enterprise-Administrators](/assets/images/help/business-accounts/ghes-remove-owner.png)
  {% endif %}
1. Read the confirmation, then click **Remove owner**{% ifversion fpt %} or **Remove billing manager**{% endif %}.
