---
title: À propos de la facturation de GitHub Copilot
intro: 'Si vous souhaitez utiliser {% data variables.product.prodname_copilot %}, vous avez besoin d’un abonnement pour {% data variables.product.prodname_copilot_for_individuals %} dans votre compte personnel, ou vous devez vous voir attribuer un siège par une organisation sur {% data variables.product.prodname_ghe_cloud %} avec un abonnement pour {% data variables.product.prodname_copilot_for_business %}.'
product: '{% data reusables.gated-features.copilot-billing %}'
versions:
  feature: copilot
topics:
  - Copilot
shortTitle: Billing for GitHub Copilot
ms.openlocfilehash: f82f284ac2bdb8a4bc56587ff17826ae7ca96585
ms.sourcegitcommit: 6185352bc563024d22dee0b257e2775cadd5b797
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 12/09/2022
ms.locfileid: '148193294'
---
## À propos de la facturation pour {% data variables.product.prodname_copilot %}

Si vous souhaitez utiliser {% data variables.product.prodname_copilot %}, vous avez besoin d’un abonnement pour votre compte personnel {% data variables.product.prodname_dotcom %}, ou si vous êtes membre d’une organisation {% data variables.product.prodname_ghe_cloud %} avec un abonnement {% data variables.product.prodname_copilot_business_short %}, un administrateur d’organisation doit vous attribuer un siège. Pour plus d’informations sur {% data variables.product.prodname_copilot %}, consultez « [À propos de {% data variables.product.prodname_copilot %}](/en/copilot/overview-of-github-copilot/about-github-copilot) ». 

Pour plus d’informations sur la gestion de {% data variables.product.prodname_copilot %} via {% data variables.product.prodname_ghe_cloud %}, consultez « [Application de stratégies pour {% data variables.product.prodname_copilot %} dans votre entreprise](/enterprise-cloud@latest/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-github-copilot-in-your-enterprise){% ifversion ghec %} ».{% endif %}{% ifversion fpt %} dans la documentation de {% data variables.product.prodname_ghe_cloud %}.{% endif %}

Avant de souscrire à un abonnement payant pour un compte personnel, vous pouvez installer une version d’essai de 60 jours pour évaluer {% data variables.product.prodname_copilot %}. Pour commencer un essai, vous devrez choisir un cycle de facturation mensuel ou annuel, et fournir une méthode de paiement. Si vous n’annulez pas l’essai avant la fin des 60 jours, l’essai sera automatiquement converti en un abonnement payant. Vous pouvez annuler votre essai {% data variables.product.prodname_copilot %} à tout moment pendant les 60 jours et vous ne serez pas facturé. Si vous annulez avant la fin de la période d’essai, vous continuerez à avoir accès à {% data variables.product.prodname_copilot %} jusqu’à la fin de la période d’essai de 60 jours. Pour plus d’informations, consultez « [Gestion de votre abonnement {% data variables.product.prodname_copilot_for_individuals %}](/en/billing/managing-billing-for-github-copilot/managing-your-github-copilot-for-individuals-subscription) ».

## Tarifs de {% data variables.product.prodname_copilot_for_individuals %}


L’abonnement {% data variables.product.prodname_copilot %} est disponible sur un cycle mensuel ou annuel. Si vous choisissez un cycle de facturation mensuel, vous serez facturé 10 $ par mois civil. Si vous choisissez un cycle de facturation annuel, vous serez facturé 100 $ par an. Vous pouvez modifier votre cycle de facturation à tout moment, et la modification sera prise en compte dès le début de votre prochain cycle de facturation.

Si vous avez un abonnement {% data variables.product.prodname_copilot %} actif et que vous vous voyez attribuer un siège dans le cadre d’un abonnement {% data variables.product.prodname_copilot_for_business %} dans {% data variables.product.prodname_ghe_cloud %}, votre abonnement {% data variables.product.prodname_copilot %} personnel est automatiquement annulé. Vous recevrez un remboursement au prorata du cycle de facturation actuel restant de votre abonnement personnel. Vous pourrez ensuite continuer à utiliser {% data variables.product.prodname_copilot %} selon les stratégies définies au niveau de l’entreprise ou de l’organisation.

Un abonnement gratuit à {% data variables.product.prodname_copilot %} est disponible pour les étudiants vérifiés, les enseignants et les chargés de maintenance des dépôts open source connus sur {% data variables.product.company_short %}. Si vous répondez aux critères en tant que mainteneur open source, vous serez automatiquement notifié lorsque vous visiterez la page d’abonnement de {% data variables.product.prodname_copilot %}. En tant qu’étudiant, si vous recevez actuellement le {% data variables.product.prodname_student_pack %}, un abonnement gratuit vous sera également proposé lorsque vous visiterez la page d’abonnement de {% data variables.product.prodname_copilot %}. Pour plus d’informations sur le {% data variables.product.prodname_student_pack %}, consultez « [Demander à rejoindre {% data variables.product.prodname_global_campus %} en tant qu’étudiant](/free-pro-team@latest/education/explore-the-benefits-of-teaching-and-learning-with-github-education/github-global-campus-for-students/apply-to-github-global-campus-as-a-student) ».

{% ifversion ghec %}
## Tarifs de {% data variables.product.prodname_copilot_for_business %}

L’abonnement {% data variables.product.prodname_copilot_for_business %} est disponible sur un cycle mensuel et est facturé 19 USD par utilisateur et par mois. La facturation de {% data variables.product.prodname_copilot %} dans {% data variables.product.prodname_ghe_cloud %} est traitée à la fin de chaque cycle de facturation. 

Les utilisateurs facturés sont calculés en fonction du nombre de sièges {% data variables.product.prodname_copilot %} attribués au début d’un cycle de facturation, ou attribués pendant le cycle de facturation. Tout siège attribué pendant le cycle de facturation est calculé au prorata en fonction du nombre de jours restants dans le cycle. Toute suppression d’attribution de siège au cours d’un cycle de facturation prend effet à partir du début du cycle suivant.

L’attribution de sièges pour {% data variables.product.prodname_copilot %} dans {% data variables.product.prodname_ghe_cloud %} est gérée par les administrateurs des organisations qui ont reçu l’accès à {% data variables.product.prodname_copilot %} au niveau de l’entreprise. Si vous êtes membre de plusieurs organisations sous la même entreprise, vous pouvez vous voir attribuer des sièges {% data variables.product.prodname_copilot %} dans plusieurs organisations, mais votre entreprise ne sera facturée qu’une seule fois. Pour plus d’informations, consultez « [Configuration des paramètres {% data variables.product.prodname_copilot %} dans votre organisation](/enterprise-cloud@latest/copilot/configuring-github-copilot/configuring-github-copilot-settings-in-your-organization) ».

Les paramètres de stratégie et la vue d’ensemble de l’utilisation de {% data variables.product.prodname_copilot %} dans {% data variables.product.prodname_ghe_cloud %} sont disponibles au niveau de l’entreprise. Pour plus d’informations, consultez « [Application de stratégies pour {% data variables.product.prodname_copilot %} dans votre entreprise](/enterprise-cloud@latest/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-github-copilot-in-your-enterprise) » et « [Consultation de votre utilisation de {% data variables.product.prodname_copilot %}](/enterprise-cloud@latest/billing/managing-billing-for-github-copilot/viewing-your-github-copilot-usage) ».

{% endif %}
