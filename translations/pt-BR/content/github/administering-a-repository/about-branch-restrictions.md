---
title: Sobre restrições de branch
intro: 'Branches em repositórios pertencentes a organizações podem ser configurados para que apenas determinados usuários{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2. 8" %},{% else %} ou{% endif %} equipes{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2. 8" %} ou aplicativos{% endif %} possam fazer push para o branch.'
product: '{% data reusables.gated-features.branch-restrictions %}'
redirect_from:
  - /articles/about-branch-restrictions
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

Ao habilitar as restrições de branches, apenas usuários, equipes ou aplicativos com permissão podem fazer push para o branch protegido. Quando você habilita restrições de branch, somente usuários{% if page.version == "dotcom" or page.version ver_gt "2.18" %},{% else %} ou{% endif %} equipes{% if page.version == "dotcom" or page.version ver_gt "2.18" %}, ou apps{% endif %} que receberam permissão podem fazer push no branch protegido. Você pode visualizar e editar usuários, equipes ou aplicativos com acesso de push a um branch protegido nas configurações do branch protegido.

Você só pode dar acesso de push a um branch protegido a usuários, equipes ou {% data variables.product.prodname_github_apps %} instalados com acesso de `gravação` a um repositório.

As pessoas e os aplicativos com permissões de administrador em um repositório sempre conseguem fazer push em um branch protegido.

{% tip %}

**Observação:** se "Incluir administradores estiver selecionada, significa que você habilitou as verificações de status obrigatórias no branch, e se quaisquer verificações de status falharem, qualquer tentativa de fazer push de alterações no branch protegido também irá falhar, mesmo para pessoas e aplicativos com permissões de administrador. Para obter mais informações, consulte "[Habilitando verificações de status obrigatórias](/articles/enabling-required-status-checks)".

{% endtip %}

### Leia mais

- "[Sobre branches protegidos](/articles/about-protected-branches)"
- "[Configurar branches protegidos](/articles/configuring-protected-branches)"
- "[Sobre verificações de status obrigatórias](/articles/about-required-status-checks)"
- "[Habilitar verificações de status obrigatórias](/articles/enabling-required-status-checks)"
