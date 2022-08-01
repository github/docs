---
title: Pre-receive Hooks
intro: 'La API de Ganchos Pre-recepción te permite crear, listar, actualizar y borrar los ganchos de pre-recepción.'
versions:
  ghes: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
---

*Solo se encuentra disponible para los administradores de sitio [autenticados.](/rest/overview/resources-in-the-rest-api#authentication)* Los usuarios normales recibirán una respuesta `404` si intentan acceder a ella.

### Atributos de objeto

#### Ganchos de pre-recepción

| Nombre                           | Tipo        | Descripción                                                                         |
| -------------------------------- | ----------- | ----------------------------------------------------------------------------------- |
| `name (nombre)`                  | `secuencia` | El nombre del gancho.                                                               |
| `script`                         | `secuencia` | El script que ejecuta el gancho.                                                    |
| `script_repository`              | `objeto`    | El repositorio de GitHub en donde se mantiene el script.                            |
| `environment`                    | `objeto`    | El ambiente de pre-recepción en donde se ejecuta el script.                         |
| `enforcement`                    | `secuencia` | El estado de las imposiciones para este gancho.                                     |
| `allow_downstream_configuration` | `boolean`   | Si las imposiciones pueden o no ignorarse a nivel de organización o de repositorio. |

Los valores posibles para *enforcement* son `enabled`, `disabled` y `testing`. El valor `disabled` indica que el gancho de pre-recepción no se ejecutará. El valor `enabled` indica que se ejecutará y rechazará cualquier carga que resulte en un estado diferente a zero. El valor `testing` indica que el script va a ejecutarse pero no va a causar que se rechace ninguna carga.
