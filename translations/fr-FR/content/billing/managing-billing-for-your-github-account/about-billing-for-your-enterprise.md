---
title: À propos de la facturation pour votre entreprise
intro: 'Vous pouvez afficher les informations de facturation de votre compte d’entreprise{% ifversion ghec or ghes %} sur {% data variables.product.prodname_dotcom_the_website %}{% endif %}.'
redirect_from:
  - /admin/overview/managing-billing-for-your-enterprise
  - /enterprise/admin/installation/managing-billing-for-github-enterprise
  - /enterprise/admin/overview/managing-billing-for-github-enterprise
  - /admin/overview/managing-billing-for-github-enterprise
versions:
  ghec: '*'
  ghes: '*'
  ghae: '*'
type: overview
topics:
  - Enterprise
shortTitle: Billing for your enterprise
ms.openlocfilehash: 1b048c16293b7183636bc383ca926c4e5c7f0bd2
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/05/2022
ms.locfileid: '147573408'
---
## À propos de la facturation pour votre entreprise

{% ifversion ghae %}

{% data reusables.github-ae.about-billing %} Une fois par jour, {% data variables.product.prodname_dotcom %} compte le nombre d’utilisateurs disposant d’une licence pour votre entreprise. {% data variables.product.company_short %} vous facture pour chaque utilisateur sous licence, que l’utilisateur se soit ou non connecté à {% data variables.product.prodname_ghe_managed %} ce jour-là.

Pour les régions commerciales, le prix est de 1.2580645161 $ par utilisateur et par jour. Pour les mois de 31 jours, le coût mensuel pour chaque utilisateur est de 39 $. Pour les mois comportant moins de jours, le coût mensuel est inférieur. Chaque mois de facturation commence à une heure fixe le premier jour du mois calendaire.

Si vous ajoutez un utilisateur sous licence vers le milieu du mois, cet utilisateur n’est inclus dans le décompte que pour les jours où il dispose d’une licence. Quand vous supprimez un utilisateur sous licence, cet utilisateur demeure inclus dans le décompte jusqu’à la fin du mois en question. Ainsi, si vous ajoutez un utilisateur vers le milieu du mois et le supprimez ultérieurement au cours du même mois, il est inclus dans le décompte depuis le jour où il a été ajouté jusqu’à la fin du mois. Il n’y a aucun coût supplémentaire si vous rajoutez un utilisateur au cours du mois où vous l’avez supprimé.

Par exemple, voici les coûts pour les utilisateurs avec des licences à différentes dates.

Utilisateur | Dates de licence | Jours comptés | Coût
---- | ------------ | ------- | -----
@octocat | 1er janvier - 31 janvier | 31 | 39 USD
@robocat | 1er février - 28 février | 28 | 35,23 $
@devtocat  | 15 janvier - 31 janvier | 17 | 21,39 $
@doctocat | 1er janvier - 15 janvier | 31 | 39 USD
@prodocat | 7 janvier - 15 janvier | 25 | 31,45 $
@monalisa | 1er janvier - 7 janvier<br>15 janvier - 31 janvier | 31 | 39 USD

{% data variables.product.prodname_ghe_managed %} a un minimum de 500 utilisateurs par instance. {% data variables.product.company_short %} vous facture un minimum de 500 utilisateurs par instance, même s’il y a moins de 500 utilisateurs avec une licence ce jour-là.

Vous pouvez voir votre utilisation actuelle dans votre [portail de compte Azure](https://portal.azure.com).

{% elsif ghec or ghes %}

{% ifversion ghec %}

Lorsque vous utilisez un compte d’entreprise sur {% data variables.product.product_location %}, le compte d’entreprise est le point central de toutes les facturations au sein de votre entreprise, y compris les organisations que détient votre entreprise.

Si vous utilisez {% data variables.product.product_name %} avec une organisation individuelle et que vous n’avez pas encore de compte d’entreprise, vous créez un compte d’entreprise et ajoutez votre organisation. Pour plus d’informations, consultez « [Création d’un compte d’entreprise](/admin/overview/creating-an-enterprise-account). »

{% data variables.product.company_short %} facture au mois le nombre total de sièges sous licence pour votre compte d’entreprise, ainsi que les services supplémentaires que vous utilisez avec {% data variables.product.prodname_ghe_cloud %}, tels que les minutes {% data variables.product.prodname_actions %}. Si vous utilisez une organisation autonome sur {% data variables.product.product_name %}, vous êtes facturé au niveau de l’organisation pour tous les usages. Pour plus d’informations sur les sièges de licence de votre facture, consultez « [À propos des tarifs par utilisateur](/billing/managing-billing-for-your-github-account/about-per-user-pricing) ».

{% elsif ghes %}

Chaque utilisateur sur {% data variables.product.product_location %} consomme un poste sur votre licence. {% data variables.product.company_short %} facture mensuellement le nombre total de postes consommés sur votre licence.

{% endif %}

{% ifversion ghec %}Pour les clients {% data variables.product.prodname_ghe_cloud %} avec un compte d’entreprise, {% data variables.product.company_short %} facture via votre compte d’entreprise sur {% data variables.product.prodname_dotcom_the_website %}. Pour les clients facturés, chaque{% elsif ghes %}Pour les clients {% data variables.product.prodname_enterprise %} facturés, {% data variables.product.company_short %} facture via un compte d’entreprise sur {% data variables.product.prodname_dotcom_the_website %}. Chaque{% endif %} facture comprend un seul montant pour tous vos services {% data variables.product.prodname_dotcom_the_website %} payants et toutes les instances de {% data variables.product.prodname_ghe_server %}. Pour plus d’informations sur {% ifversion ghes %}la gestion des licences, l’utilisation et les factures{% elsif ghec %}l’utilisation et les factures{% endif %}, consultez les sections suivantes{% ifversion ghes %} dans la documentation {% data variables.product.prodname_ghe_cloud %}.{% else %}.{% endif %}

{%- ifversion ghes %}
- « [À propos des tarifs par utilisateur](/enterprise-cloud@latest/billing/managing-billing-for-your-github-account/about-per-user-pricing) {%- endif %}
- « [Affichage de l’abonnement et de l’utilisation pour votre compte d’entreprise]({% ifversion ghes %}/enterprise-cloud@latest{% endif %}/billing/managing-billing-for-your-github-account/viewing-the-subscription-and-usage-for-your-enterprise-account) »
- « [Gestion des factures pour votre entreprise]({% ifversion ghes %}/enterprise-cloud@latest{% endif %}/billing/managing-billing-for-your-github-account/managing-invoices-for-your-enterprise) »

Les administrateurs de votre compte d’entreprise sur {% data variables.product.prodname_dotcom_the_website %} peuvent accéder à la facturation pour l’entreprise et la gérer. Pour plus d’informations, consultez « [Rôles dans une entreprise]({% ifversion ghes %}/enterprise-cloud@latest{% endif %}/admin/user-management/managing-users-in-your-enterprise/roles-in-an-enterprise){% ifversion ghec %} ».{% elsif ghes %} » dans la documentation {% data variables.product.prodname_ghe_cloud %}.{% endif %}

{% ifversion ghec %} {% data reusables.enterprise-accounts.billing-microsoft-ea-overview %} Pour plus d’informations, consultez « [Connexion d’un abonnement Azure à votre entreprise](/billing/managing-billing-for-your-github-account/connecting-an-azure-subscription-to-your-enterprise) ».
{% endif %}

{% ifversion ghes %} {% data reusables.billing.ghes-with-no-enterprise-account %} {% endif %}

{% endif %}
## Pour aller plus loin

- « [À propos des comptes d’entreprise](/admin/overview/about-enterprise-accounts) »
