---
title: Sobre assinatura de commit obrigatória
intro: A assinatura de commit obrigatória garante que colaboradores possam fazer push apenas de commits assinados e verificados em um branch protegido.
product: '{% data reusables.gated-features.protected-branches %}'
redirect_from:
  - /articles/about-required-commit-signing
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---

Se você aplicou proteções de branch no repositório, será possível configurar a assinatura de commit obrigatória. Para obter mais informações, consulte "[Configurar branches protegidos](/articles/configuring-protected-branches/)".

Ao habilitar a assinatura de commit obrigatória em um branch, os contribuidores {% if currentVersion == "free-pro-team@latest" %}e bots{% endif %} só podem fazer push de commits que foram assinados e verificados no branch. Para obter mais informações, consulte "[Sobre verificação de assinatura commit](/articles/about-commit-signature-verification)".

Você sempre pode fazer push de commits locais para o branch se os commits forem assinados e verificados. {% if currentVersion == "free-pro-team@latest" %}Você também pode fazer merge de commits assinados e verificados no branch usando um pull request em {% data variables.product.product_name %}. No entanto, você não pode realizar a combinação por squash e fazer o merge de um pull request no branch em {% data variables.product.product_name %} a menos que você seja o autor do pull request.{% else %}No entanto, você não pode fazer merge de pull requests no branch em {% data variables.product.product_name %}.{% endif %} Você pode {% if currentVersion == "free-pro-team@latest" %}fazer combinação por squash e {% endif %} fazer merge de pull requests localmente. Para obter mais informações, consulte "[Verificar de pull requests localmente](/github/collaborating-with-issues-and-pull-requests/checking-out-pull-requests-locally). {% if currentVersion == "free-pro-team@latest" %} Para obter mais informações sobre métodos de merge, consulte "[Sobre métodos de merge em {% data variables.product.prodname_dotcom %}](/github/administering-a-repository/about-merge-methods-on-github).{% endif %}

{% note %}

**Observação:** habilitar a assinatura de commit obrigatória em um branch tornará a contribuição mais difícil. Se um colaborador fizer push de um commit não assinado em um branch que tenha a assinatura de commit obrigatória habilitada, ele precisará fazer rebase do respectivo commit para incluir uma assinatura verificada e forçar o push do commit regravado para o branch.

{% endnote %}

Os administradores de um repositório podem fazer push de commits locais que não tenham sido assinados e verificados. No entanto, você pode exigir que os administradores estejam sujeitos à assinatura de commit obrigatória. Para obter mais informações, consulte "[Habilitar a assinatura de commit obrigatória](/articles/enabling-required-commit-signing)".

### Leia mais

- "[Sobre branches protegidos](/articles/about-protected-branches)"
