---
title: Comprobar el estado de verificación de firma de la confirmación y de la etiqueta
intro: 'Puedes comprobar el estado de verificación de las firmas de tu confirmación y de la etiqueta en {% data variables.product.product_name %}.'
redirect_from:
  - /articles/checking-your-gpg-commit-and-tag-signature-verification-status/
  - /articles/checking-your-commit-and-tag-signature-verification-status
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - Identity
  - Access management
---

### Comprobar el estado de verificación de firma de la confirmación

1. Activado

{% data variables.product.product_name %}, navega a tu solicitud de cambios.
{% data reusables.repositories.review-pr-commits %}
3. Junto al hash de confirmación abreviado de tu confirmación, hay una casilla que te muestra si tu firma de confirmación se verificó{% if currentVersion == "free-pro-team@latest" %}, se verificó parcialmente,{% endif %} o si no se verificó. ![Confirmación firmada](/assets/images/help/commits/gpg-signed-commit-verified-without-details.png)
4. Para ver información más detallada sobre la firma de confirmación, haz clic en **Verificada**{% if currentVersion == "free-pro-team@latest" %}, **Verificada parcialmente**,{% endif %} o **Sin verificar**. ![Confirmación firmada verificada](/assets/images/help/commits/gpg-signed-commit_verified_details.png)

### Comprobar el estado de verificación de firma de la etiqueta

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.releases %}
2. En la parte superior de la página de lanzamiento, haz clic en **Tags** (Etiqueta). ![Página de etiquetas](/assets/images/help/releases/tags-list.png)
3. Junto a la descripción de tu etiqueta, hay una caja que muestra si tu firma de etiqueta está verificada{% if currentVersion == "free-pro-team@latest" %}, verificada parcialmente,{% endif %} o sin verificar. ![firma de etiqueta verificada](/assets/images/help/commits/gpg-signed-tag-verified.png)
4. Para ver más información detallada sobre la firma de una etiqueta, haz clic en **Verificada**{% if currentVersion == "free-pro-team@latest" %},**Verificada parcialmente**,{% endif %} o **Sin verificar**. ![Etiqueta firmada verificada](/assets/images/help/commits/gpg-signed-tag-verified-details.png)

### Leer más

- "[Acerca de la verificación de la firma de confirmación](/articles/about-commit-signature-verification)"
- "[Firmar confirmaciones](/articles/signing-commits)"
- "[Firmar etiquetas](/articles/signing-tags)"
