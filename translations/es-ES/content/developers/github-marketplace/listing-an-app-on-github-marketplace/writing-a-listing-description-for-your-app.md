---
title: Escribir la descripción de un listado para tu app
intro: 'Para [Listar tu app](/marketplace/listing-on-github-marketplace/) en {% data variables.product.prodname_marketplace %}, necesitarás escribir una descripción de ésta y proporcionar imágenes que se apeguen a los lineamientos de GitHub.'
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
shortTitle: Escribir listas de descripciones
---

Aquí te mostramos los lineamientos de los campos que necesitas llenar en la sección **Listar descripción** del borrador de tu listado.

## Nomencltura y enlaces

### Nombre del listado

El nombre de tu listado aparecerá en la [página inicial de {% data variables.product.prodname_marketplace %}](https://github.com/marketplace). El nombre se limita a 255 caracteres y puede ser diferente que aquél de tu app. Tu listado no puede tener el mismo nombre que el de una cuenta existente en {% data variables.product.product_location %}, a menos de que dicho nombre sea aquél de tu organización o usuario.

### Descripción muy corta

La comunidad verá la descripción "muy corta" debajo del nombre de tu app en la [página principal de {% data variables.product.prodname_marketplace %}](https://github.com/marketplace).

![Descripción corta de la app en {% data variables.product.prodname_marketplace %}](/assets/images/marketplace/marketplace_short_description.png)

#### Longitud

Te remcomendamos mantener un largo de 40 a 80 caracteres para las descripciones cortas. Aunque se te permite utilizar más caracteres, las descripciones concisas son más fáciles de leer y más rápidas de entender para los clientes.

#### Contenido

- Describe la funcionalidad de la app. No utilices este espaccio para un llamado a la acción. Por ejemplo:

  **RECOMENDADO:** Una administración de proyectos ligera para los informes de problemas de GitHub

  **NO RECOMENDADO:** Administración de proyectos e informes de problemas en GitHub

  **Tip:** Pon los verbos en tercera persona del singular en las llamadas a la acción para convertirlas en una descripción aceptable: _Administra tus proyectos e informes de problemas en GitHub_

- No repitas el nombre de la app en la descripción.

  **RECOMENDADO:** Una herramienta de integración contínua nativa para el contenedor

  **NO RECOMENDADO:** Skycap es una herramienta de integración contínua nativa para el contenedor

#### Formato

- Apégate siempre al uso de mayúsculas correcto en las oraciones. Utiliza mayúsucula únicamente en la primera letra y en los nombres propios.

- No uses puntuación al final de tu descripción corta. Las descripciones cortas no deben incluir oraciones completas, y en definitiva, no deben incluir más de una oración.

- Usa mayúscula inicial únicamente en nombres propios. Por ejemplo:

  **RECOMENDADO:** Automatización de entrega en un solo click para desarrolladores web

  **NO RECOMENDADO:** Automatización de entrega en un solo click para Desarrolladores Web

- Utiliza siempre una [coma serial](https://en.wikipedia.org/wiki/Serial_comma) en las listas.

- Evita referirte a la comunidad de GitHub como "usuarios".

  **RECOMENDADO:** Crea informes de problemas automáticamente para las personas de tu organización

  **NO RECOMENDADO:** Crea informes de problemas automáticamente para los usuarios de una organización

- Evita utilizar acrónimos a menos de que estén bien establecidos (tal como API). Por ejemplo:

  **RECOMENDADO:** Tableros de tareas ágiles, estimados y reportes sin salir de GitHub

  **NO RECOMENDADO:** Tableros de tareas ágiles, estimados, y reportes sin dejar la IU de GitHub

### Categorías

Las apps en {% data variables.product.prodname_marketplace %} se pueden mostrar por categoría. Selecciona la categoría que describa mejor la funcionalidad principal de tu app en el menú desplegable de **Categoría principal** y, opcionalmente, selecciona una **Categoría secundaria** si es que describe mejor a tu app.

### Lenguajes compatibles

Si tu app funciona únicamente con lenguajes específicos, selecciona hasta 10 lenguajes de programación que sean compatibles con ella. Estos lenguajes se muestran en la página del listado de {% data variables.product.prodname_marketplace %} de tu app. Este campo es opcional.

### Listar las URL

**URL Requeridas**
* **URL de servicio al cliente:** La URL de una página web a la que llegarán tus clientes cuando tienen preguntas de la cuenta, producto o soporte técnico.
* **URL de la política de privacidad:** La página web que muestra la política de privacidad de tu app.
* **URL de la instalación:** Este campo se muestra únicamente para las apps de OAuth. (Las GitHub Apps no utilizan esta URL porque utilizan la URL de configuración opcional de la página de su página de configuración). Cuando un cliente compra tu App de OAuth, GitHub redireccionará a los clientes a la URL de la instalación después de que la instalen. Necesitarás redirigir a los clientes a `https://github.com/login/oauth/authorize` para comenzar el flujo de autorizaciones de OAuth. Consulta la sección "[Compras nuevas de Apps de OAuth](/marketplace/integrating-with-the-github-marketplace-api/handling-new-purchases-and-free-trials/)" para recibir más detalles al respecto. Omite este campo si estás listando una GitHub App.

**URL opcionales**
* **URL de la empresa:** Un enlace al sitio web de tu empresa.
* **URL de estado:** Un enlace a la página web que muestra el estado de tu app. Las páginas de estado incluyen reportes de incidentes actuales y en forma de historial, el estado de tiempo activo de la aplicación web, y los periodos programados de mantenimiento.
* **URL de Documentación:** Un enlace a la documentación que muestra a los clientes cómo utilizar tu app.

## Logo y tarjeta de características

{% data variables.product.prodname_marketplace %} muestra todos los listados con un logo de imagen cuadrada dentro de una insignia circular para distinguir a las apps visualmente.

![Imágenes de logo e insignia en GitHub marketplace](/assets/images/marketplace/marketplace-logo-and-badge.png)

Una tarjeta de características consiste en el logo, nombre e imagen personalizada de fondo para tu app, la cual captura la personalidad de ésta. {% data variables.product.prodname_marketplace %} muestra esta tarjeta si tu app es una de las cuatro apps que se presentan aleatoriamente en la parte superior de la [página principal](https://github.com/marketplace). Cada descripción muy corta de las apps se muestra debajo de su tarjeta de características.

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

## Detalles del listado

Para obtener la página de llegada de tu app, da clic en su nombre desde la página principal de {% data variables.product.prodname_marketplace %} o desde su página de categoría. La página de llegada muestra una descripción más larga de tu app, la cual incluye dos partes: una "Descripción de introducción" y una "Descripción detallada".

Tu "Descripción de introducción" se muestra en la parte superior de la página de llegada de {% data variables.product.prodname_marketplace %} para tu app.

![Descripción de introducción en {% data variables.product.prodname_marketplace %}](/assets/images/marketplace/marketplace_intro_description.png)

El dar clic en **Leer más...** mostrará la "Descripción detallada".

![Descripción detallada en {% data variables.product.prodname_marketplace %}](/assets/images/marketplace/marketplace_detailed_description.png)

Sigue estos lineamientos para escribir estas descripciones.

### Longitud

Te recomendamos escribir un resumen de alto nivel que se componga de una o dos oraciones de entre 150 y 250 caracteres en el campo "Descripción de introducción" cuando [listes tu aplicación](/marketplace/listing-on-github-marketplace/). Aunque se te permite utilizar más caracteres, los resúmenes concisos son más fáciles de leer y más rápidas de entender para los clientes.

Puedes agregar más información en el campo opcional "Descripción detallada". Encuentras esta descripción al dar clic en **Leer más...** debajo de la descripción de introducción en la página de llegada de tu app. Una descripción detallada consiste en 3-5 [propuestas de valor](https://en.wikipedia.org/wiki/Value_proposition) con 1-2 oraciones que se describen una a la otra. Puedes utilizar hasta 1,000 caracteres para esta descripción.

### Contenido

- Inicia siempre con el nombre de tu aplicación en las descripciones de introducción.

- Escribe siempre las descripciones y propuestas de valor utilizando la voz activa.

### Formato

- Utiliza siempre las mayúsculas adecuadamente en las oraciones de los títulos para las propuestas de valor. Utiliza mayúsucula únicamente en la primera letra y en los nombres propios.

- Utiliza puntos en tus descripciones. Evita los signos de admiración.

- No utilices signos de puntuación al final de tus títulos para las propuestas de valor. Los títulos de propuestas de valor no deben incluir oraciones completas ni más de una oración.

- Para cada propuesta de valor, incluye un título seguido de un párrafo de descripción. Da formato al título como un [encabezado nivel tres](/articles/basic-writing-and-formatting-syntax/#headings) utilizando lenguaje de marcado (Markdown). Por ejemplo:


  ### Adquiere las habilidades que necesitas

  GitHub Skills puede ayudarte a aprender cómo utilizar GitHub, comunicarte con mayor eficacia con el lenguaje de marcado, manejar conflictos de fusión y más.

- Usa mayúscula inicial únicamente en nombres propios.

- Utiliza siempre la [coma serial](https://en.wikipedia.org/wiki/Serial_comma) en las listas.

- Evita referirte a la comunidad de GitHub como "usuarios".

  **RECOMENDADO:** Crea informes de problemas automáticamente para las personas de tu organización

  **NO RECOMENDADO:** Crea informes de problemas automáticamente para los usuarios de una organización

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
