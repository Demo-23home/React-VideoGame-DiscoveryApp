
const getCroppedImage = (url:string) => {
    if (!url) return '';
    const target = 'media/'.length;
    const index = url.indexOf('media/') + target;
    return url.slice(0, index) + 'crop/600/400/' + url.slice(index); 
}   

export default getCroppedImage; 