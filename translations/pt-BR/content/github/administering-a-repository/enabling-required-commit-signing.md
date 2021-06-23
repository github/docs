---
title: Habilitar assinatura de commit obrigatória
intro: Os administradores do repositório podem impor a assinatura de commit obrigatória em um branch para bloquear todos os commits que não estejam assinados e verificados.
product: '{% data reusables.gated-features.protected-branches %}'
redirect_from:
  - /articles/enabling-required-commit-signing
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---

Antes de habilitar assinatura de commit obrigatória em um branch, é preciso primeiro configurá-lo como um branch protegido. Para obter mais informações, consulte "[Configurar branches protegidos](/github/administering-a-repository/configuring-protected-branches)".

{% data reusables.repositories.protected-branches-options %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.repositories.repository-branches %}
{% data reusables.repositories.add-branch-protection-rules %}
5. Selecione **Require signed commits** (Exigir commits assinados). ![Opção Require signed commits (Exigir commits assinados)](/assets/images/help/repository/require-signed-commits.png)
6. Outra opção é selecionar **Include administrators** (Incluir administradores). Isso impõe a exigência de commits assinados nos administradores de repositório. ![Caixa de seleção Include administrators (Incluir administradores)](/assets/images/help/repository/include-admins-protected-branches.png)
7. Clique em **Criar**.
