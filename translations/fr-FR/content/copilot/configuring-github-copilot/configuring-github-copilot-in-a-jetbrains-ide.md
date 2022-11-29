---
title: Configuration de GitHub Copilot dans un IDE JetBrains
intro: 'Vous pouvez activer, configurer et désactiver {% data variables.product.prodname_copilot %} dans un IDE JetBrains.'
product: '{% data reusables.gated-features.copilot %}'
topics:
  - Copilot
versions:
  feature: copilot
shortTitle: JetBrains
ms.openlocfilehash: 845f9306f519391f165dd00d3eefebed67bd409a
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/05/2022
ms.locfileid: '147079820'
---
## À propos de {% data variables.product.prodname_copilot %} dans les IDE JetBrains

Si vous utilisez un IDE Jetbrains, {% data variables.product.prodname_copilot %} peut effectuer la saisie semi-automatique du code à mesure que vous tapez. Après l’installation, vous pouvez activer ou désactiver {% data variables.product.prodname_copilot %}, et vous pouvez configurer des paramètres avancés dans votre IDE ou sur {% data variables.product.prodname_dotcom_the_website %}.

## Prérequis

Pour configurer {% data variables.product.prodname_copilot %} dans un IDE JetBrains, vous devez installer le plug-in {% data variables.product.prodname_copilot %}. Pour plus d’informations, consultez « [Bien démarrer avec {% data variables.product.prodname_copilot %} dans un IDE JetBrains](/copilot/getting-started-with-github-copilot/getting-started-with-github-copilot-in-a-jetbrains-ide) ».

## Raccourcis clavier pour {% data variables.product.prodname_copilot %}

Lorsque vous utilisez {% data variables.product.prodname_copilot %}, vous pouvez utiliser les raccourcis clavier par défaut pour les suggestions inline dans votre IDE JetBrains. Vous pouvez également relier les raccourcis à vos raccourcis clavier préférés pour chaque commande. Pour plus d’informations sur la liaison des raccourcis clavier dans votre IDE JetBrains, consultez la documentation de JetBrains. Par exemple, vous pouvez consulter la documentation [IntelliJ IDEA](https://www.jetbrains.com/help/idea/mastering-keyboard-shortcuts.html#choose-keymap).

{% mac %}

| Action | Raccourci |
|:---|:---|
|Accepter une suggestion inline|<kbd>Onglet</kbd>|
|Ignorer une suggestion inline|<kbd>Échap</kbd>|
|Afficher la suggestion inline suivante|<kbd>Option (⌥) ou Alt</kbd>+<kbd>]</kbd>|
|Afficher la suggestion inline précédente|<kbd>Option (⌥) ou Alt</kbd>+<kbd>[</kbd>|
|Déclencher une suggestion inline|<kbd>Option (⌥)</kbd>+<kbd>\</kbd>|
|Ouvrez {% data variables.product.prodname_copilot %} (suggestions supplémentaires dans un volet séparé)|<kbd>Option (⌥) ou Alt</kbd>+<kbd>Retour</kbd> |

{% endmac %}

{% windows %}

| Action | Raccourci |
|:---|:---|
|Accepter une suggestion inline|<kbd>Onglet</kbd>|
|Ignorer une suggestion inline|<kbd>Échap</kbd>|
|Afficher la suggestion inline suivante|<kbd>Alt</kbd>+<kbd>]</kbd>|
|Afficher la suggestion inline précédente|<kbd>Alt</kbd>+<kbd>[</kbd>|
|Déclencher une suggestion inline|<kbd>Alt</kbd>+<kbd>\</kbd>|
|Ouvrez {% data variables.product.prodname_copilot %} (suggestions supplémentaires dans un volet séparé)|<kbd>Alt</kbd>+<kbd>Entrée</kbd> |

{% endwindows %}

{% linux %}

| Action | Raccourci |
|:---|:---|
|Accepter une suggestion inline|<kbd>Onglet</kbd>|
|Ignorer une suggestion inline|<kbd>Échap</kbd>|
|Afficher la suggestion inline suivante|<kbd>Alt</kbd>+<kbd>]</kbd>|
|Afficher la suggestion inline précédente|<kbd>Alt</kbd>+<kbd>[</kbd>|
|Déclencher une suggestion inline|<kbd>Alt</kbd>+<kbd>\</kbd>|
|Ouvrez {% data variables.product.prodname_copilot %} (suggestions supplémentaires dans un volet séparé)|<kbd>Alt</kbd>+<kbd>Entrée</kbd> |

{% endlinux %}

## Activation ou désactivation de {% data variables.product.prodname_copilot %}

Vous pouvez activer ou désactiver {% data variables.product.prodname_copilot %} dans votre IDE JetBrains. L’icône d’état {% data variables.product.prodname_copilot %} dans le panneau inférieur de la fenêtre JetBrains indique si {% data variables.product.prodname_copilot %} est activé ou désactivé. Quand cette option est activée, l’icône est mise en évidence. Quand elle est désactivée, l’icône est grisée.

1. Pour activer ou désactiver {% data variables.product.prodname_copilot %}, cliquez sur l’icône d’état dans le panneau inférieur de la fenêtre JetBrains.
   ![Icône d’état dans JetBrains](/assets/images/help/copilot/status-icon-jetbrains.png)
2. Si vous désactivez {% data variables.product.prodname_copilot %}, il vous sera demandé si vous souhaitez le désactiver entièrement ou seulement pour le langage du fichier que vous êtes en train de modifier. Pour désactiver l’option globalement, cliquez sur **Désactiver les saisies semi-automatiques**. Si vous souhaitez désactiver {% data variables.product.prodname_copilot %} pour le langage spécifié, vous pouvez également cliquer sur le bouton correspondant au langage.
   ![Désactiver {% data variables.product.prodname_copilot %} globalement ou pour le langage actuel](/assets/images/help/copilot/disable-copilot-global-or-langugage-jetbrains.png)

## Configuration des paramètres avancés pour {% data variables.product.prodname_copilot %}

Vous pouvez gérer les paramètres avancés pour {% data variables.product.prodname_copilot %} dans votre IDE JetBrains, par exemple la façon dont votre IDE affiche les saisies semi-automatiques de code ou les langages que vous souhaitez activer ou désactiver pour {% data variables.product.prodname_copilot %}.

1. Dans votre IDE JetBrains, cliquez sur le menu **File** (Fichier), puis sur **Settings** (Paramètres).
1. Sous **Languages & Frameworks** (Langages et frameworks), cliquez sur **{% data variables.product.prodname_copilot %}** .
1. Modifiez les paramètres selon vos préférences personnelles.
   - Pour ajuster le comportement et l’apparence des suggestions de code et vérifier automatiquement les mises à jour, sélectionnez ou désélectionnez les cases correspondantes.
   - Si vous avez choisi de recevoir des mises à jour automatiques, vous pouvez choisir de recevoir des mises à jour stables, mais moins fréquentes, ou des mises à jour nocturnes, qui peuvent être moins stables. Cliquez sur la liste déroulante **Update channel** (Canal de mise à jour), puis sélectionnez **Stable** pour les mises à jour stables ou **Nightly** (Nocturne) pour les mises à jour nocturnes.
   - Sous « Disabled languages » (Langages désactivés), sélectionnez ou désélectionnez les langages pour lesquels vous souhaitez désactiver {% data variables.product.prodname_copilot %}.

{% data reusables.copilot.dotcom-settings %}
