let scorestr=localStorage.getItem('score');
     let score =JSON.parse(scorestr) || {
        win:0,
        lost:0,
        tie:0,
        };
   
  let result1;
  let yourchoice;
  let random_Number;
  let computer_choice;
  function random_number_generate(){
   random_Number = Math.random() * 3;
    // console.log('computer choose'+random_Number);
    if(random_Number>0 && random_Number<=1){
        computer_choice='STONE';
    }
    else if(random_Number>1 && random_Number<=2){
       computer_choice = 'paper';
    }
   
    else {
        computer_choice='scissor';
    }
}
    
function result(){
//alert(your choice is:${yourchoice}, computer choice is:${computer_choice} --______-- win:${score.win},lost:${score.lost},tie:${score.tie});
localStorage.setItem('score',JSON.stringify(score));
document.querySelector('#youchoice').innerText=(`your choice is: ${yourchoice}`);
document.querySelector('#compchoice').innerText=(`computer choice is:${computer_choice}`);
document.querySelector('#Fresult1').innerText=(`Result:${result1}`);
document.querySelector('#Fresult').innerText=(`win:${score.win}   lost:${score.lost}   tie:${score.tie}`);

}

function resetscore(){
    if(score !== undefined){
        score = {
        win:0,
        lost:0,
        tie:0,
        };
    }
}