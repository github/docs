---
title: Acerca de los idiomas del repositorio
intro: Los archivos y los directorios dentro de un repositorio determinan los idiomas que componen el repositorio. Puedes ver los idiomas de un repositorio para obtener una descripción general rápida del repositorio.
redirect_from:
  - /articles/my-repository-is-marked-as-the-wrong-language/
  - /articles/why-isn-t-my-favorite-language-recognized/
  - /articles/my-repo-is-marked-as-the-wrong-language/
  - /articles/why-isn-t-sql-recognized-as-a-language/
  - /articles/why-isn-t-my-favorite-language-recognized-by-github/
  - /articles/about-repository-languages
  - /github/creating-cloning-and-archiving-repositories/about-repository-languages
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - Repositories
---
{% data variables.product.product_name %} usa la [biblioteca lingüista](https://github.com/github/linguist) de código abierto para determinar los idiomas del archivo para el resaltado de la sintaxis y las estadísticas del repositorio. Las estadísticas de lenguaje se actualizarán después de que subas los cambios a tu rama predeterminada.

Algunos archivos son difíciles de identificar y, a veces, los proyectos contienen más archivos de biblioteca y de proveedor que su código primario. Si estás recibiendo resultados incorrectos, consulta la [Guía de solución de problemas](https://github.com/github/linguist#troubleshooting) del Lingüista para obtener ayuda.

### Lenguaje Markup

Los lenguajes Markup están representados para HTML y mostrados en línea usando nuestra [Biblioteca Markup](https://github.com/github/markup) de código abierto. En este momento, no estamos aceptando nuevos lenguajes para mostrar dentro de {% data variables.product.product_name %}. Sin embargo, mantenemos activamente nuestros lengujes Markup actuales. Si encuentras un problema, [crea una propuesta](https://github.com/github/markup/issues/new).
