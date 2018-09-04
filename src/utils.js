export function toArray(arry, index) {
    index = index || 0
    return [...arry].slice(index)
}

export function replace(target, el) {
    const parent = target.parentNode;
    if (parent) {
        parent.replaceChild(el, target)
    }
}

export function extend(to, from) {
    const keys = Object.keys(from)
    let i = keys.length
    while (i--) {
        to[keys[i]] = from[keys[i]]
    }
    return to
}

export function on(el, event, cb, useCapture) {
    el.addEventListener(event, cb, useCapture)
}

export function off(el, event, cb) {
    el.removeEventListener(event, cb)
}

export function bind(fn, ctx) {
    return function (a) {
        var l = arguments.length
        return l ? l > 1 ? fn.apply(ctx, arguments) : fn.call(ctx, a) : fn.call(ctx)
    }
}