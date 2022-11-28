---
title: Herabstufen deines GitHub-Abonnements
intro: 'Du kannst das Abonnement für einen beliebigen Kontotyp jederzeit auf {% data variables.location.product_location %} herabstufen.'
redirect_from:
  - /github/setting-up-and-managing-billing-and-payments-on-github/downgrading-your-github-subscription
  - /articles/downgrading-your-personal-account-s-billing-plan
  - /articles/how-do-i-cancel-my-account
  - /articles/downgrading-a-user-account-to-free
  - /articles/removing-paid-seats-from-your-organization
  - /articles/downgrading-your-organization-s-paid-seats
  - /articles/downgrading-your-organization-s-billing-plan
  - /articles/downgrading-an-organization-with-per-seat-pricing-to-free
  - /articles/downgrading-an-organization-with-per-repository-pricing-to-free
  - /articles/downgrading-your-organization-to-free
  - /articles/downgrading-your-organization-from-the-business-plan-to-the-team-plan
  - /articles/downgrading-your-organization-from-github-business-cloud-to-the-team-plan
  - /articles/downgrading-your-github-billing-plan
  - /articles/downgrading-your-github-subscription
  - /github/setting-up-and-managing-billing-and-payments-on-github/managing-billing-for-your-github-account/downgrading-your-github-subscription
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Accounts
  - Downgrades
  - Organizations
  - Repositories
  - User account
shortTitle: Downgrade subscription
ms.openlocfilehash: e302fb715fc2937c7ed056b813b073a66a7cc1fa
ms.sourcegitcommit: fdc4466e89467a7b13239e26c6042dc1428946b6
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 11/14/2022
ms.locfileid: '148163784'
---
## Dein {% data variables.product.product_name %}-Abonnement herunterstufen

Wenn du das Abonnement deines persönlichen Kontos oder deiner Organisation herabstufst, werden die Preisänderungen und die geänderten Kontofunktionen zum nächsten Abrechnungsdatum wirksam. Änderungen an deinem kostenpflichtigen Abonnement für persönliche Konten oder Organisationen haben keine Auswirkungen auf Abonnements oder Zahlungen für andere kostenpflichtige {% data variables.product.prodname_dotcom %}-Features. Weitere Informationen findest du unter [Auswirkungen von Upgrades oder Downgrades auf den Abrechnungsprozess](/articles/how-does-upgrading-or-downgrading-affect-the-billing-process).

## Herabstufen des Abonnements deines persönlichen Kontos

Wenn du dein persönliches Konto von {% data variables.product.prodname_pro %} auf {% data variables.product.prodname_free_user %} herabstufst, verliert dein Konto den Zugriff auf die erweiterten Codeüberprüfungstools für private Repositorys. {% data reusables.gated-features.more-info %}

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.billing_plans %}
1. Verwende unter „Aktueller Plan“ das Dropdownmenü **Bearbeiten**, und klicke auf **Downgrade auf den Free-Tarif**.
  ![Schaltfläche „Downgrade auf den Free-Tarif“](/assets/images/help/billing/downgrade-to-free.png)
5. Lies die Informationen zu den Features, auf die dein persönliches Konto ab dem nächsten Abrechnungsdatum nicht mehr zugreifen kann, und klicke dann auf **Verstanden. Mit Downgrade fortfahren**.
  ![Schaltfläche „Mit Downgrade fortfahren“](/assets/images/help/billing/continue-with-downgrade.png)

Wenn du eine {% data variables.product.prodname_pages %}-Website in einem privaten Repository veröffentlicht und eine benutzerdefinierte Domäne hinzugefügt hast, entferne oder aktualisiere deine DNS-Einträge vor dem Herabstufen von {% data variables.product.prodname_pro %} nach {% data variables.product.prodname_free_user %}, um das Risiko einer Domänenübernahme zu verhindern. Weitere Informationen findest du unter [Verwalten einer benutzerdefinierten Domäne für deine {% data variables.product.prodname_pages %}-Website](/articles/managing-a-custom-domain-for-your-github-pages-site).

## Das Abonnement deiner Organisation herabstufen

{% data reusables.dotcom_billing.org-billing-perms %}

Wenn du deine Organisation von {% data variables.product.prodname_team %} nach {% data variables.product.prodname_free_team %} für Organisationen herabstufst, wird das Konto den Zugriff auf erweiterte Zusammenarbeits- und Managementwerkzeuge für Teams verlieren.

Wenn du deine Organisation von {% data variables.product.prodname_ghe_cloud %} nach {% data variables.product.prodname_team %} oder {% data variables.product.prodname_free_team %} herabstufst, wird das Konto den Zugriff auf erweiterte Sicherheits-, Compliance- und Bereitstellungskontrollen verlieren. {% data reusables.gated-features.more-info %}



{% note %}

**Hinweise:** 
  - Wenn deine Organisation im Besitz eines Unternehmenskontos ist, kann die Abrechnung nicht auf Organisationsebene verwaltet werden. Zum Herabstufen musst du die Organisation zunächst aus dem Unternehmenskonto entfernen. Weitere Informationen findest du unter [Entfernen von Organisationen aus deinem Unternehmen](/enterprise-cloud@latest/admin/user-management/managing-organizations-in-your-enterprise/removing-organizations-from-your-enterprise).
  - Wenn du {% data variables.product.prodname_ghe_cloud %} derzeit testest und {% data variables.product.prodname_enterprise %} nicht vor Ablauf des Testzeitraums erwirbst, wird deine Organisation automatisch auf {% data variables.product.prodname_free_team %} oder {% data variables.product.prodname_team %} herabgestuft. Weitere Informationen findest du unter [Einrichten einer Testversion von {% data variables.product.prodname_ghe_cloud %}](/get-started/signing-up-for-github/setting-up-a-trial-of-github-enterprise-cloud#finishing-your-trial).

{% endnote %}

{% data reusables.organizations.billing-settings %}
1. Verwende unter „Aktueller Plan“ das Dropdownmenü **Bearbeiten**, und klicke auf die gewünschte Downgradeoption.
  ![Schaltfläche zum Herabstufen](/assets/images/help/billing/downgrade-option-button.png) {% data reusables.dotcom_billing.confirm_cancel_org_plan %}

## Abonnement einer Organisation mit älteren Repository-abhängiger Preisgestaltung herabstufen

{% data reusables.dotcom_billing.org-billing-perms %}

{% data reusables.dotcom_billing.switch-legacy-billing %} Weitere Informationen findest du unter [Deine Organisation von der Repository-abhängigen auf die benutzerabhängige Preisgestaltung umstellen](/billing/managing-billing-for-your-github-account/upgrading-your-github-subscription#switching-your-organization-from-per-repository-to-per-user-pricing).

{% data reusables.organizations.billing-settings %}
5. Wähle unter „Abonnements“ das Dropdownmenü „Bearbeiten“ aus, und klicke auf **Plan bearbeiten**.
    ![Dropdownmenü „Plan bearbeiten“](/assets/images/help/billing/edit-plan-dropdown.png)
1. Klicke unter „Abrechnung/Pläne“ neben dem Plan, den du ändern möchtest, auf **Herabstufen**.
    ![Schaltfläche zum Herabstufen](/assets/images/help/billing/downgrade-plan-option-button.png)
1. Gib den Grund für das Downgrade deines Kontos ein, und klicke dann auf **Plan herabstufen**.
    ![Textfeld für den Grund des Downgrades und Schaltfläche zum Herabstufen](/assets/images/help/billing/downgrade-plan-button.png)

## Bezahlte Benutzer aus deiner Organisation entfernen

Um die Anzahl an bezahlten Benutzern, die deine Organisation verwendet, zu reduzieren, kannst du Mitglieder aus deiner Organisation entfernen oder Mitglieder in externe Mitarbeiter umwandeln und ihnen nur den Zugriff auf öffentliche Repositorys gewähren. Weitere Informationen findest du unter
- [Entfernen eines Mitglieds aus deiner Organisation](/articles/removing-a-member-from-your-organization)
- [Ein Organisationsmitglied in einen externen Mitarbeiter umwandeln](/articles/converting-an-organization-member-to-an-outside-collaborator)
- [Verwalten des Zugriffs einer Person auf ein Repository einer Organisation](/articles/managing-an-individual-s-access-to-an-organization-repository)

{% data reusables.organizations.billing-settings %}
1. Verwende unter „Aktueller Plan“ das Dropdownmenü **Bearbeiten**, und klicke auf **Arbeitsplätze entfernen**.
  ![Dropdownmenü „Arbeitsplätze entfernen“](/assets/images/help/billing/remove-seats-dropdown.png)
1. Wähle unter „Remove seats“ (Benutzer entfernen) die Anzahl an Benutzern aus, auf die du reduzieren möchtest.
  ![Option „Arbeitsplätze entfernen“](/assets/images/help/billing/remove-seats-amount.png)
1. Lies die Informationen zur neuen Preisgestaltung zum nächsten Abrechnungsdatum, und klicke dann auf **Arbeitsplätze entfernen**.
  ![Schaltfläche „Arbeitsplätze entfernen“](/assets/images/help/billing/remove-seats-button.png)

## Weiterführende Themen

- [{% data variables.product.prodname_dotcom %}'s products](/articles/github-s-products)
- [Wie wirkt sich das Herauf- oder Herabstufen auf den Abrechnungsprozess aus?](/articles/how-does-upgrading-or-downgrading-affect-the-billing-process)
- [Informationen zur Abrechnung für {% data variables.product.prodname_dotcom %}](/articles/about-billing-on-github).
- [Informationen zur benutzerabhängigen Preisgestaltung](/articles/about-per-user-pricing)
