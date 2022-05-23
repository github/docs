Use `jobs.<job_id>.container.volumes` para definir uma `matriz` de volumes para o contêiner usar. É possível usar volumes para compartilhar dados entre serviços ou outras etapas em um trabalho. Você pode especificar volumes de nome Docker, volumes Docker anônimos ou vincular montagens no host.

Para especificar um volume, especifique o caminho de origem e destino:

`<source>:<destinationPath>`.

`<source>` é um nome de volume ou caminho absoluto na máquina host, e `<destinationPath>` é um caminho absoluto no contêiner.

#### Exemplo: Montando volumes em um contêiner

```yaml
volumes:
  - my_docker_volume:/volume_mount
  - /data/my_data
  - /source/directory:/destination/directory
```
