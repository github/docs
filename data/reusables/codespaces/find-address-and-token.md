### Finding the address to connect to

1. Open the terminal in your codespace.
1. Click the **PORTS** tab. This lists all of the ports you have forwarded.
1. Right-click the port you want to connect to and click **Copy Local Address**.

   ![Screenshot of the pop-up menu for a forwarded port with the "Copy Local Address" option highlighted with an orange outline.](/assets/images/help/codespaces/copy-local-address.png)

1. Paste the copied address somewhere for later use.

### Finding the GITHUB_TOKEN

1. In the terminal in your codespace, enter `echo $GITHUB_TOKEN`.

   The token is a string beginning `ghu_`.

1. Copy the token.

   {% note %}

   **Important**: Don't share this access token with anyone.

   {% endnote %}
