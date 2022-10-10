---
title: Configurar regras de proteção para tags
shortTitle: Tag protection rules
intro: Você pode configurar regras de proteção de tags para o repositório para impedir que os colaboradores criem ou excluam tags.
product: '{% data reusables.gated-features.tag-protection-rules %}'
versions:
  fpt: '*'
  ghae: '>= 3.5'
  ghec: '*'
  ghes: '>3.4'
ms.openlocfilehash: 3b7b84cb26d8994c89222b2e4f642592fd45b72f
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/05/2022
ms.locfileid: '147063199'
---
{% note %}

**Observação:** no momento, as regras de proteção de tag estão em versão beta e sujeitas a alterações.

{% endnote %}

Quando você adiciona uma regra de proteção de tags, todas as tags que correspondem ao padrão fornecido serão protegidas. Somente usuários com permissões de administrador ou de manutenção no repositório poderão criar tags protegidas, e apenas usuários com permissões de administrador no repositório poderão excluir tags protegidas. Para obter mais informações, confira "[Funções de repositório de uma organização](/organizations/managing-access-to-your-organizations-repositories/repository-roles-for-an-organization#permissions-for-each-role)". Os {% data variables.product.prodname_github_apps %} exigem a permissão `Repository administration: write` para modificar uma tag protegida.

{% ifversion custom-repository-roles %} Adicionalmente, você pode criar funções personalizadas de repositórios para permitir que outros grupos de usuários criem ou excluam marcações que correspondam às regras de proteção de marcas. Para obter mais informações, confira "[Como gerenciar funções de repositório personalizadas para uma organização](/organizations/managing-peoples-access-to-your-organization-with-roles/managing-custom-repository-roles-for-an-organization)".{% endif %}

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-settings %}
1. Na seção "Código e automação" da barra lateral, clique em **{% octicon "tag" aria-label="The tag icon" %} Tags**.
1. Clique em **Nova regra**.
![Nova regra de proteção de tag](/assets/images/help/repository/new-tag-protection-rule.png)
1. Em "Padrão do nome da tag", digite o padrão das tags que você deseja proteger. Neste exemplo, se você digitar "\*", isso protegerá todas as tags. 
![Definir padrão de proteção de tag](/assets/images/help/repository/set-tag-protection-pattern.png)
1. Clique em **Adicionar regra**.
![Adicionar regra de proteção de tag](/assets/images/help/repository/add-tag-protection-rule.png)
