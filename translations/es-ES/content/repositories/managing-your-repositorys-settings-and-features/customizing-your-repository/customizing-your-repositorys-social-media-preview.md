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
shortTitle: Vista previa en redes sociales
---

Hasta que agregues una imagen, los enlaces al repositorio se expanden para mostrar información básica acerca del repositorio y del avatar del propietario.  Agregar una imagen a tu repositorio puede ayudar a identificar tu proyecto entre distintas plataformas de redes sociales.

## Agregar una imagen para personalizar la vista previa en redes sociales de tu repositorio

{% ifversion not ghae %}Puedes cargar una imagen a un repositorio privado, pero tu imagen solo se puede compartir desde un repositorio público.{% endif %}

{% tip %}

**Tip:** Tu imagen debe ser un archivo en formato PNG, JPG o GIF de menos de 1 MB. Para presentar la mejor calidad, recomendamos mantener la imagen alrededor de 640 por 320 píxeles.

{% endtip %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
3. En "Vista previa de las redes sociales", haz clic en **Editar**.
    - Para agregar una nueva imagen, haz clic en **Cargar imagen...**.
    - Para eliminar un imagen, haz clic en **Eliminar imagen**.

    ![Menú desplegable de vista previa de redes sociales](/assets/images/help/repository/social-preview.png)

## Acerca de la transparencia

Tenemos compatibilidad de las imágenes PNG con transparencia. La mayoría de las plataformas de comunicaciones son compatibles con un modo oscuro, así que el usar una vista previa transparente para redes sociales podría ser beneficioso. La siguiente imagen transparente se acepta en un fondo oscuro, sin embargo, esto podría no siempre ser el caso.

Cuando utilices una imagen con transparencia, toma en cuenta cómo se vería con diferentes fondos o en plataformas que no sean compatibles con la transparencia.

{% tip %}

**Tip:** Si no estás seguro, te recomendamos utilizar una imagen con un fondo sólido.
{% endtip %}

![Transparencia de vista previa social](/assets/images/help/repository/social-preview-transparency.png)
