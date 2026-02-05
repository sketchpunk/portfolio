import { html }     from '@tp/preact/htm_preact.mjs';
import { icoRoute } from '@lib/Icon.js';
import * as store   from '@data/store.js';

export default function Breadcrumb(){
    const selKey = store.data.tabSelected;
    const tab    = store.data.tabs.find( i=>i.key === selKey );

    const ary    = selKey? selKey.split( '/' ).filter(Boolean) : [];
    const itms   = ary.slice( 0, -1 );

    return html`
        <div class="crumbs">
            <i class="fa-solid fa-circle" style="color:#00cc00; font-size:0.8em;"></i>
            <span>SketchPunk_Labs</span>
            <i class="fa-solid fa-angle-right" style="color:#505050;"></i>

            ${ itms.map( (o,i)=>html`
                <i class="fa-regular fa-folder"></i>
                <span>${o}</span>
                <i class="fa-solid fa-angle-right" style="color:#505050;"></i>
            `)}

            ${ selKey && icoRoute(ary.at(-1)) }
            ${ selKey && html`<span>${ary.at(-1)}</span>` }
        </div>
    `;
}
