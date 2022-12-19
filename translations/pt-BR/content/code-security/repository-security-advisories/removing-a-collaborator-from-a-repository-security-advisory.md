---
title: Removendo um colaborador de uma consultoria de segurança de repositório
intro: Ao remover um colaborador de uma consultoria de segurança do repositório, ele perderá acesso de leitura e gravação às discussões e metadados da consultoria de segurança.
redirect_from:
- /github/managing-security-vulnerabilities/removing-a-collaborator-from-a-security-advisory
- /code-security/security-advisories/removing-a-collaborator-from-a-security-advisory
versions:
  fpt: '*'
  ghec: '*'
type: how_to
topics:
- Security advisories
- Vulnerabilities
- Collaboration
shortTitle: Remove collaborators
ms.openlocfilehash: ced0edd0614304c0d33ddd40dce3c6a24a9ffcfd
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/10/2022
ms.locfileid: "145095638"
---
As pessoas com permissões de administrador para uma consultoria de segurança podem remover colaboradores da consultoria de segurança.

{% data reusables.security-advisory.repository-level-advisory-note %}

## Remover um colaborador de uma consultoria de segurança

{% data reusables.repositories.security-advisory-collaborators-public-repositories %}

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-security %} {% data reusables.repositories.sidebar-advisories %}
4. Na lista "consultoria de segurança" clique na consultoria de segurança da qual deseja remover um colaborador.
  ![Aviso de segurança na lista](/assets/images/help/security/security-advisory-in-list.png)
5. No lado direito da página, em "Colaboradores", encontre o nome do usuário ou da equipe que deseja remover da consultoria de segurança.
  ![Colaborador no aviso de segurança](/assets/images/help/security/security-advisory-collaborator.png)
6. Ao lado do colaborador que deseja remover, clique no ícone **X**.
  ![Ícone X para remover o colaborador no aviso de segurança](/assets/images/help/security/security-advisory-remove-collaborator-x.png)

## Leitura adicional

- "[Níveis de permissão para avisos de segurança do repositório](/code-security/repository-security-advisories/permission-levels-for-repository-security-advisories)"
- "[Como adicionar um colaborador a um aviso de segurança do repositório](/code-security/repository-security-advisories/adding-a-collaborator-to-a-repository-security-advisory)"
