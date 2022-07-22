---
title: Understanding billing for GitHub Codespaces
intro: 'Saiba como seu uso de {% data variables.product.prodname_github_codespaces %} é cobrado.'
versions:
  fpt: '*'
  ghec: '*'
redirect_from:
  - /github/developing-online-with-codespaces/about-billing-for-codespaces
  - /codespaces/getting-started-with-codespaces/about-billing-for-codespaces
  - /codespaces/codespaces-reference/about-billing-for-codespaces
  - /codespaces/codespaces-reference/understanding-billing-for-codespaces
type: reference
topics:
  - Codespaces
  - Billing
product: '{% data reusables.gated-features.codespaces %}'
shortTitle: Entendendo a cobrança
---

Este artigo explica como a cobrança funciona para seus codespaces e explica como o gerente de cobrança da sua organização pode ajudar.

## Obtendo acesso a {% data variables.product.prodname_github_codespaces %}

O administrador da sua organização pode limitar o uso de {% data variables.product.prodname_github_codespaces %} para apenas contas pessoais específicas. Para obter acesso, você deverá entrar em contato com o gerente de faturamento. Para obter mais informações, consulte "[Gerenciar acesso e segurança para seus codespaces](/codespaces/managing-your-codespaces/managing-access-and-security-for-your-codespaces)".

## Quanto custa usar {% data variables.product.prodname_codespaces %}

Para ver os preços para uso de {% data variables.product.prodname_codespaces %}, consulte "[Preços de {% data variables.product.prodname_codespaces %}](/billing/managing-billing-for-github-codespaces/about-billing-for-codespaces#codespaces-pricing)"

## Como é feita a cobrança do seu codespace

A cobrança do seu codespace é feita por minutos de computação e para a quantidade de armazenamento que usa no disco.

Se você habilitar a pré-criação de códigos, isso acarretará custos adicionais. Para obter mais informações, consulte "[Sobre pré-compilações de {% data variables.product.prodname_github_codespaces %}](/codespaces/prebuilding-your-codespaces/about-github-codespaces-prebuilds#about-billing-for-codespaces-prebuilds)".

### Ententendo quais minutos de computação são
A cobrança do seu codespace é feita pelo número de minutos ativos. Se sua janela de codespace estiver inativa por 30 minutos, ela será desligada automaticamente, e o cálculo da cobrança para o codespace terminará até que você inicie o codespace novamente.

### Entender como o armazenamento de código é cobrado
Para o {% data variables.product.prodname_github_codespaces %}, o armazenamento é definido para incluir todos os arquivos relacionados ao seu codespace, como o repositório clonado, arquivos de configuração e extensões, entre outros. Este armazenamento é cobrado enquanto seu codespace é fechado. A cobrança de armazenamento de um código termina quando você o exclui manualmente de https://github.com/codespaces.

## Como os limites de gastos funcionam

Antes de sua organização poder usar {% data variables.product.prodname_codespaces %}, seu gerente de cobrança deverá definir um limite de gastos. Para obter mais informações, consulte "[Gerenciando limites de gastos para {% data variables.product.prodname_github_codespaces %}](/billing/managing-billing-for-github-codespaces/managing-spending-limits-for-github-codespaces)".

## Exportar alterações quando você atingir seu limite de gastos

{% data reusables.codespaces.exporting-changes %}

## Verificando o uso e limites atuais
Se você precisar verificar seu limite de uso atual ou de gastos, entre em contato com o gerente de cobrança da sua organização. Para obter mais informações, consulte "[Visualizar o uso do seu {% data variables.product.prodname_github_codespaces %}](/billing/managing-billing-for-github-codespaces/viewing-your-github-codespaces-usage)".

## Os codespaces podem ser excluídos automaticamente

Seu código será automaticamente excluído quando você for removido de uma organização ou repositório.

## Excluindo seus codespaces não utilizados

Você pode excluir manualmente os seus codespaces em https://github.com/codespaces e de dentro de {% data variables.product.prodname_vscode %}. Para reduzir o tamanho de um codespace, você pode excluir arquivos manualmente usando o terminal ou de dentro de {% data variables.product.prodname_vscode %}.

## Leia mais

- "[Managing billing for {% data variables.product.prodname_github_codespaces %} in your organization](/codespaces/managing-codespaces-for-your-organization/managing-billing-for-github-codespaces-in-your-organization)"
