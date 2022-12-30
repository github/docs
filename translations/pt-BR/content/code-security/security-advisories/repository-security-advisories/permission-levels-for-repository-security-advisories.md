---
title: Níveis de permissão para consultorias de segurança do repositório
intro: As ações que você pode tomar em uma consultoria de segurança dependem do fato de você ter permissões de administrador ou de gravação na consultoria de segurança.
redirect_from:
  - /articles/permission-levels-for-maintainer-security-advisories
  - /github/managing-security-vulnerabilities/permission-levels-for-maintainer-security-advisories
  - /github/managing-security-vulnerabilities/permission-levels-for-security-advisories
  - /code-security/security-advisories/permission-levels-for-security-advisories
  - /code-security/repository-security-advisories/permission-levels-for-repository-security-advisories
versions:
  fpt: '*'
  ghec: '*'
type: reference
topics:
  - Security advisories
  - Vulnerabilities
  - Permissions
shortTitle: Permission levels
ms.openlocfilehash: f4195822de121780f1629fda3d646170d4c4e566
ms.sourcegitcommit: 27882d9b3f19979c817c25952a2fb4dc4c6f0a65
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 10/27/2022
ms.locfileid: '148113962'
---
Este artigo aplica-se apenas às consultorias de segurança a nível de repositório. Qualquer pessoa pode contribuir com avisos de segurança global no {% data variables.product.prodname_advisory_database %} em [github.com/advisories](https://github.com/advisories). As edições nas consultorias globais não mudarão ou afetarão a forma como a consultoria aparece no repositório.  Para obter mais informações, confira "[Como editar avisos de segurança no {% data variables.product.prodname_advisory_database %}](/code-security/supply-chain-security/managing-vulnerabilities-in-your-projects-dependencies/editing-security-advisories-in-the-github-advisory-database)".

## Visão geral das permissões

{% data reusables.repositories.security-advisory-admin-permissions %} Para obter mais informações sobre como adicionar um colaborador a um aviso de segurança, confira "[Como adicionar um colaborador a um aviso de segurança do repositório](/code-security/repository-security-advisories/adding-a-collaborator-to-a-repository-security-advisory)".

Ação | Permissões de gravação | Permissões de administrador |
------ | ----------------- | ----------------- |
Veja um rascunho da consultoria de segurança | X | X |
Adicionar colaboradores ao aviso de segurança (confira "[Como adicionar um colaborador a um aviso de segurança do repositório](/code-security/repository-security-advisories/adding-a-collaborator-to-a-repository-security-advisory)") | | X |
Editar e excluir quaisquer comentários na consultoria de segurança | X | X |
Criar um fork privado temporário no aviso de segurança (confira "[Colaboração em um fork privado temporário para resolver uma vulnerabilidade de segurança do repositório](/code-security/repository-security-advisories/collaborating-in-a-temporary-private-fork-to-resolve-a-repository-security-vulnerability)") | | X |
Adicionar alterações a um fork privado temporário no aviso de segurança (confira "[Colaboração em um fork privado temporário para resolver uma vulnerabilidade de segurança do repositório](/code-security/repository-security-advisories/collaborating-in-a-temporary-private-fork-to-resolve-a-repository-security-vulnerability)") | X | X |
Criar solicitações de pull em um fork privado temporário (confira "[Colaboração em um fork privado temporário para resolver uma vulnerabilidade de segurança do repositório](/code-security/repository-security-advisories/collaborating-in-a-temporary-private-fork-to-resolve-a-repository-security-vulnerability)") | X | X |
Mesclar alterações no aviso de segurança (confira "[Colaboração em um fork privado temporário para resolver uma vulnerabilidade de segurança do repositório](/code-security/repository-security-advisories/collaborating-in-a-temporary-private-fork-to-resolve-a-repository-security-vulnerability)") | | X |
Adicionar e editar metadados no aviso de segurança (confira "[Como publicar um aviso de segurança do repositório](/code-security/repository-security-advisories/publishing-a-repository-security-advisory)") | X | X |
Adicionar e remover créditos para um aviso de segurança (confira "[Como editar um aviso de segurança do repositório](/code-security/repository-security-advisories/editing-a-repository-security-advisory)") | X | X |
Fechar o rascunho da consultoria de segurança | | X |
Publicar o aviso de segurança (confira "[Como publicar um aviso de segurança do repositório](/code-security/repository-security-advisories/publishing-a-repository-security-advisory)") | | X |

## Leitura adicional

- "[Como adicionar um colaborador a um aviso de segurança do repositório](/code-security/repository-security-advisories/adding-a-collaborator-to-a-repository-security-advisory)"
- "[Colaboração em um fork privado temporário para resolver uma vulnerabilidade de segurança do repositório](/code-security/repository-security-advisories/collaborating-in-a-temporary-private-fork-to-resolve-a-repository-security-vulnerability)"
- "[Como remover um colaborador de um aviso de segurança do repositório](/code-security/repository-security-advisories/removing-a-collaborator-from-a-repository-security-advisory)"
- "[Como retirar um aviso de segurança do repositório](/code-security/repository-security-advisories/withdrawing-a-repository-security-advisory)"
