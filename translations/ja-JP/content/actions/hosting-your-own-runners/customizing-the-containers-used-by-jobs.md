---
title: ジョブで使用されるコンテナーのカスタマイズ
intro: セルフホステッド ランナーでジョブのコンテナーを呼び出す方法をカスタマイズできます。
versions:
  feature: container-hooks
type: reference
miniTocMaxHeadingLevel: 4
shortTitle: Customize containers used by jobs
ms.openlocfilehash: 774aad09c504a09f0bf4f60af286952ee24f89b5
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/11/2022
ms.locfileid: '147881164'
---
{% note %}

**注:** この機能は現在ベータ版であり、変更されることがあります。

{% endnote %}

## コンテナーのカスタマイズについて

{% data variables.product.prodname_actions %} を使用すると、ワークフロー内の `container:` ステートメントを使用して、コンテナー内でジョブを実行できます。 詳しい情報については、「[コンテナー内でのジョブの実行](/actions/using-jobs/running-jobs-in-a-container)」を参照してください。 コンテナー ベースのジョブを処理するために、セルフホステッド ランナーではジョブごとにコンテナーが作成されます。

{% data variables.product.prodname_actions %} では、セルフホステッド ランナーによってコンテナーが作成される方法をカスタマイズできるコマンドがサポートされています。 たとえば、これらのコマンドを使用して、Kubernetes または Podman を介してコンテナーを管理できます。また、コンテナーを呼び出すために使用される `docker run` または `docker create` コマンドをカスタマイズすることもできます。 カスタマイズ コマンドはスクリプトによって実行されます。スクリプトは、ランナーで特定の環境変数が設定されている場合、自動的にトリガーされます。 詳しい情報については、以下の「[カスタマイズ スクリプトのトリガー](#triggering-the-customization-script)」を参照してください。

このカスタマイズは、Linux ベースのセルフホステッド ランナーにのみ使用でき、ルート ユーザー アクセスは必要ありません。

## コンテナーのカスタマイズ コマンド

{% data variables.product.prodname_actions %} には、コンテナーをカスタマイズするための次のコマンドが含まれています。

- [`prepare_job`](/actions/hosting-your-own-runners/customizing-the-containers-used-by-jobs#prepare_job): ジョブの開始時に呼び出されます。
- [`cleanup_job`](/actions/hosting-your-own-runners/customizing-the-containers-used-by-jobs#cleanup_job): ジョブの終了時に呼び出されます。
- [`run_container_step`](/actions/hosting-your-own-runners/customizing-the-containers-used-by-jobs#run_container_step): ジョブ内のコンテナー アクションごとに 1 回呼び出されます。
- [`run_script_step`](/actions/hosting-your-own-runners/customizing-the-containers-used-by-jobs#run_script_step): コンテナー アクション以外のステップを実行します。

これらのカスタマイズ コマンドはそれぞれ、独自の JSON ファイルで定義する必要があります。 ファイル名は、拡張子 `.json` を付けたコマンド名と一致する必要があります。 たとえば、`prepare_job` コマンドは、`prepare_job.json` で定義されます。 この後、これらの JSON ファイルは、メイン `index.js` スクリプトの一部として、セルフホステッド ランナーでまとめて実行されます。 このプロセスについては、「[カスタマイズ スクリプトの生成](#generating-the-customization-script)」で詳しく説明します。

これらのコマンドには、構成引数も含まれます。詳細については、以下で説明します。

### `prepare_job`

`prepare_job` コマンドは、ジョブの開始時に呼び出されます。 {% data variables.product.prodname_actions %} によって、ジョブまたはジョブのサービス コンテナーが渡されます。 このコマンドは、ジョブ内にサービスまたはジョブ コンテナーがある場合に呼び出されます。 

{% data variables.product.prodname_actions %} では、`prepare_job` コマンドで次のタスクが実行されることを前提としています。

- 必要に応じて、前のジョブから何かを取り除く。
- 必要に応じて、ネットワークを作成する。
- ジョブとサービス コンテナーをプルする。
- ジョブ コンテナーを開始する。
- サービス コンテナーを開始する。
- {% data variables.product.prodname_actions %} で必要となる情報を応答ファイルに書き込む。
  - 必須: コンテナーが `alpine` Linux コンテナーであるかどうかを示します (`isAlpine` ブール値を使用)。 
  - 省略可能: ジョブ コンテキストに設定するコンテキスト フィールド。それ以外の場合、ユーザーはそれらを使用できなくなります。 詳しい情報については、「[`job`コンテキスト](/actions/learn-github-actions/contexts#job-context)」を参照してください。
- 正常性チェックが成功し、ジョブまたはサービス コンテナーが開始されると、`0` を返します。

#### 引数

- `jobContainer`: **省略可能**。 指定されたジョブ コンテナーに関する情報を含むオブジェクト。
  - `image`: **必須**。 Docker イメージを含む文字列。
  - `workingDirectory`: **必須**。 作業ディレクトリの絶対パスを含む文字列。
  - `createOptions`: **省略可能**。 YAML で指定された省略可能な "_create_" オプション。 詳しい情報については、「[例: コンテナー内でのジョブの実行](/actions/using-jobs/running-jobs-in-a-container#example-running-a-job-within-a-container)」を参照してください。
  - `environmentVariables`: **省略可能**。 主要な環境変数のマップを設定します。
  - `userMountVolumes`: **省略可能**。 YAML で設定されたユーザー マウント ボリュームの配列。 詳しい情報については、「[例: コンテナー内でのジョブの実行](/actions/using-jobs/running-jobs-in-a-container#example-running-a-job-within-a-container)」を参照してください。
    - `sourceVolumePath`: **必須**。 Docker コンテナーにマウントされるボリュームへのソース パス。
    - `targetVolumePath`: **必須**。 Docker コンテナーにマウントされるボリュームへのターゲット パス。
    - `readOnly`: **必須**。 マウントを読み取り専用にする必要があるかどうかを決定します。
  - `systemMountVolumes`: **必須**。 コンテナーにマウントするマウントの配列 (上記と同じフィールド)。
    - `sourceVolumePath`: **必須**。 Docker コンテナーにマウントされるボリュームへのソース パス。
    - `targetVolumePath`: **必須**。 Docker コンテナーにマウントされるボリュームへのターゲット パス。
    - `readOnly`: **必須**。 マウントを読み取り専用にする必要があるかどうかを決定します。
  - `registry` **省略可能**。 プライベート コンテナー レジストリの Docker レジストリ資格情報。
    - `username`: **省略可能**。 レジストリ アカウントのユーザー名。
    - `password`: **省略可能**。 レジストリ アカウントのパスワード。
    - `serverUrl`: **省略可能**。 レジストリ URL。
  - `portMappings`: **省略可能**。 コンテナーにマップする _source:target_ ポートのキー値ハッシュ。
- `services`: **省略可能**。 スピン アップするサービス コンテナーの配列。
  - `contextName`: **必須**。 ジョブ コンテキスト内のサービスの名前。
  - `image`: **必須**。 Docker イメージを含む文字列。
  - `createOptions`: **省略可能**。 YAML で指定された省略可能な "_create_" オプション。 詳しい情報については、「[例: コンテナー内でのジョブの実行](/actions/using-jobs/running-jobs-in-a-container#example-running-a-job-within-a-container)」を参照してください。
  - `environmentVariables`: **省略可能**。 主要な環境変数のマップを設定します。
  - `userMountVolumes`: **省略可能**。 コンテナーにマウントするマウントの配列 (上記と同じフィールド)。
    - `sourceVolumePath`: **必須**。 Docker コンテナーにマウントされるボリュームへのソース パス。
    - `targetVolumePath`: **必須**。 Docker コンテナーにマウントされるボリュームへのターゲット パス。
    - `readOnly`: **必須**。 マウントを読み取り専用にする必要があるかどうかを決定します。
  - `registry` **省略可能**。 プライベート コンテナー レジストリの Docker レジストリ資格情報。
    - `username`: **省略可能**。 レジストリ アカウントのユーザー名。
    - `password`: **省略可能**。 レジストリ アカウントのパスワード。
    - `serverUrl`: **省略可能**。 レジストリ URL。
  - `portMappings`: **省略可能**。 コンテナーにマップする _source:target_ ポートのキー値ハッシュ。

#### 入力の例

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

#### 出力例

次の出力例は、上記の入力で定義されている `responseFile` の内容です。

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

`cleanup_job` コマンドは、ジョブの最後に呼び出されます。 {% data variables.product.prodname_actions %} では、`cleanup_job` コマンドで次のタスクが実行されることを前提としています。

- 実行中のサービスまたはジョブ コンテナー (または同等のポッド) を停止します。
- ネットワークを停止します (存在する場合)。
- ジョブまたはサービス コンテナー (または同等のポッド) を削除します。
- ネットワークを削除します (存在する場合)。
- ジョブ用に作成された他のすべてのものをクリーンアップします。

#### 引数

`cleanup_job` に引数はありません。

#### 入力の例

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

#### 出力例

`cleanup_job` の出力は想定されていません。

### `run_container_step`

`run_container_step` コマンドは、ジョブ内のコンテナー アクションごとに 1 回呼び出されます。 {% data variables.product.prodname_actions %} では、`run_container_step` コマンドで次のタスクが実行されることを前提としています。

- 必要なコンテナーをプルまたはビルドします (できない場合は失敗します)。
- コンテナー アクションを実行し、コンテナーの終了コードを返します。
- ステップ ログ出力を stdout と stderr にストリーミングします。
- 実行後にコンテナーをクリーンアップします。

#### 引数

- `image`: **省略可能**。 Docker イメージを含む文字列。 それ以外の場合は、Dockerfile を指定する必要があります。
- `dockerfile`: **省略可能**。 Dockerfile へのパスを含む文字列。それ以外の場合は、イメージを指定する必要があります。
- `entryPointArgs`: **省略可能**。 エントリ ポイント引数を含むリスト。
- `entryPoint`: **省略可能**。 既定のイメージ エントリ ポイントを上書きする必要がある場合に使用するコンテナー エントリ ポイント。
- `workingDirectory`: **必須**。 作業ディレクトリの絶対パスを含む文字列。
- `createOptions`: **省略可能**。 YAML で指定された省略可能な "_create_" オプション。 詳しい情報については、「[例: コンテナー内でのジョブの実行](/actions/using-jobs/running-jobs-in-a-container#example-running-a-job-within-a-container)」を参照してください。
- `environmentVariables`: **省略可能**。 主要な環境変数のマップを設定します。
- `prependPath`: **省略可能**。 `$PATH` 変数の前に付加する追加のパスの配列。
- `userMountVolumes`: **省略可能**。 YAML で設定されたユーザー マウント ボリュームの配列。 詳しい情報については、「[例: コンテナー内でのジョブの実行](/actions/using-jobs/running-jobs-in-a-container#example-running-a-job-within-a-container)」を参照してください。
  - `sourceVolumePath`: **必須**。 Docker コンテナーにマウントされるボリュームへのソース パス。
  - `targetVolumePath`: **必須**。 Docker コンテナーにマウントされるボリュームへのターゲット パス。
  - `readOnly`: **必須**。 マウントを読み取り専用にする必要があるかどうかを決定します。
- `systemMountVolumes`: **必須**。 コンテナーにマウントするマウントの配列 (上記と同じフィールドを使用)。
  - `sourceVolumePath`: **必須**。 Docker コンテナーにマウントされるボリュームへのソース パス。
  - `targetVolumePath`: **必須**。 Docker コンテナーにマウントされるボリュームへのターゲット パス。
  - `readOnly`: **必須**。 マウントを読み取り専用にする必要があるかどうかを決定します。
- `registry` **省略可能**。 プライベート コンテナー レジストリの Docker レジストリ資格情報。
  - `username`: **省略可能**。 レジストリ アカウントのユーザー名。
  - `password`: **省略可能**。 レジストリ アカウントのパスワード。
  - `serverUrl`: **省略可能**。 レジストリ URL。
- `portMappings`: **省略可能**。 コンテナーにマップする _source:target_ ポートのキー値ハッシュ。

#### イメージの入力例

Docker イメージを使用する場合、`"image":` パラメーターにイメージ名を指定できます。

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

#### Dockerfile の入力例

この例は、コンテナーが Dockerfile によって定義されている場合、`"dockerfile":` パラメーターを使用して入力で `Dockerfile` へのパスを指定する方法を示します。

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

#### 出力例

`run_container_step` の出力は想定されていません。

### `run_script_step`

{% data variables.product.prodname_actions %} では、次のタスクが実行されることを前提としています。

- ジョブ コンテナー内で指定されたスクリプトを呼び出して、終了コードを返します。
- ステップ ログ出力を stdout と stderr にストリーミングします。

#### 引数

- `entryPointArgs`: **省略可能**。 エントリ ポイント引数を含むリスト。
- `entryPoint`: **省略可能**。 既定のイメージ エントリ ポイントを上書きする必要がある場合に使用するコンテナー エントリ ポイント。
- `prependPath`: **省略可能**。 `$PATH` 変数の前に付加する追加のパスの配列。
- `workingDirectory`: **必須**。 作業ディレクトリの絶対パスを含む文字列。
- `environmentVariables`: **省略可能**。 主要な環境変数のマップを設定します。

#### 入力の例

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

#### 出力例

`run_script_step` の出力は想定されていません。

## カスタマイズ スクリプトの生成

{% data variables.product.prodname_dotcom %} では、Docker と Kubernetes のカスタマイズ スクリプトを生成する方法を示すリポジトリ例を作成しました。 

{% note %}

**注:** 生成されたスクリプトはテスト用として使用できますが、自身の要件に適しているかどうかを確認する必要があります。

{% endnote %}

1. [actions/runner-container-hooks](https://github.com/actions/runner-container-hooks) リポジトリをセルフホステッド ランナーに複製します。

1. `examples/` ディレクトリには、いくつかの既存のカスタマイズ コマンドがそれぞれ独自の JSON ファイルに含まれています。 これらの例を確認し、独自のカスタマイズ コマンドの開始点として使用できます。

   - `prepare_job.json`
   - `run_script_step.json`
   - `run_container_step.json`

1. npm パッケージをビルドします。 これらのコマンドは、`packages/docker/dist` および `packages/k8s/dist` 内に `index.js` ファイルを生成します。

   ```shell
   npm install && npm run bootstrap && npm run build-all
   ```

生成された `index.js` が {% data variables.product.prodname_actions %} によってトリガーされると、JSON ファイルで定義されているカスタマイズ コマンドが実行されます。 `index.js` をトリガーするには、次のセクションで説明するように、それに `ACTIONS_RUNNER_REQUIRE_JOB_CONTAINER` 環境変数を追加する必要があります。

## カスタマイズ スクリプトのトリガー

カスタム スクリプトはランナー上に配置する必要があります。ただし、セルフホステッド ランナー アプリケーション ディレクトリには格納しないでください。 スクリプトは、ランナー サービスを実行しているサービス アカウントのセキュリティ コンテキストで実行されます。

{% note %}

**注**: トリガーされたスクリプトは同期的に処理されるので、実行中はジョブの実行がブロックされます。

{% endnote %}

スクリプトへの絶対パスを含む次の環境変数がランナーに含まれている場合、スクリプトは自動実行されます。

- `ACTIONS_RUNNER_CONTAINER_HOOK`: この環境変数に定義されているスクリプトは、ジョブがランナーに割り当てられ、ジョブの実行が開始される前に開始されます。

これらの環境変数を設定するには、それをオペレーティング システムに追加するか、セルフホステッド ランナー アプリケーション ディレクトリ内の `.env` という名前のファイルに追加します。 たとえば、次の `.env` エントリがあると、コンテナーベースの各ジョブが実行される前に、`/Users/octocat/runner/index.js` にあるスクリプトがランナーによって自動実行されます。

```bash
ACTIONS_RUNNER_CONTAINER_HOOK=/Users/octocat/runner/index.js
```

ジョブが常にコンテナー内で実行され、その後常にコンテナーのカスタマイズが適用されるようにする場合、セルフホステッド ランナーの `ACTIONS_RUNNER_REQUIRE_JOB_CONTAINER` 変数を `true` に設定できます。 これにより、ジョブ コンテナーを指定しないジョブは失敗します。

## トラブルシューティング

### タイムアウトなしの設定

現在、`ACTIONS_RUNNER_CONTAINER_HOOK` によって実行されるスクリプトに使用できるタイムアウト設定はありません。 そのため、スクリプトにタイムアウト処理を追加することを検討できます。

### ワークフロー実行ログの確認

スクリプトが実行中かどうかを確認するために、そのジョブのログを確認することができます。 ログの確認の詳細については、「[ログを表示してエラーを診断する](/actions/monitoring-and-troubleshooting-workflows/using-workflow-run-logs#viewing-logs-to-diagnose-failures)」を参照してください。
