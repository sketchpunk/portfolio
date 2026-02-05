import { useSignal }  from '@tp/preact/signals.mjs';
import { html }       from '@tp/preact/htm_preact.mjs';

export default function PanelSection( { title, children, defaultOpen=true } ){
    const isOpen = useSignal( defaultOpen );
    const cssChev = isOpen.value ? '': 'close';

    return html `
        <section class='panel-section'>
            <header onClick=${() => isOpen.value = !isOpen.value}>
                <i class="${cssChev}"><${IcoChevron}/></i>
                <span>${title}</span>
            </header>
            <main>${ isOpen.value? children : null }</main>
        </section>
    `;
}

function IcoChevron(){
    return html`<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-down text-[var(--text-secondary)]" aria-hidden="true"><path d="m6 9 6 6 6-6"></path></svg>`;
}
