// creating an Object

function Task(title, body, done){
    this.title = title;
    this.body = body;
    this.done = done;
    this.isDone = function () {
        if (this.done === true){
            alert("Task Done!")
        }
        return this.done;
    }
}



// $().ready();