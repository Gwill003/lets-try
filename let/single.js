function randomString(len) {
    len = len || 32;

    const chars =
        'ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678';

    let result = '';

    for (let i = 0; i < len; i++) {
        result += chars.charAt(
            Math.floor(Math.random() * chars.length)
        );
    }

    return result;
}
