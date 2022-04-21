---
title: Importaciones de Código Fuente
intro: '{% data variables.migrations.source_imports_intro %}'
versions:
  fpt: '*'
  ghec: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
---

Una importación de código fuente habitual inicia la importación y luego actualiza (opcionalmente) a los autores y/o actualiza las preferencias para utilizar el LFS de Ggit si existen archivos grandes en la importación. También puedes crear un webhook que escuche al [`RepositoryImportEvent`](/developers/webhooks-and-events/webhook-events-and-payloads#repository_import) para encontrar el estado de la importación.

Se puede ver un ejemplo más detallado en este diagrama:

```
+---------+                     +--------+                              +---------------------+
| Tooling |                     | GitHub |                              | Original Repository |
+---------+                     +--------+                              +---------------------+
     |                              |                                              |
     |  Start import                |                                              |
     |----------------------------->|                                              |
     |                              |                                              |
     |                              |  Download source data                        |
     |                              |--------------------------------------------->|
     |                              |                        Begin streaming data  |
     |                              |<---------------------------------------------|
     |                              |                                              |
     |  Get import progress         |                                              |
     |----------------------------->|                                              |
     |       "status": "importing"  |                                              |
     |<-----------------------------|                                              |
     |                              |                                              |
     |  Get commit authors          |                                              |
     |----------------------------->|                                              |
     |                              |                                              |
     |  Map a commit author         |                                              |
     |----------------------------->|                                              |
     |                              |                                              |
     |                              |                                              |
     |                              |                       Finish streaming data  |
     |                              |<---------------------------------------------|
     |                              |                                              |
     |                              |  Rewrite commits with mapped authors         |
     |                              |------+                                       |
     |                              |      |                                       |
     |                              |<-----+                                       |
     |                              |                                              |
     |                              |  Update repository on GitHub                 |
     |                              |------+                                       |
     |                              |      |                                       |
     |                              |<-----+                                       |
     |                              |                                              |
     |  Map a commit author         |                                              |
     |----------------------------->|                                              |
     |                              |  Rewrite commits with mapped authors         |
     |                              |------+                                       |
     |                              |      |                                       |
     |                              |<-----+                                       |
     |                              |                                              |
     |                              |  Update repository on GitHub                 |
     |                              |------+                                       |
     |                              |      |                                       |
     |                              |<-----+                                       |
     |                              |                                              |
     |  Get large files             |                                              |
     |----------------------------->|                                              |
     |                              |                                              |
     |  opt_in to Git LFS           |                                              |
     |----------------------------->|                                              |
     |                              |  Rewrite commits for large files             |
     |                              |------+                                       |
     |                              |      |                                       |
     |                              |<-----+                                       |
     |                              |                                              |
     |                              |  Update repository on GitHub                 |
     |                              |------+                                       |
     |                              |      |                                       |
     |                              |<-----+                                       |
     |                              |                                              |
     |  Get import progress         |                                              |
     |----------------------------->|                                              |
     |        "status": "complete"  |                                              |
     |<-----------------------------|                                              |
     |                              |                                              |
     |                              |                                              |
```
