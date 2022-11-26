---
title: Introdução à adoção do GitHub Advanced Security em escala
intro: 'É possível adotar o {% data variables.product.prodname_GH_advanced_security %} em escala em sua empresa seguindo as práticas recomendadas do setor e do GitHub.'
versions:
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Advanced Security
shortTitle: Introduction
redirect_from:
  - /admin/advanced-security/overview-of-github-advanced-security-deployment
  - /admin/code-security/managing-github-advanced-security-for-your-enterprise/overview-of-github-advanced-security-deployment
  - /admin/advanced-security/deploying-github-advanced-security-in-your-enterprise
  - /admin/code-security/managing-github-advanced-security-for-your-enterprise/deploying-github-advanced-security-in-your-enterprise
miniTocMaxHeadingLevel: 2
ms.openlocfilehash: f42a461b3c53565725d6909680fa8e6a202c0439
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 10/25/2022
ms.locfileid: '148108242'
---
## Sobre os artigos

O GHAS ({% data variables.product.prodname_GH_advanced_security %}) ajuda as equipes a criar mais rapidamente um código mais seguro por meio de ferramentas integradas, como o exame de segredos e o exame de códigos, usando o CodeQL. Para entender os recursos de segurança disponíveis por meio do {% data variables.product.prodname_GH_advanced_security %}, confira "[Sobre o GitHub Advanced Security](/get-started/learning-about-github/about-github-advanced-security)".

O GHAS é um conjunto de ferramentas que requer a participação ativa de desenvolvedores na sua empresa. Para obter o melhor retorno do seu investimento, aprenda a usar, aplicar e manter o GHAS.


Criamos uma abordagem faseada para implementações do GHAS desenvolvidas com base nas práticas recomendadas do setor e do GitHub. A maioria dos clientes provavelmente seguirá essas fases, com base em nossa experiência ajudando empresas em implantações bem-sucedidas do {% data variables.product.prodname_GH_advanced_security %}, mas talvez seja necessário modificar essa abordagem para atender às necessidades específicas da sua empresa. 

A habilitação do GHAS em uma grande organização pode ser dividida em seis fases principais.

1. [**Alinhar a estratégia de distribuição e as metas**](/code-security/adopting-github-advanced-security-at-scale/phase-1-align-on-your-rollout-strategy-and-goals): pense no cenário de sucesso ideal e alinhe a implementação do GHAS de acordo em sua empresa. Essa fase pode levar apenas alguns dias ou uma semana, mas ela estabelece uma base sólida para o restante da distribuição.
  
2. [**Preparo para a habilitação em escala**](/code-security/adopting-github-advanced-security-at-scale/phase-2-preparing-to-enable-at-scale): prepare os desenvolvedores, colete dados sobre os repositórios e esteja pronto para a próxima fase.
  
3. [**Programas piloto**](/code-security/adopting-github-advanced-security-at-scale/phase-3-pilot-programs): opcionalmente, realize uma distribuição piloto inicial para algumas equipes e alguns projetos de alto impacto. Com isso, um grupo inicial se familiariza com o GHAS antes da distribuição para o restante da empresa. 
  
4. [**Criar a documentação interna**](/code-security/adopting-github-advanced-security-at-scale/phase-4-create-internal-documentation): crie e comunique a documentação interna para os consumidores do GHAS. Sem a documentação adequada para os desenvolvedores, os engenheiros de segurança e outros envolvidos no uso do GHAS, o valor é perdido na distribuição.
  
5. [**Distribuição e escala do {% data variables.product.prodname_code_scanning %}**](/code-security/adopting-github-advanced-security-at-scale/phase-5-rollout-and-scale-code-scanning): utilize as APIs disponíveis e realize a distribuição automática do {% data variables.product.prodname_code_scanning %} por equipe e por linguagem em toda a empresa, usando os dados do repositório coletados anteriormente.
  
6. [**Distribuição e escala do {% data variables.product.prodname_secret_scanning %}**](/code-security/adopting-github-advanced-security-at-scale/phase-6-rollout-and-scale-secret-scanning): faça a distribuição do {% data variables.product.prodname_secret_scanning %}, que envolve menos configuração e é, portanto, mais simples de adotar do que o {% data variables.product.prodname_code_scanning %}. Ainda assim, é fundamental ter uma estratégia para lidar com resultados novos e antigos.

## {% data variables.contact.github_support %} e {% data variables.product.prodname_professional_services_team %}

Se você encontrar problemas ou tiver dúvidas durante a implementação, pesquise soluções em nossa documentação ou entre em contato com o {% data variables.contact.github_support %}. Para saber mais, confira "[Sobre o Suporte do GitHub](/support/learning-about-github-support/about-github-support)".

É possível fazer parcerias com a equipe do {% data variables.product.prodname_professional_services %} para obter diretrizes durante o processo de distribuição e realizar uma implementação e uma distribuição bem-sucedidas do {% data variables.product.prodname_GH_advanced_security %}. Oferecemos uma variedade de opções de diretrizes e suporte. Também temos treinamentos e bootcamps disponíveis para ajudar a sua empresa a otimizar o valor do {% data variables.product.prodname_GH_advanced_security %}.

Fale com o seu representante de vendas para saber mais sobre todas as opções de Serviços Profissionais disponíveis. Para mais informações, entre em contato com {% data variables.contact.contact_enterprise_sales %}.

{% note %}

Para ver o primeiro artigo desta série, confira "[Fase 1: Alinhar a estratégia de distribuição e as metas](/code-security/adopting-github-advanced-security-at-scale/phase-1-align-on-your-rollout-strategy-and-goals)".

{% endnote %}
