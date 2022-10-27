---
title: 'Fase 3: Programas piloto'
intro: 'Pode ser útil começar com algumas equipes e alguns projetos de alto impacto ao pilotar uma distribuição inicial. Isto permitirá que um grupo inicial da sua empresa se familiarize com o GHAS, aprenda a habilitar e configurar o GHAS e construa uma base sólida no GHAS antes de fazer a implementação no restante da sua empresa.'
versions:
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Advanced Security
shortTitle: 3. Pilot programs
miniTocMaxHeadingLevel: 3
ms.openlocfilehash: d56427173580558a192d0709ae700cbd497e2935
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 10/25/2022
ms.locfileid: '148107871'
---
{% note %}

Este artigo faz parte de uma série sobre a adoção do {% data variables.product.prodname_GH_advanced_security %} em escala. Para ver o artigo anterior desta série, confira "[Fase 2: Preparo para a habilitação em escala](/code-security/adopting-github-advanced-security-at-scale/phase-2-preparing-to-enable-at-scale)".

{% endnote %}

## Sobre programas piloto

Recomendamos que você identifique algumas equipes e alguns projetos de alto impacto para usar em uma distribuição piloto do GHAS. Com isso, um grupo inicial se familiariza com o GHAS e cria uma base sólida nele antes da distribuição para o restante da empresa.

Essas etapas ajudam você a habilitar o GHAS em sua empresa, começar a usar as funcionalidades dele e revisar seus resultados. Se você estiver trabalhando com {% data variables.product.prodname_professional_services %}, ele poderá fornecer assistência adicional por meio desse processo com sessões de integração, oficinas do GHAS e solução de problemas, conforme necessário.

Antes de iniciar os projetos piloto, recomendamos que você agende algumas reuniões para as equipes, como uma reunião inicial, uma revisão durante o processo e uma sessão de encerramento após a conclusão do piloto. Essas reuniões ajudarão você a fazer todos os ajustes, conforme necessário, e assegurarão que as equipes estejam preparadas e tenham o apoio necessário para concluir o piloto com sucesso.

{% ifversion ghes %}

Se você ainda não habilitou o GHAS para sua instância do {% data variables.product.prodname_ghe_server %}, confira "[Como habilitar o GitHub Advanced Security para sua empresa](/admin/advanced-security/enabling-github-advanced-security-for-your-enterprise)".

{% endif %}

Você precisa habilitar o GHAS em cada projeto piloto, habilitando o recurso para cada repositório ou para todos os repositórios em qualquer organização que participe do projeto. Para obter mais informações, confira "[Como gerenciar as configurações de segurança e análise do seu repositório](/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/managing-security-and-analysis-settings-for-your-repository)" ou "[Como gerenciar as configurações de segurança e análise da sua organização](/organizations/keeping-your-organization-secure/managing-security-and-analysis-settings-for-your-organization)".

## Distribuição piloto do {% data variables.product.prodname_code_scanning %}

{% ifversion ghes %}

Para habilitar a {% data variables.product.prodname_code_scanning %} na sua instância do {% data variables.product.prodname_ghe_server %}, confira "[Como configurar a verificação de código para seu dispositivo](/admin/advanced-security/configuring-code-scanning-for-your-appliance)".

{% elsif ghae %}

Para habilitar o {% data variables.product.prodname_code_scanning %} por meio do {% data variables.product.prodname_actions %}, você deve disponibilizar executores para a execução de fluxos de trabalho no {% data variables.product.prodname_ghe_managed %}. Confira "[Introdução ao {% data variables.product.prodname_actions %} para {% data variables.product.prodname_ghe_managed %}](/admin/github-actions/getting-started-with-github-actions-for-your-enterprise/getting-started-with-github-actions-for-github-ae)".

{% endif %}

Para executar o exame de códigos em um repositório, crie um fluxo de trabalho do {% data variables.product.prodname_actions %} a fim de executar a [ação do CodeQL](https://github.com/github/codeql-action/). O {% ifversion ghec %}{% data variables.product.prodname_code_scanning_capc %} usa [executores hospedados pelo GitHub](/actions/using-github-hosted-runners/about-github-hosted-runners) por padrão, mas essa opção pode ser personalizada quando o plano envolve a hospedagem de um executor próprio com as respectivas especificações de hardware. Para obter mais informações, confira "[Sobre os executores auto-hospedados](/actions/hosting-your-own-runners)".{% endif %}

Para mais informações sobre {% data variables.product.prodname_actions %}, consulte:
  - "[Saiba como usar o GitHub Actions](/actions/learn-github-actions)"
  - "[Noções básicas sobre o GitHub Actions](/actions/learn-github-actions/understanding-github-actions)"
  - "[Eventos que disparam fluxos de trabalho](/actions/learn-github-actions/events-that-trigger-workflows)"
  - "[Folha de referências de filtros padrão](/actions/learn-github-actions/workflow-syntax-for-github-actions#filter-pattern-cheat-sheet)"

Recomendamos habilitar o {% data variables.product.prodname_code_scanning %} por repositório como parte do programa piloto. Para obter mais informações, confira "[Como configurar a verificação de código para um repositório](/code-security/code-scanning/automatically-scanning-your-code-for-vulnerabilities-and-errors/setting-up-code-scanning-for-a-repository)".

Para habilitar o exame de códigos para muitos repositórios, faça um script do processo.

Para ver um exemplo de um script que abre solicitações de pull para adicionar um fluxo de trabalho do {% data variables.product.prodname_actions %} a vários repositórios, confira o repositório [`jhutchings1/Create-ActionsPRs`](https://github.com/jhutchings1/Create-ActionsPRs) para ver um exemplo que usa o PowerShell ou [`nickliffen/ghas-enablement`](https://github.com/NickLiffen/ghas-enablement) para as equipes que não têm o PowerShell e desejam usar o NodeJS.

Ao executar a digitalização inicial de código, você pode descobrir que nenhum resultado foi encontrado ou que um número incomum de resultados foi retornado. Você pode querer ajustar o que é sinalizado em futuras digitalizações. Para obter mais informações, confira "[Como configurar a verificação de código](/code-security/code-scanning/automatically-scanning-your-code-for-vulnerabilities-and-errors/configuring-code-scanning)".

Se sua empresa quiser usar outras ferramentas de análise de código de terceiros com a digitalização de código do GitHub, você poderá usar ações para executar essas ferramentas dentro do GitHub. Como alternativa, é possível carregar os resultados, que são gerados por ferramentas de terceiros como arquivos SARIF, para o exame de códigos. Para obter mais informações, confira "[Como fazer a integração à verificação de código](/code-security/code-scanning/integrating-with-code-scanning)".

## Distribuição piloto do {% data variables.product.prodname_secret_scanning %}

O GitHub digitaliza repositórios de tipos conhecidos de segredos, para evitar o uso fraudulento de segredos que foram cometidos acidentalmente.

{% ifversion ghes %}

Para habilitar a verificação de segredos para sua instância do {% data variables.product.prodname_ghe_server %}, confira "[Como configurar a verificação de segredos para seu dispositivo](/admin/advanced-security/configuring-secret-scanning-for-your-appliance)".

{% endif %}

Você precisa habilitar digitalização de segredos para cada projeto piloto, habilitando o recurso para cada repositório ou para todos os repositórios de qualquer organização que participe do projeto. Para saber mais, confira "[Como gerenciar as configurações de segurança e de análise do repositório](/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/managing-security-and-analysis-settings-for-your-repository)" ou "[Como gerenciar as configurações de segurança e de análise da organização](/organizations/keeping-your-organization-secure/managing-security-and-analysis-settings-for-your-organization)".

Se você tiver coletado padrões personalizados específicos para sua empresa, especialmente os relacionados aos projetos envolvidos na distribuição piloto do {% data variables.product.prodname_secret_scanning %}, será possível configurá-los. Para obter mais informações, confira "[Como definir padrões personalizados para a verificação de segredos](/code-security/secret-scanning/defining-custom-patterns-for-secret-scanning)".

Para saber como ver e fechar alertas de segredos com check-in no seu repositório, confira "[Como gerenciar alertas da verificação de segredos](/code-security/secret-scanning/managing-alerts-from-secret-scanning)".

{% note %}

Para ver o próximo artigo desta série, confira "[Fase 4: Criar a documentação interna](/code-security/adopting-github-advanced-security-at-scale/phase-4-create-internal-documentation)".

{% endnote %}
