macOS "Catalina", "Big Sur", "Monterey", or "Ventura" users should run the following commands in the Terminal, where `${extraction-root}` is the path to the directory where you will extract the {% data variables.product.prodname_codeql_cli %} zip archive:

1. `mv ~/Downloads/codeql\*.zip ${extraction-root}`
1. `cd ${extraction-root}`
1. `/usr/bin/xattr -c codeql\*.zip`
1. `unzip codeql\*.zip`
