/* Classic deferred script: works on file:// and normal static hosting. */
(() => {
  'use strict';
  const D = window.ROMANA;
  const main = document.getElementById('main');
  const page = document.body.dataset.page;
  const money = n => 'PKR ' + Number(n).toLocaleString('en-PK');
  const el = (tag, cls, text) => { const node = document.createElement(tag); if (cls) node.className = cls; if (text !== undefined) node.textContent = text; return node; };
  const link = (text, href, cls) => { const a = el('a', cls, text); a.href = href; return a; };
  const append = (parent, ...children) => { children.forEach(child => parent.append(child)); return parent; };
  const category = id => D.categories.find(c => c.id === id);
  const publicDescription = p => p.description.replace(/^Preview sample only [^A-Za-z]+/, '').replace(/ Product details, sizing and PKR price are examples,[\s\S]*$/, '');
  const publicDetail = text => text.replace(/^(Sample concept: |Sample )/, '');
  const productURL = p => 'product.html?id=' + encodeURIComponent(p.id);
  const waIcon = () => { const span = el('span'); span.innerHTML = '<svg class="wa-icon" viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M20.7 11.7a8.7 8.7 0 0 1-12.9 7.6L3 21l1.6-4.8a8.7 8.7 0 1 1 16.1-4.5Z"/><path d="M8.2 7.5c-.8 2.5 2.1 6.7 5.9 8 .8.3 2.2-.7 2-1.4l-2.1-1.2-.9 1c-1.7-.8-3-2-3.7-3.7l1-.9-1.1-2.1c-.3-.5-.9-.3-1.1.3Z"/></svg>'; return span; };
  function image(src, alt, eager = false, position = 'center 43%') {
    const img = el('img'); img.src = src || D.imagery.fallback; img.alt = alt; img.loading = eager ? 'eager' : 'lazy'; img.decoding = 'async'; img.style.objectPosition = position;
    img.addEventListener('error', () => { if (img.dataset.fallback) return; img.dataset.fallback = 'true'; img.src = D.imagery.fallback; img.alt = 'Image unavailable — ROMANA ATELIER placeholder'; }); return img;
  }
  function waURL(product, size, colour) {
    let message = 'Hello ROMANA ATELIER, I would like to enquire about your collection.';
    if (product) {
      message = `Hello ROMANA ATELIER, I would like to enquire about:\nProduct: ${product.name}\nCode: ${product.code}\nPrice: ${money(product.price)}`;
      if (size) message += '\nSize: ' + size;
      if (colour) message += '\nColour: ' + colour;
      if (location.protocol === 'http:' || location.protocol === 'https:') message += '\nProduct URL: ' + new URL(productURL(product), location.href).href;
      message += '\nPlease confirm availability and final details. Thank you.';
    }
    return 'https://wa.me/' + D.whatsapp.number.replace(/\D/g, '') + '?text=' + encodeURIComponent(message);
  }
  function external(a) { a.target = '_blank'; a.rel = 'noopener noreferrer'; return a; }
  function eyebrow(text) { return el('p', 'eyebrow', text); }
  function button(text, href, outline = false) { return link(text + '  ↗', href, 'button' + (outline ? ' outline' : '')); }
  function heading(kicker, title, description) { const section = el('div', 'page-heading'); append(section, eyebrow(kicker), el('h1', '', title)); if (description) section.append(el('p', '', description)); return section; }
  function breadcrumbs(items) { const nav = el('nav','breadcrumb'); nav.setAttribute('aria-label','Breadcrumb'); items.forEach((item,i) => { if(i) nav.append(el('span','','/')); if(item[1])nav.append(link(item[0],item[1])); else { const t=el('span','',item[0]);t.setAttribute('aria-current','page');nav.append(t); } });return nav; }
  function card(p) {
    const article = el('article', 'product-card'); const a = link('', productURL(p), 'product-image'); a.setAttribute('aria-label', 'View ' + p.name);
    append(a, image(p.images[0], p.name + ' — ' + p.colour + (p.preview ? ', illustrated placeholder' : '')));
    const meta = append(el('div','product-meta'),el('span','',category(p.categoryIds[0])?.name || 'Collection'),el('span','',p.code));
    const h = append(el('h3'),link(p.name,productURL(p))); const price = el('p','price',money(p.price)); 
    const quick = el('button','quick-view-button','Quick View'); quick.type='button';quick.setAttribute('aria-label','Quick View: '+p.name);quick.addEventListener('click',()=>quickView(p,quick));
    return append(article,a,meta,h,price,quick);
  }
  function productGrid(products) { const grid = el('div','product-grid'); products.forEach(p=>grid.append(card(p))); return grid; }
  function sectionHead(kicker,title,cta,href) { const header = el('div','section-head'); const copy = append(el('div'),eyebrow(kicker),el('h2','',title)); header.append(copy); if(cta)header.append(link(cta+' ↗',href,'text-link'));return header; }
  // Hero autoplay is independent of the manual, native-scroll product carousel.
  function slider(entries, label, full = false) {
    const slides=entries?.length?entries:[{image:D.imagery.fallback,alt:'Image coming soon',caption:'Placeholder'}];
    const root=el('div','editorial-slider'+(full?' full-slider':''));root.setAttribute('role','region');root.setAttribute('aria-roledescription','carousel');root.setAttribute('aria-label',label);root.tabIndex=0;
    const stage=el('div','slider-stage'),panels=[];let active=0,timer=null,hovered=false,focused=false,paused=false;
    const motion=window.matchMedia('(prefers-reduced-motion: reduce)');const delay=Math.max(2000,Number(D.sliderSettings?.intervalMs)||5000);
    slides.forEach((s,i)=>{const panel=el('div','slider-panel'+(i===0?' is-active':''));panel.setAttribute('aria-hidden',String(i!==0));panel.setAttribute('role','group');panel.setAttribute('aria-roledescription','slide');panel.setAttribute('aria-label',s.alt);const img=image(s.image,s.alt,i===0);img.style.objectPosition=s.position||'center 45%';
      if(full&&s.mobileImage){const picture=el('picture','home-campaign-picture');const source=el('source');source.media='(max-width: 760px)';source.srcset=s.mobileImage;source.type='image/jpeg';img.className='home-campaign-image';img.width=1672;img.height=941;img.style.setProperty('--campaign-mobile-position',s.mobilePosition||'50% 0%');if(i===0)img.setAttribute('fetchpriority','high');append(picture,source,img);panel.append(picture);}else panel.append(img);
      panels.push(panel);stage.append(panel);});root.append(stage);
    const play=el('button','hero-motion-control');play.type='button';
    function stop(){if(timer!==null){clearTimeout(timer);timer=null;}}
    function sync(){stop();play.textContent=paused?'Resume slideshow':'Pause slideshow';play.setAttribute('aria-label',(paused?'Resume ':'Pause ')+label+' slideshow');play.setAttribute('aria-pressed',String(paused));play.disabled=motion.matches||slides.length<2;if(slides.length>1&&!paused&&!hovered&&!focused&&!document.hidden&&!motion.matches&&!document.body.classList.contains('modal-open'))timer=setTimeout(()=>{timer=null;active=(active+1)%slides.length;panels.forEach((p,j)=>{p.classList.toggle('is-active',j===active);p.setAttribute('aria-hidden',String(j!==active));});sync();},delay);}
    play.addEventListener('click',()=>{paused=!paused;sync();});root.append(play);
    root.addEventListener('mouseenter',()=>{hovered=true;sync();});root.addEventListener('mouseleave',()=>{hovered=false;sync();});root.addEventListener('focusin',()=>{focused=true;sync();});root.addEventListener('focusout',e=>{focused=root.contains(e.relatedTarget);sync();});document.addEventListener('visibilitychange',sync);document.addEventListener('romana:modalchange',sync);motion.addEventListener('change',sync);
    window.addEventListener('pagehide',stop);window.addEventListener('pageshow',sync);sync();return root;
  }
  function productCarousel(products, label = 'Product collection') {
    const root=el('div','product-carousel');root.setAttribute('role','region');root.setAttribute('aria-roledescription','carousel');root.setAttribute('aria-label',label+', manual carousel');
    const track=el('div','product-track');track.tabIndex=0;track.setAttribute('aria-label','Products. Swipe or use the previous and next controls.');products.forEach(p=>track.append(card(p)));
    const controls=el('div','product-carousel-controls');
    const arrow=dir=>{const n=el('button','carousel-arrow');n.type='button';n.setAttribute('aria-label',(dir<0?'Previous':'Next')+' products: '+label);n.innerHTML='<svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5"><path d="'+(dir<0?'m14 6-6 6 6 6':'m10 6 6 6-6 6')+'"/></svg>';return n;};const prev=arrow(-1),next=arrow(1);
    function measure(){const width=track.clientWidth;const cards=[...track.children];const step=cards.length>1?cards[1].offsetLeft-cards[0].offsetLeft:cards[0]?.getBoundingClientRect().width||width;const max=Math.max(0,track.scrollWidth-width);return {step:Math.max(1,step),max,width};}
    function update(){const {max}=measure(),left=Math.max(0,track.scrollLeft);prev.disabled=left<=1;next.disabled=left>=max-1;controls.hidden=max<=1;const image=track.querySelector('.product-image');if(image)root.style.setProperty('--image-band-height',image.getBoundingClientRect().height+'px');}
    function move(direction){const {step,max,width}=measure();const group=Math.max(1,Math.floor((width+1)/step));track.scrollTo({left:Math.max(0,Math.min(max,track.scrollLeft+direction*step*group)),behavior:window.matchMedia('(prefers-reduced-motion: reduce)').matches?'auto':'smooth'});}
    prev.addEventListener('click',()=>move(-1));next.addEventListener('click',()=>move(1));track.addEventListener('scroll',update,{passive:true});track.addEventListener('keydown',e=>{if(e.target!==track)return;if(e.key==='ArrowLeft'||e.key==='ArrowRight'){e.preventDefault();move(e.key==='ArrowLeft'?-1:1);}if(e.key==='Home'||e.key==='End'){e.preventDefault();track.scrollTo({left:e.key==='Home'?0:measure().max,behavior:'auto'});}});
    append(controls,prev,next);append(root,track,controls);const observer=typeof ResizeObserver==='function'?new ResizeObserver(update):null;observer?.observe(track);window.addEventListener('resize',update);const frame=requestAnimationFrame(update);root.dispose=()=>{observer?.disconnect();window.removeEventListener('resize',update);cancelAnimationFrame(frame);};return root;
  }

  // Native dialog makes the background inert; explicit Tab wrapping and close
  // handling also preserve focus and scroll when opened from any product card.
  function bindModal(dialog, close, restore, removeOnClose = false) {
    close.addEventListener('click',()=>dialog.close());
    dialog.addEventListener('cancel',e=>{e.preventDefault();dialog.close();});
    dialog.addEventListener('keydown',e=>{if(e.key!=='Tab')return;const items=[...dialog.querySelectorAll('a[href],button:not([disabled]),select,input,[tabindex="0"]')].filter(n=>!n.hidden);const first=items[0],last=items[items.length-1];if(e.shiftKey&&(document.activeElement===first||document.activeElement===dialog)){e.preventDefault();last?.focus();}else if(!e.shiftKey&&document.activeElement===last){e.preventDefault();first?.focus();}});
    dialog.addEventListener('click',e=>{if(e.target!==dialog)return;const r=dialog.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)dialog.close();});
    dialog.addEventListener('close',()=>{document.body.classList.remove('modal-open');document.dispatchEvent(new Event('romana:modalchange'));if(removeOnClose)dialog.remove();if(restore?.isConnected)restore.focus({preventScroll:true});});
  }
  function quickView(p, trigger) {
    const dialog=el('dialog','quick-view-dialog');dialog.setAttribute('aria-labelledby','quick-view-title');const close=el('button','zoom-close','Close ✕');close.type='button';close.setAttribute('aria-label','Close Quick View');
    const layout=el('div','quick-view-layout');const visual=el('div','quick-view-image');visual.append(image(p.images[0],p.name+(p.preview?' — illustrated placeholder':''),true));
    const details=el('div','quick-view-details');const name=el('h2','',p.name);name.id='quick-view-title';const price=el('p','detail-price',money(p.price));
    append(details,eyebrow(p.code),name,price,el('p','description',publicDescription(p)));
    let size=null;let colour=null;
    if(p.sizes?.length){const label=el('label','size-label','Size / fit');label.htmlFor='quick-size';size=el('select','product-select');size.id='quick-size';p.sizes.forEach(s=>{const o=el('option','',s);o.value=s;size.append(o);});append(details,label,size);}
    const colours=p.colours?.length?p.colours:(p.colour?[p.colour]:[]);
    if(colours.length){const label=el('label','size-label','Colour');label.htmlFor='quick-colour';colour=el('select','product-select');colour.id='quick-colour';colours.forEach(c=>{const o=el('option','',c);o.value=c;colour.append(o);});append(details,label,colour);}
    const shop=external(link('Shop WhatsApp',waURL(p,size?.value,colour?.value),'button enquire'));const update=()=>shop.href=waURL(p,size?.value,colour?.value);size?.addEventListener('change',update);colour?.addEventListener('change',update);
    append(details,shop,link('View Full Details',productURL(p),'text-link full-details'),el('p','enquiry-note','Review and send your message manually in WhatsApp. Please confirm availability and final pricing.'));
    append(layout,visual,details);append(dialog,close,layout);document.body.append(dialog);bindModal(dialog,close,trigger,true);dialog.showModal();document.body.classList.add('modal-open');document.dispatchEvent(new Event('romana:modalchange'));close.focus();
  }
  function socialLinks() {
    const group=el('div','social-links');group.setAttribute('role','group');group.setAttribute('aria-label','Social media');
    const paths={instagram:'<rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r=".6"/>',facebook:'<path d="M14 22V13h3l.5-4H14V7c0-1.2.5-2 2-2h2V1.5L15.5 1C12 1 10 3 10 6.5V9H7v4h3v9"/>',tiktok:'<path d="M14 3v12.5a4.5 4.5 0 1 1-4-4.5v3a1.5 1.5 0 1 0 1 1.5V3h3c.5 3 2 4.5 5 5v3c-2-.2-3.6-1-5-2"/>'};
    Object.entries(paths).forEach(([key,path])=>{const name={instagram:'Instagram',facebook:'Facebook',tiktok:'TikTok'}[key];let url;try{url=new URL(D.social?.[key]);if(!['http:','https:'].includes(url.protocol))url=null;}catch(_){url=null;}
      const item=url?external(link('',url.href,'social-icon')):el('span','social-icon social-placeholder');item.setAttribute('aria-label',name+(url?' (opens in a new tab)':' — Link coming soon'));item.title=name+(url?'':' — Link coming soon');if(!url)item.setAttribute('role','img');
      const icon=el('span');icon.innerHTML='<svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5">'+path+'</svg>';item.append(icon);group.append(item);
    });return group;
  }
  function shell() {
    const header = document.getElementById('site-header');
    const offer='Enjoy 15% Off on Orders Above PKR 5,000';
    const announcement=el('div','announcement');announcement.tabIndex=0;announcement.setAttribute('aria-label',offer);announcement.setAttribute('role','region');
    const marquee=el('div','announcement-track');marquee.setAttribute('aria-hidden','true');
    for(let i=0;i<2;i++){const group=el('div','announcement-group');for(let j=0;j<3;j++)group.append(el('span','',offer));marquee.append(group);}
    const staticOffer=el('p','announcement-static',offer);staticOffer.setAttribute('aria-hidden','true');append(announcement,marquee,staticOffer);header.append(announcement);
    const row = el('div','container brand-row'); const mark = link('ROMANA ATELIER','index.html','wordmark');const lockup=append(el('div','brand-lockup'),mark,el('p','brand-strapline','CONTEMPORARY ELEGANCE, ROOTED IN TRADITION'));
    const toggle = el('button','menu-toggle','Menu'); toggle.type='button'; toggle.setAttribute('aria-expanded','false');toggle.setAttribute('aria-controls','main-navigation');toggle.setAttribute('aria-label','Open navigation');
    const styleLink=external(link('','https://wa.me/'+D.whatsapp.number,'header-contact'));styleLink.setAttribute('aria-label','Private style enquiries on WhatsApp');append(styleLink,waIcon(),el('span','','PRIVATE STYLE ENQUIRIES'));
    append(row,append(el('div','header-note'),el('span','','THE ROMANA EDIT'),el('em','','A personal expression.')),lockup,styleLink,toggle);header.append(row);
    const wrap=el('div','nav-wrap'); const nav=el('nav','container nav'); nav.id='main-navigation';nav.setAttribute('aria-label','Main navigation');
    const navItems=[['Home','index.html','home'],['Boutique by Romana','catalogue.html','catalogue'],['Our Story','about.html','about'],['Contact Us','contact.html','contact']];
    navItems.forEach(([name,href,key])=>{const a=link(name,href,key==='catalogue'?'signature-nav':'');if(key===page || (page==='product' && key==='catalogue'))a.setAttribute('aria-current','page');nav.append(a);});wrap.append(nav);header.append(wrap);
    toggle.addEventListener('click',()=>{const open=toggle.getAttribute('aria-expanded')!=='true';toggle.setAttribute('aria-expanded',String(open));nav.classList.toggle('is-open',open);toggle.textContent=open?'Close':'Menu';toggle.setAttribute('aria-label',open?'Close navigation':'Open navigation');});
    document.addEventListener('keydown',e=>{if(e.key==='Escape' && toggle.getAttribute('aria-expanded')==='true'){toggle.click();toggle.focus();}});
    const footer=document.getElementById('site-footer');footer.className='site-footer';const content=el('div','container');const grid=el('div','footer-grid');const brand=el('div','footer-brand');const wordmark=link('ROMANA ATELIER','index.html','wordmark');append(brand,wordmark,el('p','','A considered edit of Pakistani women’s wear. From everyday ease to special occasions.'));
    const explore=append(el('div'),el('h3','','Explore'));[['Home','index.html'],['Boutique by Romana','catalogue.html'],['Our Story','about.html'],['Contact Us','contact.html']].forEach(x=>explore.append(link(...x)));
    const contact=append(el('div'),el('h3','','Let’s begin a conversation'),external(link(D.whatsapp.display+' ↗',waURL())),el('p','','Ask about a design, sizing or availability. You send the WhatsApp message when you are ready.'));
    contact.append(socialLinks());append(grid,brand,explore,contact);const bottom=append(el('div','footer-bottom'),el('span','',`© ${new Date().getFullYear()} ROMANA ATELIER`));append(content,grid,bottom);footer.append(content);
    const floating=external(link('','https://wa.me/'+D.whatsapp.number,'floating-wa'));floating.setAttribute('aria-label','Contact ROMANA ATELIER on WhatsApp (opens in a new tab)');append(floating,waIcon(),el('span','wa-tooltip','Chat with us'));document.body.append(floating);
    const sizeHeader=()=>document.documentElement.style.setProperty('--header-height',header.getBoundingClientRect().height+'px');if(typeof ResizeObserver==='function')new ResizeObserver(sizeHeader).observe(header);window.addEventListener('resize',sizeHeader);sizeHeader();
  }
  function home() {
    const hero=el('section','home-hero');hero.setAttribute('aria-label','ROMANA ATELIER collection');
    const visual=slider(D.sliders.home,'Home collection',true);hero.append(visual);
    const copy=el('div','home-hero-copy');const title=el('h1');append(title,document.createTextNode('A quiet kind'),el('br'),el('em','','of elegance.'));
    append(copy,eyebrow('ROMANA ATELIER · THE COLLECTION EDIT'),title,el('p','','Thoughtfully composed silhouettes. A style that is entirely yours.'),link('ROMANA WOMEN','catalogue.html','button'));
    visual.append(copy);main.append(hero);
  }
  function catalogue() {
    const hero=el('section','boutique-hero');const visual=el('div','boutique-portrait');visual.append(image('images/hero/boutique-woman-cutout.png','Woman wearing an ivory embroidered ensemble',true,'center bottom'));
    const backdrop=el('div','boutique-backdrop');backdrop.setAttribute('aria-hidden','true');backdrop.append(image('images/hero/boutique-clean-background.png','',true));
    const copy=append(el('div','boutique-copy'),el('h1','boutique-title','THE ROMANA WOMEN'),el('p','boutique-subtitle','Boutique by Romana'));
    const divider=el('span','boutique-divider');divider.setAttribute('aria-hidden','true');copy.append(divider);
    append(copy,el('p','boutique-description','Timeless elegance, modern femininity. Discover thoughtfully curated fashion for every chapter of your life.'),link('SHOP THE COLLECTION','#products','button'));
    const features=el('div','boutique-features');
    const featurePaths=['<path d="M5 5c5 3 9-3 14 0v14c-5-3-9 3-14 0Z"/><path d="M9 7v10m6-10v10"/>','<circle cx="12" cy="12" r="9"/><path d="M12 6v6l4 2"/>','<path d="M12 20S3 14 3 8a5 5 0 0 1 9-3 5 5 0 0 1 9 3c0 6-9 12-9 12Z"/>'];
    [['PREMIUM FABRICS','Quality you can feel'],['TIMELESS DESIGNS','Pieces that last'],['MADE FOR HER','Designed with care']].forEach(([title,text],i)=>{const feature=el('div','boutique-feature');const icon=el('span','boutique-feature-icon');icon.setAttribute('aria-hidden','true');icon.innerHTML='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round">'+featurePaths[i]+'</svg>';append(feature,icon,el('h2','',title),el('p','',text));features.append(feature);});
    const notes=el('div','boutique-feature-notes');[['WOMEN, INSPIRED','Fashion for every mood and moment.'],['EFFORTLESS STYLE',"From day to night, we've got you."],['EXCLUSIVE EDITS','Unique pieces, curated for you.']].forEach(([title,text])=>notes.append(append(el('div'),el('h2','',title),el('p','',text))));append(copy,features);
    const imageArea=append(el('div','boutique-visual'),backdrop,visual,notes);
    append(hero,copy,imageArea);main.append(hero);
    const container=el('section','container catalogue-bottom products-section');container.id='products';container.tabIndex=-1;container.setAttribute('aria-label','All products');
    copy.querySelector('a').addEventListener('click',()=>container.focus({preventScroll:true}));
    append(container,sectionHead('THE COMPLETE EDIT','DISCOVER THE COLLECTION'));
    const search=el('input');search.type='search';search.id='product-search';search.placeholder='Search the collection';
    const searchIcon=el('span','search-icon');searchIcon.innerHTML='<svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="10.5" cy="10.5" r="6.5"/><path d="m16 16 5 5"/></svg>';
    const clearSearch=el('button','clear-search','\u00d7');clearSearch.type='button';clearSearch.setAttribute('aria-label','Clear search');clearSearch.hidden=true;clearSearch.addEventListener('click',()=>{search.value='';update();search.focus();});
    const sort=el('select');sort.id='price-sort';[['featured','Collection order'],['low','Price: low to high'],['high','Price: high to low']].forEach(([v,t])=>{const o=el('option','',t);o.value=v;sort.append(o);});
    const count=el('p','sr-only collection-status');count.setAttribute('role','status');count.setAttribute('aria-live','polite');const output=el('div');let currentCarousels=[];
    const byId=new Map(D.products.map(p=>[p.id,p]));const assigned=new Set();
    const rows=(D.catalogueRows||[]).map(row=>({...row,products:(row.productIds||[]).filter(id=>{if(!byId.has(id)||assigned.has(id))return false;assigned.add(id);return true;}).map(id=>byId.get(id))}));
    function update(){
      clearSearch.hidden=!search.value;const term=search.value.trim().toLowerCase();currentCarousels.forEach(c=>c.dispose());currentCarousels=[];output.replaceChildren();let total=0;
      rows.forEach(row=>{let products=row.products.filter(p=>[p.name,p.code,p.fabric,p.colour,p.description,...p.categoryIds.map(id=>category(id)?.name||'')].join(' ').toLowerCase().includes(term));if(sort.value==='low')products.sort((a,b)=>a.price-b.price);if(sort.value==='high')products.sort((a,b)=>b.price-a.price);if(!products.length&&term)return;total+=products.length;
        const section=el('section','catalogue-row');const title=el('h2','catalogue-row-title',row.title);title.id='row-title-'+row.id;section.setAttribute('aria-labelledby',title.id);section.append(title);
        if(products.length){const carousel=productCarousel(products,row.title);currentCarousels.push(carousel);section.append(carousel);}else section.append(el('p','muted','New designs will appear here.'));
        output.append(section);
      });
      count.textContent=total+' design'+(total===1?'':'s');if(!total&&term){const empty=append(el('div','empty-state'),el('h2','','No designs found'),el('p','','Try a different search to find your design.'));const reset=el('button','button','Clear search');reset.type='button';reset.addEventListener('click',()=>{search.value='';sort.value='featured';update();search.focus();});empty.append(reset);output.append(empty);}
    }
    const searchLabel=el('label','sr-only','Search the collection');searchLabel.htmlFor=search.id;const sortLabel=el('label','','Sort');sortLabel.htmlFor=sort.id;
    append(container,append(el('div','catalogue-tools'),append(el('div','field search-field'),searchLabel,searchIcon,search,clearSearch),count,append(el('div','field sort-field'),sortLabel,sort)),output);main.append(container);search.addEventListener('input',update);sort.addEventListener('change',update);update();
  }
  function product() {
    const id=new URLSearchParams(location.search).get('id');const p=D.products.find(p=>p.id===id);const container=el('div','container');main.append(container);
    if(!p){document.title='Design not found | ROMANA ATELIER';append(container,heading('THE ATELIER','Design not found','This product link may have changed. Explore the catalogue to find a design.'),button('Back to catalogue','catalogue.html'));container.classList.add('section');return;}
    document.title=p.name+' | ROMANA ATELIER';document.querySelector('meta[name=description]').content=publicDescription(p);
    container.append(breadcrumbs([['Home','index.html'],['Boutique by Romana','catalogue.html'],[p.name]]));const layout=el('section','product-layout');const gallery=el('div');const large=el('button','main-image-button');large.type='button';large.setAttribute('aria-label','Enlarge image of '+p.name);const current=image(p.images[0],p.name+' — '+p.colour+(p.preview?', illustrated placeholder':''),true);append(large,current,el('span','zoom-hint','＋ View larger'));
    const thumbs=el('div','thumbnails');thumbs.setAttribute('role','group');thumbs.setAttribute('aria-label','Product images');let active=0;const thumbButtons=[];
    p.images.forEach((src,i)=>{const b=el('button','thumbnail');b.type='button';b.setAttribute('aria-label','Show image '+(i+1)+' of '+p.images.length);b.setAttribute('aria-pressed',String(i===0));b.append(image(src,p.name+' gallery image '+(i+1)+(p.preview?' — placeholder':'')));b.addEventListener('click',()=>{active=i;delete current.dataset.fallback;current.src=src;current.alt=p.name+' — image '+(i+1)+(p.preview?', illustrated placeholder':'');thumbButtons.forEach((x,j)=>x.setAttribute('aria-pressed',String(i===j)));});thumbButtons.push(b);thumbs.append(b);});append(gallery,large,thumbs);
    const detail=el('div','product-details');append(detail,eyebrow((category(p.categoryIds[0])?.name||'Collection')+' / '+p.code),el('h1','',p.name));const price=el('p','detail-price',money(p.price));append(detail,price,el('p','description',publicDescription(p)));
    const specs=el('dl','specs');[['Fabric',publicDetail(p.fabric)],['Colour',p.colour],['Pieces',String(p.pieces)],['Product code',p.code]].forEach(([k,v])=>specs.append(append(el('div'),el('dt','',k),el('dd','',v))));detail.append(specs);
    let size=null;if(p.sizes?.length){const label=el('label','size-label','Select size / fit');label.htmlFor='selected-size';size=el('select','product-select');size.id='selected-size';p.sizes.forEach(s=>{const option=el('option','',s);option.value=s;size.append(option);});append(detail,label,size);}
    const enquiry=external(link('',waURL(p,size?.value,p.colour),'button enquire'));append(enquiry,waIcon(),el('span','','Shop WhatsApp'));size?.addEventListener('change',()=>enquiry.href=waURL(p,size.value,p.colour));append(detail,enquiry,el('p','enquiry-note','Opens WhatsApp with this design’s details. You review and send the message manually. Confirm availability, sizing and final price with us.'));
    const included=append(el('div','included'),el('h2','','What’s included'));const ul=el('ul');p.included.forEach(t=>ul.append(el('li','',publicDetail(t))));included.append(ul);detail.append(included);append(layout,gallery,detail);container.append(layout);
    const related=D.products.filter(x=>x.id!==p.id&&x.categoryIds.some(c=>p.categoryIds.includes(c)));const others=D.products.filter(x=>x.id!==p.id&&!related.includes(x));const section=el('section','section related');append(section,sectionHead('CONTINUE EXPLORING','You may also like','All designs','catalogue.html'),productGrid([...related,...others].slice(0,4)));container.append(section);
    const dialog=el('dialog','zoom-dialog');dialog.setAttribute('aria-label','Enlarged image of '+p.name);const close=el('button','zoom-close','Close ✕');close.type='button';const zoomImage=image(p.images[0],p.name+' enlarged image');append(dialog,close,zoomImage);document.body.append(dialog);
    large.addEventListener('click',()=>{delete zoomImage.dataset.fallback;zoomImage.src=p.images[active];zoomImage.alt=current.alt;dialog.showModal();document.body.classList.add('modal-open');document.dispatchEvent(new Event('romana:modalchange'));close.focus();});bindModal(dialog,close,large);
  }
  function editorialFigure(entry, cls, eager = false) {
    const figure=el('figure',cls);append(figure,image(entry.image,entry.alt,eager,entry.position));return figure;
  }
  function about() {
    const storyPage=el('article','story-editorial');const article=el('div','container story-body');
    const intro=el('header','story-intro');
    const title=append(el('h1'),el('span','story-intro-title','A STORY OF PASSION, PURPOSE &'),document.createTextNode(' '),el('span','story-intro-script','Timeless Beauty'));
    const divider=el('span','story-intro-divider');divider.setAttribute('aria-hidden','true');divider.innerHTML='<svg viewBox="0 0 180 24" fill="none" stroke="currentColor" stroke-width=".8"><path d="M0 12h64m52 0h64M65 12c8-12 20-12 25 0s17 12 25 0c-8-12-20-12-25 0s-17 12-25 0Z"/><circle cx="90" cy="12" r="2"/></svg>';
    const introduction=append(el('div','story-intro-copy'),eyebrow('OUR STORY'),title,divider,el('p','story-deck','Romana Atelier is more than a store \u2014 it is a celebration of lifestyle, heritage and the art of beautiful living. It all began with a simple belief: that the things we choose to surround ourselves with, should tell a story, carry meaning, and last for generations.'));
    append(intro,introduction,editorialFigure(D.editorial.storyHero,'story-hero-image',true));
    append(storyPage,intro,article);
    const lead=el('div','story-lead');const figure=editorialFigure(D.editorial.storyEveryday,'story-figure');
    const first=append(el('section','story-prose'),eyebrow('01 / A PERSONAL EXPRESSION'),el('h2','','Begin with what feels like you.'),el('p','','Clothes are part of the language we use to move through the world. A colour can feel reassuring; a silhouette can give a familiar day a different rhythm. Personal style does not need to be loud or follow a single direction. It can be quiet, expressive, romantic or practical, changing with the life around it.'),el('p','','ROMANA ATELIER is a Pakistani women’s boutique catalogue created as a space to explore those choices. Our edit brings everyday dressing and occasion wear into one conversation, leaving room for you to decide what feels right. Start with a detail that catches your eye, then imagine how you would make it your own.'));append(lead,figure,first);article.append(lead);
    const second=append(el('section','story-prose story-middle'),eyebrow('02 / ROOTED IN TRADITION'),el('h2','','Familiar forms, individual possibilities.'),el('p','','Pakistani dressing offers a rich vocabulary of proportion, colour and layering. The interplay of a shirt, trousers and dupatta makes room for both familiarity and interpretation. An unstitched design invites you to consider your preferred length and shape; a ready-to-wear piece offers a silhouette to build around.'),el('p','','Tradition can be something we return to while still dressing for the present. A softer palette, a different drape or an unexpected pairing can make a familiar form feel personal. In this catalogue, unstitched designs sit alongside casual wear and luxury pret, offering different starting points for that exploration.'));const tradition=el('div','story-tradition');append(tradition,second,editorialFigure(D.editorial.storyTradition,'story-figure'));article.append(tradition);
    const quote=el('blockquote','story-pullquote','“The most personal detail is the way you choose to wear it.”');article.append(quote);
    const final=el('div','story-final');const text=el('div');append(text,append(el('section','story-prose'),eyebrow('03 / THE EVERYDAY'),el('h2','','An elegance of your own.'),el('p','','Everyday style is shaped by real moments: getting ready for the day, meeting someone you love, taking time for yourself. A relaxed shape or a favourite shade can become part of your own routine. There is pleasure in finding combinations that feel natural, and in wearing them in a way that suits your day.')),append(el('section','story-prose'),eyebrow('04 / MEANINGFUL OCCASIONS'),el('h2','','For the moments you remember.'),el('p','','Celebrations invite a different kind of attention. Formal and bridal dressing can hold a sense of anticipation, whether you are drawn to a romantic colour, an ornamental detail or the movement of a layered silhouette. Begin with how you want to feel, rather than a rule about what an occasion must look like.'),el('p','','Explore the designs at your own pace. When something speaks to you, ask about the product, sizing and availability on WhatsApp. A conversation gives you space to consider the details before deciding on your next piece.')));
    const lastImage=editorialFigure(D.editorial.storyOccasion,'story-figure story-figure-secondary');append(final,text,lastImage);article.append(final);
    append(article,append(el('section','story-closing'),el('p','story-signature','With a sense of self, Romana'),eyebrow('CONTINUE THE CONVERSATION'),append(el('h2'),document.createTextNode('Find a piece of '),el('em','signature-accent','your story.')),el('p','','Discover the full edit, from everyday ease to your next meaningful occasion.'),button('Boutique by Romana','catalogue.html')));main.append(storyPage);
  }
  function contact() {
    const contactPage=el('div','contact-page');const container=el('div','container');const composition=el('section','contact-composition');const visual=editorialFigure(D.editorial.contact,'contact-image',true);
    const copy=el('div','contact-copy');append(copy,eyebrow('CONTACT US / A PERSONAL CONVERSATION'),append(el('h1'),document.createTextNode('A little guidance. '),el('em','signature-accent','A personal touch.')),el('span','ornamental-rule'),el('p','contact-deck','A design you love. A question about fit. An occasion on your mind. Let’s begin with a conversation.'));
    const panel=append(el('div','contact-panel'),waIcon(),append(el('div'),el('p','eyebrow','WHATSAPP'),link(D.whatsapp.display,'https://wa.me/'+D.whatsapp.number,'contact-number')));
    append(copy,panel,external(link('Chat on WhatsApp','https://wa.me/'+D.whatsapp.number,'button')),el('p','enquiry-note','You review and send your message manually in WhatsApp.'));append(composition,visual,copy);append(contactPage,composition,container);
    const notes=el('section','contact-guidance');append(notes,append(el('div'),eyebrow('THE DETAILS THAT HELP'),el('h2','','Tell us what you have in mind.')),append(el('div'),el('p','','Ask about products, fabrics, sizing, availability or orders. Share a product name or code and your preferred size so we can discuss the details with you.'),el('p','','The Shop WhatsApp button on each design prepares its details for you. Availability, sizing and final pricing are confirmed in conversation.'),link('Explore Boutique by Romana ↗','catalogue.html','text-link')));append(container,notes);main.append(contactPage);
  }
  shell();({home,catalogue,product,about,contact}[page]||home)();
})();
