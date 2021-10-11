---
title: Vencimiento y revocación de token
intro: 'Tus tokens pueden vencer y también los puedes revocar tú, las aplicaciones que hayas autorizado y el mismo {% data variables.product.product_name %}.'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
topics:
  - Identity
  - Access management
shortTitle: Vencimiento de token
redirect_from:
  - /github/authenticating-to-github/keeping-your-account-and-data-secure/token-expiration-and-revocation
---

Cuando un token {% ifversion fpt or ghae-issue-4374 or ghes > 3.2 %}venció o {% endif %}se revocó, este ya no se puede utilizar para autenticar las solicitudes de la API y de Git. No es posible restablecer un token revocado o vencido, ya seas tú o la aplicación necesitarán crear un token nuevo.

Este artículo te explica las posibles razones por las cuales tu token de {% data variables.product.product_name %} podría revocarse o vencer.

{% note %}

**Nota:** Cuando un token de acceso personal o token de OAuth vence o se revoca, podrías ver una acción de `oauth_authorization.destroy` en tu bitácora de seguridad. Para obtener más información, consulta "[Revisar tu registro de seguridad](/github/authenticating-to-github/keeping-your-account-and-data-secure/reviewing-your-security-log)".

{% endnote %}

{% ifversion fpt or ghae-issue-4374 or ghes > 3.2 %}
## El token se revocó después de llegar a su fecha de vencimiento

Cuando creas un token de acceso personal, te recomendamos que configures una fecha de vencimiento para este. Al alcanzar la fecha de vencimiento de tu token, este se revocará automáticamente. Para obtener más información, consulta la sección "[Crear un token de acceso personal](/github/authenticating-to-github/keeping-your-account-and-data-secure/creating-a-personal-access-token)".
{% endif %}

{% ifversion fpt %}
## El token se revocó cuando se subió a un repositorio o gist público

Si un token OAuth válido, token de {% data variables.product.prodname_github_app %} o de acceso personal se sube a un repositorio o gist público, este se revocará automáticamente.

Los tokens de OAuth y los de acceso personal que se suben a los repositorios y gists públicos solo se revocarán si el token tiene alcances.
{% endif %}

{% ifversion fpt %}
## El token venció debido a la falta de uso

{% data variables.product.product_name %} revocará el token de OAuth o de acceso personal automáticamente cuando no se haya utilizado en un año.
{% endif %}

## El usuario revocó el token

Puedes revocar tu autorización de una {% data variables.product.prodname_github_app %} o {% data variables.product.prodname_oauth_app %} desde tus ajustes de cuenta, lo cual revocará cualquier token asociado con la app. Para obtener más información, consulta las secciones "[Revisar tus integraciones autorizadas](/github/authenticating-to-github/keeping-your-account-and-data-secure/reviewing-your-authorized-integrations)" y "[Revisar tus aplicaciones autorizadas (OAuth)](/github/authenticating-to-github/keeping-your-account-and-data-secure/reviewing-your-authorized-applications-oauth)".

Una vez que se revoca una autorización, cualquier token asociado con la autorización también se revocará. Para volver a autorizar una aplicación, sigue las instrucciones de la aplicación o sitio web tercero para conectarte con tu cuenta de {% data variables.product.product_name %} nuevamente.

## La {% data variables.product.prodname_oauth_app %} revocó el token

El propietario de una {% data variables.product.prodname_oauth_app %} puede revocar una autorización de su app en una cuenta, esto también revocará cualquier token asociado con esa autorización. Para obtener más información sobre cómo revocar las autorizaciones de tu app de OAuth, consulta la sección "[Borrar una autorización de una app](/rest/reference/apps#delete-an-app-authorization)".

## El token se revocó debido a un exceso de tokens para una {% data variables.product.prodname_oauth_app %} con el mismo alcance

{% data reusables.apps.oauth-token-limit %}

## El token de usuario se revocó debido a la configuración de la {% data variables.product.prodname_github_app %}

Los tokens de usuario a servidor que creó una {% data variables.product.prodname_github_app %} vencerán después de ocho horas, predeterminadamente. Los propietarios de las {% data variables.product.prodname_github_apps %} pueden configurar sus apps para que los tokens de usuario a servidor no venzan. Para obtener más información sobre cómo cambiar la forma en que se compartan los tokens de usuario a servidor de tus Apps de {% data variables.product.prodname_dotcom %}, consulta la sección "[Activar las características opcionales para las apps](/developers/apps/getting-started-with-apps/activating-optional-features-for-apps)".
