# Login Signup Slider Theme

[ImageDemo](!https://ask-jennie-assets.s3.ap-south-1.amazonaws.com/login-signup-slider.png)

[Click](https://dextrop.github.io/loginsignupsliderangular/) to view demo

## Intregration Steps

Add `<script src="assets/loginsignupslider.js"></script>` in the bottom of index.html just before close of body tag i.e `</body>`
The script is required for slider functionality.

Once done user can either reuse the component directly by renaming it 
#### Or 
can add `loginsignupsliderlayout` to app.module.ts. Create your component login

```
ng g c login
```

inside login component edit login.component.html

```
<app-loginsignupsliderlayout></app-loginsignupsliderlayout>
```
