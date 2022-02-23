---
title: Removing a collaborator from a repository security advisory
intro: 'When you remove a collaborator from a repository security advisory, they lose read and write access to the security advisory''s discussion and metadata.'
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
shortTitle: Remover colaboradores
---

As pessoas com permissões de administrador para uma consultoria de segurança podem remover colaboradores da consultoria de segurança.

{% data reusables.security-advisory.repository-level-advisory-note %}

## Remover um colaborador de uma consultoria de segurança

{% data reusables.repositories.security-advisory-collaborators-public-repositories %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-security %}
{% data reusables.repositories.sidebar-advisories %}
4. Na lista "consultoria de segurança" clique na consultoria de segurança da qual deseja remover um colaborador. ![Consultoria de segurança na lista](/assets/images/help/security/security-advisory-in-list.png)
5. No lado direito da página, em "Colaboradores", encontre o nome do usuário ou da equipe que deseja remover da consultoria de segurança. ![Colaborador da consultoria de segurança](/assets/images/help/security/security-advisory-collaborator.png)
6. Clique no ícone de **X** ao lado do colaborador que deseja remover. ![Ícone X para remover o colaborador da consultoria de segurança](/assets/images/help/security/security-advisory-remove-collaborator-x.png)

## Leia mais

- "[Permission levels for repository security advisories](/code-security/repository-security-advisories/permission-levels-for-repository-security-advisories)"
- "[Adding a collaborator to a repository security advisory](/code-security/repository-security-advisories/adding-a-collaborator-to-a-repository-security-advisory)"
