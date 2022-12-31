---
title: À propos de la facturation pour GitHub Advanced Security
intro: 'Si vous souhaitez utiliser des {% data variables.product.prodname_GH_advanced_security %} fonctionnalités{% ifversion fpt or ghec %} dans un dépôt privé ou interne{% endif %}, vous avez besoin d’une licence{% ifversion fpt %} pour votre entreprise{% endif %}.{% ifversion fpt or ghec %} Ces fonctionnalités sont disponibles gratuitement pour les dépôts publics sur {% data variables.product.prodname_dotcom_the_website %}.{% endif %}'
product: '{% data reusables.gated-features.ghas %}'
redirect_from:
  - /admin/advanced-security/about-licensing-for-github-advanced-security
  - /billing/managing-licensing-for-github-advanced-security/about-licensing-for-github-advanced-security
  - /github/setting-up-and-managing-billing-and-payments-on-github/about-licensing-for-github-advanced-security
  - /github/setting-up-and-managing-billing-and-payments-on-github/managing-licensing-for-github-advanced-security/about-licensing-for-github-advanced-security
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
type: overview
topics:
  - Advanced Security
  - Enterprise
  - Licensing
shortTitle: Advanced Security billing
ms.openlocfilehash: 09e7634b5ab0ace00c847f9db9faf229fc8e840e
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/05/2022
ms.locfileid: '147066929'
---
## À propos de la facturation pour {% data variables.product.prodname_GH_advanced_security %}

{% ifversion fpt %}

Si vous souhaitez utiliser les fonctionnalités de {% data variables.product.prodname_GH_advanced_security %} sur un dépôt en dehors d’un dépôt public sur {% data variables.product.prodname_dotcom_the_website %}, vous avez besoin d’une licence {% data variables.product.prodname_GH_advanced_security %}, disponible avec {% data variables.product.prodname_ghe_cloud %} ou {% data variables.product.prodname_ghe_server %}. Pour plus d’informations sur {% data variables.product.prodname_GH_advanced_security %}, consultez « [À propos de {% data variables.product.prodname_GH_advanced_security %}](/github/getting-started-with-github/about-github-advanced-security) ».

Pour plus d’informations sur la facturation de {% data variables.product.prodname_GH_advanced_security %}, consultez la [documentation sur {% data variables.product.prodname_ghe_cloud %}](/enterprise-cloud@latest/billing/managing-billing-for-github-advanced-security/about-billing-for-github-advanced-security).

{% elsif ghec %}

Si vous souhaitez utiliser les fonctionnalités de {% data variables.product.prodname_GH_advanced_security %} sur un dépôt en dehors d’un dépôt public sur {% data variables.product.prodname_dotcom_the_website %}, vous avez besoin d’une licence {% data variables.product.prodname_GH_advanced_security %}. Pour plus d’informations sur {% data variables.product.prodname_GH_advanced_security %}, consultez « [À propos de {% data variables.product.prodname_GH_advanced_security %}](/github/getting-started-with-github/about-github-advanced-security) ».

{% elsif ghes %}

Vous pouvez mettre des fonctionnalités supplémentaires pour la sécurité du code à la disposition des utilisateurs en achetant et en chargeant une licence pour {% data variables.product.prodname_GH_advanced_security %}. Pour plus d’informations sur {% data variables.product.prodname_GH_advanced_security %}, consultez « [À propos de {% data variables.product.prodname_GH_advanced_security %}](/github/getting-started-with-github/about-github-advanced-security) ».

{% endif %}

{% ifversion ghes or ghec %}

{% data reusables.advanced-security.license-overview %}

Pour discuter des licences {% data variables.product.prodname_GH_advanced_security %} pour votre entreprise, contactez l’{% data variables.contact.contact_enterprise_sales %}.

## À propos des nombres de commiteurs pour {% data variables.product.prodname_GH_advanced_security %}

{% data reusables.advanced-security.about-committer-numbers-ghec-ghes %}

{% ifversion fpt or ghes or ghec %}

{% data reusables.advanced-security.managing-license-usage-ghec-ghes %}

{% endif %}

Vous pouvez appliquer des stratégies pour autoriser ou interdire l’utilisation d’{% data variables.product.prodname_advanced_security %} par les organisations détenues par votre compte d’entreprise. Pour plus d’informations, consultez « [Application de stratégies pour {% data variables.product.prodname_advanced_security %} dans votre entreprise]({% ifversion fpt %}/enterprise-cloud@latest/{% endif %}/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-advanced-security-in-your-enterprise){% ifversion fpt %} » dans la documentation {% data variables.product.prodname_ghe_cloud %}.{% else %}. »{% endif %}

{% ifversion fpt or ghes or ghec %}

Pour plus d’informations sur l’affichage de l’utilisation des licences, consultez « [Affichage de votre utilisation de {% data variables.product.prodname_GH_advanced_security %}](/billing/managing-billing-for-github-advanced-security/viewing-your-github-advanced-security-usage) ».

{% endif %}

## Présentation de l’utilisation des commiteurs actifs

L’exemple de chronologie suivant montre comment le nombre de commiteurs actifs pour {% data variables.product.prodname_GH_advanced_security %} peut changer au fil du temps dans une entreprise. Pour chaque mois, vous trouverez des événements ainsi que le nombre de commiteurs résultants.

| Date | Événements au cours du mois | Nombre total de commiteurs | 
| :- | :- | -: | 
| <nobr>15 avril</nobr> | Un membre de votre entreprise active {% data variables.product.prodname_GH_advanced_security %} pour le dépôt **X**. Le dépôt **X** a 50 commiteurs au cours des 90 derniers jours. | **50** | 
| <nobr>1er mai</nobr> | Le développeur **A** quitte l’équipe travaillant sur le dépôt **X**. Les contributions du développeur **A** continuent de compter pendant 90 jours. | **50** | **50** |
| <nobr>1 août</nobr> | Les contributions du développeur **A** ne comptent plus pour les licences requises, car 90 jours se sont écoulés. | <sub>_50 - 1_</sub></br>**49** | 
| <nobr>15 août</nobr> | Un membre de votre entreprise active {% data variables.product.prodname_GH_advanced_security %} pour un deuxième dépôt (**Y**). Au cours des 90 derniers jours, un total de 20 développeurs ont contribué à ce dépôt. Parmi ces 20 développeurs, 10 ont également travaillé sur le dépôt **X** et n’ont pas besoin de licences supplémentaires. | <sub>_49 + 10_</sub><br/>**59** | 
| <nobr>16 août</nobr> | Un membre de votre entreprise désactive {% data variables.product.prodname_GH_advanced_security %} pour le dépôt **X**. Parmi les 49 développeurs qui travaillaient sur le dépôt **X**, 10 travaillent toujours sur le dépôt **Y**, qui a un total de 20 développeurs ayant contribué au cours des 90 derniers jours. | <sub>_49 - 29_</sub><br/>**20** |

{% note %}

**Remarque :** Un utilisateur est marqué comme actif quand ses commits sont poussés (push) vers une branche d’un dépôt, même si leur création remonte à plus de 90 jours.

{% endnote %}

## Tirer le meilleur parti de {% data variables.product.prodname_GH_advanced_security %}

{% data reusables.advanced-security.getting-the-most-from-your-license %}

{% endif %}
