---
title: Configurar pautas para los colaboradores de repositorios
intro: Puedes crear pautas para comunicar cómo pueden contribuir las personas a tu proyecto.
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
redirect_from:
  - /articles/how-do-i-set-up-guidelines-for-contributors
  - /articles/setting-guidelines-for-repository-contributors
  - /github/building-a-strong-community/setting-guidelines-for-repository-contributors
topics:
  - Community
shortTitle: Contributor guidelines
ms.openlocfilehash: b418c5a3d10f8b8f7572f33b17a9ebfbb3de27d3
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/05/2022
ms.locfileid: '147578792'
---
## Acerca de los lineamientos de contribución
Para ayudar a los colaboradores de su proyecto a realizar un buen trabajo, puede agregar un archivo con las pautas de contribución a la raíz del repositorio del proyecto, `docs` o la carpeta `.github`. Cuando alguien abre una solicitud de extracción o crea una propuesta, verán un enlace a ese archivo. El vínculo a las pautas de contribución también aparece en la página `contribute` del repositorio. Para obtener un ejemplo de una página `contribute`, vea [github/docs/contribute](https://github.com/github/docs/contribute). 

![contributing-guidelines](/assets/images/help/pull_requests/contributing-guidelines.png)

Para el propietario del repositorio, las pautas de contribución son una manera de comunicar cómo deben contribuir las personas.

Para los colaboradores, las pautas los ayudan a verificar que están presentando solicitudes de extracción conformadas correctamente y abriendo propuestas útiles.

Tanto para los propietarios como para los colaboradores, las pautas de contribución ahorran tiempo y evitan inconvenientes generados por solicitudes de extracción o propuestas creadas de manera incorrecta que deben ser rechazadas o se deben volver a presentar.

{% ifversion fpt or ghes or ghec %}

Puedes crear pautas de contribución predeterminadas para tu organización{% ifversion fpt or ghes or ghec %} o cuenta personal{% endif %}. Para más información, vea "[Creación de un archivo de estado de la comunidad predeterminado](//communities/setting-up-your-project-for-healthy-contributions/creating-a-default-community-health-file)".

{% endif %}

{% tip %}

**Sugerencia**: los mantenedores de repositorios pueden establecer pautas específicas para las incidencias creando una plantilla de incidencia o de solicitud de incorporación de cambios para el repositorio. Para más información, vea "[Acerca de las plantillas de incidencias y solicitudes de incorporación de cambios](/articles/about-issue-and-pull-request-templates)".

{% endtip %}

## Agregar un archivo *CONTRIBUTING*

{% data reusables.repositories.navigate-to-repo %} {% data reusables.files.add-file %}
3. Decida si quiere almacenar las pautas de contribución en la raíz del repositorio, en `docs` o en el directorio `.github`. Después, en el campo nombre de archivo, escribe el nombre y la extensión del archivo. Los nombres de archivo de los lineamientos de contribución no distinguen entre mayúsculas y minúsculas. Los archivos se interpretan en formato de texto rico si la extensión de archivo se encuentra en un formato compatible. Para obtener más información, vea "[Trabajar con archivos que no son de código](/repositories/working-with-files/using-files/working-with-non-code-files#rendering-differences-in-prose-documents)".
  ![Nuevo nombre de archivo](/assets/images/help/repository/new-file-name.png)
    - Para hacer visibles sus pautas de contribución en el directorio raíz del repositorio, escriba *CONTRIBUTING*.
    - Para hacer visible sus pautas de contribución en el directorio `docs` del repositorio, escriba *docs/* para crear el directorio y luego *CONTRIBUTING*.
    - Si un repositorio contiene más de un archivo *CONTRIBUTING*, el archivo que se muestra en los vínculos se elige de las ubicaciones en el siguiente orden: el directorio `.github`, luego el directorio raíz del repositorio y finalmente el directorio `docs`.
4. En el nuevo archivo, agrega las pautas de contribución. Pueden incluir:
    - Pasos para crear buenas propuestas o solicitudes de extracción.
    - Enlaces a la documentación externa, listas de correos o un código de conducta.
    - Expectativas de comportamiento y de la comunidad.
{% data reusables.files.write_commit_message %} {% data reusables.files.choose_commit_branch %} {% data reusables.files.propose_new_file %}

## Ejemplos de pautas de contribución

Si estás confundido, aquí hay algunos buenos ejemplos de pautas de contribución:

- [Pautas de contribución](https://github.com/atom/atom/blob/master/CONTRIBUTING.md) del editor Atom.
- [Pautas de contribución](https://github.com/rails/rails/blob/main/CONTRIBUTING.md) de Ruby on Rails.
- [Pautas de contribución](https://github.com/opengovernment/opengovernment/blob/master/CONTRIBUTING.md) de Open Government.

## Información adicional
- La sección de Guías de código abierto "[Iniciar un proyecto de código abierto](https://opensource.guide/starting-a-project/)"{% ifversion fpt or ghec %}
- [{% data variables.product.prodname_learning %}]({% data variables.product.prodname_learning_link %}){% endif %}{% ifversion fpt or ghes or ghec %}
- "[Agregar una licencia a un repositorio](/articles/adding-a-license-to-a-repository)"{% endif %}
