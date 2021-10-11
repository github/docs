{% note %}

**Nota:** {% data variables.product.company_short %} está mejrando la seguridad al dejar los tipos de llaves inseguras y más antiguas.

Ya no hay compatibilidad con llaves DSA (`ssh-dss`). Las llaves existentes seguirán funcionando hasta el 15 de mazo de 2022. No puedes agregar llaves DSA nuevas a tu cuenta de usuario en {% data variables.product.product_name %}.

Las llaves RSA (`ssh-rsa`) con un `valid_after` anterior al 2 de noviembre de 2021 podrán continuar utilizando cualquier algoritmo de firma. Las llaves RSA que se generaron después de esta fecha deberán utilizar un algoritmo de firma de tipo SHA-2. Algunos clientes más angituos podrían necesitar actualizarse para poder utilizar firmas de tipo SHA-2.

{% endnote %}
