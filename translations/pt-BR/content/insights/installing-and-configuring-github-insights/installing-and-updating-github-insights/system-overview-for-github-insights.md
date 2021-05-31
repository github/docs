---
title: Visão geral do sistema para o GitHub Insights
intro: '{% data variables.product.prodname_insights %} é um aplicativo autônomo que faz interface com o {% data variables.product.prodname_enterprise %}.'
redirect_from:
  - /github/installing-and-configuring-github-insights/system-overview-for-github-insights
  - /insights/installing-and-configuring-github-insights/system-overview-for-github-insights
versions:
  enterprise-server: '*'
---
### Requisitos para executar {% data variables.product.prodname_insights %}

{% data variables.product.prodname_insights %} requer uma versão compatível do {% data variables.product.prodname_ghe_server %}.

{% data reusables.github-insights.requires-machine %} Máquinas de tipo padrão com um sistema operacional base do Debian Buster, Debian Stretch, ou qualquer versão LTS do Ubuntu 16.04 + são compatíveis.

Para prover {% data variables.product.prodname_insights %}, o servidor do aplicativo deve ser capaz de executar certas dependências, incluindo o Docker. {% data reusables.github-insights.docker-requirements %} Para obter mais informações, consulte "[Instalar {% data variables.product.prodname_insights %}](/insights/installing-and-configuring-github-insights/installing-github-insights#prerequisites)".

O servidor do aplicativo deve atender ao mínimo de especificações.

| Especificação | Mínimo |
| ------------- | ------ |
| vCPUs         | 16     |
| RAM           | 64GB   |
| Disco         | 250GB  |

Se você usar {% data variables.product.prodname_insights %} para importar uma grande quantidade de dados, recomendamos especificações mínimas maiores. Para obter mais informações, consulte "[Gerenciar repositórios](/github/installing-and-configuring-github-insights/managing-repositories#about-import-times)".

### Segurança e autenticação para {% data variables.product.prodname_insights %}

{% data variables.product.prodname_insights %} é executado na sua infraestrutura e é regido pelos controles de segurança da informação existentes. {% data variables.product.prodname_insights %} usa contas de usuário existentes em {% data variables.product.prodname_enterprise %} para autenticação e permissões de acesso.

#### Segurança de rede

O firewall interno do {% data variables.product.prodname_insights %} restringe o acesso à rede para os serviços do servidor do aplicativo. Apenas os serviços necessários para o funcionamento do servidor do aplicativo estão disponíveis na rede.

{% data variables.product.prodname_insights %} requer que as seguintes portas estejam abertas para tráfego de entrada e saída.

| Porta | Serviço          | Protocolo |
| ----- | ---------------- | --------- |
| 22    | USUÁRIO DE SSH   | TCP       |
| 80    | USUÁRIO DE HTTP  | TCP       |
| 443   | USUÁRIO DE HTTPS | TCP       |

#### Permissões de autenticação e acesso

A autenticação para {% data variables.product.prodname_insights %} é gerenciada por meio do {% data variables.product.prodname_enterprise %}. Durante a instalação, você criará um {% data variables.product.prodname_github_app %}, que permite que {% data variables.product.prodname_insights %} autorize usuários. O {% data variables.product.prodname_github_app %} também é usado para interagir com {% data variables.product.prodname_enterprise %} dentro do escopo das permissões do usuário e do aplicativo.

{% data reusables.github-insights.permissions-levels %}

O acesso aos dados em {% data variables.product.prodname_insights %} é restrito de acordo com o acesso aos dados de cada usuário em {% data variables.product.prodname_enterprise %}. Um usuário nunca verá os dados em {% data variables.product.prodname_insights %} para repositórios aos quais o usuário não tem acesso em {% data variables.product.prodname_enterprise %}.

### Arquitetura de {% data variables.product.prodname_insights %}

![Arquitetura do sistema](/assets/images/help/insights/github-isights-system-diagram.png)
