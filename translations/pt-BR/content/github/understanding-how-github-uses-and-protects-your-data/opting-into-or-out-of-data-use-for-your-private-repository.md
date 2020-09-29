---
title: Aceitar ou recusar o uso de dados no repositório privado
intro: 'Para ajudar o {% data variables.product.product_name %} a conectar você a ferramentas, pessoas, projetos e informações relevantes, você pode aceitar o uso de dados no repositório privado. Se você aceitou o uso de dados em seu repositório privado e não quer mais que o {% data variables.product.product_name %} use seus dados, você pode recusar.'
redirect_from:
  - /articles/opting-into-or-out-of-data-use-for-your-private-repository
versions:
  free-pro-team: '*'
---

### About data use for your private repository

Ao aceitar o uso de dados no seu repositório privado, você poderá acessar o gráfico de dependências, que possibilita o rastreamento das dependências do repositório e o recebimento de alertas de segurança quando o {% data variables.product.product_name %} detecta dependências vulneráveis. Para obter mais informações, consulte "[Sobre alertas de segurança para dependências vulineráveis](/articles/about-security-alerts-for-vulnerable-dependencies)"

{% data reusables.repositories.you-can-enable-or-disable-security-features %}

### Aceitar o uso de dados no repositório privado

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
3. Em "Data services" (Serviços de Dados), selecione **Allow {% data variables.product.prodname_dotcom %} to perform read-only analysis of this repository** (Permitir que o {% data variables.product.prodname_dotcom %} faça análises somente leitura neste repositório) . ![Caixa de seleção para permitir que o {% data variables.product.prodname_dotcom %} faça análises somente leitura neste repositório](/assets/images/help/repository/private-repo-data-use-opt-in.png)
4. Opcionalmente, marque a caixa de seleção ao lado de cada serviço adicional para o qual você deseja habilitar o uso de dados. ![Lista de serviços adicionais com as suas próprias caixas de seleção](/assets/images/help/repository/private-repo-data-use-additional-services.png)

### Recusar o uso de dados no repositório privado

{% tip %}

**Dica:** para recusar o uso de dados em serviços específicos, desmarque a caixa de seleção ao lado do serviço.

{% endtip %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
3. Em "Data services" (Serviços de Dados), desmarque **Allow {% data variables.product.prodname_dotcom %} to perform read-only analysis of this repository** (Permitir que o {% data variables.product.prodname_dotcom %} faça análises somente leitura neste repositório) . ![Caixa de seleção para não permitir que o {% data variables.product.prodname_dotcom %} faça análises somente leitura neste repositório](/assets/images/help/repository/private-repo-data-use-opt-out.png)

### Leia mais

- "[Sobre o uso de seus dados pelo {% data variables.product.prodname_dotcom %}](/articles/about-github-s-use-of-your-data)"
- "[Exibir e atualizar dependências vulneráveis no repositório](/articles/viewing-and-updating-vulnerable-dependencies-in-your-repository)"
- "[Gerenciar alertas para dependências vulneráveis nos repositórios da sua organização](/articles/managing-alerts-for-vulnerable-dependencies-in-your-organization-s-repositories)"
