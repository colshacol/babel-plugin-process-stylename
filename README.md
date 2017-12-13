# babel-plugin-process-stylename

Merges your `styleName` attributes with your `className` attributes and avoids Jest errors/warnings.

`npm i -D babel-plugin-process-stylename`

this:
```jsx
<MyComp styleName="MyComp" className="kittens">
```

becomes:
```jsx
<MyComp className="MyComp kittens">
```

## Options

### `modifier`

Give different formatting to the processed styleNames.

`"modifier": "foo-[name]-bar"`

```jsx
// this
<MyComp styleName="MyComp" className="kittens">
// becomes
<MyComp className="foo-MyComp-bar kittens">
```


## Usage

```
// .babelrc
{
    "env": {
        "test": {
            "plugins": [
                [
                    "babel-plugin-process-stylename",
                    {
                        "modifier": "foo-[name]-bar"
                    }
            ]
        }
    }
}
```
