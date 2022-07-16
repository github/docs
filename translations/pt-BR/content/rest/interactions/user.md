---
title: Interações do usuário
shortTitle: Usuário
allowTitleToDifferFromFilename: true
intro: 'A API de Interações do Usuário permite restringir temporariamente que tipo de usuário pode comentar, abrir problemas ou criar pull requests nos seus repositórios públicos.'
versions:
  fpt: '*'
  ghec: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
---

## Sobre a API de interações do usuário

A API de Interações do Usuário permite restringir temporariamente que tipo de usuário pode comentar, abrir problemas ou criar pull requests nos seus repositórios públicos. {% data reusables.interactions.interactions-detail %} Veja mais sobre os tipos de usuários de {% data variables.product.product_name %}:

* {% data reusables.interactions.existing-user-limit-definition %} de interagir com seus repositórios.
* {% data reusables.interactions.contributor-user-limit-definition %} de interagir com seus repositórios.
* {% data reusables.interactions.collaborator-user-limit-definition %} de interagir com seus repositórios.

Definir o limite de interação no nível do usuário sobrescreverá quaisquer limites de interação definidos para repositórios individuais pertencentes ao usuário. Para definir diferentes limites de interação para repositórios individuais pertencentes ao usuário, use os pontos de extremidade das interações do [Repositório](#repository).
