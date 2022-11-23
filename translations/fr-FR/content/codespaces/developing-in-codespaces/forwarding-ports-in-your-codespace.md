---
title: Transfert de ports dans votre espace de code
intro: '{% data reusables.codespaces.about-port-forwarding %}'
versions:
  fpt: '*'
  ghec: '*'
redirect_from:
  - /github/developing-online-with-codespaces/forwarding-ports-in-your-codespace
type: how_to
topics:
  - Codespaces
  - Fundamentals
  - Developer
shortTitle: Forward ports
ms.openlocfilehash: 320a2e42d647452056961d4f0f987c3c5db49476
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 11/09/2022
ms.locfileid: '148158908'
---
{% jetbrains %}

{% data reusables.codespaces.codespaces-jetbrains-beta-note %}

{% endjetbrains %}

## À propos des ports transférés

Le transfert de ports vous permet d’accéder aux ports TCP exécutés dans votre codespace. Par exemple, si vous exécutez une application web sur un port particulier dans votre codespace, vous pouvez transférer ce port. Cela vous permet d’accéder à l’application à partir du navigateur sur votre ordinateur local pour les tests et le débogage.

{% webui %}

{% data reusables.codespaces.port-forwarding-intro-non-jetbrains %} {% data reusables.codespaces.navigate-to-ports-tab %}
1. Sous la liste des ports, cliquez sur **Ajouter un port**.

   ![Ajouter un bouton de port](/assets/images/help/codespaces/add-port-button.png)

1. Tapez le numéro de port ou l’adresse, puis appuyez sur Entrée.

   ![Bouton de port de la zone de texte à taper](/assets/images/help/codespaces/port-number-text-box.png)

## Utilisation du transfert HTTPS

Par défaut, {% data variables.product.prodname_github_codespaces %} transfère les ports à l’aide de HTTP, mais vous pouvez mettre à jour n’importe quel port pour utiliser HTTPS, selon les besoins. Si vous mettez à jour un port avec une visibilité publique pour utiliser HTTPS, la visibilité du port devient automatiquement privée.

{% data reusables.codespaces.navigate-to-ports-tab %}
1. Cliquez avec le bouton de droite sur le port à mettre à jour, puis pointez sur **Changer le protocole de port**.
  ![Option de modification du protocole de port](/assets/images/help/codespaces/update-port-protocol.png)
1. Sélectionnez le protocole nécessaire pour ce port. Le protocole que vous sélectionnez sera mémorisé pour ce port pour la durée de vie du codespace.

{% data reusables.codespaces.port-forwarding-sharing-non-jetbrains %}

{% data reusables.codespaces.navigate-to-ports-tab %}
1. Cliquez avec le bouton de droite sur le port que vous souhaitez partager, sélectionnez le menu « Visibilité du port », puis cliquez sur **Privé pour l’organisation** ou **public**.
  ![Option permettant de sélectionner la visibilité du port dans le menu de clic droit](/assets/images/help/codespaces/make-public-option.png)
1. À droite de l’adresse locale du port, cliquez sur l’icône de copie.
  ![Icône Copier pour l’URL du port](/assets/images/help/codespaces/copy-icon-port-url.png)
1. Envoyez l’URL copiée à la personne avec laquelle vous souhaitez partager le port.

{% data reusables.codespaces.port-forwarding-labeling-non-jetbrains %} {% data reusables.codespaces.port-forwarding-adding-non-jetbrains %}

{% endwebui %}

{% vscode %}

{% data reusables.codespaces.port-forwarding-intro-non-jetbrains %} {% data reusables.codespaces.navigate-to-ports-tab %}
1. Sous la liste des ports, cliquez sur **Ajouter un port**.

   ![Ajouter un bouton de port](/assets/images/help/codespaces/add-port-button.png)

1. Tapez le numéro de port ou l’adresse, puis appuyez sur Entrée.

   ![Bouton de port de la zone de texte à taper](/assets/images/help/codespaces/port-number-text-box.png)

{% data reusables.codespaces.port-forwarding-sharing-non-jetbrains %}

{% data reusables.codespaces.navigate-to-ports-tab %}
1. Cliquez avec le bouton de droite sur le port que vous souhaitez partager, sélectionnez le menu « Visibilité du port », puis cliquez sur **Privé pour l’organisation** ou **public**.
  ![Option permettant de rendre le port public dans le menu de clic droit](/assets/images/help/codespaces/make-public-option.png)
1. À droite de l’adresse locale du port, cliquez sur l’icône de copie.
  ![Icône Copier pour l’URL du port](/assets/images/help/codespaces/copy-icon-port-url.png)
1. Envoyez l’URL copiée à la personne avec laquelle vous souhaitez partager le port.

{% data reusables.codespaces.port-forwarding-labeling-non-jetbrains %} {% data reusables.codespaces.port-forwarding-adding-non-jetbrains %}

{% endvscode %}


{% cli %}

{% data reusables.cli.cli-learn-more %}

Pour transférer un port, utilisez la sous-commande `gh codespace ports forward`. Remplacez `codespace-port:local-port` par les ports distants et locaux que vous souhaitez connecter. Après avoir entré la commande, faites votre choix dans la liste des codespaces affichée.

```shell
gh codespace ports forward CODESPACE-PORT:LOCAL-PORT
```

Pour plus d’informations sur cette commande, consultez [le manuel {% data variables.product.prodname_cli %}](https://cli.github.com/manual/gh_codespace_ports_forward).

Pour afficher les détails des ports transférés, entrez `gh codespace ports`, puis choisissez un codespace.

{% data reusables.codespaces.port-forwarding-sharing-non-jetbrains %}

Pour modifier la visibilité d’un port transféré, utilisez la sous-commande `gh codespace ports visibility`. {% data reusables.codespaces.port-visibility-settings %}

Remplacez `codespace-port` par le numéro de port transféré. Remplacez `setting` par `private`, `org` ou `public`. Après avoir entré la commande, faites votre choix dans la liste des codespaces affichée.

```shell
gh codespace ports visibility CODESPACE-PORT:SETTINGS
```

Vous pouvez définir la visibilité de plusieurs ports avec une seule commande. Par exemple :

```shell
gh codespace ports visibility 80:private 3000:public 3306:org
```

Pour plus d’informations sur cette commande, consultez [le manuel {% data variables.product.prodname_cli %}](https://cli.github.com/manual/gh_codespace_ports_visibility).

{% data reusables.codespaces.port-forwarding-labeling-non-jetbrains %}

Vous pouvez voir les étiquettes de port quand vous listez les ports transférés pour un codespace. Pour ce faire, utilisez la commande `gh codespace ports`, puis sélectionnez un codespace.

{% data reusables.codespaces.port-forwarding-adding-non-jetbrains %}

{% endcli %}

{% jetbrains %}

## Transfert d’un port

Pour plus d’informations sur la façon de transférer un port dans un codespace vers un port sur votre ordinateur local, consultez la section « Transfert de port » de l’article « [Modèle de sécurité](https://www.jetbrains.com/help/idea/security-model.html#port_forwarding) » de la documentation JetBrains.

Vous pouvez également utiliser {% data variables.product.prodname_cli %} pour transférer un port. Pour plus d’informations, cliquez sur l’onglet « {% data variables.product.prodname_cli %} » en haut de cette page.

{% endjetbrains %}
