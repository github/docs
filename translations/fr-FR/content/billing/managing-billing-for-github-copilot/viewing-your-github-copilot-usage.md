---
title: Consultation de votre utilisation de GitHub Copilot
intro: 'Vous pouvez voir combien d’utilisateurs ont accès à {% data variables.product.prodname_copilot %} dans toutes les organisations de votre entreprise.'
product: '{% data reusables.gated-features.copilot-billing %}'
miniTocMaxHeadingLevel: 3
permissions: 'Enterprise owners can view usage for {% data variables.product.prodname_copilot %} in their enterprise.'
versions:
  ghec: '*'
type: how_to
topics:
  - Copilot
shortTitle: View your usage
ms.openlocfilehash: 9b481cfd11a3c96ce98175d3b30e3b26889c4148
ms.sourcegitcommit: 6185352bc563024d22dee0b257e2775cadd5b797
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 12/09/2022
ms.locfileid: '148193289'
---
## À propos de votre utilisation de {% data variables.product.prodname_copilot %}

Vous pouvez voir les informations d’utilisation de {% data variables.product.prodname_copilot %} dans votre entreprise, détaillées par organisation, ou dans votre organisation, détaillées par état d’attribution de siège. Au niveau de l’entreprise, ces informations comprennent le nombre de sièges attribués dans chaque organisation et les dépenses totales associées à chaque organisation du cycle de facturation actuel. Au niveau de l’organisation, ces informations comprennent le nombre total de sièges, les sièges du cycle de facturation précédent reconduits, les nouveaux sièges ajoutés pendant le cycle actuel et les sièges à supprimer à la fin du cycle actuel. 

Si un administrateur d’organisation a attribué un ou plusieurs sièges au cours du cycle de facturation actuel, les informations au niveau de l’entreprise affichent un nombre décimal de sièges. Par exemple, si l’organisation a démarré le cycle de facturation avec 3 sièges attribués, puis a attribué un siège supplémentaire à la moitié du cycle, les informations d’utilisation des sièges affichent 3,5 sièges. Le « 3 » représentant les sièges attribués au début du cycle et le « 0,5 » représentant le siège supplémentaire attribué à la moitié du cycle. 

Les informations de dépense montrent le total des dépenses de chaque organisation pendant le cycle de facturation actuel. Le total des dépenses de l’organisation pendant le cycle actuel correspond généralement au nombre de sièges attribués, multiplié par le coût par siège (19 USD par siège et par mois). Toutefois, si le même membre de l’organisation se voit attribuer un siège dans plusieurs organisations, son utilisation de sièges est reflétée dans chaque organisation, mais comme l’entreprise n’est facturée qu’une seule fois, ses dépenses ne sont reflétées que dans l’organisation où un siège lui a été attribué pour la première fois.

## Consultation de votre utilisation pour {% data variables.product.prodname_copilot_for_business %}

### Au niveau de l’entreprise

{% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.billing-tab %}
1. Sous « Utilisation mensuelle de {% data variables.product.prodname_copilot_short %} », consultez le détail de votre utilisation de {% data variables.product.prodname_copilot %}.
    - Sous « Utilisation de sièges », vous pouvez voir le nombre total de sièges actuellement attribués par organisation, avec un nombre décimal représentant les sièges attribués au cours du cycle de facturation actuel.
    - Sous « Dépenses », vous pouvez voir le coût total de {% data variables.product.prodname_copilot_for_business %} pour le cycle de facturation actuel par organisation.

   ![Capture d’écran de la page d’utilisation de {% data variables.product.prodname_copilot %}](/assets/images/help/copilot/monthly-usage-enterprise.png)

### Au niveau de l’organisation

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %}
1. Dans la section « Accès » de la barre latérale, cliquez sur **{% octicon "credit-card" aria-label="The credit card icon" %} Facturation et plans**.
1. Sous « {% data variables.product.prodname_copilot_short %} », consultez le détail de votre utilisation de {% data variables.product.prodname_copilot %} et les changements à venir dans votre organisation.
 
   ![Capture d’écran de la page d’utilisation de sièges {% data variables.product.prodname_copilot %} au niveau de l’organisation](/assets/images/help/copilot/org-level-seat-view.png)
