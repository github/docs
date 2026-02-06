com.android.media.swcodec�Ɔ�B	libEGL.soBlibbinder_ndk.soBlibc.soBlibcgrouprc.soBlibdl.soB	liblog.soBlibm.soBlibnativewindow.soB
libsync.soBlibvndksupport.so

<?xml version="1.0" encoding="utf-8" ?>
<!-- Copyright (C) 2014 The Android Open Source Project

     Licensed under the Apache License, Version 2.0 (the "License");
     you may not use this file except in compliance with the License.
     You may obtain a copy of the License at

          http://www.apache.org/licenses/LICENSE-2.0

     Unless required by applicable law or agreed to in writing, software
     distributed under the License is distributed on an "AS IS" BASIS,
     WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     See the License for the specific language governing permissions and
     limitations under the License.
-->

<MediaCodecs>
    <Settings>
        <!-- disable TV and telephony domains by default. These must be opted in by OEMs -->
        <Domain name="telephony" enabled="false" />
        <Domain name="tv" enabled="false" />
        <Variant name="slow-cpu" enabled="false" />
    </Settings>
    <Decoders>
        <MediaCodec name="c2.android.mp3.decoder" type="audio/mpeg">
            <Alias name="OMX.google.mp3.decoder" />
            <Limit name="channel-count" max="2" />
            <Limit name="sample-rate" ranges="8000,11025,12000,16000,22050,24000,32000,44100,48000" />
            <Limit name="bitrate" range="8000-320000" />
        </MediaCodec>
        <MediaCodec name="c2.android.amrnb.decoder" type="audio/3gpp">
            <Alias name="OMX.google.amrnb.decoder" />
            <Limit name="channel-count" max="1" />
            <Limit name="sample-rate" ranges="8000" />
            <Limit name="bitrate" range="4750-12200" />
        </MediaCodec>
        <MediaCodec name="c2.android.amrwb.decoder" type="audio/amr-wb">
            <Alias name="OMX.google.amrwb.decoder" />
            <Limit name="channel-count" max="1" />
            <Limit name="sample-rate" ranges="16000" />
            <Limit name="bitrate" range="6600-23850" />
        </MediaCodec>
        <MediaCodec name="c2.android.aac.decoder" type="audio/mp4a-latm">
            <Alias name="OMX.google.aac.decoder" />
            <Limit name="channel-count" max="8" />
            <Limit name="sample-rate" ranges="7350,8000,11025,12000,16000,22050,24000,32000,44100,48000" />
            <Limit name="bitrate" range="8000-960000" />
        </MediaCodec>
        <MediaCodec name="c2.android.g711.alaw.decoder" type="audio/g711-alaw">
            <Alias name="OMX.google.g711.alaw.decoder" />
            <Limit name="channel-count" max="6" />
            <Limit name="sample-rate" ranges="8000-48000" />
            <Limit name="bitrate" range="64000" />
        </MediaCodec>
        <MediaCodec name="c2.android.g711.mlaw.decoder" type="audio/g711-mlaw">
            <Alias name="OMX.google.g711.mlaw.decoder" />
            <Limit name="channel-count" max="6" />
            <Limit name="sample-rate" ranges="8000-48000" />
            <Limit name="bitrate" range="64000" />
        </MediaCodec>
        <MediaCodec name="c2.android.vorbis.decoder" type="audio/vorbis">
            <Alias name="OMX.google.vorbis.decoder" />
            <Limit name="channel-count" max="8" />
            <Limit name="sample-rate" ranges="8000-96000" />
            <Limit name="bitrate" range="32000-500000" />
        </MediaCodec>
        <MediaCodec name="c2.android.opus.decoder" type="audio/opus">
            <Alias name="OMX.google.opus.decoder" />
            <Limit name="channel-count" max="8" />
            <Limit name="sample-rate" ranges="8000,12000,16000,24000,48000" />
            <Limit name="bitrate" range="6000-510000" />
        </MediaCodec>
        <MediaCodec name="c2.android.raw.decoder" type="audio/raw">
            <Alias name="OMX.google.raw.decoder" />
            <Limit name="channel-count" max="8" />
            <Limit name="sample-rate" ranges="8000-96000" />
            <Limit name="bitrate" range="1-10000000" />
        </MediaCodec>
        <MediaCodec name="c2.android.flac.decoder" type="audio/flac">
            <Alias name="OMX.google.flac.decoder" />
            <Limit name="channel-count" max="8" />
            <Limit name="sample-rate" ranges="1-655350" />
            <Limit name="bitrate" range="1-21000000" />
        </MediaCodec>
        <MediaCodec name="c2.android.gsm.decoder" type="audio/gsm" domain="telephony">
            <Alias name="OMX.google.gsm.decoder" />
            <Limit name="channel-count" max="1" />
            <Limit name="sample-rate" ranges="8000" />
            <Limit name="bitrate" range="13000" />
        </MediaCodec>
        <MediaCodec name="c2.android.mpeg4.decoder" type="video/mp4v-es">
            <Alias name="OMX.google.mpeg4.decoder" />
            <!-- profiles and levels:  ProfileSimple : Level3 -->
            <Limit name="size" min="2x2" max="352x288" />
            <Limit name="alignment" value="2x2" />
            <Limit name="block-size" value="16x16" />
            <Limit name="blocks-per-second" range="12-11880" />
            <Limit name="bitrate" range="1-384000" />
            <Feature name="adaptive-playback" />
        </MediaCodec>
        <MediaCodec name="c2.android.h263.decoder" type="video/3gpp">
            <Alias name="OMX.google.h263.decoder" />
            <!-- profiles and levels:  ProfileBaseline : Level30, ProfileBaseline : Level45
                    ProfileISWV2 : Level30, ProfileISWV2 : Level45 -->
            <Limit name="size" min="2x2" max="352x288" />
            <Limit name="alignment" value="2x2" />
            <Limit name="bitrate" range="1-384000" />
            <Feature name="adaptive-playback" />
        </MediaCodec>
        <MediaCodec name="c2.android.avc.decoder" type="video/avc" variant="slow-cpu,!slow-cpu">
            <Alias name="OMX.google.h264.decoder" />
            <Limit name="alignment" value="2x2" />
            <Limit name="block-size" value="16x16" />
            <Variant name="!slow-cpu">
                <Limit name="size" min="2x2" max="4080x4080" />
                <!-- profiles and levels:  ProfileHigh : Level52 -->
                <Limit name="block-count" range="1-32768" /> <!-- max 4096x2048 equivalent -->
                <Limit name="blocks-per-second" range="1-1966080" />
                <Limit name="bitrate" range="1-48000000" />
            </Variant>
            <Variant name="slow-cpu">
                <Limit name="size" min="2x2" max="2048x2048" />
                <!-- profiles and levels:  ProfileHigh : Level51 -->
                <Limit name="block-count" range="1-16384" />
                <Limit name="blocks-per-second" range="1-491520" />
                <Limit name="bitrate" range="1-40000000" />
            </Variant>
            <Feature name="adaptive-playback" />
        </MediaCodec>
        <MediaCodec name="c2.android.hevc.decoder" type="video/hevc" variant="slow-cpu,!slow-cpu">
            <Alias name="OMX.google.hevc.decoder" />
            <Limit name="alignment" value="2x2" />
            <Limit name="block-size" value="8x8" />
            <Variant name="!slow-cpu">
                <Limit name="size" min="2x2" max="4096x4096" />
                <!-- profiles and levels:  ProfileMain : MainTierLevel51 -->
                <Limit name="block-count" range="1-196608" /> <!-- max 4096x3072 -->
                <Limit name="blocks-per-second" range="1-2000000" />
                <Limit name="bitrate" range="1-10000000" />
            </Variant>
            <Variant name="slow-cpu">
                <Limit name="size" min="2x2" max="2048x2048" />
                <!-- profiles and levels:  ProfileMain : MainTierLevel51 -->
                <Limit name="block-count" range="1-65536" />
                <Limit name="blocks-per-second" range="1-491520" />
                <Limit name="bitrate" range="1-5000000" />
            </Variant>
            <Feature name="adaptive-playback" />
        </MediaCodec>
        <MediaCodec name="c2.android.vp8.decoder" type="video/x-vnd.on2.vp8" variant="slow-cpu,!slow-cpu">
            <Alias name="OMX.google.vp8.decoder" />
            <Limit name="size" min="2x2" max="2048x2048" />
            <Limit name="alignment" value="2x2" />
            <Limit name="block-size" value="16x16" />
            <Variant name="!slow-cpu">
                <Limit name="block-count" range="1-16384" />
                <Limit name="blocks-per-second" range="1-1000000" />
                <Limit name="bitrate" range="1-40000000" />
            </Variant>
            <Variant name="slow-cpu">
                <Limit name="block-count" range="1-8192" /> <!-- max 2048x1024 -->
                <Limit name="blocks-per-second" range="1-1000000" />
                <Limit name="bitrate" range="1-40000000" />
            </Variant>
            <Feature name="adaptive-playback" />
        </MediaCodec>
        <MediaCodec name="c2.android.vp9.decoder" type="video/x-vnd.on2.vp9" variant="slow-cpu,!slow-cpu">
            <Alias name="OMX.google.vp9.decoder" />
            <Limit name="alignment" value="2x2" />
            <Limit name="block-size" value="16x16" />
            <Variant name="!slow-cpu">
                <Limit name="size" min="2x2" max="2048x2048" />
                <Limit name="block-count" range="1-16384" />
                <Limit name="blocks-per-second" range="1-500000" />
                <Limit name="bitrate" range="1-40000000" />
            </Variant>
            <Variant name="slow-cpu">
                <Limit name="size" min="2x2" max="1280x1280" />
                <Limit name="block-count" range="1-3600" /> <!-- max 1280x720 -->
                <Limit name="blocks-per-second" range="1-108000" />
                <Limit name="bitrate" range="1-5000000" />
            </Variant>
            <Feature name="adaptive-playback" />
        </MediaCodec>
        <MediaCodec name="c2.android.av1.decoder" type="video/av01" variant="!slow-cpu">
            <Limit name="size" min="2x2" max="1920x1080" />
            <Limit name="alignment" value="2x2" />
            <Limit name="block-size" value="16x16" />
            <Limit name="block-count" range="1-16384" />
            <Limit name="blocks-per-second" range="1-2073600" />
            <Limit name="bitrate" range="1-120000000" />
            <Feature name="adaptive-playback" />
        </MediaCodec>
        <MediaCodec name="c2.android.mpeg2.decoder" type="video/mpeg2" domain="tv">
            <Alias name="OMX.google.mpeg2.decoder" />
            <!-- profiles and levels:  ProfileMain : LevelHL -->
            <Limit name="size" min="16x16" max="1920x1088" />
            <Limit name="alignment" value="2x2" />
            <Limit name="block-size" value="16x16" />
            <Limit name="blocks-per-second" range="1-244800" />
            <Limit name="bitrate" range="1-20000000" />
            <Feature name="adaptive-playback" />
        </MediaCodec>
    </Decoders>
    <Encoders>
        <MediaCodec name="c2.android.aac.encoder" type="audio/mp4a-latm">
            <Alias name="OMX.google.aac.encoder" />
            <Limit name="channel-count" max="6" />
            <Limit name="sample-rate" ranges="8000,11025,12000,16000,22050,24000,32000,44100,48000" />
            <!-- also may support 64000, 88200  and 96000 Hz -->
            <Limit name="bitrate" range="8000-960000" />
        </MediaCodec>
        <MediaCodec name="c2.android.amrnb.encoder" type="audio/3gpp">
            <Alias name="OMX.google.amrnb.encoder" />
            <Limit name="channel-count" max="1" />
            <Limit name="sample-rate" ranges="8000" />
            <Limit name="bitrate" range="4750-12200" />
            <Feature name="bitrate-modes" value="CBR" />
        </MediaCodec>
        <MediaCodec name="c2.android.amrwb.encoder" type="audio/amr-wb">
            <Alias name="OMX.google.amrwb.encoder" />
            <Limit name="channel-count" max="1" />
            <Limit name="sample-rate" ranges="16000" />
            <Limit name="bitrate" range="6600-23850" />
            <Feature name="bitrate-modes" value="CBR" />
        </MediaCodec>
        <MediaCodec name="c2.android.flac.encoder" type="audio/flac">
            <Alias name="OMX.google.flac.encoder" />
            <Limit name="channel-count" max="2" />
            <Limit name="sample-rate" ranges="1-655350" />
            <Limit name="bitrate" range="1-21000000" />
            <Limit name="complexity" range="0-8"  default="5" />
            <Feature name="bitrate-modes" value="CQ" />
        </MediaCodec>
        <MediaCodec name="c2.android.opus.encoder" type="audio/opus">
            <Limit name="channel-count" max="2" />
            <Limit name="sample-rate" ranges="8000,12000,16000,24000,48000" />
            <Limit name="bitrate" range="500-512000" />
            <Limit name="complexity" range="0-10"  default="5" />
            <Feature name="bitrate-modes" value="CBR" />
        </MediaCodec>
        <MediaCodec name="c2.android.h263.encoder" type="video/3gpp">
            <Alias name="OMX.google.h263.encoder" />
            <!-- profiles and levels:  ProfileBaseline : Level45 -->
            <Limit name="size" min="176x144" max="176x144" />
            <Limit name="alignment" value="16x16" />
            <Limit name="bitrate" range="1-128000" />
        </MediaCodec>
        <MediaCodec name="c2.android.mpeg4.encoder" type="video/mp4v-es">
            <Alias name="OMX.google.mpeg4.encoder" />
            <!-- profiles and levels:  ProfileCore : Level2 -->
            <Limit name="size" min="16x16" max="176x144" />
            <Limit name="alignment" value="16x16" />
            <Limit name="block-size" value="16x16" />
            <Limit name="blocks-per-second" range="12-1485" />
            <Limit name="bitrate" range="1-64000" />
        </MediaCodec>
        <MediaCodec name="c2.android.avc.encoder" type="video/avc" variant="slow-cpu,!slow-cpu">
            <Alias name="OMX.google.h264.encoder" />
            <Limit name="alignment" value="2x2" />
            <Limit name="block-size" value="16x16" />
            <Variant name="!slow-cpu">
                <Limit name="size" min="16x16" max="2048x2048" />
                <!-- profiles and levels:  ProfileBaseline : Level41 -->
                <Limit name="block-count" range="1-8192" /> <!-- max 2048x1024 -->
                <Limit name="blocks-per-second" range="1-245760" />
                <Limit name="bitrate" range="1-12000000" />
            </Variant>
            <Variant name="slow-cpu">
                <Limit name="size" min="16x16" max="1808x1808" />
                <!-- profiles and levels:  ProfileBaseline : Level3 -->
                <Limit name="block-count" range="1-1620" />
                <Limit name="blocks-per-second" range="1-40500" />
                <Limit name="bitrate" range="1-2000000" />
            </Variant>
            <Feature name="intra-refresh" />
        </MediaCodec>
        <MediaCodec name="c2.android.vp8.encoder" type="video/x-vnd.on2.vp8" variant="slow-cpu,!slow-cpu">
            <Alias name="OMX.google.vp8.encoder" />
            <Limit name="alignment" value="2x2" />
            <Limit name="block-size" value="16x16" />
            <Variant name="!slow-cpu">
                <Limit name="size" min="2x2" max="2048x2048" />
                <!-- profiles and levels:  ProfileMain : Level_Version0-3 -->
                <!-- 2016 devices can encode at about 10fps at this block count -->
                <Limit name="block-count" range="1-16384" />
                <Limit name="bitrate" range="1-40000000" />
            </Variant>
            <Variant name="slow-cpu">
                <Limit name="size" min="2x2" max="1280x1280" />
                <!-- profiles and levels:  ProfileMain : Level_Version0-3 -->
                <Limit name="block-count" range="1-3600" /> <!-- max 1280x720 -->
                <Limit name="bitrate" range="1-20000000" />
            </Variant>
            <Feature name="bitrate-modes" value="VBR,CBR" />
        </MediaCodec>
        <MediaCodec name="c2.android.hevc.encoder" type="video/hevc" variant="!slow-cpu">
            <!-- profiles and levels:  ProfileMain : MainTierLevel3 -->
            <Limit name="size" min="2x2" max="960x544" />
            <Limit name="alignment" value="2x2" />
            <Limit name="block-size" value="8x8" />
            <Limit name="block-count" range="1-8160" /> <!-- max 960x544 -->
            <Limit name="blocks-per-second" range="1-244880" />
            <Limit name="frame-rate" range="1-120" />
            <Limit name="bitrate" range="1-10000000" />
            <Limit name="complexity" range="0-10"  default="0" />
            <Limit name="quality" range="0-100"  default="80" />
            <Feature name="bitrate-modes" value="VBR,CBR,CQ" />
        </MediaCodec>
        <MediaCodec name="c2.android.vp9.encoder" type="video/x-vnd.on2.vp9" variant="!slow-cpu">
            <Alias name="OMX.google.vp9.encoder" />
            <!-- profiles and levels:  ProfileMain : Level_Version0-3 -->
            <Limit name="size" min="2x2" max="2048x2048" />
            <Limit name="alignment" value="2x2" />
            <Limit name="block-size" value="16x16" />
            <!-- 2016 devices can encode at about 8fps at this block count -->
            <Limit name="block-count" range="1-3600" /> <!-- max 1280x720 -->
            <Limit name="bitrate" range="1-40000000" />
            <Feature name="bitrate-modes" value="VBR,CBR" />
        </MediaCodec>
    </Encoders>
</MediaCodecs>

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