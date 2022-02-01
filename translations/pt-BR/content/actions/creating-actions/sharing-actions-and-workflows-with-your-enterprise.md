---
title: Compartilhando ações e fluxos de trabalho com sua empresa
intro: É possível compartilhar uma ação ou fluxo de trabalho com a empresa sem publicar a ação ou fluxo de trabalho publicamente.
versions:
  feature: internal-actions
type: tutorial
topics:
  - Actions
  - Action development
shortTitle: Compartilhe com sua empresa
---

{% note %}

**Observação:** Permitir que os fluxos de trabalho acessem as ações em repositórios internos está atualmente na versão beta e sujeito a alterações.

{% endnote %}

## Sobre o acesso de {% data variables.product.prodname_actions %} a repositórios internos

Se sua organização pertence a uma conta corporativa, você pode compartilhar ações e fluxos de trabalho dentro de sua empresa, sem publicar a ação ou fluxo de trabalho publicamente, permitindo que os fluxos de trabalho de {% data variables.product.prodname_actions %} acessem um repositório interno que contém a ação ou o fluxo de trabalho.

Todas as ações ou fluxos de trabalho armazenados no repositório interno podem ser usados em fluxos de trabalho definidos em outros repositórios privados e internos pertencentes à mesma organização ou por qualquer organização pertencente à empresa. As ações e fluxos de trabalho armazenados em repositórios internos não podem ser usados em repositórios públicos.

{% warning %}

**Aviso**: {% data reusables.actions.outside-collaborators-internal-actions %}

{% endwarning %}

## Compartilhando ações e fluxos de trabalho com sua empresa

1. Armazenar a ação ou fluxo de trabalho em um repositório interno. Para obter mais informações, consulte "[Sobre repositórios](/repositories/creating-and-managing-repositories/about-repositories#about-internal-repositories)".
1. Configure o repositório para permitir acesso a fluxos de trabalho em outros repositórios privados ou internos. Para obter mais informações, consulte "[Gerenciar configurações de {% data variables.product.prodname_actions %} para um repositório](/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/managing-github-actions-settings-for-a-repository#allowing-access-to-components-in-an-internal-repository)".

## Leia mais

- "[Sobre contas corporativas](/admin/overview/about-enterprise-accounts)"
- "[Reutilizando fluxos de trabalho](/actions/using-workflows/reusing-workflows)"
