---
title: Cómo clonar un repositorio desde GitHub hasta GitHub Desktop
intro: 'Puedes usar {% data variables.product.prodname_dotcom %} para clonar repositorios remotos a {% data variables.product.prodname_desktop %}.'
redirect_from:
  - /desktop/contributing-to-projects/cloning-a-repository-from-github-to-github-desktop
  - /desktop/contributing-and-collaborating-using-github-desktop/cloning-a-repository-from-github-to-github-desktop
versions:
  fpt: '*'
shortTitle: Clone a GitHub repo
ms.openlocfilehash: ba4ddcc8c3d95454ab06cac0293162e2fe01fe32
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/11/2022
ms.locfileid: '145117569'
---
{% tip %}

**Sugerencia:** También puede usar {% data variables.product.prodname_desktop %} para clonar repositorios que ya existen en {% data variables.product.prodname_dotcom %}.  Para más información, vea "[Clonación de un repositorio desde {% data variables.product.prodname_desktop %}](/desktop/guides/contributing-to-projects/cloning-a-repository-from-github-to-github-desktop/)".

{% endtip %}

{% mac %}

1. Inicia sesión en {% data variables.product.product_location %} y {% data variables.product.prodname_desktop %} antes de comenzar la clonación.
{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.open-with-github-desktop %}
5. Haga clic en **Choose...** (Elegir) y, con la ventana Buscador, desplácese hasta la ruta donde quiera clonar el repositorio.
![El botón Choose (Elegir) en la pestaña URL](/assets/images/help/desktop/clone-choose-button-url-mac.png)

  {% note %}

  **Nota:** Si el repositorio está configurado para usar LFS, se le pedirá que inicialice {% data variables.large_files.product_name_short %}.

  {% endnote %}

5. Haga clic en **Clone** (Clonar).
![El botón Clone (Clonar) en la pestaña URL](/assets/images/help/desktop/clone-button-url-mac.png)

{% endmac %}

{% windows %}

1. Inicia sesión en {% data variables.product.product_location %} y {% data variables.product.prodname_desktop %} antes de comenzar la clonación.
{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.open-with-github-desktop %}
5. Haga clic en **Elegir...** y, con el Explorador de Windows, vaya hasta una ruta local donde quiera clonar el repositorio.
![El botón Elegir](/assets/images/help/desktop/clone-choose-button-url-win.png)

  {% note %}

  **Nota:** Si el repositorio está configurado para usar LFS, se le pedirá que inicialice {% data variables.large_files.product_name_short %}.

  {% endnote %}

5. Haga clic en **Clone** (Clonar).
![El botón Clonar](/assets/images/help/desktop/clone-button-url-win.png)

{% endwindows %}
