---
title: 'Phase 3: Pilot programs'
intro: 'You may benefit from beginning with a few high-impact projects and teams with which to pilot an initial rollout. Isto permitirá que um grupo inicial da sua empresa se familiarize com o GHAS, aprenda a habilitar e configurar o GHAS e construa uma base sólida no GHAS antes de fazer a implementação no restante da sua empresa.'
versions:
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Advanced Security
shortTitle: 3. Pilot programs
miniTocMaxHeadingLevel: 3
---

{% note %}

This article is part of a series on adopting {% data variables.product.prodname_GH_advanced_security %} at scale. For the previous article in this series, see "[Phase 2: Preparing to enable at scale](/code-security/adopting-github-advanced-security-at-scale/phase-2-preparing-to-enable-at-scale)."

{% endnote %}

## About pilot programs

We recommend you identify a few high-impact projects or teams to use in a pilot rollout of GHAS. This allows an initial group within your company to get familiar with GHAS and builds a solid foundation for GHAS before you roll it out to the remainder of your company.

The steps in this phase will help you enable GHAS on your enterprise, begin using its features, and review your results. Se você estiver trabalhando com {% data variables.product.prodname_professional_services %}, ele poderá fornecer assistência adicional por meio desse processo com sessões de integração, oficinas do GHAS e solução de problemas, conforme necessário.

Before you start your pilot projects, we recommend that you schedule some meetings for your teams, such as an initial meeting, midpoint review, and a wrap-up session when the pilot is complete. These meetings will help you all make adjustments as needed and ensure your teams are prepared and supported to complete the pilot successfully.

{% ifversion ghes %}

Se você ainda não habilitou o GHAS para a sua instância de {% data variables.product.prodname_ghe_server %}, consulte[Habilitando a segurança avançada do GitHub Advanced para a sua empresa](/admin/advanced-security/enabling-github-advanced-security-for-your-enterprise)."

{% endif %}

You need to enable GHAS for each pilot project, either by enabling the GHAS features for each repository or for all repositories in any organizations taking part in the pilot. Para mais informações consulte "[Gerenciar as configurações de segurança e análise do repositório](/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/managing-security-and-analysis-settings-for-your-repository)" ou "[Gerenciar as configurações de segurança e análise da sua organização](/organizations/keeping-your-organization-secure/managing-security-and-analysis-settings-for-your-organization)".

## Piloting {% data variables.product.prodname_code_scanning %}

{% ifversion ghes %}

Para habilitar {% data variables.product.prodname_code_scanning %} na sua instância de {% data variables.product.prodname_ghe_server %}, consulte[Configurando a digitalização de código de configuração para o seu dispositivo](/admin/advanced-security/configuring-code-scanning-for-your-appliance)."

{% elsif ghae %}

To enable {% data variables.product.prodname_code_scanning %} using {% data variables.product.prodname_actions %} you must make runners available to run workflows in {% data variables.product.prodname_ghe_managed %}, see "[Getting started with {% data variables.product.prodname_actions %} for {% data variables.product.prodname_ghe_managed %}](/admin/github-actions/getting-started-with-github-actions-for-your-enterprise/getting-started-with-github-actions-for-github-ae)."

{% endif %}

You can run code scanning on a repository by creating a {% data variables.product.prodname_actions %} workflow to run the [CodeQL action](https://github.com/github/codeql-action/). {% ifversion ghec %}{% data variables.product.prodname_code_scanning_capc %} uses [GitHub-hosted runners](/actions/using-github-hosted-runners/about-github-hosted-runners) by default, but this can be customized if you plan to host your own runner with your own hardware specifications. Para obter mais informações, consulte "[Sobre executores auto-hospedados](/actions/hosting-your-own-runners)."{% endif %}

Para mais informações sobre {% data variables.product.prodname_actions %}, consulte:
  - "[Conheça o GitHub Actions](/actions/learn-github-actions)"
  - "[Entendendo o GitHub Actions](/actions/learn-github-actions/understanding-github-actions)"
  - [Eventos que acionam fluxos de trabalho](/actions/learn-github-actions/events-that-trigger-workflows)
  - "[Filtrar o padrão da folha de informações](/actions/learn-github-actions/workflow-syntax-for-github-actions#filter-pattern-cheat-sheet)"

We recommend enabling {% data variables.product.prodname_code_scanning %} on a repository-by-repository basis as part of your pilot program. Para obter mais informações, consulte "[Configurando a digitalização de código para um repositório](/code-security/code-scanning/automatically-scanning-your-code-for-vulnerabilities-and-errors/setting-up-code-scanning-for-a-repository)".

If you want to enable code scanning for many repositories, you may want to script the process.

Para obter um exemplo de um script que abre pull requests para adicionar um fluxo de trabalho de {% data variables.product.prodname_actions %} em vários repositórios, consulte o repositório [`jhutchings1/Create-ActionsPRs`](https://github.com/jhutchings1/Create-ActionsPRs) para ver um exemplo que usa o PowerShell ou [`nickliffen/ghas-enablement`](https://github.com/NickLiffen/ghas-enablement) para equipes que não possuem PowerShell e que, em vez disso, prefeririam usar o NodeJS.

Ao executar a digitalização inicial de código, você pode descobrir que nenhum resultado foi encontrado ou que um número incomum de resultados foi retornado. Você pode querer ajustar o que é sinalizado em futuras digitalizações. Para obter mais informações, consulte "[Configurar a verificação de código](/code-security/code-scanning/automatically-scanning-your-code-for-vulnerabilities-and-errors/configuring-code-scanning)".

Se sua empresa quiser usar outras ferramentas de análise de código de terceiros com a digitalização de código do GitHub, você poderá usar ações para executar essas ferramentas dentro do GitHub. Alternatively, you can upload results, which are generated by third-party tools as SARIF files, to code scanning. Para obter mais informações, consulte "[Integrando à digitalização de código](/code-security/code-scanning/integrating-with-code-scanning)".

## Piloting {% data variables.product.prodname_secret_scanning %}

O GitHub digitaliza repositórios de tipos conhecidos de segredos, para evitar o uso fraudulento de segredos que foram cometidos acidentalmente.

{% ifversion ghes %}

Para habilitar a digitalização de segredos para a sua instância de {% data variables.product.prodname_ghe_server %}, consulte "[Configurando a digitalização de segredo para o seu dispositivo](/admin/advanced-security/configuring-secret-scanning-for-your-appliance). "

{% endif %}

Você precisa habilitar digitalização de segredos para cada projeto piloto, habilitando o recurso para cada repositório ou para todos os repositórios de qualquer organização que participe do projeto. For more information, see "[Managing security and analysis settings for your repository](/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/managing-security-and-analysis-settings-for-your-repository)" or "[Managing security and analysis settings for your organization](/organizations/keeping-your-organization-secure/managing-security-and-analysis-settings-for-your-organization)."

If you have collated any custom patterns specific to your enterprise, especially any related to the projects piloting {% data variables.product.prodname_secret_scanning %}, you can configure those. Para obter mais informações, consulte "[Definindo padrões personalizados para digitalização de segredo](/code-security/secret-scanning/defining-custom-patterns-for-secret-scanning). "

Para saber como exibir e fechar alertas para segredos verificados em seu repositório, consulte "[Gerenciando alertas do digitalização de segredos](/code-security/secret-scanning/managing-alerts-from-secret-scanning)".

{% note %}

For the next article in this series, see "[Phase 4: Create internal documentation](/code-security/adopting-github-advanced-security-at-scale/phase-4-create-internal-documentation)."

{% endnote %}
