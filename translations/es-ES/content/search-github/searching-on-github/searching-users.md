---
title: Buscar usuarios
intro: 'Puedes buscar usuarios en {% data variables.product.product_name %} y acotar los resultados utilizando estos calificadores de búsqueda de usuarios en cualquier combinación.'
redirect_from:
  - /articles/searching-users
  - /github/searching-for-information-on-github/searching-users
  - /github/searching-for-information-on-github/searching-on-github/searching-users
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - GitHub search
ms.openlocfilehash: cf3af1837e398226bee7d926e5dae0fd437879c7
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/10/2022
ms.locfileid: '145139490'
---
Puedes buscar usuarios globalmente a través de todos los {% data variables.product.product_name %}. Para obtener más información, consulte "[Acerca de la búsqueda en {% data variables.product.company_short %}](/search-github/getting-started-with-searching-on-github/about-searching-on-github)".

{% data reusables.search.syntax_tips %}

## Buscar únicamente por usuarios u organizaciones

Por defecto, buscar usuarios mostrará personas y organizaciones. Sin embargo, puede utilizar el calificador `type` para restringir los resultados de la búsqueda a cuentas personales o de organizaciones únicamente.

| Calificador:        | Ejemplo
| ------------- | -------------
| `type:user` | [**mike in:name created:&lt;2011-01-01 type:user**](https://github.com/search?q=mike+in:name+created%3A%3C2011-01-01+type%3Auser&type=Users) busca cuentas personales con el nombre "mike" creadas antes de 2011.
| `type:org` | [**data in:email type:org**](https://github.com/search?q=data+in%3Aemail+type%3Aorg&type=Users) busca organizaciones con la palabra "data" su dirección de correo electrónico.

## Buscar por nombre de cuenta, nombre completo o correo electrónico público

Puede filtrar la búsqueda por el nombre de cuenta de usuario personal u organización con los calificadores `user` o `org`.

Con el calificador `in`, puede restringir la búsqueda al nombre de usuario (`login`), el nombre completo, el correo electrónico público o cualquier combinación de estos elementos. Cuando omites este calificador, únicamente se buscan el nombre de usuario y la dirección de correo electrónico. Por razones de privacidad, no puedes buscar por nombre de dominio de correo electrónico.

| Calificador:        | Ejemplo
| ------------- | -------------
| `user:name` | [**user:octocat**](https://github.com/search?q=user%3Aoctocat&type=Users) busca el usuario con el nombre de usuario "octocat".
| `org:name` | [**org:electron type:users**](https://github.com/search?q=org%3Aelectron+type%3Ausers&type=Users) busca el nombre de la organización Electron.
| `in:login` | [**kenya in:login**](https://github.com/search?q=kenya+in%3Alogin&type=Users) busca usuarios con la palabra "kenya" en su nombre de usuario.
| `in:name` | [**bolton in:name**](https://github.com/search?q=bolton+in%3Afullname&type=Users) busca usuarios cuyo nombre real contenga la palabra "bolton."
| `fullname:firstname lastname` | [**fullname:nat friedman**](https://github.com/search?q=fullname%3Anat+friedman&type=Users) busca un usuario con el nombre completo "Nat Friedman." Nota: este calificador de búsqueda es sensible a los espacios.
| `in:email` | [**data in:email**](https://github.com/search?q=data+in%3Aemail&type=Users&utf8=%E2%9C%93) busca usuarios con la palabra "data" en su correo electrónico.

## Buscar por cantidad de repositorios que posee un usuario

Puede filtrar usuarios en función del número de repositorios que poseen mediante el calificador `repos` y los [calificadores mayor que, menor que y rango](/search-github/getting-started-with-searching-on-github/understanding-the-search-syntax).

| Calificador:        | Ejemplo
| ------------- | -------------
| <code>repos:<em>n</em></code> | [**repos:>9000**](https://github.com/search?q=repos%3A%3E%3D9000&type=Users) busca usuarios con un recuento de más de 9000 repositorios.
| | [**bert repos:10..30**](https://github.com/search?q=bert+repos%3A10..30&type=Users) busca usuarios con la palabra "bert" en su nombre de usuario o nombre real que tengan entre 10 y 30 repositorios.

## Buscar por ubicación

Puedes buscar usuarios por la ubicación indicada en su perfil.

| Calificador:        | Ejemplo
| ------------- | -------------
| <code>location:<em>LOCATION</em></code> | [**repos:1 location:iceland**](https://github.com/search?q=repos%3A1+location%3Aiceland&type=Users) busca usuarios con exactamente un repositorio que vivan en Islandia.

## Buscar por lenguaje del repositorio

Con el calificador `language` puede buscar usuarios en función de los lenguajes de los repositorios que poseen.

| Calificador:        | Ejemplo
| ------------- | -------------
| <code>language:<em>LANGUAGE</em></code> | [**language:javascript location:russia**](https://github.com/search?q=language%3Ajavascript+location%3Arussia&type=Users) busca usuarios en Rusia con una mayoría de repositorios escritos en JavaScript.
| | [**jenny language:javascript in:fullname**](https://github.com/search?q=jenny+language%3Ajavascript+in%3Afullname&type=Users) busca usuarios con repositorios de JavaScript cuyo nombre completo contenga la palabra "jenny."

## Búsqueda por cuándo se ha creado una cuenta personal

Puede filtrar usuarios en función de la fecha en la que se unieron a {% data variables.product.product_name %} con el calificador `created`. Este calificador toma una fecha como su parámetro. {% data reusables.time_date.date_format %} {% data reusables.time_date.time_format %}

{% data reusables.search.date_gt_lt %}

| Calificador:        | Ejemplo
| ------------- | -------------
| <code>created:<em>YYYY-MM-DD</em></code> | [**created:<2011-01-01**](https://github.com/search?q=created%3A%3C2011-01-01&type=Users) busca usuarios que se unieron antes de 2011.
| | [**created:>=2013-05-11**](https://github.com/search?q=created%3A%3E%3D2013-05-11&type=Users) busca usuarios que se unieron a partir del 11 de mayo de 2013 (incluido).
| | [**created:2013-03-06 location:london**](https://github.com/search?q=created%3A2013-03-06+location%3Alondon&type=Users) busca usuarios que se unieron el 6 de marzo de 2013 que especifican su ubicación en Londres.
| | [**created:2010-01-01..2011-01-01 john in:login**](https://github.com/search?q=created%3A2010-01-01..2011-01-01+john+in%3Ausername&type=Users) busca usuarios que se unieron entre 2010 y 2011 con la palabra "john" en su nombre de usuario.

## Buscar por cantidad de seguidores

Puede filtrar usuarios en función del número de seguidores que poseen mediante el calificador `followers` con los [calificadores mayor que, menor que y rango](/search-github/getting-started-with-searching-on-github/understanding-the-search-syntax).

| Calificador:        | Ejemplo
| ------------- | -------------
| <code>followers:<em>n</em></code> | [**followers:>=1000**](https://github.com/search?q=followers%3A%3E%3D1000&type=Users) busca usuarios con 1000 o más seguidores.
| | [**sparkle followers:1..10**](https://github.com/search?q=sparkle+followers%3A1..10&type=Users) busca usuarios con entre 1 y 10 seguidores con la palabra "sparkle" en su nombre.

{% ifversion fpt or ghec %}

## Búsqueda basada en la capacidad de patrocinar

Puede buscar usuarios y organizaciones que puedan patrocinarse en {% data variables.product.prodname_sponsors %} con el calificador `is:sponsorable`. Para más información, vea "[Acerca de {% data variables.product.prodname_sponsors %}](/sponsors/getting-started-with-github-sponsors/about-github-sponsors)".

| Calificador:  | Ejemplo
| ------------- | -------------
| `is:sponsorable` | [**is:sponsorable**](https://github.com/search?q=is%3Asponsorable&type=Users) busca usuarios y organizaciones que tienen un perfil de {% data variables.product.prodname_sponsors %}.

{% endif %}

## Información adicional

- "[Ordenar los resultados de la búsqueda](/search-github/getting-started-with-searching-on-github/sorting-search-results/)"
