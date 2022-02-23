---
title: Adding a collaborator to a repository security advisory
intro: É possível adicionar outros usuários ou equipes para colaborar em uma consultoria de segurança com você.
redirect_from:
  - /articles/adding-a-collaborator-to-a-maintainer-security-advisory
  - /github/managing-security-vulnerabilities/adding-a-collaborator-to-a-maintainer-security-advisory
  - /github/managing-security-vulnerabilities/adding-a-collaborator-to-a-security-advisory
  - /code-security/security-advisories/adding-a-collaborator-to-a-security-advisory
versions:
  fpt: '*'
  ghec: '*'
type: how_to
topics:
  - Security advisories
  - Vulnerabilities
  - Collaboration
shortTitle: Add collaborators
---

Todas as pessoas com permissões de administrador para uma consultora de segurança podem adicionar colaboradores à consultora de segurança.

{% data reusables.security-advisory.repository-level-advisory-note %}

## Adicionar um colaborador a uma consultora de segurança

Os colaboradores têm permissões de gravação para a consultoria de segurança. For more information, see "[Permission levels for repository security advisories](/code-security/repository-security-advisories/permission-levels-for-repository-security-advisories)."

{% note %}

{% data reusables.repositories.security-advisory-collaborators-public-repositories %} For more information about removing a collaborator on a security advisory, see "[Removing a collaborator from a repository security advisory](/code-security/repository-security-advisories/removing-a-collaborator-from-a-repository-security-advisory)."

{% endnote %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-security %}
{% data reusables.repositories.sidebar-advisories %}
4. Na lista "consultoria de segurança", clique na consultoria de segurança à qual deseja adicionar um colaborador.
5. No lado direito da página, em "Colaboradores", digite o nome do usuário ou da equipe que você gostaria de adicionar à consultora de segurança. ![Campo para digitar nome de usuário ou equipe](/assets/images/help/security/add-collaborator-field.png)
6. Clique em **Salvar**. ![Botão Add (Adicionar)](/assets/images/help/security/security-advisory-add-collaborator-button.png)

## Leia mais

- "[Permission levels for repository security advisories](/code-security/repository-security-advisories/permission-levels-for-repository-security-advisories)"
- "[Collaborating in a temporary private fork to resolve a repository security vulnerability](/code-security/repository-security-advisories/collaborating-in-a-temporary-private-fork-to-resolve-a-repository-security-vulnerability)"
- "[Removing a collaborator from a repository security advisory](/code-security/repository-security-advisories/removing-a-collaborator-from-a-repository-security-advisory)."
