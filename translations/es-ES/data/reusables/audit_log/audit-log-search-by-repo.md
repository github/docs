### Búsqueda basada en el repositorio

Utiliza el calificador `repo` para limitar las acciones a un repositorio específico. Por ejemplo:

  * `repo:my-org/our-repo` encuentra todos los eventos que ocurrieron para el repositorio `our-repo` en la organización `my-org`.
  * `repo:my-org/our-repo repo:my-org/another-repo` encuentra todos los eventos que ocurrieron tanto para los repositorios `our-repo` como `another-repo` en la organización `my-org`.
  * `-repo:my-org/not-this-repo` excluye todos los eventos que ocurrieron para el repositorio `not-this-repo` en la organización `my-org`.

Nota que debes incluir el nombre de cuenta dentro del calificador `repo`; no funcionará si buscas únicamente `repo:our-repo`.
