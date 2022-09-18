---
title: Como personalizar os contêineres usados por trabalhos
intro: Você pode personalizar como o executor auto-hospedado invoca um contêiner para um trabalho.
versions:
  feature: container-hooks
type: reference
miniTocMaxHeadingLevel: 4
shortTitle: Customize containers used by jobs
ms.openlocfilehash: 774aad09c504a09f0bf4f60af286952ee24f89b5
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/11/2022
ms.locfileid: '147881160'
---
{% note %}

**Observação**: atualmente, esse recurso está em versão beta e sujeito a alterações.

{% endnote %}

## Sobre a personalização de contêiner

O {% data variables.product.prodname_actions %} permite que você execute um trabalho em um contêiner usando a instrução `container:` no arquivo de fluxo de trabalho. Para obter mais informações, confira "[Como executar trabalhos em um contêiner](/actions/using-jobs/running-jobs-in-a-container)". Para processar trabalhos baseados em contêiner, o executor auto-hospedado cria um contêiner para cada trabalho.

O {% data variables.product.prodname_actions %} dá suporte a comandos que permitem personalizar a forma como os contêineres são criados pelo executor auto-hospedado. Por exemplo, você pode usar esses comandos para gerenciar os contêineres por meio do Kubernetes ou do Podman e também pode personalizar os comandos `docker run` ou `docker create`usados para invocar o contêiner. Os comandos de personalização são executados por um script, que é disparado automaticamente quando uma variável de ambiente específica é definida no executor. Para obter mais informações, confira "[Como disparar o script de personalização](#triggering-the-customization-script)" abaixo.

Essa personalização só está disponível para executores auto-hospedados baseados em Linux e o acesso de usuário raiz não é necessário.

## Comandos de personalização de contêiner

O {% data variables.product.prodname_actions %} inclui os seguintes comandos para personalização de contêiner:

- [`prepare_job`](/actions/hosting-your-own-runners/customizing-the-containers-used-by-jobs#prepare_job): chamado quando um trabalho é iniciado.
- [`cleanup_job`](/actions/hosting-your-own-runners/customizing-the-containers-used-by-jobs#cleanup_job): chamado no final de um trabalho.
- [`run_container_step`](/actions/hosting-your-own-runners/customizing-the-containers-used-by-jobs#run_container_step): chamado uma vez para cada ação de contêiner no trabalho.
- [`run_script_step`](/actions/hosting-your-own-runners/customizing-the-containers-used-by-jobs#run_script_step): executa qualquer etapa que não seja uma ação de contêiner.

Cada um desses comandos de personalização precisa ser definido no próprio arquivo JSON. O nome do arquivo precisa corresponder ao nome do comando, com a extensão `.json`. Por exemplo, o comando `prepare_job` é definido em `prepare_job.json`. Esses arquivos JSON serão executados juntos no executor auto-hospedado, durante o script `index.js` principal. Esse processo é descrito em mais detalhes em "[Como gerar o script de personalização](#generating-the-customization-script)".

Esses comandos também incluem argumentos de configuração, explicados abaixo em mais detalhes.

### `prepare_job`

O comando `prepare_job` é chamado quando um trabalho é iniciado. O {% data variables.product.prodname_actions %} é aprovado em todos os contêineres de trabalho ou de serviço que o trabalho tenha. Esse comando será chamado se você tiver algum contêiner de trabalho ou de serviço no trabalho. 

O {% data variables.product.prodname_actions %} pressupõe que você executará as seguintes tarefas no comando `prepare_job`:

- Remover tudo dos trabalhos anteriores, se necessário.
- Criar uma rede, se necessário.
- Efetuar pull dos contêineres de serviço e de trabalho.
- Iniciar o contêiner de trabalho.
- Iniciar o contêiner de serviço.
- Escrever no arquivo de resposta todas as informações necessárias para o {% data variables.product.prodname_actions %}:
  - Obrigatório: informar se o contêiner é um contêiner `alpine` do Linux (usando o `isAlpine` booliano). 
  - Opcional: todos os campos de contexto que você deseja definir no contexto do trabalho, caso contrário, eles não estarão disponíveis para os usuários usarem. Para obter mais informações, confira "[Contexto do `job`](/actions/learn-github-actions/contexts#job-context)".
- Retornar `0` quando as verificações de integridade forem bem-sucedidas e os contêineres de trabalho/serviço forem iniciados.

#### Argumentos

- `jobContainer`: **opcional**. Um objeto que contém informações sobre o contêiner de trabalho especificado.
  - `image`: **obrigatório**. Uma cadeia de caracteres que contém a imagem do Docker.
  - `workingDirectory`: **obrigatório**. Uma cadeia de caracteres que contém o caminho absoluto do diretório de trabalho.
  - `createOptions`: **opcional**. As opções de _create_ opcionais especificadas no YAML. Para obter mais informações, confira "[Exemplo: como executar um trabalho em um contêiner](/actions/using-jobs/running-jobs-in-a-container#example-running-a-job-within-a-container)".
  - `environmentVariables`: **opcional**. Define um mapa das principais variáveis de ambiente.
  - `userMountVolumes`: **opcional**. Uma matriz de volumes de montagem do usuário definida no YAML. Para obter mais informações, confira "[Exemplo: como executar um trabalho em um contêiner](/actions/using-jobs/running-jobs-in-a-container#example-running-a-job-within-a-container)".
    - `sourceVolumePath`: **obrigatório**. O caminho de origem para o volume que será montado no contêiner do Docker.
    - `targetVolumePath`: **obrigatório**. O caminho de destino do volume que será montado no contêiner do Docker.
    - `readOnly`: **obrigatório**. Determina se a montagem deve ser somente leitura ou não.
  - `systemMountVolumes`: **obrigatório**. Uma matriz de montagens a serem montadas no contêiner, usando os mesmos campos que acima.
    - `sourceVolumePath`: **obrigatório**. O caminho de origem para o volume que será montado no contêiner do Docker.
    - `targetVolumePath`: **obrigatório**. O caminho de destino do volume que será montado no contêiner do Docker.
    - `readOnly`: **obrigatório**. Determina se a montagem deve ser somente leitura ou não.
  - `registry` **opcional**. As credenciais do registro do Docker para um registro de contêiner privado.
    - `username`: **opcional**. O nome de usuário da conta do registro.
    - `password`: **opcional**. A senha da conta do registro.
    - `serverUrl`: **opcional**. A URL do registro.
  - `portMappings`: **opcional**. Um hash de valor de chave das portas _source:target_ a serem mapeadas para o contêiner.
- `services`: **opcional**. Uma matriz de contêineres de serviço a ser ativada.
  - `contextName`: **obrigatório**. O nome do serviço no contexto do trabalho.
  - `image`: **obrigatório**. Uma cadeia de caracteres que contém a imagem do Docker.
  - `createOptions`: **opcional**. As opções de _create_ opcionais especificadas no YAML. Para obter mais informações, confira "[Exemplo: como executar um trabalho em um contêiner](/actions/using-jobs/running-jobs-in-a-container#example-running-a-job-within-a-container)".
  - `environmentVariables`: **opcional**. Define um mapa das principais variáveis de ambiente.
  - `userMountVolumes`: **opcional**. Uma matriz de montagens a serem montadas no contêiner, usando os mesmos campos que acima.
    - `sourceVolumePath`: **obrigatório**. O caminho de origem para o volume que será montado no contêiner do Docker.
    - `targetVolumePath`: **obrigatório**. O caminho de destino do volume que será montado no contêiner do Docker.
    - `readOnly`: **obrigatório**. Determina se a montagem deve ser somente leitura ou não.
  - `registry` **opcional**. As credenciais do registro do Docker para o registro de contêiner privado.
    - `username`: **opcional**. O nome de usuário da conta do registro.
    - `password`: **opcional**. A senha da conta do registro.
    - `serverUrl`: **opcional**. A URL do registro.
  - `portMappings`: **opcional**. Um hash de valor de chave das portas _source:target_ a serem mapeadas para o contêiner.

#### Exemplo de entrada

```json{:copy}
{
  "command": "prepare_job",
  "responseFile": "/users/octocat/runner/_work/{guid}.json",
  "state": {},
  "args": {
    "jobContainer": {
      "image": "node:14.16",
      "workingDirectory": "/__w/octocat-test2/octocat-test2",
      "createOptions": "--cpus 1",
      "environmentVariables": {
        "NODE_ENV": "development"
      },
      "userMountVolumes": [
        {
          "sourceVolumePath": "my_docker_volume",
          "targetVolumePath": "/volume_mount",
          "readOnly": false
        }
      ],
      "systemMountVolumes": [
        {
          "sourceVolumePath": "/home/octocat/git/runner/_layout/_work",
          "targetVolumePath": "/__w",
          "readOnly": false
        },
        {
          "sourceVolumePath": "/home/octocat/git/runner/_layout/externals",
          "targetVolumePath": "/__e",
          "readOnly": true
        },
        {
          "sourceVolumePath": "/home/octocat/git/runner/_layout/_work/_temp",
          "targetVolumePath": "/__w/_temp",
          "readOnly": false
        },
        {
          "sourceVolumePath": "/home/octocat/git/runner/_layout/_work/_actions",
          "targetVolumePath": "/__w/_actions",
          "readOnly": false
        },
        {
          "sourceVolumePath": "/home/octocat/git/runner/_layout/_work/_tool",
          "targetVolumePath": "/__w/_tool",
          "readOnly": false
        },
        {
          "sourceVolumePath": "/home/octocat/git/runner/_layout/_work/_temp/_github_home",
          "targetVolumePath": "/github/home",
          "readOnly": false
        },
        {
          "sourceVolumePath": "/home/octocat/git/runner/_layout/_work/_temp/_github_workflow",
          "targetVolumePath": "/github/workflow",
          "readOnly": false
        }
      ],
      "registry": {
        "username": "octocat",
        "password": "examplePassword",
        "serverUrl": "https://index.docker.io/v1"
      },
      "portMappings": { "80": "801" }
    },
    "services": [
      {
        "contextName": "redis",
        "image": "redis",
        "createOptions": "--cpus 1",
        "environmentVariables": {},
        "userMountVolumes": [],
        "portMappings": { "80": "801" },
        "registry": {
          "username": "octocat",
          "password": "examplePassword",
          "serverUrl": "https://index.docker.io/v1"
        }
      }
    ]
  }
}
```

#### Saída de exemplo

Este exemplo de saída é o conteúdo do `responseFile` definido na entrada acima.

```json{:copy}
{
  "state": {
    "network": "example_network_53269bd575972817b43f7733536b200c",
    "jobContainer": "82e8219701fe096a35941d869cf3d71af1d943b5d8bdd718857fb87ac3042480",
    "serviceContainers": {
      "redis": "60972d9aa486605e66b0dad4abb678dc3d9116f536579e418176eedb8abb9105"
    }
  },
  "context": {
    "container": {
      "id": "82e8219701fe096a35941d869cf3d71af1d943b5d8bdd718857fb87ac3042480",
      "network": "example_network_53269bd575972817b43f7733536b200c"
    },
    "services": {
      "redis": {
        "id": "60972d9aa486605e66b0dad4abb678dc3d9116f536579e418176eedb8abb9105",
        "ports": {
          "8080": "8080"
        },
        "network": "example_network_53269bd575972817b43f7733536b200c"
      }
    },
    "isAlpine": true
  }
}
```

### `cleanup_job`

O comando `cleanup_job` é chamado no final de um trabalho. O {% data variables.product.prodname_actions %} pressupõe que você executará as seguintes tarefas no comando `cleanup_job`:

- Pare todos os contêineres de trabalho ou de serviço em execução (ou o pod equivalente).
- Pare a rede (se existir).
- Exclua todos os contêineres de trabalho ou de serviço (ou o pod equivalente).
- Exclua a rede (se existir).
- Limpe todos os outros itens que foram criados para o trabalho.

#### Argumentos

Nenhum argumento é fornecido para `cleanup_job`.

#### Exemplo de entrada

```json{:copy}
{
  "command": "cleanup_job",
  "responseFile": null,
  "state": {
    "network": "example_network_53269bd575972817b43f7733536b200c",
    "jobContainer": "82e8219701fe096a35941d869cf3d71af1d943b5d8bdd718857fb87ac3042480",
    "serviceContainers": {
      "redis": "60972d9aa486605e66b0dad4abb678dc3d9116f536579e418176eedb8abb9105"
    }
  },
  "args": {}
}
```

#### Saída de exemplo

Nenhuma saída é esperada para `cleanup_job`.

### `run_container_step`

O comando `run_container_step` é chamado uma vez para cada ação de contêiner no trabalho. O {% data variables.product.prodname_actions %} pressupõe que você executará as seguintes tarefas no comando `run_container_step`:

- Efetuar pull ou criar o contêiner necessário (ou falhar, se não for possível).
- Executar a ação do contêiner e retornar o código de saída do contêiner.
- Transmitir as saídas de logs de etapa para stdout e stderr.
- Limpar o contêiner depois que ele for executado.

#### Argumentos

- `image`: **opcional**. Uma cadeia de caracteres que contém a imagem do Docker. Caso contrário, um dockerfile precisará ser fornecido.
- `dockerfile`: **opcional**. Uma cadeia de caracteres que contém o caminho para o dockerfile, caso contrário, uma imagem precisará ser fornecida.
- `entryPointArgs`: **opcional**. Uma lista que contém os argumentos de ponto de entrada.
- `entryPoint`: **opcional**. O ponto de entrada do contêiner a ser usado se o ponto de entrada de imagem padrão precisar ser substituído.
- `workingDirectory`: **obrigatório**. Uma cadeia de caracteres que contém o caminho absoluto do diretório de trabalho.
- `createOptions`: **opcional**. As opções de _create_ opcionais especificadas no YAML. Para obter mais informações, confira "[Exemplo: como executar um trabalho em um contêiner](/actions/using-jobs/running-jobs-in-a-container#example-running-a-job-within-a-container)".
- `environmentVariables`: **opcional**. Define um mapa das principais variáveis de ambiente.
- `prependPath`: **opcional**. Uma matriz de caminhos adicionais a serem acrescentados à variável `$PATH`.
- `userMountVolumes`: **opcional**. uma matriz de volumes de montagem do usuário definida no YAML. Para obter mais informações, confira "[Exemplo: como executar um trabalho em um contêiner](/actions/using-jobs/running-jobs-in-a-container#example-running-a-job-within-a-container)".
  - `sourceVolumePath`: **obrigatório**. O caminho de origem para o volume que será montado no contêiner do Docker.
  - `targetVolumePath`: **obrigatório**. O caminho de destino do volume que será montado no contêiner do Docker.
  - `readOnly`: **obrigatório**. Determina se a montagem deve ser somente leitura ou não.
- `systemMountVolumes`: **obrigatório**. Uma matriz de montagens a serem montadas no contêiner, usando os mesmos campos que acima.
  - `sourceVolumePath`: **obrigatório**. O caminho de origem para o volume que será montado no contêiner do Docker.
  - `targetVolumePath`: **obrigatório**. O caminho de destino do volume que será montado no contêiner do Docker.
  - `readOnly`: **obrigatório**. Determina se a montagem deve ser somente leitura ou não.
- `registry` **opcional**. As credenciais do registro do Docker para um registro de contêiner privado.
  - `username`: **opcional**. O nome de usuário da conta do registro.
  - `password`: **opcional**. A senha da conta do registro.
  - `serverUrl`: **opcional**. A URL do registro.
- `portMappings`: **opcional**. Um hash de valor de chave das portas _source:target_ a serem mapeadas para o contêiner.

#### Exemplo de entrada de imagem

Se você estiver usando uma imagem do Docker, especifique o nome da imagem no parâmetro `"image":`.

```json{:copy}
{
  "command": "run_container_step",
  "responseFile": null,
  "state": {
    "network": "example_network_53269bd575972817b43f7733536b200c",
    "jobContainer": "82e8219701fe096a35941d869cf3d71af1d943b5d8bdd718857fb87ac3042480",
    "serviceContainers": {
      "redis": "60972d9aa486605e66b0dad4abb678dc3d9116f536579e418176eedb8abb9105"
    }
  },
  "args": {
    "image": "node:14.16",
    "dockerfile": null,
    "entryPointArgs": ["-f", "/dev/null"],
    "entryPoint": "tail",
    "workingDirectory": "/__w/octocat-test2/octocat-test2",
    "createOptions": "--cpus 1",
    "environmentVariables": {
      "NODE_ENV": "development"
    },
    "prependPath": ["/foo/bar", "bar/foo"],
    "userMountVolumes": [
      {
        "sourceVolumePath": "my_docker_volume",
        "targetVolumePath": "/volume_mount",
        "readOnly": false
      }
    ],
    "systemMountVolumes": [
      {
        "sourceVolumePath": "/home/octocat/git/runner/_layout/_work",
        "targetVolumePath": "/__w",
        "readOnly": false
      },
      {
        "sourceVolumePath": "/home/octocat/git/runner/_layout/externals",
        "targetVolumePath": "/__e",
        "readOnly": true
      },
      {
        "sourceVolumePath": "/home/octocat/git/runner/_layout/_work/_temp",
        "targetVolumePath": "/__w/_temp",
        "readOnly": false
      },
      {
        "sourceVolumePath": "/home/octocat/git/runner/_layout/_work/_actions",
        "targetVolumePath": "/__w/_actions",
        "readOnly": false
      },
      {
        "sourceVolumePath": "/home/octocat/git/runner/_layout/_work/_tool",
        "targetVolumePath": "/__w/_tool",
        "readOnly": false
      },
      {
        "sourceVolumePath": "/home/octocat/git/runner/_layout/_work/_temp/_github_home",
        "targetVolumePath": "/github/home",
        "readOnly": false
      },
      {
        "sourceVolumePath": "/home/octocat/git/runner/_layout/_work/_temp/_github_workflow",
        "targetVolumePath": "/github/workflow",
        "readOnly": false
      }
    ],
    "registry": null,
    "portMappings": { "80": "801" }
  }
}
```

#### Entrada de exemplo de Dockerfile

Para um contêiner definido por um Dockerfile, este exemplo demonstra como especificar o caminho para um `Dockerfile` na entrada usando o parâmetro `"dockerfile":`.

```json{:copy}
{
  "command": "run_container_step",
  "responseFile": null,
  "state": {
    "network": "example_network_53269bd575972817b43f7733536b200c",
    "jobContainer": "82e8219701fe096a35941d869cf3d71af1d943b5d8bdd718857fb87ac3042480",
    "services": {
      "redis": "60972d9aa486605e66b0dad4abb678dc3d9116f536579e418176eedb8abb9105"
    }
  },
  "args": {
    "image": null,
    "dockerfile": "/__w/_actions/foo/dockerfile",
    "entryPointArgs": ["hello world"],
    "entryPoint": "echo",
    "workingDirectory": "/__w/octocat-test2/octocat-test2",
    "createOptions": "--cpus 1",
    "environmentVariables": {
      "NODE_ENV": "development"
    },
    "prependPath": ["/foo/bar", "bar/foo"],
    "userMountVolumes": [
      {
        "sourceVolumePath": "my_docker_volume",
        "targetVolumePath": "/volume_mount",
        "readOnly": false
      }
    ],
    "systemMountVolumes": [
      {
        "sourceVolumePath": "/home/octocat/git/runner/_layout/_work",
        "targetVolumePath": "/__w",
        "readOnly": false
      },
      {
        "sourceVolumePath": "/home/octocat/git/runner/_layout/externals",
        "targetVolumePath": "/__e",
        "readOnly": true
      },
      {
        "sourceVolumePath": "/home/octocat/git/runner/_layout/_work/_temp",
        "targetVolumePath": "/__w/_temp",
        "readOnly": false
      },
      {
        "sourceVolumePath": "/home/octocat/git/runner/_layout/_work/_actions",
        "targetVolumePath": "/__w/_actions",
        "readOnly": false
      },
      {
        "sourceVolumePath": "/home/octocat/git/runner/_layout/_work/_tool",
        "targetVolumePath": "/__w/_tool",
        "readOnly": false
      },
      {
        "sourceVolumePath": "/home/octocat/git/runner/_layout/_work/_temp/_github_home",
        "targetVolumePath": "/github/home",
        "readOnly": false
      },
      {
        "sourceVolumePath": "/home/octocat/git/runner/_layout/_work/_temp/_github_workflow",
        "targetVolumePath": "/github/workflow",
        "readOnly": false
      }
    ],
    "registry": null,
    "portMappings": { "80": "801" }
  }
}
```

#### Saída de exemplo

Nenhuma saída é esperada para `run_container_step`.

### `run_script_step`

O {% data variables.product.prodname_actions %} pressupõe que você executará as seguintes tarefas:

- Invocar o script fornecido dentro do contêiner de trabalho e retornar o código de saída.
- Transmitir as saídas de logs de etapa para stdout e stderr.

#### Argumentos

- `entryPointArgs`: **opcional**. Uma lista que contém os argumentos de ponto de entrada.
- `entryPoint`: **opcional**. O ponto de entrada do contêiner a ser usado se o ponto de entrada de imagem padrão precisar ser substituído.
- `prependPath`: **opcional**. Uma matriz de caminhos adicionais a serem acrescentados à variável `$PATH`.
- `workingDirectory`: **obrigatório**. Uma cadeia de caracteres que contém o caminho absoluto do diretório de trabalho.
- `environmentVariables`: **opcional**. Define um mapa das principais variáveis de ambiente.

#### Exemplo de entrada

```json{:copy}
{
  "command": "run_script_step",
  "responseFile": null,
  "state": {
    "network": "example_network_53269bd575972817b43f7733536b200c",
    "jobContainer": "82e8219701fe096a35941d869cf3d71af1d943b5d8bdd718857fb87ac3042480",
    "serviceContainers": {
      "redis": "60972d9aa486605e66b0dad4abb678dc3d9116f536579e418176eedb8abb9105"
    }
  },
  "args": {
    "entryPointArgs": ["-e", "/runner/temp/example.sh"],
    "entryPoint": "bash",
    "environmentVariables": {
      "NODE_ENV": "development"
    },
    "prependPath": ["/foo/bar", "bar/foo"],
    "workingDirectory": "/__w/octocat-test2/octocat-test2"
  }
}
```

#### Saída de exemplo

Nenhuma saída é esperada para `run_script_step`.

## Como gerar o script de personalização

O {% data variables.product.prodname_dotcom %} criou um repositório de exemplo que demonstra como gerar scripts de personalização para o Docker e o Kubernetes. 

{% note %}

**Observação:** os scripts resultantes estão disponíveis para fins de teste e você precisará determinar se eles são apropriados para seus requisitos.

{% endnote %}

1. Clone o repositório [actions/runner-container-hooks](https://github.com/actions/runner-container-hooks) para seu executor auto-hospedado.

1. O diretório `examples/` contém alguns comandos de personalização existentes, cada um com o próprio arquivo JSON. Você pode examinar esses exemplos e usá-los como um ponto de partida para seus comandos de personalização.

   - `prepare_job.json`
   - `run_script_step.json`
   - `run_container_step.json`

1. Crie os pacotes npm. Esses comandos geram os arquivos `index.js` dentro de `packages/docker/dist` e `packages/k8s/dist`.

   ```shell
   npm install && npm run bootstrap && npm run build-all
   ```

Quando o `index.js` resultante for disparado pelo {% data variables.product.prodname_actions %}, ele executará os comandos de personalização definidos nos arquivos JSON. Para disparar `index.js`, você precisa adicioná-la à variável de ambiente `ACTIONS_RUNNER_REQUIRE_JOB_CONTAINER`, como está descrito na próxima seção.

## Como disparar o script de personalização

Os scripts personalizados precisam estar localizados no executor, mas não precisam ser armazenados no diretório do aplicativo executor auto-hospedado. Os scripts são executados no contexto de segurança da conta de serviço que executa o serviço de executor.

{% note %}

**Observação**: os scripts disparados são processados de maneira síncrona, ou seja, eles bloqueiam a execução do trabalho enquanto estão em execução.

{% endnote %}

Os scripts são executados automaticamente quando o executor tem a seguinte variável de ambiente que contêm um caminho absoluto para o script:

- `ACTIONS_RUNNER_CONTAINER_HOOK`: o script definido nessa variável de ambiente é disparado quando um trabalho é atribuído a um executor, mas antes do trabalho começar a ser executado.

Para definir essa variável de ambiente, você pode adicioná-la ao sistema operacional ou a um arquivo chamado `.env` no diretório do aplicativo executor auto-hospedado. Por exemplo, a seguinte entrada `.env` fará com que o executor execute o script em `/Users/octocat/runner/index.js` automaticamente antes da execução de cada trabalho de contêiner:

```bash
ACTIONS_RUNNER_CONTAINER_HOOK=/Users/octocat/runner/index.js
```

Se você quiser garantir que o trabalho sempre seja executado dentro de um contêiner e, portanto, sempre aplique as personalizações de contêiner, defina a variável `ACTIONS_RUNNER_REQUIRE_JOB_CONTAINER` no executor auto-hospedado como `true`. Isso falhará trabalhos que não especificam um contêiner de trabalho.

## Solução de problemas

### Sem configuração de tempo limite

No momento, não há nenhuma configuração de tempo limite disponível para o script executado por `ACTIONS_RUNNER_CONTAINER_HOOK`. Como resultado, você pode considerar a adição de tratamento do tempo limite ao script.

### Como examinar o log de execução do fluxo de trabalho

Para confirmar se os scripts estão em execução, você pode revisar os logs desse trabalho. Para obter mais informações sobre como verificar os logs, confira "[Como ver os logs para diagnosticar falhas](/actions/monitoring-and-troubleshooting-workflows/using-workflow-run-logs#viewing-logs-to-diagnose-failures)".
