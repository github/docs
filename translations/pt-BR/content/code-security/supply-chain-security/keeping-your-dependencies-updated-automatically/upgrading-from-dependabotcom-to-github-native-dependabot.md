---
title: Atualizando de Dependabot.com para Dependabot nativo do GitHub
intro: 'Você pode atualizar para o Dependabt nativo do GitHub, fazendo um merge de um pull request que permitirá que as suas dependências continuem sendo atualizadas.'
versions:
  free-pro-team: '*'
type: how_to
topics:
  - Repositories
  - Dependabot
  - Version updates
  - Dependencies
redirect_from:
  - /code-security/supply-chain-security/upgrading-from-dependabotcom-to-github-native-dependabot
---

{% warning %}

A visualização do Dependabot será descontinuada em 3 de agosto de 2021. Para continuar recebendo atualizações do Dependabot, faça a migração para o Dependabot GitHub nativo antes dessa data.

Após essa data, todos os pull requests abertos do Dependabot Preview permanecerão abertos, mas o próprio bot não funcionará mais nas suas contas e organizações do {% data variables.product.prodname_dotcom %}.

{% endwarning %}

### Sobre a atualização de Dependabot Preview para um nativo de {% data variables.product.prodname_dotcom %} {% data variables.product.prodname_dependabot %}

A visualização do Dependabot foi construída diretamente em {% data variables.product.prodname_dotcom %}. Portanto, você poderá usar {% data variables.product.prodname_dependabot %} junto com todas as outras funcionalidades em {% data variables.product.prodname_dotcom %} sem ter que instalar e usar um aplicativo separado. Ao fazer a migração para um nativo de {% data variables.product.prodname_dotcom %} {% data variables.product.prodname_dependabot %}, também podemos focar em trazer muitas novas funcionalidades empolgantes para {% data variables.product.prodname_dependabot %}, incluindo mais [atualizações do ecossistema](https://github.com/github/roadmap/issues/150), [notificações melhoradas](https://github.com/github/roadmap/issues/133) e suporte {% data variables.product.prodname_dependabot %} para [{% data variables.product.prodname_ghe_server %}](https://github.com/github/roadmap/issues/86) e [{% data variables.product.prodname_ghe_managed %}](https://github.com/github/roadmap/issues/135).

### Diferenças entre o Dependabot Preview e nativo de {% data variables.product.prodname_dotcom %} {% data variables.product.prodname_dependabot %}

Embora a maior parte das funcionalidades do Dependabot Preview existam no nativo de {% data variables.product.prodname_dotcom %} {% data variables.product.prodname_dependabot %}, algumas permanecem indisponíveis:
- **Atualizações ao vivo:** Esperamos trazê-las de volta no futuro. Por enquanto, você pode executar {% data variables.product.prodname_dotcom %} {% data variables.product.prodname_dependabot %} diariamente para pegar novos pacotes dentro de um dia de versão.
- **Registros de variáveis de ambiente PHP:** Para projetos que dependem da variável de ambiente `ACF_PRO_KEY`, você poderá fornecer sua cópia licenciada do plugin Campos Personalizados Avançados. Por exemplo, consulte [dependabot/acf-php-example](https://github.com/dependabot/acf-php-example#readme). Para outras variáveis de ambiente, você pode usar {% data variables.product.prodname_actions %} para buscar dependências desses registros.
- **Auto-merge:** Sempre recomendamos verificar suas dependências antes de mesclá-las. Portanto, a fusão automática não será compatível em um futuro próximo. Para aqueles de vocês que avaliaram as suas dependências ou estiverem usando apenas dependências internas, recomendamos adicionar aplicativos de auto-merge de terceiros ou configurar o GitHub Actions para fazer o merge.

Em nativo de {% data variables.product.prodname_dotcom %} {% data variables.product.prodname_dependabot %}, você pode configurar todas as atualizações da versão usando o arquivo de configuração. Este arquivo é semelhante ao arquivo de configuração do Dependabot Preview com algumas alterações e melhorias que serão incluídas automaticamente no seu pull request de atualização. Para obter mais informações sobre o pull request de atualização, consulte "[Atualizando ppara o Dependabot nativo do GitHub](/code-security/supply-chain-security/upgrading-from-dependabotcom-to-github-native-dependabot#upgrading-to-github-native-dependabot)".

Para visualizar os registros de atualização para nativo de {% data variables.product.prodname_dotcom %} {% data variables.product.prodname_dependabot %} que estavam anteriormente no painel do Dependabot.com:

  1. Acesse a página **Insights** do seu repositório.
  2. Clique em **Gráfico de dependência** à esquerda.
  3. Clique em **{% data variables.product.prodname_dependabot %}**.

Para obter mais informações sobre as atualizações de versão com nativo de {% data variables.product.prodname_dotcom %} {% data variables.product.prodname_dependabot %}, consulte "[Sobre atualizações da versão do Dependabot](/code-security/supply-chain-security/about-dependabot-version-updates)."

### Atualizando para nativo de {% data variables.product.prodname_dotcom %} {% data variables.product.prodname_dependabot %}

A atualização de Dependabot Preview para {% data variables.product.prodname_dotcom %}-native {% data variables.product.prodname_dependabot %} exige a fusão do *Atualize para um Dependabot nativo do GitHub* no seu repositório. Este pull request inclui o arquivo de configuração atualizado necessário para nativo de {% data variables.product.prodname_dotcom %} {% data variables.product.prodname_dependabot %}.

Se você estiver usando repositórios privados, você terá que conceder acesso a Dependabot a esses repositórios nas configurações de segurança e análise da sua organização. Para obter mais informações, consulte "[permitir que o Dependabot acesse dependências privadas](/organizations/keeping-your-organization-secure/managing-security-and-analysis-settings-for-your-organization#allowing-dependabot-to-access-private-dependencies)". Anteriormente, o Dependabot tinha acesso a todos os repositórios de uma organização, mas implementamos esta alteração, porque é muito mais seguro utilizar o princípio do menor privilégio de Dependabot.

Se você estiver usando registros privados, será necessário adicionar seus segredos de Dependabot Preview aos "Segredos de Dependabot" do seu repositório ou da organização. Para obter mais informações, consulte "[Gerenciar segredos criptografados para o Dependabot](/code-security/supply-chain-security/managing-encrypted-secrets-for-dependabot). ".

Se você tiver alguma dúvidas ou precisar de ajuda para migrar, você poderá visualizar ou abrir problemas no repositório [dependabot/dependabot-core](https://github.com/dependabot/dependabot-core/issues/new?assignees=%40dependabot%2Fpreview-migration-reviewers&labels=E%3A+preview-migration&template=migration-issue.md&title=).
