---
title: O que acontece com as bifurcações quando um repositório é excluído ou muda de visibilidade?
intro: A exclusão do repositório ou a mudança na visibilidade dele afeta as bifurcações desse repositório.
redirect_from:
  - /github/collaborating-with-issues-and-pull-requests/working-with-forks/what-happens-to-forks-when-a-repository-is-deleted-or-changes-visibility
  - /articles/changing-the-visibility-of-a-network
  - /articles/what-happens-to-forks-when-a-repository-is-deleted-or-changes-visibility
  - /github/collaborating-with-issues-and-pull-requests/what-happens-to-forks-when-a-repository-is-deleted-or-changes-visibility
  - /github/collaborating-with-pull-requests/working-with-forks/what-happens-to-forks-when-a-repository-is-deleted-or-changes-visibility
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Pull requests
shortTitle: Deleted or changes visibility
ms.openlocfilehash: 95296f33d9163cd1171481386efd0a2351095c39
ms.sourcegitcommit: 468a0323fa636517985a3e08e2772dbb0545cab8
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 12/03/2022
ms.locfileid: '148191352'
---
{% data reusables.repositories.deleted_forks_from_private_repositories_warning %}

## Excluir um repositório privado

Quando você exclui um repositório privado, todas as bifurcações privadas dele também são excluídas.

{% ifversion fpt or ghes or ghec %}

## Excluir um repositório público

Quando você exclui um repositório público, um dos forks públicos existentes é escolhido para ser o novo repositório upstream. Todos os outros repositórios são bifurcados a partir desse upstream e as solicitações de pull subsequentes vão para ele também.

{% endif %}

## Permissões e bifurcações privadas

{% data reusables.repositories.private_forks_inherit_permissions %}

{% ifversion fpt or ghes or ghec %}

## Mudar de repositório público para repositório privado

Se um repositório público passa a ser privado, as bifurcações públicas dele são divididas em uma nova rede. Assim como na exclusão de um repositório público, um dos forks públicos existentes é escolhido para ser o novo repositório upstream, todos os outros repositórios são bifurcados a partir dele As solicitações de pull subsequentes vão para esse repositório também.

Ou seja, os forks de um repositório público permanecerão públicos na própria rede de repositório separada, mesmo depois que o repositório upstream se tornar privado. Isso permite que os proprietários da bifurcação continuem trabalhando e colaborando sem interrupção. Se os forks públicos não forem movidos para uma rede separada dessa forma, os proprietários desses forks precisarão obter as [permissões de acesso](/articles/access-permissions-on-github) apropriadas para efetuar pull das alterações do repositório upstream (agora privado) e enviar solicitações de pull para ele, mesmo que eles não precisavam dessas permissões antes.

{% ifversion ghes or ghae %} Se um repositório público tiver acesso de leitura anônimo do Git habilitado e o repositório passar a ser privado, todos os forks do repositório perderão o acesso de leitura anônimo do Git e retornarão à configuração padrão desabilitada. Se um repositório bifurcado passar a ser público, os administradores dele poderão reabilitar o acesso de leitura anônimo do Git. Para obter mais informações, confira "[Como habilitar o acesso de leitura anônimo do Git para um repositório](/enterprise/user/articles/enabling-anonymous-git-read-access-for-a-repository)".
{% endif %}

### Excluir o repositório privado

Se um repositório público passa ser privado e depois é excluído, as bifurcações públicas dele continuam existindo em uma rede separada.

## Mudar de repositório privado para repositório público

Se um repositório privado passa a ser público, cada um dos forks privados dele é transformado em um repositório privado autônomo e se torna o upstream da própria rede de repositório nova. As bifurcações privadas nunca são transformadas em públicas de forma automática porque podem conter commits confidenciais que não devem ser expostos publicamente.

### Excluir o repositório público

Se um repositório privado passa a ser público e depois é excluído, as bifurcações privadas dele continuam existindo como repositórios privados autônomos em redes separadas.

{% endif %}

{% ifversion ghes or ghec or ghae %}

## Alterar a visibilidade de um repositório interno



Se a política para a sua empresa permitir a bifurcação, qualquer bifurcação de um repositório interno será privado. Se você alterar a visibilidade de um repositório interno, qualquer bifurcação pertencente a uma conta pessoal ou de organização continuará sendo privada.

### Excluir o repositório interno

Se você alterar a visibilidade de um repositório interno e, em seguida, excluir o repositório, as bifurcações continuarão a existir em uma rede separada.

{% endif %}

## Leitura adicional

- "[Como definir a visibilidade do repositório](/articles/setting-repository-visibility)"
- "[Sobre os forks](/pull-requests/collaborating-with-pull-requests/working-with-forks/about-forks)"
- "[Como gerenciar a política de criação de forks para seu repositório](/github/administering-a-repository/managing-the-forking-policy-for-your-repository)"
- "[Como gerenciar a política de criação de forks para sua organização](/organizations/managing-organization-settings/managing-the-forking-policy-for-your-organization)"
- "[Como impor políticas de gerenciamento do repositório na sua empresa](/admin/policies/enforcing-repository-management-policies-in-your-enterprise#enforcing-a-policy-on-forking-private-or-internal-repositories)"
