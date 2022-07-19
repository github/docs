---
title: Organization interactions
shortTitle: Organización
intro: 'La API de interacciones de organización permite que los propietarios de la organización restrinjan temporalmente qué tipo de usuarios pueden comentar, abrir propuestas o crear solicitudes de cambios en los repositorios públicos de dicha organización.'
versions:
  fpt: '*'
  ghec: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
allowTitleToDifferFromFilename: true
---

## About the Organization interactions API

La API de interacciones de organización permite que los propietarios de la organización restrinjan temporalmente qué tipo de usuarios pueden comentar, abrir propuestas o crear solicitudes de cambios en los repositorios públicos de dicha organización. {% data reusables.interactions.interactions-detail %} Aquí puedes aprender más sobre los tipos de usuario de {% data variables.product.product_name %}:

* {% data reusables.interactions.existing-user-limit-definition %} en la organización.
* {% data reusables.interactions.contributor-user-limit-definition %} en la organización.
* {% data reusables.interactions.collaborator-user-limit-definition %} en la organización.

Configurar el límite de interacciones a nivel organizacional sobreescribirá cualquier límite de interacción que se haya configurado para los repositorios individuales que pertenezcan a la organización. Para configurar los límites de interacción para los repositorios individuales que pertenezcan a la organización, mejor utiliza la terminal de interaciones del [Repositorio](#repository).
