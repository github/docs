---
title: Configurar la política de referente para tu empresa
shortTitle: Configurar la política de referente
intro: 'Puedes incrementar la privacidad de {% data variables.product.product_location %} si configuras la política para las solicitudes de origen cruzado.'
versions:
  ghes: '*'
type: how_to
topics:
  - Enterprise
  - Networking
  - Privacy
  - Security
---

## Acerca de la política de referente para tu empresa

La política de referente controla la información que transmite {% data variables.product.product_name %} en los encabezados HTTP cuando alguien visita un enlace de {% data variables.product.product_location %} a un sitio externo.

Predeterminadamente, cuando un usuario en {% data variables.product.product_location %} visita un enlace a otro sitio desde el archivo o comentario en tu instancia, la solicitud incluye el nombre de host de tu instancia en texto simple dentro del encabezado `Referer`. Si el enlace lleva a un sitio web externo, el propietario de este podría leer el nombre de host de tu instancia en los archivos de bitácora o en las solicitudes.

Puedes controlar la información que envía {% data variables.product.product_name %} cuando un usuario visita un enlace de tu instancia.

## Habilita la política de referente de `same-origin`

Puedes habilitar la política de referente de `same-origin` para instruir a los buscadores modernos para que excluyan el nombre de host de {% data variables.product.product_location %} de las solicitudes a los sitios web externos. El ajuste aplica a todos los enlaces de la interfaz web en tu instancia. Predeterminadamente, {% data variables.product.product_name %} utiliza las políticas de referente `origin-when-cross-origin` y `strict-origin-when-cross-origin`, lo cual significa que el nombre de host de tu instancia aparecerá en solicitudes HTTP y HTTPS hacia sitios web externos.

{% note %}

**Nota**: El cambiar la política de referente a `same-origin` puede afectar los sitios externos que esperan un nombre de host en los encabezados HTTP para una solicitud.

{% endnote %}

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
1. Debajo de "Política de Referente del Agente Usuario", selecciona **Habilitar la misma política de referente origen para todas las organizaciones**. ![Casilla de verificación para habilitar la misma política de referente origen](/assets/images/enterprise/settings/referrer-policy-checkbox.png)
1. Haz clic en **Save ** (guardar). ![Botón de guardar para habilitar la política de referente del mismo origen](/assets/images/enterprise/settings/referrer-policy-save-button.png)
