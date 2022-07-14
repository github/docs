---
title: Managing billing for GitHub Codespaces in your organization
shortTitle: Gerenciar faturamento
intro: 'Você pode verificar seu uso de {% data variables.product.prodname_github_codespaces %} e definir os limites de uso.'
product: '{% data reusables.gated-features.codespaces %}'
permissions: 'To manage billing for {% data variables.product.prodname_github_codespaces %} for an organization, you must be an organization owner or a billing manager.'
versions:
  fpt: '*'
  ghec: '*'
type: reference
topics:
  - Codespaces
  - Billing
redirect_from:
  - /codespaces/managing-codespaces-for-your-organization/managing-billing-for-codespaces-in-your-organization
---

## Visão Geral

Para saber mais sobre os preços para {% data variables.product.prodname_github_codespaces %}, consulte "[Preços de {% data variables.product.prodname_codespaces %}](/billing/managing-billing-for-github-codespaces/about-billing-for-codespaces#codespaces-pricing)".

{% data reusables.codespaces.codespaces-billing %}

- Como proprietário de uma organização ou gerente de cobrança, você pode gerenciar a cobrança de {% data variables.product.prodname_codespaces %} para a sua organização: ["Sobre cobrança para codespaces"](/billing/managing-billing-for-github-codespaces/about-billing-for-codespaces)

- Para os usuários, há um guia que explica como a cobrança funciona: ["Entendendo a cobrança para codespace"](/codespaces/codespaces-reference/understanding-billing-for-codespaces)

## Limites de uso

Você pode definir um limite de uso para os codespaces na sua organização ou repositório. Este limite é aplicado ao uso de computação e armazenamento para {% data variables.product.prodname_github_codespaces %}:

- **Minutos de cálculo:** Uso do cálculo é feito pelo número real de minutos usados por todas as instâncias de {% data variables.product.prodname_codespaces %} enquanto estão ativas. Estes montantes totais são comunicados diariamente ao serviço de cobrança e são cobrados mensalmente. Você pode definir um limite de gastos para uso de {% data variables.product.prodname_codespaces %} na sua organização. Para obter mais informações, consulte "[Gerenciando limites de gastos para {% data variables.product.prodname_github_codespaces %}](/billing/managing-billing-for-github-codespaces/managing-spending-limits-for-github-codespaces)".

- **Uso do armazenamento:**  Para fins de cobrança de {% data variables.product.prodname_codespaces %}, isto inclui todo o armazenamento usado por todos os codespaces da sua conta. Isto inclui todos os codespacess usados pelos repositórios clonados, arquivos de configuração e extensões, entre outros. Estes montantes totais são comunicados diariamente ao serviço de cobrança e são cobrados mensalmente. No final do mês, {% data variables.product.prodname_dotcom %} arredonda seu armazenamento para o MB mais próximo. To check how many compute minutes and storage GB have been used by {% data variables.product.prodname_codespaces %}, see "[Viewing your {% data variables.product.prodname_github_codespaces %} usage"](/billing/managing-billing-for-github-codespaces/viewing-your-github-codespaces-usage)."

## Desabilitando ou limitando {% data variables.product.prodname_codespaces %}

É possível desabilitar o uso de {% data variables.product.prodname_codespaces %} na sua organização ou repositório. Para obter mais informações, consulte "[Gerenciar acesso ao repositório para os codespaces da sua organização](/codespaces/managing-codespaces-for-your-organization/managing-access-and-security-for-your-organizations-codespaces)".

Você também pode limitar os usuários individuais que podem usar {% data variables.product.prodname_codespaces %}. Para obter mais informações, consulte "[Gerenciando permissões de usuário para sua organização](/codespaces/managing-codespaces-for-your-organization/managing-user-permissions-for-your-organization)".

É possível limitar a escolha dos tipos de máquina que estão disponíveis para repositórios pertencentes à sua organização. Isso permite evitar que as pessoas usem máquinas com recursos excessivos para seus codespaces. Para obter mais informações, consulte "[Restringindo o acesso aos tipos de máquina](/codespaces/managing-codespaces-for-your-organization/restricting-access-to-machine-types)."

## Excluindo codespaces não utilizados

Seus usuários podem excluir seus codespaces em https://github.com/codespaces e de dentro de {% data variables.product.prodname_vscode %}. Para reduzir o tamanho de um codespace, os usuários podem excluir arquivos manualmente usando o terminal ou de dentro de {% data variables.product.prodname_vscode_shortname %}.

{% note %}

**Observação:** Somente a pessoa que criou um codespace pode excluí-lo. Atualmente, não há forma de os proprietários da organização excluírem os codespaces criados dentro de sua organização.

{% endnote %}
