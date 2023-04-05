### [Project Preview](https://portfolio-sahil5111.netlify.app/)

### How To start project in your local Machine for development?

1. Make sure you have [node](https://nodejs.org/en/download) and [npm](https://docs.npmjs.com/cli/v8/commands/npm-install) installed on your device.
2. Clone the repository.
3. Type **`npm install`** on terminal where package.json is located to download all the dependencies.
4. Type **`npm start`** to start local development environment.
<br>

### Why is there constants.json file in src folder?

Modifying the constants file has a significant impact on the entire project, as it controls the rendering of all textual content, links, and images on the page. To customize the project, it is necessary to make changes to the constants.json file, and update it accordingly when adding assets to the public folder.

**Note:**
Due to the technical limitations of mobile devices, simultaneous rendering of multiple 3D components is not supported. Therefore, a fallback section has been included in the Constants.json file, specifically in the tools[3] section. It should be noted that this section can only accommodate up to six items, so careful consideration is required when making selections.


### How to set up your contacts section?

1. Register yourself at [email.js](https://www.emailjs.com/) 
2. make a keys.json file in src folder where constants.json file is located 
3. populate the file with your api keys as follow [service_Id,template_id,api_key]
4. Make sure all these fields are strings
5. you will get these keys at your email.js dashboard

you can use smtp sevice of your choice make sure to update contacts.jsx file likewise.


### How to deploy site after editing?

1. Make sure to register on [netlify](https://www.netlify.com/)
2. After all the changes are done run `npm run build` on your terminal to bundle your project.
3. Now run `netlify deploy` on your terminal
4. When prompted with which directory to deploy type ./dist if you are at the root directory where package.json is located.

### Extra
We welcome any suggestions for additional features or reports of any bugs you may encounter. Please do not hesitate to raise an issue, and we will address it promptly.

Source:<br>
[Gaming desktop PC](https://sketchfab.com/3d-models/gaming-desktop-pc-d1d8282c9916438091f11aeb28787b66)