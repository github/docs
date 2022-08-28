---
title: Comprobar el estado de verificación de firma de la confirmación y de la etiqueta
intro: 'Puedes comprobar el estado de verificación de las firmas de tu confirmación y de la etiqueta en {% data variables.product.product_name %}.'
redirect_from:
  - /articles/checking-your-gpg-commit-and-tag-signature-verification-status/
  - /articles/checking-your-commit-and-tag-signature-verification-status
  - /github/authenticating-to-github/checking-your-commit-and-tag-signature-verification-status
  - /github/authenticating-to-github/troubleshooting-commit-signature-verification/checking-your-commit-and-tag-signature-verification-status
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
topics:
  - Identity
  - Access management
shortTitle: Verificar el estado de verificación
---

## Comprobar el estado de verificación de firma de la confirmación

1. En {% data variables.product.product_name %}, desplázate hasta la solicitud de extracción.
{% data reusables.repositories.review-pr-commits %}
3. Junto al hash de confirmación abreviado de tu confirmación, hay una casilla que te muestra si tu firma de confirmación se verificó{% ifversion fpt %}, se verificó parcialmente,{% endif %} o si no se verificó. ![Confirmación firmada](/assets/images/help/commits/gpg-signed-commit-verified-without-details.png)
4. Para ver información más detallada sobre la firma de confirmación, haz clic en **Verificada**{% ifversion fpt %}, **Verificada parcialmente**,{% endif %} o **Sin verificar**. ![Confirmación firmada verificada](/assets/images/help/commits/gpg-signed-commit_verified_details.png)

## Comprobar el estado de verificación de firma de la etiqueta

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.releases %}
2. En la parte superior de la página de lanzamiento, haz clic en **Tags** (Etiqueta). ![Página de etiquetas](/assets/images/help/releases/tags-list.png)
3. Junto a la descripción de tu etiqueta, hay una caja que muestra si tu firma de etiqueta está verificada{% ifversion fpt %}, verificada parcialmente,{% endif %} o sin verificar. ![firma de etiqueta verificada](/assets/images/help/commits/gpg-signed-tag-verified.png)
4. Para ver más información detallada sobre la firma de una etiqueta, haz clic en **Verificada**{% ifversion fpt %},**Verificada parcialmente**,{% endif %} o **Sin verificar**. ![Etiqueta firmada verificada](/assets/images/help/commits/gpg-signed-tag-verified-details.png)

## Leer más

- "[Acerca de la verificación de la firma de confirmación](/articles/about-commit-signature-verification)"
- "[Firmar confirmaciones](/articles/signing-commits)"
- "[Firmar etiquetas](/articles/signing-tags)"
