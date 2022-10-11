---
title: Acerca de las etiquetas
intro: 'Las etiquetas en {% data variables.product.product_name %} te ayudan a organizar y priorizar tu trabajo. Puedes aplicar etiquetas a propuestas y solicitudes de extracción para indicar prioridad, categoría o cualquier otra información que encuentres útil.'
redirect_from:
  - /articles/about-labels
  - /github/managing-your-work-on-github/about-labels
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---
Las etiqueta están asociadas al repositorio en el que están creadas. Una vez que existe una etiqueta, puedes usarla en cualquier propuesta o solicitud de extracción dentro de ese repositorio. Para obtener más información, consulta "[Crear una etiqueta](/articles/creating-a-label/)".

Cualquiera con acceso de lectura a un repositorio puede ver y buscar las etiquetas del repositorio. Para crear, editar, aplicar o eliminar una etiqueta, debes tener acceso de escritura al repositorio.

### Usar etiquetas predeterminadas

{% data variables.product.product_name %} ofrece etiquetas predeterminadas en cada repositorio nuevo. Puedes usar estas etiquetas predeterminadas para ayudar a crear un flujo de trabajo estándar en un repositorio:

| Etiqueta                  | Descripción                                                                                                                      |
| ------------------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| `error`                   | Indica un problema inesperado o un comportamiento no intencionado{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.17" %}
| `documentación`           | Indica una necesidad de mejoras o adiciones a la documentación{% endif %}
| `duplicado`               | Indica propuestas o solicitudes de extracción similares                                                                          |
| `mejora`                  | Indica solicitudes de nueva función                                                                                              |
| `primera buena propuesta` | Indica una buena propuesta para los colaboradores por primera vez                                                                |
| `se busca ayuda`          | Indica que un mantenedor necesita ayuda en una propuesta o solicitud de extracción                                               |
| `no válida`               | Indica que una propuesta o solicitud de extracción ya no es relevante                                                            |
| `pregunta`                | Indica que una propuesta o solicitud de extracción necesita más información                                                      |
| `wontfix`                 | Indica que no continuará el trabajo en una propuesta o solicitud de extracción                                                   |

Las etiquetas predeterminadas se incluyen en todos los repositorios nuevos cuando se crea el repositorio, pero luego puedes editarlas o eliminarlas. Para obtener más información, consulta "[Eliminar una etiqueta](/articles/deleting-a-label/)".

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.19" %}
Los propietarios de la organización pueden personalizar las etiquetas predeterminadas para los repositorios de la organización. Para obtener más información, consulta "[Administrar etiquetas predeterminadas para los repositorios en tu organización](/articles/managing-default-labels-for-repositories-in-your-organization)".
{% endif %}

{% if currentVersion == "free-pro-team@latest" %}
### Leer más

- "[Fomentar las contribuciones útiles a tu proyecto con etiquetas](/github/building-a-strong-community/encouraging-helpful-contributions-to-your-project-with-labels)"
{% endif %}
