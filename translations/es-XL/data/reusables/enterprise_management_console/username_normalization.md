Los nombres de usuario del {% data variables.product.prodname_ghe_server %} únicamente pueden contener caracteres alfanuméricos y rayas (`-`). El {% data variables.product.prodname_ghe_server %} convertirá en raya cualquier caracter no alfanumérico en el nombre de tu cuenta de usuario. Por ejemplo, un nombre de usuario `gregory.st.john` se convertirá en `gregory-st-john`. Nota que los nombres de usuarios normalizados tampoco pueden comenzar o terminar con una raya. Tampoco pueden contener dos rayas seguidas.

Los nombres de usuarios creados a partir de direcciones de correo electrónico se crean con los caracteres normalizados que preceden al caracter `@`.

Si múltiples cuentas se normalizan en el mismo nombre de usuario de {% data variables.product.prodname_ghe_server %}, solo se crea la primera cuenta de usuario. Los siguientes usuarios con el mismo nombre de usuario no podrán registrarse.
