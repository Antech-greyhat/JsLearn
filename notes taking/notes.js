const addBtn = document.querySelector("#addBtn");
const main = document.querySelector("#main");

addBtn.addEventListener("click",addNote);

function addNote(){
    const mote = document.createElement("div");
    note.classList.add("note");
    note.innerHtml = `
    <div class="note">
            <div class="tool">
                <i class="save fas fa-save"></i>
                <i class="trash fas fa-trash"></i>
            </div>
            <textarea></textarea>
        </div> 
    `;

    const save = note.querySelector(".save");
    const trash = note.querySelector(".trash");
    const textArea = note.querySelector("textarea");

    save.addEventListener("click",saveNotes);
    textArea.addEventListener("input",saveNotes);
    trash.addEventListener("click",()=>{
        note.remove();
        saveNotes();
    })


    main.appendChild(note);
}

functionsaveNotes(){
    const notes = document.querySelector(".note textarea");
    const data = Array.from(notes).map(note => note.value);
    console.log(notes,data);

    if(data.length === 0 ){
        localStorage.removeItem("notes")
    }else{
        localStorage.setItem("notes",JSON.stringify(data));
    }
}

functionloadNotes(){
    const lsNotes = JSON.parse(localStorage.getItem("notes"));

    if(lsNotes !== null){
        lsNotes.forEach(noteText =>{
            addNote();

            const notes = document.querySelectorAll(".note textarea");
            const lastNote = notes[notes.lenght -1];
            lastNote.value = noteText;
        });
    }else{
        addNote();
    }
}

loadNotes();