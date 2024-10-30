import md5 from "md5";

export function getAuthConnection() {
    const publicKey = import.meta.env.VITE_MARVEL_PUBLIC_KEY;
    const privateKey = import.meta.env.VITE_MARVEL_PRIVATE_KEY;
    const ts = new Date().getTime();
    const hash = md5(ts+privateKey+publicKey)
    return `ts=${ts}&apikey=${publicKey}&hash=${hash}` 
}