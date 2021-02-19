##### Pull-Request-Ereignisse für geforkte Repositorys

{% note %}

**Hinweis:** Workflows werden nicht für private Basis-Repositorys ausgeführt, wenn Du einen Pull Request aus einem geforkten Repository heraus öffnest.

{% endnote %}

Wenn Sie einen Pull Request an das Basis-Repository aus einem geforkten Repository heraus erstellen, sendet {% data variables.product.prodname_dotcom %} das Ereignis `pull_request` an das Basis-Repository, und im geforkten Repository treten keine Pull-Request-Ereignisse ein.

Workflows werden standardmäßig nicht für geforkte Repositorys ausgeführt. Du musst GitHub Actions auf der Registerkarte **Actions** (Aktionen) im geforkten Repository aktivieren.

{% data reusables.actions.forked-secrets %} The permissions for the `GITHUB_TOKEN` in forked repositories is read-only. Weitere Informationen findest Du unter „[Authentifizierung mit dem GITHUB_TOKEN](/actions/configuring-and-managing-workflows/authenticating-with-the-github_token)."
