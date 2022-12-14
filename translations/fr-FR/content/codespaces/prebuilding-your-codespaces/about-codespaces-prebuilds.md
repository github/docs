---
title: À propos des pré-builds Codespaces
shortTitle: About prebuilds
intro: Les prébuilds Codespaces permettent d’accélérer la création de nouveaux espaces de code pour les référentiels volumineux ou complexes.
versions:
  fpt: '*'
  ghec: '*'
topics:
- Codespaces
product: '{% data reusables.gated-features.codespaces %}'
ms.openlocfilehash: 4653ead4a97ff1ff87ac8029fb215fdc8ae56566
ms.sourcegitcommit: dc42bb4a4826b414751ffa9eed38962c3e3fea8e
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 07/13/2022
ms.locfileid: "146381186"
---
## <a name="overview"></a>Vue d’ensemble

Les prébuilds de vos espaces de code vous permettent d’être plus productif et d’accéder plus rapidement à votre espace de code, en particulier si votre référentiel est volumineux ou complexe et que le démarrage des nouveaux espaces de code prend actuellement plus de 2 minutes. Cela est dû au fait que le code source, les extensions d’éditeur, les dépendances de projet, les commandes et les configurations ont déjà été téléchargés, installés et appliqués avant que vous créiez un codespace pour votre projet. Considérez une pré-build comme un modèle « prêt à l’emploi » pour un codespace. 

Par défaut, chaque fois que vous envoyez (push) des modifications à votre dépôt, {% data variables.product.prodname_codespaces %} utilise {% data variables.product.prodname_actions %} pour mettre à jour automatiquement vos pré-builds.

Lorsque des pré-builds sont disponibles pour une branche particulière d’un dépôt et pour votre région, vous verrez l’étiquette « {% octicon "zap" aria-label="The zap icon" %} Pré-build prête » dans la liste des options de type de machine lorsque vous créerez un codespace. Si une prébuild est toujours en cours de création, vous verrez l’étiquette « {% octicon "history" aria-label="The history icon" %} Prébuild en cours ». Pour plus d’informations, consultez « [Création d’un espace de code](/codespaces/developing-in-codespaces/creating-a-codespace#creating-a-codespace) ».

![Boîte de dialogue pour choisir un type de machine](/assets/images/help/codespaces/choose-custom-machine-type.png)

{% note %}

{% data reusables.codespaces.prebuilds-not-available %}

{% endnote %}

## <a name="about-billing-for--data-variablesproductprodname_codespaces--prebuilds"></a>À propos de la facturation des pré-builds {% data variables.product.prodname_codespaces %}

{% data reusables.codespaces.billing-for-prebuilds %} Pour plus d’informations sur la tarification du stockage {% data variables.product.prodname_codespaces %}, consultez « [À propos de la facturation pour {% data variables.product.prodname_codespaces %}](/billing/managing-billing-for-github-codespaces/about-billing-for-codespaces) ». 

L’utilisation de codespaces créés à l’aide de pré-builds est facturée au même taux que celle de codespaces standard.

## <a name="about-pushing-changes-to-prebuild-enabled-branches"></a>À propos de l’envoi (push) de modifications à des branches de pré-build

Par défaut, chaque envoi (push) à une branche qui a une configuration de pré-build entraîne l’exécution d’un workflow Actions managé par {% data variables.product.prodname_dotcom %} pour mettre à jour le modèle de pré-build. Le workflow de pré-build a une limite de concurrence d’une exécution de workflow à la fois pour une configuration de pré-build donnée, sauf si des modifications ont été apportées, qui affectent la configuration du conteneur de développement pour le dépôt associé. Pour plus d’informations, consultez « [Présentation des conteneurs de développement](/codespaces/setting-up-your-project-for-codespaces/introduction-to-dev-containers) ». Si une exécution est déjà en cours, le workflow mis en file d’attente le plus récemment s’exécute ensuite, une fois l’exécution en cours terminée. 

Avec le modèle de pré-build défini pour être mis à jour à chaque envoi (push), s’il y a des envois (push) très fréquents à votre dépôt, des mises à jour du modèle de pré-build se produisent autant de fois qu’il le faut pour exécuter le workflow de la pré-build. Autrement dit, si l’exécution de votre workflow prend généralement une heure, des pré-builds seront créées pour votre dépôt à peu près toutes les heures si l’exécution réussit, ou plus souvent si des envois (push) ont été effectués, qui modifient la configuration du conteneur de développement sur la branche.

Par exemple, imaginons que 5 envois (push) sont effectués, dans succession rapide, sur à une branche qui a une configuration de pré-build. Dans cette situation :

* Une exécution de workflow est démarrée pour le premier envoi (push) afin de mettre à jour le modèle de pré-build.
* Si les 4 envois (push) restants n’affectent pas la configuration du conteneur de développement, les exécutions de workflow pour ceux-ci sont mises en file d’attente dans un état « en attente ». 
  
  Si l’un des 4 envois (push) restants modifie la configuration du conteneur de développement, le service ne l’ignore pas et exécute immédiatement le workflow de création de pré-build, mettant à jour la pré-build en conséquence s’il réussit. 

* Une fois la première exécution terminée, les exécutions de workflow pour les envois (push) 2, 3 et 4 sont annulées, et le dernier workflow mis en file d’attente pour l’envoi (push) 5 s’exécute et met à jour le modèle de pré-build. 
