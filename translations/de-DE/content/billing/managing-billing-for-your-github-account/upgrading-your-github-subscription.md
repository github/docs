---
title: Durchführen eines Upgrades für dein GitHub-Abonnement
intro: 'Du kannst jederzeit ein Upgrade für das Abonnement für jede Art von {% data variables.product.product_location %}-Konto durchführen.'
miniTocMaxHeadingLevel: 3
redirect_from:
  - /github/setting-up-and-managing-billing-and-payments-on-github/upgrading-your-github-subscription
  - /articles/upgrading-your-personal-account-s-billing-plan
  - /articles/upgrading-your-personal-account
  - /articles/upgrading-your-personal-account-from-free-to-a-paid-account
  - /articles/upgrading-your-personal-account-from-free-to-paid-with-a-credit-card
  - /articles/upgrading-your-personal-account-from-free-to-paid-with-paypal
  - /articles/500-error-while-upgrading
  - /articles/upgrading-your-organization-s-billing-plan
  - /articles/changing-your-organization-billing-plan
  - /articles/upgrading-your-organization-account-from-free-to-paid-with-a-credit-card
  - /articles/upgrading-your-organization-account-from-free-to-paid-with-paypal
  - /articles/upgrading-your-organization-account
  - /articles/switching-from-per-repository-to-per-user-pricing
  - /articles/adding-seats-to-your-organization
  - /articles/upgrading-your-github-billing-plan
  - /articles/upgrading-your-github-subscription
  - /github/setting-up-and-managing-billing-and-payments-on-github/managing-billing-for-your-github-account/upgrading-your-github-subscription
versions:
  fpt: '*'
  ghec: '*'
type: how_to
topics:
  - Organizations
  - Troubleshooting
  - Upgrades
  - User account
shortTitle: Upgrade your subscription
ms.openlocfilehash: 47426fa211521a166738c5a9bb00edddfc2556f2
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/10/2022
ms.locfileid: '145085680'
---
## Informationen zu Abonnementupgrades

{% data reusables.accounts.accounts-billed-separately %}

Wenn du ein Upgrade des Abonnements für ein Konto ausführst, ändern sich durch das Upgrade nur die für dieses Konto verfügbaren kostenpflichtigen Features. Alle anderen von dir verwendeten Konten bleiben davon unberührt.

## Abonnement deines persönlichen Kontos heraufstufen

Du kannst dein persönliches Konto von {% data variables.product.prodname_free_user %} auf {% data variables.product.prodname_pro %} heraufstufen, um erweiterte Codeüberprüfungstools für private Repositorys nutzen zu können, die sich im Besitz des persönlichen Kontos befinden. Das Upgrade deines persönlichen Kontos hat keine Auswirkungen auf Organisationen, die du verwaltest, oder auf Repositorys im Besitz dieser Organisationen. {% data reusables.gated-features.more-info %}

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.billing_plans %}
1. Klicke neben „Aktueller Plan“ auf **Upgrade**.
  ![Schaltfläche „Upgrade“](/assets/images/help/billing/settings_billing_user_upgrade.png)
2. Klicke auf der Seite „Pläne vergleichen“ unter „Pro“ auf **Upgrade auf Pro**.
{% data reusables.dotcom_billing.choose-monthly-or-yearly-billing %} {% data reusables.dotcom_billing.show-plan-details %} {% data reusables.dotcom_billing.enter-billing-info %} {% data reusables.dotcom_billing.enter-payment-info %} {% data reusables.dotcom_billing.finish_upgrade %}

## Verwalten des Abonnements deiner Organisation

Du kannst das Abonnement deiner Organisation auf ein anderes Produkt heraufstufen, deinem vorhandenen Produkt Arbeitsplätze hinzufügen oder vom repositorybasierten Preismodell zum benutzerbasierten Preismodell wechseln.

### Abonnement deiner Organisation heraufstufen

Du kannst deine Organisation von {% data variables.product.prodname_free_team %} für eine Organisation auf {% data variables.product.prodname_team %} heraufstufen, um auf erweiterte Werkzeuge für Zusammenarbeit und Management für Teams zuzugreifen, oder dein Unternehmen auf {% data variables.product.prodname_ghe_cloud %} heraufstufen für zusätzliche Sicherheits-, Compliance- und Bereitstellungskontrollen. Das Upgrade einer Organisation hat keine Auswirkungen auf dein persönliches Konto oder auf Repositorys im Besitz des persönlichen Kontos. {% data reusables.gated-features.more-info-org-products %}

{% data reusables.dotcom_billing.org-billing-perms %}

{% data reusables.organizations.billing-settings %} {% data reusables.dotcom_billing.upgrade_org %} {% data reusables.dotcom_billing.choose_org_plan %} {% data reusables.dotcom_billing.choose-monthly-or-yearly-billing %} {% data reusables.dotcom_billing.show-plan-details %} {% data reusables.dotcom_billing.enter-payment-info %} {% data reusables.dotcom_billing.owned_by_business %} {% data reusables.dotcom_billing.finish_upgrade %}

### Nächste Schritte für Organisationen mit {% data variables.product.prodname_ghe_cloud %}

Nach dem Heraufstufen deiner Organisation auf {% data variables.product.prodname_ghe_cloud %} kannst du die Identitäts- und Zugriffsverwaltung für deine Organisation einrichten. Weitere Informationen findest du unter [Verwalten des einmaligen Anmeldens mit SAML für deine Organisation](/enterprise-cloud@latest/organizations/managing-saml-single-sign-on-for-your-organization){% ifversion fpt %}" in der Dokumentation zu {% data variables.product.prodname_ghe_cloud %}.{% else %}.{% endif %}

Wenn du ein Enterprise-Konto mit {% data variables.product.prodname_ghe_cloud %} benutzen möchtest, kontaktiere bitte {% data variables.contact.contact_enterprise_sales %}. Weitere Informationen findest du unter [Informationen zu Unternehmenskonten](/enterprise-cloud@latest/admin/overview/about-enterprise-accounts){% ifversion fpt %} in der Dokumentation zu {% data variables.product.prodname_ghe_cloud %}.{% else %}.{% endif %}

### Benutzer zu deiner Organisation hinzufügen

Wenn du zusätzlichen Benutzern den Zugriff auf die privaten Repositorys deiner {% data variables.product.prodname_team %}-Organisation geben möchtest, kannst du jederzeit zusätzliche Benutzer erwerben.

{% data reusables.organizations.billing-settings %} {% data reusables.dotcom_billing.add-seats %} {% data reusables.dotcom_billing.number-of-seats %} {% data reusables.dotcom_billing.confirm-add-seats %}

### Deine Organisation von der Repository-abhängigen auf die benutzerabhängige Preisgestaltung umstellen

{% data reusables.dotcom_billing.switch-legacy-billing %} Weitere Informationen findest du unter [Informationen zur benutzerabhängigen Preisgestaltung](/articles/about-per-user-pricing).

{% data reusables.organizations.billing-settings %}
5. Verwende das Dropdownmenü **Bearbeiten** rechts neben dem entsprechenden Plannamen, und wähle **Plan bearbeiten** aus.
  ![Dropdownmenü „Bearbeiten“](/assets/images/help/billing/per-user-upgrade-button.png)
6. Klicke rechts neben „Erweiterte Tools für Teams“ auf **Upgrade jetzt ausführen**.
  ![Schaltfläche „Upgrade jetzt ausführen“](/assets/images/help/billing/per-user-upgrade-now-button.png) {% data reusables.dotcom_billing.choose_org_plan %} {% data reusables.dotcom_billing.choose-monthly-or-yearly-billing %} {% data reusables.dotcom_billing.owned_by_business %} {% data reusables.dotcom_billing.finish_upgrade %}

## Fehlerbehebung eines 500er-Fehlers beim Heraufstufen

{% data reusables.dotcom_billing.500-error %}

## Weitere Informationsquellen

- [{% data variables.product.prodname_dotcom %}'s products](/articles/github-s-products)
- [Wie wirkt sich das Herauf- oder Herabstufen auf den Abrechnungsprozess aus?](/articles/how-does-upgrading-or-downgrading-affect-the-billing-process)
- [Informationen zur Abrechnung für {% data variables.product.prodname_dotcom %}](/articles/about-billing-on-github).
