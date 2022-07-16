1. In the administrative shell, create a PGP key. Make note of the email address and key ID.

    ```bash{:copy}
    gpg --full-generate-key --pinentry-mode=loopback
    ```
    
    - Use the default key type and at least `4096` bits with no expiry. 
    - Use `web-flow` as the username. 
