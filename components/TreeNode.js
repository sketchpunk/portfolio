// #region IMPORTS
    import { html }         from '@tp/preact/htm_preact.mjs';
    import { useSignal }    from '@tp/preact/signals.mjs';

    import Router           from '@lib/Router.js';
    import { icoRoute }     from '@lib/Icon.js';
// #endregion


export default function TreeNode( { json, depth=0, path="" } ){
    const isOpen  = useSignal( true );

    const icoChev = json.type === 'folder'? IcoChevron() : '';
    const cssChev = isOpen.value ? '': 'close';
    const onChev  = json.type !== 'folder'
        ? e=>{ Router.instance.goto( npath ) }
        // ? e=>{ console.log( npath ) }
        : e=>{ isOpen.value = !isOpen.value; };

    const ident   = depth * 15;
    const npath   = path + '/' + json.name;

    const ico     = json.type === 'folder'
        ? html`<i class="${isOpen.value? "fa-regular fa-folder-open" : "fa-regular fa-folder"}"></i>`
        : icoRoute( npath );

    return html`<section class="tree-node">
        <header onClick=${onChev}>
            <div style="width:${ident}px;"></div>
            <i class="${cssChev}">${icoChev}</i>
            ${ico}
            <span title="${npath}">${json.name}</span>
        </header>
        <main class="${cssChev}">
            ${json.children && json.children.map(i=>html`<${TreeNode} json=${i} depth=${depth+1} path="${npath}" />`)}
        </main>
    </section>`;
}

function IcoChevron(){
    return html`<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-down text-[var(--text-secondary)]" aria-hidden="true"><path d="m6 9 6 6 6-6"></path></svg>`;
}

// function IcoFolderClose(){
//     return html`<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"></path></svg>`;
// }

// function IcoFolderOpen(){
//     return html`<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m6 14 1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2"></path></svg>`;
// }

// function IcoText(){
//     return html`<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"></path><path d="M14 2v5a1 1 0 0 0 1 1h5"></path><path d="M10 9H8"></path><path d="M16 13H8"></path><path d="M16 17H8"></path></svg>`;
// }

// function IcoAtom(){
//     return html`<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="1"></circle><path d="M20.2 20.2c2.04-2.03.02-7.36-4.5-11.9-4.54-4.52-9.87-6.54-11.9-4.5-2.04 2.03-.02 7.36 4.5 11.9 4.54 4.52 9.87 6.54 11.9 4.5Z"></path><path d="M15.7 15.7c4.52-4.54 6.54-9.87 4.5-11.9-2.03-2.04-7.36-.02-11.9 4.5-4.52 4.54-6.54 9.87-4.5 11.9 2.03 2.04 7.36.02 11.9-4.5Z"></path></svg>`;
// }

// function IcoFileData(){
//     return html`<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"></path><path d="M14 2v5a1 1 0 0 0 1 1h5"></path><path d="M10 12a1 1 0 0 0-1 1v1a1 1 0 0 1-1 1 1 1 0 0 1 1 1v1a1 1 0 0 0 1 1"></path><path d="M14 18a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1 1 1 0 0 1-1-1v-1a1 1 0 0 0-1-1"></path></svg>`;
// }

// red = oklch(70.4% .191 22.216);
//     --color-blue-400: oklch(70.7% .165 254.624);
//     --color-yellow-400: oklch(85.2% .199 91.936);
// --color-orange-600: oklch(64.6% .222 41.116);
// --color-cyan-400: oklch(78.9% .154 211.53);
