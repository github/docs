---
title: Escribir la descripción de un listado para tu app
intro: 'Para [mostrar tu aplicación](/marketplace/listing-on-github-marketplace/) en {% data variables.product.prodname_marketplace %}, deberás escribir una descripción de ella y proporcionar imágenes que sigan las indicaciones de GitHub.'
redirect_from:
  - /apps/marketplace/getting-started-with-github-marketplace-listings/guidelines-for-writing-github-app-descriptions
  - /apps/marketplace/creating-and-submitting-your-app-for-approval/writing-github-app-descriptions
  - /apps/adding-integrations/listing-apps-on-github-marketplace/guidelines-for-creating-a-github-marketplace-listing
  - /apps/marketplace/listing-apps-on-github/guidelines-for-creating-a-github-marketplace-listing
  - /apps/marketplace/getting-started-with-github-marketplace-listings/guidelines-for-creating-github-marketplace-listing-images
  - /apps/marketplace/creating-and-submitting-your-app-for-approval/creating-github-marketplace-listing-images
  - /apps/marketplace/listing-on-github-marketplace/writing-github-marketplace-listing-descriptions
  - /marketplace/listing-on-github-marketplace/writing-github-marketplace-listing-descriptions
  - /developers/github-marketplace/writing-a-listing-description-for-your-app
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Marketplace
shortTitle: Write listing descriptions
ms.openlocfilehash: f29e049529801011d25d2723c5851b56d7a8bb92
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/05/2022
ms.locfileid: '146139260'
---
Estas son instrucciones sobre los campos que tendrá que rellenar en la sección **Descripción de la oferta** del borrador de la oferta.

## Nomencltura y enlaces

### Nombre del listado

El nombre de la oferta aparecerá en la [página principal de {% data variables.product.prodname_marketplace %}](https://github.com/marketplace). El nombre se limita a 255 caracteres y puede ser diferente que aquél de tu app. Tu listado no puede tener el mismo nombre que el de una cuenta existente en {% data variables.product.product_location %}, a menos de que dicho nombre sea aquél de tu organización o usuario. 

### Descripción muy corta

La comunidad verá la descripción "muy corta" en el nombre de la aplicación en la [página principal de {% data variables.product.prodname_marketplace %}](https://github.com/marketplace).

![Descripción corta de la app en {% data variables.product.prodname_marketplace %}](/assets/images/marketplace/marketplace_short_description.png)

#### Length

Te remcomendamos mantener un largo de 40 a 80 caracteres para las descripciones cortas. Aunque se te permite utilizar más caracteres, las descripciones concisas son más fáciles de leer y más rápidas de entender para los clientes.

#### Contenido

- Describe la funcionalidad de la app. No utilices este espaccio para un llamado a la acción. Por ejemplo:

  **SÍ:** Administrar proyectos ligeros para incidencias de GitHub

  **NO:** Administrar los proyectos e incidencias en GitHub

  **Sugerencia:** Agregue la tercera personal del singular al final del verbo en una llamada a la acción para convertirla en una descripción aceptable: _Administra los proyectos e incidencias en GitHub_

- No repitas el nombre de la app en la descripción.

  **SÍ:** Una herramienta de integración continua nativa para contenedores

  **NO:** Skycap es una herramienta de integración continua nativa para contenedores

#### Formato

- Apégate siempre al uso de mayúsculas correcto en las oraciones. Utiliza mayúsucula únicamente en la primera letra y en los nombres propios.

- No uses puntuación al final de tu descripción corta. Las descripciones cortas no deben incluir oraciones completas, y en definitiva, no deben incluir más de una oración.

- Usa mayúscula ínicial únicamente en nombres propios. Por ejemplo:

  **SÍ:** Automatización de entrega con un solo clic para desarrolladores web

  **NO:** Automatización de entrega con un solo clic para Desarrolladores web

- Use siempre una [coma en serie](https://en.wikipedia.org/wiki/Serial_comma) en las listas.

- Evita referirte a la comunidad de GitHub como "usuarios".

  **SÍ:** Creación automática de incidencias para personas de la organización

  **NO:** Creación automática de incidencias para los usuarios de una organización

- Evita utilizar acrónimos a menos de que estén bien establecidos (tal como API). Por ejemplo:

  **SÍ:** Paneles de tareas ágiles, estimaciones e informes sin salir de GitHub

  **NO:** Paneles de tareas ágiles, estimaciones e informes sin salir de la interfaz de usuario de GitHub

### Categorías

Las apps en {% data variables.product.prodname_marketplace %} se pueden mostrar por categoría. Seleccione la categoría que mejor describa la funcionalidad principal de la aplicación en la lista desplegable **Categoría principal** y, opcionalmente, seleccione una **Categoría secundaria** que se ajuste a la aplicación.

### Idiomas compatibles

Si tu app funciona únicamente con lenguajes específicos, selecciona hasta 10 lenguajes de programación que sean compatibles con ella. Estos lenguajes se muestran en la página del listado de {% data variables.product.prodname_marketplace %} de tu app. Este campo es opcional.

### Listar las URL

**Direcciones URL necesarias**
* **URL del servicio de asistencia al cliente:** URL de una página web a la que llegarán los clientes cuando tengan preguntas sobre la cuenta, el producto o soporte técnico.
* **Dirección URL de la directiva de privacidad:** página web en la que se muestra la directiva de privacidad de la aplicación.
* **Dirección URL de instalación:** este campo solo se muestra para aplicaciones de OAuth. (Las aplicaciones de GitHub no usan esta URL porque en su lugar utilizan la dirección URL de configuración opcional de la página de configuración de la aplicación de GitHub). Cuando un cliente compra la aplicación de OAuth, GitHub le redirigirá a la dirección URL de instalación después de que instale la aplicación. Tendrá que redirigir a los clientes a `https://github.com/login/oauth/authorize` para que inicien el flujo de autorización de OAuth. Vea "[Nuevas compras para aplicaciones de OAuth](/marketplace/integrating-with-the-github-marketplace-api/handling-new-purchases-and-free-trials/)" para más información. Omite este campo si estás listando una GitHub App.

**URL opcionales**
* **Dirección URL de la empresa:** vínculo al sitio web de su empresa.
* **Dirección URL de estado:** vínculo a una página web en la que se muestra el estado de la aplicación. Las páginas de estado incluyen reportes de incidentes actuales y en forma de historial, el estado de tiempo activo de la aplicación web, y los periodos programados de mantenimiento.
* **Dirección URL de documentación:** vínculo a la documentación que enseña a los clientes a usar la aplicación.

## Logo y tarjeta de características

{% data variables.product.prodname_marketplace %} muestra todos los listados con un logo de imagen cuadrada dentro de una insignia circular para distinguir a las apps visualmente.

![Imágenes de logo e insignia en GitHub marketplace](/assets/images/marketplace/marketplace-logo-and-badge.png)

Una tarjeta de características consiste en el logo, nombre e imagen personalizada de fondo para tu app, la cual captura la personalidad de ésta. {% data variables.product.prodname_marketplace %} muestra esta tarjeta si la aplicación es una de las cuatro aplicaciones destacadas aleatoriamente en la parte superior de la [página principal](https://github.com/marketplace). Cada descripción muy corta de las apps se muestra debajo de su tarjeta de características.

![Tarjeta de características](/assets/images/marketplace/marketplace_feature_card.png)

En medidad que subas imágenes y selecciones los colores, tu borrador de listado de {% data variables.product.prodname_marketplace %} mostrará una vista previa de tu logo y de tu tarjeta de características.

#### Lineamientos para los logos

Debes cargar una imagen personalizada para el logo. Para el caso de la insignia, elige un color de fondo.

- Carga una imagen de logo que tenga por lo menos 200 pixeles por 200 pixeles para que éste no tenga que escalarse ascendentemente cuando se publique tu listado.
- Los logos se cortarán en forma de cuadrado. Te recomendamos cargar un archivo de imagen cuadrado con tu logo en el centro.
- Para obtener los mejores resultados, carga una imagen de logo con un fondo transparente.
- Para darle la apariencia contínua a la insignia, elige un color de fondo que empate con el color (o con la transparencia) de tu imagen de logo.
- Evita utilizar las imágenes de logo que tienen texto o palabras. Los logos con texto no se escalan bien en pantallas pequeñas.

#### Lineamientos para las tarjetas de características

Debes cargar una imagen personalizada de fondo para la tarjeta de características. Elige el color del texto para el nombre de la app.

- Utiliza un patrón o textura en la imagen de fondo para dar a tu tarjeta una identidad visual específica y ayudar a que resalten contra el fondo oscuro de la página de inicio de {% data variables.product.prodname_marketplace %}. Las tarjetas de caracetrísticas capturan la personalidad de la marca de tu app.
- La imagen de fondo mide 065 pixeles x 482 pixeles (ancho x alto).
- Elige un color de texto para el nombre de tu app, el cual se muestre claramente sobre la imagen de fondo.

## Listado de detalles

Para obtener la página de llegada de tu app, da clic en su nombre desde la página principal de {% data variables.product.prodname_marketplace %} o desde su página de categoría. La página de llegada muestra una descripción más larga de tu app, la cual incluye dos partes: una "Descripción de introducción" y una "Descripción detallada".

Tu "Descripción de introducción" se muestra en la parte superior de la página de llegada de {% data variables.product.prodname_marketplace %} para tu app.

![Descripción de introducción en {% data variables.product.prodname_marketplace %}](/assets/images/marketplace/marketplace_intro_description.png)

Al hacer clic en **Leer más...** se muestra la "Descripción detallada".

![Descripción detallada en {% data variables.product.prodname_marketplace %}](/assets/images/marketplace/marketplace_detailed_description.png)

Sigue estos lineamientos para escribir estas descripciones.

### Length

Se recomienda escribir un resumen general de 1-2 frases de entre 150 y 250 caracteres en el campo "Descripción introductoria" necesario al [ofertar la aplicación](/marketplace/listing-on-github-marketplace/). Aunque se te permite utilizar más caracteres, los resúmenes concisos son más fáciles de leer y más rápidas de entender para los clientes.

Puedes agregar más información en el campo opcional "Descripción detallada". Verá esta descripción al hacer clic en **Leer más...** debajo de la descripción introductoria en la página de aterrizaje de la aplicación. Una descripción detallada consta de 3-5 [propuestas de valor](https://en.wikipedia.org/wiki/Value_proposition), con 1-2 frases que describen cada una. Puedes utilizar hasta 1,000 caracteres para esta descripción.

### Contenido

- Inicia siempre con el nombre de tu aplicación en las descripciones de introducción.

- Escribe siempre las descripciones y propuestas de valor utilizando la voz activa.

### Formato

- Utiliza siempre las mayúsculas adecuadamente en las oraciones de los títulos para las propuestas de valor. Utiliza mayúsucula únicamente en la primera letra y en los nombres propios.

- Utiliza puntos en tus descripciones. Evita los signos de admiración.

- No utilices signos de puntuación al final de tus títulos para las propuestas de valor. Los títulos de propuestas de valor no deben incluir oraciones completas ni más de una oración.

- Para cada propuesta de valor, incluye un título seguido de un párrafo de descripción. Aplique al título formato de [encabezado de nivel 3](/articles/basic-writing-and-formatting-syntax/#headings) mediante Markdown. Por ejemplo:

  ### Adquiere las habilidades que necesitas

  GitHub Skills puede ayudarte a aprender cómo se usa GitHub, a comunicarte de forma más efectiva con el lenguaje de Markdown, a gestionar conflictos de fusión y mucho más.

- Usa mayúscula ínicial únicamente en nombres propios.

- Use siempre la [coma en serie](https://en.wikipedia.org/wiki/Serial_comma) en las listas.

- Evita referirte a la comunidad de GitHub como "usuarios".

  **SÍ:** Creación automática de incidencias para personas de la organización

  **NO:** Creación automática de incidencias para los usuarios de una organización

- Evita utilizar acrónimos a menos de que estén bien establecidos (tal como API).

## Impresiones de pantalla de los productos

Puedes cargar hasta cinco impresiones de pantalla para tu app para que se muestren en su página de llegada. Agrega una captura opcional a cada impresión de pantalla para proporcionar contexto. Después de cargar tus impresiones de pantalla, puedes arrastrarlas para que tomen el órden en el que quieras que se muestren dentro de la página de llegada.

### Lineamientos para las impresiones de pantalla

- Las imágenes deben tener resolución alta (por lo menos 1200px de ancho).
- Todas las imágenes deben tener la misma altura y ancho (proporción de aspecto) para evitar los saltos de página cuando las personas den clic de una imagen a otra.
- Muestra tanto de la interface de usuario como sea posible para que las personas pueden ver lo que hace tu app.
- Cuando tomes una impresión de pantalla de tu app en un buscador, incluye solamente el contenido en la ventana a mostrar. Evita incluir la barra de dirección, la barra de título o los iconos de la barra de herramientas, ya que estos no se escalan bien cuando se miran desde pantallas más pequeñas.
- GitHub muestra las impresiones de pantalla que cargues en una caja dentro de la página de llegada de tu app, así que no necesitas agregar cajas o márgenes al rededor de tus impresiones de pantalla.
- Las capturas son más efectivas cuando son cortas y concisas.

![Imagen de impresión de pantalla en GitHub Marketplace](/assets/images/marketplace/marketplace-screenshots.png)
