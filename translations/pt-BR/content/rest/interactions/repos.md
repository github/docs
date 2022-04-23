---
title: Repositório
intro: 'A API de Interações do Repositório permite que pessoas com acesso de proprietário ou administrador restrinjam temporariamente qual tipo de usuário pode comentar, abrir problemas ou criar pull requests em um repositório público.'
versions:
  fpt: '*'
  ghec: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
allowTitleToDifferFromFilename: true
---

{% data reusables.interactions.interactions-detail %} Veja mais sobre os tipos de usuários de {% data variables.product.product_name %}:

* {% data reusables.interactions.existing-user-limit-definition %} in the respository.
* {% data reusables.interactions.contributor-user-limit-definition %} in the respository.
* {% data reusables.interactions.collaborator-user-limit-definition %} in the respository.

Se um limite de interação for habilitado para o usuário ou organização proprietária do repositório, o limite não poderá ser alterado para o repositório individual. Em vez disso, use os pontos de extremidade de [Usuário](#user) ou [Organização](#organization) para alterar o limite de interação.
