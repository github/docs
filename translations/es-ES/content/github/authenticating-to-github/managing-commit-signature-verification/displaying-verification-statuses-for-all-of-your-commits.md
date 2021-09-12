---
title: Mostrar los estados de verificación para todas tus confirmaciones
shortTitle: Mostrar la verificación de todas las confirmaciones
intro: Puedes habilitar el modo vigilante para verificar la firma de las confirmaciones y así marcar todas tus etiquetas y confirmaciones con un estado de verificación de firma.
versions:
  free-pro-team: '*'
topics:
  - Identity
  - Access management
redirect_from:
  - /github/authenticating-to-github/displaying-verification-statuses-for-all-of-your-commits
---

{% data reusables.identity-and-permissions.vigilant-mode-beta-note %}

### Acerca del modo vigilante

Cuando trabajas localmente en tu computadora, Git te permite configurar el autor de tus cambios y la identidad del confirmante. Esto, potencialmente, dificulta que otras personas tengan la confimansa de que realmente hayas creado tus etiquetas y confirmaciones. Para ayudarte a resolver este problema, puedes firmar tus confirmaciones y etiquetas. Para obtener más información, consulta la sección "[Firmar confirmaciones](/github/authenticating-to-github/signing-commits)" y "[Firmar etiquetas](/github/authenticating-to-github/signing-tags)". {% data variables.product.prodname_dotcom %} marca las etiquetas y confirmaciones firmadas con un estado de verificación.

Predeterminadamente, las confirmaciones y etiquetas se marcan como "Verificadas" si se firman con una llave GPG o S/MIME que se verificó con éxito. Si una confirmaciòn o etiqueta tiene una firma que no puede verificarse, {% data variables.product.prodname_dotcom %} marcarà la confirmaciòn o etiqueta como "No verificada". En el resto de los casos, no se muestra un estado de verificación.

Sin embargo, puedes proporcionar aún más confianza a otros usuarios sobre la identidad que se atribuye a tus confirmaciones y etiquetas si habilitas el modo vigilanten en tu configuración de {% data variables.product.prodname_dotcom %}. Cuando tienes habilitado el modo vigilante, todas tus confirmaciones y etiquetas se marcan con uno de tres estados de verificación.

![Estados de verificación de firma](/assets/images/help/commits/signature-verification-statuses.png)

{% data reusables.identity-and-permissions.vigilant-mode-verification-statuses %}

Solo debes habilitar el modo vigilante si firmas todas tus confirmaciones y etiquetas. Después de habilitar este modo, cualquier confirmación o etiqueta sin firmar que generes localmente y subas a {% data variables.product.prodname_dotcom %} se marcará como "Sin verificar".

{% data reusables.identity-and-permissions.verification-status-check %}

### Habilitar el modo vigilante

{% data reusables.user_settings.access_settings %}
{% data reusables.user_settings.ssh %}
3. En la página de configuración SSH, debajo de "Modo vigilante", selecciona **Marcar las confirmaciones sin firmar como no verificadas**.

   ![Casilla de verificación para marcar las confirmaciones no firmadas como sin verificar](/assets/images/help/commits/vigilant-mode-checkbox.png)
