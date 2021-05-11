---
title: Explorar as dependências de um repositório
intro: 'Você pode usar o gráfico de dependências para ver os pacotes dos quais o seu projeto depende{% if currentVersion == "free-pro-team@latest" %} e os repositórios que dependem dele{% endif %}. Além disso, você pode ver todas as vulnerabilidades detectadas nas suas dependências.'
redirect_from:
  - /articles/listing-the-packages-that-a-repository-depends-on
  - /github/visualizing-repository-data-with-graphs/listing-the-packages-that-a-repository-depends-on
  - /articles/listing-the-projects-that-depend-on-a-repository
  - /github/visualizing-repository-data-with-graphs/listing-the-projects-that-depend-on-a-repository
  - /github/visualizing-repository-data-with-graphs/exploring-the-dependencies-and-dependents-of-a-repository
  - /github/visualizing-repository-data-with-graphs/exploring-the-dependencies-of-a-repository
versions:
  free-pro-team: '*'
  enterprise-server: '>=3.0'
topics:
  - Repositories
---

### Viewing the dependency graph

{% data reusables.repositories.enable-security-alerts %}

O gráfico de dependências mostra as dependências{% if currentVersion == "free-pro-team@latest" %} e dependentes{% endif %} do seu repositório. Para obter informações sobre a detecção de dependências e quais ecossistemas são compatíveis, consulte "[Sobre o gráfico de dependências](/github/visualizing-repository-data-with-graphs/about-the-dependency-graph)".

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.accessing-repository-graphs %}
{% data reusables.repositories.click-dependency-graph %}{% if currentVersion == "free-pro-team@latest" %}
4. Opcionalmente, em "Gráfico de dependência", clique em **Dependentes**. ![Dependents tab on the dependency graph page](/assets/images/help/graphs/dependency-graph-dependents-tab.png){% endif %}

#### Vista de dependências

{% if currentVersion == "free-pro-team@latest" %}
As dependências são agrupadas por ecossistema. Você pode expandir sua dependência para visualizar suas dependências. Para dependências em repositórios públicos hospedadas no {% data variables.product.product_name %}, você também pode clicar em uma dependência para visualizar o repositório. Dependências de repositórios privados, pacotes privados ou arquivos não reconhecidos são exibidos em texto sem formatação.

Se foram detectadas vulnerabilidades no repositório, estas são exibidas na parte superior da visualização para usuários com acesso ao {% data variables.product.prodname_dependabot_alerts %}.

![Gráfico de dependências](/assets/images/help/graphs/dependencies_graph.png)

{% endif %}

{% if enterpriseServerVersions contains currentVersion and currentVersion ver_gt "enterprise-server@2.21" %}
Todas as dependências diretas e indiretas especificadas no manifesto do repositório ou arquivos de bloqueio são listadas e agrupadas pelo ecossistema. Se foram detectadas vulnerabilidades no repositório, estas são exibidas na parte superior da visualização para usuários com acesso ao {% data variables.product.prodname_dependabot_alerts %}.

![Gráfico de dependências](/assets/images/help/graphs/dependencies_graph_server.png)

{% note %}

**Observação:** {% data variables.product.prodname_ghe_server %} não preenche a vista de **Dependentes**.

{% endnote %}

{% endif %}

{% if enterpriseServerVersions contains currentVersion and currentVersion ver_lt "enterprise-server@2.22" %}
Todas as dependências diretas e indiretas especificadas no manifesto do repositório ou arquivos de bloqueio são listadas e agrupadas pelo ecossistema. Se foram detectadas vulnerabilidades no repositório, estas são exibidas na parte superior da visualização para usuários com acesso a alertas de segurança.

![Gráfico de dependências](/assets/images/help/graphs/dependencies_graph_server.png)

{% note %}

**Observação:** {% data variables.product.prodname_ghe_server %} não preenche a vista de **Dependentes**.

{% endnote %}

{% endif %}

{% if currentVersion == "free-pro-team@latest" %}
#### Vista de dependentes

Para repositórios públicos, a vista de dependentes mostra como o repositório é usado por outros repositórios. Para exibir apenas os repositórios que contêm uma biblioteca em um gerente de pacotes, clique em **QUANTIDADE de pacotes** imediatamente acima da lista de repositórios dependentes. A quantidade de dependentes é aproximada e pode nem sempre corresponder aos dependentes listados.

![gráfico de dependentes](/assets/images/help/graphs/dependents_graph.png)

### Habilitar e desabilitar o gráfico de dependências para um repositório privado

Os administradores de repositórios podem habilitar ou desabilitar o gráfico de dependências em repositórios privados.

Você também pode habilitar ou desabilitar o gráfico de dependências para todos os repositórios pertencentes à sua conta de usuário ou organização. For more information, see "[Managing security and analysis settings for your user account](/github/setting-up-and-managing-your-github-user-account/managing-security-and-analysis-settings-for-your-user-account)" or "[Managing security and analysis settings for your organization](/organizations/keeping-your-organization-secure/managing-security-and-analysis-settings-for-your-organization)."

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.repositories.navigate-to-security-and-analysis %}
4. Leia a mensagem sobre a concessão de acesso somente leitura pelo {% data variables.product.product_name %} aos dados do repositório para habilitar o gráfico de dependências e, em seguida, ao lado de "Gráfico de Dependência", clique em **Habilitar**. ![Botão "Habilitar" para o gráfico de dependência](/assets/images/help/repository/dependency-graph-enable-button.png)

Você pode desabilitar o gráfico de dependências a qualquer momento clicando em **Desabilitar** ao lado de "Gráfico de dependência" na aba de análise & de Segurança &.

### Alterar o pacote "Usado por"

Se o gráfico de dependências estiver habilitado e o seu repositório contiver um pacote publicado em um ecossistema de pacote compatível, {% data variables.product.prodname_dotcom %} exibirá uma seção "Usado por" na barra lateral da aba do **Código** do seu repositório. Para obter mais informações sobre os ecossistemas de pacotes compatíveis, consulte "[Sobre o gráfico de dependências](/github/visualizing-repository-data-with-graphs/about-the-dependency-graph#supported-package-ecosystems)".

A seção "Usado por" mostra o número de referências públicas ao pacote que foi encontrado, e exibe os avatares de alguns dos proprietários dos projetos dependentes.

![Seção da barra lateral "Usado por"](/assets/images/help/repository/used-by-section.png)

Clicar em qualquer item desta seção irá levar você para a aba **Dependentes** do gráfico de dependências.

A seção "Usado por" representa um único pacote do repositório. Se você tiver permissões de administrador em um repositório que contém vários pacotes, você poderá escolher qual pacote a seção "Usado por" representa.

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.repositories.navigate-to-security-and-analysis %}
4. Em "Configure as funcionalidades de segurança e análise", clique no menu suspenso na seção "Usados pelo contador" e escolha um pacote. ![Escolha um pacote "Usado por"](/assets/images/help/repository/choose-used-by-package.png)

{% endif %}

### Solução de problemas para o gráfico de dependências

Se seu gráfico de dependências estiver vazio, poderá haver um problema com o arquivo que contém suas dependências. Selecione o arquivo para garantir que ele esteja corretamente formatado para o tipo de arquivo.

{% if currentVersion == "free-pro-team@latest" %}
Se o arquivo estiver formatado corretamente, verifique o seu tamanho. O gráfico de dependências ignora arquivos de manifesto individual e os arquivos e bloqueio com tamanho superior a Mb, a menos que você seja um usuário do {% data variables.product.prodname_enterprise %}. Ele processa até 20 arquivos de manifesto ou de bloqueio por repositório por padrão; logo você pode dividir dependências em arquivos menores em subdiretórios do repositório.{% endif %}

Se um arquivo de manifesto ou de bloqueio não for processado, suas dependências serão omitidas no gráfico de dependências e não será possível verificar se há dependências.

### Leia mais

- "[Sobre o gráfico de dependências](/github/visualizing-repository-data-with-graphs/about-the-dependency-graph)"{% if currentVersion == "free-pro-team@latest" %}
- "[Visualizar informações da organização](/organizations/collaborating-with-groups-in-organizations/viewing-insights-for-your-organization)"
- "[Visualizar e atualizar dependências vulneráveis no seu repositório](/github/managing-security-vulnerabilities/viewing-and-updating-vulnerable-dependencies-in-your-repository)"
- "[Entender como o {% data variables.product.product_name %} usa e protege seus dados](/github/understanding-how-github-uses-and-protects-your-data)"
{% endif %}
