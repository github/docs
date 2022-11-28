---
title: Gestion de l’accès aux dépôts pour les codespaces de votre organisation
shortTitle: Repository access
intro: 'Vous pouvez gérer les référentiels de votre entreprise auxquels {% data variables.product.prodname_github_codespaces %} a accès.'
permissions: 'To manage access and security for {% data variables.product.prodname_github_codespaces %} for an organization, you must be an organization owner.'
versions:
  fpt: '*'
  ghec: '*'
type: how_to
topics:
  - Codespaces
  - Security
  - Administrator
redirect_from:
  - /codespaces/managing-codespaces-for-your-organization/managing-access-and-security-for-your-organizations-codespaces
  - /github/developing-online-with-codespaces/managing-access-and-security-for-codespaces
  - /codespaces/working-with-your-codespace/managing-access-and-security-for-codespaces
ms.openlocfilehash: 9fdec24104a61170977053195446db0b4cf0a62f
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 11/09/2022
ms.locfileid: '148159758'
---
{% warning %}

**Note de dépréciation** : Le paramètre d’accès et de sécurité décrit ci-dessous est maintenant déprécié et documenté ici pour référence uniquement. Pour permettre un accès étendu à d’autres dépôts, ajoutez les autorisations demandées à votre fichier de configuration `devcontainer.json`. Pour plus d’informations, consultez « [Gestion de l’accès à d’autres dépôts dans votre codespace](/codespaces/managing-your-codespaces/managing-repository-access-for-your-codespaces) ».

{% endwarning %}

Par défaut, un codespace ne peut accéder qu’au dépôt dans lequel il a été créé. Lorsque vous activez l’accès et la sécurité pour un dépôt appartenant à votre organisation, tous les codespaces créés pour ce dépôt ont également des autorisations de lecture sur tous les autres dépôts appartenant à l’organisation, et le créateur du codespace dispose d’autorisations d’accès. Si vous voulez restreindre les dépôts auxquels un codespace peut accéder, vous pouvez restreindre son accès au dépôt dans lequel le codespace a été créé ou à des dépôts spécifiques. Vous ne devez activer l’accès et la sécurité que pour les dépôts auxquels vous faites confiance.

Pour gérer quels utilisateurs dans votre organisation peuvent utiliser {% data variables.product.prodname_github_codespaces %}, consultez « [Activation de {% data variables.product.prodname_github_codespaces %} pour votre organisation](/codespaces/managing-codespaces-for-your-organization/enabling-github-codespaces-for-your-organization#enable-codespaces-for-users-in-your-organization) ».

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% data reusables.organizations.click-codespaces %}
1. Sous « Accès et sécurité », sélectionnez le paramètre souhaité pour votre organisation.
  ![Cases d’option pour gérer les dépôts approuvés](/assets/images/help/settings/codespaces-org-access-and-security-radio-buttons.png)
1. Si vous avez choisi « Dépôts sélectionnés », sélectionnez le menu déroulant, puis cliquez sur un dépôt pour autoriser les codespaces du dépôt à accéder aux autres dépôts appartenant à votre organisation. Répétez l’opération pour tous les dépôts dont les codespaces ont doivent pouvoir accéder aux autres dépôts.
    ![Menu déroulant « Dépôts sélectionnés »](/assets/images/help/settings/codespaces-access-and-security-repository-drop-down.png)

## Pour aller plus loin

- « [Gestion de l’accès aux dépôts pour vos codespaces](/codespaces/managing-your-codespaces/managing-repository-access-for-your-codespaces) »
