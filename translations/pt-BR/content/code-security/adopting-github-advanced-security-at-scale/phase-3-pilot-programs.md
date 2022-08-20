---
title: 'Fase 3: Programas-piloto'
intro: 'Poderá beneficiar-se, desde o início de alguns projectos e equipes de alto impacto com as quais pode se fazer um projeto piloto de uma implementação inicial. Isto permitirá que um grupo inicial da sua empresa se familiarize com o GHAS, aprenda a habilitar e configurar o GHAS e construa uma base sólida no GHAS antes de fazer a implementação no restante da sua empresa.'
versions:
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Advanced Security
shortTitle: 3. Programas piloto
miniTocMaxHeadingLevel: 3
---

{% note %}

Este artigo faz parte de uma série sobre adoção de {% data variables.product.prodname_GH_advanced_security %} em escala. Para o artigo anterior dessa série, consulte "[Fase 2: Preparando-se para habilitar em escala](/code-security/adopting-github-advanced-security-at-scale/phase-2-preparing-to-enable-at-scale)".

{% endnote %}

## Sobre programas piloto

Recomendamos que você identifique alguns projetos de alto impacto ou equipes para utilizar em uma implementação piloto do GHAS. Isso permite que um grupo inicial da sua empresa se familiarize com o GHAS e construa uma base sólida para o GHAS antes de implementá-lo no restante da sua empresa.

Os passos nesta fase ajudarão você a habilitar o GHAS na sua empresa, começar a usar as suas funcionalidades e revisar os seus resultados. Se você estiver trabalhando com {% data variables.product.prodname_professional_services %}, ele poderá fornecer assistência adicional por meio desse processo com sessões de integração, oficinas do GHAS e solução de problemas, conforme necessário.

Antes de iniciar seus projetos-piloto, recomendamos que você agende algumas reuniões para suas equipes, como uma reunião inicial, uma revisão do ponto intermédio e uma sessão de encerramento quando o piloto estiver concluído. Essas reuniões ajudarão você a realizar todos os ajustes necessários e assegurarão que as suas equipes estejam preparadas e apoiadas para concluir o piloto com sucesso.

{% ifversion ghes %}

Se você ainda não habilitou o GHAS para a sua instância de {% data variables.product.prodname_ghe_server %}, consulte[Habilitando a segurança avançada do GitHub Advanced para a sua empresa](/admin/advanced-security/enabling-github-advanced-security-for-your-enterprise)."

{% endif %}

Você precisa habilitar o GHAS para cada projeto-piloto, habilitando as funcionalidades do GHAS para cada repositório ou para todos os repositórios de qualquer organização que participe do piloto. Para mais informações consulte "[Gerenciar as configurações de segurança e análise do repositório](/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/managing-security-and-analysis-settings-for-your-repository)" ou "[Gerenciar as configurações de segurança e análise da sua organização](/organizations/keeping-your-organization-secure/managing-security-and-analysis-settings-for-your-organization)".

## Implementando o projeto piloto {% data variables.product.prodname_code_scanning %}

{% ifversion ghes %}

Para habilitar {% data variables.product.prodname_code_scanning %} na sua instância de {% data variables.product.prodname_ghe_server %}, consulte[Configurando a digitalização de código de configuração para o seu dispositivo](/admin/advanced-security/configuring-code-scanning-for-your-appliance)."

{% elsif ghae %}

Para habilitar {% data variables.product.prodname_code_scanning %} usando {% data variables.product.prodname_actions %} você deve disponibilizar executores para executar fluxos de trabalho em {% data variables.product.prodname_ghe_managed %}, consulte "[Começando com {% data variables.product.prodname_actions %} para {% data variables.product.prodname_ghe_managed %}](/admin/github-actions/getting-started-with-github-actions-for-your-enterprise/getting-started-with-github-actions-for-github-ae)".

{% endif %}

Você pode executar a digitalização de código em um repositório, criando um fluxo de trabalho de {% data variables.product.prodname_actions %} para executar a [ação do CodeQL](https://github.com/github/codeql-action/). {% ifversion ghec %}{% data variables.product.prodname_code_scanning_capc %} usa [executores hospedados no GitHub](/actions/using-github-hosted-runners/about-github-hosted-runners) por padrão, mas isso pode ser personalizado se você planeja hospedar seu próprio executor com as suas próprias especificações de hardware. Para obter mais informações, consulte "[Sobre executores auto-hospedados](/actions/hosting-your-own-runners)."{% endif %}

Para mais informações sobre {% data variables.product.prodname_actions %}, consulte:
  - "[Conheça o GitHub Actions](/actions/learn-github-actions)"
  - "[Entendendo o GitHub Actions](/actions/learn-github-actions/understanding-github-actions)"
  - [Eventos que acionam fluxos de trabalho](/actions/learn-github-actions/events-that-trigger-workflows)
  - "[Filtrar o padrão da folha de informações](/actions/learn-github-actions/workflow-syntax-for-github-actions#filter-pattern-cheat-sheet)"

Recomendamos habilitar {% data variables.product.prodname_code_scanning %} em por repositório como parte do seu programa piloto. Para obter mais informações, consulte "[Configurando a digitalização de código para um repositório](/code-security/code-scanning/automatically-scanning-your-code-for-vulnerabilities-and-errors/setting-up-code-scanning-for-a-repository)".

Se você deseja habilitar a digitalização de código para vários repositórios, você deverá escrever o script do processo.

Para obter um exemplo de um script que abre pull requests para adicionar um fluxo de trabalho de {% data variables.product.prodname_actions %} em vários repositórios, consulte o repositório [`jhutchings1/Create-ActionsPRs`](https://github.com/jhutchings1/Create-ActionsPRs) para ver um exemplo que usa o PowerShell ou [`nickliffen/ghas-enablement`](https://github.com/NickLiffen/ghas-enablement) para equipes que não possuem PowerShell e que, em vez disso, prefeririam usar o NodeJS.

Ao executar a digitalização inicial de código, você pode descobrir que nenhum resultado foi encontrado ou que um número incomum de resultados foi retornado. Você pode querer ajustar o que é sinalizado em futuras digitalizações. Para obter mais informações, consulte "[Configurar a verificação de código](/code-security/code-scanning/automatically-scanning-your-code-for-vulnerabilities-and-errors/configuring-code-scanning)".

Se sua empresa quiser usar outras ferramentas de análise de código de terceiros com a digitalização de código do GitHub, você poderá usar ações para executar essas ferramentas dentro do GitHub. Como alternativa, você pode fazer o upload de resultados, que são gerados por ferramentas de terceiros como arquivos SARIF, para a digitalização de código. Para obter mais informações, consulte "[Integrando à digitalização de código](/code-security/code-scanning/integrating-with-code-scanning)".

## Implementando o projeto piloto {% data variables.product.prodname_secret_scanning %}

O GitHub digitaliza repositórios de tipos conhecidos de segredos, para evitar o uso fraudulento de segredos que foram cometidos acidentalmente.

{% ifversion ghes %}

Para habilitar a digitalização de segredos para a sua instância de {% data variables.product.prodname_ghe_server %}, consulte "[Configurando a digitalização de segredo para o seu dispositivo](/admin/advanced-security/configuring-secret-scanning-for-your-appliance). "

{% endif %}

Você precisa habilitar digitalização de segredos para cada projeto piloto, habilitando o recurso para cada repositório ou para todos os repositórios de qualquer organização que participe do projeto. Para obter mais informações, consulte "[Gerenciando as configurações de segurança e análise do repositório](/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/managing-security-and-analysis-settings-for-your-repository)" ou "[Gerenciando as configurações de segurança e análise da sua organização](/organizations/keeping-your-organization-secure/managing-security-and-analysis-settings-for-your-organization)".

Se você coletou algum padrão personalizado específico da sua empresa, especialmente algum padrão relacionado aos projetos que implementam o piloto de {% data variables.product.prodname_secret_scanning %}, você pode configurá-los. Para obter mais informações, consulte "[Definindo padrões personalizados para digitalização de segredo](/code-security/secret-scanning/defining-custom-patterns-for-secret-scanning). "

Para saber como exibir e fechar alertas para segredos verificados em seu repositório, consulte "[Gerenciando alertas do digitalização de segredos](/code-security/secret-scanning/managing-alerts-from-secret-scanning)".

{% note %}

Para o próximo artigo dessa série, consulte "[Fase 4: Criar a documentação interna](/code-security/adopting-github-advanced-security-at-scale/phase-4-create-internal-documentation)".

{% endnote %}
