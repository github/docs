---
title: Personalizando os contêineres usados por trabalhos
intro: Você pode personalizar como seu exevutor auto-hospedado invoca um contêiner para um trabalho.
versions:
  feature: container-hooks
type: reference
miniTocMaxHeadingLevel: 4
shortTitle: Personalizar contêineres usados por trabalhos
---

{% note %}

**Observação**: Este recurso está atualmente na versão beta e está sujeito a alterações.

{% endnote %}

## Sobre a personalização de contêineres

{% data variables.product.prodname_actions %} permite que você execute um trabalho dentro de um contêiner, usando a declaração `container:` no seu arquivo de fluxo de trabalho. Para obter mais informações, consulte "[Executando trabalhos em um contêiner](/actions/using-jobs/running-jobs-in-a-container)." Para processar trabalhos baseados em contêineres, o executor auto-hospedado cria um contêiner para cada trabalho.

{% data variables.product.prodname_actions %} é compatível com comandos que permitem personalizar a forma como seus contêineres são criados pelo executor auto-hospedado. Por exemplo, você pode usar esses comandos para gerenciar os contêineres por meio do Kubernetes ou do Podman, e você também pode personalizar o comando `docker run` ou `docker create` usados para invocar o contêiner. Os comandos de personalização são executados por um script, que é automaticamente acionado quando uma variável de ambiente específica é definida no executor. Para obter mais informações, consulte [Acionando o script de personalização](#triggering-the-customization-script)" abaixo.

Essa personalização só está disponível para executores auto-hospedados com base no Linux e o acesso do usuário root não é necessário.

## Comandos de personalização do contêiner

{% data variables.product.prodname_actions %} contém os seguintes comandos para personalização do contêiner:

- [`prepare_job`](/actions/hosting-your-own-runners/customizing-the-containers-used-by-jobs#prepare_job). Chamado quando um trabalho é iniciado.
- [`cleanup_job`](/actions/hosting-your-own-runners/customizing-the-containers-used-by-jobs#cleanup_job): Chamado no final de um trabalho.
- [`run_container_step`](/actions/hosting-your-own-runners/customizing-the-containers-used-by-jobs#run_container_step): Chamada uma vez para cada ação de contêiner no trabalho.
- [`run_script_step`](/actions/hosting-your-own-runners/customizing-the-containers-used-by-jobs#run_script_step): Executa qualquer passo que não seja uma ação de contêiner.

Cada um desses comandos de personalização deve ser definido em seu próprio arquivo JSON. O nome do arquivo deve corresponder ao nome do comando, com a extensão `.json`. Por exemplo, o comando `prepare_job` está definido em `prepare_job.json`. Esses arquivos JSON serão executados em conjunto no executor auto-hospedado, como parte do script `index.js` principal. Esse processo está descrito de modo mais detalhado em "[Gerando o script de personalização](#generating-the-customization-script)".

Esses comandos também incluem argumentos de configuração, explicados abaixo com mais detalhes.

### `prepare_job`

O comando `prepare_job` é chamado quando um trabalho é iniciado. {% data variables.product.prodname_actions %} passa em qualquer trabalho ou recipiente de serviço que o trabalho possui. Esse comando será chamado se você tiver algum conteêiner de serviço ou trabalho no trabalho.

{% data variables.product.prodname_actions %} assume que você executará as seguintes tarefas no comando `prepare_job`:

- Esvaziar tudo dos trabalhos anteriores, se necessário.
- Crie uma rede, se necessário.
- Puxe o job e os contêineres de serviço.
- Inicie o conteiner do trabalho
- Inicie os contêineres de serviço.
- Escreva para o arquivo de resposta quaisquer informações que {% data variables.product.prodname_actions %} precisará:
  - Obritaório: Indique se o contêiner é um contêiner linux `alpino` (usando o booleano `isAlpine`).
  - Opcional: Todos os campos de contexto que você queira definir no contexto do trabalho, caso contrário, eles ficarão indisponíveis para os usuários usarem. Para obter mais informações, consulte o contexto "[`trabalho`](/actions/learn-github-actions/contexts#job-context).
- Retirna `0` quando a verificação de integridade for bemsucedida e os contêineres de serviço/trabalho forem iniciados.

#### Argumentos

- `jobContainer`: **Opcional**. Um objeto que contém informações sobre o contêiner de trabalho especificado.
  - `image`: **Obrigatório**. Uma string que contém a imagem do Docker.
  - `workingDirectory`: **Obrigatório**. Uma string que contém o caminho absoluto do diretório de trabalho.
  - `createOptions`: **Opcional**. As opções de _criar_ especificadas no YAML. Para obter mais informações, consulte "[Exemplo: Executando um trabalho dentro de um contêiner](/actions/using-jobs/running-jobs-in-a-container#example-running-a-job-within-a-container)".
  - `environmentVariables`: **Opcional**. Define um mapa de variáveis de ambiente chave.
  - `userMountVolumes`: **Opcional**. Uma a matriz de volumes de montagem de usuário definido no YAML. Para obter mais informações, consulte "[Exemplo: Executando um trabalho dentro de um contêiner](/actions/using-jobs/running-jobs-in-a-container#example-running-a-job-within-a-container)".
    - `sourceVolumePath`: **Obrigatório**. O caminho da origem para o volume que será montado no contêiner do Docker.
    - `targetVolumePath`: **Obrigatório**. O caminho de destino para o volume que será montado no contêiner Docker.
    - `readOnly`: **Obrigatório**. Determina se a montagem deve ser somente leitura.
  - `systemMountVolumes`: **Obrigatório**. Uma matriz de montagens para montar no container. Mesmos campos que acima.
    - `sourceVolumePath`: **Obrigatório**. O caminho da origem para o volume que será montado no contêiner do Docker.
    - `targetVolumePath`: **Obrigatório**. O caminho de destino para o volume que será montado no contêiner Docker.
    - `readOnly`: **Obrigatório**. Determina se a montagem deve ser somente leitura.
  - `registro` **Opcional**. As credenciais do registro Docker para um registro de contêiner privado.
    - `username`: **Opcional**. O nome de usuário da conta de registro.
    - `senha`: **Opcional**. A senha para a conta de registro.
    - `serverUrl`: **Opcional**. A URL do registro.
  - `portMappings`: **Opcional**. Um hash de valor da chave das portas _source:target:_ para mapear com o contêiner.
- `services`: **Opcional**. Um array de contêineres de serviço para girar.
  - `contextName`: **Obrigatório**. O nome do serviço no contexto do Trabalho.
  - `image`: **Obrigatório**. Uma string que contém a imagem do Docker.
  - `createOptions`: **Opcional**. As opções de _criar_ especificadas no YAML. Para obter mais informações, consulte "[Exemplo: Executando um trabalho dentro de um contêiner](/actions/using-jobs/running-jobs-in-a-container#example-running-a-job-within-a-container)".
  - `environmentVariables`: **Opcional**. Define um mapa de variáveis de ambiente chave.
  - `userMountVolumes`: **Opcional**. Uma matriz de montagens para montar no container. Mesmos campos que acima.
    - `sourceVolumePath`: **Obrigatório**. O caminho da origem para o volume que será montado no contêiner do Docker.
    - `targetVolumePath`: **Obrigatório**. O caminho de destino para o volume que será montado no contêiner Docker.
    - `readOnly`: **Obrigatório**. Determina se a montagem deve ser somente leitura.
  - `registro` **Opcional**. As credenciais do registro Docker para o registro de contêiner privado.
    - `username`: **Opcional**. O nome de usuário da conta de registro.
    - `senha`: **Opcional**. A senha para a conta de registro.
    - `serverUrl`: **Opcional**. A URL do registro.
  - `portMappings`: **Opcional**. Um hash de valor da chave das portas _source:target:_ para mapear com o contêiner.

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

#### Exemplo de saída

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

O comando `cleanup_job` é chamado no final de um trabalho. {% data variables.product.prodname_actions %} pressupõe que você fará as seguintes tarefas no comando `cleanup_job`:

- Para qualquer serviço em execução ou contêineres do trabalho (ou o pod correspondente).
- Parar a rede (se houver).
- Excluir qualquer trabalho ou contêiner de serviço (ou o pod) equivalente.
- Excluir a rede (se houver).
- Limpe qualquer coisa que tenha sido criada para o trabalho.

#### Argumentos

Não são fornecidos argumentos para `cleanup_job`.

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

#### Exemplo de saída

Nenhuma saída é esperada para `cleanup_job`.

### `run_container_step`

O comando `run_container_step` é chamado uma vez para cada ação de contêiner em seu trabalho. {% data variables.product.prodname_actions %} pressupõe que você executará as seguintes tarefas no comando `run_container_step`:

- Puxe ou crie o contêiner necessário (ou falhe se você não conseguir).
- Executa a ação de contêiner e retorna o código de saída do contêiner.
- Transmita qualquer saída de logs para o stdout e stderr.
- Limpe o contêiner após ser executado.

#### Argumentos

- `image`: **Opcional**. Uma string que contém a imagem do Docker. Caso contrário, um arquivo Docker deve ser fornecido.
- `dockerfile`: **Opcional**. Uma string que contém o caminho para o arquivo Docker, caso contrário uma imagem deve ser fornecida.
- `entryPointArgs`: **Opcional**. Uma lista que contém os argumentos dos pontos de entrada.
- `entryPoint`: **Opcional**. O ponto de entrada do contêiner a ser usado se o ponto de entrada de imagem padrão deve ser substituído.
- `workingDirectory`: **Obrigatório**. Uma string que contém o caminho absoluto do diretório de trabalho.
- `createOptions`: **Opcional**. As opções de _criar_ especificadas no YAML. Para obter mais informações, consulte "[Exemplo: Executando um trabalho dentro de um contêiner](/actions/using-jobs/running-jobs-in-a-container#example-running-a-job-within-a-container)".
- `environmentVariables`: **Opcional**. Define um mapa de variáveis de ambiente chave.
- `prependPath`: **Opcional**. Uma matriz de caminhos adicionais para preceder a variável `$PATH`.
- `userMountVolumes`: **Opcional**. uma a matriz de volumes de montagem de usuário definido no YAML. Para obter mais informações, consulte "[Exemplo: Executando um trabalho dentro de um contêiner](/actions/using-jobs/running-jobs-in-a-container#example-running-a-job-within-a-container)".
  - `sourceVolumePath`: **Obrigatório**. O caminho da origem para o volume que será montado no contêiner do Docker.
  - `targetVolumePath`: **Obrigatório**. O caminho de destino para o volume que será montado no contêiner Docker.
  - `readOnly`: **Obrigatório**. Determina se a montagem deve ser somente leitura.
- `systemMountVolumes`: **Obrigatório**. Uma matriz de montagens para montar no container, usando os mesmos campos que acima.
  - `sourceVolumePath`: **Obrigatório**. O caminho da origem para o volume que será montado no contêiner do Docker.
  - `targetVolumePath`: **Obrigatório**. O caminho de destino para o volume que será montado no contêiner Docker.
  - `readOnly`: **Obrigatório**. Determina se a montagem deve ser somente leitura.
- `registro` **Opcional**. As credenciais do registro Docker para um registro de contêiner privado.
  - `username`: **Opcional**. O nome de usuário da conta de registro.
  - `senha`: **Opcional**. A senha para a conta de registro.
  - `serverUrl`: **Opcional**. A URL do registro.
- `portMappings`: **Opcional**. Um hash de valor da chave das portas _source:target:_ para mapear no contêiner.

#### Exemplo de entrada para imagem

Se você estiver usando uma imagem do Docker, você poderá especificar o nome da imagem no parâmetro `"image":`.

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

#### Exemplo de entrada para o arquivo Docker

Se o seu contêiner for definido por um arquivo Docker, este exemplo irá demonstrar como especificar o caminho para um `arquivo Docker` em sua entrada, usando o parâmetro `"dockerfile":`.

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

#### Exemplo de saída

Nenhuma saída é esperada para `run_container_step`.

### `run_script_step`

{% data variables.product.prodname_actions %} assume que você executará as seguintes tarefas:

- Invoca o script fornecido dentro do contêiner do trabalho e retorna o código de saída.
- Transmitir qualquer saída do log para stdout e stderr.

#### Argumentos

- `entryPointArgs`: **Opcional**. Uma lista contendo os argumentos do ponto de entrada.
- `entryPoint`: **Opcional**. O ponto de entrada do contêiner a ser usado se o ponto de entrada de imagem padrão deve ser substituído.
- `prependPath`: **Opcional**. Uma matriz de caminhos adicionais para preceder a variável `$PATH`.
- `workingDirectory`: **Obrigatório**. Uma string que contém o caminho absoluto do diretório de trabalho.
- `environmentVariables`: **Opcional**. Define um mapa de variáveis de ambiente chave.

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

#### Exemplo de saída

Nenhuma saída é esperada para `run_script_step`.

## Gerando o script de personalização

{% data variables.product.prodname_dotcom %} criou um repositório de exemplo que demonstra como gerar scripts de personalização para Docker e Kubernetes.

{% note %}

**Observação:** Os scripts resultantes estão disponíveis para fins de teste, e você precisará determinar se eles são apropriados para seus requisitos.

{% endnote %}

1. Clone o repositório [actions/runner-container-hooks](https://github.com/actions/runner-container-hooks) para o executor auto-hospedado.

1. O diretório `exemplos/` contém alguns comandos de personalização existentes, cada um com seu próprio arquivo JSON. Você pode revisar esses exemplos e usá-los como ponto de partida para seus próprios comandos de personalização.

   - `prepare_job.json`
   - `run_script_step.json`
   - `run_container_step.json`

1. Construa os pacotes do npm. Estes comandos geram os arquivos `index.js` dentro de `packages/docker/dist` e `packages/k8s/dist`.

   ```shell
   npm install && npm run bootstrap && npm run build-all
   ```

Quando o `index.js` resyultante for acionado por {% data variables.product.prodname_actions %}, ele executará os comandos de personalização definidos nos arquivos JSON. Para acionar o `index.js`, você precisará adicioná-lo à sua variável de ambiente `ACTIONS_RUNNER_REQUIRE_JOB_CONTAINER`, conforme descrito na próxima seção.

## Acionando o script personalizado

O script personalizado deve estar localizado no executor, mas não deve ser armazenado no diretório de aplicação de corredor auto-hospedado. Os scripts são executados no contexto de segurança da conta de serviço que está executando o serviço do executor.

{% note %}

**Observação**: O script acionado é processado de forma sincronizada, por isso bloqueará a execução do trabalho durante a execução.

{% endnote %}

O script é executado automaticamente quando o executor tem a seguinte variável de ambiente que contém um caminho absoluto para o script:

- `ACTIONS_RUNNER_CONTAINER_HOOK`: O script definido nesta variável de ambiente é acionado quando um trabalho foi atribuído a um executor, mas antes do trabalho começar a ser executado.

Para definir essa variável de ambiente, você pode adicioná-la ao sistema operacional ou adicioná-la a um arquivo chamado `.env` dentro do diretório de aplicativos do executor auto-hospedado. Por exemplo, a seguinte entrada `.env` fará com que o executor execute automaticamente o script em `/Users/octocat/runner/index.js` antes da execução de cada trabalho baseado em contêiner:

```bash
ACTIONS_RUNNER_CONTAINER_HOOK=/Users/octocat/runner/index.js
```

Se você quiser garantir que seu trabalho será sempre executado de um contêiner e, posteriormente, sempre aplicar suas personalizações de contêiner, você pode definir a variável `ACTIONS_RUNNER_REQUIRE_JOB_CONTAINER` no executor auto-hospedado como `verdadeiro`. Isso falhará em trabalhos que não especificam um contêiner de trabalho.

## Solução de Problemas

### Sem configuração de tempo limite

No momento, não há configuração de tempo limite disponível para o script executado por `ACTIONS_RUNNER_CONTAINER_HOOK`. Como resultado, você pode considerar adicionar tempo limite de manipulação ao seu script.

### Revisando o log de execução do fluxo de trabalho

Para confirmar se seus scripts estão sendo executados, você pode revisar os logs para esse trabalho. Para obter mais informações sobre a verificação dos logs, consulte "[Visualizando os logs para diagnosticar as falhas](/actions/monitoring-and-troubleshooting-workflows/using-workflow-run-logs#viewing-logs-to-diagnose-failures)".
