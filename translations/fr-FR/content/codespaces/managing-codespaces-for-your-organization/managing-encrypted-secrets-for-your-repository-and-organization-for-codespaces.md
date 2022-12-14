---
title: Gestion des secrets chiffrés de votre dépôt et de votre organisation pour Codespaces
shortTitle: Encrypted secrets
intro: Les secrets chiffrés vous permettent de stocker des informations sensibles dans votre organisation, dans un dépôt ou dans {% data variables.product.prodname_codespaces %}.
product: '{% data reusables.gated-features.codespaces %}'
permissions: To manage secrets for {% data variables.product.prodname_codespaces %} for an organization, you must be an organization owner.
versions:
  fpt: '*'
  ghec: '*'
topics:
- Codespaces
- Secret store
- Security
ms.openlocfilehash: 062b73c8559b700bdbd37a6b31da44403c2092f5
ms.sourcegitcommit: 22d665055b1bee7a5df630385e734e3a149fc720
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 07/13/2022
ms.locfileid: "145106542"
---
## <a name="about-secrets"></a>À propos des secrets

Les secrets sont des variables d’environnement chiffrées que vous créez dans une organisation ou un dépôt. Les secrets que vous créez sont disponibles pour être utilisés dans {% data variables.product.prodname_codespaces %}. GitHub utilise une [boîte scellée libsodium](https://libsodium.gitbook.io/doc/public-key_cryptography/sealed_boxes) pour chiffrer les secrets avant qu’ils n’atteignent GitHub et les déchiffre uniquement quand vous les utilisez dans un codespace.

Les secrets au niveau de l’organisation vous permettent de partager des secrets entre plusieurs dépôts, ce qui réduit la nécessité de créer des secrets en double. Vous pouvez utiliser des stratégies d’accès pour contrôler les dépôts qui peuvent utiliser des secrets d’organisation. 

{% data reusables.codespaces.secrets-on-start %}

### <a name="naming-secrets"></a>Nommage des secrets

{% data reusables.codespaces.secrets-naming %} Par exemple, un secret créé au niveau du dépôt doit porter un nom unique dans ce dépôt et un secret créé au niveau de l’organisation doit porter un nom unique à ce niveau.

  {% data reusables.codespaces.secret-precedence %}

### <a name="limits-for-secrets"></a>Limites pour les secrets

Vous pouvez stocker jusqu’à 100 secrets par organisation et 100 secrets par dépôt.

La taille des secrets est limitée à 64 Ko.

## <a name="adding-secrets-for-a-repository"></a>Ajout de secrets pour un dépôt

Pour créer des secrets pour un dépôt d’organisation, vous devez disposer d’un accès administrateur.

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-settings %}
1. Dans la section « Sécurité » de la barre latérale, sélectionnez **{% octicon "key-asterisk" aria-label="The key-asterisk icon" %} Secrets**, puis cliquez sur **{% data variables.product.prodname_codespaces %}** .
2. En haut de la page, cliquez sur **Nouveau secret de dépôt**.
3. Tapez un nom pour votre secret dans la zone d’entrée **Nom**.
4. Entrez la valeur de votre secret.
5. Cliquez sur **Ajouter un secret**.

## <a name="adding-secrets-for-an-organization"></a>Ajout de secrets pour une organisation

Lors de la création d’un secret dans une organisation, vous pouvez utiliser une stratégie pour limiter les dépôts qui peuvent accéder à ce secret. Par exemple, vous pouvez accorder l’accès à tous les dépôts, ou limiter l’accès aux seuls dépôts privés ou à une liste spécifiée de dépôts.

{% data reusables.actions.permissions-statement-secrets-organization %}

{% data reusables.organizations.navigate-to-org %} {% data reusables.organizations.org_settings %}
1. Dans la section « Sécurité » de la barre latérale, sélectionnez **{% octicon "key-asterisk" aria-label="The key-asterisk icon" %} Secrets**, puis cliquez sur **{% data variables.product.prodname_codespaces %}** .
2. En haut de la page, cliquez sur **Nouveau secret d’organisation**.
3. Tapez un nom pour votre secret dans la zone d’entrée **Nom**.
4. Entrez la **valeur** de votre secret.
5. Dans la liste déroulante **Accès au dépôt**, choisissez une stratégie d’accès.
    ![Liste d’accès au dépôt avec des dépôts privés sélectionnés](/assets/images/help/codespaces/secret-repository-access.png)
6. Cliquez sur **Ajouter un secret**.

## <a name="reviewing-access-to-organization-level-secrets"></a>Examen de l’accès aux secrets au niveau de l’organisation

Vous pouvez vérifier quelles stratégies d’accès sont appliquées à un secret dans votre organisation.

{% data reusables.organizations.navigate-to-org %} {% data reusables.organizations.org_settings %} {% data reusables.actions.sidebar-secret %}
1. La liste des secrets inclut toutes les autorisations et stratégies configurées. Par exemple : ![Liste des secrets](/assets/images/help/settings/actions-org-secrets-list.png)
1. Pour plus d’informations sur les autorisations configurées pour chaque secret, cliquez sur **Mettre à jour**.

## <a name="further-reading"></a>Pour aller plus loin

- « [Gestion des secrets chiffrés pour vos codespaces](/codespaces/managing-your-codespaces/managing-encrypted-secrets-for-your-codespaces) »
