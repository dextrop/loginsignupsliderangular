# Login Signup Slider Theme

[Click](https://dextrop.github.io/loginsignupsliderangular/) to view demo

## Intregration Steps

Add `<script src="assets/loginsignupslider.js"></script>` in the bottom of index.html just before close of body tag i.e `</body>`
The script is required for slider functionality.

Once done user can either reuse the component directly by renaming it 
#### Or 
can add `loginsignupsliderlayout` to app.module.ts. Create your component login

```shell
ng g c login
```

inside login component edit login.component.html
```html
<app-loginsignupsliderlayout></app-loginsignupsliderlayout>
```
