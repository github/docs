---
title: Actualizar la atribución del autor de la confirmación con Importador GitHub
intro: 'Durante una importación, puedes hacer coincidir las confirmaciones de tu repositorio con la cuenta de GitHub del autor de la confirmación.'
redirect_from:
  - /articles/updating-commit-author-attribution-with-github-importer
versions:
  free-pro-team: '*'
---

El Importador GitHub busca los usuarios de GitHub cuyas direcciones de correo electrónico coincidan con los autores de las confirmaciones del repositorio que estás importando. Luego puedes conectar una confirmación con su autor utilizando su dirección de correo electrónico o el nombre de usuario de GitHub del autor.

### Actualizar autores de la confirmación

1. Después de que hayas importado tu repositorio, en la página de estado de importación, haz clic en **Match authors** (Hacer coincidir autores). ![Botón Match authors (Hacer coincidir autores)](/assets/images/help/importer/match-authors-button.png)
2. Al lado del autor cuya información quieres actualizar, haz clic en **Connect** (Conectar). ![Lista de autores de la confirmación](/assets/images/help/importer/connect-commit-author.png)
3. Escribe la dirección de correo electrónico o el nombre de usuario de GitHub del autor, luego presiona **Enter**.

### Atribuir confirmaciones a un usuario de GitHub con una dirección de correo electrónico pública

Si el autor de una confirmación en tu repositorio importado tiene una cuenta de GitHub asociada con la dirección de correo electrónico que utilizó para figurar como autor de la confirmación y no estableció [su dirección de correo electrónico de confirmaciones como privada](/articles/setting-your-commit-email-address), el Importador GitHub hará coincidir la dirección de correo electrónico asociada a la confirmación con la dirección de correo electrónico pública asociada a su cuenta de GitHub, y atribuirá la confirmación a su cuenta de GitHub.

### Atribuir confirmaciones a un usuario de GitHub sin una dirección de correo electrónico pública

Si el autor de una confirmación en tu repositorio importado no estableció una dirección de correo electrónico pública en su perfil de GitHub ni [estableció su dirección de correo electrónico de confirmaciones como privada](/articles/setting-your-commit-email-address), el Importador GitHub no podrá hacer coincidir la dirección de correo electrónico asociada a la confirmación con su cuenta de GitHub.

El autor de la confirmación puede resolver esto estableciendo su dirección de correo electrónico como privada. Sus confirmaciones luego se le atribuirán a `<username>@users.noreply.github.com`, y las confirmaciones importadas se asociarán a su cuenta de GitHub.

### Atribuir confirmaciones utilizando una dirección de correo electrónico

Si la dirección de correo electrónico del autor no está asociada a su cuenta de GitHub, puede [agregar la dirección a su cuenta](/articles/adding-an-email-address-to-your-github-account) después de la importación, y las confirmaciones se atribuirán de manera correcta.

Si el autor no tiene una cuenta de GitHub, el Importador GitHub atribuirá sus confirmaciones a la dirección de correo electrónico asociada a las confirmaciones.

### Leer más

- "[Acerca del Importador GitHub](/articles/about-github-importer)"
- "[Importar un repositorio con Importador GitHub](/articles/importing-a-repository-with-github-importer)"
- "[Agregar una dirección de correo electrónico a tu cuenta](/articles/adding-an-email-address-to-your-github-account/)"
- "[Establecer tu dirección de correo electrónico de confirmaciones](/articles/setting-your-commit-email-address)"
