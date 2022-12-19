---
title: Gestion des fonctionnalités GitHub Advanced Security pour votre entreprise
intro: 'Vous pouvez contrôler les fonctionnalités {% data variables.product.prodname_GH_advanced_security %} qui sécurisent et analysent le code dans toutes les organisations appartenant à votre entreprise.'
permissions: 'Enterprise owners can manage {% data variables.product.prodname_advanced_security %} features for organizations in an enterprise.'
versions:
  feature: secret-scanning-enterprise-level
type: how_to
topics:
  - Alerts
  - Advanced Security
  - Dependency graph
  - Secret scanning
  - Repositories
shortTitle: Manage GitHub Advanced Security
ms.openlocfilehash: 0d48863d55805c5386435b7fef52a61a4ba7d43c
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 10/25/2022
ms.locfileid: '148107204'
---
## À propos de la gestion des fonctionnalités {% data variables.product.prodname_advanced_security %}

Vous pouvez utiliser les fonctionnalités {% data variables.product.prodname_advanced_security %} pour durcir la sécurité des organisations de votre entreprise. Pour simplifier la gestion de {% data variables.product.prodname_advanced_security %}, vous pouvez activer ou désactiver chaque fonctionnalité pour tous les dépôts existants et/ou nouveaux des organisations appartenant à votre entreprise.

{% ifversion ghes or ghec %}Pour plus d’informations sur l’achat d’une licence pour {% data variables.product.prodname_GH_advanced_security %}, consultez « [À propos de la facturation de {% data variables.product.prodname_GH_advanced_security %}](/billing/managing-billing-for-github-advanced-security/about-billing-for-github-advanced-security) ».{% elsif ghae %}Aucuns frais ne sont facturés pour {% data variables.product.prodname_GH_advanced_security %} sur {% data variables.product.prodname_ghe_managed %} pendant la version bêta.{% endif %}

Si vous n’avez pas autorisé {% data variables.product.prodname_GH_advanced_security %} pour une organisation, cette organisation ne sera pas affectée par l’activation d’une fonctionnalité dans tous les dépôts existants ou tous les nouveaux dépôts. Pour plus d’informations sur l’interdiction de {% data variables.product.prodname_GH_advanced_security %} pour une organisation, consultez « [Application de stratégies pour Advanced Security dans votre entreprise](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-advanced-security-in-your-enterprise) ».

Quand vous activez une ou plusieurs fonctionnalités de sécurité et d’analyse pour les dépôts existants, tous les résultats s’affichent sur {% data variables.product.prodname_dotcom %} en quelques minutes.

{% data reusables.security.security-and-analysis-features-enable-read-only %}

## Gestion des fonctionnalités {% data variables.product.prodname_advanced_security %}

{% data reusables.advanced-security.note-org-enable-uses-seats %}

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %}
1. Dans la barre latérale gauche, cliquez sur **Sécurité et analyse du code**. 
1. Si vous le souhaitez, activez ou désactivez une fonctionnalité pour tous les dépôts existants.

   - À droite de la fonctionnalité, cliquez sur **Tout désactiver** ou **Tout activer**. {% ifversion ghes or ghec %} Si la commande pour « {% data variables.product.prodname_GH_advanced_security %} » est désactivée, vous n’avez aucun siège disponible dans votre licence {% data variables.product.prodname_GH_advanced_security %}.{% endif %}
   
   ![Capture d’écran des boutons « Tout activer » ou « Tout désactiver » pour les fonctionnalités « Configurer la sécurité et l’analyse »](/assets/images/enterprise/security/enterprise-security-and-analysis-disable-or-enable-all.png)

   - Pour confirmer le changement, cliquez sur **Tout activer/désactiver** ou **Activer/Désactiver pour les dépôts éligibles**.
   
     ![Capture d’écran du bouton permettant d’activer la fonctionnalité pour tous les dépôts éligibles de l’organisation](/assets/images/enterprise/security/enterprise-security-and-analysis-enable-secret-scanning.png)

1. Si vous le souhaitez, pour activer ou désactiver automatiquement une fonctionnalité lorsque de nouveaux dépôts sont ajoutés, cochez la case sous la fonctionnalité.
   
   ![Capture d’écran d’une case à cocher permettant d’activer une fonctionnalité pour les nouveaux dépôts](/assets/images/enterprise/security/enterprise-security-and-analysis-enable-or-disable-feature-checkbox.png){% ifversion secret-scanning-custom-link-on-block %}

1. Pour éventuellement inclure un lien de ressource dans le message que les membres voient quand ils tentent de pousser un secret, sélectionnez **Ajouter un lien de ressource dans l’interface CLI et l’interface utilisateur web quand un commit est bloqué**, puis tapez une URL et cliquez sur **Enregistrer le lien**.
  
  {% note %}

  **Remarque** : Lorsqu’un lien personnalisé est configuré pour une organisation, la valeur au niveau de l’organisation remplace le lien personnalisé défini pour l’entreprise. Pour plus d’informations, consultez « [Protection des poussées avec l’analyse des secrets](/code-security/secret-scanning/protecting-pushes-with-secret-scanning) ».

  {% endnote %}

   ![Capture d’écran montrant la case à cocher et le champ de texte permettant d’activer un lien personnalisé](/assets/images/help/organizations/secret-scanning-custom-link.png){% endif %}

