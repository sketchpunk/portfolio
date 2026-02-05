import { html } from '@tp/preact/htm_preact.mjs';

export function icoRoute( path ){
    const ext = path.substr( path.lastIndexOf( '.' )+1 );
    switch( ext ){
        case 'txt'  : return html`<i class='fa-regular fa-file-lines' style='color:#6fba65'></i>`;
        case 'tsx'  : return html`<i class='fa-regular fa-file-code' style='color:#cc9349'></i>`;
        case 'md'   : return html`<i class='fa-regular fa-eye' style='color:#2eb6bf'></i>`;
    }
    return null;
}
