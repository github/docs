---
title: ¿Cuál es mi cuota de disco?
redirect_from:
  - /articles/what-is-the-size-limit-for-a-repository/
  - /articles/what-is-my-disk-quota
intro: '{% data variables.product.product_name %} intenta proporcionar almacenamiento abundante para todos los repositorios de Git, aunque existen límites físicos para los tamaños de los archivos y repositorios.'
versions:
  free-pro-team: '*'
---

{% data reusables.large_files.use_lfs_tip %}

### Límites de tamaños para archivos y repositorios

Para garantizar el rendimiento y la legibilidad para nuestros usuarios, monitoreamos activamente las señales de la salud general de los repositorios. La salud de los repositorios es una función de varios factores de interacción, incluyendo el tamaño, frecuencia de confirmaciones y estructura.

Te recomendamos que los repositorios sean siempre pequeños, idealmente, de menos de 1 GB, y se recomienda ampliamente que sean de menos de 5GB. Los repositorios más pequeños se clonan más rápido y se puede mantenerlos mejor y trabajar en ellos más fácilmente. Los archivos individuales en un repositorio se limitan estrictamente a un límite de tamaño máximo de {% data variables.large_files.max_github_size %}. Para obtener más información, consulta "[Trabajar con archivos grandes](/github/managing-large-files/working-with-large-files)."

Si tu repositorio impacta excesivamente nuestra infraestructura, puede que recibas un mensaje de correo electrónico de {% data variables.contact.github_support %}, el cual te solicitará que tomes acciones correctivas. Intentamos ser flexibles, especialmente con proyectos grandes que tienen muchos colaboradores, y trabajaremos junto contigo para encontrar una resolución cada que sea posible. Puedes prevenir que tu repositorio impacte nuestra infraestructura si administras el tamaño de tu repositorio y su salud general con eficacia. Puedes encontrar consejos y una herramienta para análisis de repositorios en el repositorio [`github/git-sizer`](https://github.com/github/git-sizer).

{% note %}

**Nota:** si agregas un archivo a un repositorio por medio de un navegador, el archivo no puede ser mayor de {% data variables.large_files.max_github_browser_size %}. Para obtener más información, consulta la sección "[Agregar un archivo a un repositorio](/github/managing-files-in-a-repository/adding-a-file-to-a-repository)."

{% endnote %}

### Copias de seguridad

Git no está diseñado para fungir como una herramienta de respaldo. Sin embargo, existen muchas soluciones diseñadas específicamente para realizar respaldos, tales como [Arq](https://www.arqbackup.com/), [Carbonite](http://www.carbonite.com/), y [CrashPlan](https://www.crashplan.com/en-us/).

### Vertederos de base de datos

Los sistemas de control de versiones, tales como Git, no se diseñan para manejar archivos grandes de SQL. Para compartir bases de datos grandes con otros desarrolladores, te recomendamos utilizar [Dropbox](https://www.dropbox.com/).

Git no debe utilizarse como respaldo para tus servidores productivos. Para obtener más información, consulta la sección "Respaldos</a>".

### Dependencias externas

Las dependencias externas pueden causar que los repositorios de Git se hagan muy grandes. Para evitar llenar un repositorio con dependencias externas, te recomendamos utilizar un administrador de paquetes. Los administradores de paquetes populares para lenguajes (de programación) comunes incluyen a [Bundler](http://bundler.io/), [Node's Package Manager](http://npmjs.org/), y [Maven](http://maven.apache.org/). Estos administradores de paquetes soportan la utilización directa de repositorios de Git para que no dependas de fuentes pre-empacadas.

### Versiones de lanzamiento empaquetado

No recomendamos distribuir código compilado y lanzamientos empaquetados previamente dentro de tu repositorio. Para obtener más información, consulta la sección "[Distribuir archivos binarios grandes](/github/managing-large-files/distributing-large-binaries)".

### Cambiar el historial de un repositorio existente

Si ya tienes un repositorio considerablemente grande, puedes reducir su tamaño si eliminas archivos grandes de su historial. Para obtener más información, consulta la sección "[Eliminar archivos del historial de un repositorio](/github/managing-large-files/removing-files-from-a-repositorys-history)".
