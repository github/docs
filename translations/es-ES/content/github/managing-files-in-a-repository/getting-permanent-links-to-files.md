---
title: Obtener enlaces permanentes a archivos
intro: 'Cuando ves un archivo en {% data variables.product.product_location %}, puedes presionar la tecla "y" para actualizar la URL y obtener un enlace permanente para la versión exacta del archivo que estás viendo.'
redirect_from:
  - /articles/getting-a-permanent-link-to-a-file/
  - /articles/how-do-i-get-a-permanent-link-from-file-view-to-permanent-blob-url/
  - /articles/getting-permanent-links-to-files
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---

{% tip %}

**Sugerencia**: Presiona "?" en cualquier página en {% data variables.product.product_name %} para ver todos los atajos del teclado disponibles.

{% endtip %}

### Vistas del archivo que muestran la versión más reciente en una rama

Cuando ves un archivo en {% data variables.product.product_location %}, por lo general, accedes a la versión en el encabezado actual de una rama.  Por ejemplo:

* [https://github.com/github/codeql/blob/**main**/README.md](https://github.com/github/codeql/blob/main/README.md)

se refiere al repositorio `codeql` de GitHub, y muestra la versión más reciente de la rama `main` del archivo `README.md`.

La versión de un archivo en el encabezado de una rama puede cambiar cuando se realizan nuevas confirmaciones, por eso si copias la URL normal, el contenido del archivo puede no ser el mismo cuando alguien lo vea más tarde.

### Presiona <kbd>y</kbd> para obtener un enlace permanente en archivo en una confirmación específica

Para encontrar un enlace permanente a la versión específica de un archivo que veas, en vez de utilizar el nombre de la rama en la URL (por ejemplo, la parte de `main` en el ejemplo anterior), coloca una id de confirmación.  Esto generará un enlace permanente a la versión exacta del archivo en esa confirmación.  Por ejemplo:

* [https://github.com/github/codeql/blob/**b212af08a6cffbb434f3c8a2795a579e092792fd**/README.md](https://github.com/github/codeql/blob/b212af08a6cffbb434f3c8a2795a579e092792fd/README.md)

reemplaza `main` con la id de confirmación específica y el contenido del archivo no cambiará.

Buscar de manera manual el SHA de confirmación es muy poco práctico. No obstante, a modo de atajo, puedes escribir <kbd>y</kbd> para actualizar automáticamente la URL para la versión del enlace permanente.  Luego puedes copiar la URL sabiendo que todas las personas con quienes la compartas verán exactamente lo mismo que tú viste.

{% tip %}

**Sugerencia**: Puedes colocar un identificador que se puede resolver para una confirmación en la URL, incluidos los nombres de las ramas, los SHA de confirmación específicos o las etiquetas.

{% endtip %}

### Crear un enlace permanente a un fragmento de código

Puedes crear un enlace permanente a una línea específica o a un rango de líneas de código en una versión específica de un archivo o de una solicitud de extracción. Para obtener más información, consulta "[Crear un enlace permanente al fragmento de código](/articles/creating-a-permanent-link-to-a-code-snippet/)".

### Further reading

- "[Archivar un repositorio de GitHub](/articles/archiving-a-github-repository)"
