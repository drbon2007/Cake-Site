const pantry=[
{id:1,name:"All-Purpose Flour",unit:"cup",category:"dry"},
{id:2,name:"Granulated Sugar",unit:"cup",category:"dry"},
{id:3,name:"Unsalted Butter",unit:"tbsp",category:"fat"},
{id:4,name:"Large Eggs",unit:"piece",category:"wet"},
{id:5,name:"Whole Milk",unit:"ml",category:"wet"},
{id:6,name:"Baking Powder",unit:"tsp",category:"leavening"},
{id:7,name:"Vanilla Extract",unit:"tsp",category:"flavor"},
{id:8,name:"Cocoa Powder",unit:"tbsp",category:"dry"},
{id:9,name:"Salt",unit:"tsp",category:"seasoning"},
{id:10,name:"Heavy Cream",unit:"ml",category:"wet"},
];

const scaleIngredient=(item,factor)=>({
...item,
scaled:parseFloat((factor*1).toFixed(2)),
});

const filterByCategory=(list,cat)=>list.filter(i=>i.category===cat);

const getTotalItems=()=>pantry.length;

export{pantry,scaleIngredient,filterByCategory,getTotalItems};
