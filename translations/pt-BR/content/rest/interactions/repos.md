---
title: Repository interactions
shortTitle: Repositório
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

The Repository interactions API allows people with owner or admin access to temporarily restrict which type of user can comment, open issues, or create pull requests in a public repository. {% data reusables.interactions.interactions-detail %} Veja mais sobre os tipos de usuários de {% data variables.product.product_name %}:

* {% data reusables.interactions.existing-user-limit-definition %} in the respository.
* {% data reusables.interactions.contributor-user-limit-definition %} in the respository.
* {% data reusables.interactions.collaborator-user-limit-definition %} in the respository.

Se um limite de interação for habilitado para o usuário ou organização proprietária do repositório, o limite não poderá ser alterado para o repositório individual. Em vez disso, use os pontos de extremidade de [Usuário](#user) ou [Organização](#organization) para alterar o limite de interação.
