const fetchProfile = () => {
    fetch("https://api.github.com/users/yogamhd")
        .then(response => {
            return response.json();
    })
    .then(data => {
        let getProfile = document.getElementById("profile");
        let newH1 = document.createElement("h1"); //buat elemen h1 baru
        let eachList = document.createElement("img"); //buat elemen img
        let newTextH1 = document.createTextNode(data.login);          
        let addH1 = newH1.appendChild(newTextH1);
        eachList.setAttribute("src", data.avatar_url);  //Tambah elemen h1 ke dalam id profile
        getProfile.appendChild(addH1)
        getProfile.appendChild(eachList);
    });
};

const fetchFollowing = () => {
    fetch("https://api.github.com/users/yogamhd/following")
        .then(response => {
            return response.json();
    })
    .then(data => {
        let getFollowing = document.getElementById("following-list");
        data.map(item => {
            let eachList = document.createElement("img");
            let textList = document.createTextNode(item.login);    
            eachList.setAttribute("src", item.avatar_url);
            eachList.appendChild(textList);
            getFollowing.appendChild(eachList);
        });
        
        console.log(data);
    });
};


const fetchFollowers = () => {
    fetch("https://api.github.com/users/yogamhd/followers")
        .then(response => {
            return response.json();
        })
        .then(data => {
            let getFollowers = document.getElementById("followers-list");
        data.map(item => {
            let eachList = document.createElement("img");
            let textList = document.createTextNode(item.login);    
            eachList.setAttribute("src", item.avatar_url);
            eachList.appendChild(textList);
            getFollowers.appendChild(eachList);
        });
            console.log(data);
        });
};

fetchProfile();
fetchFollowing();
fetchFollowers();