import attribute from './attr';

function normalize(...args) {
    let real = args;

    if (args.length == 0) {
        real = Array.of({ if: true, val: '' });
    }

    if (args.length > 1 && typeof args[1] === 'string') {
        real = Array.of({ if: args[0], val: args[1], else: args[2] });
    }

    let maped = real.map(argFilter);

    return maped;
}

function argFilter(arg, ind, arr) {
    let real = null;
    if (typeof arg !== 'object') {
        real = { val: arg };
    } else {
        real = Object.assign(arg);
    }

    if (!real.hasOwnProperty('if')) {
        real.if = true;
    }

    if (!real.hasOwnProperty('val')) {
        real.val = '';
    }

    if (ind == (arr.length - 1) && !real.hasOwnProperty('else')) {
        real.else = '';
    }

    return real;
}

function attr(...args) {
    let realArgs = normalize(...args);
    return attribute(...realArgs);
}

export default attr;