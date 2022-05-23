### Búsqueda basada en el usuario

El calificador `actor` puede incluir eventos que se basen en quién realizó la acción. Por ejemplo:

  * `actor:octocat` encuentra todos los eventos realizados por `octocat`.
  * `actor:octocat actor:hubot` encuentra todos los eventos realizados tanto por `octocat` como por `hubot`.
  * `-actor:hubot` excluye todos los eventos realizados por `hubot`.

Ten en cuenta que solo puedes utilizar un nombre de usuario {% data variables.product.product_name %}, no el nombre real de una persona.
