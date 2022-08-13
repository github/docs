---
title: Exportando alterações para um branch
intro: Este artigo fornece etapas para exportar suas alterações de codespace para um branch.
product: '{% data reusables.gated-features.codespaces %}'
versions:
  fpt: '*'
  ghec: '*'
type: reference
topics:
  - Codespaces
shortTitle: Exportando alterações
---

## Exportando alterações para um branch

Ao usar o {% data variables.product.prodname_github_codespaces %}, você deverá exportar suas alterações para um branch sem carregar o seu codespace.

Isso pode ser útil quando você atingir um limite de gastos [](/billing/managing-billing-for-github-codespaces/managing-spending-limits-for-codespaces) ou tiver um problema geral ao acessar seu código.

Para exportar suas alterações:

1. Acesse a página "Seus codespaces" em [github.com/codespaces](https://github.com/codespaces) ou, em um repositório individual, clique no menu **{% octicon "code" aria-label="The code icon" %} Código**.
2. Clique nas reticências (**...**) à direita do codespace a partir do qual que você deseja exportar.
3. Selecione **{% octicon "git-branch" aria-label="The git branch icon" %} Alterações de exportação para o branch**.

  ![Exportar alterações para um branch](/assets/images/help/codespaces/export-changes-to-a-branch.png)

4. No anúncio emergente, selecione **Criar branch**.
