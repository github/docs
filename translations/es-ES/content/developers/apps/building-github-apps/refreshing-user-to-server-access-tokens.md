---
title: Actualizar los tokens de acceso de usuario a servidor
intro: 'Para cumplir con la rotación habitual de tokens y reducir el impacto de que se ponga en riesgo alguno de ellos, puedes configurar tu {% data variables.product.prodname_github_app %} para que utilice tokens de acceso de usuario con caducidad.'
redirect_from:
  - /apps/building-github-apps/refreshing-user-to-server-access-tokens
  - /developers/apps/refreshing-user-to-server-access-tokens
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - GitHub Apps
shortTitle: Actualizar el acceso de usuario a servidor
---

{% data reusables.pre-release-program.expiring-user-access-tokens %}

## Acerca de los tokens de acceso de usuario con caducidad

Para cumplir con la rotación habitual de tokens y reducir el impacto de que se ponga en riesgo alguno de ellos, puedes configurar tu {% data variables.product.prodname_github_app %} para que utilice tokens de acceso de usuario con caducidad. Para obtener más información sobre cómo crear solicitudes de usuario a servidor, consulta la sección "[Identificar y autorizar usuarios para las GitHub Apps](/apps/building-github-apps/identifying-and-authorizing-users-for-github-apps/)".

La caducidad de los tokens se alcanza después de 8 horas. Cuando recibes un token nuevo para el acceso de usuario a servidor, la respuesta también contendrá un token de actualización, el cual se puede intercambiar por un token de usuario nuevo y un token de actualización. Los tokens de actualización son válidos por 6 meses.

## Renovar un token de usuario con un token de actualización

Para renovar un token de acceso de usuario a servidor que esté por caducar, puedes intercambiar el `refresh_token` por un token de acceso nuevo y un `refresh_token`.

  `POST https://github.com/login/oauth/access_token`

Esta solicitud de rellamada te enviará un token de acceso y un token de actualización nuevos.  Esta solicitud de rellamada es similar a la solicitud de OAuth que utilizarías para intercambiar un `code` temporal para un token de acceso. Para obtener más información, consulta las secciones "[Identificar y autorizar usuarios para las GitHub Apps](/apps/building-github-apps/identifying-and-authorizing-users-for-github-apps/#2-users-are-redirected-back-to-your-site-by-github)" y "[Información básica sobre la autenticación](/rest/guides/basics-of-authentication#providing-a-callback)".

### Parámetros

| Nombre          | Tipo        | Descripción                                                                                                                                                                                    |
| --------------- | ----------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `refresh_token` | `secuencia` | **Requerido.** El token que se genera cuando el dueño de la  {% data variables.product.prodname_github_app %} habilita los tokens con caducidad y emite un token de acceso de usuario nuevo. |
| `grant_type`    | `secuencia` | **Requerido.** El valor debe ser `refresh_token` (se requiere en la especificación de OAuth).                                                                                                  |
| `client_id`     | `secuencia` | **Requerido.** La ID de cliente para tu {% data variables.product.prodname_github_app %}.                                                                                                    |
| `client_secret` | `secuencia` | **Requerido.** El secreto del cliente para tu {% data variables.product.prodname_github_app %}.                                                                                              |

### Respuesta

```json
{
  "access_token": "ghu_16C7e42F292c6912E7710c838347Ae178B4a",
  "expires_in": "28800",
  "refresh_token": "ghr_1B4a2e77838347a7E420ce178F2E7c6912E169246c34E1ccbF66C46812d16D5B1A9Dc86A1498",
  "refresh_token_expires_in": "15811200",
  "scope": "",
  "token_type": "bearer"
}
```
## Configurar los tokens de usuario con caducidad para una GitHub App existente

Puedes habilitar o inhabilitar los tokens de autorización de usuario a servidor desde los ajustes de tu {% data variables.product.prodname_github_app %}.

{% data reusables.user-settings.access_settings %}
{% data reusables.user-settings.developer_settings %}
{% data reusables.user-settings.github_apps %}
4. Da clic en la opción**Editar** junto a la {% data variables.product.prodname_github_app %} que escogiste. ![Configuración para editar una GitHub App](/assets/images/github-apps/edit-test-app.png)
5. En la barra lateral izquierda, haz clic en **Características opcionales**. ![Pestaña de características opcionales](/assets/images/github-apps/optional-features-option.png)
6. Junto a "caducidad de token de usuario a servidor", da clic en **Unirse** o en **No unirse**. Esta característica podría tardar un par de segundos para su aplicación.

## Decidir no unirse a los tokens con caducidad para las GitHub Apps nuevas

Cuando creas una {% data variables.product.prodname_github_app %}, ésta utilizará predeterminadamente los tokens de acceso de usuario a servidor con caducidad.

Si quieres que tu app utlice tokens de acceso de usuario a servidor sin caducidad, puedes deseleccionar la opción "Poner caducidad en los tokens de autorización de usuario" en la página de ajustes de la app.

![Opción para unirse a los tokens de usuario con caducidad durante la configuración de las GitHub Apps](/assets/images/github-apps/expire-user-tokens-selection.png)

Las {% data variables.product.prodname_github_apps %} existentes que utilicen tokens de autorización de usuario a servidor solo se verán afectadas por este flujo nuevo cuando el propietario de la app habilite la caducidad de los tokens para la app en cuestión.

Habilitar los tokens de usuario con caducidad para las {% data variables.product.prodname_github_apps %} existentes requiere que se envíen los usuarios a través del flujo de OAuth para re-emitir tokens de usuario nuevos que caducarán en 8 horas y que harán una solicitud con el token de actualización para obtener un token de acceso y un token de actualización nuevos. Para obtener más información, consulta la sección "[Identificar y autorizar usuarios para las GitHub Apps](/apps/building-github-apps/identifying-and-authorizing-users-for-github-apps/)".

## Leer más

- "[Acerca de la autenticación en {% data variables.product.prodname_dotcom %}](/github/authenticating-to-github/about-authentication-to-github#githubs-token-formats)"

