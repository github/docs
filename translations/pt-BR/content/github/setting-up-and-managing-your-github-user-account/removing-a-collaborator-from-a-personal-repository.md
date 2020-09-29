---
title: Remover um colaborador de um repositório pessoal
intro: 'Quando você remove um colaborador do projeto, ele perde o acesso de leitura/gravação ao repositório. Se o repositório for privado e o colaborador tiver criado uma bifurcação, essa bifurcação também será excluída.'
redirect_from:
  - /articles/how-do-i-remove-a-collaborator/
  - /articles/what-happens-when-i-remove-a-collaborator-from-my-private-repository/
  - /articles/removing-a-collaborator-from-a-private-repository/
  - /articles/deleting-a-private-fork-of-a-private-user-repository/
  - /articles/how-do-i-delete-a-fork-of-my-private-repository/
  - /articles/removing-a-collaborator-from-a-personal-repository
product: '{% data reusables.gated-features.user-repo-collaborators %}'
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

### Excluir bifurcações de repositórios privados

Apesar de as bifurcações de repositórios privados serem excluídas quando um colaborador é removido, o colaborador mantém todos os clones locais do seu repositório.

### Remover as permissões de colaborador de um usuário que está contribuindo em um repositório

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% if currentVersion == "free-pro-team@latest" %}
{% data reusables.repositories.navigate-to-manage-access %}
4. À direita do colaborador que deseja remover, clique em
{% octicon "trashcan" aria-label="The trashcan icon" %}.
  ![Botão para remover o colaborador](/assets/images/help/repository/collaborator-remove.png)
{% else %}
3. Na barra lateral esquerda, clique em **Collaborators & teams** (Colaboradores e equipes). ![Guia Collaborators (Colaboradores)](/assets/images/help/repository/repo-settings-collaborators.png)
4. Clique no ícone de **X** ao lado do colaborador que deseja remover. ![Link de remoção](/assets/images/help/organizations/Collaborator-Remove.png)
{% endif %}

### Leia mais

- "[Remover integrantes da organização de uma equipe](/articles/removing-organization-members-from-a-team)"
- "[Remover um colaborador externo de um repositório da organização](/articles/removing-an-outside-collaborator-from-an-organization-repository)"
