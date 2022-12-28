---
title: Création d’un compte d’entreprise
intro: 'Si vous utilisez actuellement {% data variables.product.prodname_ghe_cloud %} avec une seule organisation, vous pouvez créer un compte d’entreprise pour gérer de manière centralisée plusieurs organisations.'
versions:
  ghec: '*'
type: how_to
topics:
  - Accounts
  - Enterprise
  - Fundamentals
permissions: Organization owners can create an enterprise account.
shortTitle: Create enterprise account
ms.openlocfilehash: a264a5a1ca3e7461c8e05fc02e93064737d79940
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/05/2022
ms.locfileid: '147573400'
---
## À propos de la création d’un compte d’entreprise

{% data variables.product.prodname_ghe_cloud %} offre la possibilité de créer un compte d’entreprise, permettant la collaboration entre plusieurs organisations et donnant aux administrateurs un point de visibilité et de gestion unique. Pour plus d’informations, consultez « [À propos des comptes d’entreprise](/admin/overview/about-enterprise-accounts) ».

{% data reusables.enterprise.create-an-enterprise-account %} Si vous payez par facture, vous pouvez créer vous-même un compte d’entreprise sur {% data variables.product.prodname_dotcom %}. Si ce n’est pas le cas, vous pouvez [contacter notre équipe commerciale](https://github.com/enterprise/contact?ref_page=/pricing&ref_cta=Contact%20Sales&ref_loc=cards) pour lui demander qu’elle vous crée un compte d’entreprise.

Un compte d’entreprise est inclus avec {% data variables.product.prodname_ghe_cloud %}. La création d’un compte d’entreprise n’entraîne pas de frais supplémentaires sur votre facture.

Lorsque vous créez un compte d’entreprise propriétaire de votre organisation existante sur {% data variables.product.product_name %}, les ressources de l’organisation restent accessibles aux membres via les mêmes URL. Une fois que vous avez ajouté votre organisation au compte d’entreprise, les changements suivants s’appliquent à l’organisation.

- Votre organisation existante appartient automatiquement à celui-ci.
- {% data variables.product.company_short %} facture le compte d’entreprise pour l’utilisation au sein de toutes les organisations détenues par l’entreprise. Les détails de facturation actuels de l’organisation, y compris l’adresse e-mail de facturation de l’organisation, deviennent les détails de facturation du nouveau compte d’entreprise. Pour plus d’informations, consultez « [À propos de la facturation pour votre entreprise](/billing/managing-billing-for-your-github-account/about-billing-for-your-enterprise) ».
- Tous les propriétaires actuels de votre organisation deviendront propriétaires du compte d’entreprise, et tous les responsables de facturation actuels de l’organisation deviendront responsables de facturation du nouveau compte d’entreprise. Pour plus d’informations, consultez « [Rôles dans une entreprise](/admin/user-management/managing-users-in-your-enterprise/roles-in-an-enterprise) ».

Pour plus d’informations sur les changements qui s’appliquent à une organisation après l’ajout d’une organisation à une entreprise, consultez « [Ajout d’organisations à votre entreprise](/admin/user-management/managing-organizations-in-your-enterprise/adding-organizations-to-your-enterprise#about-addition-of-organizations-to-your-enterprise-account) ».

## Création d’un compte d’entreprise sur {% data variables.product.prodname_dotcom %}

Pour créer un compte d’entreprise, votre organisation doit utiliser {% data variables.product.prodname_ghe_cloud %}.

Si vous payez par facture, vous pouvez créer un compte d’entreprise directement via {% data variables.product.prodname_dotcom %}. Si ce n’est actuellement pas le cas, vous pouvez [contacter notre équipe commerciale](https://github.com/enterprise/contact?ref_page=/pricing&ref_cta=Contact%20Sales&ref_loc=cards) pour lui demander qu’elle vous crée un compte d’entreprise.


{% data reusables.organizations.billing-settings %}
1. Cliquez sur **Mettre à niveau vers un compte d’entreprise**.

   ![Capture d’écran du bouton « Mettre à niveau vers un compte d’entreprise »](/assets/images/help/business-accounts/upgrade-to-enterprise-account.png)
1. Sous « Nom de l’entreprise », tapez un nom pour votre compte d’entreprise.

   ![Capture d’écran du champ « Nom de l’entreprise »](/assets/images/help/business-accounts/enterprise-name-field.png)
1. Sous « Slug d’URL de l’entreprise », tapez un slug pour votre compte d’entreprise. Ce slug sera utilisé dans l’URL de votre entreprise. Par exemple, si vous choisissez `octo-enterprise`, l’URL de votre entreprise sera `https://github.com/enterprises/octo-enterprise`.

   ![Capture d’écran du champ « Slug d’URL de l’entreprise »](/assets/images/help/business-accounts/enterprise-slug-field.png)
1. Cliquez sur **Confirmer et mettre à niveau**.

   ![Capture d’écran du bouton « Confirmer et mettre à niveau »](/assets/images/help/business-accounts/confirm-and-upgrade-button.png)
1. Lisez les avertissements, puis cliquez sur **Créer un compte d’entreprise**.

   ![Capture d’écran du bouton « Créer un compte d’entreprise »](/assets/images/help/business-accounts/create-enterprise-account-button.png)

## Étapes suivantes

Après avoir créé votre compte d’entreprise, apprenez-en davantage sur le fonctionnement des comptes d’entreprise et la configuration des paramètres et des stratégies. Pour plus d’informations, suivez le parcours d’apprentissage « [Bien démarrer avec votre compte d’entreprise](/admin/guides#get-started-with-your-enterprise-account) ».
