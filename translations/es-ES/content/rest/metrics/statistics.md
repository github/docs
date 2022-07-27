---
title: Repository statistics
shortTitle: Estadísticas
allowTitleToDifferFromFilename: true
intro: 'La API de estadísticas de repositorio te permite recuperar los datos que {% data variables.product.product_name %} utiliza para visualizar tipos diferentes de actividad de repositorio.'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
---

## About the Repository statistics API

La API de estadísticas de repositorio te permite recuperar los datos que {% data variables.product.product_name %} utiliza para visualizar tipos diferentes de actividad de repositorio.

### Unas palabras sobre el almacenamiento en caché

El calcular las estadísitcas del repositorio es una operación costosa, así que intentamos devolver los datos almacenados en caché cuando nos es posible.  Si los datos no se han almacenado en caché cuando consultas la estadística de un repositorio, recibirás una respuesta `202`; también se dispara un job en segundo plano para comenzar a compilar estas estadísticas. Permite que el job se complete, y luego emite la solicitud nuevamente. Si el job ya terminó, esa solicitud recibirá una respuesta `200` con la estadística en el cuerpo de la respuesta.

El SHA de la rama predeterminada del repositorio guarda en caché las estadísticas del repositorio; el subir información a la rama predeterminada restablece el caché de de las estadísticas.

### Las estadísticas excluyen algunos tipos de confirmaciones

Las estadísticas que expone la API empatan con aquellas que muestran [diversas gráficas del repositorio](/github/visualizing-repository-data-with-graphs/about-repository-graphs).

Para resumir:
- Todas las estadísticas excluyen las confirmaciones de fusión.
- Las estadísticas del colaborador también excluyen a las confirmaciones vacías.
