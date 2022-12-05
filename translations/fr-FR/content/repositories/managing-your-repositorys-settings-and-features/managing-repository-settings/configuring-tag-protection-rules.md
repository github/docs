---
title: Configuration de règles de protection d’étiquettes
shortTitle: Tag protection rules
intro: Vous pouvez configurer des règles de protection d’étiquette pour votre référentiel afin d’empêcher les contributeurs de créer ou de supprimer des étiquettes.
product: '{% data reusables.gated-features.tag-protection-rules %}'
versions:
  fpt: '*'
  ghae: '>= 3.5'
  ghec: '*'
  ghes: '>3.4'
ms.openlocfilehash: 3b7b84cb26d8994c89222b2e4f642592fd45b72f
ms.sourcegitcommit: 1309b46201604c190c63bfee47dce559003899bf
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/10/2022
ms.locfileid: '147063201'
---
{% note %}

**Remarque :** Les règles de protection d’étiquettes sont actuellement en version bêta et soumises à modification.

{% endnote %}

Lorsque vous ajoutez une règle de protection d’étiquettes, toutes les étiquettes qui correspondent au modèle fourni sont protégées. Seuls les utilisateurs disposant d’autorisations d’administrateur ou de maintenance dans le dépôt pourront créer des étiquettes protégées, et seuls les utilisateurs disposant d’autorisations d’administrateur dans le dépôt pourront supprimer des étiquettes protégées. Pour plus d’informations, consultez « [Rôles de dépôt pour une organisation](/organizations/managing-access-to-your-organizations-repositories/repository-roles-for-an-organization#permissions-for-each-role) ». {% data variables.product.prodname_github_apps %} nécessite l’autorisation `Repository administration: write` pour modifier une étiquette protégée.

{% ifversion custom-repository-roles %} En outre, vous pouvez créer des rôles de dépôt personnalisés pour permettre à d’autres groupes d’utilisateurs de créer ou de supprimer des étiquettes qui correspondent à des règles de protection d’étiquettes. Pour plus d’informations, consultez « [Gestion des rôles de dépôt personnalisés pour une organisation](/organizations/managing-peoples-access-to-your-organization-with-roles/managing-custom-repository-roles-for-an-organization) ».{% endif %}

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-settings %}
1. Dans la section « Code et automatisation » de la barre latérale, cliquez sur **{% octicon "tag" aria-label="The tag icon" %} Étiquettes**.
1. Cliquez sur **Nouvelle règle**.
![Nouvelle règle de protection d’étiquettes](/assets/images/help/repository/new-tag-protection-rule.png)
1. Sous « Modèle de nom d’étiquette », tapez le modèle des étiquettes que vous souhaitez protéger. Dans cet exemple, l’entrée de « \* » protège toutes les étiquettes. 
![Définir un modèle de protection d’étiquettes](/assets/images/help/repository/set-tag-protection-pattern.png)
1. Cliquez sur **Ajouter une règle**.
![Ajouter une règle de protection d’étiquettes](/assets/images/help/repository/add-tag-protection-rule.png)
