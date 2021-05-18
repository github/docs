{% tip %}

**Dicas**:
- Se as revisões necessárias estiverem habilitadas e um colaborador com acesso de _gravação_, _admin_ ou _proprietário_ ao repositório enviar uma revisão solicitando alterações, o pull request não poderá ser mesclado até que o mesmo colaborador envie outra revisão aprovando as alterações no pull request.
- Proprietários e administradores do repositório podem fazer merge de um pull request mesmo que não tenham recebido uma revisão de aprovação; ou se um revisor que solicitou alterações saiu da organização ou estiver indisponível.
- Se as revisões necessárias e o descarte de uma revisão obsoleta estiverem habilitados e um commit de modificação de código for enviado para o branch de um pull request aprovado, a aprovação será ignorada. O pull request deve ser revisado e aprovado novamente antes de poder ser mesclado.
- Quando vários pull requests abertos têm um branch principal que aponta para o mesmo commit, você não conseguirá mesclá-los se um ou ambos tiverem uma revisão pendente ou rejeitada.
- Pull request authors cannot approve their own pull requests.

{% endtip %}
