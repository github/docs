---
title: Ver el historial de cambios de una wiki
intro: 'Debido a que las wikis son repositorios de Git, cada cambio que realices es una confirmación que puedes ver.'
product: '{% data reusables.gated-features.wikis %}'
redirect_from:
  - /articles/viewing-a-wiki-s-history-of-changes
  - /articles/viewing-a-wikis-history-of-changes
  - /github/building-a-strong-community/viewing-a-wikis-history-of-changes
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Community
shortTitle: View a history of changes
ms.openlocfilehash: 1c5330a9067749b4bf0d1f2ed4e6fb9f10b38602
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/05/2022
ms.locfileid: '145092427'
---
## Ver el historial de una wiki

El historial de una wiki incluye:
- El usuario que realizó el cambio
- El mensaje de confirmación que proporcionó
- Cuándo se realizó el cambio

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-wiki %}
3. Utilizando la barra lateral de wiki, desplázate hasta la página cuyo historial deseas ver.
4. En la parte superior de la wiki, haz clic en el vínculo de revisión.
   ![Vínculo de revisión de wiki](/assets/images/help/wiki/wiki_revision_link.png)

## Ver el contenido previo

En la tabla de historial la wiki, puede hacer clic en un [hash SHA-1](http://en.wikipedia.org/wiki/SHA-1) (la secuencia de letras y números en el extremo derecho) para ver una página wiki tal como existía en un momento determinado.

![Número SHA de wiki](/assets/images/help/wiki/wiki_sha_number.png)

## Comparar dos revisiones

1. Selecciona dos filas que deseas comparar.
2. En la parte superior de la tabla del historial, haga clic en **Compare Revisions**.
   ![Botón de comparación de revisiones de wiki](/assets/images/help/wiki/wiki_compare_revisions.png)
3. Verás una diferencia de los cambios que muestra qué líneas se agregaron, se eliminaron y se modificaron.

## Revertir los cambios previos

Puedes únicamente revertir cambios si tienes permiso para editar la wiki.

1. Selecciona una fila que deseas revertir.
2. En la parte superior de la tabla del historial, haga clic en **Compare Revisions**.
   ![Botón de comparación de revisiones de wiki](/assets/images/help/wiki/wiki_compare_revisions.png)
3. Verás una diferencia de los cambios que muestra qué líneas se agregaron, se eliminaron y se modificaron.
   ![Diferencia de revisión de wiki](/assets/images/help/wiki/wiki_revision_diff.png)
4. Para revertir los cambios más recientes, haga clic en **Revert Changes**.
   ![Botón para revertir cambios de wiki](/assets/images/help/wiki/wiki_revert_changes.png)
