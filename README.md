# React transition on scroll (react-tos)

React component for transitioning elements on scroll.

[Demo](https://knightjdr.github.io/react-tos/)

## Install

`npm i --save react-tos`

## Usage

```
import React from 'react';
import ReactDOM from 'react-dom';
import ReactTos from 'react-tos'

ReactDOM.render(
  <ReactTos>
    <div>
      Content to transition into the view on scroll
    </div>
  </ReactTos>,
  document.getElementById('root'),
);
```

### Props

`<ReactTos className="className" config={{}} />`

| Prop      | type   | description                                                |
| --------- | ------ | ---------------------------------------------------------- |
| className | string | an optional css class to apply to the transition container |
| config    | object | transition configuration                                   |

### Config

The default configuration will transition an element from an opacity of 0
to 1 over 1.2s with the 'ease-in' timing function. If you are happy with this
configuration, you do not need to add the config prop. Adjust the config prop as needed
if you would like something different. Be aware that any missing values
will use the defaults below.

```
defaultConfig = {
  bottomOffset: 0,
  duration: '1.2s',
  startingOpacity: 0,
  startingScale: 1,
  timingFunction: 'ease-in',
  transformOrigin: '50% 50%',
};
```

Available config props:

| Prop            | type   | default value |
| --------------- | ------ | ------------- |
| bottomOffset    | number | 0             |
| duration        | string | 1.2s          |
| flip            | string | null          |
| rotate          | string | null          |
| startingOpacity | number | 0             |
| startingScale   | number | 1             |
| timingFunction  | string | ease-in       |
| transformOrigin | string | 50% 50%       |
| translate       | string | null          |


### Bottom offset

Elements will begin to transition once their top has entered the viewport. Set
the bottomOffset property of the config to make transitions begin earlier or later.
A value of 100 would cause the transition to begin once the element's top
is within 100 pixels of the bottom of the viewport while -100 would cause the
transition to begin once the element's top is 100 pixels above the bottom of the viewport.

### Flip

Add an additional property to the config if you would like the element to flip
on entering the viewport. The value indicates the starting rotation from which the
transition will begin (ending at 0).

```
config = {
  flip: '-90deg',
};
```

The flip effect is applied using the rotateY transformation. See [rotateY](https://developer.mozilla.org/en-US/docs/Web/CSS/transform-function/rotateY)
for more on valid rotation values.

### Opacity

The opacity of the element at the start of the transition can be set with
'startingOpacity'. Set this to 1 to remove the opacity transition.

### Rotate

Add an additional property to the config if you would like the element to rotate
on entering the viewport. The value indicates the starting rotation from which the
transition will begin (ending at 0).

```
config = {
  rotate: '-180deg',
};
```

The rotation is applied using the rotateZ transformation. See [rotateZ](https://developer.mozilla.org/en-US/docs/Web/CSS/transform-function/rotateZ)
for more on valid rotation values.

### Scale

The scale of the element at the start of the transition can be set with
'startingScale'. Set this to 1 to remove any scale transition.

### Translate

Add an additional property to the config if you would like the element to translate
on entering the viewport. The value indicates the starting translation from which the
transition will begin (ending at 0).

```
config = {
  translate: '-200px',
};
```

### Transform origin

The default transform origin is used for all transformation (50% 50%). This can
be changed via the config prop.

### Note

Transitions will only occur if the top of the element is below the viewport bottom
when the DOM is loaded. Elements within or above the viewport will not transition.
This is intended behavior for this component. If there is interest in making
this an optional feature just open an issue and make the request.
