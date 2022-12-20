---
ms.openlocfilehash: 5bdd64690f5b6aead3fb77167af16eecce35ee62
ms.sourcegitcommit: dc42bb4a4826b414751ffa9eed38962c3e3fea8e
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 07/13/2022
ms.locfileid: "146381438"
---
使用 `jobs.<job_id>.container` 创建用于运行作业中尚未指定容器的任何步骤的容器。 如有步骤同时使用脚本和容器操作，则容器操作将运行为同一网络上使用相同卷挂载的同级容器。

若不设置 `container`，所有步骤将直接在 `runs-on` 指定的主机上运行，除非步骤引用已配置为在容器中运行的操作。

### <a name="example-running-a-job-within-a-container"></a>示例：在容器中运行作业

```yaml{:copy}
name: CI
on:
  push:
    branches: [ main ]
jobs:
  container-test-job:
    runs-on: ubuntu-latest
    container:
      image: node:14.16
      env:
        NODE_ENV: development
      ports:
        - 80
      volumes:
        - my_docker_volume:/volume_mount
      options: --cpus 1
    steps:
      - name: Check for dockerenv file
        run: (ls /.dockerenv && echo Found dockerenv) || (echo No dockerenv)
```

只指定容器映像时，可以忽略 `image` 关键词。

```yaml
jobs:
  container-test-job:
    runs-on: ubuntu-latest
    container: node:14.16
```
