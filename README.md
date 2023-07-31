# Corridor of Fame Academy essay-generator - Node.js Example

This is an example app to generate essays from a given prompt using OpenAPIs API

## Getting Started
1. If you don't have Node.js installed, you will need to install it first. You can do that from [here](https://nodejs.org/en) or you can use [homebrew](https://brew.sh/)
2. If you don't have Yarn installed, please install it first using [npm](https://classic.yarnpkg.com/en/docs/install) or [homebrew](https://formulae.brew.sh/formula/yarn)
3. Clone this repository
   ```
   git clone https://github.com/CorridorOfFameAcademy/essay-generator.git
   ```
4. Navigate into the project directory
   ```bash
   cd essay-generator
   ```
5. Install the requirements
   ```bash
   $ yarn install
   ```
6. Make a copy of the example environment variable file and rename to .env
   On Linux systems:
   ```bash
   $ copy .example.env .env
   ```
   On Windows:
   ```powershell
   $ copy .env.example .env
   ```
7. Add your [API Key](https://platform.openai.com/account/api-keys) to the `.env` file
8. Run the application
   ```bash
   $ yarn dev
   ```