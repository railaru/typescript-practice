class Emoji {
    constructor(icon) {
        this.icon = icon;
    }
}
const sun = new Emoji('🌞');
//public
class Emoji2 {
    constructor(icon2) {
        this.icon2 = icon2;
    }
}
const sun2 = new Emoji2('🌞');
sun2.icon2 = '💩';
//private
class PrivateEmoji {
    constructor(_icon) {
        this._icon = _icon;
    }
    get icon() {
        return this._icon;
    }
    get prev() {
        return this._prev;
    }
    change(val) {
        this._prev = this._icon;
        this._icon = val;
    }
}
const emoji = new PrivateEmoji('🌞');
console.log(emoji.icon, emoji.prev);
emoji.change('⚡');
emoji.change('🐵');
console.log(emoji.icon, emoji.prev);
//static methods
class StaticEmoji {
    static addOneTo(val) {
        return 1 + val;
    }
}
StaticEmoji.addOneTo(3);
