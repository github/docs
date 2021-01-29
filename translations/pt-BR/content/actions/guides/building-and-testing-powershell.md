---
title: Criar e testar PowerShell
intro: É possível criar um fluxo de trabalho de integração contínua (CI) para criar e testar o seu projeto de PowerShell.
product: '{% data reusables.gated-features.actions %}'
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
authors:
  - potatoqualitee
type: 'tutorial'
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}

### Introdução

Este guia mostra como usar PowerShell para CI. Ele descreve como usar o Pester, instalar dependências, testar seu módulo e publicar na Galeria do PowerShell.

Executores hospedados em {% data variables.product.prodname_dotcom %} têm um cache de ferramentas com software pré-instalado que inclui PowerShell e Pester. Para obter uma lista completa do software atualizado e das versões pré-instaladas do PowerShell e Pester, consulte "[Especificações para executores hospedados em {% data variables.product.prodname_dotcom %}](/actions/reference/specifications-for-github-hosted-runners/#supported-software)".

### Pré-requisitos

Você deve estar familiarizado com o YAML e a sintaxe do {% data variables.product.prodname_actions %}. Para obter mais informações, consulte "[Aprenda {% data variables.product.prodname_actions %}](/actions/learn-github-actions)".

Recomendamos que você tenha um entendimento básico de PowerShell e Pester. Para obter mais informações, consulte:
- [Primeiros passos com o PowerShell](https://docs.microsoft.com/powershell/scripting/learn/ps101/01-getting-started)
- [Pester](https://pester.dev)

{% data reusables.actions.enterprise-setup-prereq %}

### Adicionar um fluxo de trabalho ao Pester

Para automatizar o seu teste com PowerShell e Pester, você pode adicionar um fluxo de trabalho que é executado toda vez que uma alteração é carregada no seu repositório. No exemplo a seguir, `Test-Path` é usado para verificar se um arquivo denominado `resultsfile.log` está presente.

Este exemplo de arquivo de fluxo de trabalho deve ser adicionado ao diretório `.github/workflows/` do repositório:

{% raw %}
```yaml
name: Test PowerShell on Ubuntu
on: push

jobs:
  pester-test:
    name: Pester test
    runs-on: ubuntu-latest
    steps:
    - name: Check out repository code
      uses: actions/checkout@v2
    - name: Perform a Pester test from the command-line
      shell: pwsh
      run: Test-Path resultsfile.log | Should -Be $true
    - name: Perform a Pester test from the Tests.ps1 file
      shell: pwsh
      run: |
        Invoke-Pester Unit.Tests.ps1 -Passthru
```
{% endraw %}

* `shell: pwsh` - Configura o trabalho para usar PowerShell quando executa os comandos `executar`.
* `run: Test-Path resultsfile.log` - Verifica se um arquivo denominado `resultsfile.log` está presente no diretório raiz do repositório.
* `Should -Be $true` - Usa o Pester para definir um resultado esperado. Se o resultado for inesperado, {% data variables.product.prodname_actions %} irá sinalizar isso como um teste falho. Por exemplo:

  {% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.0" %}
  ![Falha no teste de Pester](/assets/images/help/repository/actions-failed-pester-test-updated.png)
  {% else %}
  ![Falha no teste de Pester](/assets/images/help/repository/actions-failed-pester-test.png)
  {% endif %}

* `Invoke-Pester Unit.Tests.ps1 -Passthru` - Usa o Pester para executar testes definidos em um arquivo denominado `Unit.Tests.ps1`. Por exemplo, para realizar o mesmo teste descrito acima, o `Unit.Tests.ps1` conterá o seguinte:
  ```
  Describe "Check results file is present" {
      It "Check results file is present" {
          Test-Path resultsfile.log | Should -Be $true
      }
  }
  ```

### Locais de módulos do PowerShell

A tabela abaixo descreve os locais para diversos módulos do PowerShell em cada executor hospedado em {% data variables.product.prodname_dotcom %}.

|                                           | Ubuntu                                           | macOS                                             | Windows                                                      |
| ----------------------------------------- | ------------------------------------------------ | ------------------------------------------------- | ------------------------------------------------------------ |
| **Módulos do sistema do PowerShell**      | `/opt/microsoft/powershell/7/Modules/*`          | `/usr/local/microsoft/powershell/7/Modules/*`     | `C:\program files\powershell\7\Modules\*`              |
| **Módulos de complementos do PowerShell** | `/usr/local/share/powershell/Modules/*`          | `/usr/local/share/powershell/Modules/*`           | `C:\Modules\*`                                            |
| **Módulos instalados pelo usuário**       | `/home/runner/.local/share/powershell/Modules/*` | `/Users/runner/.local/share/powershell/Modules/*` | `C:\Users\runneradmin\Documents\PowerShell\Modules\*` |

### Instalar dependências

Executores hospedados em {% data variables.product.prodname_dotcom %} têm PowerShell 7 e o Pester instalado. Você pode usar `Install-Module` para instalar dependências adicionais da Galeria PowerShell antes de construir e testar o seu código.

{% note %}

**Nota:** Os pacotes pré-instalados (como o Colester) usados pelos executores hospedados em {% data variables.product.prodname_dotcom %} são atualizados regularmente e podem introduzir mudanças significativas. Como resultado, recomenda-se que você sempre especifique as versões necessárias dos pacotes usando o `Install-Module` com `-MaximumVersion`.

{% endnote %}

Ao usar executores hospedados em {% data variables.product.prodname_dotcom %}, você também poderá armazenar em cache dependências para acelerar seu fluxo de trabalho. Para obter mais informações, consulte "<a href="/actions/guides/caching-dependencies-to-speed-up-workflows" class="dotcom-only">Memorizar dependências para acelerar fluxos de trabalho</a>".

Por exemplo, o trabalho a seguir instala os módulos `SqlServer` e `PSScriptAnalyzer`:

{% raw %}
```yaml
jobs:
  install-dependencies:
    name: Install dependencies
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v2
    - name: Install from PSGallery
      shell: pwsh
      run: |
        Set-PSRepository PSGallery -InstallationPolicy Trusted
        Install-Module SqlServer, PSScriptAnalyzer
```
{% endraw %}

{% note %}

**Observação:** Por padrão, nenhum repositório é confiável pelo PowerShell. Ao instalar módulos na Galeria do PowerShell, você deve definir explicitamente a política de instalação para `PSGallery` como `Confiável`.

{% endnote %}

#### Memorizar dependências

Ao usar executores hospedados em {% data variables.product.prodname_dotcom %}, você poderá armazenar em cache dependências do PowerShell usando uma chave única, o que permite que você restaure as dependências para futuros fluxos de trabalho com a ação [`cache`](https://github.com/marketplace/actions/cache). Para obter mais informações, consulte "<a href="/actions/guides/caching-dependencies-to-speed-up-workflows" class="dotcom-only">Memorizar dependências para acelerar fluxos de trabalho</a>".

O PowerShell armazena suas dependências em diferentes locais, dependendo do sistema operacional do executor. Por exemplo, o `caminho` local usado no exemplo do Ubuntu a seguir será diferente para um sistema operacional Windows.

{% raw %}
```yaml
steps:
  - uses: actions/checkout@v2
  - name: Setup PowerShell module cache
    id: cacher
    uses: actions/cache@v2
    with:
      path: "~/.local/share/powershell/Modules"
      key: ${{ runner.os }}-SqlServer-PSScriptAnalyzer
  - name: Install required PowerShell modules
    if: steps.cacher.outputs.cache-hit != 'true'
    shell: pwsh
    run: |
      Set-PSRepository PSGallery -InstallationPolicy Trusted
      Install-Module SqlServer, PSScriptAnalyzer -ErrorAction Stop
```
{% endraw %}

### Testar seu código

Você pode usar os mesmos comandos usados localmente para criar e testar seu código.

#### Usar PSScriptAnalyzer para código lint

O exemplo a seguir instala `PSScriptAnalyzer` e o usa para limpar todos os arquivos `ps1` no repositório. Para obter mais informações, consulte [PSScriptAnalyzer no GitHub](https://github.com/PowerShell/PSScriptAnalyzer).

{% raw %}
```yaml
  lint-with-PSScriptAnalyzer:
    name: Install and run PSScriptAnalyzer
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v2
    - name: Install PSScriptAnalyzer module
      shell: pwsh
      run: |
            Set-PSRepository PSGallery -InstallationPolicy Trusted
            Install-Module PSScriptAnalyzer -ErrorAction Stop
    - name: Lint with PSScriptAnalyzer
      shell: pwsh
      run: |
            Invoke-ScriptAnalyzer -Path *.ps1 -Recurse -Outvariable issues
            $errors   = $issues.Where({$_.Severity -eq 'Error'})
            $warnings = $issues.Where({$_.Severity -eq 'Warning'})
            if ($errors) {
                Write-Error "There were $($errors.Count) errors and $($warnings.Count) warnings total." -ErrorAction Stop
            } else {
                Write-Output "There were $($errors.Count) errors and $($warnings.Count) warnings total."
            }
```
{% endraw %}

### Empacotar dados do fluxo de trabalho como artefatos

Você pode fazer o upload de artefatos para visualização após a conclusão de um fluxo de trabalho. Por exemplo, é possível que você precise salvar os arquivos de registro, os despejos de núcleo, os resultados de teste ou capturas de tela. Para obter mais informações, consulte "[Dados recorrentes do fluxo de trabalho que usam artefatos](/github/automating-your-workflow-with-github-actions/persisting-workflow-data-using-artifacts)".

O exemplo a seguir demonstra como você pode usar a ação `upload-artifact` para arquivar os resultados de teste recebidos de `Invoke-Pester`. Para obter mais informações, consulte a ação <[`upload-artifact`](https://github.com/actions/upload-artifact).

{% raw %}
```yaml
name: Upload artifact from Ubuntu

on: [push]

jobs:
  upload-pester-results:
    name: Run Pester and upload results
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v2
    - name: Test with Pester
      shell: pwsh
      run: Invoke-Pester Unit.Tests.ps1 -Passthru | Export-CliXml -Path Unit.Tests.xml
    - name: Upload test results
      uses: actions/upload-artifact@v2
      with:
        name: ubuntu-Unit-Tests
        path: Unit.Tests.xml
    if: ${{ always() }}
```
{% endraw %}

A função `always()` configura o trabalho para continuar processando mesmo se houver falhas no teste. Para obter mais informações, consulte "[always](/actions/reference/context-and-expression-syntax-for-github-actions#always)".

### Publicar na Galeria do PowerShell

Você pode configurar o seu fluxo de trabalho para publicar o seu módulo do PowerShell para a Galeria PowerShell quando o seu teste de passar. Você pode usar segredos para armazenar quaisquer tokens ou credenciais necessárias para publicar seu pacote. Para obter mais informações, consulte "[Criando e usando segredos encriptados](/github/automating-your-workflow-with-github-actions/creating-and-using-encrypted-secrets)".

O exemplo a seguir cria um pacote e usa `Publish-Module` para publicá-lo na Galeria do PowerShell:

{% raw %}
```yaml
name: Publish PowerShell Module

on:
  release:
    types: [created]

jobs:
  publish-to-gallery:
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v2
    - name: Build and publish
      env:
        NUGET_KEY: ${{ secrets.NUGET_KEY }}
      shell: pwsh
      run: |
        ./build.ps1 -Path /tmp/samplemodule
        Publish-Module -Path /tmp/samplemodule -NuGetApiKey $env:NUGET_KEY -Verbose
```
{% endraw %}
