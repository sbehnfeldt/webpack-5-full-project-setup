import './styles/index.scss';

const elvenShieldRecipe = {
    leatherStrips: 2,
    ironIngot: 1,
    refinedMoonstone: 4
};

const elvenGauntletRecipe = {
    ...elvenShieldRecipe,
    leather: 3,
    refinedMoonstone: 2
};

console.log(elvenShieldRecipe);
console.log(elvenGauntletRecipe);
