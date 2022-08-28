---
title: Tipos de verificaciones de estado requeridas
intro: Puedes configurar las verificaciones de estado requeridas para que sean "laxas" o "estrictas". El tipo de verificación de estado requerida que elijas determina si se requiere que tu rama esté actualizada con la rama base antes de la fusión.
product: '{% data reusables.gated-features.protected-branches %}'
redirect_from:
  - /articles/types-of-required-status-checks
  - /github/administering-a-repository/types-of-required-status-checks
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---
| Tipo de verificación de estado requerida | Parámetro                                                                                                                                           | Requisitos de fusión                                                          | Consideraciones                                                                                                                                                                                                                                                                                         |
| ---------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Estricta**                             | La casilla **Require branches to be up-to-date before merging** (Las ramas deben estar actualizadas antes de la fusión) está marcada.               | La rama **debe** estar actualizada con la rama de base antes de la fusión.    | Este es el comportamiento predeterminado para las verificaciones de estado requeridas. Se pueden requerir más construcciones, ya que deberás actualizar la rama de encabezado después de que otros colaboradores fusionen las solicitudes de extracción con la rama de base protegida.                  |
| **Flexible**                             | La casilla **Require branches to be up-to-date before merging** (Las ramas deben estar actualizadas antes de la fusión) **no** está marcada.        | La rama **no debe** estar actualizada con la rama de base antes de la fusión. | Tendrás menos construcciones requeridas, ya que no necesitarás actualizar la rama de encabezado después de que otros colaboradores fusionen las solicitudes de extracción. Las verificaciones de estado pueden fallar después de que fusiones tu rama si hay cambios incompatibles con la rama de base. |
| **Inhabilitada**                         | La casilla **Require status checks to pass before merging** (Se deben superar las verificaciones de estado antes de la fusión) **no** está marcada. | La rama no tiene restricciones de fusión.                                     | Si las verificaciones de estado requeridas no están habilitadas, los colaboradores pueden fusionar la rama en cualquier momento, independientemente de si está actualizada con la rama de base. Esto aumenta la posibilidad de cambios incompatibles.                                                   |

### Leer más

- "[Acerca de las verificaciones de estado requeridas](/articles/about-required-status-checks)"
- "[Activar verificaciones de estado requeridas](/articles/enabling-required-status-checks)"
