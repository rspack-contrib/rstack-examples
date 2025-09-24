# Rstack Examples

This repository contains comprehensive examples that demonstrate the Rstack ecosystem tools, including Rspack, Rsbuild, Rspress, and Rsdoctor. These examples showcase common implementation patterns and best practices to help developers leverage the full potential of the Rstack toolchain.

## List of Examples

|   [Rspack](https://github.com/web-infra-dev/rspack)   |    <a href="https://github.com/web-infra-dev/rspack" target="blank"><img src="https://assets.rspack.dev/rspack/rspack-banner.png" width="400" /></a>    |  [Examples](./rspack)   |   [Document](https://rspack.dev/)    |
| :---------------------------------------------------: | :-----------------------------------------------------------------------------------------------------------------------------------------------------: | :---------------------: | :----------------------------------: |
|  [Rsbuild](https://github.com/web-infra-dev/rsbuild)  |  <a href="https://github.com/web-infra-dev/rsbuild" target="blank"><img src="https://assets.rspack.dev/rsbuild/rsbuild-banner.png" width="400" /></a>   |  [Examples](./rsbuild)  |   [Document](https://rsbuild.dev/)   |
|  [Rspress](https://github.com/web-infra-dev/rspress)  |  <a href="https://github.com/web-infra-dev/rspress" target="blank"><img src="https://assets.rspack.dev/rspress/rspress-banner.png" width="400" /></a>   | [Examples](./rspress/)  |   [Document](https://rspress.dev/)   |
| [Rsdoctor](https://github.com/web-infra-dev/rsdoctor) | <a href="https://github.com/web-infra-dev/rsdoctor" target="blank"><img src="https://assets.rspack.dev/rsdoctor/rsdoctor-banner.png" width="400" /></a> | [Examples](./rsdoctor/) |  [Document](https://rsdoctor.dev/)   |
|    [Rslib](https://github.com/web-infra-dev/rslib)    |     <a href="https://github.com/web-infra-dev/rslib" target="blank"><img src="https://assets.rspack.dev/rslib/rslib-banner.png" width="400" /></a>      |   [Examples](./rslib)   | [Document](https://lib.rsbuild.dev/) |

## How to Use

### Clone single example

To clone a single example, you can use the [gitpick](https://github.com/nrjdalal/gitpick) to clone a sub-directory from the current repository.

For example, to clone the `/rspack/basic` example, run the following command:

```bash
# Clone the basic example
npx gitpick https://github.com/rspack-contrib/rstack-examples/tree/main/rspack/basic

# Enter the basic example directory
cd basic

# Install the dependencies
pnpm i
```

### Clone all examples

To try all examples, you can clone the current repository to your local.

1. First, clone the current repository to your local:

```bash
git clone git@github.com:rspack-contrib/rstack-examples.git
```

2. Then, choose the example you need, such as the Rsbuild react example:

```bash
cd rsbuild/react
```

3. Install the dependencies using `pnpm` or other package manager, then start the project:

```bash
# Use corepack to enable pnpm
corepack enable
pnpm i
pnpm run dev
```

4. You can fork the current project or copy the code from the current project to use it.
