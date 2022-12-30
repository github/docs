---
title: Opções de configuração para o arquivo dependabot.yml
intro: 'Informações detalhadas para todas as opções que você pode usar para personalizar como o {% data variables.product.prodname_dependabot %} mantém seus repositórios.'
permissions: 'People with write permissions to a repository can configure {% data variables.product.prodname_dependabot %} for the repository.'
allowTitleToDifferFromFilename: true
redirect_from:
  - /github/administering-a-repository/configuration-options-for-dependency-updates
  - /code-security/supply-chain-security/configuration-options-for-dependency-updates
  - /code-security/supply-chain-security/keeping-your-dependencies-updated-automatically/configuration-options-for-dependency-updates
miniTocMaxHeadingLevel: 3
versions:
  fpt: '*'
  ghec: '*'
  ghes: '*'
type: reference
topics:
  - Dependabot
  - Version updates
  - Repositories
  - Dependencies
  - Pull requests
shortTitle: Configure dependabot.yml
ms.openlocfilehash: f7753a73f4a889b3c97ca1f47ad3dc1d41da5bc8
ms.sourcegitcommit: 8544f120269257d01adfe4a27b62f08fc8691727
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 08/02/2022
ms.locfileid: '147444650'
---
{% data reusables.dependabot.beta-security-and-version-updates %} {% data reusables.dependabot.enterprise-enable-dependabot %}

## <a name="about-the-dependabotyml-file"></a>Sobre o arquivo *dependabot.yml*

O arquivo de configuração do {% data variables.product.prodname_dependabot %}, *dependabot.yml*, usa a sintaxe YAML. Se você não estiver familiarizado com o YAML e quiser saber mais, confira "[Aprenda a usar o YAML em cinco minutos](https://www.codeproject.com/Articles/1214409/Learn-YAML-in-five-minutes)".

Você precisa armazenar este arquivo no diretório `.github` do seu repositório. Quando você adiciona ou atualiza o arquivo *dependabot.yml*, isso dispara uma verificação imediata em busca de atualizações da versão. Para obter mais informações e um exemplo, confira "[Como configurar atualizações de versão do {% data variables.product.prodname_dependabot %}](/code-security/supply-chain-security/keeping-your-dependencies-updated-automatically/enabling-and-disabling-dependabot-version-updates#enabling-dependabot-version-updates)".

Quaisquer opções que também afetem as atualizações de segurança são usadas na próxima vez que um alerta de segurança acionar um pull request para uma atualização de segurança.  Para obter mais informações, confira "[Como configurar {% data variables.product.prodname_dependabot_security_updates %}](/code-security/supply-chain-security/managing-vulnerabilities-in-your-projects-dependencies/configuring-dependabot-security-updates)".

O arquivo *dependabot.yml* tem duas chaves obrigatórias de nível superior: `version` e `updates`. Opcionalmente, você pode incluir uma chave `registries` de nível superior{% ifversion ghes = 3.5 %} e/ou uma chave `enable-beta-ecosystems`{% endif %}. O arquivo precisa começar com `version: 2`.

## <a name="configuration-options-for-the-dependabotyml-file"></a>Opções de configuração do arquivo *dependabot.yml*

A chave `updates` de nível superior é obrigatória. Você a utiliza para configurar como {% data variables.product.prodname_dependabot %} atualiza as versões ou as dependências do seu projeto. Cada entrada configura as configurações de atualização para um gerenciador de pacotes específico. Você pode usar as opções a seguir.

{% data reusables.dependabot.configuration-options %}

Estas opções se encaixam, geralmente, nas seguintes categorias.

- Opções de configuração essenciais que você precisa incluir em todas as configurações: [`package-ecosystem`](#package-ecosystem), [`directory`](#directory) e [`schedule.interval`](#scheduleinterval).
- Opções para personalizar o agendamento de atualizações: [`schedule.time`](#scheduletime), [`schedule.timezone`](#scheduletimezone) e [`schedule.day`](#scheduleday).
- Opções para controlar as dependências que são atualizadas: [`allow`](#allow), [`ignore`](#ignore) e [`vendor`](#vendor).
- Opções para adicionar metadados a solicitações de pull: [`reviewers`](#reviewers), [`assignees`](#assignees), [`labels`](#labels) e [`milestone`](#milestone).
- Opções para alterar o comportamento das solicitações de pull: [`target-branch`](#target-branch), [`versioning-strategy`](#versioning-strategy), [`commit-message`](#commit-message), [`rebase-strategy`](#rebase-strategy) e [`pull-request-branch-name.separator`](#pull-request-branch-nameseparator).

Além disso, a opção [`open-pull-requests-limit`](#open-pull-requests-limit) altera o número máximo de solicitações de pull para as atualizações de versão que podem ser abertas pelo {% data variables.product.prodname_dependabot %}.

{% note %}

**Observação:** algumas dessas opções de configuração também podem afetar as solicitações de pull geradas para atualizações de segurança de manifestos de pacote vulneráveis.

As atualizações de segurança são geradas para manifestos de pacote vulneráveis apenas no branch padrão. Quando as opções de configuração são definidas para o mesmo branch (true, a menos que você use `target-branch`), e especificam um `package-ecosystem` e `directory` para o manifesto vulnerável, as solicitações de pull para atualizações de segurança usam opções relevantes.

Em geral, as atualizações de segurança usam quaisquer opções de configuração que afetam pull request, por exemplo, adicionando metadados ou alterando seu comportamento. Para obter mais informações sobre as atualizações de segurança, confira "[Como configurar as {% data variables.product.prodname_dependabot_security_updates %}](/code-security/supply-chain-security/managing-vulnerabilities-in-your-projects-dependencies/configuring-dependabot-security-updates)".

{% endnote %}

### `package-ecosystem`

**Obrigatório**. Adicione um elemento `package-ecosystem` para cada gerenciador de pacotes que deseja que o {% data variables.product.prodname_dependabot %} monitore quanto a novas versões. O repositório também deve conter um manifesto de dependência ou um arquivo de bloqueio para cada um desses gerenciadores de pacotes. Se você quiser habilitar o vendoring para um gerente de pacotes com o qual é compatível, as dependências do vendor devem estar localizadas no diretório necessário. Para obter mais informações, confira [`vendor`](#vendor) abaixo.

{% data reusables.dependabot.supported-package-managers %}

```yaml
# Basic set up for three package managers

version: 2
updates:

  # Maintain dependencies for GitHub Actions
  - package-ecosystem: "github-actions"
    directory: "/"
    schedule:
      interval: "daily"

  # Maintain dependencies for npm
  - package-ecosystem: "npm"
    directory: "/"
    schedule:
      interval: "daily"

  # Maintain dependencies for Composer
  - package-ecosystem: "composer"
    directory: "/"
    schedule:
      interval: "daily"
```

### `directory`

**Obrigatório**. Você precisa definir o local dos manifestos do pacote para cada gerenciador de pacotes (por exemplo, o *package.json* ou o *Gemfile*). Você define o diretório relativo à raiz do repositório para todos os ecossistemas, exceto GitHub Actions. Para o GitHub Actions, defina o diretório como `/` para verificar se há arquivos de fluxo de trabalho em `.github/workflows`.

```yaml
# Specify location of manifest files for each package manager

version: 2
updates:
  - package-ecosystem: "composer"
    # Files stored in repository root
    directory: "/"
    schedule:
      interval: "daily"

  - package-ecosystem: "npm"
    # Files stored in `app` directory
    directory: "/app"
    schedule:
      interval: "daily"

  - package-ecosystem: "github-actions"
    # Workflow files stored in the
    # default location of `.github/workflows`
    directory: "/"
    schedule:
      interval: "daily"
```

### `schedule.interval`

**Obrigatório**. Você deve definir a frequência de verificação das novas versões para cada gerenciador de pacotes. Por padrão, {% data variables.product.prodname_dependabot %} atribui aleatoriamente um tempo para aplicar todas as atualizações no arquivo de configuração. Para definir uma hora específica, use [`schedule.time`](#scheduletime) e [`schedule.timezone`](#scheduletimezone).

- `daily` – é executado todos os dias da semana, de segunda à sexta-feira.
- `weekly` – é executado uma vez por semana. Por padrão, ocorre às segundas. Para modificar isso, use [`schedule.day`](#scheduleday).
- `monthly` – é executado uma vez por mês. Isso é no primeiro dia do mês.

```yaml
# Set update schedule for each package manager

version: 2
updates:

  - package-ecosystem: "github-actions"
    directory: "/"
    schedule:
      # Check for updates to GitHub Actions every weekday
      interval: "daily"

  - package-ecosystem: "composer"
    directory: "/"
    schedule:
      # Check for updates managed by Composer once a week
      interval: "weekly"
```

{% note %}

**Observação**: `schedule` define quando o {% data variables.product.prodname_dependabot %} tenta fazer uma nova atualização. No entanto, essa não é a única vez que você poderá receber pull requests. As atualizações podem ser disparadas com base nas alterações do arquivo `dependabot.yml`, nas alterações nos arquivos de manifesto após uma falha na atualização ou nas {% data variables.product.prodname_dependabot_security_updates %}. Para obter mais informações, confira "[Frequência de solicitações de pull do {% data variables.product.prodname_dependabot %}](/code-security/supply-chain-security/keeping-your-dependencies-updated-automatically/about-dependabot-version-updates#frequency-of-dependabot-pull-requests) e "[Sobre as {% data variables.product.prodname_dependabot_security_updates %}](/code-security/supply-chain-security/managing-vulnerabilities-in-your-projects-dependencies/about-dependabot-security-updates)".

{% endnote %}

### `allow`

{% data reusables.dependabot.default-dependencies-allow-ignore %}

Use a opção `allow` para personalizar as dependências que são atualizadas. Isso se aplica tanto às atualizações de versão quanto de segurança. É possível usar as seguintes opções:

- `dependency-name` – use-a para permitir atualizações para dependências com nomes correspondentes, opcionalmente usando `*` para corresponder a zero ou mais caracteres. Para dependências Java, o formato do atributo `dependency-name` é: `groupId:artifactId`, por exemplo: `org.kohsuke:github-api`.
- `dependency-type` – use-a para permitir atualizações para dependências de tipos específicos.

  | Tipos de dependência | Suportado por gestores de pacotes | Permitir atualizações |
  |------------------|-------------------------------|--------|
  | `direct` | Tudo | Todas as dependências explicitamente definidas. |
  | `indirect` | `bundler`, `pip`, `composer`, `cargo` | Dependências de dependências diretas (também conhecidas como sub-dependências ou dependências transitórias).|
  | `all` | Tudo | Todas as dependências explicitamente definidas. Para `bundler`, `pip`, `composer` e `cargo`, bem como para as dependências de dependências diretas.|
  | `production` | `bundler`, `composer`, `mix`, `maven`, `npm`, `pip` | Apenas dependências no "Grupo de dependência de produção". |
  | `development`| `bundler`, `composer`, `mix`, `maven`, `npm`, `pip` | Somente dependências no "grupo de dependência do desenvolvimento". |

```yaml
# Use `allow` to specify which dependencies to maintain

version: 2
updates:
  - package-ecosystem: "npm"
    directory: "/"
    schedule:
      interval: "daily"
    allow:
      # Allow updates for Lodash
      - dependency-name: "lodash"
      # Allow updates for React and any packages starting "react"
      - dependency-name: "react*"

  - package-ecosystem: "composer"
    directory: "/"
    schedule:
      interval: "daily"
    allow:
      # Allow both direct and indirect updates for all packages
      - dependency-type: "all"

  - package-ecosystem: "pip"
    directory: "/"
    schedule:
      interval: "daily"
    allow:
      # Allow only direct updates for
      # Django and any packages starting "django"
      - dependency-name: "django*"
        dependency-type: "direct"
      # Allow only production updates for Sphinx
      - dependency-name: "sphinx"
        dependency-type: "production"
```

### `assignees`

Use `assignees` para especificar os destinatários individuais de todas as solicitações de pull geradas para um gerenciador de pacotes.

{% data reusables.dependabot.option-affects-security-updates %}

```yaml
# Specify assignees for pull requests

version: 2
updates:
  - package-ecosystem: "npm"
    directory: "/"
    schedule:
      interval: "daily"
    # Add assignees
    assignees:
      - "octocat"
```

### `commit-message`

Por padrão, o {% data variables.product.prodname_dependabot %} tenta detectar suas preferências de mensagem do commit e usa padrões similares. Use a opção `commit-message` para especificar suas preferências explicitamente.

Opções com suporte

{% note %}

**Observação:** as opções `prefix` e `prefix-development` têm um limite de 15 caracteres.

{% endnote %}

- `prefix` especifica um prefixo para todas as mensagens do commit.
- `prefix-development` especifica um prefixo separado para todas as mensagens do commit que atualizam dependências do grupo de dependências de Desenvolvimento. Quando você especifica um valor para essa opção, o `prefix` só é usado para atualizações para dependências do grupo de dependências de Produção. Há suporte para isso em: `bundler`, `composer`, `mix`, `maven`, `npm` e `pip`.
- `include: "scope"` especifica que qualquer prefixo é seguido de uma lista das dependências atualizadas no commit.

{% data reusables.dependabot.option-affects-security-updates %}

```yaml
# Customize commit messages

version: 2
updates:
  - package-ecosystem: "npm"
    directory: "/"
    schedule:
      interval: "daily"
    commit-message:
      # Prefix all commit messages with "npm"
      prefix: "npm"

  - package-ecosystem: "composer"
    directory: "/"
    schedule:
      interval: "daily"
    # Prefix all commit messages with "Composer"
    # include a list of updated dependencies
    commit-message:
      prefix: "Composer"
      include: "scope"

  - package-ecosystem: "pip"
    directory: "/"
    schedule:
      interval: "daily"
    # Include a list of updated dependencies
    # with a prefix determined by the dependency group
    commit-message:
      prefix: "pip prod"
      prefix-development: "pip dev"
      include: "scope"
```
Se você usar a mesma configuração que no exemplo acima, a inclusão da biblioteca `requests` no grupo de dependências de desenvolvimento `pip` vai gerar esta mensagem de commit:

   `pip dev: bump requests from 1.0.0 to 1.0.1`
   
### `ignore`

{% data reusables.dependabot.default-dependencies-allow-ignore %}

As dependências podem ser ignoradas pela adição delas a `ignore` ou pelo uso do comando `@dependabot ignore` em uma solicitação de pull aberta pelo {% data variables.product.prodname_dependabot %}.

#### <a name="creating-ignore-conditions-from-dependabot-ignore"></a>Como criar condições `ignore` com base em `@dependabot ignore`

As dependências ignoradas com o uso do comando `@dependabot ignore` são armazenadas centralmente para cada gerenciador de pacotes. Se você começar a ignorar as dependências no arquivo `dependabot.yml`, essas preferências existentes serão consideradas com as dependências `ignore` na configuração.

Verifique se um repositório tem preferências `ignore` armazenadas pesquisando `"@dependabot ignore" in:comments` no repositório. Se você deseja deixar de ignorar uma dependência ignorada, reabra o pull request.

Para obter mais informações sobre os comandos `@dependabot ignore`, confira "[Como gerenciar solicitações de pull para atualizações de dependência](/code-security/supply-chain-security/keeping-your-dependencies-updated-automatically/managing-pull-requests-for-dependency-updates#managing-dependabot-pull-requests-with-comment-commands)".

#### <a name="specifying-dependencies-and-versions-to-ignore"></a>Especificando dependências e versões para ignorar

Use a opção `ignore` para personalizar as dependências que são atualizadas. A ação `ignore` dá suporte às opções a seguir.

- `dependency-name` – use-a para ignorar atualizações para dependências com nomes correspondentes, opcionalmente usando `*` para corresponder a zero ou mais caracteres. Para dependências Java, o formato do atributo `dependency-name` é: `groupId:artifactId` (por exemplo: `org.kohsuke:github-api`). {% ifversion dependabot-grouped-dependencies %} Para impedir que o {% data variables.product.prodname_dependabot %} atualize automaticamente as definições de tipo TypeScript de DefinitelyTyped, use `@types/*`.{% endif %}
- `versions` – use-a para ignorar versões específicas ou intervalos de versões. Caso deseje definir um intervalo, use o padrão do gerenciador de pacotes (por exemplo: `^1.0.0` para o npm ou `~> 2.0` para o Bundler).
- `update-types` – use-a para ignorar tipos de atualizações, como atualizações `major`, `minor` ou `patch` do SemVer, em atualizações de versão (por exemplo: `version-update:semver-patch` ignora atualizações de patch). Combine isso com `dependency-name: "*"` para ignorar `update-types` específicos em todas as dependências. Atualmente, `version-update:semver-major`, `version-update:semver-minor` e `version-update:semver-patch` são as únicas opções com suporte. As atualizações de segurança não afetadas por esta configuração.

Se `versions` e `update-types` forem usados juntos, o {% data variables.product.prodname_dependabot %} vai ignorar qualquer atualização em um dos conjuntos.

{% data reusables.dependabot.option-affects-security-updates %}

```yaml
# Use `ignore` to specify dependencies that should not be updated

version: 2
updates:
  - package-ecosystem: "npm"
    directory: "/"
    schedule:
      interval: "daily"
    ignore:
      - dependency-name: "express"
        # For Express, ignore all updates for version 4 and 5
        versions: ["4.x", "5.x"]
        # For Lodash, ignore all updates
      - dependency-name: "lodash"
        # For AWS SDK, ignore all patch updates
      - dependency-name: "aws-sdk"
        update-types: ["version-update:semver-patch"]
```

{% note %}

**Observação**: o {% data variables.product.prodname_dependabot %} só poderá executar atualizações de versão no manifesto ou em arquivos de bloqueio se puder acessar todas as dependências do arquivo, mesmo que você adicione dependências inacessíveis à opção `ignore` do arquivo de configuração. Para obter mais informações, confira "[Como gerenciar configurações de segurança e análise da sua organização](/organizations/keeping-your-organization-secure/managing-security-and-analysis-settings-for-your-organization#allowing-dependabot-to-access-private-dependencies)" e "[Solução de problemas de erros do {% data variables.product.prodname_dependabot %}](/code-security/supply-chain-security/managing-vulnerabilities-in-your-projects-dependencies/troubleshooting-dependabot-errors#dependabot-cant-resolve-your-dependency-files)".


{% endnote %}

{% ifversion fpt or ghec or ghes > 3.4 %} {% note %}

**Observação**: para o ecossistema `pub`, o {% data variables.product.prodname_dependabot %} não executará uma atualização quando a versão para a qual ele tentar atualizar for ignorada, mesmo que uma versão anterior esteja disponível.

{% endnote %}

{% endif %}

### `insecure-external-code-execution`

Os gerenciadores de pacotes com os valores de `package-ecosystem` iguais a `bundler`, `mix` e `pip` poderão executar um código externo no manifesto como parte do processo de atualização de versão. Isto pode permitir que um pacote comprometido roube credenciais ou obtenha acesso aos registros configurados. Quando você adiciona uma configuração de [`registries`](#registries) dentro de uma configuração de `updates`, o {% data variables.product.prodname_dependabot %} impede automaticamente a execução de código externo. Neste caso, poderá ocorrer uma falha na atualização da versão. Você pode optar por substituir esse comportamento e permitir a execução de código externo para os gerenciadores de pacotes `bundler`, `mix` e `pip` definindo `insecure-external-code-execution` como `allow`.

Negue explicitamente a execução de código externo, independentemente de haver uma configuração de `registries` para essa configuração de atualização, definindo `insecure-external-code-execution` como `deny`.

{% raw %}
```yaml
# Allow external code execution when updating dependencies from private registries

version: 2
registries:
  ruby-github:
    type: rubygems-server
    url: https://rubygems.pkg.github.com/octocat/github_api
    token: ${{secrets.MY_GITHUB_PERSONAL_TOKEN}}
updates:
  - package-ecosystem: "bundler"
    directory: "/rubygems-server"
    insecure-external-code-execution: allow
    registries: "*"
    schedule:
      interval: "monthly"
```
{% endraw %}

### `labels`

{% data reusables.dependabot.default-labels %}

Use `labels` para substituir os rótulos padrão e especificar rótulos alternativos para todas as solicitações de pull geradas para um gerenciador de pacotes. Se qualquer uma destas etiquetas não for definida no repositório, será ignorado.
Para desabilitar todos os rótulos, incluindo os rótulos padrão, use `labels: [ ]`.

{% data reusables.dependabot.option-affects-security-updates %}

```yaml
# Specify labels for pull requests

version: 2
updates:
  - package-ecosystem: "npm"
    directory: "/"
    schedule:
      interval: "daily"
    # Specify labels for npm pull requests
    labels:
      - "npm"
      - "dependencies"
```

### `milestone`

Use `milestone` para associar todas as solicitações de pull geradas por um gerenciador de pacotes com um marco. Você precisa especificar o identificador numérico do marco e não sua etiqueta. Se você visualizar um marco, a parte final da URL da página, após `milestone`, será o identificador. Por exemplo: `https://github.com/<org>/<repo>/milestone/3`.

{% data reusables.dependabot.option-affects-security-updates %}

```yaml
# Specify a milestone for pull requests

version: 2
updates:
  - package-ecosystem: "npm"
    directory: "/"
    schedule:
      interval: "daily"
    # Associate pull requests with milestone "4"
    milestone: 4
```

### `open-pull-requests-limit`

Por padrão, {% data variables.product.prodname_dependabot %} abre um máximo de cinco pull requests para atualizações de versão. Uma vez que há cinco pull requests abertos, novas solicitações serão bloqueadas até que você faça o merge ou feche alguns dos pull requests aberto, e, após esse peeríodo, novos pull requests poderão ser abertos em atualizações subsequentes. Use `open-pull-requests-limit` para alterar esse limite. Isto também fornece uma maneira simples de desativar temporariamente as atualizações de versão para um gerenciador de pacotes.

Esta opção não tem impacto em atualizações de segurança, que têm um limite interno separado de dez pull requests abertas.

```yaml
# Specify the number of open pull requests allowed

version: 2
updates:
  - package-ecosystem: "npm"
    directory: "/"
    schedule:
      interval: "daily"
    # Disable version updates for npm dependencies
    open-pull-requests-limit: 0

  - package-ecosystem: "pip"
    directory: "/"
    schedule:
      interval: "daily"
    # Allow up to 10 open pull requests for pip dependencies
    open-pull-requests-limit: 10
```

### `pull-request-branch-name.separator`

{% data variables.product.prodname_dependabot %} gera um branch para cada pull request. Cada nome de branch inclui o `dependabot` e o gerenciador de pacotes e as dependências que são atualizadas. Por padrão, essas partes são separadas por um símbolo `/`, por exemplo: `dependabot/npm_and_yarn/next_js/acorn-6.4.1`.

Use `pull-request-branch-name.separator` para especificar outro separador. Pode ser `"-"`, `_` ou `/`. O símbolo de hífen deve estar entre aspas porque, caso contrário, será interpretado como iniciando uma lista YAML vazia.

{% data reusables.dependabot.option-affects-security-updates %}

```yaml
# Specify a different separator for branch names

version: 2
updates:
  - package-ecosystem: "npm"
    directory: "/"
    schedule:
      interval: "daily"
    pull-request-branch-name:
      # Separate sections of the branch name with a hyphen
      # for example, `dependabot-npm_and_yarn-next_js-acorn-6.4.1`
      separator: "-"
```

### `rebase-strategy`

Por padrão, {% data variables.product.prodname_dependabot %} faz os rebases dos pull requests abertos automaticamente quando detecta qualquer alteração no pull request. Use `rebase-strategy` para desabilitar esse comportamento.

Estratégias de rebase disponíveis

- `disabled` para desabilitar a troca de base automática.
- `auto` para usar o comportamento padrão e trocar a base das solicitações de pull em aberto quando forem detectadas alterações.

{% data reusables.dependabot.option-affects-security-updates %}

```yaml
# Disable automatic rebasing

version: 2
updates:
  - package-ecosystem: "npm"
    directory: "/"
    schedule:
      interval: "daily"
    # Disable rebasing for npm pull requests
    rebase-strategy: "disabled"
```

### `registries`

Para permitir que o {% data variables.product.prodname_dependabot %} acesse um registro de pacote privado ao executar uma atualização de versão, você precisará incluir uma configuração de `registries` com a configuração de `updates` relevante. Você pode permitir que todos os registros definidos sejam usados definindo `registries` como `"*"`. Como alternativa, você pode listar os registros que a atualização pode usar. Para fazer isso, use o nome do registro, conforme definido na seção `registries` de nível superior do arquivo _dependabot.yml_. Para obter mais informações, confira "[Opções de configuração para registros privados](#configuration-options-for-private-registries)" abaixo.

Para permitir que o {% data variables.product.prodname_dependabot %} use os gerenciadores de pacotes `bundler`, `mix` e `pip` para atualizar dependências em registros privados, você pode optar por permitir a execução de código externo. Para obter mais informações, confira [`insecure-external-code-execution`](#insecure-external-code-execution) acima.

```yaml
# Allow {% data variables.product.prodname_dependabot %} to use one of the two defined private registries
# when updating dependency versions for this ecosystem

{% raw %}
version: 2
registries:
  maven-github:
    type: maven-repository
    url: https://maven.pkg.github.com/octocat
    username: octocat
    password: ${{secrets.MY_ARTIFACTORY_PASSWORD}}
  npm-npmjs:
    type: npm-registry
    url: https://registry.npmjs.org
    username: octocat
    password: ${{secrets.MY_NPM_PASSWORD}}
updates:
  - package-ecosystem: "gitsubmodule"
    directory: "/"
    registries:
      - maven-github
    schedule:
      interval: "monthly"
{% endraw %}
```

### `reviewers`

Use `reviewers` para especificar revisores individuais ou equipes de revisores para todas as solicitações de pull geradas para um gerenciador de pacotes. Use o nome completo da equipe, incluindo a organização, como se estivesse usando @mentioning para a equipe.

{% data reusables.dependabot.option-affects-security-updates %}

```yaml
# Specify reviewers for pull requests

version: 2
updates:
  - package-ecosystem: "pip"
    directory: "/"
    schedule:
      interval: "daily"
    # Add reviewers
    reviewers:
      - "octocat"
      - "my-username"
      - "my-org/python-team"
```

### `schedule.day`

Ao definir um agendamento de atualização `weekly`, por padrão, o {% data variables.product.prodname_dependabot %} verifica se há novas versões na segunda-feira em um horário aleatório definido para o repositório. Use `schedule.day` para especificar um dia alternativo para verificar se há atualizações.

Valores com suporte

- `monday`
- `tuesday`
- `wednesday`
- `thursday`
- `friday`
- `saturday`
- `sunday`

```yaml
# Specify the day for weekly checks

version: 2
updates:
  - package-ecosystem: "npm"
    directory: "/"
    schedule:
      interval: "weekly"
      # Check for npm updates on Sundays
      day: "sunday"
```

### `schedule.time`

Por padrão, {% data variables.product.prodname_dependabot %} verifica se há novas versões em um horário aleatório definido para o repositório. Use `schedule.time` para especificar uma hora alternativa do dia para verificar se há atualizações (formato: `hh:mm`).

```yaml
# Set a time for checks
version: 2
updates:
  - package-ecosystem: "npm"
    directory: "/"
    schedule:
      interval: "daily"
      # Check for npm updates at 9am UTC
      time: "09:00"
```

### `schedule.timezone`

Por padrão, {% data variables.product.prodname_dependabot %} verifica se há novas versões em um horário aleatório definido para o repositório. Use `schedule.timezone` para especificar um fuso horário alternativo. O identificador de fuso horário precisa ser do banco de dados de Fusos Horários mantido pela [IANA](https://www.iana.org/time-zones). Para obter mais informações, confira [Lista de fusos horários do banco de dados tz](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones).

```yaml
# Specify the timezone for checks

version: 2
updates:
  - package-ecosystem: "npm"
    directory: "/"
    schedule:
      interval: "daily"
      time: "09:00"
      # Use Japan Standard Time (UTC +09:00)
      timezone: "Asia/Tokyo"
```

### `target-branch`

Por padrão, {% data variables.product.prodname_dependabot %} verifica se há arquivos de manifesto no branch padrão e levanta pull requests para atualizações de versão contra este branch. Use `target-branch` para especificar um branch diferente para arquivos de manifesto e para solicitações de pull. Quando você usa esta opção, as configurações para este gerenciador de pacotes não afetarão mais quaisquer pull requests levantadas para atualizações de segurança.

```yaml
# Specify a non-default branch for pull requests for pip

version: 2
updates:
  - package-ecosystem: "pip"
    directory: "/"
    schedule:
      interval: "daily"
    # Raise pull requests for version updates
    # to pip against the `develop` branch
    target-branch: "develop"
    # Labels on pull requests for version updates only
    labels:
      - "pip dependencies"

  - package-ecosystem: "npm"
    directory: "/"
    schedule:
      interval: "weekly"
      # Check for npm updates on Sundays
      day: "sunday"
    # Labels on pull requests for security and version updates
    labels:
      - "npm dependencies"
```

### `vendor`

Use a opção `vendor` para instruir o {% data variables.product.prodname_dependabot %} a fornecer dependências ao atualizá-las. Não use esta opção se estiver usando o `gomod`, pois o {% data variables.product.prodname_dependabot %} detecta automaticamente o fornecimento dessa ferramenta.

```yaml
# Configure version updates for both dependencies defined in manifests and vendored dependencies

version: 2
updates:
  - package-ecosystem: "bundler"
    # Raise pull requests to update vendored dependencies that are checked in to the repository
    vendor: true
    directory: "/"
    schedule:
      interval: "weekly"
```

{% data variables.product.prodname_dependabot %} atualiza apenas as dependências de vendor localizadas em diretórios específicos em um repositório.

| Gerenciador de pacotes | Caminho de arquivo necessário para dependências delegadas | Mais informações |
  |------------------|-------------------------------|--------|
  | `bundler` | As dependências precisam estar no diretório _vendor/cache_.</br>Outros caminhos de arquivo não são compatíveis. | [Documentação do `bundle cache`](https://bundler.io/man/bundle-cache.1.html) |
  | `gomod` | Sem requisito de caminho (as dependências geralmente estão localizadas no diretório _vendor_) | [Documentação do `go mod vendor`](https://golang.org/ref/mod#go-mod-vendor) |


### `versioning-strategy`

Quando {% data variables.product.prodname_dependabot %} edita um arquivo arquivo manifesto para atualizar uma versão, ele usa as seguintes estratégias globais:

- Para apps, os requisitos de versão são aumentados, por exemplo: npm, pip e Composer.
- Para bibliotecas, o intervalo de versões é alargado, por exemplo: Bundler e Cargo.

Use a opção `versioning-strategy` para alterar esse comportamento para os gerenciadores de pacotes compatíveis.

{% data reusables.dependabot.option-affects-security-updates %}

Estratégias de atualização disponíveis

| Opção | Com suporte por | Ação |
|--------|--------------|--------|
| `lockfile-only` | `bundler`, `cargo`, `composer`, `mix`, `npm`, `pip` | Crie apenas pull requests para atualizar arquivos de bloqueio. Ignora quaisquer novas versões que exigiriam mudanças de manifesto do pacote. |
| `auto` | `bundler`, `cargo`, `composer`, `mix`, `npm`, `pip` | Siga a estratégia padrão descrita acima.|
| `widen`| `composer`, `npm` | Relaxa o requisito da versão para incluir a versão nova e antiga, quando possível. |
| `increase`| `bundler`, `composer`, `npm` | Sempre aumentar o requisito da versão para corresponder à nova versão. |
| `increase-if-necessary` | `bundler`, `composer`, `npm` | Aumenta o requisito da versão apenas quando exigido pela nova versão. |

```yaml
# Customize the manifest version strategy

version: 2
updates:
  - package-ecosystem: "npm"
    directory: "/"
    schedule:
      interval: "daily"
    # Update the npm manifest file to relax
    # the version requirements
    versioning-strategy: widen

  - package-ecosystem: "composer"
    directory: "/"
    schedule:
      interval: "daily"
    # Increase the version requirements for Composer
    # only when required
    versioning-strategy: increase-if-necessary

  - package-ecosystem: "pip"
    directory: "/"
    schedule:
      interval: "daily"
    # Only allow updates to the lockfile for pip and
    # ignore any version updates that affect the manifest
    versioning-strategy: lockfile-only
```

## <a name="configuration-options-for-private-registries"></a>Opções de configuração para registros privados

A chave `registries` de nível superior é opcional. Ela permite especificar detalhes de autenticação que {% data variables.product.prodname_dependabot %} pode usar para acessar os registros de pacotes privados.

{% note %}

**Observação:** não há suporte para registros privados protegidos por firewalls em redes privadas.

{% endnote %}

O valor da chave `registries` é uma matriz associativa, e cada elemento dele consiste de uma chave que identifica determinado registro particular e um valor que é uma matriz associativa que especifica as configurações necessárias para acessar esse registro. O arquivo *dependabot.yml* a seguir configura um registro identificado como `dockerhub` na seção `registries` do arquivo e referencia isso na seção `updates` do arquivo.

{% raw %}
```yaml
# Minimal settings to update dependencies in one private registry

version: 2
registries:
  dockerhub: # Define access for a private registry
    type: docker-registry
    url: registry.hub.docker.com
    username: octocat
    password: ${{secrets.DOCKERHUB_PASSWORD}}
updates:
  - package-ecosystem: "docker"
    directory: "/docker-registry/dockerhub"
    registries:
      - dockerhub # Allow version updates for dependencies in this registry
    schedule:
      interval: "monthly"
```
{% endraw %}

Você utiliza as seguintes opções para especificar as configurações de acesso. As configurações do registro precisam conter um `type` e uma `url` e, normalmente, uma combinação de `username` e `password` ou um `token`.

| Opção&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; | Descrição |
|:---|:---|
| `type`                     | Identifica o tipo de registro. Veja a lista completa de tipos abaixo. |
| `url`                      | A URL a ser usada para acessar as dependências deste registro. O protocolo é opcional. Se não for especificado, `https://` é assumido. {% data variables.product.prodname_dependabot %} adiciona ou ignora barras à direita, conforme necessário. |
| `username`                 | O nome de usuário que {% data variables.product.prodname_dependabot %} usa para acessar o registro. |
| `password`                 | Uma referência a um segredo de {% data variables.product.prodname_dependabot %} que contém a senha para o usuário especificado. Para obter mais informações, confira "[Como gerenciar segredos criptografados do Dependabot](/code-security/supply-chain-security/keeping-your-dependencies-updated-automatically/managing-encrypted-secrets-for-dependabot)". |
| `key`                    | Uma referência a um segredo de {% data variables.product.prodname_dependabot %} que contém uma chave de acesso para este registro. Para obter mais informações, confira "[Como gerenciar segredos criptografados do Dependabot](/code-security/supply-chain-security/keeping-your-dependencies-updated-automatically/managing-encrypted-secrets-for-dependabot)". |
| `token`                    | Uma referência a um segredo de {% data variables.product.prodname_dependabot %} que contém um token de acesso para este registro. Para obter mais informações, confira "[Como gerenciar segredos criptografados do Dependabot](/code-security/supply-chain-security/keeping-your-dependencies-updated-automatically/managing-encrypted-secrets-for-dependabot)". |
| `replaces-base`            | Para registros com `type: python-index`, se o valor booliano é `true`, o Pip resolve as dependências usando a URL especificada em vez da URL base do Índice de Pacote Python (por padrão, `https://pypi.org/simple`). |


Cada `type` de configuração exige que você forneça configurações específicas. Alguns tipos permitem mais de uma maneira de conectar-se. As seções a seguir fornecem detalhes das configurações que você deve usar para cada `type`.

### `composer-repository`

O tipo `composer-repository` dá suporte a nome de usuário e senha.

{% raw %}
```yaml
registries:
  composer:
    type: composer-repository
    url: https://repo.packagist.com/example-company/
    username: octocat
    password: ${{secrets.MY_PACKAGIST_PASSWORD}}
```
{% endraw %}

### `docker-registry`

{% note %}

**Observação:** não damos suporte ao ACR (Registro de Contêiner do Azure).

{% endnote %}

O tipo `docker-registry` dá suporte a nome de usuário e senha.

{% raw %}
```yaml
registries:
  dockerhub:
    type: docker-registry
    url: https://registry.hub.docker.com
    username: octocat
    password: ${{secrets.MY_DOCKERHUB_PASSWORD}}
```
{% endraw %}

O tipo `docker-registry` também pode ser usado para pull do Amazon ECR usando as credenciais estáticas da AWS.

{% raw %}
```yaml
registries:
  ecr-docker:
    type: docker-registry
    url: https://1234567890.dkr.ecr.us-east-1.amazonaws.com
    username: ${{secrets.ECR_AWS_ACCESS_KEY_ID}}
    password: ${{secrets.ECR_AWS_SECRET_ACCESS_KEY}}
```
{% endraw %}

### `git`

O tipo `git` dá suporte a nome de usuário e senha.

{% raw %}
```yaml
registries:
  github-octocat:
    type: git
    url: https://github.com
    username: x-access-token
    password: ${{secrets.MY_GITHUB_PERSONAL_TOKEN}}
```
{% endraw %}

### `hex-organization`

O tipo `hex-organization` dá suporte a organização e chave.

{% raw %}
```yaml
registries:
  github-hex-org:
    type: hex-organization
    organization: github
    key: ${{secrets.MY_HEX_ORGANIZATION_KEY}}
```
{% endraw %}

### `maven-repository`

O tipo `maven-repository` dá suporte a nome de usuário e senha.

{% raw %}
```yaml
registries:
  maven-artifactory:
    type: maven-repository
    url: https://artifactory.example.com
    username: octocat
    password: ${{secrets.MY_ARTIFACTORY_PASSWORD}}
```
{% endraw %}

### `npm-registry`

O tipo `npm-registry` dá suporte a nome de usuário e senha ou a um token.

Quando um nome de usuário e uma senha são usados, o token de autenticação de `.npmrc` pode conter uma `base64` codificada em `_password`. No entanto, a senha referenciada no arquivo de configuração do {% data variables.product.prodname_dependabot %} precisará ser a senha original (não codificada).

{% raw %}
```yaml
registries:
  npm-npmjs:
    type: npm-registry
    url: https://registry.npmjs.org
    username: octocat
    password: ${{secrets.MY_NPM_PASSWORD}}  # Must be an unencoded password
```
{% endraw %}

{% raw %}
```yaml
registries:
  npm-github:
    type: npm-registry
    url: https://npm.pkg.github.com
    token: ${{secrets.MY_GITHUB_PERSONAL_TOKEN}}
```
{% endraw %}

### `nuget-feed`

O tipo `nuget-feed` dá suporte a nome de usuário e senha ou a um token.

{% raw %}
```yaml
registries:
  nuget-example:
    type: nuget-feed
    url: https://nuget.example.com/v3/index.json
    username: octocat@example.com
    password: ${{secrets.MY_NUGET_PASSWORD}}
```
{% endraw %}

{% raw %}
```yaml
registries:
  nuget-azure-devops:
    type: nuget-feed
    url: https://pkgs.dev.azure.com/.../_packaging/My_Feed/nuget/v3/index.json
    token: ${{secrets.MY_AZURE_DEVOPS_TOKEN}}
```
{% endraw %}

### `python-index`

O tipo `python-index` dá suporte a nome de usuário e senha ou a um token.

{% raw %}
```yaml
registries:
  python-example:
    type: python-index
    url: https://example.com/_packaging/my-feed/pypi/example
    username: octocat
    password: ${{secrets.MY_BASIC_AUTH_PASSWORD}}
    replaces-base: true
```
{% endraw %}

{% raw %}
```yaml
registries:
  python-azure:
    type: python-index
    url: https://pkgs.dev.azure.com/octocat/_packaging/my-feed/pypi/example
    token: ${{secrets.MY_AZURE_DEVOPS_TOKEN}}
    replaces-base: true
```
{% endraw %}

### `rubygems-server`

O tipo `rubygems-server` dá suporte a nome de usuário e senha ou a um token.

{% raw %}
```yaml
registries:
  ruby-example:
    type: rubygems-server
    url: https://rubygems.example.com
    username: octocat@example.com
    password: ${{secrets.MY_RUBYGEMS_PASSWORD}}
```
{% endraw %}

{% raw %}
```yaml
registries:
  ruby-github:
    type: rubygems-server
    url: https://rubygems.pkg.github.com/octocat/github_api
    token: ${{secrets.MY_GITHUB_PERSONAL_TOKEN}}
```
{% endraw %}

### `terraform-registry`

O tipo `terraform-registry` dá suporte a um token.

{% raw %}
```yaml
registries:
  terraform-example:
    type: terraform-registry
    url: https://terraform.example.com
    token: ${{secrets.MY_TERRAFORM_API_TOKEN}}
```
{% endraw %}

{% ifversion fpt or ghec or ghes > 3.4 %} 
## <a name="enabling-support-for-beta-level-ecosystems"></a>Como habilitar o suporte para ecossistemas de nível beta

### `enable-beta-ecosystems`

Por padrão, o {% data variables.product.prodname_dependabot %} atualiza os manifestos de dependência e bloqueia os arquivos somente para ecossistemas totalmente compatíveis. Use o sinalizador `enable-beta-ecosystems` para aceitar atualizações para ecossistemas que ainda não estão em disponibilidade geral.

```yaml
# Configure beta ecosystem

version: 2
enable-beta-ecosystems: true
updates:{% ifversion fpt or ghec or ghes > 3.5 %}
  - package-ecosystem: "beta-ecosystem"{% else %}
  - package-ecosystem: "pub"{% endif %}
    directory: "/"
    schedule:
      interval: "daily"
```
{% endif %}
