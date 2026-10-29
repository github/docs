To install llama.cpp on Windows with the CUDA build:

1. In your browser, go to the releases page of the llama.cpp repository: [https://github.com/ggml-org/llama.cpp/releases](https://github.com/ggml-org/llama.cpp/releases?utm_source=llama-windows-install-cta&utm_medium=docs&utm_campaign=universe-2026).
1. Choose the release you want to install—for example, [b11803](https://github.com/ggml-org/llama.cpp/releases?q=flint&expanded=true&utm_source=local-model-prerequisite-flint&utm_medium=docs&utm_campaign=universe-2026#release-b11803).
1. Click the links to download both files for the Windows CUDA 13.4 ARM64 build:

   * Windows arm64 (CUDA 13)
   * CUDA 13.4 DLLs

1. Open Command Prompt and create the installation folder:

   ```shell copy
   mkdir "%LOCALAPPDATA%\Programs\llama.cpp\BUILD-cuda-13.4-arm64"
   ```

   Replacing `BUILD` the the build number—for example, `b11803`.

1. Extract all files from both ZIP files directly into this folder. If you use **Extract All** in File Explorer, change the destination to this folder, because by default File Explorer creates a separate subfolder for each ZIP file. When you're done, the folder should contain a large number of files, including `llama-server.exe`, `cudart64_13.dll`, `cublas64_13.dll`, and `cublasLt64_13.dll`, with no subfolders.
1. Set the `LLAMACPP_SERVER_PATH` environment variable:

   ```shell copy
   setx LLAMACPP_SERVER_PATH "%LOCALAPPDATA%\Programs\llama.cpp\BUILD-cuda-13.4-arm64\llama-server.exe"
   ```

   Replacing `BUILD` the the build number.

1. Close Command Prompt and open a new Command Prompt window. If the {% data variables.copilot.github_copilot_app_short %} or {% data variables.product.prodname_vscode_shortname %} is already open, restart it. If {% data variables.copilot.copilot_cli_short %} is running, exit it and start it again from a new terminal window.
1. To check the installation, run:

   ```shell copy
   "%LLAMACPP_SERVER_PATH%" --list-devices
   ```
