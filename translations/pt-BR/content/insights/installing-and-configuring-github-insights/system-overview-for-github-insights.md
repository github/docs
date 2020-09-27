---
title: Visão geral do sistema para o GitHub Insights
intro: '{{ site.data.variables.product.prodname_insights }} é um aplicativo autônomo que faz interface com o {{ site.data.variables.product.prodname_enterprise }}.'
product: '{{ site.data.reusables.gated-features.github-insights }}'
redirect_from:
  - /github/installing-and-configuring-github-insights/system-overview-for-github-insights
versions:
  enterprise-server: '*'
---

### Requisitos para executar {{ site.data.variables.product.prodname_insights }}

{{ site.data.variables.product.prodname_insights }} requer uma versão compatível do {{ site.data.variables.product.prodname_ghe_server }}.

{{ site.data.reusables.github-insights.requires-machine }} Máquinas de tipo padrão com um sistema operacional base do Debian Buster, Debian Stretch, ou qualquer versão LTS do Ubuntu 16.04 + são compatíveis.

Para prover {{ site.data.variables.product.prodname_insights }}, o servidor do aplicativo deve ser capaz de executar certas dependências, incluindo o Docker. {{ site.data.reusables.github-insights.docker-requirements }} Para obter mais informações, consulte "[Instalar {{ site.data.variables.product.prodname_insights }}](/insights/installing-and-configuring-github-insights/installing-github-insights#prerequisites)".

O servidor do aplicativo deve atender ao mínimo de especificações.

| Especificação | Mínimo |
| ------------- | ------ |
| vCPUs         | 16     |
| RAM           | 64GB   |
| Disco         | 250GB  |

Se você usar {{ site.data.variables.product.prodname_insights }} para importar uma grande quantidade de dados, recomendamos especificações mínimas maiores. Para obter mais informações, consulte "[Gerenciar repositórios](/github/installing-and-configuring-github-insights/managing-repositories#about-import-times)".

### Segurança e autenticação para {{ site.data.variables.product.prodname_insights }}

{{ site.data.variables.product.prodname_insights }} é executado na sua infraestrutura e é regido pelos controles de segurança da informação existentes. {{ site.data.variables.product.prodname_insights }} usa contas de usuário existentes em {{ site.data.variables.product.prodname_enterprise }} para autenticação e permissões de acesso.

#### Segurança de rede

O firewall interno do {{ site.data.variables.product.prodname_insights }} restringe o acesso à rede para os serviços do servidor do aplicativo. Apenas os serviços necessários para o funcionamento do servidor do aplicativo estão disponíveis na rede.

{{ site.data.variables.product.prodname_insights }} requer que as seguintes portas estejam abertas para tráfego de entrada e saída.

| Porta | Serviço          | Protocolo |
| ----- | ---------------- | --------- |
| 22    | USUÁRIO DE SSH   | TCP       |
| 80    | USUÁRIO DE HTTP  | TCP       |
| 443   | USUÁRIO DE HTTPS | TCP       |

#### Permissões de autenticação e acesso

A autenticação para {{ site.data.variables.product.prodname_insights }} é gerenciada por meio do {{ site.data.variables.product.prodname_enterprise }}. Durante a instalação, você criará um {{ site.data.variables.product.prodname_github_app }}, que permite que {{ site.data.variables.product.prodname_insights }} autorize usuários. O {{ site.data.variables.product.prodname_github_app }} também é usado para interagir com {{ site.data.variables.product.prodname_enterprise }} dentro do escopo das permissões do usuário e do aplicativo.

{{ site.data.reusables.github-insights.permissions-levels }}

O acesso aos dados em {{ site.data.variables.product.prodname_insights }} é restrito de acordo com o acesso aos dados de cada usuário em {{ site.data.variables.product.prodname_enterprise }}. Um usuário nunca verá os dados em {{ site.data.variables.product.prodname_insights }} para repositórios aos quais o usuário não tem acesso em {{ site.data.variables.product.prodname_enterprise }}.

### Arquitetura de {{ site.data.variables.product.prodname_insights }}

![Arquitetura do sistema](/assets/images/help/insights/github-isights-system-diagram.png)
