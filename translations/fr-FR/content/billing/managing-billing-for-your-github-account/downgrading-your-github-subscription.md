---
title: Passage de votre abonnement GitHub au niveau inférieur
intro: 'Vous pouvez passer à une version antérieure de l’abonnement pour n’importe quel type de compte sur {% data variables.location.product_location %} à tout moment.'
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
ms.contentlocale: fr-FR
ms.lasthandoff: 11/14/2022
ms.locfileid: '148163783'
---
## Passage de votre abonnement {% data variables.product.product_name %} au niveau inférieur

Lorsque vous faites passer l’abonnement de votre compte personnel ou de votre organisation au niveau inférieur, les modifications des tarifs et des fonctionnalités du compte prennent effet à la date de facturation suivante. Les modifications apportées à l’abonnement payant de votre compte personnel ou de votre organisation n’affectent ni les abonnements ni les paiements associés à d’autres fonctionnalités {% data variables.product.prodname_dotcom %} payantes. Pour plus d’informations, consultez « [Dans quelle mesure le passage au niveau supérieur ou inférieur affecte-t-il le processus de facturation ?](/articles/how-does-upgrading-or-downgrading-affect-the-billing-process) ».

## Passage de l’abonnement de votre compte personnel au niveau inférieur

Si vous faites passer votre compte personnel de {% data variables.product.prodname_pro %} à {% data variables.product.prodname_free_user %}, le compte perd l’accès aux outils de révision de code avancés sur les référentiels privés. {% data reusables.gated-features.more-info %}

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.billing_plans %}
1. Sous « Plan actuel », dans la liste déroulante **Modifier**, cliquez sur **Passer à la version gratuite**.
  ![Bouton Passer à la version gratuite](/assets/images/help/billing/downgrade-to-free.png)
5. Lisez les informations concernant les fonctionnalités auxquelles votre compte personnel n’aura plus accès à votre prochaine date de facturation, puis cliquez sur **Je comprends. Poursuivre le passage à une version antérieure**.
  ![Bouton Poursuivre le passage à une version inférieure](/assets/images/help/billing/continue-with-downgrade.png)

Si vous avez publié un site {% data variables.product.prodname_pages %} dans un dépôt privé et ajouté un domaine personnalisé, supprimez ou mettez à jour vos enregistrements DNS avant de passer de {% data variables.product.prodname_pro %} à {% data variables.product.prodname_free_user %}, afin d’éviter le risque d’une prise de contrôle de domaine. Pour plus d’informations, consultez « [Gestion d’un domaine personnalisé pour votre site {% data variables.product.prodname_pages %}](/articles/managing-a-custom-domain-for-your-github-pages-site) ».

## Passage de l’abonnement de votre organisation au niveau inférieur

{% data reusables.dotcom_billing.org-billing-perms %}

Si vous faites passer votre organisation de {% data variables.product.prodname_team %} à {% data variables.product.prodname_free_team %} pour une organisation, le compte perd l’accès aux outils de collaboration et de gestion avancés pour les équipes.

Si vous faites passer votre organisation de {% data variables.product.prodname_ghe_cloud %} à {% data variables.product.prodname_team %} ou {% data variables.product.prodname_free_team %}, le compte perd l’accès aux contrôles de sécurité, de conformité et de déploiement avancés. {% data reusables.gated-features.more-info %}



{% note %}

**Remarques :** 
  - Si votre organisation appartient à un compte d'entreprise, la facturation ne peut pas être gérée au niveau de l'organisation. Pour passer à une version antérieure, vous devez d’abord supprimer l’organisation du compte d’entreprise. Pour plus d’informations, consultez « [Suppression d’organisations de votre entreprise](/enterprise-cloud@latest/admin/user-management/managing-organizations-in-your-enterprise/removing-organizations-from-your-enterprise) ».
  - Si vous utilisez une version d’essai de {% data variables.product.prodname_ghe_cloud %}, et que vous n’achetez pas {% data variables.product.prodname_enterprise %} avant la fin de l’essai, votre organisation passera automatiquement à {% data variables.product.prodname_free_team %} ou {% data variables.product.prodname_team %}. Pour plus d’informations, consultez « [Configuration d’un essai de {% data variables.product.prodname_ghe_cloud %}](/get-started/signing-up-for-github/setting-up-a-trial-of-github-enterprise-cloud#finishing-your-trial) ».

{% endnote %}

{% data reusables.organizations.billing-settings %}
1. Sous « Plan actuel », dans la liste déroulante **Modifier**, cliquez sur l’option de mise à niveau inférieur souhaitée.
  ![Bouton pour passer à une version inférieure](/assets/images/help/billing/downgrade-option-button.png) {% data reusables.dotcom_billing.confirm_cancel_org_plan %}

## Passage de l’abonnement d’une organisation au niveau inférieur avec tarifs hérités par dépôt

{% data reusables.dotcom_billing.org-billing-perms %}

{% data reusables.dotcom_billing.switch-legacy-billing %} Pour plus d’informations, consultez « [Basculer votre organisation des tarifs par dépôt vers les tarifs par utilisateur](/billing/managing-billing-for-your-github-account/upgrading-your-github-subscription#switching-your-organization-from-per-repository-to-per-user-pricing) ».

{% data reusables.organizations.billing-settings %}
5. Sous « Abonnements », dans la liste déroulante « Modifier », cliquez sur **Modifier le plan**.
    ![Liste déroulante Modifier le plan](/assets/images/help/billing/edit-plan-dropdown.png)
1. Sous « Facturation/Plans », en regard du plan que vous souhaitez changer, cliquez sur **Déclasser**.
    ![Bouton Déclasser](/assets/images/help/billing/downgrade-plan-option-button.png)
1. Entrez la raison pour laquelle vous déclassez votre compte, puis cliquez sur **Déclasser le plan**.
    ![Zone de texte dans laquelle indiquer la raison du déclassement et bouton Déclasser](/assets/images/help/billing/downgrade-plan-button.png)

## Suppression de postes payants de votre organisation

Pour réduire le nombre de postes payants que votre organisation utilise, vous pouvez supprimer des membres de votre organisation ou convertir des membres en collaborateurs externes et leur donner accès uniquement à des dépôts publics. Pour plus d'informations, consultez les pages suivantes :
- « [Suppression d’un membre de votre organisation](/articles/removing-a-member-from-your-organization) »
- « [Conversion d’un membre de l’organisation en collaborateur externe](/articles/converting-an-organization-member-to-an-outside-collaborator) »
- « [Gestion de l’accès d’un individu à un dépôt d’organisation](/articles/managing-an-individual-s-access-to-an-organization-repository) »

{% data reusables.organizations.billing-settings %}
1. Sous « Plan actuel », dans la liste déroulante **Modifier**, cliquez sur **Supprimer des postes**.
  ![Option Supprimer des postes dans la liste déroulante](/assets/images/help/billing/remove-seats-dropdown.png)
1. Sous « Supprimer des postes », sélectionnez le nombre de postes auquel vous souhaitez passer.
  ![Option Supprimer des postes](/assets/images/help/billing/remove-seats-amount.png)
1. Passez en revue les informations relatives à votre nouveau paiement à la date de facturation suivante, puis cliquez sur **Supprimer des postes**.
  ![Bouton Supprimer des postes](/assets/images/help/billing/remove-seats-button.png)

## Pour aller plus loin

- « [Produits de {% data variables.product.prodname_dotcom %}](/articles/github-s-products) »
- « [Dans quelle mesure le passage au niveau supérieur ou inférieur affecte-t-il le processus de facturation ?](/articles/how-does-upgrading-or-downgrading-affect-the-billing-process) »
- « [À propos de la facturation sur {% data variables.product.prodname_dotcom %}](/articles/about-billing-on-github) »
- « [À propos des tarifs par utilisateur](/articles/about-per-user-pricing) »
