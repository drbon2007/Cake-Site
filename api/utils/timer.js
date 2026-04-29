const presets={
sponge:{prepMins:20,bakeMins:35,coolMins:30},
chocolate:{prepMins:25,bakeMins:40,coolMins:45},
cheesecake:{prepMins:30,bakeMins:60,coolMins:120},
muffin:{prepMins:15,bakeMins:22,coolMins:10},
carrot:{prepMins:25,bakeMins:45,coolMins:30},
};

const getTotalTime=(type)=>{
const t=presets[type];
if(!t)return null;
return t.prepMins+t.bakeMins+t.coolMins;
};

const formatTime=(mins)=>{
const h=Math.floor(mins/60);
const m=mins%60;
return h>0?`${h}h ${m}m`:`${m}m`;
};

const getStages=(type)=>{
const t=presets[type];
if(!t)return[];
return[
{stage:"Preparation",duration:formatTime(t.prepMins)},
{stage:"Baking",duration:formatTime(t.bakeMins)},
{stage:"Cooling",duration:formatTime(t.coolMins)},
];
};

export{presets,getTotalTime,formatTime,getStages};
