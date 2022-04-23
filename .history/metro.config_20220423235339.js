/**
 * Metro configuration for React Native
 * https://github.com/facebook/react-native
 *
 * @format
 */



Vijit Ail 
Software Engineer at toothsi. I work with React and NodeJS to build customer-centric products. Reach out to me on LinkedIn or Instagram.
How to import SVG files in React Native using react-native-svg
August 4, 2021  6 min read 

Using SVGs in React Native: A Tutorial With Examples
When you’re developing React Native application, you may be asked to implement icons. Now, the easy way to do this is to simply extract the .png or .jpeg file of the icon and use it in the Image component of React Native. This would do the trick for you, but you will not get crisp quality and you’ll end up bloating your app with higher image file sizes, which will increase your app bundle size.

Instead of using .png or .jpeg files in your React Native app, you should be using the SVG format. SVG is a vector-based format that can scale infinitely without compromising quality.

In this guide, we’ll demonstrate how to implement SVG icons in your React Native app using the react-native-svg library.

We’ll cover the following with practical examples:

What are Scalable Vector Graphics (SVG)?
Does React Native support SVGs?
Rendering SVG shapes in React Native
How to render SVG images and icons in React Native
Rendering SVGs using XML strings
What are Scalable Vector Graphics (SVG)?
SVG is an XML-based format used to render vector images. A vector image can scale however much you want it to without pixelating because vector images are driven by mathematical equations and do not have pixels like other image formats, such as .png and .jpeg.

Because of the vector nature of the SVG format, the image is independent of resolution. An SVG image looks sharp on any screen, from the gorgeous 285 DPI pixel density screens found on new smartphones to the 85 DPI screens of standard monitors. SVG files are also small in size compared to other image formats.

If you open an SVG file in a text editor, you’ll see a large XML code with numbers and various nodes. In this tutorial, we won’t focus on the SVG itself. Instead, we’ll demonstrate how to render SVGs on a mobile app screen.

Does React Native support SVGs?
Rendering SVGs in mobile apps is not as simple as on the web, where you can use SVG directly as an image source or paste the SVG code into your HTML file. This is because there isn’t a built-in React Native component that can render SVGs directly.

Since React Native doesn’t provide default support for SVG, we’ll have to install a few libraries from the npm registry. Luckily, there’s a popular npm package that works out just fine for most use cases called react-native-svg.

Let’s get started by setting up a React Native project. Run the following command:

npx react-native init SvgDemoApp
To install the react-native-svg and react-native-svg-transformer packages, go into the project directory and run the following command:

cd SvgDemoApp
npm i react-native-svg
npm i --save-dev react-native-svg-transformer
react-native-svg provides SVG support to your React Native project on both Android and iOS platforms. react-native-svg-transformer enables you to import local SVG files in your React Native project, like how you would do in a Creact React App project on the web.

If you’re using Expo CLI instead of React Native CLI, you can get started by running the following commands.

expo init SvgDemoApp
expo install react-native-svg
Rendering SVG shapes in React Native
Let’s look at how you can use the react-native-svg library to render SVGs in your app.

Open up the project in your favorite editor and start by importing the Svg and Circle components from react-native-svg, as shown below.

import Svg, { Circle } from 'react-native-svg';
The <Svg> component is a parent component that is needed to render any SVG shape. It’s like a container component for all your SVG shapes. If you’re rendering any SVG shape, such as a circle or a polygon, you must use this as a wrapper component around your SVG component.

<Svg height="50%" width="50%" viewBox="0 0 100 100" >
       ...
</Svg>
The <Svg> component takes three props: height, width, and viewBox. The viewBox prop describes how your SVG will be positioned in space. The height and width prop are self-explanatory.

Inside the <Svg> component, render the <Circle> component as follows:

<Svg height="50%" width="50%" viewBox="0 0 100 100" >
    <Circle cx="50" cy="50" r="50" stroke="purple" strokeWidth=".5" fill="violet" />
</Svg>
The <Circle> component takes the x and y coordinates as cx and cy props, respectively. These coordinates define how and where your SVG component will be positioned inside the container. If you were to render a different SVG shape, such as a rectangle, the same would be represented by x and y props, respectively.

To describe the radius of the circle, you can pass an integer as a string to the r prop. You can set this value to increase or decrease the size of the rendered SVG circle.

The stroke prop can be used to denote the color of the border around the SVG element and the strokeWidth represents the thickness of that border. Finally, the fill prop indicates the color of the rendered SVG element. These props are similar to the attributes on the native HTML <svg> element and are common across most of the SVG components.

Have a look at the entire code that renders an SVG circle on the screen:

import React from 'react';
import { StyleSheet, View } from 'react-native';
import Svg, { Circle } from 'react-native-svg';

export default function App() {
  return (
    <View style={styles.container}>
      <Svg height="50%" width="50%" viewBox="0 0 100 100" >
        <Circle cx="50" cy="50" r="50" stroke="purple" strokeWidth=".5" fill="violet" />
      </Svg>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
You should see a violet SVG circle, as shown below:

React Native SVG Circle Shape Example
Notice that I’ve wrapped the <Svg> component inside a <View> component. You can wrap your SVG components inside any generic container component, such as <View> or any other custom wrapper component. This allows you to place and position your SVG components anywhere on the screen using Flexbox layouts, as demonstrated in the above example.

Similarly, you can render other SVG shapes, such as rectangles, polygons, lines, ellipses, etc.

How to render SVG images and icons in React Native
Now that you understand how to render any SVG using the react-native-svg library, let’s explore how you can render SVG icons and images in your app.

Here, you need to use a different component called SvgUri, so let’s import it from the library:

import { SvgUri } from 'react-native-svg';
The <SvgUri> component takes the width, height, and uri prop. You can specify the uri prop pointing to the SVG’s URL. For instance, if you wish to render this SVG, you can assign that URL to the uri prop to your <SvgUri> component, as shown below:

<SvgUri
    width="100%"
    height="100%"
    uri="https://dev.w3.org/SVG/tools/svgweb/samples/svg-files/debian.svg"
/>
This is quite similar to rendering images in React, where you’d specify the src attribute of your <img> as the URL of the image.

The above code should render the SVG on the screen as shown below:

React Native SVG Icon Example
You can adjust the width and height of the SVG using the width and height props of the <SvgUri> component. Unlike when rendering SVG shapes, you don’t need a container component here.

You may encounter the need to reference a local SVG icon or an image from inside your project. When you were setting up the example project, recall that you also installed the library react-native-svg-transformer. You can use this to render a local SVG icon or image inside your project.

First, you’ll need to make some configurational changes to your project. Head over to your project’s metro.config.js file. If this file doesn’t exist in your project, you’ll need to create it.

Then, add the following code inside it:

const { getDefaultConfig } = require('metro-config');
module.exports = {
  transformer: {
    getTransformOptions: async () => ({
      transform: {
        experimentalImportSupport: false,
        inlineRequires: true,
      },
    }),
  },
};
