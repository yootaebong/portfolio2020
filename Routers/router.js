'use strict'
class Names {

    constructor(){
        this._defaultControllerPath = `../ControllersJS/`;
        this._pathname = document.location.pathname
        this._controllerName = this._pathname.replace(`/`,``).replace(`.html`,``);
        this._controllerName = this._controllerName ? this._controllerName : `index`;
    }

    get defaultControllerPath(){
        return this._defaultControllerPath;
    }

    get pathname(){
        return this._pathname;
    }

    get controllerName(){
        return this._controllerName;
    }
    // 주소값에서 파일명만 뽑아와서 확장자를 js로 변경.
    findControllerPath(){
        return `${this._defaultControllerPath}${this._controllerName}.js`;
    }
}
// 즉시 실행 되는 펑션. asnyc 버전
(async () => {
    const names = new Names();
    const controller = await import(names.findControllerPath());
    controller.lifeCycle();
})()
