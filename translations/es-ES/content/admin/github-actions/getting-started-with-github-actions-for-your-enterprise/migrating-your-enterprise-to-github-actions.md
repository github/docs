---
title: Migrar tu empresa a GitHub Actions
shortTitle: Migrar a las acciones
intro: 'Aprende cómo planear una migración a {% data variables.product.prodname_actions %} para tu empresa desde otro proveedor.'
versions:
  ghec: '*'
  ghes: '*'
  ghae: '*'
type: how_to
topics:
  - Actions
  - Enterprise
---

## Acerca de las migraciones empresariales a {% data variables.product.prodname_actions %}

Para migrar tu empresa a {% data variables.product.prodname_actions %} desde un sistema existente, puedes planear la migración, completarla y retirar los sistemas existentes.

Esta guía dirige consideraciones específicas para las migraciones. Para obtener información adicional sobre cómo incluir las {% data variables.product.prodname_actions %} en tu empresa, consulta la sección "[Incluir las {% data variables.product.prodname_actions %} en tu empresa](/admin/github-actions/getting-started-with-github-actions-for-your-enterprise/introducing-github-actions-to-your-enterprise)".

## Planear tu migración

Antes de que comiences a migrar tu empresa a {% data variables.product.prodname_actions %}, debes identificar qué flujos de trabajo se migrarán y cómo afectarán dichas migraciones a tus equipos, posteriormente, deberás planear cómo y cuándo completarás las migraciones.

### Aprovechar los especialistas en migración

{% data variables.product.company_short %} puede ayudarte con la migración y también puedes sacar provecho de comprar los {% data variables.product.prodname_professional_services %}. Para obtener más información, contacta a tu representante dedicado o a {% data variables.contact.contact_enterprise_sales %}.

### Identificar e inventariar los destinos de migración

Antes de que puedas migrarte a las {% data variables.product.prodname_actions %}, necesitarás tener un entendimiento total de los flujos de trabajo que utiliza tu empresa en tu sistema existente.

Primero, crea un inventario de los flujos de trabajo de lanzamientos y de compilación existentes en tu empresa, juntando la información sobre qué flujos de trabajo se utilizan activamente y necesitan migrarse y cuáles pueden quedarse atrás.

Después, conoce las diferencias entre tu proveedor actual y las {% data variables.product.prodname_actions %}. Esto te ayudará a evaluar cualquier dificultad para migrar cada flujo de trabajo y en dónde tu empresa podría experimentar diferencias en características. Para obtener más información, consulta la sección "[Migrarse a las {% data variables.product.prodname_actions %}](/actions/migrating-to-github-actions)".

Con esta información, podrás determinar qué flujos de trabajo puedes y quieres migrar a {% data variables.product.prodname_actions %}.

### Determinar los impactos de equipo a raíz de las migraciones

Cuando cambias las herramientas que utilizas dentro de tu empresa, influencias la forma en la que funciona tu equipo. Necesitarás considerar cómo es que la migración de un flujo de trabajo desde tu sistema existente a {% data variables.product.prodname_actions %} afectará el trabajo diario de tus desarrolladores.

Identifica cualquier proceso, integraciones y herramientas de terceros que se afectará con tu migración y haz un plan de cualquier actualización que necesites hacer.

Considera cómo la migración podría afectar tus inquietudes de cumplimiento. Por ejemplo, ¿acaso tus herramientas de análisis de seguridad y escaneo de credenciales existentes funcionarán con {% data variables.product.prodname_actions %} o necesitarás utilizar herramientas nuevas?

Identifica las puertas y verificaciones en tu sistema existente y verifica que puedas implementarlas con {% data variables.product.prodname_actions %}.

### Identificar y validar las herramientas de migración

Las herramientas de migración automatizadas pueden traducir los flujos de trabajo de tu empresa desde la sintaxis de sistema existente a aquella que requiere {% data variables.product.prodname_actions %}. Identifica las herramientas de terceros o contacta a tu representante dedicado o {% data variables.contact.contact_enterprise_sales %} para preguntar sobre las herramientas que puede proporcionar {% data variables.product.company_short %}.

Después de que hayas identificado una herramienta para automatizar tus migraciones, valídala ejecutándola en algunos flujos de trabajo de prueba y verifica que los resultados sean los esperados.

Las herramientas automatizadas deberían poder migrar la mayoría de tus flujos de trabajo, pero es posible que necesites reescribir manualmente por lo menos un porcentaje pequeño de estos. Estima la cantidad de trabajo manual que necesitarás llevar a cabo.

### Decidir llevar a cabo un enfoque de migración

Determina el enfoque de migración que funcionará mejor para tu empresa. Los equipos más pequeños podrían ser capaces de migrar todos sus flujos de trabajo de una sola vez con un enfoque de tipo "quitar y reemplazar". Para las empresas más grandes, un enfoque iterativo podría ser más realista. Puedes elegir que un cuerpo central administre toda la migración o puedes pedirles a los equipos individuales que lo hagan ellos mismos y migren sus propios flujos de trabajo.

Te recomendamos tener un enfoque iterativo que combine la administración activa con un autoservicio. Comience con un grupo pequeño de primeros participantes que actúen como campeones internos. Identifica un puñado de flujos de trabajo que sean suficientemente completos como para representar la amplitud de tu negocio. Trabaja con quienes primero adoptan esto para migrar esos flujos de trabajo a {% data variables.product.prodname_actions %}, iterando conforme sea necesario. Esto les dará a los otros equipos la confianza de que sus flujos de trabajo también pueden migrarse.

Posteriormente, haz que {% data variables.product.prodname_actions %} esté disponible para tu organización extendida. Proporciona recursos para ayudar a que estos equipos migren sus propios flujos de trabajo a {% data variables.product.prodname_actions %} e informa a los equipos cuando los sistemas existentes vayan a retirarse.

Finalmente, informa a todos los equipos que aún utilicen tus sistemas anteriores que deben completar sus migraciones en cierto tiempo. Puedes apuntar a los éxitos de otros equipos para asegurarles que la migración es posible y deseable.

### Definir tu itinerario de migración

Después de que decides tomar un enfoque de migración, crea un itinerario que defina cuándo cada uno de tus equipos migrarán sus flujos de trabajo a {% data variables.product.prodname_actions %}.

Primero, decide la fecha en la que te gustaría completar tu migración. Por ejemplo, puedes planear completar tu migración en el momento en el que finalice tu contrato con tu proveedor actual.

Entonces, trabaja con tus equipos para crear un itinerario que cumpla con tu fecha límite sin sacrificar sus metas de equipo. Fíjate en la cadencia de tu negocio y en la carga de trabajo de cada equipo individual al que le pides migrarse. Coordínate con cada equipo para entender sus itinerarios de entrega y crea un plan que les permita migrar sus flujos de trabajo en un momento en el que no vaya a impactar su capacidad de entrega.

## Migrarse a {% data variables.product.prodname_actions %}

Cuando estés listo para iniciar tu migración, traduce tus flujos existentes a {% data variables.product.prodname_actions %} utilizando las herramientas automatizadas y reescritura manual que ya planeaste para lo anterior.

También podrías querer mantener artefactos de compilaciones anteriores de tu sistema existente, probablemente escribiendo un proceso con script para archivar los artefactos.

## Retirar los sistemas existentes

Después de que se complete tu migración, puedes pensar en retirar tu sistema existente.

Tendrás que ejecutar ambos sistemas de lado a lado durante un tiempo mientras verificas que tu configuración de {% data variables.product.prodname_actions %} sea estable, sin delegación de experiencia para los desarrolladores.

Con el tiempo, el retira y apaga los sistemas antiguos y asegúrate de que nadie en tu empresa los vuelva a activar.
