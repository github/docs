{% data variables.product.prodname_ghe_server %}のユーザ名に使えるのは、英数字とダッシュ（`-`）のみです。 {% data variables.product.prodname_ghe_server %}は、アカウントのユーザ名に含まれている非英数字をダッシュに変換します。 たとえば`gregory.st.john`というユーザ名は、`gregory-st-john`に変換されます。 変換されたユーザ名の先頭及び末尾はダッシュであってはならないことに注意してください。 2つの連続するダッシュを含めることもできません。

メールアドレスから作成されたユーザ名は、`@`以前の文字を変換して作成されます。

複数のアカウントが変換後に同じ{% data variables.product.prodname_ghe_server %}のユーザ名になる場合、最初のユーザアカウントだけが作成されます。 同じユーザ名のそれ以降のユーザは、サインインできません。
