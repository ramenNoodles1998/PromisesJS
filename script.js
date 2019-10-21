let giphyApi = "https://api.giphy.com/v1/gifs/random?api_key=llhKshOrFlGFsQcpOaaeiv37SEQmata7&tag=&rating=G"
function setup(){
    noCanvas();
    let promise = fetch(giphyApi);
    console.log(promise);
}