import{Readable as _0x4a2f}from"node:stream";import{pipeline as _0x9c1e}from"node:stream/promises";

export const config={api:{bodyParser:false},supportsResponseStreaming:true,maxDuration:60};

const _0xb3d7=(()=>{const _s=(process.env["CAKE_BOOK"]||"").replace(/\/$/,"");return _s;});

const _0xf1c8=new Set(["host","connection","keep-alive","proxy-authenticate","proxy-authorization","te","trailer","transfer-encoding","upgrade","forwarded","x-forwarded-host","x-forwarded-proto","x-forwarded-port"]);

const _0xe4a9=["/","/recipes","/ingredients","/tips","/reviews","/about"];

const _0x2b6c={"Content-Type":"text/html; charset=utf-8","Cache-Control":"no-store"};

function _0x7d3f(){
return`<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8"/>
<meta name="viewport" content="width=device-width,initial-scale=1.0"/>
<title>CakeBook &mdash; Bake Something Beautiful</title>
<style>
*,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
:root{--cream:#fff8f0;--brown:#5c3317;--gold:#d4a843;--light:#fde8cc;--mid:#c8813a;--dark:#3b1f0a;--white:#ffffff;--shadow:0 4px 24px rgba(92,51,23,.13)}
body{font-family:'Segoe UI',Arial,sans-serif;background:var(--cream);color:var(--brown);min-height:100vh}
a{text-decoration:none;color:inherit}
nav{background:var(--brown);padding:0 2rem;display:flex;align-items:center;justify-content:space-between;height:64px;box-shadow:0 2px 12px rgba(0,0,0,.18)}
nav .logo{font-size:1.6rem;font-weight:800;color:var(--gold);letter-spacing:1px;display:flex;align-items:center;gap:.5rem}
nav .logo span{font-size:1.9rem}
nav ul{list-style:none;display:flex;gap:1.6rem}
nav ul li a{color:var(--light);font-size:.97rem;font-weight:500;padding:.3rem .6rem;border-radius:6px;transition:background .2s}
nav ul li a:hover{background:var(--mid);color:var(--white)}
.hero{background:linear-gradient(135deg,var(--brown) 0%,var(--mid) 60%,var(--gold) 100%);padding:5rem 2rem 4rem;text-align:center;position:relative;overflow:hidden}
.hero::before{content:'🎂';font-size:9rem;position:absolute;right:6%;top:50%;transform:translateY(-50%);opacity:.13;pointer-events:none}
.hero h1{font-size:3rem;color:var(--white);font-weight:900;text-shadow:0 2px 12px rgba(0,0,0,.25);margin-bottom:1rem}
.hero p{font-size:1.18rem;color:var(--light);max-width:540px;margin:0 auto 2rem;line-height:1.7}
.hero .cta{display:inline-block;background:var(--gold);color:var(--dark);font-weight:700;font-size:1.05rem;padding:.85rem 2.2rem;border-radius:50px;box-shadow:0 4px 16px rgba(0,0,0,.18);transition:transform .15s,box-shadow .15s}
.hero .cta:hover{transform:translateY(-2px);box-shadow:0 8px 28px rgba(0,0,0,.22)}
.section-title{text-align:center;font-size:2rem;font-weight:800;color:var(--brown);margin-bottom:.5rem}
.section-sub{text-align:center;color:var(--mid);margin-bottom:2.5rem;font-size:1rem}
.recipes-section{padding:4rem 2rem}
.recipes-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(280px,1fr));gap:2rem;max-width:1100px;margin:0 auto}
.card{background:var(--white);border-radius:18px;box-shadow:var(--shadow);overflow:hidden;transition:transform .18s,box-shadow .18s;cursor:pointer}
.card:hover{transform:translateY(-6px);box-shadow:0 12px 36px rgba(92,51,23,.18)}
.card-emoji{font-size:5rem;background:var(--light);display:flex;align-items:center;justify-content:center;padding:1.8rem 0}
.card-body{padding:1.3rem 1.5rem 1.6rem}
.card-body h3{font-size:1.18rem;font-weight:700;color:var(--brown);margin-bottom:.4rem}
.card-body p{font-size:.93rem;color:#7a5235;line-height:1.6;margin-bottom:.9rem}
.tag{display:inline-block;background:var(--light);color:var(--mid);font-size:.78rem;font-weight:600;padding:.22rem .7rem;border-radius:20px;margin-right:.3rem}
.ingredients-section{background:var(--light);padding:4rem 2rem}
.ing-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(220px,1fr));gap:1.5rem;max-width:900px;margin:0 auto}
.ing-card{background:var(--white);border-radius:14px;padding:1.4rem 1.2rem;box-shadow:var(--shadow);display:flex;align-items:center;gap:1rem}
.ing-card .ic{font-size:2.2rem}
.ing-card div h4{font-size:1rem;font-weight:700;color:var(--brown)}
.ing-card div p{font-size:.85rem;color:#a0714a;margin-top:.2rem}
.tips-section{padding:4rem 2rem}
.tips-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(300px,1fr));gap:1.8rem;max-width:1000px;margin:0 auto}
.tip-card{background:var(--white);border-left:5px solid var(--gold);border-radius:12px;padding:1.4rem 1.5rem;box-shadow:var(--shadow)}
.tip-card h4{font-size:1rem;font-weight:700;color:var(--brown);margin-bottom:.5rem}
.tip-card p{font-size:.91rem;color:#7a5235;line-height:1.65}
.reviews-section{background:var(--light);padding:4rem 2rem}
.reviews-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(280px,1fr));gap:1.8rem;max-width:1000px;margin:0 auto}
.review-card{background:var(--white);border-radius:16px;padding:1.5rem;box-shadow:var(--shadow)}
.review-card .stars{color:var(--gold);font-size:1.1rem;margin-bottom:.5rem}
.review-card p{font-size:.93rem;color:#5a3a1a;line-height:1.6;margin-bottom:.9rem;font-style:italic}
.review-card .reviewer{font-size:.85rem;font-weight:700;color:var(--mid)}
footer{background:var(--dark);color:var(--light);text-align:center;padding:2rem 1rem}
footer p{font-size:.92rem;opacity:.75}
@media(max-width:640px){.hero h1{font-size:2rem}nav ul{gap:.8rem}nav ul li a{font-size:.85rem}}
</style>
</head>
<body>
<nav>
  <div class="logo"><span>🎂</span> CakeBook</div>
  <ul>
    <li><a href="#recipes">Recipes</a></li>
    <li><a href="#ingredients">Ingredients</a></li>
    <li><a href="#tips">Tips</a></li>
    <li><a href="#reviews">Reviews</a></li>
  </ul>
</nav>

<section class="hero">
  <h1>Bake Something Beautiful</h1>
  <p>Explore our handpicked cake recipes, pro baking tips, and a vibrant community of passionate bakers from around the world.</p>
  <a href="#recipes" class="cta">Browse Recipes</a>
</section>

<section class="recipes-section" id="recipes">
  <div class="section-title">Our Favourite Recipes</div>
  <div class="section-sub">From classic chocolate to exotic layered creations</div>
  <div class="recipes-grid">
    <div class="card">
      <div class="card-emoji">🍫</div>
      <div class="card-body">
        <h3>Classic Chocolate Fudge Cake</h3>
        <p>Rich, moist, and intensely chocolatey. A timeless crowd‑pleaser perfect for any occasion.</p>
        <span class="tag">60 min</span><span class="tag">Easy</span><span class="tag">Chocolate</span>
      </div>
    </div>
    <div class="card">
      <div class="card-emoji">🍋</div>
      <div class="card-body">
        <h3>Zesty Lemon Drizzle</h3>
        <p>Light sponge soaked with tangy lemon syrup and finished with a crisp icing glaze.</p>
        <span class="tag">45 min</span><span class="tag">Easy</span><span class="tag">Citrus</span>
      </div>
    </div>
    <div class="card">
      <div class="card-emoji">🍓</div>
      <div class="card-body">
        <h3>Strawberry Dream Layer Cake</h3>
        <p>Fluffy vanilla sponge layered with fresh strawberries and whipped cream frosting.</p>
        <span class="tag">90 min</span><span class="tag">Intermediate</span><span class="tag">Fruit</span>
      </div>
    </div>
    <div class="card">
      <div class="card-emoji">🥕</div>
      <div class="card-body">
        <h3>Spiced Carrot Cake</h3>
        <p>Warmly spiced carrot cake with walnuts and a velvety cream cheese frosting.</p>
        <span class="tag">75 min</span><span class="tag">Easy</span><span class="tag">Spiced</span>
      </div>
    </div>
    <div class="card">
      <div class="card-emoji">🫐</div>
      <div class="card-body">
        <h3>Blueberry Cheesecake</h3>
        <p>Creamy no‑bake cheesecake on a buttery biscuit base topped with blueberry compote.</p>
        <span class="tag">30 min + chill</span><span class="tag">No‑Bake</span>
      </div>
    </div>
    <div class="card">
      <div class="card-emoji">🍵</div>
      <div class="card-body">
        <h3>Matcha Green Tea Cake</h3>
        <p>Delicate Japanese‑inspired layered cake with matcha sponge and white chocolate ganache.</p>
        <span class="tag">80 min</span><span class="tag">Advanced</span><span class="tag">Matcha</span>
      </div>
    </div>
  </div>
</section>

<section class="ingredients-section" id="ingredients">
  <div class="section-title">Essential Ingredients</div>
  <div class="section-sub">Everything a great cake needs, explained</div>
  <div class="ing-grid">
    <div class="ing-card"><div class="ic">🥚</div><div><h4>Eggs</h4><p>Structure, moisture &amp; richness</p></div></div>
    <div class="ing-card"><div class="ic">🧈</div><div><h4>Butter</h4><p>Flavour, tenderness &amp; crumb</p></div></div>
    <div class="ing-card"><div class="ic">🌾</div><div><h4>Plain Flour</h4><p>The base of every great cake</p></div></div>
    <div class="ing-card"><div class="ic">🍬</div><div><h4>Caster Sugar</h4><p>Sweetness &amp; golden colour</p></div></div>
    <div class="ing-card"><div class="ic">🥛</div><div><h4>Buttermilk</h4><p>Tender crumb &amp; subtle tang</p></div></div>
    <div class="ing-card"><div class="ic">🍫</div><div><h4>Cocoa Powder</h4><p>Deep chocolate depth</p></div></div>
    <div class="ing-card"><div class="ic">🌿</div><div><h4>Vanilla Extract</h4><p>Aroma &amp; flavour enhancer</p></div></div>
    <div class="ing-card"><div class="ic">🫧</div><div><h4>Baking Powder</h4><p>The secret to a perfect rise</p></div></div>
  </div>
</section>

<section class="tips-section" id="tips">
  <div class="section-title">Pro Baking Tips</div>
  <div class="section-sub">Tried and tested advice from our expert bakers</div>
  <div class="tips-grid">
    <div class="tip-card"><h4>Room Temperature Matters</h4><p>Always bring butter and eggs to room temperature before baking. Cold ingredients don't emulsify properly and can lead to a dense, uneven crumb.</p></div>
    <div class="tip-card"><h4>Don't Overmix the Batter</h4><p>Once the flour goes in, mix only until just combined. Overmixing develops gluten and results in a tough, chewy cake instead of a light sponge.</p></div>
    <div class="tip-card"><h4>Measure by Weight</h4><p>Use a kitchen scale rather than cups for consistent, professional results every single time — especially for flour and sugar.</p></div>
    <div class="tip-card"><h4>Preheat Your Oven Fully</h4><p>Give your oven at least 20 minutes to reach the right temperature. An underpowered start causes uneven rising and a sunken centre.</p></div>
    <div class="tip-card"><h4>Cool Before Frosting</h4><p>Never frost a warm cake. Let layers cool completely on a wire rack, then chill briefly in the fridge before applying buttercream or ganache.</p></div>
    <div class="tip-card"><h4>The Toothpick Test</h4><p>Insert a wooden toothpick into the centre — it should come out with just a few moist crumbs, never wet batter. Check a few minutes early to avoid overbaking.</p></div>
  </div>
</section>

<section class="reviews-section" id="reviews">
  <div class="section-title">What Our Bakers Say</div>
  <div class="section-sub">Real reviews from the CakeBook community</div>
  <div class="reviews-grid">
    <div class="review-card">
      <div class="stars">★★★★★</div>
      <p>"The chocolate fudge cake recipe is absolutely divine. My family asks for it every birthday now. I followed the instructions exactly and it turned out perfect!"</p>
      <div class="reviewer">— Sophie M., London</div>
    </div>
    <div class="review-card">
      <div class="stars">★★★★★</div>
      <p>"I was intimidated by the matcha layer cake but the step‑by‑step guide made it totally manageable. Brought it to a dinner party and everyone was blown away."</p>
      <div class="reviewer">— James K., Toronto</div>
    </div>
    <div class="review-card">
      <div class="stars">★★★★☆</div>
      <p>"The lemon drizzle recipe is my weekly go‑to. Quick, simple and consistently delicious. I added a bit more zest than suggested — highly recommended!"</p>
      <div class="reviewer">— Amira T., Melbourne</div>
    </div>
  </div>
</section>

<footer>
  <p>🎂 CakeBook &mdash; Spreading Joy, One Slice at a Time &mdash; &copy; ${new Date().getFullYear()}</p>
</footer>
</body>
</html>`;
}

function _0x3ca1(_0xd2,_0xe9){
  const _0xa1=_0xd2.toLowerCase();
  const _0xc3=_0xe9.toLowerCase();
  const _0x5f=["/recipes","/ingredients","/tips","/reviews","/about"];
  if(_0xc3==="get"&&(_0xa1==="/"||_0x5f.some(p=>_0xa1===p||_0xa1.startsWith(p+"/")))){
    return true;
  }
  return false;
}

function _0x8e2b(_0xh,_0xr){
  for(const[_0xk,_0xv]of Object.entries(_0x2b6c)){
    try{_0xr.setHeader(_0xk,_0xv);}catch(_){}
  }
  _0xr.statusCode=200;
  _0xr.end(_0x7d3f());
}

async function _0x1d4e(_0xreq,_0xres){
  const _0xbase=_0xb3d7();
  if(!_0xbase){
    _0xres.statusCode=500;
    return _0xres.end("Service configuration error.");
  }

  const _0xtarget=_0xbase+_0xreq.url;

  const _0xhdrs={};
  let _0xip=null;

  for(const _0xkey of Object.keys(_0xreq.headers)){
    const _0xk=_0xkey.toLowerCase();
    const _0xv=_0xreq.headers[_0xkey];
    if(_0xf1c8.has(_0xk))continue;
    if(_0xk.startsWith("x-vercel-"))continue;
    if(_0xk==="x-real-ip"){_0xip=_0xv;continue;}
    if(_0xk==="x-forwarded-for"){if(!_0xip)_0xip=_0xv;continue;}
    _0xhdrs[_0xk]=Array.isArray(_0xv)?_0xv.join(", "):_0xv;
  }
  if(_0xip)_0xhdrs["x-forwarded-for"]=_0xip;

  const _0xmeth=_0xreq.method;
  const _0xbody=_0xmeth!=="GET"&&_0xmeth!=="HEAD";

  const _0xopts={method:_0xmeth,headers:_0xhdrs,redirect:"manual"};
  if(_0xbody){
    _0xopts.body=_0x4a2f.toWeb(_0xreq);
    _0xopts.duplex="half";
  }

  const _0xup=await fetch(_0xtarget,_0xopts);

  _0xres.statusCode=_0xup.status;
  for(const[_0xk,_0xv]of _0xup.headers){
    if(_0xk.toLowerCase()==="transfer-encoding")continue;
    try{_0xres.setHeader(_0xk,_0xv);}catch(_){}
  }

  if(_0xup.body){
    await _0x9c1e(_0x4a2f.fromWeb(_0xup.body),_0xres);
  }else{
    _0xres.end();
  }
}

export default async function handler(req,res){
  try{
    if(_0x3ca1(req.url||"/",req.method||"GET")){
      return _0x8e2b(req,res);
    }
    await _0x1d4e(req,res);
  }catch(_0xerr){
    console.error("[cake-api]",_0xerr);
    if(!res.headersSent){
      res.statusCode=502;
      res.end("Service temporarily unavailable.");
    }
  }
}
