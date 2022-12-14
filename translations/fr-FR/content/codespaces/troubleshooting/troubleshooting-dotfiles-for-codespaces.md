---
title: Résolution des problèmes liés aux dotfiles pour GitHub Codespaces
allowTitleToDifferFromFilename: true
intro: Étapes de dépannage pour les problèmes courants avec les dotfiles.
product: '{% data reusables.gated-features.codespaces %}'
versions:
  fpt: '*'
  ghec: '*'
type: reference
topics:
  - Codespaces
shortTitle: Dotfiles
ms.openlocfilehash: c316909f66d88b0f4f1fe52d6740af9b1e0d4854
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 10/25/2022
ms.locfileid: '148108553'
---
Si votre codespace ne parvient pas à récupérer des paramètres de configuration à partir de fichiers dotfile, vous devriez suivre les étapes de résolution des problèmes suivantes.

1. Activez les dotfiles en sélectionnant **Installer automatiquement les dotfiles** dans [vos paramètres {% data variables.product.prodname_github_codespaces %} personnels](https://github.com/settings/codespaces).

   ![L’option « Installer automatiquement les dotfiles »](/assets/images/help/codespaces/automatically-install-dotfiles.png)

1. Vérifiez dans `/workspaces/.codespaces/.persistedshare/dotfiles` si vos fichiers dotfile ont été clonés.
   - Si vos fichiers dotfile ont été clonés, essayez de réexécuter manuellement votre script d’installation pour vérifier qu’il est exécutable.
   - Si vos fichiers dotfile n’ont pas été clonés, vérifiez dans `/workspaces/.codespaces/.persistedshare/EnvironmentLog.txt` si le clonage a rencontré un problème.
1. Vérifiez dans `/workspaces/.codespaces/.persistedshare/creation.log` des problèmes possibles. Pour plus d’informations, consultez [Journaux de création](/codespaces/troubleshooting/codespaces-logs#creation-logs).

Si la configuration est correctement récupérée à partir de vos fichiers dotfile, mais qu’une partie de la configuration n’est pas compatible avec les codespaces, utilisez la variable d’environnement `$CODESPACES` afin d’ajouter une logique conditionnelle pour les paramètres de configuration spécifiques de codespace.
