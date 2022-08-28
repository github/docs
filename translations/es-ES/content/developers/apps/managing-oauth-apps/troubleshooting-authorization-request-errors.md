---
title: Solución de problemas para los errores de solicitud de autorización
intro: '{% data reusables.shortdesc.troubleshooting_authorization_request_errors_oauth_apps %}'
redirect_from:
  - /apps/building-integrations/managing-oauth-apps/troubleshooting-authorization-request-errors/
  - /apps/managing-oauth-apps/troubleshooting-authorization-request-errors
  - /developers/apps/troubleshooting-authorization-request-errors
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - GitHub Apps
---

### Aplicación suspendida

Si la App de OAuth que configuraste se suspendió (debido a que reportaron abuso, spam, o mal uso de la API), GitHub te redirigirá a la URL de rellamado registrada utilizando los siguientes parámetros para resumir el error:

    http://your-application.com/callback?error=application_suspended
      &error_description=Your+application+has+been+suspended.+Contact+support@github.com.
      &error_uri=/apps/building-integrations/setting-up-and-registering-oauth-apps/troubleshooting-authorization-request-errors/%23application-suspended
      &state=xyz

Para resolver los problemas de suspensión de aplicaciones, por favor contacta a {% data variables.contact.contact_support %}.

### Redirigir una discordancia de URI

Si proporcionas una `redirect_uri` que no concuerde con lo que has registrado con tu aplicación, GitHub te redirigirá a la URL de rellamado registrada con los siguientes parámetros que resumirán el error:

    http://your-application.com/callback?error=redirect_uri_mismatch
      &error_description=The+redirect_uri+MUST+match+the+registered+callback+URL+for+this+application.
      &error_uri=/apps/building-integrations/setting-up-and-registering-oauth-apps/troubleshooting-authorization-request-errors/%23redirect-uri-mismatch
      &state=xyz

Para corregir este error, puedes ya sea proporcionar una `redirect_uri` que coincida con lo que registraste o dejar este parámetro para utilizar aquél predeterminado que se registró con tu aplicación.

#### Acceso denegado

Si el usuario rechaza el acceso a tu aplicación, GitHub te redirigirá a la URL de rellamado registrada con los siguientes parámetros para resumir el error:

    http://your-application.com/callback?error=access_denied
      &error_description=The+user+has+denied+your+application+access.
      &error_uri=/apps/building-integrations/setting-up-and-registering-oauth-apps/troubleshooting-authorization-request-errors/%23access-denied
      &state=xyz

No puedes hacer nada al respecto, ya que los usuarios tiene la libertad de elegir si no quieren utilizar tu aplicación. Lo más común es que los usuarios simplemente cierren la ventana o presionen "atrás" en su buscador, así que es probable que nunca veas este error.
