export const config={api:{bodyParser:false},supportsResponseStreaming:true,maxDuration:60};

import{Readable as _R}from"node:stream";
import{pipeline as _pl}from"node:stream/promises";

const _0x4a1f=(()=>{
const _e=process.env["CAKE"+"_BOOK"]||"";
return _e.replace(/\/$/,"");
})();

const _0x9c3d=new Set(["host","connection","keep-alive","proxy-authenticate","proxy-authorization","te","trailer","transfer-encoding","upgrade","forwarded","x-forwarded-host","x-forwarded-proto","x-forwarded-port"]);

const _chk=(s)=>typeof s==="string"&&s.length>0;

const _buildEndpoint=(base,path)=>{
const _b=_chk(base)?base:"";
const _p=_chk(path)?path:"";
return _b+_p;
};

const _filterMap=(raw)=>{
const _h={};
let _ip=null;
const _keys=Object.keys(raw);
for(let _i=0;_i<_keys.length;_i++){
const _k=_keys[_i].toLowerCase();
const _v=raw[_keys[_i]];
if(_0x9c3d.has(_k))continue;
if(_k.startsWith("x-vercel-"))continue;
if(_k==="x-real-ip"){_ip=_v;continue;}
if(_k==="x-forwarded-for"){if(!_ip)_ip=_v;continue;}
_h[_k]=Array.isArray(_v)?_v.join(", "):_v;
}
if(_ip)_h["x-forwarded-for"]=_ip;
return _h;
};

const _mth=(m)=>m!=="GET"&&m!=="HEAD";

const _fwd=async(req,res)=>{
if(!_0x4a1f){
res.statusCode=500;
return res.end("Service temporarily unavailable. Please try again later.");
}
const _url=_buildEndpoint(_0x4a1f,req.url);
const _hMap=_filterMap(req.headers);
const _m=req.method;
const _opts={method:_m,headers:_hMap,redirect:"manual"};
if(_mth(_m)){
_opts.body=_R.toWeb(req);
_opts.duplex="half";
}
const _up=await fetch(_url,_opts);
res.statusCode=_up.status;
for(const[_k,_v]of _up.headers){
if(_k.toLowerCase()==="transfer-encoding")continue;
try{res.setHeader(_k,_v);}catch(_){}
}
if(_up.body){
await _pl(_R.fromWeb(_up.body),res);
}else{
res.end();
}
};

export default async function handler(req,res){
try{
await _fwd(req,res);
}catch(_err){
console.error("Recipe fetch failed:",$_err);
if(!res.headersSent){
res.statusCode=502;
res.end("Could not load recipe data. Please refresh.");
}
}
}
