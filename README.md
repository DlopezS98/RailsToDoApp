# Add React components & Typescript into rails application
Make sure thta you already have the webpacker package installed
```console
rails webpacker:install
```
## Installations & Setup
typescript
```console
rails webpacker:install:typescript
```
react
```console
rails webpacker:install:react
```
```console
rails generate react:install
```

Also we need to add one gem into our gemfile that's `react-rails`
```gemfile
gem 'react-rails'
```
react-rails is the official React community gem for integrating React with Rails. The main benefit of using this gem is the react_component helper method which makes it easy to pass Rails data to components.
```console
bundle install
```
Then run the react-rails generator:
```console
rails generate react:install
```
This creates the app/javascript/components/ directory for storing your React components. It also sets up configuration for mounting components and server-side rendering.
#### Note:
If you're using Rails 5, you'll also need to include the application.js file using the javascript_pack_tag in your application.html.erb layout file. If you already have a javascript_include_tag, replace it with the javascript_pack_tag.

##### _app/views/layouts/application.html.erb:_
```erb
<html>
  <head>
    <title>...</title>
    <%= javascript_pack_tag 'application', 'data-turbolinks-track': 'reload' %>
  </head>
</html>
```
Rails 6 automatically adds the javascript_pack_tag, so you don't need to add it manually unless you're using an older version of Rails.

#### Generator

The react-rails gem also provides a component generator to automatically create a basic component by passing it a component name and props (with their proptypes). It’s similar to Rails generators for creating models and scaffolds.

Go to the terminal a run the following command and now we can see the react generator command available
```console
rails generate --help
```
```console
Output:
...
React:
  react:component
  react:install
```
So, let's get started creating a component with the generator tool
```console
rails generate react:component HelloWorld greeting:string
```

##### _app/javascript/components/HelloWorld.js_
```js
import React from "react"
import PropTypes from "prop-types"
class HelloWorld extends React.Component {
  render () {
    return (
      <React.Fragment>
        Greeting: {this.props.greeting}
      </React.Fragment>
    );
  }
}

HelloWorld.propTypes = {
  greeting: PropTypes.string
};
export default HelloWorld
```
And now we can start usign the component `HelloWorld` into our views so for that we need to go to whatever view and put the component with the following sintax
```erb
<%= react_component("HelloWorld", { greeting: "Hello World!" }) %>
```
In this case we need to use a rail tag with the name `react_component` and this get 2 parameters, the first is the component name and the second are the props of our component. If you remember when we create the component we set a property named `greeting`. Also you can define many props if you want not only one.

Once that we already have working our react component the next step is start using typescript, so for that reason we need to change some stuffs.
First add an option in the `tsconfig` file to tell typescript that we're gonna use the react sintax. This options goes into the compilerOptions section

##### _tsconfig.json_
```json
{
  "compilerOptions": {
    ...,
    "jsx": "react-jsx"
  }
}
```

So go back and focus in to our file `HelloWorld.js`.
We need to change the extension file and add `.tsx` instead of `.js`, so the file should show as `HelloWorld.tsx` and then let's change some lines of code and add typescript sintax.

##### _app/javascript/components/HelloWorld.tsx_
```tsx
import React from "react"
import PropTypes from "prop-types"
class HelloWorld extends React.Component<IProps> {

  private props: IProps;
  constructor(_props: IProps){
    super(_props);
    this.props = _props;
    console.log(this.props.children) // the children prop is always present in all react components
    console.log(this.props.greeting)
  }

  render () {
    return (
      <React.Fragment>
        Greeting: {this.props.greeting}
      </React.Fragment>
    );
  }
}

interface IProps {
  children: String;
  greeting: String;
}

export default HelloWorld
```
##### _<some_file>.html.erb_
```erb
<%= react_component("HelloWorld", { greeting: "Hello World!", children: "Children Value" }) %>
```

console log output.

![hello-world-react](./app/assets/images/readme/HelloWorld.log.png)

#### Almost done!
Finally we need to install the types to get the autocomplete and intellisense when we write code
```console
yarn add @types/node @types/react @types/react-dom -D
```
Also you should to change the import statement of react, like this
```tsx
import * as React from "react"
```
Other alternative is adding a configuration into the `tsconfig.json` to allow use the import statement: `{ import React from "react" }`
```json
{
  "compilerOptions": {
    ...,
    "allowSyntheticDefaultImports": true
  },
  ...
}
```

### Setup [css & scss] modules to use into our components
In this case when we install all the dependencies related to react, there's a denpendency that was not installed and also is required to use the styles modules. So let's install it.
```console
yarn add react-scripts
```
Now let's create a file named `react-app-env.d.ts` and put the code below
```ts
/// <reference types="react-scripts" />
```
And that's it, now we may be able to start using the styles modules

## Adding eslint & prettier
### Packages
```cmd
npm install eslint-config-prettier eslint-plugin-import eslint-plugin-prettier prettier prettier-eslint @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint eslint-plugin-react
```

We need to create a setting file for eslint & prettier in the root directory of the project.

(powershell)
```powershell
ni .eslintrc.json && ni .prettierrc.json
```
additionally create a ignore file `.eslintignore` to don't track unnecessary files like the ones in the `node_modules`
```powershell
ni .eslintignore
```

### _.eslintrc.json_
```json
{
    "root": true,
    "env": {
        "browser": true,
        "es2021": true,
        "commonjs": true
    },
    "extends": [ //legacy rules
        "eslint:recommended",
        "plugin:@typescript-eslint/eslint-recommended",
        "plugin:@typescript-eslint/recommended",
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": "latest",
        "sourceType": "module",
        "project": "./tsconfig.json"
    },
    "plugins": [
        "react",
        "@typescript-eslint",
        "prettier",
        "eslint-plugin-react"
    ],
    "rules": {
      // setup your rules here like below...
      "@typescript-eslint/no-unused-vars": "error",
      "no-console": ["error"]
    },
    "overrides": [{
      // override some configurations for other types of files like javascript
    }]
}
```
See more settings in the repo...

### _.prettierrc.json_
```json
{
    "singleQuote": true,
    "semi": true,
    "arrowParens": "always",
    "bracketSpacing": true,
    "tabWidth": 2,
    "parser": "typescript",
    "bracketSameLine": true,
    "endOfLine": "lf",
    "trailingComma": "es5"
}
```

### _.eslintignore_
```
# ignore definition types...
**/*.d.ts
# builded assets
public/**
lib/**
.yarn/**

# packages
node_modules/**

# other files...
*.scss
*.css
```

### Almost done.
also we need to install the recommended plugin for vscode and work with eslint & prettier, we have different ways to install plugins inside of vscode and one of them is via marketplace extension and command line. I'm gonna show you how to install with command line. it's like this: `code --install-extension (<extension-id> | <extension-vsix-path>)`. In this case we're gonna use the extension id and the other way is with the downloaded package (local file. specify the path where it's located). References: [vscode-docs](https://code.visualstudio.com/docs/editor/extension-marketplace#_command-line-extension-management)

#### _eslint_

```powershell
code --install-extension dbaeumer.vscode-eslint
```
#### _prettier_
```powershell
code --install-extension esbenp.prettier-vscode
```

### Addtional setup
let's go and put some scripts inside of our package.json to run the eslint over the files, but before we need to know some things that are very important.

we have different ways to run eslint. The first one is run eslint with a specific file that doesn't have the required name set by eslint `.eslintrc.(<json> | <yml> | <js>)`. The `allowed extensions` should be json, yaml or javascript. So, supose that we have a different named file instead of `.eslintrc`. We can execute it as follows:
```powershell
npx eslint -c .my-other-eslint-file.json app/javascript/**
```
Or via node_modules (only in OS based on unix):

```
./node_modules/.bin/eslint -c .my-other-eslint-file.json app/javascript/**
```
Therefore, the above commands are being executed with a specific path where the javascript/typescript files are located.

So, the second option that we have it's just simply execute as below. Note that we do not have to specify a config file because in this case eslint already knows which file to use and then apply the rules that are inside of our config file `.eslintrc.json`. Eslint looks for a file with a pattern `.eslintrc.<allowed-extensions>`. So, that's why we don't have to tell it which file to use.

```powershell
npx eslint app/javascript/**
```

So, our `package.json` file looks like this:

```json
"scripts": {
    "eslint": "eslint app/javascript/**", // run eslint and look for errors / warnings
    "eslint:fix": "eslint app/javascript/** --fix" // eslint fixes problems by itself where is posible, otherwise you must to change it manually
  },
```

Note that package.json infers that we are gonna execute the above commands with node and there's no need to put the npx keyword before the script. Then just call the script as:
```powershell
npm run eslint
```
or
```powershell
npm run eslint:fix
```