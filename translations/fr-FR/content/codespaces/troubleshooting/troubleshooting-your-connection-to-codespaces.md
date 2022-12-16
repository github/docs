---
title: Résolution des problèmes liés à votre connexion à Codespaces
intro: Résolution des problèmes liés à la connexion à {% data variables.product.prodname_codespaces %}.
product: '{% data reusables.gated-features.codespaces %}'
versions:
  fpt: '*'
  ghec: '*'
type: reference
topics:
- Codespaces
shortTitle: Connection
ms.openlocfilehash: c551126781da972ad39c42aea3ac67b121fab301
ms.sourcegitcommit: 22d665055b1bee7a5df630385e734e3a149fc720
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 07/13/2022
ms.locfileid: "145086638"
---
## <a name="503-codespace-service-unavailable"></a>503 - Service des codespaces non disponible

Les codespaces sont configurés pour s’arrêter au bout de 30 minutes d’inactivité. Si vous essayez d’interagir avec un codespace après l’arrêt de celui-ci, l’erreur `503 service unavailable` peut apparaître. 

- Si un bouton **Démarrer** est disponible dans {% data variables.product.prodname_vscode %} ou dans la fenêtre de votre navigateur, cliquez sur **Démarrer** pour vous reconnecter au codespace.
- Réinitialisez votre codespace en rechargeant la fenêtre. Dans la [palette de commandes](/codespaces/codespaces-reference/using-the-command-palette-in-codespaces#accessing-the-command-palette) de {% data variables.product.prodname_vscode %}, cliquez sur **Développeur : Recharger la fenêtre**.

## <a name="browser-cannot-connect"></a>Le navigateur ne peut pas se connecter

Il peut arriver que vous n’ayez pas accès à un codespace à partir de votre navigateur. Dans ce cas, accédez à https://github.com/codespaces et essayez de vous connecter au codespace à partir de cette page.

  - Si le codespace n’est pas répertorié sur cette page, vérifiez que vous êtes bien propriétaire du codespace auquel vous essayez de vous connecter. Vous ne pouvez ouvrir qu’un codespace que vous avez créé. Les URL de vos codespaces incluent toujours votre descripteur {% data variables.product.company_short %}.
  - Si le codespace est répertorié, mais que vous ne parvenez pas à vous connecter à celui-ci à partir de cette page, essayez de vous connecter à l’aide d’un autre navigateur.

Le réseau de votre entreprise bloque peut-être la connexion. Si possible, consultez les journaux pour en savoir plus sur les connexions rejetées sur votre appareil.

Si vous ne parvenez toujours pas à vous connecter, {% data reusables.codespaces.contact-support %}

## <a name="-data-variablesproductprodname_github_codespaces--extension-for--data-variablesproductprodname_vscode--cannot-connect"></a>L’extension {% data variables.product.prodname_github_codespaces %} pour {% data variables.product.prodname_vscode %} ne peut pas se connecter

Si vous ne parvenez pas à vous connecter à un codespace à partir du bureau de {% data variables.product.prodname_vscode %}, suivez les étapes de résolution suivantes.

1. Vérifiez que la dernière version de l’extension {% data variables.product.prodname_github_codespaces %} est installée. L’extension est une préversion et des mises à jour fréquentes sont publiées.
   1. Dans {% data variables.product.prodname_vscode %}, accédez à l’onglet « Extensions ».
   2. Sélectionnez l’extension {% data variables.product.prodname_github_codespaces %} pour afficher la page de présentation de celle-ci.
   3. Si une mise à jour est disponible, un bouton apparaît. Cliquez sur **Mettre à jour vers X.X.X** pour procéder à une mise à niveau vers la dernière version.
2. Vérifiez que vous utilisez bien la build stable de {% data variables.product.prodname_vscode %} ou la version [Insiders de {% data variables.product.prodname_vscode %}](https://code.visualstudio.com/insiders/) (mises à jour nocturnes). Si vous utilisez la version Insiders, essayez d’installer la [build stable](https://code.visualstudio.com/).
3. Le réseau de votre entreprise bloque peut-être la connexion. Si possible, consultez les journaux pour en savoir plus sur les connexions rejetées sur votre appareil.

Si vous ne parvenez toujours pas à vous connecter, {% data reusables.codespaces.contact-support %}

### <a name="the-codespace-has-latency-issues"></a>Le codespace présente des problèmes de latence

Si le codespace semble particulièrement lent ou présente des problèmes de latence, il est possible qu’il ait été créé dans une région qui est loin de vous. Pour résoudre ce problème, vous pouvez [définir manuellement la région de vos {% data variables.product.prodname_github_codespaces %}](/codespaces/managing-your-codespaces/setting-your-default-region-for-codespaces).
