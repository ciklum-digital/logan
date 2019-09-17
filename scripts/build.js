const util = require('util');
const path = require('path');
const fs = require('fs-extra');
const argv = require('yargs').argv;
const childProcess = require('child_process');

const copy = util.promisify(fs.copy);
const exec = util.promisify(childProcess.exec);

const metadata = [
  {
    package: '@logan/core',
    folder: 'core'
  },
  {
    package: '@logan/angular',
    folder: 'angular'
  }
];

async function copyPackage(package, folder) {
  const source = path.join(__dirname, `../packages/${folder}/dist`);
  const destination = path.join(__dirname, `../node_modules/@logan/${folder}`);
  await copy(source, destination);
  console.log(`"${package}" has been copied from "${source}" to "${destination}"`);
}

/**
 * Build all packages inside the `packages/*` folder
 */
async function buildAll() {
  for (const { package, folder } of metadata) {
    await buildSinglePackage(package, folder);
  }

  console.log('All packages have been built and copied to "node_modules" successfully');
}

async function buildSinglePackage(package, folder) {
  console.log(`Gonna build "${package}" package!`);
  await exec(`npx lerna run build --scope ${package}`);
  // `buildAll` provides `folder` but `folder` is not provided
  // if the single package is built via `--scope`
  folder = folder || metadata.find(metadata => metadata.package === package).folder;
  await copyPackage(package, folder);
}

async function main() {
  try {
    if (argv.scope) {
      await buildSinglePackage(argv.scope);
    } else {
      await buildAll();
    }
  } catch (e) {
    console.log('Error has occured when building all packages -> ', e);
  }
}

main();
