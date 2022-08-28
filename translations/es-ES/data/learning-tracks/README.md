# Enfoques de Aprendizaje (conocidas como Rutas de Aprendizaje)

Los enfoques de aprendizaje son una recolección de artículos que te ayudan a dominar un tema específico. Los enfoques de aprendizaje se definen por producto. Por ejemplo, consulta https://docs.github.com/en/actions/guides.

El aprender a rastrear datos de un producto se define en dos lugares:

1. Un arreglo siempre para aprender a rastrear nombres se define en la página preliminar de índice de sub-llegada.

    Por ejemplo, en `content/actions/guides/index.md`:
    ```
    learningTracks:
      - getting_started
      - continuous_integration
      - continuous_deployment
      - deploy_to_the_cloud
      - hosting_your_own_runners
      - create_actions
    ```

2. Se definen datos adicionales para cada ruta en un archivo YAML denominado para el **producto** en el directorio de `data`.

    Por ejemplo, en `data/learning-tracks/actions.yml`, cada uno de los elementos del arreglo `learningTracks` del archivo de contenido se representa con datos adicionales tales como `title`, `description` y un arreglo de enlaces de `guides`.

    Una pista de aprendizaje en este YAML **por versión** se debe designar como una pista de aprendizaje "destacada" a través de `featured_track: true`, la cual lo configurará para mostrarse en la parte superior de la página de sub-llegada del producto. Las pruebas fallaràn si falta esta propiedad.

    La propiedad `featured_track` puede ser un valor booleano simple (por ejemplo, `featured_track: true`) o puede ser una secuencia que incluya declaraciones de versión (por ejemplo, `featured_track: '{% if currentVersion == "free-pro-team@latest" %}true{% else %}false{% endif %}'`). Si utilizas versionamiento, tendrás `featured_track`s múltiples por archivo YML, pero asegúrate de que solo uno se interprete en cada versión compatible actual. Las pruebas fallarán si hay más o menos de un enlace destacado para cada versión.

El versionamiento para aprender pistas se procesa en l ahora interpretada de la página. El código vive en [`lib/learning-tracks.js`](lib/learning-tracks.js), al cual llama `page.render()`. Entonces, `layouts/product-sublanding.html` interpreta las pistas de aprendizaje procesadas.

El modelo para validar el YAML de pista de aprendizaje vive en [`tests/helpers/schemas/learning-tracks-schema.js`](tests/helpers/schemas/learning-tracks-schema.js) y [`tests/content/lint-files.js`](tests/content/lint-files.js) lo ejecuta.
