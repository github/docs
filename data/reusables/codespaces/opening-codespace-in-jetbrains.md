If you have set the JetBrains Gateway as your default editor, then the Gateway will launch automatically when you open a codespace from {% data variables.product.prodname_dotcom_the_website %}.

If the JetBrains Gateway is not your default editor, you can still open a codespace in JetBrains by going to the "Your codespaces" page at [github.com/codespaces](https://github.com/codespaces) and clicking the ellipsis (...) to the right of the codespace you want to open. For more information, see "[AUTOTITLE](/codespaces/developing-in-codespaces/opening-an-existing-codespace?tool=webui)."

Alternatively, you can also open the JetBrains Gateway and select an existing codespace, as described in the following procedure.

1. Open the JetBrains Gateway application.
1. Click **Connect to {% data variables.product.prodname_codespaces %}**.

   ![Screenshot of the JetBrains Gateway home page, showing the "Connect to Codespaces" button.](/assets/images/help/codespaces/jetbrains-gateway-connect.png)

1. In the "Your Codespaces" list, click the codespace you want to work in.

   ![Screenshot of the "Your Codespaces" list in the JetBrains Gateway.](/assets/images/help/codespaces/jetbrains-gateway-codespaces.png)

1. In the "Available IDEs" list, click the JetBrains IDE you want to use. The Gateway will remember your choice the next time you connect to a codespace.

   ![Screenshot the "Select IDE" dropdown list in the JetBrains Gateway. The mouse pointer is pointing to "IntelliJ IDEA."](/assets/images/help/codespaces/jetbrains-gateway-ides.png)

1. Click **Connect**.

   {% note %}

   **Notes**:

   - If you chose Rider as your JetBrains IDE and the repository contains multiple solution files, the "Set Solution Path" dialog is displayed prompting you to choose which solution you want to work in. Choose a solution file from the dropdown menu and click **OK**.

     If the repository doesn't have a solution file, Rider opens in a basic project directory view and will have limited capabilities. For instance, you won't get .NET-specific code navigation. If there is just a single solution file in the repository it will be used automatically, without the prompt being displayed. For more information, see "[Create and open projects and solutions](https://www.jetbrains.com/help/rider/Creating_and_Opening_Projects_and_Solutions.html)" in the JetBrains documentation.<br><br>

   - If you are running a firewall, then the first time you connect to a remote resource you may be prompted to allow the JetBrains Gateway to communicate across your network.

   {% endnote %}
