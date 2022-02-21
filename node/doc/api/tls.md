TLSv1.3 cipher suites supported
Labels
crypto
doc
question
tls
Comments
@thernstig thernstig commented yesterday • 
Affected URL(s)
https://nodejs.org/api/tls.html

node/doc/api/tls.md

Lines 360 to 370 in 53364a2

 There are only five TLSv1.3 cipher suites: 
  
 * `'TLS_AES_256_GCM_SHA384'` 
 * `'TLS_CHACHA20_POLY1305_SHA256'` 
 * `'TLS_AES_128_GCM_SHA256'` 
 * `'TLS_AES_128_CCM_SHA256'` 
 * `'TLS_AES_128_CCM_8_SHA256'` 
  
 The first three are enabled by default. The two `CCM`-based suites are supported 
 by TLSv1.3 because they may be more performant on constrained systems, but they 
 are not enabled by default since they offer less security. 
However executing tls.getCiphers() shows:

[
  'aes128-gcm-sha256',
  'aes128-sha',
  'aes128-sha256',
  'aes256-gcm-sha384',
  'aes256-sha',
  'aes256-sha256',
  'dhe-psk-aes128-cbc-sha',
  'dhe-psk-aes128-cbc-sha256',
  'dhe-psk-aes128-gcm-sha256',
  'dhe-psk-aes256-cbc-sha',
  'dhe-psk-aes256-cbc-sha384',
  'dhe-psk-aes256-gcm-sha384',
  'dhe-psk-chacha20-poly1305',
  'dhe-rsa-aes128-gcm-sha256',
  'dhe-rsa-aes128-sha',
  'dhe-rsa-aes128-sha256',
  'dhe-rsa-aes256-gcm-sha384',
  'dhe-rsa-aes256-sha',
  'dhe-rsa-aes256-sha256',
  'dhe-rsa-chacha20-poly1305',
  'ecdhe-ecdsa-aes128-gcm-sha256',
  'ecdhe-ecdsa-aes128-sha',
  'ecdhe-ecdsa-aes128-sha256',
  'ecdhe-ecdsa-aes256-gcm-sha384',
  'ecdhe-ecdsa-aes256-sha',
  'ecdhe-ecdsa-aes256-sha384',
  'ecdhe-ecdsa-chacha20-poly1305',
  'ecdhe-psk-aes128-cbc-sha',
  'ecdhe-psk-aes128-cbc-sha256',
  'ecdhe-psk-aes256-cbc-sha',
  'ecdhe-psk-aes256-cbc-sha384',
  'ecdhe-psk-chacha20-poly1305',
  'ecdhe-rsa-aes128-gcm-sha256',
  'ecdhe-rsa-aes128-sha',
  'ecdhe-rsa-aes128-sha256',
  'ecdhe-rsa-aes256-gcm-sha384',
  'ecdhe-rsa-aes256-sha',
  'ecdhe-rsa-aes256-sha384',
  'ecdhe-rsa-chacha20-poly1305',
  'psk-aes128-cbc-sha',
  'psk-aes128-cbc-sha256',
  'psk-aes128-gcm-sha256',
  'psk-aes256-cbc-sha',
  'psk-aes256-cbc-sha384',
  'psk-aes256-gcm-sha384',
  'psk-chacha20-poly1305',
  'rsa-psk-aes128-cbc-sha',
  'rsa-psk-aes128-cbc-sha256',
  'rsa-psk-aes128-gcm-sha256',
  'rsa-psk-aes256-cbc-sha',
  'rsa-psk-aes256-cbc-sha384',
  'rsa-psk-aes256-gcm-sha384',
  'rsa-psk-chacha20-poly1305',
  'srp-aes-128-cbc-sha',
  'srp-aes-256-cbc-sha',
  'srp-rsa-aes-128-cbc-sha',
  'srp-rsa-aes-256-cbc-sha',
  'tls_aes_128_ccm_8_sha256',
  'tls_aes_128_ccm_sha256',
  'tls_aes_128_gcm_sha256',
  'tls_aes_256_gcm_sha384',
  'tls_chacha20_poly1305_sha256'
