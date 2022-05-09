Te recomendamos que solo utilices los ejecutores auto-hospedados con los repositorios privados. Esto se debe a que tu repositorio podría ejecutar código peligroso en tu máquina de ejecutor auto-hospedado potencialmente al crear una solicitud de cambios que excluya el código en un flujo de trabajo.

{%- ifversion fpt or ghec  %}
To help mitigate this risk for public repositories, you can require approvals for workflow runs from first-time contributors. Para obtener más información, consulta la sección "[Aprobar flujos de trabajo desde bifurcaciones públicas](/actions/managing-workflow-runs/approving-workflow-runs-from-public-forks)".
{%- endif %}