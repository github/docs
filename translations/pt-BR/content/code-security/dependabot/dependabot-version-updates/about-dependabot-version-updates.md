---
title: Sobre as atualizações da versão do Dependabot
intro: 'Você pode usar o {% data variables.product.prodname_dependabot %} para manter os pacotes que usa atualizados para as versões mais recentes.'
redirect_from:
  - /github/administering-a-repository/about-dependabot
  - /github/administering-a-repository/about-github-dependabot
  - /github/administering-a-repository/about-github-dependabot-version-updates
  - /github/administering-a-repository/about-dependabot-version-updates
  - /code-security/supply-chain-security/about-dependabot-version-updates
  - /code-security/supply-chain-security/keeping-your-dependencies-updated-automatically/upgrading-from-dependabotcom-to-github-native-dependabot
  - /code-security/supply-chain-security/keeping-your-dependencies-updated-automatically/about-dependabot-version-updates
versions:
  fpt: '*'
  ghec: '*'
  ghes: '> 3.2'
type: overview
topics:
  - Dependabot
  - Version updates
  - Repositories
  - Dependencies
  - Pull requests
shortTitle: Atualizações de versão do Dependabot
---

{% data reusables.dependabot.beta-security-and-version-updates %}
{% data reusables.dependabot.enterprise-enable-dependabot %}

## Sobre o {% data variables.product.prodname_dependabot_version_updates %}

O {% data variables.product.prodname_dependabot %} facilita a manutenção de suas dependências. Você pode usá-lo para garantir que seu repositório se mantenha atualizado automaticamente com as versões mais recentes dos pacotes e aplicações do qual ele depende.

Você habilita o {% data variables.product.prodname_dependabot_version_updates %} verificando um arquivo de configuração no seu repositório. O arquivo de configuração especifica a localização do manifesto ou de outros arquivos de definição de pacote, armazenados no seu repositório. O {% data variables.product.prodname_dependabot %} usa essas informações para verificar pacotes e aplicativos desatualizados. {% data variables.product.prodname_dependabot %} determina se há uma nova versão de uma dependência observando a versão semântica ([semver](https://semver.org/)) da dependência para decidir se deve atualizar para essa versão. Para certos gerentes de pacote, {% data variables.product.prodname_dependabot_version_updates %} também é compatível com armazenamento. Dependências de vendor (ou armazenadas) são dependências registradas em um diretório específico em um repositório, em vez de referenciadas em um manifesto. Dependências de vendor estão disponíveis no tempo de criação, ainda que os servidores de pacote estejam indisponíveis. {% data variables.product.prodname_dependabot_version_updates %} pode ser configurado para verificar as dependências de vendor para novas versões e atualizá-las, se necessário.

Quando {% data variables.product.prodname_dependabot %} identifica uma dependência desatualizada, ele cria uma pull request para atualizar o manifesto para a última versão da dependência. Para dependências de vendor, {% data variables.product.prodname_dependabot %} levanta um pull request para substituir diretamente a dependência desatualizada pela nova versão. Você verifica se os seus testes passam, revisa o changelog e lança observações incluídas no resumo do pull request e, em seguida, faz a mesclagem. Para obter mais informações, consulte "[Configurando as atualizações da versão de {% data variables.product.prodname_dependabot %}](/code-security/supply-chain-security/keeping-your-dependencies-updated-automatically/enabling-and-disabling-dependabot-version-updates)".

Se você habilitar _Atualizações de segurança_, {% data variables.product.prodname_dependabot %} também eleva pull requests para atualizar dependências vulneráveis. Para obter mais informações, consulte "[Sobre {% data variables.product.prodname_dependabot_security_updates %}](/github/managing-security-vulnerabilities/about-dependabot-security-updates)."

{% data reusables.dependabot.pull-request-security-vs-version-updates %}

{% data reusables.dependabot.dependabot-tos %}

## Frequência de {% data variables.product.prodname_dependabot %} pull requests

Você especifica com que frequência verifica cada ecossistema para novas versões no arquivo de configuração: diariamente, semanalmente ou mensalmente.

{% data reusables.dependabot.initial-updates %}

Se tiver habilitado atualizações de segurança, às vezes você verá atualizações de segurança extras de pull requests. Elas são acionadas por um alerta de {% data variables.product.prodname_dependabot %} para uma dependência de seu branch padrão. {% data variables.product.prodname_dependabot %} gera automaticamente um pull request para atualizar a dependência vulnerável.

## Repositórios e ecossistemas suportados
<!-- If you make changes to this feature, check whether any of the changes affect languages listed in /get-started/learning-about-github/github-language-support. If so, please update the language support article accordingly. -->

É possível configurar atualizações de versão para repositórios que contenham um manifesto de dependência ou arquivo de bloqueio para um dos gerentes de pacotes suportados. Para alguns gerenciadores de pacotes, você também pode configurar o armazenamento para dependências. Para obter mais informações, consulte "[Opções de configuração para o arquivo dependabot.yml](/code-security/supply-chain-security/keeping-your-dependencies-updated-automatically/configuration-options-for-dependency-updates#vendor)".
{% note %}

{% data reusables.dependabot.private-dependencies-note %}

{% data variables.product.prodname_dependabot %} não é compatível com as dependências privadas de {% data variables.product.prodname_dotcom %} para todos os gerenciadores de pacote. Veja os detalhes na tabela abaixo.

{% endnote %}

{% data reusables.dependabot.supported-package-managers %}

Se o seu repositório já usa uma integração para gerenciamento de dependências, você precisará desativar isso antes de habilitar o {% data variables.product.prodname_dependabot %}. {% ifversion fpt or ghec %}Para obter mais informações, consulte "[Sobre integrações](/github/customizing-your-github-workflow/about-integrations)."{% endif %}

## Sobre notificações para atualizações de versão para {% data variables.product.prodname_dependabot %}

Você pode filtrar suas notificações em {% data variables.product.company_short %} para mostrar as notificações para pull requests criados por {% data variables.product.prodname_dependabot %}. Para obter mais informações, consulte "[Gerenciando notificações de sua caixa de entrada](/github/managing-subscriptions-and-notifications-on-github/managing-notifications-from-your-inbox)".
