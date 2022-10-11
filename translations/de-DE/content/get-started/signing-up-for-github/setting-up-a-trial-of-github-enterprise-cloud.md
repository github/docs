---
title: Eine Testversion von GitHub Enterprise einrichten
intro: 'Sie können {% data variables.product.prodname_ghe_cloud %} kostenlos testen.'
redirect_from:
  - /articles/setting-up-a-trial-of-github-enterprise-cloud
  - /github/getting-started-with-github/setting-up-a-trial-of-github-enterprise-cloud
  - /github/getting-started-with-github/signing-up-for-github/setting-up-a-trial-of-github-enterprise-cloud
versions:
  fpt: '*'
  ghes: '*'
topics:
  - Accounts
shortTitle: Enterprise Cloud trial
---

{% data reusables.enterprise.ghec-cta-button %}


## Informationen zu {% data variables.product.prodname_ghe_cloud %}

{% data reusables.organizations.about-organizations %}

You can use organizations for free with {% data variables.product.prodname_free_team %}, which includes limited features. For additional features, such as SAML single sign-on (SSO), access control for {% data variables.product.prodname_pages %}, and included {% data variables.product.prodname_actions %} minutes, you can upgrade to {% data variables.product.prodname_ghe_cloud %}. For a detailed list of the features available with {% data variables.product.prodname_ghe_cloud %}, see our [Pricing](https://github.com/pricing) page.

{% data reusables.saml.saml-accounts %} Weitere Informationen findest Du unter „<a href="/organizations/managing-saml-single-sign-on-for-your-organization/about-identity-and-access-management-with-saml-single-sign-on" class="dotcom-only">Informationen über Identitäts- und Zugriffsmanagement mit SAML Single Sign-On</a>."

{% data reusables.products.which-product-to-use %}

## Informationen zu {% data variables.product.prodname_ghe_cloud %}-Testversionen

You can set up a 14-day trial to evaluate {% data variables.product.prodname_ghe_cloud %}. Während des Testzeitraums müssen Sie keine Zahlungsmethode angeben, sofern Sie Ihrer Organisation keine {% data variables.product.prodname_marketplace %}-Apps hinzufügen, die eine Zahlungsmethode vorschreiben. Weitere Informationen findest Du unter „<a href="/articles/about-billing-for-github-marketplace/" class="dotcom-only">Informationen zur Abrechnung für {% data variables.product.prodname_marketplace %}</a>.“

Deine Testversion umfasst 50 Benutzer. Wenn Du mehr Sitze (Benutzer) benötigst, um {% data variables.product.prodname_ghe_cloud %} zu evaluieren, kontaktiere bitte {% data variables.contact.contact_enterprise_sales %}. Am Ende des Testzeitraums kannst Du eine andere Anzahl an Benutzern auswählen.

Testversionen sind auch für {% data variables.product.prodname_ghe_server %} verfügbar. Weitere Informationen findest Du unter „[Eine Testversion von {% data variables.product.prodname_ghe_server %} einrichten](/articles/setting-up-a-trial-of-github-enterprise-server).“

## Deine {% data variables.product.prodname_ghe_cloud %}-Testversion einrichten

Before you can try {% data variables.product.prodname_ghe_cloud %}, you must be signed into a user account. If you don't already have a user account on {% data variables.product.prodname_dotcom_the_website %}, you must create one. Weitere Informationen findest Du unter „<a href="/articles/signing-up-for-a-new-github-account" class="dotcom-only">Neues {% data variables.product.prodname_dotcom %}-Konto registrieren</a>.“

1. Navigate to [{% data variables.product.prodname_dotcom %} for enterprises](https://github.com/enterprise).
1. Click **Start a free trial**. !["Start a free trial" button](/assets/images/help/organizations/start-a-free-trial-button.png)
1. Click **Enterprise Cloud**. !["Enterprise Cloud" button](/assets/images/help/organizations/enterprise-cloud-trial-option.png)
1. Follow the prompts to configure your trial.

## {% data variables.product.prodname_ghe_cloud %} erkunden

Nach dem Einrichten Deiner Testversion kannst Du {% data variables.product.prodname_ghe_cloud %} entlang dem [Enterprise Onboarding Guide](https://resources.github.com/enterprise-onboarding/) erkunden.

{% data reusables.products.product-roadmap %}

## Test beenden

Während Ihres Testzeitraums können Sie jederzeit {% data variables.product.prodname_enterprise %} erwerben oder ein Downgrade auf {% data variables.product.prodname_team %} vornehmen.

Wenn Du {% data variables.product.prodname_enterprise %} oder {% data variables.product.prodname_team %} vor dem Ende der Testlaufzeit nicht erwirbst, wird Deine Organisation auf {% data variables.product.prodname_free_team %} heruntergestuft und verliert den Zugriff zu allen erweiterten Werkzeugen und Funktionen, die nur in bezahlten Produkten integriert sind, inklusive {% data variables.product.prodname_pages %}-Websites die von diesen privaten Repository publiziert wurden. Falls Du kein Upgrade vornehmen und trotzdem vermeiden möchtest, dass Du den Zugriff auf die privaten Repositorys verlierst, solltest Du die Repositorys vor dem Ende Deiner Testversion öffentlich machen. Weitere Informationen findest Du unter „[Sichtbarkeit eines Repositorys festlegen](/articles/setting-repository-visibility).“

Das Herunterstufen auf {% data variables.product.prodname_free_team %} für Organisationen deaktiviert auch alle SAML-Einstellungen, die während der Testperiode konfiguriert wurden. Sobald Sie {% data variables.product.prodname_enterprise %} oder {% data variables.product.prodname_team %} erwerben, werden Ihre SAML-Einstellungen wieder für die Benutzer in Ihrer Organisation zur Authentifizierung aktiviert.

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
{% data reusables.organizations.billing_plans %}
5. Klicke unter „{% data variables.product.prodname_ghe_cloud %} Free Trial“ (Kostenlose Testversion) auf **Buy Enterprise** (Enterprise kaufen) oder **Downgrade to Team** (Herunterstufen auf Team). ![Schaltfläche „Buy Enterprise“ (Enterprise kaufen) oder „Downgrade to Team“ (Herunterstufen auf Team)](/assets/images/help/organizations/finish-trial-buttons.png)
6. Befolge die Anweisungen zur Eingabe Deiner Zahlungsmethode, und klicke dann auf **Submit** (Absenden).
