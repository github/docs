Use `jobs.<job_id>.container` to create a container to run any steps in a job that don't already specify a container. Se você tiver etapas que usam ações de script e de contêiner, as ações de contêiner serão executadas como contêineres irmãos na mesma rede e com as mesmas montagens de volume.

Se você não definir um `container`, todas as etapas serão executadas diretamente no host especificado por `runs-on`, a menos que uma etapa se refira a uma ação configurada para execução em um contêiner.

### Example: Running a job within a container

```yaml
jobs:
  my_job:
    container:
      image: node:14.16
      env:
        NODE_ENV: development
      ports:
        - 80
      volumes:
        - my_docker_volume:/volume_mount
      options: --cpus 1
```

Ao especificar somente uma imagem de contêiner, você pode omitir a palavra-chave `image`.

```yaml
jobs:
  my_job:
    container: node:14.16
```
