---
title: À propos de la facturation de GitHub Actions
intro: 'Si vous souhaitez utiliser {% data variables.product.prodname_actions %} au-delà du stockage ou des minutes inclus dans votre compte, vous êtes facturé pour l’utilisation supplémentaire.'
miniTocMaxHeadingLevel: 3
redirect_from:
  - /github/setting-up-and-managing-billing-and-payments-on-github/about-billing-for-github-actions
  - /github/setting-up-and-managing-billing-and-payments-on-github/managing-billing-for-github-actions/about-billing-for-github-actions
versions:
  fpt: '*'
  ghec: '*'
type: overview
topics:
  - Actions
  - Spending limits
shortTitle: Billing for GitHub Actions
ms.openlocfilehash: fcc8f84b8a11b214ca66e8a3851a1afc9df6213a
ms.sourcegitcommit: 9af8891fea10039b3374c76818634e05410e349d
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 12/06/2022
ms.locfileid: '148191885'
---
## À propos de la facturation de {% data variables.product.prodname_actions %}

{% data reusables.actions.actions-billing %}

{% data reusables.actions.actions-spending-limit-brief %} Pour plus d’informations, consultez « [À propos des limites de dépense](#about-spending-limits) ».

{% ifversion ghec %} Si vous avez acheté {% data variables.product.prodname_enterprise %} par le biais d’un Contrat Entreprise Microsoft, vous pouvez connecter votre ID d’abonnement Azure à votre compte d’entreprise pour activer l’utilisation de {% data variables.product.prodname_actions %} et la payer au-delà des montants inclus avec votre compte. Pour plus d’informations, consultez « [Connexion d’un abonnement Azure à votre entreprise](/billing/managing-billing-for-your-github-account/connecting-an-azure-subscription-to-your-enterprise) ».
{% endif %}

Les minutes sont réinitialisées chaque mois, contrairement à l’utilisation du stockage.

### Minutes et stockage inclus

{% ifversion actions-hosted-runners %} {% note %}

**Remarque** : Les minutes de droit d’utilisation ne peuvent pas être utilisées pour les exécuteurs Windows et Ubuntu via 2 cœurs. Ces exécuteurs seront toujours facturés, y compris dans les dépôts publics. Pour plus d’informations, consultez « [Tarifs à la minute pour les exécuteurs](/billing/managing-billing-for-github-actions/about-billing-for-github-actions#per-minute-rates) ».

{% endnote %} {% endif %}

|Produit | Stockage | Minutes (par mois)|
|------- | ------- | ---------|
| {% data variables.product.prodname_free_user %} | 500 Mo | 2 000 |
| {% data variables.product.prodname_pro %} | 1 Go | 3 000 |
| {% data variables.product.prodname_free_team %} pour les organisations | 500 Mo | 2 000 |
| {% data variables.product.prodname_team %} | 2 Go | 3 000 |
| {% data variables.product.prodname_ghe_cloud %} | 50 Go | 50 000 |

Les travaux qui s’exécutent sur les exécuteurs Windows et macOS hébergés par {% data variables.product.prodname_dotcom %} consomment des minutes à 2 et 10 fois le taux de consommation des travaux sur les exécuteurs Linux. Par exemple, l’utilisation de 1 000 minutes Windows consomme 2 000 des minutes incluses dans votre compte. L’utilisation de 1 000 minutes macOS consomme 10 000 des minutes incluses dans votre compte.

### Multiplicateurs de minutes

| Système d’exploitation | Multiplicateur de minutes |
|------- | ---------|
| Linux | 1 |
| macOS| 10 |
| Windows | 2 |

Le stockage utilisé par un dépôt est le stockage total utilisé par les artefacts {% data variables.product.prodname_actions %} et {% data variables.product.prodname_registry %}. Le coût de stockage correspond à l’utilisation totale de tous les référentiels détenus par votre compte. Pour plus d’informations sur les tarifs de {% data variables.product.prodname_registry %}, consultez « [À propos de la facturation pour {% data variables.product.prodname_registry %}](/billing/managing-billing-for-github-packages/about-billing-for-github-packages) ».

 Si l’utilisation de votre compte dépasse ces limites et que vous avez défini une limite de dépense supérieure à 0 USD, vous paierez 0,008 USD par Go de stockage, par jour et par minute d’utilisation, selon le système d’exploitation qu’utilise l’exécuteur hébergé par {% data variables.product.prodname_dotcom %}. {% data variables.product.prodname_dotcom %} arrondit les minutes et minutes partielles utilisées par chaque travail à la minute entière la plus proche.

{% note %}

**Remarque :** Les multiplicateurs de minute ne s’appliquent pas aux taux par minute indiqués ci-dessous.

{% endnote %}

### Taux par minute

{% data reusables.billing.billing-standard-runners %} {%- ifversion actions-hosted-runners %} {% data reusables.billing.billing-hosted-runners %} {%- endif %}

- Le nombre de travaux que vous pouvez exécuter simultanément sur tous les dépôts de votre compte d’utilisateur ou d’organisation dépend de votre plan GitHub. Pour plus d’informations, consultez « [Limites d’utilisation et facturation](/actions/reference/usage-limits-billing-and-administration) » pour les exécuteurs hébergés par {% data variables.product.prodname_dotcom %} et [« À propos des exécuteurs auto-hébergés](/actions/hosting-your-own-runners/about-self-hosted-runners/#usage-limits) » pour les limites d’utilisation des exécuteurs auto-hébergés.
- {% data reusables.user-settings.context_switcher %} {% ifversion actions-hosted-runners %} 
- Pour les {% data variables.actions.hosted_runner %}s, aucun coût supplémentaire n’est facturé pour les configurations qui attribuent des adresses IP statiques publiques à un {% data variables.actions.hosted_runner %}. Pour plus d’informations sur les {% data variables.actions.hosted_runner %}s, consultez « [Utilisation des {% data variables.actions.hosted_runner %}s](/actions/using-github-hosted-runners/using-larger-runners) ».
- Les minutes de droit d’utilisation ne peuvent pas être utilisées pour les {% data variables.actions.hosted_runner %}s.
- Les {% data variables.actions.hosted_runner %} ne sont pas gratuits pour les référentiels publics.
{% endif %}

## Calcul des dépenses de minute et de stockage

{% data reusables.dotcom_billing.pricing_calculator.pricing_cal_actions %}

À la fin du mois, {% data variables.product.prodname_dotcom %} calcule le coût des minutes et du stockage utilisés par rapport au montant inclus dans votre compte.

### Exemple de calcul du coût des minutes

Par exemple, si votre organisation utilise {% data variables.product.prodname_team %} et autorise des dépenses illimitées, l’utilisation de 5 000 minutes peut entraîner un coût supplémentaire total des minutes et du stockage de 56 USD, selon les systèmes d’exploitation utilisés pour exécuter les travaux.

- 5 000 minutes (3 000 Linux et 2 000 Windows) = 56 USD (24 USD + 32 USD).
  - 3 000 minutes Linux à 0,008 USD par minute = 24 USD.
  - 2 000 minutes Windows à 0,016 USD par minute = 32 USD.

{% data variables.product.prodname_dotcom %} calcule l’utilisation du stockage pour chaque mois en fonction de l’utilisation horaire pendant le mois concerné.

### Exemple de calcul du coût de stockage

Par exemple, si vous utilisez 3 Go de stockage pendant 10 jours en mars et 12 Go pendant 21 jours en mars, votre utilisation du stockage serait la suivante :

- 3 Go x 10 jours x (24 heures par jour) = 720 Go-heures
- 12 Go x 21 jours x (24 heures par jour) = 6 048 Go-heures
- 720 Go-heures + 6 048 Go-heures= 6 768 Go-heures
- 6 768 Go-heures / (744 heures par mois) = 9,0967 Go-mois

À la fin du mois, {% data variables.product.prodname_dotcom %} arrondit votre stockage au Mo le plus proche. Par conséquent, l’utilisation de votre stockage pour mars sera de 9,097 Go.

Votre utilisation de {% data variables.product.prodname_actions %} partage la date de facturation, le mode de paiement et le reçu existants de votre compte. {% data reusables.dotcom_billing.view-all-subscriptions %}

## À propos des limites de dépense

{% data reusables.actions.actions-spending-limit-detailed %}

Pour plus d’informations sur la gestion et la modification de la limite de dépense de votre compte, consultez « [Gestion de votre limite de dépense pour {% data variables.product.prodname_actions %}](/billing/managing-billing-for-github-actions/managing-your-spending-limit-for-github-actions) ».

{% data reusables.dotcom_billing.actions-packages-unpaid-account %}
