# Copyright (C) 2019 The Android Open Source Project
#
# Bionic loader config file for the Conscrypt APEX.

dir.conscrypt = /apex/com.android.conscrypt/bin/

[conscrypt]
additional.namespaces = platform

# This configuration is only intended to support bin/boringssl_self_test{32,64}
# loading libcrypto.so from the APEX.
#
# If there is a binary that needs the APEX exported library libjavacrypto.so
# then this config should be replaced by the full namespace configs for the
# "conscrypt" namespace in system/core/rootdir/etc/ld.config*.txt and its
# dependencies "platform" and "runtime".

namespace.default.search.paths      = /apex/com.android.conscrypt/${LIB}
namespace.default.asan.search.paths = /apex/com.android.conscrypt/${LIB}
namespace.default.permitted.paths = /system/${LIB}
namespace.default.asan.permitted.paths = /system/${LIB}
namespace.default.links = platform
namespace.default.link.platform.shared_libs  = libc.so
namespace.default.link.platform.shared_libs += libm.so
namespace.default.link.platform.shared_libs += libdl.so
namespace.default.link.platform.shared_libs += liblog.so
namespace.default.link.platform.shared_libs += libclang_rt.hwasan-aarch64-android.so

###############################################################################
# "platform" namespace
#
# Corresponds to the default namespace in /system/etc/ld.config.txt, but
# minimized to support the dependencies above.
###############################################################################
namespace.platform.isolated = true

namespace.platform.search.paths = /system/${LIB}
namespace.platform.asan.search.paths = /data/asan/system/${LIB}

# /system/lib/libc.so, etc are symlinks to
# /apex/com.android.runtime/lib/bionic/libc.so, etc. Add the path to the
# permitted paths because linker uses realpath(3) to check the accessibility
# of the lib. We could add this to search.paths instead but that makes the
# resolution of bionic libs be dependent on the order of /system/lib and
# /apex/.../lib/bionic in search.paths. If the latter is after the former,
# then the latter is never tried because libc.so is always found in
# /system/lib but fails to pass the accessibility test because of its realpath.
# It's better to not depend on the ordering if possible.
namespace.platform.permitted.paths       = /apex/com.android.runtime/${LIB}/bionic
namespace.platform.asan.permitted.paths  = /apex/com.android.runtime/${LIB}/bionic