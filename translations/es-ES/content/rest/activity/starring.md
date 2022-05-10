---
title: Marcar con una estrella
intro: The Starring API lets you bookmark a repository.
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
---

## About the Starring API

The Starring API lets you bookmark a repository. Las estrellas se muestran junto a los repositorios para denotar un nivel aproximado de interés. Las estrellas no tienen efecto alguno en las notificaciones o en los canales de actividad. Para obtener más información, consulta la sección "[Guardar repositorios con estrellas](/get-started/exploring-projects-on-github/saving-repositories-with-stars)".

### Marcar con estrella vs. Observar

En agosto de 2012, [cambiamos la forma en la que funciona el observar repositorios](https://github.com/blog/1204-notifications-stars) en {% data variables.product.prodname_dotcom %}. Muchas aplicaciones de cliente de la API podrían estar utilizando las terminales de "observación" originales para acceder a estos datos. Ahora puedes comenzar a utilizar las terminales de "estrella" como sustitución (como se describe más adelante). Para obtener más información, consulta la [publicación de Cambio de la API de observaciones](https://developer.github.com/changes/2012-09-05-watcher-api/) y la "[API para Observar Repositorios](/rest/reference/activity#watching)".

### Tipos de medio personalizados para marcar con estrella

Hay un tipo de medios personalizado compatible para la API de REST para Marcar con estrella. Cuando utilizas este tipo de medios personalizado, recibirás una respuesta con la marca de tiempo `starred_at` que indica la hora en el que se creó la estrella. La respuesta también tiene una segunda propiedad que incluye el recurso que se devuelve cuando no se incluye el tipo de medios personalizado. La propiedad que contiene el recurso puede ser `user` o `repo`.

    application/vnd.github.v3.star+json

Para obtener más información acerca de los tipos de medios, consulta la sección "[Tipos de medios personalizados](/rest/overview/media-types)".
