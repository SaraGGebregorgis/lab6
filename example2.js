function isMinnesotaZip(code) {
    if (code >= 55881 && code <= 56763) {
        return true
    } else {
        return false
    }
}

console.log(isMinnesotaZip('55483'))