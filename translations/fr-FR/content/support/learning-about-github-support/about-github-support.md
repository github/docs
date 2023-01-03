---
title: À propos du support GitHub
intro: Vous pouvez contacter le support GitHub pour résoudre les problèmes rencontrés lors de l’utilisation de GitHub.
shortTitle: About GitHub Support
versions:
  fpt: '*'
  ghec: '*'
  ghes: '*'
  ghae: '*'
redirect_from:
  - /enterprise/admin/enterprise-support/about-github-enterprise-support
  - /admin/enterprise-support/about-github-enterprise-support
  - /admin/enterprise-support/overview/about-github-enterprise-support
  - /articles/about-github-support
  - /github/working-with-github-support/about-github-support
  - /articles/github-enterprise-cloud-support
  - /github/working-with-github-support/github-enterprise-cloud-support
  - /articles/business-plan-support
  - /articles/github-business-cloud-support
  - /admin/enterprise-support/about-support-for-advanced-security
  - /enterprise-server/admin/enterprise-support/about-support-for-advanced-security
topics:
  - Support
ms.openlocfilehash: aa2b407b96cc7ee2ecc20fee9782e3084b3627db
ms.sourcegitcommit: 6185352bc563024d22dee0b257e2775cadd5b797
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 12/09/2022
ms.locfileid: '148192912'
---
## À propos de {% data variables.contact.github_support %}

Les options de support disponibles pour les utilisateurs {% data variables.product.prodname_dotcom %} dépendent des produits utilisés par leurs comptes personnels, les organisations ou les entreprises dont ils sont membres et les instances {% data variables.product.prodname_ghe_server %} qu’ils gèrent. Chaque produit inclut un niveau de support et les comptes par défaut qui utilisent {% data variables.product.prodname_enterprise %} peuvent acheter {% data variables.contact.premium_support %}.

{% ifversion fpt %} Si vous êtes membre d’une organisation qui utilise {% data variables.product.prodname_enterprise %}, vous pouvez utiliser le menu déroulant dans le coin supérieur de droite de {% data variables.product.prodname_docs %} pour afficher une version de ces articles appropriée à votre produit. Pour plus d’informations, consultez « [À propos des versions des documents GitHub](/get-started/learning-about-github/about-versions-of-github-docs) ».
{% endif %}

{% ifversion not ghae %}

|  | {% data variables.product.prodname_gcf %} | Support standard | Support Premium |
|----|---------------|-------|---------------|
| {% data variables.product.prodname_free_user %} | {% octicon "check" aria-label="Check" %}  |  |  |  
| {% data variables.product.prodname_pro %} | {% octicon "check" aria-label="Check" %}  | {% octicon "check" aria-label="Check" %}  |  |  
| {% data variables.product.prodname_team %} | {% octicon "check" aria-label="Check" %}  | {% octicon "check" aria-label="Check" %}  |  |
| {% data variables.product.prodname_ghe_cloud %} | {% octicon "check" aria-label="Check" %}  | {% octicon "check" aria-label="Check" %}  | Achat impossible |
| {% data variables.product.prodname_ghe_server %} | {% octicon "check" aria-label="Check" %}  | {% octicon "check" aria-label="Check" %}  | Achat impossible |

{% endif %}

{% ifversion ghes %}

Vous pouvez contacter {% data variables.contact.enterprise_support %} via le {% data variables.contact.contact_enterprise_portal %} pour obtenir de l’aide sur :
 - Installation et utilisation de {% data variables.product.product_name %}
 - Identification et vérification des causes des erreurs suspectes
 - Installation et utilisation de {% data variables.product.prodname_advanced_security %}

{% endif %}

{% ifversion ghes or ghec %}

{% data reusables.support.premium-support-features %}

Pour plus d’informations, consultez « [À propos du support Premium GitHub](/support/about-github-support/about-github-premium-support) ».

{% endif %}

{% ifversion fpt or ghec or ghae %}

Avant de contacter {% data variables.contact.github_support %}, vérifiez s’il existe actuellement des incidents affectant les services sur {% data variables.product.product_name %} sur {%- ifversion fpt or ghec %} [État de {% data variables.product.prodname_dotcom %}](https://githubstatus.com/) {% - elsif ghae %} [État de {% data variables.product.product_name %}](https://ghestatus.com/) {%- endif %}. Pour plus d’informations, consultez « [À propos de l’état GitHub](#about-github-status) ».

{% endif %}

{% ifversion fpt %} {% data reusables.support.free-and-paid-support %}

Pour signaler des problèmes de compte, de sécurité et d’abus, ou pour recevoir un support assisté pour un compte payant, visitez les données {% data variables.contact.contact_support_portal %}. Pour plus d’informations, consultez la page « [Création d’un ticket de support](/support/contacting-github-support/creating-a-support-ticket) ».
{% endif %}

{% ifversion fpt %} Si vous avez un produit payant ou si vous êtes membre d’une organisation avec un produit payant, vous pouvez contacter {% data variables.contact.github_support %} en anglais.
{% else %} avec {% data variables.product.product_name %}, vous avez accès au support en anglais et en japonais.
{% endif %}

{% ifversion fpt or ghec or ghes %} {% data reusables.support.support-ticket-translation-option %} {% endif %}

{% ifversion ghes or ghec %}

Pour contacter {% data variables.contact.github_support %}, visitez {% data variables.contact.contact_support_portal %}. Pour plus d’informations, consultez la page « [Création d’un ticket de support](/support/contacting-github-support/creating-a-support-ticket) ».

{% elsif ghae %}

Vous pouvez contacter {% data variables.contact.enterprise_support %} via {% data variables.contact.ae_azure_portal %} pour signaler des problèmes en écriture. Pour plus d’informations, consultez la page « [Création d’un ticket de support](/support/contacting-github-support/creating-a-support-ticket) ».

{% endif %}

{% ifversion not ghae %} La communication par e-mail à partir du support GitHub est toujours envoyée à partir d’une adresse `github.com` ou `githubsupport.com`.
{% endif %}

## Étendue du support

{% data reusables.support.scope-of-support %}

{% ifversion ghec or fpt or ghae %}
## À propos de l’état GitHub

Vous pouvez rechercher les incidents affectant actuellement les services {% data variables.product.product_name %} et afficher des informations sur les incidents passés sur la [page État]({% ifversion fpt or ghec %}https://githubstatus.com{% elsif ghae %}https://ghestatus.com{% endif %}) de {% data variables.product.prodname_dotcom %}.

Vous pouvez également vous abonner et être alerté par e-mail, SMS et webhook chaque fois qu’un incident affecte {% data variables.product.product_name %}.

{% endif %}

{% ifversion ghec or ghes %}
## À propos des droits d’utilisation du support

Propriétaires d’entreprise et gestionnaires de facturation disposent automatiquement d’un droit d'utilisation du support, ce qui leur permet de créer, d’afficher et de commenter les tickets de support associés à leur compte d’entreprise.

Les propriétaires d’entreprise peuvent également ajouter des droits d’utilisation du support aux membres des organisations appartenant à leur compte d’entreprise, ce qui permet aux membres de créer, d’afficher et de commenter des tickets de support. Pour plus d’informations, consultez « [Gestion des droits au support pour votre entreprise](/enterprise-cloud@latest/admin/user-management/managing-users-in-your-enterprise/managing-support-entitlements-for-your-enterprise) ».

{% endif %}

{% ifversion fpt or ghec %}
## Octroi de l’accès temporaire {% data variables.contact.github_support %} à un dépôt privé

Si {% data variables.contact.github_support %} doivent accéder à un dépôt privé pour répondre à votre demande de support, le propriétaire du référentiel reçoit un e-mail avec un lien pour accepter ou refuser l’accès temporaire. Le propriétaire aura 20 jours pour accepter ou refuser la demande avant l’expiration de la demande. Si le propriétaire accepte la demande, {% data variables.contact.github_support %} ont accès au référentiel pendant cinq jours. Au cours de cette fenêtre, le personnel {% data variables.contact.github_support %} disposant des privilèges requis peut déverrouiller le dépôt pendant deux heures maximum à la fois et le reverrouiller si le travail est terminé tôt. Tout accès du personnel {% data variables.contact.github_support %} génère des événements de journal d’audit, et la visibilité du dépôt n’est affectée à aucun moment.

{% data variables.contact.github_support %} n’accèderont jamais à vos dépôts privés sans votre consentement explicite. Pour plus d’informations, consultez les [Conditions d’utilisation du service](/free-pro-team@latest/github/site-policy/github-terms-of-service#3-access).
{% endif %}

{% ifversion ghec or ghes %}
## Contacter les ventes GitHub et la formation GitHub

Pour les tarifs, les licences, les renouvellements, les devis, les paiements et d’autres questions connexes, contactez {% data variables.contact.contact_enterprise_sales %} ou appelez [+1 (877) 448-4820](tel:+1-877-448-4820).

Pour en savoir plus sur les options de formation, y compris les formations personnalisées, consultez [le site de formation de {% data variables.product.company_short %}](https://services.github.com/).

{% note %}

**Remarque :** la formation est incluse dans {% data variables.product.premium_plus_support_plan %}. Pour plus d’informations, consultez « [À propos du support Premium GitHub](/support/about-github-support/about-github-premium-support) ».

{% endnote %}

{% endif %}

{% ifversion ghes or ghec %}
## Heures d’ouverture

### Support en anglais

Pour les problèmes standard non urgents, nous offrons un support en anglais 24 heures par jour, 5 jours par semaine, à l’exclusion des week-ends et des jours fériés nationaux des États-Unis. Le temps de réponse standard est de 24 heures.

{% ifversion ghes %} Pour des problèmes urgents, nous sommes disponibles 24 heures par jour, 7 jours par semaine, même pendant les vacances nationales des États-Unis.
{% endif %}

### Support en japonais

Pour les problèmes standard non urgents, le support en japonais est disponible du lundi au vendredi de 9h00 à 17h00 JST, à l’exclusion des fêtes nationales au Japon. 

{% ifversion ghes %} Pour des problèmes urgents, nous offrons un support en anglais 24 heures par jour, 7 jours par semaine, même pendant les vacances nationales des États-Unis.
{% endif %}

Pour obtenir la liste complète des fêtes nationales américaines et japonaises observées par {% data variables.contact.enterprise_support %}, consultez « [Planification des vacances](#holiday-schedules) ».

## Planification des vacances

Pour des problèmes urgents, nous pouvons vous aider en anglais 24 heures par jour, 7 jours par semaine, y compris les jours fériés américains et japonais.

### Vacances aux États-Unis

{% data variables.contact.enterprise_support %} observe ces jours fériés en usage aux États-Unis, bien que notre équipe de support technique mondiale soit disponible pour répondre aux tickets urgents.

{% data reusables.enterprise_enterprise_support.support-holiday-availability %}

### Vacances au Japon

{% data variables.contact.enterprise_support %} ne fournit pas de support en langue japonaise du 28 décembre au 3 janvier et non plus pour les jours fériés répertoriés dans [国民の祝日について - 内閣府](https://www8.cao.go.jp/chosei/shukujitsu/gaiyou.html).

{% data reusables.enterprise_enterprise_support.installing-releases %}

{% endif %}

{% ifversion ghec or ghes or ghae %}

## Résolution et fermeture des tickets de support

{% data reusables.support.enterprise-resolving-and-closing-tickets %}

{% endif %}

## Pour aller plus loin

{%- ifversion ghes %}
- Section 10 sur le support pour le « [Contrat de licence {% data variables.product.prodname_ghe_server %}](https://enterprise.github.com/license) » {%- endif %}
- « [Création d’un ticket de support](/support/contacting-github-support/creating-a-support-ticket) » {%- ifversion not ghae %}
- « [Affichage et mise à jour des tickets de support](/support/contacting-github-support/viewing-and-updating-support-tickets) » {%- endif %}
