---
title: Acerca de la firma de confirmación requerida
intro: La firma de confirmación requerida garantiza que los colaboradores solo puedan subir confirmaciones firmadas verificadas para una rama protegida.
product: '{% data reusables.gated-features.protected-branches %}'
redirect_from:
  - /articles/about-required-commit-signing
  - /github/administering-a-repository/about-required-commit-signing
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---
Si has implementado protecciones de rama en tu repositorio, puedes configurar la firma de confirmación requerida. Para obtener más información, consulta "[Configurar las ramas protegidas](/articles/configuring-protected-branches/)".

Cuando habilitas la firma de confirmación requerida en una rama, los contribuyentes {% if currentVersion == "free-pro-team@latest" %} y bots {% endif %} únicamente podrán subir confirmaciones que se hayan firmado y verificado en la rama. Para obtener más información, consulta "[Acerca de la verificación de firmas en las confirmaciones](/articles/about-commit-signature-verification)."

Siempre puedes subir confirmaciones locales a la rama si estas se firmaron y verificaron. {% if currentVersion == "free-pro-team@latest" %}También puedes fusionar las confirmaciones firmadas y verificadas en la rama utilizando una solicitud de extracción en {% data variables.product.product_name %}. Sin embargo, no puedes combinar y fusionar una solicitud de extracción en la rama en {% data variables.product.product_name %} a menos de que seas el autor de dicha solicitud.{% else %} Sin embargo, no puedes fusionar solicitudes de extracción en la rama en {% data variables.product.product_name %}.{% endif %} Puedes {% if currentVersion == "free-pro-team@latest" %}combinar y {% endif %}fusionar las solicitudes de extracción localmente. Para obtener más información, consulta "[revisar las solicitudes de extracción localmente](/github/collaborating-with-issues-and-pull-requests/checking-out-pull-requests-locally)."{% if currentVersion == "free-pro-team@latest" %} Para obtener más información acerca de los métodos de fusión, consulta "[Acerca de los métodos de fusión en {% data variables.product.prodname_dotcom %}](/github/administering-a-repository/about-merge-methods-on-github)."{% endif %}

{% note %}

**Nota:** Activar la firma de confirmación requerida en una rama hará que sea más difícil colaborar con la misma. Si un colaborador sube una confirmación sin firmar a una rama que tiene la firma de confirmación requerida activada, necesitará cambiar de base su confirmación para incluir una firma verificada y realizar un empuje forzado de la confirmación reescrita a la rama.

{% endnote %}

Los administradores de un repositorio pueden subir confirmaciones locales que no hayan sido firmadas y verificadas, sin embargo, les puedes solicitar a los administradores que estén sujetos a la firma de confirmación requerida. Para obtener más información, consulta "[Activar la firma de confirmación requerida](/articles/enabling-required-commit-signing)".

### Leer más

- "[Acerca de las ramas protegidas](/articles/about-protected-branches)"
