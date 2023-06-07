# image-processing-app
 A node.js application to fetch 2 images and merge them and save in a storage

#### Supported Versions

[![Node.js Version](https://img.shields.io/badge/Node.js-16.15.1%2B-brightgreen)](https://nodejs.org/en/blog/release/v16.15.1)
[![Node.js Version](https://img.shields.io/badge/npm-8.12.2%2B-blue)](https://www.npmjs.com/package/npm/v/8.12.2)

# Execution Steps
Run the npm comman to install all the dependencies from package.json

 `npm install`
 
## Run the app

### Running without passing any arguments
**Command:** `npm start`

**Description:** This command will run the app.js file and set default values for the arguments of 'text' and 'image options'. 

<hr/>

### Running by passing the text arguments that your need to display in the merged image
**Command:** `npm start [text_1] [text_2]`

**Description:** This command will run the app.js file withe the 'text' arguments passed, and the default values for the images will be set. 

**Arguments:**
- [text_1]: The text 1 value that you need to display in the image 1
- [text_2]: The text 2 value that you need to display in the image 2

**Examples:**
- `npm start Hello There`

<hr/>

### Running by passing the text arguments and image options 
**Command:** `npm start [text_1] [text_2] [width] [height] [color] [size]`

**Description:** This command will run the app.js file withe the 'text' arguments passed, and the image options will be set to generate you an image with customized settings.

**Arguments:**
- [text_1]: The text 1 value that you need to display in the image 1.
- [text_2]: The text 2 value that you need to display in the image 2.
- [width]: The width of the merged image that you generate.
- [height]: The height of the merged image that you generate.
- [color]: The color of the font of the text displayed on the merged image
- [size]: The size of the merged image

**Examples:**
- `npm start Hello There 800 800 Red 100`

<hr/>

## Testing
Command to run the jest test suit

`npm test`

