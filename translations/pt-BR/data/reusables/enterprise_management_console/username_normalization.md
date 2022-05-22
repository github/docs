Nomes de usuário de {% data variables.product.prodname_ghe_server %} só podem conter caracteres alfanuméricos e traços (`-`). {% data variables.product.prodname_ghe_server %} normalizará qualquer caractere não alfanumérico do nome de usuário da sua conta em um traço. Por exemplo, um nome de usuário de `gregory.st.john` será normalizado para `gregory-st-john`. Observe que nomes de usuários normalizados também não podem iniciar ou terminar com um traço. Eles também não podem conter dois traços consecutivos.

Nomes de usuário criados a partir de endereços de e-mail são criados a partir dos caracteres normalizados que precedem o caractere `@`.

Se várias contas forem normalizadas no mesmo nome de usuário do {% data variables.product.prodname_ghe_server %} apenas a primeira conta de usuário é criada. Usuários subsequentes com o mesmo nome de usuário não serão capazes de fazer o login.
