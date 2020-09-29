---
title: Sobre restrições de branch
intro: 'Os branches em repositórios que pertencem às organizações podem ser configurados para que apenas determinados usuários{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.18" %},{% else %} ou{% endif %} equipes{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.18" %} ou apps{% endif %} possam fazer push no branch.'
product: '{% data reusables.gated-features.branch-restrictions %}'
redirect_from:
  - /articles/about-branch-restrictions
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

Quando você habilita restrições de branch, somente usuários{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.18" %},{% else %} ou{% endif %} equipes{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.18" %}, ou apps{% endif %} que receberam permissão podem fazer push no branch protegido. Quando você habilita restrições de branch, somente usuários{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.18" %},{% else %} ou{% endif %} equipes{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.18" %}, ou apps{% endif %} que receberam permissão podem fazer push no branch protegido. É possível exibir e editar os usuários{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.18" %},{% else %} ou{% endif %} equipes{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.18" %}, ou apps{% endif %} com acesso push a um branch protegido nas configurações do branch protegido.

Você pode dar acesso push a um branch protegido apenas a usuários{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.18" %},{% else %} ou{% endif %} equipes{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.18" %}, ou {% data variables.product.prodname_github_apps %}{% endif %} instalados com acesso `write` a um repositório.

Pessoas{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.18" %} e apps{% endif %} com permissões de administrador a um repositório sempre podem fazer push em um branch protegido.

{% tip %}

**Observação:** se "Include administrators" (Incluir administradores) estiver selecionada, significa que você habilitou as verificações de status obrigatórias no branch, e se quaisquer verificações de status falharem, qualquer tentativa de fazer push de alterações no branch protegido também irá falhar, mesmo para pessoas{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.18" %} e apps{% endif %} com permissões de administrador. Para obter mais informações, consulte "[Habilitando verificações de status obrigatórias](/articles/enabling-required-status-checks)".

{% endtip %}

### Leia mais

- "[Sobre branches protegidos](/articles/about-protected-branches)"
- "[Configurar branches protegidos](/articles/configuring-protected-branches)"
- "[Sobre verificações de status obrigatórias](/articles/about-required-status-checks)"
- "[Habilitar verificações de status obrigatórias](/articles/enabling-required-status-checks)"
