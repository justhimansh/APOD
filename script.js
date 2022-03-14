const url = 'https://api.nasa.gov/planetary/apod?api_key='
const apiKey = "0kccawQfzF9goWVdB0Ge6Fm5y74Jdcv273gJ0jI8"

const dated = document.querySelector("#date-input")
const button = document.querySelector("#hello")

const background = true;

let myPromise = new Promise(function(getPicture, Reject) {
    // "Producing Code" (May take some time)
    
      getPicture(); // when successful
      Reject();  // when error
    });
    
    // "Consuming Code" (Must wait for a fulfilled Promise)
    myPromise.then(
      function(value) { /* code if successful */ },
      function(error) { /* code if some error */ }
    );  







dated.addEventListener("change", (e) => {
    console.log(e.target.value)
    let newDate = "&date="+e.target.value+"&";
    getPicture(newDate)
    })

function getPicture(date) {
    const media = document.querySelector("media-section")

    try {
        fetch(url + apiKey + date)
            .then(response => response.json())
            .then(data => {console.log(data)

            setTimeout(displayData(data), 4000)
            

            
            
            console.log(dated.value)

            console.log(dated.value + 1)
            })
    } catch (error) {
        console.log("error")
    }



    function displayData(data) {
        

        //title.innterHTML = data.title

        // if (data.media_type == "video") {
        //     mediaSection.innerHTML = videoSection;
        //     document.getElementById("videoLink").src = data.url;
        // } else {
           // mediaSection.innerHTML = imageSection;
            document.getElementById("hdimg").href = data.hdurl;
            document.getElementById("image_of_the_day").src = data.url;

            
                document.getElementById("pls").innerHTML = `<h1 class="animate glow delay2 hovereff" id="title"></h1> 
                            
                </h1>`;
                
                document.getElementById("title").innerHTML = data.title;

                paragraph();

                function paragraph(){
                    document.getElementById("para").innerHTML = `<p  class="white animate glow delay3 hovereff" id="explanation"></p></p>`
                    document.getElementById("explanation").innerHTML = data.explanation;
                }

                
                                    
                

                

                

               
                

            

        // }

        const imageSection = `<h1 class="animate glow delay2 hovereff" id="title" >
                            
        </h1>`

        const videoSection = `<div class="video-div>> <iframe id="videoLink" src="" frameborder="0"></iframe></div>`
    }

    function backgroundpls(){
        if(background){
            
           return document.body.classList += " removebackground"
        } 
        
    }


    

}

function reject(){
    console.log("rejected");
}






