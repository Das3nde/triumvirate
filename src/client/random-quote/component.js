import React from 'react';

const quotes = [
  'Very good, but brick not hit back',
  'I ain\'t got time to bleed',
  'You are one ugly motherfucker!',
  'MAC!',
  'We\'re all gonna die',
  'She says the jungle... it just came alive and took him',
  'What\'s the matter? CIA got you pushing too many pencils?',
  'If it bleeds, we can kill it',
  'This stuff will make you a god damn sexual tyrannosaurus, just like me',
  'Dillon - you son of a bitch!',
  'Time to let old painless out of the bag',
  'There\'s something out there waiting for us, and it ain\'t no man.',
  'Bunch of slack-jawed faggots around here',
  'Get to da choppa!',
  'Stick around',
  'I feel the need... the need for speed!',
  'Take me to bed or lose me forever',
  'You can be my wingman any time',
  'She\'s lost that loving feeling',
  'Sorry, Goose, but it\'s time to buzz the tower',
  'Remember, boys, no points for second place.',
  'This is what I call a target-rich environment',
  'You don\'t have time to think up there. If you think, you\'re dead.',
  'Let\'s turn and burn!',
  'Every time we go up there, it\'s like you\'re flying with a ghost',
  'I will fire when I am god damn good and ready! You got that?',
  'You are next!',
  'Oh, right, like put up your dukes.',
  'You break my record... now I break you, like I break your friend!',
  'What the hell is a Dim Mak?',
  'I ain\'t your pal, dickface',
  'Guess the Kumite starts one day earlier this year, huh fellas?',
  'You didn\'t flinch! You have fighting spirit!',
  'You cannot take katana sword by stealing, it is very special sword, you must earn it'
];

export default function RandomQuote() {
  const quote = quotes[Math.floor(Math.random() * quotes.length)];

  return (
    <span>
      {quote}
    </span>
  );
}
