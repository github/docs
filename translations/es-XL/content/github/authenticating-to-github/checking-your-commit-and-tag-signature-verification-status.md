---
title: Comprobar el estado de verificación de firma de la confirmación y de la etiqueta
intro: 'Puedes comprobar el estado de verificación de las firmas de tu confirmación y de la etiqueta en {% data variables.product.product_name %}.'
redirect_from:
  - /articles/checking-your-gpg-commit-and-tag-signature-verification-status/
  - /articles/checking-your-commit-and-tag-signature-verification-status
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

### Comprobar el estado de verificación de firma de la confirmación

1. En {% data variables.product.product_name %}, desplázate hasta la solicitud de extracción.
{% data reusables.repositories.review-pr-commits %}
3. Junto al hash de confirmación abreviado de la confirmación, existe un cuadro que muestra si la firma de la confirmación está verificada o no está verificada. ![Confirmación firmada](/assets/images/help/commits/gpg-signed-commit-verified-without-details.png)
4. Para ver información más detallada sobre la firma de confirmación, haz clic en **Verified** (Verificada) o **Unverified** (No verificada). ![Confirmación firmada verificada](/assets/images/help/commits/gpg-signed-commit_verified_details.png)

Si la firma de tu confirmación no está verificada, puedes aprender más sobre por qué haciendo clic en el cuadro **Unverified** (No verificado). ![Confirmación firmada no verificada](/assets/images/help/commits/gpg-signed-commit-unverified-details.png)

### Comprobar el estado de verificación de firma de la etiqueta

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.releases %}
2. En la parte superior de la página de lanzamiento, haz clic en **Tags** (Etiqueta). ![Página de etiquetas](/assets/images/help/releases/tags-list.png)
3. Junto a la descripción de tu etiqueta, hay un cuadro que muestra si la firma de la etiqueta está verificada o no está verificada. ![firma de etiqueta verificada](/assets/images/help/commits/gpg-signed-tag-verified.png)
4. Para ver información más detallada sobre la firma de la etiqueta, haz clic en **Verified** (Verificada) o **Unverified** (No verificada). Si la firma de tu etiqueta no está verificada, puedes aprender más sobre por qué haciendo clic en el cuadro **Unverified** (No verificado). ![Etiqueta firmada verificada](/assets/images/help/commits/gpg-signed-tag-verified-details.png)

### Leer más

- "[Acerca de la verificación de la firma de confirmación](/articles/about-commit-signature-verification)"
- "[Firmar confirmaciones](/articles/signing-commits)"
- "[Firmar etiquetas](/articles/signing-tags)"
