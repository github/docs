---
ms.openlocfilehash: 5bdd64690f5b6aead3fb77167af16eecce35ee62
ms.sourcegitcommit: dc42bb4a4826b414751ffa9eed38962c3e3fea8e
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 07/13/2022
ms.locfileid: "146381437"
---
Use `jobs.<job_id>.container` para criar um contêiner e executar as etapas de um trabalho que ainda não especificam um contêiner. Se você tiver etapas que usam ações de script e de contêiner, as ações de contêiner serão executadas como contêineres irmãos na mesma rede e com as mesmas montagens de volume.

Se você não definir um `container`, todas as etapas serão executadas diretamente no host especificado por `runs-on`, a menos que uma etapa se refira a uma ação configurada para ser executada em um contêiner.

### <a name="example-running-a-job-within-a-container"></a>Exemplo: Executar um trabalho dentro de um contêiner

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

Quando você especifica apenas uma imagem de contêiner, pode omitir a palavra-chave `image`.

```yaml
jobs:
  container-test-job:
    runs-on: ubuntu-latest
    container: node:14.16
```
