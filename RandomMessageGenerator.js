import { createInterface } from "readline";

const rl = createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question('\nWhat do you want to do today? ', Response);

function Response(answer) {
    let response;
    switch(answer) {
        case answer.match(/don't know|dont know|not sure|no idea/)?.input:
            response = 'The world is your oyster!';
            break;
        default:
            response = 'Dang you got it all figured out!';
            break;
    }
    console.log(`\n${response}\n`);
    Suggestions();
}

const intros = ['Hmm... I have an idea, you could', 'Alright, here\'s what we\'re gonnd do..',
    'Quit stalling, you need to', 'How about you'];
const activities = ['eat something', 'join a club', 'take a walk', 'call a friend'];
const outros = ['remember to have fun', 'no time like the present', 'take your time, there\'s no rush'];
const randomPhrase = phrases => phrases[Math.floor(Math.random() * phrases.length)];

function Suggestions() {
    const intro = randomPhrase(intros);
    const activity = randomPhrase(activities);
    const outro = randomPhrase(outros);
    console.log(intro + ' ' + activity + '... ' + outro + '!');
    rl.close();
}