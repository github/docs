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

## Adding an image to customize the social media preview of your repository

{% ifversion not ghae %}Puedes cargar una imagen a un repositorio privado, pero tu imagen solo se puede compartir desde un repositorio público.{% endif %}

{% tip %}

**Tip:** Your image should be a PNG, JPG, or GIF file under 1 MB in size. Para presentar la mejor calidad, recomendamos mantener la imagen alrededor de 640 por 320 píxeles.

{% endtip %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
3. En "Vista previa de las redes sociales", haz clic en **Editar**.
    - Para agregar una nueva imagen, haz clic en **Cargar imagen...**.
    - Para eliminar un imagen, haz clic en **Eliminar imagen**.

    ![Menú desplegable de vista previa de redes sociales](/assets/images/help/repository/social-preview.png)

## About transparency

We support PNG images with transparency. Many communication platforms support a dark mode, so using a transparent social preview may be beneficial. The transparent image below is acceptable on a dark background; however, this may not always be the case.

When using an image with transparency, keep in mind how it may look on different color backgrounds or platforms that don't support transparency.

{% tip %}

**Tip:** If you aren't sure, we recommend using an image with a solid background.
{% endtip %}

![Social preview transparency](/assets/images/help/repository/social-preview-transparency.png)
