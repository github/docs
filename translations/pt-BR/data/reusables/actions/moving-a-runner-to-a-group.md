If you don't specify a runner group during the registration process, your new runners are automatically assigned to the default group, and can then be moved to another group.

{% data reusables.actions.self-hosted-runner-navigate-to-org-enterprise %}
{% ifversion ghec or ghes > 3.3 or ghae-issue-5091 %}
1. Na lista de "Executores", clique no executor que você deseja configurar.
2. Selecione o menu suspenso **Grupo do executor**.
3. Em "Transferir executor para o grupo", escolha um grupo de destino para o executor.
{% elsif ghae or ghes < 3.4 %}
1. Na seção "Grupos de executores" de {% ifversion ghes or ghae %}{% endif %} na página de configurações. localize o grupo atual do executor que você deseja transferir e expanda a lista de integrantes do grupo. ![Visualizar integrantes do grupo de executores](/assets/images/help/settings/actions-org-runner-group-members.png)
2. Marque a caixa de seleção ao lado do executor auto-hospedado e, em seguida, clique em **Mover para o grupo** para ver os destinos disponíveis. ![Mover um membro do grupo de executores](/assets/images/help/settings/actions-org-runner-group-member-move.png)
3. Para mover o executor, clique no grupo de destino. ![Mover um membro do grupo de executores](/assets/images/help/settings/actions-org-runner-group-member-move-destination.png)
{% endif %}