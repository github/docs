---
title: Configurar el cifrado de datos para tu empresa
shortTitle: Configurar el cifrado de datos
intro: 'Para el cifrado estático, puedes proporcionar tu propia llave de cifrado para cifrar tus datos bajo tus políticas de cifrado.'
versions:
  github-ae: '*'
type: how_to
topics:
  - Enterprise
  - Fundamentals
  - Security
redirect_from:
  - /admin/configuration/configuring-data-encryption-for-your-enterprise
---

{% note %}

**Nota:** La configuración de cifrado estático con una llave que administre el usuario se encuentra actualmente en beta y está sujeto a cambios.

{% endnote %}

### Acerca del cifrado de datos

Para proporcionar un nivel alto de seguridad, {% data variables.product.product_name %} cifra tus datos mientras están estáticos en los centros de datos y mientras tus datos se encuentran en tránsito entre las máquinas de los usuarios y los centros de datos.

Para el cifrado en tránsito, {% data variables.product.product_name %} utiliza la Seguridad de Capas de Transporte (TLS). Para el cifrado estático, {% data variables.product.product_name %} proporciona una llave RSA predeterminada.
