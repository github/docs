2025-09-07T19:46:22.5324473Z ##[group]Run jdx/mise-action@5ac50f778e26fac95da98d50503682459e86d566
2025-09-07T19:46:22.5325813Z with:
2025-09-07T19:46:22.5326194Z   install: true
2025-09-07T19:46:22.5326625Z   cache: true
2025-09-07T19:46:22.5327041Z   cache_save: true
2025-09-07T19:46:22.5327517Z   cache_key_prefix: mise-v0
2025-09-07T19:46:22.5328120Z   experimental: false
2025-09-07T19:46:22.5328613Z   log_level: info
2025-09-07T19:46:22.5329051Z   reshim: false
2025-09-07T19:46:22.5329843Z   github_token: ***
2025-09-07T19:46:22.5330469Z   fetch_from_github: true
2025-09-07T19:46:22.5331150Z   env: true
2025-09-07T19:46:22.5331573Z env:
2025-09-07T19:46:22.5332347Z   CARGO_TARGET_AARCH64_UNKNOWN_LINUX_GNU_LINKER: aarch64-linux-gnu-gcc
2025-09-07T19:46:22.5333665Z ##[endgroup]
2025-09-07T19:46:22.6956155Z ##[group]Restoring mise cache
2025-09-07T19:46:22.6998210Z [command]/usr/bin/ldd --version
2025-09-07T19:46:22.7042254Z ldd (Ubuntu GLIBC 2.39-0ubuntu8.5) 2.39
2025-09-07T19:46:22.7044998Z Copyright (C) 2024 Free Software Foundation, Inc.
2025-09-07T19:46:22.7046614Z This is free software; see the source for copying conditions.  There is NO
2025-09-07T19:46:22.7048314Z warranty; not even for MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
2025-09-07T19:46:22.7049639Z Written by Roland McGrath and Ulrich Drepper.
2025-09-07T19:46:23.1622188Z Cache hit for: mise-v0-linux-x64-c7929cefc7fad56205f9ab3607befbcbde31e3638f2ac73c59c439468ec7dcfa
2025-09-07T19:46:24.5494898Z Received 0 of 126018155 (0.0%), 0.0 MBs/sec
2025-09-07T19:46:25.5499581Z Received 121823851 of 126018155 (96.7%), 58.1 MBs/sec
2025-09-07T19:46:25.6544069Z Received 126018155 of 126018155 (100.0%), 57.1 MBs/sec
2025-09-07T19:46:25.6545183Z Cache Size: ~120 MB (126018155 B)
2025-09-07T19:46:25.6570819Z [command]/usr/bin/tar -xf /home/runner/work/_temp/4e5e46f3-c98d-4e84-aad6-3593aa3f571c/cache.tzst -P -C /home/runner/work/csskit/csskit --use-compress-program unzstd
2025-09-07T19:46:26.4624162Z Cache restored successfully
2025-09-07T19:46:26.4873974Z mise cache restored from key: mise-v0-linux-x64-c7929cefc7fad56205f9ab3607befbcbde31e3638f2ac73c59c439468ec7dcfa
2025-09-07T19:46:26.4879564Z ##[group]Setting env vars
2025-09-07T19:46:26.4880076Z Setting MISE_LOG_LEVEL=info
2025-09-07T19:46:26.4883229Z Setting GITHUB_TOKEN=***
2025-09-07T19:46:26.4883926Z Setting MISE_TRUSTED_CONFIG_PATHS=/home/runner/work/csskit/csskit
2025-09-07T19:46:26.4884985Z Setting MISE_YES=1
2025-09-07T19:46:26.4885548Z Adding /home/runner/.local/share/mise/shims to PATH
2025-09-07T19:46:26.4886570Z ##[group]Running mise --version
2025-09-07T19:46:26.4907272Z [command]/home/runner/.local/share/mise/bin/mise --version
2025-09-07T19:46:26.4998148Z 2025.9.5 linux-x64 (2025-09-06)
2025-09-07T19:46:26.5039168Z ##[endgroup]
2025-09-07T19:46:26.5039795Z ##[group]Running mise install 
2025-09-07T19:46:26.5050684Z [command]/home/runner/.local/share/mise/bin/mise install
2025-09-07T19:46:26.5202948Z  [2mmise [0m all tools are installed
2025-09-07T19:46:26.5241207Z ##[endgroup]
2025-09-07T19:46:26.5241714Z ##[group]Running mise ls
2025-09-07T19:46:26.5252051Z [command]/home/runner/.local/share/mise/bin/mise ls
2025-09-07T19:46:26.5401308Z cargo:cargo-edit    0.13.6            ~/work/csskit/csskit/.mise.toml  0.13.6
2025-09-07T19:46:26.5402099Z cargo:cargo-expand  1.0.114           ~/work/csskit/csskit/.mise.toml  1.0.114
2025-09-07T19:46:26.5402814Z cargo:cargo-insta   1.43.1            ~/work/csskit/csskit/.mise.toml  1.43.1
2025-09-07T19:46:26.5403473Z cargo:samply        0.13.1            ~/work/csskit/csskit/.mise.toml  0.13.1
2025-09-07T19:46:26.5404062Z deno                2.4.5             ~/work/csskit/csskit/.mise.toml  2.4.5
2025-09-07T19:46:26.5404818Z node                24.7.0            ~/work/csskit/csskit/.mise.toml  24.7.0
2025-09-07T19:46:26.5405403Z rust                1.88.0 (symlink)  ~/work/csskit/csskit/.mise.toml  1.88.0
2025-09-07T19:46:26.5419619Z ##[endgroup]
2025-09-07T19:46:26.5421765Z ##[group]Exporting mise environment variables
2025-09-07T19:46:26.5615456Z [command]/home/runner/.local/share/mise/bin/mise env --json
2025-09-07T19:46:26.5763865Z {
2025-09-07T19:46:26.5765022Z   "CARGO_HOME": "/home/runner/.cargo",
2025-09-07T19:46:26.5765797Z   "DENO_INSTALL_ROOT": "/home/runner/.local/share/mise/installs/deno/2.4.5/.deno",
2025-09-07T19:46:26.5768687Z   "PATH": "/home/runner/.cargo/bin:/home/runner/.local/share/mise/installs/deno/2.4.5/bin:/home/runner/.local/share/mise/installs/deno/2.4.5/.deno/bin:/home/runner/.local/share/mise/installs/node/24.7.0/bin:/home/runner/.local/share/mise/installs/cargo-cargo-insta/1.43.1/bin:/home/runner/.local/share/mise/installs/cargo-cargo-expand/1.0.114/bin:/home/runner/.local/share/mise/installs/cargo-cargo-edit/0.13.6/bin:/home/runner/.local/share/mise/installs/cargo-samply/0.13.1/bin:/home/runner/.local/share/mise/bin:/snap/bin:/home/runner/.local/bin:/opt/pipx_bin:/home/runner/.cargo/bin:/home/runner/.config/composer/vendor/bin:/usr/local/.ghcup/bin:/home/runner/.dotnet/tools:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin:/usr/games:/usr/local/games:/snap/bin",
2025-09-07T19:46:26.5771670Z   "RUSTUP_HOME": "/home/runner/.rustup",
2025-09-07T19:46:26.5771930Z   "RUSTUP_TOOLCHAIN": "1.88.0"
2025-09-07T19:46:26.5772138Z }
2025-09-07T19:46:26.5784859Z ##[endgroup]

