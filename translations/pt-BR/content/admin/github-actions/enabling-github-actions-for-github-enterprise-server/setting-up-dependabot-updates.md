---
title: Configurando as atualizações de segurança e versão do Dependabot na sua empresa
intro: 'Você pode criar executores dedicados para {% data variables.product.product_location %} que {% data variables.product.prodname_dependabot %} usa para criar pull requests a fim de ajudar a proteger e manter as dependências usadas em repositórios da sua empresa.'
allowTitleToDifferFromFilename: true
miniTocMaxHeadingLevel: 3
versions:
  ghes: '> 3.2'
topics:
  - Enterprise
  - Security
  - Dependabot
  - Dependencies
shortTitle: Configurar atualizações do Dependabot
---

{% data reusables.dependabot.beta-security-and-version-updates %}

{% tip %}

**Dica**: Se {% data variables.product.product_location %} usar clustering, você não poderá configurar a segurança de {% data variables.product.prodname_dependabot %} e as atualizações de versão, uma vez que {% data variables.product.prodname_actions %} não é compatível no modo cluster.

{% endtip %}

## Sobre as atualizações do {% data variables.product.prodname_dependabot %}

Ao configurar {% data variables.product.prodname_dependabot %} de segurança e atualizações de versão para {% data variables.product.product_location %}, os usuários podem configurar os repositórios para que suas dependências sejam atualizadas e mantidas seguras automaticamente. Este é um passo importante para ajudar os desenvolvedores a criar e manter o código seguro.

Os usuários podem configurar {% data variables.product.prodname_dependabot %} para criar pull requests e atualizar as suas dependências usando duas funcionalidades.

- **{% data variables.product.prodname_dependabot_version_updates %}**: Os usuários adicionam um arquivo de configuração de {% data variables.product.prodname_dependabot %} ao repositório para habilitar {% data variables.product.prodname_dependabot %} e criar pull requests quando uma nova versão de uma dependência monitorada for lançada. Para obter mais informações, consulte "[Sobre {% data variables.product.prodname_dependabot_version_updates %}](/code-security/supply-chain-security/keeping-your-dependencies-updated-automatically/about-dependabot-version-updates)".
- **{% data variables.product.prodname_dependabot_security_updates %}**: Os usuários alternam uma configuração de repositório para habilitar {% data variables.product.prodname_dependabot %} para criar pull requests quando {% data variables.product.prodname_dotcom %} detecta uma vulnerabilidade em uma das dependências do gráfico de dependências para o repositório. Para obter mais informações, consulte "[Sobre alertas para dependências vulneráveis](/code-security/supply-chain-security/managing-vulnerabilities-in-your-projects-dependencies/about-alerts-for-vulnerable-dependencies)" e[Sobre {% data variables.product.prodname_dependabot_security_updates %}](/code-security/supply-chain-security/managing-vulnerabilities-in-your-projects-dependencies/about-dependabot-security-updates)".

## Pré-requisitos para atualizações de {% data variables.product.prodname_dependabot %}

Ambos os tipos de atualização de {% data variables.product.prodname_dependabot %} têm os seguintes requisitos.

- Configure {% data variables.product.product_location %} para usar {% data variables.product.prodname_actions %}. Para obter mais informações, consulte "[Primeiros passos com {% data variables.product.prodname_actions %} para o GitHub Enterprise Server](/admin/github-actions/enabling-github-actions-for-github-enterprise-server/getting-started-with-github-actions-for-github-enterprise-server)."
- Configure um ou mais executores auto-hospedados de {% data variables.product.prodname_actions %} para {% data variables.product.prodname_dependabot %}. Para obter mais informações, consulte "[Configurando executores auto-hospedados para atualizações de {% data variables.product.prodname_dependabot %}](#setting-up-self-hosted-runners-for-dependabot-updates)" abaixo.

Além disso, {% data variables.product.prodname_dependabot_security_updates %} depende do gráfico de dependências, dados de vulnerabilidades de {% data variables.product.prodname_github_connect %} e {% data variables.product.prodname_dependabot_alerts %}. Essas funcionalidades devem ser habilitadas em {% data variables.product.product_location %}. Para obter mais informações, consulte[Habilitando o gráfico de dependências e alertas de {% data variables.product.prodname_dependabot %} na sua conta corporativa](/admin/configuration/managing-connections-between-your-enterprise-accounts/enabling-the-dependency-graph-and-dependabot-alerts-on-your-enterprise-account). "

## Configurando executores auto-hospedados para atualizações de {% data variables.product.prodname_dependabot %}

Quando você tiver configurado {% data variables.product.product_location %} para usar {% data variables.product.prodname_actions %}, você deverá adicionar executores auto-hospedados para atualizações de {% data variables.product.prodname_dependabot %}. Para obter mais informações, consulte "[Primeiros passos com {% data variables.product.prodname_actions %} para o GitHub Enterprise Server](/admin/github-actions/enabling-github-actions-for-github-enterprise-server/getting-started-with-github-actions-for-github-enterprise-server)."

### Requisitos do sistema para executores de {% data variables.product.prodname_dependabot %}

Qualquer VM que você usar para executores de {% data variables.product.prodname_dependabot %} deve atender aos requisitos para executores auto-hospedados. Além disso, eles têm de cumprir os seguintes requisitos.

- Sistema operacional Linux
- As seguintes dependências instaladas:
  - Docker em execução como o mesmo usuário que o aplicativo do executor auto-hospedado
  - Git

Os requisitos de CPU e memória dependerão do número de executores simultâneos que você implanta em uma determinada VM. Como orientação, criamos de forma bem-sucedida 20 executores em uma única máquina CPU de 8 GB, mas, em última análise, seus requisitos de CPU e memória dependerão fortemente da atualização dos repositórios. Alguns ecossistemas exigirão mais recursos do que outros.

Se você especificar mais de 14 runners simultâneos em uma VM, você também deve atualizar o a configuração do Docker `/etc/docker/daemon.json` para aumentar o número padrão de redes que o Docker pode criar.

```
{
  "default-address-pools": [
    {"base":"10.10.0.0/16","size":24}
  ]
}
```

### Requisitos da rede para executores de {% data variables.product.prodname_dependabot %}

Os executores de {% data variables.product.prodname_dependabot %} exigem acesso à internet pública, {% data variables.product.prodname_dotcom_the_website %} e a todos os registros internos que serão usados nas atualizações de {% data variables.product.prodname_dependabot %}. Para minimizar o risco para sua rede interna, você deve limitar o acesso da Máquina Virtual (VM) à sua rede interna. Isto reduz o potencial de danos nos sistemas internos se um executor fizer o download de uma dependência capturada.

### Adicionando executores auto-hospedados para atualizações de {% data variables.product.prodname_dependabot %}

1. Provisionamento de executores auto-hospedados no nível da conta do repositório, organização ou empresa. Para obter mais informações, consulte "[Sobre executores auto-hospedados](/actions/hosting-your-own-runners/about-self-hosted-runners)" e "[Adicionar executores auto-hospedados](/actions/hosting-your-own-runners/adding-self-hosted-runners)".

2. Verifique se os executores auto-hospedados atendem aos requisitos de {% data variables.product.prodname_dependabot %} antes de atribuir uma etiqueta de `dependabot` para cada executr que você deseja que {% data variables.product.prodname_dependabot %} use. Para obter mais informações, consulte "["Usar etiquetas com executores auto-hospedados](/actions/hosting-your-own-runners/using-labels-with-self-hosted-runners#assigning-a-label-to-a-self-hosted-runner)".

3. Opcionalmente, habilite os fluxos de trabalho acionados por {% data variables.product.prodname_dependabot %} para usar permissões além das permissões somente leitura e ter acesso a todos os segredos que estão normalmente disponíveis. Para obter mais informações, consulte "[Solucionar problemas de {% data variables.product.prodname_actions %} para a sua empresa](/admin/github-actions/advanced-configuration-and-troubleshooting/troubleshooting-github-actions-for-your-enterprise#enabling-workflows-triggered-by-dependabot-access-to-dependabot-secrets-and-increased-permissions)."
