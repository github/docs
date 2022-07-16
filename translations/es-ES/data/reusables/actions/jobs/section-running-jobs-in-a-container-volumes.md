Utiliza `jobs.<job_id>.container.volumes` para configurar un `array` de volúmenes para que lo utilice el contenedor. Puedes usar volúmenes para compartir datos entre servicios u otros pasos en un trabajo. Puedes especificar volúmenes Docker con nombre, volúmenes Docker anónimos o montajes de enlace en el host.

Para especificar un volumen, especifica la ruta de origen y destino:

`<source>:<destinationPath>`.

`<source>` es un nombre de volumen o una ruta absoluta en la máquina host, y `<destinationPath>` es una ruta absoluta en el contenedor.

#### Ejemplo: Montar volúmenes en un contenedor

```yaml
volumes:
  - my_docker_volume:/volume_mount
  - /data/my_data
  - /source/directory:/destination/directory
```
