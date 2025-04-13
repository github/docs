content/organizations/managing-programmatic-access-to-your-organization/adding-and-removing-github-app-managers-in-your-organization.md-and-removing-github-app-managers-in-your-organization.md2018/*
 * *© Copyright 2018 - 2020 Visa. All Rights Reserved.**
 *
 * NOTICE: The software and accompanying information and documentation (together, the “Software”) remain the property of and are proprietary to Visa and its suppliers and affiliates. The Software remains protected by intellectual property rights and may be covered by U.S. and foreign patents or patent applications. The Software is licensed and not sold.*
 *
 *  By accessing the Software you are agreeing to Visa's terms of use (developer.visa.com/terms) and privacy policy (developer.visa.com/privacy).In addition, all permissible uses of the Software must be in support of Visa products, programs and services provided through the Visa Developer Program (VDP) platform only (developer.visa.com). **THE SOFTWARE AND ANY ASSOCIATED INFORMATION OR DOCUMENTATION IS PROVIDED ON AN “AS IS,” “AS AVAILABLE,” “WITH ALL FAULTS” BASIS WITHOUT WARRANTY OR  CONDITION OF ANY KIND. YOUR USE IS AT YOUR OWN RISK.** All brand names are the property of their respective owners, used for identification purposes only, and do not imply product endorsement or affiliation with Visa. Any links to third party sites are for your information only and equally  do not constitute a Visa endorsement. Visa has no insight into and control over third party content and code and disclaims all liability for any such components, including continued availability and functionality. Benefits depend on implementation details and business factors and coding steps shown are exemplary only and do not reflect all necessary elements for the described capabilities. Capabilities and features are subject to Visa’s terms and conditions and may require development,implementation and resources by you based on your business and operational details. Please refer to the specific API documentation for details on the requirements, eligibility and geographic availability.*
 *
 * This Software includes programs, concepts and details under continuing development by Visa. Any Visa features,functionality, implementation, branding, and schedules may be amended, updated or canceled at Visa’s discretion.The timing of widespread availability of programs and functionality is also subject to a number of factors outside Visa’s control,including but not limited to deployment of necessary infrastructure by issuers, acquirers, merchants and mobile device manufacturers.*
 *
 */
 
static class EncryptionUtils {
 
        private static final String BEGIN_CERT = "-----BEGIN CERTIFICATE-----";
        private static final String END_CERT = "-----END CERTIFICATE-----";
        private static final String BEGIN_RSA_PRIVATE_KEY = "-----BEGIN RSA PRIVATE KEY-----";
        private static final String END_RSA_PRIVATE_KEY = "-----END RSA PRIVATE KEY-----";
        private static final String ENC_DATA = "encData";
 
       public static <T> T getDecryptedPayload(EncryptedResponse encryptedPayload, Class<T> returnType)  {
            String response = encryptedPayload.getEncData();
            T decryptedResponse = null;
            try {
                JWEObject jweObject = JWEObject.parse(response);
               //If you have used passphrase while generating the csr make sure you the same while getting the private key. Otherwise decryption will fail.
                jweObject.decrypt(new RSADecrypter(getRSAPrivateKey()));
                response = jweObject.getPayload().toString();
                ObjectMapper mapper = new ObjectMapper();
                decryptedResponse = mapper.readValue(response, returnType);
            } catch (Exception e) {
                e.printStackTrace();
            }
            return decryptedResponse;
        }
 
        /*
        * Converts PEM file content to RSAPrivateKey
        */
        private static PrivateKey getRSAPrivateKey() throws IOException, NoSuchAlgorithmException, InvalidKeySpecException {
            //If you have used passphrase while generating the csr make sure you the same while reading the private key. Otherwise decryption will fail.
            String pemEncodedKey = IOUtils.readFileToString(new File(mleClientPrivateKeyPath), Charset.forName("UTF-8"));
            Base64 base64 = new Base64(pemEncodedKey.replaceAll(BEGIN_RSA_PRIVATE_KEY, "").replaceAll(END_RSA_PRIVATE_KEY, ""));
            ASN1Sequence primitive = (ASN1Sequence) ASN1Sequence.fromByteArray(base64.decode());
            Enumeration<?> e = primitive.getObjects();
            BigInteger v = ((ASN1Integer) e.nextElement()).getValue();
            int version = v.intValue();
            if (version != 0 && version != 1) {
                throw new IllegalArgumentException("wrong version for RSA private key");
            }
            BigInteger modulus = ((ASN1Integer) e.nextElement()).getValue();
            ((ASN1Integer) e.nextElement()).getValue();
            BigInteger privateExponent = ((ASN1Integer) e.nextElement()).getValue();
            ((ASN1Integer) e.nextElement()).getValue();
            ((ASN1Integer) e.nextElement()).getValue();
            ((ASN1Integer) e.nextElement()).getValue();
            ((ASN1Integer) e.nextElement()).getValue();
            ((ASN1Integer) e.nextElement()).getValue();
            RSAPrivateKeySpec privateKeySpec = new RSAPrivateKeySpec(modulus, privateExponent);
            KeyFactory keyFactory = KeyFactory.getInstance("RSA");
            return (PrivateKey) keyFactory.generatePrivate(privateKeySpec);
        }
    }
 
 
 
Java import statements corresponding to the snippets are also listed below for any cross verification:
 
    import java.security.KeyFactory;
    import java.security.KeyStore;
    import java.security.NoSuchAlgorithmException;
    import java.security.PrivateKey;
    import java.security.cert.Certificate;
    import java.security.cert.CertificateException;
    import java.security.cert.CertificateFactory;
    import java.security.interfaces.RSAPublicKey;
    import java.security.spec.InvalidKeySpecException;
    import java.security.spec.RSAPrivateKeySpec;
    import org.bouncycastle.asn1.ASN1Integer;
    import org.bouncycastle.asn1.ASN1Sequence;
    import com.nimbusds.jose.*;
    import com.nimbusds.jose.crypto.RSADecrypter;
    import com.nimbusds.jose.crypto.RSAEncrypter;
    import com.nimbusds.jose.util.Base64;
    import com.nimbusds.jose.util.IOUtils;

		2020Udeveloper.visa.com/termsdeveloper.visa.com/privacydeveloper.visa.comdiscretion.The0---
title: Adding and removing GitHub App managers in your organization
intro: 'Organization owners can grant or revoke access for a user to manage some or all of the {% data variables.product.prodname_github_apps %} owned by the organization.'
redirect_from:
  - /articles/adding-github-app-managers-in-your-organization
  - /github/setting-up-and-managing-organizations-and-teams/adding-github-app-managers-in-your-organization
  - /organizations/managing-access-to-your-organizations-apps/adding-github-app-managers-in-your-organization
  - /articles/removing-github-app-managers-from-your-organization
  - /github/setting-up-and-managing-organizations-and-teams/removing-github-app-managers-from-your-organization
  - /organizations/managing-access-to-your-organizations-apps/removing-github-app-managers-from-your-organization
  - /organizations/managing-programmatic-access-to-your-organization/adding-github-app-managers-in-your-organization
  - /organizations/managing-programmatic-access-to-your-organization/removing-github-app-managers-from-your-organization
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
topics:
  - Organizations
  - Teams
  - GitHub Apps
shortTitle: GitHub App managers
---

## About {% data variables.product.prodname_github_app %} managers

{% data reusables.apps.github-app-managers %}

## Giving someone the ability to manage all {% data variables.product.prodname_github_apps %} owned by the organization

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
{% data reusables.organizations.github-apps-settings-sidebar %}
1. At the bottom of the "Management" section, in the search field, type the username of the person you want to designate as a {% data variables.product.prodname_github_app %} manager in the organization, then click **Grant**.

## Giving someone the ability to manage an individual {% data variables.product.prodname_github_app %}

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
{% data reusables.organizations.github-apps-settings-sidebar %}
1. Under "{% data variables.product.prodname_github_apps %}", click on the avatar of the app you'd like to add a {% data variables.product.prodname_github_app %} manager for.
{% data reusables.organizations.app-managers-settings-sidebar %}
1. At the bottom of the "App managers" section, in the search field, type the username of the person you want to designate as a GitHub App manager for the app, then click **Grant**.

## Removing a {% data variables.product.prodname_github_app %} manager's permissions for the entire organization

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
{% data reusables.organizations.github-apps-settings-sidebar %}
1. Under "Management", next to the person you want to remove {% data variables.product.prodname_github_app %} manager permissions from, click **Revoke**.

## Removing a {% data variables.product.prodname_github_app %} manager's permissions for an individual {% data variables.product.prodname_github_app %}

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
{% data reusables.organizations.github-apps-settings-sidebar %}
1. Under "{% data variables.product.prodname_github_apps %}", click on the avatar of the app you'd like to remove a {% data variables.product.prodname_github_app %} manager from.
{% data reusables.organizations.app-managers-settings-sidebar %}
1. Under "App managers", next to the person you want to remove {% data variables.product.prodname_github_app %} manager permissions from, click **Revoke**.
