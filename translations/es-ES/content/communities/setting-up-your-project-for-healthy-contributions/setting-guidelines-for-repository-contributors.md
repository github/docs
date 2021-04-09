---
title: Configurar pautas para los colaboradores de repositorios
intro: Puedes crear pautas para comunicar cómo pueden contribuir las personas a tu proyecto.
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
redirect_from:
  - /articles/how-do-i-set-up-guidelines-for-contributors/
  - /articles/setting-guidelines-for-repository-contributors
  - /github/building-a-strong-community/setting-guidelines-for-repository-contributors
topics:
  - comunidad
---

Para ayudar a los colaboradores de tu proyecto a realizar un buen trabajo, puedes agregar un archivo con las pautas de colaboración a la raíz del repositorio de tu proyecto, carpeta `docs`, o `.github`. Cuando alguien abre una solicitud de extracción o crea una propuesta, verán un enlace a ese archivo.

![contributing-guidelines](/assets/images/help/pull_requests/contributing-guidelines.png)

Para el propietario del repositorio, las pautas de contribución son una manera de comunicar cómo deben contribuir las personas.

Para los colaboradores, las pautas los ayudan a verificar que están presentando solicitudes de extracción conformadas correctamente y abriendo propuestas útiles.

Tanto para los propietarios como para los colaboradores, las pautas de contribución ahorran tiempo y evitan inconvenientes generados por solicitudes de extracción o propuestas creadas de manera incorrecta que deben ser rechazadas o se deben volver a presentar.

{% if currentVersion == "free-pro-team@latest" or enterpriseServerVersions contains currentVersion %}

Puedes crear lineamientos de colaboración predeterminados para tu cuenta de organización{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.19" %} o de usuario{% endif %}. Para obtener más información, consulta "[Crear un archivo de salud predeterminado para la comunidad](//communities/setting-up-your-project-for-healthy-contributions/creating-a-default-community-health-file)."

{% endif %}

{% tip %}

**Sugerencia:** los mantenedores de repositorios pueden establecer pautas específicas para las propuestas al crear una plantilla de propuesta o de solicitud de extracción para el repositorio. Para obtener más información, consulta "[Acerca de las plantillas de propuestas y solicitudes de extracción](/articles/about-issue-and-pull-request-templates)".

{% endtip %}

### Agregar un archivo *CONTRIBUTING*

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.files.add-file %}
3. Decide si almacenar tus pautas de contribución en la raíz de tu repositorio, el directorio `docs`, o el directorio `.github`. Después, en el campo nombre de archivo, escribe el nombre y la extensión del archivo. Los nombres de archivos de las pautas de contribución no distinguen entre mayúsculas y minúsculas y pueden tener una extensión *.md* o *.txt*. ![Nombre del nuevo archivo](/assets/images/help/repository/new-file-name.png)
    - Para hacer visibles tus pautas de contribución en el directorio raíz del repositorio, escribe *CONTRIBUTING*.
    - Para hacer visibles tus pautas de contribución en el directorio `docs` del repositorio, escribe *docs/* para crear el nuevo directorio, y luego *CONTRIBUTING*.
4. En el nuevo archivo, agrega las pautas de contribución. Pueden incluir:
    - Pasos para crear buenas propuestas o solicitudes de extracción.
    - Enlaces a la documentación externa, listas de correos o un código de conducta.
    - Expectativas de comportamiento y de la comunidad.
{% data reusables.files.write_commit_message %}
{% data reusables.files.choose_commit_branch %}
{% data reusables.files.propose_new_file %}

### Ejemplos de pautas de contribución

Si estás confundido, aquí hay algunos buenos ejemplos de pautas de contribución:

- Pautas de contribución del Editor Atom [](https://github.com/atom/atom/blob/master/CONTRIBUTING.md).
- Pautas de contribución de Ruby on Rails [](https://github.com/rails/rails/blob/master/CONTRIBUTING.md).
- Pautas de contribución de Open Government [](https://github.com/opengovernment/opengovernment/blob/master/CONTRIBUTING.md).

### Leer más
- La sección de las Open Source Guides llamada "[Starting an Open Source Project](https://opensource.guide/starting-a-project/)"{% if currentVersion == "free-pro-team@latest" %}
- [{% data variables.product.prodname_learning %}]({% data variables.product.prodname_learning_link %}){% endif %}{% if currentVersion == "free-pro-team@latest" or enterpriseServerVersions contains currentVersion %}
- "[Agregar una licencia a un repositorio](/articles/adding-a-license-to-a-repository)"{% endif %}
