//Declare a class called CrewCandidate with a constructor that takes three parameters—name, mass, and scores. Note that scores will be an array of test results.

class CrewCandidate{
  constructor(name,mass,scores){
    this.name = name;
    this.mass = mass;
    this.scores = scores;
  }
  addScore(newScore){
    this.scores.push(newScore)
  }
  
  average() {
    let total =0;
    for (let i = 0; i < this.scores.length; i++) {
      total += this.scores[i];
    }
    return Math.round(total / this.scores.length*10)/10;
  }

status(){
  let average = this.average();
  let status="";

  if ( average >= 90){
    status ="Accepted";
  } 
  else if (average >= 80 && average < 89 ){
    status = 'Reserve';
  }
  else if (average >= 70 && average < 79){
    status = "Probationary";
  }
    else if(average < 70){
      status = "Rejected";
    }
    return `${this.name} earned an average test score of ${average}% and has a status of ${status}.`
  }
}  



let BubbaBear = new CrewCandidate('Bubba Bear', 135, [88,85,90]);

let MerryMaltese = new CrewCandidate('Merry Maltese', 1.5, [93,88,97]);

let GladGator = new CrewCandidate('Glad Gator', 225, [75,78,62]);

BubbaBear.addScore(83);

console.log(BubbaBear.status());
console.log(MerryMaltese.status());
console.log(GladGator.status());

//Add methods for adding scores, averaging scores and determining candidate status as described in the studio activity.


//Part 4 - Use the methods to boost Glad Gator’s status to Reserve or higher. How many tests will it take to reach Reserve status? How many to reach Accepted? Remember, scores cannot exceed 100%.