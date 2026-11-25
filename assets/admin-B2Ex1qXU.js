import{a as e,i as t,n,o as r,r as i,t as a}from"./index-CmpyvlHb.js";var o=99999,s=class{constructor(e,t){r(this,`ctx`,void 0),r(this,`root`,void 0),r(this,`body`,void 0),r(this,`open`,!0),this.ctx=t,this.root=document.createElement(`div`),this.root.className=`admin`,this.root.innerHTML=`<button class="admin-toggle" title="F9">admin</button><div class="admin-body"></div>`,e.appendChild(this.root),this.body=this.root.querySelector(`.admin-body`),this.body.addEventListener(`click`,e=>this.onClick(e)),this.root.querySelector(`.admin-toggle`).addEventListener(`click`,()=>this.toggle()),window.addEventListener(`keydown`,e=>{e.code===`F9`&&(e.preventDefault(),this.toggle())}),this.draw()}toggle(){this.open=!this.open,this.root.classList.toggle(`closed`,!this.open)}draw(){let r=this.ctx.save,a=Object.values(r.stars).reduce((e,t)=>e+t,0);this.body.innerHTML=`
      <div class="admin-row admin-head">
        <b>★ ${a}</b><b>${r.coins} ◎</b><b>${Object.keys(r.stars).length} ур.</b>
      </div>
      <div class="admin-row admin-hook">${this.ctx.hook().map(e=>`<span>${e}</span>`).join(``)}</div>
      <div class="admin-row" data-grp="unlock">
        <button data-a="all3">Открыть всё на 3★</button>
        <button data-a="all1">Открыть всё на 1★</button>
        <button data-a="rich">+ монеты и бусты</button>
      </div>
      <div class="admin-row" data-grp="reset">
        <button data-a="wipe">Стереть сохранение</button>
        <button data-a="tutorial">Сбросить обучение</button>
        <button data-a="map">На карту</button>
      </div>
      <div class="admin-row" data-grp="special">
        <button data-a="endless">Бесконечная</button>
        <button data-a="daily">Заказ дня</button>
      </div>
      ${this.ctx.playing()?`<div class="admin-row" data-grp="now"><button data-a="w1">Победа 1★</button><button data-a="w2">2★</button><button data-a="w3">3★</button><button data-a="lose">Поражение</button><button data-a="floors">+10 этажей</button></div>`:``}
      ${this.ctx.playing()?`<div class="admin-row" data-grp="ev"><button data-a="gust">Порыв ветра</button><button data-a="shake">Тряхнуть стол</button></div>`:``}
      <div class="admin-levels"></div>`;let o=this.body.querySelector(`.admin-levels`);for(let a=1;a<=e.length;a++){let e=document.createElement(`div`);e.className=`admin-kitchen`;let s=n(`kitchen${a}`),l=`<div class="admin-kname">${a}. ${s}</div><div class="admin-grid">`;for(let e=1;e<=15;e++){let n=(a-1)*15+e,i=r.stars[n]??0,o=t(n);l+=`<button class="lv s${i}${o.big?` big`:``}" data-lv="${n}" title="${c(o)}">${n}</button>`}for(let e of i(a)){let i=r.stars[e]??0,a=t(e);l+=`<button class="lv bonus s${i}" data-lv="${e}" title="${n(`bonus_${a.bonus}`)}">${n(`bonus_${a.bonus}`).slice(0,3)}</button>`}e.innerHTML=l+`</div>`,o.appendChild(e)}}onClick(n){let r=n.target.closest(`button`);if(!r)return;n.stopPropagation();let s=this.ctx.save,c=r.dataset.lv;if(c)this.ctx.play(t(Number(c)));else{switch(r.dataset.a){case`all3`:case`all1`:{let t=r.dataset.a===`all3`?3:1;for(let e=1;e<=120;e++)s.stars[e]=t;for(let n=1;n<=e.length;n++)for(let e of i(n))s.stars[e]=t;this.ctx.persist(),this.ctx.toMap();break}case`rich`:s.coins=o,s.boosts={slow:99,sticky:99,level:99};for(let e of a)s.cosmetics.owned.includes(e.id)||s.cosmetics.owned.push(e.id);this.ctx.persist();break;case`wipe`:localStorage.clear(),location.reload();return;case`tutorial`:s.tutorial={done:!1,hints:[]},this.ctx.persist();break;case`map`:this.ctx.toMap();break;case`endless`:this.ctx.play(this.ctx.endless());return;case`daily`:this.ctx.play(this.ctx.daily());return;case`w1`:return this.ctx.finish(!0,1);case`w2`:return this.ctx.finish(!0,2);case`w3`:return this.ctx.finish(!0,3);case`lose`:return this.ctx.finish(!1,1);case`floors`:return this.ctx.addFloors(10);case`gust`:return this.ctx.fireEvent(`gust`);case`shake`:return this.ctx.fireEvent(`shake`);default:return}this.draw()}}};function c(e){return e.goal.map(t=>t.type===`height`?`${t.floors} эт.`:t.type===`recipe`?`рецепт ${e.sequence?.length??0}`:t.type===`perfects`?`${t.count} идеально`:t.type===`noMiss`?`без промахов`:t.type===`time`?`${t.seconds} с`:`≤ ${t.count} кусков`).join(`, `)}export{s as AdminPanel};