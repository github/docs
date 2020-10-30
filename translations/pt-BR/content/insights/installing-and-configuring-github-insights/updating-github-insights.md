---
title: Atualizar o GitHub Insights
intro: 'Você pode fazer a atualização para a última versão do {% data variables.product.prodname_insights %} para se beneficiar de melhorias e correções de erros.'
product: '{% data reusables.gated-features.github-insights %}'
redirect_from:
  - /github/installing-and-configuring-github-insights/updating-github-insights
permissions: 'As pessoas com permissões de leitura para o repositório `github/insights-releases` e acesso administrativo ao servidor do aplicativo podem atualizar {% data variables.product.prodname_insights %}.'
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

### Sobre as atualizações do {% data variables.product.prodname_insights %}

Antes de atualizar o {% data variables.product.prodname_insights %}, você pode verificar a versão que você está usando atualmente no canto inferior direito de qualquer página.

O processo de atualização levará até 10 minutos. Nesse período, os usuários não podem acessar o {% data variables.product.prodname_insights %}.

### Atualizar a partir de {% data variables.product.prodname_insights %} 0.4.0+

Para atualizar o {% data variables.product.prodname_insights %} a partir de 0.4.0+, você pode instalar a versão mais recente. {% data variables.product.prodname_insights %} irá pedir para usar a configuração anterior de instalação.

{% data reusables.github-insights.download-latest-release %}
4. Execute o script shell `install.sh`.
5. Se o SSL tiver sido habilitado anteriormente, o {% data variables.product.prodname_insights %} encontrará um certificado SSL existente. Insira "Y" para aceitar ou "n" para alterar o certificado SSL ou desabilitar o SSL.
6. Se o SSL tiver sido habilitado anteriormente, o {% data variables.product.prodname_insights %} encontrará uma chave SSL existente. Insira "Y" para aceitar ou "n" para alterar a chave SSL.
5. {% data variables.product.prodname_insights %} encontrará um nome de host existente. Insira "Y" para aceitar ou "n" para inserir um nome de host diferente. O hostname é a mesma URL que você usou para o servidor de aplicativos ao criar o {% data variables.product.prodname_github_app %}.
6. A instalação levará alguns minutos para ser executada. Quando terminar, você verá uma mensagem impressa no terminal.
  ```
  Installation complete
  Run /opt/insights/scripts/start.sh to start GitHub Insights
  ```
{% data reusables.github-insights.run-script %}

### Atualizar a partir de {% data variables.product.prodname_insights %} 0.3.1 ou inferior

As versões {% data variables.product.prodname_insights %} 0.3.1 ou inferior são incompatíveis com as versões 0.4.0+. Para fazer a atualização a partir do {% data variables.product.prodname_insights %} 0.3.1 ou inferior, instale e configure o {% data variables.product.prodname_insights %} em um novo servidor do aplicativo.
