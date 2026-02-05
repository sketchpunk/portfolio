import { deepSignal, peek, shallow } from '@tp/preact/deepsignal.mjs';

export const data = deepSignal({
    tabs        : [],
    tabSelected : null,
});

// #region MANAGE TABS
    export async function loadTabContent( key, content ){
        // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
        // Switch to tab
        const tab = data.tabs.find( i=>i.key === key );
        if( tab ){
            data.tabSelected = key;
            return;
        }

        // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
        // Download tab content
        const mod = await import( globalThis.ROOTPATH + content );
        data.tabs = [ ...data.tabs, shallow({
            key,
            title   : mod.default.title,
            content : mod.default,
        }) ];

        data.tabSelected = key;
        window.location.hash = key;
    }

    export async function closeTab( key ){
        data.tabs = data.tabs.filter( i=>( i.key !== key ) );

        if( data.tabs.length > 0 ){
            data.tabSelected     = data.tabs.at( -1 ).key;
            window.location.hash = data.tabSelected;
        }else{
            window.location.hash = '';
            data.tabSelected = null;
        }
    }

    export async function selectTab( key ){
        if( data.tabSelected === key ) return;

        const tab = data.tabs.find( i=>( i.key === key ) );

        if( tab ){
            data.tabSelected     = tab.key;
            window.location.hash = tab.key;
        }else{
            console.log( 'Can not select tab, key not found: ', key );
        }
    }

    export async function loadRoute( route ){
        console.log( route );
    }
// #endregion
