---
title: Arrêt et démarrage d’un codespace
intro: Vous pouvez arrêter et démarrer votre codespace pour enregistrer des ressources et mettre le travail en pause.
versions:
  fpt: '*'
  ghec: '*'
type: how_to
topics:
  - Codespaces
  - Fundamentals
  - Developer
shortTitle: Stop a codespace
ms.openlocfilehash: 5c34fd5b7d72f52e203cd8f8fdc1871ff6a2f014
ms.sourcegitcommit: 1f3bd126ca000982c538f1621d47722737740943
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 12/01/2022
ms.locfileid: '148188247'
---
{% jetbrains %}

{% data reusables.codespaces.codespaces-jetbrains-beta-note %}

{% endjetbrains %}

## À propos de l’arrêt et du démarrage d’un codespace

{% data reusables.codespaces.stopping-a-codespace %}

Quel que soit l’emplacement à partir duquel vous avez créez vos codespaces ou y accédez, vous pouvez les voir et les gérer dans votre navigateur sur https://github.com/codespaces. 

## Arrêt d’un codespace

{% webui %}

{% data reusables.codespaces.navigate-to-codespaces-page %}
 1. À droite du codespace que vous voulez arrêter, cliquez sur les points de suspension ( **...** ).
 1. Cliquez sur **Arrêter le codespace**.
   ![Capture d’écran de l’option permettant d’arrêter un codespace](/assets/images/help/codespaces/stop-codespace-webui.png)

{% endwebui %}

{% cli %}

{% data reusables.cli.cli-learn-more %}

 Pour arrêter un codespace, utilisez la sous-commande `gh codespace stop`, puis choisissez le codespace à arrêter dans la liste affichée.

 ```shell{:copy}
 gh codespace stop
 ```

{% endcli %}

{% vscode %}

{% data reusables.vs-code.open-command-palette %}
1. Tapez `stop` et sélectionnez **Codespaces : Arrêter le codespace** dans la liste des options.
1. Dans la liste des codespaces, sélectionnez celui que vous voulez arrêter.

{% endvscode %}

{% jetbrains %}

Vous pouvez arrêter un codespace à partir de la page « Vos codespaces » (consultez [les instructions du navigateur web](/codespaces/developing-in-codespaces/stopping-and-starting-a-codespace?tool=webui#stopping-a-codespace)) ou à l’aide de {% data variables.product.prodname_cli %} (consultez [les instructions de l’interface CLI](/codespaces/developing-in-codespaces/stopping-and-starting-a-codespace?tool=cli#stopping-a-codespace)).

{% endjetbrains %}

## Redémarrage d’un codespace

{% webui %}

{% data reusables.codespaces.navigate-to-codespaces-page %}
1. Cliquez sur le nom du codespace que vous voulez redémarrer.
![Capture d’écran des codespaces arrêtés](/assets/images/help/codespaces/restart-codespace-webui.png)

{% endwebui %}

{% cli %}

Quand vous redémarrez un codespace, vous pouvez choisir de l’ouvrir dans {% data variables.product.prodname_vscode %} ou dans votre navigateur. 

 - Pour redémarrer un codespace et l’ouvrir dans {% data variables.product.prodname_vscode %}, utilisez la sous-commande `gh codespace code`, puis choisissez le codespace à redémarrer dans la liste affichée.

 ```shell{:copy} 
 gh codespace code
 ```

 - Pour redémarrer un codespace et l’ouvrir dans votre navigateur, utilisez la sous-commande `gh codespace open --web`, puis choisissez le codespace à redémarrer dans la liste affichée.

 ```shell{:copy}
 gh codespace open --web
 ```

{% endcli %}

{% vscode %}

{% data reusables.vs-code.open-command-palette %}
1. Tapez `connect` et sélectionnez **Codespaces : Se connecter au codespace** dans la liste des options.
1. Dans la liste des codespaces, sélectionnez celui que vous voulez redémarrer.

{% endvscode %}

{% jetbrains %}

{% data reusables.codespaces.opening-codespace-in-jetbrains %}

{% endjetbrains %}

## Pour aller plus loin

- « [Cycle de vie des codespaces](/codespaces/getting-started/the-codespace-lifecycle) »
