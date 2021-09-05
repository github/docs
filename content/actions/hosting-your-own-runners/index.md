
# Create a folder under the drive root
$ mkdir actions-runner; cd actions-runner# Download the latest runner package
$ Invoke-WebRequest -Uri https://github.com/actions/runner/releases/download/v2.281.1/actions-runner-win-x64-2.281.1.zip -OutFile actions-runner-win-x64-2.281.1.zip# Optional: Validate the hash
$ if((Get-FileHash -Path actions-runner-win-x64-2.281.1.zip -Algorithm SHA256).Hash.ToUpper() -ne 'b8dccfef39c5d696443d98edd1ee57881075066bb62adef0a344fcb11bd19f1b'.ToUpper()){ throw 'Computed checksum did not match' }# Extract the installer
$ Add-Type -AssemblyName System.IO.Compression.FileSystem ; [System.IO.Compression.ZipFile]::ExtractToDirectory("$PWD/actions-runner-win-x64-2.281.1.zip", "$PWD")
Configure
# Create the runner and start the configuration experience
$ ./config.cmd --url https://github.com/Huruf-Timbul-Bandung-Vk7-Advertising/Jasa-Neon-Box-Bandung-Murah --token AVOZH5XGCM6TWAN4DM4YJSTBGUKCQ# Run it!
$ ./run.cmd
Using your self-hosted runner
# Use this YAML in your workflow file for each job
runs-on: self-hosted
