{% ifversion fpt or ghec %}
{% note %}

**Nota:** {% data variables.product.company_short %} mejorò la seguridad al dejar los tipos de llave inseguros el 15 de marzo de 2022.

Desde esta fecha, las llaves DSA (`ssh-dss`) ya no son compatibles. No puedes agregar claves DSA nuevas a tu cuenta personal de {% data variables.product.product_location %}.

Las llaves RSA (`ssh-rsa`) con un `valid_after` anterior al 2 de noviembre de 2021 podrán continuar utilizando cualquier algoritmo de firma. Las llaves RSA que se generaron después de esta fecha deberán utilizar un algoritmo de firma de tipo SHA-2. Algunos clientes más angituos podrían necesitar actualizarse para poder utilizar firmas de tipo SHA-2.

{% endnote %}
{% endif %}
