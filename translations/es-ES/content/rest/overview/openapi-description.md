---
title: Descripción de OpenAPI
intro: 'La API de REST de {% data variables.product.product_name %} se describe íntegramente en un documento compatible con OpenAPI 3.0.'
versions:
  free-pro-team: '*'
  enterprise-server: '*'
topics:
  - api
---

### Acerca de las descripciones de OpenAPI

[OpenAPI](https://swagger.io/docs/specification/about/) es una especificación estándar para describir las API de REST. Las descripciones de OpenAPI permiten tanto a los humanos como a las máquinas descubrir las capacidades de una API sin la necesidad de leer documentación o entender la implementación. {% data variables.product.company_short %} ha puesto si API de REST disponible para el público en general como un documento compatible con OpenAPI 3.0.

### Obtener la descricpión de OpenAPI de {% data variables.product.company_short %}

Puedes encontrar la descripción en el repositorio de código abierto de [Descripción de OpenAPI de la API de REST](https://github.com/github/rest-api-description).

Proporcionamos la descripción en dos formatos. La versión en paquete funciona para la mayoría de los casos, ya que incluye componentes de OpenAPI para reutilización y legibilidad. Si tus herramientas no son compatibles con las referencias a los componentes dentro de las líneas, también te proporcionamos una versión completamente desreferenciada.

### Utilizar la descripción de OpenAPI de {% data variables.product.company_short %}

Hay muchos tipos de uso para la descripción de OpenAPI. Por ejemplo, podrías:

* Generar tu propio cliente de API.
* Validar y probar una ingegración a la API de REST de {% data variables.product.company_short %}.
* Explorar e interactuar con la API de REST de {% data variables.product.product_name %} utilizando herramientas de terceros tales como Insomnia o Postman.

Por ejemplo, {% data variables.product.company_short %} utiliza la descripción de OpenAPI de REST para generar la [documentación de referencia de la API de REST](/rest/reference) de {% data variables.product.product_name %}.
