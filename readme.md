![alt text](https://mirophotography.files.wordpress.com/2016/11/malogo1.png?w=115 "Miro Alt")

## Front End Baseplate




### SVG sprites

Gulp task generates **svg-symbols.svg** from which we are taking the id's of individual icons using
```
<svg role="img" class="svg-icon">
    <use xlink:href="img/svg/svg-symbols.svg#phone"></use>
</svg>
```
Make sure the path is correct.

### [gulp imagemin](https://www.npmjs.com/package/gulp-imagemin)