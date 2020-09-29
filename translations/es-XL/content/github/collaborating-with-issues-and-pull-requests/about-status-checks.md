---
title: Acerca de las verificaciones de estado
intro: Las verificaciones de estado te permiten saber si tus confirmaciones cumplen con las condiciones establecidas para el repositorio con el que estás colaborando.
redirect_from:
  - /articles/about-statuses/
  - /articles/about-status-checks
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

Las verificaciones de estado se basan en procesos externos, como compilaciones de integración continua, que se ejecutan para cada subida que haces a un repositorio. Puedes ver el estado *pendiente*, *aprobado* o *error* de las verificaciones de estado junto a las confirmaciones individuales en tu solicitud de extracción.

![Listado de confirmaciones y estados](/assets/images/help/pull_requests/commit-list-statuses.png)

Cualquier persona con permisos de escritura a un repositorio puede determinar el estado de cualquier comprobación de estado en el repositorio.

Puedes ver el estado general de la última confirmación para una rama en la página de ramas de tu repositorio o en la lista de solicitudes de extracción de tu repositorio.

{% data reusables.pull_requests.required-checks-must-pass-to-merge %}

### Tipos de verificaciones de estado en {% data variables.product.product_name %}

Hay dos tipos de verificaciones de estado en {% data variables.product.product_name %}:

- Verificaciones
- Estados

Las _verificaciones_ son diferentes de los _estados_, porque brindan anotaciones por línea, mensajes más detallados y solo están disponibles para el uso con {% data variables.product.prodname_github_app %}s.

Los propietarios de la organización y los usuarios con acceso de escritura a un repositorio pueden crear verificaciones y estados con la API de {% data variables.product.product_name %}. Para obtener más información, consulta la secciónes "[Verificaciones](/v3/checks/)" y "[Estados](/v3/repos/statuses/)".

### Verificaciones

Cuando se configuran las _verificaciones_ en un repositorio, las solicitudes de extracción tienen una pestaña **Checks** (Verificaciones) en la que puedes ver los resultados detallados de la compilación desde las verificaciones de estado y volver a ejecutar las verificaciones fallidas.

![Verificaciones de estado dentro de una solicitud de extracción](/assets/images/help/pull_requests/checks.png)

Cuando una línea específica en una confirmación hace que una verificación falle, verás los detalles acerca de la falla, adevertencia o aviso al lado del código relevante en la pestaña **Archivos** de la solicitud de extracción.

![Detalles de una verificación de estado](/assets/images/help/pull_requests/checks-detailed.png)

Puedes navegar entre los resúmenes de las verificaciones para varias confirmaciones en una solicitud de extracción, usando el menú desplegable de la confirmación en la pestaña **Conversación**.

![Resúmenes de verificación para diferentes confirmaciones en un menú desplegable](/assets/images/help/pull_requests/checks-summary-for-various-commits.png)

#### Omitir y solicitar verificaciones para confirmaciones individuales

Cuando un repositorio se configura para que solicite automáticamente las verificaciones para las subidas, puedes elegir omitir las verificaciones para una confirmación indvidual que subes. Cuando un repositorio _no_ se configura para que solicite automáticamente las verificaciones para las subidas, puedes solicitar verificaciones para una confirmación indvidual que subes. Para obtener más información acerca de estas configuraciones, consulta la sección "[Verificar Suites](/v3/checks/suites/#set-preferences-for-check-suites-on-a-repository)".

Para omitir o solicitar verificaciones para tu confirmación, agrega una de las siguientes lineas de introducción al final de tu mensaje de confirmación:

- Para _omitir verificaciones_ para una confirmación, escribe tu mensaje de confirmación y una descripción corta y significativa de tus cambios. Después de la descripción de tu confirmación, en lugar de una comilla de cierre, agrega dos líneas vacías seguidas de `skip-checks: true`:
  ```shell
  $ git commit -m "Update README.
  >
  >
  skip-checks: true
  ```
  - Para _solicitar_ verificaciones para una confirmación, escribe tu mensaje de confirmación y una descripción corta y significativa de tus cambios. Después de la descripción de tu confirmación, en lugar de una comilla de cierre, agrega dos líneas vacías seguidas de `request-checks: true`:
  ```shell
  $ git commit -m "Refactor usability tests.
  >
  >
  request-checks: true
  ```
  
