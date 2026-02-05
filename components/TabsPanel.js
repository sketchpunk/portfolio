import { html }         from '@tp/preact/htm_preact.mjs';
import { icoRoute }     from '@lib/Icon.js';
import * as store       from '@data/store.js';

export default function TabsPanel(){
    const selKey = store.data.tabSelected

    return html`
    <div class="tabs-panel">
        <main>
            ${store.data.tabs.map( i=>html`
                <div class="${i.key === selKey? 'active': ''}">
                    <header>${icoRoute(i.key)}</header>
                    <main onClick="${()=>store.selectTab( i.key )}" >${i.title}</main>
                    <footer onClick="${()=>store.closeTab( i.key )}"><i class="fa-solid fa-rectangle-xmark"></i></footer>
                </div>
            `)}

            <!--<div class="active">
                <header>i</header>
                <main>TMP</main>
                <footer>x</footer>
            </div>-->
        </main>
        <footer>
            <button class=""><${IcoPanel}/></button>
        </footer>
    </div>`;
}

function IcoPanel(){
    return html`<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect width="18" height="18" x="3" y="3" rx="2"></rect><path d="M15 3v18"></path></svg>`;
}
