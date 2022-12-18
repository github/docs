---
title: Personnalisation de l’aperçu d’un référentiel sur les réseaux sociaux
intro: Vous pouvez personnaliser l’image affichée sur les plateformes de réseaux sociaux quand quelqu’un établit un lien vers votre dépôt.
redirect_from:
  - /articles/customizing-your-repositorys-social-media-preview
  - /github/administering-a-repository/customizing-your-repositorys-social-media-preview
  - /github/administering-a-repository/managing-repository-settings/customizing-your-repositorys-social-media-preview
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Repositories
shortTitle: Social media preview
ms.openlocfilehash: a778b0fd95533a15806cc0034769fbf0feb3b217
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/10/2022
ms.locfileid: '145132233'
---
Tant que vous n’ajoutez pas d’image, les liens du référentiel se développent pour afficher des informations de base sur le référentiel et l’avatar du propriétaire. Le fait d’ajouter une image à votre référentiel peut vous aider à identifier votre projet sur différentes plateformes sociales.

## Ajout d’une image pour personnaliser l’aperçu d’un référentiel sur les réseaux sociaux

{% ifversion not ghae %}Vous pouvez charger une image dans un référentiel privé, mais elle ne peut être partagée qu’à partir d’un référentiel public.{% endif %}

{% tip %}

**Conseil :** Votre image doit être un fichier PNG, JPG ou GIF d’une taille inférieure à 1 Mo. Pour un rendu de qualité optimale, nous vous recommandons de choisir une image d’environ 640 × 320 pixels.

{% endtip %}

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-settings %}
3. Sous « Aperçu sur les réseaux sociaux », cliquez sur **Modifier**.
    - Pour ajouter une nouvelle image, cliquez sur **Charger une image…** .
    - Pour supprimer une image, cliquez sur **Supprimer l’image**.

    ![Liste déroulante Aperçu sur les réseaux sociaux](/assets/images/help/repository/social-preview.png)

## À propos de la transparence

Nous prenons en charge les images PNG avec transparence. De nombreuses plateformes de communication proposent un mode sombre. Un aperçu sur les réseaux sociaux transparent peut donc être bénéfique. L’image transparente ci-dessous est acceptable sur un arrière-plan foncé, mais ce n’est pas toujours le cas. 

Lorsque vous utilisez une image avec transparence, gardez à l’esprit son rendu sur des arrière-plans de différentes couleurs et sur des plateformes qui ne prennent pas en charge la transparence.

{% tip %}

**Conseil :** En cas de doute, nous vous recommandons d’utiliser une image avec un arrière-plan uni.
{% endtip %}

![Transparence de l’aperçu sur les réseaux sociaux](/assets/images/help/repository/social-preview-transparency.png)
