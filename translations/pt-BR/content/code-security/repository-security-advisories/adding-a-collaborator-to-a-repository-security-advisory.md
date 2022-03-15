---
title: Adicionando um colaborador a uma consultoria de segurança de repositório
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
shortTitle: Adicionar colaboradores
---

Todas as pessoas com permissões de administrador para uma consultora de segurança podem adicionar colaboradores à consultora de segurança.

{% data reusables.security-advisory.repository-level-advisory-note %}

## Adicionar um colaborador a uma consultora de segurança

Os colaboradores têm permissões de gravação para a consultoria de segurança. Para obter mais informações, consulte "[Níveis de permissão para consultorias de segurança do repositório](/code-security/repository-security-advisories/permission-levels-for-repository-security-advisories)".

{% note %}

{% data reusables.repositories.security-advisory-collaborators-public-repositories %} Para obter mais informações sobre a remoção de um colaborador em uma consultoria de segurança, consulte "[Removendo um colaborador de uma consultoria de segurança do repositório](/code-security/repository-security-advisories/removing-a-collaborator-from-a-repository-security-advisory)."

{% endnote %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-security %}
{% data reusables.repositories.sidebar-advisories %}
4. Na lista "consultoria de segurança", clique na consultoria de segurança à qual deseja adicionar um colaborador.
5. No lado direito da página, em "Colaboradores", digite o nome do usuário ou da equipe que você gostaria de adicionar à consultora de segurança. ![Campo para digitar nome de usuário ou equipe](/assets/images/help/security/add-collaborator-field.png)
6. Clique em **Salvar**. ![Botão Add (Adicionar)](/assets/images/help/security/security-advisory-add-collaborator-button.png)

## Leia mais

- "[Níveis de permissão para consultoria de segurança do repositório](/code-security/repository-security-advisories/permission-levels-for-repository-security-advisories)"
- "[Colaborando em uma bifurcação privada temporária para resolver uma vulnerabilidade de segurança do repositório](/code-security/repository-security-advisories/collaborating-in-a-temporary-private-fork-to-resolve-a-repository-security-vulnerability)"
- "[Removendo um colaborador de uma consultoria de segurança do repositório](/code-security/repository-security-advisories/removing-a-collaborator-from-a-repository-security-advisory)".
