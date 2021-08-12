---
title: Administrar una tarea de revisión de código para tu equipo
intro: Las tareas de revisión de código indican claramente qué miembros de un equipo se espera emitan una revisión para una solicitud de extracción.
redirect_from:
  - /github/setting-up-and-managing-organizations-and-teams/managing-code-review-assignment-for-your-team
product: '{% data reusables.gated-features.code-review-assignment %}'
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.20'
  github-ae: '*'
topics:
  - Organizations
  - Teams
---

Los mantenedores de equipo y propietarios de organización pueden configurar tareas de revisión de código.

### Acerca de las tareas de revisión de código

Al utilizar tareas de revisión de código, cada que se pida a tu equipo revisar una solicitud de extracción, éste se eliminará como revisor y se asignará un subconjunto de miembros específicos del mismo en sustitución. Las tareas de revisión de código te permiten decidir si se notificará a todo el equipo o solo a un subconjunto de miembros del mismo cuando se solicite que éste realice una revisión.

Cuando se les solicita automáticamente una revisión a los propietarios del código, el equipo se eliminará y reemplazará con los individuos de todos modos. Las aprobaciones individuales no satisfacen el requisito de aprobación del propietario del código en una rama protegida. Para obtener más información, consulta "[Acerca de los propietarios del código](/github/creating-cloning-and-archiving-repositories/about-code-owners)."

### Rutear algoritmos

Las asignaciones de revisión de código eligen y asignan revisores automáticamente con base en uno de dos algoritmos posibles.

El algoritmo de round robin (turno rotativo) escoge revisores basándose en quién recibe la solicitud de revisión menos reciente, y se enfoca en alternar entre todos los miembros del equipo sin importar el número de revisiones pendientes que tengan en el momento.

El algoritmo de balanceo de carga escoge a los revisores basándose en la cantidad total de solicitudes de revisión recientes para cada miembro, y considera el número de revisiones pendientes para cada uno de ellos. El algoritmo de balanceo de carga intenta asegurarse de que cada miembro del equipo revise una cantidad igual de solicitudes de extracción en cualquier periodo de 30 días.

### Configurar una tarea de revisión de código
{% data reusables.profile.access_org %}
{% data reusables.user_settings.access_org %}
{% data reusables.organizations.specific_team %}
{% data reusables.organizations.team_settings %}
5. En la barra lateral izquierda, da clic en **Tarea de revisión de código** ![Botón de tarea de revisión de código](/assets/images/help/teams/review-assignment-button.png)
6. Selecciona **Habilitar auto asignación**. ![Botón de tarea de revisión de código](/assets/images/help/teams/review-assignment-enable.png)
7. Debajo de "¿Cuántos miembros del equipo deberán asignarse para revisión?", utiliza el menú desplegable y elije el número de revisores que se asignarán a cada solicitud de extracción. ![Menú desplegable de cantidad de revisores](/assets/images/help/teams/review-assignment-number.png)
8. Debajo de "Algoritmo de ruteo", utiliza el menú desplegable y elige qué algoritmo quieres utilizar. Para obtener más información, consulta la sección "[Algoritmos de ruteo](#routing-algorithms)". ![Menú desplegable de algoritmo de ruteo](/assets/images/help/teams/review-assignment-algorithm.png)
9. De manera opcional, para siempre omitir miembros específicos del equipo, selecciona **Nunca asignar ciertos miembros del equipo**. Después, selecciona uno o más miembros del equipo que quieras omitir siempre. ![Menú desplegable y casilla de "nunca asignar ciertos miembros del equipo"](/assets/images/help/teams/review-assignment-skip-members.png)
10. De manera opcional, para notificar únicamente a los miembros del equipo que se escogieron por tarea de revisión en cada solicitud revisión de código, selecciona **No notificar a todo el equipo si se asignan miembros específicos** debajo de "Notificaciones". ![Notificaciones de tarea de revisión de código](/assets/images/help/teams/review-assignment-notifications.png)
11. Haz clic en **Guardar cambios**.

### Inhabilitar una tarea de revisión de código
{% data reusables.profile.access_org %}
{% data reusables.user_settings.access_org %}
{% data reusables.organizations.specific_team %}
{% data reusables.organizations.team_settings %}
5. Selecciona **Habilitar auto asignación** para eliminar la marca. ![Botón de tarea de revisión de código](/assets/images/help/teams/review-assignment-enable.png)
6. Haz clic en **Guardar cambios**.
