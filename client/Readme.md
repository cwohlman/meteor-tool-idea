#Client

Here are stored files which should be part of the client bundle. The default configuration will eagerly push every file in this folder to the client. Html in this folder will be converted into compiled handlebars templates. Css/Less in this folder will be compiled.

All files in this folder are first compiled & then placed in the 'public' folder, where they are referenced as part of the client bundle.