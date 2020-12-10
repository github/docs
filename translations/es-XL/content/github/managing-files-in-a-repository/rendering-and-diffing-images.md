---
title: Representar y comparar imágenes
intro: '{% data variables.product.product_name %} puede mostrar varios formatos de imagen comunes, incluidos PNG, JPG, GIF, PSD y SVG. Asimismo, para simplificar mostrarlas, existen diversas formas de comparar las diferencias entre las versiones de esos formatos de imagen.'
redirect_from:
  - /articles/rendering-and-diffing-images
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

{% note %}

**Nota:** Si estás utilizando el navegador Firefox, puede que los SVG en {% data variables.product.prodname_dotcom %} no se representen.

{% endnote %}

### Ver imágenes

Puedes navegar y ver imágenes directamente en tu {% data variables.product.product_name %} repositorio:

![imagen alineada](/assets/images/help/images/view.png)

Los SVG actualmente no admiten scripting alineado o animación.

### Ver diferencias

Puedes comparar visualmente las imágenes de tres modos diferentes: [2-up](#2-up), [deslizar](#swipe) y [papel cebolla](#onion-skin).

#### 2-up

**2-up** es el modo predeterminado; te muestra una descripción rápida de ambas imágenes. Asimismo, si la imagen cambió de tamaño entre las versiones, se muestra el cambio de dimensión real. Esto debería ser muy evidente cuando las cosas cambian de tamaño, como cuando los activos se suben de categoría a resoluciones más altas.

![2-up](/assets/images/help/repository/images-2up-view.png)

#### Deslizar

**Deslizar**te deja ver partes de tus imágenes. ¿No estás seguro de si cambiaron los colores en las diferentes versiones? Arrastra el control deslizante de deslizamiento sobre el área en cuestión y compara los píxeles tú mismo.

![Deslizar](/assets/images/help/repository/images-swipe-view.png)

#### Papel cebolla

**Papel cebolla** realmente ayuda cuando los elementos apenas se desplazan y cuesta percibir el cambio. ¿Un icono se corrió dos píxeles a la izquierda? Arrastra el control deslizante de opacidad hacia atrás un poco y comprueba si las cosas se desplazaron.

![Papel cebolla](/assets/images/help/repository/images-onion-view.gif)
