1. Na bifurcação pertencente a usuários, se você não desejar permitir que qualquer pessoa com acesso push ao repositório upstream faça alterações no seu pull request, desmarque **Permitir edições de mantenedores**.

    {% warning %}

    **Aviso:** Se a sua bifurcação contiver fluxos de trabalho {% data variables.product.prodname_actions %}, a opção será **Permitir edições e acesso a segredos por parte dos mantenedores**. Permitir edições no branch de uma bifurcação que contém fluxos de trabalho do {% data variables.product.prodname_actions %} também permite que um mantenedor edite os fluxos de trabalho do repositório bifurcado, o que pode potencialmente revelar valores de segredos e conceder acesso a outros branches.

    {% endwarning %}
