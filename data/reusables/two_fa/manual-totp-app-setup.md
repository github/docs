If you are unable to scan the setup QR code or wish to setup a TOTP app manually and require the parameters encoded in the QR code, they are:

* Type: `TOTP`
* Label: `GitHub:<username>` where `<username>` is your handle on {% data variables.product.prodname_dotcom %}, for example `monalisa`
* Secret: This is the encoded setup key, shown if you click "Setup key"  during configuration
* Issuer: `GitHub`
* Algorithm: The default of SHA1 is used
* Digits: The default of 6 is used
* Period: The default of 30 (seconds) is used
