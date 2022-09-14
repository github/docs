---
title: Organizar la información en tablas
intro: 'Puedes construir tablas para organizar la información en comentarios, propuestas, solicitudes de extracción y wikis.'
redirect_from:
  - /articles/organizing-information-with-tables
  - /github/writing-on-github/organizing-information-with-tables
  - /github/writing-on-github/working-with-advanced-formatting/organizing-information-with-tables
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
shortTitle: Organized data with tables
ms.openlocfilehash: 6045e9f27432233cbfcdb654c303bc02ea5666cd
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/10/2022
ms.locfileid: '145069831'
---
## Creación de una tabla

Puede crear tablas con canalizaciones `|` y guiones `-`. Los guiones se usan para crear cada encabezado de columna, mientras que las barras verticales separan cada columna. Debes incluir una línea en blanco antes de tu tabla para que se representen correctamente.

```markdown

| First Header  | Second Header |
| ------------- | ------------- |
| Content Cell  | Content Cell  |
| Content Cell  | Content Cell  |
```

![Tabla presentada](/assets/images/help/writing/table-basic-rendered.png)

Las barras verticales en cada lado de la tabla son opcionales.

Las celdas pueden variar en el ancho y no es necesario que estén perfectamente alineadas dentro de las columnas. Debe haber al menos tres guiones en cada columna de la línea de encabezamiento.

```markdown
| Command | Description |
| --- | --- |
| git status | List all new or modified files |
| git diff | Show file differences that haven't been staged |
```

![Tabla presentada con ancho de celda variado](/assets/images/help/writing/table-varied-columns-rendered.png)

{% data reusables.user-settings.enabling-fixed-width-fonts %}

## Formatear el contenido dentro de tu tabla

Puede usar [formatos](/articles/basic-writing-and-formatting-syntax), como vínculos, bloques de código insertados y estilos de texto en la tabla:

```markdown
| Command | Description |
| --- | --- |
| `git status` | List all *new or modified* files |
| `git diff` | Show file differences that **haven't been** staged |
```

![Tabla presentada con texto formateado](/assets/images/help/writing/table-inline-formatting-rendered.png)

Puede alinear el texto a la izquierda, a la derecha o en el centro de una columna al incluir dos puntos `:` a la izquierda, a la derecha o a ambos lados de los guiones en la línea de encabezamiento.

```markdown
| Left-aligned | Center-aligned | Right-aligned |
| :---         |     :---:      |          ---: |
| git status   | git status     | git status    |
| git diff     | git diff       | git diff      |
```

![Tabla presentada con alineación de texto a la izquierda, a la derecha o al centro](/assets/images/help/writing/table-aligned-text-rendered.png)

Para incluir una barra vertical `|` como contenido en su celda, utilice una `\` antes de la barra vertical:

```markdown
| Name     | Character |
| ---      | ---       |
| Backtick | `         |
| Pipe     | \|        |
```

![Tabla presentada con una barra vertical liberada](/assets/images/help/writing/table-escaped-character-rendered.png)

## Información adicional

- [Especificación de {% data variables.product.prodname_dotcom %} Flavored Markdown](https://github.github.com/gfm/)
- "[Sintaxis de escritura y formato básicos](/articles/basic-writing-and-formatting-syntax)"
