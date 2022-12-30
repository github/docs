---
title: Removendo um colaborador de uma consultoria de segurança de repositório
intro: 'Ao remover um colaborador de uma consultoria de segurança do repositório, ele perderá acesso de leitura e gravação às discussões e metadados da consultoria de segurança.'
redirect_from:
  - /github/managing-security-vulnerabilities/removing-a-collaborator-from-a-security-advisory
  - /code-security/security-advisories/removing-a-collaborator-from-a-security-advisory
  - /code-security/repository-security-advisories/removing-a-collaborator-from-a-repository-security-advisory
versions:
  fpt: '*'
  ghec: '*'
type: how_to
topics:
  - Security advisories
  - Vulnerabilities
  - Collaboration
shortTitle: Remove collaborators
ms.openlocfilehash: 77c21bea9c593935ee1b92028fc52859320f5a38
ms.sourcegitcommit: 27882d9b3f19979c817c25952a2fb4dc4c6f0a65
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 10/27/2022
ms.locfileid: '148113959'
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
