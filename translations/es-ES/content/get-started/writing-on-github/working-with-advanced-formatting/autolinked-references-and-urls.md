---
title: Referencias y direcciones URL autovinculadas
intro: 'Las referencias a las direcciones URL, propuestas, solicitudes de extracción y confirmaciones se acortan automáticamente y se convierten en vínculos.'
redirect_from:
  - /articles/autolinked-references-and-urls
  - /github/writing-on-github/autolinked-references-and-urls
  - /github/writing-on-github/working-with-advanced-formatting/autolinked-references-and-urls
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
shortTitle: Auto linked references
ms.openlocfilehash: 6f6548dbe931a7a6adb809aa4e5616db4358c242
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/05/2022
ms.locfileid: '147419693'
---
## URLs

{% data variables.product.product_name %} automáticamente crea vínculos desde las direcciones URL estándar.

`Visit https://github.com`

![URL autovinculada presentada](/assets/images/help/writing/url-autolink-rendered.png)

Para obtener más información sobre la creación de vínculos, consulta "[Sintaxis de escritura y formato básicos](/articles/basic-writing-and-formatting-syntax/#links)".

## Propuestas y solicitudes de extracción

Dentro de las conversaciones en {% data variables.product.product_name %}, las referencias a las propuestas y solicitudes de extracción se convierten automáticamente en vínculos acortados.

{% note %}

**Nota:** Las referencias vinculadas automáticamente no se crean en wikis ni archivos en un repositorio.

{% endnote %}

| Tipo de referencia | Referencia sin formato | Vínculo corto |
| --- | --- | --- |
| Dirección URL de la solicitud de incorporación de cambios o el problema | https://github.com/jlord/sheetsee.js/issues/26 | [#26](https://github.com/jlord/sheetsee.js/issues/26)
| `#` y número de la solicitud de incorporación de cambios o el problema | #26 | [#26](https://github.com/jlord/sheetsee.js/issues/26) |
| `GH-` y número de la solicitud de incorporación de cambios o el problema | GH-26 | [GH-26](https://github.com/jlord/sheetsee.js/issues/26) |
| `Username/Repository#` y número de la solicitud de incorporación de cambios o el problema | jlord/sheetsee.js#26 | [jlord/sheetsee.js#26](https://github.com/jlord/sheetsee.js/issues/26)
| `Organization_name/Repository#` y número de la solicitud de incorporación de cambios o el problema | github/linguist#4039 | [github/linguist#4039](https://github.com/github/linguist/pull/4039)

{% ifversion fpt or ghec %} Si referencias una propuesta, una solicitud de cambios o un debate en una lista, la referencia se desplegará para mostrar el título y el estado en su lugar. Para obtener más información sobre las listas de tareas, consulta "[Acerca de las listas de tareas](/issues/tracking-your-work-with-issues/creating-issues/about-task-lists)".
{% endif %}

## Etiquetas
Al hacer referencia a la URL de una etiqueta en Markdown, la etiqueta se representa automáticamente. Solo se representan las etiquetas del mismo repositorio, las direcciones URL que apuntan a una etiqueta de otro repositorio se representan como cualquier [dirección URL](/get-started/writing-on-github/working-with-advanced-formatting/autolinked-references-and-urls#urls).

Para encontrar la dirección URL de una etiqueta, navega a la página Etiquetas y haz clic en una etiqueta. Por ejemplo, la dirección URL de la etiqueta "mejora" en nuestro [repositorio de documentación](https://github.com/github/docs/) público es

```md
https://github.com/github/docs/labels/enhancement
```

## Confirmar SHA

Las referencias a un hash SHA de confirmación se convertirán automáticamente en enlaces acortados para la confirmación en {% data variables.product.product_name %}.

| Tipo de referencia | Referencia sin formato | Vínculo corto |
| --- | --- | --- |
| Dirección URL de confirmación | [`https://github.com/jlord/sheetsee.js/commit/a5c3785ed8d6a35868bc169f07e40e889087fd2e`](https://github.com/jlord/sheetsee.js/commit/a5c3785ed8d6a35868bc169f07e40e889087fd2e) | [a5c3785](https://github.com/jlord/sheetsee.js/commit/a5c3785ed8d6a35868bc169f07e40e889087fd2e) |
| SHA | a5c3785ed8d6a35868bc169f07e40e889087fd2e | [a5c3785](https://github.com/jlord/sheetsee.js/commit/a5c3785ed8d6a35868bc169f07e40e889087fd2e) |
| User@SHA | jlord@a5c3785ed8d6a35868bc169f07e40e889087fd2e | [jlord@a5c3785](https://github.com/jlord/sheetsee.js/commit/a5c3785ed8d6a35868bc169f07e40e889087fd2e)
| `Username/Repository@SHA` | `jlord/sheetsee.js@a5c3785ed8d6a35868bc169f07e40e889087fd2e` | [`jlord/sheetsee.js@a5c3785`](https://github.com/jlord/sheetsee.js/commit/a5c3785ed8d6a35868bc169f07e40e889087fd2e) |

## Personalizar enlaces automáticos a recursos externos

{% data reusables.repositories.autolink-references %}

## Información adicional

- "[Sintaxis de escritura y formato básicos](/articles/basic-writing-and-formatting-syntax)"
