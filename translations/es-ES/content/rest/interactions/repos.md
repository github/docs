---
title: Repository interactions
shortTitle: Repositorio
intro: 'The Repository interactions API allows people with owner or admin access to temporarily restrict which type of user can comment, open issues, or create pull requests in a public repository.'
versions:
  fpt: '*'
  ghec: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
allowTitleToDifferFromFilename: true
---

## About the Repository interactions API

The Repository interactions API allows people with owner or admin access to temporarily restrict which type of user can comment, open issues, or create pull requests in a public repository. {% data reusables.interactions.interactions-detail %} Aquí puedes aprender más sobre los tipos de usuario de {% data variables.product.product_name %}:

* {% data reusables.interactions.existing-user-limit-definition %} en el repositorio.
* {% data reusables.interactions.contributor-user-limit-definition %} en el repositorio.
* {% data reusables.interactions.collaborator-user-limit-definition %} en el repositorio.

Si se habilita un límite de interacción para el usuario u organización a la que pertenece el repositorio, éste no podrá cambiarse para el repositorio individual. En su lugar, utiliza las terminales de interacciones de [Usuario](#user) o de [Organización](#organization) para cambiar el límite de interacción.
