4. Run the shell script `install.sh`.
5. To enable SSL, enter the SSL Cert (`.crt/.cer/.pem`). If you don't want to enable SSL, leave blank.
6. If you chose to enable SSL, enter the SSL Key (`.key`). Otherwise, leave blank.
5. Enter the hostname, which is the same URL you used for the application server when creating the {% data variables.product.prodname_github_app %}.
6. The installation will take a few minutes to run. When complete, you will see a message printed to the terminal.
    ```
    Installation complete
    Run /opt/insights/scripts/start.sh to start GitHub Insights
    ```
