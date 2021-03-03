---
title: Buscar usuarios
intro: 'Puedes buscar usuarios en {% data variables.product.product_name %} y acotar los resultados utilizando estos calificadores de búsqueda de usuarios en cualquier combinación.'
redirect_from:
  - /articles/searching-users
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---

Puedes buscar usuarios globalmente a través de todos los {% data variables.product.product_name %}. Para obtener más información, consulta "[Acerca de buscar en {% data variables.product.company_short %}](/articles/about-searching-on-github)".

{% data reusables.search.syntax_tips %}

### Buscar únicamente por usuarios u organizaciones

Por defecto, buscar usuarios mostrará personas y organizaciones. Sin embargo, puedes utilizar el calificador `type` (tipo) para restringir los resultados de la búsqueda a cuentas personales o de organizaciones únicamente.

| Qualifier   | Ejemplo                                                                                                                                                                                                                                |
| ----------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `type:user` | [**mike in:name created:&lt;2011-01-01 type:user**](https://github.com/search?q=mike+in:name+created%3A%3C2011-01-01+type%3Auser&type=Users) encuentra cuentas personales con el nombre "mike" que fueron creadas antes de 2011. |
| `type:org`  | [**data in:email type:org**](https://github.com/search?q=data+in%3Aemail+type%3Aorg&type=Users) encuentra organizaciones con la palabra "data" en su correo electrónico.                                                               |

### Buscar por nombre de cuenta, nombre completo o correo electrónico público

Puedes filtrar tu búsqueda al nombre de la cuenta de usuario personal o de una organización con los calificadores `user` u `org`.

Con el calificador `in` puedes restringir tu búsqueda al nombre de usuario (`login`), el nombre completo, el correo electrónico público, o cualquier combinación de ellos. Cuando omites este calificador, únicamente se buscan el nombre de usuario y la dirección de correo electrónico. Por razones de privacidad, no puedes buscar por nombre de dominio de correo electrónico.

| Qualifier                     | Ejemplo                                                                                                                                                                                                                |
| ----------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `user:name`                   | [**user:octocat**](https://github.com/search?q=user%3Aoctocat&type=Users) encuentra el usuario con el nombre de usuario "octocat".                                                                                     |
| `org:name`                    | [**org:electron type:users**](https://github.com/search?q=org%3Aelectron+type%3Ausers&type=Users) encuentra el nombre de la cuenta de la organización Electron.                                                        |
| `in:login`                    | [**kenya in:login**](https://github.com/search?q=kenya+in%3Alogin&type=Users) encuentra los usuarios con la palabra "kenya" en su nombre de usuario.                                                                   |
| `in:name`                     | [**bolton in:name**](https://github.com/search?q=bolton+in%3Afullname&type=Users) encuentra a los usuarios cuyo nombre real contiene la palabra "bolton."                                                              |
| `fullname:firstname lastname` | [**fullname:nat friedman**](https://github.com/search?q=fullname%3Anat+friedman&type=Users) encuentra un usuario con el nombre completo "Nat Friedman." Nota: este calificador de búsqueda es sensible a los espacios. |
| `in:email`                    | [**data in:email**](https://github.com/search?q=data+in%3Aemail&type=Users&utf8=%E2%9C%93) encuentra a los usuarios con la palabra "data" en su correo electrónico.                                                    |

### Buscar por cantidad de repositorios que posee el usuario

Puedes filtrar usuarios en base a la cantidad de repositorios que poseen, utilizando el calificador `repos` y [los calificadores mayor que, menor que y rango](/articles/understanding-the-search-syntax).

| Qualifier                 | Ejemplo                                                                                                                                                                                                |
| ------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| <code>repos:<em>n</em></code> | [**repos:>9000**](https://github.com/search?q=repos%3A%3E%3D9000&type=Users) coincidirá con los usuarios cuyo número de repositorios sea mayor a 9.000.                                                |
|                           | [**bert repos:10..30**](https://github.com/search?q=bert+repos%3A10..30&type=Users) encuentra usuarios con la palabra "bert" en su nombre de usuario o nombre real que poseen de 10 a 30 repositorios. |

### Buscar por ubicación

Puedes buscar usuarios por la ubicación indicada en su perfil.

| Qualifier                 | Ejemplo                                                                                                                                                                      |
| ------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <code>location:<em>LOCATION</em></code> | [**repos:1 location:iceland**](https://github.com/search?q=repos%3A1+location%3Aiceland&type=Users) encuentra usuarios con exactamente un repositorio que viven en Islandia. |

### Buscar por lenguaje del repositorio

Utilizando el calificador `language` (lenguaje) puedes buscar usuarios en base al lenguaje de los repositorios que poseen.

| Qualifier                 | Ejemplo                                                                                                                                                                                                                               |
| ------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <code>language:<em>LANGUAGE</em></code> | [**language:javascript location:russia**](https://github.com/search?q=language%3Ajavascript+location%3Arussia&type=Users) encuentra usuarios en Rusia con una mayoría de sus repositorios escritos en JavaScript.                     |
|                           | [**jenny language:javascript in:fullname**](https://github.com/search?q=jenny+language%3Ajavascript+in%3Afullname&type=Users) encuentra usuarios con repositorios en JavaScript cuyos nombres completos contienen la palabra "jenny." |

### Buscar por cuándo fue creada la cuenta del usuario

Puedes filtrar usuarios en base a cuándo se unieron a {% data variables.product.product_name %} con el calificador `created` (creada). Este calificador toma una fecha como su parámetro. {% data reusables.time_date.date_format %} {% data reusables.time_date.time_format %}

{% data reusables.search.date_gt_lt %}

| Qualifier                 | Ejemplo                                                                                                                                                                                                                                           |
| ------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <code>created:<em>YYYY-MM-DD</em></code> | [**created:<2011-01-01**](https://github.com/search?q=created%3A%3C2011-01-01&type=Users) coincidirá con los usuarios que se hayan unido antes de 2011.                                                                                           |
|                           | [**created:>=2013-05-11**](https://github.com/search?q=created%3A%3E%3D2013-05-11&type=Users) coincidirá con los usuarios que se hayan unido en o después del 11 de mayo.                                                                         |
|                           | [**created:2013-03-06 location:london**](https://github.com/search?q=created%3A2013-03-06+location%3Alondon&type=Users) encuentra usuarios que se unieron el 6 de marzo de 2013, y que muestran su ubicación como Londres.                        |
|                           | [**created:2010-01-01..2011-01-01 john in:login**](https://github.com/search?q=created%3A2010-01-01..2011-01-01+john+in%3Ausername&type=Users) encuentra usuarios que se unieron entre 2010 y 2011 con la palabra "john" en su nombre de usuario. |

### Buscar por cantidad de seguidores

Puedes filtrar usuarios en base a la cantidad de seguidores que tienen, utilizando el calificador `followers` (seguidores) con los calificadores [mayor que, menor que y rango](/articles/understanding-the-search-syntax).

| Qualifier                 | Ejemplo                                                                                                                                                                            |
| ------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <code>followers:<em>n</em></code> | [**followers:>=1000**](https://github.com/search?q=followers%3A%3E%3D1000&type=Users) coincidirá con los usuarios con 1,000 o más seguidores.                                      |
|                           | [**sparkle followers:1..10**](https://github.com/search?q=sparkle+followers%3A1..10&type=Users) encuentra usuarios entre 1 y 10 seguidores, con la palabra "sparkle" en su nombre. |

### Leer más

- "[Clasificar los resultados de la búsqueda](/articles/sorting-search-results/)"
