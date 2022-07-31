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
shortTitle: Lineamientos de contribuyente
---

## Acerca de los lineamientos de contribución
Para ayudar a los colaboradores de tu proyecto a realizar un buen trabajo, puedes agregar un archivo con las pautas de colaboración a la raíz del repositorio de tu proyecto, carpeta `docs`, o `.github`. Cuando alguien abre una solicitud de extracción o crea una propuesta, verán un enlace a ese archivo. El enlace a los lineamientos de contribución también aparece en la página de `contribute` de tu repositorio. Para encontrar un ejemplo de página de `contribute`, consulta [github/docs/contribute](https://github.com/github/docs/contribute).

![contributing-guidelines](/assets/images/help/pull_requests/contributing-guidelines.png)

Para el propietario del repositorio, las pautas de contribución son una manera de comunicar cómo deben contribuir las personas.

Para los colaboradores, las pautas los ayudan a verificar que están presentando solicitudes de extracción conformadas correctamente y abriendo propuestas útiles.

Tanto para los propietarios como para los colaboradores, las pautas de contribución ahorran tiempo y evitan inconvenientes generados por solicitudes de extracción o propuestas creadas de manera incorrecta que deben ser rechazadas o se deben volver a presentar.

{% ifversion fpt or ghes or ghec %}

Puedes crear lineamientos de contribución predeterminados para tu cuenta organizacional{% ifversion fpt or ghes or ghec %} o personal{% endif %}. Para obtener más información, consulta "[Crear un archivo de salud predeterminado para la comunidad](//communities/setting-up-your-project-for-healthy-contributions/creating-a-default-community-health-file)."

{% endif %}

{% tip %}

**Sugerencia:** los mantenedores de repositorios pueden establecer pautas específicas para las propuestas al crear una plantilla de propuesta o de solicitud de extracción para el repositorio. Para obtener más información, consulta "[Acerca de las plantillas de propuestas y solicitudes de extracción](/articles/about-issue-and-pull-request-templates)".

{% endtip %}

## Agregar un archivo *CONTRIBUTING*

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.files.add-file %}
3. Decide si almacenar tus pautas de contribución en la raíz de tu repositorio, el directorio `docs`, o el directorio `.github`. Después, en el campo nombre de archivo, escribe el nombre y la extensión del archivo. Los nombres de archivo de los lineamientos de contribución no distinguen entre mayúsculas y minúsculas. Los archivos se interpretan en formato de texto rico si la extensión de archivo se encuentra en un formato compatible. Para obtener más información, consulta la sección "[Trabajar con archivos que no sean de código](/repositories/working-with-files/using-files/working-with-non-code-files#rendering-differences-in-prose-documents)". ![Nombre del nuevo archivo](/assets/images/help/repository/new-file-name.png)
    - Para hacer visibles tus pautas de contribución en el directorio raíz del repositorio, escribe *CONTRIBUTING*.
    - Para hacer visibles tus pautas de contribución en el directorio `docs` del repositorio, escribe *docs/* para crear el nuevo directorio, y luego *CONTRIBUTING*.
    - Si un repositorio contiene más de un archivo de *CONTRIBUCIÓN*, entonces el archivo que se muestra en los enlaces se elige de las ubicaciones en el siguiente orden: el directorio `.github`, luego el directorio raíz del repositorio y finalmente el directorio `docs`.
4. En el nuevo archivo, agrega las pautas de contribución. Pueden incluir:
    - Pasos para crear buenas propuestas o solicitudes de extracción.
    - Enlaces a la documentación externa, listas de correos o un código de conducta.
    - Expectativas de comportamiento y de la comunidad.
{% data reusables.files.write_commit_message %}
{% data reusables.files.choose_commit_branch %}
{% data reusables.files.propose_new_file %}

## Ejemplos de pautas de contribución

Si estás confundido, aquí hay algunos buenos ejemplos de pautas de contribución:

- Pautas de contribución del Editor Atom [](https://github.com/atom/atom/blob/master/CONTRIBUTING.md).
- Pautas de contribución de Ruby on Rails [](https://github.com/rails/rails/blob/master/CONTRIBUTING.md).
- Pautas de contribución de Open Government [](https://github.com/opengovernment/opengovernment/blob/master/CONTRIBUTING.md).

## Leer más
- La sección de la Guía de código abierto "[Iniciar un proyecto de código abierto](https://opensource.guide/starting-a-project/)"{% ifversion fpt or ghec %}
- [{% data variables.product.prodname_learning %}]({% data variables.product.prodname_learning_link %}){% endif %}{% ifversion fpt or ghes or ghec %}
- "[Agregar una licencia a un repositorio](/articles/adding-a-license-to-a-repository)"{% endif %}
