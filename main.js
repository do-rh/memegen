memeID = 'meme0'

var button = document.getElementById("generate_button");
    button.addEventListener('click', function() {
    //creating meme image
    var imageUrl = document.getElementById("url_box").value;
    var topText = document.getElementById("top_text").value;
    var bottomText = document.getElementById("bottom_text").value;
    
    var memeDiv = document.createElement('div');
    memeDiv.id = memeID;
    //var addDiv = document.createElement('div');
    //memeDiv.appendChild(addDiv);
    var lastElement = document.getElementById('placeholder');

    var newImg = document.createElement('img');
        newImg.src = imageUrl;
        newImg.classList.add('images')
    var memeTopText = document.createElement('div');
        memeTopText.classList.add('memeTopText');
        memeTopText.innerText = topText.toUpperCase();
        memeTopText.id = 'memeTopText';
    var memeBotText = document.createElement('div');
        memeBotText.classList.add('memeBotText');
        memeBotText.innerText = bottomText.toUpperCase();
        memeBotText.id = 'memeBotText';

    //adding it in
    memeDiv.appendChild(newImg)
    memeDiv.appendChild(memeTopText);
    memeDiv.appendChild(memeBotText);
    var deletebutton = document.createElement("button");
        deletebutton.innerHTML = "Delete Meme";
        deletebutton.classList.add('button');
        deletebutton.id = memeID + 'delete';
        deletebutton.addEventListener("click", function(){
            lastElement.removeChild(memeDiv);
        })
    memeDiv.appendChild(deletebutton);
    lastElement.insertAdjacentElement('beforeend', memeDiv);

    document.getElementById("url_box").value = ''
    document.getElementById("top_text").value = ''
    document.getElementById("bottom_text").value = ''
});




