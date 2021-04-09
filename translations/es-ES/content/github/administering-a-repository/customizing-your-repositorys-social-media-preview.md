---
title: Personalizar la vista previa de las redes sociales de tu repositorio
intro: Puedes personalizar la imagen que se muestra en las plataformas de las redes sociales cuando alguien usa un enlace a tu repositorio.
redirect_from:
  - /articles/customizing-your-repositorys-social-media-preview
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - repositories
---

Hasta que agregues una imagen, los enlaces al repositorio se expanden para mostrar información básica acerca del repositorio y del avatar del propietario.  Agregar una imagen a tu repositorio puede ayudar a identificar tu proyecto entre distintas plataformas de redes sociales.

{% if currentVersion != "github-ae@latest" %}Puedes cargar una imagen a un repositorio privado, pero tu imagen solo se puede compartir desde un repositorio público.{% endif %}

{% tip %}
Tip: Tu imagen debe ser un archivo PNG, JPG o GIF de menos de 1 MB de tamaño. Para presentar la mejor calidad, recomendamos mantener la imagen alrededor de 640 por 320 píxeles.
{% endtip %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
3. En "Vista previa de las redes sociales", haz clic en **Editar**.
    - Para agregar una nueva imagen, haz clic en **Cargar imagen...**.
    - Para eliminar un imagen, haz clic en **Eliminar imagen**.

    ![Menú desplegable de vista previa de redes sociales](/assets/images/help/repository/social-preview.png)
