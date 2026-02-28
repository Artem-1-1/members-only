const deleteButton = document.querySelectorAll("button.delete-post");
const membershipLink = document.querySelector("a.join");

if (membershipLink) {
    membershipLink.addEventListener("click", e => {
        e.preventDefault();

        const secret = prompt(`Please enter the super secret password : "Odin-Project".`);

        if (secret === "Odin-Project") {

            fetch(`/join`, {
                method: "POST",
                redirect: "follow",
                headers: {
                    "Content-Type": "application/json",
                },
            })
            .then(response => {
                if (response.redirected) {
                    window.location.href = response.url;
                }
            })
            .catch(err => {
                console.error(err);
            });

        } else {
            alert("Wrong secret code! (Admit the truth)")
        }
    });
}

if (deleteButton.length) {
    const deletePost = (e) => {
        const postId = e.target.getAttribute("data-post-id");

        fetch(`/delete-post/${postId}`, {
            method: "POST",
            redirect: "follow",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({id: postId}),
        })
        .then(response => {
            if (response.redirected) {
                window.location.href = response.url;
            }
        })
        .catch(err => {
            console.error(err);
        });
    }

    deleteButton.forEach(button => {
        console.log(button);
        button.addEventListener("click", (e) => deletePost(e));
    });
}