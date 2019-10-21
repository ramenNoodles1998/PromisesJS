
var img;
function setup(){
    document.getElementById("btn").addEventListener('click', function(){
        let input = document.getElementById("text").value;
        let giphyApi = `https://api.giphy.com/v1/gifs/search?api_key=llhKshOrFlGFsQcpOaaeiv37SEQmata7&q=${input}&limit=25&offset=0&rating=G&lang=en`
        fetch(giphyApi)
        .then((response)=>{
            return response.json();
        }).then(json=>{
            createImg(json.data[0].images['fixed_height_small'].url);
        
        })
        .catch((err)=>console.log(err))
    })

    noCanvas();
    
   
}