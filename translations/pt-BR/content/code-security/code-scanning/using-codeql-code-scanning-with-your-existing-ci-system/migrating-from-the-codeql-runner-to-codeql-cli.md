---
title: Fazendo a migração do executor CodeQL para a CLI do CodeQL
shortTitle: Fazendo a migração do executor do CodeQL
intro: 'Você pode usar o {% data variables.product.prodname_codeql_cli %} para realizar as mesmas tarefas que {% data variables.product.prodname_codeql_runner %}.'
product: '{% data reusables.gated-features.code-scanning %}'
versions:
  fpt: '*'
  ghes: '>=3.1'
  ghae: next
  ghec: '*'
topics:
  - Advanced Security
  - Code scanning
  - CodeQL
---

# Fazendo a migração de {% data variables.product.prodname_codeql_runner %} para {% data variables.product.prodname_codeql_cli %}

{% data variables.product.prodname_codeql_runner %} está tornando-se obsoleto. Em vez disso, você pode usar a versão 2.6.3 de {% data variables.product.prodname_codeql_cli %} ou superior. Este documento descreve como fazer a migração de fluxos de trabalho comuns de {% data variables.product.prodname_codeql_runner %} para {% data variables.product.prodname_codeql_cli %}.

## Instalação

Faça o download do **{% data variables.product.prodname_codeql %} pacote** a partir do repositório [`github/codeql-action`](https://github.com/github/codeql-action/releases). Este pacote contém {% data variables.product.prodname_codeql_cli %} e as consultas e bibliotecas padrão de {% data variables.product.prodname_codeql %}.

Para obter mais informações sobre como configurar o {% data variables.product.prodname_codeql_cli %}, consulte "[Instalando {% data variables.product.prodname_codeql_cli %} no seu sistema de CI](/code-security/code-scanning/using-codeql-code-scanning-with-your-existing-ci-system/installing-codeql-cli-in-your-ci-system)".

## Visão geral das alterações do fluxo de trabalho

Um fluxo de trabalho típico que usa o {% data variables.product.prodname_codeql_runner %} para analisar uma base de código tem as seguintes etapas.
- `codeql-runner-<platform> inicia` para começar a criar bancos de dados de {% data variables.product.prodname_codeql %} e ler a configuração.
- Para linguagens compiladas: defina variáveis de ambiente produzidas pela etapa `init`.
- Para linguagens compiladas: execute o autobuild ou etapas manuais de compilação.
- `codeql-runner-<platform> analise` para terminar de criar bancos de dados de {% data variables.product.prodname_codeql %}, executar consultas para analisar cada banco de dados de {% data variables.product.prodname_codeql %}, resumir os resultados em um arquivo SARIF e fazer o upload dos resultados para {% data variables.product.prodname_dotcom %}.

Um fluxo de trabalho típico que usa o {% data variables.product.prodname_codeql_cli %} para analisar uma base de código tem as seguintes etapas.
- `codeql database create` para criar bancos de dados de {% data variables.product.prodname_codeql %}.
  - Para linguagens compiladas: Opcionalmente, forneça um comando de criação.
- `codeql base de dados analisa` para executar consultas para analisar cada banco de dados de {% data variables.product.prodname_codeql %} e resumir os resultados de um arquivo SARIF. Esse comando deve ser executado uma vez para cada linguagem ou banco de dados.
- `github do codeql upload-results` para fazer o upload dos arquivos SARIF para {% data variables.product.prodname_dotcom %} resultantes e serem exibidos como alertas de verificação de código. Esse comando deve ser executado uma vez para cada linguagem ou arquivo SARIF.

Para obter mais informações, consulte "[Configurar {% data variables.product.prodname_codeql_cli %} no seu sistema de CI](/code-security/code-scanning/using-codeql-code-scanning-with-your-existing-ci-system/configuring-codeql-cli-in-your-ci-system)."

## Exemplos de usos comuns para o {% data variables.product.prodname_codeql_cli %}

### Sobre os exemplos

Estes exemplos assumem que o código-fonte foi check-out para o diretório de trabalho atual. Se você usa um diretório diferente, mude o argumento `--source-root` e as etapas de criação.

Esses exemplos também assumem que a {% data variables.product.prodname_codeql_cli %} é colocado no PATH atual.

Nestes exemplos, um token de {% data variables.product.prodname_dotcom %} com escopos adequados é armazenado na variável de ambiente `$TOKEN` e passado para os comandos de exemplo via stdin ou é armazenado na variável de ambiente `$GITHUB_TOKEN`.

O nome da ref e o commit SHA que está sendo verificado e analisado nesses exemplos são conhecidos durante o fluxo de trabalho. Para um branch, use `refs/heads/BRANCH-NAME` como ref. Para o commit principal de um pull request, use `refs/pulls/NUMBER/head`. Para um commit de merge gerado por {% data variables.product.prodname_dotcom %} de um pull request, use `refs/pulls/NUMBER/merge`. Todos ps exemplos abaixo usam `refs/heads/main`. Se você usar um nome de branch diferente, deverá modificar o código do exemplo.

### Linguagem única não compilada (JavaScript)

Executor:
```bash
echo "$TOKEN" | codeql-runner-linux init --repository my-org/example-repo \
    --languages javascript \
    --github-url https://github.com --github-auth-stdin

echo "$TOKEN" | codeql-runner-linux analyze --repository my-org/example-repo
    --github-url https://github.com --github-auth-stdin
    --commit deb275d2d5fe9a522a0b7bd8b6b6a1c939552718 --ref refs/heads/main
```
CLI:
```bash
codeql database create /codeql-dbs/example-repo --language=javascript \
    --source-root=.

# The default query suite is called `<language>-code-scanning.qls`.
codeql database analyze /codeql-dbs/example-repo \
    javascript-code-scanning.qls --sarif-category=javascript \
    --format=sarif-latest --output=/temp/example-repo-js.sarif

echo "$TOKEN" | codeql github upload-results --repository=my-org/example-repo \
    --ref=refs/heads/main --commit=deb275d2d5fe9a522a0b7bd8b6b6a1c939552718 \
    --sarif=/temp/example-repo-js.sarif --github-auth-stdin
```

### Linguagem única não compilada (JavaScript) que usa um conjunto de consultas diferente (segurança e qualidade)

É possível adotar uma abordagem semelhante para as linguagens compiladas ou para várias linguagens.

Executor:
```bash
echo "$TOKEN" | codeql-runner-linux init --repository my-org/example-repo \
    --languages javascript \
    --github-url https://github.com --github-auth-stdin

echo "$TOKEN" | codeql-runner-linux analyze --repository my-org/example-repo \
    --queries security-and-quality \
    --github-url https://github.com --github-auth-stdin \
    --commit deb275d2d5fe9a522a0b7bd8b6b6a1c939552718 --ref refs/heads/main
```
CLI:
```bash
codeql database create /codeql-dbs/example-repo --language=javascript \
    --source-root=.

# Use `<language>-<suite name>.qls`
codeql database analyze /codeql-dbs/example-repo  \
    javascript-security-and-quality.qls --sarif-category=javascript
    --format=sarif-latest --output=/temp/example-repo-js.sarif

echo "$TOKEN" | codeql github upload-results --repository=my-org/example-repo \
    --ref=refs/heads/main --commit=deb275d2d5fe9a522a0b7bd8b6b6a1c939552718 \
    --sarif=/temp/example-repo-js.sarif --github-auth-stdin
```

### Linguagem única não compilada (JavaScript) que usa um arquivo de configuração personalizado

É possível adotar uma abordagem semelhante para as linguagens compiladas ou para várias linguagens.

Executor:
```bash
echo "$TOKEN" | codeql-runner-linux init --repository my-org/example-repo \
    --languages javascript \
    --config-file .github/codeql/codeql-config.yml \
    --github-url https://github.com --github-auth-stdin

echo "$TOKEN" | codeql-runner-linux analyze --repository my-org/example-repo \
    --github-url https://github.com --github-auth-stdin \
    --commit deb275d2d5fe9a522a0b7bd8b6b6a1c939552718 --ref refs/heads/main
```
CLI:
```bash
# Use `--codescanning-config` with the path to the YAML configuration file.
codeql database create /codeql-dbs/example-repo --language=javascript \
    --codescanning-config=.github/codeql/codeql-config.yml \
    --source-root=.

codeql database analyze /codeql-dbs/example-repo  \
    --sarif-category=javascript
    --format=sarif-latest --output=/temp/example-repo-js.sarif

echo "$TOKEN" | codeql github upload-results --repository=my-org/example-repo \
    --ref=refs/heads/main --commit=deb275d2d5fe9a522a0b7bd8b6b6a1c939552718 \
    --sarif=/temp/example-repo-js.sarif --github-auth-stdin
```

### Linguagem compilada única que usa autobuild (Java)

Executor:
```bash
echo "$TOKEN" | codeql-runner-linux init --repository my-org/example-repo \
    --languages java \
    --github-url https://github.com --github-auth-stdin

# Source the script generated by the init step to set up the environment to monitor the build.
. codeql-runner/codeql-env.sh

# Run the autobuilder for the given language.
codeql-runner-linux autobuild --language java

echo "$TOKEN" | codeql-runner-linux analyze --repository my-org/example-repo
    --github-url https://github.com --github-auth-stdin
    --commit deb275d2d5fe9a522a0b7bd8b6b6a1c939552718 --ref refs/heads/main
```
CLI:
```bash
# Run `codeql database create` without `--command`.
# This will run the autobuilder for the given language.
codeql database create /codeql-dbs/example-repo --language=java \
    --source-root=.

codeql database analyze /codeql-dbs/example-repo  \
    javascript-code-scanning.qls --sarif-category=java
    --format=sarif-latest --output=/temp/example-repo-java.sarif

echo "$TOKEN" | codeql github upload-results --repository=my-org/example-repo \
    --ref=refs/heads/main --commit=deb275d2d5fe9a522a0b7bd8b6b6a1c939552718 \
    --sarif=/temp/example-repo-java.sarif --github-auth-stdin
```

### Uma linguagem compilada que usa um comando de criação personalizado (Java)

Executor:
```bash
echo "$TOKEN" | codeql-runner-linux init --repository my-org/example-repo \
    --languages java \
    --github-url https://github.com --github-auth-stdin

# Source the script generated by the init step to set up the environment to monitor the build.
. codeql-runner/codeql-env.sh

# Run a custom build command.
mvn compile -DskipTests

echo "$TOKEN" | codeql-runner-linux analyze --repository my-org/example-repo
    --github-url https://github.com --github-auth-stdin
    --commit deb275d2d5fe9a522a0b7bd8b6b6a1c939552718 --ref refs/heads/main
```
CLI:
```bash
# Provide an explicit build command using `--command`.
codeql database create /codeql-dbs/example-repo --language=java \
    --command="mvn compile -DskipTests" --source-root=.

codeql database analyze /codeql-dbs/example-repo  \
    java-code-scanning.qls --sarif-category=java
    --format=sarif-latest --output=/temp/example-repo-java.sarif

echo "$TOKEN" | codeql github upload-results --repository=my-org/example-repo \
    --ref=refs/heads/main --commit=deb275d2d5fe9a522a0b7bd8b6b6a1c939552718 \
    --sarif=/temp/example-repo-java.sarif --github-auth-stdin
```

### Linguagem compilada única que usa rastreamento de compilação indireta (C# no Windows dentro do Azure DevOps)

O rastreamento indireto de compilação de uma linguagem permite que {% data variables.product.prodname_codeql %} detecte todos os passos de compilação entre as etapas `init` e `analyze`, quando o código não pode ser construído usando o autobuilder ou uma linha de comando de compilação explícita. Isso é útil ao usar as etapas de criação pré-configuradas do seu sistema de CI como, por exemplo, as tarefas `VSBuild` e `MSBuild` no Azure DevOps.

Executor:
```yaml
- task: CmdLine@1
  displayName: CodeQL Initialization
  inputs:
  script: "%CodeQLRunner%\\codeql-runner-win.exe init --repository my-org/example-repo --languages csharp --github-url https://github.com --github-auth $(Token)"
# Set the generated environment variables so they are available for subsequent commands, in the format required by Azure Pipelines.
- task: PowerShell@1
  displayName: Set CodeQL Environment Variables
  inputs:
      targetType: inline
      script: >
          $json = Get-Content $(System.DefaultWorkingDirectory)/codeql-runner/codeql-env.json | ConvertFrom-Json
          $json.PSObject.Properties | ForEach-Object {
              $template = "##vso[task.setvariable variable="
              $template += $_.Name
              $template += "]"
              $template += $_.Value
              echo "$template"
          }

# Execute a clean build using the VSBuild task.
- task: VSBuild@1
  inputs:
      solution: '**/*.sln'
      msbuildArgs: '/p:OutDir=$(Build.ArtifactStagingDirectory) /p:UseSharedCompilation=false'
      platform: Any CPU
      configuration: Release
      clean: True
  displayName: Visual Studio Build

# Analyze the database created as part of the build, by running the selected queries against it, and upload results to GitHub.
- task: CmdLine@2
  displayName: CodeQL Analyze
  inputs:
      script: '%CodeQLRunner%\codeql-runner-win.exe analyze --repository my-org/example-repo --commit $(Build.SourceVersion) --ref $(Build.SourceBranch) --github-url https://github.com --github-auth $(Token)'
```

CLI:
```yaml
# Run any pre-build tasks, for example, restore NuGet dependencies...

# Initialize the CodeQL database using `codeql database init --begin tracing`.
- task: CmdLine@1
  displayName: Initialize CodeQL database
  inputs:
      # Assumes the source code is checked out to the current working directory.
      # Creates a database at `/codeql-dbs/example-repo`.
      # Running on Windows, so specifies a trace process level.
      script: "codeql database init --language csharp --trace-process-name Agent.Worker.exe --source-root . --begin-tracing /codeql-dbs/example-repo"

# For CodeQL to trace future build steps without knowing the explicit build commands,
# it requires certain environment variables to be set during the build.
# Read these generated environment variables and values, and set them so they are available for subsequent commands
# in the build pipeline. Neste exemplo, isto é feito em PowerShell.
- task: PowerShell@1
  displayName: Set CodeQL environment variables
  inputs:
      targetType: inline
      script: >
         $json = Get-Content /codeql-dbs/example-repo/temp/tracingEnvironment/start-tracing.json | ConvertFrom-Json
         $json.PSObject.Properties | ForEach-Object {
             $template = "##vso[task.setvariable variable="
             $template += $_.Name
             $template += "]"
             $template += $_.Value
             echo "$template"
         }

# Execute the pre-defined build step. Observe a variável `msbuildArgs`.
- task: VSBuild@1
    inputs:
      solution: '**/*.sln'
      # Disable MSBuild shared compilation for C# builds.
      msbuildArgs: /p:OutDir=$(Build.ArtifactStagingDirectory) /p:UseSharedCompilation=false
      platform: Any CPU
      configuration: Release
      # Execute a clean build, in order to remove any existing build artifacts prior to the build.
      clean: True
   displayName: Visual Studio Build

# Read and set the generated environment variables to end build tracing. Neste exemplo, isto é feito em PowerShell.
- task: PowerShell@1
   displayName: Clear CodeQL environment variables
   inputs:
      targetType: inline
      script: >
         $json = Get-Content $(System.DefaultWorkingDirectory)/db/temp/tracingEnvironment/end-tracing.json | ConvertFrom-Json
         $json.PSObject.Properties | ForEach-Object {
             $template = "##vso[task.setvariable variable="
             $template += $_.Name
             $template += "]"
             $template += $_.Value
             echo "$template"
         }

# Use `codeql database finalize` to complete database creation after the build is done.
- task: CmdLine@2
   displayName: Finalize CodeQL database
   inputs:
      script: 'codeql database finalize /codeql-dbs/example-repo'


# Analyze the database and upload the results.
- task: CmdLine@2
   displayName: Analyze CodeQL database
   inputs:
      script: 'codeql database analyze /codeql-dbs/example-repo csharp-code-scanning.qls --sarif-category=csharp --format=sarif-latest --output=/temp/example-repo-csharp.sarif'

- task: CmdLine@2
   displayName: Upload CodeQL results
   inputs:
      script: 'echo "$TOKEN" | codeql github upload-results --repository=my-org/example-repo \
    --ref=refs/heads/main --commit=deb275d2d5fe9a522a0b7bd8b6b6a1c939552718 \
    --sarif=/temp/example-repo-csharp.sarif --github-auth-stdin'

```

### Várias linguagens que usam autobuild (C++, Python)

Este exemplo não é estritamente possível com {% data variables.product.prodname_codeql_runner %}. Apenas uma linguagem (a linguagem compilada com mais arquivos) será analisada.

Executor:
```bash
echo "$TOKEN" | codeql-runner-linux init --repository my-org/example-repo \
    --languages cpp,python \
    --github-url https://github.com --github-auth-stdin

# Source the script generated by the init step to set up the environment to monitor the build.
. codeql-runner/codeql-env.sh

# Run the autobuilder for the language with the most files.
codeql-runner-linux autobuild

echo "$TOKEN" | codeql-runner-linux analyze --repository my-org/example-repo
    --github-url https://github.com --github-auth-stdin
    --commit deb275d2d5fe9a522a0b7bd8b6b6a1c939552718 --ref refs/heads/main
```

CLI:
```bash
# Create multiple databases using `--db-cluster`.
# Run autobuild by omitting `--command`.
codeql database create /codeql-dbs/example-repo-multi \
    --db-cluster --language cpp,python \
    --no-run-unnecessary-builds \
    --source-root .

# Analyze each database in turn and upload the results.
for language in cpp python; do
  codeql database analyze "/codeql-dbs/example-repo-multi/$language"  \
      "$language-code-scanning.qls" --sarif-category="$language"
      --format=sarif-latest --output="/temp/example-repo-$language.sarif"

  echo "$TOKEN" | codeql github upload-results --repository=my-org/example-repo \
      --ref=refs/heads/main --commit=deb275d2d5fe9a522a0b7bd8b6b6a1c939552718 \
      --sarif="/temp/example-repo-$language.sarif" --github-auth-stdin
done
```

### Várias linguagens que usam um comando de compilação personalizada (C++, Python)

Executor:
```bash
echo "$TOKEN" | codeql-runner-linux init --repository my-org/example-repo \
    --languages cpp,python \
    --github-url https://github.com --github-auth-stdin

# Source the script generated by the init step to set up the environment to monitor the build.
. codeql-runner/codeql-env.sh

# Run a custom build command.
make

echo "$TOKEN" | codeql-runner-linux analyze --repository my-org/example-repo
    --github-url https://github.com --github-auth-stdin
    --commit deb275d2d5fe9a522a0b7bd8b6b6a1c939552718 --ref refs/heads/main
```

CLI:
```bash
# Create multiple databases using `--db-cluster`.
codeql database create /codeql-dbs/example-repo-multi \
    --db-cluster --language cpp,python \
    --command make --no-run-unnecessary-builds \
    --source-root .

# Analyze each database in turn and upload the results.
for language in cpp python; do
  codeql database analyze "/codeql-dbs/example-repo-multi/$language"  \
      "$language-code-scanning.qls" --sarif-category="$language"
      --format=sarif-latest --output="/temp/example-repo-$language.sarif"

  echo "$TOKEN" | codeql github upload-results --repository=my-org/example-repo \
      --ref=refs/heads/main --commit=deb275d2d5fe9a522a0b7bd8b6b6a1c939552718 \
      --sarif="/temp/example-repo-$language.sarif" --github-auth-stdin
done
```
