const { version, name } = require('./package.json');
const { resolve } = require('node:path');

const versionArr = version.split('-');
const bundleShortVersion = versionArr[0];
const bundleVersion = versionArr[1];

const config = {
  asar: true,
  productName: name,
  appId: '',
  directories: {
    output: 'dist',
  },
  icon: resolve(__dirname, './icons/icon.icns'),
  asarUnpack: '**\\*.{node,dll}',
  files: ['./release/dist', 'node_modules', 'package.json'],
  mac: {
    target: ['dmg'],
    bundleVersion: bundleVersion,
    bundleShortVersion: bundleShortVersion,
    artifactName: '${productName}-${version}-${arch}.${ext}',
    extendInfo: {
      ElectronTeamID: '',
      ITSAppUsesNonExemptEncryption: 'NO',
    },
    asarUnpack: ['**/*.node'],
  },
  mas: {
    hardenedRuntime: false,
    gatekeeperAssess: false,
    entitlements: 'mas/entitlements.mas.plist',
    entitlementsInherit: 'mas/entitlements.mas.inherit.plist',
    entitlementsLoginHelper: 'mas/entitlements.mas.loginhelper.plist',
    provisioningProfile: 'TODO: mas/your.provisionprofile',
  },
  masDev: {
    hardenedRuntime: false,
    gatekeeperAssess: false,
    entitlements: 'mas/entitlements.mas.plist',
    entitlementsInherit: 'mas/entitlements.mas.inherit.plist',
    entitlementsLoginHelper: 'mas/entitlements.mas.loginhelper.plist',
    provisioningProfile: 'TODO: mas/moki_rss.provisionprofile',
  },
  dmg: {
    sign: false,
  },
  win: {
    target: ['nsis'],
    verifyUpdateCodeSignature: false,
    signingHashAlgorithms: ['sha256'],
    signDlls: false,
    requestedExecutionLevel: 'asInvoker',
  },
  nsis: {
    oneClick: false,
    perMachine: false,
    allowToChangeInstallationDirectory: true,
    deleteAppDataOnUninstall: false,
    createDesktopShortcut: true,
    createStartMenuShortcut: true,
    shortcutName: name,
  },
};
module.exports = config;
