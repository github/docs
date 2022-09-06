Use `jobs.<job_id>.container` para criar um contêiner para executar todas as etapas de um trabalho que já não especificam um contêiner. Se você tiver etapas que usam ações de script e de contêiner, as ações de contêiner serão executadas como contêineres irmãos na mesma rede e com as mesmas montagens de volume.

Se você não definir um `container`, todas as etapas serão executadas diretamente no host especificado por `runs-on`, a menos que uma etapa se refira a uma ação configurada para execução em um contêiner.

{% note %}

**Observação:** O shell padrão para a etapa `executar` dentro de um contêiner é `sh` em vez de `bash`. Isto pode ser substituído por [`jobs.<job_id>.defaults.execute`](/actions/using-workflows/workflow-syntax-for-github-actions#jobsjob_iddefaultsrun) ou [jobs`.<job_id>.steps[*].shell`](/actions/using-workflows/workflow-syntax-for-github-actions#jobsjob_idstepsshell).

{% endnote %}

### Exemplo: Executar um trabalho dentro de um contêiner

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

Ao especificar somente uma imagem de contêiner, você pode omitir a palavra-chave `image`.

```yaml
jobs:
  container-test-job:
    runs-on: ubuntu-latest
    container: node:14.16
```
