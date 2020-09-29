---
title: Habilitar push forçado para um branch protegido
intro: Você pode permitir push forçado em um branch protegido.
product: '{% data reusables.gated-features.protected-branches %}'
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.20'
---

Qualquer pessoa com permissões de administrador em um repositório pode habilitar push forçado.

### Sobre push forçado para branches protegidos

Por padrão, pushes forçados são bloqueados em todos os branches protegidos. Quando você habilitar push forçado em um branch protegido, qualquer pessoa com, pelo menos, permissões de gravação no repositório pode forçar o push ao branch, incluindo aqueles com permissões de administrador.

Habilitar push forçado não irá substituir quaisquer outras regras de proteção de branch. Por exemplo, se um branch exigir um histórico de commit linear, você não poderá forçar commits a mesclar commits para esse branch.

{% if currentVersion != "free-pro-team@latest" %}Você não pode habilitar pushes forçados para um branch protegido se um administrador do site bloquear push forçados para todos os branches do seu repositório. Para obter mais informações, consulte "[Bloqueando push forçado para repositórios de propriedade de uma conta de usuário ou organização](/enterprise/{{ currentVersion }}/admin/developer-workflow/blocking-force-pushes-to-repositories-owned-by-a-user-account-or-organization)."

Se um administrador do site bloquear pushes forçados apenas para o branch padrão, você ainda pode habilitar pushes forçados para qualquer outro branch protegido.{% endif %}

{% data reusables.repositories.protected-branches-options %}

### Habilitando pushes forçados

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.repositories.repository-branches %}
{% data reusables.repositories.add-branch-protection-rules %}
6. Em "Regras aplicadas a todos incluindo administradores", selecione **Permitir pushes forçados**. ![Permitir opção push forçado](/assets/images/help/repository/allow-force-pushes.png)
7. Clique em **Criar**.
