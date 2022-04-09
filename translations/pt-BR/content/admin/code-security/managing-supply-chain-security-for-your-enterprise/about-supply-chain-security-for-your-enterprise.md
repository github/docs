---
title: Sobre a segurança da cadeia de suprimento da sua empresa
intro: Você pode habilitar recursos que ajudam seus desenvolvedores a entender e atualizar as dependências das quais o código do seu projeto depende.
shortTitle: Sobre a segurança da cadeia de suprimento
permissions: ''
versions:
  ghes: '*'
  ghae: issue-4864
type: how_to
topics:
  - Enterprise
  - Security
  - Dependency graph
---

Você pode permitir que os usuários identifiquem as dependências dos seus projetos permitindo {% ifversion ghes %}que{% elsif ghae %}usando{% endif %} o gráfico de dependências para {% data variables.product.product_location %}. Para obter mais informações, consulte "{% ifversion ghes %}[Hbilitando o gráfico de dependências para a sua empresa](/admin/code-security/managing-supply-chain-security-for-your-enterprise/enabling-the-dependency-graph-for-your-enterprise){% elsif ghae %}[Sobre o gráfico de dependências](/code-security/supply-chain-security/understanding-your-software-supply-chain/about-the-dependency-graph){% endif %}".

Você também pode permitir que os usuários de {% data variables.product.product_location %} encontrem e corrijam vulnerabilidades nas dependências do seu código, habilitando {% data variables.product.prodname_dependabot_alerts %}{% ifversion ghes > 3.2 %} e {% data variables.product.prodname_dependabot_updates %}{% endif %}. Para obter mais informações, consulte "[Habilitar {% data variables.product.prodname_dependabot %} para a sua empresa](/admin/configuration/configuring-github-connect/enabling-dependabot-for-your-enterprise)."

Depois de habilitar o {% data variables.product.prodname_dependabot_alerts %}, você poderá ver os dados da vulnerabilidade de {% data variables.product.prodname_advisory_database %} em {% data variables.product.product_location %} e sincronizar manualmente os dados. Para obter mais informações, consulte[Visualizando os dados de vulnerabilidade da sua empresa](/admin/code-security/managing-supply-chain-security-for-your-enterprise/viewing-the-vulnerability-data-for-your-enterprise)".
