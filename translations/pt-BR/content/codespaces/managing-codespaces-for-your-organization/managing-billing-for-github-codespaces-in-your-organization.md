---
title: Gerenciando a cobrança do GitHub Codespaces em sua organização
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

- **Uso do armazenamento:**  Para fins de cobrança de {% data variables.product.prodname_codespaces %}, isto inclui todo o armazenamento usado por todos os codespaces da sua conta. Isto inclui todos os codespacess usados pelos repositórios clonados, arquivos de configuração e extensões, entre outros. Estes montantes totais são comunicados diariamente ao serviço de cobrança e são cobrados mensalmente. No final do mês, {% data variables.product.prodname_dotcom %} arredonda seu armazenamento para o MB mais próximo. Para verificar quantos minutos de computação e armazenamento em GB foram usados por {% data variables.product.prodname_codespaces %}, consulte "[Visualizando seu uso do {% data variables.product.prodname_github_codespaces %} "](/billing/managing-billing-for-github-codespaces/viewing-your-github-codespaces-usage)."

## Desabilitando ou limitando {% data variables.product.prodname_codespaces %}

Você pode desabilitar todo o uso de {% data variables.product.prodname_github_codespaces %} que seria cobrado da sua organização. Como alternativa, você pode especificar quais integrantes ou colaboradores da organização podem usar o {% data variables.product.prodname_codespaces %} às custas da sua organização. Para obter mais informações, consulte "[Habilitando {% data variables.product.prodname_github_codespaces %} para a sua organização](/codespaces/managing-codespaces-for-your-organization/enabling-github-codespaces-for-your-organization)".

{% data reusables.codespaces.codespaces-disabling-org-billing %}

Você pode configurar quais repositórios podem ser acessados a partir de codespaces criados para um repositório específico. Para obter mais informações, consulte "[Gerenciar o acesso a outros repositórios dentro de seu codespace](/codespaces/managing-your-codespaces/managing-repository-access-for-your-codespaces)".

Você pode limitar a escolha de tipos de máquinas que estão disponíveis para codespaces criados a partir de repositórios pertencentes à organização. Isso permite que você evite que as pessoas usem máquinas com recursos excessivos em seus codespaces e incorram em custos desnecessários. Para obter mais informações, consulte "[Restringindo o acesso aos tipos de máquina](/codespaces/managing-codespaces-for-your-organization/restricting-access-to-machine-types)."

Você também pode restringir quanto tempo um codespace pode não ser usado antes de ser automaticamente excluído. Isso pode ajudar a reduzir os custos de armazenamento para {% data variables.product.prodname_codespaces %}. Para obter mais informações, consulte "[Restringindo o período de retenção para codespaces](/codespaces/managing-codespaces-for-your-organization/restricting-the-retention-period-for-codespaces)".

## Excluindo codespaces não utilizados

Seus usuários podem excluir seus codespaces em https://github.com/codespaces e de dentro de {% data variables.product.prodname_vscode %}. Para reduzir o tamanho de um codespace, os usuários podem excluir arquivos manualmente usando o terminal ou de dentro de {% data variables.product.prodname_vscode_shortname %}.

{% note %}

**Observação:** Os codespaces são excluídos automaticamente depois de terem sido interrompidos e permanecerem inativos por um número definido de dias. Para obter mais informações, consulte "[Restringindo o período de retenção para codespaces](/codespaces/managing-codespaces-for-your-organization/restricting-the-retention-period-for-codespaces)". Um codespace só pode ser excluído manualmente pela pessoa que o criou.

{% endnote %}
