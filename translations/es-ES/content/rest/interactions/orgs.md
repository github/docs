---
title: Organización
intro: 'La API de Interacciones Organizacionales permite a los propietarios el restringir temporalmente qué tipo de usuariopuede comentar, abrir propuestas, o crear solicitudes de cambios en los repositorios públicos de la organización.'
versions:
  fpt: '*'
  ghec: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
allowTitleToDifferFromFilename: true
---

{% data reusables.interactions.interactions-detail %} Aquí puedes aprender más sobre los tipos de usuario de {% data variables.product.product_name %}:

* {% data reusables.interactions.existing-user-limit-definition %} en la organización.
* {% data reusables.interactions.contributor-user-limit-definition %} en la organización.
* {% data reusables.interactions.collaborator-user-limit-definition %} en la organización.

Configurar el límite de interacciones a nivel organizacional sobreescribirá cualquier límite de interacción que se haya configurado para los repositorios individuales que pertenezcan a la organización. Para configurar los límites de interacción para los repositorios individuales que pertenezcan a la organización, mejor utiliza la terminal de interaciones del [Repositorio](#repository).
