---
title: À propos de la facturation pour GitHub Packages
intro: 'Si vous souhaitez utiliser {% data variables.product.prodname_registry %} au-delà du stockage ou du transfert de données inclus dans votre compte, vous êtes facturé pour l’utilisation supplémentaire.'
product: '{% data reusables.gated-features.packages %}'
redirect_from:
  - /github/setting-up-and-managing-billing-and-payments-on-github/about-billing-for-github-packages
  - /github/setting-up-and-managing-billing-and-payments-on-github/managing-billing-for-github-packages/about-billing-for-github-packages
versions:
  fpt: '*'
  ghec: '*'
type: overview
topics:
  - Packages
  - Spending limits
shortTitle: About billing
ms.openlocfilehash: 809065836c17701003917cb679ffc81cceb1b47f
ms.sourcegitcommit: 9b6371e5d55e4078c717e68536eca1fcd44a45e5
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 11/22/2022
ms.locfileid: '148180217'
---
## À propos de la facturation pour {% data variables.product.prodname_registry %}

{% data reusables.package_registry.packages-billing %}

{% data reusables.package_registry.packages-spending-limit-brief %} Pour plus d’informations, consultez « [À propos des limites de dépense](#about-spending-limits) ».

{% note %}

**Mise à jour de la facturation pour le stockage d’images conteneur :** La période d’utilisation gratuite pour le stockage d’images conteneur et la bande passante pour le {% data variables.product.prodname_container_registry %} a été étendue. Si vous utilisez le {% data variables.product.prodname_container_registry %}, vous serez informé au moins un mois à l’avance de la facturation et vous recevrez une estimation du montant que vous devriez payer. Pour plus d’informations sur le {% data variables.product.prodname_container_registry %}, consultez « [Utilisation du registre de conteneurs](/packages/working-with-a-github-packages-registry/working-with-the-container-registry) ».

{% endnote %}

{% ifversion ghec %} Si vous avez acheté {% data variables.product.prodname_enterprise %} par le biais d’un Contrat Entreprise Microsoft, vous pouvez connecter votre ID d’abonnement Azure à votre compte d’entreprise pour activer l’utilisation de {% data variables.product.prodname_registry %} et la payer au-delà des montants inclus avec votre compte. Pour plus d’informations, consultez « [Connexion d’un abonnement Azure à votre entreprise](/billing/managing-billing-for-your-github-account/connecting-an-azure-subscription-to-your-enterprise) ».
{% endif %}

Le transfert de données est réinitialisé tous les mois, contrairement à l’utilisation du stockage.

Produit | Stockage | Transfert de données (par mois)
------- | ------- | ---------
{% data variables.product.prodname_free_user %} | 500 Mo | 1 Go
{% data variables.product.prodname_pro %} | 2 Go | 10 Go
{% data variables.product.prodname_free_team %} pour les organisations | 500 Mo | 1 Go |
{% data variables.product.prodname_team %} | 2 Go | 10 Go
{% data variables.product.prodname_ghe_cloud %} | 50 Go | 100 Go

Tous les transferts de données sortants, quand ils sont déclenchés par {% data variables.product.prodname_actions %}, et les transferts de données en réception depuis n’importe quelle source sont gratuits. Nous déterminons que vous téléchargez des packages avec {% data variables.product.prodname_actions %} quand vous vous connectez à {% data variables.product.prodname_registry %} en utilisant un `GITHUB_TOKEN`.

||Hébergée|Auto-hébergé|
|-|-|-|
|Accès avec un `GITHUB_TOKEN`|Gratuit|Gratuit|
|Accès en utilisant un {% data variables.product.pat_generic %}|Gratuit|$|

L’utilisation du stockage est partagée avec les artefacts de build générés par {% data variables.product.prodname_actions %} pour les dépôts appartenant à votre compte. Pour plus d’informations, consultez « [À propos de la facturation pour {% data variables.product.prodname_actions %}](/billing/managing-billing-for-github-actions/about-billing-for-github-actions) ».

{% data variables.product.prodname_dotcom %} facture l’utilisation au compte propriétaire du dépôt dans lequel le package est publié. Si l’utilisation de votre compte dépasse ces limites et que vous avez défini une limite de dépense supérieure à 0 USD, vous payez 0,008 USD par Go de stockage par jour et 0,50 USD par Go de transfert de données.

Par exemple, si votre organisation utilise {% data variables.product.prodname_team %}, autorise des dépenses illimitées, utilise 150 Go de stockage et dispose de 50 Go de transfert de données sortant pendant un mois, elle a des dépassements de 148 Go pour le stockage et de 40 Go pour le transfert de données pour le mois concerné. Le dépassement de stockage coûterait 0,008 USD par Go par jour, soit environ 37 USD pour un mois de 31 jours. Le dépassement de transfert de données coûterait 0,50 USD par Go, soit 20 USD.

{% data reusables.dotcom_billing.pricing_calculator.pricing_cal_packages %}

À la fin du mois, {% data variables.product.prodname_dotcom %} arrondit votre transfert de données au Go le plus proche.

{% data variables.product.prodname_dotcom %} calcule l’utilisation du stockage pour chaque mois en fonction de l’utilisation horaire par Go pendant le mois concerné. Par exemple, si vous utilisez 3 Go de stockage pendant 10 jours en mars et 12 Go pendant 21 jours en mars, votre utilisation du stockage serait la suivante :

- 3 Go x 10 jours x (24 heures par jour) = 720 Go-heures
- 12 Go x 21 jours x (24 heures par jour) = 6 048 Go-heures
- 720 Go-heures + 6 048 Go-heures= 6 768 Go au total-heures
- 6 768 Go-heures / (744 heures par mois) = 9,0967 Go-mois

À la fin du mois, {% data variables.product.prodname_dotcom %} arrondit votre stockage au Mo le plus proche. Par conséquent, l’utilisation de votre stockage pour mars sera de 9,097 Go.

Vous pouvez également utiliser ce calcul au milieu d’un cycle de facturation pour estimer votre utilisation totale pour le mois. Par exemple, si vous avez une organisation qui utilise {% data variables.product.prodname_team %}, qui fournit 2 Go de stockage gratuit, et que vous utilisez 0 Go pendant les 5 premiers jours d’avril, 1,5 Go pour les 10 jours suivants et que vous prévoyez d’utiliser 3 Go pour les 15 derniers jours du cycle de facturation, la projection de votre utilisation du stockage pour le mois serait :

- 0 Go x 5 jours x (24 heures par jour) = 0 Go-heures
- 0.5 Go x 10 jours x (24 heures par jour) = 120 Go-heures
- 3 Go x 15 jours x (24 heures par jour) = 1 080 Go-heures
- 0 Go-heures + 120 Go-heures + 1 080 Go-heures = 1 200 Go-heures au total
- 1 200 Go-heures / (744 heures par mois) = 1,6 Go-mois

La projection de 1,6 Go d’utilisation de stockage pour le mois ne dépasserait pas votre limite de 2 Go, même si votre quantité de stockage réelle dépassait brièvement 2 Go.

Votre utilisation de {% data variables.product.prodname_registry %} partage la date de facturation, le mode de paiement et le reçu existants de votre compte. {% data reusables.dotcom_billing.view-all-subscriptions %}

{% data reusables.user-settings.context_switcher %}

## À propos des limites de dépense

{% data reusables.package_registry.packages-spending-limit-detailed %}

Pour éviter de dépasser votre limite de dépense, {% data variables.product.prodname_dotcom %} vérifie votre consommation de stockage en continu tout au long du mois en examinant votre utilisation actuelle et en calculant une estimation de l’utilisation à la fin du mois si aucun changement n’est apporté avant. Si, à un moment du cycle de facturation, votre utilisation mensuelle prévue dépasse votre limite de dépense, {% data variables.product.prodname_registry %} et {% data variables.product.prodname_actions %} sont désactivés pour éviter les dépassements.

Vous devez définir une limite de dépense qui couvrira votre utilisation de stockage maximale prévue à un moment donné du cycle de facturation. Par exemple, imaginez que vous avez une organisation qui utilise {% data variables.product.prodname_team %} et que vous définissez une limite de dépense de 50 USD. {% data variables.product.prodname_team %} offre 2 Go de stockage gratuit. Pour tout stockage que vous utilisez passée cette quantité, {% data variables.product.prodname_dotcom %} facture 0,008 USD par Go par jour, ou environ 0,25 USD par Go pour un mois de 31 jours. Cela signifie que la limite de dépense de 50 USD que vous définissez paie 200 Go de stockage supplémentaires pendant cette période. Si, au dixième jour du cycle de facturation, vous atteignez 202 Go de stockage, la prochaine poussée (push) d’un package ou d’un artefact {% data variables.product.prodname_actions %} échoue parce que vous avez atteint la quantité de stockage maximale pouvant être payée par votre limite de dépense dans ce cycle de facturation, même si votre consommation moyenne pour la période est inférieure à 202 Go.

Pour éviter d’atteindre votre limite de dépense dans le cycle de facturation en cours, vous pouvez supprimer une partie de votre utilisation actuelle de stockage pour libérer de l’utilisation prévue pour le reste du mois. Cette méthode est plus efficace vers le début d’un cycle de facturation. Plus vous approchez de la fin d’un cycle de facturation, moins cette méthode aura d’impact sur l’utilisation mensuelle prévue.

Pour plus d’informations sur la gestion et le changement de la limite de dépense de votre compte, consultez « [Gestion de votre limite de dépense pour {% data variables.product.prodname_registry %}](/billing/managing-billing-for-github-packages/managing-your-spending-limit-for-github-packages) ».

{% data reusables.dotcom_billing.actions-packages-unpaid-account %}
