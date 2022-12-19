---
title: Acerca de comparar ramas en solicitudes de extracción
intro: Las solicitudes de extracción muestran las diferencias para comparar los cambios que haz hecho en tu rama de tema respecto a la rama en la cual quieres fusionar tus cambios.
redirect_from:
  - /github/collaborating-with-issues-and-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-comparing-branches-in-pull-requests
  - /articles/about-comparing-branches-in-pull-requests
  - /github/collaborating-with-issues-and-pull-requests/about-comparing-branches-in-pull-requests
  - /github/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-comparing-branches-in-pull-requests
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Pull requests
shortTitle: Compare branches
ms.openlocfilehash: c45bcb3bceda42019be3139724e0b68234e90cfc
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/11/2022
ms.locfileid: '147881808'
---
{% note %}

**Nota:** Al crear la solicitud de incorporación de cambios, puede modificar la rama base con la que compara los cambios. Para más información, vea "[Creación de una solicitud de incorporación de cambios](/articles/creating-a-pull-request#changing-the-branch-range-and-destination-repository)".

{% endnote %}

Puede ver los cambios propuestos en una solicitud de incorporación de cambios en la pestaña Archivos cambiados. ![ Pestaña Archivos de solicitud de incorporación de cambios cambiados](/assets/images/help/pull_requests/pull-request-tabs-changed-files.png)

En lugar de ver las confirmaciones de cambios, puedes ver los cambios propuestos ya que aparecerán en los archivos una vez que se fusiona la solicitud de extracción. Los archivos aparecen en orden alfabético en la pestaña Archivos cambiados. Las adiciones a los archivos aparecen en color verde y están precedidas por un signo `+`, mientras que el contenido que se ha eliminado aparece en color rojo y precedido por un signo `-`.

## Opciones de diferentes vistas

{% tip %}

**Sugerencia:** Si le resulta difícil comprender el contexto de un cambio, puede hacer clic en **Ver** en la pestaña Archivos cambiados para ver el archivo completo con los cambios propuestos.

{% endtip %}

Tienes varias opciones para ver una diferencia:
- La vista unificada muestra el contenido actualizado y el existente en conjunto en una vista lineal.
- La vista en dos paneles muestra el contenido viejo de un lado y el contenido nuevo del otro.
- La vista diferencia rica muestra una previsualización de cómo se verán los cambios una vez que se fusione la solicitud de extracción.
- La vista de origen muestra los cambios en el origen sin el formato de la vista diferencia rica.

También puedes elegir ignorar los cambios de espacio en blanco para obtener una vista más precisa de los cambios sustanciales en una solicitud de extracción.

![Menú Opciones de visualización de diferencias](/assets/images/help/pull_requests/diff-settings-menu.png)

Para simplificar la revisión de cambios en una solicitud de cambios grande, puedes filtrar el diff para que solo muestre los tipos de archivo seleccionados, muestre menos archivos de los cuales seas CODEOWNER, oculte archivos que ya hayas visto, u oculte archivos borrados. Para más información, vea "[Filtrado de archivos en una solicitud de incorporación de cambios por tipo de archivo](/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/filtering-files-in-a-pull-request)".

  ![Menú desplegable de filtro de archivos](/assets/images/help/pull_requests/file-filter-menu.png)

## No se mostrarán las diferencias de motivos
- Has excedido el límite total de archivos o de ciertos tipos de archivos. Para más información, vea "[Acerca de los repositorios](/repositories/creating-and-managing-repositories/about-repositories#limits-for-viewing-content-and-diffs-in-a-repository)".
- Los archivos coinciden con una regla en el archivo *.gitattributes* del repositorio para impedir que ese archivo se muestre de manera predeterminada. Para más información, vea "[Personalización de cómo aparecen los archivos modificados en GitHub](/articles/customizing-how-changed-files-appear-on-github)".

## Comparaciones de diferencias de Git de tres puntos y de dos puntos

Hay dos métodos de comparación para el comando `git diff`; dos puntos (`git diff A..B`) y tres puntos (`git diff A...B`). De manera predeterminada, las solicitudes de incorporación de cambios en {% data variables.product.prodname_dotcom %} muestran una diferencia de tres puntos.

### Comparación de diferencias de Git de tres puntos 

La comparación de tres puntos muestra la diferencia entre la confirmación común más reciente de ambas ramas (base de combinación) y la versión más reciente de la rama puntual.

### Comparación de diferencias de Git de dos puntos

La comparación de dos puntos muestra la diferencia entre el estado más reciente de la rama base (por ejemplo, `main`) y la versión más reciente de la rama puntual.

Para ver dos referencias confirmables en una comparación de diferencia de dos puntos en {% data variables.product.prodname_dotcom %}, puedes editar la URL de la página "Comparar cambios" de tu repositorio. Para más información, vea ["committish" en el glosario de Git](https://git-scm.com/docs/gitglossary#gitglossary-aiddefcommit-ishacommit-ishalsocommittish) en el sitio del libro _Pro Git_.

{% data reusables.repositories.two-dot-diff-comparison-example-urls %}

Una diferenciación de dos puntos compara dos referencias confirmables de Git, como SHA u OID (ID de objeto), directamente entre sí. En {% data variables.product.prodname_dotcom %}, las referencias confirmables de Git en una comparación de diferenciación de dos puntos se deben subir al mismo repositorio o a sus bifurcaciones.

Si quieres simular una diferenciación de dos puntos en una solicitud de extracción y ver una comparación entre las versiones más recientes de cada rama, puedes fusionar la rama base en tu rama de tema, que actualiza el último antepasado común entre tus ramas.

Para más información sobre los comandos de Git para comparar los cambios, vea "[Opciones de diferencias de Git](https://git-scm.com/docs/git-diff#git-diff-emgitdiffemltoptionsgtltcommitgtltcommitgt--ltpathgt82308203)" en el sitio del libro de _Pro Git_.

## Acerca de la comparación de tres puntos en {% data variables.product.prodname_dotcom %}

Dado que la comparación de tres puntos se compara con la base de combinación, se centra en "qué introduce una solicitud de incorporación de cambios". 

Cuando se usa una comparación de dos puntos, la diferencia cambia cuando se actualiza la rama base, incluso si no ha realizado ningún cambio en la rama puntual. Además, una comparación de dos puntos se centra en la rama base. Esto significa que todo lo que agregues se muestra como que falta en la rama base, como si fuera una eliminación y viceversa. Como resultado, los cambios que presenta la rama puntual se convierten en ambiguos.

Por el contrario, al comparar las ramas con la comparación de tres puntos, los cambios en la rama puntual siempre se encuentran en la diferencia si se actualiza la rama base, ya que la diferencia muestra todos los cambios desde que las ramas difieren.

### Combinación con una periodicidad frecuente

Para evitar confundirse, combina la rama base (por ejemplo, `main`) en la rama puntual con frecuencia. Al combinar la rama base, las diferencias que muestran las comparaciones de dos puntos y tres puntos son las mismas. Se recomienda combinar una solicitud de incorporación de cambios lo antes posible. Esto anima a los colaboradores a que las solicitudes de incorporación de cambios sean más pequeñas, lo que en general es una práctica recomendada.

## Información adicional

- "[Acerca de las solicitudes de incorporación de cambios](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests)"
- "[Acerca de las bifurcaciones](/pull-requests/collaborating-with-pull-requests/working-with-forks/about-forks)"
