---
title: Habilitando a exclusão de um branch protegido
intro: Você pode permitir que qualquer pessoa com acesso de gravação para um repositório exclua um branch protegido.
product: '{{ site.data.reusables.gated-features.protected-branches }}'
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.20'
---

Qualquer pessoa com permissões de administrador em um repositório pode habilitar exclusões de branch.

Por padrão, você não pode excluir um branch protegido. Quando você habilitar a exclusão de um branch protegido, qualquer pessoa com, pelo menos, permissões de gravação no repositório pode excluir o branch, incluindo aqueles com permissões de administrador.

{{ site.data.reusables.repositories.protected-branches-options }}

{{ site.data.reusables.repositories.navigate-to-repo }}
{{ site.data.reusables.repositories.sidebar-settings }}
{{ site.data.reusables.repositories.repository-branches }}
{{ site.data.reusables.repositories.add-branch-protection-rules }}
6. Em "Regras aplicadas a todos incluindo administradores", selecione **Permitir exclusões**. ![Permitir a opção de exclusão de branch](/assets/images/help/repository/allow-branch-deletions.png)
7. Clique em **Criar**.
