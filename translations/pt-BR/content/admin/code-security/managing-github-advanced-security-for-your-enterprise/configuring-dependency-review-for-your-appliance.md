---
title: Configurando revisão de dependências para seu dispositivo
shortTitle: Configurando a revisão de dependências
intro: 'Para ajudar os usuários a entender as alterações de dependências ao revisar pull requests, você pode habilitar, configurar e desabilitar a revisão de dependências para {% data variables.product.product_location %}.'
product: '{% data reusables.gated-features.dependency-review %}'
miniTocMaxHeadingLevel: 3
versions:
  feature: dependency-review-action-ghes
type: how_to
topics:
  - Advanced Security
  - Enterprise
  - Dependency review
  - Security
---

{% data reusables.dependency-review.beta %}

## Sobre revisão de dependências

{% data reusables.dependency-review.feature-overview %}

Algumas funcionalidades adicionais, como as verificações de licença, o bloqueio de pull requests, e a integração CI/CD, estão disponíveis com a [ação de revisão de dependência](https://github.com/actions/dependency-review-action).

## Verificando se a sua licença inclui {% data variables.product.prodname_GH_advanced_security %}

{% data reusables.advanced-security.check-for-ghas-license %}

## Pré-requisitos para revisão da dependência

- Uma licença para {% data variables.product.prodname_GH_advanced_security %}{% ifversion ghes %} (consulte "[Sobre cobrança para {% data variables.product.prodname_GH_advanced_security %}](/billing/managing-billing-for-github-advanced-security/about-billing-for-github-advanced-security)").{% endif %}

- O gráfico de dependências habilitado para a instância. Os administradores de sites podem habilitar o gráfico de dependências por meio do console de gerenciamento ou do shell administrativo (consulte [habilitando o gráfico de dependências para sua empresa](/admin/code-security/managing-supply-chain-security-for-your-enterprise/enabling-the-dependency-graph-for-your-enterprise)").

- {% data variables.product.prodname_github_connect %} habilitado para fazer o download e sincronizar vulnerabilidades do {% data variables.product.prodname_advisory_database %}. Isso geralmente é configurado como parte da configuração de {% data variables.product.prodname_dependabot %} (consulte "[habilitando o Dependabot para a sua empresa](/admin/configuration/configuring-github-connect/enabling-dependabot-for-your-enterprise)").

## Habilitando e desabilitando a revisão de dependências

Para habilitar ou desabilitar a revisão da dependência, você deve habilitar ou desabilitar o gráfico de dependências para sua instância.

Para obter mais informações, consulte "[Habilitando o gráfico de dependências para sua empresa](/admin/code-security/managing-supply-chain-security-for-your-enterprise/enabling-the-dependency-graph-for-your-enterprise)".

## Executando a revisão de dependência usando {% data variables.product.prodname_actions %}

{% data reusables.dependency-review.dependency-review-action-beta-note %}

A ação de revisão de dependências foi incluída na sua instalação de {% data variables.product.prodname_ghe_server %}. Ele está disponível para todos os repositórios que têm {% data variables.product.prodname_GH_advanced_security %} e o gráfico de dependências habilitado.

{% data reusables.dependency-review.dependency-review-action-overview %}

Os usuários executam a ação de revisão de dependências usando um fluxo de trabalho de {% data variables.product.prodname_actions %}. Se você ainda não configurou os executores para {% data variables.product.prodname_actions %}, você deve fazer isso para permitir que os usuários executem fluxos de trabalho. É possível fornecer executores auto-hospedados no nível da conta do repositório, organização ou empresa. Para obter informações, consulte "[Sobre executores auto-hospedados](/actions/hosting-your-own-runners/about-self-hosted-runners)" e "[Adicionar executores auto-hospedados](/actions/hosting-your-own-runners/adding-self-hosted-runners)".

