// #region IMPORTS
    import { html }     from '@tp/preact/htm_preact.mjs';
    import { useSignal }  from '@tp/preact/signals.mjs';
    import SelectBox    from '@ui/SelectBox.js';
    import JSON         from '@data/demos.json' with { type:'json' };
// #endregion

export default function content(){
    const imgPath   = globalThis.ROOTPATH + '/pages/img/demos';
    const aryTypes  = [...new Set( JSON.map( i=>i.type ) )];

    const nType     = useSignal( 0 );
    const sType     = aryTypes[ nType.value ];
    const items     = JSON.filter( i=>( i.type === sType ) );

    const modal     = useSignal( {} );

    const onSel     = v=>{ nType.value = v.target.value };
    const onDetail  = v=>{ modal.value = { isOpen:true, desc:v.desc, title:v.title } };
    const onClose   = ()=>{ modal.value = {} };

    return html`<div>
        <${Modal} ...${modal.value} onClose=${onClose}/>
        <div style="display:flex; flex-direction:row; align-items:center; gap:10px; padding:15px 30px 0px 20px;">
            <span>Categories</span>
            <${SelectBox} items='${aryTypes}' value=${nType.value} onChange=${onSel} style='flex:0 0 200px;'/>
        </div>
        <div class="demos">
            ${items.map( i=>{ return html`
                <section>
                    <header style="background-image:url('${imgPath+i.img}');"></header>
                    <main>
                        <a href="${i.url}" target="_blank">${i.title}</a>
                        <div>
                            <a href="javascript:void(0)" title="View Details" onClick=${()=>onDetail(i)}><i class="fa-solid fa-circle-info"></i></a>
                        </div>
                    </main>
                </section>
            `})}
        </div>
    </div>`;
}

content.title = 'Demos';

function Modal( {isOpen=false, title="", desc="", onClose } ){
    return html`<div class="modal ${isOpen?'active':''}" onClick=${()=>onClose()}>
        <section>
            <header>Details: ${title}</header>
            <main>${desc}</main>
        </section>
    </div>`;
}
