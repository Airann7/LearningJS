var Task = function(name, priority, deadline){
    this.name = name;
    this.priority = priority;
    this.deadline = deadline;
}
Task.prototype.completed = function(){
    console.log(this.name + " is now completed!! Good job!!!");
}
Task.prototype.save = function(){
    console.log(this.name+" has been saved!");
}

var task1 = new Task('finish adv js techniques', 1, 'Sunday9');
task1.save();
task1.completed();