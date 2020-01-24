# Chuck-norris-facts-element
[![Published on webcomponents.org](https://img.shields.io/badge/webcomponents.org-published-blue.svg)](https://www.webcomponents.org/element/klict/chuck-norris-facts-element)


## Demo

[Check it live!](https://klict.github.io/chuck-norris-fact-element)

## Install

Install the component using [NPM](http://npmjs.com/):

```sh
$ npm install chuck-norris-fact-element --save
```

## Usage

1. Import polyfill:

    ```html
    <!-- load webcomponents bundle, which includes all the necessary polyfills -->
    <script src="node_modules/@webcomponents/custom-elements/custom-elements.min.js"></script>
    ```

2. Import custom element:

    ```html
    <script type="module" src="node_modules/chuck-norris-fact-element/chuck-norris-fact.js"></script>
    ```

3. Start using it!

    Random chuck norris fact:
    ```html
        <chuck-norris-fact></chuck-norris-fact>
    ```
    categorized chuck norris fact:
    ```html
        <chuck-norris-fact category="animal"></chuck-norris-fact>
    ```


## Options

### Category
Options: animal, career, celebrity, dev, explicit, fashion, food, history,
         money, movie, music, political, religion, science, sport, travel,

Description: Used to retrieve categorized chuck norris facts.

## Development

In order to run it locally you'll need to fetch some dependencies and a basic server setup.

1. [serve](https://npmjs.com/serve):

    ```sh
    $ npm install -g serve
    ```

3. Start development server and open `http://localhost:5000/`.
poly
    ```sh
    $ serve
    ```

## License

[MIT License](http://opensource.org/licenses/MIT)
