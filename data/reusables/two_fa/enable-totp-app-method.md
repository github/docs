1. Under "Scan the QR code", do one of the following:

    * Scan the QR code with your mobile device's app. After scanning, the app displays a six-digit code that you can enter on {% data variables.product.product_name %}.
    * If you can't scan the QR code, click **setup key** to see a code, the TOTP secret, that you can manually enter in your TOTP app instead.

   ![Screenshot of the "Setup authenticator app" section of the 2FA settings. A link, labeled "setup key", is highlighted in orange.](/assets/images/help/2fa/ghes-3.8-and-higher-2fa-wizard-app-click-code.png)

1. The TOTP application saves your account on {% data variables.location.product_location %} and generates a new authentication code every few seconds. On {% data variables.product.product_name %}, type the code into the field under "Verify the code from the app."
