import * as store   from '@data/store.js';

export default class Router{
    routes = {};
    constructor(){
        window.addEventListener( 'hashchange', this.onHashChg );
    }

    goto( path ){
        const r = this.routes[ path ];
        if( !r ){
            console.log( 'Route not found:', path );
            return;
        }

        // window.location.hash = path;
        store.loadTabContent( r.path, r.content );
        return this;
    }

    loadJson( json ){
        let r;
        for( const i of json ){
            r = Route.fromJson( i );
            this.routes[ r.path ] = r;
        }
        return this;
    }

    check(){
        const route = window.location.hash.slice(1);
        if( route ){
            this.goto( route );
            return true;
        }

        return false;
    }

// #region EVENT HANDLERS
    onHashChg = ()=>{
        const hash = window.location.hash.slice(1) || '/'
        console.log( 'HASH', hash );
    };
// #endregion

// #region STATIC
    static _instance_ = null;
    static get instance(){
        return ( Router._instance_ )
            ? Router._instance_
            : ( Router._instance_ = new Router() );
    }
// #endregion
}

class Route{
    path    = '';
    title   = '';
    content  = '';
    constructor(){}

    static fromJson( json ){
        const rtn   = new Route();
        rtn.path    = json.path;
        rtn.title   = json.title;
        rtn.content = json.content;
        return rtn;
    }
}
