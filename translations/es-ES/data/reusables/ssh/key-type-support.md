{% note %}

**Note:** {% data variables.product.company_short %} improved security by dropping older, insecure key types on March 15, 2022.

As of that date, DSA keys (`ssh-dss`) are no longer supported. No puedes agregar llaves DSA nuevas a tu cuenta de usuario en {% data variables.product.product_location %}.

Las llaves RSA (`ssh-rsa`) con un `valid_after` anterior al 2 de noviembre de 2021 podrán continuar utilizando cualquier algoritmo de firma. Las llaves RSA que se generaron después de esta fecha deberán utilizar un algoritmo de firma de tipo SHA-2. Algunos clientes más angituos podrían necesitar actualizarse para poder utilizar firmas de tipo SHA-2.

{% endnote %}
