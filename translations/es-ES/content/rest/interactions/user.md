---
title: User interactions
shortTitle: Usuario
allowTitleToDifferFromFilename: true
intro: 'La API de interacciones de usuario te permite restringir temporalmente qué tipo de usuario puede comentar, abrir propuestas o crear solicitudes de cambio en tus repositorios públicos.'
versions:
  fpt: '*'
  ghec: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
---

## About the User interactions API

La API de interacciones de usuario te permite restringir temporalmente qué tipo de usuario puede comentar, abrir propuestas o crear solicitudes de cambio en tus repositorios públicos. {% data reusables.interactions.interactions-detail %} Aquí puedes aprender más sobre los tipos de usuario de {% data variables.product.product_name %}:

* {% data reusables.interactions.existing-user-limit-definition %} de interactuar con tus repositorios.
* {% data reusables.interactions.contributor-user-limit-definition %} de interactuar con tus repositorios.
* {% data reusables.interactions.collaborator-user-limit-definition %} de interactuar con tus repositorios.

El configurar el límite de interacción a nivel de usuario sobreescribirá cualquier límite de interacción que se configure para los repositorios individuales que le pertenezcan a éste. Para configurar límites de interacción diferentes para los repositorios individuales que pertenezcan al usuario, utiliza la terminal de interacciones de [Repositorio](#repository) en su lugar.
