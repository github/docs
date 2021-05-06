---
title: Opções de configuração para atualizações de dependências
intro: 'Informações detalhadas para todas as opções que você pode usar para personalizar como o {% data variables.product.prodname_dependabot %} mantém seus repositórios.'
permissions: 'People with write permissions to a repository can configure {% data variables.product.prodname_dependabot %} for the repository.'
redirect_from:
  - /github/administering-a-repository/configuration-options-for-dependency-updates
miniTocMaxHeadingLevel: 4
versions:
  free-pro-team: '*'
topics:
  - Repositories
---

### Sobre o arquivo *dependabot.yml*

O arquivo de configuração do {% data variables.product.prodname_dependabot %} , *dependabot.yml*, usa a sintaxe YAML. Se você não souber o que é YAMLe quiser saber mais, consulte "[Aprender a usar YAML em cinco minutos](https://www.codeproject.com/Articles/1214409/Learn-YAML-in-five-minutes)".

Você deve armazenar este arquivo no diretório `.github` do seu repositório. Ao adicionar ou atualizar o arquivo *dependabot.yml* , isso aciona uma verificação imediata de atualizações de versão. Quaisquer opções que também afetem as atualizações de segurança são usadas na próxima vez que um alerta de segurança acionar um pull request para uma atualização de segurança. Para obter mais informações, consulte "[Habilitar e desabilitar as atualizações da versão](/github/administering-a-repository/enabling-and-disabling-version-updates)" e "[Configurar {% data variables.product.prodname_dependabot_security_updates %}](/github/managing-security-vulnerabilities/configuring-dependabot-security-updates)".

O arquivo *dependabot.yml* tem duas chaves obrigatórias de nível superior: `versão`e `atualizações`. Opcionalmente, você pode incluir uma chave de `registro` de nível superior. O arquivo deve começar com a `versão: 2`.

### Opções de configuração para atualizações

A chave `atualizações` de nível superior é obrigatória. Você a utiliza para configurar como {% data variables.product.prodname_dependabot %} atualiza as versões ou as dependências do seu projeto. Cada entrada configura as configurações de atualização para um gerenciador de pacotes específico. Você pode usar o seguinte opções.

| Opção                                                                      | Obrigatório | Descrição                                                                            |
|:-------------------------------------------------------------------------- |:-----------:|:------------------------------------------------------------------------------------ |
| [`package-ecosystem`](#package-ecosystem)                                  |    **X**    | Gerenciador de pacotes para usar                                                     |
| [`diretório`](#directory)                                                  |    **X**    | Localização de manifestos de pacotes                                                 |
| [`schedule.interval`](#scheduleinterval)                                   |    **X**    | Com que frequência verificar se há atualizações                                      |
| [`allow`](#allow)                                                          |             | Personalizar quais atualizações são permitidas                                       |
| [`assignees`](#assignees)                                                  |             | Responsáveis por definir pull request                                                |
| [`commit-message`](#commit-message)                                        |             | Preferências de mensagem do commit                                                   |
| [`ignore`](#ignore)                                                        |             | Ignorar determinadas dependências ou versões                                         |
| [`insecure-external-code-execution`](#insecure-external-code-execution)    |             | Permitir ou negar a execução de código nos arquivos de manifesto                     |
| [`etiquetas`](#labels)                                                     |             | Etiquetas para definir pull requests                                                 |
| [`marco`](#milestone)                                                      |             | Marcos para definir pull requests                                                    |
| [`open-pull-requests-limit`](#open-pull-requests-limit)                    |             | Limite de número de pull request para atualizações de versão                         |
| [`pull-request-branch-name.separator`](#pull-request-branch-nameseparator) |             | Alterar o separador para nomes do branch de pull request                             |
| [`rebase-strategy`](#rebase-strategy)                                      |             | Desativar o rebasamento automático                                                   |
| [`registros`](#registries)                                                 |             | Registros privados que {% data variables.product.prodname_dependabot %} pode acessar |
| [`reviewers`](#reviewers)                                                  |             | Revisores que irão configurar pull request                                           |
| [`schedule.day`](#scheduleday)                                             |             | Dia da semana para verificar se há atualizações                                      |
| [`schedule.time`](#scheduletime)                                           |             | Hora do dia para procurar atualizações (hh:mm)                                       |
| [`schedule.timezone`](#scheduletimezone)                                   |             | Fuso horário para hora do dia (identificador de zona)                                |
| [`target-branch`](#target-branch)                                          |             | Branch para criar pull requests contra                                               |
| [`vendor`](#vendor)                                                        |             | Atualizar dependências de vendor ou armazenadas em cache                             |
| [`versioning-strategy`](#versioning-strategy)                              |             | Como atualizar os requisitos da versão do manifesto                                  |

Estas opções se encaixam, geralmente, nas seguintes categorias.

- Opções de configuração essenciais que você deve incluir em todas as configurações: [`package-ecosystem`](#package-ecosystem), [`directory`](#directory),[`schedule.interval`](#scheduleinterval).
- Opções para personalizar o agendamento da atualização: [`schedule.time`](#scheduletime), [`schedule.timezone`](#scheduletimezone), [`schedule.day`](#scheduleday).
- Opções para controlar quais dependências são atualizadas: [`allow`](#allow), [`ignore`](#ignore), [`vendor`](#vendor).
- Opções para adicionar metadata a pull requests: [`reviewers`](#reviewers), [`assignees`](#assignees), [`labels`](#labels), [`milestone`](#milestone).
- Opções para alterar o comportamento dos pull requests: [`target-branch`](#target-branch), [`versioning-strategy`](#versioning-strategy), [`commit-message`](#commit-message), [`rebase-strategy`](#rebase-strategy), [`pull-request-branch-name.separator`](#pull-request-branch-nameseparator).

Além disso, a opção [`open-pull-requests-limite`](#open-pull-requests-limit) altera o número máximo de pull requests para atualizações de versão que o {% data variables.product.prodname_dependabot %} pode abrir.

{% note %}

**Nota:** Algumas dessas opções de configuração também podem afetar pull requests levantadas para atualizações de segurança de manifestos vulneráveis do pacote.

As atualizações de segurança são geradas para manifestos de pacote vulneráveis apenas no branch padrão. Quando as opções de configuração são definidas para o mesmo branch (verdadeiro a menos que você use `target-branch`) e especifica um `package-ecosystem` e o `directory` para o manifesto vulnerável, as pull requests para atualizações de segurança usam opções relevantes.

Em geral, as atualizações de segurança usam quaisquer opções de configuração que afetam pull request, por exemplo, adicionando metadados ou alterando seu comportamento. Para obter mais informações sobre atualizações de segurança, consulte "[Configurando {% data variables.product.prodname_dependabot_security_updates %}](/github/managing-security-vulnerabilities/configuring-dependabot-security-updates)."

{% endnote %}

#### `package-ecosystem`

**Obrigatório**. Você adiciona um elemento de `package-ecosystem` para cada gerenciador de pacotes que você deseja que {% data variables.product.prodname_dependabot %} monitore para novas versões. O repositório também deve conter um manifesto de dependência ou um arquivo de bloqueio para cada um desses gerenciadores de pacotes. Se você quiser habilitar o vendoring para um gerente de pacotes com o qual é compatível, as dependências do vendor devem estar localizadas no diretório necessário. Para obter mais informações, consulte o [`vendor`](#vendor) abaixo.

{% data reusables.dependabot.supported-package-managers %}

```yaml
# Configuração básica para três gerenciadores de pacotes

versão: 2
atualizações:

  # Manter dependências para o GitHub Actions
  - package-ecosystem: "github-actions"
    directory: "/"
    schedule:
      interval: "daily"

  # Manter dependências para npm
  - package-ecosystem: "npm"
    directory: "/"
    schedule:
      interval: "daily"

  # Manter dependências para Composer
  - package-ecosystem: "composer"
    directory: "/"
    schedule:
      interval: "daily"
```

#### `diretório`

**Obrigatório**. Você deve definir o local dos manifestos dos pacote para cada gerenciador de pacotes (por exemplo, *package.json* ou *Gemfile*). Você define o diretório relativo à raiz do repositório para todos os ecossistemas, exceto GitHub Actions. Para GitHub Actions, defina o diretório para `/` para verificar os arquivos de fluxo de trabalho em `.github/workflows`.

```yaml
# Especifique o local dos arquivos de manifesto para cada gerenciador de pacotes

versão: 2
atualizações:
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

#### `schedule.interval`

**Obrigatório**. Você deve definir a frequência de verificação das novas versões para cada gerenciador de pacotes. Por padrão, isso é às 5 am UTC. Para modificar isso, use [`schedule.time`](#scheduletime) e [`schedule.timezone`](#scheduletimezone).

- `diariamente`— ocorre em todos os dias de semana, de segunda a sexta.
- `semanal`— ocorre uma vez por semana. Por padrão, ocorre às segundas. Para modificar isso, use [`schedule.day`](#scheduleday).
- `mensal`— ocorre uma vez por mês. Isso é no primeiro dia do mês.

```yaml
# Definir agendamento de atualização para cada gerenciador de pacotes

versão: 2
atualizações:

  - package-ecosystem: "github-actions"
    directory: "/"
    schedule:
      # Verificar se há atualizações para o GitHub Actions todos os dias de semana
      interval: "daily"

  - package-ecosystem: "composer"
    directory: "/"
    schedule:
      # Verificar se há atualizações gerenciadas pelo Composer uma vez por semana
      interval: "weekly"
```

{% note %}

**Observação**: o `agendamento` define quando {% data variables.product.prodname_dependabot %} tenta realizar uma nova atualização. No entanto, essa não é a única vez que você poderá receber pull requests. As atualizações podem ser acionadas com base em alterações do seu arquivo `dependabot.yml`, alterações no(s) seu(s) arquivo(s) de manifesto após uma falha na atualização ou {% data variables.product.prodname_dependabot_security_updates %}. Para obter mais informações, consulte "[Frequência de pull requests de {% data variables.product.prodname_dependabot %}](/github/administering-a-repository/about-dependabot-version-updates#frequency-of-dependabot-pull-requests)" e "[Sobre {% data variables.product.prodname_dependabot_security_updates %}](/github/managing-security-vulnerabilities/about-dependabot-security-updates)".

{% endnote %}

#### `allow`

{% data reusables.dependabot.default-dependencies-allow-ignore %}

Use a opção `allow` para personalizar quais dependências são atualizadas. Isso não tem impacto nas atualizações de segurança para dependências vulneráveis. Você pode usar o seguinte opções:

- `dependency-name`—use para permitir atualizações para dependências com nomes correspondentes, opcionalmente usando `*` para corresponder a zero ou mais caracteres. Para dependências Java, o formato do atributo `dependency-name` é: `groupId:artifactId`, por exemplo: `org.kohsuke:github-api`.
- `dependency-type`—use para permitir atualizações para dependências de tipos específicos.

  | Tipos de dependência | Suportado por gestores de pacotes                   | Permite atualizações                                                                                                                        |
  | -------------------- | --------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
  | `direta`             | Todas                                               | Todas as dependências explicitamente definidas.                                                                                             |
  | `indireta`           | `bundler`, `pip`, `composer`, `cargo`               | Dependências de dependências diretas (também conhecidas como sub-dependências ou dependências transitórias).                                |
  | `todos`              | Todas                                               | Todas as dependências explicitamente definidas. Para `bundler`, `pip`, `composer`, `cargo`, também as dependências de dependências diretas. |
  | `produção`           | `bundler`, `composer`, `mix`, `maven`, `npm`, `pip` | Somente dependências no "grupo de dependência do produto".                                                                                  |
  | `desenvolvimento`    | `bundler`, `composer`, `mix`, `maven`, `npm`, `pip` | Somente dependências no "grupo de dependência do desenvolvimento".                                                                          |

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

#### `assignees`

Use `assignees` para especificar responsáveis individuais para todas as pull requests criadas para um gerenciador de pacotes.

{% data reusables.dependabot.option-affects-security-updates %}

```yaml
# Especificar responsáveis para pull requests

versão: 2
atualizações:
  - package-ecosystem: "npm"
    directory: "/"
    schedule:
      interval: "daily"
    # Adicionar responsáveis
    assignees:
      - "octocat"
```

#### `commit-message`

Por padrão, o {% data variables.product.prodname_dependabot %} tenta detectar suas preferências de mensagem do commit e usa padrões similares. Use a opção `commit-message` para especificar suas preferências explicitamente.

Opções suportadas

- `prefix` especifica um prefixo para todas as mensagens do commit.
- `prefix-development` especifica um prefixo separado para todas as mensagens do commit que atualizam dependências no grupo de dependências de Desenvolvimento. Quando você especificar um valor para esta opção, o `prefix` é usado apenas para atualizações para dependências no grupo de dependência de Produção. Isto é suportado por: `bundler`, `composer`, `mix`, `maven`, `npm` e `pip`.
- `include: "scope"` especifica que qualquer prefixo é seguido por uma lista das dependências atualizadas no commit.

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

#### `ignore`

{% data reusables.dependabot.warning-ignore-option %}

##### Verificando preferências existentes para ignorar

Antes de adicionar uma opção `ignore` ao arquivo de configuração, verifique se você usou algum dos comandos `@dependabot ignore` em uma atualização de segurança ou pull request da atualização da versão. O {% data variables.product.prodname_dependabot %} armazena essas preferências para cada gerenciador de pacotes centralmente e esta informação é substituída pela opção `ignore`. Para obter mais informações sobre os comandos `@dependabot ignore`, consulte [Gerenciando pull requests para atualizações de dependências](/github/administering-a-repository/managing-pull-requests-for-dependency-updates)".

Você pode verificar se um repositório tem preferências armazenadas pesquisando no repositório por  `"@dependabot ignore" in:comments`. Se você revisar quaisquer pull requests nos resultados, você pode decidir se especifica ou não essas dependências ou versões ignoradas no arquivo de configuração.

##### Especificando dependências e versões para ignorar

{% data reusables.dependabot.default-dependencies-allow-ignore %}

Você pode usar a opção `ignore` para personalizar quais dependências são atualizadas. A opção `ignore` suporta as seguintes opções.

- `dependency-name`—use para ignorar atualizações para dependências com nomes correspondentes, opcionalmente usando `*` para corresponder a zero ou mais caracteres. Para dependências Java, o formato do atributo `dependency-name` é: `groupId:artifactId`, por exemplo: `org.kohsuke:github-api`.
- `versions`—use para ignorar versões específicas ou intervalos de versões. Se você deseja definir um intervalo, use o padrão pattern para o gerenciador de pacotes (por exemplo: `^1.0.0` para npm, ou `~> 2.0` para o Bundler).

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
```

{% note %}

**Observação**: {% data variables.product.prodname_dependabot %} só pode executar atualizações de versão no manifesto ou em arquivos de bloqueio se puder acessar todas as dependências do arquivo, ainda que você adicione dependências inacessíveis à opção `ignorar` do seu arquivo de configuração. Para obter mais informações, consulte "[Gerenciar configurações de segurança e análise para a sua organização](/organizations/keeping-your-organization-secure/managing-security-and-analysis-settings-for-your-organization#allowing-dependabot-to-access-private-dependencies)" e "[Solução de problemas de erros de {% data variables.product.prodname_dependabot %} ](/github/managing-security-vulnerabilities/troubleshooting-dependabot-errors#dependabot-cant-resolve-your-dependency-files)".


{% endnote %}

#### `insecure-external-code-execution`

Gerenciadores de pacotes com os valores de`package-ecossistema` de `bundler`, `mix` e `pip` pode executar o código externo no manifesto como parte do processo de atualização da versão. Isto pode permitir que um pacote comprometido roube credenciais ou obtenha acesso aos registros configurados. Ao adicionar a configuração dos [`registros`](#registries) dentro de uma configuração de `atualização`, {% data variables.product.prodname_dependabot %} impedirá automaticamente a execução de código externo. Neste caso, poderá ocorrer uma falha na atualização da versão. Você pode optar por substituir esse comportamento e permitir a execução de código externo para o `bundler`, `mix` e `pip` gerenciadores de pacotes, configurando `insecure-external-code-execution` como `permitir`.

Você pode negar explicitamente a execução de código externo, independentemente de haver uma configuração de `registros` para esta configuração de atualização, definindo `inseguro-external-code-execution` como `negar`.

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

#### `etiquetas`

{% data reusables.dependabot.default-labels %}

Use `labels` para substituir etiquetas padrão e especificar etiquetas alternativas para todas as pull requests criadas para um gerenciador de pacotes. Se qualquer uma destas etiquetas não for definida no repositório, será ignorado. Para desativar todas as etiquetas, incluindo as etiquetas padrão, use `labels: [ ]`.

{% data reusables.dependabot.option-affects-security-updates %}

```yaml
# Especifique etiquetas para pull requests

versão: 2
atualizações:
  - package-ecosystem: "npm"
    directory: "/"
    schedule:
      interval: "daily"
    # Especifique etiquetas para npm pull requests
    labels:
      - "npm"
      - "dependencies"
```

#### `marco`

Use `milestone` para associar todas as pull requests levantadas por um gerenciador de pacotes com um marco. Você precisa especificar o identificador numérico do marco e não sua etiqueta. Se você visualizar um marco, a parte final da URL da página, depois de `milestone` é o identificador. Por exemplo: `https://github.com/<org>/<repo>/milestone/3`.

{% data reusables.dependabot.option-affects-security-updates %}

```yaml
# Especificar um marco para as pull requests

version: 2
updates:
  - package-ecosystem: "npm"
    directory: "/"
    schedule:
      interval: "daily"
    # Associar pull requests com marco "4"
    milestone: 4
```

#### `open-pull-requests-limit`

Por padrão, {% data variables.product.prodname_dependabot %} abre um máximo de cinco pull requests para atualizações de versão. Uma vez que há cinco pull requests abertos, novas solicitações serão bloqueadas até que você faça o merge ou feche alguns dos pull requests aberto, e, após esse peeríodo, novos pull requests poderão ser abertos em atualizações subsequentes. Use `open-pull-requests-limit` para alterar este limite. Isto também fornece uma maneira simples de desativar temporariamente as atualizações de versão para um gerenciador de pacotes.

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

#### `pull-request-branch-name.separator`

{% data variables.product.prodname_dependabot %} gera um branch para cada pull request. Cada nome de branch inclui `dependabot` e o gerenciador de pacotes e dependências que são atualizados. Por padrão, essas partes são separadas por um símbolo `/` , por exemplo: `dependabot/npm_and_yarn/next_js/acorn-6.4.1`.

Use `pull-request-branch-name.separator` para especificar um separador diferente. Pode ser um desses: `"-"`, `_` ou `/`. O símbolo de hífen deve estar entre aspas porque, caso contrário, será interpretado como iniciando uma lista YAML vazia.

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

#### `rebase-strategy`

Por padrão, o {% data variables.product.prodname_dependabot %} faz o rebasamento automaticamente das pull requests abertas quando detectar conflitos. Use `rebase-strategy` para desativar este comportamento.

Estratégias de rebase disponíveis

- `disabled` para desabilitar rebasing automático.
- `auto` para usar o comportamento padrão e rebase das pull request abertas quando conflitos forem detectados.

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

#### `registros`

Para permitir que {% data variables.product.prodname_dependabot %} acesse um registro de pacote privado ao executar uma atualização de versão, você deverá incluir uma configuração de `registros` com a configuração de `atualizações` relevante. Pode permitir que todos os registros definidos sejam usados configurando `registros` como `"*"`. Como alternativa, você pode listar os registros que a atualização pode usar. Para isso, use o nome do registro conforme definido na seção de `registros` do arquivo _dependabot.yml_.

Para permitir que {% data variables.product.prodname_dependabot %} use os gerenciadores de pacote `bundler`, `mix` e `pip` para atualizar dependências em registros privados, você pode optar por permitir a execução de código externo. Para obter mais informações, consulte [`insecure-external-code-execution`](#insecure-external-code-execution).

{% raw %}
```yaml
# Allow {% data variables.product.prodname_dependabot %} to use one of the two defined private registries 
# when updating dependency versions for this ecosystem

version: 2
registries:
  maven-github:
    type: maven-repository
    url: https://maven.pkg.github.com/octocat
    token: ${{secrets.MY_GITHUB_PERSONAL_TOKEN}}
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
```
{% endraw %}

#### `reviewers`

Use `reviewers` para especificar revisores individuais ou equipes de revisores para todas as pull requests levantadas para um gerenciador de pacotes. Você deve usar o nome completo da equipe, incluindo a organização, como se você estivesse @mencionando a equipe.

{% data reusables.dependabot.option-affects-security-updates %}

```yaml
# Especificar revisores para pull requests

version: 2
updates:
  - package-ecosystem: "pip"
    directory: "/"
    schedule:
      interval: "daily"
    # Adicionar revisores
    reviewers:
      - "octocat"
      - "my-username"
      - "my-org/python-team"
```

#### `schedule.day`

Quando você definiu um cronograma de atualização `semanal` , por padrão, {% data variables.product.prodname_dependabot %} verifica novas versões na segunda-feira às 05:00 UTC. Use `schedule.day` para especificar um dia alternativo para procurar atualizações.

Valores suportados

- `segunda-feira`
- `terça-feira`
- `quarta-feira`
- `quinta-feira`
- `sexta-feira`
- `sábado`
- `domingo`

```yaml
# Especificar o dia para verificações semanais

version: 2
updates:
  - package-ecosystem: "npm"
    directory: "/"
    schedule:
      interval: "weekly"
      # Verificar atualizações npm aos domingos
      day: "sunday"
```

#### `schedule.time`

Por padrão, {% data variables.product.prodname_dependabot %} verifica se há novas versões às 05:00 UTC. Use `schedule.time` para especificar um horário alternativo do dia para procurar por atualizações (format: `hh:mm`).

```yaml
# Configurar um horário para verificações
version: 2
updates:
  - package-ecosystem: "npm"
    directory: "/"
    schedule:
      interval: "daily"
      # Verificar atualizações npm às 9am UTC
      time: "09:00"
```

#### `schedule.timezone`

Por padrão, {% data variables.product.prodname_dependabot %} verifica se há novas versões às 05:00 UTC. Use `schedule.timezone` para especificar um fuso horário alternativo. O identificador do fuso horário deve ser do banco de dados do fuso horário mantido por [iana](https://www.iana.org/time-zones). Para obter mais informações, consulte [lista de fusos horários do banco de dados do tz](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones).

```yaml
# Especificar o fuso horário para verificações

version: 2
updates:
  - package-ecosystem: "npm"
    directory: "/"
    schedule:
      interval: "daily"
      time: "09:00"
      # Usar horário padrão do Japão (UTC +09:00)
      timezone: "Asia/Tokyo"
```

#### `target-branch`

Por padrão, {% data variables.product.prodname_dependabot %} verifica se há arquivos de manifesto no branch padrão e levanta pull requests para atualizações de versão contra este branch. Use `target-branch` para especificar um branch diferente para arquivos de manifesto e para pull requests. Quando você usa esta opção, as configurações para este gerenciador de pacotes não afetarão mais quaisquer pull requests levantadas para atualizações de segurança.

```yaml
# Especifique um branch não padronizado para pull requests para pip

version: 2
updates:
  - package-ecosystem: "pip"
    directory: "/"
    schedule:
      interval: "daily"
    # Criar pull requests para atualizações de versão
    # pip contra o branck "desenvolver"
    target-branch: "develop"
    # Etiquetas em pull requests somente para atualizações de versão
    labels:
      - "pip dependencies"

  - package-ecosystem: "npm"
    directory: "/"
    schedule:
      interval: "weekly"
      # Verificar atualizações de npm aos domingos
      day: "sunday"
    # Etiquetas em pull requests para atualizações de segurança e versão
    labels:
      - "npm dependencies"
```

#### `vendor`

Use a opção `vendor` para dizer {% data variables.product.prodname_dependabot %} para dependências de vendor ao atualizá-las. Não use esta opção se você estiver usando o `gomod`, uma vez que {% data variables.product.prodname_dependabot %} detecta automaticamente o vendoring para esta ferramenta.

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

| Gerenciador de pacotes | Caminho de arquivo necessário para dependências delegadas                                                         | Mais informações                                                             |
| ---------------------- | ----------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `bundler`              | As dependências devem estar no diretório _vendor/cache_.</br>Outros caminhos de arquivo não são compatíveis.      | [documentação de `bundle cache`](https://bundler.io/man/bundle-cache.1.html) |
| `gomod`                | Nenhuma exigência de caminho (as dependências geralmente estão localizadas no diretório do _vendor_ do diretório) | [documentação de `go mod vendor`](https://golang.org/ref/mod#go-mod-vendor)  |


#### `versioning-strategy`

Quando {% data variables.product.prodname_dependabot %} edita um arquivo arquivo manifesto para atualizar uma versão, ele usa as seguintes estratégias globais:

- Para apps, os requisitos de versão são aumentados, por exemplo: npm, pip e Composer.
- Para bibliotecas, o intervalo de versões é alargado, por exemplo: Bundler e Cargo.

Use a opção `versioning-strategy` para alterar esse comportamento para gerenciadores de pacotes suportados.

{% data reusables.dependabot.option-affects-security-updates %}

Estratégias de atualização disponíveis

| Opção                   | Suportado por                                       | Ação                                                                                                                                         |
| ----------------------- | --------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| `lockfile-only`         | `bundler`, `cargo`, `composer`, `mix`, `npm`, `pip` | Crie apenas pull requests para atualizar arquivos de bloqueio. Ignora quaisquer novas versões que exigiriam mudanças de manifesto do pacote. |
| `auto`                  | `bundler`, `cargo`, `composer`, `mix`, `npm`, `pip` | Siga a estratégia padrão descrita acima.                                                                                                     |
| `widen`                 | `composer`, `npm`                                   | Relaxa o requisito da versão para incluir a versão nova e antiga, quando possível.                                                           |
| `increase`              | `bundler`, `composer`, `npm`                        | Sempre aumentar o requisito da versão para corresponder à nova versão.                                                                       |
| `increase-if-necessary` | `bundler`, `composer`, `npm`                        | Aumenta o requisito da versão apenas quando exigido pela nova versão.                                                                        |

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

### Opções de configuração para registros privados

A chave de `registros` de nível superior é opcional. Ela permite especificar detalhes de autenticação que {% data variables.product.prodname_dependabot %} pode usar para acessar os registros de pacotes privados.

{% note %}

**Observação:** Os registros privados por trás de firewalls em redes privadas não são compatíveis.

{% endnote %}

O valor da chave de `registros` é uma matriz associativa e cada elemento que consiste de uma chave que identifica um determinado registro particular e um valor que é uma matriz associativa que especifica as configurações necessárias para acessar esse registro. O arquivo *dependabot.yml* a seguir configura um registro identificado como `dockerhub` na seção de `registros` do arquivo e faz referência a isso na seção `atualizações` do arquivo.

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

Você utiliza as seguintes opções para especificar as configurações de acesso. As configurações de registro devem conter um `tipo` e uma `url`, e, de modo geral, uma combinação de `nome de usuário` e `senha` ou `token`.

| Option&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; | Descrição                                                                                                                                                                                                                                                                                                      |
|:------------------------------------------------------------------------------------------------------ |:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `tipo`                                                                                                 | Identifica o tipo de registro. Veja a lista completa de tipos abaixo.                                                                                                                                                                                                                                          |
| `url`                                                                                                  | A URL a ser usada para acessar as dependências deste registro. O protocolo é opcional. Se não for especificado, presume-se `https://`. {% data variables.product.prodname_dependabot %} adiciona ou ignora barras à direita, conforme necessário.                                                              |
| `nome de usuário`                                                                                      | O nome de usuário que {% data variables.product.prodname_dependabot %} usa para acessar o registro.                                                                                                                                                                                                            |
| `senha`                                                                                                | Uma referência a um segredo de {% data variables.product.prodname_dependabot %} que contém a senha para o usuário especificado. Para obter mais informações, consulte "[Gerenciar segredos criptografados para o Dependabot](/github/administering-a-repository/managing-encrypted-secrets-for-dependabot)".   |
| `token`                                                                                                | Uma referência a um segredo de {% data variables.product.prodname_dependabot %} que contém um token de acesso para este registro. Para obter mais informações, consulte "[Gerenciar segredos criptografados para o Dependabot](/github/administering-a-repository/managing-encrypted-secrets-for-dependabot)". |
| `replaces-base`                                                                                        | Para registros com `type: python-index`, se o valor booleano for `true`, o pip resolverá as dependências usando a URL especificada, em vez da URL base do Índice de Pacotes Python (por padrão `https://pypi.org/simple`).                                                                                     |


Cada `tipo` de configuração exige que você forneça configurações específicas. Alguns tipos permitem mais de uma maneira de conectar-se. As seções a seguir fornecem detalhes das configurações que você deve usar para cada `tipo`.

#### `composer-repository`

O tipo `composer-repository` é compatível com nome de usuário e senha.

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

#### `docker-registry`

O tipo `docker-registry` é compatível com nome de usuário e senha.

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

#### `git`

O tipo `git` é compatível com o nome de usuário e senha.

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

#### `maven-repository`

O tipo `maven-repository` é compatível com o nome de usuário e senha ou token.

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

{% raw %}
```yaml
registries:
  maven-github:
    type: maven-repository
    url: https://maven.pkg.github.com/octocat
    token: ${{secrets.MY_GITHUB_PERSONAL_TOKEN}}
```
{% endraw %}

#### `npm-registry`

O tipo `npm-registry` é compatível com o nome de usuário e senha ou token.

{% raw %}
```yaml
registries:
  npm-npmjs:
    type: npm-registry
    url: https://registry.npmjs.org
    username: octocat
    password: ${{secrets.MY_NPM_PASSWORD}}
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

#### `nuget-feed`

O tipo `nuget-feed` é compatível com o nome de usuário e senha ou token.

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

#### `python-index`

O tipo `python-index` é compatível com o nome de usuário e senha ou token.

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

#### `rubygems-server`

O tipo `rubygems-server` é compatível com o nome de usuário e senha ou token.

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
