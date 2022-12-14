---
title: Clonage d’un dépôt de GitHub vers GitHub Desktop
intro: 'Vous pouvez utiliser {% data variables.product.prodname_dotcom %} pour cloner les dépôts existants sur {% data variables.product.prodname_desktop %}.'
redirect_from:
  - /desktop/contributing-to-projects/cloning-a-repository-from-github-to-github-desktop
  - /desktop/contributing-and-collaborating-using-github-desktop/cloning-a-repository-from-github-to-github-desktop
versions:
  fpt: '*'
shortTitle: Clone a GitHub repo
ms.openlocfilehash: ba4ddcc8c3d95454ab06cac0293162e2fe01fe32
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/11/2022
ms.locfileid: '145105378'
---
{% tip %}

**Conseil :** Vous pouvez également utiliser {% data variables.product.prodname_desktop %} pour cloner des dépôts qui existent sur {% data variables.product.prodname_dotcom %}.  Pour plus d’informations, consultez « [Clonage d’un dépôt à partir de {% data variables.product.prodname_desktop %}](/desktop/guides/contributing-to-projects/cloning-a-repository-from-github-to-github-desktop/) ».

{% endtip %}

{% mac %}

1. Connectez-vous à {% data variables.product.product_location %} et {% data variables.product.prodname_desktop %} avant de commencer le clonage.
{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.open-with-github-desktop %}
5. Cliquez sur **Choisir**, puis, à l’aide de la fenêtre du Finder, accédez au chemin local dans lequel vous souhaitez cloner le dépôt.
![Bouton Choisir sous l’onglet URL](/assets/images/help/desktop/clone-choose-button-url-mac.png)

  {% note %}

  **Remarque :** Si le dépôt est configuré pour utiliser LFS, vous êtes invité à initialiser {% data variables.large_files.product_name_short %}.

  {% endnote %}

5. Cliquez sur **Cloner**.
![Bouton Cloner sous l’onglet URL](/assets/images/help/desktop/clone-button-url-mac.png)

{% endmac %}

{% windows %}

1. Connectez-vous à {% data variables.product.product_location %} et {% data variables.product.prodname_desktop %} avant de commencer le clonage.
{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.open-with-github-desktop %}
5. Cliquez sur **Choisir**, puis, à l’aide de la fenêtre de l’Explorateur Windows, accédez au chemin local dans lequel vous souhaitez cloner le dépôt.
![Bouton Choisir](/assets/images/help/desktop/clone-choose-button-url-win.png)

  {% note %}

  **Remarque :** Si le dépôt est configuré pour utiliser LFS, vous êtes invité à initialiser {% data variables.large_files.product_name_short %}.

  {% endnote %}

5. Cliquez sur **Cloner**.
![Bouton Cloner](/assets/images/help/desktop/clone-button-url-win.png)

{% endwindows %}
