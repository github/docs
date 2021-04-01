---
title: Base de datos de Git
allowTitleToDifferFromFilename: true
redirect_from:
  - /v3/git
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - api
---

La API de la Base de datos de Git te da acceso de escritura y lectora para los objetos sin procesar de Git que se encuentran en tu base de datos de Git en {% data variables.product.product_name %} y para listar y actualizar tus referencias (cabezas de rama y etiquetas). Para obtener más información acerca de utilizar la API de la Base de Datos de Git, consulta la secicón "[Empezar con la API de datos de Git](/rest/guides/getting-started-with-the-git-database-api)".

{% for operation in currentRestOperations %}
  {% unless operation.subcategory %}{% include rest_operation %}{% endunless %}
{% endfor %}

## Blobs

Un blob (objeto binario grande, por sus siglas en inglés) de Git es el tipo de objeto que se utiliza para almacenar el contenido de cada archivo en un repositorio. El hash SHA-1 del archivo se calcula y almacena en el objeto del blob. Estas terminales te permiten leer y escribir [objetos de blob](https://git-scm.com/book/en/v1/Git-Internals-Git-Objects) en tu base de datos de Git en {% data variables.product.product_name %}. Los blobs aprovechan [estos tipos de medios personalizados](#custom-media-types). Puedes leer más acerca del uso de tipos de medios en la API [aquí](/rest/overview/media-types).

### Tipos de medios personalizados para los blobs

Estos son los tipos de medios compatibles para los blobs.

    application/json
    application/vnd.github.VERSION.raw

Para obtener más información, consulta la sección "[Tipos de medios](/rest/overview/media-types)".

{% for operation in currentRestOperations %}
  {% if operation.subcategory == 'blobs' %}{% include rest_operation %}{% endif %}
{% endfor %}

## Confirmaciones

Una confirmación de Git es una impresión de pantalla de la jerarquía ([árbol de Git](/rest/reference/git#trees)) y del contenido de los archivos ([blob de Git](/rest/reference/git#blobs)) en un reposiotorio de Git. Estas terminales te permiten leer y escribir [objetos de confirmación](https://git-scm.com/book/en/v1/Git-Internals-Git-Objects#Commit-Objects) en tu base de datos en {% data variables.product.product_name %}.

{% for operation in currentRestOperations %}
  {% if operation.subcategory == 'commits' %}{% include rest_operation %}{% endif %}
{% endfor %}

## Referencias

Una referencia (`git ref`) es simplemente un archivo que contiene un hash SHA-1 de una confirmación de Git. Cuando te refieres a una confirmación de Git, puedes utilizar la referencia de Git, la cual es un nombre fácil de recordar, en vez de utilizar el hash. La referencia de Git puede reescribirse para apuntar a una confirmación nueva. Una rama es solo una referencia de Git que almacena el hash de la confirmación de Git nueva. Estas terminales te permiten leer y escribir [referencias](https://git-scm.com/book/en/v1/Git-Internals-Git-References) en tu base de datos de Git en {% data variables.product.product_name %}.

{% for operation in currentRestOperations %}
  {% if operation.subcategory == 'refs' %}{% include rest_operation %}{% endif %}
{% endfor %}

## Etiquetas

Una etiqueta de git es similar a una [referencia de Git](/rest/reference/git#refs), pero la confirmación de Git a la que apunta jamás cambia. Las etiquetas de git son útiles cuando quieres apuntar a algún lanzamiento específico. Estas terminales te permiten leer y escribir [objetos de etiquetas](https://git-scm.com/book/en/v1/Git-Internals-Git-References#Tags)en tu base de datos de Git en {% data variables.product.product_name %}. La API de etiquetas de Git son compatibles únicamente con los [objetos de etiqueta anotados](https://git-scm.com/book/en/v1/Git-Internals-Git-References#Tags), no con etiquetas ligeras.

{% for operation in currentRestOperations %}
  {% if operation.subcategory == 'tags' %}{% include rest_operation %}{% endif %}
{% endfor %}

## Árboles

Un objeto de árbol de Git crea la jerarquía entre archivos para un repositorio de Git. Puedes utilizar el objeto de árbol de Git para crear una relación entre directorios y entre los archivos que contienen. Estas terminales te permiten leer y escribir [objetos de árbol](https://git-scm.com/book/en/v1/Git-Internals-Git-Objects#Tree-Objects)en tu base de datos de Git en {% data variables.product.product_name %}.

{% for operation in currentRestOperations %}
  {% if operation.subcategory == 'trees' %}{% include rest_operation %}{% endif %}
{% endfor %}
