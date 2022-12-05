---
title: Résolution des problèmes liés à votre connexion à GitHub Codespaces
intro: 'Résolution des problèmes liés à la connexion à {% data variables.product.prodname_github_codespaces %}.'
versions:
  fpt: '*'
  ghec: '*'
type: reference
topics:
  - Codespaces
shortTitle: Connection
redirect_from:
  - /codespaces/troubleshooting/troubleshooting-your-connection-to-codespaces
ms.openlocfilehash: 75632e73b689ed7fe1df95027f6e5170136c7935
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 11/09/2022
ms.locfileid: '148159675'
---
## 503 - Service des codespaces non disponible

Les codespaces sont configurés pour s’arrêter au bout de 30 minutes d’inactivité. Si vous essayez d’interagir avec un codespace après l’arrêt de celui-ci, l’erreur `503 service unavailable` peut apparaître. 

- Si un bouton **Démarrer** est disponible dans {% data variables.product.prodname_vscode %} ou dans la fenêtre de votre navigateur, cliquez sur **Démarrer** pour vous reconnecter au codespace.
- Réinitialisez votre codespace en rechargeant la fenêtre. Depuis la [palette de commandes](/codespaces/codespaces-reference/using-the-command-palette-in-codespaces#accessing-the-command-palette) de {% data variables.product.prodname_vscode %}, cliquez sur **Développeur : Recharger la fenêtre**.

## Le navigateur ne peut pas se connecter

Il peut arriver que vous n’ayez pas accès à un codespace à partir de votre navigateur. Dans ce cas, accédez à https://github.com/codespaces et essayez de vous connecter au codespace à partir de cette page.

  - Si le codespace n’est pas répertorié sur cette page, vérifiez que vous êtes bien propriétaire du codespace auquel vous essayez de vous connecter. Vous ne pouvez ouvrir qu’un codespace que vous avez créé. Les URL de vos codespaces incluent toujours votre descripteur {% data variables.product.company_short %}.
  - Si le codespace est répertorié, mais que vous ne parvenez pas à vous connecter à celui-ci à partir de cette page, essayez de vous connecter à l’aide d’un autre navigateur.

Le réseau de votre entreprise bloque peut-être la connexion. Si possible, consultez les journaux pour en savoir plus sur les connexions rejetées sur votre appareil.

Si vous ne parvenez toujours pas à vous connecter, {% data reusables.codespaces.contact-support %}

## Impossible de se connecter à votre codespace dans JupyterLab

Pour pouvoir utiliser un codespace dans JupyterLab, vous devez vérifier qu’il est installé dans votre codespace. L’image conteneur par défaut utilisée par {% data variables.product.prodname_github_codespaces %} inclut JupyterLab, mais si vous avez personnalisé votre configuration de conteneur de développement, vous devez installer manuellement JupyterLab.

Si votre codespace utilise une image Debian, vous pouvez installer JupyterLab dans le conteneur de développement en ajoutant la fonctionnalité `python` à votre fichier `devcontainer.json`, avec l’option `installJupyterlab` définie sur `true`. Sinon, installez-le directement dans votre Dockerfile. Pour obtenir des instructions d’installation, consultez « [Installation](https://jupyterlab.readthedocs.io/en/stable/getting_started/installation.html) » dans la documentation de JupyterLab.

Pour plus d’informations sur la fonctionnalité `python`, consultez la page README dans le [dépôt `devcontainers/features`](https://github.com/devcontainers/features/tree/main/src/python). Pour plus d’informations sur le fichier `devcontainer.json` et le Dockerfile, consultez « [Présentation des conteneurs de développement](/codespaces/setting-up-your-project-for-codespaces/introduction-to-dev-containers#devcontainerjson) ».

Si vous ne parvenez toujours pas à vous connecter, {% data reusables.codespaces.contact-support %}

## L’extension {% data variables.product.prodname_github_codespaces %} pour {% data variables.product.prodname_vscode %} ne peut pas se connecter

Si vous ne parvenez pas à vous connecter à un codespace à partir du bureau de {% data variables.product.prodname_vscode %}, suivez les étapes de résolution suivantes.

1. Vérifiez que la dernière version de l’extension {% data variables.product.prodname_github_codespaces %} est installée. L’extension est une préversion et des mises à jour fréquentes sont publiées.
   1. Dans {% data variables.product.prodname_vscode %}, accédez à l’onglet « Extensions ».
   2. Sélectionnez l’extension {% data variables.product.prodname_github_codespaces %} pour afficher la page de présentation de celle-ci.
   3. Si une mise à jour est disponible, un bouton apparaît. Cliquez sur **Mettre à jour vers X.X.X** pour procéder à une mise à niveau vers la dernière version.
2. Vérifiez que vous utilisez bien la build stable de {% data variables.product.prodname_vscode %} ou la version [Insiders de {% data variables.product.prodname_vscode %}](https://code.visualstudio.com/insiders/) (mises à jour nocturnes). Si vous utilisez la version Insiders, essayez d’installer la [build stable](https://code.visualstudio.com/).
3. Le réseau de votre entreprise bloque peut-être la connexion. Si possible, consultez les journaux pour en savoir plus sur les connexions rejetées sur votre appareil.

Si vous ne parvenez toujours pas à vous connecter, {% data reusables.codespaces.contact-support %}

### Le codespace présente des problèmes de latence

Si le codespace semble particulièrement lent ou présente des problèmes de latence, il est possible qu’il ait été créé dans une région qui est loin de vous. Pour résoudre ce problème, vous pouvez [définir manuellement la région de vos {% data variables.product.prodname_github_codespaces %}](/codespaces/managing-your-codespaces/setting-your-default-region-for-codespaces).
