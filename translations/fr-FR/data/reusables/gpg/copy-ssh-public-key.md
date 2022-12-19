---
ms.openlocfilehash: a707921d4c8f6afa3ce5e59e2d58180ecb38d29e
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/05/2022
ms.locfileid: "147653393"
---
1. Copiez la clé publique SSH dans votre Presse-papiers.

  Si votre fichier de clé publique a un nom différent de celui de l’exemple de code, modifiez-le pour qu’il corresponde à votre configuration actuelle. Quand vous copiez votre clé, n’ajoutez pas de lignes ou d’espaces blancs.
{% mac %}

  ```shell
  $ pbcopy &lt; ~/.ssh/id_{% ifversion ghae %}rsa{% else %}ed25519{% endif %}.pub
  # Copies the contents of the id_{% ifversion ghae %}rsa{% else %}ed25519{% endif %}.pub file to your clipboard
  ```

  {% tip %}

  **Conseil :** Si `pbcopy` ne fonctionne pas, vous pouvez localiser le dossier masqué `.ssh`, ouvrir le fichier dans votre éditeur de texte favori et le copier dans le Presse-papiers.

  {% endtip %} {% endmac %} {% windows %}

  ```shell
  $ clip &lt; ~/.ssh/id_{% ifversion ghae %}rsa{% else %}ed25519{% endif %}.pub
  # Copies the contents of the id_{% ifversion ghae %}rsa{% else %}ed25519{% endif %}.pub file to your clipboard
  ```

  {% tip %}

  **Conseil :** Si `clip` ne fonctionne pas, vous pouvez localiser le dossier masqué `.ssh`, ouvrir le fichier dans votre éditeur de texte favori et le copier dans le Presse-papiers.

  {% endtip %} {% endwindows %} {% linux %}

  ```shell
  $ cat ~/.ssh/id_{% ifversion ghae %}rsa{% else %}ed25519{% endif %}.pub
  # Then select and copy the contents of the id_{% ifversion ghae %}rsa{% else %}ed25519{% endif %}.pub file
  # displayed in the terminal to your clipboard
  ```

  {% tip %}

  **Conseil :** Vous pouvez également localiser le dossier masqué `.ssh`, ouvrir le fichier dans votre éditeur de texte favori et le copier dans le Presse-papiers.

  {% endtip %} {% endlinux %}
