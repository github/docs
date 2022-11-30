---
title: Límites para ver contenido y diferencias en un repositorio
intro: 'Determinados tipos de recursos pueden ser bastante grandes y requerir mucho procesamiento en {% data variables.product.product_name %}. Por este motivo, se establecen límites para asegurar que las solicitudes se realicen en una cantidad de tiempo razonable.'
redirect_from:
  - /articles/what-are-the-limits-for-viewing-content-and-diffs-in-my-repository/
  - /articles/limits-for-viewing-content-and-diffs-in-a-repository
  - /github/creating-cloning-and-archiving-repositories/limits-for-viewing-content-and-diffs-in-a-repository
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - Repositories
---

La mayoría de los límites que aparecen a continuación afectan tanto {% data variables.product.product_name %} como la API.

### Límites de texto

Los archivos de texto de más de **1 MB** siempre se muestran como texto sin formato. El código no es de sintaxis resaltada, y los archivos de prosa no se convierten a HTML (como Markdown, AsciiDoc, *etc.*).

Los archivos de texto de más de **5 MB** están disponibles solo a través de sus URL originales, que se ofrecen a través de `{% data variables.product.raw_github_com %}`; por ejemplo, `https://{% data variables.product.raw_github_com %}/octocat/Spoon-Knife/master/index.html`. Haz clic en el botón **Raw** (Original) para obtener la URL original de un archivo.

### Límites de diferencias

Como las diferencias se pueden volver muy grandes, imponemos los siguientes límites en las diferencias para las confirmaciones, las solicitudes de extracción y las vistas comparadas:

- La diferencia de un archivo único no puede superar *20.000 líneas que puedes cargar* o *1 MB* de datos de la diferencia original. *Cuatrocientas líneas* y *20 KB* se cargan de forma automática para un archivo único.
- La cantidad máxima de archivos en una diferencia única se limita a *3.000*.
- La cantidad máxima de archivos de representación (como PDF y archivos GeoJSON) en una diferencia única está limitada a *25*.

Se pueden mostrar algunas partes de una diferencia limitada, pero no se muestra nada que supere el límite.

### Límites de listas de confirmaciones

Las páginas de vista comparada y de solicitudes de extracción muestran una lista de confirmaciones entre las revisiones de `base` y de `encabezado`. Estas listas están limitadas a **250** confirmaciones. Si superan ese límite, una nota indica que existen más confirmaciones (pero no se muestran).
