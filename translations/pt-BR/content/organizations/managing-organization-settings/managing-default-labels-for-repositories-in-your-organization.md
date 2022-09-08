---
title: Gerenciar etiquetas padrão para repositórios na organização
intro: É possível personalizar as etiquetas que são incluídas em cada repositório novo na organização.
redirect_from:
  - /articles/managing-default-labels-for-repositories-in-your-organization
  - /github/setting-up-and-managing-organizations-and-teams/managing-default-labels-for-repositories-in-your-organization
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: Manage default labels
ms.openlocfilehash: a2591c84d3844bfdadc3c7321d7ce8eec2adf293
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/05/2022
ms.locfileid: '145097270'
---
Os proprietários da organização podem gerenciar as etiquetas padrão para repositórios na organização.

As etiquetas padrão são incluídas em cada repositório novo na organização, mas qualquer pessoa com acesso de gravação ao repositório pode editá-las ou excluí-las nesse repositório mais tarde. Adicionar, editar ou excluir uma etiqueta padrão não adiciona, edita ou exclui essa etiqueta dos repositórios existentes.

## Criar etiquetas padrão

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% data reusables.organizations.repository-defaults %}

5. Em "Rótulos do repositório", clique em **Novo rótulo**.
  ![Botão Novo rótulo](/assets/images/help/organizations/new-label-button.png) {% data reusables.project-management.name-label %} {% data reusables.project-management.label-description %} {% data reusables.project-management.label-color-randomizer %} {% data reusables.project-management.create-label %}

## Editar etiquetas padrão

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% data reusables.organizations.repository-defaults %}

{% data reusables.project-management.edit-label %} {% data reusables.project-management.name-label %} {% data reusables.project-management.label-description %} {% data reusables.project-management.label-color-randomizer %} {% data reusables.project-management.save-label %}

## Excluir etiquetas padrão

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% data reusables.organizations.repository-defaults %}

{% data reusables.project-management.delete-label %} {% data reusables.project-management.confirm-label-deletion %}

## Leitura adicional

- "[Sobre os rótulos](/articles/about-labels)"
