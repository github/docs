[00:00:00] Build started
[00:00:01] git clone -q --depth=5 https://github.com/ethereum/go-ethereum.git /home/appveyor/projects/go-ethereum
[00:00:03] git fetch -q origin +refs/pull/29449/merge:
[00:00:23] git checkout -qf FETCH_HEAD
[00:00:24] Running "install" scripts
[00:00:24] git submodule update --init --depth 1 --recursive
[00:00:24] Submodule 'evm-benchmarks' (https://github.com/ipsilon/evm-benchmarks) registered for path 'tests/evm-benchmarks'
[00:00:24] Submodule 'tests' (https://github.com/ethereum/tests) registered for path 'tests/testdata'
[00:00:24] Cloning into '/home/appveyor/projects/go-ethereum/tests/evm-benchmarks'...
[00:00:25] Cloning into '/home/appveyor/projects/go-ethereum/tests/testdata'...
[00:01:13] Submodule path 'tests/evm-benchmarks': checked out 'd8b88f4046a87d6b902378cef752591f95427b43'
[00:01:14] remote: Total 0 (delta 0), reused 0 (delta 0), pack-reused 0
[00:01:14] remote: Enumerating objects: 11831, done.
[00:01:14] remote: Counting objects:   0% (1/11831)
[00:01:14] remote: Counting objects:   1% (119/11831)
[00:01:14] remote: Counting objects:   2% (237/11831)
[00:01:14] remote: Counting objects:   3% (355/11831)
[00:01:14] remote: Counting objects:   4% (474/11831)
[00:01:14] remote: Counting objects:   5% (592/11831)
[00:01:14] remote: Counting objects:   6% (710/11831)
[00:01:14] remote: Counting objects:   7% (829/11831)
[00:01:14] remote: Counting objects:   8% (947/11831)
[00:01:14] remote: Counting objects:   9% (1065/11831)
[00:01:14] remote: Counting objects:  10% (1184/11831)
[00:01:14] remote: Counting objects:  11% (1302/11831)
[00:01:14] remote: Counting objects:  12% (1420/11831)
[00:01:14] remote: Counting objects:  13% (1539/11831)
[00:01:14] remote: Counting objects:  14% (1657/11831)
[00:01:14] remote: Counting objects:  15% (1775/11831)
[00:01:14] remote: Counting objects:  16% (1893/11831)
[00:01:14] remote: Counting objects:  17% (2012/11831)
[00:01:14] remote: Counting objects:  18% (2130/11831)
[00:01:14] remote: Counting objects:  19% (2248/11831)
[00:01:14] remote: Counting objects:  20% (2367/11831)
[00:01:14] remote: Counting objects:  21% (2485/11831)
[00:01:14] remote: Counting objects:  22% (2603/11831)
[00:01:14] remote: Counting objects:  23% (2722/11831)
[00:01:14] remote: Counting objects:  24% (2840/11831)
[00:01:14] remote: Counting objects:  25% (2958/11831)
[00:01:14] remote: Counting objects:  26% (3077/11831)
[00:01:14] remote: Counting objects:  27% (3195/11831)
[00:01:14] remote: Counting objects:  28% (3313/11831)
[00:01:14] remote: Counting objects:  29% (3431/11831)
[00:01:14] remote: Counting objects:  30% (3550/11831)
[00:01:14] remote: Counting objects:  31% (3668/11831)
[00:01:14] remote: Counting objects:  32% (3786/11831)
[00:01:14] remote: Counting objects:  33% (3905/11831)
[00:01:14] remote: Counting objects:  34% (4023/11831)
[00:01:14] remote: Counting objects:  35% (4141/11831)
[00:01:14] remote: Counting objects:  36% (4260/11831)
[00:01:14] remote: Counting objects:  37% (4378/11831)
[00:01:14] remote: Counting objects:  38% (4496/11831)
[00:01:14] remote: Counting objects:  39% (4615/11831)
[00:01:14] remote: Counting objects:  40% (4733/11831)
[00:01:14] remote: Counting objects:  41% (4851/11831)
[00:01:14] remote: Counting objects:  42% (4970/11831)
[00:01:14] remote: Counting objects:  43% (5088/11831)
[00:01:14] remote: Counting objects:  44% (5206/11831)
[00:01:14] remote: Counting objects:  45% (5324/11831)
[00:01:14] remote: Counting objects:  46% (5443/11831)
[00:01:14] remote: Counting objects:  47% (5561/11831)
[00:01:14] remote: Counting objects:  48% (5679/11831)
[00:01:14] remote: Counting objects:  49% (5798/11831)
[00:01:14] remote: Counting objects:  50% (5916/11831)
[00:01:14] remote: Counting objects:  51% (6034/11831)
[00:01:14] remote: Counting objects:  52% (6153/11831)
[00:01:14] remote: Counting objects:  53% (6271/11831)
[00:01:14] remote: Counting objects:  54% (6389/11831)
[00:01:14] remote: Counting objects:  55% (6508/11831)
[00:01:14] remote: Counting objects:  56% (6626/11831)
[00:01:14] remote: Counting objects:  57% (6744/11831)
[00:01:14] remote: Counting objects:  58% (6862/11831)
[00:01:14] remote: Counting objects:  59% (6981/11831)
[00:01:14] remote: Counting objects:  60% (7099/11831)
[00:01:14] remote: Counting objects:  61% (7217/11831)
[00:01:14] remote: Counting objects:  62% (7336/11831)
[00:01:14] remote: Counting objects:  63% (7454/11831)
[00:01:14] remote: Counting objects:  64% (7572/11831)
[00:01:14] remote: Counting objects:  65% (7691/11831)
[00:01:14] remote: Counting objects:  66% (7809/11831)
[00:01:14] remote: Counting objects:  67% (7927/11831)
[00:01:14] remote: Counting objects:  68% (8046/11831)
[00:01:14] remote: Counting objects:  69% (8164/11831)
[00:01:14] remote: Counting objects:  70% (8282/11831)
[00:01:14] remote: Counting objects:  71% (8401/11831)
[00:01:14] remote: Counting objects:  72% (8519/11831)
[00:01:14] remote: Counting objects:  73% (8637/11831)
[00:01:14] remote: Counting objects:  74% (8755/11831)
[00:01:14] remote: Counting objects:  75% (8874/11831)
[00:01:14] remote: Counting objects:  76% (8992/11831)
[00:01:14] remote: Counting objects:  77% (9110/11831)
[00:01:14] remote: Counting objects:  78% (9229/11831)
[00:01:14] remote: Counting objects:  79% (9347/11831)
[00:01:14] remote: Counting objects:  80% (9465/11831)
[00:01:14] remote: Counting objects:  81% (9584/11831)
[00:01:14] remote: Counting objects:  82% (9702/11831)
[00:01:14] remote: Counting objects:  83% (9820/11831)
[00:01:14] remote: Counting objects:  84% (9939/11831)
[00:01:14] remote: Counting objects:  85% (10057/11831)
[00:01:14] remote: Counting objects:  86% (10175/11831)
[00:01:14] remote: Counting objects:  87% (10293/11831)
[00:01:14] remote: Counting objects:  88% (10412/11831)
[00:01:14] remote: Counting objects:  89% (10530/11831)
[00:01:14] remote: Counting objects:  90% (10648/11831)
[00:01:14] remote: Counting objects:  91% (10767/11831)
[00:01:14] remote: Counting objects:  92% (10885/11831)
[00:01:14] remote: Counting objects:  93% (11003/11831)
[00:01:14] remote: Counting objects:  94% (11122/11831)
[00:01:14] remote: Counting objects:  95% (11240/11831)
[00:01:14] remote: Counting objects:  96% (11358/11831)
[00:01:14] remote: Counting objects:  97% (11477/11831)
[00:01:14] remote: Counting objects:  98% (11595/11831)
[00:01:14] remote: Counting objects:  99% (11713/11831)
[00:01:14] remote: Counting objects: 100% (11831/11831)
[00:01:14] remote: Counting objects: 100% (11831/11831), done.
[00:01:14] remote: Compressing objects:   0% (1/1576)
[00:01:14] remote: Compressing objects:   1% (16/1576)
[00:01:15] remote: Compressing objects:   2% (32/1576)
[00:01:15] remote: Compressing objects:   3% (48/1576)
[00:01:15] remote: Compressing objects:   4% (64/1576)
[00:01:16] remote: Compressing objects:   5% (79/1576)
[00:01:16] remote: Compressing objects:   5% (93/1576)
[00:01:16] remote: Compressing objects:   6% (95/1576)
[00:01:16] remote: Compressing objects:   7% (111/1576)
[00:01:16] remote: Compressing objects:   8% (127/1576)
[00:01:17] remote: Compressing objects:   8% (136/1576)
[00:01:17] remote: Compressing objects:   9% (142/1576)
[00:01:17] remote: Compressing objects:  10% (158/1576)
[00:01:18] remote: Compressing objects:  11% (174/1576)
[00:01:18] remote: Compressing objects:  11% (187/1576)
[00:01:18] remote: Compressing objects:  12% (190/1576)
[00:01:18] remote: Compressing objects:  13% (205/1576)
[00:01:18] remote: Compressing objects:  14% (221/1576)
[00:01:18] remote: Compressing objects:  15% (237/1576)
[00:01:18] remote: Compressing objects:  16% (253/1576)
[00:01:18] remote: Compressing objects:  17% (268/1576)
[00:01:18] remote: Compressing objects:  18% (284/1576)
[00:01:18] remote: Compressing objects:  19% (300/1576)
[00:01:18] remote: Compressing objects:  20% (316/1576)
[00:01:18] remote: Compressing objects:  21% (331/1576)
[00:01:18] remote: Compressing objects:  22% (347/1576)
[00:01:18] remote: Compressing objects:  23% (363/1576)
[00:01:18] remote: Compressing objects:  24% (379/1576)
[00:01:18] remote: Compressing objects:  25% (394/1576)
[00:01:18] remote: Compressing objects:  26% (410/1576)
[00:01:18] remote: Compressing objects:  27% (426/1576)
[00:01:18] remote: Compressing objects:  28% (442/1576)
[00:01:18] remote: Compressing objects:  29% (458/1576)
[00:01:18] remote: Compressing objects:  30% (473/1576)
[00:01:18] remote: Compressing objects:  31% (489/1576)
[00:01:18] remote: Compressing objects:  32% (505/1576)
[00:01:18] remote: Compressing objects:  33% (521/1576)
[00:01:18] remote: Compressing objects:  34% (536/1576)
[00:01:18] remote: Compressing objects:  35% (552/1576)
[00:01:18] remote: Compressing objects:  36% (568/1576)
[00:01:18] remote: Compressing objects:  37% (584/1576)
[00:01:19] remote: Compressing objects:  38% (599/1576)
[00:01:20] remote: Compressing objects:  38% (604/1576)
[00:01:20] remote: Compressing objects:  38% (614/1576)
[00:01:20] remote: Compressing objects:  39% (615/1576)
[00:01:20] remote: Compressing objects:  40% (631/1576)
[00:01:20] remote: Compressing objects:  41% (647/1576)
[00:01:20] remote: Compressing objects:  42% (662/1576)
[00:01:21] remote: Compressing objects:  42% (666/1576)
[00:01:22] remote: Compressing objects:  43% (678/1576)
[00:01:22] remote: Compressing objects:  43% (687/1576)
[00:01:22] remote: Compressing objects:  44% (694/1576)
[00:01:22] remote: Compressing objects:  45% (710/1576)
[00:01:22] remote: Compressing objects:  46% (725/1576)
[00:01:23] remote: Compressing objects:  47% (741/1576)
[00:01:24] remote: Compressing objects:  47% (751/1576)
[00:01:24] remote: Compressing objects:  47% (752/1576)
[00:01:25] remote: Compressing objects:  48% (757/1576)
[00:01:25] remote: Compressing objects:  48% (763/1576)
[00:01:25] remote: Compressing objects:  49% (773/1576)
[00:01:26] remote: Compressing objects:  50% (788/1576)
[00:01:26] remote: Compressing objects:  50% (791/1576)
[00:01:26] remote: Compressing objects:  51% (804/1576)
[00:01:26] remote: Compressing objects:  52% (820/1576)
[00:01:26] remote: Compressing objects:  53% (836/1576)
[00:01:26] remote: Compressing objects:  53% (848/1576)
[00:01:26] remote: Compressing objects:  54% (852/1576)
[00:01:27] remote: Compressing objects:  55% (867/1576)
[00:01:29] remote: Compressing objects:  55% (878/1576)
[00:01:30] remote: Compressing objects:  55% (880/1576)
[00:01:31] remote: Compressing objects:  55% (882/1576)
[00:01:32] remote: Compressing objects:  56% (883/1576)
[00:01:33] remote: Compressing objects:  56% (884/1576)
[00:01:34] remote: Compressing objects:  56% (885/1576)
[00:01:34] remote: Compressing objects:  56% (888/1576)
[00:01:35] remote: Compressing objects:  57% (899/1576)
[00:01:35] remote: Compressing objects:  57% (908/1576)
[00:01:35] remote: Compressing objects:  58% (915/1576)
[00:01:35] remote: Compressing objects:  59% (930/1576)
[00:01:36] remote: Compressing objects:  60% (946/1576)
[00:01:37] remote: Compressing objects:  60% (950/1576)
[00:01:37] remote: Compressing objects:  60% (953/1576)
[00:01:38] remote: Compressing objects:  61% (962/1576)
[00:01:39] remote: Compressing objects:  61% (967/1576)
[00:01:39] remote: Compressing objects:  61% (974/1576)
[00:01:39] remote: Compressing objects:  62% (978/1576)
[00:01:39] remote: Compressing objects:  63% (993/1576)
[00:01:39] remote: Compressing objects:  64% (1009/1576)
[00:01:39] remote: Compressing objects:  65% (1025/1576)
[00:01:39] remote: Compressing objects:  66% (1041/1576)
[00:01:39] remote: Compressing objects:  67% (1056/1576)
[00:01:39] remote: Compressing objects:  68% (1072/1576)
[00:01:39] remote: Compressing objects:  69% (1088/1576)
[00:01:39] remote: Compressing objects:  70% (1104/1576)
[00:01:39] remote: Compressing objects:  71% (1119/1576)
[00:01:39] remote: Compressing objects:  72% (1135/1576)
[00:01:39] remote: Compressing objects:  73% (1151/1576)
[00:01:39] remote: Compressing objects:  74% (1167/1576)
[00:01:39] remote: Compressing objects:  75% (1182/1576)
[00:01:39] remote: Compressing objects:  76% (1198/1576)
[00:01:39] remote: Compressing objects:  77% (1214/1576)
[00:01:39] remote: Compressing objects:  78% (1230/1576)
[00:01:39] remote: Compressing objects:  79% (1246/1576)
[00:01:39] remote: Compressing objects:  80% (1261/1576)
[00:01:39] remote: Compressing objects:  81% (1277/1576)
[00:01:39] remote: Compressing objects:  82% (1293/1576)
[00:01:39] remote: Compressing objects:  83% (1309/1576)
[00:01:39] remote: Compressing objects:  84% (1324/1576)
[00:01:39] remote: Compressing objects:  85% (1340/1576)
[00:01:39] remote: Compressing objects:  86% (1356/1576)
[00:01:39] remote: Compressing objects:  87% (1372/1576)
[00:01:39] remote: Compressing objects:  88% (1387/1576)
[00:01:39] remote: Compressing objects:  89% (1403/1576)
[00:01:39] remote: Compressing objects:  90% (1419/1576)
[00:01:39] remote: Compressing objects:  91% (1435/1576)
[00:01:39] remote: Compressing objects:  92% (1450/1576)
[00:01:39] remote: Compressing objects:  93% (1466/1576)
[00:01:39] remote: Compressing objects:  94% (1482/1576)
[00:01:39] remote: Compressing objects:  95% (1498/1576)
[00:01:39] remote: Compressing objects:  96% (1513/1576)
[00:01:39] remote: Compressing objects:  97% (1529/1576)
[00:01:39] remote: Compressing objects:  98% (1545/1576)
[00:01:39] remote: Compressing objects:  99% (1561/1576)
[00:01:39] remote: Compressing objects: 100% (1576/1576)
[00:01:39] remote: Compressing objects: 100% (1576/1576), done.
[00:01:40] Receiving objects:   0% (1/9501)
[00:01:40] Receiving objects:   0% (87/9501), 404.00 KiB | 345.00 KiB/s
[00:01:41] Receiving objects:   1% (96/9501), 404.00 KiB | 345.00 KiB/s
[00:01:42] Receiving objects:   1% (120/9501), 556.00 KiB | 284.00 KiB/s
[00:01:42] Receiving objects:   2% (191/9501), 652.00 KiB | 258.00 KiB/s
[00:01:42] Receiving objects:   2% (211/9501), 1.29 MiB | 427.00 KiB/s  
[00:01:42] Receiving objects:   3% (286/9501), 1.29 MiB | 427.00 KiB/s
[00:01:42] Receiving objects:   4% (381/9501), 1.29 MiB | 427.00 KiB/s
[00:01:42] Receiving objects:   5% (476/9501), 1.29 MiB | 427.00 KiB/s
[00:01:42] Receiving objects:   6% (571/9501), 1.29 MiB | 427.00 KiB/s
[00:01:43] Receiving objects:   7% (666/9501), 1.29 MiB | 427.00 KiB/s
[00:01:43] Receiving objects:   8% (761/9501), 4.60 MiB | 1.28 MiB/s  
[00:01:43] Receiving objects:   8% (766/9501), 4.60 MiB | 1.28 MiB/s
[00:01:45] Receiving objects:   9% (856/9501), 5.14 MiB | 1.25 MiB/s
[00:01:45] Receiving objects:   9% (881/9501), 5.61 MiB | 1.02 MiB/s
[00:01:45] Receiving objects:  10% (951/9501), 5.61 MiB | 1.02 MiB/s
[00:01:46] Receiving objects:  11% (1046/9501), 5.61 MiB | 1.02 MiB/s
[00:01:46] Receiving objects:  11% (1091/9501), 6.65 MiB | 997.00 KiB/s
[00:01:46] Receiving objects:  11% (1097/9501), 6.65 MiB | 997.00 KiB/s
[00:01:47] Receiving objects:  12% (1141/9501), 6.93 MiB | 984.00 KiB/s
[00:01:47] Receiving objects:  12% (1199/9501), 7.16 MiB | 1003.00 KiB/s
[00:01:47] Receiving objects:  13% (1236/9501), 7.16 MiB | 1003.00 KiB/s
[00:01:47] Receiving objects:  14% (1331/9501), 7.16 MiB | 1003.00 KiB/s
[00:01:47] Receiving objects:  15% (1426/9501), 7.16 MiB | 1003.00 KiB/s
[00:01:47] Receiving objects:  16% (1521/9501), 7.16 MiB | 1003.00 KiB/s
[00:01:47] Receiving objects:  17% (1616/9501), 7.16 MiB | 1003.00 KiB/s
[00:01:47] Receiving objects:  18% (1711/9501), 7.16 MiB | 1003.00 KiB/s
[00:01:47] Receiving objects:  19% (1806/9501), 7.16 MiB | 1003.00 KiB/s
[00:01:48] Receiving objects:  20% (1901/9501), 7.16 MiB | 1003.00 KiB/s
[00:01:48] Receiving objects:  21% (1996/9501), 9.08 MiB | 1.29 MiB/s   
[00:01:49] Receiving objects:  21% (2074/9501), 9.08 MiB | 1.29 MiB/s
[00:01:49] Receiving objects:  22% (2091/9501), 9.96 MiB | 1.28 MiB/s
[00:01:49] Receiving objects:  22% (2184/9501), 9.96 MiB | 1.28 MiB/s
[00:01:49] Receiving objects:  23% (2186/9501), 9.96 MiB | 1.28 MiB/s
[00:01:49] Receiving objects:  24% (2281/9501), 9.96 MiB | 1.28 MiB/s
[00:01:50] Receiving objects:  25% (2376/9501), 9.96 MiB | 1.28 MiB/s
[00:01:51] Receiving objects:  25% (2395/9501), 12.97 MiB | 1.13 MiB/s
[00:01:52] Receiving objects:  25% (2396/9501), 13.85 MiB | 1.08 MiB/s
[00:01:53] Receiving objects:  25% (2398/9501), 15.57 MiB | 1.31 MiB/s
[00:01:54] Receiving objects:  25% (2401/9501), 16.09 MiB | 1.36 MiB/s
[00:01:55] Receiving objects:  25% (2402/9501), 18.32 MiB | 1.54 MiB/s
[00:01:55] Receiving objects:  25% (2406/9501), 20.03 MiB | 1.50 MiB/s
[00:01:55] Receiving objects:  26% (2471/9501), 20.03 MiB | 1.50 MiB/s
[00:01:55] Receiving objects:  27% (2566/9501), 20.03 MiB | 1.50 MiB/s
[00:01:55] Receiving objects:  28% (2661/9501), 20.03 MiB | 1.50 MiB/s
[00:01:56] Receiving objects:  29% (2756/9501), 22.61 MiB | 1.91 MiB/s
[00:01:56] Receiving objects:  30% (2851/9501), 22.61 MiB | 1.91 MiB/s
[00:01:56] Receiving objects:  31% (2946/9501), 22.61 MiB | 1.91 MiB/s
[00:01:56] Receiving objects:  32% (3041/9501), 22.61 MiB | 1.91 MiB/s
[00:01:56] Receiving objects:  33% (3136/9501), 22.61 MiB | 1.91 MiB/s
[00:01:56] Receiving objects:  33% (3197/9501), 24.09 MiB | 2.08 MiB/s
[00:01:57] Receiving objects:  34% (3231/9501), 24.09 MiB | 2.08 MiB/s
[00:01:57] Receiving objects:  35% (3326/9501), 24.31 MiB | 1.76 MiB/s
[00:01:57] Receiving objects:  36% (3421/9501), 25.12 MiB | 1.94 MiB/s
[00:01:57] Receiving objects:  36% (3438/9501), 25.12 MiB | 1.94 MiB/s
[00:01:57] Receiving objects:  37% (3516/9501), 25.12 MiB | 1.94 MiB/s
[00:01:57] Receiving objects:  38% (3611/9501), 25.12 MiB | 1.94 MiB/s
[00:01:57] Receiving objects:  39% (3706/9501), 25.12 MiB | 1.94 MiB/s
[00:01:57] Receiving objects:  40% (3801/9501), 25.12 MiB | 1.94 MiB/s
[00:01:57] Receiving objects:  41% (3896/9501), 25.12 MiB | 1.94 MiB/s
[00:01:57] Receiving objects:  42% (3991/9501), 25.12 MiB | 1.94 MiB/s
[00:01:57] Receiving objects:  43% (4086/9501), 25.12 MiB | 1.94 MiB/s
[00:01:57] Receiving objects:  44% (4181/9501), 25.12 MiB | 1.94 MiB/s
[00:01:58] Receiving objects:  45% (4276/9501), 25.12 MiB | 1.94 MiB/s
[00:01:58] Receiving objects:  46% (4371/9501), 25.85 MiB | 1.86 MiB/s
[00:01:58] Receiving objects:  46% (4400/9501), 25.85 MiB | 1.86 MiB/s
[00:01:58] Receiving objects:  47% (4466/9501), 25.85 MiB | 1.86 MiB/s
[00:01:58] Receiving objects:  48% (4561/9501), 25.85 MiB | 1.86 MiB/s
[00:01:58] Receiving objects:  49% (4656/9501), 25.85 MiB | 1.86 MiB/s
[00:01:58] Receiving objects:  50% (4751/9501), 25.85 MiB | 1.86 MiB/s
[00:01:58] Receiving objects:  51% (4846/9501), 25.85 MiB | 1.86 MiB/s
[00:01:58] Receiving objects:  52% (4941/9501), 25.85 MiB | 1.86 MiB/s
[00:01:58] Receiving objects:  53% (5036/9501), 25.85 MiB | 1.86 MiB/s
[00:01:58] Receiving objects:  54% (5131/9501), 26.54 MiB | 1.92 MiB/s
[00:01:59] Receiving objects:  55% (5226/9501), 26.54 MiB | 1.92 MiB/s
[00:01:59] Receiving objects:  56% (5321/9501), 26.54 MiB | 1.92 MiB/s
[00:01:59] Receiving objects:  57% (5416/9501), 26.54 MiB | 1.92 MiB/s
[00:01:59] Receiving objects:  58% (5511/9501), 26.54 MiB | 1.92 MiB/s
[00:01:59] Receiving objects:  59% (5606/9501), 26.54 MiB | 1.92 MiB/s
[00:02:00] Receiving objects:  59% (5656/9501), 27.09 MiB | 1.76 MiB/s
[00:02:01] Receiving objects:  59% (5658/9501), 27.18 MiB | 1.66 MiB/s
[00:02:02] Receiving objects:  59% (5660/9501), 27.36 MiB | 854.00 KiB/s
[00:02:03] Receiving objects:  59% (5664/9501), 27.45 MiB | 581.00 KiB/s
[00:02:03] Receiving objects:  60% (5701/9501), 27.59 MiB | 554.00 KiB/s
[00:02:03] Receiving objects:  61% (5796/9501), 27.59 MiB | 554.00 KiB/s
[00:02:03] Receiving objects: @Edgarruiz8585