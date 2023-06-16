const unreadMessages = document.querySelectorAll(".unread");
const unreadCount = document.getElementById("unread_count");
const allread = document.getElementById("read");
const dot_s = document.querySelectorAll(".dot");
unreadCount.innerText = unreadMessages.length;

unreadMessages.forEach((messages)=> {
        messages.addEventListener("click",() =>{
                messages.classList.remove("unread");
                const NunRead = document.querySelectorAll(".unread");
                unreadCount.innerText = NunRead.length;
        });
});

allread.addEventListener("click",()=> {
    unreadMessages.forEach( (messages) => {
        messages.classList.remove("unread");
    });
    const NunRead = document.querySelectorAll(".unread");
    unreadCount.innerHTML = NunRead.length;
} );

allread.addEventListener("click",()=> {
    dot_s.forEach( (messages) => {
        messages.classList.remove("dot");
    });
    const NunRead = document.querySelectorAll(".dot");
    unreadCount.innerHTML = NunRead.length;
} );

unreadMessages.forEach((messages)=> {
    messages.addEventListener("click",() =>{
            messages.classList.remove("dot");
            const NunRead = document.querySelectorAll(".unread");
            unreadCount.innerText = NunRead.length;
    });
});