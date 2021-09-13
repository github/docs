---
title: Visualizador de archivos 3D
redirect_from:
  - /articles/stl-file-viewer/
  - /articles/3d-file-viewer
  - /github/managing-files-in-a-repository/3d-file-viewer
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - Repositories
---
{% data variables.product.product_name %} puede alojar y representar archivos 3D con la extensión *.stl*.

Al buscar directamente en un archivo STL en {% data variables.product.product_name %} puedes:

* Hacer clic y arrastrar para girar el modelo.
* Hacer clic con el botón derecho y arrastrar para traducir la vista.
* Desplazarse para acercar y alejar.
* Hacer clic en los diferentes modos para cambiar la vista.

### Diferencias

Cuando miras una confirmación de cambios o un conjunto de cambios que incluyen un archivo STL, podrás ver una diferencia de antes y después del archivo.

Por defecto, obtendrás una vista donde todo lo que no ha cambiado está en el esquema de página. Las adiciones aparecen en verde y las partes eliminadas aparecen en rojo.

![esquema de página](/assets/images/help/repository/stl_wireframe.png)

También puedes seleccionar la opción **Control deslizante de la revisión**, que te permite usar un control deslizante en la parte superior del archivo para cambiar entre las revisiones actuales y las anteriores.

### Solucionar un rendimiento reducido

Si ves este ícono en la esquina del visualizador, entonces la tecnología WebGL no está disponible en tu navegador:

![error emergente de WebGL](/assets/images/help/repository/render_webgl_error.png)

WebGL es necesario para aprovechar el hardware de tu equipo al máximo. Te recomendamos que intentes con navegadores como [Chrome](https://www.google.com/intl/en/chrome/browser/) o [Firefox](https://www.mozilla.org/en-US/firefox/new/), que vienen con WebGL activado.

### Error: "No se puede mostrar"

Si tu modelo no es válido, es posible que GitHub no pueda mostrar el archivo. Además, los archivos de más de 10 MB son demasiado grandes para que GitHub los muestre.

### Insertar tu modelo en otro lugar

Para mostrar tu archivo 3D en algún otro lugar de Internet, modifica esta plantilla y colócala en cualquier página HTML que sea compatible con JavaScript:

```html
<script src="https://embed.github.com/view/3d/<username>/<repo>/<ref>/<path_to_file>"></script>
```

Por ejemplo, si la URL de tu modelo es [github.com/skalnik/secret-bear-clip/blob/master/stl/clip.stl](https://github.com/skalnik/secret-bear-clip/blob/master/stl/clip.stl), tu código para insertar sería:

```html
<script src="https://embed.github.com/view/3d/skalnik/secret-bear-clip/master/stl/clip.stl"></script>
```

Por defecto, la representación insertada es de 420 píxeles de ancho por 620 de alto, pero puedes personalizar la salida, pasando las variables de altura y ancho como parámetros al final de la URL, como `?height=300&width=500`.

{% tip %}

**Nota**: `ref` puede ser una rama del hash para una confirmación individual (como `2391ae`).

{% endtip %}
