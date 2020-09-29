---
title: Organizar la información en tablas
intro: 'Puedes construir tablas para organizar la información en comentarios, propuestas, solicitudes de extracción y wikis.'
redirect_from:
  - /articles/organizing-information-with-tables
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

### Crear una tabla

Puede crear tablas con barras verticales `|` y guiones `-`. Los guiones se usan para crear el encabezado de cada columna, mientras que las barras verticales separan cada columna. Debes incluir una línea en blanco antes de tu tabla para que se representen correctamente.

```

| Primer encabezado | Segundo encabezado |
| ------------- | ------------- |
| Contenido de la celda  | Contenido de la celda  |
| Contenido de la celda  | Contenido de la celda  |
```

![Tabla presentada](/assets/images/help/writing/table-basic-rendered.png)

Las barras verticales en cada lado de la tabla son opcionales.

Las celdas pueden variar en el ancho y no es necesario que estén perfectamente alineadas dentro de las columnas. Debe haber al menos tres guiones en cada columna de la línea de encabezamiento.

```
| Comando | Descripción |
| --- | --- |
| git status | Enumera todos los archivos nuevos o modificados |
| git diff | Muestra las diferencias de archivo que no han sido preparadas |
```

![Tabla presentada con ancho de celda variado](/assets/images/help/writing/table-varied-columns-rendered.png)

### Formatear el contenido dentro de tu tabla

Puedes utilizar [formato](/articles/basic-writing-and-formatting-syntax) como enlaces, bloques de códigos insertados y el estilo de texto dentro de tu tabla:

```
| Comando | Descripción |
| --- | --- |
| `git status` | Enumera todos los archivos *nuevos o modificados* |
| `git diff` | Muestra las diferencias de archivo que **no han sido** preparadas |
```

![Tabla presentada con texto formateado](/assets/images/help/writing/table-inline-formatting-rendered.png)

Puedes alinear el texto a la izquierda, la derecha o en el centro de una columna al incluir dos puntos `:` a la izquierda, la derecha, o en ambos lados de los guiones dentro de la línea de encabezamiento.

```
| Alineado a la izquierda | Alineado en el centro | Alineado a la derecha |
| :---         |     :---:      |          ---: |
| git status   | git status     | git status    |
| git diff     | git diff       | git diff      |
```

![Tabla presentada con alineación de texto a la izquierda, a la derecha o al centro](/assets/images/help/writing/table-aligned-text-rendered.png)

Para incluir una barra vertical `|` como contenido dentro de tu celda, utiliza una `\` antes de la barra:

```
| Nombre     | Símbolo |
| ---      | ---       |
| Comilla simple | `         |
| Barra vertical | \|        |
```

![Tabla presentada con una barra vertical liberada](/assets/images/help/writing/table-escaped-character-rendered.png)

### Leer más

- [{% data variables.product.prodname_dotcom %} Especificaciones del formato Markdown](https://github.github.com/gfm/)
- [Sintaxis de escritura y formato básicos](/articles/basic-writing-and-formatting-syntax)"
