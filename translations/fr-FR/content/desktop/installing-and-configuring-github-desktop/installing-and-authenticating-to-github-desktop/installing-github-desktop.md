---
title: Installation de GitHub Desktop
shortTitle: Installation
intro: Vous pouvez installer GitHub Desktop sur les systèmes d’exploitation Windows ou macOS pris en charge.
redirect_from:
  - /desktop/getting-started-with-github-desktop/installing-github-desktop
  - /desktop/installing-and-configuring-github-desktop/installing-github-desktop
versions:
  fpt: '*'
ms.openlocfilehash: 4947bff541682887817198c714e7e78bff2cfc9f
ms.sourcegitcommit: 5f9527483381cfb1e41f2322f67c80554750a47d
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/11/2022
ms.locfileid: '147882778'
---
## À propos de l’installation de {% data variables.product.prodname_desktop %}

Vous pouvez installer {% data variables.product.prodname_desktop %} sur les systèmes d’exploitation pris en charge, notamment {% data variables.desktop.mac-osx-versions %} et {% data variables.desktop.windows-versions %}. Si vous avez un compte sur {% data variables.product.prodname_dotcom %} ou {% data variables.product.prodname_enterprise %}, vous pouvez connecter votre compte à {% data variables.product.prodname_desktop %}. Pour plus d’informations sur la création d’un compte, consultez « [Inscription pour l’obtention d’un nouveau compte {% data variables.product.prodname_dotcom %}](/articles/signing-up-for-a-new-github-account/) », ou contactez l’administrateur de site {% data variables.product.prodname_enterprise %}.

{% windows %}

Si vous êtes administrateur réseau, vous pouvez déployer {% data variables.product.prodname_desktop %} sur les ordinateurs exécutant Windows dans un réseau Active Directory à l’aide du fichier de package Windows Installer (`.msi`) via une stratégie de groupe ou tout autre système d’installation à distance.

Le package Windows Installer extrait le programme d’installation autonome (`.exe`) et configure Windows pour installer {% data variables.product.prodname_desktop %} la prochaine fois qu’un utilisateur se connecte à sa station de travail. Les utilisateurs doivent disposer des autorisations nécessaires pour installer {% data variables.product.prodname_desktop %} dans leur annuaire utilisateur.

Si un utilisateur exécute le package Windows Installer pour {% data variables.product.prodname_desktop %} directement, il doit se déconnecter de sa station de travail, puis se reconnecter pour mener à bien l’installation.

{% endwindows %}

## Téléchargement et installation de {% data variables.product.prodname_desktop %}

{% mac %}

Vous pouvez installer {% data variables.product.prodname_desktop %} sur {% data variables.desktop.mac-osx-versions %}.

{% data reusables.desktop.download-desktop-page %}
2. Cliquez sur **Télécharger pour macOS**.
  ![Bouton Télécharger pour macOS](/assets/images/help/desktop/download-for-mac.png)
3. Dans le dossier `Downloads` de votre ordinateur, double-cliquez sur le fichier zip de **{% data variables.product.prodname_desktop %}** .
  ![Fichier GitHubDesktop.zip](/assets/images/help/desktop/mac-zipfile.png)
4. Une fois le fichier décompressé, double-cliquez sur **{% data variables.product.prodname_desktop %}** .
5. {% data variables.product.prodname_desktop %} se lancera une fois l’installation effectuée.

{% endmac %}

{% windows %}

Vous pouvez installer {% data variables.product.prodname_desktop %} sur {% data variables.desktop.windows-versions %}.

{% warning %}

**Avertissement** : Vous devez disposer d’un système d’exploitation 64 bits pour exécuter {% data variables.product.prodname_desktop %}.

{% endwarning %}

{% data reusables.desktop.download-desktop-page %}
2. Cliquez sur **Télécharger pour Windows**.
  ![Bouton Télécharger pour Windows](/assets/images/help/desktop/download-for-windows.png)
3. Dans le dossier `Downloads` de votre ordinateur, double-cliquez sur le fichier d’installation de **{% data variables.product.prodname_desktop %}** .
  ![Fichier GitHubDesktopSetup](/assets/images/help/desktop/windows-githubdesktopsetup.png)
4. {% data variables.product.prodname_desktop %} se lancera une fois l’installation effectuée.

{% endwindows %}
