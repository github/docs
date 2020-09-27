---
title: Sobre branches protegidos e verificações de status obrigatórias
intro: 'Branches protegidos garantem que os colaboradores de um repositório não consigam fazer alterações irreversíveis nos branches. As verificações de status obrigatórias garantem que todos os testes de CI sejam aprovados antes que os colaboradores possam fazer alterações em um branch protegido. Os branches dentro de repositórios pertencentes a organizações podem ser configurados de forma que somente determinados usuários {% if currentVersion ver_gt "enterprise-server@2.18" %}{% else %}, {% endif %} equipes{% if currentVersion ver_gt "enterprise-server@2.18" %} ou aplicativos{% endif %} possam fazer push em um branch.'
redirect_from:
  - /enterprise/admin/developer-workflow/about-protected-branches-and-required-status-checks
versions:
  enterprise-server: '*'
---

Os *branches protegidos* bloqueiam vários recursos do Git nos branches que o administrador decidir proteger. Em um branch protegido, os usuários não podem:

* Usar pushes forçados;
* Fazer exclusões;
* Fazer merge das alterações até a [aprovação das verificações de status exigidas](/enterprise/{{ currentVersion }}/admin/guides/developer-workflow/configuring-protected-branches-and-required-status-checks#enabling-required-status-checks).

Qualquer pessoa com permissões de administrador para um repositório tem acesso livre para fazer push em um branch protegido. Se você habilitar *restrições de branch*, apenas usuários{% if currentVersion ver_gt "enterprise-server@2.18" %}{% else %},{% endif %} equipes{% if currentVersion ver_gt "enterprise-server@2.18" %} ou aplicativos{% endif %} que receberam permissões podem fazer push para um branch protegido. Para obter mais informações, consulte "[Configurar branches protegidos e verificações de status obrigatórias](/enterprise/{{ currentVersion }}/admin/guides/developer-workflow/configuring-protected-branches-and-required-status-checks)".

![Permissões de branch restritas](/assets/images/help/repository/restrict-branch-users.png).

{% tip %}

**Observação:** Se a opção "Include administrators" (Incluir administradores) estiver selecionada e você [tiver habilitado as verificações de status obrigatórias](/articles/enabling-required-status-checks) no branch e elas falharem, qualquer tentativa de fazer push das alterações no branch protegido também falhará, mesmo para pessoas{% if currentVersion ver_gt "enterprise-server@2.18" %} e aplicativos{% endif %} com permissões de administrador.

{% endtip %}
