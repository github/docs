---
title: À propos des prébuilds GitHub Codespaces
shortTitle: About prebuilds
intro: 'Les prébuilds {% data variables.product.prodname_github_codespaces %} permettent d’accélérer la création de codespaces pour les dépôts volumineux ou complexes.'
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Codespaces
redirect_from:
  - /codespaces/prebuilding-your-codespaces/about-codespaces-prebuilds
ms.openlocfilehash: eecb77b541cc735fcf788fbc5da6960cabad899d
ms.sourcegitcommit: 9af8891fea10039b3374c76818634e05410e349d
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 12/06/2022
ms.locfileid: '148191917'
---
## Vue d’ensemble

{% data reusables.codespaces.prebuilds-definition %}

Si la création d’un codespace pour un dépôt prend actuellement plus de 2 minutes, vous tirerez probablement profit de l’utilisation de prébuilds. En fait, avec une prébuild, le code source, les extensions d’éditeur, les dépendances de projet, les commandes et les configurations sont téléchargés, installés et appliqués avant la création d’un codespace. 

Par défaut, chaque fois que vous envoyez (push) des modifications à votre dépôt, {% data variables.product.prodname_github_codespaces %} utilise {% data variables.product.prodname_actions %} pour mettre à jour automatiquement vos pré-builds.

Lorsque des prébuilds sont disponibles pour une branche particulière d’un dépôt, un fichier de configuration de conteneur de développement, et pour votre région, vous voyez l’étiquette « {% octicon "zap" aria-label="The zap icon" %} Prébuild prête » dans la liste des options de type de machine lorsque vous créez un codespace. Si une prébuild est toujours en cours de création, vous verrez l’étiquette « {% octicon "history" aria-label="The history icon" %} Prébuild en cours ». Pour plus d’informations, consultez « [Création d’un codespace pour un dépôt](/codespaces/developing-in-codespaces/creating-a-codespace-for-a-repository#creating-a-codespace-for-a-repository) ».

![Boîte de dialogue pour choisir un type de machine](/assets/images/help/codespaces/choose-custom-machine-type.png)

Quand vous créez un codespace à partir d’un modèle dans la page « Vos codespaces », {% data variables.product.prodname_dotcom %} peut utiliser automatiquement une prébuild pour accélérer le temps de création. Pour plus d’informations sur les modèles, consultez « [Création d’un codespace à partir d’un modèle](/codespaces/developing-in-codespaces/creating-a-codespace-from-a-template) ».

## Processus de prébuild

Pour créer une prébuild, vous configurez une configuration de prébuild. Lorsque vous enregistrez la configuration, un flux de travail {% data variables.product.prodname_actions %} s’exécute pour créer chacune des prébuilds requises (un flux de travail par prébuild). Les workflows s’exécutent également chaque fois que les prébuilds de votre configuration doivent être mises à jour. Cela peut se produire à intervalles planifiés, sur les envois (push) vers un référentiel de prébuild, ou lorsque vous modifiez la configuration du conteneur de développement. Pour plus d’informations, consultez « [Configuration des prébuilds](/codespaces/prebuilding-your-codespaces/configuring-prebuilds#configuring-prebuilds) ».  

Lorsqu’un workflow de configuration de prébuild s’exécute, {% data variables.product.prodname_dotcom %} crée un codespace temporaire, effectuant des opérations ensemblistes sur les commandes `onCreateCommand` et `updateContentCommand` du fichier `devcontainer.json`. Aucune commande `postCreateCommand` n’est exécutée lors de la création d’une prébuild. Pour plus d’informations, consultez les [références sur `devcontainer.json`](https://code.visualstudio.com/docs/remote/devcontainerjson-reference#_devcontainerjson-properties) dans la documentation {% data variables.product.prodname_vscode_shortname %}. Un instantané du conteneur généré est ensuite pris et stocké.

Comme pour les autres workflows {% data variables.product.prodname_actions %}, l’exécution d’un workflow de configuration de prébuild consomme une partie des minutes {% data variables.product.prodname_actions %} incluses avec votre compte, si vous en avez, ou engendre des frais pour les minutes {% data variables.product.prodname_actions %}. Le stockage des prébuilds de codespace est facturé de la même manière que le stockage des codespaces actifs ou arrêtés. Pour plus d’informations, consultez « [À propos de la facturation de {% data variables.product.prodname_github_codespaces %}](/billing/managing-billing-for-github-codespaces/about-billing-for-github-codespaces#billing-for-codespaces-prebuilds) ».

Lorsque vous créez un codespace à partir d’une prébuild, {% data variables.product.prodname_dotcom %} télécharge l’instantané de conteneur existant à partir du stockage et le déploie sur une nouvelle machine virtuelle, en effectuant les commandes restantes spécifiées dans la configuration du conteneur de développement. Étant donné que de nombreuses opérations ont déjà été effectuées, comme le clonage du référentiel, la création d’un codespace à partir d’une prébuild peut être sensiblement plus rapide que la création d’une instance sans prébuild. Cela est vrai lorsque le référentiel est volumineux et/ou que les commandes `onCreateCommand` prennent beaucoup de temps à s’exécuter.

## À propos de l’envoi (push) de modifications à des branches de pré-build

Par défaut, chaque envoi (push) à une branche associée à une configuration de prébuild entraîne l’exécution d’un workflow {% data variables.product.prodname_actions %} managé par {% data variables.product.prodname_dotcom %} pour mettre à jour la prébuild. Le workflow de pré-build a une limite de concurrence d’une exécution de workflow à la fois pour une configuration de pré-build donnée, sauf si des modifications ont été apportées, qui affectent la configuration du conteneur de développement pour le dépôt associé. Pour plus d’informations, consultez « [Présentation des conteneurs de développement](/codespaces/setting-up-your-project-for-codespaces/introduction-to-dev-containers) ». Si une exécution est déjà en cours, le workflow mis en file d’attente le plus récemment s’exécute ensuite, une fois l’exécution en cours terminée. 

Avec la prébuild définie pour être mise à jour à chaque envoi (push), s’il y a des envois (push) très fréquents à votre dépôt, des mises à jour de la prébuild se produisent autant de fois qu’il le faut pour exécuter le workflow de la prébuild. Autrement dit, si l’exécution de votre workflow prend généralement une heure, des pré-builds seront créées pour votre dépôt à peu près toutes les heures si l’exécution réussit, ou plus souvent si des envois (push) ont été effectués, qui modifient la configuration du conteneur de développement sur la branche.

Par exemple, imaginons que 5 envois (push) sont effectués, dans succession rapide, sur à une branche qui a une configuration de pré-build. Dans cette situation :

* Une exécution de workflow démarre pour le premier envoi (push) afin de mettre à jour la prébuild.
* Si les 4 envois (push) restants n’affectent pas la configuration du conteneur de développement, les exécutions de workflow pour ceux-ci sont mises en file d’attente dans un état « en attente ». 
  
  Si l’un des 4 envois (push) restants modifie la configuration du conteneur de développement, le service ne l’ignore pas et exécute immédiatement le workflow de création de pré-build, mettant à jour la pré-build en conséquence s’il réussit. 

* Une fois la première exécution terminée, les exécutions de workflow pour les envois (push) 2, 3 et 4 sont annulées, et le dernier workflow mis en file d’attente pour l’envoi (push) 5 s’exécute et met à jour la prébuild. 
