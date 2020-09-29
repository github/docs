---
title: Cómo clonar un repositorio desde GitHub hasta GitHub Desktop
intro: 'Puedes usar {% data variables.product.prodname_dotcom %} para clonar repositorios remotos a {% data variables.product.prodname_desktop %}.'
versions:
  free-pro-team: '*'
---

{% tip %}

**Sugerencia:**  También puede usar {% data variables.product.prodname_desktop %} para clonar repositorios que existen en {% data variables.product.prodname_dotcom %}.  Para obtener más información, consulta "[Cómo clonar un repositorio desde {% data variables.product.prodname_desktop %}](/desktop/guides/contributing-to-projects/cloning-a-repository-from-github-to-github-desktop/)."

{% endtip %}

{% mac %}

1. Inicia sesión en {% data variables.product.product_location %} y {% data variables.product.prodname_desktop %} antes de comenzar la clonación.
{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.open-with-github-desktop %}
5. Haz clic en **Choose...** (Elegir...) y, a través de la ventana Finder (Buscador) desplázate hasta la ruta donde deseas clonar el repositorio. ![El botón Choose (Elegir) en la pestaña URL](/assets/images/help/desktop/clone-choose-button-url-mac.png)

  {% note %}

  **Nota:** Si el repositorio está configurado para usar LFS, se te pedirá que inicies {% data variables.large_files.product_name_short %}.

  {% endnote %}

5. Haz clic en **Clone**. ![El botón para clonar en la pestaña URL](/assets/images/help/desktop/clone-button-url-mac.png)

{% endmac %}

{% windows %}

1. Inicia sesión en {% data variables.product.product_location %} y {% data variables.product.prodname_desktop %} antes de comenzar la clonación.
{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.open-with-github-desktop %}
5. Haz clic en **Choose...** (Elegir...) y, a través de Windows Explorer, desplázate hasta la ruta donde deseas clonar el repositorio. ![El botón Choose (Elegir)](/assets/images/help/desktop/clone-choose-button-url-win.png)

  {% note %}

  **Nota:** Si el repositorio está configurado para usar LFS, se te pedirá que inicies {% data variables.large_files.product_name_short %}.

  {% endnote %}

5. Haz clic en **Clone**. ![El botón Clone (Clonar)](/assets/images/help/desktop/clone-button-url-win.png)

{% endwindows %}
