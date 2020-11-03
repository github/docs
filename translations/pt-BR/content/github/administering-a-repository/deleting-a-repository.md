---
title: Excluir um repositório
intro: Você poderá excluir qualquer repositório ou bifurcação se for proprietário da organização ou tiver permissões de administrador para o repositório ou a bifurcação. A exclusão de um repositório bifurcado não elimina o repositório upstream.
redirect_from:
  - /delete-a-repo/
  - /deleting-a-repo/
  - /articles/deleting-a-repository
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---

Os {% data reusables.organizations.owners-and-admins-can %} excluem um repositório da organização. Se a opção **Allow members to delete or transfer repositories for this organization** (Permitir que os integrantes excluam ou transfiram repositórios desta organização) tiver sido desabilitada, somente proprietários da organização poderão excluir repositórios da organização. {% data reusables.organizations.new-repo-permissions-more-info %}

{% if currentVersion == "free-pro-team@latest" %}
{% warning %}

**Aviso**: a exclusão de um repositório excluirá **permanentemente** anexos de versão e permissões da equipe. Esta ação **não pode** ser desfeita.

{% endwarning %}
{% endif %}

Lembre-se também que:
- A exclusão de um repositório privado eliminará todas as bifurcações dele.
- A exclusão de um repositório público não eliminará as bifurcações dele.

{% if currentVersion == "free-pro-team@latest" %}
Você pode restaurar alguns repositórios excluídos em até 90 dias. Para obter mais informações, consulte "[Restaurar um repositório excluído](/articles/restoring-a-deleted-repository)".
{% endif %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
2. Em Danger Zone (Zona de perigo), clique em **Delete this repository** (Excluir este repositório). ![Botão Repository deletion (Exclusão de repositório)](/assets/images/help/repository/repo-delete.png)
3. **Leia os avisos**.
4. Digite o nome do repositório que deseja excluir para verificar se está eliminando o correto. ![Etiquetagem de exclusão](/assets/images/help/repository/repo-delete-confirmation.png)
5. Clique em **I understand the consequences, delete this repository** (Entendi as consequências; exclua este repositório).
