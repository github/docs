---
title: Dein GitHub-Abonnement herabstufen
intro: 'Du kannst das Abonnement für jede Art von {% data variables.product.product_name %}-Konto jederzeit herunterstufen.'
redirect_from:
  - /articles/downgrading-your-personal-account-s-billing-plan/
  - /articles/how-do-i-cancel-my-account/
  - /articles/downgrading-a-user-account-to-free/
  - /articles/removing-paid-seats-from-your-organization/
  - /articles/downgrading-your-organization-s-paid-seats/
  - /articles/downgrading-your-organization-s-billing-plan/
  - /articles/downgrading-an-organization-with-per-seat-pricing-to-free/
  - /articles/downgrading-an-organization-with-per-repository-pricing-to-free/
  - /articles/downgrading-your-organization-to-free/
  - /articles/downgrading-your-organization-from-the-business-plan-to-the-team-plan/
  - /articles/downgrading-your-organization-from-github-business-cloud-to-the-team-plan/
  - /articles/downgrading-your-github-billing-plan/
  - /articles/downgrading-your-github-subscription
versions:
  free-pro-team: '*'
topics:
  - Billing
---

### Dein {% data variables.product.product_name %}-Abonnement herunterstufen

Wenn Du das Abonnement Deines Benutzerkonto oder Deiner Organisation herabstufst, werden die neuen Preise und Kontofunktionen am nächsten Abrechnungsdatum wirksam. Änderungen an Deinem bezahlten Abonnement für Benutzerkonten oder Organisationen beeinflussen Abonnements oder Zahlungen für andere, bezahlte {% data variables.product.prodname_dotcom %}-Funktionen nicht. Weitere Informationen findest Du auf „[Wie beeinflusst das Herauf- oder Herabstufen den Abrechnungsprozess?](/articles/how-does-upgrading-or-downgrading-affect-the-billing-process)."

### Das Abonnement Deines Benutzerkonto herabstufen

Wenn Du Dein Benutzerkonto von {% data variables.product.prodname_pro %} nach {% data variables.product.prodname_free_user %} herunterstufst, wird Dein Konto den Zugriff auf die erweiterten Code-Prüfwerkzeuge auf privaten Repositorys verlieren. {% data reusables.gated-features.more-info %}

{% data reusables.user_settings.access_settings %}
{% data reusables.user_settings.billing %}
{% data reusables.user_settings.subscriptions-tab %}
4. Verwende das Dropdownmenü **Edit** (Bearbeiten) und klicke auf **Downgrade to Free** (Herunterstufen auf Kostenlos). ![Schaltfläche „Downgrade to free" (Herabstufen auf Kostenlos)](/assets/images/help/billing/downgrade-to-free.png)
5. Lies die Informationen zu den Features, auf die Dein Benutzerkonto ab dem nächsten Abrechnungsdatum nicht mehr zugreifen kann, und klicke dann auf **I understand. Continue with downgrade** (Ich verstehe, mit Herabstufen fortfahren). ![Schaltfläche „Continue with downgrade" (Mit Herunterstufen fortfahren)](/assets/images/help/billing/continue-with-downgrade.png)

Wenn Du eine {% data variables.product.prodname_pages %}-Website in einem privaten Repository veröffentlicht und eine benutzerdefinierte Domäne hinzugefügt hast, entferne oder aktualisiere Deine DNS-Einträge vor dem Herabstufen von {% data variables.product.prodname_pro %} nach {% data variables.product.prodname_free_user %}, um das Risiko einer Domänenübernahme zu verhindern. Weitere Informationen findest Du unter „[Eine benutzerdefinierte Domäne für Deine {% data variables.product.prodname_pages %}-Website verwalten](/articles/managing-a-custom-domain-for-your-github-pages-site).“

### Das Abonnement Deiner Organisation herabstufen

{% data reusables.dotcom_billing.org-billing-perms %}

Wenn du Deine Organisation von {% data variables.product.prodname_team %} nach {% data variables.product.prodname_free_team %} für Organisationen herabstufst, wird das Konto den Zugriff auf erweiterte Zusammenarbeits- und Managementwerkzeuge für Teams verlieren.

Wenn Du Deine Organisation von {% data variables.product.prodname_ghe_cloud %} nach {% data variables.product.prodname_team %} oder {% data variables.product.prodname_free_team %} herabstufst, wird das Konto den Zugriff auf erweiterte Sicherheits-, Compliance- und Bereitstellungskontrollen verlieren. {% data reusables.gated-features.more-info %}

{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.org_settings %}
{% data reusables.organizations.billing %}
{% data reusables.user_settings.subscriptions-tab %}
6. Benutze das **Edit ** (Bearbeiten) Dropdownmenü und klicke auf die Herabstufungs-Option, die Du willst. ![Schaltfläche „Downgrade“ (Herabstufen)](/assets/images/help/billing/downgrade-option-button.png)
{% data reusables.dotcom_billing.confirm_cancel_org_plan %}

### Abonnement einer Organisation mit älteren Repository-abhängiger Preisgestaltung herabstufen

{% data reusables.dotcom_billing.org-billing-perms %}

{% data reusables.dotcom_billing.switch-legacy-billing %} Weitere Informationen findest Du auf „[Deine Organisation von Repository-abhängige auf benutzerabhängige Preisgestaltung wechseln](/github/setting-up-and-managing-billing-and-payments-on-github/upgrading-your-github-subscription#switching-your-organization-from-per-repository-to-per-user-pricing)."

{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.org_settings %}
{% data reusables.organizations.billing %}
5. Under "Subscriptions", select the "Edit" drop-down, and click **Edit plan**. ![Edit Plan dropdown](/assets/images/help/billing/edit-plan-dropdown.png)
1. Klicke unter "Abrechnung/Pläne" neben dem Plan, den Du ändern möchtest, auf **Downgrade** (Herabstufen). ![Schaltfläche „Downgrade“ (Herabstufen)](/assets/images/help/billing/downgrade-plan-option-button.png)
1. Enter the reason you're downgrading your account, then click **Downgrade plan**. ![Text box for downgrade reason and downgrade button](/assets/images/help/billing/downgrade-plan-button.png)

### Bezahlte Benutzer aus Deiner Organisation entfernen

Um die Anzahl an bezahlten Benutzern, die Deine Organisation verwendet, zu reduzieren, kannst Du Mitglieder aus Deiner Organisation entfernen oder Mitglieder in externe Mitarbeiter umwandeln und ihnen nur den Zugriff auf öffentliche Repositorys gewähren. Weitere Informationen findest Du unter:
- „[Ein Mitglied aus Deiner Organisation entfernen](/articles/removing-a-member-from-your-organization)“
- „[Ein Organisationsmitglied in einen externen Mitarbeiter umwandeln](/articles/converting-an-organization-member-to-an-outside-collaborator)“
- „[Den Zugriff einer Person auf ein Repository einer Organisation verwalten](/articles/managing-an-individual-s-access-to-an-organization-repository)“

{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.org_settings %}
{% data reusables.organizations.billing %}
{% data reusables.user_settings.subscriptions-tab %}
6. Verwende das Dropdownmenü **Edit** (Bearbeiten) und klicke auf **Remove seats** (Benutzer entfernen). ![remove seats dropdown](/assets/images/help/billing/remove-seats-dropdown.png)
1. Wählen Sie unter „Remove seats“ (Benutzer entfernen) die Anzahl an Benutzern aus, auf die Sie reduzieren möchten. ![remove seats option](/assets/images/help/billing/remove-seats-amount.png)
1. Lies die Informationen zur neuen Preisgestaltung an Deinem nächsten Abrechnungsdatum durch, und klicke dann auf **Remove seats** (Benutzer entfernen). ![remove seats button](/assets/images/help/billing/remove-seats-button.png)

### Weiterführende Informationen

- „[Produkte von {% data variables.product.prodname_dotcom %}](/articles/github-s-products)“
- „[Wie wirkt sich das Herauf- oder Herabstufen auf den Abrechnungsprozess aus?](/articles/how-does-upgrading-or-downgrading-affect-the-billing-process)“
- „[Informationen zur Abrechnung auf {% data variables.product.prodname_dotcom %}](/articles/about-billing-on-github).“
- „[Zahlungsmethode entfernen](/articles/removing-a-payment-method)“
- „[Informationen zu benutzerbasierten Preisen](/articles/about-per-user-pricing)“
