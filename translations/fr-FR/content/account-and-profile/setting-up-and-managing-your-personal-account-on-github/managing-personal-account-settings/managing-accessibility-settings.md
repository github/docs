---
title: Gestion des paramètres d’accessibilité
shortTitle: Manage accessibility settings
intro: 'L’interface utilisateur de {% data variables.product.product_name %} peut s’adapter à vos besoins de vision, d’audition, de motricité, de cognition ou d’apprentissage.'
versions:
  feature: keyboard-shortcut-accessibility-setting
redirect_from:
  - /account-and-profile/setting-up-and-managing-your-github-user-account/managing-user-account-settings/managing-accessibility-settings
type: how_to
miniTocMaxHeadingLevel: 3
ms.openlocfilehash: 088bb097004f6c3b13412ec9716665b1f02edca5
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 10/25/2022
ms.locfileid: '148107212'
---
## À propos des paramètres d’accessibilité

Pour créer une expérience sur {% ifversion fpt or ghec or ghes %}{% data variables.location.product_location %}{% elsif ghae %}{% data variables.product.product_name %}{% endif %} répondant à vos besoins, vous pouvez personnaliser l’interface utilisateur. Les paramètres d’accessibilité peuvent être essentiels aux personnes atteintes d’un handicap, mais peuvent être utiles à tout le monde. Par exemple, la personnalisation des raccourcis clavier est essentielle pour les personnes qui naviguent à l’aide de commandes vocales, mais peut être utile à tout le monde quand un raccourci clavier pour {% data variables.product.product_name %} entre en conflit avec un autre raccourci d’application.

## Gestion des paramètres d’accessibilité

Vous pouvez décider si vous souhaitez utiliser certains raccourcis clavier ou tous les raccourcis clavier sur {% ifversion fpt or ghec %}{% data variables.location.product_location %}{% elsif ghes or ghae %}le site web de {% data variables.location.product_location %}{% endif %}, et vous pouvez contrôler l’affichage des images animées.

### Gestion des raccourcis clavier

Vous pouvez effectuer des actions sur le site web {% data variables.product.product_name %} en utilisant seulement votre clavier. Les raccourcis clavier peuvent être utiles pour gagner du temps, mais peuvent être activés par accident ou interférer avec la technologie d’assistance.

Par défaut, tous les raccourcis clavier sont activés sur {% data variables.product.product_name %}. Pour plus d’informations, consultez « [Raccourcis clavier](/get-started/using-github/keyboard-shortcuts) ».

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.accessibility_settings %}
1. Sous « Raccourcis clavier », gérez les paramètres de vos raccourcis clavier.

   - Pour désactiver des touches de raccourci qui n’utilisent pas de touches de modification comme <kbd>Contrôle</kbd> ou <kbd>Commande</kbd>, sous « Général », désélectionnez **Touches de caractère**.
     - Si vous désactivez les touches de caractère, vous pouvez quand même déclencher des raccourcis pour votre navigateur web et vous pouvez quand même déclencher des raccourcis pour {% data variables.product.product_name %} qui utilisent une touche modifiante.
   {%- ifversion command-palette %}
   - Pour personnaliser les raccourcis clavier afin de déclencher la palette de commandes, sous « Palette de commandes », utilisez les menus déroulants pour choisir un raccourci clavier. Pour plus d’informations, consultez « [Palette de commandes {% data variables.product.company_short %}](/get-started/using-github/github-command-palette) ».
   {%- endif %}

{% ifversion motion-management %}

### Gestion des mouvements

Vous pouvez contrôler la façon dont {% data variables.product.product_name %} affiche les images _.gif_ animées.

Par défaut, {% data variables.product.product_name %} se synchronise avec votre préférence au niveau système pour la réduction de mouvements. Pour plus d’informations, consultez la documentation ou les paramètres de votre système d’exploitation.

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.accessibility_settings %}
1. Sous « Mouvement », gérez les paramètres de mouvement.

   - Pour contrôler la façon dont {% data variables.product.product_name %} affiche les images animées, sous « Lecture automatique des images animées », sélectionnez **Synchroniser avec le système**, **Activé** ou **Désactivé**.

{% endif %}
