Existen algunos límites para el uso de {% data variables.product.prodname_actions %}, los cuales dependerán de si utilizas ejecutores auto-hospedados, u hospedados en {% data variables.product.prodname_dotcom %}. Estos límites están sujetos a cambios.

- **Tiempo de ejecución de jobs** - Cada job en un flujo de trabajo puede ejecutarse hasta por 6 horas en tiempo de ejecución. Si un job llega a este límite, éste se terminará y fallará en completarse. Este límite no aplica para los ejecutores auto-hospedados.
- **Tiempo de ejecución del flujo de trabajo** - Cada flujo de trabajo se limita a 72 horas. Si un flujo de trabajo llega a este límite, se cancelará. Este límite también aplica para los ejecutores auto-hospedados.
- **Tiempo de cola de espera para el job** - Cada job para ejecutores auto-hospedados puede ponerse en cola de espera por un máximo de 24 horas. Si un ejecutor auto-hospedado no comienza a ejecutar el job dentro de este límite de tiempo, dicho job se terminará y no se podrá completar. Este límite no aplica a los ejecutores hospedados en {% data variables.product.prodname_dotcom %}.
- **Solicitudes de la API** - Puedes ejecutar hasta 1000 solicitudes de API en una hora en todas las acciones dentro de un repositorio. Si esto se excede, los llamados adicionales a la API fallarán, lo cual puede ocasionar que los jobs fallen también. Este límite también aplica para los ejecutores auto-hospedados.
- **Jobs simultáneos** - La cantidad de jobs que puedes ejecutar simultáneamente en tu cuenta depende de tu plan de GitHub, como se indica en la siguiente tabla. Si eso se excede, cualquier job adicional se pondrá en cola de espera. No hay límites de ejecución simultánea para ejecutores auto-hospedados.

  | Plan de GitHub | Jobs simultáneos totales | Jobs simultáneos de macOS máximos |
  | -------------- | ------------------------ | --------------------------------- |
  | Gratis         | 20                       | 5                                 |
  | Pro            | 40                       | 5                                 |
  | Equipo         | 60                       | 5                                 |
  | Empresa        | 180                      | 50                                |
- **Matiz de jobs** - {% data reusables.github-actions.matrix-limits %}
