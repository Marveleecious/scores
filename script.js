output = document.getElementById('output');
let scores = [60, 77, 38, 19, 59, 47, 23];



for(let m = 0; m < scores.length; m++) {
    let punishment = scores[m] - 5
    let manipulated = (punishment + scores[m]) / 2

    console.log(punishment)

    if (punishment > 50){
        output.innerHTML += punishment + "- you passed wonderfully. your previous score is " + scores[m] + " after manipulation <br> "

    }

    else if ((punishment + scores[m]) / 2 > 30){
        output.innerHTML += manipulated + "- you escaped my punishment because of my manipulated score. your previous score is " + scores[m] + "  after manipulation <br>"
    }

    else {
        output.innerHTML += punishment + "- you failed badly. your previous score is " + scores[m] + "  after manipulation <br>"
    }
}

output2 = document.getElementById('output2');
let score = [60, 77, 38, 19, 59, 47, 23];

let v=0;
while(v < score.length){
    let punishment = scores[v] - 5
    let manipulated = (punishment + scores[v]) / 2

    if (punishment > 50){
        output.innerHTML += punishment + "- you passed wonderfully. your previous score is " + scores[v] + " after manipulation <br> "

    }

    else if ((punishment + scores[v]) / 2 > 30){
        output.innerHTML += manipulated + "- you escaped my punishment because of my manipulated score. your previous score is " + scores[v] + "  after manipulation <br>"
    }

    else {
        output.innerHTML += punishment + "- you failed badly. your previous score is " + scores[v] + "  after manipulation <br>"
    }
    v++
}
