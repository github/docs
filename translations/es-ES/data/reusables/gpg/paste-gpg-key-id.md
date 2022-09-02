1. Para configurar tu llave de firmado GPG primaria en Git, pega el siguiente texto, substituyendo la ID de llave primaria GPG que te gustaría utilizar. En este ejemplo, el ID de la llave GPG es `3AA5C34371567BD2`:
   ```shell
   $ git config --global user.signingkey <em>3AA5C34371567BD2</em>
   ```

   Como alternativa, cuando compartas una subllave, incluye el sufijo `!`. En este ejemplo, la ID de subllave GPG es `4BB6D45482678BE3`:
   ```shell
   $ git config --global user.signingkey <em>4BB6D45482678BE3</em>!
   ```
