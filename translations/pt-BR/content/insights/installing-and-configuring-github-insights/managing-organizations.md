---
title: Gerenciar organizações
intro: 'Você pode gerenciar as organizações de {% data variables.product.prodname_enterprise %} que estão incluídas nas métricas.'
product: '{% data reusables.gated-features.github-insights %}'
redirect_from:
  - /github/installing-and-configuring-github-insights/managing-organizations
permissions: 'As pessoas com permissões de administrador no {% data variables.product.prodname_insights %} podem gerenciar organizações.'
versions:
  enterprise-server: '*'
---

### Sobre a gestão da organização

Ao adicionar uma organização ao {% data variables.product.prodname_insights %}, os repositórios pertencentes à organização estão incluídos nas métricas. Você pode optar por adicionar todos os repositórios ou selecionar repositórios específicos para serem adicionados.

Você pode adicionar uma organização ao {% data variables.product.prodname_insights %} se você for proprietário dessa organização em {% data variables.product.prodname_enterprise %}. Se você não for proprietário da organização, você poderá enviar uma solicitação de um proprietário para adicionar a organização ao {% data variables.product.prodname_insights %}.

### Adicionar uma organização ao {% data variables.product.prodname_insights %}

Adicionar uma organização ao {% data variables.product.prodname_insights %} instala o {% data variables.product.prodname_github_app %} para {% data variables.product.prodname_insights %} nessa organização. Para obter mais informações sobre o {% data variables.product.prodname_github_app %}, consulte "[Instalar {% data variables.product.prodname_insights %}](/github/installing-and-configuring-github-insights/installing-github-insights)".

{% data reusables.github-insights.settings-tab %}
{% data reusables.github-insights.repositories-tab %}
{% data reusables.github-insights.add-organizations %}
4. Clique na organização que você deseja adicionar ao {% data variables.product.prodname_insights %}.
5. Selecione se deseja adicionar todos os repositórios ou especificar repositórios a serem incluídos. ![Caixas de seleção para adicionar todos os repositórios ou selecionar repositórios](/assets/images/help/insights/all-or-select-repos.png)
6. Se você optou por instalar o {% data variables.product.product_name %} nos repositórios selecionados, use o menu suspenso e selecione os repositórios que deseja incluir. ![Menu suspenso para selecionar repositórios](/assets/images/help/insights/select-repos.png)
5. Clique em **Instalar** ou **Solicitar**.

### Remover uma organização do {% data variables.product.prodname_insights %}

Remover uma organização do {% data variables.product.prodname_insights %} desinstala o {% data variables.product.prodname_github_app %} para {% data variables.product.prodname_insights %} da organização. Para obter mais informações sobre o {% data variables.product.prodname_github_app %}, consulte "[Instalar {% data variables.product.prodname_insights %}](/github/installing-and-configuring-github-insights/installing-github-insights)".

{% data reusables.github-insights.settings-tab %}
{% data reusables.github-insights.repositories-tab %}
{% data reusables.github-insights.add-organizations %}
4. Clique na organização que você deseja remover do {% data variables.product.prodname_insights %}.
4. Em "Desinstalar o {% data variables.product.prodname_insights %}", clique em **Desinstalar**. ![Botão desinstalar](/assets/images/help/insights/uninstall-button.png)
5. Clique em **OK**.
