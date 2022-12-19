---
title: Personalizar la vista previa de las redes sociales de tu repositorio
intro: Puedes personalizar la imagen que se muestra en las plataformas de las redes sociales cuando alguien usa un enlace a tu repositorio.
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
ms.contentlocale: es-ES
ms.lasthandoff: 09/10/2022
ms.locfileid: '145136812'
---
Hasta que agregues una imagen, los enlaces al repositorio se expanden para mostrar información básica acerca del repositorio y del avatar del propietario. Agregar una imagen a tu repositorio puede ayudar a identificar tu proyecto entre distintas plataformas de redes sociales.

## Adición de una imagen para personalizar la vista previa de redes sociales del repositorio

{% ifversion not ghae %}Puede cargar una imagen a un repositorio privado, pero la imagen solo se puede compartir desde un repositorio público.{% endif %}

{% tip %}

**Sugerencia:** La imagen debe ser un archivo PNG, JPG o GIF de menos de 1 MB de tamaño. Para presentar la mejor calidad, recomendamos mantener la imagen alrededor de 640 por 320 píxeles.

{% endtip %}

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-settings %}
3. En "Vista previa social", haga clic en **Editar**.
    - Para agregar una imagen nueva, haga clic en **Cargar una imagen...** .
    - Para quitar una imagen, haga clic en **Quitar imagen**.

    ![Menú desplegable de vista previa de redes sociales](/assets/images/help/repository/social-preview.png)

## Acerca de la transparencia

Se admiten imágenes PNG con transparencia. Muchas plataformas de comunicación admiten un modo oscuro, por lo que el uso de una vista previa social transparente puede ser beneficioso. La imagen transparente siguiente es aceptable sobre un fondo oscuro; pero es posible que no siempre sea así. 

Al usar una imagen con transparencia, tenga en cuenta cómo puede verse sobre diferentes fondos de color o en plataformas que no admiten la transparencia.

{% tip %}

**Sugerencia:** Si no está seguro, se recomienda usar una imagen con un fondo sólido.
{% endtip %}

![Transparencia de la vista previa social](/assets/images/help/repository/social-preview-transparency.png)
