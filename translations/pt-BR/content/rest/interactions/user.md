---
title: User interactions
shortTitle: Usuário
allowTitleToDifferFromFilename: true
intro: 'The User interactions API allows you to temporarily restrict which type of user can comment, open issues, or create pull requests on your public repositories.'
versions:
  fpt: '*'
  ghec: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
---

## About the User interactions API

The User interactions API allows you to temporarily restrict which type of user can comment, open issues, or create pull requests on your public repositories. {% data reusables.interactions.interactions-detail %} Veja mais sobre os tipos de usuários de {% data variables.product.product_name %}:

* {% data reusables.interactions.existing-user-limit-definition %} de interagir com seus repositórios.
* {% data reusables.interactions.contributor-user-limit-definition %} de interagir com seus repositórios.
* {% data reusables.interactions.collaborator-user-limit-definition %} de interagir com seus repositórios.

Definir o limite de interação no nível do usuário sobrescreverá quaisquer limites de interação definidos para repositórios individuais pertencentes ao usuário. Para definir diferentes limites de interação para repositórios individuais pertencentes ao usuário, use os pontos de extremidade das interações do [Repositório](#repository).
