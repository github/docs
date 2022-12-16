---
title: Configuration de pieds de page personnalisés
intro: 'Vous pouvez permettre aux utilisateurs d’accéder facilement aux liens spécifiques à l’entreprise en ajoutant des pieds de page personnalisés à {% data variables.product.product_name %}.'
versions:
  ghec: '*'
  ghes: '>=3.4'
  ghae: '>= 3.4'
type: how_to
topics:
  - Enterprise
  - Fundamentals
shortTitle: Configure custom footers
ms.openlocfilehash: d051e2399841e90291de62e496c534520465235a
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/10/2022
ms.locfileid: '145106946'
---
Les propriétaires d’entreprise peuvent configurer {% data variables.product.product_name %} pour afficher des pieds de page personnalisés pouvant comporter jusqu’à cinq liens supplémentaires.

![Pied de page personnalisé](/assets/images/enterprise/custom-footer/octodemo-footer.png)

Le pied de page personnalisé s’affiche au-dessus du pied de page {% data variables.product.prodname_dotcom %} {% ifversion ghes or ghae %}pour tous les utilisateurs, sur toutes les pages de {% data variables.product.product_name %}{% elsif ghec %}pour tous les membres et collaborateurs d’entreprise, sur toutes les pages des dépôts et des organisations qui appartiennent à l’entreprise{% endif %}.

## Configuration de pieds de page personnalisés pour votre entreprise

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %}

1. Sous « Paramètres », cliquez sur **Profil**.
{%- ifversion ghec %} ![Paramètres de profil d’entreprise](/assets/images/enterprise/custom-footer/enterprise-profile-ghec.png) {%- else %} ![Paramètres de profil d’entreprise](/assets/images/enterprise/custom-footer/enterprise-profile-ghes.png) {%- endif %}

1. En haut de la section Profil, cliquez sur **Pied de page personnalisé**.
![Section Pied de page personnalisé](/assets/images/enterprise/custom-footer/custom-footer-section.png)

1. Ajoutez jusqu’à cinq liens dans les champs affichés.
![Ajouter des liens de pied de page](/assets/images/enterprise/custom-footer/add-footer-links.png)

1. Cliquez sur **Mettre à jour le pied de page personnalisé** pour enregistrer le contenu et afficher le pied de page personnalisé.
![Mettre à jour le pied de page personnalisé](/assets/images/enterprise/custom-footer/update-custom-footer.png)
