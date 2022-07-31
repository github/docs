---
title: Organization Pre-receive Hooks
intro: The Organization Pre-receive Hooks API allows you to view and modify enforcement of the pre-receive hooks that are available to an organization.
versions:
  ghes: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
allowTitleToDifferFromFilename: true
---

### Atributos de objeto

| Nombre                           | Tipo        | Descripción                                               |
| -------------------------------- | ----------- | --------------------------------------------------------- |
| `name (nombre)`                  | `secuencia` | El nombre del gancho.                                     |
| `enforcement`                    | `secuencia` | El estado de imposición del gancho en este repositorio.   |
| `allow_downstream_configuration` | `boolean`   | Si los repositorios pueden ignorar la imposición o no.    |
| `configuration_url`              | `secuencia` | URL para la terminal en donde se configuró la imposición. |

Los valores posibles para *enforcement* son `enabled`, `disabled` y `testing`. El valor `disabled` indica que el gancho de pre-recepción no se ejecutará. El valor `enabled` indica que se ejecutará y rechazará cualquier carga que resulte en un estado diferente a zero. El valor `testing` indica que el script va a ejecutarse pero no va a causar que se rechace ninguna carga.

`configuration_url` may be a link to this endpoint or this hook's global configuration. Solo los administradores de sistema pueden acceder a la configuración global.
