---
title: Organization interactions
shortTitle: organização
intro: 'The Organization interactions API allows organization owners to temporarily restrict which type of user can comment, open issues, or create pull requests in the organization''s public repositories.'
versions:
  fpt: '*'
  ghec: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
allowTitleToDifferFromFilename: true
---

## About the Organization interactions API

The Organization interactions API allows organization owners to temporarily restrict which type of user can comment, open issues, or create pull requests in the organization's public repositories. {% data reusables.interactions.interactions-detail %} Veja mais sobre os tipos de usuários de {% data variables.product.product_name %}:

* {% data reusables.interactions.existing-user-limit-definition %} na organização.
* {% data reusables.interactions.contributor-user-limit-definition %} na organização.
* {% data reusables.interactions.collaborator-user-limit-definition %} na organização.

Definir o limite de interação no nível da organização sobrescreverá quaisquer limites de interação definidos para repositórios individuais pertencentes à organização. Para definir diferentes limites de interação para repositórios individuais pertencentes à organização, use os pontos de extremidade das interações do [Repositório](#repository).
