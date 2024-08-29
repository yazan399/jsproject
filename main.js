
var body = document.querySelector("body");
var change=document.querySelector(".changeModeBtn");
function changed(){
    body.classList.toggle("dark");
    
}

change.onclick=changed;




async function fetchComments() {
    
        const response = await fetch('https://dummyjson.com/comments');
        const data = await response.json();

        const page=data.comments;


        const result =page.map(function(ele){

            return `
                <div class="col-md-4 mb-4">
                        <div class="card h-100">
                            <div class="card-body">
                            <h5 class="card-title">User Name: ${ele.user.username}</h5>
                            <p class="card-text">comment: ${ele.body}</p>
                            <p class="text-muted">Post ID: ${ele.postId}</p>
                        </div>
                    </div>
                </div>
            `;
            
        }).join('');
        document.querySelector(".comments-container").innerHTML=result;

}
fetchComments();






