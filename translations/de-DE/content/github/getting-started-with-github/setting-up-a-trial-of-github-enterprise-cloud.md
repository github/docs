---
title: Eine Testversion von GitHub Enterprise einrichten
intro: 'Sie können {% data variables.product.prodname_ghe_cloud %} kostenlos testen.'
redirect_from:
  - /articles/setting-up-a-trial-of-github-enterprise-cloud
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

### Informationen zu {% data variables.product.prodname_ghe_cloud %}-Testversionen

Sie können eine 14-tägige Testversion einrichten, um {% data variables.product.prodname_ghe_cloud %} in einem neuen Organisationskonto zu testen. Während des Testzeitraums müssen Sie keine Zahlungsmethode angeben, sofern Sie Ihrer Organisation keine {% data variables.product.prodname_marketplace %}-Apps hinzufügen, die eine Zahlungsmethode vorschreiben. Weitere Informationen findest Du unter „<a href="/articles/about-billing-for-github-marketplace/" class="dotcom-only">Informationen zur Abrechnung für {% data variables.product.prodname_marketplace %}</a>.“

Deine Testversion umfasst 50 Benutzer. Wenn Du mehr Sitze (Benutzer) benötigst, um {% data variables.product.prodname_ghe_cloud %} zu evaluieren, kontaktiere bitte {% data variables.contact.contact_enterprise_sales %}. Am Ende des Testzeitraums kannst Du eine andere Anzahl an Benutzern auswählen.

Testversionen sind auch für {% data variables.product.prodname_ghe_server %} verfügbar. Weitere Informationen findest Du unter „[Eine Testversion von {% data variables.product.prodname_ghe_server %} einrichten](/articles/setting-up-a-trial-of-github-enterprise-server).“

{% data reusables.products.which-product-to-use %}

### Deine {% data variables.product.prodname_ghe_cloud %}-Testversion einrichten

Sie müssen über ein Benutzerkonto verfügen oder ein neues Benutzerkonto erstellen, bevor Sie mit Ihrer {% data variables.product.prodname_ghe_cloud %}-Testversion loslegen können. Weitere Informationen findest Du unter „<a href="/articles/signing-up-for-a-new-github-account" class="dotcom-only">Neues {% data variables.product.prodname_dotcom %}-Konto registrieren</a>.“

{% data reusables.user_settings.access_settings %}
{% data reusables.user_settings.organizations %}
{% data reusables.organizations.new-organization %}
4. Klicke unter „Enterprise“ auf **Start your 14-day free trial** (14-tägigen Testzeitraum beginnen). ![Schaltfläche zum Starten Ihres Testzeitraums](/assets/images/help/organizations/start-trial-button.png)
5. Gib Deinen Firmennamen ein. ![Feld für Firmenname](/assets/images/help/organizations/company-name-field.png)
{% data reusables.organizations.organization-name %}
7. Gib unter „Full name“ (Vollständiger Name) Deinen vollständigen Namen ein. ![Feld „Full name“ (Vollständiger Name)](/assets/images/help/organizations/full-name-field.png)
8. Gib unter „Work email“ (Geschäftliche E-Mail-Adresse) Deine geschäftliche E-Mail-Adresse ein. ![Feld „Work email“ (Geschäftliche E-Mail-Adresse)](/assets/images/help/organizations/work-email-field.png)
8. Wähle im Dropdownmenü **Industry** (Industriezweig) den Industriezweig Deines Unternehmens aus. ![Dropdownmenü „Industry“ (Branche)](/assets/images/help/organizations/industry-drop-down.png)
9. Wähle im Dropdownmenü **Number of employees** (Anzahl der Mitarbeiter) die Anzahl der Mitarbeiter in Deinem Unternehmen aus. ![Dropdownmenü „Number of employees“ (Anzahl der Mitarbeiter)](/assets/images/help/organizations/employees-drop-down.png)
10. Lies die <a href="/articles/github-enterprise-cloud-evaluation-agreement" class="dotcom-only">Lizenzvereinbarung für die Testversion</a>, und klicke dann auf **Next** (Weiter).

### {% data variables.product.prodname_ghe_cloud %} erkunden

Nach dem Einrichten Deiner Testversion kannst Du {% data variables.product.prodname_ghe_cloud %} entlang dem [Enterprise Onboarding Guide](https://resources.github.com/enterprise-onboarding/) erkunden.

{% data reusables.products.product-roadmap %}

### Test beenden

Während Ihres Testzeitraums können Sie jederzeit {% data variables.product.prodname_enterprise %} erwerben oder ein Downgrade auf {% data variables.product.prodname_team %} vornehmen.

Wenn Du {% data variables.product.prodname_enterprise %} oder {% data variables.product.prodname_team %} vor dem Ende der Testlaufzeit nicht erwirbst, wird Deine Organisation auf {% data variables.product.prodname_free_team %} heruntergestuft und verliert den Zugriff zu allen erweiterten Werkzeugen und Funktionen, die nur in bezahlten Produkten integriert sind, inklusive {% data variables.product.prodname_pages %}-Websites die von diesen privaten Repository publiziert wurden. Falls Du kein Upgrade vornehmen und trotzdem vermeiden möchtest, dass Du den Zugriff auf die privaten Repositorys verlierst, solltest Du die Repositorys vor dem Ende Deiner Testversion öffentlich machen. Weitere Informationen findest Du unter „[Sichtbarkeit eines Repositorys festlegen](/articles/setting-repository-visibility).“

Das Herunterstufen auf {% data variables.product.prodname_free_team %} für Organisationen deaktiviert auch alle SAML-Einstellungen, die während der Testperiode konfiguriert wurden. Sobald Sie {% data variables.product.prodname_enterprise %} oder {% data variables.product.prodname_team %} erwerben, werden Ihre SAML-Einstellungen wieder für die Benutzer in Ihrer Organisation zur Authentifizierung aktiviert.

{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.org_settings %}
{% data reusables.organizations.billing %}
5. Klicke unter „{% data variables.product.prodname_ghe_cloud %} Free Trial“ (Kostenlose Testversion) auf **Buy Enterprise** (Enterprise kaufen) oder **Downgrade to Team** (Herunterstufen auf Team). ![Schaltfläche „Buy Enterprise“ (Enterprise kaufen) oder „Downgrade to Team“ (Herunterstufen auf Team)](/assets/images/help/organizations/finish-trial-buttons.png)
6. Befolge die Anweisungen zur Eingabe Deiner Zahlungsmethode, und klicke dann auf **Submit** (Absenden).

### Weiterführende Informationen

- „[Eine Testversion von {% data variables.product.prodname_ghe_server %} einrichten](/articles/setting-up-a-trial-of-github-enterprise-server)“
