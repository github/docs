---
title: Configuration de Git pour GitHub Desktop
shortTitle: Configuring Git
intro: 'Vous pouvez gérer les paramètres de configuration Git pour vos dépôts locaux avec {% data variables.product.prodname_desktop %}.'
redirect_from:
  - /desktop/getting-started-with-github-desktop/configuring-git-for-github-desktop
  - /desktop/installing-and-configuring-github-desktop/configuring-git-for-github-desktop
versions:
  fpt: '*'
ms.openlocfilehash: f14b309dcc7a4c779e9debb68f3962dfd38247cd
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/05/2022
ms.locfileid: '146058515'
---
## À propos de la configuration Git pour {% data variables.product.prodname_desktop %}

{% data variables.product.prodname_desktop %} utilise vos paramètres de configuration Git locaux et offrent la possibilité de configurer certains de ces paramètres, tels que les informations de création générales et la branche par défaut utilisée lors de la création d’un dépôt.

{% data variables.product.prodname_desktop %} vous permet de définir le nom et l’adresse e-mail que vous souhaitez associer aux commits que vous effectuez dans vos dépôts. Si votre nom et votre adresse e-mail ont déjà été définis dans la configuration Git globale de votre ordinateur, {% data variables.product.prodname_desktop %} détecte et utilise ces valeurs. {% data variables.product.prodname_desktop %} vous permet également de définir un autre nom et une autre adresse e-mail pour un dépôt individuel. C’est utile lorsque vous devez utiliser une adresse e-mail professionnelle distincte pour un dépôt spécifique.

Si l’adresse e-mail qui a été définie dans votre configuration Git ne correspond pas à une adresse e-mail associée au compte {% data variables.product.product_name %} auquel vous êtes actuellement connecté, {% data variables.product.prodname_desktop %} affiche un avertissement avant le commit.

{% data variables.product.prodname_desktop %} vous permet aussi de changer le nom de branche par défaut que vous souhaitez utiliser lors de la création de dépôts. Par défaut, {% data variables.product.prodname_desktop %} utilise `main` comme nom de branche par défaut dans tous les nouveaux dépôts que vous créez.

{% tip %}

**Conseil** : Tout le monde peut voir l’adresse e-mail dans votre configuration Git, si vous effectuez des commits publics. Pour plus d’informations, consultez « [Définition de votre adresse e-mail de commit](/articles/setting-your-commit-email-address/) ».

{% endtip %}

## Configuration de vos informations de création générales

La configuration de vos informations de création générales dans {% data variables.product.prodname_desktop %} met à jour le nom et l’adresse e-mail dans votre configuration Git globale. Il s’agit du nom et de l’adresse e-mail par défaut pour tous les nouveaux dépôts locaux que vous créez dans {% data variables.product.prodname_desktop %}.

{% mac %}

{% data reusables.desktop.mac-select-desktop-menu %}
7. Dans la fenêtre Préférences, cliquez sur **Git**.
  ![Volet Git dans le menu Préférences](/assets/images/help/desktop/mac-select-git-pane.png) {% data reusables.desktop.name-field-git-config %} ![Champ Nom dans la fenêtre de configuration Git](/assets/images/help/desktop/mac-name-git-config.png) {% data reusables.desktop.select-email-git-config %} ![Adresse e-mail sélectionnée dans le champ correspondant de la fenêtre de configuration Git](/assets/images/help/desktop/mac-email-git-config.png) {% data reusables.desktop.click-save-git-config %} ![Bouton Enregistrer dans la fenêtre de configuration Git](/assets/images/help/desktop/mac-save-git-config.png)

{% endmac %}

{% windows %}

{% data reusables.desktop.windows-choose-options %}
8. Dans la fenêtre Options, cliquez sur **Git**.
![Volet Git dans le menu Options](/assets/images/help/desktop/windows-select-git-pane.png) {% data reusables.desktop.name-field-git-config %} ![Champ Nom dans la fenêtre de configuration Git](/assets/images/help/desktop/windows-name-git-config.png) {% data reusables.desktop.select-email-git-config %} ![Adresse e-mail sélectionnée dans le champ correspondant de la fenêtre de configuration Git](/assets/images/help/desktop/windows-email-git-config.png) {% data reusables.desktop.click-save-git-config %} ![Bouton Enregistrer dans la fenêtre de configuration Git](/assets/images/help/desktop/windows-save-git-config.png)

{% endwindows %}

## Configuration d’informations de création différentes pour un dépôt individuel

Vous pouvez changer le nom et l’adresse e-mail utilisés pour créer des commits dans un dépôt spécifique. Cette configuration Git locale remplace vos paramètres de configuration Git généraux pour ce dépôt uniquement.

{% mac %}

{% data reusables.desktop.mac-repository-settings-menu %} {% data reusables.desktop.select-git-config %} {% data reusables.desktop.use-local-git-config %} {% data reusables.desktop.local-config-name %} {% data reusables.desktop.local-config-email %} {% data reusables.desktop.repository-settings-save %}

{% endmac %}

{% windows %}

{% data reusables.desktop.windows-repository-settings-menu %} {% data reusables.desktop.select-git-config %} {% data reusables.desktop.use-local-git-config %} {% data reusables.desktop.local-config-name %} {% data reusables.desktop.local-config-email %} {% data reusables.desktop.repository-settings-save %}

{% endwindows %}


## Configuration de votre branche par défaut pour les nouveaux dépôts

Vous pouvez configurer la branche par défaut qui sera utilisée lorsque vous créerez un dépôt dans {% data variables.product.prodname_desktop %}. Pour plus d’informations sur la branche par défaut, consultez « [À propos de la branche par défaut](/github/collaborating-with-issues-and-pull-requests/about-branches#about-the-default-branch) ».

{% mac %}

{% data reusables.desktop.mac-select-desktop-menu %}
1. Dans la fenêtre Préférences, cliquez sur **Git**.
  ![Volet Git dans le menu Préférences](/assets/images/help/desktop/mac-select-git-pane.png)
1. Sous « Nom de branche par défaut pour les nouveaux dépôts », sélectionnez le nom de branche par défaut que vous souhaitez utiliser ou, pour entrer un nom personnalisé, sélectionnez « Autre... ».
  ![Options de sélection du nom de branche par défaut](/assets/images/help/desktop/mac-select-default-branch-name.png) {% data reusables.desktop.click-save-git-config %} ![Bouton Enregistrer dans la fenêtre de la configuration Git](/assets/images/help/desktop/repository-settings-git-config-save.png)

{% endmac %}

{% windows %}

{% data reusables.desktop.windows-choose-options %}
1. Dans la fenêtre Options, cliquez sur **Git**.
  ![Volet Git dans le menu Options](/assets/images/help/desktop/windows-select-git-pane.png)
1. Sous « Nom de branche par défaut pour les nouveaux dépôts », sélectionnez le nom de branche par défaut que vous souhaitez utiliser ou sélectionnez « Autre... » pour entrer un nom personnalisé.
  ![Options de sélection du nom de branche par défaut](/assets/images/help/desktop/windows-select-default-branch-name.png) {% data reusables.desktop.click-save-git-config %} ![Bouton Enregistrer dans la fenêtre de la configuration Git](/assets/images/help/desktop/repository-settings-git-config-save.png)

{% endwindows %}

## Pour aller plus loin

- « [Ajout d’une adresse e-mail à votre compte GitHub](/articles/adding-an-email-address-to-your-github-account/) »
- « [Définition de votre adresse e-mail de commit](/articles/setting-your-commit-email-address/) »
- « [À propos des branches](/github/collaborating-with-issues-and-pull-requests/about-branches) »
