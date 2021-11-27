---
title: Personalizar cómo aparecen los archivos cambiados en GitHub
intro: 'Para evitar que determinados archivos se muestren en diferencias de manera predeterminada, o que contribuyan al lenguaje del repositorio, puedes marcarlos con el atributo `linguist-generated` en un archivo *.gitattributes*.'
redirect_from:
  - /articles/customizing-how-changed-files-appear-on-github
  - /github/administering-a-repository/customizing-how-changed-files-appear-on-github
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - Repositories
---

Usa un archivo *.gitattributes* para marcar los archivos que coincidan con un "patrón" determinado con los atributos específicos. Un archivo *.gitattributes* usa las mismas reglas para coincidir como archivo _.gitignore_. Para obtener más información, consulta [FORMATO DE PATRONES](https://www.git-scm.com/docs/gitignore#_pattern_format) en la documentación de Git.

1. A menos de que ya exista el archivo *.gitattributes* créalo en la raíz del repositorio.
2. Usa el atributo `linguist-generated` para marcar o desmarcar las rutas que deseas que se ignoren para las estadísticas de lenguaje del repositorio y las que deseas que se oculten de manera predeterminada en las diferencias.

  Por ejemplo, para marcar `search/index.json` como archivo generado, agrega esta línea a *.gitattributes*:

  ```
search/index.json linguist-generated=true
  ```

### Leer más
- "[Código generado](https://github.com/github/linguist/#generated-code)" en la documentación del lingüista
- "[Crear archivos nuevos](/articles/creating-new-files/)"
