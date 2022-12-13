---
title: Restriction de création de dépôts dans votre organisation
intro: 'Pour protéger les données de votre organisation, vous pouvez configurer des autorisations pour la création de dépôts dans votre organisation.'
redirect_from:
  - /articles/restricting-repository-creation-in-your-organization
  - /github/setting-up-and-managing-organizations-and-teams/restricting-repository-creation-in-your-organization
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: Restrict repository creation
ms.openlocfilehash: da5d32962c52b752dff9dd9012f8cc8e5494d8c6
ms.sourcegitcommit: 5f9527483381cfb1e41f2322f67c80554750a47d
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/11/2022
ms.locfileid: '145066606'
---
Vous pouvez choisir si les membres peuvent créer des dépôts dans votre organisation. {% ifversion ghec or ghes or ghae %}Si vous autorisez les membres à créer des dépôts, vous pouvez choisir les types de membres de dépôt pouvant être créés.{% elsif fpt %}Si vous autorisez les membres à créer des dépôts, vous pouvez choisir s’ils peuvent créer des dépôts publics et privés, ou seulement des dépôts publics.{% endif %} Les propriétaires d’organisation peuvent toujours créer n’importe quel type de dépôt.

{% ifversion fpt %} Les organisations utilisant {% data variables.product.prodname_ghe_cloud %} peuvent également autoriser les membres à créer uniquement des dépôts privés. Pour plus d’informations, consultez la [documentation {% data variables.product.prodname_ghe_cloud %}](/enterprise-cloud@latest/organizations/managing-organization-settings/restricting-repository-creation-in-your-organization).
{% endif %}

{% ifversion ghec or ghae or ghes %} Les propriétaires d’entreprise peuvent restreindre les options disponibles dans la stratégie de création de dépôt de votre organisation. Pour plus d’informations, consultez « [Application de stratégies de gestion des dépôts dans votre entreprise](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-repository-management-policies-in-your-enterprise#enforcing-a-policy-for-repository-creation) ».
{% endif %}

{% warning %}

**Avertissement** : Ce paramètre limite uniquement les options de visibilité disponibles pendant la création des dépôts et ne limite pas la possibilité de changer la visibilité des dépôts par la suite. Pour plus d’informations sur la restriction des changements de visibilité des dépôts existants, consultez « [Restriction des changements de visibilité des dépôts dans votre organisation](/organizations/managing-organization-settings/restricting-repository-visibility-changes-in-your-organization) ».

{% endwarning %}

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% data reusables.organizations.member-privileges %}
5. Sous « Création de dépôt », sélectionnez une ou plusieurs options.

   {%- ifversion ghes or ghec or ghae %} ![Options de création de dépôt](/assets/images/help/organizations/repo-creation-perms-radio-buttons.png) {%- elsif fpt %} ![Options de création de dépôt](/assets/images/help/organizations/repo-creation-perms-radio-buttons-fpt.png) {%- endif %}
   
   {% ifversion fpt or ghec %} {% note %}

   **Remarque :** Pour autoriser les membres à créer uniquement des dépôts privés, votre organisation doit utiliser {% data variables.product.prodname_ghe_cloud %}. {% data reusables.enterprise.link-to-ghec-trial %}

   {% endnote %} {%- endif %}

6. Cliquez sur **Enregistrer**.
