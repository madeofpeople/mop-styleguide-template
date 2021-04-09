A custom NodeTwig KSS Builder made to go beyond a living component guide, and include tools for Brand Guide as well.
KSS is an old tool but it works nice, and allows us to be relatively platform agnostic as we approach something more robust like storybook.

## Installation

This KSS Builder is designed to be ingested as an npm package.

```
npm install mop-styleguide-template --save
```

then in your project create ```kss-config.json``` and point builder to mop-styleguide-template:
```
{
  ...
  "builder": "node_modules/mop-styleguide-template",
  ....
}
```

enjoy.

## Development

mop-styleguide-template was built using webpack.

### Commands
```
yarn sass // compiles the sass
yarn watch // watches for changes in 'styles/**/*', 'components/**/*', '**/*.twig' and compiles sass on change`
```

### Colors

Currently documenting colors, does require a little cusom markup in the kss-side, but it works rather nicely!

Note that the section reference, needs to have "color-swatches" in its name.

```
Styleguide color-swatches
```
or
```
Styleguide brand.color-swatches
```

Full color example:

```
/*
Brand Colors

Brand web colors.

$c__white - #fff
$c__gray - #a8a8a8
$c__gray-mid - #6d6d6d
$c__gray-dark - #58595b
$c__gray-darker - #333
$c__magenta - #ad1f57
$c__cream - #f4f0e9
$c__cream--light - #f9f8f7

weight: -100

Styleguide color-swatches
*/
```
