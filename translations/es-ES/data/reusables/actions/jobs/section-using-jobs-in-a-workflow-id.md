Utiliza `jobs.<job_id>` para darle a tu job un identificador único. La clave `job_id` es una cadena y su valor es un mapa de los datos de configuración del trabajo. Debes reemplazar `<job_id>` con una cadena que sea exclusiva del objeto `jobs`. El `<job_id>` debe comenzar con una letra o `_` y debe contener solo caracteres alfanuméricos, `-`, o `_`.

#### Ejemplo: Crear jobs

En este ejemplo, se crearon dos jobs y sus valores de `job_id` son `my_first_job` y `my_second_job`.

```yaml
jobs:
  my_first_job:
    name: My first job
  my_second_job:
    name: My second job
```
