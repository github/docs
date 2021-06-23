{% tip %}

**Tips**:
- Si se habilita las revisiones requeridas y un colaborador con acceso de _write_, _admin_, u _owner_ emite una revisión solicitando cambios, la solicitud de extracción no se podrá fusionar hasta queel mismo colaborador emita otra revisión aprobando los cambios en dicha solicitud de extracción.
- Los propietarios y administradores del repositorio pueden fusionar una solicitud de extracción, incluso si no recibió una revisión de aprobación o si un revisor que solicitó modificaciones abandonó la organización o no está disponible.
- Si están habilitadas las revisiones requeridas y el descarte de una revisión en espera, y se sube una confirmación de modificación de código a la rama de una solicitud de extracción aprobada, se descarta la aprobación. La solicitud de extracción se debe volver a revisar y aprobar antes de que se pueda fusionar.
- Cuando varias solicitudes de extracción abiertas tienen una rama de encabezado que apunta a la misma confirmación, no podrás fusionarlas si una o ambas tienen una revisión pendiente o rechazada.
- Los autores de la solicitud de cambios no pueden aprobar sus propias solicitudes de cambios.

{% endtip %}
