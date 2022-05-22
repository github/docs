---
title: Métricas disponibles con GitHub Insights
product: '{% data reusables.gated-features.github-insights %}'
intro: '{% data variables.product.prodname_insights %} incluye una variedad de métricas para darte visibilidad en el proceso de entrega de software de tu equipo.'
redirect_from:
  - /github/installing-and-configuring-github-insights/metrics-available-with-github-insights
  - /github/installing-and-configuring-github-insights/key-metrics-for-collaboration-in-pull-requests
versions:
  enterprise-server: '*'
---

### Acerca de métricas en {% data variables.product.prodname_insights %}

{% data reusables.github-insights.key-metrics-and-reports %}

{% data reusables.github-insights.about-key-metrics %} Puedes configurar y medir tus metas para cada métrica clave. Para obtener más información, consulta "[Administrar metas](/insights/installing-and-configuring-github-insights/managing-goals)".

{% data reusables.github-insights.about-reports %}

{% data reusables.github-insights.manage-metrics %}

### Métricas clave para la colaboración en solicitudes de extracción (pull requests)

Las métricas clave para la colaboración en solicitudes de extracción ayudan a los equipos a eliminar los cuellos de botella en el proceso, a mejorar la colaboración y a entregar los proyectos más rápido, con mayor calidad. La mejora de estas métricas resulta en un equipo más productivo.

- [Distribución de revisión de código](#code-review-distribution)
- [Respuesta de revisión de código](#code-review-turnaround)
- [Tiempo de apertura](#time-to-open)
- [Tamaño de solicitud de extracción](#pull-request-size)
- [Trabajo en curso](#work-in-progress)

#### Distribución de revisión de código

Mide la distribución de revisiones de código en un equipo u organización. Un valor más cercano a 1 indica una distribución más igualitaria. Incluye los miembros que previamente han abierto, revisado o comentado en una solicitud de extracción o se han confirmado a una rama.

El índice es igual a 1 menos el coeficiente de Gini de revisiones de código para una organización o equipo. Para obtener más información, consulta [Coeficiente de Gini](https://en.wikipedia.org/wiki/Gini_coefficient) en Wikipedia.

#### Respuesta de revisión de código

El tiempo transcurrido entre una asignación de revisión y una revisión completada.

Para contrarrestar las revisiones de código como un bloqueador para los equipos, las organizaciones pueden optimizar su proceso de asignación de revisiones y establecer metas para el tiempo de respuesta.

#### Tiempo de apertura

El tiempo transcurrido entre la primera confirmación de un usuario a una rama y la apertura de una solicitud de extracción para esa rama.

Disminuir este período de tiempo les permite a los colaboradores recibir más temprano comentarios en el proceso y garantiza más tiempo para la colaboración y la iteración.

#### Tamaño de solicitud de extracción

Tamaño de diferencia total de una solicitud de extracción (total de líneas agregadas, eliminadas y modificadas).

Las solicitudes de extracción de gran tamaño conllevan más riesgo cuando se implementan en la producción y son más difíciles de revisar, fusionar y lanzar. Implementar solicitudes de extracción de un tamaño razonable le permite a tu equipo revisar y enviar nuevas características a una cadencia más rápida y con mayor confianza

#### Trabajo en curso

La cantidad de solicitudes de extracción abiertas para un equipo o una organización dada, expresada como total y como proporción de solicitudes de extracción abiertas para el programador.

Un retraso importante en la solicitud de extracción significa que el trabajo puede estar desactualizado, lo que indica un esfuerzo desaprovechado de tu equipo. Esta métrica ayuda a mantener centrado a tu equipo al mismo tiempo que garantiza que nadie en el equipo esté bloqueado o sobrecargado.

### Informes

| Métrica                                                              | Descripción                                                                                                                                                                                                                                                       |
| -------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Actividad                                                            | Una actividad es cualquiera de las siguientes:<ul><li>Confirmarse a una rama</li><li>Abrir una solicitud de extracción</li><li>Cerrar una solicitud de extracción</li><li>Fusionar una solicitud de extracción</li><li>Comentar en una solicitud de extracción</li><li>Aprobar una solicitud de extracción</li></ul>                                                                                                                                                                                           |
| Actividad, hora                                                      | Una hora con actividad es cualquier hora en la que al menos un colaborador registra una actividad.                                                                                                                                                                |
| Código de renovación                                                 | El código de renovación es un código cambiado dentro de las tres semanas desde que se agregó o cambió por última vez. Esto incluye las líneas de código que fueron sobrescritas por el autor o por otro colaborador.                                              |
| Líneas de código añadidas y cambiadas                                | Recuento total de las nuevas líneas de código añadidas además de las líneas de código modificadas. Puedes incluir o excluir un código de renovación.                                                                                                              |
| Propiedad                                                            | Porcentaje de desglose de líneas de código añadidas y modificadas por el último colaborador para agregar o cambiar cada línea de código.                                                                                                                          |
| Emparejamientos                                                      | Colaboradores que modifican o eliminan el código de otro colaborador.                                                                                                                                                                                             |
| Porcentaje de base de código cambiada                                | Líneas de código agregadas o modificadas en la base de código como un porcentaje del total de líneas de código en la base de código.                                                                                                                              |
| Porcentaje de código nuevo y cambiado frente al código de renovación | Líneas de código añadidas y cambiadas, excepto el código de renovación, como porcentaje del total de líneas de código añadidas y cambiadas, incluido el código de renovación.                                                                                     |
| Solicitudes de extracción abiertas                                   | El recuento de todas las solicitudes de extracción que están abiertas al final del período seleccionado o el intervalo de tiempo que se muestra en el gráfico.                                                                                                    |
| Retención                                                            | Porcentaje de líneas de código que se conservan en la base de código después de cada semana, agrupadas por la semana en la que se crearon las líneas.                                                                                                             |
| Tiempo para fusionar                                                 | Tiempo entre la primera confirmación en una rama y la acción de fusión de una solicitud de extracción en esa rama. La marca de tiempo de la primera confirmación en una rama se resta de la marca de tiempo en la acción de fusión de la solicitud de extracción. |
