---
title: Automatización de la migración con el Importador de Acciones de GitHub
intro: 'Usa el {% data variables.product.prodname_actions_importer %} para planificar y automatizar la migración a {% data variables.product.prodname_actions %}.'
versions:
  fpt: '*'
  ghec: '*'
  ghes: '*'
  ghae: '*'
type: how_to
miniTocMaxHeadingLevel: 3
topics:
  - Migration
  - CI
  - CD
shortTitle: 'Automate migration with {% data variables.product.prodname_actions_importer %}'
ms.openlocfilehash: 391455eb90a3a71ab0e0cb5a1573a0ee48527d8e
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 11/09/2022
ms.locfileid: '148160083'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

[Aviso legal](#legal-notice)

{% note %}

**Nota**: El {% data variables.product.prodname_actions_importer %} está disponible actualmente como versión preliminar pública. Visita la [página de registro](https://github.com/features/actions-importer/signup) para solicitar acceso a la versión preliminar. Una vez que se te conceda acceso, podrás usar la extensión de la CLI`gh-actions-importer`.

{% endnote %}

## Acerca del {% data variables.product.prodname_actions_importer %}

Puedes usar el {% data variables.product.prodname_actions_importer %} para planificar las canalizaciones de CI/CD y migrarlas automáticamente a {% data variables.product.prodname_actions %} desde Azure DevOps, CircleCI, GitLab, Jenkins y Travis CI.

El {% data variables.product.prodname_actions_importer %} se distribuye como contenedor Docker y usa una extensión de la [CLI de {% data variables.product.prodname_dotcom %}](https://cli.github.com) para interactuar con el contenedor.

Cualquier flujo de trabajo que el {% data variables.product.prodname_actions_importer %} haya convertido debe inspeccionarse para comprobar si es correcto antes de usarlo como una carga de trabajo de producción. El objetivo es lograr una tasa de conversión del 80 % para cada flujo de trabajo. Sin embargo, la tasa de conversión real dependerá de la composición de cada canalización individual que se convierta.

## Plataformas de CI compatibles

Puedes usar el {% data variables.product.prodname_actions_importer %} para migrar desde las plataformas siguientes:

- Azure DevOps
- CircleCI
- GitLab
- Jenkins
- Travis CI

Una vez que se te conceda acceso a la versión preliminar, podrás acceder a la documentación de referencia adicional para cada una de las plataformas compatibles.

## Requisitos previos

El {% data variables.product.prodname_actions_importer %} tiene los requisitos siguientes:

- Se te debe haber concedido acceso a la versión preliminar pública del {% data variables.product.prodname_actions_importer %}.
{%- ifversion ghes < 3.5 or ghae %}
- Usa un {% data variables.product.pat_generic %} con el ámbito `read:packages` habilitado.
{%- else %}
- Debes tener credenciales para autenticarte en el {% data variables.product.prodname_container_registry %} de {% data variables.product.prodname_registry %}. Para obtener más información, consulta "[Trabajo con el registro de contenedor](/packages/working-with-a-github-packages-registry/working-with-the-container-registry#authenticating-to-the-container-registry)".
{% endif %}
- Un entorno en el que puedas ejecutar contenedores basados en Linux e instalar las herramientas necesarias.
  - Docker está [instalado](https://docs.docker.com/get-docker/) y funcionando.
  - [La CLI de {% data variables.product.prodname_dotcom %}](https://cli.github.com) está instalada.

  {% note %}

  **Nota**: El contenedor y la CLI del {% data variables.product.prodname_actions_importer %} no deben estar instalados en el mismo servidor que tu plataforma de CI.

  {% endnote %}

### Instalación de la extensión de la CLI del {% data variables.product.prodname_actions_importer %}

1. Instala la extensión de la CLI del {% data variables.product.prodname_actions_importer %}:

   ```bash
   $ gh extension install github/gh-actions-importer
   ```
1. Comprueba que la extensión está instalada:

   ```bash
   $ gh actions-importer -h
   Options:
     -?, -h, --help  Show help and usage information

   Commands:
     update     Update to the latest version of the GitHub Actions Importer.
     version    Display the version of the GitHub Actions Importer.
     configure  Start an interactive prompt to configure credentials used to authenticate with your CI server(s).
     audit      Plan your CI/CD migration by analyzing your current CI/CD footprint.
     forecast   Forecast GitHub Actions usage from historical pipeline utilization.
     dry-run    Convert a pipeline to a GitHub Actions workflow and output its yaml file.
     migrate    Convert a pipeline to a GitHub Actions workflow and open a pull request with the changes.
   ```

### Actualización de la CLI del {% data variables.product.prodname_actions_importer %}

Para asegurarte de que ejecutas la versión más reciente del {% data variables.product.prodname_actions_importer %}, debes ejecutar periódicamente el comando `update`:

```bash
$ gh actions-importer update
```

Debes autenticarte con el {% data variables.product.prodname_container_registry %} para que este comando funcione correctamente. Como alternativa, puedes utilizar los parámetros `--username` y `--password-stdin` para proporcionar credenciales:

```bash
$ echo $GITHUB_TOKEN | gh actions-importer update --username $GITHUB_HANDLE --password-stdin
```

### Autenticación en la línea de comandos

Debes configurar credenciales que permitan que el {% data variables.product.prodname_actions_importer %} se comunique con {% data variables.product.prodname_dotcom %} y el servidor de CI actual. Puedes usar variables de entorno o un archivo `.env.local` para configurar estas credenciales. Las variables de entorno se pueden configurar en un símbolo del sistema interactivo mediante la ejecución del comando siguiente:

```bash
$ gh actions-importer configure
```

Una vez que se te conceda acceso a la versión preliminar, podrás acceder a la documentación de referencia adicional sobre el uso de las variables de entorno.

## Uso de la CLI del {% data variables.product.prodname_actions_importer %}

Usa los subcomandos de `gh actions-importer` para iniciar la migración a {% data variables.product.prodname_actions %}, incluidos `audit`, `forecast`, `dry-run` y `migrate`.

### Auditoría de las canalizaciones de CI existentes

El subcomando `audit` se puede usar para planificar la migración de CI/CD mediante el análisis de la superficie actual de CI/CD. Este análisis se puede usar para planificar una escala de tiempo para migrar a {% data variables.product.prodname_actions %}.

Para ejecutar una auditoría, usa el siguiente comando para determinar las opciones disponibles:

```bash
$ gh actions-importer audit -h
Description:
  Plan your CI/CD migration by analyzing your current CI/CD footprint.

[...]

Commands:
  azure-devops  An audit will output a list of data used in an Azure DevOps instance.
  circle-ci     An audit will output a list of data used in a CircleCI instance.
  gitlab        An audit will output a list of data used in a GitLab instance.
  jenkins       An audit will output a list of data used in a Jenkins instance.
  travis-ci     An audit will output a list of data used in a Travis CI instance.
```

Una vez que se te conceda acceso a la versión preliminar, podrás acceder a la documentación de referencia adicional sobre la ejecución de una auditoría.

### Previsión de la utilización

El subcomando `forecast` revisa la utilización histórica de la canalización para crear una previsión de la utilización de {% data variables.product.prodname_actions %}.

Para ejecutar una previsión, usa el siguiente comando para determinar las opciones disponibles:

```bash
$ gh actions-importer forecast -h
Description:
  Forecasts GitHub Actions usage from historical pipeline utilization.

[...]

Commands:
  azure-devops  Forecasts GitHub Actions usage from historical Azure DevOps pipeline utilization.
  jenkins       Forecasts GitHub Actions usage from historical Jenkins pipeline utilization.
  gitlab        Forecasts GitHub Actions usage from historical GitLab pipeline utilization.
  circle-ci     Forecasts GitHub Actions usage from historical CircleCI pipeline utilization.
  travis-ci     Forecasts GitHub Actions usage from historical Travis CI pipeline utilization.
  github        Forecasts GitHub Actions usage from historical GitHub pipeline utilization.
```

Una vez que se te conceda acceso a la versión preliminar, podrás acceder a la documentación de referencia adicional sobre la ejecución de una previsión.

### Prueba del proceso de migración

El subcomando `dry-run` se puede usar para convertir una canalización en su equivalente de {% data variables.product.prodname_actions %} y, a continuación, escribir el flujo de trabajo en el sistema de archivos local.

Para realizar un simulacro, usa el siguiente comando para determinar las opciones disponibles:

```bash
$ gh actions-importer dry-run -h
Description:
  Convert a pipeline to a GitHub Actions workflow and output its yaml file.

[...]

Commands:
  azure-devops  Convert an Azure DevOps pipeline to a GitHub Actions workflow and output its yaml file.
  circle-ci     Convert a CircleCI pipeline to GitHub Actions workflows and output the yaml file(s).
  gitlab        Convert a GitLab pipeline to a GitHub Actions workflow and output the yaml file.
  jenkins       Convert a Jenkins job to a GitHub Actions workflow and output its yaml file.
  travis-ci     Convert a Travis CI pipeline to a GitHub Actions workflow and output its yaml file.
```

Una vez que se te conceda acceso a la versión preliminar, podrás acceder a la documentación de referencia adicional sobre la realización de un simulacro.

### Migración de una canalización a {% data variables.product.prodname_actions %}

El subcomando `migrate` se puede usar para convertir una canalización en su equivalente de Acciones de GitHub y, a continuación, crear una solicitud de incorporación de cambios con el contenido.

Para ejecutar una migración, usa el siguiente comando para determinar las opciones disponibles:

```bash
$ gh actions-importer migrate -h
Description:
  Convert a pipeline to a GitHub Actions workflow and open a pull request with the changes.

[...]

Commands:
  azure-devops  Convert an Azure DevOps pipeline to a GitHub Actions workflow and open a pull request with the changes.
  circle-ci     Convert a CircleCI pipeline to GitHub Actions workflows and open a pull request with the changes.
  gitlab        Convert a GitLab pipeline to a GitHub Actions workflow and open a pull request with the changes.
  jenkins       Convert a Jenkins job to a GitHub Actions workflow and open a pull request with the changes.
  travis-ci     Convert a Travis CI pipeline to a GitHub Actions workflow and and open a pull request with the changes.
```

Una vez que se te conceda acceso a la versión preliminar, podrás acceder a la documentación de referencia adicional sobre la ejecución de una migración.

## Aviso legal

Algunas partes se han adaptado a partir de https://github.com/github/gh-actions-importer/ con licencia MIT:

```
MIT License

Copyright (c) 2022 GitHub

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```
