---
title: Excluir um repositório
intro: Você poderá excluir qualquer repositório ou bifurcação se for proprietário da organização ou tiver permissões de administrador para o repositório ou a bifurcação. A exclusão de um repositório bifurcado não elimina o repositório upstream.
redirect_from:
  - /delete-a-repo
  - /deleting-a-repo
  - /articles/deleting-a-repository
  - /github/administering-a-repository/deleting-a-repository
  - /github/administering-a-repository/managing-repository-settings/deleting-a-repository
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Repositories
---

Os {% data reusables.organizations.owners-and-admins-can %} excluem um repositório da organização. Se a opção **Allow members to delete or transfer repositories for this organization** (Permitir que os integrantes excluam ou transfiram repositórios desta organização) tiver sido desabilitada, somente proprietários da organização poderão excluir repositórios da organização. {% data reusables.organizations.new-repo-permissions-more-info %}

{% ifversion not ghae %}Excluir um repositório público não excluirá nenhuma bifurcação do repositório.{% endif %}

{% warning %}

**Avisos**:

- Excluir um repositório irá excluir **permanentemente** anexos da versão e permissões da equipe. Esta ação **não pode** ser desfeita.
- Excluir um{% ifversion ghes or ghec or ghae %} privado ou um repositório{% endif %} interno irá excluir todas as bifurcações do repositório.

{% endwarning %}

Alguns repositórios excluídos podem ser restaurados dentro de 90 dias de exclusão. {% ifversion ghes or ghae %}O administrador do seu site pode ser capaz de restaurar um repositório excluído para você. Para obter mais informações, consulte "[Restaurar um repositório excluído](/admin/user-management/managing-repositories-in-your-enterprise/restoring-a-deleted-repository)". {% else %}Para obter mais informações, consulte "[Restaurar um repositório excluído](/articles/restoring-a-deleted-repository)".{% endif %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
2. Em Danger Zone (Zona de perigo), clique em **Delete this repository** (Excluir este repositório). ![Botão Repository deletion (Exclusão de repositório)](/assets/images/help/repository/repo-delete.png)
3. **Leia os avisos**.
4. Digite o nome do repositório que deseja excluir para verificar se está eliminando o correto. ![Etiquetagem de exclusão](/assets/images/help/repository/repo-delete-confirmation.png)
5. Clique em **I understand the consequences, delete this repository** (Entendi as consequências; exclua este repositório).
