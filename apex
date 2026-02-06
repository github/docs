# Copyright (C) 2019 The Android Open Source Project
#
# Bionic loader config file for the media swcodec APEX.
#
# There are no versioned APEX paths here - this APEX module does not support
# having several versions mounted.

dir.swcodec = /apex/com.android.media.swcodec/bin/

[swcodec]
additional.namespaces = platform,sphal

###############################################################################
# "default" namespace
#
# This namespace is for the binaries and libraries on the swcodec APEX.
###############################################################################

namespace.default.isolated = true
namespace.default.visible = true

namespace.default.search.paths      = /apex/com.android.media.swcodec/${LIB}
namespace.default.asan.search.paths = /apex/com.android.media.swcodec/${LIB}

# Below lines are required to be able to access libs in APEXes which are
# actually symlinks to the files under /system/lib. The symlinks exist for
# bundled APEXes to reduce space.
namespace.default.permitted.paths   = /system/${LIB}
namespace.default.asan.permitted.paths = /system/${LIB}

namespace.default.links = platform

# TODO: replace the following when apex has a way to auto-generate this list
# namespace.default.link.platform.shared_libs  = %LLNDK_LIBRARIES%
# namespace.default.link.platform.shared_libs += %SANITIZER_RUNTIME_LIBRARIES%
namespace.default.link.platform.shared_libs = libEGL.so:libGLESv1_CM.so:libGLESv2.so:libGLESv3.so:libRS.so:libandroid_net.so:libc.so:libcgrouprc.so:libclang_rt.asan-aarch64-android.so:libclang_rt.asan-arm-android.so:libclang_rt.hwasan-aarch64-android.so:libclang_rt.asan-i686-android.so:libclang_rt.asan-x86_64-android.so:libdl.so:libft2.so:liblog.so:libm.so:libmediandk.so:libnativewindow.so:libneuralnetworks.so:libsync.so:libvndksupport.so:libdl_android.so:libvulkan.so:libbinder_ndk.so

###############################################################################
# "platform" namespace
#
# This namespace is for linking to LLNDK and ASAN libraries on the system.
###############################################################################

namespace.platform.isolated = true

namespace.platform.search.paths  = /system/${LIB}
namespace.platform.asan.search.paths  = /data/asan/system/${LIB}
namespace.platform.asan.search.paths +=           /system/${LIB}

# TODO(b/140790209): These directories are wrong in R and later because they
# only contain Bionic internal libraries dependencies that should not be
# accessed from the outside. However, they may be necessary for APEX builds that
# are pushed to Q. Remove them as soon as Q compatibility is no longer required.
namespace.platform.search.paths += /apex/com.android.runtime/${LIB}
namespace.platform.asan.search.paths += /apex/com.android.runtime/${LIB}

# /system/lib/libc.so, etc are symlinks to /apex/com.android.lib/lib/bionic/libc.so, etc.
# Add /apex/... path to the permitted paths because linker uses realpath(3)
# to check the accessibility of the lib. We could add this to search.paths
# instead but that makes the resolution of bionic libs be dependent on
# the order of /system/lib and /apex/... in search.paths. If /apex/...
# is after /system/lib, then /apex/... is never tried because libc.so
# is always found in /system/lib but fails to pass the accessibility test
# because of its realpath.  It's better to not depend on the ordering if
# possible.
namespace.platform.permitted.paths = /apex/com.android.runtime/${LIB}/bionic
namespace.platform.asan.permitted.paths = /apex/com.android.runtime/${LIB}/bionic

###############################################################################
# "sphal" namespace
#
###############################################################################
namespace.sphal.isolated = true
namespace.sphal.visible = true

# Keep the below in sync with "sphal" namespace in system's /etc/ld.config.txt
# Codec2 has dependencies on some SP-hals (eg. android.hardware.graphics.mapper@2.0)
# These are dlopen'ed by libvndksupport.so.
namespace.sphal.search.paths  = /odm/${LIB}
namespace.sphal.search.paths += /vendor/${LIB}

namespace.sphal.permitted.paths  = /odm/${LIB}
namespace.sphal.permitted.paths += /vendor/${LIB}
namespace.sphal.permitted.paths += /vendor/${LIB}/hw
namespace.sphal.permitted.paths += /system/vendor/${LIB}

namespace.sphal.asan.search.paths  = /data/asan/odm/${LIB}
namespace.sphal.asan.search.paths +=           /odm/${LIB}
namespace.sphal.asan.search.paths += /data/asan/vendor/${LIB}
namespace.sphal.asan.search.paths +=           /vendor/${LIB}

namespace.sphal.asan.permitted.paths  = /data/asan/odm/${LIB}
namespace.sphal.asan.permitted.paths +=           /odm/${LIB}
namespace.sphal.asan.permitted.paths += /data/asan/vendor/${LIB}
namespace.sphal.asan.permitted.paths +=           /vendor/${LIB}

# Keep the below in sync with "vndk" namespace in system's /etc/ld.config.txt
# System's sphal namespace links to vndk namespace for %VNDK_SAMEPROCESS_LIBRARIES%,
# since we don't have a good way to auto-expand %VNDK_SAMEPROCESS_LIBRARIES%,
# we'll add the vndk paths below.

namespace.sphal.search.paths += /odm/${LIB}/vndk-sp
namespace.sphal.search.paths += /vendor/${LIB}/vndk-sp
namespace.sphal.search.paths += /system/${LIB}/vndk-sp${VNDK_VER}

namespace.sphal.permitted.paths += /odm/${LIB}/hw
namespace.sphal.permitted.paths += /odm/${LIB}/egl
namespace.sphal.permitted.paths += /vendor/${LIB}/hw
namespace.sphal.permitted.paths += /vendor/${LIB}/egl
namespace.sphal.permitted.paths += /system/vendor/${LIB}/hw
namespace.sphal.permitted.paths += /system/vendor/${LIB}/egl
# This is exceptionally required since android.hidl.memory@1.0-impl.so is here
namespace.sphal.permitted.paths += /system/${LIB}/vndk-sp${VNDK_VER}/hw

namespace.sphal.asan.search.paths += /data/asan/odm/${LIB}/vndk-sp
namespace.sphal.asan.search.paths +=           /odm/${LIB}/vndk-sp
namespace.sphal.asan.search.paths += /data/asan/vendor/${LIB}/vndk-sp
namespace.sphal.asan.search.paths +=           /vendor/${LIB}/vndk-sp
namespace.sphal.asan.search.paths += /data/asan/system/${LIB}/vndk-sp${VNDK_VER}
namespace.sphal.asan.search.paths +=           /system/${LIB}/vndk-sp${VNDK_VER}

namespace.sphal.asan.permitted.paths += /data/asan/odm/${LIB}/hw
namespace.sphal.asan.permitted.paths +=           /odm/${LIB}/hw
namespace.sphal.asan.permitted.paths += /data/asan/odm/${LIB}/egl
namespace.sphal.asan.permitted.paths +=           /odm/${LIB}/egl
namespace.sphal.asan.permitted.paths += /data/asan/vendor/${LIB}/hw
namespace.sphal.asan.permitted.paths +=           /vendor/${LIB}/hw
namespace.sphal.asan.permitted.paths += /data/asan/vendor/${LIB}/egl
namespace.sphal.asan.permitted.paths +=           /vendor/${LIB}/egl

namespace.sphal.asan.permitted.paths += /data/asan/system/${LIB}/vndk-sp${VNDK_VER}/hw
namespace.sphal.asan.permitted.paths +=           /system/${LIB}/vndk-sp${VNDK_VER}/hw

# Once in this namespace, access to libraries in /system/lib is restricted. Only
# libs listed here can be used.
namespace.sphal.links = platform

# TODO: replace the following when apex has a way to auto-generate this list
# namespace.sphal.link.platform.shared_libs  = %LLNDK_LIBRARIES%
# namespace.sphal.link.platform.shared_libs += %SANITIZER_RUNTIME_LIBRARIES%
namespace.sphal.link.platform.shared_libs = libEGL.so:libGLESv1_CM.so:libGLESv2.so:libGLESv3.so:libRS.so:libandroid_net.so:libc.so:libcgrouprc.so:libclang_rt.asan-aarch64-android.so:libclang_rt.asan-arm-android.so:libclang_rt.hwasan-aarch64-android.so:libclang_rt.asan-i686-android.so:libclang_rt.asan-x86_64-android.so:libdl.so:libft2.so:liblog.so:libm.so:libmediandk.so:libnativewindow.so:libneuralnetworks.so:libsync.so:libvndksupport.so:libvulkan.so:libbinder_ndk.so

# Add a link for libz.so which is llndk on devices where VNDK is not enforced.
namespace.sphal.link.platform.shared_libs += libz.so

# With VNDK APEX, /system/${LIB}/vndk-sp${VNDK_VER} is a symlink to the following.
# Add /apex/... path to the permitted paths because linker uses realpath(3)
# to check the accessibility of the lib.
namespace.sphal.permitted.paths += /apex/com.android.vndk.${VNDK_APEX_VER}/${LIB}
namespace.sphal.asan.permitted.paths += /apex/com.android.vndk.${VNDK_APEX_VER}/${LIB}