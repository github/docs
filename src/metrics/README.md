# Kusto tooling

CLI tools to fetch data from the Kusto API.

## Installation and authentication

1. Install the Azure CLI with `brew install azure-cli`.
    * If you have the option to **not** update all your brew packages, choose that, or it will take a really long time.
1. Run `az login`.
    * You'll have to run `az login` whenever your session expires. The sessions are fairly long lasting.
1. Enter your `<username>@githubazure.com` credentials.
    * These will get cached for future logins.
1. At the prompt in Terminal asking which subscription you want to use, just press Enter to choose the default.
1. Open or create an `.env` file in the root directory of your checkout (this file is already in `.gitignore`).
1. Add the `KUSTO_CLUSTER` and `KUSTO_DATABASE` values to the `.env`.
    ```
    KUSTO_CLUSTER='<value>'
    KUSTO_DATABASE='<value>'
    ```