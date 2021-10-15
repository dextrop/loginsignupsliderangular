# Login Signup Slider Theme

![imagedemo](https://ask-jennie-assets.s3.ap-south-1.amazonaws.com/login-signup-slider.png)

[Click](https://dextrop.github.io/loginsignupsliderangular/) to view demo

## Intregration Steps

Extract the code to some directy, Once the code is extracted, user can see folder structure

```
src/
  app/
    loginsignupsliderlayout/
      loginsignupsliderlayout.component.html
      loginsignupsliderlayout.component.ts
      loginsignupsliderlayout.component.css
assets/
  loginsignupslider.js
```

copy folder `loginsignupsliderlayout` inside `src/app/` and paste it in your angular project inside `src/app/`, Also copy `loginsignupslider.js` from assets to your project `src/assets` folder. 
Add `<script src="assets/loginsignupslider.js"></script>` in the bottom of index.html just before close of body tag i.e `</body>`, The script is required for slider functionality.
Add `loginsignupsliderlayout` to app.module.ts. Create your component login

inside your login component add 

```
<app-loginsignupsliderlayout></app-loginsignupsliderlayout>
```
