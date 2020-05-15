"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
require("rxjs/add/operator/map");
core_1.Injectable();
var SpotifyService = /** @class */ (function () {
    function SpotifyService(_http) {
        this._http = _http;
    }
    SpotifyService.prototype.searchMusic = function (searchStr, type) {
        if (type === void 0) { type = 'album'; }
        this.searchUrl = "https://api.spotify.com/v1/search?q=" + searchStr + "&offset=0&limit=20&type=" + type;
        return this._http.get(this.searchUrl);
    };
    return SpotifyService;
}());
exports.SpotifyService = SpotifyService;
//# sourceMappingURL=spotify.service.js.map