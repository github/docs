---
title: Démarrage rapide pour GitHub Copilot
intro: '{% data variables.product.prodname_copilot %} peut vous aider en vous proposant des suggestions inline pendant que vous programmez.'
product: '{% data reusables.gated-features.copilot %}'
allowTitleToDifferFromFilename: true
versions:
  feature: copilot
shortTitle: Quickstart
topics:
  - Copilot
ms.openlocfilehash: d2131a506990a959f803b13353b794a9dd347174
ms.sourcegitcommit: 6185352bc563024d22dee0b257e2775cadd5b797
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 12/09/2022
ms.locfileid: '148193314'
---
## Introduction

{% data variables.product.prodname_copilot %} est un programmeur en binôme d’IA. Vous pouvez utiliser {% data variables.product.prodname_copilot %} afin d’obtenir des suggestions pour des lignes entières ou des fonctions entières directement dans votre éditeur.

Ce guide vous montre comment vous inscrire à {% data variables.product.prodname_copilot %} via votre compte personnel, installer l’extension {% data variables.product.prodname_copilot %} dans {% data variables.product.prodname_vscode %}, puis obtenir votre première suggestion. Pour plus d’informations sur {% data variables.product.prodname_copilot %}, consultez « [À propos de {% data variables.product.prodname_copilot %}](/copilot/overview-of-github-copilot/about-github-copilot) ». Pour plus d’informations détaillées sur l’utilisation de {% data variables.product.prodname_copilot %} dans divers environnements, consultez « [Bien démarrer](/copilot/getting-started-with-github-copilot) ».

## Prérequis

{% data reusables.copilot.copilot-prerequisites %}
- Pour utiliser {% data variables.product.prodname_copilot %} dans {% data variables.product.prodname_vscode %}, vous devez avoir installé {% data variables.product.prodname_vscode %}. Pour plus d’informations, consultez la documentation [{% data variables.product.prodname_vscode %}](https://code.visualstudio.com/).

## Inscription à {% data variables.product.prodname_copilot %}

Avant de pouvoir commencer à utiliser {% data variables.product.prodname_copilot %}, vous devrez mettre en place un essai gratuit ou un abonnement pour votre compte personnel. 

{% note %}

**Remarque :** Si vous êtes membre d’une organisation appartenant à un compte {% data variables.product.prodname_ghe_cloud %} avec un abonnement {% data variables.product.prodname_copilot %} et que votre organisation vous a attribué un siège {% data variables.product.prodname_copilot %}, vous pouvez procéder à « l’[Installation de l’extension {% data variables.product.prodname_copilot %} pour {% data variables.product.prodname_vscode %}](/copilot/quickstart#installing-the-github-copilot-extension-for-visual-studio-code) ».

{% endnote %}

{% data reusables.copilot.signup-procedure %}

## Installation de l’extension {% data variables.product.prodname_copilot %} pour {% data variables.product.prodname_vscode %}

Pour utiliser {% data variables.product.prodname_copilot %}, vous devez d’abord installer l’extension {% data variables.product.prodname_vscode %}.

1. Dans {% data variables.product.prodname_vscode %} Marketplace, accédez à la page de l’[extension {% data variables.product.prodname_copilot %}](https://marketplace.visualstudio.com/items?itemName=GitHub.copilot) et cliquez sur **Installer**.
   ![Installer l’extension {% data variables.product.prodname_copilot %} {% data variables.product.prodname_vscode %}](/assets/images/help/copilot/install-copilot-extension-visual-studio-code.png)
1. Une fenêtre contextuelle s’affiche, vous demandant d’ouvrir {% data variables.product.prodname_vscode %}. Cliquez sur **Ouvrir {% data variables.product.prodname_vscode %}** .
1. Sous l’onglet « Extension : {% data variables.product.prodname_copilot %} » dans {% data variables.product.prodname_vscode %}, cliquez sur **Installer**.
   ![Bouton Installer dans {% data variables.product.prodname_vscode %}](/assets/images/help/copilot/in-visual-studio-code-install-button.png)
1. Si vous n’avez pas déjà autorisé {% data variables.product.prodname_vscode %} dans votre compte {% data variables.product.prodname_dotcom %}, vous serez invité à vous connecter à {% data variables.product.prodname_dotcom %} dans {% data variables.product.prodname_vscode %}.
   - Si vous avez déjà autorisé {% data variables.product.prodname_vscode %} dans votre compte {% data variables.product.prodname_dotcom %}, {% data variables.product.prodname_copilot %} sera automatiquement autorisé.
   ![Capture d’écran de l’écran d’autorisation {% data variables.product.prodname_vscode %}](/assets/images/help/copilot/vsc-copilot-authorize.png)
1. Dans votre navigateur, {% data variables.product.prodname_dotcom %} demandera les autorisations nécessaires pour {% data variables.product.prodname_copilot %}. Pour approuver ces autorisations, cliquez sur **Autoriser {% data variables.product.prodname_vscode %}** . 
1. Dans {% data variables.product.prodname_vscode %}, dans la boîte de dialogue « {% data variables.product.prodname_vscode %} », pour confirmer l’authentification, cliquez sur **Ouvrir**. 

## Obtenir votre première suggestion

{% data reusables.copilot.code-examples-limitations %}

{% data reusables.copilot.supported-languages %} Les exemples suivants sont en JavaScript. Cependant, d’autres langages ont un fonctionnement similaire.

1. Ouvrez {% data variables.product.prodname_vscode %}.
{% data reusables.copilot.create-js-file %} {% data reusables.copilot.type-function-header %} {% data variables.product.prodname_copilot %} suggère automatiquement un corps de fonction entier en texte grisé, comme indiqué ci-dessous. La suggestion exacte peut varier.
![Première suggestion {% data variables.product.prodname_vscode %}](/assets/images/help/copilot/first-suggestion-visual-studio-code.png) {% data reusables.copilot.accept-suggestion %}

## Étapes suivantes

Vous avez installé {% data variables.product.prodname_copilot %} et vous avez reçu votre première suggestion, mais ce n’est que le début ! Voici quelques ressources utiles pour passer aux étapes suivantes avec {% data variables.product.prodname_copilot %}.

- [Bien démarrer](/copilot/getting-started-with-github-copilot) : Vous avez vu comment obtenir votre première suggestion dans {% data variables.product.prodname_vscode %}. Ces guides vous montrent comment configurer et parcourir les différentes fonctions de {% data variables.product.prodname_copilot %} dans tous les environnements pris en charge.
- [{% data variables.product.prodname_copilot %}](https://copilot.github.com/) : Consultez des exemples pratiques montrant comment {% data variables.product.prodname_copilot %} peut vous aider.
- [Configuration de {% data variables.product.prodname_copilot %}](/copilot/configuring-github-copilot) : Ces guides expliquent comment configurer {% data variables.product.prodname_copilot %} avec vos préférences personnelles.


## Pour aller plus loin

- [À propos de {% data variables.product.prodname_copilot %}](/copilot/overview-of-github-copilot/about-github-copilot)
