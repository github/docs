---
title: Interações da organização
shortTitle: organização
intro: 'A API de interações da organização permite que os proprietários da organização restrinjam temporariamente qual tipo de usuário pode comentar, abrir problemas ou criar pull requests nos repositórios públicos da organização.'
versions:
  fpt: '*'
  ghec: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
allowTitleToDifferFromFilename: true
---

## Sobre a API de interações da organização

A API de interações da organização permite que os proprietários da organização restrinjam temporariamente qual tipo de usuário pode comentar, abrir problemas ou criar pull requests nos repositórios públicos da organização. {% data reusables.interactions.interactions-detail %} Veja mais sobre os tipos de usuários de {% data variables.product.product_name %}:

* {% data reusables.interactions.existing-user-limit-definition %} na organização.
* {% data reusables.interactions.contributor-user-limit-definition %} na organização.
* {% data reusables.interactions.collaborator-user-limit-definition %} na organização.

Definir o limite de interação no nível da organização sobrescreverá quaisquer limites de interação definidos para repositórios individuais pertencentes à organização. Para definir diferentes limites de interação para repositórios individuais pertencentes à organização, use os pontos de extremidade das interações do [Repositório](#repository).
