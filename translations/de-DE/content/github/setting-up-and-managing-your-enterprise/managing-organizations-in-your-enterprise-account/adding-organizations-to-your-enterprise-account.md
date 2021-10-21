---
title: Organisationen zu Deinem Enterprise-Konto hinzufügen
intro: You can create new organizations or invite existing organizations to manage within your enterprise account.
product: '{% data reusables.gated-features.enterprise-accounts %}'
redirect_from:
  - /articles/adding-organizations-to-your-enterprise-account
  - /github/setting-up-and-managing-your-enterprise-account/adding-organizations-to-your-enterprise-account
  - /github/setting-up-and-managing-your-enterprise/adding-organizations-to-your-enterprise-account
versions:
  fpt: '*'
topics:
  - Enterprise
shortTitle: Add organizations
---

Enterprise owners can create new organizations within an enterprise account's settings or invite existing organizations to join an enterprise account.

Um Deinem Enterprise-Konto eine Organisation hinzuzufügen, musst Du die Organisation in den Einstellungen des Enterprise-Kontos erstellen.

## Eine Organisation in Deinem Enterprise-Konto erstellen

Die von Ihnen in den Einstellungen des Enterprise-Kontos erstellten Organisationen sind im {% data variables.product.prodname_ghe_cloud %}-Abonnement Ihres Enterprise-Kontos enthalten. Weitere Informationen zur Zusammenarbeit in Organisationen findest Du unter „[Organisationen und Teams einrichten und verwalten](/categories/setting-up-and-managing-organizations-and-teams).“

Enterprise-Inhaber, die eine dem Enterprise-Konto gehörende Organisation erstellen, werden automatisch zu Organisationsinhabern. Weitere Informationen zu Organisationsinhabern findest Du unter „[Berechtigungsebenen für eine Organisation](/articles/permission-levels-for-an-organization).“

{% data reusables.enterprise-accounts.access-enterprise %}
2. Klicke auf der Registerkarte **Organziations** (Organisationen) oberhalb der Liste der Organisationen auf **New organization** (Neue Organisation). ![Schaltfläche „New organization“ (Neue Organisation)](/assets/images/help/business-accounts/enterprise-account-add-org.png)
3. Gib unter „Organization name“ (Organisationsname) einen Namen für Deine Organisation ein. ![Feld für die Eingabe des Namens der neuen Organisation](/assets/images/help/business-accounts/new-organization-name-field.png)
4. Klicke auf **Create organization** (Organisation erstellen).
5. Gib unter „Invite owners“ (Inhaber einladen) den Benutzernamen einer Person ein, die Du dazu einladen möchtest, Organisationsinhaber zu werden. Klicke anschließend auf **Invite** (Einladen). ![Organisationsinhaber-Suchfeld und Schaltfläche „Invite“ (Einladen)](/assets/images/help/business-accounts/invite-org-owner.png)
6. Klicke auf **Finish** (Fertigstellen).

## Inviting an organization to join your enterprise account

Enterprise owners can invite existing organizations to join their enterprise account. If the organization you want to invite is already owned by another enterprise, you will not be able to issue an invitation until the previous enterprise gives up ownership of the organization.

{% data reusables.enterprise-accounts.access-enterprise %}
2. On the **Organizations** tab, above the list of organizations, click **Invite organization**. ![Invite organization](/assets/images/help/business-accounts/enterprise-account-invite-organization.png)
3. Under "Organization name", start typing the name of the organization you want to invite and select it when it appears in the drop-down list. ![Search for organization](/assets/images/help/business-accounts/enterprise-account-search-for-organization.png)
4. Click **Invite organization**.
5. The organization owners will receive an email inviting them to join the organization. At least one owner needs to accept the invitation before the process can continue. You can cancel or resend the invitation at any time before an owner approves it. ![Cancel or resend](/assets/images/help/business-accounts/enterprise-account-invitation-sent.png)
6. Once an organization owner has approved the invitation, you can view its status in the list of pending invitations. ![Pending invitation](/assets/images/help/business-accounts/enterprise-account-pending.png)
7. Click **Approve** to complete the transfer, or **Cancel** to cancel it. ![Approve invitation](/assets/images/help/business-accounts/enterprise-account-transfer-approve.png)
