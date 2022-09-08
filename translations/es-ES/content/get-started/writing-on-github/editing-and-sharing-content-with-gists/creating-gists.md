---
title: Crear gists
intro: 'Puedes crear dos tipos de gists: {% ifversion ghae %}interno{% else %}público{% endif %} y secreto. Crea {% ifversion ghae %}un gist interno{% else %}público{% endif %} si estás preparado para compartir tus ideas con {% ifversion ghae %}los miembros de la empresa{% else %}el mundo{% endif %}, o un gist secreto si no lo estás.'
permissions: '{% data reusables.enterprise-accounts.emu-permission-gist %}'
redirect_from:
  - /articles/about-gists
  - /articles/cannot-delete-an-anonymous-gist
  - /articles/deleting-an-anonymous-gist
  - /articles/creating-gists
  - /github/writing-on-github/creating-gists
  - /github/writing-on-github/editing-and-sharing-content-with-gists/creating-gists
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
ms.openlocfilehash: e0ac449dc71bb0c525ee1559b82e509a281e55ac
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/05/2022
ms.locfileid: '145069882'
---
## Acerca de los gists

Todo gist es un repositorio Git, lo que significa que se puede bifurcar y clonar. {% ifversion not ghae %}Si está conectado a {% data variables.product.product_name %}, cuando{% else %}Cuando{% endif %} cree un gist, este se asociará a su cuenta y lo verá en su lista de gists cuando navegue a la {% data variables.gists.gist_homepage %}.

Los gists pueden ser {% ifversion ghae %}internos{% else %}públicos{% endif %} o secretos. Los gists {% ifversion ghae %}internos{% else %}públicos{% endif %} aparecen en {% data variables.gists.discover_url %}, donde los {% ifversion ghae %}miembros de la empresa{% else %}usuarios{% endif %} pueden explorar los gists nuevos a medida que se crean. También se los puede buscar, para que puedas usarlos si deseas que otras personas encuentren tu trabajo y lo vean.

Los gists secretos no se muestran en {% data variables.gists.discover_url %} y no se pueden buscar. Los gists no son privados. Si envías la URL de un gist secreto a {% ifversion ghae %}otro miembro de la empresa{% else %}un amigo {% endif %}, podrán verlo. Sin embargo, si {% ifversion ghae %}cualquier otro miembro de la empresa{% else %}alguien que no conozcas{% endif %} descubre la URL, también podrán ver tu gist. Si necesita mantener el código alejado de los ojos indiscretos, es posible que quiera [crear un repositorio privado](/articles/creating-a-new-repository).

{% data reusables.gist.cannot-convert-public-gists-to-secret %}

{% ifversion ghes %}

Si el administrador de tu sitio ha inhabilitado el modo privado, también puedes usar gists anónimos, que pueden ser públicos o privados.

{% data reusables.gist.anonymous-gists-cannot-be-deleted %}

{% endif %}

Recibirás una notificación cuando:
- Seas el autor de un gist.
- Alguien te mencione en un gist.
- Para suscribirse a un gist, haga clic en **Subscribe** en la parte superior de cualquier gist.

{% ifversion fpt or ghes or ghec %}

Puedes fijar los gists a tu perfil para que otras personas los puedan ver fácilmente. Para obtener más información, consulte "[Anclaje de elementos a su perfil](/articles/pinning-items-to-your-profile)".

{% endif %}

Puede descubrir gists {% ifversion ghae %}internos{% else %}públicos{% endif %} que hayan creado otros usuarios. Para ello, vaya a la {% data variables.gists.gist_homepage %} y haga clic en **All Gists**. Esto te llevará a una página en la que aparecen todos los gists clasificados y presentados por fecha de creación o actualización. También puedes buscar los gists por idioma con {% data variables.gists.gist_search_url %}. En la búsqueda de gists se usa la misma sintaxis de búsqueda que en la [búsqueda de código](/search-github/searching-on-github/searching-code).

Dado que los gists son repositorios Git, puedes ver su historial de confirmaciones completo, que incluye todas las diferencias que existan. También puedes bifurcar o clonar gists. Para obtener más información, consulte ["Bifurcación y clonación de gists"](/articles/forking-and-cloning-gists).

Puede descargar un archivo ZIP de un gist haciendo clic en el botón **Download ZIP** en la parte superior del gist. Puedes insertar un gist en cualquier campo de texto compatible con Javascript, como una publicación en un blog. Para obtener el código para insertar, haga clic en el icono del Portapapeles situado junto a la dirección URL **de inserción** de un gist. Para insertar un archivo gist específico, anexe la dirección URL **de inserción** con `?file=FILENAME`.

{% ifversion fpt or ghec %}

Git admite la asignación de archivos GeoJSON. Estas asignaciones se muestran como gists insertos, para que las asignaciones se puedan compartir e insertar fácilmente. Para obtener más información, consulte "[Trabajar con archivos que no son de código](/repositories/working-with-files/using-files/working-with-non-code-files#mapping-geojson-files-on-github)".

{% endif %}

## Crear un gist

Sigue estos pasos para crear un gist.

{% note %}

También puedes crear un gist si utilizas el {% data variables.product.prodname_cli %}. Para obtener más información, consulte "[`gh gist create`](https://cli.github.com/manual/gh_gist_create)" en la documentación de {% data variables.product.prodname_cli %}.

Como alternativa, puedes arrastrar y soltar un archivo de texto desde tu escritorio directamente en el editor.

{% endnote %}

1. Inicia sesión en {% data variables.product.product_name %}.
2. Dirígete a tu {% data variables.gists.gist_homepage %}.
3. Escribe una descripción opcional y un nombre para tu gist.
![Descripción del nombre del gist](/assets/images/help/gist/gist_name_description.png)

4. Teclea el texto de tu gist en la caja de texto de este.
![Cuadro de texto del gist](/assets/images/help/gist/gist_text_box.png)

5. También puede crear un gist {% ifversion ghae %}interno{% else %}público{% endif %} haciendo clic en {% octicon "triangle-down" aria-label="The downwards triangle icon" %} y haciendo clic en **Create {% ifversion ghae %}internal{% else %}public{% endif %} gist**.
![Drop-down menu to select gist visibility]{% ifversion ghae %}(/assets/images/help/gist/gist-visibility-drop-down-ae.png){% else %}(/assets/images/help/gist/gist-visibility-drop-down.png){% endif %}

6. Haga clic en **Create secret Gist** o **Create {% ifversion ghae %}internal{% else %}public{% endif %} gist**.
  ![Botón para crear gists](/assets/images/help/gist/create-secret-gist-button.png)
