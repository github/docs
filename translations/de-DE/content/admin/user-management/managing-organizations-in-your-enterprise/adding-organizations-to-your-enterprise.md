---
title: Hinzufügen von Organisationen zu deinem Unternehmen
intro: 'Du kannst Organisationen hinzufügen, die innerhalb deines Unternehmens verwaltet werden sollen, indem du eine neue Organisation erstellst, eine vorhandene Organisation einlädst oder eine Organisation von einem anderen Unternehmenskonto überträgst.'
redirect_from:
  - /github/setting-up-and-managing-your-enterprise/managing-organizations-in-your-enterprise-account/adding-organizations-to-your-enterprise-account
  - /articles/adding-organizations-to-your-enterprise-account
  - /github/setting-up-and-managing-your-enterprise-account/adding-organizations-to-your-enterprise-account
  - /github/setting-up-and-managing-your-enterprise/adding-organizations-to-your-enterprise-account
versions:
  ghec: '*'
type: how_to
topics:
  - Administrator
  - Enterprise
  - Organizations
shortTitle: Add organizations
permissions: Enterprise owners can add organizations to an enterprise.
ms.openlocfilehash: 7b5627eb89e7e5356716a9cd2a9dfe03fd455270
ms.sourcegitcommit: e98b752895109965b32cb277610985da5799f8a1
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 11/01/2022
ms.locfileid: '148127619'
---
## Informationen zum Hinzufügen von Organisationen zu deinem Unternehmenskonto

Dein Unternehmenskonto kann Besitzer von Organisationen sein. Mitglieder deines Unternehmens können in verknüpften Projekten innerhalb einer Organisation zusammenarbeiten. Weitere Informationen findest du unter [Informationen zu Organisationen](/organizations/collaborating-with-groups-in-organizations/about-organizations).

Du kannst deinem Unternehmenskonto neue Organisationen hinzufügen. Wenn du {% data variables.product.prodname_emus %} nicht verwendest, kannst du deinem Unternehmen vorhandene Organisationen auf {% data variables.location.product_location %} hinzufügen. Du kannst eine vorhandene Organisation aus einem {% data variables.enterprise.prodname_emu_enterprise %} nicht einem anderen Unternehmen hinzufügen.

{% data reusables.enterprise.create-an-enterprise-account %} Weitere Informationen findest du unter „[Erstellen eines Unternehmenskontos](/admin/overview/creating-an-enterprise-account)“.

Nachdem du deinem Unternehmen eine vorhandene Organisation hinzugefügt hast, bleiben die Ressourcen der Organisation für Mitglieder unter denselben URLs zugänglich, und die folgenden Änderungen gelten.

- Die Mitglieder der Organisation werden Mitglieder des Unternehmens, und die Nutzung der Organisation wird dem Unternehmenskonto von {% data variables.product.company_short %} in Rechnung gestellt. Du musst sicherstellen, dass das Unternehmenskonto genügend Lizenzen für alle neuen Mitglieder hat. Weitere Informationen findest du unter [Informationen zur Abrechnung für ein Unternehmen](/billing/managing-billing-for-your-github-account/about-billing-for-your-enterprise).
- Unternehmensbesitzer*innen können ihre Rolle innerhalb der Organisation verwalten. Weitere Informationen findest du unter [Verwalten deiner Rolle in einer Organisation im Besitz deines Unternehmens](/admin/user-management/managing-organizations-in-your-enterprise/managing-your-role-in-an-organization-owned-by-your-enterprise).
- Alle Richtlinien, die für das Unternehmen gelten, gelten auch für die Organisation. Weitere Informationen findest du unter [Informationen zu Unternehmensrichtlinien](/admin/policies/enforcing-policies-for-your-enterprise/about-enterprise-policies).
- Wenn SAML SSO für das Unternehmenskonto konfiguriert ist, gilt die SAML-Konfiguration des Unternehmens für die Organisation. Wenn die Organisation SAML SSO verwendet hat, ersetzt die Konfiguration des Unternehmenskontos die Konfiguration der Organisation. SCIM ist für Unternehmenskonten nicht verfügbar. SCIM wird also für die Organisation deaktiviert. Weitere Informationen findest du unter [Konfigurieren von SAML Single Sign-On für dein Unternehmen](/admin/identity-and-access-management/using-saml-for-enterprise-iam/configuring-saml-single-sign-on-for-your-enterprise) und [Wechseln deiner SAML-Konfiguration von einer Organisation zu einem Unternehmenskonto](/admin/identity-and-access-management/using-saml-for-enterprise-iam/switching-your-saml-configuration-from-an-organization-to-an-enterprise-account).
- Wenn SAML SSO für die Organisation konfiguriert wurde, werden die vorhandenen {% data variables.product.pat_generic %} oder SSH-Schlüssel, die für den Zugriff auf die Ressourcen der Organisation autorisiert wurden, dazu autorisiert, auf dieselben Ressourcen zuzugreifen. Um auf zusätzliche Organisationen zuzugreifen, die sich im Besitz des Unternehmens befinden, müssen Mitglieder {% data variables.product.pat_generic %} oder den Schlüssel autorisieren. Weitere Informationen findest du unter [Autorisieren eines {% data variables.product.pat_generic %} für die Verwendung mit SAML Single Sign-On](/authentication/authenticating-with-saml-single-sign-on/authorizing-a-personal-access-token-for-use-with-saml-single-sign-on) und [Autorisieren eines SSH-Schlüssels für die Verwendung mit SAML Single Sign-On](/authentication/authenticating-with-saml-single-sign-on/authorizing-an-ssh-key-for-use-with-saml-single-sign-on).
- Wenn die Verbindung der Organisation mit {% data variables.product.prodname_ghe_server %} oder {% data variables.product.prodname_ghe_managed %} über {% data variables.product.prodname_github_connect %} hergestellt wurde, wird die Verbindung durch das Hinzufügen der Organisation zu einem Unternehmen nicht aktualisiert. {% data variables.product.prodname_github_connect %}-Features funktionieren für die Organisation nicht mehr. Um die Verwendung von {% data variables.product.prodname_github_connect %} fortzusetzen, musst du das Feature deaktivieren und erneut aktivieren. Weitere Informationen findest du in den folgenden Artikeln.

  - „[Verwalten von {% data variables.product.prodname_github_connect %}](/enterprise-server@latest/admin/configuration/configuring-github-connect/managing-github-connect)“ in der Dokumentation zu {% data variables.product.prodname_ghe_server %}
  - „[Verwalten von {% data variables.product.prodname_github_connect %}](/github-ae@latest/admin/configuration/configuring-github-connect/managing-github-connect)“ in der Dokumentation zu {% data variables.product.prodname_ghe_managed %}
- Wenn die Organisation {% data variables.product.prodname_marketplace %}-Apps verwendet hat, kann die Organisation die Apps weiterhin verwenden, muss aber den Anbieter direkt bezahlen. Weitere Informationen erhältst du beim App-Anbieter.
- Alle Coupons werden aus der Organisation entfernt. Wenden Sie sich [an unser Vertriebsteam](https://github.com/enterprise/contact), um den Coupon erneut anzuwenden.

## Eine Organisation in deinem Enterprise-Konto erstellen

Die von dir in den Einstellungen des Unternehmenskontos erstellten Organisationen sind im {% data variables.product.prodname_ghe_cloud %}-Abonnement deines Unternehmenskontos enthalten.

Enterprise-Inhaber, die eine dem Enterprise-Konto gehörende Organisation erstellen, werden automatisch zu Organisationsinhabern. Weitere Informationen zu Organisationsinhaber*innen findest du unter [Rollen in einer Organisation](/organizations/managing-peoples-access-to-your-organization-with-roles/roles-in-an-organization).

{% data reusables.enterprise-accounts.access-enterprise %}
2. Klicke auf der Registerkarte **Organisationen** über der Liste der Organisationen auf **Neue Organisation**.
  ![Schaltfläche „Neue Organisation“](/assets/images/help/business-accounts/enterprise-account-add-org.png)
3. Gib unter „Organization name“ (Organisationsname) einen Namen für deine Organisation ein.
  ![Feld zur Eingabe eines neuen Organisationsnamens](/assets/images/help/business-accounts/new-organization-name-field.png)
4. Klicke auf **Organisation erstellen**.
5. Gib unter „Besitzer einladen“ den Benutzernamen einer Person ein, die du einladen möchtest, ein Organisationsbesitzer zu werden. Klicke dann auf **Einladen**.
  ![Suchfeld für Organisationsbesitzer und Schaltfläche „Einladen“](/assets/images/help/business-accounts/invite-org-owner.png)
6. Klicke auf **Fertig stellen**.

## Einladen einer Organisation zum Beitritt zu deinem Unternehmenskonto

Unternehmensbesitzer können bestehende Organisationen einladen, ihrem Unternehmenskonto beizutreten. Wenn sich die Organisation, die du einladen möchtest, bereits im Besitz eines anderen Unternehmenskontos befindet, musst du Besitzer*in beider Unternehmenskonten sein, oder das vorherige Unternehmen muss zuerst den Besitz der Organisation aufgeben. Weitere Informationen findest du unter [Entfernen einer Organisation aus deinem Unternehmen](/admin/user-management/managing-organizations-in-your-enterprise/removing-organizations-from-your-enterprise). 

{% data reusables.enterprise-accounts.access-enterprise %}
1. Klicke auf der Registerkarte **Organisationen** über der Liste der Organisationen auf **Organisation einladen**.
![Organisation einladen](/assets/images/help/business-accounts/enterprise-account-invite-organization.png)
3. Gib unter „Organisationsname“ den Namen der Organisation ein, die du einladen möchtest, und wähle sie aus, wenn sie in der Dropdownliste angezeigt wird.
![Nach Organisation suchen](/assets/images/help/business-accounts/enterprise-account-search-for-organization.png)
4. Klicke auf **Organisation einladen**.
5. Die Organisationsbesitzer erhalten eine E-Mail, in der sie zum Beitritt zum Unternehmen eingeladen werden. Mindestens ein Besitzer muss die Einladung annehmen, damit der Vorgang fortgesetzt werden kann. Du kannst die Einladung jederzeit zurückziehen oder erneut senden, bevor ein*e Besitzer*in sie annimmt.
![Zurückziehen oder erneut senden](/assets/images/help/business-accounts/enterprise-account-invitation-sent.png)
6. Nachdem ein*e Organisationsinhaber*in die Einladung angenommen hat, siehst du dessen oder deren Status in der Liste der ausstehenden Einladungen.
![Ausstehende Einladung](/assets/images/help/business-accounts/enterprise-account-pending.png)
7. Klicke auf **Genehmigen**, um die Übertragung abzuschließen.
![Einladung genehmigen](/assets/images/help/business-accounts/enterprise-account-transfer-approve.png)

## Übertragen einer Organisation zwischen Unternehmenskonten

Unternehmensbesitzer*innen können vorhandene Organisationen zwischen Unternehmenskonten übertragen. Du musst Unternehmensbesitzer*in beider Unternehmenskonten sein. 

{% note %}

**Hinweis:** Du kannst eine vorhandene Organisation nicht zu oder von einem {% data variables.enterprise.prodname_emu_enterprise %} übertragen.  

{% endnote %}

{% data reusables.enterprise-accounts.access-enterprise %}
1. Wähle neben der Organisation, die du übertragen möchtest, die Dropdownliste {% octicon "gear" width="16" aria-label="Gear" %} aus, und klicke dann auf **Organisation übertragen**. 
![Screenshot der Schaltfläche „Übertragen“](/assets/images/help/business-accounts/org-transfer-button.png)
1. Wähle das Dropdownmenü **Unternehmen auswählen** aus, beginne mit der Eingabe des Namens des Zielunternehmens, und wähle dann das Unternehmen aus, wenn es in der Dropdownliste angezeigt wird.
![Screenshot des Dropdownmenüs mit den Unternehmen](/assets/images/help/business-accounts/org-transfer-select-enterprise.png)
2. Klicke auf **Übertragung überprüfen**.
3. Klicke auf **Organisation übertragen**, um die Übertragung zu bestätigen.
![Screenshot der Schaltfläche „Organisation übertragen“](/assets/images/help/business-accounts/org-transfer-confirm-button.png)
