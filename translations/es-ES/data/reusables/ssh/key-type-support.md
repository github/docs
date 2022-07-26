{% ifversion fpt or ghec %}
{% note %}

**Nota:** {% data variables.product.company_short %} mejorò la seguridad al dejar los tipos de llave inseguros el 15 de marzo de 2022.

Desde esta fecha, las llaves DSA (`ssh-dss`) ya no son compatibles. No puedes agregar claves DSA nuevas a tu cuenta personal de {% data variables.product.product_location %}.

Las llaves RSA (`ssh-rsa`) con un `valid_after` anterior al 2 de noviembre de 2021 podrán continuar utilizando cualquier algoritmo de firma. Las llaves RSA que se generaron después de esta fecha deberán utilizar un algoritmo de firma de tipo SHA-2. Algunos clientes más angituos podrían necesitar actualizarse para poder utilizar firmas de tipo SHA-2.

{% endnote %}

{% elsif ghes = 3.6 or ghes = 3.7 or ghes = 3.8 %}

{% note %}

**Note**: By default with {% data variables.product.product_name %} 3.6 and later, as of the cutoff date of midnight UTC on August 1, 2022, SSH connections that satisfy **both** of the following conditions will fail.

<br/>

{% data reusables.ssh.rsa-sha-1-connection-failure-criteria %}

{% data variables.product.product_name %} 3.6 and later also does not support SSH connections that use DSA, HMAC-SHA-1, or CBC ciphers. RSA SSH keys uploaded before the cutoff date can continue to authenticate using the SHA-1 hash function as long as the key remains valid. For more information about finding the version of {% data variables.product.product_name %} that you use, see "[About versions of {% data variables.product.prodname_docs %}](/get-started/learning-about-github/about-versions-of-github-docs#github-enterprise-server)."

Your site administrator can adjust the cutoff date for connections using RSA-SHA-1, and may block all connections using RSA-SHA-1. For more information, contact your site administrator or see "[Configuring SSH connections to your instance](/admin/configuration/configuring-your-enterprise/configuring-ssh-connections-to-your-instance)."

{% endnote %}

{% endif %}