export function isReleaseBuild() {
    return process.env.NODE_ENV === 'release';
}
