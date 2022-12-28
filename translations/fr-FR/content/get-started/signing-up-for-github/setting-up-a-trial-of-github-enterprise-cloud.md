---
title: Configuration d’un essai de GitHub Enterprise Cloud
intro: 'Vous pouvez essayer {% data variables.product.prodname_ghe_cloud %} gratuitement.'
redirect_from:
  - /articles/setting-up-a-trial-of-github-enterprise-cloud
  - /github/getting-started-with-github/setting-up-a-trial-of-github-enterprise-cloud
  - /github/getting-started-with-github/signing-up-for-github/setting-up-a-trial-of-github-enterprise-cloud
versions:
  fpt: '*'
  ghec: '*'
  ghes: '*'
topics:
  - Accounts
shortTitle: Enterprise Cloud trial
ms.openlocfilehash: a50aebc43ba5d674af132786ffb75e5fb3029aeb
ms.sourcegitcommit: 7a74d5796695bb21c30e4031679253cbc16ceaea
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 11/28/2022
ms.locfileid: '148183987'
---
{% data reusables.enterprise.ghec-cta-button %}


## À propos de {% data variables.product.prodname_ghe_cloud %}

{% data variables.product.prodname_ghe_cloud %} est un plan destiné aux grandes entreprises ou équipes qui collaborent sur {% data variables.product.prodname_dotcom_the_website %}. {% data reusables.enterprise.about-github-for-enterprises %}

{% data reusables.organizations.about-organizations %} Pour plus d’informations sur les comptes, consultez « [Types de comptes {% data variables.product.prodname_dotcom %}](/get-started/learning-about-github/types-of-github-accounts) ».

Vous pouvez utiliser des organisations gratuitement avec {% data variables.product.prodname_free_team %}, qui inclut des fonctionnalités limitées. Pour obtenir d’autres fonctionnalités, comme l’authentification unique SAML, le contrôle d’accès aux {% data variables.product.prodname_pages %} et les minutes {% data variables.product.prodname_actions %} incluses, vous pouvez effectuer une mise à niveau vers {% data variables.product.prodname_ghe_cloud %}. Pour obtenir la liste détaillée des fonctionnalités disponibles avec {% data variables.product.prodname_ghe_cloud %}, consultez notre page [Tarifs](https://github.com/pricing).

Vous pouvez configurer un essai de {% data variables.product.prodname_ghe_cloud %} pour évaluer ces fonctionnalités supplémentaires sur un compte d’organisation nouveau ou existant.

Les essais sont également disponibles pour {% data variables.product.prodname_ghe_server %}. Pour plus d’informations, consultez « [Configuration d’un essai de {% data variables.product.prodname_ghe_server %}](/articles/setting-up-a-trial-of-github-enterprise-server) ».

{% data reusables.products.which-product-to-use %}

## À propos des essais de {% data variables.product.prodname_ghe_cloud %}

Vous pouvez configurer un essai gratuit de 30 jours pour évaluer {% data variables.product.prodname_ghe_cloud %}. Vous n’avez pas besoin de fournir un mode de paiement pendant l’essai, sauf si vous ajoutez des applications {% data variables.product.prodname_marketplace %} à votre organisation qui en nécessitent un. Pour plus d’informations, consultez « [À propos de la facturation pour {% data variables.product.prodname_marketplace %}](/enterprise-cloud@latest/articles/about-billing-for-github-marketplace/) ».

Votre essai comprend 50 sièges. Si vous avez besoin de sièges supplémentaires pour évaluer {% data variables.product.prodname_ghe_cloud %}, contactez l’{% data variables.contact.contact_enterprise_sales %}. À la fin de l’essai, vous pouvez choisir un nombre différent de sièges.

{% data reusables.saml.saml-accounts %}

Pour plus d’informations, consultez « [À propos de la gestion des identités et des accès avec l’authentification unique SAML](/enterprise-cloud@latest/organizations/managing-saml-single-sign-on-for-your-organization/about-identity-and-access-management-with-saml-single-sign-on){% ifversion not ghec %} » dans la documentation de {% data variables.product.prodname_ghe_cloud %}.{% else %}."{% endif %}

{% data variables.product.prodname_emus %} ne fait pas partie de l’essai gratuit de {% data variables.product.prodname_ghe_cloud %}. Si {% data variables.product.prodname_emus %} vous intéresse, contactez [l’équipe commerciale de {% data variables.product.prodname_dotcom %}](https://enterprise.github.com/contact).

## Configuration de votre essai de {% data variables.product.prodname_ghe_cloud %}

Pour pouvoir essayer {% data variables.product.prodname_ghe_cloud %}, vous devez d’abord être connecté à un compte personnel. Si vous n’avez pas encore de compte personnel sur {% data variables.product.prodname_dotcom_the_website %}, vous devez en créer un. Pour plus d’informations, consultez « [Inscription à un nouveau compte {% data variables.product.prodname_dotcom %}](/free-pro-team@latest/articles/signing-up-for-a-new-github-account) ».

1. Accédez à [{% data variables.product.prodname_dotcom %} pour les entreprises](https://github.com/enterprise).
1. Cliquez sur **Démarrer un essai gratuit**.
   ![Bouton « Démarrer un essai gratuit »](/assets/images/help/organizations/start-a-free-trial-button.png)
1. Cliquez sur **Enterprise Cloud**.
   ![Bouton « Enterprise Cloud »](/assets/images/help/organizations/enterprise-cloud-trial-option.png)
1. Suivez les invites pour configurer votre essai gratuit.

## Exploration de {% data variables.product.prodname_ghe_cloud %}

Après avoir configuré votre essai gratuit, vous pouvez explorer {% data variables.product.prodname_ghe_cloud %} en suivant les tâches suggérées sous l’onglet « Vue d’ensemble » de votre organisation. Si vous avez précédemment ignoré les tâches, vous pouvez y accéder à nouveau en cliquant sur **Commencer avec des tâches suggérées** en haut de la page.

![Bouton « Commencer avec des tâches suggérées »](/assets/images/help/organizations/suggested-tasks-button.png)

{% data reusables.docs.you-can-read-docs-for-your-product %}

{% data reusables.enterprise.best-practices %}

{% data reusables.products.product-roadmap %}

## Fin de votre essai gratuit

Vous pouvez acheter {% data variables.product.prodname_enterprise %} à tout moment pendant votre essai gratuit. L’achat de {% data variables.product.prodname_enterprise %} met fin à votre essai gratuit, ce qui retire le maximum de 50 sièges et lance le paiement.

Si vous n’achetez pas {% data variables.product.prodname_enterprise %}, l’essai se poursuit jusqu’à la fin de la période de 30 jours. Vous ne pouvez pas mettre fin à l’essai de manière anticipée. À la fin de l’essai, votre organisation passe à une version antérieure. Si vous avez utilisé une organisation existante pour l’essai gratuit, cette organisation passe à la version du produit que vous utilisiez avant l’essai gratuit. Si vous avez créé une organisation pour l’essai gratuit, cette organisation repasse à {% data variables.product.prodname_free_team %}. 

Votre organisation perd l’accès à toutes les fonctionnalités qui ne sont pas incluses dans le nouveau plan, comme les fonctionnalités avancées telles que {% data variables.product.prodname_pages %} pour les référentiels privés. Si vous ne prévoyez pas d’effectuer une mise à niveau, pour éviter de perdre l’accès aux fonctionnalités avancées, envisagez de rendre publics les dépôts concernés avant la fin de votre essai gratuit. Pour plus d’informations, consultez « [Définition de la visibilité du dépôt](/articles/setting-repository-visibility) ».

Le passage à une version antérieure désactive également tous les paramètres SAML configurés pendant l’essai gratuit. Si vous achetez {% data variables.product.prodname_enterprise %} ultérieurement, vos paramètres SAML sont réactivés pour que les utilisateurs de votre organisation puissent s’authentifier.

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% data reusables.organizations.billing_plans %}
5. Sous « Essai gratuit de {% data variables.product.prodname_ghe_cloud %} », cliquez sur **Acheter la version Enterprise** ou **Passer à la version Team**.
  ![Boutons Acheter la version Enterprise et Passer à la version Team](/assets/images/help/organizations/finish-trial-buttons.png)
6. Suivez les invites pour entrer votre mode de paiement, puis cliquez sur **Envoyer**.
