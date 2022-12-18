---
title: Définition d’une spécification minimale pour les machines de codespaces
shortTitle: Set a minimum machine spec
intro: 'Vous pouvez éviter que les types de machines n’ayant pas suffisamment de ressources soient utilisés pour {% data variables.product.prodname_github_codespaces %} pour votre dépôt.'
permissions: People with write permissions to a repository can create or edit the codespace configuration.
versions:
  fpt: '*'
  ghec: '*'
type: how_to
topics:
  - Codespaces
  - Set up
ms.openlocfilehash: b7eeaac84721ff1d9ceab663957b1615952b0623
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 11/09/2022
ms.locfileid: '148159164'
---
## Vue d’ensemble

Chaque codespace que vous créez est hébergé sur une machine virtuelle distincte. Quand vous créez un codespace à partir d’un dépôt, vous avez généralement le choix entre différents types de machines virtuelles. Chaque type de machine possède des ressources différentes (cœurs de processeurs, mémoire, stockage). Le type de machine utilisé par défaut est celui qui a le moins de ressources. Pour plus d’informations, consultez « [Modification du type de machine pour votre codespace](/codespaces/customizing-your-codespace/changing-the-machine-type-for-your-codespace#about-machine-types) ».

Si votre projet a besoin d’un certain niveau de puissance de calcul, vous pouvez configurer {% data variables.product.prodname_github_codespaces %} de sorte que seuls les types de machines satisfaisant à ces exigences puissent être utilisés par défaut ou sélectionnés par les utilisateurs. Cette configuration s’effectue dans un fichier `devcontainer.json`.

{% data reusables.codespaces.machine-types-for-unpublished-codespaces %}

{% note %}

**Important :** L’accès à certains types de machines peut être limité au niveau de l’organisation. En règle générale, cette limite permet d’éviter que les utilisateurs choisissent des machines avec des ressources plus élevées qui sont facturées plus cher. Si votre dépôt fait l’objet d’une stratégie au niveau de l’organisation liée aux types de machines, faites attention de ne pas définir une spécification minimale qui ne permettra pas à vos utilisateurs de sélectionner un type de machine disponible. Pour plus d’informations, consultez « [Restriction de l’accès à des types de machine](/codespaces/managing-codespaces-for-your-organization/restricting-access-to-machine-types) ».

{% endnote %}

## Définition d’une spécification minimale de machine

{% data reusables.codespaces.edit-devcontainer-json %}
1. Modifiez le fichier `devcontainer.json` en ajoutant la propriété `hostRequirements` au niveau supérieur du fichier, dans l’objet JSON englobant. Par exemple :

   ```json{:copy}
   "hostRequirements": {
      "cpus": 8,
      "memory": "8gb",
      "storage": "32gb" 
   }
   ```

   Vous pouvez spécifier tout ou partie des options suivantes : `cpus`, `memory` et `storage`.
   
   Pour vérifier les spécifications des types de machines {% data variables.product.prodname_github_codespaces %} actuellement disponibles pour votre dépôt, suivez le processus de création d’un codespace jusqu’au choix des types de machines. Pour plus d’informations, consultez « [Création d’un codespace pour un dépôt](/codespaces/developing-in-codespaces/creating-a-codespace-for-a-repository#creating-a-codespace-for-a-repository) ».
   
1. Enregistrez le fichier et commitez vos changements dans la branche nécessaire du dépôt.

   Maintenant, quand vous créez un codespace pour cette branche du dépôt et que vous accédez aux options de configuration de création, vous pouvez uniquement sélectionner les types de machines qui correspondent aux ressources que vous avez spécifiées ou qui les dépassent.

   ![Boîte de dialogue montrant un choix limité de types de machines](/assets/images/help/codespaces/machine-types-limited-choice.png)

## Pour aller plus loin

- « [Présentation des conteneurs de développement](/codespaces/setting-up-your-project-for-codespaces/introduction-to-dev-containers) »
