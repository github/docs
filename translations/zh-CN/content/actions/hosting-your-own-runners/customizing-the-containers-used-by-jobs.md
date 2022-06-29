---
title: 自定义作业使用的容器
intro: 您可以自定义自托管运行器调用作业容器的方式。
versions:
  feature: container-hooks
type: reference
miniTocMaxHeadingLevel: 4
shortTitle: 自定义作业使用的容器
---

{% note %}

**注意**：此功能目前在测试中，可能会更改。

{% endnote %}

## 关于容器自定义

{% data variables.product.prodname_actions %} 允许您在工作流程文件中使用 `container:` 语句运行容器内的作业。 更多信息请参阅“[在容器中运行作业](/actions/using-jobs/running-jobs-in-a-container)”。 为处理基于容器的作业，自托管运行器会为每个作业创建一个容器。

{% data variables.product.prodname_actions %} 支持命令，这些命令允许你自定义自托管运行器创建容器的方式。 例如，您可以使用这些命令通过 Kubernetes 或 Podman 管理容器，还可以自定义 `docker run` 或 `docker create` 命令。 自定义命令由脚本运行，当在运行器上设置特定环境变量时，将自动触发脚本。 更多信息请参阅下面的“[触发自定义脚本](#triggering-the-customization-script)”。

此自定义仅适用于基于 Linux 的自托管运行器，并且不需要 root 用户访问权限。

## 容器自定义命令

{% data variables.product.prodname_actions %} 包括以下用于容器自定义的命令：

- [`prepare_job`](/actions/hosting-your-own-runners/customizing-the-containers-used-by-jobs#prepare_job)：在作业启动时调用。
- [`cleanup_job`](/actions/hosting-your-own-runners/customizing-the-containers-used-by-jobs#cleanup_job)：在作业结束时调用。
- [`run_container_step`](/actions/hosting-your-own-runners/customizing-the-containers-used-by-jobs#run_container_step)：为作业中的每个容器操作调用一次。
- [`run_script_step`](/actions/hosting-your-own-runners/customizing-the-containers-used-by-jobs#run_script_step)：运行任何不是容器操作的步骤。

这些自定义命令中的每一个都必须在其自己的 JSON 文件中定义。 文件名必须与命令名称匹配，扩展名为 `.json`。 例如，`prepare_job` 命令在 `prepare_job.json` 中定义。 然后，这些 JSON 文件将作为主 `index.js` 脚本的一部分在自托管运行器上一起运行。 此过程在“[生成自定义脚本](#generating-the-customization-script)”中有更详细的描述。

这些命令还包括配置参数，下面将更详细地介绍这些参数。

### `prepare_job`

启动作业时调用 `prepare_job` 命令。 {% data variables.product.prodname_actions %} 传入作业具有的任何作业或服务容器。 如果作业中有任何服务或作业容器，则将调用此命令。

{% data variables.product.prodname_actions %} 假定您将在 `prepare_job` 命令中执行以下任务：

- 如果需要，修剪以前作业中的任何内容。
- 如果需要，创建网络。
- 拉取作业和服务容器。
- 启动作业容器。
- 启动服务容器。
- 将 {% data variables.product.prodname_actions %} 所需的任何信息写入响应文件：
  - 必需：说明容器是否为 `alpine` linux 容器（使用 `isAlpine` 布尔值）。
  - 可选：要在作业上下文中设置的任何上下文字段，否则用户将无法使用它们。 更多信息请参阅“[`job` 上下文](/actions/learn-github-actions/contexts#job-context)”。
- 运行状况检查成功且作业/服务容器启动时，返回 `0`。

#### 参数

- `jobContainer`：**可选**。 包含指定作业容器信息的对象。
  - `image`：**必需**。 包含 Docker 映像的字符串。
  - `workingDirectory`：**必需**。 包含工作目录绝对路径的字符串。
  - `createOptions`：**可选**。 可选的 _create_ 选项在 YAML 中指定。 更多信息请参阅“[示例：在容器运行作业](/actions/using-jobs/running-jobs-in-a-container#example-running-a-job-within-a-container)”。
  - `environmentVariables`：**可选**。 设置关键环境变量的映射。
  - `userMountVolumes`：**可选**。 在 YAML 中设置的用户装入卷的数组。 更多信息请参阅“[示例：在容器运行作业](/actions/using-jobs/running-jobs-in-a-container#example-running-a-job-within-a-container)”。
    - `sourceVolumePath`：**必需**。 将装载到 Docker 容器中的卷的源路径。
    - `targetVolumePath`：**必需**。 将装载到 Docker 容器中的卷的目标路径。
    - `readOnly`：**必需**。 确定装载是否应为只读。
  - `systemMountVolumes`：**必需**。 要装载到容器中的装载数组，字段与上述字段相同。
    - `sourceVolumePath`：**必需**。 将装载到 Docker 容器中的卷的源路径。
    - `targetVolumePath`：**必需**。 将装载到 Docker 容器中的卷的目标路径。
    - `readOnly`：**必需**。 确定装载是否应为只读。
  - `注册表` **可选**。 专用容器注册表的 Docker 注册表凭据。
    - `username`：**可选**。 注册表帐户的用户名。
    - `password`：**可选**。 注册表帐户的密码。
    - `serverUrl`：**可选**。 注册表 URL。
  - `portMappings`：**可选**。 要映射到容器的 _source:target_ 端口的键值哈希。
- `services`：**可选**。 要启动的服务容器数组。
  - `contextName`：**必需**。 作业上下文中服务的名称。
  - `image`：**必需**。 包含 Docker 映像的字符串。
  - `createOptions`：**可选**。 可选的 _create_ 选项在 YAML 中指定。 更多信息请参阅“[示例：在容器运行作业](/actions/using-jobs/running-jobs-in-a-container#example-running-a-job-within-a-container)”。
  - `environmentVariables`：**可选**。 设置关键环境变量的映射。
  - `userMountVolumes`：**可选**。 要装载到容器中的装载数组，字段与上述字段相同。
    - `sourceVolumePath`：**必需**。 将装载到 Docker 容器中的卷的源路径。
    - `targetVolumePath`：**必需**。 将装载到 Docker 容器中的卷的目标路径。
    - `readOnly`：**必需**。 确定装载是否应为只读。
  - `注册表` **可选**。 专用容器注册表的 Docker 注册表凭据。
    - `username`：**可选**。 注册表帐户的用户名。
    - `password`：**可选**。 注册表帐户的密码。
    - `serverUrl`：**可选**。 注册表 URL。
  - `portMappings`：**可选**。 要映射到容器的 _source:target_ 端口的键值哈希。

#### 示例输入

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

#### 示例输出

此示例输出是上面输入中定义的 `responseFile` 内容。

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

`cleanup_job` 命令在作业结束时调用。 {% data variables.product.prodname_actions %} 假定您将在 `cleanup_job` 命令中执行以下任务：

- 停止任何正在运行的服务或作业容器（或等效 Pod）。
- 停止网络（如果存在）。
- 删除任何作业或服务容器（或等效的 Pod）。
- 删除网络（如果存在）。
- 清除为作业创建的任何其他内容。

#### 参数

没有为 `cleanup_job` 提供任何参数。

#### 示例输入

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

#### 示例输出

没有 `cleanup_job` 的预期输出。

### `run_container_step`

`run_container_step` 命令为作业中的每个容器操作调用一次。 {% data variables.product.prodname_actions %} 假定您将在 `run_container_step` 命令中执行以下任务：

- 拉取或构建所需的容器（如果无法拉取或构建，则失败）。
- 运行容器操作并返回容器的退出代码。
- 将任何步骤日志输出流式传输到 stdout 和 stderr。
- 执行容器后清理容器。

#### 参数

- `image`：**可选**。 包含 Docker 映像的字符串。 否则，必须提供 dockerfile。
- `dockerfile`：**可选**。 包含 docker 文件路径的字符串，否则必须提供映像。
- `entryPointArgs`：**可选**。 包含入口点参数的列表。
- `entryPoint`：**可选**。 应覆盖默认映像入口点时使用的容器入口点。
- `workingDirectory`：**必需**。 包含工作目录绝对路径的字符串。
- `createOptions`：**可选**。 可选的 _create_ 选项在 YAML 中指定。 更多信息请参阅“[示例：在容器运行作业](/actions/using-jobs/running-jobs-in-a-container#example-running-a-job-within-a-container)”。
- `environmentVariables`：**可选**。 设置关键环境变量的映射。
- `prependPath`：**可选**。 要附加到 `$PATH` 变量前面的其他路径的数组。
- `userMountVolumes`：**可选**。 在 YAML 中设置的用户装入卷的数组。 更多信息请参阅“[示例：在容器运行作业](/actions/using-jobs/running-jobs-in-a-container#example-running-a-job-within-a-container)”。
  - `sourceVolumePath`：**必需**。 将装载到 Docker 容器中的卷的源路径。
  - `targetVolumePath`：**必需**。 将装载到 Docker 容器中的卷的目标路径。
  - `readOnly`：**必需**。 确定装载是否应为只读。
- `systemMountVolumes`：**必需**。 要装载到容器中的装载数组，用与上述字段相同的字段。
  - `sourceVolumePath`：**必需**。 将装载到 Docker 容器中的卷的源路径。
  - `targetVolumePath`：**必需**。 将装载到 Docker 容器中的卷的目标路径。
  - `readOnly`：**必需**。 确定装载是否应为只读。
- `注册表` **可选**。 专用容器注册表的 Docker 注册表凭据。
  - `username`：**可选**。 注册表帐户的用户名。
  - `password`：**可选**。 注册表帐户的密码。
  - `serverUrl`：**可选**。 注册表 URL。
- `portMappings`：**可选**。 要映射到容器的 _source:target_ 端口的键值哈希。

#### 映像的示例输入

如果您使用的是 Docker 映像，则可以在 `"image":` 参数中指定映像名称。

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

#### Dockerfile 的示例输入

如果您的容器由 Dockerfile 定义，此示例演示如何使用 `"dockerfile":` 参数在输入中指定 `Dockerfile` 的路径。

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

#### 示例输出

没有 `run_container_step` 的预期输出。

### `run_script_step`

{% data variables.product.prodname_actions %} 假定您将执行以下任务：

- 调用作业容器内提供的脚本并返回退出代码。
- 将任何步骤日志输出流式传输到 stdout 和 stderr。

#### 参数

- `entryPointArgs`：**可选**。 包含入口点参数的列表。
- `entryPoint`：**可选**。 应覆盖默认映像入口点时使用的容器入口点。
- `prependPath`：**可选**。 要附加到 `$PATH` 变量前面的其他路径的数组。
- `workingDirectory`：**必需**。 包含工作目录绝对路径的字符串。
- `environmentVariables`：**可选**。 设置关键环境变量的映射。

#### 示例输入

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

#### 示例输出

没有 `run_script_step` 的预期输出。

## 生成自定义脚本

{% data variables.product.prodname_dotcom %} 创建了一个示例存储库，演示如何为 Docker 和 Kubernetes 生成自定义脚本。

{% note %}

**注意：**生成的脚本可用于测试目的，您需要确定它们是否适合您的要求。

{% endnote %}

1. 将 [actions/runner-container-hooks](https://github.com/actions/runner-container-hooks) 存储库克隆到自托管运行器。

1. `examples/` 目录包含一些现有的自定义命令，每个命令都有自己的 JSON 文件。 您可以查看这些示例，并将它们用作您自己的自定义命令的起点。

   - `prepare_job.json`
   - `run_script_step.json`
   - `run_container_step.json`

1. 构建 npm 软件包。 这些命令在 `packages/docker/dist` 和 `packages/k8s/dist` 中生成 `index.js` 文件。

   ```shell
   npm install && npm run bootstrap && npm run build-all
   ```

当生成的 `index.js` 由 {% data variables.product.prodname_actions %} 触发时，它将运行 JSON 文件中定义的自定义命令。 要触发 `index.js`，您需要将其添加到 `ACTIONS_RUNNER_REQUIRE_JOB_CONTAINER` 环境变量中，如下一节所述。

## 触发自定义脚本

自定义脚本必须位于运行器上，但不应存储在自托管运行器应用程序目录中。 这些脚本在执行运行器服务的服务帐户的安全上下文中执行。

{% note %}

**注意**：触发的脚本是同步处理的，因此在运行时会阻止作业执行。

{% endnote %}

当运行器具有以下包含脚本绝对路径的环境变量时，将自动执行该脚本：

- `ACTIONS_RUNNER_CONTAINER_HOOK`：当作业已分配给运行器时，但在作业开始运行之前，将触发此环境变量中定义的脚本。

要设置此环境变量，可以将其添加到操作系统，也可以将其添加到自托管运行器应用程序目录中名为 `.env` 的文件中。 例如，以下 `.env` 条目将让运行器在每个基于容器的作业运行之前，在 `/Users/octocat/runner/index.js` 上自动运行脚本：

```bash
ACTIONS_RUNNER_CONTAINER_HOOK=/Users/octocat/runner/index.js
```

如果要确保作业始终在容器内运行，并随后始终应用容器自定义项，则可以将自托管运行器上的 `ACTIONS_RUNNER_REQUIRE_JOB_CONTAINER` 变量设置为 `true`。 这将使未指定作业容器的作业失败。

## 疑难解答

### 无超时设置

当前没有可用于由 `ACTIONS_RUNNER_CONTAINER_HOOK` 执行的脚本的超时设置。 因此，您可以考虑向脚本添加超时处理。

### 查看工作流程运行日志

要确认脚本是否正在执行，可以查看该作业的日志。 有关检查日志的详细信息，请参阅“[查看日志以诊断故障](/actions/monitoring-and-troubleshooting-workflows/using-workflow-run-logs#viewing-logs-to-diagnose-failures)”。
