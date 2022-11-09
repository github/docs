---
title: Criar e testar PowerShell
intro: É possível criar um fluxo de trabalho de integração contínua (CI) para criar e testar o seu projeto de PowerShell.
redirect_from:
  - /actions/guides/building-and-testing-powershell
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
authors:
  - potatoqualitee
type: tutorial
topics:
  - CI
  - PowerShell
shortTitle: Build & test PowerShell
ms.openlocfilehash: 572c2ee17c948f44a8f8e4006d3729498269a215
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/05/2022
ms.locfileid: '146180212'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## Introdução

Este guia mostra como usar PowerShell para CI. Ele descreve como usar o Pester, instalar dependências, testar seu módulo e publicar na Galeria do PowerShell.

Executores hospedados em {% data variables.product.prodname_dotcom %} têm um cache de ferramentas com software pré-instalado que inclui PowerShell e Pester. 

{% ifversion ghae %} {% data reusables.actions.self-hosted-runners-software %} {% else %}Para ver uma lista completa dos programas de software atualizados e das versões pré-instaladas do PowerShell e do Pester, confira "[Especificações dos executores hospedados no {% data variables.product.prodname_dotcom %}](/actions/reference/specifications-for-github-hosted-runners/#supported-software)".
{% endif %}

## Pré-requisitos

Você deve estar familiarizado com o YAML e a sintaxe do {% data variables.product.prodname_actions %}. Para obter mais informações, confira "[Aprenda a usar o {% data variables.product.prodname_actions %}](/actions/learn-github-actions)".

Recomendamos que você tenha um entendimento básico de PowerShell e Pester. Para obter mais informações, consulte:
- [Introdução ao PowerShell](https://docs.microsoft.com/powershell/scripting/learn/ps101/01-getting-started)
- [Pester](https://pester.dev)

{% data reusables.actions.enterprise-setup-prereq %}

## Adicionar um fluxo de trabalho ao Pester

Para automatizar o seu teste com PowerShell e Pester, você pode adicionar um fluxo de trabalho que é executado toda vez que uma alteração é carregada no seu repositório. No exemplo a seguir, `Test-Path` é usado para verificar se um arquivo chamado `resultsfile.log` está presente.

Este exemplo de arquivo de fluxo de trabalho precisa ser adicionado ao diretório `.github/workflows/` do repositório:

```yaml
name: Test PowerShell on Ubuntu
on: push

jobs:
  pester-test:
    name: Pester test
    runs-on: ubuntu-latest
    steps:
      - name: Check out repository code
        uses: {% data reusables.actions.action-checkout %}
      - name: Perform a Pester test from the command-line
        shell: pwsh
        run: Test-Path resultsfile.log | Should -Be $true
      - name: Perform a Pester test from the Tests.ps1 file
        shell: pwsh
        run: |
          Invoke-Pester Unit.Tests.ps1 -Passthru
```

* `shell: pwsh` – Configura o trabalho para usar o PowerShell ao executar os comandos `run`.
* `run: Test-Path resultsfile.log` – Verifique se um arquivo chamado `resultsfile.log` está presente no diretório raiz do repositório.
* `Should -Be $true` – Usa o Pester para definir um resultado esperado. Se o resultado for inesperado, {% data variables.product.prodname_actions %} irá sinalizar isso como um teste falho. Por exemplo:

  
  ![Falha no teste de Pester](/assets/images/help/repository/actions-failed-pester-test-updated.png)
  

* `Invoke-Pester Unit.Tests.ps1 -Passthru` – Usa o Pester para executar testes definidos em um arquivo chamado `Unit.Tests.ps1`. Por exemplo, para executar o mesmo teste descrito acima, o `Unit.Tests.ps1` conterá o seguinte:
  ```
  Describe "Check results file is present" {
      It "Check results file is present" {
          Test-Path resultsfile.log | Should -Be $true
      }
  }
  ```

## Locais de módulos do PowerShell

A tabela abaixo descreve os locais para diversos módulos do PowerShell em cada executor hospedado em {% data variables.product.prodname_dotcom %}.

|| Ubuntu | macOS | Windows |
|------|-------|------|----------|
|**Módulos do sistema do PowerShell** |`/opt/microsoft/powershell/7/Modules/*`|`/usr/local/microsoft/powershell/7/Modules/*`|`C:\program files\powershell\7\Modules\*`|
|**Módulos de complementos do PowerShell**|`/usr/local/share/powershell/Modules/*`|`/usr/local/share/powershell/Modules/*`|`C:\Modules\*`|
|**Módulos instalados pelo usuário**|`/home/runner/.local/share/powershell/Modules/*`|`/Users/runner/.local/share/powershell/Modules/*`|`C:\Users\runneradmin\Documents\PowerShell\Modules\*`|

## Instalar dependências

Executores hospedados em {% data variables.product.prodname_dotcom %} têm PowerShell 7 e o Pester instalado. Use `Install-Module` para instalar dependências adicionais da Galeria do PowerShell antes de compilar e testar seu código.

{% note %}

**Observação:** os pacotes pré-instalados (como o Pester) usados pelos executores hospedados no {% data variables.product.prodname_dotcom %} são atualizados regularmente e podem introduzir alterações significativas. Como resultado, recomendamos que você sempre especifique as versões de pacote necessárias usando `Install-Module` com `-MaximumVersion`.

{% endnote %}

{% ifversion actions-caching %}Você também pode armazenar as dependências em cache para acelerar o fluxo de trabalho. Para obter mais informações, confira "[Como armazenar dependências em cache para acelerar os fluxos de trabalho](/actions/using-workflows/caching-dependencies-to-speed-up-workflows)".{% endif %}

Por exemplo, o seguinte trabalho instala os módulos `SqlServer` e `PSScriptAnalyzer`:

```yaml
jobs:
  install-dependencies:
    name: Install dependencies
    runs-on: ubuntu-latest
    steps:
      - uses: {% data reusables.actions.action-checkout %}
      - name: Install from PSGallery
        shell: pwsh
        run: |
          Set-PSRepository PSGallery -InstallationPolicy Trusted
          Install-Module SqlServer, PSScriptAnalyzer
```

{% note %}

**Observação:** por padrão, nenhum repositório é confiável pelo PowerShell. Ao instalar módulos da Galeria do PowerShell, você precisa definir explicitamente a política de instalação de `PSGallery` como `Trusted`.

{% endnote %}

{% ifversion actions-caching %}

### Memorizar dependências

Você pode armazenar as dependências do PowerShell em cache usando uma chave exclusiva, o que permite restaurar as dependências em fluxos de trabalho futuros com a ação [`cache`](https://github.com/marketplace/actions/cache). Para obter mais informações, confira "[Como armazenar dependências em cache para acelerar os fluxos de trabalho](/actions/using-workflows/caching-dependencies-to-speed-up-workflows)".

O PowerShell armazena suas dependências em diferentes locais, dependendo do sistema operacional do executor. Por exemplo, o local de `path` usado no exemplo do Ubuntu a seguir será diferente para um sistema operacional Windows.

```yaml
steps:
  - uses: {% data reusables.actions.action-checkout %}
  - name: Setup PowerShell module cache
    id: cacher
    uses: {% data reusables.actions.action-cache %}
    with:
      path: "~/.local/share/powershell/Modules"
      key: {% raw %}${{ runner.os }}-SqlServer-PSScriptAnalyzer{% endraw %}
  - name: Install required PowerShell modules
    if: steps.cacher.outputs.cache-hit != 'true'
    shell: pwsh
    run: |
      Set-PSRepository PSGallery -InstallationPolicy Trusted
      Install-Module SqlServer, PSScriptAnalyzer -ErrorAction Stop
```

{% endif %}

## Testar seu código

Você pode usar os mesmos comandos usados localmente para criar e testar seu código.

### Usar PSScriptAnalyzer para código lint

O exemplo a seguir instala `PSScriptAnalyzer` e o usa para fazer lint de todos os arquivos `ps1` no repositório. Para obter mais informações, confira [PSScriptAnalyzer no GitHub](https://github.com/PowerShell/PSScriptAnalyzer).

```yaml
  lint-with-PSScriptAnalyzer:
    name: Install and run PSScriptAnalyzer
    runs-on: ubuntu-latest
    steps:
      - uses: {% data reusables.actions.action-checkout %}
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

## Empacotar dados do fluxo de trabalho como artefatos

Você pode fazer o upload de artefatos para visualização após a conclusão de um fluxo de trabalho. Por exemplo, é possível que você precise salvar os arquivos de registro, os despejos de núcleo, os resultados de teste ou capturas de tela. Para obter mais informações, confira "[Como persistir dados de fluxo de trabalho usando artefatos](/github/automating-your-workflow-with-github-actions/persisting-workflow-data-using-artifacts)".

O exemplo a seguir demonstra como usar a ação `upload-artifact` para arquivar os resultados do teste recebidos de `Invoke-Pester`. Para obter mais informações, confira a [ação `upload-artifact`](https://github.com/actions/upload-artifact).

```yaml
name: Upload artifact from Ubuntu

on: [push]

jobs:
  upload-pester-results:
    name: Run Pester and upload results
    runs-on: ubuntu-latest
    steps:
      - uses: {% data reusables.actions.action-checkout %}
      - name: Test with Pester
        shell: pwsh
        run: Invoke-Pester Unit.Tests.ps1 -Passthru | Export-CliXml -Path Unit.Tests.xml
      - name: Upload test results
        uses: {% data reusables.actions.action-upload-artifact %}
        with:
          name: ubuntu-Unit-Tests
          path: Unit.Tests.xml
    if: {% raw %}${{ always() }}{% endraw %}
```

A função `always()` configura o trabalho para continuar o processamento mesmo se houver falhas de teste. Para obter mais informações, confira "[always](/actions/reference/context-and-expression-syntax-for-github-actions#always)".

## Publicar na Galeria do PowerShell

Você pode configurar o seu fluxo de trabalho para publicar o seu módulo do PowerShell para a Galeria PowerShell quando o seu teste de passar. Você pode usar segredos para armazenar quaisquer tokens ou credenciais necessárias para publicar seu pacote. Para obter mais informações, confira "[Como criar e usar segredos criptografados](/github/automating-your-workflow-with-github-actions/creating-and-using-encrypted-secrets)".

O seguinte exemplo cria um pacote e usa `Publish-Module` para publicá-lo na Galeria do PowerShell:

```yaml
name: Publish PowerShell Module

on:
  release:
    types: [created]

jobs:
  publish-to-gallery:
    runs-on: ubuntu-latest
    steps:
      - uses: {% data reusables.actions.action-checkout %}
      - name: Build and publish
        env:
          NUGET_KEY: {% raw %}${{ secrets.NUGET_KEY }}{% endraw %}
        shell: pwsh
        run: |
          ./build.ps1 -Path /tmp/samplemodule
          Publish-Module -Path /tmp/samplemodule -NuGetApiKey $env:NUGET_KEY -Verbose
```
