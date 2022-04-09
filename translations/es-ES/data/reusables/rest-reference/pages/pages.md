La API de {% data variables.product.prodname_pages %} recupera información sobre tu configuración de {% data variables.product.prodname_pages %} y sobre los estados de tus compilaciones. Solo los propietarios autenticados pueden acceder a la información sobre el sitio y sobre las compilaciones{% ifversion not ghae %}, incluso si los sitios web son públicos{% endif %}. Para obtener más información, consulta la sección "[Acerca de {% data variables.product.prodname_pages %}](/pages/getting-started-with-github-pages/about-github-pages)".

En las terminales de la API de {% data variables.product.prodname_pages %} que llevan una clave de `status` en su respuesta, el valor puede ser uno de entre los siguientes:
* `null`: El sitio aún tiene que crearse.
* `queued`: Se solicitó la compilación, pero no ha iniciado.
* `building`: La compilación está en curso.
* `built`: Se creó el sitio.
* `errored`: Indica que ocurrió un error durante la compilación.

En las terminales de la API de {% data variables.product.prodname_pages %} que devulenven información del sitio de GitHub Pages, las respuestas de JSON incluyen estos campos:
* `html_url`: La URL absoluta (incluyendo el modelo) del sitio de Páginas que se interpretó. Por ejemplo, `https://username.github.io`.
* `source`: Un objeto que contiene la rama origen y el directorio del sitio de Páginas que se interpretó. Esto incluye:
   - `branch`: La rama del repositorio que se utilizó para publicar los [archivos de código fuente de tu sitio](/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site). Por ejemplo, _main_ o _gh-pages_.
   - `path`: El directorio del repositorio desde el cual publica el sitio. Podría ser `/` o `/docs`.